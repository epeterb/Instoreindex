import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Altaura Review — In-Store Music Provider Profile | InStoreIndex",
  description:
    "Independent profile of Altaura: London-based sound agency building sonic identities for luxury hospitality and retail brands including Coach and Four Seasons. Pricing, clients, strengths, and verdict.",
  robots: { index: true, follow: true },
  alternates: {
    canonical: "https://instoreindex.com/analysis/altaura/",
  },
  openGraph: {
    title: "Altaura — Provider Profile | InStoreIndex",
    description:
      "London and Santa Monica-based sound agency with clients including Coach and Four Seasons. Consultancy model, not subscription.",
    url: "https://instoreindex.com/analysis/altaura/",
    siteName: "InStoreIndex",
    type: "article",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Review",
  name: "Altaura Provider Profile",
  author: {
    "@type": "Organization",
    name: "InStoreIndex",
    url: "https://instoreindex.com",
  },
  itemReviewed: {
    "@type": "Organization",
    name: "Altaura",
    description:
      "Altaura is a London-headquartered sound agency with a Santa Monica presence, designing sonic identities for luxury hospitality and retail brands.",
    address: {
      "@type": "PostalAddress",
      addressLocality: "London",
      addressCountry: "GB",
    },
  },
  reviewBody:
    "Altaura operates in a different category from every other provider on this list. It is not a music service you subscribe to. It is a creative agency you engage to build a sonic identity.",
  datePublished: "2026-04-19",
};

export default function AltauraProfilePage() {
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
          <h1 className="text-4xl mb-4">Altaura</h1>
          <p className="text-xl text-gray-100 leading-relaxed italic">
            Altaura is not a background music provider in the traditional
            sense. It is a sound agency: a creative consultancy that designs
            sonic identities for physical spaces. The distinction matters for
            buyers who are evaluating it alongside subscription-based
            platforms, because the comparison is not apples to apples.
          </p>
        </header>

        <div className="prose-content">

          <h2>Company overview</h2>
          <p>
            Headquartered in London with a presence in Santa Monica. Founded
            by a team with backgrounds in music curation, experience design,
            and behavioural science. Clients include Coach and Four Seasons.
            Altaura operates as a full-service agency: the engagement begins
            with strategy and brand analysis and ends with an ongoing music
            program that reflects the client&apos;s identity, customer
            demographics, and physical space.
          </p>
          <p>
            The company collaborates with global experience design agencies
            operating in 50 countries and works alongside AV and technology
            suppliers to deliver complete audio environments rather than music
            subscriptions.
          </p>

          <h2>What they sell</h2>
          <p>
            Music strategy and curation as a professional service. Altaura
            conducts brand consultations, customer demographic analysis, and
            acoustic assessments before designing a music program. Ongoing
            programs include dayparted scheduling, regular playlist updates,
            and adaptation to seasonal and brand priorities. The product is
            bespoke by design. There are no pre-built scenes or algorithmic
            playlists.
          </p>
          <p>
            Altaura also offers music supervision for advertising and film,
            sound system consultancy, and acoustics advisory services for
            physical space design. For brands building or redesigning a space
            from scratch, Altaura&apos;s involvement at the design stage can
            produce a materially better acoustic result than retrofitting a
            music service into a finished environment.
          </p>

          <h2>Pricing</h2>
          <p>
            Pricing is not published. Engagements are scoped individually,
            reflecting the consultancy model of the business.
          </p>

          <h2>Who they&apos;re best for</h2>
          <p>
            Luxury hospitality groups, high-end retail brands, and premium
            wellness operators for whom the in-store environment is a primary
            product differentiator. Brands like Coach, where a globally
            unified but culturally localised sound strategy requires expert
            navigation of local nuance across dozens of markets. New hotel or
            retail openings where the sound environment can be designed from
            the foundation rather than added as an afterthought.
          </p>

          <h2>Considerations by buyer type</h2>
          <p>
            <strong>
              Buyers who need scalable, low-cost music for many locations.
            </strong>{" "}
            Altaura&apos;s model does not scale the way a subscription
            platform does. A chain of 200 convenience stores is not the right
            client. A boutique hotel group with 12 properties in four
            countries might be.
          </p>
          <p>
            <strong>Buyers with short procurement timelines.</strong> The
            consultancy model requires time: brand immersion, strategy
            development, and program creation before any music plays. Buyers
            who need music next week should use a self-serve platform.
          </p>
          <p>
            <strong>
              Buyers outside hospitality, luxury retail, and premium wellness.
            </strong>{" "}
            Altaura&apos;s track record and positioning are concentrated in
            those verticals. Buyers in other categories should evaluate
            whether the boutique model translates to their context.
          </p>

          <h2>Notable clients and track record</h2>
          <p>
            Coach and Four Seasons are the most publicly visible client
            relationships. The Coach engagement involved designing a globally
            unified, culturally localised sound strategy for a brand that had
            previously relied on a uniform playlist worldwide. The Four
            Seasons relationship reflects the company&apos;s strength in
            luxury hospitality.
          </p>

          <h2>The verdict</h2>
          <p>
            Altaura operates in a different category from every other provider
            on this list. It is not a music service you subscribe to. It is a
            creative agency you engage to build a sonic identity. For the
            right buyer, that distinction is the point. For most buyers
            evaluating in-store music providers, Altaura is not the right
            comparison.
          </p>

        </div>

        <footer className="mt-12 pt-8 border-t border-navy-700 text-sm text-gray-400">
          <p>
            InStoreIndex is an independent buyer&apos;s guide. We are not
            affiliated with Altaura and do not receive compensation for
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
