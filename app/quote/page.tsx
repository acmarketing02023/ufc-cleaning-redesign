"use client";

import { useState } from "react";
import Link from "next/link";

interface QuoteFormData {
  service: string;
  bedrooms: number;
  bathrooms: number;
  frequency: string;
  addOns: string[];
  timing: string;
  firstName: string;
  lastName: string;
  phone: string;
  email: string;
  address: string;
  notes: string;
}

const serviceOptions = [
  { id: "residential-cleaning", name: "Residential Cleaning", basePrice: 169 },
  { id: "deep-cleaning", name: "Deep Cleaning", basePrice: 199 },
  { id: "commercial-cleaning", name: "Commercial Cleaning", basePrice: 120 },
  { id: "post-construction", name: "Post-Construction Cleanup", basePrice: 250 },
  { id: "junk-removal", name: "Junk Removal", basePrice: 149 },
  { id: "power-washing", name: "Power Washing", basePrice: 99 },
  { id: "moving", name: "Moving Services", basePrice: 299 },
  { id: "demolition", name: "Demolition Services", basePrice: 500 },
];

const addOnOptions = [
  { id: "interior-oven", name: "Interior Oven Cleaning", price: 100 },
  { id: "window-cleaning", name: "Window Cleaning", price: 80 },
  { id: "carpet-cleaning", name: "Carpet Cleaning", price: 150 },
  { id: "upholstery", name: "Upholstery Cleaning", price: 120 },
  { id: "grout-cleaning", name: "Grout Cleaning", price: 90 },
];

export default function QuotePage() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState<QuoteFormData>({
    service: "",
    bedrooms: 2,
    bathrooms: 1,
    frequency: "one-time",
    addOns: [],
    timing: "flexible",
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    address: "",
    notes: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const calculatePrice = () => {
    if (!formData.service) return 0;

    const service = serviceOptions.find((s) => s.id === formData.service);
    if (!service) return 0;

    let price = service.basePrice;

    // Add-ons
    const addOnPrices = formData.addOns.reduce((total, addOnId) => {
      const addOn = addOnOptions.find((a) => a.id === addOnId);
      return total + (addOn?.price || 0);
    }, 0);

    // For cleaning services, adjust by property size (bedrooms/bathrooms proxy)
    if (
      ["residential-cleaning", "deep-cleaning", "post-construction"].includes(
        formData.service
      )
    ) {
      const roomFactor = (formData.bedrooms + formData.bathrooms) * 10;
      price += roomFactor;
    }

    // Frequency multiplier
    if (formData.frequency === "recurring") {
      price *= 0.8; // 20% discount for recurring
    }

    return Math.round(price + addOnPrices);
  };

  const totalPrice = calculatePrice();
  const totalSteps = 5;

  const handleBack = () => {
    if (step > 1) setStep(step - 1);
  };

  const handleServiceSelect = (serviceId: string) => {
    setFormData({ ...formData, service: serviceId });
    // Auto-advance to step 2
    setTimeout(() => setStep(2), 300);
  };

  const handleAddOnToggle = (addOnId: string) => {
    setFormData((prev) => ({
      ...prev,
      addOns: prev.addOns.includes(addOnId)
        ? prev.addOns.filter((id) => id !== addOnId)
        : [...prev.addOns, addOnId],
    }));
  };

  const handleTimingSelect = (timingId: string) => {
    setFormData({ ...formData, timing: timingId });
    // Auto-advance to step 5 (contact info)
    setTimeout(() => setStep(5), 300);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    // Here you would send the data to your backend/CRM
    console.log("Quote submitted:", formData);
  };

  if (submitted) {
    return (
      <div>
        <section className="bg-primary-600 text-white py-16">
          <div className="section-container">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Quote Submitted!</h1>
            <p className="text-lg text-white">
              Thank you for using our quote tool. We'll call you shortly to confirm details.
            </p>
          </div>
        </section>

        <section className="section">
          <div className="section-container max-w-2xl">
            <div className="bg-primary-50 border-2 border-accent-500 rounded-xl p-8">
              <h2 className="text-3xl font-bold text-primary-900 mb-6">Your Quote Summary</h2>

              <div className="space-y-4 mb-8">
                <div className="flex justify-between">
                  <span className="font-semibold text-primary-900">Service:</span>
                  <span className="text-primary-900">
                    {serviceOptions.find((s) => s.id === formData.service)?.name}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="font-semibold text-primary-900">Contact:</span>
                  <span className="text-primary-900">
                    {formData.firstName} {formData.lastName}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="font-semibold text-primary-900">Phone:</span>
                  <span className="text-primary-900">{formData.phone}</span>
                </div>
                <div className="border-t border-accent-500 pt-4 mt-4">
                  <div className="flex justify-between items-center">
                    <span className="text-xl font-bold text-primary-900">Estimated Price:</span>
                    <span className="text-3xl font-bold text-accent-600">${totalPrice}</span>
                  </div>
                </div>
              </div>

              <p className="text-primary-900 mb-6">
                We'll call you at <strong>{formData.phone}</strong> to confirm your service details and
                lock in this price.
              </p>

              <Link
                href="/"
                className="block w-full btn bg-accent-500 text-primary-900 hover:bg-accent-400 font-bold text-center py-3"
              >
                Back to Home
              </Link>
            </div>
          </div>
        </section>
      </div>
    );
  }

  return (
    <div>
      {/* Hero */}
      <section className="bg-primary-600 text-white py-16">
        <div className="section-container">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Get Your Free Quote</h1>
          <p className="text-lg text-white">
            Professional pricing. Real-time estimates. No obligations.
          </p>
        </div>
      </section>

      {/* Quote Form Section */}
      <section className="section">
        <div className="section-container max-w-3xl">
          {/* Progress Bar */}
          <div className="mb-8">
            <div className="flex justify-between items-center mb-3">
              <span className="text-white font-semibold">
                Step {step} of {totalSteps}
              </span>
              <span className="text-accent-400 font-semibold">
                {Math.round((step / totalSteps) * 100)}% Complete
              </span>
            </div>
            <div className="w-full bg-primary-700 rounded-full h-3">
              <div
                className="bg-gradient-to-r from-accent-500 to-accent-600 h-3 rounded-full transition-all duration-300"
                style={{ width: `${(step / totalSteps) * 100}%` }}
              ></div>
            </div>
          </div>

          {/* Current Price Display */}
          <div className="bg-gradient-to-r from-accent-600 to-accent-500 rounded-xl p-6 mb-8">
            <p className="text-primary-900 text-sm font-semibold mb-2">Estimated Price</p>
            <div className="text-4xl font-bold text-primary-900">${totalPrice}</div>
            {formData.frequency === "recurring" && (
              <p className="text-primary-800 text-sm mt-2">
                ✓ 20% recurring discount applied
              </p>
            )}
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-8">
            {/* Step 1: Service Selection */}
            {step === 1 && (
              <div>
                <h2 className="text-2xl font-bold text-white mb-6">
                  What can we help you with?
                </h2>
                <div className="space-y-3">
                  {serviceOptions.map((service) => (
                    <button
                      key={service.id}
                      type="button"
                      onClick={() => handleServiceSelect(service.id)}
                      className="w-full flex items-center p-4 border-2 border-primary-600 rounded-lg cursor-pointer hover:bg-primary-700 hover:border-accent-500 transition text-left"
                    >
                      <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center mr-4 ${formData.service === service.id ? 'border-accent-500 bg-accent-500' : 'border-gray-400'}`}>
                        {formData.service === service.id && <div className="w-2 h-2 bg-primary-900"></div>}
                      </div>
                      <span className="flex-1 text-white font-medium">
                        {service.name}
                      </span>
                      <span className="text-accent-400 font-semibold">
                        From ${service.basePrice}
                      </span>
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Step 2: Property Details */}
            {step === 2 && (
              <div>
                <h2 className="text-2xl font-bold text-white mb-6">Tell us about your space</h2>
                <div className="space-y-6">
                  <div>
                    <label className="block text-white font-semibold mb-3">
                      How many bedrooms?
                    </label>
                    <input
                      type="range"
                      min="0"
                      max="10"
                      value={formData.bedrooms}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          bedrooms: parseInt(e.target.value),
                        })
                      }
                      className="w-full h-2 bg-primary-700 rounded-lg appearance-none cursor-pointer"
                    />
                    <div className="text-center text-accent-400 font-bold text-xl mt-2">
                      {formData.bedrooms} Bedrooms
                    </div>
                  </div>

                  <div>
                    <label className="block text-white font-semibold mb-3">
                      How many bathrooms?
                    </label>
                    <input
                      type="range"
                      min="0"
                      max="8"
                      value={formData.bathrooms}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          bathrooms: parseInt(e.target.value),
                        })
                      }
                      className="w-full h-2 bg-primary-700 rounded-lg appearance-none cursor-pointer"
                    />
                    <div className="text-center text-accent-400 font-bold text-xl mt-2">
                      {formData.bathrooms} Bathrooms
                    </div>
                  </div>

                  <div>
                    <label className="block text-white font-semibold mb-3">
                      How often do you need this service?
                    </label>
                    <select
                      value={formData.frequency}
                      onChange={(e) =>
                        setFormData({ ...formData, frequency: e.target.value })
                      }
                      className="w-full px-4 py-3 border border-accent-500 rounded-lg bg-primary-700 text-white focus:outline-none focus:ring-2 focus:ring-accent-500"
                    >
                      <option value="one-time">One Time</option>
                      <option value="weekly">Weekly</option>
                      <option value="bi-weekly">Bi-Weekly</option>
                      <option value="monthly">Monthly</option>
                      <option value="recurring">Recurring (20% Discount)</option>
                    </select>
                  </div>
                </div>
              </div>
            )}

            {/* Step 3: Add-Ons */}
            {step === 3 && (
              <div>
                <h2 className="text-2xl font-bold text-white mb-6">Any add-ons?</h2>
                <p className="text-white mb-6">Select services to add to your quote</p>
                <div className="space-y-3">
                  {addOnOptions.map((addOn) => (
                    <label
                      key={addOn.id}
                      className="flex items-center p-4 border-2 border-primary-600 rounded-lg cursor-pointer hover:bg-primary-700 transition"
                    >
                      <input
                        type="checkbox"
                        checked={formData.addOns.includes(addOn.id)}
                        onChange={() => handleAddOnToggle(addOn.id)}
                        className="w-5 h-5 text-accent-500 cursor-pointer"
                      />
                      <span className="ml-4 flex-1 text-white font-medium">
                        {addOn.name}
                      </span>
                      <span className="text-accent-400 font-semibold">
                        +${addOn.price}
                      </span>
                    </label>
                  ))}
                </div>
              </div>
            )}

            {/* Step 4: Timing */}
            {step === 4 && (
              <div>
                <h2 className="text-2xl font-bold text-white mb-6">When do you need service?</h2>
                <div className="space-y-3">
                  {[
                    { id: "asap", label: "ASAP / Same Day" },
                    { id: "this-week", label: "This Week" },
                    { id: "next-week", label: "Next Week" },
                    { id: "flexible", label: "Flexible" },
                  ].map((timing) => (
                    <button
                      key={timing.id}
                      type="button"
                      onClick={() => handleTimingSelect(timing.id)}
                      className="w-full flex items-center p-4 border-2 border-primary-600 rounded-lg cursor-pointer hover:bg-primary-700 hover:border-accent-500 transition text-left"
                    >
                      <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center mr-4 ${formData.timing === timing.id ? 'border-accent-500 bg-accent-500' : 'border-gray-400'}`}>
                        {formData.timing === timing.id && <div className="w-2 h-2 bg-primary-900"></div>}
                      </div>
                      <span className="flex-1 text-white font-medium">
                        {timing.label}
                      </span>
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Step 5: Contact Info */}
            {step === 5 && (
              <div>
                <h2 className="text-2xl font-bold text-white mb-6">Your Information</h2>
                <div className="space-y-4">
                  <div>
                    <label className="block text-white font-semibold mb-2">
                      First Name
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.firstName}
                      onChange={(e) =>
                        setFormData({ ...formData, firstName: e.target.value })
                      }
                      className="w-full px-4 py-3 border border-gray-400 rounded-lg bg-white text-primary-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-accent-500"
                      placeholder="John"
                    />
                  </div>

                  <div>
                    <label className="block text-white font-semibold mb-2">
                      Last Name
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.lastName}
                      onChange={(e) =>
                        setFormData({ ...formData, lastName: e.target.value })
                      }
                      className="w-full px-4 py-3 border border-gray-400 rounded-lg bg-white text-primary-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-accent-500"
                      placeholder="Smith"
                    />
                  </div>

                  <div>
                    <label className="block text-white font-semibold mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) =>
                        setFormData({ ...formData, phone: e.target.value })
                      }
                      className="w-full px-4 py-3 border border-gray-400 rounded-lg bg-white text-primary-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-accent-500"
                      placeholder="(469) 929-7722"
                    />
                  </div>

                  <div>
                    <label className="block text-white font-semibold mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                      className="w-full px-4 py-3 border border-gray-400 rounded-lg bg-white text-primary-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-accent-500"
                      placeholder="john@example.com"
                    />
                  </div>

                  <div>
                    <label className="block text-white font-semibold mb-2">
                      Service Address
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.address}
                      onChange={(e) =>
                        setFormData({ ...formData, address: e.target.value })
                      }
                      className="w-full px-4 py-3 border border-gray-400 rounded-lg bg-white text-primary-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-accent-500"
                      placeholder="123 Main St, Rowlett, TX 75089"
                    />
                  </div>

                  <div>
                    <label className="block text-white font-semibold mb-2">
                      Anything else we should know? (Optional)
                    </label>
                    <textarea
                      value={formData.notes}
                      onChange={(e) =>
                        setFormData({ ...formData, notes: e.target.value })
                      }
                      className="w-full px-4 py-3 border border-gray-400 rounded-lg bg-white text-primary-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-accent-500"
                      placeholder="Any special requests or details..."
                      rows={4}
                    />
                  </div>
                </div>
              </div>
            )}

            {/* Navigation Buttons */}
            <div className="flex gap-4 pt-8">
              {step > 1 && (
                <button
                  type="button"
                  onClick={handleBack}
                  className="flex-1 btn bg-primary-700 text-white hover:bg-primary-600 font-bold border border-accent-500"
                >
                  ← Back
                </button>
              )}

              {step === 2 && (
                <button
                  type="button"
                  onClick={() => setStep(3)}
                  className="flex-1 btn bg-accent-500 text-primary-900 hover:bg-accent-400 font-bold"
                >
                  Next →
                </button>
              )}

              {step === 3 && (
                <button
                  type="button"
                  onClick={() => setStep(4)}
                  className="flex-1 btn bg-accent-500 text-primary-900 hover:bg-accent-400 font-bold"
                >
                  Next →
                </button>
              )}

              {step === 5 && (
                <button
                  type="submit"
                  className="flex-1 btn bg-accent-500 text-primary-900 hover:bg-accent-400 font-bold text-lg py-4"
                >
                  Get My Estimate
                </button>
              )}
            </div>
          </form>
        </div>
      </section>
    </div>
  );
}
