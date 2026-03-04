'use client';

import { useState, useEffect, useRef } from 'react';
import Fuse from 'fuse.js';

interface SearchItem {
  slug: string;
  title: string;
  h1: string;
  intro: string;
  type: string;
  pillar: string;
  description: string;
}

const typeLabels: Record<string, string> = {
  comparison: 'Comparison',
  vs: 'VS',
  question: 'Q&A',
  vertical: 'Industry',
  guide: 'Guide',
  roundup: 'Top List',
  provider_profile: 'Provider',
  provider_service: 'Service',
  provider_vertical: 'Vertical',
  alternatives: 'Alternatives',
  pricing: 'Pricing',
  glossary: 'Glossary',
  city: 'City',
  state_licensing: 'Licensing',
};

export default function Search() {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<Fuse.FuseResult<SearchItem>[]>([]);
  const [isOpen, setIsOpen] = useState(false);
  const [fuse, setFuse] = useState<Fuse<SearchItem> | null>(null);
  const wrapperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    fetch('/search-index.json')
      .then((res) => res.json())
      .then((data: SearchItem[]) => {
        const fuseInstance = new Fuse(data, {
          keys: [
            { name: 'title', weight: 0.35 },
            { name: 'h1', weight: 0.3 },
            { name: 'description', weight: 0.15 },
            { name: 'intro', weight: 0.1 },
            { name: 'pillar', weight: 0.05 },
            { name: 'type', weight: 0.05 },
          ],
          threshold: 0.4,
          includeScore: true,
          minMatchCharLength: 2,
        });
        setFuse(fuseInstance);
      });
  }, []);

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (wrapperRef.current && !wrapperRef.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  function handleSearch(e: React.ChangeEvent<HTMLInputElement>) {
    const value = e.target.value;
    setQuery(value);
    if (!fuse || value.length < 2) {
      setResults([]);
      setIsOpen(false);
      return;
    }
    const searchResults = fuse.search(value).slice(0, 8);
    setResults(searchResults);
    setIsOpen(searchResults.length > 0);
  }

  function handleKeyDown(e: React.KeyboardEvent) {
    if (e.key === 'Escape') {
      setIsOpen(false);
      setQuery('');
    }
  }

  function ResultLink({ item }: { item: SearchItem }) {
    return (
      <a
        href={`/${item.slug}/`}
        onClick={() => { setIsOpen(false); setQuery(''); }}
        className="block px-4 py-3 hover:bg-white/5 border-b border-white/5 last:border-0 no-underline"
      >
        <div className="flex items-center gap-2 mb-1">
          <span className="text-[10px] font-semibold uppercase tracking-wider px-1.5 py-0.5 rounded bg-blue-500/15 text-blue-300">
            {typeLabels[item.type] || item.type}
          </span>
          <span className="text-[10px] text-gray-600 uppercase tracking-wider">{item.pillar}</span>
        </div>
        <p className="text-sm text-gray-200 leading-snug">{item.h1 || item.title}</p>
      </a>
    );
  }

  return (
    <div ref={wrapperRef} className="relative">
      <input
        type="text"
        placeholder="Search..."
        value={query}
        onChange={handleSearch}
        onFocus={() => results.length > 0 && setIsOpen(true)}
        onKeyDown={handleKeyDown}
        className="w-36 sm:w-44 px-3 py-1.5 text-sm rounded-md bg-white/5 border border-white/15 text-white placeholder-gray-500 focus:outline-none focus:border-blue-400 focus:ring-1 focus:ring-blue-400 focus:w-64 transition-all duration-200"
      />
      {isOpen && (
        <div className="absolute right-0 top-full mt-2 w-80 sm:w-96 bg-gray-950 border border-white/15 rounded-lg shadow-2xl z-50 max-h-[28rem] overflow-y-auto">
          {results.map(({ item }) => (
            <ResultLink key={item.slug} item={item} />
          ))}
        </div>
      )}
    </div>
  );
}
