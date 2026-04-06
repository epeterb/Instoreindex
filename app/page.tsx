import { getAllProviders } from "@/lib/data";
import type { Metadata } from "next";

export const metadata: Metadata = {
  alternates: {
    canonical: 'https://instoreindex.com/',
  },
};

export default function HomePage() {
  const providers = getAllProviders();

  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'InStoreIndex',
    url: 'https://instoreindex.com',
    description: 'Vendor-neutral buyer\'s guide for in-store media including background music, digital signage, and retail media networks',
    founder: {
      '@type': 'Person',
      name: 'Peter Belanger',
      jobTitle: 'Founder',
      url: 'https://instoreindex.com',
    },
  };

  const webSiteSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'InStoreIndex',
    url: 'https://instoreindex.com',
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webSiteSchema) }} />

      {/* Hero */}
      <section className="py-16 sm:py-24 px-4 sm:px-6">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-accent text-sm font-medium tracking-wide uppercase mb-4">
            Vendor-Neutral In-Store Media Research
          </p>
          <h1 className="text-3xl sm:text-5xl font-bold text-white leading-tight mb-6">
            The Independent Buyer&apos;s Guide to In-Store Media
          </h1>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto mb-10">
            Real pricing. Real tradeoffs. Real opinions on which providers fit which buyers.
            No ads, no affiliate links, no vendor influence.
          </p>
          <div className="flex flex-wrap gap-3 justify-center">
            <a href="/providers/" className="px-6 py-3 bg-accent hover:bg-accent-dark text-white font-medium rounded-lg transition-colors no-underline">
              Browse Providers
            </a>
            <a href="/about/" className="px-6 py-3 bg-navy-800 hover:bg-navy-700 text-white font-medium rounded-lg transition-colors no-underline">
              About This Guide
            </a>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="border-y border-navy-800 bg-navy-900/50 py-8 px-4">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
          <div>
            <div className="text-2xl font-bold text-white">{providers.length}</div>
            <div className="text-sm text-gray-500">Providers Tracked</div>
          </div>
          <div>
            <div className="text-2xl font-bold text-white">Independent</div>
            <div className="text-sm text-gray-500">No ads, no affiliates</div>
          </div>
          <div>
            <div className="text-2xl font-bold text-white">3</div>
            <div className="text-sm text-gray-500">Coverage Areas</div>
          </div>
        </div>
      </section>

      {/* What we cover */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 py-16">
        <h2 className="text-2xl font-bold text-white mb-2">What We Cover</h2>
        <p className="text-gray-500 mb-8">Independent research across the three pillars of in-store media.</p>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="p-6 bg-navy-900 border border-navy-800 rounded-lg">
            <h3 className="text-white font-semibold text-lg mb-3">Background Music</h3>
            <p className="text-sm text-gray-500">Commercial licensing, provider pricing, catalog depth, and service model comparisons for retail, hospitality, and food service operators.</p>
          </div>
          <div className="p-6 bg-navy-900 border border-navy-800 rounded-lg">
            <h3 className="text-white font-semibold text-lg mb-3">Digital Signage</h3>
            <p className="text-sm text-gray-500">Hardware models, software platforms, content management, and pricing structures for single-location operators through enterprise chains.</p>
          </div>
          <div className="p-6 bg-navy-900 border border-navy-800 rounded-lg">
            <h3 className="text-white font-semibold text-lg mb-3">Retail Media Networks</h3>
            <p className="text-sm text-gray-500">In-store advertising infrastructure, CPM benchmarks, measurement approaches, and the providers building retail media capabilities.</p>
          </div>
        </div>
      </section>

      {/* Providers CTA */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 py-16">
        <div className="bg-navy-900 border border-navy-800 rounded-xl p-8 md:p-12 text-center">
          <h2 className="text-2xl font-bold text-white mb-4">
            {providers.length} Providers. Independently Evaluated.
          </h2>
          <p className="text-gray-400 max-w-xl mx-auto mb-8">
            From Mood Media and Stingray to QSIC and MTI Digital — every major in-store media provider profiled with real pricing research, genuine strengths, genuine weaknesses, and a clear verdict.
          </p>
          <a href="/providers/" className="inline-block px-8 py-4 bg-accent hover:bg-accent-dark text-white font-medium rounded-lg transition-colors no-underline">
            View All Providers →
          </a>
        </div>
      </section>

    </>
  );
}
