import Link from 'next/link';
import { Globe } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="bg-navy-500 min-h-screen flex flex-col items-center justify-center px-6 text-center">
      <Globe className="w-8 h-8 text-sand-400 mb-8" strokeWidth={1} />
      <p className="text-xs tracking-[0.2em] uppercase font-light text-terracotta-400 mb-4">
        404
      </p>
      <h1 className="font-serif text-display-md text-sand-50 font-light mb-6">
        This page
        <br />
        <em>has moved on.</em>
      </h1>
      <p className="text-sand-400 font-light mb-10 max-w-xs leading-relaxed">
        Like the best journeys, this one led somewhere unexpected. Let’s get you back.
      </p>
      <div className="flex flex-col sm:flex-row gap-4">
        <Link
          href="/"
          className="inline-flex items-center justify-center bg-sand-50 text-navy-500 text-sm font-light tracking-wide px-8 py-4 hover:bg-sand-100 transition-colors"
        >
          Go Home
        </Link>
        <Link
          href="/collections"
          className="inline-flex items-center justify-center border border-sand-50/30 text-sand-50 text-sm font-light tracking-wide px-8 py-4 hover:bg-sand-50/10 transition-colors"
        >
          Browse Collections
        </Link>
      </div>
    </div>
  );
}
