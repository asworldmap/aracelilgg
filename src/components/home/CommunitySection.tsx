'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

const communityPhotos = [
  {
    url: 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=800&q=85',
    alt: 'International friends laughing together at sunset',
    caption: 'SWY Voyage, Pacific Ocean',
  },
  {
    url: 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=800&q=85',
    alt: 'Friends at airport departure',
    caption: 'Erasmus reunion, Lisbon',
  },
  {
    url: 'https://images.unsplash.com/photo-1523906834658-6e24ef2386f9?w=800&q=85',
    alt: 'Youth group at Mediterranean harbor',
    caption: 'Mediterranean Routes, Valencia',
  },
  {
    url: 'https://images.unsplash.com/photo-1488085061387-422e29b40080?w=800&q=85',
    alt: 'Traveler at airport with bracelet visible',
    caption: 'Nomad, Singapore',
  },
  {
    url: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800&q=85',
    alt: 'Ocean horizon with bracelet in foreground',
    caption: 'Pacific Ocean, SWY 2023',
  },
  {
    url: 'https://images.unsplash.com/photo-1467269204594-9661b134dd2b?w=800&q=85',
    alt: 'Group photo on European bridge',
    caption: 'Prague, Erasmus 2022',
  },
];

export function CommunitySection() {
  return (
    <section className="py-24 lg:py-32 bg-sand-100 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 mb-12">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <div>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-xs tracking-[0.2em] uppercase font-light text-terracotta-500 mb-3"
            >
              Community
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.9 }}
              className="font-serif text-display-md text-navy-500 font-light"
            >
              Worn across
              <br />
              <em>every timezone.</em>
            </motion.h2>
          </div>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-sm font-light text-navy-400 max-w-xs"
          >
            From the Pacific to the Mediterranean, from student dormitories to diplomatic missions — the community is global.
          </motion.p>
        </div>
      </div>

      {/* Scrolling photo grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 px-6 lg:px-8 max-w-7xl mx-auto">
        {communityPhotos.map((photo, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: i * 0.06 }}
            className={`relative overflow-hidden rounded-xl bg-sand-200 ${
              i === 0 || i === 3 ? 'aspect-[3/4]' : 'aspect-square'
            }`}
          >
            <Image
              src={photo.url}
              alt={photo.alt}
              fill
              className="object-cover hover:scale-105 transition-transform duration-700"
              sizes="(max-width: 768px) 50vw, 33vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-navy-500/50 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300" />
            <p className="absolute bottom-3 left-3 right-3 text-xs font-light text-sand-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 italic font-serif">
              {photo.caption}
            </p>
          </motion.div>
        ))}
      </div>

      {/* Stats */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 mt-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 py-10 border-y border-sand-300">
          {[
            { value: '50+', label: 'Countries represented' },
            { value: '1,200+', label: 'Bracelets in the world' },
            { value: '34', label: 'SWY voyages honored' },
            { value: '4.9', label: 'Average review score' },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="font-serif text-3xl lg:text-4xl font-light text-navy-500 mb-1">
                {stat.value}
              </p>
              <p className="text-xs font-light text-sand-600 tracking-wide">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
