import { readFileSync, writeFileSync } from 'fs';

/**
 * Deterministic pseudo-random number generator seeded by slug hash.
 * Returns a function that produces numbers in [0, 1) on each call.
 */
function seededRng(seed) {
  let h = 0;
  for (let i = 0; i < seed.length; i++) {
    h = ((h << 5) - h + seed.charCodeAt(i)) | 0;
  }
  return function () {
    h = (h * 1664525 + 1013904223) | 0;
    return ((h >>> 0) / 4294967296);
  };
}

/** Shuffle array in-place using a seeded RNG */
function shuffle(arr, rng) {
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(rng() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

function main() {
  console.log('Generating related links...');
  const pages = JSON.parse(readFileSync('data/pages.json', 'utf-8'));

  // Build lookup indexes
  const byPillar = {};      // pillar -> Page[]
  const byType = {};         // page_type -> Page[]
  const byVertical = {};     // target_vertical -> Page[]
  const vsProviderIndex = {};// provider slug fragment -> vs Page[]

  for (const p of pages) {
    (byPillar[p.pillar] ||= []).push(p);
    (byType[p.page_type] ||= []).push(p);
    if (p.target_vertical) {
      (byVertical[p.target_vertical] ||= []).push(p);
    }
    // Index vs pages by each provider slug in the comparison
    if (p.page_type === 'vs') {
      const parts = p.slug.split('-vs-');
      for (const part of parts) {
        (vsProviderIndex[part] ||= []).push(p);
      }
    }
  }

  const result = {};

  for (const page of pages) {
    const rng = seededRng(page.slug);
    const seen = new Set([page.slug]);
    const related = [];

    function addCandidates(candidates, limit) {
      const pool = candidates.filter(c => !seen.has(c.slug));
      shuffle(pool, rng);
      for (const c of pool) {
        if (related.length >= limit) break;
        related.push(c.slug);
        seen.add(c.slug);
      }
    }

    // 1. For vs pages: find other vs pages featuring the same providers
    if (page.page_type === 'vs') {
      const parts = page.slug.split('-vs-');
      const vsMatches = [];
      for (const part of parts) {
        for (const vp of (vsProviderIndex[part] || [])) {
          if (!seen.has(vp.slug)) vsMatches.push(vp);
        }
      }
      addCandidates(vsMatches, 5);
    }

    // 2. Same pillar + different page type (cross-type linking)
    if (related.length < 5) {
      const crossType = (byPillar[page.pillar] || []).filter(
        p => p.page_type !== page.page_type
      );
      addCandidates(crossType, 5);
    }

    // 3. Same target vertical
    if (related.length < 5 && page.target_vertical) {
      const sameVertical = (byVertical[page.target_vertical] || []).filter(
        p => p.slug !== page.slug
      );
      addCandidates(sameVertical, 5);
    }

    // 4. Same page type + different pillar (cross-pillar linking)
    if (related.length < 5) {
      const crossPillar = (byType[page.page_type] || []).filter(
        p => p.pillar !== page.pillar
      );
      addCandidates(crossPillar, 5);
    }

    // 5. Fill remaining from same pillar
    if (related.length < 5) {
      addCandidates(byPillar[page.pillar] || [], 5);
    }

    result[page.slug] = related.slice(0, 5);
  }

  writeFileSync('data/related-links.json', JSON.stringify(result, null, 2));
  console.log(`Related links generated for ${Object.keys(result).length} pages`);
}

main();
