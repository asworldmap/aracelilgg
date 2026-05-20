'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { ShoppingBag, Menu, X, Globe } from 'lucide-react';
import { useCartStore } from '@/lib/cart';
import { cn } from '@/lib/utils';

const navLinks = [
  { href: '/collections', label: 'Collections' },
  { href: '/story', label: 'Our Story' },
  { href: '/community', label: 'Community' },
  { href: '/about', label: 'About' },
];

export function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { openCart, itemCount } = useCartStore();
  const count = itemCount();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    if (mobileOpen) document.body.style.overflow = 'hidden';
    else document.body.style.overflow = '';
    return () => { document.body.style.overflow = ''; };
  }, [mobileOpen]);

  return (
    <>
      <header
        className={cn(
          'fixed top-0 left-0 right-0 z-50 transition-all duration-500',
          scrolled
            ? 'bg-sand-50/95 backdrop-blur-md border-b border-sand-200 py-3'
            : 'bg-transparent py-5'
        )}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2 group">
              <Globe
                className={cn(
                  'w-5 h-5 transition-all duration-300 group-hover:rotate-12',
                  scrolled ? 'text-navy-500' : 'text-sand-50'
                )}
                strokeWidth={1.5}
              />
              <span
                className={cn(
                  'font-serif text-lg font-light tracking-wide transition-colors duration-300',
                  scrolled ? 'text-navy-500' : 'text-sand-50'
                )}
              >
                Welcoming Planet
              </span>
            </Link>

            {/* Desktop nav */}
            <nav className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                    'text-sm font-light tracking-wide transition-all duration-200 hover:opacity-60 relative after:absolute after:bottom-0 after:left-0 after:h-px after:w-0 after:bg-current after:transition-all after:duration-300 hover:after:w-full',
                    scrolled ? 'text-navy-500' : 'text-sand-50'
                  )}
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            {/* Right actions */}
            <div className="flex items-center gap-4">
              <button
                onClick={openCart}
                className={cn(
                  'relative flex items-center gap-1.5 text-sm font-light tracking-wide transition-opacity duration-200 hover:opacity-60',
                  scrolled ? 'text-navy-500' : 'text-sand-50'
                )}
                aria-label={`Cart (${count} items)`}
              >
                <ShoppingBag className="w-5 h-5" strokeWidth={1.5} />
                {count > 0 && (
                  <span className="absolute -top-1.5 -right-1.5 flex h-4 w-4 items-center justify-center rounded-full bg-terracotta-500 text-[10px] font-medium text-white">
                    {count}
                  </span>
                )}
              </button>

              {/* Mobile menu toggle */}
              <button
                className={cn(
                  'md:hidden transition-opacity hover:opacity-60',
                  scrolled ? 'text-navy-500' : 'text-sand-50'
                )}
                onClick={() => setMobileOpen(true)}
                aria-label="Open menu"
              >
                <Menu className="w-5 h-5" strokeWidth={1.5} />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-50 bg-navy-500"
          >
            <div className="flex flex-col h-full px-8 py-8">
              <div className="flex items-center justify-between mb-16">
                <Link
                  href="/"
                  className="flex items-center gap-2 text-sand-50"
                  onClick={() => setMobileOpen(false)}
                >
                  <Globe className="w-5 h-5" strokeWidth={1.5} />
                  <span className="font-serif text-lg font-light tracking-wide">
                    Welcoming Planet
                  </span>
                </Link>
                <button
                  onClick={() => setMobileOpen(false)}
                  className="text-sand-50 hover:opacity-60 transition-opacity"
                  aria-label="Close menu"
                >
                  <X className="w-6 h-6" strokeWidth={1.5} />
                </button>
              </div>

              <nav className="flex flex-col gap-6">
                {navLinks.map((link, i) => (
                  <motion.div
                    key={link.href}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.07 + 0.1 }}
                  >
                    <Link
                      href={link.href}
                      className="font-serif text-display-sm text-sand-50 font-light hover:text-sand-300 transition-colors"
                      onClick={() => setMobileOpen(false)}
                    >
                      {link.label}
                    </Link>
                  </motion.div>
                ))}
              </nav>

              <div className="mt-auto border-t border-navy-400 pt-8">
                <p className="text-sand-400 text-sm font-light tracking-wide">
                  Objects that connect people.
                </p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
