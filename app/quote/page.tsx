import Link from "next/link";

export default function QuotePage() {
  return (
    <div>
      {/* Hero */}
      <section className="bg-primary-600 text-white py-16">
        <div className="section-container">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Get Your Free Quote</h1>
          <p className="text-lg text-white">
            Professional pricing. No obligations. Same-day service available.
          </p>
        </div>
      </section>

      {/* Quote Form Section */}
      <section className="section">
        <div className="section-container max-w-3xl">
          <div className="grid md:grid-cols-3 gap-12">
            {/* Form */}
            <div className="md:col-span-2">
              <h2 className="text-2xl font-bold mb-8">Tell Us About Your Project</h2>

              <form className="space-y-6">
                {/* Name */}
                <div>
                  <label className="block text-white font-semibold mb-2">Full Name</label>
                  <input
                    type="text"
                    placeholder="John Smith"
                    className="w-full px-4 py-3 border border-gray-400 rounded-lg bg-white text-primary-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-accent-500"
                  />
                </div>

                {/* Phone */}
                <div>
                  <label className="block text-white font-semibold mb-2">Phone Number</label>
                  <input
                    type="tel"
                    placeholder="(214) 817-9212"
                    className="w-full px-4 py-3 border border-gray-400 rounded-lg bg-white text-primary-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-accent-500"
                  />
                </div>

                {/* Email */}
                <div>
                  <label className="block text-white font-semibold mb-2">Email Address</label>
                  <input
                    type="email"
                    placeholder="john@example.com"
                    className="w-full px-4 py-3 border border-gray-400 rounded-lg bg-white text-primary-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-accent-500"
                  />
                </div>

                {/* Service */}
                <div>
                  <label className="block text-white font-semibold mb-2">Service Needed</label>
                  <select className="w-full px-4 py-3 border border-gray-400 rounded-lg bg-white text-primary-900 focus:outline-none focus:ring-2 focus:ring-accent-500">
                    <option value="">Select a service</option>
                    <option value="residential-cleaning">Residential Cleaning</option>
                    <option value="deep-cleaning">Deep Cleaning</option>
                    <option value="commercial-cleaning">Commercial Cleaning</option>
                    <option value="post-construction">Post-Construction Cleanup</option>
                    <option value="demolition">Demolition Services</option>
                    <option value="junk-removal">Junk Removal</option>
                    <option value="power-washing">Power Washing</option>
                    <option value="handyman">Handyman Services</option>
                    <option value="moving">Moving Services</option>
                    <option value="vacation-rental">Vacation Rental Cleaning</option>
                    <option value="move-in-move-out">Move-In / Move-Out Cleaning</option>
                    <option value="landlord">Landlord Services</option>
                    <option value="real-estate">Real Estate Services</option>
                  </select>
                </div>

                {/* Property Type */}
                <div>
                  <label className="block text-white font-semibold mb-2">Property Type</label>
                  <select className="w-full px-4 py-3 border border-gray-400 rounded-lg bg-white text-primary-900 focus:outline-none focus:ring-2 focus:ring-accent-500">
                    <option value="">Select property type</option>
                    <option value="residential">House/Residential</option>
                    <option value="apartment">Apartment/Condo</option>
                    <option value="commercial-office">Commercial Office</option>
                    <option value="retail">Retail Space</option>
                    <option value="warehouse">Warehouse/Industrial</option>
                    <option value="medical">Medical Facility</option>
                    <option value="restaurant">Restaurant/Food Service</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                {/* Property Size */}
                <div>
                  <label className="block text-white font-semibold mb-2">Property Size (sq ft)</label>
                  <input
                    type="text"
                    placeholder="e.g., 3000"
                    className="w-full px-4 py-3 border border-gray-400 rounded-lg bg-white text-primary-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-accent-500"
                  />
                </div>

                {/* Timeline */}
                <div>
                  <label className="block text-white font-semibold mb-2">When do you need service?</label>
                  <select className="w-full px-4 py-3 border border-gray-400 rounded-lg bg-white text-primary-900 focus:outline-none focus:ring-2 focus:ring-accent-500">
                    <option value="">Select timeline</option>
                    <option value="asap">ASAP / Today</option>
                    <option value="this-week">This Week</option>
                    <option value="next-week">Next Week</option>
                    <option value="within-month">Within a Month</option>
                    <option value="flexible">Flexible</option>
                  </select>
                </div>

                {/* Details */}
                <div>
                  <label className="block text-white font-semibold mb-2">Project Details</label>
                  <textarea
                    placeholder="Tell us more about your project, any special requirements, or specific areas that need attention..."
                    rows={5}
                    className="w-full px-4 py-3 border border-gray-400 rounded-lg bg-white text-primary-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-accent-500"
                  ></textarea>
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  className="w-full bg-accent-500 text-primary-900 font-bold py-3 rounded-lg hover:bg-accent-400 transition"
                >
                  Get Your Free Quote
                </button>

                <p className="text-sm text-white text-center">
                  We typically respond within 2 hours during business hours
                </p>
              </form>
            </div>

            {/* Sidebar Info */}
            <div className="md:col-span-1">
              <div className="bg-primary-800 rounded-lg p-6 mb-6 border border-accent-500">
                <h3 className="font-bold text-lg text-white mb-4">Quick Info</h3>
                <div className="space-y-4 text-sm text-white">
                  <div>
                    <p className="font-semibold mb-1">Response Time</p>
                    <p>Usually within 2 hours</p>
                  </div>
                  <div>
                    <p className="font-semibold mb-1">No Obligation</p>
                    <p>Free quote, no commitment</p>
                  </div>
                  <div>
                    <p className="font-semibold mb-1">Same-Day Service</p>
                    <p>Call before 10 AM</p>
                  </div>
                  <div>
                    <p className="font-semibold mb-1">All Services Covered</p>
                    <p>Cleaning, demolition, junk removal, and more</p>
                  </div>
                </div>
              </div>

              <div className="bg-primary-800 rounded-lg p-6 border border-accent-500">
                <h3 className="font-bold text-lg text-white mb-4">Call Us Directly</h3>
                <a href="tel:2148179212" className="block text-accent-400 font-bold text-lg hover:text-accent-300 mb-2">
                  (214) 817-9212
                </a>
                <a href="tel:9409023030" className="block text-accent-400 font-bold text-lg hover:text-accent-300 mb-4">
                  (940) 902-3030
                </a>
                <p className="text-sm text-white">
                  Available Monday-Sunday
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service Info Cards */}
      <section className="section bg-primary-800">
        <div className="section-container">
          <h2 className="text-3xl font-bold mb-12 text-center text-white">What to Expect</h2>
          <div className="grid md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-2xl font-bold text-accent-400 mb-3">1</div>
              <h3 className="font-bold text-white mb-2">Submit Your Info</h3>
              <p className="text-sm text-white">Tell us about your project through our form or call</p>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-accent-400 mb-3">2</div>
              <h3 className="font-bold text-white mb-2">Quick Assessment</h3>
              <p className="text-sm text-white">We review your project details and scope</p>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-accent-400 mb-3">3</div>
              <h3 className="font-bold text-white mb-2">Free Quote</h3>
              <p className="text-sm text-white">Transparent pricing with no hidden fees</p>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-accent-400 mb-3">4</div>
              <h3 className="font-bold text-white mb-2">Schedule Service</h3>
              <p className="text-sm text-white">Pick your preferred date and time</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
