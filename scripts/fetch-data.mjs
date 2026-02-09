// scripts/fetch-data.mjs
// Pre-fetches all data from Supabase into local JSON files for the build

import { createClient } from '@supabase/supabase-js';
import { writeFileSync, mkdirSync } from 'fs';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || 'https://lzzmeqfydaxflcyczjal.supabase.co';
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imx6em1lcWZ5ZGF4ZmxjeWN6amFsIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzA2NDEwNzMsImV4cCI6MjA4NjIxNzA3M30.PRBBDF9SQuQHGfgup8fzB_IBIL1IVedXCiyxPsycdmo';

const supabase = createClient(supabaseUrl, supabaseKey);

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

  return pages;
}

async function main() {
  console.log('Fetching data from Supabase...');

  mkdirSync('data', { recursive: true });

  // Pages
  const pages = await fetchAllPages();
  writeFileSync('data/pages.json', JSON.stringify(pages));
  console.log(`Pages: ${pages.length}`);

  // Providers
  const { data: providers } = await supabase.from('providers').select('*').order('name');
  writeFileSync('data/providers.json', JSON.stringify(providers || []));
  console.log(`Providers: ${(providers || []).length}`);

  // Categories
  const { data: categories } = await supabase.from('categories').select('*').order('name');
  writeFileSync('data/categories.json', JSON.stringify(categories || []));
  console.log(`Categories: ${(categories || []).length}`);

  console.log('Data fetch complete!');
}

main().catch(console.error);
