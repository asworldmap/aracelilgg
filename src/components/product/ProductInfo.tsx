'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, Wifi, ChevronDown, ChevronUp, Truck, RotateCcw, Shield } from 'lucide-react';
import { useCartStore } from '@/lib/cart';
import { formatPrice, cn } from '@/lib/utils';
import type { Product } from '@/lib/types';

export function ProductInfo({ product }: { product: Product }) {
  const [selectedVariant, setSelectedVariant] = useState(product.variants[0]);
  const [qty, setQty] = useState(1);
  const [expandedSection, setExpandedSection] = useState<string | null>('nfc');
  const { addItem } = useCartStore();

  const handleAddToCart = () => {
    if (!selectedVariant.inStock) return;
    addItem(product, selectedVariant, qty);
  };

  const toggleSection = (id: string) => {
    setExpandedSection((prev) => (prev === id ? null : id));
  };

  const sections = [
    {
      id: 'nfc',
      title: 'NFC Features',
      content: (
        <ul className="space-y-2">
          {product.nfcFeatures.map((f) => (
            <li key={f} className="flex items-start gap-2 text-sm font-light text-navy-400">
              <Wifi className="w-3.5 h-3.5 mt-0.5 text-terracotta-500 flex-shrink-0" strokeWidth={2} />
              {f}
            </li>
          ))}
        </ul>
      ),
    },
    {
      id: 'materials',
      title: 'Materials & Craft',
      content: (
        <div className="space-y-3">
          <ul className="space-y-2">
            {product.materials.map((m) => (
              <li key={m} className="text-sm font-light text-navy-400">— {m}</li>
            ))}
          </ul>
          <p className="text-sm font-light text-navy-400">
            <span className="font-medium text-navy-500">Dimensions:</span> {product.dimensions}
          </p>
        </div>
      ),
    },
    {
      id: 'story',
      title: 'The Story',
      content: (
        <div className="space-y-3">
          {product.story.split('\n\n').map((para, i) => (
            <p key={i} className="text-sm font-light text-navy-400 leading-relaxed">{para}</p>
          ))}
        </div>
      ),
    },
  ];

  return (
    <div>
      {/* Collection + Rating */}
      <div className="flex items-center justify-between mb-4">
        <p className="text-xs tracking-[0.15em] uppercase font-light text-sand-600">
          {product.collection}
        </p>
        <div className="flex items-center gap-1.5">
          <div className="flex">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star
                key={i}
                className={cn(
                  'w-3 h-3',
                  i < Math.floor(product.rating)
                    ? 'text-terracotta-500 fill-terracotta-500'
                    : 'text-sand-300'
                )}
                strokeWidth={0}
              />
            ))}
          </div>
          <span className="text-xs font-light text-navy-400">
            {product.rating} ({product.reviewCount})
          </span>
        </div>
      </div>

      {/* Name */}
      <h1 className="font-serif text-display-sm text-navy-500 font-light mb-4">
        {product.name}
      </h1>

      {/* Price */}
      <div className="flex items-baseline gap-3 mb-6">
        <span className="font-serif text-2xl font-light text-navy-500">
          {formatPrice(product.price, product.currency)}
        </span>
        {product.compareAtPrice && (
          <span className="text-sm font-light text-sand-500 line-through">
            {formatPrice(product.compareAtPrice, product.currency)}
          </span>
        )}
      </div>

      {/* Short description */}
      <p className="text-base font-light text-navy-400 leading-relaxed mb-8">
        {product.shortDescription}
      </p>

      {/* Variant selector */}
      <div className="mb-8">
        <p className="text-xs tracking-[0.12em] uppercase font-light text-navy-500 mb-3">
          Select variant:{' '}
          <span className="normal-case tracking-normal font-normal">{selectedVariant.name}</span>
        </p>
        <div className="flex flex-wrap gap-2">
          {product.variants.map((v) => (
            <button
              key={v.id}
              onClick={() => setSelectedVariant(v)}
              disabled={!v.inStock}
              className={cn(
                'relative px-4 py-2 text-sm font-light transition-all duration-150',
                selectedVariant.id === v.id
                  ? 'bg-navy-500 text-sand-50'
                  : 'border border-sand-300 text-navy-400 hover:border-navy-400 hover:text-navy-500',
                !v.inStock && 'opacity-35 cursor-not-allowed line-through'
              )}
            >
              {v.name}
              {v.colorHex && (
                <span
                  className="inline-block w-2.5 h-2.5 rounded-full ml-2 border border-sand-200"
                  style={{ backgroundColor: v.colorHex }}
                />
              )}
            </button>
          ))}
        </div>
      </div>

      {/* Quantity + Add to cart */}
      <div className="flex items-stretch gap-3 mb-6">
        <div className="flex items-center border border-sand-300">
          <button
            onClick={() => setQty(Math.max(1, qty - 1))}
            className="px-4 py-3 text-navy-500 hover:bg-sand-100 transition-colors"
          >
            &minus;
          </button>
          <span className="px-4 text-sm font-light text-navy-500">{qty}</span>
          <button
            onClick={() => setQty(qty + 1)}
            className="px-4 py-3 text-navy-500 hover:bg-sand-100 transition-colors"
          >
            +
          </button>
        </div>
        <motion.button
          whileTap={{ scale: 0.98 }}
          onClick={handleAddToCart}
          disabled={!selectedVariant.inStock}
          className={cn(
            'flex-1 text-sm font-light tracking-wide py-3 transition-all duration-200',
            selectedVariant.inStock
              ? 'bg-navy-500 text-sand-50 hover:bg-navy-400'
              : 'bg-sand-200 text-sand-500 cursor-not-allowed'
          )}
        >
          {selectedVariant.inStock ? 'Add to Cart' : 'Out of Stock'}
        </motion.button>
      </div>

      {/* Trust badges */}
      <div className="grid grid-cols-3 gap-4 mb-10 pb-8 border-b border-sand-200">
        {[
          { icon: Truck, label: 'Free shipping over €80' },
          { icon: RotateCcw, label: '30-day returns' },
          { icon: Shield, label: 'Lifetime NFC warranty' },
        ].map(({ icon: Icon, label }) => (
          <div key={label} className="flex flex-col items-center text-center gap-2">
            <Icon className="w-5 h-5 text-navy-400" strokeWidth={1.5} />
            <p className="text-[11px] font-light text-navy-400 leading-tight">{label}</p>
          </div>
        ))}
      </div>

      {/* Accordion sections */}
      <div className="space-y-4">
        {sections.map((section) => (
          <div key={section.id} className="border-b border-sand-200">
            <button
              onClick={() => toggleSection(section.id)}
              className="w-full flex items-center justify-between py-4 text-left"
            >
              <span className="text-sm font-light text-navy-500 tracking-wide">{section.title}</span>
              {expandedSection === section.id ? (
                <ChevronUp className="w-4 h-4 text-navy-400" strokeWidth={1.5} />
              ) : (
                <ChevronDown className="w-4 h-4 text-navy-400" strokeWidth={1.5} />
              )}
            </button>
            <AnimatePresence initial={false}>
              {expandedSection === section.id && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden"
                >
                  <div className="pb-5">{section.content}</div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>
    </div>
  );
}
