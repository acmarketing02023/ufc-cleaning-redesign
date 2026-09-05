import Link from "next/link";

export default function RentalTurnoverStandardsPage() {
  return (
    <div>
      {/* Hero */}
      <section className="bg-primary-600 text-white py-16">
        <div className="section-container">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Rental Turnover Cleaning Standards</h1>
          <p className="text-lg text-white">
            What makes a rental property move-in ready and the standards tenants expect.
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="section">
        <div className="section-container max-w-3xl">
          <div className="space-y-8">
            <div>
              <p className="text-lg text-white mb-6">
                Whether you're a landlord preparing for a new tenant or a property manager overseeing turnover, understanding rental cleaning standards is essential. These standards directly impact tenant satisfaction and your ability to command market rent.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-white mb-4">Move-Out Inspection & Cleaning</h2>
              <p className="text-white mb-4">
                This begins after the tenant vacates. The property is assessed and cleaned before new tenants arrive.
              </p>
              <h3 className="font-bold text-white mb-3">Inspection Focus Areas:</h3>
              <ul className="space-y-2 text-white ml-4 mb-4">
                <li>• Walls for damage, marks, or discoloration</li>
                <li>• Flooring condition and stains</li>
                <li>• Appliances for cleanliness and function</li>
                <li>• Fixtures and hardware for damage</li>
                <li>• Carpeting for stains or wear</li>
                <li>• HVAC and ventilation systems</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-white mb-4">Move-In Ready Checklist</h2>
              <p className="text-white mb-4">
                A rental property is considered move-in ready when:
              </p>
              <div className="space-y-4">
                <div className="border-l-4 border-accent-500 pl-4">
                  <h3 className="font-bold text-white mb-2">Cleanliness</h3>
                  <p className="text-white text-sm">All surfaces are cleaned and sanitized. No dirt, dust, or debris visible. Floors are spotless.</p>
                </div>
                <div className="border-l-4 border-accent-500 pl-4">
                  <h3 className="font-bold text-white mb-2">Kitchen & Appliances</h3>
                  <p className="text-white text-sm">All appliances cleaned inside and out. Counters and cabinets sanitized. Sink and hardware gleaming.</p>
                </div>
                <div className="border-l-4 border-accent-500 pl-4">
                  <h3 className="font-bold text-white mb-2">Bathrooms</h3>
                  <p className="text-white text-sm">Toilet, tub, shower, and sink sanitized. Grout cleaned. Mirrors and fixtures shine. No mold or mildew.</p>
                </div>
                <div className="border-l-4 border-accent-500 pl-4">
                  <h3 className="font-bold text-white mb-2">Walls & Paint</h3>
                  <p className="text-white text-sm">Paint is clean and unmarked. Touch-ups done where needed. No scuffs or stains visible.</p>
                </div>
                <div className="border-l-4 border-accent-500 pl-4">
                  <h3 className="font-bold text-white mb-2">Flooring</h3>
                  <p className="text-white text-sm">Carpets vacuumed or cleaned. Hard floors mopped and shine. No stains or debris.</p>
                </div>
                <div className="border-l-4 border-accent-500 pl-4">
                  <h3 className="font-bold text-white mb-2">Functionality</h3>
                  <p className="text-white text-sm">All systems working properly. HVAC operational. All fixtures and appliances in working order.</p>
                </div>
              </div>
            </div>

            <div className="border-t border-primary-600 pt-8">
              <h2 className="text-2xl font-bold text-white mb-4">Cost Considerations</h2>
              <p className="text-white mb-4">
                The cost of turnover cleaning varies by property size and condition. In DFW:
              </p>
              <ul className="space-y-2 text-white ml-4">
                <li>• Studio/1-bed: $150-250</li>
                <li>• 2-bed: $250-350</li>
                <li>• 3-bed: $350-500</li>
                <li>• Additional services (carpet cleaning, repairs): Extra</li>
              </ul>
              <p className="text-white mt-4">
                Investing in professional turnover cleaning pays dividends through higher tenant satisfaction and retention.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-white mb-4">Why Professional Matters</h2>
              <p className="text-white mb-4">
                Professional turnover cleaning ensures:
              </p>
              <ul className="space-y-2 text-white ml-4">
                <li>• Nothing is missed in the turnover</li>
                <li>• Standards are consistent across all properties</li>
                <li>• Faster turnaround time between tenants</li>
                <li>• Better tenant first impressions</li>
                <li>• Reduced maintenance issues down the road</li>
              </ul>
            </div>

            <div className="bg-primary-700 rounded-lg p-6">
              <h3 className="text-xl font-bold text-white mb-3">Need Turnover Cleaning?</h3>
              <p className="text-white mb-4">
                UFC Cleaning specializes in rental property turnover throughout Dallas-Fort Worth. Same-day and next-day availability.
              </p>
              <Link href="/quote" className="btn bg-accent-500 text-primary-900 hover:bg-accent-400 font-bold">
                Get Quote
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
