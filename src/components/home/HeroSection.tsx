'use client';

import { useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowDown } from 'lucide-react';

export function HeroSection() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] });
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '30%']);
  const opacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  return (
    <section ref={ref} className="relative h-screen min-h-[680px] overflow-hidden">
      {/* Parallax image */}
      <motion.div className="absolute inset-0" style={{ y }}>
        <Image
          src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=2400&q=90"
          alt="Cinematic ocean horizon at golden hour"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-navy-500/50 via-navy-500/20 to-navy-500/70" />
        <div className="absolute inset-0 bg-gradient-to-r from-navy-500/30 to-transparent" />
      </motion.div>

      {/* Content */}
      <motion.div
        className="relative z-10 flex flex-col justify-end h-full max-w-7xl mx-auto px-6 lg:px-8 pb-20 lg:pb-28"
        style={{ opacity }}
      >
        <div className="max-w-3xl">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-sand-300 text-sm tracking-[0.2em] uppercase font-light mb-6"
          >
            Handcrafted NFC Wearables
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 32 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.35, ease: [0.19, 1, 0.22, 1] }}
            className="font-serif text-display-xl text-sand-50 font-light leading-none mb-6"
          >
            Objects that
            <br />
            <em className="italic">connect people.</em>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.55 }}
            className="text-sand-200 text-base lg:text-lg font-light leading-relaxed max-w-xl mb-10"
          >
            Handcrafted wearables born from international youth exchange,
            cultural diplomacy, and the bonds that outlast every border.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.7 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <Link
              href="/collections"
              className="inline-flex items-center justify-center bg-sand-50 text-navy-500 text-sm font-light tracking-wide px-8 py-4 hover:bg-sand-100 transition-colors active:scale-[0.98]"
            >
              Explore Collection
            </Link>
            <Link
              href="/story"
              className="inline-flex items-center justify-center border border-sand-50/50 text-sand-50 text-sm font-light tracking-wide px-8 py-4 hover:bg-sand-50/10 transition-colors active:scale-[0.98]"
            >
              Discover the Story
            </Link>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.4 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.6, repeat: Infinity, ease: 'easeInOut' }}
          >
            <ArrowDown className="w-4 h-4 text-sand-300" strokeWidth={1.5} />
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}
