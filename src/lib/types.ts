export interface Product {
  id: string;
  slug: string;
  name: string;
  collection: string;
  collectionSlug: string;
  price: number;
  compareAtPrice?: number;
  currency: string;
  description: string;
  shortDescription: string;
  story: string;
  materials: string[];
  dimensions: string;
  nfcFeatures: string[];
  images: ProductImage[];
  variants: ProductVariant[];
  tags: string[];
  inStock: boolean;
  stripeProductId?: string;
  stripePriceId?: string;
  seoTitle: string;
  seoDescription: string;
  rating: number;
  reviewCount: number;
}

export interface ProductImage {
  url: string;
  alt: string;
  width: number;
  height: number;
  blurDataUrl?: string;
}

export interface ProductVariant {
  id: string;
  name: string;
  color?: string;
  colorHex?: string;
  size?: string;
  inStock: boolean;
  stripePriceId?: string;
}

export interface Collection {
  slug: string;
  name: string;
  tagline: string;
  description: string;
  coverImage: string;
  coverImageAlt: string;
  products: string[];
  comingSoon?: boolean;
}

export interface CartItem {
  product: Product;
  variant: ProductVariant;
  quantity: number;
}

export interface CartState {
  items: CartItem[];
  isOpen: boolean;
  addItem: (product: Product, variant: ProductVariant, quantity?: number) => void;
  removeItem: (productId: string, variantId: string) => void;
  updateQuantity: (productId: string, variantId: string, quantity: number) => void;
  clearCart: () => void;
  openCart: () => void;
  closeCart: () => void;
  total: () => number;
  itemCount: () => number;
}

export interface Review {
  id: string;
  author: string;
  location: string;
  rating: number;
  date: string;
  title: string;
  body: string;
  verified: boolean;
}

export interface NewsletterForm {
  email: string;
  firstName?: string;
}
