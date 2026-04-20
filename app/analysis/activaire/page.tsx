import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Activaire Review: Human-Curated Background Music from Brooklyn | InStoreIndex',
  description:
    'Independent analysis of Activaire, a Brooklyn-based commercial music provider operating in 43 countries. Curation-first model, notable clients including Uniqlo and Eaton Hotels, and who should — and should not — choose them.',
  alternates: {
    canonical: 'https://instoreindex.com/analysis/activaire/',
  },
  openGraph: {
    title: 'Activaire Review: Human-Curated Background Music from Brooklyn',
    description:
      'Independent analysis of Activaire, a Brooklyn-based commercial music provider operating in 43 countries with clients including Uniqlo and Eaton Hotels.',
    url: 'https://instoreindex.com/analysis/activaire/',
    siteName: 'InStoreIndex',
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Activaire Review: Human-Curated Background Music from Brooklyn',
    description:
      'Independent analysis of Activaire, a Brooklyn-based commercial music provider operating in 43 countries.',
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Review',
  itemReviewed: {
    '@type': 'Organization',
    name: 'Activaire',
    url: 'https://www.activaire.com',
  },
  author: {
    '@type': 'Organization',
    name: 'InStoreIndex',
    url: 'https://instoreindex.com',
  },
  publisher: {
    '@type': 'Organization',
    name: 'InStoreIndex',
    url: 'https://instoreindex.com',
  },
  datePublished: '2026-04-19',
  dateModified: '2026-04-19',
  mainEntityOfPage: {
    '@type': 'WebPage',
    '@id': 'https://instoreindex.com/analysis/activaire/',
  },
};

export default function ActivaireProfile() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <article className="max-w-3xl mx-auto px-4 py-12">
        <header className="mb-10">
          <p className="text-sm uppercase tracking-wide text-gray-500 mb-3">
            Provider Profile · Published April 19, 2026
          </p>
          <h1 className="text-4xl font-bold leading-tight mb-4">Activaire</h1>
          <p className="text-xl text-gray-700 leading-relaxed italic">
            Activaire is what you get when a company spends twenty-plus years in one
            neighborhood, one industry, and one discipline without drifting. Based in
            Williamsburg, Brooklyn, built on human curation, operating in 43 countries with
            clients including Uniqlo and Eaton Hotels. The product is not a platform. It is a
            relationship between a music team and a brand, delivered through reliable
            technology.
          </p>
        </header>

        <section className="mb-10">
          <h2 className="text-2xl font-bold mb-4">Company overview</h2>
          <p className="mb-4 leading-relaxed">
            Founded in Brooklyn, New York. CEO Adesh Deosaran has led the company through a
            consistent positioning: human curation as a differentiator in a market moving toward
            algorithms. Activaire operates in 43 countries, a meaningful international footprint
            for a company of its size. The Williamsburg roots are not incidental branding — the
            company has operated in one of the most musically sophisticated neighborhoods in the
            United States for over two decades, and that context shapes its curatorial
            sensibility.
          </p>
          <p className="leading-relaxed">
            Activaire has built hardware partnerships with Marshall speakers and Q-SYS, and
            integrates natively with Sonos, giving buyers flexibility in how they deploy the
            service across their physical infrastructure.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold mb-4">What they sell</h2>
          <p className="mb-4 leading-relaxed">
            Curated background music for commercial environments, delivered through the
            Activaire Curator platform. Over 1,000 playlists and scenes organized by business
            type, mood, and time of day. Dayparting and scheduling are built in. Local playback
            capability ensures music continues even during internet outages — a meaningful
            operational advantage over pure streaming services.
          </p>
          <p className="mb-4 leading-relaxed">
            The curation model is human-first: Activaire's music team builds and maintains
            programs for each client rather than deploying algorithmic playlists. Custom Audio
            Branding is available for Pro and Enterprise clients, a bespoke process that builds
            a sonic identity specific to the brand. Licensing covers ASCAP, BMI, SESAC, GMR, and
            SoundExchange in the US.
          </p>
          <p className="leading-relaxed">
            Pricing is not published. Contact their team to begin a conversation.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold mb-4">Who they're best for</h2>
          <p className="leading-relaxed">
            Hospitality and retail brands for whom the in-store sound is part of the product,
            not background noise. Hotels, boutique retailers, fashion brands, and restaurant
            groups where the programming needs to reflect a specific aesthetic and evolve
            alongside the brand. Buyers who want a music team they can actually talk to, who
            know their account, and who treat music as a craft rather than a content category.
            International operators benefit from Activaire's 43-country footprint and licensing
            coverage.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold mb-4">Considerations by buyer type</h2>
          <h3 className="text-xl font-semibold mb-2 mt-6">
            Buyers who want published pricing and self-serve onboarding
          </h3>
          <p className="mb-4 leading-relaxed">
            Activaire is a relationship-based service. There is no self-serve sign-up or instant
            quote. Buyers who need fast deployment at scale without a vendor conversation should
            look at Rockbot, Soundtrack Your Brand, or Pandora CloudCover.
          </p>
          <h3 className="text-xl font-semibold mb-2 mt-6">Very large enterprise chains</h3>
          <p className="leading-relaxed">
            Activaire's strength is in quality and relationship, not operational scale at the
            level of Mood or Stingray. Buyers with 1,000-plus locations who need standardized,
            high-volume deployment should evaluate whether the boutique model fits their
            operational reality.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold mb-4">Notable clients and track record</h2>
          <p className="leading-relaxed">
            Uniqlo US since their first SoHo location. Eaton Hotels. The Uniqlo relationship is
            particularly notable: the in-store music program has become culturally recognized as
            a genre unto itself, with listeners independently describing music they enjoy as
            sounding like &ldquo;Uniqlo music.&rdquo; That is a branding outcome, not just a
            music service outcome.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold mb-4">The verdict</h2>
          <div className="border-l-4 border-gray-300 pl-6 py-2">
            <p className="leading-relaxed">
              Activaire is the right provider for brands that treat sound as a strategic element
              of the customer experience and want a music team that operates as a creative
              partner rather than a vendor. The human curation model, international coverage,
              and boutique client roster make it a genuine alternative to larger providers for
              buyers in hospitality and fashion retail. For buyers who need scale, speed, or a
              self-serve model, it is not the right fit.
            </p>
          </div>
        </section>

        <footer className="mt-12 pt-8 border-t border-gray-200 text-sm text-gray-600">
          <p>
            Related reading: our full{' '}
            <a href="/analysis/mood-media/" className="underline">
              Mood Media profile
            </a>
            ,{' '}
            <a href="/analysis/soundtrack-your-brand/" className="underline">
              Soundtrack Your Brand profile
            </a>
            , and the{' '}
            <a href="/research/background-music-pricing/" className="underline">
              background music pricing research
            </a>
            .
          </p>
          <p className="mt-4">Last updated: April 19, 2026.</p>
        </footer>
      </article>
    </>
  );
}
