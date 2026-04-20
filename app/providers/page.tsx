import { Metadata } from "next";

export const metadata: Metadata = {
  title: "In-Store Media Providers — Independent Reviews | InStoreIndex",
  description: "Independent research on 11 providers across background music, digital signage, and retail media networks. Full profiles, head-to-head comparisons, and market pricing research.",
  alternates: { canonical: "https://instoreindex.com/providers/" },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  name: "In-Store Media Providers",
  url: "https://instoreindex.com/providers/",
  description: "Independent research on 11 providers across background music, digital signage, and retail media networks.",
};

const breadcrumbLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://instoreindex.com/" },
    { "@type": "ListItem", position: 2, name: "Providers" },
  ],
};

export default function ProvidersPage() {
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
          <h2 className="text-2xl font-semibold text-white mb-2">Provider Reviews</h2>
          <p className="text-gray-400 mb-6">Full independent profiles of every provider we track. Company background, pricing research, strengths, weaknesses, and verdict.</p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">

            <a href="/analysis/activaire/" className="block p-5 bg-navy-900 border border-navy-800 rounded-lg hover:border-accent no-underline group">
              <h3 className="text-white font-semibold">Activaire</h3>
              <p className="text-sm text-gray-400 mt-2 leading-relaxed">Brooklyn-based sound agency. Human curation, 43 countries, clients including Uniqlo and Eaton Hotels.</p>
              <p className="text-xs text-accent mt-3">Full profile →</p>
            </a>

            <a href="/analysis/altaura/" className="block p-5 bg-navy-900 border border-navy-800 rounded-lg hover:border-accent no-underline group">
              <h3 className="text-white font-semibold">Altaura</h3>
              <p className="text-sm text-gray-400 mt-2 leading-relaxed">London and Santa Monica consultancy. Sonic identity for luxury hospitality and retail. Clients include Coach and Four Seasons.</p>
              <p className="text-xs text-accent mt-3">Full profile →</p>
            </a>

            <a href="/analysis/jukeboxy/" className="block p-5 bg-navy-900 border border-navy-800 rounded-lg hover:border-accent no-underline group">
              <h3 className="text-white font-semibold">Jukeboxy</h3>
              <p className="text-sm text-gray-400 mt-2 leading-relaxed">New York-based mid-market platform for US and Canada. 45M+ tracks, honest pricing, seven-day human support.</p>
              <p className="text-xs text-accent mt-3">Full profile →</p>
            </a>

            <a href="/analysis/mood-media/" className="block p-5 bg-navy-900 border border-navy-800 rounded-lg hover:border-accent no-underline group">
              <h3 className="text-white font-semibold">Mood Media</h3>
              <p className="text-sm text-gray-400 mt-2 leading-relaxed">The largest in-store media provider globally. 100,000+ locations, 140 countries, PE-owned since 2020.</p>
              <p className="text-xs text-accent mt-3">Full profile →</p>
            </a>

            <a href="/analysis/mti/" className="block p-5 bg-navy-900 border border-navy-800 rounded-lg hover:border-accent no-underline group">
              <h3 className="text-white font-semibold">MTI Digital</h3>
              <p className="text-sm text-gray-400 mt-2 leading-relaxed">Family-owned since 1988. Human-curated programming, dedicated account management, Detroit-headquartered.</p>
              <p className="text-xs text-accent mt-3">Full profile →</p>
            </a>

            <a href="/analysis/qsic/" className="block p-5 bg-navy-900 border border-navy-800 rounded-lg hover:border-accent no-underline group">
              <h3 className="text-white font-semibold">QSIC</h3>
              <p className="text-sm text-gray-400 mt-2 leading-relaxed">Retail media infrastructure using audio as the delivery channel. Powers 7-Eleven Gulp Radio.</p>
              <p className="text-xs text-accent mt-3">Full profile →</p>
            </a>

            <a href="/analysis/rockbot/" className="block p-5 bg-navy-900 border border-navy-800 rounded-lg hover:border-accent no-underline group">
              <h3 className="text-white font-semibold">Rockbot</h3>
              <p className="text-sm text-gray-400 mt-2 leading-relaxed">Google-backed unified media platform. Enterprise controls at self-serve pricing. Walmart and Planet Fitness.</p>
              <p className="text-xs text-accent mt-3">Full profile →</p>
            </a>

            <a href="/analysis/siriusxm-business/" className="block p-5 bg-navy-900 border border-navy-800 rounded-lg hover:border-accent no-underline group">
              <h3 className="text-white font-semibold">SiriusXM Business Suite</h3>
              <p className="text-sm text-gray-400 mt-2 leading-relaxed">Three B2B products under one public parent. Pandora CloudCover from $16.95/month. Dunkin and Amazon One Medical.</p>
              <p className="text-xs text-accent mt-3">Full profile →</p>
            </a>

            <a href="/analysis/soundmachine/" className="block p-5 bg-navy-900 border border-navy-800 rounded-lg hover:border-accent no-underline group">
              <h3 className="text-white font-semibold">SoundMachine</h3>
              <p className="text-sm text-gray-400 mt-2 leading-relaxed">61M+ track catalog, scheduling precision, no proprietary hardware. Self-serve for US, Canada, Japan.</p>
              <p className="text-xs text-accent mt-3">Full profile →</p>
            </a>

            <a href="/analysis/soundtrack-your-brand/" className="block p-5 bg-navy-900 border border-navy-800 rounded-lg hover:border-accent no-underline group">
              <h3 className="text-white font-semibold">Soundtrack Your Brand</h3>
              <p className="text-sm text-gray-400 mt-2 leading-relaxed">Spotify-backed Stockholm platform. Largest commercially licensed catalog at 100M+ tracks, 74 countries.</p>
              <p className="text-xs text-accent mt-3">Full profile →</p>
            </a>

            <a href="/analysis/stingray/" className="block p-5 bg-navy-900 border border-navy-800 rounded-lg hover:border-accent no-underline group">
              <h3 className="text-white font-semibold">Stingray</h3>
              <p className="text-sm text-gray-400 mt-2 leading-relaxed">Publicly traded Montreal-based media conglomerate. Largest US retail audio advertising network at 33,500+ locations.</p>
              <p className="text-xs text-accent mt-3">Full profile →</p>
            </a>

          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-2xl font-semibold text-white mb-2">Head-to-Head Comparisons</h2>
          <p className="text-gray-400 mb-6">The comparisons real buyers make, with a position taken on each.</p>

          <div className="grid sm:grid-cols-2 gap-4">

            <a href="/analysis/mti-vs-mood-media/" className="block p-5 bg-navy-900 border border-navy-800 rounded-lg hover:border-accent no-underline group">
              <h3 className="text-white font-semibold">MTI Digital vs. Mood Media</h3>
              <p className="text-sm text-gray-400 mt-2 leading-relaxed">Family-owned boutique vs. global enterprise scale. Which is right for your chain?</p>
              <p className="text-xs text-accent mt-3">Read comparison →</p>
            </a>

            <a href="/analysis/mti-vs-rockbot/" className="block p-5 bg-navy-900 border border-navy-800 rounded-lg hover:border-accent no-underline group">
              <h3 className="text-white font-semibold">MTI Digital vs. Rockbot</h3>
              <p className="text-sm text-gray-400 mt-2 leading-relaxed">Dedicated account model vs. software platform. Different buyers, different products.</p>
              <p className="text-xs text-accent mt-3">Read comparison →</p>
            </a>

          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-white mb-2">Related Research</h2>
          <p className="text-gray-400 mb-6">Original market research that supports the provider reviews.</p>

          <a href="/research/background-music-pricing/" className="block p-5 bg-navy-900 border border-navy-800 rounded-lg hover:border-accent no-underline group max-w-2xl">
            <p className="text-xs font-medium text-gray-400 uppercase tracking-widest mb-1">Original Research</p>
            <h3 className="text-white font-semibold">What Background Music Really Costs in 2026</h3>
            <p className="text-sm text-gray-400 mt-2 leading-relaxed">A vendor-neutral look at per-location pricing, hardware economics, and contract mechanics across 11 commercial music providers.</p>
            <p className="text-xs text-accent mt-3">Read the research →</p>
          </a>
        </section>

      </main>
    </>
  );
}
