import { readFileSync } from 'fs';

const pages = JSON.parse(readFileSync('data/pages.json', 'utf-8'));
const linked = new Set();

// /background-music/ — music pillar
pages.filter(p => p.pillar === 'music').forEach(p => {
  if (['question','vertical','provider_vertical','vs','guide','roundup','city','state_licensing','provider_service'].includes(p.page_type))
    linked.add(p.slug);
});

// /digital-signage/ — signage pillar
pages.filter(p => p.pillar === 'signage').forEach(p => {
  if (['question','vertical','provider_vertical','vs','guide','roundup','provider_service'].includes(p.page_type))
    linked.add(p.slug);
});

// /retail-media-networks/ — rmn pillar
pages.filter(p => p.pillar === 'rmn').forEach(p => {
  if (['question','guide','roundup','vertical','provider_vertical','vs','provider_service','glossary'].includes(p.page_type))
    linked.add(p.slug);
});

// /providers/ — all pillars
pages.forEach(p => {
  if (['vs','provider_profile','alternatives','pricing','provider_vertical','provider_service'].includes(p.page_type))
    linked.add(p.slug);
});

// /guides/ — all pillars
pages.forEach(p => {
  if (['guide','roundup'].includes(p.page_type)) linked.add(p.slug);
});

// /glossary/ — all pillars
pages.forEach(p => {
  if (p.page_type === 'glossary') linked.add(p.slug);
});

// /guides/ — general pillar questions and verticals
pages.filter(p => p.pillar === 'general').forEach(p => {
  if (['question', 'vertical'].includes(p.page_type)) linked.add(p.slug);
});

const orphans = pages.filter(p => !linked.has(p.slug));
console.log('Total pages: ' + pages.length);
console.log('Linked from hubs: ' + linked.size);
console.log('Still orphaned: ' + orphans.length);

if (orphans.length > 0) {
  const byType = {};
  orphans.forEach(p => {
    const k = p.pillar + '/' + p.page_type;
    byType[k] = (byType[k] || 0) + 1;
  });
  console.log('Orphan breakdown:', JSON.stringify(byType, null, 2));
  console.log('Examples:', orphans.slice(0, 10).map(p => p.slug + ' (' + p.pillar + '/' + p.page_type + ')'));
}
