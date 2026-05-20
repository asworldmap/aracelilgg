'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Check } from 'lucide-react';

export function EmailCapture() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMsg, setErrorMsg] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !email.includes('@')) {
      setErrorMsg('Please enter a valid email address.');
      return;
    }
    setStatus('loading');
    setErrorMsg('');
    try {
      const res = await fetch('/api/newsletter', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      });
      if (!res.ok) throw new Error();
      setStatus('success');
      setEmail('');
    } catch {
      setStatus('error');
      setErrorMsg('Something went wrong. Please try again.');
    }
  };

  return (
    <section className="py-24 lg:py-32 bg-navy-500 relative overflow-hidden">
      {/* Subtle background texture */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            'radial-gradient(circle at 25% 25%, #E8D5B7 0%, transparent 50%), radial-gradient(circle at 75% 75%, #E8D5B7 0%, transparent 50%)',
        }}
      />

      <div className="relative max-w-2xl mx-auto px-6 lg:px-8 text-center">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-xs tracking-[0.2em] uppercase font-light text-terracotta-400 mb-6"
        >
          Join the Community
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9 }}
          className="font-serif text-display-md text-sand-50 font-light mb-6"
        >
          Join the
          <br />
          <em>Welcoming Planet.</em>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.15 }}
          className="text-sand-400 font-light leading-relaxed mb-10 max-w-md mx-auto"
        >
          Stories from the community, early access to new collections, and dispatches
          from the edges of the world. No noise. Only meaning.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.25 }}
        >
          {status === 'success' ? (
            <div className="flex items-center justify-center gap-3 text-sage-400">
              <div className="flex items-center justify-center w-8 h-8 rounded-full bg-sage-500/20">
                <Check className="w-4 h-4" strokeWidth={2} />
              </div>
              <p className="text-sand-200 font-light">
                You are in. Welcome to the planet.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="your@email.com"
                disabled={status === 'loading'}
                className="flex-1 bg-navy-400 border border-navy-300 text-sand-50 placeholder:text-sand-500 text-sm font-light px-5 py-4 rounded-none focus:outline-none focus:border-sand-300 transition-colors disabled:opacity-50"
              />
              <button
                type="submit"
                disabled={status === 'loading'}
                className="inline-flex items-center justify-center gap-2 bg-sand-50 text-navy-500 text-sm font-light tracking-wide px-7 py-4 hover:bg-sand-100 transition-colors disabled:opacity-50 active:scale-[0.98] whitespace-nowrap"
              >
                {status === 'loading' ? 'Joining...' : 'Join the Planet'}
                {status !== 'loading' && <ArrowRight className="w-4 h-4" strokeWidth={1.5} />}
              </button>
            </form>
          )}
          {errorMsg && (
            <p className="text-terracotta-400 text-xs font-light mt-3">{errorMsg}</p>
          )}
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="text-sand-500 text-xs font-light mt-6"
        >
          By subscribing you agree to our Privacy Policy. Unsubscribe anytime.
        </motion.p>
      </div>
    </section>
  );
}
