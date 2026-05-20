import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy — Welcoming Planet',
  description: 'Welcoming Planet Privacy Policy. How we collect, use, and protect your data.',
};

export default function PrivacyPage() {
  return (
    <div className="bg-sand-50 min-h-screen">
      <div className="max-w-3xl mx-auto px-6 lg:px-8 pt-32 pb-24">
        <p className="text-xs tracking-[0.2em] uppercase font-light text-terracotta-500 mb-5">Legal</p>
        <h1 className="font-serif text-display-md text-navy-500 font-light mb-8">Privacy Policy</h1>
        <p className="text-sm font-light text-sand-500 mb-12">Last updated: January 2025</p>

        <div className="space-y-10 text-sm font-light text-navy-400 leading-relaxed">
          <section>
            <h2 className="font-serif text-xl font-light text-navy-500 mb-4">1. Who we are</h2>
            <p>Welcoming Planet is a brand owned and operated by Welcoming Planet S.L., registered in Valencia, Spain. Our website address is welcomingplanet.com. We can be reached at hello@welcomingplanet.com.</p>
          </section>

          <section>
            <h2 className="font-serif text-xl font-light text-navy-500 mb-4">2. What data we collect</h2>
            <p className="mb-3">We collect information you provide directly to us, including:</p>
            <ul className="space-y-2 list-disc list-inside">
              <li>Name and email address (when you subscribe to our newsletter or create an account)</li>
              <li>Shipping address and payment information (when you place an order)</li>
              <li>NFC profile data you choose to create and share</li>
              <li>Communications you send us</li>
            </ul>
            <p className="mt-3">We also collect data automatically: cookies, IP address, browser type, pages visited, and device information.</p>
          </section>

          <section>
            <h2 className="font-serif text-xl font-light text-navy-500 mb-4">3. How we use your data</h2>
            <ul className="space-y-2 list-disc list-inside">
              <li>To process and fulfill your orders</li>
              <li>To send order confirmations and shipping updates</li>
              <li>To send our newsletter (only with your explicit consent)</li>
              <li>To improve our website and products</li>
              <li>To comply with legal obligations</li>
            </ul>
          </section>

          <section>
            <h2 className="font-serif text-xl font-light text-navy-500 mb-4">4. Data sharing</h2>
            <p>We do not sell your personal data. We share data only with trusted service providers who help us operate (payment processors, shipping carriers, email providers), and only as necessary to provide our services.</p>
          </section>

          <section>
            <h2 className="font-serif text-xl font-light text-navy-500 mb-4">5. Your rights (GDPR)</h2>
            <p className="mb-3">If you are in the European Economic Area, you have the right to:</p>
            <ul className="space-y-2 list-disc list-inside">
              <li>Access your personal data</li>
              <li>Correct inaccurate data</li>
              <li>Request deletion of your data</li>
              <li>Object to processing</li>
              <li>Data portability</li>
              <li>Withdraw consent at any time</li>
            </ul>
            <p className="mt-3">To exercise these rights, email: hello@welcomingplanet.com</p>
          </section>

          <section>
            <h2 className="font-serif text-xl font-light text-navy-500 mb-4">6. Cookies</h2>
            <p>We use essential cookies for cart functionality and optional analytics cookies. You can control cookie preferences through the banner on our site.</p>
          </section>

          <section>
            <h2 className="font-serif text-xl font-light text-navy-500 mb-4">7. Contact</h2>
            <p>For privacy questions: hello@welcomingplanet.com</p>
          </section>
        </div>
      </div>
    </div>
  );
}
