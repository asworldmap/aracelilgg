'use client';

import { AnimatePresence, motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { X, ShoppingBag, Minus, Plus, ArrowRight } from 'lucide-react';
import { useCartStore } from '@/lib/cart';
import { formatPrice } from '@/lib/utils';
import { Button } from './Button';

export function CartDrawer() {
  const { items, isOpen, closeCart, removeItem, updateQuantity, total } = useCartStore();
  const cartTotal = total();

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 bg-navy-500/40 backdrop-blur-sm z-40"
            onClick={closeCart}
          />

          {/* Drawer */}
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
            className="fixed right-0 top-0 bottom-0 z-50 w-full max-w-md bg-sand-50 shadow-2xl flex flex-col"
          >
            {/* Header */}
            <div className="flex items-center justify-between px-6 py-5 border-b border-sand-200">
              <div className="flex items-center gap-2">
                <ShoppingBag className="w-5 h-5 text-navy-500" strokeWidth={1.5} />
                <h2 className="font-serif text-lg font-light text-navy-500">
                  Your Cart
                </h2>
              </div>
              <button
                onClick={closeCart}
                className="text-navy-500 hover:opacity-60 transition-opacity"
                aria-label="Close cart"
              >
                <X className="w-5 h-5" strokeWidth={1.5} />
              </button>
            </div>

            {/* Items */}
            <div className="flex-1 overflow-y-auto px-6 py-6">
              {items.length === 0 ? (
                <div className="flex flex-col items-center justify-center h-full text-center gap-4">
                  <ShoppingBag className="w-12 h-12 text-sand-300" strokeWidth={1} />
                  <div>
                    <p className="font-serif text-xl font-light text-navy-400 mb-1">
                      Your cart is empty
                    </p>
                    <p className="text-sm text-sand-600 font-light">
                      Explore the collection
                    </p>
                  </div>
                  <Button variant="outline" size="sm" onClick={closeCart}>
                    <Link href="/collections">Browse Collections</Link>
                  </Button>
                </div>
              ) : (
                <ul className="space-y-6">
                  {items.map((item) => (
                    <li key={`${item.product.id}-${item.variant.id}`} className="flex gap-4">
                      <div className="relative w-20 h-24 rounded-lg overflow-hidden bg-sand-100 flex-shrink-0">
                        <Image
                          src={item.product.images[0].url}
                          alt={item.product.images[0].alt}
                          fill
                          className="object-cover"
                          sizes="80px"
                        />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-start justify-between gap-2">
                          <div>
                            <p className="font-serif text-base font-light text-navy-500 leading-tight">
                              {item.product.name}
                            </p>
                            <p className="text-xs text-sand-600 font-light mt-0.5">
                              {item.variant.name}
                            </p>
                          </div>
                          <button
                            onClick={() => removeItem(item.product.id, item.variant.id)}
                            className="text-sand-500 hover:text-navy-500 transition-colors flex-shrink-0"
                            aria-label="Remove item"
                          >
                            <X className="w-4 h-4" strokeWidth={1.5} />
                          </button>
                        </div>
                        <div className="flex items-center justify-between mt-3">
                          <div className="flex items-center border border-sand-200 rounded">
                            <button
                              onClick={() => updateQuantity(item.product.id, item.variant.id, item.quantity - 1)}
                              className="px-2 py-1 text-navy-500 hover:bg-sand-100 transition-colors"
                              aria-label="Decrease quantity"
                            >
                              <Minus className="w-3 h-3" strokeWidth={2} />
                            </button>
                            <span className="px-3 text-sm font-light text-navy-500">{item.quantity}</span>
                            <button
                              onClick={() => updateQuantity(item.product.id, item.variant.id, item.quantity + 1)}
                              className="px-2 py-1 text-navy-500 hover:bg-sand-100 transition-colors"
                              aria-label="Increase quantity"
                            >
                              <Plus className="w-3 h-3" strokeWidth={2} />
                            </button>
                          </div>
                          <p className="text-sm font-medium text-navy-500">
                            {formatPrice(item.product.price * item.quantity, item.product.currency)}
                          </p>
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
              )}
            </div>

            {/* Footer */}
            {items.length > 0 && (
              <div className="px-6 py-6 border-t border-sand-200 space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-light text-navy-400">Subtotal</span>
                  <span className="font-serif text-lg font-light text-navy-500">
                    {formatPrice(cartTotal, 'EUR')}
                  </span>
                </div>
                <p className="text-xs text-sand-500 font-light">
                  Shipping and taxes calculated at checkout.
                </p>
                <Link href="/checkout" onClick={closeCart}>
                  <Button variant="primary" size="lg" className="w-full">
                    Checkout
                    <ArrowRight className="ml-2 w-4 h-4" strokeWidth={1.5} />
                  </Button>
                </Link>
                <Link
                  href="/collections"
                  className="block text-center text-sm font-light text-navy-400 hover:text-navy-500 transition-colors"
                  onClick={closeCart}
                >
                  Continue Shopping
                </Link>
              </div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
