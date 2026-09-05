import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://ufcleaning.com";

  const staticPages = [
    "",
    "/about",
    "/services",
    "/locations",
    "/quote",
    "/faq",
    "/blog",
    "/search",
  ];

  const servicePages = [
    "residential-cleaning",
    "deep-cleaning",
    "commercial-cleaning",
    "post-construction-cleanup",
    "demolition",
    "junk-removal",
    "power-washing",
    "handyman",
    "moving",
    "vacation-rental-cleaning",
    "move-in-move-out",
    "landlord-services",
  ];

  const locationPages = [
    "rowlett",
    "dallas",
    "plano",
    "garland",
    "frisco",
    "arlington",
    "fort-worth",
    "irving",
    "carrollton",
    "mckinney",
    "allen",
    "wylie",
    "sachse",
    "murphy",
    "rockwall",
  ];

  const blogPages = [
    "post-construction-checklist",
    "rental-turnover-standards",
    "deep-cleaning-vs-regular",
  ];

  const entries: MetadataRoute.Sitemap = [];

  // Static pages
  staticPages.forEach((page) => {
    entries.push({
      url: `${baseUrl}${page}`,
      lastModified: new Date(),
      changeFrequency: page === "" ? "weekly" : "monthly",
      priority: page === "" ? 1 : 0.8,
    });
  });

  // Service pages
  servicePages.forEach((service) => {
    entries.push({
      url: `${baseUrl}/services/${service}`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.7,
    });
  });

  // Blog pages
  blogPages.forEach((blog) => {
    entries.push({
      url: `${baseUrl}/blog/${blog}`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.6,
    });
  });

  return entries;
}
