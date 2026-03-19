import { getAllPages, getAllProviders, getPageBySlug, getRelatedPages, type Page } from "@/lib/data";
import { Metadata } from "next";
import { notFound } from "next/navigation";

export function generateStaticParams() {
  const pages = getAllPages();
  return pages.map((page) => ({
    slug: page.slug,
  }));
}

export function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Metadata {
  const page = getPageBySlug(params.slug);
  if (!page) return {};

  // Strip trailing "| InStoreIndex" from meta_title to avoid duplication
  // with the layout template ("%s | InStoreIndex")
  const rawTitle = page.meta_title || page.title;
  const title = rawTitle.replace(/\s*\|\s*InStoreIndex\s*$/, '');

  return {
    title,
    description: page.meta_description || page.intro.slice(0, 155),
    alternates: {
      canonical: `https://instoreindex.com/${page.slug}/`,
    },
    openGraph: {
      title: rawTitle,
      description: page.meta_description || page.intro.slice(0, 155),
      url: `https://instoreindex.com/${page.slug}/`,
      type: 'article',
      siteName: 'InStoreIndex',
    },
    twitter: {
      card: 'summary',
      title: rawTitle,
      description: page.meta_description || page.intro.slice(0, 155),
    },
  };
}

function markdownToHtml(md: string): string {
  let html = md;

  const lines = html.split('\n');
  const result: string[] = [];
  let inTable = false;
  let tableHeader = false;

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    if (line.trim().startsWith('|') && line.trim().endsWith('|')) {
      if (!inTable) {
        inTable = true;
        tableHeader = true;
        result.push('<table>');
        result.push('<thead>');
      }
      if (line.replace(/[\s|:-]/g, '').length === 0) {
        if (tableHeader) {
          result.push('</thead>');
          result.push('<tbody>');
          tableHeader = false;
        }
        continue;
      }
      const cells = line.split('|').filter(c => c.trim() !== '');
      const tag = tableHeader ? 'th' : 'td';
      result.push('<tr>');
      for (const cell of cells) {
        result.push(`<${tag}>${cell.trim()}</${tag}>`);
      }
      result.push('</tr>');
      continue;
    } else if (inTable) {
      inTable = false;
      result.push(tableHeader ? '</thead>' : '</tbody>');
      result.push('</table>');
    }
    result.push(line);
  }
  if (inTable) {
    result.push(tableHeader ? '</thead>' : '</tbody>');
    result.push('</table>');
  }

  html = result.join('\n');
  html = html.replace(/^### (.+)$/gm, '<h3>$1</h3>');
  html = html.replace(/^## (.+)$/gm, '<h2>$1</h2>');
  html = html.replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>');
  html = html.replace(/\*(.+?)\*/g, '<em>$1</em>');
  html = html.replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2">$1</a>');
  html = html.replace(/^- (.+)$/gm, '<li>$1</li>');
  html = html.replace(/(<li>.*<\/li>\n?)+/g, (match) => `<ul>${match}</ul>`);
  html = html.replace(/^(?!<[a-z/])((?!^$).+)$/gm, '<p>$1</p>');
  html = html.replace(/<p>\s*<\/p>/g, '');
  html = html.replace(/\n{3,}/g, '\n\n');

  return html;
}

const QA_SLUG_PREFIXES = ['what-is-', 'how-to-', 'is-', 'do-i-', 'are-there-'];

function extractDirectAnswer(page: Page): string | null {
  if (page.page_type !== 'question') return null;
  if (!QA_SLUG_PREFIXES.some(pf => page.slug.startsWith(pf))) return null;

  const detailedMatch = page.body_content.match(
    /## Detailed Answer\n+([\s\S]*?)(?=\n## [A-Z])/
  ) || page.body_content.match(
    /## Detailed Answer\n+([\s\S]*)$/
  );
  if (!detailedMatch) return null;

  const content = detailedMatch[1].trim();

  // Try to find the first real paragraph (not a heading, bullet, or table row)
  for (const line of content.split('\n')) {
    const l = line.trim();
    if (!l || l.startsWith('#') || l.startsWith('-') || l.startsWith('|') || l.startsWith('*')) continue;
    return l.replace(/\*\*(.+?)\*\*/g, '$1').replace(/\*(.+?)\*/g, '$1');
  }

  // Fallback: collect first 2-3 bullet points into a sentence
  const bullets = content.split('\n')
    .filter(l => l.trim().startsWith('- '))
    .slice(0, 3)
    .map(l => l.trim().replace(/^- /, '').replace(/\*\*(.+?)\*\*/g, '$1').replace(/\*(.+?)\*/g, '$1'));
  if (bullets.length > 0) return bullets.join('. ') + '.';

  return null;
}

function getPillarHub(pillar: string): { name: string; url: string } {
  const hubs: Record<string, { name: string; url: string }> = {
    music: { name: 'Background Music', url: '/background-music/' },
    signage: { name: 'Digital Signage', url: '/digital-signage/' },
    rmn: { name: 'Retail Media Networks', url: '/retail-media-networks/' },
    general: { name: 'Guides', url: '/guides/' },
  };
  return hubs[pillar] || { name: 'Guides', url: '/guides/' };
}

function getBreadcrumbTrail(page: Page): { name: string; url?: string }[] {
  const pillarHub = getPillarHub(page.pillar);

  // Route to correct parent hub based on page type
  // Provider-centric pages → /providers/
  // Pillar-specific content → pillar hub
  // Guides → /guides/
  // Glossary → /glossary/
  switch (page.page_type) {
    case 'vs':
    case 'provider_profile':
    case 'alternatives':
    case 'pricing':
    case 'provider_vertical':
    case 'provider_service':
      return [
        { name: 'Home', url: 'https://instoreindex.com/' },
        { name: 'Providers', url: 'https://instoreindex.com/providers/' },
        { name: page.h1 },
      ];
    case 'guide':
      return [
        { name: 'Home', url: 'https://instoreindex.com/' },
        { name: 'Guides', url: 'https://instoreindex.com/guides/' },
        { name: page.h1 },
      ];
    case 'glossary':
      return [
        { name: 'Home', url: 'https://instoreindex.com/' },
        { name: 'Glossary', url: 'https://instoreindex.com/glossary/' },
        { name: page.h1 },
      ];
    case 'vertical':
    case 'question':
    case 'roundup':
    case 'city':
    case 'state_licensing':
    default:
      return [
        { name: 'Home', url: 'https://instoreindex.com/' },
        { name: pillarHub.name, url: `https://instoreindex.com${pillarHub.url}` },
        { name: page.h1 },
      ];
  }
}

function PageTypeBadge({ type }: { type: string }) {
  const colors: Record<string, string> = {
    vs: 'bg-purple-500/20 text-purple-300', vertical: 'bg-green-500/20 text-green-300',
    question: 'bg-blue-500/20 text-blue-300', provider_profile: 'bg-orange-500/20 text-orange-300',
    guide: 'bg-yellow-500/20 text-yellow-300', roundup: 'bg-pink-500/20 text-pink-300',
    alternatives: 'bg-red-500/20 text-red-300', pricing: 'bg-emerald-500/20 text-emerald-300',
    provider_vertical: 'bg-teal-500/20 text-teal-300', provider_service: 'bg-cyan-500/20 text-cyan-300',
    city: 'bg-indigo-500/20 text-indigo-300', state_licensing: 'bg-amber-500/20 text-amber-300',
    glossary: 'bg-gray-500/20 text-gray-300',
  };
  const labels: Record<string, string> = {
    vs: 'Comparison', vertical: 'Industry Guide', question: 'Buyer Question',
    provider_profile: 'Provider Review', guide: 'Complete Guide', roundup: 'Best Of',
    alternatives: 'Alternatives', pricing: 'Pricing', provider_vertical: 'Provider Solution',
    provider_service: 'Provider Service', city: 'City Guide', state_licensing: 'Licensing Guide',
    glossary: 'Glossary',
  };
  return (
    <span className={`inline-block px-2.5 py-1 rounded-full text-xs font-medium ${colors[type] || 'bg-gray-500/20 text-gray-300'}`}>
      {labels[type] || type}
    </span>
  );
}

export default function SlugPage({ params }: { params: { slug: string } }) {
  const page = getPageBySlug(params.slug);
  if (!page) notFound();

  const relatedPages = getRelatedPages(page);
  const breadcrumbTrail = getBreadcrumbTrail(page);
  const bodyHtml = markdownToHtml(page.body_content);
  const faqs = page.faq_questions || [];
  const directAnswer = extractDirectAnswer(page);

  // Build ItemList schema for roundup ("Best Of") pages
  let itemListSchema: Record<string, unknown> | null = null;
  if (page.page_type === 'roundup') {
    const providers = getAllProviders();
    const providerSlugMap = new Map(providers.map(p => [p.name.toLowerCase(), p.slug]));
    const ranked = Array.from(
      page.body_content.matchAll(/^### (\d+)\. (.+)$/gm)
    ).map(m => ({ position: parseInt(m[1], 10), name: m[2] }));

    if (ranked.length > 0) {
      itemListSchema = {
        '@context': 'https://schema.org',
        '@type': 'ItemList',
        name: page.h1,
        url: `https://instoreindex.com/${page.slug}/`,
        numberOfItems: ranked.length,
        itemListElement: ranked.map(r => ({
          '@type': 'ListItem',
          position: r.position,
          name: r.name,
          url: `https://instoreindex.com/${providerSlugMap.get(r.name.toLowerCase()) || r.name.toLowerCase().replace(/\s+/g, '-')}-review/`,
        })),
      };
    }
  }

  // Build HowTo schema for how-to and guide pages
  let howToSchema: Record<string, unknown> | null = null;
  if (page.slug.includes('how-to') || page.slug.endsWith('-guide')) {
    const headingLevel = page.page_type === 'guide' ? '###' : '##';
    const pattern = new RegExp(`^${headingLevel} (.+)$`, 'gm');
    const sections = page.body_content.split(pattern);
    // sections alternates: [textBefore, heading1, textAfter1, heading2, textAfter2, ...]
    const steps: { name: string; text: string }[] = [];
    for (let i = 1; i < sections.length; i += 2) {
      const name = sections[i].trim();
      const body = (sections[i + 1] || '').trim();
      // Get first non-empty, non-heading, non-list line as summary
      const firstParagraph = body
        .split('\n')
        .find(l => l.trim() && !l.startsWith('#') && !l.startsWith('-') && !l.startsWith('|'));
      if (firstParagraph) {
        steps.push({
          name,
          text: firstParagraph.replace(/\*\*(.+?)\*\*/g, '$1').replace(/\*(.+?)\*/g, '$1').trim(),
        });
      }
    }

    if (steps.length > 0) {
      howToSchema = {
        '@context': 'https://schema.org',
        '@type': 'HowTo',
        name: page.h1,
        description: page.meta_description || page.intro.slice(0, 155),
        step: steps.map((s, i) => ({
          '@type': 'HowToStep',
          position: i + 1,
          name: s.name,
          text: s.text,
        })),
      };
    }
  }

  const faqSchema = faqs.length > 0 ? {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map((faq) => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": { "@type": "Answer", "text": faq.answer },
    })),
  } : null;

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": breadcrumbTrail.map((crumb, idx) => {
      const item: Record<string, unknown> = {
        "@type": "ListItem",
        "position": idx + 1,
        "name": crumb.name,
      };
      // Per Google spec: last item doesn't need "item" URL
      if (crumb.url) {
        item["item"] = crumb.url;
      }
      return item;
    }),
  };

  // For visual breadcrumb, use the middle crumb(s) — everything between Home and the page itself
  const middleCrumbs = breadcrumbTrail.slice(1, -1);

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      {faqSchema && <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />}
      {itemListSchema && <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListSchema) }} />}
      {howToSchema && <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }} />}

      <article className="max-w-4xl mx-auto px-4 sm:px-6 py-10">
        <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-sm text-gray-600 mb-6">
          <a href="/" className="hover:text-gray-400 no-underline">Home</a>
          {middleCrumbs.map((crumb, idx) => (
            <span key={idx} className="flex items-center gap-2">
              <span>/</span>
              {crumb.url ? (
                <a href={crumb.url.replace('https://instoreindex.com', '')} className="text-gray-500 hover:text-gray-400 no-underline">{crumb.name}</a>
              ) : (
                <span className="text-gray-500">{crumb.name}</span>
              )}
            </span>
          ))}
          <span>/</span>
          <span className="text-gray-400 truncate max-w-[200px]" title={page.h1}>{page.h1}</span>
        </nav>

        <header className="mb-8">
          <div className="flex items-center gap-3 mb-4">
            <PageTypeBadge type={page.page_type} />
            <span className="text-xs text-gray-600 uppercase tracking-wide">{middleCrumbs[0]?.name || 'In-Store Media'}</span>
          </div>
          <h1 className="text-2xl sm:text-4xl font-bold text-white leading-tight mb-4">{page.h1}</h1>
          {directAnswer ? (
            <div className="text-lg text-gray-300 leading-relaxed border-l-4 border-accent pl-5 py-1">{directAnswer}</div>
          ) : (
            <div className="text-lg text-gray-300 leading-relaxed border-l-4 border-accent pl-5 py-1">{page.intro}</div>
          )}
        </header>

        <div className="prose-content" dangerouslySetInnerHTML={{ __html: bodyHtml }} />

        {faqs.length > 0 && (
          <section className="mt-12 border-t border-navy-800 pt-10">
            <h2 className="text-xl font-bold text-white mb-6">Frequently Asked Questions</h2>
            <div className="space-y-6">
              {faqs.map((faq, idx) => (
                <div key={idx} className="bg-navy-900 border border-navy-800 rounded-lg p-5">
                  <h3 className="text-white font-semibold mb-2">{faq.question}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">{faq.answer}</p>
                </div>
              ))}
            </div>
          </section>
        )}

        {relatedPages.length > 0 && (
          <section className="mt-12 border-t border-navy-800 pt-10">
            <h2 className="text-xl font-bold text-white mb-6">Related Research</h2>
            <div className="grid sm:grid-cols-2 gap-3">
              {relatedPages.map((rp) => (
                <a key={rp.slug} href={`/${rp.slug}/`} className="flex items-start gap-3 p-4 bg-navy-900 border border-navy-800 rounded-lg hover:border-accent/40 transition-colors no-underline group">
                  <PageTypeBadge type={rp.page_type} />
                  <div>
                    <h3 className="text-sm text-white font-medium group-hover:text-accent-light transition-colors">{rp.h1}</h3>
                    <p className="text-xs text-gray-600 mt-1 line-clamp-1">{rp.intro.slice(0, 80)}...</p>
                  </div>
                </a>
              ))}
            </div>
          </section>
        )}

        <section className="mt-12 bg-navy-900 border border-navy-800 rounded-lg p-6 text-center">
          <p className="text-gray-400 text-sm mb-3">Looking for the right in-store media provider?</p>
          <div className="flex flex-wrap gap-3 justify-center">
            <a href="/providers/" className="px-5 py-2.5 bg-accent hover:bg-accent-dark text-white text-sm font-medium rounded-lg transition-colors no-underline">Compare All Providers</a>
            <a href="/guides/" className="px-5 py-2.5 bg-navy-800 hover:bg-navy-700 text-white text-sm font-medium rounded-lg transition-colors no-underline">Read the Complete Guides</a>
          </div>
        </section>
      </article>
    </>
  );
}
