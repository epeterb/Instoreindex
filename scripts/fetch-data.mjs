import { createClient } from '@supabase/supabase-js';
import { writeFileSync, mkdirSync } from 'fs';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || 'https://lzzmeqfydaxflcyczjal.supabase.co';
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imx6em1lcWZ5ZGF4ZmxjeWN6amFsIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzA2NDEwNzMsImV4cCI6MjA4NjIxNzA3M30.PRBBDF9SQuQHGfgup8fzB_IBIL1IVedXCiyxPsycdmo';

const supabase = createClient(supabaseUrl, supabaseKey);

function parseJSONField(value) {
  if (value === null || value === undefined) return null;
  if (Array.isArray(value) || typeof value === 'object') return value;
  if (typeof value === 'string') {
    try { return JSON.parse(value); } catch { return value; }
  }
  return value;
}

function fixPageFields(page) {
  return {
    ...page,
    faq_questions: parseJSONField(page.faq_questions),
    provider_ids: parseJSONField(page.provider_ids),
    related_page_ids: parseJSONField(page.related_page_ids),
  };
}

function fixProviderFields(provider) {
  return {
    ...provider,
    services: parseJSONField(provider.services),
    verticals: parseJSONField(provider.verticals),
  };
}

async function fetchAllPages() {
  const pages = [];
  let from = 0;
  const batchSize = 1000;

  while (true) {
    const { data, error } = await supabase
      .from('pages')
      .select('*')
      .range(from, from + batchSize - 1);

    if (error) { console.error('Error fetching pages:', error); break; }
    if (!data || data.length === 0) break;
    pages.push(...data);
    if (data.length < batchSize) break;
    from += batchSize;
  }

  return pages.map(fixPageFields);
}

async function main() {
  console.log('Fetching data from Supabase...');

  mkdirSync('data', { recursive: true });

  const pages = await fetchAllPages();
  writeFileSync('data/pages.json', JSON.stringify(pages));
  console.log('Pages: ' + pages.length);

  const { data: providers } = await supabase.from('providers').select('*').order('name');
  const fixedProviders = (providers || []).map(fixProviderFields);
  writeFileSync('data/providers.json', JSON.stringify(fixedProviders));
  console.log('Providers: ' + fixedProviders.length);

  const { data: categories } = await supabase.from('categories').select('*').order('name');
  writeFileSync('data/categories.json', JSON.stringify(categories || []));
  console.log('Categories: ' + (categories || []).length);

  console.log('Data fetch complete!');
}

main().catch(console.error);
