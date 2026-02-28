import { getAllPages, getAllProviders, getPagesByType } from "@/lib/data";

export default function HomePage() {
  const allPages = getAllPages();
  const providers = getAllProviders();

  const guides = getPagesByType(allPages, 'guide').slice(0, 6);
  const comparisons = getPagesByType(allPages, 'vs').slice(0, 8);
  const questions = getPagesByType(allPages, 'question').slice(0, 8);
  const verticals = getPagesByType(allPages, 'vertical').slice(0, 8);
  const roundups = getPagesByType(allPages, 'roundup').slice(0, 6);

  return (
    <>
      {/* Hero */}
      <section className="py-16 sm:py-24 px-4 sm:px-6">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-accent text-sm font-medium tracking-wide uppercase mb-4">
            Vendor-Neutral In-Store Media Research
          </p>
          <h1 className="text-3xl sm:text-5xl font-bold text-white leading-tight mb-6">
            The Buyer&apos;s Guide to Background Music, Digital Signage &amp; Retail Media Networks
          </h1>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto mb-10">
            Compare {providers.length} providers across {allPages.length.toLocaleString()}+ pages of independent research.
            No ads. No affiliate links. Just the information you need to choose the right in-store media solution.
          </p>
          <div className="flex flex-wrap gap-3 justify-center">
            <a href="/complete-guide-background-music-for-business/" className="px-6 py-3 bg-accent hover:bg-accent-dark text-white font-medium rounded-lg transition-colors no-underline">
              Background Music Guide
            </a>
            <a href="/complete-guide-digital-signage-retail/" className="px-6 py-3 bg-navy-800 hover:bg-navy-700 text-white font-medium rounded-lg transition-colors no-underline">
              Digital Signage Guide
            </a>
            <a href="/complete-guide-retail-media-networks-in-store/" className="px-6 py-3 bg-navy-800 hover:bg-navy-700 text-white font-medium rounded-lg transition-colors no-underline">
              Retail Media Guide
            </a>
          </div>
        </div>
      </section>

      {/* Stats bar */}
      <section className="border-y border-navy-800 bg-navy-900/50 py-8 px-4">
        <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          <div>
            <div className="text-2xl font-bold text-white">{providers.length}</div>
            <div className="text-sm text-gray-500">Providers Reviewed</div>
          </div>
          <div>
            <div className="text-2xl font-bold text-white">{allPages.length.toLocaleString()}+</div>
            <div className="text-sm text-gray-500">Research Pages</div>
          </div>
          <div>
            <div className="text-2xl font-bold text-white">{getPagesByType(allPages, 'vs').length}</div>
            <div className="text-sm text-gray-500">Provider Comparisons</div>
          </div>
          <div>
            <div className="text-2xl font-bold text-white">3</div>
            <div className="text-sm text-gray-500">Content Pillars</div>
          </div>
        </div>
      </section>

      {/* Guides */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 py-16">
        <h2 className="text-2xl font-bold text-white mb-2">Complete Guides</h2>
        <p className="text-gray-500 mb-8">Comprehensive guides covering every aspect of in-store media.</p>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {guides.map((page) => (
            <a key={page.slug} href={`/${page.slug}/`} className="block p-5 bg-navy-900 border border-navy-800 rounded-lg hover:border-accent/40 transition-colors no-underline group">
              <span className="text-xs font-medium text-accent uppercase tracking-wide">{page.pillar}</span>
              <h3 className="text-white font-semibold mt-2 mb-2 group-hover:text-accent-light transition-colors">{page.h1}</h3>
              <p className="text-sm text-gray-500 line-clamp-2">{page.intro.slice(0, 120)}...</p>
            </a>
          ))}
        </div>
      </section>

      {/* Provider Comparisons */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 py-16">
        <h2 className="text-2xl font-bold text-white mb-2">Provider Comparisons</h2>
        <p className="text-gray-500 mb-8">Head-to-head comparisons of in-store media providers.</p>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-3">
          {comparisons.map((page) => (
            <a key={page.slug} href={`/${page.slug}/`} className="block p-4 bg-navy-900 border border-navy-800 rounded-lg hover:border-accent/40 transition-colors no-underline group">
              <span className="text-xs text-gray-600">Comparison</span>
              <h3 className="text-sm text-white font-medium mt-1 group-hover:text-accent-light transition-colors">{page.h1.replace(': Which In-Store Media Provider Is Right for You?', '')}</h3>
            </a>
          ))}
        </div>
        <a href="/providers/" className="inline-block mt-6 text-sm text-accent hover:text-accent-light no-underline">
          View all {getPagesByType(allPages, 'vs').length} comparisons →
        </a>
      </section>

      {/* Roundups */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 py-16">
        <h2 className="text-2xl font-bold text-white mb-2">Best Of</h2>
        <p className="text-gray-500 mb-8">Top-rated providers by category and use case.</p>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {roundups.map((page) => (
            <a key={page.slug} href={`/${page.slug}/`} className="block p-5 bg-navy-900 border border-navy-800 rounded-lg hover:border-accent/40 transition-colors no-underline group">
              <span className="text-xs font-medium text-accent uppercase tracking-wide">{page.pillar}</span>
              <h3 className="text-white font-semibold mt-2 group-hover:text-accent-light transition-colors">{page.h1}</h3>
            </a>
          ))}
        </div>
      </section>

      {/* Questions */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 py-16">
        <h2 className="text-2xl font-bold text-white mb-2">Common Questions</h2>
        <p className="text-gray-500 mb-8">Answers to the most-asked questions about in-store media.</p>
        <div className="grid md:grid-cols-2 gap-3">
          {questions.map((page) => (
            <a key={page.slug} href={`/${page.slug}/`} className="flex items-start gap-3 p-4 bg-navy-900 border border-navy-800 rounded-lg hover:border-accent/40 transition-colors no-underline group">
              <span className="text-accent mt-0.5 shrink-0">?</span>
              <div>
                <h3 className="text-sm text-white font-medium group-hover:text-accent-light transition-colors">{page.h1}</h3>
                <p className="text-xs text-gray-600 mt-1 line-clamp-1">{page.intro.slice(0, 100)}...</p>
              </div>
            </a>
          ))}
        </div>
      </section>

      {/* Industry Pages */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 py-16">
        <h2 className="text-2xl font-bold text-white mb-2">By Industry</h2>
        <p className="text-gray-500 mb-8">In-store media solutions tailored to your business type.</p>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-3">
          {verticals.map((page) => (
            <a key={page.slug} href={`/${page.slug}/`} className="block p-4 bg-navy-900 border border-navy-800 rounded-lg hover:border-accent/40 transition-colors no-underline group">
              <h3 className="text-sm text-white font-medium group-hover:text-accent-light transition-colors">{page.h1}</h3>
            </a>
          ))}
        </div>
      </section>
    </>
  );
}
