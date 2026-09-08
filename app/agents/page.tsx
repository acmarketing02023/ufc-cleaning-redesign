import Link from "next/link";

export default function AgentsPage() {
  return (
    <div>
      {/* Hero */}
      <section className="bg-primary-600 text-white py-20">
        <div className="section-container">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Real Estate Agent Services
          </h1>
          <p className="text-lg text-white mb-6">
            Pre-listing prep & seamless client transitions
          </p>

          <div className="flex flex-wrap gap-3 mb-8">
            <div className="bg-primary-700 px-4 py-2 rounded-full text-sm font-semibold text-accent-400">
              Partner pricing + referral program
            </div>
            <div className="bg-primary-700 px-4 py-2 rounded-full text-sm font-semibold flex items-center gap-2">
              <span>🛡️</span> $2M Insured
            </div>
            <div className="bg-primary-700 px-4 py-2 rounded-full text-sm font-semibold flex items-center gap-2">
              <span>⭐</span> 5.0 Stars
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            <Link href="/quote" className="btn bg-accent-500 text-primary-900 hover:bg-accent-400 font-bold btn-primary-lg">
              Get a Free Quote
            </Link>
            <a
              href="tel:+12142182921"
              className="btn bg-primary-700 text-white hover:bg-primary-800 btn-primary-lg flex items-center justify-center gap-2"
            >
              <span>📞</span> (214) 218-2921
            </a>
          </div>
        </div>
      </section>

      {/* Value Proposition */}
      <section className="section">
        <div className="section-container">
          <div className="grid md:grid-cols-3 gap-12">
            <div className="md:col-span-2">
              <p className="text-lg text-white mb-6 leading-relaxed">
                Great agents win on presentation and service. Universal Facility Cleaning is DFW's preferred vendor partner for real estate professionals, helping you present listings at their best, give sellers and buyers a seamless transition, and earn referral income — all with one reliable company behind you.
              </p>

              <p className="text-lg text-white mb-6 leading-relaxed">
                Presentation sells homes. Our pre-listing deep clean makes a property photograph and show at its absolute best, so buyers see potential instead of grime. When a deal closes, we handle the move-out clean for your sellers and the move-in clean for your buyers, turning the stressful handoff into a white-glove experience your clients remember and refer. If a seller leaves items behind, our junk removal clears them fast, and our local moving service can carry your clients through the transition itself.
              </p>

              <p className="text-lg text-white mb-6 leading-relaxed">
                For agents, the relationship is designed to make you look good and add income. We offer partner pricing on services you book regularly, same-day emergency cleaning for those last-minute showings and closings, and co-branded confirmation emails so your clients see your name alongside a service that treats them well. Our referral program pays a 10% commission on business you send our way — turning the vendor you already recommend into a revenue stream.
              </p>

              <p className="text-lg text-white leading-relaxed">
                One trusted partner for pre-listing prep, closings, cleanouts, and moves means fewer moving parts for you and a consistently professional experience for your clients. Apply for an agent partnership and we will set you up with pricing, priority booking, and the referral program.
              </p>
            </div>

            <div className="bg-primary-800 border border-accent-500 rounded-xl p-8">
              <h3 className="text-2xl font-bold mb-6 text-white">
                What's included
              </h3>
              <ul className="space-y-4 mb-8">
                <li className="flex items-start gap-3">
                  <span className="text-accent-500 font-bold text-xl">✓</span>
                  <span className="text-white">Pre-listing deep cleans that maximize sale appeal</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-accent-500 font-bold text-xl">✓</span>
                  <span className="text-white">Move-out cleaning for your sellers</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-accent-500 font-bold text-xl">✓</span>
                  <span className="text-white">Move-in cleaning for your buyers</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-accent-500 font-bold text-xl">✓</span>
                  <span className="text-white">Junk removal of leftover seller items</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-accent-500 font-bold text-xl">✓</span>
                  <span className="text-white">Same-day emergency cleaning for showings and closings</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-accent-500 font-bold text-xl">✓</span>
                  <span className="text-white">10% agent referral commission + co-branded client emails</span>
                </li>
              </ul>

              <Link href="/quote" className="btn btn-primary w-full text-center">
                Get My Free Estimate
              </Link>
              <p className="text-center text-sm text-white mt-3">
                No obligation • Same-day availability
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Who It's Ideal For */}
      <section className="section bg-primary-800">
        <div className="section-container">
          <div className="border-2 border-accent-500 rounded-2xl p-8 max-w-2xl">
            <h3 className="text-3xl font-bold mb-4">Who it's ideal for</h3>
            <p className="text-lg text-white">
              Real estate agents, brokers, and teams who want a dependable cleaning and services partner for listings, closings, and client transitions.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section">
        <div className="section-container">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
            Frequently Asked Questions
          </h2>

          <div className="max-w-3xl mx-auto space-y-4">
            <details className="border border-primary-600 rounded-lg p-6 cursor-pointer group">
              <summary className="text-lg font-bold text-white flex items-center justify-between">
                What is the referral program?
                <span className="text-accent-500 group-open:rotate-90 transition-transform">›</span>
              </summary>
              <p className="text-white mt-4 text-base">
                Our referral program pays a 10% commission on business you send our way. When you refer a client to UFC Cleaning, you earn a commission on that service—turning a vendor you already recommend into a revenue stream. We also provide co-branded confirmation emails so your clients see your name alongside the service.
              </p>
            </details>

            <details className="border border-primary-600 rounded-lg p-6 cursor-pointer group">
              <summary className="text-lg font-bold text-white flex items-center justify-between">
                Can you clean a listing on short notice?
                <span className="text-accent-500 group-open:rotate-90 transition-transform">›</span>
              </summary>
              <p className="text-white mt-4 text-base">
                Absolutely. We offer same-day emergency cleaning for last-minute showings and closings. Our teams can turn around a property fast. Call before 10 AM and we can often start the same day.
              </p>
            </details>

            <details className="border border-primary-600 rounded-lg p-6 cursor-pointer group">
              <summary className="text-lg font-bold text-white flex items-center justify-between">
                Do you offer partner pricing?
                <span className="text-accent-500 group-open:rotate-90 transition-transform">›</span>
              </summary>
              <p className="text-white mt-4 text-base">
                Yes. We offer partner pricing on services you book regularly. Apply for an agent partnership and we'll set you up with discounted rates on all services you use.
              </p>
            </details>

            <details className="border border-primary-600 rounded-lg p-6 cursor-pointer group">
              <summary className="text-lg font-bold text-white flex items-center justify-between">
                How do my clients know it's coming from me?
                <span className="text-accent-500 group-open:rotate-90 transition-transform">›</span>
              </summary>
              <p className="text-white mt-4 text-base">
                We send co-branded confirmation emails with your name and branding so your clients see that you arranged the service. It's a white-glove touch that strengthens the relationship between you and your clients.
              </p>
            </details>

            <details className="border border-primary-600 rounded-lg p-6 cursor-pointer group">
              <summary className="text-lg font-bold text-white flex items-center justify-between">
                How do I become a partner?
                <span className="text-accent-500 group-open:rotate-90 transition-transform">›</span>
              </summary>
              <p className="text-white mt-4 text-base">
                Get a free estimate or call us to discuss your partnership needs. We'll set you up with partner pricing, priority booking, and enroll you in the referral program. It's that simple.
              </p>
            </details>
          </div>
        </div>
      </section>

      {/* Other Services */}
      <section className="section">
        <div className="section-container">
          <h2 className="text-3xl font-bold mb-12 text-white">Explore other services</h2>

          <div className="grid md:grid-cols-4 gap-6">
            <Link href="/services/residential-cleaning" className="group bg-primary-700 border border-primary-600 rounded-xl p-6 hover:border-accent-500 hover:shadow-lg transition-all">
              <h3 className="font-bold text-lg mb-2 group-hover:text-accent-400 transition text-white">
                House Cleaning
              </h3>
              <p className="text-sm text-white">Starting from $169</p>
            </Link>

            <Link href="/services/deep-cleaning" className="group bg-primary-700 border border-primary-600 rounded-xl p-6 hover:border-accent-500 hover:shadow-lg transition-all">
              <h3 className="font-bold text-lg mb-2 group-hover:text-accent-400 transition text-white">
                Deep Clean
              </h3>
              <p className="text-sm text-white">Starting from $199</p>
            </Link>

            <Link href="/services/commercial-cleaning" className="group bg-primary-700 border border-primary-600 rounded-xl p-6 hover:border-accent-500 hover:shadow-lg transition-all">
              <h3 className="font-bold text-lg mb-2 group-hover:text-accent-400 transition text-white">
                Office & Commercial Cleaning
              </h3>
              <p className="text-sm text-white">Starting from $120</p>
            </Link>

            <Link href="/services/junk-removal" className="group bg-primary-700 border border-primary-600 rounded-xl p-6 hover:border-accent-500 hover:shadow-lg transition-all">
              <h3 className="font-bold text-lg mb-2 group-hover:text-accent-400 transition text-white">
                Junk Removal
              </h3>
              <p className="text-sm text-white">Starting from $149</p>
            </Link>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="section bg-gradient-to-r from-accent-500 to-accent-600 text-white">
        <div className="section-container text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to book real estate agent services?
          </h2>
          <p className="text-lg text-white mb-8 max-w-2xl mx-auto">
            Get a free, instant estimate or call us directly. Serving Rowlett and all of DFW with background-checked, fully insured crews.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/quote" className="btn bg-white text-accent-600 hover:bg-gray-100 font-bold btn-primary-lg">
              Get a Free Quote
            </Link>
            <a
              href="tel:+12142182921"
              className="btn bg-accent-700 text-white hover:bg-accent-800 btn-primary-lg flex items-center justify-center gap-2"
            >
              <span>📍</span> See Service Areas
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
