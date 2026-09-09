/**
 * UFC Cleaning Chatbot Knowledge Base
 * Contains all business information the chatbot should know
 */

export const UFCCleaningKnowledge = {
  company: {
    name: "UFC Cleaning",
    slogan: "Professional cleaning and property services for Dallas-Fort Worth",
    description: "Universal Facility Cleaning LLC - A Latino and women-owned cleaning and property services company",
    phone: ["(214) 218-2921", "(940) 902-3030"],
    email: "david@ufc-cleaning.com",
    address: "8001 Munich Dr, Rowlett, TX 75089",
    hours: "Monday-Sunday (same-day service if called before 10 AM)",
    website: "https://www.ufc-cleaning.com",
  },

  services: {
    residential: {
      "standard-clean": {
        name: "Residential Cleaning",
        description: "Regular residential cleaning service",
        pricing: "Starting from $169",
        details: "Professional home cleaning for move-in ready conditions",
      },
      "deep-clean": {
        name: "Deep Cleaning",
        description: "Thorough deep cleaning service for homes",
        pricing: "Starting from $199",
        details: "Comprehensive cleaning including hard-to-reach areas",
      },
      "move-in-out": {
        name: "Move-In/Move-Out Cleaning",
        description: "Cleaning for moving transitions",
        pricing: "Starting from $299",
        details: "Prepare homes for new tenants or occupants",
      },
      "post-construction": {
        name: "Post-Construction Cleaning",
        description: "Construction site cleanup",
        pricing: "Starting from $349",
        details: "Remove dust, debris, and prepare spaces for occupancy",
      },
      "vacation-rental": {
        name: "Vacation Rental Cleaning (Airbnb)",
        description: "Between-guest cleaning for vacation rentals",
        pricing: "Starting from $149",
        details: "Quick turnaround cleaning for rental properties",
      },
    },

    commercial: {
      "commercial-cleaning": {
        name: "Commercial Cleaning",
        description: "Professional office and commercial space cleaning",
        pricing: "Custom quote",
        details: "Tailored cleaning solutions for businesses",
      },
      "commercial-demo": {
        name: "Commercial Demolition",
        description: "Commercial demolition services",
        pricing: "Custom quote",
        details: "Professional demolition for commercial projects",
      },
      "commercial-junk": {
        name: "Commercial Junk Removal",
        description: "Debris and junk removal for businesses",
        pricing: "Custom quote",
        details: "Efficient removal of commercial waste",
      },
    },

    specialty: {
      demolition: {
        name: "Demolition Services",
        description: "Property demolition and removal",
        pricing: "Custom quote",
        details: "Professional demolition for residential and commercial projects",
      },
      "junk-removal": {
        name: "Junk Removal",
        description: "Household junk and debris removal",
        pricing: "Starting from $149",
        details: "Quick and efficient removal of unwanted items",
      },
      "power-washing": {
        name: "Power Washing",
        description: "Pressure washing for exterior surfaces",
        pricing: "Starting from $99",
        details: "Clean driveways, patios, siding, and more",
      },
      moving: {
        name: "Moving Services",
        description: "Professional moving and hauling",
        pricing: "Starting from $299",
        details: "Help with moving and relocation projects",
      },
      handyman: {
        name: "Handyman Services",
        description: "General handyman repairs and maintenance",
        pricing: "$89/hour",
        details: "Various home and property repairs",
      },
      landlord: {
        name: "Landlord Services",
        description: "Property management and maintenance for landlords",
        pricing: "Starting from $150/month",
        details: "Turnkey property maintenance and cleaning",
      },
      "real-estate": {
        name: "Real Estate Agent Services",
        description: "Cleaning and staging services for real estate professionals",
        pricing: "Custom quote",
        details: "Help properties look their best for showings and sales",
      },
    },
  },

  serviceAreas: [
    "Rowlett",
    "Dallas",
    "Plano",
    "Garland",
    "Wylie",
    "Sachse",
    "Murphy",
    "Rockwall",
    "Fort Worth",
    "Arlington",
    "Irving",
    "Carrollton",
    "McKinney",
    "Allen",
    "Frisco",
  ],

  credentials: {
    liability: "$2M General Liability Insurance",
    team: "Background-checked team members",
    rating: "5-star rated (31+ Google reviews)",
    ownership: "Latino & Women-owned business",
    availability: "Same-day and next-day service available",
  },

  pricing: {
    note: "Exact pricing depends on property size, condition, and specific services. Use the quote form for accurate estimates.",
    residentialExamples: [
      "1BR-1BA Standard Clean: $169",
      "2BR-2BA Standard Clean: $249",
      "3BR-2BA Standard Clean: $299",
      "4BR-3BA Standard Clean: $429",
    ],
    discounts: [
      "Weekly service: 20% off",
      "Bi-weekly service: 15% off",
      "Monthly service: 5% off",
    ],
    heavyClutterSurcharge: "Heavy clutter/condition adds 30% to standard pricing",
  },

  process: {
    getQuote: {
      step1: "Visit the website quote form at /quote or /",
      step2: "Select your service type and property details",
      step3: "Get an instant estimate",
      step4: "Submit for review - UFC will contact you to confirm details",
    },
    booking: {
      step1: "Call (214) 218-2921 or (940) 902-3030 for immediate booking",
      step2: "Email david@ufc-cleaning.com with your request",
      step3: "Use the website quote form for estimates and inquiries",
      note: "Same-day service available if called before 10 AM",
    },
  },

  faqs: [
    {
      q: "What areas do you serve?",
      a: "We serve the entire Dallas-Fort Worth metroplex including Rowlett, Dallas, Plano, Garland, Wylie, Sachse, Murphy, Rockwall, Fort Worth, Arlington, Irving, Carrollton, McKinney, Allen, and Frisco.",
    },
    {
      q: "Can I get same-day service?",
      a: "Yes, same-day service is available if you call before 10 AM at (214) 218-2921 or (940) 902-3030.",
    },
    {
      q: "Do you offer recurring cleaning?",
      a: "Yes! We offer weekly (20% off), bi-weekly (15% off), and monthly (5% off) service options.",
    },
    {
      q: "What makes UFC Cleaning different?",
      a: "We're a Latino and women-owned business with $2M liability insurance, background-checked team members, and 5-star ratings with 31+ Google reviews.",
    },
  ],
};

/**
 * System prompt for the chatbot
 * Instructs Claude on how to behave as an UFC Cleaning customer service assistant
 */
export function getChatbotSystemPrompt(): string {
  return `You are a helpful customer service chatbot for UFC Cleaning, a professional cleaning and property services company in Dallas-Fort Worth.

YOUR ROLE: Answer customer questions about services, pricing, service areas, booking process, and company information.

SERVICES OFFERED:
- Residential: Standard cleaning, deep cleaning, move-in/move-out, post-construction, vacation rental (Airbnb) cleaning
- Commercial: Commercial cleaning, demolition, junk removal
- Specialty: Demolition, junk removal, power washing, moving services, handyman services, landlord services, real estate agent services
- Available throughout Dallas-Fort Worth area (15+ cities)

COMPANY INFO:
- Phone: (214) 218-2921 or (940) 902-3030
- Email: david@ufc-cleaning.com
- Address: 8001 Munich Dr, Rowlett, TX 75089
- Hours: Monday-Sunday (same-day service if called before 10 AM)
- Credentials: $2M liability insurance, background-checked team, 5-star rating, Latino & women-owned

PRICING GUIDELINES:
- DO NOT promise exact prices. Prices depend on property size and specific needs.
- For residential: Starting from $169-$299 depending on service type
- Commercial and specialty services: Require custom quotes
- Recurring discounts: Weekly (20%), Bi-weekly (15%), Monthly (5%)
- Heavy clutter adds 30% surcharge

IMPORTANT RULES:
1. ONLY answer questions based on information about UFC Cleaning
2. Do NOT invent services, pricing, or capabilities not mentioned above
3. Do NOT guarantee specific availability or same-day service beyond "if called before 10 AM"
4. If asked for exact pricing: Direct them to the website quote form
5. If customer wants to book or speak to someone: Provide phone number (214) 218-2921 or (940) 902-3030
6. Keep responses SHORT, helpful, and conversational (2-3 sentences max)
7. Be friendly and professional

QUOTE PROCESS:
- Website: ufc-cleaning.com has an instant quote form at /quote
- Customers enter property details and get an estimate
- Someone from UFC follows up to confirm details

WHAT TO DO IF UNSURE:
- Acknowledge the question
- Suggest they call (214) 218-2921 or use the quote form
- Provide contact info

STYLE: Be friendly, concise, and helpful. Sound like a real person, not a robot.`;
}
