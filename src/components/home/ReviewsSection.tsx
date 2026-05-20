'use client';

import { motion } from 'framer-motion';
import { Star } from 'lucide-react';
import { reviews } from '@/lib/products';

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex items-center gap-0.5">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          className={`w-3.5 h-3.5 ${
            i < rating ? 'text-terracotta-500 fill-terracotta-500' : 'text-sand-300'
          }`}
          strokeWidth={0}
        />
      ))}
    </div>
  );
}

export function ReviewsSection() {
  return (
    <section className="py-24 lg:py-32 bg-sand-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-14">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-xs tracking-[0.2em] uppercase font-light text-terracotta-500 mb-3"
          >
            Reviews
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9 }}
            className="font-serif text-display-md text-navy-500 font-light"
          >
            What wearers say.
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reviews.map((review, i) => (
            <motion.article
              key={review.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: i * 0.08 }}
              className="bg-sand-100 rounded-2xl p-7 flex flex-col"
            >
              <div className="flex items-start justify-between mb-5">
                <StarRating rating={review.rating} />
                {review.verified && (
                  <span className="text-[10px] tracking-wide font-light text-sage-500 uppercase">
                    Verified
                  </span>
                )}
              </div>
              <h3 className="font-serif text-lg font-light text-navy-500 mb-3">{review.title}</h3>
              <p className="text-sm font-light text-navy-400 leading-relaxed flex-1">{review.body}</p>
              <div className="mt-6 pt-5 border-t border-sand-200 flex items-center justify-between">
                <div>
                  <p className="text-sm font-light text-navy-500">{review.author}</p>
                  <p className="text-xs font-light text-sand-500">{review.location}</p>
                </div>
                <p className="text-xs text-sand-400 font-light">
                  {new Date(review.date).toLocaleDateString('en-US', { month: 'short', year: 'numeric' })}
                </p>
              </div>
            </motion.article>
          ))}
        </div>

        {/* Overall score */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="text-center mt-12"
        >
          <p className="text-sm font-light text-navy-400">
            <span className="font-serif text-2xl font-light text-navy-500 mr-2">4.9</span>
            average from 102 verified reviews
          </p>
        </motion.div>
      </div>
    </section>
  );
}
