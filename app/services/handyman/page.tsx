import Link from "next/link";

export default function HandymanPage() {
  return (
    <div>
      {/* Hero */}
      <section className="bg-primary-600 text-white py-16">
        <div className="section-container">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Handyman Services</h1>
          <p className="text-lg text-white">
            Drywall repair, fixture installation, painting touch-ups, and more. Perfect for rental prep and property maintenance. Starting at $89/hour.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="section">
        <div className="section-container max-w-3xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Complete Handyman Solutions</h2>
          <p className="text-lg text-white mb-8">
            Whether you need drywall repair after a move, fixture installation for your new place, or painting touch-ups before showing your property, our handyman team handles it all. We work on residential and commercial properties throughout Dallas-Fort Worth.
          </p>
        </div>
      </section>

      {/* What We Do */}
      <section className="section bg-primary-50">
        <div className="section-container max-w-3xl">
          <h2 className="text-3xl font-bold mb-12 text-center text-white">What We Repair & Install</h2>

          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="font-bold text-lg mb-4 text-white">Common Repairs</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <span className="text-accent-400 flex-shrink-0 mt-1">✓</span>
                  <span className="text-white">Drywall holes and damage</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-accent-400 flex-shrink-0 mt-1">✓</span>
                  <span className="text-white">Interior paint touch-ups</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-accent-400 flex-shrink-0 mt-1">✓</span>
                  <span className="text-white">Door and frame repairs</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-accent-400 flex-shrink-0 mt-1">✓</span>
                  <span className="text-white">Cabinet and hardware fixes</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-accent-400 flex-shrink-0 mt-1">✓</span>
                  <span className="text-white">Caulk and sealant work</span>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-bold text-lg mb-4 text-white">Installations & Setup</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <span className="text-accent-400 flex-shrink-0 mt-1">✓</span>
                  <span className="text-white">Light fixtures and switches</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-accent-400 flex-shrink-0 mt-1">✓</span>
                  <span className="text-white">Door handles and locks</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-accent-400 flex-shrink-0 mt-1">✓</span>
                  <span className="text-white">Shelf and towel bar mounting</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-accent-400 flex-shrink-0 mt-1">✓</span>
                  <span className="text-white">Caulking and weatherstripping</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-accent-400 flex-shrink-0 mt-1">✓</span>
                  <span className="text-white">Minor plumbing and electrical</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose */}
      <section className="section">
        <div className="section-container max-w-3xl">
          <h2 className="text-3xl font-bold mb-8 text-center">Why Choose UFC for Handyman Work</h2>

          <div className="space-y-6">
            <div className="bg-primary-700 rounded-lg p-6">
              <h3 className="font-bold text-lg mb-2 text-white">One Call for All Your Needs</h3>
              <p className="text-white">
                Whether you need handyman work, cleaning, junk removal, or something else—we handle everything together. No juggling multiple vendors.
              </p>
            </div>

            <div className="bg-primary-700 rounded-lg p-6">
              <h3 className="font-bold text-lg mb-2 text-white">Fast Turnaround</h3>
              <p className="text-white">
                Same-day and next-day availability. Call before 10 AM for same-day service or book your preferred time in advance.
              </p>
            </div>

            <div className="bg-primary-700 rounded-lg p-6">
              <h3 className="font-bold text-lg mb-2 text-white">Transparent Pricing</h3>
              <p className="text-white">
                No hidden fees. No surprises. We quote upfront and work within budget. Most jobs are $89/hour with material costs clearly outlined.
              </p>
            </div>

            <div className="bg-primary-700 rounded-lg p-6">
              <h3 className="font-bold text-lg mb-2 text-white">Professional & Insured</h3>
              <p className="text-white">
                Every team member is background-checked and fully insured. We treat your property like it's our own.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="section bg-primary-800">
        <div className="section-container max-w-2xl">
          <h2 className="text-3xl font-bold mb-8 text-center text-white">Handyman Pricing</h2>

          <div className="bg-primary-700 rounded-lg p-8 text-center">
            <p className="text-lg text-white mb-2">Standard Rate</p>
            <p className="text-5xl font-bold text-accent-400 mb-4">$89/hour</p>
            <p className="text-white mb-6">
              Material costs and project minimums apply. Most handyman projects complete in 1-3 hours.
            </p>
            <p className="text-sm text-white">
              Travel may apply for locations outside primary service area. Ask about our 2-hour minimum for projects under 2 hours.
            </p>
          </div>

          <div className="mt-8 bg-primary-700 rounded-lg p-6 text-white">
            <h3 className="font-bold text-lg mb-3">Money-Saving Combos</h3>
            <p className="mb-4">
              Combine handyman work with our other services for bundle discounts:
            </p>
            <ul className="space-y-2 text-sm">
              <li>Handyman Prep + Move-In Cleaning</li>
              <li>Rental Prep + Deep Cleaning</li>
              <li>Repairs + Junk Removal</li>
            </ul>
            <p className="text-xs mt-4 text-white">Ask about bundled pricing when you get your quote.</p>
          </div>
        </div>
      </section>

      {/* Perfect For */}
      <section className="section">
        <div className="section-container max-w-3xl">
          <h2 className="text-3xl font-bold mb-8 text-center">Who Uses Our Handyman Service</h2>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="border-l-4 border-accent-500 pl-6">
              <h3 className="font-bold text-lg mb-2 text-white">Landlords & Property Managers</h3>
              <p className="text-white">
                Tenant turnovers, routine maintenance, rental inspections prep. Everything done right and on time.
              </p>
            </div>

            <div className="border-l-4 border-accent-500 pl-6">
              <h3 className="font-bold text-lg mb-2 text-white">Home Sellers</h3>
              <p className="text-white">
                Get your home showroom-ready. Drywall touch-ups, paint, fixture updates—everything buyers notice.
              </p>
            </div>

            <div className="border-l-4 border-accent-500 pl-6">
              <h3 className="font-bold text-lg mb-2 text-white">Move-In Prep</h3>
              <p className="text-white">
                New apartment or house needs adjustments? We install, repair, and adjust everything on move-in day.
              </p>
            </div>

            <div className="border-l-4 border-accent-500 pl-6">
              <h3 className="font-bold text-lg mb-2 text-white">Business Owners</h3>
              <p className="text-white">
                Office repairs, retail fixture installation, commercial space updates. Available before and after hours.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Booking */}
      <section className="section">
        <div className="section-container max-w-3xl">
          <h2 className="text-3xl font-bold mb-8 text-center">How to Book Your Handyman</h2>

          <div className="space-y-6">
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-12 h-12 bg-accent-500 rounded-full flex items-center justify-center text-primary-900 font-bold">1</div>
              <div>
                <h3 className="font-bold text-lg mb-2 text-white">Tell Us About Your Project</h3>
                <p className="text-white">
                  Call (214) 817-9212 or fill out our quote form. Describe what you need done and when.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0 w-12 h-12 bg-accent-500 rounded-full flex items-center justify-center text-primary-900 font-bold">2</div>
              <div>
                <h3 className="font-bold text-lg mb-2 text-white">Get Your Quote</h3>
                <p className="text-white">
                  We'll provide labor rate, estimate hours needed, and material costs. No obligation or surprises.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0 w-12 h-12 bg-accent-500 rounded-full flex items-center justify-center text-primary-900 font-bold">3</div>
              <div>
                <h3 className="font-bold text-lg mb-2 text-white">Schedule Your Service</h3>
                <p className="text-white">
                  Choose same-day (before 10 AM), next-day, or a future date that works for you.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0 w-12 h-12 bg-accent-500 rounded-full flex items-center justify-center text-primary-900 font-bold">4</div>
              <div>
                <h3 className="font-bold text-lg mb-2 text-white">We Complete Your Project</h3>
                <p className="text-white">
                  Our pro team arrives fully equipped, completes the work, cleans up, and gets it done right the first time.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section bg-gradient-to-r from-primary-600 to-primary-700 text-white">
        <div className="section-container text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Get It Fixed?
          </h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            Same-day and next-day availability. Professional, background-checked team. One call for handyman work and more.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/quote" className="btn bg-accent-500 text-primary-900 hover:bg-accent-400 font-bold btn-primary-lg">
              Get Handyman Quote
            </Link>
            <a
              href="tel:2148179212"
              className="btn bg-white text-primary-900 hover:bg-gray-200 font-bold btn-primary-lg"
            >
              Call (214) 817-9212
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
