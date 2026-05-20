import type { Metadata } from 'next';
import { Mail, MapPin, Clock } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Contact — Welcoming Planet',
  description: 'Get in touch with Welcoming Planet. We read every message.',
};

export default function ContactPage() {
  return (
    <div className="bg-sand-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 pt-32 pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          {/* Left */}
          <div>
            <p className="text-xs tracking-[0.2em] uppercase font-light text-terracotta-500 mb-5">
              Contact
            </p>
            <h1 className="font-serif text-display-md text-navy-500 font-light mb-8">
              We read
              <br />
              <em>every message.</em>
            </h1>
            <p className="text-base font-light text-navy-400 leading-relaxed mb-10">
              Questions about your order, ideas for collaborations, stories from the community
              — we want to hear it all.
            </p>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <Mail className="w-5 h-5 text-terracotta-500 mt-0.5 flex-shrink-0" strokeWidth={1.5} />
                <div>
                  <p className="text-sm font-light text-navy-500">Email</p>
                  <a href="mailto:hello@welcomingplanet.com" className="text-sm font-light text-navy-400 hover:text-navy-500 transition-colors">
                    hello@welcomingplanet.com
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <MapPin className="w-5 h-5 text-terracotta-500 mt-0.5 flex-shrink-0" strokeWidth={1.5} />
                <div>
                  <p className="text-sm font-light text-navy-500">Based in</p>
                  <p className="text-sm font-light text-navy-400">Valencia, Spain · Shipping worldwide</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Clock className="w-5 h-5 text-terracotta-500 mt-0.5 flex-shrink-0" strokeWidth={1.5} />
                <div>
                  <p className="text-sm font-light text-navy-500">Response time</p>
                  <p className="text-sm font-light text-navy-400">Within 24 hours, Monday–Friday</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right — form */}
          <div>
            <form className="space-y-5" action="/api/contact" method="POST">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-light text-navy-500 tracking-wide mb-2" htmlFor="first-name">
                    First name
                  </label>
                  <input
                    id="first-name"
                    name="firstName"
                    type="text"
                    required
                    className="w-full border border-sand-300 bg-transparent text-navy-500 text-sm font-light px-4 py-3 focus:outline-none focus:border-navy-500 transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-xs font-light text-navy-500 tracking-wide mb-2" htmlFor="last-name">
                    Last name
                  </label>
                  <input
                    id="last-name"
                    name="lastName"
                    type="text"
                    className="w-full border border-sand-300 bg-transparent text-navy-500 text-sm font-light px-4 py-3 focus:outline-none focus:border-navy-500 transition-colors"
                  />
                </div>
              </div>
              <div>
                <label className="block text-xs font-light text-navy-500 tracking-wide mb-2" htmlFor="email">
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  className="w-full border border-sand-300 bg-transparent text-navy-500 text-sm font-light px-4 py-3 focus:outline-none focus:border-navy-500 transition-colors"
                />
              </div>
              <div>
                <label className="block text-xs font-light text-navy-500 tracking-wide mb-2" htmlFor="subject">
                  Subject
                </label>
                <select
                  id="subject"
                  name="subject"
                  className="w-full border border-sand-300 bg-sand-50 text-navy-500 text-sm font-light px-4 py-3 focus:outline-none focus:border-navy-500 transition-colors"
                >
                  <option>Order question</option>
                  <option>NFC setup help</option>
                  <option>Collaboration inquiry</option>
                  <option>Community story</option>
                  <option>Press / media</option>
                  <option>Other</option>
                </select>
              </div>
              <div>
                <label className="block text-xs font-light text-navy-500 tracking-wide mb-2" htmlFor="message">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={6}
                  required
                  className="w-full border border-sand-300 bg-transparent text-navy-500 text-sm font-light px-4 py-3 focus:outline-none focus:border-navy-500 transition-colors resize-none"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-navy-500 text-sand-50 text-sm font-light tracking-wide py-4 hover:bg-navy-400 transition-colors active:scale-[0.99]"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
