import Link from "next/link";

export default function VacationRentalCleaningPage() {
  return (
    <div>
      {/* Hero */}
      <section className="bg-primary-600 text-white py-16">
        <div className="section-container">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Vacation Rental Cleaning</h1>
          <p className="text-lg text-white">
            Turnover cleaning between guests. Fast, thorough, and ready for your next booking. Starting at $149.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="section">
        <div className="section-container max-w-3xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Turnover Cleaning for Vacation Rentals</h2>
          <p className="text-lg text-white mb-8">
            Your rental property is only as good as the guest experience. That's why we offer professional turnover cleaning specifically designed for vacation rental properties. Between guests, your space is cleaned to hospitality standards—sanitized, refreshed, and ready for the next reservation.
          </p>
        </div>
      </section>

      {/* What's Included */}
      <section className="section bg-primary-50">
        <div className="section-container max-w-3xl">
          <h2 className="text-3xl font-bold mb-12 text-center text-white">What's Included in Turnover Cleaning</h2>

          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="font-bold text-lg mb-4 text-white">All Rooms</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <span className="text-accent-400 flex-shrink-0 mt-1">✓</span>
                  <span className="text-white">Dust all surfaces & furniture</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-accent-400 flex-shrink-0 mt-1">✓</span>
                  <span className="text-white">Vacuum all carpets & rugs</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-accent-400 flex-shrink-0 mt-1">✓</span>
                  <span className="text-white">Mop hard floors</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-accent-400 flex-shrink-0 mt-1">✓</span>
                  <span className="text-white">Wipe down light switches & handles</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-accent-400 flex-shrink-0 mt-1">✓</span>
                  <span className="text-white">Clean windows & glass doors</span>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-bold text-lg mb-4 text-white">Kitchen & Bathrooms</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <span className="text-accent-400 flex-shrink-0 mt-1">✓</span>
                  <span className="text-white">Clean & sanitize all appliances</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-accent-400 flex-shrink-0 mt-1">✓</span>
                  <span className="text-white">Scrub sinks & countertops</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-accent-400 flex-shrink-0 mt-1">✓</span>
                  <span className="text-white">Clean toilet, tub & shower</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-accent-400 flex-shrink-0 mt-1">✓</span>
                  <span className="text-white">Sanitize door handles & railings</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-accent-400 flex-shrink-0 mt-1">✓</span>
                  <span className="text-white">Restock supplies & amenities</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Cleaning Options */}
      <section className="section">
        <div className="section-container">
          <h2 className="text-3xl font-bold mb-12 text-center">Flexible Cleaning Options</h2>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="border border-accent-500 rounded-lg p-6 bg-primary-50">
              <h3 className="font-bold text-lg text-white mb-4">Standard Turnover</h3>
              <p className="text-accent-300 text-lg font-bold mb-4">From $149</p>
              <p className="text-white text-sm mb-4">
                Quick but thorough cleaning between guests. Ideal for properties with shorter guest stays.
              </p>
              <ul className="space-y-2 text-white text-sm">
                <li className="flex items-start gap-2">
                  <span className="text-accent-400">✓</span>
                  <span>2-3 hour service window</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent-400">✓</span>
                  <span>All rooms cleaned & sanitized</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent-400">✓</span>
                  <span>Ready for next guest</span>
                </li>
              </ul>
            </div>

            <div className="border-2 border-accent-500 rounded-lg p-6 bg-primary-50">
              <div className="bg-accent-500 text-primary-900 font-bold px-3 py-1 rounded text-sm inline-block mb-4">MOST POPULAR</div>
              <h3 className="font-bold text-lg text-white mb-4">Deep Turnover</h3>
              <p className="text-accent-300 text-lg font-bold mb-4">From $249</p>
              <p className="text-white text-sm mb-4">
                Comprehensive cleaning including baseboards, inside cabinets, and appliance interiors.
              </p>
              <ul className="space-y-2 text-white text-sm">
                <li className="flex items-start gap-2">
                  <span className="text-accent-400">✓</span>
                  <span>3-4 hour service window</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent-400">✓</span>
                  <span>Deep clean all areas</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent-400">✓</span>
                  <span>Baseboards & appliances included</span>
                </li>
              </ul>
            </div>

            <div className="border border-accent-500 rounded-lg p-6 bg-primary-50">
              <h3 className="font-bold text-lg text-white mb-4">Express Turnover</h3>
              <p className="text-accent-300 text-lg font-bold mb-4">From $99</p>
              <p className="text-white text-sm mb-4">
                Fast refresh cleaning for same-day turnovers or quick cleanups between guests.
              </p>
              <ul className="space-y-2 text-white text-sm">
                <li className="flex items-start gap-2">
                  <span className="text-accent-400">✓</span>
                  <span>1-2 hour service window</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent-400">✓</span>
                  <span>Essential areas cleaned</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent-400">✓</span>
                  <span>Same-day availability</span>
                </li>
              </ul>
            </div>

            <div className="border border-accent-500 rounded-lg p-6 bg-primary-50">
              <h3 className="font-bold text-lg text-white mb-4">Recurring Discount</h3>
              <p className="text-accent-300 text-lg font-bold mb-4">Savings Up to 20%</p>
              <p className="text-white text-sm mb-4">
                Regular turnover cleanings scheduled weekly, bi-weekly, or monthly? We offer package rates.
              </p>
              <ul className="space-y-2 text-white text-sm">
                <li className="flex items-start gap-2">
                  <span className="text-accent-400">✓</span>
                  <span>Automatic scheduling</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent-400">✓</span>
                  <span>Predictable costs</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent-400">✓</span>
                  <span>Priority availability</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose */}
      <section className="section">
        <div className="section-container max-w-3xl">
          <h2 className="text-3xl font-bold mb-8 text-center">Why Vacation Rental Owners Choose UFC</h2>

          <div className="space-y-6">
            <div className="border-l-4 border-accent-500 pl-6">
              <h3 className="font-bold text-lg mb-2 text-white">Hospitality-Grade Cleaning</h3>
              <p className="text-white">
                We understand vacation rental standards. Every cleaning is thorough, sanitized, and guest-ready. High ratings depend on it.
              </p>
            </div>

            <div className="border-l-4 border-accent-500 pl-6">
              <h3 className="font-bold text-lg mb-2 text-white">Fast Turnaround</h3>
              <p className="text-white">
                Same-day availability for last-minute bookings. Express cleanings get your property ready in 1-2 hours.
              </p>
            </div>

            <div className="border-l-4 border-accent-500 pl-6">
              <h3 className="font-bold text-lg mb-2 text-white">Flexible Scheduling</h3>
              <p className="text-white">
                Recurring cleanings, ad-hoc bookings, or seasonal contracts. We adapt to your booking calendar.
              </p>
            </div>

            <div className="border-l-4 border-accent-500 pl-6">
              <h3 className="font-bold text-lg mb-2 text-white">Fully Insured & Reliable</h3>
              <p className="text-white">
                $2M liability insurance. Background-checked team. Professional, respectful, and punctual every time.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Property Size */}
      <section className="section bg-primary-700">
        <div className="section-container max-w-2xl">
          <h2 className="text-3xl font-bold mb-8 text-center text-white">Pricing by Property Size</h2>

          <div className="space-y-4">
            <div className="bg-primary-600 rounded-lg p-4 text-white">
              <div className="flex justify-between items-center">
                <span className="font-bold">Studio/1-Bedroom</span>
                <span className="text-accent-300 font-bold">From $99-$149</span>
              </div>
            </div>

            <div className="bg-primary-600 rounded-lg p-4 text-white">
              <div className="flex justify-between items-center">
                <span className="font-bold">2-Bedroom</span>
                <span className="text-accent-300 font-bold">From $149-$199</span>
              </div>
            </div>

            <div className="bg-primary-600 rounded-lg p-4 text-white">
              <div className="flex justify-between items-center">
                <span className="font-bold">3-Bedroom</span>
                <span className="text-accent-300 font-bold">From $199-$279</span>
              </div>
            </div>

            <div className="bg-primary-600 rounded-lg p-4 text-white">
              <div className="flex justify-between items-center">
                <span className="font-bold">4+ Bedroom</span>
                <span className="text-accent-300 font-bold">Custom Quote</span>
              </div>
            </div>
          </div>

          <p className="text-white text-sm mt-6 text-center">
            Prices vary based on property condition, amenities, and cleaning depth selected.
          </p>
        </div>
      </section>

      {/* Guest Experience */}
      <section className="section">
        <div className="section-container max-w-3xl">
          <h2 className="text-3xl font-bold mb-8 text-center">Better Guest Reviews Start Here</h2>

          <p className="text-lg text-white mb-8 text-center">
            A clean rental property directly impacts your guest reviews and repeat bookings. Our turnover cleaning ensures every guest arrives to a spotless, sanitized, and welcoming space.
          </p>

          <div className="space-y-6">
            <div className="bg-primary-700 rounded-lg p-6">
              <h3 className="font-bold text-lg mb-2 text-white">5-Star Cleanliness Standards</h3>
              <p className="text-white">
                We know what guests expect. Every surface is sanitized, every floor is spotless, and every detail is guest-ready.
              </p>
            </div>

            <div className="bg-primary-700 rounded-lg p-6">
              <h3 className="font-bold text-lg mb-2 text-white">Reduce Cancellations</h3>
              <p className="text-white">
                Last-minute guest cancellations? We offer same-day cancellation turnover to minimize your revenue loss.
              </p>
            </div>

            <div className="bg-primary-700 rounded-lg p-6">
              <h3 className="font-bold text-lg mb-2 text-white">Amenity Restocking</h3>
              <p className="text-white">
                We'll restock basics like toiletries, towels, and supplies to match your guest expectations.
              </p>
            </div>

            <div className="bg-primary-700 rounded-lg p-6">
              <h3 className="font-bold text-lg mb-2 text-white">Damage Documentation</h3>
              <p className="text-white">
                We report any damage or maintenance issues discovered during cleaning so you can address them immediately.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Booking */}
      <section className="section">
        <div className="section-container max-w-3xl">
          <h2 className="text-3xl font-bold mb-8 text-center">How to Schedule Your Turnover Cleaning</h2>

          <div className="space-y-6">
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-12 h-12 bg-accent-500 rounded-full flex items-center justify-center text-primary-900 font-bold">1</div>
              <div>
                <h3 className="font-bold text-lg mb-2 text-white">Tell Us Your Booking Schedule</h3>
                <p className="text-white">
                  Share your guest turnover schedule, property size, and any special cleaning requests.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0 w-12 h-12 bg-accent-500 rounded-full flex items-center justify-center text-primary-900 font-bold">2</div>
              <div>
                <h3 className="font-bold text-lg mb-2 text-white">Get Your Pricing</h3>
                <p className="text-white">
                  We'll quote per-cleaning rates and offer discounts for recurring turnover contracts.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0 w-12 h-12 bg-accent-500 rounded-full flex items-center justify-center text-primary-900 font-bold">3</div>
              <div>
                <h3 className="font-bold text-lg mb-2 text-white">Set Up Recurring or Ad-Hoc Service</h3>
                <p className="text-white">
                  Regular cleanings or just as-needed? We accommodate both. Book online or call before each turnover.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0 w-12 h-12 bg-accent-500 rounded-full flex items-center justify-center text-primary-900 font-bold">4</div>
              <div>
                <h3 className="font-bold text-lg mb-2 text-white">Your Property is Guest-Ready</h3>
                <p className="text-white">
                  We finish on time, every time. Your property is clean, sanitized, and ready for your next guest.
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
            Keep Your Rental Pristine
          </h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            Vacation rental cleaning that keeps guests happy and bookings frequent. Same-day availability. Hospitality-grade service.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/quote" className="btn bg-accent-500 text-primary-900 hover:bg-accent-400 font-bold btn-primary-lg">
              Schedule Turnover Cleaning
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
