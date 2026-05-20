'use client';

import { useState } from 'react';
import type { Metadata } from 'next';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const faqs = [
  {
    category: 'NFC & Technology',
    items: [
      {
        q: 'Do I need a special phone to use the NFC feature?',
        a: 'No. The NFC feature works with any modern iPhone (XS and later, 2018+) and most Android phones made after 2015. No app download is required — the profile opens directly in your phone’s browser.',
      },
      {
        q: 'Can I update my NFC profile after I receive my bracelet?',
        a: 'Yes. You can update your profile at any time through the Welcoming Planet profile portal. Changes appear instantly for anyone who taps your bracelet.',
      },
      {
        q: 'Is the NFC chip waterproof?',
        a: 'The NFC chip itself is waterproof and durable. Leather models should not be submerged, but can handle rain and splashes. Silk cord and aluminum models are water-resistant.',
      },
      {
        q: 'What information can my NFC profile hold?',
        a: 'Your profile can include: a photo, short bio, links to Instagram, LinkedIn, or any custom URL, a digital travel journal, and a connection counter showing how many taps you’ve received.',
      },
    ],
  },
  {
    category: 'Craft & Materials',
    items: [
      {
        q: 'Are your bracelets really handmade?',
        a: 'Yes. Every bracelet is assembled by hand by a small team of craft workers. The leather is hand-stitched with waxed linen thread. No machine stitching. Small variations are part of the character of each piece.',
      },
      {
        q: 'Where are the bracelets made?',
        a: 'The SWY leather collection is assembled in Valencia, Spain, using Italian full-grain vegetable-tanned leather. The Mediterranean and Erasmus collections use materials sourced regionally.',
      },
      {
        q: 'How should I care for my bracelet?',
        a: 'Leather: apply a small amount of leather conditioner every few months. Avoid prolonged exposure to water. Silk cord: can be rinsed in cold water. Aluminum: wipe clean with a dry cloth.',
      },
    ],
  },
  {
    category: 'Orders & Shipping',
    items: [
      {
        q: 'How long until my order ships?',
        a: 'We ship within 1–2 business days of your order. You’ll receive a tracking link by email as soon as the parcel is collected.',
      },
      {
        q: 'Do you ship internationally?',
        a: 'Yes, we ship worldwide. Free shipping thresholds vary by zone — see our Shipping page for details.',
      },
      {
        q: 'Can I return my bracelet?',
        a: 'We accept returns within 30 days of delivery for unused items in original packaging. Email hello@welcomingplanet.com to begin the process.',
      },
    ],
  },
];

function FAQItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-sand-200">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between py-5 text-left gap-4"
      >
        <span className="text-sm font-light text-navy-500 leading-snug">{q}</span>
        {open ? (
          <ChevronUp className="w-4 h-4 text-navy-400 flex-shrink-0" strokeWidth={1.5} />
        ) : (
          <ChevronDown className="w-4 h-4 text-navy-400 flex-shrink-0" strokeWidth={1.5} />
        )}
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <p className="text-sm font-light text-navy-400 leading-relaxed pb-5">{a}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function FAQPage() {
  return (
    <div className="bg-sand-50 min-h-screen">
      <div className="max-w-3xl mx-auto px-6 lg:px-8 pt-32 pb-24">
        <p className="text-xs tracking-[0.2em] uppercase font-light text-terracotta-500 mb-5">FAQ</p>
        <h1 className="font-serif text-display-md text-navy-500 font-light mb-14">
          Common questions.
        </h1>

        <div className="space-y-12">
          {faqs.map((section) => (
            <div key={section.category}>
              <h2 className="text-xs tracking-[0.15em] uppercase font-light text-sand-500 mb-4">
                {section.category}
              </h2>
              {section.items.map((item) => (
                <FAQItem key={item.q} q={item.q} a={item.a} />
              ))}
            </div>
          ))}
        </div>

        <div className="mt-16 pt-10 border-t border-sand-200">
          <p className="text-sm font-light text-navy-400">
            Still have questions?{' '}
            <a href="mailto:hello@welcomingplanet.com" className="text-navy-500 underline underline-offset-2 hover:text-terracotta-500 transition-colors">
              hello@welcomingplanet.com
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
