import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { products, getProductBySlug, getRelatedProducts, reviews } from '@/lib/products';
import { ProductGallery } from '@/components/product/ProductGallery';
import { ProductInfo } from '@/components/product/ProductInfo';
import { RelatedProducts } from '@/components/product/RelatedProducts';
import { ProductReviews } from '@/components/product/ProductReviews';

export async function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const product = getProductBySlug(params.slug);
  if (!product) return {};
  return {
    title: product.seoTitle,
    description: product.seoDescription,
    openGraph: {
      title: product.seoTitle,
      description: product.seoDescription,
      images: [{ url: product.images[0].url, width: 1200, height: 1500, alt: product.images[0].alt }],
    },
  };
}

export default function ProductPage({ params }: { params: { slug: string } }) {
  const product = getProductBySlug(params.slug);
  if (!product) notFound();

  const related = getRelatedProducts(product);
  const productReviews = reviews.slice(0, 4);

  return (
    <div className="bg-sand-50">
      {/* Breadcrumb */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 pt-28 pb-6">
        <nav className="flex items-center gap-2 text-xs font-light text-sand-500">
          <Link href="/" className="hover:text-navy-500 transition-colors">Home</Link>
          <span>/</span>
          <Link href="/collections" className="hover:text-navy-500 transition-colors">Collections</Link>
          <span>/</span>
          <Link href={`/collections/${product.collectionSlug}`} className="hover:text-navy-500 transition-colors">
            {product.collection}
          </Link>
          <span>/</span>
          <span className="text-navy-500">{product.name}</span>
        </nav>
      </div>

      {/* Product layout */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
          <ProductGallery images={product.images} />
          <ProductInfo product={product} />
        </div>
      </div>

      {/* Full description */}
      <div className="bg-sand-100 py-16 lg:py-24">
        <div className="max-w-3xl mx-auto px-6 lg:px-8">
          <h2 className="font-serif text-display-sm text-navy-500 font-light mb-8">
            About the {product.name}
          </h2>
          <div className="space-y-5">
            {product.description.split('\n\n').map((para, i) => (
              <p key={i} className="text-base font-light text-navy-400 leading-relaxed">{para}</p>
            ))}
          </div>
        </div>
      </div>

      {/* Reviews */}
      <ProductReviews reviews={productReviews} product={product} />

      {/* Related products */}
      {related.length > 0 && <RelatedProducts products={related} />}
    </div>
  );
}
