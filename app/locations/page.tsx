import Link from "next/link";

export default function LocationsPage() {
  const cities = [
    {
      name: "Rowlett",
      description: "Home Base - 0 minutes from HQ",
      distance: "Headquarters",
    },
    {
      name: "Dallas",
      description: "Full DFW Coverage - 20-30 minutes",
      distance: "Central DFW",
    },
    {
      name: "Plano",
      description: "Premium Service for Premium Homes - 25-30 minutes",
      distance: "North DFW",
    },
    {
      name: "Garland",
      description: "Fast & Reliable Neighbors - 10-15 minutes",
      distance: "East DFW",
    },
    {
      name: "Wylie",
      description: "Trusted in a Growing Community - 15-20 minutes",
      distance: "East DFW",
    },
    {
      name: "Sachse",
      description: "Complete home needs - 10-15 minutes",
      distance: "East DFW",
    },
    {
      name: "Murphy",
      description: "Premium Homes, Premium Care - 15-20 minutes",
      distance: "East DFW",
    },
    {
      name: "Rockwall",
      description: "The Lake Area's Top Choice - 15-20 minutes",
      distance: "East DFW",
    },
    {
      name: "Fort Worth",
      description: "Full DFW Coverage",
      distance: "West DFW",
    },
    {
      name: "Arlington",
      description: "Mid-Cities Leader - 35-45 minutes",
      distance: "South DFW",
    },
    {
      name: "Irving",
      description: "A Business Hub We Know Well - 30-35 minutes",
      distance: "Central DFW",
    },
    {
      name: "Carrollton",
      description: "North DFW Full-Service - 30-35 minutes",
      distance: "North DFW",
    },
    {
      name: "McKinney",
      description: "North Collin County Care - 35-40 minutes",
      distance: "North DFW",
    },
    {
      name: "Allen",
      description: "Collin County Neighbors - 30-35 minutes",
      distance: "North DFW",
    },
    {
      name: "Frisco",
      description: "A Fast-Growing City - 40-45 minutes",
      distance: "North DFW",
    },
  ];

  return (
    <div>
      {/* Hero */}
      <section className="bg-primary-600 text-white py-16">
        <div className="section-container">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Service Areas</h1>
          <p className="text-lg text-white">
            Serving all of Dallas-Fort Worth with same-day and next-day availability.
          </p>
        </div>
      </section>

      {/* Coverage Map */}
      <section className="section">
        <div className="section-container">
          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h2 className="text-3xl font-bold mb-6">Everywhere You Are in DFW</h2>
              <p className="text-lg text-white mb-6">
                Based in Rowlett with service coverage across the entire Dallas-Fort Worth metroplex. Same-day availability with a morning call (before 10 AM). Next-day service always available.
              </p>

              <div className="space-y-4">
                <div className="flex gap-4">
                  <div>
                    <p className="font-semibold">Same-Day Service</p>
                    <p className="text-white text-sm">Call before 10 AM for today</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div>
                    <p className="font-semibold">15+ Cities Served</p>
                    <p className="text-white text-sm">All of DFW covered</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div>
                    <p className="font-semibold">Quick Response Times</p>
                    <p className="text-white text-sm">Most areas within 45 minutes</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="rounded-2xl h-96 border border-accent-500 overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m10!1m8!1m3!1d54864.47819999999!2d-96.7970!3d32.7767!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sus!4v1693523819876"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>

          <h2 className="text-3xl font-bold mb-8 text-center">Cities We Serve</h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {cities.map((city, idx) => (
              <div
                key={idx}
                className="bg-primary-50 border border-accent-500 rounded-lg p-6 hover:shadow-lg hover:border-accent-400 transition"
              >
                <h3 className="font-bold text-lg text-accent-600 mb-2">
                  {city.name}
                </h3>
                <p className="text-sm text-white mb-3">{city.description}</p>
                <div className="flex justify-between items-center">
                  <span className="text-xs bg-accent-500 text-primary-900 px-3 py-1 rounded font-semibold">
                    {city.distance}
                  </span>
                  <Link
                    href="/quote"
                    className="text-accent-600 hover:text-accent-700 font-semibold text-sm"
                  >
                    Quote →
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Info */}
      <section className="section">
        <div className="section-container max-w-3xl">
          <h2 className="text-3xl font-bold mb-12 text-center">
            How Our Coverage Works
          </h2>

          <div className="space-y-8">
            <div className="bg-primary-50 rounded-lg p-6 border border-accent-500">
              <h3 className="font-bold text-lg mb-2 text-white">Primary Service Area</h3>
              <p className="text-white">
                Rowlett, Garland, Wylie, Sachse, Murphy, and Rockwall. Fastest response times and most frequent availability.
              </p>
            </div>

            <div className="bg-primary-50 rounded-lg p-6 border border-accent-500">
              <h3 className="font-bold text-lg mb-2 text-white">Extended DFW Coverage</h3>
              <p className="text-white">
                Dallas, Plano, Fort Worth, Arlington, Irving, Carrollton, McKinney, Allen, and Frisco. Full service available with same-day and next-day scheduling.
              </p>
            </div>

            <div className="bg-primary-50 rounded-lg p-6 border border-accent-500">
              <h3 className="font-bold text-lg mb-2 text-white">Special Requests</h3>
              <p className="text-white">
                Service available beyond our main coverage area. Call us at (214) 817-9212 or (940) 902-3030 to discuss your specific location.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose us for Service */}
      <section className="section">
        <div className="section-container max-w-3xl">
          <h2 className="text-3xl font-bold mb-12 text-center">
            Why UFC Cleaning for Your Area
          </h2>

          <div className="space-y-6">
            <div className="flex gap-4">
              <span className="text-3xl flex-shrink-0">1</span>
              <div>
                <h3 className="font-bold text-lg mb-2">Local Company</h3>
                <p className="text-white">
                  We're based in Rowlett and deeply familiar with DFW neighborhoods and customer needs.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <span className="text-3xl flex-shrink-0">2</span>
              <div>
                <h3 className="font-bold text-lg mb-2">Established Service</h3>
                <p className="text-white">
                  5-star rated with 31+ verified reviews throughout DFW. Built on repeat customers and referrals.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <span className="text-3xl flex-shrink-0">3</span>
              <div>
                <h3 className="font-bold text-lg mb-2">Flexible Scheduling</h3>
                <p className="text-white">
                  Same-day, next-day, and recurring service available. Work around your schedule.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <span className="text-3xl flex-shrink-0">4</span>
              <div>
                <h3 className="font-bold text-lg mb-2">Complete Services</h3>
                <p className="text-white">
                  One company handles cleaning, demolition, junk removal, power washing, and more.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section bg-primary-600 text-white">
        <div className="section-container text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Is Your Area Covered?
          </h2>
          <p className="text-lg text-white mb-8 max-w-2xl mx-auto">
            Check availability in your neighborhood. Get a free quote and see our exact service radius.
          </p>

          <Link href="/quote" className="btn bg-accent-500 text-primary-900 hover:bg-accent-400 font-bold btn-primary-lg inline-block">
            Get a Quote for Your Area
          </Link>

          <p className="text-sm text-white mt-6">
            Or call <a href="tel:2148179212" className="font-semibold">(214) 817-9212</a>
          </p>
        </div>
      </section>
    </div>
  );
}
