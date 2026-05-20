'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Wifi, ArrowRight } from 'lucide-react';
import { products } from '@/lib/products';
import { formatPrice } from '@/lib/utils';

const featured = products[0];

const nfcSteps = [
  { icon: '01', label: 'Tap', desc: 'Hold any NFC phone near the bracelet' },
  { icon: '02', label: 'Open', desc: 'Your digital identity loads instantly' },
  { icon: '03', label: 'Connect', desc: 'Share your story — no app required' },
];

export function FeaturedProduct() {
  const [activeImage, setActiveImage] = useState(0);

  return (
    <section className="py-24 lg:py-32 bg-sand-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section label */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-xs tracking-[0.2em] uppercase font-light text-terracotta-500 mb-3"
        >
          Featured Collection
        </motion.p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Image gallery */}
          <motion.div
            initial={{ opacity: 0, x: -32 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, ease: [0.19, 1, 0.22, 1] }}
          >
            {/* Main image */}
            <div className="relative aspect-[4/5] rounded-2xl overflow-hidden bg-sand-100 mb-4">
              <Image
                src={featured.images[activeImage]?.url ?? featured.images[0].url}
                alt={featured.images[activeImage]?.alt ?? featured.images[0].alt}
                fill
                className="object-cover transition-opacity duration-500"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              {/* NFC badge */}
              <div className="absolute top-4 left-4 bg-navy-500/90 backdrop-blur-sm text-sand-50 text-xs font-light tracking-wide px-3 py-1.5 rounded-full flex items-center gap-1.5">
                <Wifi className="w-3 h-3" strokeWidth={2} />
                NFC Enabled
              </div>
            </div>

            {/* Thumbnails */}
            <div className="grid grid-cols-4 gap-3">
              {featured.images.map((img, i) => (
                <button
                  key={i}
                  onClick={() => setActiveImage(i)}
                  className={`relative aspect-square rounded-lg overflow-hidden bg-sand-100 transition-all duration-200 ${
                    activeImage === i ? 'ring-2 ring-navy-500 ring-offset-2' : 'opacity-60 hover:opacity-100'
                  }`}
                >
                  <Image src={img.url} alt={img.alt} fill className="object-cover" sizes="100px" />
                </button>
              ))}
            </div>
          </motion.div>

          {/* Product info */}
          <motion.div
            initial={{ opacity: 0, x: 32 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, delay: 0.15, ease: [0.19, 1, 0.22, 1] }}
          >
            <p className="text-xs tracking-[0.15em] uppercase font-light text-sand-600 mb-3">
              {featured.collection}
            </p>
            <h2 className="font-serif text-display-md text-navy-500 font-light mb-4">
              {featured.name}
            </h2>
            <div className="flex items-baseline gap-3 mb-6">
              <span className="font-serif text-2xl font-light text-navy-500">
                {formatPrice(featured.price, featured.currency)}
              </span>
              {featured.compareAtPrice && (
                <span className="text-sm font-light text-sand-500 line-through">
                  {formatPrice(featured.compareAtPrice, featured.currency)}
                </span>
              )}
            </div>
            <p className="text-base font-light text-navy-400 leading-relaxed mb-8">
              {featured.shortDescription}
            </p>

            {/* NFC steps */}
            <div className="grid grid-cols-3 gap-4 mb-10 py-6 border-y border-sand-200">
              {nfcSteps.map((step) => (
                <div key={step.icon} className="text-center">
                  <p className="text-xs tracking-[0.15em] font-light text-sand-500 mb-1">{step.icon}</p>
                  <p className="font-serif text-lg font-light text-navy-500 mb-1">{step.label}</p>
                  <p className="text-xs font-light text-sand-600 leading-snug">{step.desc}</p>
                </div>
              ))}
            </div>

            {/* Materials teaser */}
            <div className="flex flex-wrap gap-2 mb-10">
              {featured.materials.slice(0, 3).map((m) => (
                <span
                  key={m}
                  className="text-xs font-light text-navy-400 border border-sand-200 px-3 py-1 rounded-full"
                >
                  {m.split(' ').slice(0, 3).join(' ')}
                </span>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href={`/products/${featured.slug}`}
                className="inline-flex items-center justify-center bg-navy-500 text-sand-50 text-sm font-light tracking-wide px-8 py-4 hover:bg-navy-400 transition-colors active:scale-[0.98] gap-2"
              >
                View Product
                <ArrowRight className="w-4 h-4" strokeWidth={1.5} />
              </Link>
              <Link
                href="/collections/swy"
                className="inline-flex items-center justify-center border border-navy-500 text-navy-500 text-sm font-light tracking-wide px-8 py-4 hover:bg-navy-500 hover:text-sand-50 transition-colors active:scale-[0.98]"
              >
                Full Collection
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
