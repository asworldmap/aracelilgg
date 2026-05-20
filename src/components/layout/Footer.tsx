import Link from 'next/link';
import { Globe, Instagram } from 'lucide-react';

const footerLinks = {
  'Shop': [
    { href: '/collections', label: 'All Collections' },
    { href: '/collections/swy', label: 'SWY Collection' },
    { href: '/collections/mediterranean-routes', label: 'Mediterranean Routes' },
    { href: '/collections/erasmus-edition', label: 'Erasmus Edition' },
  ],
  'Company': [
    { href: '/about', label: 'About' },
    { href: '/story', label: 'Our Story' },
    { href: '/community', label: 'Community' },
    { href: '/contact', label: 'Contact' },
  ],
  'Help': [
    { href: '/faq', label: 'FAQ' },
    { href: '/shipping', label: 'Shipping & Returns' },
    { href: '/terms', label: 'Terms of Service' },
    { href: '/privacy', label: 'Privacy Policy' },
  ],
};

export function Footer() {
  return (
    <footer className="bg-navy-500 text-sand-300">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Top section */}
        <div className="py-16 lg:py-20 grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-8">
          {/* Brand column */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-2 group mb-6">
              <Globe
                className="w-5 h-5 text-sand-300 transition-all duration-300 group-hover:rotate-12"
                strokeWidth={1.5}
              />
              <span className="font-serif text-lg font-light tracking-wide text-sand-50">
                Welcoming Planet
              </span>
            </Link>
            <p className="text-sm font-light leading-relaxed text-sand-400 max-w-xs">
              Handcrafted NFC wearables for the interconnected generation. Objects that carry meaning across borders.
            </p>

            {/* Social */}
            <div className="flex items-center gap-4 mt-8">
              <a
                href="https://instagram.com/welcomingplanet"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sand-400 hover:text-sand-50 transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" strokeWidth={1.5} />
              </a>
              <a
                href="https://tiktok.com/@welcomingplanet"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sand-400 hover:text-sand-50 transition-colors text-sm font-light"
                aria-label="TikTok"
              >
                TikTok
              </a>
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h3 className="text-xs font-medium tracking-[0.12em] uppercase text-sand-500 mb-5">
                {category}
              </h3>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm font-light text-sand-400 hover:text-sand-50 transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="border-t border-navy-400 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-sand-500 font-light">
            &copy; {new Date().getFullYear()} Welcoming Planet. All rights reserved.
          </p>
          <p className="text-xs text-sand-500 font-light italic font-serif">
            Objects that connect people.
          </p>
        </div>
      </div>
    </footer>
  );
}
