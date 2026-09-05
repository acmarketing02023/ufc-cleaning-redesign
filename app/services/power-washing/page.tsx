import Link from "next/link";

export default function PowerWashingPage() {
  return (
    <div>
      <section className="bg-primary-600 text-white py-16">
        <div className="section-container">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Professional Power Washing</h1>
          <p className="text-lg text-white">
            Restore your property's appearance. Driveways, siding, decks, fences, and more. Starting from $99.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="section-container max-w-3xl">
          <h2 className="text-3xl font-bold mb-6">Restore Your Property's Appearance</h2>
          <p className="text-lg text-white mb-8">
            Over time, dirt, algae, mold, and weathering take their toll on exterior surfaces. Power washing removes years of buildup and restores your property to like-new condition.
          </p>

          <h3 className="text-2xl font-bold mb-4">What We Clean</h3>
          <div className="grid md:grid-cols-2 gap-4 mb-12">
            <div>
              <p className="font-semibold mb-3">Residential Services</p>
              <ul className="text-sm text-white space-y-2">
                <li>Driveways & sidewalks</li>
                <li>House siding & trim</li>
                <li>Decks & patios</li>
                <li>Fences & gates</li>
                <li>Gutters & downspouts</li>
              </ul>
            </div>
            <div>
              <p className="font-semibold mb-3">Commercial Services</p>
              <ul className="text-sm text-white space-y-2">
                <li>Building exteriors</li>
                <li>Parking lots & pavement</li>
                <li>Loading docks</li>
                <li>Awnings & canopies</li>
                <li>Storefront areas</li>
              </ul>
            </div>
          </div>

          <h3 className="text-2xl font-bold mb-4">Why Power Washing?</h3>
          <ul className="space-y-4 mb-12">
            <li className="flex gap-4">
              <span className="text-2xl flex-shrink-0">✓</span>
              <div>
                <p className="font-semibold">Increases Property Value</p>
                <p className="text-white text-sm">Clean exteriors make strong first impressions and boost curb appeal</p>
              </div>
            </li>
            <li className="flex gap-4">
              <span className="text-2xl flex-shrink-0">✓</span>
              <div>
                <p className="font-semibold">Prevents Damage</p>
                <p className="text-white text-sm">Removes algae and mold that can deteriorate surfaces over time</p>
              </div>
            </li>
            <li className="flex gap-4">
              <span className="text-2xl flex-shrink-0">✓</span>
              <div>
                <p className="font-semibold">Cost-Effective</p>
                <p className="text-white text-sm">Far less expensive than repainting or replacing surfaces</p>
              </div>
            </li>
            <li className="flex gap-4">
              <span className="text-2xl flex-shrink-0">✓</span>
              <div>
                <p className="font-semibold">Professional Results</p>
                <p className="text-white text-sm">High-pressure equipment and trained operators for perfect cleaning</p>
              </div>
            </li>
          </ul>

          <div className="bg-primary-800 rounded-lg p-8 border border-accent-500">
            <h3 className="font-bold text-lg text-white mb-4">Pricing</h3>
            <p className="text-white mb-6">Power washing pricing depends on property size and surface type</p>
            <div className="space-y-4 mb-8 text-white">
              <div>
                <p className="font-semibold">Starting Price</p>
                <p className="text-2xl font-bold text-accent-300">From $99</p>
              </div>
            </div>
            <Link href="/quote" className="btn bg-accent-500 text-primary-900 hover:bg-accent-400 font-bold">
              Get Your Free Quote
            </Link>
          </div>
        </div>
      </section>

      <section className="section bg-primary-600 text-white">
        <div className="section-container text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Restore Your Property?</h2>
          <p className="text-lg text-white mb-8 max-w-2xl mx-auto">
            Get a free quote today. Professional power washing for residential and commercial properties.
          </p>
          <Link href="/quote" className="btn bg-accent-500 text-primary-900 hover:bg-accent-400 font-bold btn-primary-lg inline-block">
            Get Your Free Quote
          </Link>
        </div>
      </section>
    </div>
  );
}
