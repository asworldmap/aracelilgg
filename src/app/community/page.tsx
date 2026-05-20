import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Community — Welcoming Planet',
  description:
    'The Welcoming Planet community — worn across every timezone. Meet the people who carry their journeys.',
};

const communityStories = [
  {
    name: 'Asha M.',
    location: 'Nairobi, Kenya',
    program: 'SWY 43',
    quote:
      'At my first conference after the voyage, three strangers tapped my bracelet before I even said hello. We talked for two hours about the Pacific. That’s the bracelet working.',
    imageUrl: 'https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=600&q=85',
  },
  {
    name: 'Marc D.',
    location: 'Brussels, Belgium',
    program: 'Erasmus+ 2021',
    quote:
      'I wore the Wanderer every day of my exchange year in Seville. Two years later I still wear it. It’s not just a bracelet — it’s a reminder that I was brave once.',
    imageUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&q=85',
  },
  {
    name: 'Yuki T.',
    location: 'Osaka, Japan',
    program: 'SWY 44',
    quote:
      'My cabin mate and I got matching Compass bracelets. We are on opposite sides of the planet now. We send each other photos every time someone taps ours.',
    imageUrl: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=600&q=85',
  },
];

export default function CommunityPage() {
  return (
    <div className="bg-sand-50 min-h-screen">
      {/* Hero */}
      <div className="bg-navy-500 pt-32 pb-20 px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <p className="text-xs tracking-[0.2em] uppercase font-light text-terracotta-400 mb-5">
            Community
          </p>
          <h1 className="font-serif text-display-lg text-sand-50 font-light leading-tight">
            Worn across
            <br />
            <em>every timezone.</em>
          </h1>
          <p className="text-sand-400 font-light text-lg leading-relaxed max-w-xl mt-6">
            The Welcoming Planet community spans 50+ countries, 34 SWY voyages, and every Erasmus
            corridor in Europe. These are their stories.
          </p>
        </div>
      </div>

      {/* Stats bar */}
      <div className="border-b border-sand-200">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-sand-200">
            {[
              { value: '1,200+', label: 'Bracelets in the world' },
              { value: '50+', label: 'Countries' },
              { value: '34', label: 'SWY Voyages' },
              { value: '4.9★', label: 'Avg. review' },
            ].map((s) => (
              <div key={s.label} className="py-8 px-6 text-center">
                <p className="font-serif text-3xl font-light text-navy-500 mb-1">{s.value}</p>
                <p className="text-xs font-light text-sand-500">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Stories */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-20 lg:py-28">
        <h2 className="font-serif text-display-md text-navy-500 font-light mb-14">
          From the community.
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {communityStories.map((story) => (
            <article key={story.name} className="bg-sand-100 rounded-2xl overflow-hidden">
              <div className="relative aspect-square">
                <Image
                  src={story.imageUrl}
                  alt={story.name}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 33vw"
                />
              </div>
              <div className="p-7">
                <p className="font-serif text-base italic font-light text-navy-400 leading-relaxed mb-5">
                  &ldquo;{story.quote}&rdquo;
                </p>
                <div className="border-t border-sand-200 pt-5">
                  <p className="text-sm font-light text-navy-500">{story.name}</p>
                  <p className="text-xs font-light text-sand-500">
                    {story.location} · {story.program}
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>

      {/* Instagram CTA */}
      <div className="bg-navy-500 py-16 px-6 lg:px-8 text-center">
        <h2 className="font-serif text-display-sm text-sand-50 font-light mb-4">
          Share your story.
        </h2>
        <p className="text-sand-400 font-light mb-8 max-w-md mx-auto">
          Tag @welcomingplanet on Instagram with #WearYourJourney and your story might be featured here.
        </p>
        <a
          href="https://instagram.com/welcomingplanet"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center bg-sand-50 text-navy-500 text-sm font-light tracking-wide px-8 py-4 hover:bg-sand-100 transition-colors"
        >
          Follow on Instagram
        </a>
      </div>
    </div>
  );
}
