import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Stingray Review: Publicly Traded In-Store Media and Retail Advertising | InStoreIndex',
  description:
    'Independent analysis of Stingray, the Montreal-based publicly traded media conglomerate running the largest US retail in-store audio advertising network with 33,500+ locations.',
  alternates: {
    canonical: 'https://instoreindex.com/analysis/stingray/',
  },
  openGraph: {
    title: 'Stingray Review: Publicly Traded In-Store Media and Retail Advertising',
    description:
      'Independent analysis of Stingray, the only publicly traded in-store media provider, with a retail media network reaching 928M+ monthly shopping visits.',
    url: 'https://instoreindex.com/analysis/stingray/',
    siteName: 'InStoreIndex',
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Stingray Review: Publicly Traded In-Store Media and Retail Advertising',
    description: 'Independent analysis of Stingray.',
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Review',
  itemReviewed: {
    '@type': 'Organization',
    name: 'Stingray',
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
    '@id': 'https://instoreindex.com/analysis/stingray/',
  },
};

export default function StingrayProfile() {
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
          <h1 className="text-4xl font-bold leading-tight mb-4">Stingray</h1>
          <p className="text-xl text-gray-700 leading-relaxed italic">
            Stingray is the only publicly traded company on this list and the only in-store
            media provider that is also a broadcaster, a radio operator, a streaming service,
            and an in-car entertainment platform. The in-store music business is one piece of a
            much larger media conglomerate. Understanding that context is the starting point
            for any serious evaluation of Stingray as a vendor.
          </p>
        </header>

        <section className="mb-10">
          <h2 className="text-2xl font-bold mb-4">Company overview</h2>
          <p className="mb-4 leading-relaxed">
            Headquartered in Montreal, Quebec. Founded by Eric Boyko, who serves as President
            and CEO. Publicly traded on the Toronto Stock Exchange, consolidating to a single
            ticker in February 2026. Approximately 1,000 employees worldwide. The company
            reaches 540 million consumers across 160 countries across all its divisions,
            including over 100 radio stations, subscription video-on-demand content, FAST
            channels, music streaming apps, karaoke platforms, and in-car infotainment systems.
          </p>
          <p className="leading-relaxed">
            The company has been in active acquisition mode. In October 2025 Stingray acquired
            DMI, a US-based in-store audio advertising firm, adding 8,500 locations to its US
            retail media network and bringing the total to 33,500 locations, making it
            dominant in pharmacy audio advertising with relationships at the two largest
            pharmacy chains in the country. In November 2025 Stingray announced the
            acquisition of TuneIn Holdings for up to $175 million, completing the transaction
            in December 2025. Revenue grew 15.4% to $124.8 million in Q3 fiscal 2026.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold mb-4">What they sell</h2>
          <p className="mb-4 leading-relaxed">
            Stingray Business sells commercially licensed background music for commercial
            environments, digital signage, and on-hold messaging. Where Stingray is
            structurally differentiated is Stingray Advertising: the retail media network
            spans 33,500-plus US locations, reaching more than 928 million shopping visits per
            month across grocery, pharmacy, convenience, home improvement, and discount retail.
          </p>
          <p className="leading-relaxed">
            In 2023 Stingray Advertising and Mood Media&rsquo;s Vibenomics division combined
            their networks, creating the largest US retail media in-store network, reaching
            over 800 million monthly shoppers across 25,000-plus locations. The DMI acquisition
            in 2025 extended Stingray&rsquo;s position further. In December 2024 Stingray
            expanded into in-store video advertising across METRO grocery and pharmacy banners
            in Canada, integrating with Vistar Media&rsquo;s programmatic ad server.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold mb-4">Pricing</h2>
          <p className="leading-relaxed">
            Stingray Business pricing for commercial music follows the same proposal-based
            model as other full-service providers. Enterprise accounts are scoped directly.
            The retail media component operates on a separate economic model where retailers
            receive revenue share on advertising sold against their shopper audience.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold mb-4">Who they&rsquo;re best for</h2>
          <p className="leading-relaxed">
            Enterprise retailers in grocery, pharmacy, convenience, and home improvement who
            want both a licensed music service and access to a nationally scaled retail media
            network. Canadian retailers in particular: Stingray&rsquo;s domestic roots and
            Canadian broadcast infrastructure give it a market presence and regulatory
            familiarity that US-headquartered providers do not replicate easily. Brands and
            advertisers buying in-store audio advertising at national scale.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold mb-4">Considerations by buyer type</h2>
          <h3 className="text-xl font-semibold mb-2 mt-6">
            Buyers whose primary need is music, not advertising
          </h3>
          <p className="mb-4 leading-relaxed">
            Stingray Business delivers, but the company&rsquo;s investment and strategic energy
            is visibly concentrated in the retail media network. Buyers who want a focused
            music service may find smaller, music-first providers offer a more attentive
            relationship.
          </p>
          <h3 className="text-xl font-semibold mb-2 mt-6">
            Buyers who want to avoid complexity
          </h3>
          <p className="mb-4 leading-relaxed">
            Stingray is a publicly traded media conglomerate with multiple divisions, active
            M&amp;A activity, and a portfolio spanning radio stations, streaming apps, in-car
            entertainment, and retail media. For buyers who want a straightforward music vendor
            with clear focus, that complexity is worth weighing.
          </p>
          <h3 className="text-xl font-semibold mb-2 mt-6">Smaller operators</h3>
          <p className="leading-relaxed">
            The retail media network economics require meaningful scale. Self-serve providers
            serve single-location and small chain buyers more efficiently.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold mb-4">Notable clients and track record</h2>
          <p className="leading-relaxed">
            Stingray&rsquo;s retail media network spans Kroger, Albertsons, Safeway,
            Southeastern Grocers, Hy-Vee, Food Lion, and Giant/Martin&rsquo;s in grocery. The
            DMI acquisition added the two largest pharmacy chains in the United States. METRO
            grocery and pharmacy banners in Canada are served through the expanded audio and
            video advertising platform. As a publicly traded company, Stingray discloses
            financial performance quarterly, providing a level of transparency most providers
            in this segment cannot match.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold mb-4">The verdict</h2>
          <div className="border-l-4 border-gray-300 pl-6 py-2">
            <p className="leading-relaxed">
              Stingray occupies a
