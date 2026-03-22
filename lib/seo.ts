import type { Metadata } from "next";
import { legalEntity } from "@/lib/legal";

export type SeoBreadcrumbItem = {
  label: string;
  href: string;
};

export type SeoFaqItem = {
  question: string;
  answer: string;
};

const SITE_URL = "https://haloagency.cz";
const ORGANIZATION_NAME = "HaloAgency";
const DEFAULT_LOCALE = "ru_RU";
const DEFAULT_LANGUAGE = "ru";

export function absoluteUrl(path: string) {
  return new URL(path, SITE_URL).toString();
}

type BuildMetadataOptions = {
  title: string;
  description: string;
  path: string;
  openGraphTitle?: string;
  openGraphDescription?: string;
  keywords?: string[];
  type?: "website" | "article";
  robots?: Metadata["robots"];
};

export function buildMetadata({
  title,
  description,
  path,
  openGraphTitle,
  openGraphDescription,
  keywords,
  type = "website",
  robots,
}: BuildMetadataOptions): Metadata {
  const ogTitle = openGraphTitle ?? title;
  const ogDescription = openGraphDescription ?? description;
  const canonical = absoluteUrl(path);

  return {
    title,
    description,
    keywords,
    alternates: {
      canonical,
    },
    authors: [{ name: ORGANIZATION_NAME }],
    creator: ORGANIZATION_NAME,
    publisher: ORGANIZATION_NAME,
    openGraph: {
      title: ogTitle,
      description: ogDescription,
      url: canonical,
      siteName: ORGANIZATION_NAME,
      locale: DEFAULT_LOCALE,
      type,
    },
    twitter: {
      card: "summary_large_image",
      title: ogTitle,
      description: ogDescription,
    },
    ...(robots ? { robots } : {}),
  };
}

export function breadcrumbJsonLd(items: SeoBreadcrumbItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.label,
      item: absoluteUrl(item.href),
    })),
  };
}

export function webPageJsonLd({
  name,
  description,
  path,
  type = "WebPage",
}: {
  name: string;
  description: string;
  path: string;
  type?: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": type,
    name,
    description,
    url: absoluteUrl(path),
    inLanguage: DEFAULT_LANGUAGE,
    isPartOf: {
      "@type": "WebSite",
      name: ORGANIZATION_NAME,
      url: SITE_URL,
    },
  };
}

export function organizationJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: ORGANIZATION_NAME,
    url: SITE_URL,
    email: legalEntity.email,
    telephone: legalEntity.phone.replace(/\s+/g, ""),
    logo: absoluteUrl("/logo-v2.png"),
    address: {
      "@type": "PostalAddress",
      streetAddress: "U Dívčích hradů 308/27",
      postalCode: "150 00",
      addressLocality: "Praha 5 - Radlice",
      addressCountry: "CZ",
    },
    contactPoint: [
      {
        "@type": "ContactPoint",
        contactType: "sales",
        email: legalEntity.email,
        telephone: legalEntity.phone.replace(/\s+/g, ""),
        areaServed: "CZ",
        availableLanguage: ["ru", "cs", "en"],
      },
    ],
  };
}

export function webSiteJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: ORGANIZATION_NAME,
    url: SITE_URL,
    inLanguage: DEFAULT_LANGUAGE,
    publisher: {
      "@type": "Organization",
      name: ORGANIZATION_NAME,
      url: SITE_URL,
      logo: {
        "@type": "ImageObject",
        url: absoluteUrl("/logo-v2.png"),
      },
    },
  };
}

export function collectionPageJsonLd({
  name,
  description,
  path,
}: {
  name: string;
  description: string;
  path: string;
}) {
  return webPageJsonLd({
    name,
    description,
    path,
    type: "CollectionPage",
  });
}

export function serviceJsonLd({
  name,
  description,
  path,
  serviceType,
}: {
  name: string;
  description: string;
  path: string;
  serviceType: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name,
    description,
    url: absoluteUrl(path),
    inLanguage: DEFAULT_LANGUAGE,
    serviceType,
    provider: {
      "@type": "Organization",
      name: ORGANIZATION_NAME,
      url: SITE_URL,
      email: legalEntity.email,
      telephone: legalEntity.phone.replace(/\s+/g, ""),
      logo: absoluteUrl("/logo-v2.png"),
    },
    areaServed: {
      "@type": "Country",
      name: "Czech Republic",
    },
  };
}

export function faqPageJsonLd(faqs: SeoFaqItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };
}

export function articleJsonLd({
  headline,
  description,
  path,
  keywords,
  imagePath,
}: {
  headline: string;
  description: string;
  path: string;
  keywords?: string[];
  imagePath?: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline,
    description,
    url: absoluteUrl(path),
    inLanguage: DEFAULT_LANGUAGE,
    mainEntityOfPage: absoluteUrl(path),
    ...(imagePath
      ? {
          image: {
            "@type": "ImageObject",
            url: absoluteUrl(imagePath),
          },
        }
      : {}),
    author: {
      "@type": "Organization",
      name: ORGANIZATION_NAME,
    },
    publisher: {
      "@type": "Organization",
      name: ORGANIZATION_NAME,
      url: SITE_URL,
      logo: {
        "@type": "ImageObject",
        url: absoluteUrl("/logo-v2.png"),
      },
    },
    keywords,
  };
}
