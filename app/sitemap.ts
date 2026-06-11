import type { MetadataRoute } from "next";
import { defaultLocale, locales } from "@/i18n/config";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://haloagency.cz";
  const contentLastModified = new Date("2026-03-22T00:00:00+01:00");
  const legalLastModified = new Date("2026-01-23T00:00:00+01:00");
  const blogIndexLastModified = new Date("2026-04-16T00:00:00+02:00");
  const firstBlogBatchLastModified = new Date("2026-03-23T00:00:00+01:00");
  const secondBlogBatchLastModified = new Date("2026-04-16T00:00:00+02:00");

  type RouteConfig = {
    path: string;
    lastModified: Date;
    changeFrequency: "weekly" | "monthly" | "yearly";
    priority: number;
  };

  const routes: RouteConfig[] = [
    {
      path: "/",
      lastModified: contentLastModified,
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      path: "/ads",
      lastModified: contentLastModified,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      path: "/ads/google-ads",
      lastModified: contentLastModified,
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      path: "/ads/meta-ads",
      lastModified: contentLastModified,
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      path: "/web",
      lastModified: contentLastModified,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      path: "/web/landing-pages",
      lastModified: contentLastModified,
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      path: "/web/business-websites",
      lastModified: contentLastModified,
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      path: "/web/ecommerce",
      lastModified: contentLastModified,
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      path: "/tracking",
      lastModified: contentLastModified,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      path: "/automation",
      lastModified: contentLastModified,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      path: "/blog",
      lastModified: blogIndexLastModified,
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      path: "/about",
      lastModified: contentLastModified,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      path: "/case-studies",
      lastModified: contentLastModified,
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      path: "/contact",
      lastModified: contentLastModified,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    // Case Studies
    {
      path: "/case-studies/catcafe",
      lastModified: contentLastModified,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      path: "/case-studies/doggy-salon",
      lastModified: contentLastModified,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      path: "/case-studies/nejablonky",
      lastModified: contentLastModified,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      path: "/case-studies/propradlo",
      lastModified: contentLastModified,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      path: "/case-studies/segway-tours-budapest",
      lastModified: contentLastModified,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    // Packages
    {
      path: "/packages",
      lastModified: contentLastModified,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      path: "/packages/site",
      lastModified: contentLastModified,
      changeFrequency: "monthly",
      priority: 0.6,
    },
    {
      path: "/packages/ecommerce",
      lastModified: contentLastModified,
      changeFrequency: "monthly",
      priority: 0.6,
    },
    {
      path: "/packages/leads",
      lastModified: contentLastModified,
      changeFrequency: "monthly",
      priority: 0.6,
    },
    // Blog
    {
      path: "/blog/lending-ili-polnotsennyi-sait-v-chekhii",
      lastModified: firstBlogBatchLastModified,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      path: "/blog/chto-dolzhno-byt-na-saite-uslug",
      lastModified: firstBlogBatchLastModified,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      path: "/blog/pochemu-google-ads-ne-rabotaet",
      lastModified: firstBlogBatchLastModified,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      path: "/blog/normalnyi-treking-dlya-malogo-biznesa",
      lastModified: firstBlogBatchLastModified,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      path: "/blog/meta-ads-ili-google-ads",
      lastModified: secondBlogBatchLastModified,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      path: "/blog/kak-podgotovit-sait-pod-reklamu",
      lastModified: secondBlogBatchLastModified,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    // Legal
    {
      path: "/privacy-policy",
      lastModified: legalLastModified,
      changeFrequency: "yearly",
      priority: 0.5,
    },
    {
      path: "/terms-of-service",
      lastModified: legalLastModified,
      changeFrequency: "yearly",
      priority: 0.5,
    },
  ];

  return routes.flatMap((route) =>
    locales.map((locale) => {
      const localePath =
        locale === defaultLocale
          ? route.path
          : `/${locale}${route.path === "/" ? "" : route.path}`;
      const ruUrl = `${baseUrl}${route.path}`;
      const csUrl = `${baseUrl}/cs${route.path === "/" ? "" : route.path}`;

      return {
        url: `${baseUrl}${localePath}`,
        lastModified: route.lastModified,
        changeFrequency: route.changeFrequency,
        priority: route.priority,
        alternates: {
          languages: {
            ru: ruUrl,
            cs: csUrl,
          },
        },
      };
    }),
  );
}
