import { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Page Not Found',
};

export default function NotFound() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-24 text-center">
      <h1 className="text-4xl font-bold text-white mb-4">Page Not Found</h1>
      <p className="text-gray-400 mb-8">The page you&apos;re looking for doesn&apos;t exist or has been moved.</p>
      <div className="flex gap-3 justify-center">
        <a href="/" className="px-5 py-2.5 bg-accent hover:bg-accent-dark text-white text-sm font-medium rounded-lg transition-colors no-underline">
          Go Home
        </a>
        <a href="/providers/" className="px-5 py-2.5 bg-navy-800 hover:bg-navy-700 text-white text-sm font-medium rounded-lg transition-colors no-underline">
          Browse Providers
        </a>
      </div>
    </div>
  );
}
