import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'SoundMachine Review: 61M Tracks, No Dedicated Hardware | InStoreIndex',
  description:
    'Independent analysis of SoundMachine, a business music platform offering 61M+ licensed tracks with app-only deployment across US, Canada, and Japan, starting at $26.95/month.',
  alternates: {
    canonical: 'https://instoreindex.com/analysis/soundmachine/',
  },
  openGraph: {
    title: 'SoundMachine Review: 61M Tracks, No Dedicated Hardware',
    description:
      'Independent analysis of SoundMachine, offering 61M+ licensed tracks and scheduling precision at self-serve pricing.',
    url: 'https://instoreindex.com/analysis/soundmachine/',
    siteName: 'InStoreIndex',
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'SoundMachine Review: 61M Tracks, No Dedicated Hardware',
    description: 'Independent analysis of SoundMachine.',
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Review',
  itemReviewed: {
    '@type': 'Organization',
    name: 'SoundMachine',
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
    '@id': 'https://instoreindex.com/analysis/soundmachine/',
  },
};

export default function SoundMachineProfile() {
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
          <h1 className="text-4xl font-bold leading-tight mb-4">SoundMachine</h1>
          <p className="text-xl text-gray-700 leading-relaxed italic">
            SoundMachine competes on catalog size and scheduling precision. At 61 million
            licensed tracks and a pricing structure that does not require dedicated hardware,
            it sits at an interesting point in the self-serve tier: more catalog than most
            competitors at the same price, more flexibility than providers tied to proprietary
            players, and scheduling tools detailed enough to satisfy buyers who want control
            down to the minute.
          </p>
        </header>

        <section className="mb-10">
          <h2 className="text-2xl font-bold mb-4">Company overview</h2>
          <p className="leading-relaxed">
            SoundMachine is a music-for-business platform with coverage in the United States,
            Canada, and Japan, where the subscription includes all necessary licensing without
            additional local fees. Outside those three markets, local licensing arrangements
            vary. The platform does not require proprietary hardware, running from the
            SoundMachine app on iOS and Android devices or through compatible integrations
            including Sonos. Business plans are available month-to-month or annually, with a
            10% discount for annual commitments and volume discounts for accounts with ten or
            more licenses.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold mb-4">What they sell</h2>
          <p className="mb-4 leading-relaxed">
            Licensed background music with 61 million tracks, 500-plus playlists and stations,
            and scheduling tools that allow programming by time of day, day of week, and
            occasion. The Mix tool allows buyers to blend different stations together into a
            custom hybrid sound. Zone management supports multiple audio environments within a
            single location from one subscription. In-store messaging is supported for
            promotional announcements.
          </p>
          <p className="leading-relaxed">
            No dedicated hardware is required. The app-only delivery model lowers the barrier
            to deployment and eliminates hardware procurement from the vendor conversation.
            Enterprise custom solutions are available for larger organizations with specific
            requirements.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold mb-4">Pricing</h2>
          <p className="leading-relaxed">
            Business plan: $26.95 per month. Business Premium plan: $33.95 per month. Annual
            plans receive a 10% discount. Volume discounts apply at ten or more licenses. No
            dedicated hardware cost.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold mb-4">Who they&rsquo;re best for</h2>
          <p className="leading-relaxed">
            Buyers who want the largest catalog in the self-serve tier without paying
            enterprise prices. Multi-zone locations where the scheduling precision and zone
            management tools solve a real operational problem. Buyers who do not want to
            purchase or manage proprietary hardware. US, Canada, and Japan operators who want
            all-in licensing with no PRO surprises.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold mb-4">Considerations by buyer type</h2>
          <h3 className="text-xl font-semibold mb-2 mt-6">
            International operators outside US, Canada, and Japan
          </h3>
          <p className="mb-4 leading-relaxed">
            Licensing coverage requires separate verification for other markets.
            SoundMachine&rsquo;s clean all-in model applies to those three markets only.
          </p>
          <h3 className="text-xl font-semibold mb-2 mt-6">Buyers who want human curation</h3>
          <p className="mb-4 leading-relaxed">
            SoundMachine is a catalog and scheduling platform. Program building is
            buyer-driven. Buyers who want a music team curating for their brand should look at
            Activaire or Altaura.
          </p>
          <h3 className="text-xl font-semibold mb-2 mt-6">
            Buyers who need retail media or signage
          </h3>
          <p className="leading-relaxed">SoundMachine is music-only.</p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold mb-4">Notable clients and track record</h2>
          <p className="leading-relaxed">
            SoundMachine does not publish a prominent named client list. The platform&rsquo;s
            positioning is built on catalog size, scheduling precision, and the no-hardware
            deployment model rather than marquee account relationships.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold mb-4">The verdict</h2>
          <div className="border-l-4 border-gray-300 pl-6 py-2">
            <p className="leading-relaxed">
              SoundMachine is the right choice for buyers who want maximum catalog depth at a
              self-serve price point, with scheduling control that goes beyond what most
              competitors at this tier offer, and without the hardware procurement
              conversation. The no-dedicated-hardware model is genuinely differentiated in a
              segment where most providers tie their service to a proprietary player. For
              buyers with more specific needs, whether curation, retail media, enterprise
              controls, or international coverage, those requirements point elsewhere.
            </p>
          </div>
        </section>

        <footer className="mt-12 pt-8 border-t border-gray-200 text-sm text-gray-600">
          <p>
            Related reading: our full{' '}
            <a href="/analysis/jukeboxy/" className="underline">
              Jukeboxy profile
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
