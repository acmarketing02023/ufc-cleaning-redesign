"use client";

import { useState, useMemo } from "react";
import Link from "next/link";

export default function SearchPage() {
  const [searchQuery, setSearchQuery] = useState("");

  const services = [
    { name: "Residential Cleaning", href: "/services/residential-cleaning", category: "Service" },
    { name: "Deep Cleaning", href: "/services/deep-cleaning", category: "Service" },
    { name: "Commercial Cleaning", href: "/services/commercial-cleaning", category: "Service" },
    { name: "Post-Construction Cleanup", href: "/services/post-construction-cleanup", category: "Service" },
    { name: "Demolition Services", href: "/services/demolition", category: "Service" },
    { name: "Junk Removal", href: "/services/junk-removal", category: "Service" },
    { name: "Power Washing", href: "/services/power-washing", category: "Service" },
    { name: "Handyman Services", href: "/services/handyman", category: "Service" },
    { name: "Moving Services", href: "/services/moving", category: "Service" },
    { name: "Vacation Rental Cleaning", href: "/services/vacation-rental-cleaning", category: "Service" },
    { name: "Move-In / Move-Out Cleaning", href: "/services/move-in-move-out", category: "Service" },
    { name: "Landlord Services", href: "/services/landlord-services", category: "Service" },
  ];

  const locations = [
    { name: "Rowlett", href: "/locations", city: "Rowlett" },
    { name: "Dallas", href: "/locations", city: "Dallas" },
    { name: "Plano", href: "/locations", city: "Plano" },
    { name: "Garland", href: "/locations", city: "Garland" },
    { name: "Frisco", href: "/locations", city: "Frisco" },
    { name: "Arlington", href: "/locations", city: "Arlington" },
    { name: "Fort Worth", href: "/locations", city: "Fort Worth" },
    { name: "Irving", href: "/locations", city: "Irving" },
    { name: "Carrollton", href: "/locations", city: "Carrollton" },
    { name: "McKinney", href: "/locations", city: "McKinney" },
    { name: "Allen", href: "/locations", city: "Allen" },
    { name: "Wylie", href: "/locations", city: "Wylie" },
    { name: "Sachse", href: "/locations", city: "Sachse" },
    { name: "Murphy", href: "/locations", city: "Murphy" },
    { name: "Rockwall", href: "/locations", city: "Rockwall" },
  ];

  const pages = [
    { name: "Home", href: "/", category: "Page" },
    { name: "About Us", href: "/about", category: "Page" },
    { name: "Services", href: "/services", category: "Page" },
    { name: "Service Areas", href: "/locations", category: "Page" },
    { name: "Get a Quote", href: "/quote", category: "Page" },
    { name: "FAQ", href: "/faq", category: "Page" },
    { name: "Resources", href: "/blog", category: "Page" },
  ];

  const allSearchable = [...services, ...locations, ...pages];

  const results = useMemo(() => {
    if (!searchQuery.trim()) return [];
    
    const query = searchQuery.toLowerCase();
    return allSearchable.filter((item) =>
      item.name.toLowerCase().includes(query)
    );
  }, [searchQuery]);

  return (
    <div>
      {/* Hero */}
      <section className="bg-primary-600 text-white py-16">
        <div className="section-container">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Search</h1>
          <p className="text-lg text-white">
            Find the service or location you're looking for.
          </p>
        </div>
      </section>

      {/* Search */}
      <section className="section">
        <div className="section-container max-w-2xl">
          <div className="mb-8">
            <input
              type="text"
              placeholder="Search for a service, location, or page..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full px-6 py-4 text-lg border border-accent-500 rounded-lg bg-white text-primary-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-accent-500"
              autoFocus
            />
          </div>

          {/* Results */}
          {searchQuery.trim() && (
            <div>
              {results.length > 0 ? (
                <div>
                  <p className="text-white mb-6">
                    Found {results.length} result{results.length !== 1 ? "s" : ""}
                  </p>
                  <div className="space-y-3">
                    {results.map((result, idx) => {
                      let category = "Location";
                      if ("category" in result) {
                        if (result.category === "Service") category = "Service";
                        else if (result.category === "Page") category = "Page";
                      }

                      return (
                        <Link
                          key={idx}
                          href={result.href}
                          className="block p-4 bg-primary-50 border border-accent-500 rounded-lg hover:bg-primary-100 hover:shadow-lg transition"
                        >
                          <div className="flex justify-between items-start">
                            <div>
                              <h3 className="font-bold text-white text-lg">{result.name}</h3>
                              <p className="text-accent-400 text-sm mt-1">{category}</p>
                            </div>
                            <span className="text-accent-400 text-lg">→</span>
                          </div>
                        </Link>
                      );
                    })}
                  </div>
                </div>
              ) : (
                <div className="text-center py-12">
                  <p className="text-white text-lg mb-6">
                    No results found for "{searchQuery}"
                  </p>
                  <p className="text-white mb-6">
                    Try a different search term or browse our services.
                  </p>
                  <Link href="/services" className="btn bg-accent-500 text-primary-900 hover:bg-accent-400 font-bold">
                    View All Services
                  </Link>
                </div>
              )}
            </div>
          )}

          {!searchQuery.trim() && (
            <div>
              <h2 className="text-2xl font-bold text-white mb-6">Popular Searches</h2>
              <div className="grid md:grid-cols-2 gap-4">
                {services.slice(0, 6).map((service, idx) => (
                  <Link
                    key={idx}
                    href={service.href}
                    className="p-4 bg-primary-50 border border-accent-500 rounded-lg hover:bg-primary-100 transition text-white font-semibold"
                  >
                    {service.name}
                  </Link>
                ))}
              </div>

              <h2 className="text-2xl font-bold text-white mb-6 mt-12">Popular Locations</h2>
              <div className="grid md:grid-cols-2 gap-4">
                {locations.slice(0, 6).map((location, idx) => (
                  <Link
                    key={idx}
                    href={location.href}
                    className="p-4 bg-primary-50 border border-accent-500 rounded-lg hover:bg-primary-100 transition text-white font-semibold"
                  >
                    {location.name}
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
