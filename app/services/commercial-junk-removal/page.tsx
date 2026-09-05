import Link from "next/link";

export default function CommercialJunkRemovalPage() {
  return (
    <div>
      {/* Hero */}
      <section className="bg-primary-600 text-white py-20">
        <div className="section-container">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            High-Ticket Junk Removal
          </h1>
          <p className="text-lg text-white mb-6">
            Commercial-scale junk removal for large projects — completed in days, not weeks
          </p>

          <div className="flex flex-wrap gap-3 mb-8">
            <div className="bg-primary-700 px-4 py-2 rounded-full text-sm font-semibold text-accent-400">
              Commercial & Residential
            </div>
            <div className="bg-primary-700 px-4 py-2 rounded-full text-sm font-semibold flex items-center gap-2">
              <span>⚡</span> Same-Day Service Available
            </div>
            <div className="bg-primary-700 px-4 py-2 rounded-full text-sm font-semibold flex items-center gap-2">
              <span>✓</span> Full Haul & Cleanup Included
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            <Link href="/quote" className="btn bg-accent-500 text-primary-900 hover:bg-accent-400 font-bold btn-primary-lg">
              Get a Free Quote
            </Link>
            <a
              href="tel:+14699297722"
              className="btn bg-primary-700 text-white hover:bg-primary-800 btn-primary-lg flex items-center justify-center gap-2"
            >
              <span>📞</span> (469) 929-7722
            </a>
          </div>
        </div>
      </section>

      {/* What We Do */}
      <section className="section">
        <div className="section-container">
          <div className="grid md:grid-cols-3 gap-12 mb-16">
            <div className="md:col-span-2">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Large-Scale Junk Removal for High-Value Projects
              </h2>
              <p className="text-lg text-white mb-6 leading-relaxed">
                Commercial junk removal isn't just about hauling trash. It's about clearing sites fast so your project moves forward. We handle estates, commercial cleanouts, property demolition debris, abandoned furniture, and large-scale projects that require trucks, crews, and coordination.
              </p>
              <p className="text-lg text-white mb-6 leading-relaxed">
                Our trucks and trailers remove everything—furniture, appliances, construction debris, hazardous materials. We load, haul, dispose, and leave the site clean. Whether it's a $5,000 estate cleanout or a $25,000 commercial demolition with full haul-away, we move fast and do it right.
              </p>
              <p className="text-lg text-white mb-6 leading-relaxed">
                Same-day service available. Call before 10 AM and we're there. We own our trucks and trailers, so there are no delays waiting on rental equipment. Your site gets cleared fast, your project keeps moving.
              </p>
            </div>

            <div className="bg-primary-50 border border-accent-500 rounded-xl p-8">
              <h3 className="text-2xl font-bold mb-6 text-white">
                What's Included
              </h3>
              <ul className="space-y-4 mb-8">
                <li className="flex items-start gap-3">
                  <span className="text-accent-400 font-bold text-xl">✓</span>
                  <span className="text-white">Full junk removal & haul-away</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-accent-400 font-bold text-xl">✓</span>
                  <span className="text-white">Furniture & appliance removal</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-accent-400 font-bold text-xl">✓</span>
                  <span className="text-white">Construction debris clearance</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-accent-400 font-bold text-xl">✓</span>
                  <span className="text-white">Estate & property cleanouts</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-accent-400 font-bold text-xl">✓</span>
                  <span className="text-white">Site cleanup & debris disposal</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-accent-400 font-bold text-xl">✓</span>
                  <span className="text-white">Same-day availability</span>
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

      {/* Why Us */}
      <section className="section bg-primary-800">
        <div className="section-container">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
            Why We're the Best Option
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-primary-700 rounded-xl p-8 border border-accent-500">
              <h3 className="text-xl font-bold mb-4 text-white">Own Our Equipment</h3>
              <p className="text-white">
                Multiple trucks and trailers. No rental delays. We can handle any size job immediately without waiting on availability.
              </p>
            </div>

            <div className="bg-primary-700 rounded-xl p-8 border border-accent-500">
              <h3 className="text-xl font-bold mb-4 text-white">Experienced Crews</h3>
              <p className="text-white">
                Trained teams handle everything safely and efficiently. Hazardous materials, heavy loads, complex clearouts—we do it all.
              </p>
            </div>

            <div className="bg-primary-700 rounded-xl p-8 border border-accent-500">
              <h3 className="text-xl font-bold mb-4 text-white">Fast Service</h3>
              <p className="text-white">
                Same-day availability. Call before 10 AM and we're there. Your site clears fast so your project stays on schedule.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Project Types */}
      <section className="section">
        <div className="section-container">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
            Projects We Handle
          </h2>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="border border-primary-600 rounded-lg p-6">
              <h3 className="text-xl font-bold mb-4 text-white">Estate Cleanouts</h3>
              <p className="text-white mb-4">Complete property clearance after estate sales or property takeovers. Typical range: $3,000-$15,000</p>
              <p className="text-sm text-accent-400">Completed in 1-3 days</p>
            </div>

            <div className="border border-primary-600 rounded-lg p-6">
              <h3 className="text-xl font-bold mb-4 text-white">Commercial Cleanouts</h3>
              <p className="text-white mb-4">Office, warehouse, and commercial property clearance. Custom quotes based on scope.</p>
              <p className="text-sm text-accent-400">Completed in 1-5 days</p>
            </div>

            <div className="border border-primary-600 rounded-lg p-6">
              <h3 className="text-xl font-bold mb-4 text-white">Demolition Debris Removal</h3>
              <p className="text-white mb-4">Construction debris, demolition waste, and site cleanup after major projects.</p>
              <p className="text-sm text-accent-400">Same-day available</p>
            </div>

            <div className="border border-primary-600 rounded-lg p-6">
              <h3 className="text-xl font-bold mb-4 text-white">Furniture & Appliance Removal</h3>
              <p className="text-white mb-4">Large furniture sets, appliances, and bulk item removal for homes and businesses.</p>
              <p className="text-sm text-accent-400">Completed in hours to 1 day</p>
            </div>
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="section bg-primary-800">
        <div className="section-container">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center text-white">
            Serving All of DFW
          </h2>
          <p className="text-lg text-white text-center mb-8 max-w-2xl mx-auto">
            We serve a 60-mile radius from Rowlett. Click below to see services in your area.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-5 gap-4 max-w-4xl mx-auto">
            <Link href="/services/junk-removal-rowlett" className="bg-primary-700 border border-accent-500 rounded-lg p-4 text-center hover:bg-primary-600 transition text-white font-semibold">Rowlett</Link>
            <Link href="/services/junk-removal-dallas" className="bg-primary-700 border border-accent-500 rounded-lg p-4 text-center hover:bg-primary-600 transition text-white font-semibold">Dallas</Link>
            <Link href="/services/junk-removal-garland" className="bg-primary-700 border border-accent-500 rounded-lg p-4 text-center hover:bg-primary-600 transition text-white font-semibold">Garland</Link>
            <Link href="/services/junk-removal-plano" className="bg-primary-700 border border-accent-500 rounded-lg p-4 text-center hover:bg-primary-600 transition text-white font-semibold">Plano</Link>
            <Link href="/services/junk-removal-fort-worth" className="bg-primary-700 border border-accent-500 rounded-lg p-4 text-center hover:bg-primary-600 transition text-white font-semibold">Fort Worth</Link>
            <Link href="/services/junk-removal-arlington" className="bg-primary-700 border border-accent-500 rounded-lg p-4 text-center hover:bg-primary-600 transition text-white font-semibold">Arlington</Link>
            <Link href="/services/junk-removal-irving" className="bg-primary-700 border border-accent-500 rounded-lg p-4 text-center hover:bg-primary-600 transition text-white font-semibold">Irving</Link>
            <Link href="/services/junk-removal-rockwall" className="bg-primary-700 border border-accent-500 rounded-lg p-4 text-center hover:bg-primary-600 transition text-white font-semibold">Rockwall</Link>
            <Link href="/services/junk-removal-frisco" className="bg-primary-700 border border-accent-500 rounded-lg p-4 text-center hover:bg-primary-600 transition text-white font-semibold">Frisco</Link>
            <Link href="/services/junk-removal-mckinney" className="bg-primary-700 border border-accent-500 rounded-lg p-4 text-center hover:bg-primary-600 transition text-white font-semibold">McKinney</Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section bg-gradient-to-r from-accent-500 to-accent-600 text-white">
        <div className="section-container text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready for Fast Junk Removal?
          </h2>
          <p className="text-lg text-white mb-8 max-w-2xl mx-auto">
            Get a free quote today. Same-day service available. Serving Rowlett and all of DFW.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/quote" className="btn bg-white text-accent-600 hover:bg-gray-100 font-bold btn-primary-lg">
              Get a Free Quote
            </Link>
            <a
              href="tel:+14699297722"
              className="btn bg-accent-700 text-white hover:bg-accent-800 btn-primary-lg flex items-center justify-center gap-2"
            >
              <span>📞</span> Call (469) 929-7722
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
