import Link from "next/link";

export default function BlogPage() {
  const articles = [
    {
      id: "post-construction-checklist",
      title: "Post-Construction Cleanup Checklist",
      date: "February 2026",
      category: "Commercial",
      excerpt: "Everything that needs to be cleaned after renovation or new construction. A detailed checklist for property owners and managers.",
      slug: "post-construction-checklist",
    },
    {
      id: "rental-turnover-standards",
      title: "Rental Turnover Cleaning Standards",
      date: "January 2026",
      category: "Rental Property",
      excerpt: "What makes a rental property move-in ready. Industry standards and what to expect from professional turnover cleaning.",
      slug: "rental-turnover-standards",
    },
    {
      id: "deep-cleaning-vs-regular",
      title: "Deep Cleaning vs. Regular Cleaning",
      date: "December 2025",
      category: "Residential",
      excerpt: "The difference between weekly maintenance cleaning and deep cleaning. What gets done in each, and when you need which.",
      slug: "deep-cleaning-vs-regular",
    },
    {
      id: "commercial-cleaning-frequency",
      title: "How Often Should Your Office Be Cleaned?",
      date: "November 2025",
      category: "Commercial",
      excerpt: "Cleaning frequency guidelines for different types of businesses. Daily, weekly, and seasonal commercial cleaning recommendations.",
      slug: "commercial-cleaning-frequency",
    },
    {
      id: "junk-removal-donations",
      title: "Junk Removal vs. Donation",
      date: "October 2025",
      category: "Junk Removal",
      excerpt: "When to donate items and when to remove junk. Tax-deductible options and recycling programs in the DFW area.",
      slug: "junk-removal-donations",
    },
    {
      id: "property-maintenance-tips",
      title: "Seasonal Property Maintenance",
      date: "September 2025",
      category: "Property Management",
      excerpt: "Seasonal cleaning and maintenance tasks that keep your property in top condition. What to prioritize in each season.",
      slug: "seasonal-property-maintenance",
    },
  ];

  return (
    <div>
      {/* Hero */}
      <section className="bg-primary-600 text-white py-16">
        <div className="section-container">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Resources & Guides</h1>
          <p className="text-lg text-white">
            Practical guides for property owners, landlords, and business managers in DFW.
          </p>
        </div>
      </section>

      {/* Articles Grid */}
      <section className="section">
        <div className="section-container">
          <div className="grid md:grid-cols-2 gap-6">
            {articles.map((article) => (
              <article key={article.id} className="border border-accent-500 rounded-lg p-6 bg-primary-50 hover:shadow-lg transition">
                <div className="flex gap-2 mb-3">
                  <span className="text-xs bg-accent-500 text-primary-900 px-2 py-1 rounded font-semibold">
                    {article.category}
                  </span>
                  <span className="text-xs text-white mt-1">{article.date}</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-3">
                  {article.title}
                </h3>
                <p className="text-white mb-4">
                  {article.excerpt}
                </p>
                <Link href={`/blog/${article.slug}`} className="text-accent-400 hover:text-accent-300 font-semibold text-sm">
                  Read more →
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section bg-primary-700">
        <div className="section-container max-w-2xl text-center">
          <h2 className="text-3xl font-bold mb-4 text-white">Ready to Get Professional Help?</h2>
          <p className="text-lg text-white mb-8">
            Whether you're planning a renovation, managing rental properties, or maintaining your commercial space, our team is ready to help.
          </p>

          <Link href="/quote" className="btn bg-accent-500 text-primary-900 hover:bg-accent-400 font-bold btn-primary-lg inline-block">
            Get Your Free Quote
          </Link>
        </div>
      </section>
    </div>
  );
}
