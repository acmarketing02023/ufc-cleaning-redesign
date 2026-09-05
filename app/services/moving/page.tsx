import Link from "next/link";

export default function MovingPage() {
  return (
    <div>
      {/* Hero */}
      <section className="bg-primary-600 text-white py-16">
        <div className="section-container">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Moving Services</h1>
          <p className="text-lg text-white">
            Local DFW moves with move + clean bundle options. Move out, move in, and deep clean in one call. Starting at $299.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="section">
        <div className="section-container max-w-3xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Complete Moving Solutions</h2>
          <p className="text-lg text-white mb-8">
            Moving is stressful enough. That's why UFC Cleaning offers local moving services combined with our professional cleaning to make your transition smooth. Whether you're moving your home or business within DFW, we handle the heavy lifting and leave everything spotless.
          </p>
        </div>
      </section>

      {/* What We Offer */}
      <section className="section bg-primary-50">
        <div className="section-container max-w-3xl">
          <h2 className="text-3xl font-bold mb-12 text-center text-white">Our Moving Services</h2>

          <div className="space-y-6">
            <div className="bg-primary-100 rounded-lg p-6">
              <h3 className="font-bold text-lg mb-2 text-white">Move-Out Cleaning</h3>
              <p className="text-white">
                After you've moved your items, we'll deep clean the entire property. Perfect for returning security deposits or preparing for new tenants.
              </p>
            </div>

            <div className="bg-primary-100 rounded-lg p-6">
              <h3 className="font-bold text-lg mb-2 text-white">Move-In Cleaning</h3>
              <p className="text-white">
                Your new place should be spotless before you unpack. We clean everything top to bottom so you can settle in immediately.
              </p>
            </div>

            <div className="bg-primary-100 rounded-lg p-6">
              <h3 className="font-bold text-lg mb-2 text-white">Move + Clean Bundles</h3>
              <p className="text-white">
                Combine local moving help with move-in cleaning. Save time and money with our bundled packages designed for seamless transitions.
              </p>
            </div>

            <div className="bg-primary-100 rounded-lg p-6">
              <h3 className="font-bold text-lg mb-2 text-white">Junk Removal During Move</h3>
              <p className="text-white">
                Downsizing? We haul away furniture, boxes, and items you don't need during your move. One call handles everything.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Bundle Packages */}
      <section className="section">
        <div className="section-container">
          <h2 className="text-3xl font-bold mb-12 text-center">Popular Move + Clean Packages</h2>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="border border-accent-500 rounded-lg p-6 bg-primary-50">
              <h3 className="font-bold text-lg text-white mb-4">Apartment Move</h3>
              <p className="text-accent-300 text-lg font-bold mb-4">From $399</p>
              <ul className="space-y-2 mb-6 text-white text-sm">
                <li className="flex items-start gap-2">
                  <span className="text-accent-400">✓</span>
                  <span>Local moving assistance</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent-400">✓</span>
                  <span>Move-in cleaning included</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent-400">✓</span>
                  <span>Kitchen & bathrooms deep cleaned</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent-400">✓</span>
                  <span>Flooring swept & mopped</span>
                </li>
              </ul>
              <Link href="/quote" className="btn bg-accent-500 text-primary-900 hover:bg-accent-400 font-bold w-full text-center">
                Quote Now
              </Link>
            </div>

            <div className="border-2 border-accent-500 rounded-lg p-6 bg-primary-50">
              <div className="bg-accent-500 text-primary-900 font-bold px-3 py-1 rounded text-sm inline-block mb-4">MOST POPULAR</div>
              <h3 className="font-bold text-lg text-white mb-4">House Move</h3>
              <p className="text-accent-300 text-lg font-bold mb-4">From $699</p>
              <ul className="space-y-2 mb-6 text-white text-sm">
                <li className="flex items-start gap-2">
                  <span className="text-accent-400">✓</span>
                  <span>Full house moving assistance</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent-400">✓</span>
                  <span>Complete move-in deep clean</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent-400">✓</span>
                  <span>All rooms & appliances cleaned</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent-400">✓</span>
                  <span>Windows & baseboards included</span>
                </li>
              </ul>
              <Link href="/quote" className="btn bg-accent-500 text-primary-900 hover:bg-accent-400 font-bold w-full text-center">
                Quote Now
              </Link>
            </div>

            <div className="border border-accent-500 rounded-lg p-6 bg-primary-50">
              <h3 className="font-bold text-lg text-white mb-4">Downsize + Clear</h3>
              <p className="text-accent-300 text-lg font-bold mb-4">From $799</p>
              <ul className="space-y-2 mb-6 text-white text-sm">
                <li className="flex items-start gap-2">
                  <span className="text-accent-400">✓</span>
                  <span>Moving + junk removal</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent-400">✓</span>
                  <span>Haul unwanted items</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent-400">✓</span>
                  <span>Old place move-out cleaned</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent-400">✓</span>
                  <span>New place move-in ready</span>
                </li>
              </ul>
              <Link href="/quote" className="btn bg-accent-500 text-primary-900 hover:bg-accent-400 font-bold w-full text-center">
                Quote Now
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose */}
      <section className="section">
        <div className="section-container max-w-3xl">
          <h2 className="text-3xl font-bold mb-8 text-center">Why Choose UFC for Your Move</h2>

          <div className="space-y-6">
            <div className="border-l-4 border-accent-500 pl-6">
              <h3 className="font-bold text-lg mb-2 text-white">One Team for Everything</h3>
              <p className="text-white">
                No need to call multiple vendors. One team handles moving, cleaning, junk removal, and more. Simple, efficient, streamlined.
              </p>
            </div>

            <div className="border-l-4 border-accent-500 pl-6">
              <h3 className="font-bold text-lg mb-2 text-white">Save Time & Money</h3>
              <p className="text-white">
                Our bundled packages cost less than hiring separate moving and cleaning companies. Move and clean on the same day.
              </p>
            </div>

            <div className="border-l-4 border-accent-500 pl-6">
              <h3 className="font-bold text-lg mb-2 text-white">Professional & Insured</h3>
              <p className="text-white">
                Background-checked team with $2M liability insurance. Your belongings and new space are in safe, professional hands.
              </p>
            </div>

            <div className="border-l-4 border-accent-500 pl-6">
              <h3 className="font-bold text-lg mb-2 text-white">Fast & Reliable</h3>
              <p className="text-white">
                Same-day and next-day availability. We show up on time, work efficiently, and complete the job right. No surprises.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Service Area */}
      <section className="section bg-primary-700">
        <div className="section-container max-w-2xl text-center">
          <h2 className="text-3xl font-bold mb-6 text-white">Local Moves Throughout DFW</h2>
          <p className="text-lg text-white mb-6">
            We handle moves within the Dallas-Fort Worth metroplex. Whether it's across town, to a different neighborhood, or relocating your business—we've got you covered.
          </p>
          <div className="bg-primary-800 rounded-lg p-6">
            <p className="text-white mb-3">
              <span className="font-bold">Primary Service Area:</span> Rowlett, Garland, Wylie, Sachse, Murphy, Rockwall
            </p>
            <p className="text-white">
              <span className="font-bold">Extended Coverage:</span> Dallas, Plano, Fort Worth, Arlington, Irving, and surrounding cities
            </p>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="section">
        <div className="section-container max-w-3xl">
          <h2 className="text-3xl font-bold mb-8 text-center">How Our Moving Service Works</h2>

          <div className="space-y-6">
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-12 h-12 bg-accent-500 rounded-full flex items-center justify-center text-primary-900 font-bold">1</div>
              <div>
                <h3 className="font-bold text-lg mb-2 text-white">Tell Us Your Move Details</h3>
                <p className="text-white">
                  Describe what you're moving, where you're moving from and to, and if you need cleaning, junk removal, or other services.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0 w-12 h-12 bg-accent-500 rounded-full flex items-center justify-center text-primary-900 font-bold">2</div>
              <div>
                <h3 className="font-bold text-lg mb-2 text-white">Get Your Custom Quote</h3>
                <p className="text-white">
                  We'll estimate hours needed, quote the labor rate, and bundle services for maximum savings.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0 w-12 h-12 bg-accent-500 rounded-full flex items-center justify-center text-primary-900 font-bold">3</div>
              <div>
                <h3 className="font-bold text-lg mb-2 text-white">Schedule Move Day</h3>
                <p className="text-white">
                  Choose your moving date. Our team arrives on time, ready to work efficiently and professionally.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0 w-12 h-12 bg-accent-500 rounded-full flex items-center justify-center text-primary-900 font-bold">4</div>
              <div>
                <h3 className="font-bold text-lg mb-2 text-white">Move, Clean & Go</h3>
                <p className="text-white">
                  We handle the move, clean both locations (if included), haul junk if needed, and finish with everything ready for you.
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
            Ready for a Stress-Free Move?
          </h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            Get a custom quote for your move. Bundle services and save. Local DFW moves with professional moving and cleaning.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/quote" className="btn bg-accent-500 text-primary-900 hover:bg-accent-400 font-bold btn-primary-lg">
              Get Moving Quote
            </Link>
            <a
              href="tel:+14699297722"
              className="btn bg-white text-primary-900 hover:bg-gray-200 font-bold btn-primary-lg"
            >
              Call (469) 929-7722
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
