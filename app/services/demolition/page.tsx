import Link from "next/link";

export default function DemolitionPage() {
  return (
    <div>
      {/* Hero */}
      <section className="bg-primary-600 text-white py-16">
        <div className="section-container">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Demolition Services</h1>
          <p className="text-lg text-white">
            Professional demolition for residential, commercial, and industrial properties. Up to 3-story buildings.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="section">
        <div className="section-container max-w-3xl">
          <h2 className="text-3xl font-bold mb-6">Expert Demolition & Debris Removal</h2>

          <p className="text-lg text-white mb-8">
            Whether you're preparing a site for new construction, clearing an interior space, or removing a structure, UFC Cleaning brings professional equipment and expertise to get the job done safely and efficiently.
          </p>

          <h3 className="text-2xl font-bold mb-4">Services We Provide</h3>
          <div className="grid md:grid-cols-2 gap-6 mb-12">
            <div className="border-l-4 border-gray-900 pl-4">
              <h4 className="font-semibold mb-2">Demolition Types</h4>
              <ul className="text-sm text-white space-y-1">
                <li>• Residential demolition</li>
                <li>• Commercial demolition</li>
                <li>• Selective interior demolition</li>
                <li>• Site clearing</li>
              </ul>
            </div>
            <div className="border-l-4 border-gray-900 pl-4">
              <h4 className="font-semibold mb-2">Additional Services</h4>
              <ul className="text-sm text-white space-y-1">
                <li>• Debris hauling & removal</li>
                <li>• Demolition + cleanup packages</li>
                <li>• Grading & site prep</li>
                <li>• Construction waste disposal</li>
              </ul>
            </div>
          </div>

          <h3 className="text-2xl font-bold mb-4">Equipment & Capabilities</h3>
          <div className="grid md:grid-cols-2 gap-4 mb-12">
            <div className="bg-primary-50 rounded-lg p-6">
              <p className="font-semibold mb-3 text-white">Heavy Equipment</p>
              <ul className="space-y-2 text-sm text-white">
                <li>✓ Bulldozers</li>
                <li>✓ Backhoes</li>
                <li>✓ Trackhoes</li>
                <li>✓ Skid steers</li>
              </ul>
            </div>
            <div className="bg-primary-50 rounded-lg p-6">
              <p className="font-semibold mb-3 text-white">Removal & Hauling</p>
              <ul className="space-y-2 text-sm text-white">
                <li>✓ Dump trailers</li>
                <li>✓ Full debris removal</li>
                <li>✓ Same-day cleanup</li>
                <li>✓ Site restoration</li>
              </ul>
            </div>
          </div>

          <h3 className="text-2xl font-bold mb-4">Why Choose UFC for Demolition</h3>
          <ul className="space-y-4 mb-12">
            <li className="flex gap-4">
              <span className="text-2xl flex-shrink-0">✓</span>
              <div>
                <p className="font-semibold">$2 Million Insurance Coverage</p>
                <p className="text-white text-sm">Fully insured and bonded for every project</p>
              </div>
            </li>
            <li className="flex gap-4">
              <span className="text-2xl flex-shrink-0">✓</span>
              <div>
                <p className="font-semibold">Modern Equipment</p>
                <p className="text-white text-sm">Latest machinery for efficient, safe demolition</p>
              </div>
            </li>
            <li className="flex gap-4">
              <span className="text-2xl flex-shrink-0">✓</span>
              <div>
                <p className="font-semibold">Professional Crew</p>
                <p className="text-white text-sm">Experienced demolition specialists</p>
              </div>
            </li>
            <li className="flex gap-4">
              <span className="text-2xl flex-shrink-0">✓</span>
              <div>
                <p className="font-semibold">Complete Cleanup</p>
                <p className="text-white text-sm">We haul away all debris and restore the site</p>
              </div>
            </li>
            <li className="flex gap-4">
              <span className="text-2xl flex-shrink-0">✓</span>
              <div>
                <p className="font-semibold">Custom Solutions</p>
                <p className="text-white text-sm">Tailored approach for each project</p>
              </div>
            </li>
          </ul>

          <div className="bg-primary-50 rounded-lg p-8 border border-accent-500">
            <h3 className="font-bold text-lg mb-4 text-white">Building Size & Scope</h3>
            <p className="text-white mb-4">
              We handle demolition projects for buildings up to three stories tall. Whether it's a single-story residential property, a multi-unit commercial building, or an industrial facility, we have the equipment and expertise.
            </p>
            <p className="text-white">
              For larger or specialized demolition projects, contact us to discuss your specific needs.
            </p>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="section">
        <div className="section-container max-w-3xl">
          <h2 className="text-3xl font-bold mb-8 text-center">Pricing</h2>
          <div className="bg-primary-50 rounded-lg p-8 border border-accent-500">
            <p className="text-white mb-6">
              Demolition pricing depends on project scope, building size, material type, debris removal needs, and site accessibility.
            </p>

            <h4 className="font-semibold text-white mb-3">Custom Quote Required</h4>
            <p className="text-white mb-6">
              Every demolition project is unique. We provide detailed estimates based on:
            </p>

            <ul className="space-y-2 mb-8 text-white">
              <li className="flex items-center gap-2">
                <span className="text-accent-400">✓</span> Building dimensions & structure
              </li>
              <li className="flex items-center gap-2">
                <span className="text-accent-400">✓</span> Materials to be demolished
              </li>
              <li className="flex items-center gap-2">
                <span className="text-accent-400">✓</span> Debris removal & disposal
              </li>
              <li className="flex items-center gap-2">
                <span className="text-accent-400">✓</span> Site preparation & restoration
              </li>
              <li className="flex items-center gap-2">
                <span className="text-accent-400">✓</span> Access & logistics
              </li>
            </ul>

            <Link href="/quote?service=demolition" className="btn btn-primary w-full text-center">
              Request Demolition Estimate
            </Link>
          </div>
        </div>
      </section>

      {/* Service Area */}
      <section className="section">
        <div className="section-container max-w-3xl">
          <h2 className="text-2xl font-bold mb-4">Service Area</h2>
          <p className="text-white mb-4">
            We provide demolition services throughout Dallas-Fort Worth including Rowlett, Dallas, Plano, Garland, Frisco, Arlington, Fort Worth, and all surrounding areas.
          </p>
          <p className="text-white">
            Call us to discuss your demolition project and get a free estimate.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="section bg-primary-600 text-white">
        <div className="section-container text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-lg text-white mb-8 max-w-2xl mx-auto">
            Get a free demolition estimate from our team. Professional, insured, and experienced.
          </p>

          <Link
            href="/quote?service=demolition"
            className="btn bg-primary-50 text-white hover:bg-gray-100 btn-primary-lg inline-block"
          >
            Request Estimate
          </Link>

          <p className="text-sm text-white mt-6">
            Or call <a href="tel:2148179212" className="font-semibold">(214) 817-9212</a>
          </p>
        </div>
      </section>
    </div>
  );
}
