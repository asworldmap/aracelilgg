'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from './Button';
import Link from 'next/link';

export function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('wp-cookie-consent');
    if (!consent) {
      const timer = setTimeout(() => setVisible(true), 1500);
      return () => clearTimeout(timer);
    }
  }, []);

  const accept = () => {
    localStorage.setItem('wp-cookie-consent', 'accepted');
    setVisible(false);
  };

  const decline = () => {
    localStorage.setItem('wp-cookie-consent', 'declined');
    setVisible(false);
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ type: 'spring', stiffness: 200, damping: 25 }}
          className="fixed bottom-6 left-6 right-6 z-40 max-w-lg mx-auto"
        >
          <div className="bg-navy-500 text-sand-100 rounded-2xl px-6 py-5 shadow-2xl">
            <p className="text-sm font-light leading-relaxed mb-4">
              We use cookies to improve your experience and remember your cart.
              Read our{' '}
              <Link href="/privacy" className="underline hover:text-sand-50 transition-colors">
                Privacy Policy
              </Link>
              .
            </p>
            <div className="flex items-center gap-3">
              <Button
                onClick={accept}
                size="sm"
                className="bg-sand-50 text-navy-500 hover:bg-sand-100"
              >
                Accept
              </Button>
              <button
                onClick={decline}
                className="text-sm font-light text-sand-400 hover:text-sand-50 transition-colors"
              >
                Decline
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
