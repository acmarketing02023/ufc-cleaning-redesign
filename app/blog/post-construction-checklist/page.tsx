import Link from "next/link";

export default function PostConstructionChecklistPage() {
  return (
    <div>
      {/* Hero */}
      <section className="bg-primary-600 text-white py-16">
        <div className="section-container">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Post-Construction Cleanup Checklist</h1>
          <p className="text-lg text-white">
            Complete guide to post-construction cleaning. What needs to be cleaned and when.
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="section">
        <div className="section-container max-w-3xl">
          <div className="prose-like space-y-6">
            <div>
              <p className="text-lg text-white mb-4">
                After construction or renovation work, thorough cleanup is essential before occupancy. This guide covers what needs to be cleaned and why.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-white mb-4">Day-One Cleanup (Rough Cleanup)</h2>
              <p className="text-white mb-4">
                This happens immediately after construction, before fine finishes are applied:
              </p>
              <ul className="space-y-2 text-white ml-4">
                <li>• Remove protective coverings from fixtures and surfaces</li>
                <li>• Sweep and vacuum all construction debris</li>
                <li>• Remove drywall dust and plaster</li>
                <li>• Clear out cardboard boxes and packaging materials</li>
                <li>• Wipe down temporary barriers and protection</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-white mb-4">Final Cleanup (Move-In Ready)</h2>
              <p className="text-white mb-4">
                This comprehensive cleaning happens before occupancy:
              </p>
              <ul className="space-y-2 text-white ml-4">
                <li>• Deep clean all floors (vacuuming and mopping)</li>
                <li>• Clean and sanitize all cabinets inside and out</li>
                <li>• Wipe down all baseboards and trim</li>
                <li>• Clean windows and glass doors thoroughly</li>
                <li>• Sanitize kitchen appliances</li>
                <li>• Clean bathroom fixtures and tiles</li>
                <li>• Dust all ceiling fans and light fixtures</li>
                <li>• Wipe light switches and door handles</li>
                <li>• Remove any remaining adhesive or caulk residue</li>
                <li>• Final inspection for any missed debris</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-white mb-4">Areas Often Missed</h2>
              <p className="text-white mb-4">
                Contractors and DIYers frequently overlook these areas:
              </p>
              <ul className="space-y-2 text-white ml-4">
                <li>• HVAC vents and return air ducts (filled with construction dust)</li>
                <li>• Insides of kitchen and bathroom cabinets</li>
                <li>• Paint drips on door frames and hardware</li>
                <li>• Dust on top of door frames and crown molding</li>
                <li>• Window tracks and sills</li>
                <li>• Insides of appliances (ovens, dishwashers)</li>
                <li>• Under sink cabinets where debris accumulates</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-white mb-4">Why Professional Cleanup Matters</h2>
              <p className="text-white">
                Construction dust is extremely fine and settles everywhere. Without professional-grade equipment and techniques, particles remain on surfaces and in the air. This affects indoor air quality and makes the space look unfinished. Professional post-construction cleaning ensures the property is genuinely move-in ready and clean.
              </p>
            </div>

            <div className="bg-primary-700 rounded-lg p-6 mt-8">
              <h3 className="text-xl font-bold text-white mb-3">Need Post-Construction Cleaning?</h3>
              <p className="text-white mb-4">
                UFC Cleaning specializes in post-construction cleanup for residential renovations and commercial projects throughout DFW.
              </p>
              <Link href="/quote" className="btn bg-accent-500 text-primary-900 hover:bg-accent-400 font-bold">
                Get Quote
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Related Articles */}
      <section className="section bg-primary-50">
        <div className="section-container">
          <h2 className="text-2xl font-bold text-white mb-8 text-center">Related Resources</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <Link href="/blog/deep-cleaning-vs-regular" className="border border-accent-500 rounded-lg p-4 hover:shadow-lg transition">
              <p className="text-white font-semibold">Deep Cleaning vs. Regular Cleaning</p>
              <p className="text-accent-400 text-sm mt-2">Understanding the difference →</p>
            </Link>
            <Link href="/services/post-construction-cleanup" className="border border-accent-500 rounded-lg p-4 hover:shadow-lg transition">
              <p className="text-white font-semibold">Post-Construction Cleaning Service</p>
              <p className="text-accent-400 text-sm mt-2">See our service details →</p>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
