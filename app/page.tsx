import Link from "next/link";
import Image from "next/image";
import BeforeAfterSlider from "@/components/BeforeAfterSlider";

export default function Home() {
  const services = [
    {
      title: "Residential Cleaning",
      price: "From $169",
      description: "Recurring and one-time home cleaning across DFW",
      href: "/services/residential-cleaning",
    },
    {
      title: "Deep Cleaning",
      price: "From $199",
      description: "Comprehensive cleaning with inside appliances and baseboards",
      href: "/services/deep-cleaning",
    },
    {
      title: "Commercial Cleaning",
      price: "From $120",
      description: "Professional cleaning for offices, retail, and facilities",
      href: "/services/commercial-cleaning",
    },
    {
      title: "Demolition Services",
      price: "Custom Quote",
      description: "Residential, commercial, and selective interior demolition",
      href: "/services/demolition",
    },
    {
      title: "Junk Removal",
      price: "From $149",
      description: "Same-day haul-away for furniture, appliances, and debris",
      href: "/services/junk-removal",
    },
    {
      title: "Power Washing",
      price: "From $99",
      description: "Driveways, siding, decks, fences, and patios",
      href: "/services/power-washing",
    },
    {
      title: "Moving Services",
      price: "From $299",
      description: "Local DFW moves with move + clean bundle options",
      href: "/services/moving",
    },
  ];

  const testimonials = [
    {
      name: "Ashley M.",
      location: "Wylie, TX",
      service: "Post-Construction Cleaning",
      quote:
        "Best cleaning company in DFW! They cleaned our home after a renovation and it looked better than when we first moved in.",
    },
    {
      name: "Robert T.",
      location: "Plano, TX",
      service: "Move-Out Deep Clean",
      quote:
        "Got my full deposit back thanks to their move-out deep clean. The landlord said it was the cleanest unit he'd seen.",
    },
    {
      name: "Maria G.",
      location: "Rowlett, TX",
      service: "Bi-Weekly Cleaning",
      quote:
        "Same friendly team every visit and my house has never been cleaner. It's such a relief not to spend my weekends scrubbing.",
    },
  ];

  const locations = [
    "Rowlett",
    "Dallas",
    "Plano",
    "Garland",
    "Wylie",
    "Sachse",
    "Murphy",
    "Rockwall",
    "Fort Worth",
    "Arlington",
    "Irving",
    "Carrollton",
    "McKinney",
    "Allen",
    "Frisco",
  ];

  return (
    <div>
      {/* <2 WEEKS BANNER */}
      <section className="hidden md:block bg-gradient-to-r from-accent-600 to-accent-500 text-primary-900 py-4 text-center">
        <div className="max-w-7xl mx-auto px-4">
          <p className="text-lg md:text-xl font-bold">
            ⚡ Commercial Demolition & Junk Removal Completed in Under 2 Weeks
          </p>
        </div>
      </section>

      {/* HERO SECTION */}
      <section className="relative text-white pt-20 pb-24 md:py-32 overflow-hidden" style={{ backgroundImage: "linear-gradient(rgba(15, 23, 42, 0.75), rgba(15, 23, 42, 0.75)), url(/dallas-skyline.webp)", backgroundSize: "cover", backgroundPosition: "center" } as React.CSSProperties}>
        {/* Background accent */}
        <div className="absolute inset-0 opacity-0">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary-50 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-primary-400 rounded-full blur-3xl"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-balance">
                One Call. Every Job Done Right.
              </h1>
              <p className="text-lg md:text-xl text-white mb-8 text-balance">
                Complete property services for residential and commercial customers throughout Dallas-Fort Worth. Cleaning, demolition, junk removal, power washing, and more.
              </p>

              {/* Trust Indicators */}
              <div className="grid grid-cols-2 gap-4 mb-8">
                <div className="flex items-start gap-2">
                  <span className="text-2xl">✓</span>
                  <div>
                    <p className="font-semibold">$2M Liability Insurance</p>
                    <p className="text-sm text-white">Fully covered</p>
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-2xl">✓</span>
                  <div>
                    <p className="font-semibold">5-Star Rated</p>
                    <p className="text-sm text-white">31+ reviews</p>
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-2xl">✓</span>
                  <div>
                    <p className="font-semibold">Background-Checked</p>
                    <p className="text-sm text-white">Team members</p>
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-2xl">✓</span>
                  <div>
                    <p className="font-semibold">Same-Day Service</p>
                    <p className="text-sm text-white">Call before 10 AM</p>
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/quote" className="btn btn-primary btn-primary-lg">
                  Get a Free Quote
                </Link>
                <a
                  href="tel:+14699297722"
                  className="btn bg-accent-500 text-primary-900 hover:bg-accent-400 btn-primary-lg text-center font-bold"
                >
                  Call Now: (469) 929-7722
                </a>
              </div>

              {/* Emergency Appointment Banner */}
              <div className="mt-6 flex justify-center">
                <div className="bg-red-600 text-white px-6 py-3 rounded-full inline-flex items-center gap-2 shadow-lg">
                  <span className="text-lg">⏰</span>
                  <p className="text-sm font-medium">Only a few appointments left this week in your area</p>
                </div>
              </div>
            </div>

            {/* Quick Quote Form */}
            <div>
              <form className="space-y-4">
                <h3 className="text-2xl font-bold text-white mb-6">Quick Quote</h3>

                <div>
                  <input
                    type="text"
                    placeholder="Full Name"
                    className="w-full px-4 py-3 border border-accent-500 rounded-lg bg-transparent text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-accent-500"
                  />
                </div>

                <div>
                  <input
                    type="tel"
                    placeholder="Phone Number"
                    className="w-full px-4 py-3 border border-accent-500 rounded-lg bg-transparent text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-accent-500"
                  />
                </div>

                <div>
                  <input
                    type="email"
                    placeholder="Email Address"
                    className="w-full px-4 py-3 border border-accent-500 rounded-lg bg-transparent text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-accent-500"
                  />
                </div>

                <div>
                  <select className="w-full px-4 py-3 border border-accent-500 rounded-lg bg-transparent text-white focus:outline-none focus:ring-2 focus:ring-accent-500 appearance-none">
                    <option value="" className="bg-primary-800 text-white">Select Service</option>
                    <option value="residential-cleaning" className="bg-primary-800 text-white">Residential Cleaning</option>
                    <option value="deep-cleaning" className="bg-primary-800 text-white">Deep Cleaning</option>
                    <option value="commercial-cleaning" className="bg-primary-800 text-white">Commercial Cleaning</option>
                    <option value="post-construction" className="bg-primary-800 text-white">Post-Construction Cleaning</option>
                    <option value="junk-removal" className="bg-primary-800 text-white">Junk Removal</option>
                    <option value="power-washing" className="bg-primary-800 text-white">Power Washing</option>
                    <option value="handyman" className="bg-primary-800 text-white">Handyman Services</option>
                    <option value="moving" className="bg-primary-800 text-white">Moving Services</option>
                    <option value="demolition" className="bg-primary-800 text-white">Demolition</option>
                    <option value="vacation-rental" className="bg-primary-800 text-white">Vacation Rental Cleaning</option>
                    <option value="move-in-move-out" className="bg-primary-800 text-white">Move-In / Move-Out</option>
                    <option value="landlord" className="bg-primary-800 text-white">Landlord Services</option>
                    <option value="real-estate" className="bg-primary-800 text-white">Real Estate Agents</option>
                  </select>
                </div>

                <div>
                  <input
                    type="text"
                    placeholder="Property Type (House/Office/etc)"
                    className="w-full px-4 py-3 border border-accent-500 rounded-lg bg-transparent text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-accent-500"
                  />
                </div>

                <div>
                  <select className="w-full px-4 py-3 border border-accent-500 rounded-lg bg-transparent text-white focus:outline-none focus:ring-2 focus:ring-accent-500 appearance-none">
                    <option value="" className="bg-primary-800 text-white">When Do You Need Service?</option>
                    <option value="asap" className="bg-primary-800 text-white">ASAP / This Week</option>
                    <option value="next-week" className="bg-primary-800 text-white">Next Week</option>
                    <option value="within-month" className="bg-primary-800 text-white">Within a Month</option>
                    <option value="flexible" className="bg-primary-800 text-white">Flexible</option>
                  </select>
                </div>

                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-accent-500 to-accent-600 text-primary-900 font-bold py-3 rounded-lg hover:from-accent-400 hover:to-accent-500 transition-all"
                >
                  Get Free Quote
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* PROMINENT QUOTE SECTION */}
      <section className="bg-gradient-to-r from-accent-600 to-accent-500 py-16 md:py-24">
        <div className="section-container text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary-900 mb-4">
            How Much Will It Cost?
          </h2>
          <p className="text-lg md:text-xl text-primary-800 mb-8 max-w-2xl mx-auto">
            Get a fast estimate for your project in just a couple of minutes. No obligation, no pressure.
          </p>
          <Link
            href="/quote"
            className="inline-block bg-primary-900 text-white hover:bg-primary-800 font-bold py-4 px-10 rounded-lg transition-all text-lg"
          >
            GET FREE QUOTE NOW
          </Link>
        </div>
      </section>

      {/* TRUST BADGES */}
      <section className="bg-gradient-to-r from-primary-800 to-primary-700 py-12">
        <div className="section-container">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
            <div className="text-center">
              <div className="text-3xl mb-3">🛡️</div>
              <p className="font-bold text-white text-sm">$2M Liability Insurance</p>
              <p className="text-xs text-white opacity-80">Fully insured every job</p>
            </div>
            <div className="text-center">
              <div className="text-3xl mb-3">✓</div>
              <p className="font-bold text-white text-sm">Background-Checked</p>
              <p className="text-xs text-white opacity-80">Every team member</p>
            </div>
            <div className="text-center">
              <div className="text-3xl mb-3">⭐</div>
              <p className="font-bold text-white text-sm">5.0 Google Stars</p>
              <p className="text-xs text-white opacity-80">31+ verified reviews</p>
            </div>
            <div className="text-center">
              <div className="text-3xl mb-3">🤝</div>
              <p className="font-bold text-white text-sm">Latino & Women-Owned</p>
              <p className="text-xs text-white opacity-80">Local Rowlett business</p>
            </div>
            <div className="text-center">
              <div className="text-3xl mb-3">⚡</div>
              <p className="font-bold text-white text-sm">Same-Day Service</p>
              <p className="text-xs text-white opacity-80">Call before 10 AM</p>
            </div>
            <div className="text-center">
              <div className="text-3xl mb-3">🔒</div>
              <p className="font-bold text-white text-sm">Secure & Reliable</p>
              <p className="text-xs text-white opacity-80">Professional service</p>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES SECTION */}
      <section className="section">
        <div className="section-container">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Services</h2>
            <p className="text-lg text-white max-w-2xl mx-auto">
              From routine cleaning to major demolition, we handle every type of property service. One company. Complete solutions.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full">
            {services.map((service, idx) => (
              <Link
                key={idx}
                href={service.href}
                className="group bg-primary-50 border border-gray-200 rounded-xl p-6 hover:border-primary-300 hover:shadow-lg transition-all h-full"
              >
                <h3 className="font-bold text-lg mb-2 group-hover:text-primary-600 transition">
                  {service.title}
                </h3>
                <p className="text-sm text-white mb-3">{service.description}</p>
                <p className="font-bold text-primary-600 text-sm">{service.price}</p>
              </Link>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link href="/services" className="btn btn-outline">
              View All Services →
            </Link>
          </div>
        </div>
      </section>

      {/* WHY CHOOSE UFC */}
      <section className="section bg-primary-800">
        <div className="section-container">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
              Why Choose UFC Cleaning?
            </h2>

            <div className="space-y-6">
              <div>
                <div>
                  <h3 className="font-bold text-lg mb-2">All-in-One Service</h3>
                  <p className="text-white">
                    Stop juggling multiple vendors. UFC handles cleaning, demolition, junk removal, power washing, moving, handyman work, and more. Make one call, get everything done.
                  </p>
                </div>
              </div>

              <div>
                <div>
                  <h3 className="font-bold text-lg mb-2">
                    $2 Million General Liability Insurance
                  </h3>
                  <p className="text-white">
                    Every job is fully insured and protected. We carry more insurance than most companies our size.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div style={{display: 'none'}}>
                  3
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-2">Background-Checked Team</h3>
                  <p className="text-white">
                    Every team member passes a thorough background check before entering any home or business. You always know exactly who is walking through your door.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div style={{display: 'none'}}>
                  4
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-2">Same-Day & Next-Day Service</h3>
                  <p className="text-white">
                    Call before 10 AM for same-day service. We're available Monday through Sunday across all of DFW with flexible scheduling.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div style={{display: 'none'}}>
                  5
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-2">
                    Satisfaction Guarantee
                  </h3>
                  <p className="text-white">
                    If you're not happy, we come back and make it right — no questions asked. Built on repeat customers and referrals, not one-time deals.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div style={{display: 'none'}}>
                  6
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-2">Priority Scheduling</h3>
                  <p className="text-white">
                    Recurring customers get guaranteed priority scheduling. Book your regular day and we'll be there.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* BEFORE/AFTER SHOWCASE */}
      <section className="section">
        <div className="section-container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">Real Results from UFC Cleaning</h2>
            <p className="text-lg text-white">See the transformation our team delivers</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div>
              <div className="mb-4 text-center">
                <h3 className="text-xl font-bold text-white mb-2">Project 1</h3>
              </div>
              <BeforeAfterSlider
                before="/projects/project1-before.jpg"
                after="/projects/project1-after.jpg"
                alt="Residential cleaning project"
              />
            </div>
            <div>
              <div className="mb-4 text-center">
                <h3 className="text-xl font-bold text-white mb-2">Project 2</h3>
              </div>
              <BeforeAfterSlider
                before="/projects/project2-before.jpg"
                after="/projects/project2-after.jpg"
                alt="Commercial cleaning project"
              />
            </div>
            <div>
              <div className="mb-4 text-center">
                <h3 className="text-xl font-bold text-white mb-2">Project 3</h3>
              </div>
              <BeforeAfterSlider
                before="/projects/project3-before.jpg"
                after="/projects/project3-after.jpg"
                alt="Post-construction cleanup project"
              />
            </div>
          </div>
        </div>
      </section>

      {/* RESIDENTIAL SERVICES HIGHLIGHT */}
      <section className="section">
        <div className="section-container">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Services for Homeowners
              </h2>
              <p className="text-lg text-white mb-6">
                Whether you're looking to maintain your home, prepare to move, renovate, or handle a major cleanup, UFC Cleaning has the expertise and resources to help.
              </p>

              <div className="space-y-3 mb-8">
                <div className="flex items-center gap-3">
                  <span className="text-primary-600 font-bold">✓</span>
                  <span>Residential cleaning (one-time or recurring)</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-primary-600 font-bold">✓</span>
                  <span>Deep cleaning with full appliance detail</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-primary-600 font-bold">✓</span>
                  <span>Move-in/Move-out deep clean</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-primary-600 font-bold">✓</span>
                  <span>Post-renovation and construction cleanup</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-primary-600 font-bold">✓</span>
                  <span>Junk removal and estate cleanouts</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-primary-600 font-bold">✓</span>
                  <span>Power washing and exterior cleaning</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-primary-600 font-bold">✓</span>
                  <span>Handyman services for rental prep</span>
                </div>
              </div>

              <Link href="/services/residential-cleaning" className="btn btn-primary">
                Explore Residential Services →
              </Link>
            </div>

            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Services for Businesses
              </h2>
              <p className="text-lg text-white mb-6">
                Keep your commercial property clean, organized, and professional. From routine maintenance to major projects, UFC works before hours, after hours, or around your schedule.
              </p>

              <div className="space-y-3 mb-8">
                <div className="flex items-center gap-3">
                  <span className="text-primary-600 font-bold">✓</span>
                  <span>Office and retail cleaning</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-primary-600 font-bold">✓</span>
                  <span>Medical facility and restaurant cleaning</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-primary-600 font-bold">✓</span>
                  <span>Warehouse and industrial properties</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-primary-600 font-bold">✓</span>
                  <span>Apartment and property manager services</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-primary-600 font-bold">✓</span>
                  <span>Post-construction and demolition cleanup</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-primary-600 font-bold">✓</span>
                  <span>Before/after hours availability</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-primary-600 font-bold">✓</span>
                  <span>Custom scheduling for project work</span>
                </div>
              </div>

              <Link href="/services/commercial-cleaning" className="btn btn-primary">
                Explore Commercial Services →
              </Link>
            </div>

          </div>
        </div>
      </section>

      {/* RECURRING CLEANING PLANS */}
      <section className="section">
        <div className="section-container">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Recurring Cleaning Plans
            </h2>
            <p className="text-lg text-white max-w-2xl mx-auto">
              Lock in your rate and never think about cleaning again. Same friendly team every visit.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <div className="bg-primary-50 border-2 border-gray-200 rounded-xl p-8 hover:border-primary-300 transition text-center">
              <h3 className="text-2xl font-bold mb-2 text-white">Weekly</h3>
              <p className="text-accent-500 font-bold text-3xl mb-4">20% OFF</p>
              <p className="text-white mb-6">Best for busy families and pet owners</p>
              <Link href="/quote?plan=weekly" className="btn btn-primary w-full">
                Start Weekly Plan
              </Link>
            </div>

            <div className="bg-primary-50 border-2 border-primary-300 rounded-xl p-8 relative">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-primary-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                Most Popular
              </div>
              <h3 className="text-2xl font-bold mb-2 text-white">Bi-Weekly</h3>
              <p className="text-accent-500 font-bold text-3xl mb-4">15% OFF</p>
              <p className="text-white mb-6">Best for most homeowners</p>
              <Link href="/quote?plan=biweekly" className="btn btn-primary w-full">
                Start Bi-Weekly Plan
              </Link>
            </div>

            <div className="bg-primary-50 border-2 border-gray-200 rounded-xl p-8 hover:border-primary-300 transition text-center">
              <h3 className="text-2xl font-bold mb-2 text-white">Monthly</h3>
              <p className="text-accent-500 font-bold text-3xl mb-4">5% OFF</p>
              <p className="text-white mb-6">Best for singles and couples</p>
              <Link href="/quote?plan=monthly" className="btn btn-primary w-full">
                Start Monthly Plan
              </Link>
            </div>
          </div>

        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="section bg-primary-800">
        <div className="section-container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">What Our Customers Say</h2>
            <p className="text-lg text-white">
              5.0 stars from 31+ verified Google reviews
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, idx) => (
              <div key={idx} className="bg-primary-50 rounded-xl p-8 border border-gray-200">
                <div className="flex gap-1 mb-4">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <span key={i} className="text-yellow-400">★</span>
                  ))}
                </div>
                <p className="text-white mb-6 italic">"{testimonial.quote}"</p>
                <div className="border-t border-gray-200 pt-4">
                  <p className="font-bold">{testimonial.name}</p>
                  <p className="text-sm text-white">{testimonial.location}</p>
                  <p className="text-sm text-primary-600 font-medium">
                    {testimonial.service}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <a
              href="https://www.google.com/search?q=UFC+Cleaning+Rowlett"
              className="btn btn-outline"
            >
              Read All Reviews on Google →
            </a>
          </div>
        </div>
      </section>

      {/* SERVICE AREAS */}
      <section className="section">
        <div className="section-container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Serving All of DFW</h2>
            <p className="text-lg text-white max-w-2xl mx-auto">
              Headquartered in Rowlett with same-day and next-day service throughout the Dallas-Fort Worth metroplex.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 mb-12">
            {locations.map((location, idx) => (
              <Link
                key={idx}
                href={`/locations/${location.toLowerCase().replace(" ", "-")}`}
                className="text-center p-4 border border-gray-200 rounded-lg hover:border-primary-300 hover:bg-primary-50 transition"
              >
                <p className="font-semibold text-white hover:text-primary-600">
                  {location}
                </p>
              </Link>
            ))}
          </div>

          <div className="text-center">
            <Link href="/locations" className="btn btn-outline">
              View All Service Areas →
            </Link>
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="section bg-primary-600 text-white">
        <div className="section-container text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-lg text-white mb-8 max-w-2xl mx-auto">
            Get a free quote.  Professional pricing.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/quote" className="btn bg-accent-500 text-primary-900 hover:bg-accent-400 font-bold btn-primary-lg">
              Get Free Quote
            </Link>
            <a
              href="tel:+14699297722"
              className="btn bg-primary-700 text-white hover:bg-primary-800 btn-primary-lg"
            >
              Call (469) 929-7722
            </a>
          </div>

          <p className="text-sm text-white mt-6">
            Call before 10 AM for same-day service • Open Monday-Sunday
          </p>
        </div>
      </section>
    </div>
  );
}
