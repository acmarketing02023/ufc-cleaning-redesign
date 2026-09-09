/**
 * UFC Cleaning FAQ Knowledge Base
 * Rule-based pattern matching for customer questions
 * No external AI API - completely free
 */

export interface FAQResponse {
  response: string;
  quickReplies?: string[];
  buttonText?: string;
  buttonLink?: string;
}

export interface FAQIntent {
  patterns: string[];
  response: FAQResponse;
}

const CONTACT_INFO = {
  phone: "(214) 218-2921",
  phone2: "(940) 902-3030",
  email: "david@ufc-cleaning.com",
  address: "8001 Munich Dr, Rowlett, TX 75089",
  hours: "Monday-Sunday (Same-day service if called before 10 AM)",
};

const SERVICE_AREAS = [
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
];

export const FAQ_INTENTS: FAQIntent[] = [
  // ===== SERVICES OVERVIEW =====
  {
    patterns: [
      "what services do you offer",
      "what do you do",
      "what can you do",
      "services offered",
      "all services",
      "service options",
    ],
    response: {
      response: `We offer a wide range of cleaning and property services! 🏠 Our services include:

**Residential:** Standard cleaning, deep cleaning, move-in/move-out, post-construction cleanup, and Airbnb/vacation rental cleaning.

**Commercial:** Commercial cleaning, demolition, and junk removal.

**Specialty:** Demolition, junk removal, power washing, moving services, handyman, landlord services, and real estate agent services.

What can I help you with today?`,
      quickReplies: [
        "Residential Cleaning",
        "Commercial Services",
        "Junk Removal",
        "Get a Quote",
      ],
    },
  },

  // ===== RESIDENTIAL CLEANING =====
  {
    patterns: [
      "residential cleaning",
      "house cleaning",
      "home cleaning",
      "regular cleaning",
      "standard cleaning",
      "do you clean homes",
      "clean my house",
    ],
    response: {
      response: `Yes! We provide professional residential cleaning services throughout Dallas-Fort Worth. We offer:

✓ **Standard Cleaning** - Regular home cleaning (starting from $169)
✓ **Deep Cleaning** - Thorough deep clean with hard-to-reach areas (starting from $199)
✓ **Recurring Service** - Weekly (20% off), Bi-weekly (15% off), or Monthly (5% off)

We're background-checked, $2M insured, and 5-star rated. Same-day service available if you call before 10 AM!

Would you like a free quote?`,
      buttonText: "Get Free Quote",
      buttonLink: "/quote",
      quickReplies: ["Get a Quote", "Service Areas", "Call Us"],
    },
  },

  // ===== COMMERCIAL CLEANING =====
  {
    patterns: [
      "commercial cleaning",
      "office cleaning",
      "business cleaning",
      "commercial services",
      "do you clean offices",
      "commercial work",
    ],
    response: {
      response: `Absolutely! We provide professional commercial cleaning services for businesses throughout DFW. This includes:

✓ **Commercial Cleaning** - Office and commercial space cleaning
✓ **Commercial Demolition** - Professional demolition for commercial projects
✓ **Commercial Junk Removal** - Efficient debris and waste removal

We have $2M liability insurance and a professional, background-checked team.

For a custom quote on your commercial project, please call us at ${CONTACT_INFO.phone} or use our quote form.`,
      buttonText: "Request Quote",
      buttonLink: "/quote",
      quickReplies: ["Call Us", "Service Areas", "Our Services"],
    },
  },

  // ===== JUNK REMOVAL =====
  {
    patterns: [
      "junk removal",
      "haul junk",
      "remove junk",
      "remove furniture",
      "remove debris",
      "junk hauling",
      "cleanup",
      "cleanout",
      "can you haul",
      "furniture removal",
      "trash removal",
    ],
    response: {
      response: `Yes! We provide professional junk removal and cleanout services. Whether you need furniture removal, debris cleanup, or general junk hauling, we handle it all!

Junk removal starts from $149, and we serve the entire Dallas-Fort Worth area. We'll haul it away quickly and efficiently.

Ready to get your space cleaned up?`,
      buttonText: "Get Free Quote",
      buttonLink: "/quote",
      quickReplies: ["Get a Quote", "Call Us", "Service Areas"],
    },
  },

  // ===== DEMOLITION =====
  {
    patterns: [
      "demolition",
      "demo",
      "demolish",
      "tear down",
      "teardown",
      "building demo",
      "property demolition",
    ],
    response: {
      response: `We provide professional demolition services for both residential and commercial properties in DFW!

Whether it's interior demolition or full property demolition, we have the expertise and equipment to handle your project safely and efficiently.

Demolition is custom-quoted based on your project scope. Call us at ${CONTACT_INFO.phone} or use the quote form for a detailed estimate.`,
      buttonText: "Get Free Quote",
      buttonLink: "/quote",
      quickReplies: ["Get a Quote", "Call Us", "Contact Info"],
    },
  },

  // ===== POST-CONSTRUCTION CLEANING =====
  {
    patterns: [
      "post-construction",
      "post construction cleaning",
      "construction cleanup",
      "construction cleaning",
      "after construction",
      "construction debris",
    ],
    response: {
      response: `We specialize in post-construction cleaning! After your construction or renovation project is complete, we'll remove all dust, debris, and prepare your space for occupancy.

Post-construction cleanup starts from $349. We'll make sure your newly built or renovated space is spotless and ready to use.

Let's get your project cleaned up!`,
      buttonText: "Get Free Quote",
      buttonLink: "/quote",
      quickReplies: ["Get a Quote", "Call Us", "Service Areas"],
    },
  },

  // ===== AIRBNB / VACATION RENTAL CLEANING =====
  {
    patterns: [
      "airbnb",
      "vacation rental",
      "rental cleaning",
      "turnover cleaning",
      "between guest cleaning",
      "short term rental",
    ],
    response: {
      response: `Perfect! We specialize in Airbnb and vacation rental cleaning. We provide quick turnaround cleaning between guests to keep your rental property in top condition.

Our vacation rental cleaning starts from $149, and we understand the fast turnaround times needed for short-term rentals. We can accommodate your schedule!

Let's keep your rental property pristine.`,
      buttonText: "Get Free Quote",
      buttonLink: "/quote",
      quickReplies: ["Get a Quote", "Call Us", "Service Areas"],
    },
  },

  // ===== LANDLORD / PROPERTY SERVICES =====
  {
    patterns: [
      "landlord",
      "property management",
      "property services",
      "tenant turnover",
      "rental property",
      "landlord services",
      "property maintenance",
    ],
    response: {
      response: `We offer comprehensive landlord and property services! From regular maintenance to tenant turnover cleaning, we help property managers and landlords keep their properties in great condition.

Our landlord services start from $150/month and include regular cleaning, maintenance coordination, and tenant transition support.

Let's discuss your property management needs!`,
      buttonText: "Get Free Quote",
      buttonLink: "/quote",
      quickReplies: ["Get a Quote", "Call Us", "Contact Info"],
    },
  },

  // ===== REAL ESTATE / REALTOR SERVICES =====
  {
    patterns: [
      "real estate",
      "realtor",
      "listing",
      "real estate agent",
      "property staging",
      "home staging",
      "sell my home",
      "show property",
    ],
    response: {
      response: `We help real estate professionals! We provide cleaning and staging services to help properties look their absolute best for showings and sales.

Whether you need a one-time cleaning before a showing or comprehensive staging, we can help your listings stand out. Custom quotes available.

Ready to make your listings shine?`,
      buttonText: "Get Free Quote",
      buttonLink: "/quote",
      quickReplies: ["Get a Quote", "Call Us", "Contact Info"],
    },
  },

  // ===== GETTING A QUOTE =====
  {
    patterns: [
      "get a quote",
      "request a quote",
      "free quote",
      "price",
      "pricing",
      "how much",
      "cost",
      "how much does it cost",
      "estimate",
      "how do i get an estimate",
      "estimate process",
    ],
    response: {
      response: `Getting a free quote from UFC Cleaning is easy! 📋

**Option 1: Quick Online Quote (Recommended)**
Visit our quote form and enter your property details. You'll get an instant estimate based on your specific needs.

**Option 2: Call Us**
Call ${CONTACT_INFO.phone} to speak with someone directly. We're available Monday-Sunday, and can often offer same-day service if you call before 10 AM!

**Option 3: Email**
Email us at ${CONTACT_INFO.email} with your project details.

Which option works best for you?`,
      buttonText: "Get Your Free Quote",
      buttonLink: "/quote",
      quickReplies: ["Get a Quote", "Call Us", "Chat More"],
    },
  },

  // ===== ESTIMATE PROCESS =====
  {
    patterns: [
      "how does the estimate work",
      "how does pricing work",
      "how is pricing calculated",
      "estimate process",
      "quote process",
      "how are prices determined",
    ],
    response: {
      response: `Here's how our estimate process works: 📊

1. **You provide details** - Tell us about your property, service needs, and timing
2. **We calculate the estimate** - Pricing is based on property size, complexity, and your specific requirements
3. **Instant online quote** - Our quote form gives you an immediate estimate
4. **We confirm details** - Our team follows up to confirm everything and lock in your price
5. **Schedule your service** - Pick a time that works for you!

Factors affecting pricing:
• Property size (bedrooms/bathrooms)
• Service type (standard vs. deep cleaning)
• Property condition
• Recurring vs. one-time service (recurring discounts available!)

Ready to get started?`,
      buttonText: "Get Your Free Quote",
      buttonLink: "/quote",
      quickReplies: ["Get a Quote", "Call Us"],
    },
  },

  // ===== SERVICE AREAS / DFW =====
  {
    patterns: [
      "service area",
      "service areas",
      "where do you serve",
      "dfw",
      "dallas fort worth",
      "do you serve",
      "can you come to",
      "near me",
      "my area",
    ],
    response: {
      response: `We proudly serve the entire Dallas-Fort Worth metroplex! 🗺️

Our service areas include:
${SERVICE_AREAS.join(", ")}

...and more throughout the DFW area!

If you're not sure if we serve your specific location, just ask or give us a call at ${CONTACT_INFO.phone} and we'll let you know.

Is your area listed?`,
      quickReplies: ["Get a Quote", "Call Us", "Our Services"],
    },
  },

  // ===== CONTACT / CALL UFC =====
  {
    patterns: [
      "contact",
      "call us",
      "how do i reach you",
      "phone number",
      "email",
      "address",
      "hours",
      "when are you open",
      "how to contact",
      "get in touch",
    ],
    response: {
      response: `Ready to talk to our team? Here's how to reach us! 📞

**Phone:** ${CONTACT_INFO.phone} or ${CONTACT_INFO.phone2}
**Email:** ${CONTACT_INFO.email}
**Address:** ${CONTACT_INFO.address}
**Hours:** ${CONTACT_INFO.hours}

💡 Pro tip: Call before 10 AM for same-day service availability!

We're a Latino and women-owned business with $2M liability insurance, background-checked team members, and 5-star ratings. We're here to help!`,
      quickReplies: ["Get a Quote", "Our Services"],
    },
  },

  // ===== ABOUT UFC / CREDENTIALS =====
  {
    patterns: [
      "about you",
      "about ufc",
      "who are you",
      "credentials",
      "insurance",
      "licensed",
      "experience",
      "reviews",
      "ratings",
      "about the company",
    ],
    response: {
      response: `About UFC Cleaning: 🌟

We're Universal Facility Cleaning LLC - a proud Latino and women-owned business serving Dallas-Fort Worth!

✓ **$2M General Liability Insurance** - Full coverage for your peace of mind
✓ **Background-Checked Team** - Trustworthy professionals you can rely on
✓ **5-Star Rated** - 31+ Google reviews from satisfied customers
✓ **Expert Service** - Years of experience in residential & commercial cleaning
✓ **Local Business** - Deep roots in the DFW community

Whether you need residential cleaning, commercial services, junk removal, or specialty work, we've got the expertise and commitment to excellence.

Ready to experience UFC Cleaning quality?`,
      quickReplies: ["Get a Quote", "Call Us", "Service Areas"],
    },
  },

  // ===== SAME-DAY SERVICE =====
  {
    patterns: [
      "same day",
      "same-day",
      "urgent",
      "emergency",
      "today",
      "asap",
      "quick service",
      "immediate",
    ],
    response: {
      response: `Yes! Same-day service is available! 🚀

**Call us before 10 AM at ${CONTACT_INFO.phone}** and we can often schedule same-day service depending on availability.

Our team is flexible and responsive to your scheduling needs. Whether you need urgent cleaning, emergency cleanup, or quick turnaround service, we're here to help.

Don't wait - give us a call now!`,
      quickReplies: ["Call Us", "Get a Quote", "Chat More"],
    },
  },

  // ===== POWER WASHING =====
  {
    patterns: [
      "power wash",
      "pressure wash",
      "power washing",
      "pressure washing",
      "driveway",
      "patio",
      "exterior cleaning",
    ],
    response: {
      response: `We offer professional power washing services! 💪

Whether it's driveways, patios, siding, or other exterior surfaces, we can clean and refresh them. Power washing starts from $99.

Our team uses professional-grade equipment to safely and effectively clean your property's exterior.

Ready to refresh your property?`,
      buttonText: "Get Free Quote",
      buttonLink: "/quote",
      quickReplies: ["Get a Quote", "Call Us", "Service Areas"],
    },
  },

  // ===== MOVING SERVICES =====
  {
    patterns: [
      "moving",
      "move",
      "moving services",
      "movers",
      "help moving",
      "relocation",
    ],
    response: {
      response: `We offer moving services to help with your relocation! 🚚

Whether you need help with hauling, moving, or general relocation support, our team can assist. Moving services start from $299.

We work with individuals and families throughout DFW to make moving easier.

Need help with your move?`,
      buttonText: "Get Free Quote",
      buttonLink: "/quote",
      quickReplies: ["Get a Quote", "Call Us", "Contact Info"],
    },
  },

  // ===== HANDYMAN SERVICES =====
  {
    patterns: [
      "handyman",
      "repairs",
      "fix",
      "maintenance",
      "general repair",
      "home repair",
    ],
    response: {
      response: `We provide professional handyman services! 🔧

From general repairs to maintenance work, our skilled team can handle various home and property improvement tasks. Handyman services are available at $89/hour.

Whether you need quick repairs or ongoing maintenance, we're here to help keep your property in great condition.

What needs fixing?`,
      buttonText: "Get Free Quote",
      buttonLink: "/quote",
      quickReplies: ["Get a Quote", "Call Us", "Service Areas"],
    },
  },
];

/**
 * Normalize text for matching: lowercase, remove extra spaces, remove punctuation
 */
export function normalizeText(text: string): string {
  return text
    .toLowerCase()
    .trim()
    .replace(/[?!.,]/g, "")
    .replace(/\s+/g, " ");
}

/**
 * Find the best matching FAQ intent for a customer message
 * Uses keyword matching and pattern recognition
 */
export function findMatchingIntent(message: string): FAQIntent | null {
  const normalized = normalizeText(message);
  const words = normalized.split(" ");

  let bestMatch: { intent: FAQIntent; score: number } | null = null;

  for (const intent of FAQ_INTENTS) {
    for (const pattern of intent.patterns) {
      const patternWords = normalizeText(pattern).split(" ");

      // Calculate match score
      let matchCount = 0;
      for (const word of patternWords) {
        if (words.includes(word)) {
          matchCount++;
        }
      }

      const score = matchCount / patternWords.length;

      // Consider it a match if at least 60% of pattern words are found
      if (score >= 0.6) {
        if (!bestMatch || score > bestMatch.score) {
          bestMatch = { intent, score };
        }
      }
    }
  }

  return bestMatch?.intent || null;
}

/**
 * Get a fallback response when no intent matches
 */
export function getFallbackResponse(): FAQResponse {
  return {
    response: `I'm not sure about that one, but our team can help! 😊

You can:
✓ Request a free quote at our website
✓ Call us at ${CONTACT_INFO.phone}
✓ Ask me about any of our services!

What can I help you with?`,
    quickReplies: ["Our Services", "Get a Quote", "Call Us", "Contact Info"],
  };
}
