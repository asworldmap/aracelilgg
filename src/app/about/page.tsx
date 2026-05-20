import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'About — Welcoming Planet',
  description:
    'Welcoming Planet creates handcrafted NFC wearables for those who have been changed by crossing borders.',
};

const values = [
  {
    title: 'Objects over ornaments',
    body: 'We do not make jewelry. We make artifacts. Every piece must carry meaning, not just beauty.',
  },
  {
    title: 'Craft over production',
    body: 'We produce in small runs with makers who have spent years perfecting their technique. Quality is the only acceptable speed.',
  },
  {
    title: 'Technology that serves',
    body: 'NFC is invisible in our products. It is a tool, not a feature. Technology should amplify human connection, not distract from it.',
  },
  {
    title: 'Community before marketing',
    body: 'Welcoming Planet grew from a community. Every decision is made with that community in mind — not the algorithm.',
  },
];

export default function AboutPage() {
  return (
    <div className="bg-sand-50 min-h-screen">
      {/* Hero */}
      <div className="bg-navy-500 pt-32 pb-20 px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <p className="text-xs tracking-[0.2em] uppercase font-light text-terracotta-400 mb-5">About</p>
          <h1 className="font-serif text-display-lg text-sand-50 font-light leading-tight mb-8">
            We make objects
            <br />
            <em>for people who have traveled far enough to know what matters.</em>
          </h1>
          <p className="text-sand-400 font-light text-lg leading-relaxed max-w-2xl">
            Welcoming Planet was founded on a simple belief: the most powerful technology is one that
            helps people connect, not one that replaces connection.
          </p>
        </div>
      </div>

      {/* Origin story */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-20 lg:py-28">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="font-serif text-display-md text-navy-500 font-light mb-8">
              Where it began.
            </h2>
            <div className="space-y-5 text-base font-light text-navy-400 leading-relaxed">
              <p>
                The idea came at the end of a Ship for World Youth voyage in 2019. Thirty countries,
                thirty days, one ship. When the voyage ended and the delegates returned to their lives,
                something felt incomplete.
              </p>
              <p>
                All those connections — the late-night conversations about culture and identity,
                the shared meals, the lifelong friendships — dissolved into WhatsApp groups and
                fading photographs. There was no object that carried the weight of what had happened.
              </p>
              <p>
                Welcoming Planet was born from that gap. We make objects that don’t let you forget.
              </p>
            </div>
          </div>
          <div className="relative aspect-[4/3] rounded-2xl overflow-hidden">
            <Image
              src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1200&q=85"
              alt="Ocean horizon from ship deck"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
        </div>
      </div>

      {/* Values */}
      <div className="bg-sand-100 py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <h2 className="font-serif text-display-md text-navy-500 font-light mb-14">
            What we believe.
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            {values.map((v) => (
              <div key={v.title} className="border-t border-sand-300 pt-8">
                <h3 className="font-serif text-xl font-light text-navy-500 mb-3">{v.title}</h3>
                <p className="text-sm font-light text-navy-400 leading-relaxed">{v.body}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-20 text-center">
        <h2 className="font-serif text-display-md text-navy-500 font-light mb-6">
          Ready to wear your journey?
        </h2>
        <Link
          href="/collections"
          className="inline-flex items-center justify-center bg-navy-500 text-sand-50 text-sm font-light tracking-wide px-10 py-4 hover:bg-navy-400 transition-colors"
        >
          Explore Collections
        </Link>
      </div>
    </div>
  );
}
