import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://haloagency.cz";
  const contentLastModified = new Date("2026-03-22T00:00:00+01:00");
  const legalLastModified = new Date("2026-01-23T00:00:00+01:00");

  // Priority:
  // 1.0 - Home
  // 0.9 - Main Services (Ads, Web, Tracking)
  // 0.8 - Important info (About, Case Studies top level)
  // 0.7 - Specific Case Studies, Packages
  // 0.5 - Legal (Privacy, Terms)

  const routes = [
    {
      url: `${baseUrl}`,
      lastModified: contentLastModified,
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${baseUrl}/ads`,
      lastModified: contentLastModified,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/ads/google-ads`,
      lastModified: contentLastModified,
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/ads/meta-ads`,
      lastModified: contentLastModified,
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/web`,
      lastModified: contentLastModified,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/web/landing-pages`,
      lastModified: contentLastModified,
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/web/business-websites`,
      lastModified: contentLastModified,
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/web/ecommerce`,
      lastModified: contentLastModified,
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/tracking`,
      lastModified: contentLastModified,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/automation`,
      lastModified: contentLastModified,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: contentLastModified,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/case-studies`,
      lastModified: contentLastModified,
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: contentLastModified,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    // Case Studies
    {
      url: `${baseUrl}/case-studies/catcafe`,
      lastModified: contentLastModified,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/case-studies/doggy-salon`,
      lastModified: contentLastModified,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/case-studies/nejablonky`,
      lastModified: contentLastModified,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/case-studies/propradlo`,
      lastModified: contentLastModified,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/case-studies/segway-tours-budapest`,
      lastModified: contentLastModified,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    // Packages
    {
      url: `${baseUrl}/packages`,
      lastModified: contentLastModified,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/packages/site`,
      lastModified: contentLastModified,
      changeFrequency: "monthly",
      priority: 0.6,
    },
    {
      url: `${baseUrl}/packages/ecommerce`,
      lastModified: contentLastModified,
      changeFrequency: "monthly",
      priority: 0.6,
    },
    {
      url: `${baseUrl}/packages/leads`,
      lastModified: contentLastModified,
      changeFrequency: "monthly",
      priority: 0.6,
    },
    // Legal
    {
      url: `${baseUrl}/privacy-policy`,
      lastModified: legalLastModified,
      changeFrequency: "yearly",
      priority: 0.5,
    },
    {
      url: `${baseUrl}/terms-of-service`,
      lastModified: legalLastModified,
      changeFrequency: "yearly",
      priority: 0.5,
    },
  ] as MetadataRoute.Sitemap;

  return routes;
}
