"use client";

import { useState } from "react";

interface QuickQuoteFormData {
  fullName: string;
  phone: string;
  email: string;
  service: string;
  propertyType: string;
  timing: string;
}

export default function QuickQuoteForm() {
  const [formData, setFormData] = useState<QuickQuoteFormData>({
    fullName: "",
    phone: "",
    email: "",
    service: "",
    propertyType: "",
    timing: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.currentTarget;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    setSubmitError(null);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    console.log("[QuickQuoteForm] Form submitted, preventing default");
    e.preventDefault();

    // Validate required fields
    if (
      !formData.fullName ||
      !formData.phone ||
      !formData.email ||
      !formData.service
    ) {
      setSubmitError("Please fill in all required fields");
      return;
    }

    setIsSubmitting(true);
    setSubmitError(null);

    try {
      // Parse name into firstName and lastName
      const nameParts = formData.fullName.trim().split(/\s+/);
      const firstName = nameParts[0];
      const lastName = nameParts.length > 1 ? nameParts.slice(1).join(" ") : "";

      // Prepare payload for backend
      console.log("[QuickQuoteForm] Submitting to /api/jobber with formType: homepage_quick_quote");
      const response = await fetch("/api/jobber", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          formType: "homepage_quick_quote",
          formData: {
            firstName,
            lastName,
            phone: formData.phone,
            email: formData.email,
            service: formData.service,
            propertyType: formData.propertyType || "Not specified",
            timing: formData.timing || "flexible",
            // Required fields for lead persistence
            address: formData.propertyType || "Homepage Quick Quote - Address not provided",
            bedrooms: 0,
            bathrooms: 0,
            frequency: "one-time",
            addOns: [],
            condition: "average",
            notes: `Property Type: ${formData.propertyType || "Not specified"}`,
          },
          totalPrice: 0, // Homepage form doesn't calculate price
        }),
      });

      const result = await response.json();

      if (result.success) {
        setSubmitSuccess(true);

        // Fire Google Ads conversion event
        if (typeof window !== 'undefined' && typeof window.gtag === 'function') {
          window.gtag('event', 'conversion', {
            'send_to': 'AW-18428852483/d_WhCNe0q_IcEIPyx9NE',
            'value': 1.0,
            'currency': 'USD'
          });
        }

        // Reset form
        setFormData({
          fullName: "",
          phone: "",
          email: "",
          service: "",
          propertyType: "",
          timing: "",
        });
        // Show success message for 3 seconds then hide
        setTimeout(() => setSubmitSuccess(false), 3000);
      } else {
        setSubmitError(
          result.error || "Failed to submit quote. Please try again."
        );
      }
    } catch (error) {
      setSubmitError("An error occurred. Please try again later.");
      console.error("Quick quote submission error:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  if (submitSuccess) {
    return (
      <div className="text-center py-12">
        <div className="bg-green-600 text-white px-6 py-4 rounded-lg inline-block">
          <p className="text-lg font-semibold mb-2">✓ Quote Received!</p>
          <p className="text-sm">
            We'll call you shortly to discuss your project.
          </p>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <h3 className="text-2xl font-bold text-white mb-6">Quick Quote</h3>

      <div>
        <input
          type="text"
          name="fullName"
          placeholder="Full Name"
          value={formData.fullName}
          onChange={handleInputChange}
          disabled={isSubmitting}
          className="w-full px-4 py-3 border border-accent-500 rounded-lg bg-transparent text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-accent-500 disabled:opacity-50"
          required
        />
      </div>

      <div>
        <input
          type="tel"
          name="phone"
          placeholder="Phone Number"
          value={formData.phone}
          onChange={handleInputChange}
          disabled={isSubmitting}
          className="w-full px-4 py-3 border border-accent-500 rounded-lg bg-transparent text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-accent-500 disabled:opacity-50"
          required
        />
      </div>

      <div>
        <input
          type="email"
          name="email"
          placeholder="Email Address"
          value={formData.email}
          onChange={handleInputChange}
          disabled={isSubmitting}
          className="w-full px-4 py-3 border border-accent-500 rounded-lg bg-transparent text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-accent-500 disabled:opacity-50"
          required
        />
      </div>

      <div>
        <select
          name="service"
          value={formData.service}
          onChange={handleInputChange}
          disabled={isSubmitting}
          className="w-full px-4 py-3 border border-accent-500 rounded-lg bg-transparent text-white focus:outline-none focus:ring-2 focus:ring-accent-500 appearance-none disabled:opacity-50"
          required
        >
          <option value="" className="bg-primary-800 text-white">
            Select Service
          </option>
          <option value="residential-cleaning" className="bg-primary-800 text-white">
            Residential Cleaning
          </option>
          <option value="deep-cleaning" className="bg-primary-800 text-white">
            Deep Cleaning
          </option>
          <option value="commercial-cleaning" className="bg-primary-800 text-white">
            Commercial Cleaning
          </option>
          <option value="post-construction" className="bg-primary-800 text-white">
            Post-Construction Cleaning
          </option>
          <option value="junk-removal" className="bg-primary-800 text-white">
            Junk Removal
          </option>
          <option value="power-washing" className="bg-primary-800 text-white">
            Power Washing
          </option>
          <option value="handyman" className="bg-primary-800 text-white">
            Handyman Services
          </option>
          <option value="moving" className="bg-primary-800 text-white">
            Moving Services
          </option>
          <option value="demolition" className="bg-primary-800 text-white">
            Demolition
          </option>
          <option value="vacation-rental" className="bg-primary-800 text-white">
            Vacation Rental Cleaning
          </option>
          <option value="move-in-move-out" className="bg-primary-800 text-white">
            Move-In / Move-Out
          </option>
          <option value="landlord" className="bg-primary-800 text-white">
            Landlord Services
          </option>
          <option value="real-estate" className="bg-primary-800 text-white">
            Real Estate Agents
          </option>
        </select>
      </div>

      <div>
        <input
          type="text"
          name="propertyType"
          placeholder="Property Type (House/Office/etc)"
          value={formData.propertyType}
          onChange={handleInputChange}
          disabled={isSubmitting}
          className="w-full px-4 py-3 border border-accent-500 rounded-lg bg-transparent text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-accent-500 disabled:opacity-50"
        />
      </div>

      <div>
        <select
          name="timing"
          value={formData.timing}
          onChange={handleInputChange}
          disabled={isSubmitting}
          className="w-full px-4 py-3 border border-accent-500 rounded-lg bg-transparent text-white focus:outline-none focus:ring-2 focus:ring-accent-500 appearance-none disabled:opacity-50"
        >
          <option value="" className="bg-primary-800 text-white">
            When Do You Need Service?
          </option>
          <option value="asap" className="bg-primary-800 text-white">
            ASAP / This Week
          </option>
          <option value="next-week" className="bg-primary-800 text-white">
            Next Week
          </option>
          <option value="within-month" className="bg-primary-800 text-white">
            Within a Month
          </option>
          <option value="flexible" className="bg-primary-800 text-white">
            Flexible
          </option>
        </select>
      </div>

      {submitError && (
        <div className="bg-red-600 text-white px-4 py-3 rounded-lg text-sm">
          {submitError}
        </div>
      )}

      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full bg-gradient-to-r from-accent-500 to-accent-600 text-primary-900 font-bold py-3 rounded-lg hover:from-accent-400 hover:to-accent-500 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {isSubmitting ? "Submitting..." : "Get Free Quote"}
      </button>
    </form>
  );
}
