'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

const pillars = [
  {
    number: '01',
    title: 'Handcrafted with intention',
    body: 'Every piece is made by hand using materials chosen for their texture, durability, and meaning. We do not produce at scale. We produce with care.',
  },
  {
    number: '02',
    title: 'Technology that disappears',
    body: 'The NFC chip is invisible. The digital experience opens in a browser — no app, no friction. Technology should serve connection, not interrupt it.',
  },
  {
    number: '03',
    title: 'Objects carry memory',
    body: 'The most meaningful objects in your life are not the most expensive. They are the ones attached to a moment, a person, a transformation.',
  },
];

export function StorySection() {
  return (
    <section className="py-24 lg:py-32 bg-navy-500">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          {/* Left — text */}
          <div>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-xs tracking-[0.2em] uppercase font-light text-terracotta-400 mb-8"
            >
              Philosophy
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.9, ease: [0.19, 1, 0.22, 1] }}
              className="font-serif text-display-md text-sand-50 font-light leading-tight mb-8"
            >
              Some journeys
              <br />
              <em>deserve to be carried.</em>
            </motion.h2>
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.9, delay: 0.15 }}
              className="prose-premium text-sand-300 mb-12"
            >
              <p>
                Welcoming Planet was born from a specific kind of grief — the grief of leaving
                a place where you felt more yourself than anywhere before. The grief of an
                exchange ending.
              </p>
              <p>
                We make objects for people who have crossed borders and been changed by them.
                For the ones with friends in twelve cities. For the ones who left pieces of
                themselves on ships, in hostels, in university canteens.
              </p>
              <p>
                These bracelets are not accessories. They are artifacts.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              <Link
                href="/story"
                className="text-sm font-light text-sand-300 hover:text-sand-50 transition-colors border-b border-sand-500 hover:border-sand-300 pb-0.5 tracking-wide"
              >
                Read the full story
              </Link>
            </motion.div>
          </div>

          {/* Right — pillars + image */}
          <div className="space-y-12">
            {/* Pillars */}
            <div className="space-y-8">
              {pillars.map((p, i) => (
                <motion.div
                  key={p.number}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7, delay: i * 0.1 }}
                  className="flex gap-5"
                >
                  <span className="text-xs tracking-[0.1em] text-sand-600 font-light mt-1 flex-shrink-0 w-6">
                    {p.number}
                  </span>
                  <div>
                    <h3 className="font-serif text-lg font-light text-sand-50 mb-2">{p.title}</h3>
                    <p className="text-sm font-light text-sand-400 leading-relaxed">{p.body}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Atmospheric image */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.2 }}
              className="relative aspect-[16/9] rounded-2xl overflow-hidden"
            >
              <Image
                src="https://images.unsplash.com/photo-1523906834658-6e24ef2386f9?w=1200&q=85"
                alt="Friends gathered at golden hour near the sea"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-500/60 to-transparent" />
              <p className="absolute bottom-4 left-6 text-sand-200 text-sm font-serif font-light italic">
                Venice, 2023 — SWY Alumni Reunion
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
