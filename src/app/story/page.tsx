import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Our Story — Welcoming Planet',
  description:
    'The story behind Welcoming Planet. Objects for people who have been changed by crossing borders.',
};

export default function StoryPage() {
  return (
    <div className="bg-sand-50 min-h-screen">
      {/* Full-bleed hero */}
      <div className="relative h-[70vh] min-h-[500px] overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=2400&q=90"
          alt="Ocean horizon at dawn"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-navy-500/30 to-navy-500/80" />
        <div className="relative z-10 flex flex-col justify-end h-full max-w-4xl mx-auto px-6 lg:px-8 pb-16">
          <p className="text-xs tracking-[0.2em] uppercase font-light text-terracotta-400 mb-4">
            Our Story
          </p>
          <h1 className="font-serif text-display-lg text-sand-50 font-light">
            A world that needed
            <br />
            <em>a different kind of souvenir.</em>
          </h1>
        </div>
      </div>

      {/* Narrative */}
      <div className="max-w-3xl mx-auto px-6 lg:px-8 py-20 lg:py-28">
        <div className="prose-premium text-navy-400 space-y-8">
          <p className="text-xl font-serif font-light text-navy-500 leading-relaxed">
            There is a specific kind of grief that comes at the end of a great journey. The ship docks.
            The program ends. The exchange is over. And you return to your ordinary life carrying
            something you cannot quite name.
          </p>
          <p>
            Welcoming Planet was born from that feeling. From the conviction that the objects around
            us should carry the weight of the moments that changed us. That a bracelet can be more
            than an accessory — it can be a portal, a record, a piece of proof.
          </p>
          <p>
            Our first products were designed for alumni of the Ship for World Youth program — a
            Japanese government initiative that brought young delegates from 50+ nations together
            on a ship sailing the Pacific. For those who lived it, the 30-day voyage was transformative.
            For those who had never heard of it, it was inexplicable. A bracelet could bridge that gap.
          </p>

          {/* Pull quote */}
          <blockquote className="border-l-2 border-terracotta-500 pl-8 py-2 my-10">
            <p className="font-serif text-2xl font-light text-navy-500 italic leading-relaxed">
              &ldquo;The most powerful objects are the ones that hold a story
              even when the words run out.&rdquo;
            </p>
          </blockquote>

          <p>
            From that beginning, the vision expanded. Erasmus students who found their people in
            foreign cities. Youth diplomats who forged alliances over shared meals. Modern nomads
            who have made a home of movement. The Mediterranean sailors, the hostel philosophers,
            the airport wanderers.
          </p>
          <p>
            Every collection begins with a community and a question: <em>what object would carry
            this experience forward?</em>
          </p>
          <p>
            The NFC chip is not the product. The product is the story it activates. The technology
            is invisible — a single tap and your whole journey is available to the person in front
            of you. No app. No friction. Just connection.
          </p>
          <p>
            This is only the beginning. Welcoming Planet will grow into a global marketplace for
            meaningful wearable objects — a platform for makers, communities, and travelers to find
            the objects that carry their worlds.
          </p>
          <p>
            For now: a few objects, made carefully, for the right people.
          </p>
        </div>

        {/* Navigation */}
        <div className="flex flex-col sm:flex-row gap-4 mt-14 pt-10 border-t border-sand-200">
          <Link
            href="/collections"
            className="inline-flex items-center justify-center bg-navy-500 text-sand-50 text-sm font-light tracking-wide px-8 py-4 hover:bg-navy-400 transition-colors"
          >
            Shop the Collection
          </Link>
          <Link
            href="/community"
            className="inline-flex items-center justify-center border border-navy-500 text-navy-500 text-sm font-light tracking-wide px-8 py-4 hover:bg-navy-500 hover:text-sand-50 transition-colors"
          >
            Meet the Community
          </Link>
        </div>
      </div>
    </div>
  );
}
