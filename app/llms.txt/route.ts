const lines = [
  "# HaloAgency",
  "",
  "> HaloAgency helps businesses in Czechia connect websites, paid advertising, analytics, and automation into one working system for leads and sales.",
  "",
  "## Main Services",
  "- Websites: https://haloagency.cz/web",
  "- Landing Pages: https://haloagency.cz/web/landing-pages",
  "- Business Websites: https://haloagency.cz/web/business-websites",
  "- E-commerce: https://haloagency.cz/web/ecommerce",
  "- Google Ads: https://haloagency.cz/ads/google-ads",
  "- Meta Ads: https://haloagency.cz/ads/meta-ads",
  "- Tracking: https://haloagency.cz/tracking",
  "- Automation: https://haloagency.cz/automation",
  "",
  "## Proof",
  "- Case Studies: https://haloagency.cz/case-studies",
  "- About: https://haloagency.cz/about",
  "- Packages: https://haloagency.cz/packages",
  "",
  "## Contact",
  "- Contact: https://haloagency.cz/contact",
  "",
  "## Legal",
  "- Privacy Policy: https://haloagency.cz/privacy-policy",
  "- Terms of Service: https://haloagency.cz/terms-of-service",
];

export function GET() {
  return new Response(lines.join("\n"), {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
    },
  });
}
