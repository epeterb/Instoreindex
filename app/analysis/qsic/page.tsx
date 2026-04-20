import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'QSIC Review: In-Store Audio as Retail Media Infrastructure | InStoreIndex',
  description:
    'Independent analysis of QSIC, a retail media infrastructure company using in-store audio as the delivery channel. Powers 7-Eleven Gulp Radio, with $50M in funding and named clients including Coles Express and McDonalds.',
  alternates: {
    canonical: 'https://instoreindex.com/analysis/qsic/',
  },
  openGraph: {
    title: 'QSIC Review: In-Store Audio as Retail Media Infrastructure',
    description:
      'Independent analysis of QSIC, powering 7-Eleven Gulp Radio with a retail media network reaching 350M+ monthly shoppers.',
    url: 'https://instoreindex.com/analysis/qsic/',
    siteName: 'InStoreIndex',
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'QSIC Review: In-Store Audio as Retail Media Infrastructure',
    description: 'Independent analysis of QSIC.',
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Review',
  itemReviewed: {
    '@type': 'Organization',
    name: 'QSIC',
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
    '@id': 'https://instoreindex.com/analysis/qsic/',
  },
};

export default function QsicProfile() {
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
          <h1 className="text-4xl font-bold leading-tight mb-4">QSIC</h1>
          <p className="text-xl text-gray-700 leading-relaxed italic">
            QSIC is not a background music company that added advertising. It is a retail media
            infrastructure company that uses audio as the delivery channel. That distinction
            matters for how buyers should evaluate it, because the right question to ask about
            QSIC is not whether you like the music, it is whether you want to monetize your
            physical footprint.
          </p>
        </header>

        <section className="mb-10">
          <h2 className="text-2xl font-bold mb-4">Company overview</h2>
          <p className="mb-4 leading-relaxed">
            Founded in 2012 in Melbourne, Australia by Matthew Elsley and Nick Larkins. US
            headquarters in Dallas, Texas. Elsley serves as CEO. The company has raised $50.5
            million in total funding across two rounds, including a $25 million Series B in
            January 2025 led by Hedosophia. The Series B was framed explicitly around expanding
            the retail media network, not the music service.
          </p>
          <p className="mb-4 leading-relaxed">
            QSIC reached a significant growth inflection in 2024 and 2025. In June 2025 the
            company hired David Haase, formerly CEO of the Americas for Epsilon Retail Media,
            as President of US Operations, and Artem Lavrinovich, formerly of CoolerX and
            Dunnhumby, as its first Chief Data and AI Officer. Both hires are retail media
            executives, not music industry veterans.
          </p>
          <p className="leading-relaxed">
            In March 2026 QSIC announced a partnership with Barrows Connected Store to
            synchronize in-store audio and digital video into a unified, data-driven retail
            media platform with closed-loop attribution tied to first-party retail transaction
            data.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold mb-4">What they sell</h2>
          <p className="mb-4 leading-relaxed">
            QSIC operates at two layers. The first is a commercially licensed music program for
            retail environments with AI-driven playlist management and dynamic volume
            adjustment based on ambient noise levels. The second, and more differentiated,
            layer is a retail media network built on top of the audio infrastructure. Retailers
            who deploy QSIC can sell audio advertising inventory to brands, delivered at the
            point of purchase.
          </p>
          <p className="mb-4 leading-relaxed">
            QSIC has developed a proprietary generative AI model called Lucy that creates and
            localizes audio ad content in real time, incorporating store-level data including
            local pricing, inventory, and weather conditions. The 7-Eleven Gulp Radio program
            demonstrates the model in practice: QSIC powers in-store audio across all 7-Eleven,
            Speedway, and Stripes locations in the United States, reaching 13 million daily
            shoppers.
          </p>
          <p className="leading-relaxed">
            QSIC reports average sales lifts of up to 14% across retailers that have deployed
            the platform, with individual campaigns producing up to 58% uplift.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold mb-4">Pricing</h2>
          <p className="leading-relaxed">
            QSIC does not publish pricing. Enterprise deployments are scoped based on location
            count, retail media network requirements, and integration complexity. The economic
            model for retailers deploying QSIC at advertising network scale is structurally
            different from a standard music service subscription, as a portion of the cost may
            be offset or exceeded by advertising revenue share.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold mb-4">Who theyre best for</h2>
          <p className="leading-relaxed">
            Enterprise retailers and QSR chains with large, high-traffic domestic footprints
            who are actively building or planning a retail media strategy. The buyer profile is
            not a facilities director looking for background music. It is a VP of retail media
            or a chief revenue officer asking how to monetize physical store traffic the way
            digital properties monetize web traffic. Convenience chains, grocery operators,
            QSRs, and fuel retailers are QSICs natural verticals.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold mb-4">Considerations by buyer type</h2>
          <h3 className="text-xl font-semibold mb-2 mt-6">
            Buyers whose primary need is music, not media
          </h3>
          <p className="mb-4 leading-relaxed">
            If your organization needs a licensed background music program with no current
            interest in retail media monetization, QSIC is a more complex and likely more
            expensive solution than the need requires.
          </p>
          <h3 className="text-xl font-semibold mb-2 mt-6">Smaller operators</h3>
          <p className="mb-4 leading-relaxed">
            QSICs retail media model requires meaningful location scale to make the
            economics work for advertisers. Single-location and small chain operators are not
            the target.
          </p>
          <h3 className="text-xl font-semibold mb-2 mt-6">
            Buyers outside QSICs current geographic focus
          </h3>
          <p className="leading-relaxed">
            QSIC is expanding aggressively in North America with Australian market presence.
            Buyers in other markets should verify current coverage before engaging.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold mb-4">Notable clients and track record</h2>
          <p className="leading-relaxed">
            7-Eleven, Coles Express, and McDonalds are among QSICs publicly named
            clients. The Gulp Radio deployment targeting full rollout across 12,000 stores is
            the companys most visible proof point. QSIC now reaches more than 350
            million in-store shoppers monthly following the Barrows Connected Store partnership
            announced in March 2026.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold mb-4">The verdict</h2>
          <div className="border-l-4 border-gray-300 pl-6 py-2">
            <p className="leading-relaxed">
              QSIC is the most strategically interesting company in the in-store media segment
              right now. The retail media network model is where the industry is heading, and
              QSIC is further down that road than any other pure-play in-store audio provider.
              For the right buyer, an enterprise retailer with a serious retail media agenda
              and a large domestic footprint, the conversation with QSIC is not about whether
              they have a good music catalog. It is about whether you want to turn your store
              network into an advertising asset. For buyers whose current priority is reliable
              background music at a predictable monthly cost, QSIC is solving a different
              problem than the one you have.
            </p>
          </div>
        </section>

        <footer className="mt-12 pt-8 border-t border-gray-200 text-sm text-gray-600">
          <p>
            Related reading: our full{' '}
            <a href="/analysis/stingray/" className="underline">Stingray profile</a>,{' '}
            <a href="/analysis/rockbot/" className="underline">Rockbot profile</a>, and the{' '}
            <a href="/research/background-music-pricing/" className="underline">background music pricing research</a>.
          </p>
          <p className="mt-4">Last updated: April 19, 2026.</p>
        </footer>
      </article>
    </>
  );
}
