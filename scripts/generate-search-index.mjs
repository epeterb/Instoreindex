import { readFileSync, writeFileSync } from 'fs';

function main() {
  console.log('Generating search index...');
  const pages = JSON.parse(readFileSync('data/pages.json', 'utf-8'));

  const index = pages.map(page => ({
    slug: page.slug,
    title: page.title,
    h1: page.h1,
    intro: (page.intro || '').substring(0, 200),
    type: page.page_type,
    pillar: page.pillar,
    description: page.meta_description || ''
  }));

  writeFileSync('public/search-index.json', JSON.stringify(index));
  console.log(`Search index generated: ${index.length} pages`);
}

main();
