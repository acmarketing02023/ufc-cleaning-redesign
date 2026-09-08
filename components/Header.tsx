"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-gradient-to-r from-primary-800 to-primary-700 border-b border-accent-600">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center flex-shrink-0 mr-6">
            <Image
              src="/ufc-logo.png"
              alt="UFC Cleaning Logo"
              width={80}
              height={80}
              className="h-20 w-auto quality-high"
              priority
              quality={95}
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <Link href="/" className="text-sm font-medium text-white hover:text-white transition">
              Home
            </Link>
            <div className="relative group">
              <button className="text-sm font-medium text-white hover:text-white transition">
                Services
              </button>
              <div className="absolute left-0 mt-0 w-56 bg-primary-700 border border-accent-500 rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all py-2 z-50">
                <Link
                  href="/services"
                  className="block px-4 py-2 text-sm text-white hover:bg-primary-600 font-semibold"
                >
                  All Services
                </Link>
                <hr className="border-primary-600 my-2" />
                <Link
                  href="/services/residential-cleaning"
                  className="block px-4 py-2 text-sm text-white hover:bg-primary-600"
                >
                  Residential Cleaning
                </Link>
                <Link
                  href="/services/deep-cleaning"
                  className="block px-4 py-2 text-sm text-white hover:bg-primary-600"
                >
                  Deep Cleaning
                </Link>
                <Link
                  href="/services/commercial-cleaning"
                  className="block px-4 py-2 text-sm text-white hover:bg-primary-600"
                >
                  Commercial Cleaning
                </Link>
                <Link
                  href="/services/post-construction-cleanup"
                  className="block px-4 py-2 text-sm text-white hover:bg-primary-600"
                >
                  Post-Construction Cleaning
                </Link>
                <Link
                  href="/services/junk-removal"
                  className="block px-4 py-2 text-sm text-white hover:bg-primary-600"
                >
                  Junk Removal
                </Link>
                <Link
                  href="/services/power-washing"
                  className="block px-4 py-2 text-sm text-white hover:bg-primary-600"
                >
                  Power Washing
                </Link>
                <Link
                  href="/services/handyman"
                  className="block px-4 py-2 text-sm text-white hover:bg-primary-600"
                >
                  Handyman Services
                </Link>
                <Link
                  href="/services/moving"
                  className="block px-4 py-2 text-sm text-white hover:bg-primary-600"
                >
                  Moving Services
                </Link>
                <Link
                  href="/services/demolition"
                  className="block px-4 py-2 text-sm text-white hover:bg-primary-600"
                >
                  Demolition
                </Link>
                <hr className="border-primary-600 my-2" />
                <Link
                  href="/services/vacation-rental-cleaning"
                  className="block px-4 py-2 text-sm text-white hover:bg-primary-600"
                >
                  Vacation Rental Cleaning
                </Link>
                <Link
                  href="/services/move-in-move-out"
                  className="block px-4 py-2 text-sm text-white hover:bg-primary-600"
                >
                  Move-In / Move-Out
                </Link>
                <Link
                  href="/services/landlord-services"
                  className="block px-4 py-2 text-sm text-white hover:bg-primary-600"
                >
                  Landlord Services
                </Link>
                <Link
                  href="/services/real-estate-agents"
                  className="block px-4 py-2 text-sm text-white hover:bg-primary-600"
                >
                  Real Estate Agents
                </Link>
              </div>
            </div>
            <div className="relative group">
              <button className="text-sm font-medium text-white hover:text-white transition">
                Service Areas
              </button>
              <div className="absolute left-0 mt-0 w-48 bg-primary-700 border border-accent-500 rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all py-2 z-50">
                <Link
                  href="/locations"
                  className="block px-4 py-2 text-sm text-white font-semibold hover:bg-primary-600"
                >
                  All Locations
                </Link>
                <hr className="border-primary-600 my-2" />
                <div className="px-4 py-2 text-sm text-white">Rowlett, TX</div>
                <div className="px-4 py-2 text-sm text-white">Dallas, TX</div>
                <div className="px-4 py-2 text-sm text-white">Garland, TX</div>
                <div className="px-4 py-2 text-sm text-white">Plano, TX</div>
                <div className="px-4 py-2 text-sm text-white">Wylie, TX</div>
                <div className="px-4 py-2 text-sm text-white">Sachse, TX</div>
                <div className="px-4 py-2 text-sm text-white">Murphy, TX</div>
                <div className="px-4 py-2 text-sm text-white">Rockwall, TX</div>
                <div className="px-4 py-2 text-sm text-white">Fort Worth, TX</div>
                <div className="px-4 py-2 text-sm text-white">Arlington, TX</div>
                <div className="px-4 py-2 text-sm text-white">Irving, TX</div>
                <div className="px-4 py-2 text-sm text-white">Carrollton, TX</div>
                <div className="px-4 py-2 text-sm text-white">McKinney, TX</div>
                <div className="px-4 py-2 text-sm text-white">Allen, TX</div>
                <div className="px-4 py-2 text-sm text-white">Frisco, TX</div>
              </div>
            </div>
            <Link href="/about" className="text-sm font-medium text-white hover:text-white transition">
              About
            </Link>
            <Link href="/contact" className="text-sm font-medium text-white hover:text-white transition">
              Contact
            </Link>
            <Link href="/landlords" className="text-sm font-medium text-white hover:text-white transition">
              For Landlords
            </Link>
            <Link href="/agents" className="text-sm font-medium text-white hover:text-white transition">
              For Agents
            </Link>
            <Link href="/search" className="text-sm font-medium text-white hover:text-white transition">
              Search
            </Link>
          </nav>

          {/* Right side actions */}
          <div className="flex items-center gap-4">
            <Link
              href="/quote"
              className="hidden md:inline-block btn btn-primary text-sm md:text-base"
            >
              Get Free Quote
            </Link>

            {/* Mobile menu toggle */}
            <button
              className="md:hidden p-2 text-white"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <nav className="md:hidden pb-4 border-t border-accent-600 bg-primary-700">
            <Link
              href="/"
              className="block px-4 py-2 text-sm font-medium text-white hover:bg-primary-600"
            >
              Home
            </Link>
            <Link
              href="/services"
              className="block px-4 py-2 text-sm font-medium text-white hover:bg-primary-600"
            >
              Services
            </Link>
            <Link
              href="/locations"
              className="block px-4 py-2 text-sm font-medium text-white hover:bg-primary-600"
            >
              Service Areas
            </Link>
            <Link
              href="/about"
              className="block px-4 py-2 text-sm font-medium text-white hover:bg-primary-600"
            >
              About
            </Link>
            <Link
              href="/contact"
              className="block px-4 py-2 text-sm font-medium text-white hover:bg-primary-600"
            >
              Contact
            </Link>
            <Link
              href="/landlords"
              className="block px-4 py-2 text-sm font-medium text-white hover:bg-primary-600"
            >
              For Landlords
            </Link>
            <Link
              href="/agents"
              className="block px-4 py-2 text-sm font-medium text-white hover:bg-primary-600"
            >
              For Agents
            </Link>
            <Link
              href="/search"
              className="block px-4 py-2 text-sm font-medium text-white hover:bg-primary-600"
            >
              Search
            </Link>
            <div className="px-4 py-2">
              <a
                href="tel:+12142182921"
                className="block text-white font-semibold mb-3"
              >
                (214) 218-2921
              </a>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}
