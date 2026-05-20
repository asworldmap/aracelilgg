'use client';

import { motion } from 'framer-motion';
import { Smartphone, Globe, UserCheck } from 'lucide-react';

const steps = [
  {
    icon: Smartphone,
    step: 'Tap',
    description:
      'Hold any NFC-enabled phone near the bracelet. No app needed — the interaction begins the moment metal meets signal.',
  },
  {
    icon: Globe,
    step: 'Open',
    description:
      'Your personal Welcoming Planet profile loads in the browser. A beautiful digital space carrying your story, connections, and memories.',
  },
  {
    icon: UserCheck,
    step: 'Connect',
    description:
      'Share links, social profiles, travel journals, voice notes. Every tap is an introduction. Every introduction is a beginning.',
  },
];

export function HowNFCWorks() {
  return (
    <section className="py-24 lg:py-32 bg-sand-100">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16 lg:mb-20">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-xs tracking-[0.2em] uppercase font-light text-terracotta-500 mb-4"
          >
            How It Works
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, ease: [0.19, 1, 0.22, 1] }}
            className="font-serif text-display-md text-navy-500 font-light"
          >
            Three seconds.
            <br />
            <em className="italic">A new connection.</em>
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {steps.map((step, i) => (
            <motion.div
              key={step.step}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: i * 0.12 }}
              className="text-center"
            >
              {/* Icon circle */}
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full border border-sand-300 mb-6 bg-sand-50">
                <step.icon className="w-6 h-6 text-navy-400" strokeWidth={1.5} />
              </div>

              {/* Step number */}
              <p className="text-xs tracking-[0.15em] uppercase font-light text-sand-500 mb-2">
                Step 0{i + 1}
              </p>

              {/* Step name */}
              <h3 className="font-serif text-2xl font-light text-navy-500 mb-3">{step.step}</h3>

              {/* Description */}
              <p className="text-sm font-light text-navy-400 leading-relaxed max-w-xs mx-auto">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Compatibility note */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="text-center text-xs font-light text-sand-500 mt-12"
        >
          Compatible with all modern iPhones (XS and later) and Android devices with NFC.
          No download required.
        </motion.p>
      </div>
    </section>
  );
}
