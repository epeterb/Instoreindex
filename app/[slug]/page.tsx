import { getAllPages, getPageBySlug, getRelatedPages, type Page } from "@/lib/data";
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

  return {
    title: page.meta_title || page.title,
    description: page.meta_description || page.intro.slice(0, 155),
    alternates: {
      canonical: `https://instoreindex.com/${page.slug}/`,
    },
    openGraph: {
      title: page.meta_title || page.title,
      description: page.meta_description || page.intro.slice(0, 155),
      url: `https://instoreindex.com/${page.slug}/`,
      type: 'article',
      siteName: 'InStoreIndex',
    },
    twitter: {
      card: 'summary',
      title: page.meta_title || page.title,
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
  html = html.replace(/^- (.+)$/gm, '<li>$1</li>');
  html = html.replace(/(<li>.*<\/li>\n?)+/g, (match) => `<ul>${match}</ul>`);
  html = html.replace(/^(?!<[a-z/])((?!^$).+)$/gm, '<p>$1</p>');
  html = html.replace(/<p>\s*<\/p>/g, '');
  html = html.replace(/\n{3,}/g, '\n\n');

  return html;
}

function getBreadcrumb(page: Page) {
  const pillarNames: Record<string, string> = {
    music: 'Background Music', signage: 'Digital Signage', rmn: 'Retail Media Networks', general: 'In-Store Media',
  };
  const typeNames: Record<string, string> = {
    vs: 'Comparisons', comparison: 'Comparisons', vertical: 'Industry Solutions',
    question: 'Buyer Questions', provider_profile: 'Providers', guide: 'Guides',
    roundup: 'Best Of', alternatives: 'Alternatives', pricing: 'Pricing',
    provider_vertical: 'Provider Solutions', provider_service: 'Provider Services',
    city: 'By City', state_licensing: 'Licensing', glossary: 'Glossary',
  };
  return {
    pillar: pillarNames[page.pillar] || 'In-Store Media',
    type: typeNames[page.page_type] || 'Research',
  };
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
  const breadcrumb = getBreadcrumb(page);
  const bodyHtml = markdownToHtml(page.body_content);
  const faqs = page.faq_questions || [];

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
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://instoreindex.com/" },
      { "@type": "ListItem", "position": 2, "name": breadcrumb.pillar,
        "item": `https://instoreindex.com/${page.pillar === 'music' ? 'background-music' : page.pillar === 'signage' ? 'digital-signage' : page.pillar === 'rmn' ? 'retail-media-networks' : 'guides'}/` },
      { "@type": "ListItem", "position": 3, "name": page.h1, "item": `https://instoreindex.com/${page.slug}/` },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      {faqSchema && <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />}

      <article className="max-w-4xl mx-auto px-4 sm:px-6 py-10">
        <nav className="flex items-center gap-2 text-sm text-gray-600 mb-6">
          <a href="/" className="hover:text-gray-400 no-underline">Home</a>
          <span>/</span>
          <span className="text-gray-500">{breadcrumb.pillar}</span>
          <span>/</span>
          <span className="text-gray-400">{breadcrumb.type}</span>
        </nav>

        <header className="mb-8">
          <div className="flex items-center gap-3 mb-4">
            <PageTypeBadge type={page.page_type} />
            <span className="text-xs text-gray-600 uppercase tracking-wide">{breadcrumb.pillar}</span>
          </div>
          <h1 className="text-2xl sm:text-4xl font-bold text-white leading-tight mb-4">{page.h1}</h1>
          <div className="text-lg text-gray-300 leading-relaxed border-l-4 border-accent pl-5 py-1">{page.intro}</div>
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
