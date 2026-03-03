import { getAllPages, getAllProviders, getAllCategories, type Provider, type Page } from "@/lib/data";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: 'MTI — Pre-Dashboard Competitive Analysis',
  description: 'Competitive analysis and market positioning for MTI across background music, digital signage, and in-store media.',
  robots: { index: false, follow: false },
};

function getCompetitors(providers: Provider[], mti: Provider): Provider[] {
  return providers.filter(p => p.slug !== 'mti').sort((a, b) => {
    const aOverlap = a.services.filter(s => mti.services.includes(s)).length;
    const bOverlap = b.services.filter(s => mti.services.includes(s)).length;
    return bOverlap - aOverlap;
  });
}

function ServiceBadge({ service }: { service: string }) {
  const labels: Record<string, string> = {
    background_music: 'Background Music',
    digital_signage: 'Digital Signage',
    overhead_messaging: 'Overhead Messaging',
    scent_marketing: 'Scent Marketing',
    av_systems: 'AV Systems',
    rmn: 'Retail Media Network',
    in_store_audio_advertising: 'In-Store Audio Ads',
    in_store_advertising: 'In-Store Advertising',
    retail_media: 'Retail Media',
    tv: 'TV Programming',
    audio_messaging: 'Audio Messaging',
    consumer_insights: 'Consumer Insights',
    music_curation: 'Music Curation',
    sonic_branding: 'Sonic Branding',
  };
  return (
    <span className="inline-block px-2 py-0.5 rounded text-xs bg-accent/20 text-accent-light">
      {labels[service] || service.replace(/_/g, ' ')}
    </span>
  );
}

function CompanyBadge({ size }: { size: string | null }) {
  const colors: Record<string, string> = {
    enterprise: 'bg-purple-500/20 text-purple-300',
    'mid-market': 'bg-blue-500/20 text-blue-300',
    smb: 'bg-green-500/20 text-green-300',
  };
  return (
    <span className={`inline-block px-2 py-0.5 rounded text-xs ${colors[size || ''] || 'bg-gray-500/20 text-gray-300'}`}>
      {size ? size.charAt(0).toUpperCase() + size.slice(1) : 'Various'}
    </span>
  );
}

export default function MTIAnalysisPage() {
  const allPages = getAllPages();
  const providers = getAllProviders();
  const categories = getAllCategories();
  const mti = providers.find(p => p.slug === 'mti')!;
  const competitors = getCompetitors(providers, mti);

  // MTI content
  const mtiPages = allPages.filter(p => p.slug.includes('mti'));
  const mtiVsPages = mtiPages.filter(p => p.page_type === 'vs');
  const mtiVerticalPages = mtiPages.filter(p => p.page_type === 'provider_vertical');
  const mtiServicePages = mtiPages.filter(p => p.page_type === 'provider_service');
  const mtiProfile = mtiPages.find(p => p.page_type === 'provider_profile');
  const mtiAlternatives = mtiPages.find(p => p.page_type === 'alternatives');
  const mtiPricing = mtiPages.find(p => p.page_type === 'pricing');

  // Content stats per provider
  const providerContentCounts = providers.map(p => {
    const slug = p.slug;
    const pages = allPages.filter(pg => pg.slug.includes(slug));
    return {
      provider: p,
      total: pages.length,
      vs: pages.filter(pg => pg.page_type === 'vs').length,
      verticals: pages.filter(pg => pg.page_type === 'provider_vertical').length,
      services: pages.filter(pg => pg.page_type === 'provider_service').length,
      profile: pages.some(pg => pg.page_type === 'provider_profile'),
      alternatives: pages.some(pg => pg.page_type === 'alternatives'),
      pricing: pages.some(pg => pg.page_type === 'pricing'),
    };
  }).sort((a, b) => b.total - a.total);

  // Service overlap matrix
  const serviceOverlap = competitors.map(c => ({
    provider: c,
    shared: c.services.filter(s => mti.services.includes(s)),
    unique: c.services.filter(s => !mti.services.includes(s)),
    mtiOnly: mti.services.filter(s => !c.services.includes(s)),
  }));

  // Vertical overlap
  const verticalOverlap = competitors.map(c => ({
    provider: c,
    shared: c.verticals.filter(v => mti.verticals.includes(v)),
    unique: c.verticals.filter(v => !mti.verticals.includes(v)),
    mtiOnly: mti.verticals.filter(v => !c.verticals.includes(v)),
  }));

  // Direct competitors (2+ shared services)
  const directCompetitors = serviceOverlap.filter(s => s.shared.length >= 2);
  const adjacentCompetitors = serviceOverlap.filter(s => s.shared.length === 1);
  const noOverlap = serviceOverlap.filter(s => s.shared.length === 0);

  const today = new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 py-10">
      {/* Header */}
      <div className="mb-10">
        <div className="flex items-center gap-3 mb-2">
          <span className="inline-block px-3 py-1 rounded-full text-xs font-medium bg-amber-500/20 text-amber-300">Pre-Dashboard Analysis</span>
          <span className="text-xs text-gray-600">{today}</span>
        </div>
        <h1 className="text-3xl font-bold text-white mb-2">MTI — Competitive Intelligence Report</h1>
        <p className="text-gray-400">Prepared by InStoreIndex. Vendor-neutral analysis of MTI's market positioning across in-store media.</p>
      </div>

      {/* Executive Summary */}
      <section className="mb-10 bg-navy-900 border border-navy-800 rounded-lg p-6">
        <h2 className="text-xl font-bold text-white mb-4">Executive Summary</h2>
        <div className="grid sm:grid-cols-4 gap-6 mb-6">
          <div className="text-center">
            <div className="text-3xl font-bold text-accent">{providers.length}</div>
            <div className="text-xs text-gray-500 mt-1">Providers Tracked</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-accent">{allPages.length.toLocaleString()}</div>
            <div className="text-xs text-gray-500 mt-1">Research Pages</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-amber-400">{mtiPages.length}</div>
            <div className="text-xs text-gray-500 mt-1">MTI-Specific Pages</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-purple-400">{directCompetitors.length}</div>
            <div className="text-xs text-gray-500 mt-1">Direct Competitors</div>
          </div>
        </div>
        <p className="text-sm text-gray-300 leading-relaxed">
          MTI is a <strong className="text-white">mid-market</strong> in-store media provider offering <strong className="text-white">{mti.services.length} core services</strong> across <strong className="text-white">{mti.verticals.length} industry verticals</strong>. InStoreIndex currently features {mtiPages.length} dedicated pages covering MTI's products, pricing, vertical solutions, and head-to-head comparisons against {mtiVsPages.length} competitors.
        </p>
      </section>

      {/* MTI Profile Card */}
      <section className="mb-10">
        <h2 className="text-xl font-bold text-white mb-4">MTI Profile</h2>
        <div className="bg-navy-900 border border-navy-800 rounded-lg p-6">
          <div className="grid sm:grid-cols-2 gap-6">
            <div>
              <h3 className="text-sm text-gray-500 uppercase tracking-wide mb-2">Company</h3>
              <p className="text-white font-semibold text-lg">{mti.name}</p>
              <p className="text-sm text-gray-400 mt-1">{mti.headquarters || 'Global'}</p>
              <div className="mt-2"><CompanyBadge size={mti.company_size} /></div>
              {mti.website && <a href={mti.website} target="_blank" rel="noopener" className="text-xs text-accent mt-2 block no-underline">{mti.website}</a>}
            </div>
            <div>
              <h3 className="text-sm text-gray-500 uppercase tracking-wide mb-2">Pricing Model</h3>
              <p className="text-white">{mti.pricing_model ? mti.pricing_model.replace(/-/g, ' ').replace(/\b\w/g, c => c.toUpperCase()) : 'N/A'}</p>
              <h3 className="text-sm text-gray-500 uppercase tracking-wide mt-4 mb-2">Key Differentiator</h3>
              <p className="text-sm text-gray-300">{mti.key_differentiator}</p>
            </div>
          </div>
          <div className="mt-6 border-t border-navy-700 pt-4">
            <h3 className="text-sm text-gray-500 uppercase tracking-wide mb-3">Services</h3>
            <div className="flex flex-wrap gap-2">
              {mti.services.map(s => <ServiceBadge key={s} service={s} />)}
            </div>
          </div>
          <div className="mt-4 border-t border-navy-700 pt-4">
            <h3 className="text-sm text-gray-500 uppercase tracking-wide mb-3">Target Verticals</h3>
            <div className="flex flex-wrap gap-2">
              {mti.verticals.map(v => (
                <span key={v} className="inline-block px-2 py-0.5 rounded text-xs bg-navy-800 text-gray-300">
                  {v.replace(/_/g, ' ').replace(/\b\w/g, c => c.toUpperCase())}
                </span>
              ))}
            </div>
          </div>
          {mti.description && (
            <div className="mt-4 border-t border-navy-700 pt-4">
              <p className="text-sm text-gray-400 leading-relaxed">{mti.description}</p>
            </div>
          )}
        </div>
      </section>

      {/* Direct Competitors */}
      <section className="mb-10">
        <h2 className="text-xl font-bold text-white mb-2">Competitive Landscape</h2>
        <p className="text-sm text-gray-500 mb-6">Providers ranked by service overlap with MTI</p>

        {/* Direct Competitors */}
        <h3 className="text-sm font-semibold text-amber-300 uppercase tracking-wide mb-3">Direct Competitors ({directCompetitors.length})</h3>
        <div className="space-y-3 mb-8">
          {directCompetitors.map(({ provider: c, shared, unique }) => (
            <div key={c.slug} className="bg-navy-900 border border-navy-800 rounded-lg p-5">
              <div className="flex items-start justify-between gap-4">
                <div className="flex-1">
                  <div className="flex items-center gap-3">
                    <h4 className="text-white font-semibold">{c.name}</h4>
                    <CompanyBadge size={c.company_size} />
                  </div>
                  <p className="text-xs text-gray-500 mt-1">{c.headquarters || 'Global'} · {c.pricing_model || 'Custom'}</p>
                  <p className="text-sm text-gray-400 mt-2">{c.key_differentiator}</p>
                </div>
                <div className="text-right shrink-0">
                  <div className="text-2xl font-bold text-amber-400">{shared.length}/{mti.services.length}</div>
                  <div className="text-xs text-gray-500">Service Overlap</div>
                </div>
              </div>
              <div className="mt-3 flex flex-wrap gap-1.5">
                {shared.map(s => (
                  <span key={s} className="inline-block px-2 py-0.5 rounded text-xs bg-amber-500/20 text-amber-300">
                    {s.replace(/_/g, ' ')}
                  </span>
                ))}
                {unique.map(s => (
                  <span key={s} className="inline-block px-2 py-0.5 rounded text-xs bg-navy-800 text-gray-500">
                    {s.replace(/_/g, ' ')}
                  </span>
                ))}
              </div>
              {c.notable_clients && (
                <p className="text-xs text-gray-600 mt-2">Clients: {c.notable_clients}</p>
              )}
            </div>
          ))}
        </div>

        {/* Adjacent Competitors */}
        {adjacentCompetitors.length > 0 && (
          <>
            <h3 className="text-sm font-semibold text-blue-300 uppercase tracking-wide mb-3">Adjacent Competitors ({adjacentCompetitors.length})</h3>
            <div className="grid sm:grid-cols-2 gap-3 mb-8">
              {adjacentCompetitors.map(({ provider: c, shared }) => (
                <div key={c.slug} className="bg-navy-900 border border-navy-800 rounded-lg p-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="text-white font-medium text-sm">{c.name}</h4>
                      <p className="text-xs text-gray-500">{c.company_size || 'Various'}</p>
                    </div>
                    <div className="text-right">
                      <div className="text-lg font-bold text-blue-400">{shared.length}/{mti.services.length}</div>
                    </div>
                  </div>
                  <div className="mt-2 flex flex-wrap gap-1">
                    {shared.map(s => (
                      <span key={s} className="inline-block px-2 py-0.5 rounded text-xs bg-blue-500/20 text-blue-300">
                        {s.replace(/_/g, ' ')}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </>
        )}
      </section>

      {/* Service Comparison Matrix */}
      <section className="mb-10">
        <h2 className="text-xl font-bold text-white mb-4">Service Comparison Matrix</h2>
        <div className="overflow-x-auto">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-navy-800">
                <th className="text-left text-white font-semibold px-4 py-3 border border-navy-700">Provider</th>
                <th className="text-center text-white font-semibold px-3 py-3 border border-navy-700">Size</th>
                <th className="text-center text-white font-semibold px-3 py-3 border border-navy-700">Music</th>
                <th className="text-center text-white font-semibold px-3 py-3 border border-navy-700">Signage</th>
                <th className="text-center text-white font-semibold px-3 py-3 border border-navy-700">Messaging</th>
                <th className="text-center text-white font-semibold px-3 py-3 border border-navy-700">RMN/Ads</th>
                <th className="text-center text-white font-semibold px-3 py-3 border border-navy-700">Other</th>
              </tr>
            </thead>
            <tbody>
              {[mti, ...competitors].map((p, i) => {
                const hasMusic = p.services.some(s => s.includes('music') || s.includes('curation'));
                const hasSignage = p.services.some(s => s.includes('signage'));
                const hasMessaging = p.services.some(s => s.includes('messaging'));
                const hasRmn = p.services.some(s => s.includes('rmn') || s.includes('advertising') || s.includes('retail_media'));
                const otherServices = p.services.filter(s =>
                  !s.includes('music') && !s.includes('curation') && !s.includes('signage') &&
                  !s.includes('messaging') && !s.includes('rmn') && !s.includes('advertising') && !s.includes('retail_media')
                );
                const isMti = p.slug === 'mti';
                const rowClass = isMti ? 'bg-accent/10' : i % 2 === 0 ? 'bg-navy-900/50' : '';
                return (
                  <tr key={p.slug} className={rowClass}>
                    <td className={`px-4 py-3 border border-navy-800 ${isMti ? 'text-accent-light font-bold' : 'text-gray-300'}`}>
                      {isMti ? '→ ' : ''}{p.name}
                    </td>
                    <td className="text-center px-3 py-3 border border-navy-800 text-gray-400 text-xs">{p.company_size || '—'}</td>
                    <td className="text-center px-3 py-3 border border-navy-800">{hasMusic ? '✓' : '—'}</td>
                    <td className="text-center px-3 py-3 border border-navy-800">{hasSignage ? '✓' : '—'}</td>
                    <td className="text-center px-3 py-3 border border-navy-800">{hasMessaging ? '✓' : '—'}</td>
                    <td className="text-center px-3 py-3 border border-navy-800">{hasRmn ? '✓' : '—'}</td>
                    <td className="text-center px-3 py-3 border border-navy-800 text-xs text-gray-500">
                      {otherServices.length > 0 ? otherServices.map(s => s.replace(/_/g, ' ')).join(', ') : '—'}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </section>

      {/* Content Coverage */}
      <section className="mb-10">
        <h2 className="text-xl font-bold text-white mb-2">InStoreIndex Content Coverage</h2>
        <p className="text-sm text-gray-500 mb-6">Pages published per provider across all content types</p>
        <div className="overflow-x-auto">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-navy-800">
                <th className="text-left text-white font-semibold px-4 py-3 border border-navy-700">Provider</th>
                <th className="text-center text-white font-semibold px-3 py-3 border border-navy-700">Total</th>
                <th className="text-center text-white font-semibold px-3 py-3 border border-navy-700">Comparisons</th>
                <th className="text-center text-white font-semibold px-3 py-3 border border-navy-700">Verticals</th>
                <th className="text-center text-white font-semibold px-3 py-3 border border-navy-700">Services</th>
                <th className="text-center text-white font-semibold px-3 py-3 border border-navy-700">Profile</th>
                <th className="text-center text-white font-semibold px-3 py-3 border border-navy-700">Alternatives</th>
                <th className="text-center text-white font-semibold px-3 py-3 border border-navy-700">Pricing</th>
              </tr>
            </thead>
            <tbody>
              {providerContentCounts.map((pc, i) => {
                const isMti = pc.provider.slug === 'mti';
                const rowClass = isMti ? 'bg-accent/10' : i % 2 === 0 ? 'bg-navy-900/50' : '';
                return (
                  <tr key={pc.provider.slug} className={rowClass}>
                    <td className={`px-4 py-3 border border-navy-800 ${isMti ? 'text-accent-light font-bold' : 'text-gray-300'}`}>
                      {isMti ? '→ ' : ''}{pc.provider.name}
                    </td>
                    <td className="text-center px-3 py-3 border border-navy-800 text-white font-semibold">{pc.total}</td>
                    <td className="text-center px-3 py-3 border border-navy-800 text-gray-400">{pc.vs}</td>
                    <td className="text-center px-3 py-3 border border-navy-800 text-gray-400">{pc.verticals}</td>
                    <td className="text-center px-3 py-3 border border-navy-800 text-gray-400">{pc.services}</td>
                    <td className="text-center px-3 py-3 border border-navy-800">{pc.profile ? '✓' : '—'}</td>
                    <td className="text-center px-3 py-3 border border-navy-800">{pc.alternatives ? '✓' : '—'}</td>
                    <td className="text-center px-3 py-3 border border-navy-800">{pc.pricing ? '✓' : '—'}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </section>

      {/* Vertical Coverage Comparison */}
      <section className="mb-10">
        <h2 className="text-xl font-bold text-white mb-2">Vertical Market Overlap</h2>
        <p className="text-sm text-gray-500 mb-6">Where MTI competes head-to-head by industry vertical</p>
        <div className="overflow-x-auto">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-navy-800">
                <th className="text-left text-white font-semibold px-4 py-3 border border-navy-700">Competitor</th>
                <th className="text-center text-white font-semibold px-3 py-3 border border-navy-700">Shared Verticals</th>
                <th className="text-left text-white font-semibold px-3 py-3 border border-navy-700">Overlapping Markets</th>
                <th className="text-left text-white font-semibold px-3 py-3 border border-navy-700">Their Unique Markets</th>
              </tr>
            </thead>
            <tbody>
              {verticalOverlap
                .filter(v => v.shared.length > 0)
                .sort((a, b) => b.shared.length - a.shared.length)
                .map((v, i) => (
                  <tr key={v.provider.slug} className={i % 2 === 0 ? 'bg-navy-900/50' : ''}>
                    <td className="px-4 py-3 border border-navy-800 text-gray-300 font-medium">{v.provider.name}</td>
                    <td className="text-center px-3 py-3 border border-navy-800">
                      <span className="text-white font-bold">{v.shared.length}</span>
                      <span className="text-gray-500">/{mti.verticals.length}</span>
                    </td>
                    <td className="px-3 py-3 border border-navy-800">
                      <div className="flex flex-wrap gap-1">
                        {v.shared.map(vert => (
                          <span key={vert} className="inline-block px-1.5 py-0.5 rounded text-xs bg-amber-500/15 text-amber-300">
                            {vert.replace(/_/g, ' ')}
                          </span>
                        ))}
                      </div>
                    </td>
                    <td className="px-3 py-3 border border-navy-800">
                      <div className="flex flex-wrap gap-1">
                        {v.unique.slice(0, 5).map(vert => (
                          <span key={vert} className="inline-block px-1.5 py-0.5 rounded text-xs bg-navy-800 text-gray-500">
                            {vert.replace(/_/g, ' ')}
                          </span>
                        ))}
                        {v.unique.length > 5 && <span className="text-xs text-gray-600">+{v.unique.length - 5} more</span>}
                      </div>
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* MTI Content Inventory */}
      <section className="mb-10">
        <h2 className="text-xl font-bold text-white mb-4">MTI Content Inventory on InStoreIndex</h2>

        <div className="grid md:grid-cols-3 gap-6">
          {/* Comparisons */}
          <div>
            <h3 className="text-sm font-semibold text-purple-300 uppercase tracking-wide mb-3">
              Head-to-Head Comparisons ({mtiVsPages.length})
            </h3>
            <div className="space-y-2">
              {mtiVsPages.map(p => (
                <a key={p.slug} href={`/${p.slug}/`} className="block text-sm text-gray-400 hover:text-accent-light no-underline py-1 border-b border-navy-800/50">
                  {p.h1.replace(': Which Provider Is Right for You?', '').replace(': Which In-Store Media Provider Is Right for You?', '')}
                </a>
              ))}
            </div>
          </div>

          {/* Vertical Pages */}
          <div>
            <h3 className="text-sm font-semibold text-green-300 uppercase tracking-wide mb-3">
              Vertical Solutions ({mtiVerticalPages.length})
            </h3>
            <div className="space-y-2">
              {mtiVerticalPages.map(p => (
                <a key={p.slug} href={`/${p.slug}/`} className="block text-sm text-gray-400 hover:text-accent-light no-underline py-1 border-b border-navy-800/50">
                  {p.h1.replace(': Is It the Right Choice?', '')}
                </a>
              ))}
            </div>
          </div>

          {/* Services + Other */}
          <div>
            <h3 className="text-sm font-semibold text-cyan-300 uppercase tracking-wide mb-3">
              Service Pages & More ({mtiServicePages.length + (mtiProfile ? 1 : 0) + (mtiAlternatives ? 1 : 0) + (mtiPricing ? 1 : 0)})
            </h3>
            <div className="space-y-2">
              {mtiProfile && (
                <a href={`/${mtiProfile.slug}/`} className="block text-sm text-white font-medium hover:text-accent-light no-underline py-1 border-b border-navy-800/50">
                  Full Review
                </a>
              )}
              {mtiPricing && (
                <a href={`/${mtiPricing.slug}/`} className="block text-sm text-white font-medium hover:text-accent-light no-underline py-1 border-b border-navy-800/50">
                  Pricing Guide
                </a>
              )}
              {mtiAlternatives && (
                <a href={`/${mtiAlternatives.slug}/`} className="block text-sm text-white font-medium hover:text-accent-light no-underline py-1 border-b border-navy-800/50">
                  Best Alternatives
                </a>
              )}
              {mtiServicePages.map(p => (
                <a key={p.slug} href={`/${p.slug}/`} className="block text-sm text-gray-400 hover:text-accent-light no-underline py-1 border-b border-navy-800/50">
                  {p.h1.replace(': What You Need to Know', '')}
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Key Competitive Insights */}
      <section className="mb-10">
        <h2 className="text-xl font-bold text-white mb-4">Key Competitive Insights</h2>
        <div className="grid sm:grid-cols-2 gap-4">
          <div className="bg-navy-900 border border-navy-800 rounded-lg p-5">
            <h3 className="text-sm font-semibold text-green-300 mb-2">MTI Strengths</h3>
            <ul className="text-sm text-gray-400 space-y-2">
              <li>• <strong className="text-white">Multi-service platform</strong> — Music, signage, and messaging in one provider</li>
              <li>• <strong className="text-white">Personalized service</strong> — Direct account management vs self-serve competitors</li>
              <li>• <strong className="text-white">Multi-location focus</strong> — Custom programming for chains and franchises</li>
              <li>• <strong className="text-white">Broad vertical coverage</strong> — {mti.verticals.length} industry verticals served</li>
            </ul>
          </div>
          <div className="bg-navy-900 border border-navy-800 rounded-lg p-5">
            <h3 className="text-sm font-semibold text-amber-300 mb-2">Competitive Pressure Points</h3>
            <ul className="text-sm text-gray-400 space-y-2">
              <li>• <strong className="text-white">Enterprise dominance</strong> — Mood Media, Stingray, and Rockbot operate at significantly larger scale</li>
              <li>• <strong className="text-white">RMN/ad monetization</strong> — QSIC, Stingray, and Vibenomics lead in retail media</li>
              <li>• <strong className="text-white">Price-sensitive segment</strong> — Cloud Cover ($16.95/mo) and Jukeboxy ($24.95/mo) win on price</li>
              <li>• <strong className="text-white">Tech differentiation</strong> — Competitors investing in AI (QSIC, Soundsuit) and Spotify integration (SYB)</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Market Position Map */}
      <section className="mb-10">
        <h2 className="text-xl font-bold text-white mb-4">Market Positioning</h2>
        <div className="bg-navy-900 border border-navy-800 rounded-lg p-6">
          <div className="grid grid-cols-3 gap-4">
            <div>
              <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-3 text-center">SMB / Self-Serve</h3>
              {providers.filter(p => p.company_size === 'smb').map(p => (
                <div key={p.slug} className={`text-sm p-2 rounded mb-2 ${p.slug === 'mti' ? 'bg-accent/20 text-accent-light font-bold' : 'bg-navy-800/50 text-gray-400'}`}>
                  {p.name}
                </div>
              ))}
            </div>
            <div>
              <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-3 text-center">Mid-Market</h3>
              {providers.filter(p => p.company_size === 'mid-market').map(p => (
                <div key={p.slug} className={`text-sm p-2 rounded mb-2 ${p.slug === 'mti' ? 'bg-accent/20 text-accent-light font-bold' : 'bg-navy-800/50 text-gray-400'}`}>
                  {p.name}
                </div>
              ))}
            </div>
            <div>
              <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-3 text-center">Enterprise</h3>
              {providers.filter(p => p.company_size === 'enterprise').map(p => (
                <div key={p.slug} className={`text-sm p-2 rounded mb-2 ${p.slug === 'mti' ? 'bg-accent/20 text-accent-light font-bold' : 'bg-navy-800/50 text-gray-400'}`}>
                  {p.name}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* What InStoreIndex Dashboard Can Do */}
      <section className="mb-10 bg-gradient-to-br from-accent/10 to-purple-500/10 border border-accent/30 rounded-lg p-6">
        <h2 className="text-xl font-bold text-white mb-3">What the Full InStoreIndex Dashboard Delivers</h2>
        <p className="text-sm text-gray-300 mb-4">This pre-dashboard report shows a snapshot of what InStoreIndex tracks. The full dashboard provides:</p>
        <div className="grid sm:grid-cols-2 gap-4">
          <ul className="text-sm text-gray-300 space-y-2">
            <li>• Real-time search visibility tracking across all {allPages.length.toLocaleString()} pages</li>
            <li>• Keyword ranking data for MTI-relevant search queries</li>
            <li>• Competitor content gap analysis</li>
            <li>• Share of voice metrics across {categories.length} categories</li>
          </ul>
          <ul className="text-sm text-gray-300 space-y-2">
            <li>• Traffic attribution to MTI-specific pages</li>
            <li>• Buyer intent signals from comparison page engagement</li>
            <li>• Monthly competitive intelligence reports</li>
            <li>• Custom alerts when competitors launch new services</li>
          </ul>
        </div>
      </section>

      {/* Footer */}
      <div className="border-t border-navy-800 pt-8 mt-10 text-center">
        <p className="text-sm text-gray-500">Prepared by <strong className="text-gray-400">InStoreIndex</strong> — Vendor-neutral in-store media research</p>
        <p className="text-xs text-gray-600 mt-2">This analysis is based on publicly available information. Contact <a href="mailto:information@instoreindex.com" className="text-accent no-underline">information@instoreindex.com</a> for the full dashboard.</p>
      </div>
    </div>
  );
}
