import Link from "next/link";

export default function CommercialCleaningPage() {
  return (
    <div>
      {/* Hero */}
      <section className="bg-primary-600 text-white py-16">
        <div className="section-container">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Commercial Cleaning</h1>
          <p className="text-lg text-white">
            Professional cleaning for offices, retail, medical facilities, and more. Starting from $120.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="section">
        <div className="section-container max-w-3xl">
          <h2 className="text-3xl font-bold mb-6">Keep Your Business Clean & Professional</h2>

          <p className="text-lg text-white mb-8">
            A clean facility reflects your business standards and keeps your team and customers happy. UFC Cleaning provides flexible, professional commercial cleaning that works around your schedule.
          </p>

          <h3 className="text-2xl font-bold mb-4">Industries We Serve</h3>
          <div className="grid md:grid-cols-2 gap-4 mb-12">
            <div className="flex items-center gap-3">
              <span className="text-2xl">🏢</span>
              <span>Offices & Corporate</span>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-2xl">🛍️</span>
              <span>Retail Spaces</span>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-2xl">🍽️</span>
              <span>Restaurants & Food Service</span>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-2xl">🏥</span>
              <span>Medical Facilities</span>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-2xl">🏗️</span>
              <span>Warehouses & Industrial</span>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-2xl">🏘️</span>
              <span>Property Management</span>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-2xl">🏢</span>
              <span>Apartment Properties</span>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-2xl">👷</span>
              <span>Contractor Cleanup</span>
            </div>
          </div>

          <h3 className="text-2xl font-bold mb-4">Flexible Scheduling</h3>
          <p className="text-white mb-4">
            We understand business schedules. We offer cleaning services:
          </p>
          <ul className="space-y-2 mb-12 text-white">
            <li className="flex items-center gap-3">
              <span className="text-primary-600 font-bold">✓</span> Before business hours
            </li>
            <li className="flex items-center gap-3">
              <span className="text-primary-600 font-bold">✓</span> After business hours
            </li>
            <li className="flex items-center gap-3">
              <span className="text-primary-600 font-bold">✓</span> Weekends & holidays
            </li>
            <li className="flex items-center gap-3">
              <span className="text-primary-600 font-bold">✓</span> Project-based cleanup
            </li>
            <li className="flex items-center gap-3">
              <span className="text-primary-600 font-bold">✓</span> Recurring maintenance
            </li>
          </ul>

          <h3 className="text-2xl font-bold mb-4">Why Choose UFC Commercial?</h3>
          <ul className="space-y-4 mb-12">
            <li className="flex gap-4">
              <span className="text-2xl flex-shrink-0">✓</span>
              <div>
                <p className="font-semibold">$2 Million Insurance</p>
                <p className="text-white text-sm">Fully insured and bonded</p>
              </div>
            </li>
            <li className="flex gap-4">
              <span className="text-2xl flex-shrink-0">✓</span>
              <div>
                <p className="font-semibold">Background-Checked Team</p>
                <p className="text-white text-sm">Professional and trustworthy crew</p>
              </div>
            </li>
            <li className="flex gap-4">
              <span className="text-2xl flex-shrink-0">✓</span>
              <div>
                <p className="font-semibold">Consistent & Reliable</p>
                <p className="text-white text-sm">Same team, same high standards</p>
              </div>
            </li>
            <li className="flex gap-4">
              <span className="text-2xl flex-shrink-0">✓</span>
              <div>
                <p className="font-semibold">Flexible Schedules</p>
                <p className="text-white text-sm">Work around your business hours</p>
              </div>
            </li>
          </ul>

          <div className="bg-primary-50 rounded-lg p-8 border border-accent-500">
            <h3 className="font-bold text-lg mb-4 text-white">What We Clean</h3>
            <ul className="grid md:grid-cols-2 gap-3 text-white text-sm">
              <li>✓ Common areas & lobbies</li>
              <li>✓ Restrooms & facilities</li>
              <li>✓ Offices & workspaces</li>
              <li>✓ Floors & carpets</li>
              <li>✓ Windows & glass</li>
              <li>✓ Break rooms & kitchens</li>
              <li>✓ Entryways & hallways</li>
              <li>✓ High-touch surfaces</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="section">
        <div className="section-container max-w-3xl">
          <h2 className="text-3xl font-bold mb-8 text-center">Pricing</h2>
          <div className="bg-primary-50 rounded-lg p-8 border border-accent-500">
            <p className="text-white mb-6">
              Commercial cleaning pricing depends on facility size, type, frequency, and specific requirements.
            </p>

            <div className="mb-6">
              <p className="font-semibold text-white mb-2">Office Cleaning</p>
              <p className="text-2xl font-bold text-accent-300 mb-2">From $120</p>
              <p className="text-sm text-white">Starting price - varies by facility size</p>
            </div>

            <Link href="/quote?service=commercial-cleaning" className="btn btn-primary w-full text-center">
              Get Commercial Quote
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section bg-primary-600 text-white">
        <div className="section-container text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Let Us Handle Your Cleaning
          </h2>
          <p className="text-lg text-white mb-8 max-w-2xl mx-auto">
            Keep your business clean and professional. Contact us for a free commercial cleaning estimate.
          </p>

          <Link href="/quote?service=commercial-cleaning" className="btn bg-primary-50 text-white700 hover:bg-gray-100 btn-primary-lg inline-block">
            Get Your Quote
          </Link>
        </div>
      </section>
    </div>
  );
}
