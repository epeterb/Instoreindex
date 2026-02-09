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

  // 2. Same pillar, different page type
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

  return related.slice(0, 5);
}

export function getPagesByType(pages: Page[], type: string): Page[] {
  return pages.filter(p => p.page_type === type);
}

export function getPagesByPillar(pages: Page[], pillar: string): Page[] {
  return pages.filter(p => p.pillar === pillar);
}
