import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { collections } from '@/lib/products';
import { Lock } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Collections — Welcoming Planet',
  description:
    'Explore all Welcoming Planet collections. Handcrafted NFC wearables for the interconnected generation.',
};

export default function CollectionsPage() {
  return (
    <div className="bg-sand-50 min-h-screen">
      {/* Header */}
      <div className="bg-navy-500 pt-32 pb-16 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <p className="text-xs tracking-[0.2em] uppercase font-light text-terracotta-400 mb-4">
            Collections
          </p>
          <h1 className="font-serif text-display-lg text-sand-50 font-light">
            Every journey
            <br />
            <em>finds its object.</em>
          </h1>
          <p className="text-sand-400 font-light max-w-md mt-6 leading-relaxed">
            Each collection is a world. Each bracelet is a portal. Explore the full range of
            Welcoming Planet wearables.
          </p>
        </div>
      </div>

      {/* Grid */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16 lg:py-24">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {collections.map((col) => (
            col.comingSoon ? (
              <div key={col.slug} className="group relative">
                <div className="relative aspect-[4/5] rounded-2xl overflow-hidden bg-navy-500">
                  <Image
                    src={col.coverImage}
                    alt={col.coverImageAlt}
                    fill
                    className="object-cover opacity-30"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 flex flex-col justify-end p-7">
                    <div className="flex items-center gap-2 mb-3">
                      <Lock className="w-3.5 h-3.5 text-sand-400" strokeWidth={2} />
                      <span className="text-xs tracking-[0.15em] uppercase font-light text-sand-400">
                        Coming Soon
                      </span>
                    </div>
                    <h2 className="font-serif text-2xl font-light text-sand-200 mb-1">{col.name}</h2>
                    <p className="text-sm font-light text-sand-500 italic font-serif">{col.tagline}</p>
                  </div>
                </div>
                <div className="mt-4 px-1">
                  <p className="text-sm font-light text-sand-500 leading-relaxed line-clamp-2">
                    {col.description}
                  </p>
                </div>
              </div>
            ) : (
              <Link key={col.slug} href={`/collections/${col.slug}`} className="group">
                <div className="relative aspect-[4/5] rounded-2xl overflow-hidden bg-sand-200">
                  <Image
                    src={col.coverImage}
                    alt={col.coverImageAlt}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy-500/70 via-transparent to-transparent" />
                  <div className="absolute inset-0 flex flex-col justify-end p-7">
                    <p className="text-xs tracking-[0.15em] uppercase font-light text-sand-300 mb-1">
                      {col.products.length} {col.products.length === 1 ? 'product' : 'products'}
                    </p>
                    <h2 className="font-serif text-2xl font-light text-sand-50 mb-1 group-hover:text-sand-200 transition-colors">
                      {col.name}
                    </h2>
                    <p className="text-sm font-light text-sand-300 italic font-serif">{col.tagline}</p>
                  </div>
                </div>
                <div className="mt-4 px-1">
                  <p className="text-sm font-light text-navy-400 leading-relaxed line-clamp-2">
                    {col.description}
                  </p>
                </div>
              </Link>
            )
          ))}
        </div>
      </div>
    </div>
  );
}
