import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Stingray Review — In-Store Music Provider Profile | InStoreIndex",
  description:
    "Independent profile of Stingray: publicly traded Montreal-based media conglomerate running the largest US retail in-store audio advertising network with 33,500+ locations.",
  robots: { index: true, follow: true },
  alternates: {
    canonical: "https://instoreindex.com/analysis/stingray/",
  },
  openGraph: {
    title: "Stingray — Provider Profile | InStoreIndex",
    description:
      "Publicly traded media conglomerate with a US retail media network reaching 928M+ monthly shopping visits across grocery, pharmacy, convenience, and home improvement.",
    url: "https://instoreindex.com/analysis/stingray/",
    siteName: "InStoreIndex",
    type: "article",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Review",
  name: "Stingray Provider Profile",
  author: {
    "@type": "Organization",
    name: "InStoreIndex",
    url: "https://instoreindex.com",
  },
  itemReviewed: {
    "@type": "Organization",
    name: "Stingray",
    description:
      "Stingray is a publicly traded Canadian media and technology company headquartered in Montreal, operating commercial music, retail advertising, and broadcast businesses.",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Montreal",
      addressRegion: "QC",
      addressCountry: "CA",
    },
  },
  reviewBody:
    "Stingray occupies a different position in this market than any other provider. It is not primarily an in-store music company. It is a media and technology conglomerate that operates an in-store music business and, increasingly, a retail media network of national scale.",
  datePublished: "2026-04-19",
};

export default function StingrayProfilePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <main className="max-w-3xl mx-auto px-4 py-12">

        <header className="mb-10">
          <p className="text-sm font-medium text-gray-400 uppercase tracking-widest mb-2">
            Provider Profile
          </p>
          <h1 className="text-4xl mb-4">Stingray</h1>
          <p className="text-xl text-gray-100 leading-relaxed italic">
            Stingray is the only publicly traded company on this list and the
            only in-store media provider that is also a broadcaster, a radio
            operator, a streaming service, and an in-car entertainment
            platform. The in-store music business is one piece of a much
            larger media conglomerate. Understanding that context is the
            starting point for any serious evaluation of Stingray as a vendor.
          </p>
        </header>

        <div className="prose-content">

          <h2>Company overview</h2>
          <p>
            Headquartered in Montreal, Quebec. Founded by Eric Boyko, who
            serves as President and CEO. Publicly traded on the Toronto Stock
            Exchange, consolidating to a single ticker in February 2026.
            Approximately 1,000 employees worldwide. The company reaches 540
            million consumers across 160 countries across all its divisions,
            including over 100 radio stations, subscription video-on-demand
            content, FAST channels, music streaming apps, karaoke platforms,
            and in-car infotainment systems.
          </p>
          <p>
            The company has been in active acquisition mode. In October 2025
            Stingray acquired DMI, a US-based in-store audio advertising firm,
            adding 8,500 locations to its US retail media network and bringing
            the total to 33,500 locations, making it dominant in pharmacy
            audio advertising with relationships at the two largest pharmacy
            chains in the country. In November 2025 Stingray announced the
            acquisition of TuneIn Holdings for up to $175 million, completing
            the transaction in December 2025. Revenue grew 15.4% to $124.8
            million in Q3 fiscal 2026.
          </p>

          <h2>What they sell</h2>
          <p>
            Stingray Business sells commercially licensed background music for
            commercial environments, digital signage, and on-hold messaging.
            Where Stingray is structurally differentiated is Stingray
            Advertising: the retail media network spans 33,500-plus US
            locations, reaching more than 928 million shopping visits per
            month across grocery, pharmacy, convenience, home improvement,
            and discount retail.
          </p>
          <p>
            In 2023 Stingray Advertising and Mood Media&apos;s Vibenomics
            division combined their networks, creating the largest US retail
            media in-store network, reaching over 800 million monthly
            shoppers across 25,000-plus locations. The DMI acquisition in
            2025 extended Stingray&apos;s position further. In December 2024
            Stingray expanded into in-store video advertising across METRO
            grocery and pharmacy banners in Canada, integrating with Vistar
            Media&apos;s programmatic ad server.
          </p>

          <h2>Pricing</h2>
          <p>
            Stingray Business pricing for commercial music follows the same
            proposal-based model as other full-service providers. Enterprise
            accounts are scoped directly. The retail media component operates
            on a separate economic model where retailers receive revenue share
            on advertising sold against their shopper audience.
          </p>

          <h2>Who they&apos;re best for</h2>
          <p>
            Enterprise retailers in grocery, pharmacy, convenience, and home
            improvement who want both a licensed music service and access to
            a nationally scaled retail media network. Canadian retailers in
            particular: Stingray&apos;s domestic roots and Canadian broadcast
            infrastructure give it a market presence and regulatory
            familiarity that US-headquartered providers do not replicate
            easily. Brands and advertisers buying in-store audio advertising
            at national scale.
          </p>

          <h2>Considerations by buyer type</h2>
          <p>
            <strong>
              Buyers whose primary need is music, not advertising.
            </strong>{" "}
            Stingray Business delivers, but the company&apos;s investment and
            strategic energy is visibly concentrated in the retail media
            network. Buyers who want a focused music service may find smaller,
            music-first providers offer a more attentive relationship.
          </p>
          <p>
            <strong>Buyers who want to avoid complexity.</strong> Stingray is
            a publicly traded media conglomerate with multiple divisions,
            active M&amp;A activity, and a portfolio spanning radio stations,
            streaming apps, in-car entertainment, and retail media. For
            buyers who want a straightforward music vendor with clear focus,
            that complexity is worth weighing.
          </p>
          <p>
            <strong>Smaller operators.</strong> The retail media network
            economics require meaningful scale. Self-serve providers serve
            single-location and small chain buyers more efficiently.
          </p>

          <h2>Notable clients and track record</h2>
          <p>
            Stingray&apos;s retail media network spans Kroger, Albertsons,
            Safeway, Southeastern Grocers, Hy-Vee, Food Lion, and
            Giant/Martin&apos;s in grocery. The DMI acquisition added the two
            largest pharmacy chains in the United States. METRO grocery and
            pharmacy banners in Canada are served through the expanded audio
            and video advertising platform. As a publicly traded company,
            Stingray discloses financial performance quarterly, providing a
            level of transparency most providers in this segment cannot
            match.
          </p>

          <h2>The verdict</h2>
          <p>
            Stingray occupies a different position in this market than any
            other provider on this site. It is not primarily an in-store
            music company. It is a media and technology conglomerate that
            operates an in-store music business and, increasingly, a retail
            media network of national scale. For enterprise retailers who
            want music and want to monetize their physical footprint through
            advertising, Stingray and QSIC are the two providers building
            infrastructure specifically for that purpose. Stingray brings
            the scale and the existing network. For buyers whose requirement
            is music and nothing more, Stingray Business delivers, but it is
            not the most focused or attentive vendor in the category for
            that specific need.
          </p>

        </div>

        <footer className="mt-12 pt-8 border-t border-navy-700 text-sm text-gray-400">
          <p>
            InStoreIndex is an independent buyer&apos;s guide. We are not
            affiliated with Stingray and do not receive compensation for
            provider profiles.{" "}
            <a href="/about/" className="underline">
              About our methodology.
            </a>
          </p>
        </footer>

      </main>
    </>
  );
}
