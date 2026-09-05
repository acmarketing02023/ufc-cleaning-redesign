import Link from "next/link";

export default function AboutPage() {
  return (
    <div>
      {/* Hero */}
      <section className="bg-primary-600 text-white py-16">
        <div className="section-container">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">About UFC Cleaning</h1>
          <p className="text-lg text-white">
            From residential cleaning to complete property services. One company. Every job done right.
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section className="section">
        <div className="section-container max-w-3xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">Our Story</h2>

          <div className="space-y-6 text-lg text-white">
            <p>
              Universal Facility Cleaning LLC started as a residential cleaning company serving the Dallas-Fort Worth area. We built our reputation on doing excellent work, showing up on time, and treating every home like it was our own.
            </p>

            <p>
              As we grew, our customers began asking us to handle larger projects. They wanted help with post-construction cleanup, junk removal, power washing, and more. Rather than refer them elsewhere, we expanded.
            </p>

            <p>
              Today, UFC Cleaning is a full-service property company. We handle residential cleaning, deep cleaning, commercial cleaning, junk removal, power washing, post-construction cleanup, handyman work, moving services, and comprehensive demolition. We're no longer just a cleaning company—we're the one call your home or business needs.
            </p>

            <p>
              What hasn't changed is our commitment to treating your property like it's ours, showing up on time, communicating clearly, and delivering exceptional results. We're Latino-owned, women-owned, and proud to serve every neighborhood in DFW with the same standard of care and professionalism.
            </p>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="section">
        <div className="section-container">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Our Values</h2>

          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="w-16 h-16 bg-accent-500 rounded-full flex items-center justify-center mx-auto mb-4 text-primary-900 text-2xl font-bold">1</div>
              <h3 className="font-bold text-xl mb-3">Integrity</h3>
              <p className="text-white">
                No hidden fees. Honest pricing. We stand behind our work with a satisfaction guarantee.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-accent-500 rounded-full flex items-center justify-center mx-auto mb-4 text-primary-900 text-2xl font-bold">2</div>
              <h3 className="font-bold text-xl mb-3">Reliability</h3>
              <p className="text-white">
                Same-day and next-day service. We show up on time, fully prepared, and fully insured.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-accent-500 rounded-full flex items-center justify-center mx-auto mb-4 text-primary-900 text-2xl font-bold">3</div>
              <h3 className="font-bold text-xl mb-3">Excellence</h3>
              <p className="text-white">
                Professional, background-checked team. We treat your property like it's our own.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose */}
      <section className="section">
        <div className="section-container max-w-3xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">Why Choose Us</h2>

          <div className="space-y-4">
            <div className="border-l-4 border-primary-600 pl-6">
              <h3 className="font-bold text-lg mb-2">$2 Million in General Liability Insurance</h3>
              <p className="text-white">
                Every job is fully insured. We carry more insurance than most companies our size.
              </p>
            </div>

            <div className="border-l-4 border-primary-600 pl-6">
              <h3 className="font-bold text-lg mb-2">Background-Checked Team Members</h3>
              <p className="text-white">
                Every person who walks through your door has passed a thorough background check. You know exactly who's working on your property.
              </p>
            </div>

            <div className="border-l-4 border-primary-600 pl-6">
              <h3 className="font-bold text-lg mb-2">5.0 Star Rating from 31+ Verified Reviews</h3>
              <p className="text-white">
                Built on repeat customers and referrals, not one-time deals.
              </p>
            </div>

            <div className="border-l-4 border-primary-600 pl-6">
              <h3 className="font-bold text-lg mb-2">Same-Day and Next-Day Availability</h3>
              <p className="text-white">
                Call before 10 AM for same-day service. Available Monday through Sunday.
              </p>
            </div>

            <div className="border-l-4 border-primary-600 pl-6">
              <h3 className="font-bold text-lg mb-2">One Company, Multiple Services</h3>
              <p className="text-white">
                Stop juggling vendors. UFC handles cleaning, demolition, junk removal, power washing, moving, handyman work, and more.
              </p>
            </div>

            <div className="border-l-4 border-primary-600 pl-6">
              <h3 className="font-bold text-lg mb-2">Satisfaction Guarantee</h3>
              <p className="text-white">
                If you're not happy, we come back and make it right—no questions asked.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Facts Section */}
      <section className="section bg-primary-600 text-white">
        <div className="section-container">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div>
              <p className="text-4xl md:text-5xl font-bold mb-2">31+</p>
              <p className="text-white">5-Star Reviews</p>
            </div>
            <div>
              <p className="text-4xl md:text-5xl font-bold mb-2">DFW</p>
              <p className="text-white">Serving 15+ Cities</p>
            </div>
            <div>
              <p className="text-4xl md:text-5xl font-bold mb-2">$2M</p>
              <p className="text-white">Liability Insurance</p>
            </div>
            <div>
              <p className="text-4xl md:text-5xl font-bold mb-2">9+</p>
              <p className="text-white">Services Offered</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section">
        <div className="section-container text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Experience the UFC Difference?
          </h2>
          <p className="text-lg text-white mb-8 max-w-2xl mx-auto">
            Get a free quote today. See why DFW customers trust UFC Cleaning for all their property service needs.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/quote" className="btn btn-primary btn-primary-lg">
              Get Free Quote
            </Link>
            <a
              href="tel:2148179212"
              className="btn btn-secondary btn-primary-lg"
            >
              Call (214) 817-9212
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
