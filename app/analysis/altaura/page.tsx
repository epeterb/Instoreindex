import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Altaura Review: London-Based Sound Agency for Luxury Brands | InStoreIndex',
  description:
    'Independent analysis of Altaura, a London and Santa Monica-based sound agency building sonic identities for luxury hospitality and retail brands including Coach and Four Seasons.',
  alternates: {
    canonical: 'https://instoreindex.com/analysis/altaura/',
  },
  openGraph: {
    title: 'Altaura Review: London-Based Sound Agency for Luxury Brands',
    description:
      'Independent analysis of Altaura, a London and Santa Monica-based sound agency with clients including Coach and Four Seasons.',
    url: 'https://instoreindex.com/analysis/altaura/',
    siteName: 'InStoreIndex',
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Altaura Review: London-Based Sound Agency for Luxury Brands',
    description:
      'Independent analysis of Altaura, a sound agency for luxury hospitality and retail brands.',
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Review',
  itemReviewed: {
    '@type': 'Organization',
    name: 'Altaura',
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
    '@id': 'https://instoreindex.com/analysis/altaura/',
  },
};

export default function AltauraProfile() {
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
          <h1 className="text-4xl font-bold leading-tight mb-4">Altaura</h1>
          <p className="text-xl text-gray-700 leading-relaxed italic">
            Altaura is not a background music provider in the traditional sense. It is a sound
            agency: a creative consultancy that designs sonic identities for physical spaces.
            The distinction matters for buyers who are evaluating it alongside subscription-based
            platforms, because the comparison is not apples to apples.
          </p>
        </header>

        <section className="mb-10">
          <h2 className="text-2xl font-bold mb-4">Company overview</h2>
          <p className="mb-4 leading-relaxed">
            Headquartered in London with a presence in Santa Monica. Founded by a team with
            backgrounds in music curation, experience design, and behavioural science. Clients
            include Coach and Four Seasons. Altaura operates as a full-service agency: the
            engagement begins with strategy and brand analysis and ends with an ongoing music
            program that reflects the client&rsquo;s identity, customer demographics, and
            physical space.
          </p>
          <p className="leading-relaxed">
            The company collaborates with global experience design agencies operating in 50
            countries and works alongside AV and technology suppliers to deliver complete audio
            environments rather than music subscriptions.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold mb-4">What they sell</h2>
          <p className="mb-4 leading-relaxed">
            Music strategy and curation as a professional service. Altaura conducts brand
            consultations, customer demographic analysis, and acoustic assessments before
            designing a music program. Ongoing programs include dayparted scheduling, regular
            playlist updates, and adaptation to seasonal and brand priorities. The product is
            bespoke by design. There are no pre-built scenes or algorithmic playlists.
          </p>
          <p className="mb-4 leading-relaxed">
            Altaura also offers music supervision for advertising and film, sound system
            consultancy, and acoustics advisory services for physical space design. For brands
            building or redesigning a space from scratch, Altaura&rsquo;s involvement at the
            design stage can produce a materially better acoustic result than retrofitting a
            music service into a finished environment.
          </p>
          <p className="leading-relaxed">
            Pricing is not published. Engagements are scoped individually.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold mb-4">Who they&rsquo;re best for</h2>
          <p className="leading-relaxed">
            Luxury hospitality groups, high-end retail brands, and premium wellness operators for
            whom the in-store environment is a primary product differentiator. Brands like
            Coach, where a globally unified but culturally localised sound strategy requires
            expert navigation of local nuance across dozens of markets. New hotel or retail
            openings where the sound environment can be designed from the foundation rather
            than added as an afterthought.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold mb-4">Considerations by buyer type</h2>
          <h3 className="text-xl font-semibold mb-2 mt-6">
            Buyers who need scalable, low-cost music for many locations
          </h3>
          <p className="mb-4 leading-relaxed">
            Altaura&rsquo;s model does not scale the way a subscription platform does. A chain
            of 200 convenience stores is not the right client. A boutique hotel group with 12
            properties in four countries might be.
          </p>
          <h3 className="text-xl font-semibold mb-2 mt-6">
            Buyers with short procurement timelines
          </h3>
          <p className="mb-4 leading-relaxed">
            The consultancy model requires time: brand immersion, strategy development, and
            program creation before any music plays. Buyers who need music next week should use
            a self-serve platform.
          </p>
          <h3 className="text-xl font-semibold mb-2 mt-6">
            Buyers outside hospitality, luxury retail, and premium wellness
          </h3>
          <p className="leading-relaxed">
            Altaura&rsquo;s track record and positioning are concentrated in those verticals.
            Buyers in other categories should evaluate whether the boutique model translates to
            their context.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold mb-4">Notable clients and track record</h2>
          <p className="leading-relaxed">
            Coach and Four Seasons are the most publicly visible client relationships. The
            Coach engagement involved designing a globally unified, culturally localised sound
            strategy for a brand that had previously relied on a uniform playlist worldwide.
            The Four Seasons relationship reflects the company&rsquo;s strength in luxury
            hospitality.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold mb-4">The verdict</h2>
          <div className="border-l-4 border-gray-300 pl-6 py-2">
            <p className="leading-relaxed">
              Altaura operates in a different category from every other provider on this list.
              It is not a music service you subscribe to. It is a creative agency you engage to
              build a sonic identity. For the right buyer, that distinction is the point. For
              most buyers evaluating in-store music providers, Altaura is not the right
              comparison.
            </p>
          </div>
        </section>

        <footer className="mt-12 pt-8 border-t border-gray-200 text-sm text-gray-600">
          <p>
            Related reading: our full{' '}
            <a href="/analysis/activaire/" className="underline">
              Activaire profile
            </a>
            ,{' '}
            <a href="/analysis/mti/" className="underline">
              MTI Digital profile
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
