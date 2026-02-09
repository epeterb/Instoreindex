import { getAllPages, getPagesByPillar } from "@/lib/data";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Retail Media Networks — Complete Resource',
  description: 'Everything you need to know about retail media networks: how they work, how to launch one, providers, measurement, and revenue models.',
  alternates: { canonical: 'https://instoreindex.com/retail-media-networks/' },
};

export default function RMNPage() {
  const allPages = getAllPages();
  const pages = getPagesByPillar(allPages, 'rmn');
  const questions = pages.filter(p => p.page_type === 'question');
  const guides = pages.filter(p => p.page_type === 'guide' || p.page_type === 'roundup');
  const verticals = pages.filter(p => p.page_type === 'vertical' || p.page_type === 'provider_vertical');
  const comparisons = pages.filter(p => p.page_type === 'vs');

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12">
      <h1 className="text-3xl font-bold text-white mb-2">Retail Media Networks</h1>
      <p className="text-gray-400 mb-10">{pages.length} pages of independent research on in-store retail media networks.</p>

      {guides.length > 0 && (
        <section className="mb-12">
          <h2 className="text-xl font-bold text-white mb-6">Guides &amp; Roundups</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {guides.map((p) => (
              <a key={p.slug} href={`/${p.slug}/`} className="block p-5 bg-navy-900 border border-navy-800 rounded-lg hover:border-accent/40 transition-colors no-underline group">
                <h3 className="text-white font-semibold group-hover:text-accent-light transition-colors">{p.h1}</h3>
                <p className="text-sm text-gray-500 mt-2 line-clamp-2">{p.intro.slice(0, 100)}...</p>
              </a>
            ))}
          </div>
        </section>
      )}

      {questions.length > 0 && (
        <section className="mb-12">
          <h2 className="text-xl font-bold text-white mb-6">Common Questions</h2>
          <div className="grid sm:grid-cols-2 gap-3">
            {questions.slice(0, 30).map((p) => (
              <a key={p.slug} href={`/${p.slug}/`} className="flex items-start gap-3 p-4 bg-navy-900 border border-navy-800 rounded-lg hover:border-accent/40 transition-colors no-underline group">
                <span className="text-accent mt-0.5 shrink-0">?</span>
                <h3 className="text-sm text-white font-medium group-hover:text-accent-light">{p.h1}</h3>
              </a>
            ))}
          </div>
          {questions.length > 30 && <p className="text-sm text-gray-600 mt-4">Showing 30 of {questions.length} questions.</p>}
        </section>
      )}

      {comparisons.length > 0 && (
        <section className="mb-12">
          <h2 className="text-xl font-bold text-white mb-6">Provider Comparisons</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {comparisons.map((p) => (
              <a key={p.slug} href={`/${p.slug}/`} className="block p-3 bg-navy-900 border border-navy-800 rounded-lg hover:border-accent/40 transition-colors no-underline group">
                <h3 className="text-sm text-white font-medium group-hover:text-accent-light">{p.h1.replace(': Which In-Store Media Provider Is Right for You?', '')}</h3>
              </a>
            ))}
          </div>
        </section>
      )}
    </div>
  );
}
