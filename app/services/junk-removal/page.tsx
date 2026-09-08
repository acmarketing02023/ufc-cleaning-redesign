import Link from "next/link";

export default function JunkRemovalPage() {
  return (
    <div>
      {/* Hero */}
      <section className="bg-primary-600 text-white py-16">
        <div className="section-container">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Junk Removal</h1>
          <p className="text-lg text-white">
            Same-day hauling for furniture, appliances, debris, and more. Starting from $149.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="section">
        <div className="section-container max-w-3xl">
          <h2 className="text-3xl font-bold mb-6">Clear Your Space Fast</h2>

          <p className="text-lg text-white mb-8">
            Got junk? We'll haul it away same-day, so you can reclaim your space. From furniture and appliances to construction debris and estate cleanouts, we handle it all.
          </p>

          <h3 className="text-2xl font-bold mb-4">What We Remove</h3>
          <div className="grid md:grid-cols-2 gap-4 mb-12">
            <div>
              <p className="font-semibold mb-3">Furniture & Appliances</p>
              <ul className="text-sm text-white space-y-1">
                <li>• Old couches & chairs</li>
                <li>• Beds & mattresses</li>
                <li>• Fridges & stoves</li>
                <li>• Washers & dryers</li>
                <li>• Dressers & cabinets</li>
              </ul>
            </div>
            <div>
              <p className="font-semibold mb-3">Debris & Waste</p>
              <ul className="text-sm text-white space-y-1">
                <li>• Construction debris</li>
                <li>• Drywall & lumber</li>
                <li>• Carpet & flooring</li>
                <li>• General clutter</li>
                <li>• Yard waste</li>
              </ul>
            </div>
            <div>
              <p className="font-semibold mb-3">Estate & Move-Out</p>
              <ul className="text-sm text-white space-y-1">
                <li>• Estate cleanouts</li>
                <li>• Downsizing removal</li>
                <li>• Move-out hauling</li>
                <li>• Bulk items</li>
                <li>• Donation pickup</li>
              </ul>
            </div>
            <div>
              <p className="font-semibold mb-3">Commercial Waste</p>
              <ul className="text-sm text-white space-y-1">
                <li>• Office furniture</li>
                <li>• Business waste</li>
                <li>• Equipment removal</li>
                <li>• Packaging material</li>
                <li>• Demolition debris</li>
              </ul>
            </div>
          </div>

          <h3 className="text-2xl font-bold mb-4">The Process</h3>
          <div className="space-y-4 mb-12">
            <div className="flex gap-4">
              <span className="text-3xl font-bold text-accent-500 flex-shrink-0">1</span>
              <div>
                <p className="font-semibold">Call or Request a Quote</p>
                <p className="text-white text-sm">Tell us what you need removed</p>
              </div>
            </div>
            <div className="flex gap-4">
              <span className="text-3xl font-bold text-orange-600 flex-shrink-0">2</span>
              <div>
                <p className="font-semibold">We Provide Pricing</p>
                <p className="text-white text-sm">Transparent, upfront pricing</p>
              </div>
            </div>
            <div className="flex gap-4">
              <span className="text-3xl font-bold text-orange-600 flex-shrink-0">3</span>
              <div>
                <p className="font-semibold">Same-Day Haul Away</p>
                <p className="text-white text-sm">We remove and haul everything</p>
              </div>
            </div>
            <div className="flex gap-4">
              <span className="text-3xl font-bold text-orange-600 flex-shrink-0">4</span>
              <div>
                <p className="font-semibold">Clean Space</p>
                <p className="text-white text-sm">Your space is cleared and clean</p>
              </div>
            </div>
          </div>

          <h3 className="text-2xl font-bold mb-4">Why Choose UFC Junk Removal</h3>
          <ul className="space-y-4 mb-12">
            <li className="flex gap-4">
              <span className="text-2xl flex-shrink-0">✓</span>
              <div>
                <p className="font-semibold">Same-Day Service</p>
                <p className="text-white text-sm">Call us and we can often come out the same day</p>
              </div>
            </li>
            <li className="flex gap-4">
              <span className="text-2xl flex-shrink-0">✓</span>
              <div>
                <p className="font-semibold">Fully Insured</p>
                <p className="text-white text-sm">$2 million liability coverage</p>
              </div>
            </li>
            <li className="flex gap-4">
              <span className="text-2xl flex-shrink-0">✓</span>
              <div>
                <p className="font-semibold">Professional & Courteous</p>
                <p className="text-white text-sm">We treat your property with respect</p>
              </div>
            </li>
            <li className="flex gap-4">
              <span className="text-2xl flex-shrink-0">✓</span>
              <div>
                <p className="font-semibold">Honest Pricing</p>
                <p className="text-white text-sm">No hidden fees or surprises</p>
              </div>
            </li>
          </ul>

          <div className="bg-primary-50 rounded-lg p-8 border border-accent-500">
            <h3 className="font-bold text-lg mb-4 text-white">What About Donations?</h3>
            <p className="text-white mb-4">
              Many items can be donated to local charities. Ask us about donation options when you call for your junk removal estimate.
            </p>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="section">
        <div className="section-container max-w-3xl">
          <h2 className="text-3xl font-bold mb-8 text-center">Pricing</h2>
          <div className="bg-primary-50 rounded-lg p-8 border border-accent-500">
            <p className="text-white mb-6">
              Junk removal pricing depends on the amount and type of items to be removed.
            </p>

            <div className="mb-6">
              <p className="font-semibold text-white mb-2">Starting Price</p>
              <p className="text-2xl font-bold text-accent-300">From $149</p>
              <p className="text-sm text-white mb-6">
                Call or request a quote for exact pricing
              </p>
            </div>

            <div className="space-y-3 text-sm text-white mb-8">
              <p>✓ Same-day pricing provided</p>
              <p>✓ All removal & hauling included</p>
              <p>✓ No hidden fees</p>
            </div>

            <Link href="/quote?service=junk-removal" className="btn btn-primary w-full text-center">
              Get Junk Removal Quote
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section bg-primary-600 text-white">
        <div className="section-container text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Clear Your Space?
          </h2>
          <p className="text-lg text-white mb-8 max-w-2xl mx-auto">
            Get a free junk removal estimate. Same-day or next-day hauling available.
          </p>

          <Link href="/quote?service=junk-removal" className="btn bg-accent-500 text-primary-900 hover:bg-accent-400 font-bold btn-primary-lg inline-block">
            Get Your Quote Now
          </Link>

          <p className="text-sm text-white mt-6">
            Or call <a href="tel:+12142182921" className="font-semibold">(214) 218-2921</a>
          </p>
        </div>
      </section>
    </div>
  );
}
