export default function SchemaMarkup() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "UFC Cleaning",
    "image": "https://ufcleaning.com/ufc-logo.png",
    "description": "Complete property services including residential cleaning, commercial cleaning, junk removal, power washing, demolition, and more. Serving all of Dallas-Fort Worth.",
    "url": "https://ufcleaning.com",
    "telephone": "(469) 929-7722",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "8001 Munich Dr",
      "addressLocality": "Rowlett",
      "addressRegion": "TX",
      "postalCode": "75089",
      "addressCountry": "US"
    },
    "areaServed": {
      "@type": "City",
      "name": ["Dallas", "Fort Worth", "Arlington", "Plano", "Frisco", "Garland", "Irving", "Carrollton", "Rowlett", "Wylie", "Sachse", "Murphy", "Rockwall", "McKinney", "Allen"]
    },
    "priceRange": "$99-$2000+",
    "ratingValue": "5.0",
    "reviewCount": "31",
    "owner": {
      "@type": "Organization",
      "name": "Universal Facility Cleaning LLC"
    },
    "sameAs": [
      "https://www.facebook.com/ufccleaningrowlett",
      "https://www.instagram.com/ufccleaning",
      "https://www.tiktok.com/@ufccleaning"
    ],
    "knowsAbout": [
      "Residential Cleaning",
      "Commercial Cleaning",
      "Deep Cleaning",
      "Post-Construction Cleanup",
      "Demolition",
      "Junk Removal",
      "Power Washing",
      "Handyman Services",
      "Moving Services",
      "Vacation Rental Cleaning"
    ]
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
