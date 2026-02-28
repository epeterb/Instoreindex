import { getAllPages, getPagesByPillar, getPagesByType } from "@/lib/data";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Background Music for Business — Complete Resource',
  description: 'Everything you need to know about background music for business: providers, pricing, licensing, comparisons, and industry-specific guides.',
  alternates: { canonical: 'https://instoreindex.com/background-music/' },
};

export default function BackgroundMusicPage() {
  const allPages = getAllPages();
  const musicPages = getPagesByPillar(allPages, 'music');
  const questions = musicPages.filter(p => p.page_type === 'question');
  const verticals = musicPages.filter(p => p.page_type === 'vertical' || p.page_type === 'provider_vertical');
  const comparisons = musicPages.filter(p => p.page_type === 'vs');
  const guides = musicPages.filter(p => p.page_type === 'guide' || p.page_type === 'roundup');
  const cities = musicPages.filter(p => p.page_type === 'city');
  const licensing = musicPages.filter(p => p.page_type === 'state_licensing');
  const providerServices = musicPages.filter(p => p.page_type === 'provider_service');

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12">
      <h1 className="text-3xl font-bold text-white mb-2">Background Music for Business</h1>
      <p className="text-gray-400 mb-10">{musicPages.length} pages of independent research on commercial background music solutions.</p>

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

      {questions.length > 0 && (
        <section className="mb-12">
          <h2 className="text-xl font-bold text-white mb-6">Common Questions</h2>
          <div className="grid sm:grid-cols-2 gap-3">
            {questions.map((p) => (
              <a key={p.slug} href={`/${p.slug}/`} className="flex items-start gap-3 p-4 bg-navy-900 border border-navy-800 rounded-lg hover:border-accent/40 transition-colors no-underline group">
                <span className="text-accent mt-0.5 shrink-0">?</span>
                <h3 className="text-sm text-white font-medium group-hover:text-accent-light">{p.h1}</h3>
              </a>
            ))}
          </div>
        </section>
      )}

      {verticals.length > 0 && (
        <section className="mb-12">
          <h2 className="text-xl font-bold text-white mb-6">By Industry</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {verticals.map((p) => (
              <a key={p.slug} href={`/${p.slug}/`} className="block p-3 bg-navy-900 border border-navy-800 rounded-lg hover:border-accent/40 transition-colors no-underline group">
                <h3 className="text-sm text-white font-medium group-hover:text-accent-light">{p.h1}</h3>
              </a>
            ))}
          </div>
        </section>
      )}

      {providerServices.length > 0 && (
        <section className="mb-12">
          <h2 className="text-xl font-bold text-white mb-6">Provider Services</h2>
          <p className="text-gray-500 mb-6">Detailed breakdowns of what each provider offers for background music.</p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {providerServices.map((p) => (
              <a key={p.slug} href={`/${p.slug}/`} className="block p-3 bg-navy-900 border border-navy-800 rounded-lg hover:border-accent/40 transition-colors no-underline group">
                <h3 className="text-sm text-white font-medium group-hover:text-accent-light">{p.h1}</h3>
              </a>
            ))}
          </div>
        </section>
      )}

      {cities.length > 0 && (
        <section className="mb-12">
          <h2 className="text-xl font-bold text-white mb-6">By City</h2>
          <p className="text-gray-500 mb-6">Background music providers and services by metro area.</p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {cities.map((p) => (
              <a key={p.slug} href={`/${p.slug}/`} className="block p-3 bg-navy-900 border border-navy-800 rounded-lg hover:border-accent/40 transition-colors no-underline group">
                <h3 className="text-sm text-white font-medium group-hover:text-accent-light">{p.h1}</h3>
              </a>
            ))}
          </div>
        </section>
      )}

      {licensing.length > 0 && (
        <section className="mb-12">
          <h2 className="text-xl font-bold text-white mb-6">Music Licensing by State</h2>
          <p className="text-gray-500 mb-6">State-specific music licensing requirements and regulations.</p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {licensing.map((p) => (
              <a key={p.slug} href={`/${p.slug}/`} className="block p-3 bg-navy-900 border border-navy-800 rounded-lg hover:border-accent/40 transition-colors no-underline group">
                <h3 className="text-sm text-white font-medium group-hover:text-accent-light">{p.h1}</h3>
              </a>
            ))}
          </div>
        </section>
      )}
    </div>
  );
}
