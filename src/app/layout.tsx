import type { Metadata, Viewport } from 'next';
import { Inter, Cormorant_Garamond } from 'next/font/google';
import './globals.css';
import { Navigation } from '@/components/layout/Navigation';
import { Footer } from '@/components/layout/Footer';
import { CartDrawer } from '@/components/ui/CartDrawer';
import { CookieBanner } from '@/components/ui/CookieBanner';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
  weight: ['300', '400', '500', '600'],
});

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  variable: '--font-cormorant',
  display: 'swap',
  weight: ['300', '400', '500', '600'],
  style: ['normal', 'italic'],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://welcomingplanet.com'),
  title: {
    default: 'Welcoming Planet — Objects That Connect People',
    template: '%s — Welcoming Planet',
  },
  description:
    'Handcrafted NFC wearables inspired by international youth exchange, cultural diplomacy, and human connection. Wear your journey.',
  keywords: [
    'NFC bracelet',
    'handcrafted wearables',
    'youth exchange',
    'travel bracelet',
    'SWY bracelet',
    'Erasmus bracelet',
    'cultural exchange',
    'digital identity bracelet',
  ],
  openGraph: {
    type: 'website',
    locale: 'en_EU',
    url: 'https://welcomingplanet.com',
    siteName: 'Welcoming Planet',
    title: 'Welcoming Planet — Objects That Connect People',
    description:
      'Handcrafted NFC wearables inspired by international youth exchange and cultural diplomacy.',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Welcoming Planet — NFC Bracelets',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Welcoming Planet — Objects That Connect People',
    description: 'Handcrafted NFC wearables for the interconnected generation.',
    images: ['/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
    },
  },
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon-16x16.png',
    apple: '/apple-touch-icon.png',
  },
};

export const viewport: Viewport = {
  themeColor: '#FAF7F2',
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${cormorant.variable}`}>
      <body className="bg-sand-50 text-navy-500 font-sans antialiased">
        <Navigation />
        <CartDrawer />
        <main>{children}</main>
        <Footer />
        <CookieBanner />
      </body>
    </html>
  );
}
