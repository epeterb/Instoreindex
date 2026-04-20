import { Metadata } from "next";

export const metadata: Metadata = {
  title: "In-Store Media Providers — Independent Reviews | InStoreIndex",
  description:
    "Independent research on 11 providers across background music, digital signage, and retail media networks. Full profiles, head-to-head comparisons, and market pricing research.",
  alternates: { canonical: "https://instoreindex.com/providers/" },
};

const providers = [
  {
    name: "Activaire",
    slug: "activaire",
    tagline: "Brooklyn-based sound agency. Human curation, 43 countries, clients including Uniqlo and Eaton Hotels.",
  },
  {
    name: "Altaura",
    slug: "altaura",
    tagline: "London and Santa Monica consultancy. Sonic identity for luxury hospitality and retail. Clients include Coach and Four Seasons.",
  },
  {
    name: "Jukeboxy",
    slug: "jukeboxy",
    tagline: "New York-based mid-market platform for US and Canada. 45M+ tracks, honest pricing, seven-day human support.",
  },
  {
    name: "Mood Media",
    slug: "mood-media",
    tagline: "The largest in-store media provider globally. 100,000+ locations, 140 countries, PE-owned since 2020.",
  },
  {
    name: "MTI Digital",
    slug: "mti",
    tagline: "Family-owned since 1988. Human-curated programming, dedicated account management, Detroit-headquartered.",
  },
  {
    name: "QSIC",
    slug: "qsic",
    tagline: "Retail media infrastructure using audio as the delivery channel. Powers 7-Eleven Gulp Radio.",
  },
  {
    name: "Rockbot",
    slug: "rockbot",
    tagline: "Google-backed unified media platform. Enterprise controls at self-serve pricing. Walmart and Planet Fitness.",
  },
  {
    name: "SiriusXM Business Suite",
    slug: "siriusxm-business",
    tagline: "Three B2B products under one public parent. Pandora CloudCover from $16.95/month. Dunkin' and Amazon One Medical.",
  },
  {
    name: "SoundMachine",
    slug: "soundmachine",
    tagline: "61M+ track catalog, scheduling precision, no proprietary hardware. Self-serve for US, Canada, Japan.",
  },
  {
    name: "Soundtrack Your Brand",
    slug: "soundtrack-your-brand",
    tagline: "Spotify-backed Stockholm platform. Largest commercially licensed catalog at 100M+ tracks, 74 countries.",
  },
  {
    name: "Stingray",
    slug: "stingray",
    tagline: "Publicly traded Montreal-based media conglomerate. Largest US retail audio advertising network at 33,500+ locations.",
  },
];

const comparisons = [
  {
    title: "MTI Digital vs. Mood Media",
    slug: "mti-vs-mood-media",
    tagline: "Family-owned boutique vs. global enterprise scale. Which is right for your chain?",
  },
  {
    title: "MTI Digital vs. Rockbot",
    slug: "mti-vs-rockbot",
    tagline: "Dedicated account model vs. software platform. Different buyers, different products.",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  name: "In-Store Media Providers",
  url: "https://instoreindex.com/providers/",
  description:
    "Independent research on 11 providers across background music, digital signage, and retail media networks.",
  mainEntity: {
    "@type": "ItemList",
    numberOfItems: providers.length,
    itemListElement: providers.map((p, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: p.name,
      url: `https://instoreindex.com/analysis/${p.slug}/`,
    })),
  },
};

const breadcrumbLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://instoreindex.com/" },
    { "@type": "ListItem", position: 2, name: "Providers" },
  ],
};

export default function ProvidersPage(): JSX.Element {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <main className="max-w-5xl mx-auto px-4 sm:px-6 py-12">

        <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-sm text-gray-400 mb-6">
          <a href="/" className="hover:text-white no-underline">Home</a>
          <span>/</span>
          <span className="text-gray-300">Providers</span>
        </nav>

        <header className="mb-12">
          <p className="text-sm font-medium text-gray-400 uppercase tracking-widest mb-2">
            Independent Research
          </p>
          <h1 className="text-4xl mb-4">In-Store Media Providers</h1>
          <p className="text-xl text-gray-100 leading-relaxed max-w-3xl">
            Independent profiles of 11 providers across background music,
            digital signage, and retail media networks. No vendor
            relationships. No affiliate links. No pay-to-play rankings.
          </p>
        </header>

        <section className="mb-16">
          <h2 className="text-2xl font-semibold text-white mb-2">
            Provider Reviews
          </h2>
          <p className="text-gray-400 mb-6">
            Full independent profiles of every provider we track. Company
            background, pricing research, strengths, weaknesses, and verdict.
          </p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {providers.map((p) => (
              
                key={p.slug}
                href={`/analysis/${p.slug}/`}
                className="block p-5 bg-navy-900 border border-navy-800 rounded-lg hover:border-accent/50 transition-colors no-underline group"
              >
                <h3 className="text-white font-semibold group-hover:text-accent-light transition-colors">
                  {p.name}
                </h3>
                <p className="text-sm text-gray-400 mt-2 leading-relaxed">
                  {p.tagline}
                </p>
                <p className="text-xs text-accent mt-3 group-hover:text-accent-light transition-colors">
                  Full profile →
                </p>
              </a>
            ))}
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-2xl font-semibold text-white mb-2">
            Head-to-Head Comparisons
          </h2>
          <p className="text-gray-400 mb-6">
            The comparisons real buyers make, with a position taken on each.
          </p>

          <div className="grid sm:grid-cols-2 gap-4">
            {comparisons.map((c) => (
              
                key={c.slug}
                href={`/analysis/${c.slug}/`}
                className="block p-5 bg-navy-900 border border-navy-800 rounded-lg hover:border-accent/50 transition-colors no-underline group"
              >
                <h3 className="text-white font-semibold group-hover:text-accent-light transition-colors">
                  {c.title}
                </h3>
                <p className="text-sm text-gray-400 mt-2 leading-relaxed">
                  {c.tagline}
                </p>
                <p className="text-xs text-accent mt-3 group-hover:text-accent-light transition-colors">
                  Read comparison →
                </p>
              </a>
            ))}
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-white mb-2">
            Related Research
          </h2>
          <p className="text-gray-400 mb-6">
            Original market research that supports the provider reviews.
          </p>

          
            href="/research/background-music-pricing/"
            className="block p-5 bg-navy-900 border border-navy-800 rounded-lg hover:border-accent/50 transition-colors no-underline group max-w-2xl"
          >
            <p className="text-xs font-medium text-gray-400 uppercase tracking-widest mb-1">
              Original Research
            </p>
            <h3 className="text-white font-semibold group-hover:text-accent-light transition-colors">
              What Background Music Really Costs in 2026
            </h3>
            <p className="text-sm text-gray-400 mt-2 leading-relaxed">
              A vendor-neutral look at per-location pricing, hardware
              economics, and contract mechanics across 11 commercial music
              providers.
            </p>
            <p className="text-xs text-accent mt-3 group-hover:text-accent-light transition-colors">
              Read the research →
            </p>
          </a>
        </section>

      </main>
    </>
  );
}
