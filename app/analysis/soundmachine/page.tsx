import { Metadata } from "next";

export const metadata: Metadata = {
  title: "SoundMachine Review — In-Store Music Provider Profile | InStoreIndex",
  description:
    "Independent profile of SoundMachine: commercial music platform with a 61M+ track licensed catalog, scheduling precision, and no-hardware deployment across US, Canada, and Japan. Pricing from $26.95/month.",
  robots: { index: true, follow: true },
  alternates: {
    canonical: "https://instoreindex.com/analysis/soundmachine/",
  },
  openGraph: {
    title: "SoundMachine — Provider Profile | InStoreIndex",
    description:
      "61M+ licensed tracks, scheduling precision, no proprietary hardware required. Self-serve tier with genuine depth for US, Canada, and Japan operators.",
    url: "https://instoreindex.com/analysis/soundmachine/",
    siteName: "InStoreIndex",
    type: "article",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Review",
  name: "SoundMachine Provider Profile",
  author: {
    "@type": "Organization",
    name: "InStoreIndex",
    url: "https://instoreindex.com",
  },
  itemReviewed: {
    "@type": "Organization",
    name: "SoundMachine",
    description:
      "SoundMachine is a commercial music platform serving businesses across the US, Canada, and Japan with a 61M+ track licensed catalog and app-only deployment.",
  },
  reviewBody:
    "SoundMachine is the right choice for buyers who want maximum catalog depth at a self-serve price point, with scheduling control that goes beyond what most competitors at this tier offer, and without the hardware procurement conversation.",
  datePublished: "2026-04-19",
};

export default function SoundMachineProfilePage() {
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
          <h1 className="text-4xl mb-4">SoundMachine</h1>
          <p className="text-xl text-gray-100 leading-relaxed italic">
            SoundMachine competes on catalog size and scheduling precision.
            At 61 million licensed tracks and a pricing structure that does
            not require dedicated hardware, it sits at an interesting point
            in the self-serve tier: more catalog than most competitors at
            the same price, more flexibility than providers tied to
            proprietary players, and scheduling tools detailed enough to
            satisfy buyers who want control down to the minute.
          </p>
        </header>

        <div className="prose-content">

          <h2>Company overview</h2>
          <p>
            SoundMachine is a music-for-business platform with coverage in
            the United States, Canada, and Japan, where the subscription
            includes all necessary licensing without additional local fees.
            Outside those three markets, local licensing arrangements vary.
            The platform does not require proprietary hardware, running from
            the SoundMachine app on iOS and Android devices or through
            compatible integrations including Sonos. Business plans are
            available month-to-month or annually, with a 10% discount for
            annual commitments and volume discounts for accounts with ten or
            more licenses.
          </p>

          <h2>What they sell</h2>
          <p>
            Licensed background music with 61 million tracks, 500-plus
            playlists and stations, and scheduling tools that allow
            programming by time of day, day of week, and occasion. The Mix
            tool allows buyers to blend different stations together into a
            custom hybrid sound. Zone management supports multiple audio
            environments within a single location from one subscription.
            In-store messaging is supported for promotional announcements.
          </p>
          <p>
            No dedicated hardware is required. The app-only delivery model
            lowers the barrier to deployment and eliminates hardware
            procurement from the vendor conversation. Enterprise custom
            solutions are available for larger organizations with specific
            requirements.
          </p>

          <h2>Pricing</h2>
          <p>
            Business plan: $26.95 per month. Business Premium plan: $33.95
            per month. Annual plans receive a 10% discount. Volume discounts
            apply at ten or more licenses. No dedicated hardware cost.
          </p>

          <h2>Who they&apos;re best for</h2>
          <p>
            Buyers who want the largest catalog in the self-serve tier
            without paying enterprise prices. Multi-zone locations where the
            scheduling precision and zone management tools solve a real
            operational problem. Buyers who do not want to purchase or
            manage proprietary hardware. US, Canada, and Japan operators who
            want all-in licensing with no PRO surprises.
          </p>

          <h2>Considerations by buyer type</h2>
          <p>
            <strong>
              International operators outside US, Canada, and Japan.
            </strong>{" "}
            Licensing coverage requires separate verification for other
            markets. SoundMachine&apos;s clean all-in model applies to
            those three markets only.
          </p>
          <p>
            <strong>Buyers who want human curation.</strong> SoundMachine is
            a catalog and scheduling platform. Program building is
            buyer-driven. Buyers who want a music team curating for their
            brand should look at Activaire or Altaura.
          </p>
          <p>
            <strong>Buyers who need retail media or signage.</strong>{" "}
            SoundMachine is music-only.
          </p>

          <h2>Notable clients and track record</h2>
          <p>
            SoundMachine does not publish a prominent named client list. The
            platform&apos;s positioning is built on catalog size, scheduling
            precision, and the no-hardware deployment model rather than
            marquee account relationships.
          </p>

          <h2>The verdict</h2>
          <p>
            SoundMachine is the right choice for buyers who want maximum
            catalog depth at a self-serve price point, with scheduling
            control that goes beyond what most competitors at this tier
            offer, and without the hardware procurement conversation. The
            no-dedicated-hardware model is genuinely differentiated in a
            segment where most providers tie their service to a proprietary
            player. For buyers with more specific needs, whether curation,
            retail media, enterprise controls, or international coverage,
            those requirements point elsewhere.
          </p>

        </div>

        <footer className="mt-12 pt-8 border-t border-navy-700 text-sm text-gray-400">
          <p>
            InStoreIndex is an independent buyer&apos;s guide. We are not
            affiliated with SoundMachine and do not receive compensation for
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
