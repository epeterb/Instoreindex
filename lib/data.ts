import { readFileSync } from 'fs';
import { join } from 'path';

export interface Page {
  id: string;
  title: string;
  slug: string;
  page_type: string;
  category_id: string | null;
  pillar: string;
  meta_title: string | null;
  meta_description: string | null;
  h1: string;
  intro: string;
  body_content: string;
  faq_questions: { question: string; answer: string }[] | null;
  target_query: string | null;
  search_intent: string | null;
  target_vertical: string | null;
  provider_ids: string[] | null;
  related_page_ids: string[] | null;
  status: string;
  published_at: string | null;
  created_at: string;
  updated_at: string;
}

export interface Provider {
  id: string;
  name: string;
  slug: string;
  website: string | null;
  description: string | null;
  headquarters: string | null;
  founded_year: number | null;
  parent_company: string | null;
  services: string[];
  verticals: string[];
  company_size: string | null;
  pricing_model: string | null;
  key_differentiator: string | null;
  music_catalog_size: string | null;
  notable_clients: string | null;
}

export interface Category {
  id: string;
  name: string;
  slug: string;
  pillar: string;
  parent_category_id: string | null;
  description: string | null;
}

// Read from local JSON files (pre-fetched from Supabase)
let allPagesCache: Page[] | null = null;
let allProvidersCache: Provider[] | null = null;
let allCategoriesCache: Category[] | null = null;

function loadJSON<T>(filename: string): T {
  const filePath = join(process.cwd(), 'data', filename);
  const raw = readFileSync(filePath, 'utf-8');
  return JSON.parse(raw) as T;
}

export function getAllPages(): Page[] {
  if (allPagesCache) return allPagesCache;
  allPagesCache = loadJSON<Page[]>('pages.json');
  return allPagesCache;
}

export function getPageBySlug(slug: string): Page | null {
  const pages = getAllPages();
  return pages.find(p => p.slug === slug) || null;
}

export function getAllProviders(): Provider[] {
  if (allProvidersCache) return allProvidersCache;
  allProvidersCache = loadJSON<Provider[]>('providers.json');
  return allProvidersCache;
}

export function getAllCategories(): Category[] {
  if (allCategoriesCache) return allCategoriesCache;
  allCategoriesCache = loadJSON<Category[]>('categories.json');
  return allCategoriesCache;
}

export function getRelatedPages(page: Page): Page[] {
  const allPages = getAllPages();
  const related: Page[] = [];
  const seen = new Set<string>([page.slug]);

  // 1. Explicit related_page_ids
  const relatedIds = Array.isArray(page.related_page_ids) ? page.related_page_ids : [];
  if (relatedIds.length > 0) {
    for (const id of relatedIds) {
      const found = allPages.find(p => p.id === id);
      if (found && !seen.has(found.slug)) {
        related.push(found);
        seen.add(found.slug);
      }
    }
  }

  // For provider review pages, show diversified comparisons
  if (page.page_type === 'provider_profile' && related.length < 5) {
    const providerSlug = page.slug.replace(/-review$/, '');
    const vsPages = allPages.filter(p => p.page_type === 'vs');

    // 2a. Comparisons featuring THIS provider (up to 3)
    const thisProviderVs = vsPages.filter(
      p => p.slug.includes(providerSlug) && !seen.has(p.slug)
    );
    // Shuffle for variety across builds
    const shuffled = thisProviderVs.sort(() => {
      // Deterministic shuffle based on slug hash
      const hash = (s: string) => s.split('').reduce((a, c) => a + c.charCodeAt(0), 0);
      return hash(page.slug) % 2 === 0 ? 1 : -1;
    });
    for (const p of shuffled.slice(0, Math.min(3, 5 - related.length))) {
      related.push(p);
      seen.add(p.slug);
    }

    // 2b. Fill remaining with diverse comparisons (max 1 per provider)
    if (related.length < 5) {
      const providerCount = new Map<string, number>();
      // Count providers already in related
      for (const r of related) {
        const parts = r.slug.replace(/-vs-/g, '\n').split('\n');
        for (const part of parts) {
          providerCount.set(part, (providerCount.get(part) || 0) + 1);
        }
      }

      const otherVs = vsPages.filter(p => !seen.has(p.slug) && !p.slug.includes(providerSlug));
      for (const p of otherVs) {
        if (related.length >= 5) break;
        const parts = p.slug.split('-vs-');
        // Skip if any provider in this comparison already appears 2+ times
        const dominated = parts.some(part => (providerCount.get(part) || 0) >= 2);
        if (dominated) continue;
        related.push(p);
        seen.add(p.slug);
        for (const part of parts) {
          providerCount.set(part, (providerCount.get(part) || 0) + 1);
        }
      }
    }
  } else {
    // 2. Same pillar, different page type (non-review pages)
    if (related.length < 5) {
      const samePillar = allPages.filter(
        p => p.pillar === page.pillar && p.page_type !== page.page_type && !seen.has(p.slug)
      );
      for (const p of samePillar.slice(0, 5 - related.length)) {
        related.push(p);
        seen.add(p.slug);
      }
    }

    // 3. Cross-pillar linking
    if (related.length < 5) {
      const crossPillar = allPages.filter(
        p => p.page_type === page.page_type && p.pillar !== page.pillar && !seen.has(p.slug)
      );
      for (const p of crossPillar.slice(0, 5 - related.length)) {
        related.push(p);
        seen.add(p.slug);
      }
    }
  }

  return related.slice(0, 5);
}

let relatedLinksCache: Record<string, string[]> | null = null;

export function getRelatedLinksMap(): Record<string, string[]> {
  if (relatedLinksCache) return relatedLinksCache;
  relatedLinksCache = loadJSON<Record<string, string[]>>('related-links.json');
  return relatedLinksCache;
}

export function getRelatedPagesFromMap(page: Page): Page[] {
  const map = getRelatedLinksMap();
  const slugs = map[page.slug] || [];
  const allPages = getAllPages();
  const slugIndex = new Map(allPages.map(p => [p.slug, p]));
  return slugs.map(s => slugIndex.get(s)).filter((p): p is Page => !!p);
}

export function getPagesByType(pages: Page[], type: string): Page[] {
  return pages.filter(p => p.page_type === type);
}

export function getPagesByPillar(pages: Page[], pillar: string): Page[] {
  return pages.filter(p => p.pillar === pillar);
}
