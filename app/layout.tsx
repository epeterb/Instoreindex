import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL('https://instoreindex.com'),
  title: {
    default: 'InStoreIndex — The In-Store Media Buyer\'s Guide',
    template: '%s | InStoreIndex',
  },
  description: 'Compare background music providers, digital signage platforms, and retail media networks. Vendor-neutral reviews, pricing, and recommendations for in-store media.',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://instoreindex.com',
    siteName: 'InStoreIndex',
    title: 'InStoreIndex — The In-Store Media Buyer\'s Guide',
    description: 'Compare background music providers, digital signage platforms, and retail media networks.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'InStoreIndex — The In-Store Media Buyer\'s Guide',
    description: 'Compare background music providers, digital signage platforms, and retail media networks.',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

const navLinks = [
  { href: '/background-music/', label: 'Music' },
  { href: '/digital-signage/', label: 'Signage' },
  { href: '/retail-media-networks/', label: 'RMN' },
  { href: '/providers/', label: 'Providers' },
  { href: '/guides/', label: 'Guides' },
];

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
      <body className="min-h-screen flex flex-col">
        {/* Header */}
        <header className="border-b border-navy-800 bg-navy-950/95 backdrop-blur sticky top-0 z-50">
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <div className="flex items-center justify-between h-16">
              <a href="/" className="flex items-center gap-2 text-white hover:text-white no-underline">
                <div className="w-8 h-8 bg-accent rounded-lg flex items-center justify-center font-bold text-sm text-white">IS</div>
                <span className="font-semibold text-lg tracking-tight">InStoreIndex</span>
              </a>
              <nav className="hidden md:flex items-center gap-1">
                {navLinks.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    className="px-3 py-2 text-sm text-gray-400 hover:text-white transition-colors rounded-md hover:bg-navy-800/50 no-underline"
                  >
                    {link.label}
                  </a>
                ))}
              </nav>
            </div>
          </div>
        </header>

        {/* Main */}
        <main className="flex-1">
          {children}
        </main>

        {/* Footer */}
        <footer className="border-t border-navy-800 bg-navy-950 mt-16">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-8">
              <div>
                <h4 className="text-sm font-semibold text-white mb-3">Background Music</h4>
                <ul className="space-y-2 text-sm">
                  <li><a href="/complete-guide-background-music-for-business/" className="text-gray-500 hover:text-gray-300 no-underline">Complete Guide</a></li>
                  <li><a href="/top-background-music-providers-2026/" className="text-gray-500 hover:text-gray-300 no-underline">Top Providers 2026</a></li>
                  <li><a href="/how-much-does-background-music-for-business-cost/" className="text-gray-500 hover:text-gray-300 no-underline">Pricing Guide</a></li>
                  <li><a href="/do-i-need-music-license-for-business/" className="text-gray-500 hover:text-gray-300 no-underline">Music Licensing</a></li>
                </ul>
              </div>
              <div>
                <h4 className="text-sm font-semibold text-white mb-3">Digital Signage</h4>
                <ul className="space-y-2 text-sm">
                  <li><a href="/complete-guide-digital-signage-retail/" className="text-gray-500 hover:text-gray-300 no-underline">Complete Guide</a></li>
                  <li><a href="/top-digital-signage-companies-retail-2026/" className="text-gray-500 hover:text-gray-300 no-underline">Top Providers 2026</a></li>
                  <li><a href="/how-much-does-digital-signage-cost-per-screen/" className="text-gray-500 hover:text-gray-300 no-underline">Cost Per Screen</a></li>
                </ul>
              </div>
              <div>
                <h4 className="text-sm font-semibold text-white mb-3">Retail Media</h4>
                <ul className="space-y-2 text-sm">
                  <li><a href="/complete-guide-retail-media-networks/" className="text-gray-500 hover:text-gray-300 no-underline">Complete Guide</a></li>
                  <li><a href="/what-is-a-retail-media-network/" className="text-gray-500 hover:text-gray-300 no-underline">What is an RMN?</a></li>
                  <li><a href="/how-do-retail-media-networks-make-money/" className="text-gray-500 hover:text-gray-300 no-underline">How RMNs Make Money</a></li>
                </ul>
              </div>
              <div>
                <h4 className="text-sm font-semibold text-white mb-3">Resources</h4>
                <ul className="space-y-2 text-sm">
                  <li><a href="/providers/" className="text-gray-500 hover:text-gray-300 no-underline">All Providers</a></li>
                  <li><a href="/guides/" className="text-gray-500 hover:text-gray-300 no-underline">Buyer Guides</a></li>
                  <li><a href="/glossary/" className="text-gray-500 hover:text-gray-300 no-underline">Glossary</a></li>
                </ul>
              </div>
            </div>
            <div className="border-t border-navy-800 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
              <p className="text-sm text-gray-600">
                © 2026 InStoreIndex. Independent, vendor-neutral in-store media research.
              </p>
              <p className="text-xs text-gray-700">
                InStoreIndex is not affiliated with any provider listed on this site.
              </p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
