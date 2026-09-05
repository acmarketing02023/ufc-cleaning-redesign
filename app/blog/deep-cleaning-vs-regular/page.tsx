import Link from "next/link";

export default function DeepCleaningVsRegularPage() {
  return (
    <div>
      {/* Hero */}
      <section className="bg-primary-600 text-white py-16">
        <div className="section-container">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Deep Cleaning vs. Regular Cleaning</h1>
          <p className="text-lg text-white">
            Understanding the difference and when you need each type.
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="section">
        <div className="section-container max-w-3xl">
          <div className="space-y-8">
            <div>
              <h2 className="text-2xl font-bold text-white mb-4">Regular Cleaning</h2>
              <p className="text-white mb-4">
                Regular or maintenance cleaning keeps your space tidy and presentable. It's typically done weekly or bi-weekly.
              </p>
              <h3 className="font-bold text-lg text-white mb-3">What's Included:</h3>
              <ul className="space-y-2 text-white ml-4 mb-4">
                <li>• Vacuuming and sweeping floors</li>
                <li>• Wiping down kitchen counters and sink</li>
                <li>• Cleaning bathroom surfaces and fixtures</li>
                <li>• Dusting furniture and visible surfaces</li>
                <li>• Mopping hard floors</li>
                <li>• Emptying trash and recycling</li>
                <li>• Straightening and organizing visible areas</li>
              </ul>
              <p className="text-white">
                <strong>Frequency:</strong> Weekly, bi-weekly, or monthly for maintenance
              </p>
            </div>

            <div className="border-t border-primary-600 pt-8">
              <h2 className="text-2xl font-bold text-white mb-4">Deep Cleaning</h2>
              <p className="text-white mb-4">
                Deep cleaning is comprehensive, addressing areas regular cleaning doesn't reach. It's typically done quarterly or annually.
              </p>
              <h3 className="font-bold text-lg text-white mb-3">What's Included:</h3>
              <ul className="space-y-2 text-white ml-4 mb-4">
                <li>• Everything in regular cleaning plus:</li>
                <li>• Inside kitchen cabinets and appliances</li>
                <li>• Inside refrigerator and oven</li>
                <li>• Baseboards and trim</li>
                <li>• Behind and under furniture</li>
                <li>• Inside cabinet doors and hardware</li>
                <li>• Ceiling fans and light fixtures</li>
                <li>• Windows inside and out, window tracks</li>
                <li>• Door frames and light switches</li>
                <li>• Inside shower/tub and grout cleaning</li>
                <li>• Carpet shampooing or steam cleaning</li>
              </ul>
              <p className="text-white">
                <strong>Frequency:</strong> Quarterly, semi-annually, or annually as needed
              </p>
            </div>

            <div className="border-t border-primary-600 pt-8">
              <h2 className="text-2xl font-bold text-white mb-4">Which One Do You Need?</h2>
              <div className="space-y-4">
                <div className="bg-primary-700 rounded-lg p-4">
                  <p className="text-white"><strong>Regular Cleaning:</strong> You have occupied space that needs ongoing maintenance. You live or work there and want it to stay clean between deep cleans.</p>
                </div>
                <div className="bg-primary-700 rounded-lg p-4">
                  <p className="text-white"><strong>Deep Cleaning:</strong> Your space hasn't been thoroughly cleaned in months, you're preparing to move in or show the property, or you want to reach areas daily cleaning misses.</p>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-white mb-4">The Bottom Line</h2>
              <p className="text-white">
                Most properties benefit from regular maintenance cleaning combined with periodic deep cleans. Regular cleaning keeps things presentable day-to-day, while deep cleaning addresses the accumulation that happens over time.
              </p>
            </div>

            <div className="bg-primary-700 rounded-lg p-6">
              <h3 className="text-xl font-bold text-white mb-3">Ready to Schedule?</h3>
              <p className="text-white mb-4">
                UFC Cleaning offers both regular maintenance and deep cleaning services throughout DFW.
              </p>
              <Link href="/quote" className="btn bg-accent-500 text-primary-900 hover:bg-accent-400 font-bold">
                Get Your Quote
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
