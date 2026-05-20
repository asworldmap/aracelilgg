import Image from 'next/image';
import Link from 'next/link';
import type { Product } from '@/lib/types';
import { formatPrice } from '@/lib/utils';

export function RelatedProducts({ products }: { products: Product[] }) {
  return (
    <section className="py-20 lg:py-24 bg-sand-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <h2 className="font-serif text-display-sm text-navy-500 font-light mb-10">
          You might also like
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product) => (
            <Link key={product.id} href={`/products/${product.slug}`} className="group">
              <div className="relative aspect-[4/5] rounded-xl overflow-hidden bg-sand-200 mb-4">
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
                  <h3 className="font-serif text-lg font-light text-navy-500 group-hover:text-navy-400 transition-colors">
                    {product.name}
                  </h3>
                </div>
                <span className="font-serif text-base font-light text-navy-500 mt-5">
                  {formatPrice(product.price, product.currency)}
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
