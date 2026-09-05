import Link from "next/link";

export default function CommercialDemolitionPage() {
  return (
    <div>
      {/* Hero */}
      <section className="bg-primary-600 text-white py-20">
        <div className="section-container">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Commercial Demolition
          </h1>
          <p className="text-lg text-white mb-6">
            Complete demolition and teardown for residential and commercial properties — completed in under 2 weeks
          </p>

          <div className="flex flex-wrap gap-3 mb-8">
            <div className="bg-primary-700 px-4 py-2 rounded-full text-sm font-semibold text-accent-400">
              Residential & Commercial
            </div>
            <div className="bg-primary-700 px-4 py-2 rounded-full text-sm font-semibold flex items-center gap-2">
              Under 2 Weeks
            </div>
            <div className="bg-primary-700 px-4 py-2 rounded-full text-sm font-semibold">
              All Non-Licensed Work Included
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            <Link href="/quote" className="btn bg-accent-500 text-primary-900 hover:bg-accent-400 font-bold btn-primary-lg">
              Get a Free Quote
            </Link>
            <a
              href="tel:+14699297722"
              className="btn bg-primary-700 text-white hover:bg-primary-800 btn-primary-lg"
            >
              Call (469) 929-7722
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
                Complete Demolition, One Team, Under 2 Weeks
              </h2>
              <p className="text-lg text-white mb-6 leading-relaxed">
                Commercial demolition requires speed, precision, and reliability. We handle residential teardowns, commercial demolition, and selective interior demolition with one team that manages everything—no waiting on subcontractors, no scheduling conflicts, no missed timelines.
              </p>
              <p className="text-lg text-white mb-6 leading-relaxed">
                Projects that take competitors months, we complete in days. We own our equipment (skid steers, claws, dump trucks, trailers), self-perform all non-licensed trades, and coordinate licensed work on-site so nothing stalls your project.
              </p>
              <p className="text-lg text-white mb-6 leading-relaxed">
                From complete house teardowns ($15k-$40k+) to tile removal, brick walls, and commercial demolition, we deliver consistent results and meet your timeline. Your project doesn't move forward until it's done right—and done fast.
              </p>
            </div>

            <div className="bg-primary-50 border border-accent-500 rounded-xl p-8">
              <h3 className="text-2xl font-bold mb-6 text-primary-900">
                What's Included
              </h3>
              <ul className="space-y-4 mb-8">
                <li className="flex items-start gap-3">
                  <span className="text-accent-500 font-bold text-xl">✓</span>
                  <span className="text-primary-900">Complete structural demolition</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-accent-500 font-bold text-xl">✓</span>
                  <span className="text-primary-900">Selective interior demolition</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-accent-500 font-bold text-xl">✓</span>
                  <span className="text-primary-900">Junk removal & debris haul-away</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-accent-500 font-bold text-xl">✓</span>
                  <span className="text-primary-900">Site cleanup & grading</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-accent-500 font-bold text-xl">✓</span>
                  <span className="text-primary-900">Licensed contractor coordination</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-accent-500 font-bold text-xl">✓</span>
                  <span className="text-primary-900">Under 2 week turnaround</span>
                </li>
              </ul>

              <Link href="/quote" className="btn btn-primary w-full text-center">
                Get My Free Estimate
              </Link>
              <p className="text-center text-sm text-primary-900 mt-3">
                No obligation • Same-day availability
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why We're Different */}
      <section className="section bg-primary-800">
        <div className="section-container">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
            Why We're Faster Than Everyone Else
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-primary-700 rounded-xl p-8 border border-accent-500">
              <h3 className="text-xl font-bold mb-4 text-white">Own All Equipment</h3>
              <p className="text-white">
                Skid steers, claws, dump trucks, trailers—we own it all. No rental delays, no equipment shortages. We move on your timeline, not theirs.
              </p>
            </div>

            <div className="bg-primary-700 rounded-xl p-8 border border-accent-500">
              <h3 className="text-xl font-bold mb-4 text-white">Self-Perform Non-Licensed Work</h3>
              <p className="text-white">
                We handle everything except licensed trades (electrical, plumbing, HVAC). No waiting on subcontractors. One team. One timeline.
              </p>
            </div>

            <div className="bg-primary-700 rounded-xl p-8 border border-accent-500">
              <h3 className="text-xl font-bold mb-4 text-white">Proven Track Record</h3>
              <p className="text-white">
                Complete houses in 2 weeks. Tile removal. Brick walls. Commercial teardowns. Whatever the scope, we've done it fast and right.
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
              <h3 className="text-xl font-bold mb-4 text-white">Residential Teardowns</h3>
              <p className="text-white mb-4">Complete house demolition from foundation to lot cleanup. Typical range: $15,000-$40,000+</p>
              <p className="text-sm text-accent-400">Completed in 10-14 days</p>
            </div>

            <div className="border border-primary-600 rounded-lg p-6">
              <h3 className="text-xl font-bold mb-4 text-white">Commercial Demolition</h3>
              <p className="text-white mb-4">Commercial buildings, warehouses, multi-unit properties. Custom quotes based on scope.</p>
              <p className="text-sm text-accent-400">Completed in under 2 weeks</p>
            </div>

            <div className="border border-primary-600 rounded-lg p-6">
              <h3 className="text-xl font-bold mb-4 text-white">Selective Interior Demolition</h3>
              <p className="text-white mb-4">Tile, brick walls, fixtures, interior remodeling prep. Typical range: $1,000-$10,000</p>
              <p className="text-sm text-accent-400">Completed in 3-7 days</p>
            </div>

            <div className="border border-primary-600 rounded-lg p-6">
              <h3 className="text-xl font-bold mb-4 text-white">Post-Demolition Cleanup</h3>
              <p className="text-white mb-4">Site cleanup, debris removal, grading, final prep for next phase.</p>
              <p className="text-sm text-accent-400">Included with demolition or standalone</p>
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
            We serve a 60-mile radius from Rowlett, including all major DFW cities. Click below to see services in your area.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 max-w-4xl mx-auto">
            <Link href="/locations" className="bg-primary-700 border border-accent-500 rounded-lg p-4 text-center hover:bg-primary-600 transition text-white font-semibold">View All Service Areas</Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section bg-gradient-to-r from-accent-500 to-accent-600 text-white">
        <div className="section-container text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Start Your Demolition Project?
          </h2>
          <p className="text-lg text-white mb-8 max-w-2xl mx-auto">
            Get a free quote today. Serving Rowlett and all of DFW with background-checked, fully insured crews.
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
