'use client';

import { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import type { ProductImage } from '@/lib/types';

export function ProductGallery({ images }: { images: ProductImage[] }) {
  const [active, setActive] = useState(0);

  return (
    <div className="sticky top-24">
      {/* Main image */}
      <div className="relative aspect-[4/5] rounded-2xl overflow-hidden bg-sand-100 mb-4">
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.35 }}
            className="absolute inset-0"
          >
            <Image
              src={images[active].url}
              alt={images[active].alt}
              fill
              priority={active === 0}
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Thumbnails */}
      {images.length > 1 && (
        <div className="grid grid-cols-4 gap-3">
          {images.map((img, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              className={`relative aspect-square rounded-lg overflow-hidden bg-sand-100 transition-all ${
                active === i
                  ? 'ring-2 ring-navy-500 ring-offset-2'
                  : 'opacity-55 hover:opacity-100'
              }`}
            >
              <Image src={img.url} alt={img.alt} fill className="object-cover" sizes="100px" />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
