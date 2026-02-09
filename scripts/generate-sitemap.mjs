import { readFileSync, writeFileSync } from 'fs';

function main() {
  console.log('Generating sitemap...');
  const pages = JSON.parse(readFileSync('data/pages.json', 'utf-8'));
  const today = new Date().toISOString().split('T')[0];

  const priorities = {
    guide: '1.0', roundup: '0.9', provider_profile: '0.8', vs: '0.7',
    vertical: '0.7', question: '0.6', alternatives: '0.6', pricing: '0.6',
    provider_vertical: '0.5', provider_service: '0.5', city: '0.5',
    state_licensing: '0.5', glossary: '0.4',
  };

  const hubPages = [
    { loc: '', priority: '1.0', changefreq: 'daily' },
    { loc: 'providers', priority: '0.9', changefreq: 'weekly' },
    { loc: 'guides', priority: '0.9', changefreq: 'weekly' },
    { loc: 'background-music', priority: '0.9', changefreq: 'weekly' },
    { loc: 'digital-signage', priority: '0.9', changefreq: 'weekly' },
    { loc: 'retail-media-networks', priority: '0.9', changefreq: 'weekly' },
    { loc: 'glossary', priority: '0.7', changefreq: 'monthly' },
  ];

  let xml = '<?xml version="1.0" encoding="UTF-8"?>\n';
  xml += '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n';

  for (const hub of hubPages) {
    xml += `  <url>\n    <loc>https://instoreindex.com/${hub.loc}${hub.loc ? '/' : ''}</loc>\n    <lastmod>${today}</lastmod>\n    <changefreq>${hub.changefreq}</changefreq>\n    <priority>${hub.priority}</priority>\n  </url>\n`;
  }

  for (const page of pages) {
    const lastmod = page.updated_at ? page.updated_at.split('T')[0] : today;
    const priority = priorities[page.page_type] || '0.5';
    xml += `  <url>\n    <loc>https://instoreindex.com/${page.slug}/</loc>\n    <lastmod>${lastmod}</lastmod>\n    <changefreq>monthly</changefreq>\n    <priority>${priority}</priority>\n  </url>\n`;
  }

  xml += '</urlset>\n';
  writeFileSync('out/sitemap.xml', xml);
  console.log(`Sitemap generated: ${hubPages.length + pages.length} URLs`);
}

main();
