import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Soundtrack Your Brand Review: Largest Licensed Catalog, 74 Countries | InStoreIndex',
  description:
    'Independent analysis of Soundtrack Your Brand, the Stockholm-based Spotify-backed in-store music platform serving 150,000+ businesses across 74 countries with a 100M+ track licensed catalog.',
  alternates: {
    canonical: 'https://instoreindex.com/analysis/soundtrack-your-brand/',
  },
  openGraph: {
    title: 'Soundtrack Your Brand Review: Largest Licensed Catalog, 74 Countries',
    description:
      'Independent analysis of Soundtrack Your Brand, serving 150,000+ businesses across 74 countries.',
    url: 'https://instoreindex.com/analysis/soundtrack-your-brand/',
    siteName: 'InStoreIndex',
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Soundtrack Your Brand Review: Largest Licensed Catalog, 74 Countries',
    description: 'Independent analysis of Soundtrack Your Brand.',
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Review',
  itemReviewed: {
    '@type': 'Organization',
    name: 'Soundtrack Your Brand',
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
    '@id': 'https://instoreindex.com/analysis/soundtrack-your-brand/',
  },
};

export default function SoundtrackYourBrandProfile() {
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
          <h1 className="text-4xl font-bold leading-tight mb-4">Soundtrack Your Brand</h1>
          <p className="text-xl text-gray-700 leading-relaxed italic">
            Soundtrack Your Brand built the largest commercially licensed music catalog
            available through any in-store provider by doing something no one else had done at
            scale: negotiating direct deals with all three major labels, thousands of
            independent publishers, and performing rights organizations across 74 countries
            simultaneously. The catalog is real. Whether that advantage translates into the
            right buying decision depends entirely on what your organization actually needs.
          </p>
        </header>

        <section className="mb-10">
          <h2 className="text-2xl font-bold mb-4">Company overview</h2>
          <p className="leading-relaxed">
            Founded in 2013 in Stockholm, Sweden, as a joint venture with Spotify. Spotify
            provided backend licensing infrastructure while Soundtrack built the
            customer-facing platform and negotiated commercial rights. The company operates in
            74 countries with direct licensing deals covering major and independent labels.
            The catalog exceeds 100 million tracks, the largest commercially licensed library
            of any provider in this segment.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold mb-4">What they sell</h2>
          <p className="mb-4 leading-relaxed">
            Licensed background music delivered through a cloud-based platform with app-based
            management across iOS, Android, and web. No proprietary hardware is required.
            Scheduling, dayparting, and multi-zone management are supported. The platform
            allows businesses to build their own playlists directly from the catalog, a
            Spotify-native interaction model that appeals to buyers whose teams are already
            comfortable curating music digitally.
          </p>
          <p className="leading-relaxed">
            Soundtrack does not offer digital signage, retail media networking, or
            multi-sensory services. It is a music-first platform, and the depth of that focus
            shows in the catalog and the licensing infrastructure.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold mb-4">Pricing</h2>
          <p className="leading-relaxed">
            Self-serve plans start at $29 per month per zone, prepaid annually. Enterprise
            accounts are scoped directly. Each location or zone requires its own subscription,
            which adds management complexity and cost as footprints grow. For buyers with
            large, multi-zone locations, the per-zone model warrants careful math before
            committing.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold mb-4">Who they&rsquo;re best for</h2>
          <p className="mb-4 leading-relaxed">
            International operators. Soundtrack&rsquo;s 74-country licensing footprint is
            unmatched in the self-serve tier and competitive with any provider in the segment.
            A retailer with locations across Europe, North America, and Asia Pacific can
            deploy a single, legally licensed music program globally through Soundtrack without
            piecing together regional providers.
          </p>
          <p className="leading-relaxed">
            Buyers who want catalog depth and playlist control. The 100 million-plus track
            library and the Spotify-native playlist building experience appeal to brands with
            specific musical identities who want to curate their own sound rather than select
            from pre-built programs.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold mb-4">Considerations by buyer type</h2>
          <h3 className="text-xl font-semibold mb-2 mt-6">
            Buyers who want managed programming
          </h3>
          <p className="mb-4 leading-relaxed">
            Soundtrack is a platform, not a service. There is no music team building a custom
            program for your brand. Buyers who want expert curation delivered to their
            environment should look at MTI, Activaire, or Altaura.
          </p>
          <h3 className="text-xl font-semibold mb-2 mt-6">
            Buyers focused purely on domestic operations
          </h3>
          <p className="mb-4 leading-relaxed">
            The international licensing advantage is Soundtrack&rsquo;s primary differentiator.
            For buyers with US-only footprints, the $29 per zone starting price is higher than
            several comparable domestic alternatives.
          </p>
          <h3 className="text-xl font-semibold mb-2 mt-6">Large enterprise buyers</h3>
          <p className="leading-relaxed">
            The per-zone subscription model can become expensive and administratively complex
            at scale. Enterprise accounts should model total cost carefully across all
            locations and zones before comparing to full-service proposal-based providers.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold mb-4">Notable clients and track record</h2>
          <p className="leading-relaxed">
            Soundtrack serves over 150,000 businesses across 74 countries. The Spotify founding
            relationship and direct licensing deals with Universal Music Group, Warner Music
            Group, Sony, and Merlin represent a genuine structural achievement that took years
            to build and is not easily replicated. That licensing infrastructure is the
            company&rsquo;s most defensible asset.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold mb-4">The verdict</h2>
          <div className="border-l-4 border-gray-300 pl-6 py-2">
            <p className="leading-relaxed">
              Soundtrack Your Brand is the right call for international operators who want the
              broadest licensed catalog available and a self-managed deployment model. The
              licensing infrastructure is genuinely best-in-class for global reach. For
              domestic operators who want a simpler self-serve option at a lower price point,
              or for any buyer who wants managed programming rather than a platform, the
              catalog advantage alone does not justify the premium.
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
            <a href="/analysis/activaire/" className="underline">
              Activaire profile
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
