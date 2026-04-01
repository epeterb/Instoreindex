import { MetadataRoute } from 'next';
import { getAllPages } from '@/lib/data';

const BASE_URL = 'https://instoreindex.com';

// Static pages with manually set dates (last time these were meaningfully updated)
const STATIC_PAGES: MetadataRoute.Sitemap = [
  {
    url: `${BASE_URL}/`,
    lastModified: '2026-02-28',
    changeFrequency: 'daily',
    priority: 1.0,
  },
  {
    url: `${BASE_URL}/providers/`,
    lastModified: '2026-02-28',
    changeFrequency: 'weekly',
    priority: 0.9,
  },
  {
    url: `${BASE_URL}/guides/`,
    lastModified: '2026-02-28',
    changeFrequency: 'weekly',
    priority: 0.9,
  },
  {
    url: `${BASE_URL}/background-music/`,
    lastModified: '2026-02-28',
    changeFrequency: 'weekly',
    priority: 0.9,
  },
  {
    url: `${BASE_URL}/digital-signage/`,
    lastModified: '2026-02-28',
    changeFrequency: 'weekly',
    priority: 0.9,
  },
  {
    url: `${BASE_URL}/retail-media-networks/`,
    lastModified: '2026-02-28',
    changeFrequency: 'weekly',
    priority: 0.9,
  },
  {
    url: `${BASE_URL}/glossary/`,
    lastModified: '2026-02-28',
    changeFrequency: 'monthly',
    priority: 0.7,
  },
  {
    url: `${BASE_URL}/about/`,
    lastModified: '2026-03-19',
    changeFrequency: 'monthly',
    priority: 0.6,
  },
];

const PAGE_TYPE_PRIORITY: Record<string, number> = {
  guide: 0.8,
  roundup: 0.7,
  vs: 0.6,
  question: 0.5,
  vertical: 0.6,
  provider: 0.7,
};

export default function sitemap(): MetadataRoute.Sitemap {
  const pages = getAllPages();
  const today = new Date();

  const staticPages = STATIC_PAGES.map((p) => ({ ...p, lastModified: today }));

  const dynamicPages: MetadataRoute.Sitemap = pages.map((page) => ({
    url: `${BASE_URL}/${page.slug}/`,
    lastModified: today,
    changeFrequency: 'monthly' as const,
    priority: PAGE_TYPE_PRIORITY[page.page_type] ?? 0.5,
  }));

  return [...staticPages, ...dynamicPages];
}
