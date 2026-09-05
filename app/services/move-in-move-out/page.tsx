import Link from "next/link";

export default function MoveInMoveOutPage() {
  return (
    <div>
      <section className="bg-primary-600 text-white py-16">
        <div className="section-container">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Move-In / Move-Out Cleaning</h1>
          <p className="text-lg text-white">Deep cleaning for your transition.</p>
        </div>
      </section>

      <section className="section">
        <div className="section-container max-w-3xl">
          <h2 className="text-3xl font-bold mb-6">Perfect For Property Transitions</h2>
          <p className="text-lg text-white mb-8">
            Whether you're moving in or moving out, our thorough cleaning service ensures your property is spotless.
          </p>

          <h3 className="text-2xl font-bold mb-4">Move-Out Cleaning</h3>
          <p className="text-white mb-6">
            Get your full security deposit back with our professional move-out deep clean. We clean every corner so landlords see a perfectly maintained property.
          </p>

          <h3 className="text-2xl font-bold mb-4">Move-In Cleaning</h3>
          <p className="text-white mb-6">
            Start fresh in your new home. We handle the deep cleaning so you can focus on unpacking and settling in.
          </p>

          <div className="bg-primary-50 rounded-lg p-8 border border-primary-200 mb-12">
            <p className="text-white">
              Perfect for renters protecting their security deposits and new homeowners getting a clean start.
            </p>
          </div>

          <Link href="/quote?service=move-in-move-out" className="btn btn-primary">
            Get Move-In/Move-Out Quote
          </Link>
        </div>
      </section>

      <section className="section bg-primary-600 text-white">
        <div className="section-container text-center">
          <h2 className="text-3xl font-bold mb-6">Moving Soon?</h2>
          <Link href="/quote" className="btn bg-accent-500 text-primary-900 hover:bg-accent-400 font-bold btn-primary-lg inline-block">
            Get Free Quote
          </Link>
        </div>
      </section>
    </div>
  );
}
