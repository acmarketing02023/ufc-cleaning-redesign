"use client";

import { useState } from "react";
import Link from "next/link";

interface QuoteFormData {
  service: string;
  bedrooms: number;
  bathrooms: number;
  frequency: string;
  addOns: string[];
  condition: string;
  timing: string;
  firstName: string;
  lastName: string;
  phone: string;
  email: string;
  address: string;
  notes: string;
}

const serviceOptions = [
  { id: "standard-clean", name: "Residential - Standard Clean", type: "residential" },
  { id: "deep-clean", name: "Residential - Deep Clean", type: "residential" },
  { id: "move-in-out", name: "Move-In/Move-Out Clean", type: "residential" },
  { id: "vacation-rental", name: "Vacation Rental Cleaning", type: "residential" },
  { id: "commercial-cleaning", name: "Commercial Cleaning", type: "commercial", basePrice: 300 },
  { id: "post-construction", name: "Post-Construction Cleanup", type: "custom", basePrice: 450 },
  { id: "junk-removal", name: "Junk Removal", type: "custom", basePrice: 350 },
  { id: "power-washing", name: "Power Washing", type: "custom", basePrice: 250 },
  { id: "handyman", name: "Handyman Services", type: "custom", basePrice: 80, unit: "per hour" },
  { id: "moving", name: "Moving Services", type: "custom", basePrice: 450 },
  { id: "demolition", name: "Demolition Services", type: "custom", basePrice: 600 },
];

// Pricing table based on bedrooms and bathrooms
const pricingTable: { [key: string]: { [key: string]: number } } = {
  "1br-1ba": { "standard-clean": 169, "deep-clean": 299, "move-in-out": 339 },
  "1br-2ba": { "standard-clean": 189, "deep-clean": 319, "move-in-out": 359 },
  "2br-1ba": { "standard-clean": 209, "deep-clean": 339, "move-in-out": 379 },
  "2br-2ba": { "standard-clean": 249, "deep-clean": 379, "move-in-out": 419 },
  "2br-3ba": { "standard-clean": 279, "deep-clean": 419, "move-in-out": 459 },
  "3br-1ba": { "standard-clean": 259, "deep-clean": 389, "move-in-out": 429 },
  "3br-2ba": { "standard-clean": 299, "deep-clean": 439, "move-in-out": 479 },
  "3br-2ba-lg": { "standard-clean": 349, "deep-clean": 499, "move-in-out": 539 },
  "4br-2ba": { "standard-clean": 379, "deep-clean": 529, "move-in-out": 569 },
  "4br-3ba": { "standard-clean": 429, "deep-clean": 579, "move-in-out": 619 },
  "4br-4ba": { "standard-clean": 479, "deep-clean": 629, "move-in-out": 669 },
  "5br-2ba": { "standard-clean": 519, "deep-clean": 669, "move-in-out": 709 },
  "5br-3ba": { "standard-clean": 569, "deep-clean": 729, "move-in-out": 769 },
  "5br-4ba": { "standard-clean": 629, "deep-clean": 799, "move-in-out": 849 },
};

const addOnOptions = [
  { id: "interior-oven", name: "Interior Oven", price: 40 },
  { id: "interior-fridge", name: "Interior Refrigerator", price: 45 },
  { id: "cabinets", name: "Inside Cabinets/Drawers", price: 50 },
  { id: "windows", name: "Interior Windows", price: 5, unit: "per window" },
  { id: "blinds", name: "Blinds", price: 5, unit: "per blind" },
  { id: "baseboards", name: "Baseboards", price: 35 },
  { id: "dishes", name: "Dishes", price: 25 },
  { id: "organization", name: "Organization", price: 60, unit: "per hour" },
  { id: "laundry", name: "Laundry Wash & Fold", price: 25, unit: "per load" },
  { id: "pet-hair", name: "Pet Hair Fee", price: 40 },
  { id: "garage", name: "Garage", price: 50 },
  { id: "balcony", name: "Balcony/Patio", price: 35 },
  { id: "mattress", name: "Mattress Cleaning", price: 40, unit: "per mattress" },
];

export default function QuotePage() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState<QuoteFormData>({
    service: "",
    bedrooms: 1,
    bathrooms: 1,
    frequency: "one-time",
    addOns: [],
    condition: "average",
    timing: "flexible",
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    address: "",
    notes: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const getBedroomBathroomKey = (): string => {
    const br = formData.bedrooms;
    const ba = formData.bathrooms;

    // Map to the pricing table keys
    if (br === 1 && ba === 1) return "1br-1ba";
    if (br === 1 && ba === 2) return "1br-2ba";
    if (br === 2 && ba === 1) return "2br-1ba";
    if (br === 2 && ba === 2) return "2br-2ba";
    if (br === 2 && ba === 3) return "2br-3ba";
    if (br === 3 && ba === 1) return "3br-1ba";
    if (br === 3 && ba === 2) return "3br-2ba";
    if (br === 3 && ba === 3) return "3br-2ba-lg"; // Use 3BR/2BA-large as approximation
    if (br === 4 && ba === 2) return "4br-2ba";
    if (br === 4 && ba === 3) return "4br-3ba";
    if (br === 4 && ba === 4) return "4br-4ba";
    if (br === 5 && ba === 2) return "5br-2ba";
    if (br === 5 && ba === 3) return "5br-3ba";
    if (br === 5 && ba === 4) return "5br-4ba";
    // Fallback to closest match
    return "2br-2ba";
  };

  const calculatePrice = () => {
    if (!formData.service) return 0;

    const service = serviceOptions.find((s) => s.id === formData.service);
    if (!service) return 0;

    let price = 0;

    // Check if it's a residential service with pricing table
    if (service.type === "residential") {
      const key = getBedroomBathroomKey();
      const servicePrices = pricingTable[key];
      if (!servicePrices || !servicePrices[formData.service]) return 0;
      price = servicePrices[formData.service];

      // Add condition surcharge for residential (heavy = 30%)
      if (formData.condition === "heavy") {
        price = Math.round(price * 1.3);
      }
    } else {
      // For other services, use base price
      price = service.basePrice || 0;
    }

    // Add-ons
    const addOnPrices = formData.addOns.reduce((total, addOnId) => {
      const addOn = addOnOptions.find((a) => a.id === addOnId);
      return total + (addOn?.price || 0);
    }, 0);

    let total = price + addOnPrices;

    // Frequency discounts (only for residential)
    if (service.type === "residential") {
      if (formData.frequency === "weekly") {
        total = Math.round(total * 0.8); // 20% off
      } else if (formData.frequency === "bi-weekly") {
        total = Math.round(total * 0.85); // 15% off
      } else if (formData.frequency === "monthly") {
        total = Math.round(total * 0.95); // 5% off
      }
    }

    return total;
  };

  const totalPrice = calculatePrice();
  const totalSteps = 5;

  const handleBack = () => {
    if (step > 1) setStep(step - 1);
  };

  const handleServiceSelect = (serviceId: string) => {
    const service = serviceOptions.find((s) => s.id === serviceId);
    setFormData({ ...formData, service: serviceId });
    // For residential services, go to step 2. For others, skip to step 3 (add-ons) or 4 (timing)
    setTimeout(() => {
      if (service?.type === "residential") {
        setStep(2);
      } else {
        setStep(3); // Skip property details for non-residential
      }
    }, 300);
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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      // Send to Jobber API
      const jobberData = {
        client: {
          name: `${formData.firstName} ${formData.lastName}`,
          email: formData.email,
          phone: formData.phone,
          address: formData.address,
        },
        description: `Service: ${serviceOptions.find(s => s.id === formData.service)?.name || 'Service'}\nEstimated Price: $${totalPrice}\nDetails: ${formData.notes}`,
      };

      // Call Jobber API to create a client and request
      const response = await fetch('/api/jobber', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          apiKey: 'sk-ant-api03-pB7raV5JD3596gwdaM5jGGbyBYVSnUthnq_h2X1PKjUDQXUXEp2W0pRjk_fDo52jy-aUYE0uE3aYvf44DitEQ-wBEB3gAA',
          data: jobberData,
          formData: formData,
          totalPrice: totalPrice,
        }),
      });

      if (response.ok) {
        setSubmitted(true);
      } else {
        // Still show submitted even if Jobber sync fails
        setSubmitted(true);
        console.error('Jobber sync error');
      }
    } catch (error) {
      // Still show submitted even if there's an error
      setSubmitted(true);
      console.error('Error submitting quote:', error);
    }
  };

  if (submitted) {
    return (
      <div>
        <section className="bg-primary-600 text-white py-16">
          <div className="section-container">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Quote Submitted!</h1>
            <p className="text-lg text-white">
              Thank you for your request. We've calculated your estimate based on your selections.
            </p>
          </div>
        </section>

        <section className="section">
          <div className="section-container max-w-2xl">
            {/* Main Estimate Display */}
            <div className="bg-gradient-to-br from-accent-600 to-accent-500 rounded-xl p-8 mb-8 text-center">
              <p className="text-primary-900 text-sm font-semibold mb-3">YOUR ESTIMATED QUOTE</p>
              <div className="text-6xl font-bold text-primary-900 mb-3">${totalPrice}</div>
              {formData.frequency === "recurring" && (
                <p className="text-primary-800 text-sm">
                  ✓ 20% recurring service discount already applied
                </p>
              )}
            </div>

            {/* Summary Card */}
            <div className="bg-primary-50 border-2 border-accent-500 rounded-xl p-8 mb-8">
              <h2 className="text-2xl font-bold text-primary-900 mb-6">Your Project Details</h2>

              <div className="space-y-4">
                <div>
                  <p className="text-sm text-primary-700 font-semibold mb-1">Service Selected</p>
                  <p className="text-lg text-primary-900">
                    {serviceOptions.find((s) => s.id === formData.service)?.name}
                  </p>
                </div>

                {["residential-cleaning", "deep-cleaning", "post-construction"].includes(formData.service) && (
                  <div className="grid grid-cols-2 gap-4 pt-4 border-t border-primary-200">
                    <div>
                      <p className="text-sm text-primary-700 font-semibold">Bedrooms</p>
                      <p className="text-lg text-primary-900">{formData.bedrooms}</p>
                    </div>
                    <div>
                      <p className="text-sm text-primary-700 font-semibold">Bathrooms</p>
                      <p className="text-lg text-primary-900">{formData.bathrooms}</p>
                    </div>
                  </div>
                )}

                <div className="pt-4 border-t border-primary-200">
                  <p className="text-sm text-primary-700 font-semibold mb-1">Service Frequency</p>
                  <p className="text-lg text-primary-900 capitalize">
                    {formData.frequency === "one-time" ? "One Time" : formData.frequency.charAt(0).toUpperCase() + formData.frequency.slice(1)}
                  </p>
                </div>

                {formData.addOns.length > 0 && (
                  <div className="pt-4 border-t border-primary-200">
                    <p className="text-sm text-primary-700 font-semibold mb-2">Add-Ons Selected</p>
                    <ul className="space-y-1">
                      {formData.addOns.map((addOnId) => {
                        const addOn = addOnOptions.find((a) => a.id === addOnId);
                        return (
                          <li key={addOnId} className="text-primary-900">
                            • {addOn?.name}
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                )}

                <div className="pt-4 border-t border-primary-200">
                  <p className="text-sm text-primary-700 font-semibold mb-1">Preferred Timeline</p>
                  <p className="text-lg text-primary-900 capitalize">
                    {formData.timing === "asap" ? "ASAP / Same Day" : formData.timing === "this-week" ? "This Week" : formData.timing === "next-week" ? "Next Week" : "Flexible"}
                  </p>
                </div>
              </div>
            </div>

            {/* Contact & Next Steps */}
            <div className="bg-primary-50 border-2 border-primary-200 rounded-xl p-8">
              <h3 className="text-xl font-bold text-primary-900 mb-4">What Happens Next</h3>

              <div className="space-y-4 mb-6">
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-accent-500 text-primary-900 font-bold rounded-full flex items-center justify-center">1</div>
                  <div>
                    <p className="font-semibold text-primary-900">We'll Call You</p>
                    <p className="text-sm text-primary-700">
                      We'll reach out to <strong>{formData.phone}</strong> to confirm the details and lock in your price of <strong>${totalPrice}</strong>
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-accent-500 text-primary-900 font-bold rounded-full flex items-center justify-center">2</div>
                  <div>
                    <p className="font-semibold text-primary-900">Schedule Your Service</p>
                    <p className="text-sm text-primary-700">
                      Pick a time that works for you during your preferred timeline
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-accent-500 text-primary-900 font-bold rounded-full flex items-center justify-center">3</div>
                  <div>
                    <p className="font-semibold text-primary-900">We'll Complete Your Service</p>
                    <p className="text-sm text-primary-700">
                      Our team will show up on time and complete the work exactly as quoted
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-accent-100 border border-accent-300 rounded-lg p-4 mb-6">
                <p className="text-sm text-primary-900">
                  <strong>Email confirmation sent to:</strong> {formData.email}
                </p>
              </div>

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
                    <div className="grid grid-cols-6 gap-2">
                      {[1, 2, 3, 4, 5, 6].map((num) => (
                        <button
                          key={num}
                          type="button"
                          onClick={() => setFormData({ ...formData, bedrooms: num })}
                          className={`py-2 px-3 rounded-lg font-bold transition ${
                            formData.bedrooms === num
                              ? "bg-accent-500 text-primary-900"
                              : "bg-primary-700 text-white border-2 border-primary-600 hover:border-accent-500"
                          }`}
                        >
                          {num}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label className="block text-white font-semibold mb-3">
                      How many bathrooms?
                    </label>
                    <div className="grid grid-cols-6 gap-2">
                      {[1, 2, 3, 4, 5, 6].map((num) => (
                        <button
                          key={num}
                          type="button"
                          onClick={() => setFormData({ ...formData, bathrooms: num })}
                          className={`py-2 px-3 rounded-lg font-bold transition ${
                            formData.bathrooms === num
                              ? "bg-accent-500 text-primary-900"
                              : "bg-primary-700 text-white border-2 border-primary-600 hover:border-accent-500"
                          }`}
                        >
                          {num}
                        </button>
                      ))}
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
                      <option value="weekly">Weekly (20% off)</option>
                      <option value="bi-weekly">Bi-Weekly (15% off)</option>
                      <option value="monthly">Monthly (5% off)</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-white font-semibold mb-3">
                      What's the condition of the home?
                    </label>
                    <div className="space-y-2">
                      {[
                        { id: "light", label: "Light - Well maintained, light dust, regular cleaning" },
                        { id: "average", label: "Average - Normal lived-in, some dust, occasional buildup" },
                        { id: "heavy", label: "Heavy - Heavy buildup, pet hair, stains, grease, clutter (+30%)" },
                      ].map((condition) => (
                        <label
                          key={condition.id}
                          className="flex items-center p-3 border-2 border-primary-600 rounded-lg cursor-pointer hover:bg-primary-700 transition"
                        >
                          <input
                            type="radio"
                            name="condition"
                            value={condition.id}
                            checked={formData.condition === condition.id}
                            onChange={(e) =>
                              setFormData({ ...formData, condition: e.target.value })
                            }
                            className="w-5 h-5 text-accent-500"
                          />
                          <span className="ml-3 text-white text-sm">
                            {condition.label}
                          </span>
                        </label>
                      ))}
                    </div>
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
