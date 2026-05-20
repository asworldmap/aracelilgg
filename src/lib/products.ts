import type { Product, Collection, Review } from './types';

export const collections: Collection[] = [
  {
    slug: 'swy',
    name: 'SWY Collection',
    tagline: 'Ship for World Youth',
    description:
      'Honoring the transformative journeys of youth diplomacy voyagers. Each bracelet in this collection is a wearable passport — etched with coordinates, encoded with memory.',
    coverImage: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1600&q=85',
    coverImageAlt: 'Ocean horizon at golden hour',
    products: ['swy-navigator', 'swy-compass'],
    comingSoon: false,
  },
  {
    slug: 'mediterranean-routes',
    name: 'Mediterranean Routes',
    tagline: 'Ports, People, Memory',
    description:
      'Inspired by the ancient sea routes that connected civilizations. Warm terracotta tones, hammered brass, and the salt-worn texture of coastal life.',
    coverImage: 'https://images.unsplash.com/photo-1539037116277-4db20889f2d4?w=1600&q=85',
    coverImageAlt: 'Mediterranean harbor with colorful boats',
    products: ['med-harbor', 'med-coastal'],
    comingSoon: false,
  },
  {
    slug: 'erasmus-edition',
    name: 'Erasmus Edition',
    tagline: 'Europe Without Borders',
    description:
      'For the generation that grew up crossing borders as easily as crossing streets. Celebrating study abroad friendships that last a lifetime.',
    coverImage: 'https://images.unsplash.com/photo-1467269204594-9661b134dd2b?w=1600&q=85',
    coverImageAlt: 'European city cobblestone street at dawn',
    products: ['erasmus-wanderer'],
    comingSoon: false,
  },
  {
    slug: 'nomad-series',
    name: 'Nomad Series',
    tagline: 'Permanent Impermanence',
    description:
      'For those who have made a home of movement. Minimal, durable, timeless — engineered for the modern nomad who carries their world on their wrist.',
    coverImage: 'https://images.unsplash.com/photo-1488085061387-422e29b40080?w=1600&q=85',
    coverImageAlt: 'Airport terminal during blue hour',
    products: [],
    comingSoon: true,
  },
  {
    slug: 'friendship-tokens',
    name: 'Friendship Tokens',
    tagline: 'Given. Kept. Remembered.',
    description:
      'Designed to be gifted. Two bracelets, one bond — each encoded with a shared memory only the two wearers can unlock.',
    coverImage: 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=1600&q=85',
    coverImageAlt: 'Two hands clasped in friendship',
    products: [],
    comingSoon: true,
  },
];

export const products: Product[] = [
  {
    id: 'swy-navigator',
    slug: 'swy-navigator-bracelet',
    name: 'SWY Navigator',
    collection: 'SWY Collection',
    collectionSlug: 'swy',
    price: 89,
    compareAtPrice: 109,
    currency: 'EUR',
    shortDescription:
      'A handcrafted wearable artifact for those who have voyaged with Ship for World Youth. Tap to share your story with the world.',
    description:
      'The SWY Navigator is the flagship piece of our debut collection — born from the idea that some journeys deserve to be carried forever.\n\nEach bracelet is individually handcrafted from vegetable-tanned Italian leather and sterling silver hardware, with a precision-embedded NFC chip that transforms your wrist into a living digital identity.\n\nThe engraved coordinates mark the departure port of the Ship for World Youth voyage. The texture is intentionally worn — because the most meaningful objects have already lived a life before they reach you.',
    story:
      'Ship for World Youth was a Japanese government program that brought together young people from over 50 nations, sailing the Pacific together for 30 days. What happened on that ship — the friendships, the late-night conversations, the cultural exchanges — was unrepeatable.\n\nThe SWY Navigator bracelet exists to carry that memory forward. It is not a souvenir. It is a portal.',
    materials: [
      'Full-grain vegetable-tanned Italian leather',
      'Sterling silver (.925) hardware',
      'Precision NFC chip (ISO 14443-A)',
      'Hand-stitched with waxed linen thread',
      'Natural beeswax finish',
    ],
    dimensions: '19cm × 1.2cm (adjustable). Available in S/M/L.',
    nfcFeatures: [
      'Instant profile sharing (Instagram, LinkedIn, custom URL)',
      'Digital travel journal',
      'Photo gallery of your voyage',
      'Connection counter — how many people you've met',
      'Works with any NFC-enabled smartphone (no app required)',
    ],
    images: [
      {
        url: 'https://images.unsplash.com/photo-1611601679432-b42b1fef72b5?w=1200&q=90',
        alt: 'SWY Navigator bracelet on wrist at ocean',
        width: 1200,
        height: 1500,
      },
      {
        url: 'https://images.unsplash.com/photo-1573408301185-9519f6ff5d21?w=1200&q=90',
        alt: 'Close-up of leather texture and NFC detail',
        width: 1200,
        height: 1500,
      },
      {
        url: 'https://images.unsplash.com/photo-1602143407151-7111542de6e8?w=1200&q=90',
        alt: 'SWY Navigator bracelet flat lay with map',
        width: 1200,
        height: 1500,
      },
      {
        url: 'https://images.unsplash.com/photo-1509631179647-0177331693ae?w=1200&q=90',
        alt: 'SWY Navigator clasp detail',
        width: 1200,
        height: 1500,
      },
    ],
    variants: [
      { id: 'swy-nav-s', name: 'Small', size: 'S', color: 'Cognac', colorHex: '#8B5E3C', inStock: true },
      { id: 'swy-nav-m', name: 'Medium', size: 'M', color: 'Cognac', colorHex: '#8B5E3C', inStock: true },
      { id: 'swy-nav-l', name: 'Large', size: 'L', color: 'Cognac', colorHex: '#8B5E3C', inStock: true },
      { id: 'swy-nav-m-ink', name: 'Medium', size: 'M', color: 'Midnight', colorHex: '#1A1A2E', inStock: true },
    ],
    tags: ['NFC', 'leather', 'handcrafted', 'SWY', 'youth exchange', 'travel'],
    inStock: true,
    seoTitle: 'SWY Navigator NFC Bracelet — Welcoming Planet',
    seoDescription:
      'Handcrafted leather NFC bracelet for Ship for World Youth alumni. Tap to share your story. Made with Italian leather and sterling silver.',
    rating: 4.9,
    reviewCount: 34,
  },
  {
    id: 'swy-compass',
    slug: 'swy-compass-bracelet',
    name: 'SWY Compass',
    collection: 'SWY Collection',
    collectionSlug: 'swy',
    price: 79,
    currency: 'EUR',
    shortDescription:
      'Woven silk cord meets precision hardware. Lighter in form, infinite in meaning. The companion to the Navigator.',
    description:
      'The SWY Compass is the second piece in the SWY Collection — designed for those who want the story without the weight.\n\nA hand-braided silk cord bracelet with a burnished brass disc centerpiece, housing the same precision NFC chip as the Navigator. The disc is hand-stamped with a compass rose — the universal symbol of orientation, direction, and return.',
    story:
      'On the ship, you lose your sense of fixed direction. The ocean looks the same from every side. What grounds you is the people around you. The Compass is a reminder that home is not a place — it is a connection.',
    materials: [
      'Hand-braided silk cord (water-resistant)',
      'Burnished brass disc with compass rose stamp',
      'Precision NFC chip (ISO 14443-A)',
      'Adjustable sliding knot',
      'Vegan-friendly materials',
    ],
    dimensions: 'One size adjustable (16–24cm).',
    nfcFeatures: [
      'Instant profile sharing',
      'Digital travel journal',
      'Voice memory recording',
      'Works with any NFC-enabled smartphone',
    ],
    images: [
      {
        url: 'https://images.unsplash.com/photo-1561728130-afd430af0493?w=1200&q=90',
        alt: 'SWY Compass bracelet worn at golden hour',
        width: 1200,
        height: 1500,
      },
      {
        url: 'https://images.unsplash.com/photo-1600003014755-ba31aa59c4b6?w=1200&q=90',
        alt: 'Brass compass rose disc detail close-up',
        width: 1200,
        height: 1500,
      },
    ],
    variants: [
      { id: 'swy-comp-nat', name: 'Natural Sand', color: 'Sand', colorHex: '#E8D5B7', inStock: true },
      { id: 'swy-comp-mid', name: 'Midnight Blue', color: 'Midnight', colorHex: '#1A2744', inStock: true },
      { id: 'swy-comp-ter', name: 'Terracotta', color: 'Terracotta', colorHex: '#C4713D', inStock: false },
    ],
    tags: ['NFC', 'silk', 'handcrafted', 'SWY', 'compass', 'vegan'],
    inStock: true,
    seoTitle: 'SWY Compass NFC Bracelet — Welcoming Planet',
    seoDescription:
      'Hand-braided silk NFC bracelet with burnished brass compass disc. For Ship for World Youth alumni.',
    rating: 4.8,
    reviewCount: 21,
  },
  {
    id: 'med-harbor',
    slug: 'mediterranean-harbor-bracelet',
    name: 'Mediterranean Harbor',
    collection: 'Mediterranean Routes',
    collectionSlug: 'mediterranean-routes',
    price: 95,
    currency: 'EUR',
    shortDescription:
      'Hammered brass and sun-bleached cord. The smell of salt, the sound of port. The Mediterranean on your wrist.',
    description:
      'The Harbor bracelet is the anchor of the Mediterranean Routes collection.\n\nForged from recycled brass, each disc is individually hammered to create a surface that catches light the way a harbor catches a sunrise. No two are identical. The cord is hand-dyed with natural indigo, a dye used in the region for over 4,000 years.',
    story:
      'The Mediterranean was the first connected world — Phoenicians, Greeks, Romans, Arabs, Venetians all traded not just goods, but ideas, languages, and ways of being. The Harbor bracelet is an homage to that original open world.',
    materials: [
      'Recycled hammered brass centerpiece',
      'Natural indigo-dyed cotton cord',
      'Precision NFC chip',
      'Hand-assembled in Valencia, Spain',
    ],
    dimensions: 'One size adjustable (15–25cm).',
    nfcFeatures: [
      'Instant contact sharing',
      'Custom welcome page with your photo and bio',
      'Links to social profiles',
      'Works without an app',
    ],
    images: [
      {
        url: 'https://images.unsplash.com/photo-1549887534-1541e9326578?w=1200&q=90',
        alt: 'Mediterranean Harbor bracelet on hand at port',
        width: 1200,
        height: 1500,
      },
      {
        url: 'https://images.unsplash.com/photo-1611601679432-b42b1fef72b5?w=1200&q=90',
        alt: 'Hammered brass disc detail',
        width: 1200,
        height: 1500,
      },
    ],
    variants: [
      { id: 'med-har-ind', name: 'Indigo', color: 'Indigo', colorHex: '#2D3A7C', inStock: true },
      { id: 'med-har-nat', name: 'Natural', color: 'Natural', colorHex: '#E8D5B7', inStock: true },
    ],
    tags: ['NFC', 'brass', 'mediterranean', 'handcrafted', 'travel'],
    inStock: true,
    seoTitle: 'Mediterranean Harbor NFC Bracelet — Welcoming Planet',
    seoDescription:
      'Handcrafted NFC bracelet with recycled hammered brass and natural indigo cord. Mediterranean Routes collection.',
    rating: 4.9,
    reviewCount: 18,
  },
  {
    id: 'erasmus-wanderer',
    slug: 'erasmus-wanderer-bracelet',
    name: 'Erasmus Wanderer',
    collection: 'Erasmus Edition',
    collectionSlug: 'erasmus-edition',
    price: 69,
    currency: 'EUR',
    shortDescription:
      'For the ones who found a second home in a foreign city. Light, layerable, unmistakably yours.',
    description:
      'The Erasmus Wanderer was designed for the millions who have transformed themselves through study abroad — who arrived strangers and left family.\n\nA slim recycled aluminum bracelet with a matte anodized finish, laser-engraved with the latitude of your exchange city. The NFC chip holds your international story — share it with a tap.',
    story:
      'Erasmus changed Europe more than any policy. It created a generation that had friends in every city, who cooked dishes from three countries, who held grief and joy in multiple languages. The Wanderer is for that generation.',
    materials: [
      'Recycled aerospace-grade aluminum',
      'Matte anodized finish (UV and water resistant)',
      'Precision NFC chip',
      'Laser-engraved latitude coordinates',
    ],
    dimensions: 'S: 15.5cm, M: 17cm, L: 18.5cm. Rigid band.',
    nfcFeatures: [
      'Customizable digital profile',
      'Photo album of your exchange experience',
      'Language tag (shows which languages you speak)',
      'Social links',
    ],
    images: [
      {
        url: 'https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?w=1200&q=90',
        alt: 'Erasmus Wanderer bracelet in urban setting',
        width: 1200,
        height: 1500,
      },
    ],
    variants: [
      { id: 'era-wan-s-sil', name: 'Small / Silver', size: 'S', color: 'Silver', colorHex: '#C4C4C4', inStock: true },
      { id: 'era-wan-m-sil', name: 'Medium / Silver', size: 'M', color: 'Silver', colorHex: '#C4C4C4', inStock: true },
      { id: 'era-wan-l-sil', name: 'Large / Silver', size: 'L', color: 'Silver', colorHex: '#C4C4C4', inStock: true },
      { id: 'era-wan-m-blk', name: 'Medium / Matte Black', size: 'M', color: 'Black', colorHex: '#2A2A2A', inStock: true },
    ],
    tags: ['NFC', 'aluminum', 'Erasmus', 'minimal', 'study abroad'],
    inStock: true,
    seoTitle: 'Erasmus Wanderer NFC Bracelet — Welcoming Planet',
    seoDescription:
      'Slim recycled aluminum NFC bracelet for Erasmus and exchange students. Laser-engraved with your exchange city coordinates.',
    rating: 4.7,
    reviewCount: 29,
  },
];

export const reviews: Review[] = [
  {
    id: 'r1',
    author: 'Camille D.',
    location: 'Lyon, France',
    rating: 5,
    date: '2024-10-14',
    title: 'Wears like a memory',
    body: "I've been to 14 countries with SWY and this bracelet captures something none of my photos could. When people tap it at conferences, they get a piece of my whole story. I ordered two — one for me, one for my cabin mate.",
    verified: true,
  },
  {
    id: 'r2',
    author: 'Kenji M.',
    location: 'Tokyo, Japan',
    rating: 5,
    date: '2024-09-28',
    title: 'The craft is remarkable',
    body: 'I work in product design and the attention to detail here is genuinely impressive. The leather aging is intentional — the bracelet looks better with every week of wear. The NFC profile works flawlessly.',
    verified: true,
  },
  {
    id: 'r3',
    author: 'Sofia A.',
    location: 'Barcelona, Spain',
    rating: 5,
    date: '2024-11-02',
    title: 'My Erasmus is still with me',
    body: 'Three years after my exchange in Prague, this bracelet brings it all back. I wear the Wanderer every day. Several people have tapped it and told me my exchange story made them want to travel. That feels like the whole point.',
    verified: true,
  },
  {
    id: 'r4',
    author: 'Ibrahim K.',
    location: 'Lagos, Nigeria',
    rating: 5,
    date: '2024-12-10',
    title: 'Premium doesn't cover it',
    body: 'I gifted a pair of Compass bracelets to my SWY delegate partner. We are on different continents now. We tap them on calls and it feels like the ship is still moving.',
    verified: true,
  },
  {
    id: 'r5',
    author: 'Ana L.',
    location: 'Lisbon, Portugal',
    rating: 5,
    date: '2025-01-15',
    title: 'A brand with a real soul',
    body: 'Rare to find a brand that actually believes what it sells. The packaging, the copy, the product — everything feels coherent and intentional. Will be buying every collection.',
    verified: true,
  },
];

export function getProductBySlug(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug);
}

export function getProductsByCollection(collectionSlug: string): Product[] {
  return products.filter((p) => p.collectionSlug === collectionSlug);
}

export function getRelatedProducts(product: Product, limit = 3): Product[] {
  return products
    .filter((p) => p.id !== product.id && (p.collectionSlug === product.collectionSlug || p.tags.some((t) => product.tags.includes(t))))
    .slice(0, limit);
}

export function getCollectionBySlug(slug: string): Collection | undefined {
  return collections.find((c) => c.slug === slug);
}
