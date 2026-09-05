import Link from "next/link";

export default function PostConstructionCleanupPage() {
  return (
    <div>
      {/* Hero */}
      <section className="bg-primary-600 text-white py-20">
        <div className="section-container">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Post-Construction Cleanup
          </h1>
          <p className="text-lg text-white mb-6">
            Commercial-scale post-construction cleaning for large properties — completed in days, not weeks
          </p>

          <div className="flex flex-wrap gap-3 mb-8">
            <div className="bg-primary-700 px-4 py-2 rounded-full text-sm font-semibold text-accent-400">
              Residential & Commercial
            </div>
            <div className="bg-primary-700 px-4 py-2 rounded-full text-sm font-semibold flex items-center gap-2">
              <span>⚡</span> Teams Up to 20 People
            </div>
            <div className="bg-primary-700 px-4 py-2 rounded-full text-sm font-semibold flex items-center gap-2">
              <span>✓</span> Half-Day Availability
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            <Link href="/quote" className="btn bg-accent-500 text-primary-900 hover:bg-accent-400 font-bold btn-primary-lg">
              Get a Free Quote
            </Link>
            <a
              href="tel:2148179212"
              className="btn bg-primary-700 text-white hover:bg-primary-800 btn-primary-lg flex items-center justify-center gap-2"
            >
              <span>📞</span> (214) 817-9212
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
                Turn-Key Post-Construction Cleanup for Any Size Project
              </h2>
              <p className="text-lg text-white mb-6 leading-relaxed">
                Construction debris doesn't clean itself. After renovation, new construction, or major commercial projects, properties need professional post-construction cleanup to move to the next phase—whether that's final inspection, occupancy, or listing.
              </p>
              <p className="text-lg text-white mb-6 leading-relaxed">
                We handle everything: dust control, debris removal, floor cleaning, window washing, fixture installation cleanup, and final touch-ups. A 20,000 sq ft commercial property takes 10+ people working 8 hours to clean properly. We can do it in one day with full crews and equipment.
              </p>
              <p className="text-lg text-white mb-6 leading-relaxed">
                Your contractor moves to the next job. We handle the cleanup. Your project stays on schedule because we clean fast, thoroughly, and on your timeline. Half-day, full-day, or multi-day crews available based on scope.
              </p>
            </div>

            <div className="bg-primary-50 border border-accent-500 rounded-xl p-8">
              <h3 className="text-2xl font-bold mb-6 text-white">
                What's Included
              </h3>
              <ul className="space-y-4 mb-8">
                <li className="flex items-start gap-3">
                  <span className="text-accent-400 font-bold text-xl">✓</span>
                  <span className="text-white">Debris removal & haul-away</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-accent-400 font-bold text-xl">✓</span>
                  <span className="text-white">Dust & drywall cleanup</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-accent-400 font-bold text-xl">✓</span>
                  <span className="text-white">Floor cleaning & polishing</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-accent-400 font-bold text-xl">✓</span>
                  <span className="text-white">Window & glass cleaning</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-accent-400 font-bold text-xl">✓</span>
                  <span className="text-white">Fixture & paint touch-up cleanup</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-accent-400 font-bold text-xl">✓</span>
                  <span className="text-white">Final walkthrough ready</span>
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
            Why We're the Preferred Choice
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-primary-700 rounded-xl p-8 border border-accent-500">
              <h3 className="text-xl font-bold mb-4 text-white">Scalable Crews</h3>
              <p className="text-white">
                Need 2 people or 20? We scale to your project size. Large commercial cleanup? We show up with full crews and finish in a day.
              </p>
            </div>

            <div className="bg-primary-700 rounded-xl p-8 border border-accent-500">
              <h3 className="text-xl font-bold mb-4 text-white">Speed Matters</h3>
              <p className="text-white">
                Your project is ready to move forward. We clean fast without cutting corners so you can start the next phase on time.
              </p>
            </div>

            <div className="bg-primary-700 rounded-xl p-8 border border-accent-500">
              <h3 className="text-xl font-bold mb-4 text-white">End-to-End Service</h3>
              <p className="text-white">
                Debris removal, cleanup, detail work—we handle everything. One company. One timeline. Property ready for final inspection.
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
              <h3 className="text-xl font-bold mb-4 text-white">Residential New Construction</h3>
              <p className="text-white mb-4">New home build cleanup and final walkthrough preparation. Typical range: $2,000-$8,000</p>
              <p className="text-sm text-accent-400">Completed in 1-2 days</p>
            </div>

            <div className="border border-primary-600 rounded-lg p-6">
              <h3 className="text-xl font-bold mb-4 text-white">Commercial Construction</h3>
              <p className="text-white mb-4">Office, retail, warehouse cleanup after construction. Custom quotes based on sq footage.</p>
              <p className="text-sm text-accent-400">Completed in 1-3 days</p>
            </div>

            <div className="border border-primary-600 rounded-lg p-6">
              <h3 className="text-xl font-bold mb-4 text-white">Renovation Cleanup</h3>
              <p className="text-white mb-4">Interior or exterior renovation cleanup and dust removal. Typical range: $1,500-$5,000</p>
              <p className="text-sm text-accent-400">Completed in 1 day</p>
            </div>

            <div className="border border-primary-600 rounded-lg p-6">
              <h3 className="text-xl font-bold mb-4 text-white">Multi-Unit Properties</h3>
              <p className="text-white mb-4">Apartment complex, condo, or multi-family cleanup after construction. Large-scale teams available.</p>
              <p className="text-sm text-accent-400">Completed in 2-5 days</p>
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
            <Link href="/services/cleanup-rowlett" className="bg-primary-700 border border-accent-500 rounded-lg p-4 text-center hover:bg-primary-600 transition text-white font-semibold">Rowlett</Link>
            <Link href="/services/cleanup-dallas" className="bg-primary-700 border border-accent-500 rounded-lg p-4 text-center hover:bg-primary-600 transition text-white font-semibold">Dallas</Link>
            <Link href="/services/cleanup-garland" className="bg-primary-700 border border-accent-500 rounded-lg p-4 text-center hover:bg-primary-600 transition text-white font-semibold">Garland</Link>
            <Link href="/services/cleanup-plano" className="bg-primary-700 border border-accent-500 rounded-lg p-4 text-center hover:bg-primary-600 transition text-white font-semibold">Plano</Link>
            <Link href="/services/cleanup-fort-worth" className="bg-primary-700 border border-accent-500 rounded-lg p-4 text-center hover:bg-primary-600 transition text-white font-semibold">Fort Worth</Link>
            <Link href="/services/cleanup-arlington" className="bg-primary-700 border border-accent-500 rounded-lg p-4 text-center hover:bg-primary-600 transition text-white font-semibold">Arlington</Link>
            <Link href="/services/cleanup-irving" className="bg-primary-700 border border-accent-500 rounded-lg p-4 text-center hover:bg-primary-600 transition text-white font-semibold">Irving</Link>
            <Link href="/services/cleanup-rockwall" className="bg-primary-700 border border-accent-500 rounded-lg p-4 text-center hover:bg-primary-600 transition text-white font-semibold">Rockwall</Link>
            <Link href="/services/cleanup-frisco" className="bg-primary-700 border border-accent-500 rounded-lg p-4 text-center hover:bg-primary-600 transition text-white font-semibold">Frisco</Link>
            <Link href="/services/cleanup-mckinney" className="bg-primary-700 border border-accent-500 rounded-lg p-4 text-center hover:bg-primary-600 transition text-white font-semibold">McKinney</Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section bg-gradient-to-r from-accent-500 to-accent-600 text-white">
        <div className="section-container text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Clean Up Your Project?
          </h2>
          <p className="text-lg text-white mb-8 max-w-2xl mx-auto">
            Get a free quote today. Serving Rowlett and all of DFW with background-checked, fully insured crews.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/quote" className="btn bg-white text-accent-600 hover:bg-gray-100 font-bold btn-primary-lg">
              Get a Free Quote
            </Link>
            <a
              href="tel:2148179212"
              className="btn bg-accent-700 text-white hover:bg-accent-800 btn-primary-lg flex items-center justify-center gap-2"
            >
              <span>📞</span> Call (214) 817-9212
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
