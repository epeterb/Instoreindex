import { getAllPages, getAllProviders, type Provider } from "@/lib/data";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: 'In-Store Media Provider Power Rankings — InStoreIndex',
  description: 'Ranked list of in-store media providers by service breadth, market reach, vertical coverage, and platform maturity.',
  robots: { index: false, follow: false },
};

interface ScoredProvider {
  provider: Provider;
  serviceScore: number;
  verticalScore: number;
  scaleScore: number;
  platformScore: number;
  contentScore: number;
  totalScore: number;
  rank: number;
}

function scoreProviders(providers: Provider[], allPages: { slug: string }[]): ScoredProvider[] {
  const maxServices = Math.max(...providers.map(p => p.services.length));
  const maxVerticals = Math.max(...providers.map(p => p.verticals.length));

  const scored = providers.map(p => {
    // Service breadth (0-25): more services = broader platform
    const serviceScore = Math.round((p.services.length / maxServices) * 25);

    // Vertical coverage (0-15): more verticals = larger addressable market
    const verticalScore = Math.round((p.verticals.length / maxVerticals) * 15);

    // Scale & market presence (0-30): company size, clients, heritage, parent co
    let scaleScore = 0;
    if (p.company_size === 'enterprise') scaleScore += 16;
    else if (p.company_size === 'mid-market') scaleScore += 7;
    else scaleScore += 3;
    if (p.notable_clients) {
      const clientCount = p.notable_clients.split(',').length;
      scaleScore += Math.min(8, clientCount * 2);
    }
    if (p.parent_company) scaleScore += 3;
    if (p.founded_year && p.founded_year <= 2010) scaleScore += 3;
    else if (p.founded_year && p.founded_year <= 2015) scaleScore += 1;

    // Platform maturity (0-15): catalog size, multi-category depth
    let platformScore = 0;
    if (p.music_catalog_size) {
      const sizeStr = p.music_catalog_size.toLowerCase();
      if (sizeStr.includes('120m')) platformScore += 10;
      else if (sizeStr.includes('100m')) platformScore += 9;
      else if (sizeStr.includes('61m') || sizeStr.includes('58m')) platformScore += 7;
      else if (sizeStr.includes('40m')) platformScore += 5;
      else if (sizeStr.includes('18m')) platformScore += 4;
      else platformScore += 3;
    }
    // Multi-category providers get a platform bonus
    const hasMusic = p.services.some(s => s.includes('music') || s.includes('curation'));
    const hasSignage = p.services.some(s => s.includes('signage'));
    const hasAds = p.services.some(s => s.includes('rmn') || s.includes('advertising') || s.includes('retail_media'));
    const categoryCount = [hasMusic, hasSignage, hasAds].filter(Boolean).length;
    if (categoryCount >= 3) platformScore += 5;
    else if (categoryCount >= 2) platformScore += 3;

    // Content coverage on InStoreIndex (0-15): proxy for market relevance
    const pageCount = allPages.filter(pg => pg.slug.includes(p.slug)).length;
    const contentScore = Math.min(15, Math.round((pageCount / 50) * 15));

    const totalScore = serviceScore + verticalScore + scaleScore + platformScore + contentScore;

    return {
      provider: p,
      serviceScore,
      verticalScore,
      scaleScore,
      platformScore,
      contentScore,
      totalScore,
      rank: 0,
    };
  });

  scored.sort((a, b) => b.totalScore - a.totalScore);
  scored.forEach((s, i) => { s.rank = i + 1; });

  return scored;
}

function RankBadge({ rank }: { rank: number }) {
  const colors: Record<number, string> = {
    1: 'from-yellow-400 to-amber-500 text-black',
    2: 'from-gray-300 to-gray-400 text-black',
    3: 'from-amber-600 to-amber-700 text-white',
  };
  const cls = colors[rank] || 'from-navy-700 to-navy-800 text-gray-300';
  return (
    <div className={`w-10 h-10 rounded-full bg-gradient-to-br ${cls} flex items-center justify-center font-bold text-sm shrink-0`}>
      {rank}
    </div>
  );
}

function ScoreBar({ score, max, color }: { score: number; max: number; color: string }) {
  const pct = Math.round((score / max) * 100);
  return (
    <div className="flex items-center gap-2">
      <div className="w-20 h-2 bg-navy-800 rounded-full overflow-hidden">
        <div className={`h-full rounded-full ${color}`} style={{ width: `${pct}%` }} />
      </div>
      <span className="text-xs text-gray-500 w-6 text-right">{score}</span>
    </div>
  );
}

export default function RankingsPage() {
  const providers = getAllProviders();
  const allPages = getAllPages();
  const rankings = scoreProviders(providers, allPages);

  const today = new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 py-10">
      {/* Header */}
      <div className="mb-8 text-center">
        <div className="flex items-center justify-center gap-3 mb-3">
          <div className="w-8 h-8 bg-accent rounded-lg flex items-center justify-center font-bold text-sm text-white">IS</div>
          <span className="font-semibold text-lg text-white tracking-tight">InStoreIndex</span>
        </div>
        <h1 className="text-3xl font-bold text-white mb-2">In-Store Media Provider Power Rankings</h1>
        <p className="text-gray-400 text-sm">Composite score based on service breadth, vertical coverage, market scale, platform maturity, and content footprint.</p>
        <p className="text-xs text-gray-600 mt-2">{today} · {providers.length} providers evaluated</p>
      </div>

      {/* Scoring Legend */}
      <div className="bg-navy-900 border border-navy-800 rounded-lg p-4 mb-8">
        <div className="grid grid-cols-5 gap-4 text-center text-xs">
          <div>
            <div className="text-accent-light font-semibold mb-1">Services</div>
            <div className="text-gray-500">0–25 pts</div>
            <div className="text-gray-600">Breadth of offering</div>
          </div>
          <div>
            <div className="text-green-400 font-semibold mb-1">Verticals</div>
            <div className="text-gray-500">0–15 pts</div>
            <div className="text-gray-600">Industry coverage</div>
          </div>
          <div>
            <div className="text-purple-400 font-semibold mb-1">Scale</div>
            <div className="text-gray-500">0–30 pts</div>
            <div className="text-gray-600">Market presence</div>
          </div>
          <div>
            <div className="text-amber-400 font-semibold mb-1">Platform</div>
            <div className="text-gray-500">0–15 pts</div>
            <div className="text-gray-600">Tech & catalog depth</div>
          </div>
          <div>
            <div className="text-cyan-400 font-semibold mb-1">Content</div>
            <div className="text-gray-500">0–15 pts</div>
            <div className="text-gray-600">Market relevance</div>
          </div>
        </div>
      </div>

      {/* Rankings List */}
      <div className="space-y-3">
        {rankings.map((r) => {
          return (
            <div
              key={r.provider.slug}
              className="rounded-lg p-5 border transition-all bg-navy-900 border-navy-800"
            >
              <div className="flex items-center gap-4">
                <RankBadge rank={r.rank} />
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-3">
                    <h2 className="font-bold text-white">
                      {r.provider.name}
                    </h2>
                    <span className={`text-xs px-2 py-0.5 rounded ${
                      r.provider.company_size === 'enterprise' ? 'bg-purple-500/20 text-purple-300' :
                      r.provider.company_size === 'mid-market' ? 'bg-blue-500/20 text-blue-300' :
                      'bg-green-500/20 text-green-300'
                    }`}>
                      {r.provider.company_size || 'Various'}
                    </span>
                  </div>
                  <p className="text-sm text-gray-500 mt-0.5 truncate">{r.provider.key_differentiator}</p>
                </div>
                <div className="text-right shrink-0">
                  <div className="text-2xl font-bold text-white">{r.totalScore}</div>
                  <div className="text-xs text-gray-500">/ 100</div>
                </div>
              </div>

              {/* Score Breakdown */}
              <div className="mt-3 grid grid-cols-5 gap-3">
                <div>
                  <div className="text-xs text-gray-600 mb-1">Services</div>
                  <ScoreBar score={r.serviceScore} max={25} color="bg-accent" />
                </div>
                <div>
                  <div className="text-xs text-gray-600 mb-1">Verticals</div>
                  <ScoreBar score={r.verticalScore} max={15} color="bg-green-500" />
                </div>
                <div>
                  <div className="text-xs text-gray-600 mb-1">Scale</div>
                  <ScoreBar score={r.scaleScore} max={30} color="bg-purple-500" />
                </div>
                <div>
                  <div className="text-xs text-gray-600 mb-1">Platform</div>
                  <ScoreBar score={r.platformScore} max={15} color="bg-amber-500" />
                </div>
                <div>
                  <div className="text-xs text-gray-600 mb-1">Content</div>
                  <ScoreBar score={r.contentScore} max={15} color="bg-cyan-500" />
                </div>
              </div>

              {/* Services Tags */}
              <div className="mt-3 flex flex-wrap gap-1.5">
                {r.provider.services.map(s => (
                  <span key={s} className="text-xs px-1.5 py-0.5 rounded bg-navy-800/80 text-gray-400">
                    {s.replace(/_/g, ' ')}
                  </span>
                ))}
              </div>
            </div>
          );
        })}
      </div>

      {/* Footer */}
      <div className="mt-10 pt-6 border-t border-navy-800 text-center">
        <p className="text-xs text-gray-600">
          Rankings are based on publicly available data. Composite scoring methodology weights service breadth, vertical reach, market scale, platform maturity, and InStoreIndex content footprint.
        </p>
        <p className="text-xs text-gray-700 mt-2">
          © 2026 InStoreIndex · Vendor-neutral in-store media research · <a href="mailto:information@instoreindex.com" className="text-accent no-underline">information@instoreindex.com</a>
        </p>
      </div>
    </div>
  );
}
