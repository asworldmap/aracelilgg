import type { Metadata } from 'next';
import { HeroSection } from '@/components/home/HeroSection';
import { FeaturedProduct } from '@/components/home/FeaturedProduct';
import { StorySection } from '@/components/home/StorySection';
import { HowNFCWorks } from '@/components/home/HowNFCWorks';
import { CollectionGrid } from '@/components/home/CollectionGrid';
import { CommunitySection } from '@/components/home/CommunitySection';
import { ReviewsSection } from '@/components/home/ReviewsSection';
import { EmailCapture } from '@/components/home/EmailCapture';

export const metadata: Metadata = {
  title: 'Welcoming Planet — Objects That Connect People',
  description:
    'Handcrafted NFC wearables inspired by international youth exchange and cultural diplomacy. Wear your journey.',
  openGraph: {
    title: 'Welcoming Planet — Objects That Connect People',
    description: 'Handcrafted NFC wearables for the interconnected generation.',
    images: [{ url: '/og-image.jpg', width: 1200, height: 630 }],
  },
};

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <FeaturedProduct />
      <StorySection />
      <HowNFCWorks />
      <CollectionGrid />
      <CommunitySection />
      <ReviewsSection />
      <EmailCapture />
    </>
  );
}
