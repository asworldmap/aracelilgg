import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { collections, getCollectionBySlug, getProductsByCollection } from '@/lib/products';
import { formatPrice } from '@/lib/utils';

export async function generateStaticParams() {
  return collections.filter((c) => !c.comingSoon).map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const col = getCollectionBySlug(params.slug);
  if (!col) return {};
  return {
    title: `${col.name} — Welcoming Planet`,
    description: col.description,
    openGraph: {
      title: `${col.name} — Welcoming Planet`,
      description: col.description,
      images: [{ url: col.coverImage, alt: col.coverImageAlt }],
    },
  };
}

export default function CollectionPage({ params }: { params: { slug: string } }) {
  const col = getCollectionBySlug(params.slug);
  if (!col || col.comingSoon) notFound();

  const products = getProductsByCollection(params.slug);

  return (
    <div className="bg-sand-50 min-h-screen">
      {/* Hero */}
      <div className="relative h-[60vh] min-h-[400px] overflow-hidden">
        <Image
          src={col.coverImage}
          alt={col.coverImageAlt}
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-navy-500/50 to-navy-500/70" />
        <div className="relative z-10 flex flex-col justify-end h-full max-w-7xl mx-auto px-6 lg:px-8 pb-14">
          <nav className="flex items-center gap-2 text-xs font-light text-sand-400 mb-6">
            <Link href="/" className="hover:text-sand-200 transition-colors">Home</Link>
            <span>/</span>
            <Link href="/collections" className="hover:text-sand-200 transition-colors">Collections</Link>
            <span>/</span>
            <span className="text-sand-200">{col.name}</span>
          </nav>
          <p className="text-xs tracking-[0.2em] uppercase font-light text-terracotta-400 mb-3">
            {col.tagline}
          </p>
          <h1 className="font-serif text-display-lg text-sand-50 font-light">{col.name}</h1>
        </div>
      </div>

      {/* Description */}
      <div className="max-w-3xl mx-auto px-6 lg:px-8 py-12 lg:py-16">
        <p className="text-base font-light text-navy-400 leading-relaxed">{col.description}</p>
      </div>

      {/* Products */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 pb-24">
        {products.length === 0 ? (
          <p className="text-center font-light text-sand-500 py-12">
            Products coming soon.
          </p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product) => (
              <Link key={product.id} href={`/products/${product.slug}`} className="group">
                <div className="relative aspect-[4/5] rounded-2xl overflow-hidden bg-sand-200 mb-5">
                  <Image
                    src={product.images[0].url}
                    alt={product.images[0].alt}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                </div>
                <div className="flex items-start justify-between">
                  <div>
                    <p className="text-xs font-light text-sand-500 mb-1">{product.collection}</p>
                    <h2 className="font-serif text-xl font-light text-navy-500 group-hover:text-navy-400 transition-colors">
                      {product.name}
                    </h2>
                    <p className="text-sm font-light text-navy-400 mt-1 line-clamp-2 max-w-xs">
                      {product.shortDescription}
                    </p>
                  </div>
                  <span className="font-serif text-base font-light text-navy-500 mt-7 ml-4 flex-shrink-0">
                    {formatPrice(product.price, product.currency)}
                  </span>
                </div>
              </Link>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
