import Link from "next/link";

export default function ResidentialCleaningPage() {
  return (
    <div>
      {/* Hero */}
      <section className="bg-primary-600 text-white py-16">
        <div className="section-container">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Residential Cleaning</h1>
          <p className="text-lg text-white">
            Professional home cleaning for busy families. One-time or recurring service starting from $169.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="section">
        <div className="section-container max-w-3xl">
          <h2 className="text-3xl font-bold mb-6">Keep Your Home Spotless</h2>

          <p className="text-lg text-white mb-8">
            Whether you need a weekly refresh, bi-weekly maintenance, or monthly deep clean, UFC Cleaning has flexible plans to keep your home looking its best. Our background-checked team treats your home like their own.
          </p>

          <h3 className="text-2xl font-bold mb-4">What's Included</h3>
          <div className="grid md:grid-cols-2 gap-4 mb-12">
            <div className="border-l-4 border-primary-600 pl-4">
              <p className="font-semibold mb-2">Kitchen</p>
              <ul className="text-sm text-white space-y-1">
                <li>• Counters & sink</li>
                <li>• Stovetop & appliance exteriors</li>
                <li>• Floor mopping</li>
              </ul>
            </div>
            <div className="border-l-4 border-primary-600 pl-4">
              <p className="font-semibold mb-2">Bathrooms</p>
              <ul className="text-sm text-white space-y-1">
                <li>• Fully sanitized</li>
                <li>• Toilets, tubs, showers</li>
                <li>• Mirrors & surfaces</li>
              </ul>
            </div>
            <div className="border-l-4 border-primary-600 pl-4">
              <p className="font-semibold mb-2">Living Areas</p>
              <ul className="text-sm text-white space-y-1">
                <li>• Dusting surfaces & ceiling fans</li>
                <li>• Vacuuming carpets</li>
                <li>• Floor mopping</li>
              </ul>
            </div>
            <div className="border-l-4 border-primary-600 pl-4">
              <p className="font-semibold mb-2">General</p>
              <ul className="text-sm text-white space-y-1">
                <li>• Trash removal</li>
                <li>• General tidying</li>
                <li>• Attention to detail</li>
              </ul>
            </div>
          </div>

          <h3 className="text-2xl font-bold mb-4">Add-On Services</h3>
          <p className="text-white mb-4">
            Customize your clean with optional add-ons:
          </p>
          <ul className="grid md:grid-cols-2 gap-3 mb-12 text-sm">
            <li className="flex items-center gap-2">
              <span className="text-primary-600">✓</span> Interior oven & refrigerator cleaning
            </li>
            <li className="flex items-center gap-2">
              <span className="text-primary-600">✓</span> Inside cabinets and drawers
            </li>
            <li className="flex items-center gap-2">
              <span className="text-primary-600">✓</span> Interior windows
            </li>
            <li className="flex items-center gap-2">
              <span className="text-primary-600">✓</span> Blinds & baseboards
            </li>
            <li className="flex items-center gap-2">
              <span className="text-primary-600">✓</span> Laundry wash-and-fold
            </li>
            <li className="flex items-center gap-2">
              <span className="text-primary-600">✓</span> Light organization
            </li>
            <li className="flex items-center gap-2">
              <span className="text-primary-600">✓</span> Pet-friendly products available
            </li>
          </ul>

          <h3 className="text-2xl font-bold mb-4">Recurring Plan Savings</h3>
          <div className="grid md:grid-cols-3 gap-4 mb-12">
            <div className="bg-primary-50 rounded-lg p-6 text-center border-2 border-accent-500">
              <p className="font-bold text-white text-lg mb-2">Weekly</p>
              <p className="text-2xl font-bold text-accent-300 mb-2">20% OFF</p>
              <p className="text-sm text-white">For busy families</p>
            </div>
            <div className="bg-accent-500 rounded-lg p-6 text-center border-2 border-accent-600">
              <p className="font-bold text-primary-900 text-lg mb-2">Bi-Weekly</p>
              <p className="text-2xl font-bold text-primary-900 mb-2">15% OFF</p>
              <p className="text-sm text-primary-900">Most popular option</p>
            </div>
            <div className="bg-primary-50 rounded-lg p-6 text-center border-2 border-accent-500">
              <p className="font-bold text-white text-lg mb-2">Monthly</p>
              <p className="text-2xl font-bold text-accent-300 mb-2">5% OFF</p>
              <p className="text-sm text-white">For small households</p>
            </div>
          </div>

          <h3 className="text-2xl font-bold mb-4">Why Choose UFC for Residential Cleaning?</h3>
          <ul className="space-y-4 mb-12">
            <li className="flex gap-4">
              <span className="text-2xl flex-shrink-0">✓</span>
              <div>
                <p className="font-semibold">Same Team on Recurring Visits</p>
                <p className="text-white text-sm">Build trust with your cleaning team</p>
              </div>
            </li>
            <li className="flex gap-4">
              <span className="text-2xl flex-shrink-0">✓</span>
              <div>
                <p className="font-semibold">Priority Scheduling</p>
                <p className="text-white text-sm">Lock in your regular day</p>
              </div>
            </li>
            <li className="flex gap-4">
              <span className="text-2xl flex-shrink-0">✓</span>
              <div>
                <p className="font-semibold">Background-Checked Team</p>
                <p className="text-white text-sm">Know exactly who's in your home</p>
              </div>
            </li>
            <li className="flex gap-4">
              <span className="text-2xl flex-shrink-0">✓</span>
              <div>
                <p className="font-semibold">Satisfaction Guarantee</p>
                <p className="text-white text-sm">Not happy? We come back and make it right</p>
              </div>
            </li>
          </ul>

          <div className="bg-primary-50 rounded-lg p-8 border border-accent-500">
            <h3 className="font-bold text-lg mb-4 text-white">Service Area</h3>
            <p className="text-white mb-4">
              We serve all of Dallas-Fort Worth including Rowlett, Dallas, Plano, Garland, Wylie, Frisco, Arlington, and more. Same-day service available with a morning call.
            </p>
            <a href="tel:+14699297722" className="text-accent-300 font-semibold hover:text-accent-200">
              Call (469) 929-7722 for details
            </a>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="section">
        <div className="section-container max-w-3xl">
          <h2 className="text-3xl font-bold mb-8 text-center">Pricing</h2>
          <div className="bg-primary-50 rounded-lg p-8 border border-accent-500">
            <p className="text-white mb-4">
              Pricing depends on home size, number of rooms, and scope of work.
            </p>
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div>
                <p className="font-semibold text-white mb-1">Standard Clean</p>
                <p className="text-2xl font-bold text-accent-300">From $169</p>
                <p className="text-sm text-white">One-time or recurring</p>
              </div>
              <div>
                <p className="font-semibold text-white mb-1">Deep Clean</p>
                <p className="text-2xl font-bold text-accent-300">From $199</p>
                <p className="text-sm text-white">With extra detail work</p>
              </div>
            </div>
            <p className="text-sm text-white mb-6">
              Recurring customers receive 5%-20% off depending on frequency.
            </p>
            <Link href="/quote" className="btn btn-primary">
              Get Your Exact Quote
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section bg-primary-600 text-white">
        <div className="section-container text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Your Home Deserves Better
          </h2>
          <p className="text-lg text-white mb-8 max-w-2xl mx-auto">
            Let us handle the cleaning so you can spend your time on what matters most.
          </p>

          <Link href="/quote" className="btn bg-accent-500 text-primary-900 hover:bg-accent-400 font-bold btn-primary-lg inline-block">
            Schedule Your Clean
          </Link>
        </div>
      </section>
    </div>
  );
}
