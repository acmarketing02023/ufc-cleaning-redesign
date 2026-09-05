import Link from "next/link";

export default function DeepCleaningPage() {
  return (
    <div>
      {/* Hero */}
      <section className="bg-primary-600 text-white py-16">
        <div className="section-container">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Deep Cleaning</h1>
          <p className="text-lg text-white">
            Comprehensive cleaning with attention to every detail. Starting from $199.
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="section">
        <div className="section-container max-w-3xl">
          <h2 className="text-3xl font-bold mb-6">Thorough Deep Clean</h2>
          <p className="text-lg text-white mb-8">
            Our deep cleaning service goes beyond regular cleaning to reach every corner and surface of your property.
          </p>

          <h3 className="text-2xl font-bold mb-4">What's Included</h3>
          <ul className="space-y-3 mb-12 text-white">
            <li className="flex items-center gap-3">
              <span className="text-accent-500">✓</span> Inside appliances
            </li>
            <li className="flex items-center gap-3">
              <span className="text-accent-500">✓</span> Baseboards and trim
            </li>
            <li className="flex items-center gap-3">
              <span className="text-accent-500">✓</span> Cabinets and drawers
            </li>
            <li className="flex items-center gap-3">
              <span className="text-accent-500">✓</span> Closets and storage areas
            </li>
            <li className="flex items-center gap-3">
              <span className="text-accent-500">✓</span> Behind and under furniture
            </li>
          </ul>

          <div className="bg-primary-50 rounded-lg p-8 border border-primary-200 mb-12">
            <p className="text-white mb-6">
              Deep cleaning is perfect for move-in/move-out situations, post-construction cleanup, or when your home needs a complete refresh.
            </p>
            <p className="font-semibold text-white">Starting from $199</p>
          </div>

          <Link href="/quote?service=deep-cleaning" className="btn btn-primary">
            Get Deep Cleaning Quote
          </Link>
        </div>
      </section>

      {/* CTA */}
      <section className="section bg-primary-600 text-white">
        <div className="section-container text-center">
          <h2 className="text-3xl font-bold mb-6">Get Your Deep Clean Today</h2>
          <Link href="/quote" className="btn bg-accent-500 text-primary-900 hover:bg-accent-400 font-bold btn-primary-lg inline-block">
            Get Free Quote
          </Link>
        </div>
      </section>
    </div>
  );
}
