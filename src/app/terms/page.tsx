import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Terms of Service — Welcoming Planet',
  description: 'Welcoming Planet Terms of Service.',
};

export default function TermsPage() {
  return (
    <div className="bg-sand-50 min-h-screen">
      <div className="max-w-3xl mx-auto px-6 lg:px-8 pt-32 pb-24">
        <p className="text-xs tracking-[0.2em] uppercase font-light text-terracotta-500 mb-5">Legal</p>
        <h1 className="font-serif text-display-md text-navy-500 font-light mb-8">Terms of Service</h1>
        <p className="text-sm font-light text-sand-500 mb-12">Last updated: January 2025</p>

        <div className="space-y-10 text-sm font-light text-navy-400 leading-relaxed">
          <section>
            <h2 className="font-serif text-xl font-light text-navy-500 mb-4">1. Acceptance</h2>
            <p>By accessing or using welcomingplanet.com, you agree to these Terms of Service. If you do not agree, please do not use our site.</p>
          </section>

          <section>
            <h2 className="font-serif text-xl font-light text-navy-500 mb-4">2. Products and Orders</h2>
            <p className="mb-3">All products are subject to availability. We reserve the right to refuse or cancel any order. Prices are listed in Euros (EUR) and include VAT where applicable.</p>
            <p>By placing an order, you confirm that the information you provide is accurate and that you are authorized to use the payment method provided.</p>
          </section>

          <section>
            <h2 className="font-serif text-xl font-light text-navy-500 mb-4">3. NFC Profile Terms</h2>
            <p className="mb-3">Each bracelet is linked to a Welcoming Planet NFC profile. By using this service you agree to:</p>
            <ul className="space-y-2 list-disc list-inside">
              <li>Not upload illegal, harmful, or infringing content to your profile</li>
              <li>Take responsibility for the content you share</li>
              <li>Not misuse the NFC platform</li>
            </ul>
          </section>

          <section>
            <h2 className="font-serif text-xl font-light text-navy-500 mb-4">4. Intellectual Property</h2>
            <p>All content on this site — text, images, design, code — is the property of Welcoming Planet and may not be reproduced without written permission.</p>
          </section>

          <section>
            <h2 className="font-serif text-xl font-light text-navy-500 mb-4">5. Limitation of Liability</h2>
            <p>To the fullest extent permitted by law, Welcoming Planet shall not be liable for any indirect, incidental, or consequential damages arising from the use of our products or website.</p>
          </section>

          <section>
            <h2 className="font-serif text-xl font-light text-navy-500 mb-4">6. Governing Law</h2>
            <p>These terms are governed by the laws of Spain. Any disputes shall be resolved in the courts of Valencia, Spain.</p>
          </section>

          <section>
            <h2 className="font-serif text-xl font-light text-navy-500 mb-4">7. Contact</h2>
            <p>Questions about these terms: hello@welcomingplanet.com</p>
          </section>
        </div>
      </div>
    </div>
  );
}
