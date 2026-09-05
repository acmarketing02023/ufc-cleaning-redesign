import Link from "next/link";

export default function DemolitionDallasPage() {
  return (
    <div>
      <section className="bg-primary-600 text-white py-20">
        <div className="section-container">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Commercial Demolition in Dallas</h1>
          <p className="text-lg text-white mb-6">Fast, reliable demolition services for Dallas. Complete projects in under 2 weeks.</p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link href="/quote" className="btn bg-accent-500 text-primary-900 hover:bg-accent-400 font-bold btn-primary-lg">Get Your Free Quote</Link>
            <a href="tel:2148179212" className="btn bg-primary-700 text-white hover:bg-primary-800 btn-primary-lg flex items-center justify-center gap-2"><span>📞</span> (214) 817-9212</a>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="section-container">
          <div className="max-w-3xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Serving Dallas with Professional Demolition Services</h2>
            <p className="text-lg text-white mb-6 leading-relaxed">Dallas is a thriving market with constant renovation, development, and property transitions. Whether you're a contractor, developer, or property manager, we provide fast, reliable demolition services that keep your project on schedule.</p>
            <p className="text-lg text-white mb-6 leading-relaxed">We're based nearby in Rowlett and serve all of Dallas with the same commitment to speed and quality. From house teardowns to commercial demolition to selective interior work, we handle every type of project.</p>
            <div className="grid md:grid-cols-2 gap-8 mt-12">
              <div className="bg-primary-800 border border-accent-500 rounded-lg p-6">
                <h3 className="text-xl font-bold mb-4 text-white">Our Commitment</h3>
                <ul className="space-y-2 text-white">
                  <li>✓ Complete projects in <2 weeks</li>
                  <li>✓ Own all equipment - no delays</li>
                  <li>✓ Professional, background-checked teams</li>
                  <li>✓ $2M liability insurance</li>
                  <li>✓ Same-day service available</li>
                </ul>
              </div>
              <div className="bg-primary-800 border border-accent-500 rounded-lg p-6">
                <h3 className="text-xl font-bold mb-4 text-white">Serving Dallas</h3>
                <p className="text-white mb-4">Quick response times throughout Dallas and surrounding areas.</p>
                <p className="text-white mb-4">Headquartered in Rowlett, serving 60-mile radius including all Dallas neighborhoods.</p>
                <p className="text-sm text-accent-400">Call before 10 AM for same-day service</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section bg-primary-800">
        <div className="section-container">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Demolition Services in Dallas</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-primary-700 rounded-lg p-6 border border-accent-500">
              <h3 className="text-xl font-bold mb-4 text-white">House Demolition</h3>
              <p className="text-white mb-4">Complete residential teardowns from foundation to lot clearance. Typical range: $15,000-$40,000+</p>
              <p className="text-sm text-accent-400">Completed in 10-14 days</p>
            </div>
            <div className="bg-primary-700 rounded-lg p-6 border border-accent-500">
              <h3 className="text-xl font-bold mb-4 text-white">Commercial Demolition</h3>
              <p className="text-white mb-4">Commercial buildings and warehouses. Selective interior work. Custom quotes based on scope.</p>
              <p className="text-sm text-accent-400">Completed in <2 weeks</p>
            </div>
            <div className="bg-primary-700 rounded-lg p-6 border border-accent-500">
              <h3 className="text-xl font-bold mb-4 text-white">Selective Interior</h3>
              <p className="text-white mb-4">Tile removal, brick walls, fixtures, remodeling prep. Typical range: $1,000-$10,000</p>
              <p className="text-sm text-accent-400">Completed in 3-7 days</p>
            </div>
          </div>
          <div className="mt-12 text-center">
            <Link href="/services/commercial-demolition" className="text-accent-400 font-bold text-lg hover:text-accent-300">View Full Commercial Demolition Services →</Link>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="section-container">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center">Serving Dallas & Surrounding Areas</h2>
          <p className="text-lg text-white text-center mb-8 max-w-2xl mx-auto">60-mile service radius includes: Rowlett, Garland, Plano, Fort Worth, Arlington, Rockwall, and more.</p>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4 max-w-4xl mx-auto">
            <Link href="/services/demolition-rowlett" className="bg-primary-700 border border-accent-500 rounded-lg p-4 text-center hover:bg-primary-600 transition text-white font-semibold">Rowlett</Link>
            <div className="bg-primary-700 border border-accent-500 rounded-lg p-4 text-center text-white font-semibold">Dallas</div>
            <Link href="/services/demolition-garland" className="bg-primary-700 border border-accent-500 rounded-lg p-4 text-center hover:bg-primary-600 transition text-white font-semibold">Garland</Link>
            <Link href="/services/demolition-plano" className="bg-primary-700 border border-accent-500 rounded-lg p-4 text-center hover:bg-primary-600 transition text-white font-semibold">Plano</Link>
            <Link href="/services/demolition-fort-worth" className="bg-primary-700 border border-accent-500 rounded-lg p-4 text-center hover:bg-primary-600 transition text-white font-semibold">Fort Worth</Link>
          </div>
        </div>
      </section>

      <section className="section bg-gradient-to-r from-accent-500 to-accent-600 text-white">
        <div className="section-container text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Need Demolition in Dallas?</h2>
          <p className="text-lg text-white mb-8 max-w-2xl mx-auto">Get a free quote today. Serving Dallas and surrounding areas with same-day service available.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/quote" className="btn bg-white text-accent-600 hover:bg-gray-100 font-bold btn-primary-lg">Get a Free Quote</Link>
            <a href="tel:2148179212" className="btn bg-accent-700 text-white hover:bg-accent-800 btn-primary-lg flex items-center justify-center gap-2"><span>📞</span> Call (214) 817-9212</a>
          </div>
        </div>
      </section>
    </div>
  );
}
