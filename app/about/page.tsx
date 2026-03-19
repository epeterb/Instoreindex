import { Metadata } from 'next';
import { getAllPages, getAllProviders } from '@/lib/data';

export const metadata: Metadata = {
  title: 'About InStoreIndex',
  description: 'InStoreIndex is a vendor-neutral, ad-free buyer\'s guide for in-store media. Built by Peter Belanger to help businesses compare background music, digital signage, and retail media network providers independently.',
  alternates: { canonical: 'https://instoreindex.com/about/' },
};

export default function AboutPage() {
  const providers = getAllProviders();
  const pages = getAllPages();

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
      url: 'https://instoreindex.com/about/',
    },
    knowsAbout: [
      'background music for business',
      'digital signage for retail',
      'retail media networks',
      'in-store media',
      'commercial music licensing',
    ],
  };

  const personSchema = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Peter Belanger',
    jobTitle: 'Founder',
    url: 'https://instoreindex.com/about/',
    worksFor: {
      '@type': 'Organization',
      name: 'InStoreIndex',
      url: 'https://instoreindex.com',
    },
    knowsAbout: [
      'AI search optimization',
      'answer engine optimization',
      'retail technology',
      'in-store media',
      'programmatic SEO',
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
      />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12">
        <h1 className="text-3xl font-bold text-white mb-2">About InStoreIndex</h1>
        <p className="text-gray-400 mb-10">Independent, vendor-neutral research for in-store media buyers.</p>

        {/* What is InStoreIndex */}
        <section className="mb-12">
          <div className="max-w-3xl">
            <h2 className="text-xl font-bold text-white mb-4">What Is InStoreIndex?</h2>
            <div className="space-y-4 text-gray-400 leading-relaxed">
              <p>
                InStoreIndex is a vendor-neutral, ad-free buyer&apos;s guide for in-store media. We cover background music for business,
                digital signage, retail media networks, scent marketing, and everything in between.
              </p>
              <p>
                The site exists because choosing an in-store media provider is harder than it should be. Vendor websites bury pricing.
                Review sites take affiliate commissions. Most &quot;comparison&quot; content is written by providers about themselves.
              </p>
              <p>
                InStoreIndex takes no advertising, no affiliate fees, and no payments from providers for placement. Every review,
                comparison, and recommendation is based on independent research.
              </p>
            </div>

            <div className="grid grid-cols-3 gap-4 mt-8">
              <div className="p-4 bg-navy-900 border border-navy-800 rounded-lg text-center">
                <div className="text-2xl font-bold text-white">{providers.length}</div>
                <div className="text-sm text-gray-500 mt-1">Providers Reviewed</div>
              </div>
              <div className="p-4 bg-navy-900 border border-navy-800 rounded-lg text-center">
                <div className="text-2xl font-bold text-white">{pages.length.toLocaleString()}+</div>
                <div className="text-sm text-gray-500 mt-1">Research Pages</div>
              </div>
              <div className="p-4 bg-navy-900 border border-navy-800 rounded-lg text-center">
                <div className="text-2xl font-bold text-white">0</div>
                <div className="text-sm text-gray-500 mt-1">Affiliate Links</div>
              </div>
            </div>
          </div>
        </section>

        {/* Who runs it */}
        <section className="mb-12">
          <div className="max-w-3xl">
            <h2 className="text-xl font-bold text-white mb-4">Who Runs InStoreIndex</h2>
            <div className="p-6 bg-navy-900 border border-navy-800 rounded-lg">
              <h3 className="text-lg font-semibold text-white">Peter Belanger</h3>
              <p className="text-sm text-accent mt-1">Founder</p>
              <div className="space-y-4 text-gray-400 leading-relaxed mt-4">
                <p>
                  Peter builds AI-powered authority sites that rank in both traditional search and AI answer engines
                  like ChatGPT, Perplexity, and Google AI Overviews. He is co-founder
                  of <a href="https://syndesi.io" className="text-accent hover:text-accent-light no-underline" target="_blank" rel="noopener noreferrer">Syndesi</a>,
                  an AI venture studio focused on answer engine optimization (AEO) and AI-powered go-to-market systems.
                </p>
                <p>
                  His previous project, LocalAnswer.io, was a 14,000+ page programmatic authority site that ranked in
                  Perplexity and ChatGPT within weeks of launch and sold for six figures. InStoreIndex applies the
                  same methodology to the retail in-store media space.
                </p>
                <p>
                  Peter specializes in programmatic SEO, structured data, AI search optimization, and building
                  large-scale content systems that serve both human readers and AI crawlers.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Methodology */}
        <section className="mb-12">
          <div className="max-w-3xl">
            <h2 className="text-xl font-bold text-white mb-4">How We Evaluate Providers</h2>
            <div className="space-y-4 text-gray-400 leading-relaxed mb-8">
              <p>
                Every provider on InStoreIndex is evaluated using the same independent methodology. No provider can pay for
                a better rating, higher placement, or favorable comparison. Here is how it works:
              </p>
            </div>
            <div className="space-y-4">
              <div className="p-5 bg-navy-900 border border-navy-800 rounded-lg">
                <h3 className="text-white font-semibold mb-2">Public Information Research</h3>
                <p className="text-sm text-gray-400">
                  We compile data from provider websites, published case studies, press releases, support documentation,
                  and publicly available pricing. We do not rely on vendor-submitted marketing materials.
                </p>
              </div>
              <div className="p-5 bg-navy-900 border border-navy-800 rounded-lg">
                <h3 className="text-white font-semibold mb-2">Standardized Comparison Criteria</h3>
                <p className="text-sm text-gray-400">
                  Every provider comparison uses the same evaluation framework: service offerings, pricing transparency,
                  industry verticals served, music catalog size (where applicable), hardware requirements, contract terms,
                  and customer support options.
                </p>
              </div>
              <div className="p-5 bg-navy-900 border border-navy-800 rounded-lg">
                <h3 className="text-white font-semibold mb-2">No Pay-for-Play</h3>
                <p className="text-sm text-gray-400">
                  InStoreIndex does not accept payments from providers for reviews, rankings, or placement.
                  Featured positioning is clearly labeled and does not influence editorial content or comparisons.
                </p>
              </div>
              <div className="p-5 bg-navy-900 border border-navy-800 rounded-lg">
                <h3 className="text-white font-semibold mb-2">Regular Updates</h3>
                <p className="text-sm text-gray-400">
                  Provider information is reviewed and updated regularly. When pricing, features, or service offerings
                  change, we update our pages to reflect the current state of the market.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Contact CTA */}
        <section className="mb-12">
          <div className="max-w-3xl">
            <div className="p-6 bg-navy-900 border border-navy-800 rounded-lg text-center">
              <h2 className="text-xl font-bold text-white mb-2">Questions?</h2>
              <p className="text-gray-400 mb-4">
                If you are a provider and want to update your information, or a buyer looking for a recommendation,
                get in touch.
              </p>
              <a href="/#get-in-touch" className="inline-block px-6 py-3 bg-accent hover:bg-accent-dark text-white font-medium rounded-lg transition-colors no-underline">
                Contact Us
              </a>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
