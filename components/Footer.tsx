import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-primary-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8 mb-12">
          {/* Company Info */}
          <div>
            <div className="mb-4">
              <Image
                src="/ufc-logo.png"
                alt="UFC Cleaning Logo"
                width={60}
                height={60}
                className="h-14 w-auto"
              />
            </div>
            <p className="text-white text-sm leading-relaxed">
              Complete property services for residential and commercial customers throughout Dallas-Fort Worth.
            </p>
            <div className="mt-4 flex gap-3">
              <a href="https://www.facebook.com/ufccleaningrowlett" className="w-8 h-8 bg-blue-600 hover:bg-blue-700 rounded flex items-center justify-center transition" title="Facebook">
                <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
              <a href="https://www.instagram.com/ufccleaning" className="w-8 h-8 bg-gradient-to-br from-purple-500 via-pink-500 to-orange-400 hover:opacity-90 rounded flex items-center justify-center transition" title="Instagram">
                <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zM5.838 12a6.162 6.162 0 1 1 12.324 0 6.162 6.162 0 0 1-12.324 0zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm4.965-10.322a1.44 1.44 0 1 1 2.881.001 1.44 1.44 0 0 1-2.881-.001z"/>
                </svg>
              </a>
              <a href="https://www.tiktok.com/@ufccleaning" className="w-8 h-8 bg-black hover:bg-gray-900 rounded flex items-center justify-center transition" title="TikTok">
                <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.1 1.82 2.89 2.89 0 0 1 5.1-1.82V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-.96-.1z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-sm text-white">
              <li>
                <Link href="/services/residential-cleaning" className="hover:text-white transition">
                  Residential Cleaning
                </Link>
              </li>
              <li>
                <Link href="/services/commercial-cleaning" className="hover:text-white transition">
                  Commercial Cleaning
                </Link>
              </li>
              <li>
                <Link href="/services/deep-cleaning" className="hover:text-white transition">
                  Deep Cleaning
                </Link>
              </li>
              <li>
                <Link href="/services/post-construction" className="hover:text-white transition">
                  Post-Construction
                </Link>
              </li>
              <li>
                <Link href="/services/demolition" className="hover:text-white transition">
                  Demolition
                </Link>
              </li>
              <li>
                <Link href="/services/junk-removal" className="hover:text-white transition">
                  Junk Removal
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-white transition font-semibold text-white">
                  View All Services →
                </Link>
              </li>
            </ul>
          </div>

          {/* Locations */}
          <div>
            <h4 className="font-semibold mb-4">Service Areas</h4>
            <ul className="space-y-2 text-sm text-white">
              <li><Link href="/locations/rowlett" className="hover:text-white transition">Rowlett</Link></li>
              <li><Link href="/locations/dallas" className="hover:text-white transition">Dallas</Link></li>
              <li><Link href="/locations/plano" className="hover:text-white transition">Plano</Link></li>
              <li><Link href="/locations/garland" className="hover:text-white transition">Garland</Link></li>
              <li><Link href="/locations/frisco" className="hover:text-white transition">Frisco</Link></li>
              <li><Link href="/locations/arlington" className="hover:text-white transition">Arlington</Link></li>
              <li>
                <Link href="/locations" className="hover:text-white transition font-semibold text-white">
                  View All Areas →
                </Link>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-sm text-white">
              <li><Link href="/" className="hover:text-white transition">Home</Link></li>
              <li><Link href="/about" className="hover:text-white transition">About Us</Link></li>
              <li><Link href="/contact" className="hover:text-white transition">Contact</Link></li>
              <li><Link href="/quote" className="hover:text-white transition">Get a Quote</Link></li>
              <li><a href="https://www.google.com/search?q=UFC+Cleaning+Rowlett" className="hover:text-white transition">Google Reviews</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <div className="space-y-3 text-sm text-white">
              <div>
                <p className="font-semibold text-white mb-1">Email</p>
                <a href="mailto:david@ufc-cleaning.com" className="hover:text-white transition">
                  david@ufc-cleaning.com
                </a>
                <br />
                <a href="mailto:juanita@ufc-cleaning.com" className="hover:text-white transition">
                  juanita@ufc-cleaning.com
                </a>
              </div>
              <div>
                <p className="font-semibold text-white mb-1">Address</p>
                <p>8001 Munich Dr<br />Rowlett, TX 75089</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-white">
          <p>&copy; 2026 Universal Facility Cleaning LLC. All rights reserved.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <Link href="#" className="hover:text-white transition">Terms of Service</Link>
            <Link href="#" className="hover:text-white transition">Privacy Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
