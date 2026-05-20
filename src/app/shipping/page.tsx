import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Shipping & Returns — Welcoming Planet',
  description: 'Welcoming Planet shipping and returns policy.',
};

const shippingZones = [
  { zone: 'Spain & Portugal', standard: '2–3 days', express: '1 day', free: 'Over €60' },
  { zone: 'EU (mainland)', standard: '4–6 days', express: '2–3 days', free: 'Over €80' },
  { zone: 'UK', standard: '5–7 days', express: '3–4 days', free: 'Over €100' },
  { zone: 'USA & Canada', standard: '7–10 days', express: '4–5 days', free: 'Over €120' },
  { zone: 'Rest of world', standard: '10–14 days', express: '5–7 days', free: 'Over €150' },
];

export default function ShippingPage() {
  return (
    <div className="bg-sand-50 min-h-screen">
      <div className="max-w-3xl mx-auto px-6 lg:px-8 pt-32 pb-24">
        <p className="text-xs tracking-[0.2em] uppercase font-light text-terracotta-500 mb-5">
          Shipping & Returns
        </p>
        <h1 className="font-serif text-display-md text-navy-500 font-light mb-4">
          We ship
          <br />
          <em>everywhere.</em>
        </h1>
        <p className="text-base font-light text-navy-400 leading-relaxed mb-14">
          Every order is carefully packed by hand and shipped within 1–2 business days.
          You’ll receive a tracking link as soon as your bracelet is on its way.
        </p>

        {/* Shipping table */}
        <div className="mb-14 overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-sand-300">
                <th className="text-left text-xs tracking-[0.12em] uppercase font-light text-navy-500 pb-3">Zone</th>
                <th className="text-left text-xs tracking-[0.12em] uppercase font-light text-navy-500 pb-3">Standard</th>
                <th className="text-left text-xs tracking-[0.12em] uppercase font-light text-navy-500 pb-3">Express</th>
                <th className="text-left text-xs tracking-[0.12em] uppercase font-light text-navy-500 pb-3">Free shipping</th>
              </tr>
            </thead>
            <tbody>
              {shippingZones.map((row) => (
                <tr key={row.zone} className="border-b border-sand-200">
                  <td className="py-4 text-sm font-light text-navy-500">{row.zone}</td>
                  <td className="py-4 text-sm font-light text-navy-400">{row.standard}</td>
                  <td className="py-4 text-sm font-light text-navy-400">{row.express}</td>
                  <td className="py-4 text-sm font-light text-sage-500">{row.free}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Returns */}
        <div className="space-y-8">
          <div>
            <h2 className="font-serif text-xl font-light text-navy-500 mb-4">Returns</h2>
            <div className="space-y-3 text-sm font-light text-navy-400 leading-relaxed">
              <p>
                We accept returns within <strong className="font-medium text-navy-500">30 days</strong> of
                delivery for unused items in their original packaging.
              </p>
              <p>
                To initiate a return, email hello@welcomingplanet.com with your order number.
                We will provide a prepaid return label (EU customers only).
              </p>
              <p>
                Personalized or custom NFC-configured items cannot be returned unless defective.
              </p>
            </div>
          </div>
          <div>
            <h2 className="font-serif text-xl font-light text-navy-500 mb-4">NFC Warranty</h2>
            <p className="text-sm font-light text-navy-400 leading-relaxed">
              All bracelets carry a lifetime warranty on NFC chip functionality. If the NFC chip fails
              under normal use, we will replace the bracelet free of charge.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
