import Link from "next/link";

export default function ServicesPage() {
  const services = [
    {
      title: "Residential Cleaning",
      description: "Professional home cleaning for regular maintenance, recurring service, or one-time deep cleans.",
      price: "From $169",
      href: "/services/residential-cleaning",
      icon: "🏠",
      image: "residential",
    },
    {
      title: "Deep Cleaning",
      description: "Comprehensive cleaning including inside appliances, baseboards, cabinets, and all details.",
      price: "From $199",
      href: "/services/deep-cleaning",
      icon: "✨",
      image: "deep",
    },
    {
      title: "Commercial Cleaning",
      description: "Professional cleaning for offices, retail, medical facilities, and warehouses with flexible scheduling.",
      price: "From $120",
      href: "/services/commercial-cleaning",
      icon: "🏢",
      image: "commercial",
    },
    {
      title: "Post-Construction Cleaning",
      description: "Complete cleanup after renovations or new construction. Dust, debris, and detail cleaned.",
      price: "From $349",
      href: "/services/post-construction-cleanup",
      icon: "🔨",
      image: "postconstruction",
    },
    {
      title: "Demolition Services",
      description: "Residential, commercial, and selective interior demolition up to 3-story buildings.",
      price: "Custom Quote",
      href: "/services/demolition",
      icon: "🏗️",
      image: "demolition",
    },
    {
      title: "Junk Removal",
      description: "Same-day haul-away for furniture, appliances, construction debris, and estate cleanouts.",
      price: "From $149",
      href: "/services/junk-removal",
      icon: "🚚",
      image: "junk",
    },
    {
      title: "Power Washing",
      description: "Professional exterior cleaning for driveways, siding, decks, fences, and patios.",
      price: "From $99",
      href: "/services/power-washing",
      icon: "💧",
      image: "powerwash",
    },
    {
      title: "Moving Services",
      description: "Local DFW moves with move + clean bundle options. Move out, move in, and deep clean in one call.",
      price: "From $299",
      href: "/services/moving",
      icon: "📦",
      image: "moving",
    },
    {
      title: "Handyman Services",
      description: "Drywall repair, fixtures, doors, painting touch-ups, and more. Perfect for rental prep.",
      price: "$89/hour",
      href: "/services/handyman",
      icon: "🔧",
      image: "handyman",
    },
    {
      title: "Vacation Rental Cleaning",
      description: "Turnover cleaning between guests. Fast, thorough, and ready for your next booking.",
      price: "From $149",
      href: "/services/vacation-rental-cleaning",
      icon: "🛏️",
      image: "vacation",
    },
    {
      title: "Move-In / Move-Out Cleaning",
      description: "Complete home or apartment cleaning for move transitions and rental inspections.",
      price: "From $299",
      href: "/services/move-in-move-out",
      icon: "📍",
      image: "moveio",
    },
    {
      title: "Landlord Services",
      description: "Property maintenance, tenant turnover, and common area cleaning for property managers.",
      price: "From $150/month",
      href: "/services/landlord-services",
      icon: "🏘️",
      image: "landlord",
    },
  ];

  return (
    <div>
      {/* Hero */}
      <section className="bg-primary-600 text-white py-16">
        <div className="section-container">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Services</h1>
          <p className="text-lg text-white max-w-2xl">
            Complete property services for residential and commercial customers throughout Dallas-Fort Worth.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section">
        <div className="section-container">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, idx) => (
              <Link
                key={idx}
                href={service.href}
                className="group bg-primary-50 border border-gray-200 rounded-xl overflow-hidden hover:shadow-lg hover:border-accent-500 transition-all"
              >
                <div className="h-40 bg-gradient-to-br from-primary-50 to-primary-100 flex items-center justify-center text-6xl group-hover:scale-110 transition-transform">
                  {service.icon}
                </div>
                <div className="p-6">
                  <h3 className="font-bold text-lg mb-2 group-hover:text-accent-400 transition text-white">
                    {service.title}
                  </h3>
                  <p className="text-sm text-white mb-4">{service.description}</p>
                  <div className="flex justify-between items-center">
                    <p className="font-bold text-accent-300">{service.price}</p>
                    <span className="text-accent-300 group-hover:translate-x-1 transition-transform">
                      →
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="section">
        <div className="section-container max-w-3xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">How It Works</h2>

          <div className="space-y-8">
            <div className="flex gap-6">
              <div className="flex-shrink-0 w-14 h-14 bg-accent-500 rounded-full flex items-center justify-center text-primary-900 font-bold text-xl">
                1
              </div>
              <div>
                <h3 className="font-bold text-lg mb-2">Contact Us</h3>
                <p className="text-white">
                  Call us at (469) 929-7722 or fill out our free quote form. Tell us about your project.
                </p>
              </div>
            </div>

            <div className="flex gap-6">
              <div className="flex-shrink-0 w-14 h-14 bg-accent-500 rounded-full flex items-center justify-center text-primary-900 font-bold text-xl">
                2
              </div>
              <div>
                <h3 className="font-bold text-lg mb-2">Get Your Quote</h3>
                <p className="text-white">
                  We'll provide honest, transparent pricing. No hidden fees. No obligation.
                </p>
              </div>
            </div>

            <div className="flex gap-6">
              <div className="flex-shrink-0 w-14 h-14 bg-accent-500 rounded-full flex items-center justify-center text-primary-900 font-bold text-xl">
                3
              </div>
              <div>
                <h3 className="font-bold text-lg mb-2">Schedule Your Service</h3>
                <p className="text-white">
                  Choose your preferred date and time. We offer same-day and next-day appointments.
                </p>
              </div>
            </div>

            <div className="flex gap-6">
              <div className="flex-shrink-0 w-14 h-14 bg-accent-500 rounded-full flex items-center justify-center text-primary-900 font-bold text-xl">
                4
              </div>
              <div>
                <h3 className="font-bold text-lg mb-2">We Deliver Results</h3>
                <p className="text-white">
                  Our professional team shows up on time, fully prepared, and fully insured. We get the job done right.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Residential vs Commercial */}
      <section className="section">
        <div className="section-container">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
            Services by Customer Type
          </h2>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Residential */}
            <div>
              <h3 className="text-2xl font-bold mb-6">For Homeowners</h3>
              <ul className="space-y-3">
                <li className="flex items-center gap-3">
                  <span className="text-primary-600">✓</span>
                  <span>Residential Cleaning</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-primary-600">✓</span>
                  <span>Deep Cleaning</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-primary-600">✓</span>
                  <span>Move-In / Move-Out Cleaning</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-primary-600">✓</span>
                  <span>Post-Construction Cleaning</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-primary-600">✓</span>
                  <span>Junk Removal & Estate Cleanouts</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-primary-600">✓</span>
                  <span>Power Washing</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-primary-600">✓</span>
                  <span>Handyman Services</span>
                </li>
              </ul>

              <Link href="/quote" className="btn bg-accent-500 text-primary-900 hover:bg-accent-400 font-bold mt-8 inline-block">
                Get Residential Quote
              </Link>
            </div>

            {/* Commercial */}
            <div>
              <h3 className="text-2xl font-bold mb-6">For Businesses</h3>
              <ul className="space-y-3">
                <li className="flex items-center gap-3">
                  <span className="text-primary-600">✓</span>
                  <span>Office & Retail Cleaning</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-primary-600">✓</span>
                  <span>Medical Facility Cleaning</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-primary-600">✓</span>
                  <span>Restaurant Cleaning</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-primary-600">✓</span>
                  <span>Warehouse & Industrial</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-primary-600">✓</span>
                  <span>Property Manager Services</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-primary-600">✓</span>
                  <span>Post-Construction & Demolition</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-primary-600">✓</span>
                  <span>Before/After Hours Availability</span>
                </li>
              </ul>

              <Link href="/quote" className="btn bg-accent-500 text-primary-900 hover:bg-accent-400 font-bold mt-8 inline-block">
                Get Commercial Quote
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section bg-primary-600 text-white">
        <div className="section-container text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-lg text-white mb-8 max-w-2xl mx-auto">
            Get a free quote in 2 minutes. No obligation. No pressure.
          </p>

          <Link href="/quote" className="btn bg-accent-500 text-primary-900 hover:bg-accent-400 font-bold btn-primary-lg inline-block">
            Get Your Free Quote
          </Link>
        </div>
      </section>
    </div>
  );
}
