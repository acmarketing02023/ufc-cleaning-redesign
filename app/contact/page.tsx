import Link from "next/link";

export default function ContactPage() {
  return (
    <div>
      {/* Hero */}
      <section className="bg-primary-600 text-white py-16">
        <div className="section-container">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Contact Us</h1>
          <p className="text-lg text-white">
            Ready to get started? Reach out today for a free quote.
          </p>
        </div>
      </section>

      {/* Contact Info */}
      <section className="section">
        <div className="section-container">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div className="bg-primary-800 rounded-xl p-8 border border-accent-500 text-center hover:shadow-lg transition">
              <div className="w-16 h-16 bg-accent-500 rounded-full flex items-center justify-center mx-auto mb-4 text-primary-900 text-2xl font-bold">📞</div>
              <h3 className="font-bold text-lg mb-4 text-white">Call Us</h3>
              <div className="space-y-2 mb-4">
                <a
                  href="tel:+12142182921"
                  className="block text-accent-400 font-semibold hover:text-accent-300"
                >
                  (214) 218-2921
                </a>
                <a
                  href="tel:"
                  className="block text-accent-400 font-semibold hover:text-accent-300"
                >
                  (940) 902-3030
                </a>
              </div>
              <p className="text-sm text-white">
                Call before 10 AM for same-day service
              </p>
            </div>

            <div className="bg-primary-800 rounded-xl p-8 border border-accent-500 text-center hover:shadow-lg transition">
              <p className="text-4xl mb-4">✉️</p>
              <h3 className="font-bold text-lg mb-4 text-white">Email</h3>
              <a
                href="mailto:david@ufc-cleaning.com"
                className="text-accent-400 font-semibold hover:text-accent-300 block mb-4"
              >
                david@ufc-cleaning.com
              </a>
              <p className="text-sm text-white">
                We'll respond within 1-2 hours
              </p>
            </div>

            <div className="bg-primary-800 rounded-xl p-8 border border-accent-500 text-center hover:shadow-lg transition">
              <p className="text-4xl mb-4">📍</p>
              <h3 className="font-bold text-lg mb-4 text-white">Visit Us</h3>
              <p className="text-white mb-2">
                8001 Munich Dr<br />
                Rowlett, TX 75089
              </p>
              <p className="text-sm text-white">
                Headquarters in Rowlett
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Hours */}
            <div>
              <h2 className="text-2xl font-bold mb-6">Hours of Operation</h2>
              <div className="space-y-2 text-white">
                <p>
                  <span className="font-semibold">Monday - Sunday:</span> Available
                </p>
                <p>
                  <span className="font-semibold">Same-day service:</span> Call before 10 AM
                </p>
                <p>
                  <span className="font-semibold">Next-day service:</span> Call anytime
                </p>
                <p className="text-sm text-white mt-4">
                  Emergency cleanup available upon request
                </p>
              </div>
            </div>

            {/* Service Areas */}
            <div>
              <h2 className="text-2xl font-bold mb-6">Service Areas</h2>
              <p className="text-white mb-4">
                We serve all of Dallas-Fort Worth including:
              </p>
              <div className="grid grid-cols-2 gap-2 text-sm text-white">
                <p>• Rowlett</p>
                <p>• Dallas</p>
                <p>• Plano</p>
                <p>• Garland</p>
                <p>• Frisco</p>
                <p>• Arlington</p>
                <p>• Fort Worth</p>
                <p>• And more</p>
              </div>
              <Link href="/locations" className="text-accent-500 font-semibold mt-4 inline-block hover:text-accent-400">
                View all service areas →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Links */}
      <section className="section py-12">
        <div className="section-container">
          <h2 className="text-3xl font-bold mb-8 text-center text-white">
            What Can We Help You With?
          </h2>

          <div className="grid md:grid-cols-4 gap-4 max-w-3xl mx-auto">
            <Link
              href="/quote"
              className="bg-primary-700 rounded-lg p-6 text-center hover:shadow-lg transition border border-accent-500"
            >
              <p className="font-semibold text-white">Get a Quote</p>
            </Link>
            <Link
              href="/services"
              className="bg-primary-700 rounded-lg p-6 text-center hover:shadow-lg transition border border-accent-500"
            >
              <p className="font-semibold text-white">View Services</p>
            </Link>
            <Link
              href="/locations"
              className="bg-primary-700 rounded-lg p-6 text-center hover:shadow-lg transition border border-accent-500"
            >
              <p className="font-semibold text-white">Service Areas</p>
            </Link>
            <Link
              href="/about"
              className="bg-primary-700 rounded-lg p-6 text-center hover:shadow-lg transition border border-accent-500"
            >
              <p className="font-semibold text-white">About Us</p>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section bg-primary-600 text-white">
        <div className="section-container text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Let's Get Your Project Done
          </h2>
          <p className="text-lg text-white mb-8 max-w-2xl mx-auto">
            Whether it's a quick question or a complex project, we're here to help.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/quote" className="btn bg-accent-500 text-primary-900 hover:bg-accent-400 font-bold btn-primary-lg">
              Request a Quote
            </Link>
            <a
              href="tel:+12142182921"
              className="btn bg-primary-700 text-white hover:bg-primary-800 btn-primary-lg"
            >
              Call Now
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
