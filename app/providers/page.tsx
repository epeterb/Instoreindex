import { getAllPages, getAllProviders, getPagesByType } from "@/lib/data";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: 'In-Store Media Providers — Compare All Providers',
  description: 'Compare background music, digital signage, and retail media providers. Head-to-head comparisons, reviews, pricing, and alternatives.',
  alternates: { canonical: 'https://instoreindex.com/providers/' },
};

export default function ProvidersPage() {
  const allPages = getAllPages();
  const providers = getAllProviders();
  const comparisons = getPagesByType(allPages, 'vs');
  const profiles = getPagesByType(allPages, 'provider_profile');
  const alternatives = getPagesByType(allPages, 'alternatives');
  const pricing = getPagesByType(allPages, 'pricing');
  const providerVerticals = getPagesByType(allPages, 'provider_vertical');
  const providerServices = getPagesByType(allPages, 'provider_service');

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12">
      <h1 className="text-3xl font-bold text-white mb-2">In-Store Media Providers</h1>
      <p className="text-gray-400 mb-10">Independent research on {providers.length} providers across background music, digital signage, and retail media networks.</p>

      {/* Provider Profiles */}
      <section className="mb-12">
        <h2 className="text-xl font-bold text-white mb-6">Provider Reviews</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {providers.map((p) => {
            const profilePage = profiles.find(pg => pg.slug === `${p.slug}-review`);
            return (
              <div key={p.slug} className="p-5 bg-navy-900 border border-navy-800 rounded-lg">
                <h3 className="text-white font-semibold">{p.name}</h3>
                <p className="text-xs text-gray-500 mt-1">{p.headquarters || 'Global'} · {(p.company_size || 'various').charAt(0).toUpperCase() + (p.company_size || 'various').slice(1)}</p>
                <p className="text-sm text-gray-400 mt-2 line-clamp-2">{p.key_differentiator || p.description?.slice(0, 100)}</p>
                <div className="flex gap-2 mt-3">
                  {profilePage && (
                    <a href={`/${profilePage.slug}/`} className="text-xs text-accent hover:text-accent-light no-underline">Full Review →</a>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Comparisons */}
      <section className="mb-12">
        <h2 className="text-xl font-bold text-white mb-2">Head-to-Head Comparisons</h2>
        <p className="text-gray-500 mb-6">{comparisons.length} provider comparisons</p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {comparisons.map((page) => (
            <a key={page.slug} href={`/${page.slug}/`} className="block p-3 bg-navy-900 border border-navy-800 rounded-lg hover:border-accent/40 transition-colors no-underline group">
              <h3 className="text-sm text-white font-medium group-hover:text-accent-light transition-colors">
                {page.h1.replace(': Which In-Store Media Provider Is Right for You?', '')}
              </h3>
            </a>
          ))}
        </div>
      </section>

      {/* Alternatives & Pricing */}
      <div className="grid md:grid-cols-2 gap-8">
        <section>
          <h2 className="text-xl font-bold text-white mb-4">Alternatives</h2>
          <div className="space-y-2">
            {alternatives.map((page) => (
              <a key={page.slug} href={`/${page.slug}/`} className="block p-3 bg-navy-900 border border-navy-800 rounded-lg hover:border-accent/40 transition-colors no-underline group">
                <h3 className="text-sm text-white font-medium group-hover:text-accent-light">{page.h1}</h3>
              </a>
            ))}
          </div>
        </section>
        <section>
          <h2 className="text-xl font-bold text-white mb-4">Pricing Guides</h2>
          <div className="space-y-2">
            {pricing.map((page) => (
              <a key={page.slug} href={`/${page.slug}/`} className="block p-3 bg-navy-900 border border-navy-800 rounded-lg hover:border-accent/40 transition-colors no-underline group">
                <h3 className="text-sm text-white font-medium group-hover:text-accent-light">{page.h1}</h3>
              </a>
            ))}
          </div>
        </section>
      </div>

      {/* Provider by Industry */}
      <section className="mb-12 mt-12">
        <h2 className="text-xl font-bold text-white mb-2">Providers by Industry</h2>
        <p className="text-gray-500 mb-6">{providerVerticals.length} industry-specific provider guides</p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {providerVerticals.map((page) => (
            <a key={page.slug} href={`/${page.slug}/`} className="block p-3 bg-navy-900 border border-navy-800 rounded-lg hover:border-accent/40 transition-colors no-underline group">
              <h3 className="text-sm text-white font-medium group-hover:text-accent-light">{page.h1}</h3>
            </a>
          ))}
        </div>
      </section>

      {/* Provider Services */}
      <section className="mb-12">
        <h2 className="text-xl font-bold text-white mb-2">Provider Services</h2>
        <p className="text-gray-500 mb-6">Detailed breakdowns of services offered by each provider.</p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {providerServices.map((page) => (
            <a key={page.slug} href={`/${page.slug}/`} className="block p-3 bg-navy-900 border border-navy-800 rounded-lg hover:border-accent/40 transition-colors no-underline group">
              <h3 className="text-sm text-white font-medium group-hover:text-accent-light">{page.h1}</h3>
            </a>
          ))}
        </div>
      </section>
    </div>
  );
}
