'use client';

import { Star } from 'lucide-react';
import type { Review } from '@/lib/types';
import type { Product } from '@/lib/types';

export function ProductReviews({ reviews, product }: { reviews: Review[]; product: Product }) {
  return (
    <section className="py-20 bg-sand-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
          <div>
            <h2 className="font-serif text-display-sm text-navy-500 font-light">
              Reviews
            </h2>
            <div className="flex items-center gap-2 mt-2">
              <div className="flex">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    className={`w-4 h-4 ${
                      i < Math.floor(product.rating)
                        ? 'text-terracotta-500 fill-terracotta-500'
                        : 'text-sand-300'
                    }`}
                    strokeWidth={0}
                  />
                ))}
              </div>
              <span className="text-sm font-light text-navy-400">
                {product.rating} · {product.reviewCount} reviews
              </span>
            </div>
          </div>
        </div>

        {/* Review list */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {reviews.map((review) => (
            <article
              key={review.id}
              className="border border-sand-200 rounded-xl p-6"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="flex">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star
                      key={i}
                      className={`w-3.5 h-3.5 ${
                        i < review.rating
                          ? 'text-terracotta-500 fill-terracotta-500'
                          : 'text-sand-300'
                      }`}
                      strokeWidth={0}
                    />
                  ))}
                </div>
                {review.verified && (
                  <span className="text-[10px] tracking-wide font-light text-sage-500 uppercase">
                    Verified Purchase
                  </span>
                )}
              </div>
              <h3 className="font-serif text-base font-light text-navy-500 mb-2">{review.title}</h3>
              <p className="text-sm font-light text-navy-400 leading-relaxed mb-5">{review.body}</p>
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-light text-navy-500">{review.author}</p>
                  <p className="text-xs font-light text-sand-500">{review.location}</p>
                </div>
                <p className="text-xs text-sand-400 font-light">
                  {new Date(review.date).toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
