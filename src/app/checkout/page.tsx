'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useCartStore } from '@/lib/cart';
import { formatPrice } from '@/lib/utils';
import { Globe, Lock } from 'lucide-react';

export default function CheckoutPage() {
  const { items, total } = useCartStore();
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  const cartTotal = total();
  const shipping = cartTotal >= 80 ? 0 : 6.9;

  return (
    <div className="bg-sand-50 min-h-screen">
      <div className="max-w-6xl mx-auto px-6 lg:px-8 pt-12 lg:pt-16 pb-24">
        {/* Header */}
        <div className="flex items-center justify-between mb-10 pb-6 border-b border-sand-200">
          <Link href="/" className="flex items-center gap-2">
            <Globe className="w-5 h-5 text-navy-500" strokeWidth={1.5} />
            <span className="font-serif text-lg font-light text-navy-500">Welcoming Planet</span>
          </Link>
          <div className="flex items-center gap-1.5 text-xs font-light text-sand-500">
            <Lock className="w-3.5 h-3.5" strokeWidth={2} />
            Secure checkout
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[1fr_400px] gap-12 lg:gap-16">
          {/* Left — form */}
          <div>
            <h1 className="font-serif text-2xl font-light text-navy-500 mb-8">Checkout</h1>

            <form className="space-y-8">
              {/* Contact */}
              <section>
                <h2 className="text-xs tracking-[0.15em] uppercase font-light text-navy-500 mb-5">
                  Contact
                </h2>
                <input
                  type="email"
                  placeholder="Email address"
                  className="w-full border border-sand-300 bg-transparent text-navy-500 text-sm font-light px-4 py-3 focus:outline-none focus:border-navy-500 transition-colors"
                />
                <label className="flex items-center gap-3 mt-3">
                  <input type="checkbox" defaultChecked className="accent-navy-500" />
                  <span className="text-sm font-light text-navy-400">
                    Subscribe to stories and new releases
                  </span>
                </label>
              </section>

              {/* Shipping address */}
              <section>
                <h2 className="text-xs tracking-[0.15em] uppercase font-light text-navy-500 mb-5">
                  Shipping Address
                </h2>
                <div className="space-y-3">
                  <div className="grid grid-cols-2 gap-3">
                    <input placeholder="First name" className="border border-sand-300 bg-transparent text-navy-500 text-sm font-light px-4 py-3 focus:outline-none focus:border-navy-500 transition-colors" />
                    <input placeholder="Last name" className="border border-sand-300 bg-transparent text-navy-500 text-sm font-light px-4 py-3 focus:outline-none focus:border-navy-500 transition-colors" />
                  </div>
                  <input placeholder="Address" className="w-full border border-sand-300 bg-transparent text-navy-500 text-sm font-light px-4 py-3 focus:outline-none focus:border-navy-500 transition-colors" />
                  <input placeholder="Apartment, suite, etc. (optional)" className="w-full border border-sand-300 bg-transparent text-navy-500 text-sm font-light px-4 py-3 focus:outline-none focus:border-navy-500 transition-colors" />
                  <div className="grid grid-cols-2 gap-3">
                    <input placeholder="City" className="border border-sand-300 bg-transparent text-navy-500 text-sm font-light px-4 py-3 focus:outline-none focus:border-navy-500 transition-colors" />
                    <input placeholder="Postal code" className="border border-sand-300 bg-transparent text-navy-500 text-sm font-light px-4 py-3 focus:outline-none focus:border-navy-500 transition-colors" />
                  </div>
                  <select className="w-full border border-sand-300 bg-sand-50 text-navy-500 text-sm font-light px-4 py-3 focus:outline-none focus:border-navy-500 transition-colors">
                    <option>Spain</option>
                    <option>France</option>
                    <option>Germany</option>
                    <option>Italy</option>
                    <option>Portugal</option>
                    <option>United Kingdom</option>
                    <option>United States</option>
                    <option>Japan</option>
                    <option>Other</option>
                  </select>
                </div>
              </section>

              {/* Payment — Stripe Elements placeholder */}
              <section>
                <h2 className="text-xs tracking-[0.15em] uppercase font-light text-navy-500 mb-5">
                  Payment
                </h2>
                <div className="border border-sand-300 rounded p-4 bg-sand-100 text-sm font-light text-sand-500">
                  <p className="mb-1">Stripe payment element loads here.</p>
                  <p className="text-xs">Connect <code>NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY</code> to activate.</p>
                </div>
              </section>

              <button
                type="submit"
                className="w-full bg-navy-500 text-sand-50 text-sm font-light tracking-wide py-4 hover:bg-navy-400 transition-colors active:scale-[0.99] flex items-center justify-center gap-2"
              >
                <Lock className="w-4 h-4" strokeWidth={1.5} />
                Complete Order · {formatPrice(cartTotal + shipping, 'EUR')}
              </button>
            </form>
          </div>

          {/* Right — order summary */}
          <div>
            <h2 className="font-serif text-xl font-light text-navy-500 mb-6">Order Summary</h2>

            {items.length === 0 ? (
              <div className="text-center py-10">
                <p className="text-sm font-light text-sand-500">Your cart is empty.</p>
                <Link href="/collections" className="text-sm font-light text-navy-400 hover:text-navy-500 underline mt-2 block">
                  Browse collections
                </Link>
              </div>
            ) : (
              <>
                <ul className="space-y-4 mb-6">
                  {items.map((item) => (
                    <li key={`${item.product.id}-${item.variant.id}`} className="flex gap-4">
                      <div className="relative w-16 h-20 rounded-lg overflow-hidden bg-sand-200 flex-shrink-0">
                        <Image
                          src={item.product.images[0].url}
                          alt={item.product.name}
                          fill
                          className="object-cover"
                          sizes="64px"
                        />
                        <span className="absolute -top-1.5 -right-1.5 flex h-5 w-5 items-center justify-center rounded-full bg-navy-400 text-[10px] font-medium text-white">
                          {item.quantity}
                        </span>
                      </div>
                      <div className="flex-1">
                        <p className="font-serif text-sm font-light text-navy-500">{item.product.name}</p>
                        <p className="text-xs font-light text-sand-500">{item.variant.name}</p>
                        <p className="text-sm font-light text-navy-500 mt-1">
                          {formatPrice(item.product.price * item.quantity, item.product.currency)}
                        </p>
                      </div>
                    </li>
                  ))}
                </ul>

                <div className="border-t border-sand-200 pt-5 space-y-3">
                  <div className="flex justify-between text-sm font-light">
                    <span className="text-navy-400">Subtotal</span>
                    <span className="text-navy-500">{formatPrice(cartTotal, 'EUR')}</span>
                  </div>
                  <div className="flex justify-between text-sm font-light">
                    <span className="text-navy-400">Shipping</span>
                    <span className="text-navy-500">{shipping === 0 ? 'Free' : formatPrice(shipping, 'EUR')}</span>
                  </div>
                  <div className="flex justify-between font-serif text-lg font-light border-t border-sand-200 pt-4">
                    <span className="text-navy-500">Total</span>
                    <span className="text-navy-500">{formatPrice(cartTotal + shipping, 'EUR')}</span>
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
