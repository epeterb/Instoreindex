import { Page } from './data';

export function HubPageSection({
  title,
  description,
  pages,
}: {
  title: string;
  description?: string;
  pages: Page[];
}) {
  if (pages.length === 0) return null;

  return (
    <section className="mb-12">
      <h2 className="text-xl font-bold text-white mb-2">{title}</h2>
      {description && <p className="text-gray-500 mb-6">{description}</p>}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
        {pages.map((page) => (
          <a
            key={page.slug}
            href={`/${page.slug}/`}
            className="block p-4 bg-navy-900 border border-navy-800 rounded-lg hover:border-accent/40 transition-colors no-underline group"
          >
            <h3 className="text-sm text-white font-medium group-hover:text-accent-light transition-colors leading-snug">
              {page.h1}
            </h3>
            <p className="text-xs text-gray-600 mt-2 line-clamp-2">{page.intro.slice(0, 100)}...</p>
          </a>
        ))}
      </div>
    </section>
  );
}
