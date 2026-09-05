import Link from "next/link";

export default function LandlordServicesPage() {
  return (
    <div>
      {/* Hero */}
      <section className="bg-primary-600 text-white py-16">
        <div className="section-container">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Landlord Services & Property Maintenance</h1>
          <p className="text-lg text-white">
            Professional cleaning and maintenance for multi-unit properties, apartments, and rental homes. Keep your investments clean and tenants happy.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="section">
        <div className="section-container max-w-3xl">
          <h2 className="text-3xl font-bold mb-6">Comprehensive Property Management Services</h2>

          <p className="text-lg text-white mb-8">
            As a landlord or property manager, maintaining clean, well-kept properties is essential for tenant satisfaction, retention, and property value. UFC Cleaning provides reliable, affordable services tailored to rental properties of all sizes.
          </p>

          <h3 className="text-2xl font-bold mb-4">Services We Offer</h3>
          <div className="grid md:grid-cols-2 gap-4 mb-12">
            <div className="border-l-4 border-accent-500 pl-4">
              <p className="font-semibold mb-2">Move-In / Move-Out</p>
              <p className="text-sm text-white">Deep cleaning between tenants to prepare units for new occupants</p>
            </div>
            <div className="border-l-4 border-accent-500 pl-4">
              <p className="font-semibold mb-2">Regular Maintenance</p>
              <p className="text-sm text-white">Recurring cleaning for common areas and shared spaces</p>
            </div>
            <div className="border-l-4 border-accent-500 pl-4">
              <p className="font-semibold mb-2">Common Area Cleaning</p>
              <p className="text-sm text-white">Lobbies, hallways, stairs, parking areas, and courtyard maintenance</p>
            </div>
            <div className="border-l-4 border-accent-500 pl-4">
              <p className="font-semibold mb-2">Turnover Service</p>
              <p className="text-sm text-white">Complete property reset between tenant transitions</p>
            </div>
            <div className="border-l-4 border-accent-500 pl-4">
              <p className="font-semibold mb-2">Exterior Maintenance</p>
              <p className="text-sm text-white">Pressure washing, landscape trimming, and exterior cleaning</p>
            </div>
            <div className="border-l-4 border-accent-500 pl-4">
              <p className="font-semibold mb-2">Emergency Response</p>
              <p className="text-sm text-white">Quick response for urgent cleaning needs and maintenance issues</p>
            </div>
          </div>

          <h3 className="text-2xl font-bold mb-4">Why Landlords Choose UFC</h3>
          <ul className="space-y-4 mb-12">
            <li className="flex gap-4">
              <span className="text-2xl flex-shrink-0">✓</span>
              <div>
                <p className="font-semibold">Reliable & Consistent</p>
                <p className="text-white text-sm">Same team, same high standards every time</p>
              </div>
            </li>
            <li className="flex gap-4">
              <span className="text-2xl flex-shrink-0">✓</span>
              <div>
                <p className="font-semibold">Quick Turnaround</p>
                <p className="text-white text-sm">Minimize vacancy time between tenants</p>
              </div>
            </li>
            <li className="flex gap-4">
              <span className="text-2xl flex-shrink-0">✓</span>
              <div>
                <p className="font-semibold">Fully Insured & Bonded</p>
                <p className="text-white text-sm">$2M liability insurance for complete protection</p>
              </div>
            </li>
            <li className="flex gap-4">
              <span className="text-2xl flex-shrink-0">✓</span>
              <div>
                <p className="font-semibold">Background-Checked Staff</p>
                <p className="text-white text-sm">Professional, trustworthy teams in your properties</p>
              </div>
            </li>
            <li className="flex gap-4">
              <span className="text-2xl flex-shrink-0">✓</span>
              <div>
                <p className="font-semibold">Flexible Scheduling</p>
                <p className="text-white text-sm">Work around tenant schedules and maintenance windows</p>
              </div>
            </li>
          </ul>

          <div className="bg-primary-50 rounded-lg p-8 border border-accent-500">
            <h3 className="font-bold text-lg mb-4 text-white">Service Area</h3>
            <p className="text-white mb-4">
              We serve property managers and landlords throughout the Dallas-Fort Worth area including Rowlett, Dallas, Plano, Arlington, Fort Worth, Frisco, McKinney, and all surrounding communities.
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
          <h2 className="text-3xl font-bold mb-8 text-center">Flexible Pricing Plans</h2>
          <div className="bg-primary-50 rounded-lg p-8 border border-accent-500">
            <p className="text-white mb-6">
              Landlord service pricing is customized based on property size, type, number of units, and frequency of service.
            </p>

            <div className="mb-6">
              <p className="font-semibold text-white mb-2">Move-In / Move-Out Deep Clean</p>
              <p className="text-2xl font-bold text-accent-300 mb-2">From $300</p>
              <p className="text-sm text-white">Complete unit turnover cleaning</p>
            </div>

            <div className="mb-8">
              <p className="font-semibold text-white mb-2">Monthly Maintenance</p>
              <p className="text-2xl font-bold text-accent-300 mb-2">From $150/month</p>
              <p className="text-sm text-white">Recurring common area maintenance</p>
            </div>

            <Link href="/quote?service=landlord-services" className="btn btn-primary w-full text-center">
              Get Custom Quote
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section bg-primary-600 text-white">
        <div className="section-container text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Simplify Property Management
          </h2>
          <p className="text-lg text-white mb-8 max-w-2xl mx-auto">
            Let us handle the cleaning so you can focus on growing your portfolio. Contact us for a free consultation.
          </p>

          <Link href="/quote?service=landlord-services" className="btn bg-accent-500 text-primary-900 hover:bg-accent-400 font-bold btn-primary-lg inline-block">
            Request a Consultation
          </Link>
        </div>
      </section>
    </div>
  );
}
