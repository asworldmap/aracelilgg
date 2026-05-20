# Welcoming Planet

**Objects that connect people.**

A premium e-commerce brand and website for handcrafted NFC wearables inspired by international youth exchange, cultural diplomacy, and human connection.

---

## Tech Stack

- **Next.js 14** (App Router)
- **TypeScript** (strict mode)
- **Tailwind CSS** (custom design system)
- **Framer Motion** (animations)
- **Zustand** (cart state, persisted)
- **Stripe** (checkout, payment)
- **Resend** (newsletter + contact emails)

---

## Getting Started

```bash
npm install
cp .env.example .env.local
# Fill in your keys in .env.local
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

---

## Project Structure

```
src/
├── app/                    # Next.js App Router pages
│   ├── page.tsx             # Homepage
│   ├── collections/         # Collection index + [slug]
│   ├── products/[slug]/     # Dynamic product pages
│   ├── about/               # About page
│   ├── story/               # Brand story
│   ├── community/           # Community page
│   ├── contact/             # Contact form
│   ├── faq/                 # FAQ accordion
│   ├── shipping/            # Shipping & returns
│   ├── privacy/             # Privacy policy (GDPR)
│   ├── terms/               # Terms of service
│   ├── checkout/            # Stripe checkout flow
│   └── api/                 # API routes (newsletter, contact)
├── components/
│   ├── layout/              # Navigation, Footer
│   ├── home/                # All homepage sections
│   ├── product/             # Product gallery, info, reviews
│   └── ui/                  # Button, CartDrawer, CookieBanner
├── lib/
│   ├── types.ts             # TypeScript interfaces
│   ├── products.ts          # Product & collection data
│   ├── cart.ts              # Zustand cart store
└──   └── utils.ts             # cn(), formatPrice(), slugify()
```

---

## Collections

| Collection | Status | Products |
|---|---|---|
| SWY | Live | SWY Navigator, SWY Compass |
| Mediterranean Routes | Live | Mediterranean Harbor, Coastal |
| Erasmus Edition | Live | Erasmus Wanderer |
| Nomad Series | Coming Soon | — |
| Friendship Tokens | Coming Soon | — |

---

## Environment Variables

See `.env.example` for all required keys.

| Variable | Required | Purpose |
|---|---|---|
| `NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY` | Yes (checkout) | Stripe Elements |
| `STRIPE_SECRET_KEY` | Yes (checkout) | Stripe server-side |
| `STRIPE_WEBHOOK_SECRET` | Yes (webhooks) | Order confirmations |
| `RESEND_API_KEY` | Optional | Newsletter + contact |
| `NEXT_PUBLIC_SITE_URL` | Yes | SEO / OG metadata |

---

## Design System

### Colors

| Token | Hex | Usage |
|---|---|---|
| `sand-50` | `#FAF7F2` | Page backgrounds |
| `sand-300` | `#E8D5B7` | Secondary backgrounds |
| `navy-500` | `#0F1B2D` | Primary text, dark sections |
| `terracotta-500` | `#C4713D` | Accents, labels, CTAs |
| `sage-400` | `#8BA888` | Success states |

### Typography

- **Headings**: Cormorant Garamond (serif, light/italic)
- **Body**: Inter (sans, light/regular)

---

## Roadmap

- [ ] Stripe Checkout integration (Stripe Elements)
- [ ] NFC profile platform (post-purchase)
- [ ] Shopify migration (optional CMS)
- [ ] Nomad Series launch
- [ ] Friendship Tokens launch
- [ ] Marketplace platform (Year 2)
- [ ] Mobile app (Year 2)

---

*Objects that connect people.*
