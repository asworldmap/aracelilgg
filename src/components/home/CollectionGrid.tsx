'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { collections } from '@/lib/products';
import { Lock } from 'lucide-react';

export function CollectionGrid() {
  return (
    <section className="py-24 lg:py-32 bg-sand-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-12">
          <div>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-xs tracking-[0.2em] uppercase font-light text-terracotta-500 mb-3"
            >
              Collections
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.9 }}
              className="font-serif text-display-md text-navy-500 font-light"
            >
              Every journey
              <br />
              <em>finds its object.</em>
            </motion.h2>
          </div>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <Link
              href="/collections"
              className="text-sm font-light text-navy-400 hover:text-navy-500 transition-colors border-b border-navy-300 hover:border-navy-500 pb-0.5"
            >
              View all collections
            </Link>
          </motion.div>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {collections.map((col, i) => (
            <motion.div
              key={col.slug}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: i * 0.08 }}
            >
              {col.comingSoon ? (
                <div className="group relative aspect-[4/5] rounded-2xl overflow-hidden bg-navy-500 cursor-default">
                  <Image
                    src={col.coverImage}
                    alt={col.coverImageAlt}
                    fill
                    className="object-cover opacity-40"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-navy-500/60" />
                  <div className="absolute inset-0 flex flex-col justify-end p-6">
                    <div className="flex items-center gap-2 mb-2">
                      <Lock className="w-3 h-3 text-sand-400" strokeWidth={2} />
                      <span className="text-xs tracking-[0.15em] uppercase font-light text-sand-400">
                        Coming Soon
                      </span>
                    </div>
                    <h3 className="font-serif text-xl font-light text-sand-200 mb-1">{col.name}</h3>
                    <p className="text-xs font-light text-sand-500 italic font-serif">{col.tagline}</p>
                  </div>
                </div>
              ) : (
                <Link href={`/collections/${col.slug}`} className="group">
                  <div className="relative aspect-[4/5] rounded-2xl overflow-hidden bg-sand-200">
                    <Image
                      src={col.coverImage}
                      alt={col.coverImageAlt}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-navy-500/70 via-transparent to-transparent" />
                    <div className="absolute inset-0 flex flex-col justify-end p-6">
                      <p className="text-xs tracking-[0.15em] uppercase font-light text-sand-300 mb-1">
                        {col.products.length} product{col.products.length !== 1 ? 's' : ''}
                      </p>
                      <h3 className="font-serif text-xl font-light text-sand-50 mb-1 group-hover:text-sand-200 transition-colors">
                        {col.name}
                      </h3>
                      <p className="text-sm font-light text-sand-300 italic font-serif">{col.tagline}</p>
                    </div>
                  </div>
                </Link>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
