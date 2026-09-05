import Link from "next/link";

export default function RealEstateAgentsPage() {
  return (
    <div>
      {/* Hero */}
      <section className="bg-primary-600 text-white py-16">
        <div className="section-container">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Real Estate Agent Services</h1>
          <p className="text-lg text-white">
            Professional cleaning and property preparation services for real estate agents. Showcase homes in pristine condition to close more deals faster.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="section">
        <div className="section-container max-w-3xl">
          <h2 className="text-3xl font-bold mb-6">Sell Properties Faster with Professional Cleaning</h2>

          <p className="text-lg text-white mb-8">
            First impressions matter in real estate. UFC Cleaning provides comprehensive property cleaning and preparation services that showcase homes and buildings in their best light, helping you attract buyers and close deals faster.
          </p>

          <h3 className="text-2xl font-bold mb-4">Services for Real Estate Professionals</h3>
          <div className="grid md:grid-cols-2 gap-4 mb-12">
            <div className="border-l-4 border-accent-500 pl-4">
              <p className="font-semibold mb-2">Pre-Listing Cleaning</p>
              <p className="text-sm text-white">Deep clean vacant or occupied properties before listing</p>
            </div>
            <div className="border-l-4 border-accent-500 pl-4">
              <p className="font-semibold mb-2">Home Staging Preparation</p>
              <p className="text-sm text-white">Perfect cleaning to complement professional staging</p>
            </div>
            <div className="border-l-4 border-accent-500 pl-4">
              <p className="font-semibold mb-2">Post-Inspection Cleanup</p>
              <p className="text-sm text-white">Clean after inspections to maintain property presentation</p>
            </div>
            <div className="border-l-4 border-accent-500 pl-4">
              <p className="font-semibold mb-2">Closing Day Service</p>
              <p className="text-sm text-white">Final polish before handoff to new owners</p>
            </div>
            <div className="border-l-4 border-accent-500 pl-4">
              <p className="font-semibold mb-2">Commercial Property Cleaning</p>
              <p className="text-sm text-white">Professional office, retail, and warehouse preparation</p>
            </div>
            <div className="border-l-4 border-accent-500 pl-4">
              <p className="font-semibold mb-2">Quick Turnarounds</p>
              <p className="text-sm text-white">Same-day service for urgent cleaning needs</p>
            </div>
          </div>

          <h3 className="text-2xl font-bold mb-4">Why Real Estate Agents Partner with UFC</h3>
          <ul className="space-y-4 mb-12">
            <li className="flex gap-4">
              <span className="text-2xl flex-shrink-0">✓</span>
              <div>
                <p className="font-semibold">Fast Turnaround</p>
                <p className="text-white text-sm">Same-day and next-day service available</p>
              </div>
            </li>
            <li className="flex gap-4">
              <span className="text-2xl flex-shrink-0">✓</span>
              <div>
                <p className="font-semibold">Professional Results</p>
                <p className="text-white text-sm">Properties shine for showings and open houses</p>
              </div>
            </li>
            <li className="flex gap-4">
              <span className="text-2xl flex-shrink-0">✓</span>
              <div>
                <p className="font-semibold">Reliable & Consistent</p>
                <p className="text-white text-sm">Experience with multiple property types and conditions</p>
              </div>
            </li>
            <li className="flex gap-4">
              <span className="text-2xl flex-shrink-0">✓</span>
              <div>
                <p className="font-semibold">Fully Insured</p>
                <p className="text-white text-sm">$2M liability insurance for your protection</p>
              </div>
            </li>
            <li className="flex gap-4">
              <span className="text-2xl flex-shrink-0">✓</span>
              <div>
                <p className="font-semibold">Agent Referral Program</p>
                <p className="text-white text-sm">Special pricing and ongoing partnership opportunities</p>
              </div>
            </li>
          </ul>

          <div className="bg-primary-50 rounded-lg p-8 border border-accent-500">
            <h3 className="font-bold text-lg mb-4 text-white">Service Area</h3>
            <p className="text-white mb-4">
              We serve real estate agents and brokers throughout the Dallas-Fort Worth metroplex including Rowlett, Dallas, Plano, Arlington, Fort Worth, Frisco, McKinney, and all surrounding areas.
            </p>
            <a href="tel:2148179212" className="text-accent-300 font-semibold hover:text-accent-200">
              Call (214) 817-9212 for details
            </a>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="section">
        <div className="section-container max-w-3xl">
          <h2 className="text-3xl font-bold mb-8 text-center">Agent Pricing</h2>
          <div className="bg-primary-50 rounded-lg p-8 border border-accent-500">
            <p className="text-white mb-6">
              Real estate cleaning pricing depends on property size, condition, and scope of service needed.
            </p>

            <div className="mb-6">
              <p className="font-semibold text-white mb-2">Pre-Listing Deep Clean</p>
              <p className="text-2xl font-bold text-accent-300 mb-2">From $250</p>
              <p className="text-sm text-white">Complete property cleaning and preparation</p>
            </div>

            <div className="mb-8">
              <p className="font-semibold text-white mb-2">Commercial Property Cleaning</p>
              <p className="text-2xl font-bold text-accent-300 mb-2">From $150</p>
              <p className="text-sm text-white">Office and retail space preparation</p>
            </div>

            <Link href="/quote?service=real-estate-agents" className="btn btn-primary w-full text-center">
              Request Quote for Listing
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section bg-primary-600 text-white">
        <div className="section-container text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Impress Buyers?
          </h2>
          <p className="text-lg text-white mb-8 max-w-2xl mx-auto">
            Let us handle the cleaning so your properties show their absolute best. Perfect properties close faster.
          </p>

          <Link href="/quote?service=real-estate-agents" className="btn bg-accent-500 text-primary-900 hover:bg-accent-400 font-bold btn-primary-lg inline-block">
            Get an Agent Quote
          </Link>
        </div>
      </section>
    </div>
  );
}
