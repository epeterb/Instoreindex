import { getAllPages, getPagesByType, getPagesByPillar } from "@/lib/data";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: 'In-Store Media Guides — Complete Buyer\'s Guides',
  description: 'Comprehensive guides to background music, digital signage, and retail media networks for business. Everything you need to choose the right solution.',
  alternates: { canonical: 'https://instoreindex.com/guides/' },
};

export default function GuidesPage() {
  const allPages = getAllPages();
  const guides = getPagesByType(allPages, 'guide');
  const roundups = getPagesByType(allPages, 'roundup');
  const generalQuestions = allPages.filter(p => p.pillar === 'general' && p.page_type === 'question');
  const generalVerticals = allPages.filter(p => p.pillar === 'general' && p.page_type === 'vertical');

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12">
      <h1 className="text-3xl font-bold text-white mb-2">Buyer&apos;s Guides</h1>
      <p className="text-gray-400 mb-10">Comprehensive guides and best-of lists for in-store media decision makers.</p>

      <section className="mb-12">
        <h2 className="text-xl font-bold text-white mb-6">Complete Guides</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {guides.map((page) => (
            <a key={page.slug} href={`/${page.slug}/`} className="block p-5 bg-navy-900 border border-navy-800 rounded-lg hover:border-accent/40 transition-colors no-underline group">
              <span className="text-xs font-medium text-accent uppercase tracking-wide">{page.pillar}</span>
              <h3 className="text-white font-semibold mt-2 mb-2 group-hover:text-accent-light transition-colors">{page.h1}</h3>
              <p className="text-sm text-gray-500 line-clamp-2">{page.intro.slice(0, 120)}...</p>
            </a>
          ))}
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-xl font-bold text-white mb-6">Best Of &amp; Roundups</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {roundups.map((page) => (
            <a key={page.slug} href={`/${page.slug}/`} className="block p-5 bg-navy-900 border border-navy-800 rounded-lg hover:border-accent/40 transition-colors no-underline group">
              <span className="text-xs font-medium text-pink-400 uppercase tracking-wide">{page.pillar}</span>
              <h3 className="text-white font-semibold mt-2 group-hover:text-accent-light transition-colors">{page.h1}</h3>
            </a>
          ))}
        </div>
      </section>

      {generalVerticals.length > 0 && (
        <section className="mb-12">
          <h2 className="text-xl font-bold text-white mb-6">By Industry</h2>
          <p className="text-gray-500 mb-6">In-store media solutions tailored to your business type.</p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {generalVerticals.map((page) => (
              <a key={page.slug} href={`/${page.slug}/`} className="block p-4 bg-navy-900 border border-navy-800 rounded-lg hover:border-accent/40 transition-colors no-underline group">
                <h3 className="text-sm text-white font-medium group-hover:text-accent-light transition-colors">{page.h1}</h3>
              </a>
            ))}
          </div>
        </section>
      )}

      {generalQuestions.length > 0 && (
        <section className="mb-12">
          <h2 className="text-xl font-bold text-white mb-6">Common Questions</h2>
          <p className="text-gray-500 mb-6">Answers to frequently asked questions about in-store media.</p>
          <div className="grid sm:grid-cols-2 gap-3">
            {generalQuestions.map((page) => (
              <a key={page.slug} href={`/${page.slug}/`} className="flex items-start gap-3 p-4 bg-navy-900 border border-navy-800 rounded-lg hover:border-accent/40 transition-colors no-underline group">
                <span className="text-accent mt-0.5 shrink-0">?</span>
                <h3 className="text-sm text-white font-medium group-hover:text-accent-light transition-colors">{page.h1}</h3>
              </a>
            ))}
          </div>
        </section>
      )}
    </div>
  );
}
