import { getAllPages } from "@/lib/data";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: 'In-Store Media Glossary — Terms & Definitions',
  description: 'Glossary of in-store media terms: background music, digital signage, retail media networks, licensing, and technology definitions.',
  alternates: { canonical: 'https://instoreindex.com/glossary/' },
};

export default function GlossaryPage() {
  const allPages = getAllPages();
  const glossary = allPages.filter(p => p.page_type === 'glossary').sort((a, b) => a.h1.localeCompare(b.h1));

  // Group by first letter
  const grouped: Record<string, typeof glossary> = {};
  for (const p of glossary) {
    const letter = p.h1.charAt(0).toUpperCase();
    if (!grouped[letter]) grouped[letter] = [];
    grouped[letter].push(p);
  }

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12">
      <h1 className="text-3xl font-bold text-white mb-2">In-Store Media Glossary</h1>
      <p className="text-gray-400 mb-10">{glossary.length} terms and definitions covering background music, digital signage, and retail media networks.</p>

      {/* Letter nav */}
      <div className="flex flex-wrap gap-2 mb-10">
        {Object.keys(grouped).sort().map((letter) => (
          <a key={letter} href={`#${letter}`} className="w-8 h-8 flex items-center justify-center bg-navy-900 border border-navy-800 rounded text-sm text-white hover:border-accent/40 transition-colors no-underline">
            {letter}
          </a>
        ))}
      </div>

      {Object.keys(grouped).sort().map((letter) => (
        <section key={letter} id={letter} className="mb-10">
          <h2 className="text-lg font-bold text-accent mb-4">{letter}</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {grouped[letter].map((p) => (
              <a key={p.slug} href={`/${p.slug}/`} className="block p-3 bg-navy-900 border border-navy-800 rounded-lg hover:border-accent/40 transition-colors no-underline group">
                <h3 className="text-sm text-white font-medium group-hover:text-accent-light">{p.h1}</h3>
                <p className="text-xs text-gray-600 mt-1 line-clamp-1">{p.intro.slice(0, 80)}...</p>
              </a>
            ))}
          </div>
        </section>
      ))}
    </div>
  );
}
