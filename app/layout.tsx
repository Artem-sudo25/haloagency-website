import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { ContactModalProvider } from "@/context/contact-modal-context";
import { LayoutShell } from "@/components/layout/LayoutShell";
import { CookieBanner } from "@/components/ui/cookie-banner";
import { ConsentScripts } from "@/components/analytics/ConsentScripts";
import Script from "next/script";

const inter = Inter({
  subsets: ["latin", "cyrillic"],
  display: "swap",
  preload: true,
  variable: "--font-inter",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin", "cyrillic"],
  display: "swap",
  preload: true,
  variable: "--font-mono",
});

export const metadata: Metadata = {
  title: "HaloAgency - Digital Agency",
  description: "Web Development, Ads & Tracking",
  metadataBase: new URL("https://haloagency.cz"),
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const gtmId = process.env.NEXT_PUBLIC_GTM_ID;

  return (
    <html lang="ru" className="scroll-smooth" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://www.googletagmanager.com" />
        <link rel="preconnect" href="https://www.google-analytics.com" />
        {/* GTM Consent Mode v2 - Initialize BEFORE GTM loads */}
        <Script
          id="gtm-consent-init"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              window.gtag = function(){dataLayer.push(arguments);};
              window.gtag('consent', 'default', {
                'analytics_storage': 'granted',
                'ad_storage': 'denied',
                'ad_user_data': 'denied',
                'ad_personalization': 'denied',
                'wait_for_update': 500
              });
            `,
          }}
        />
        {/* HaloTrack Attribution Tracking */}
        {process.env.NEXT_PUBLIC_HALOTRACK_DOMAIN && (
          <Script
            src={`https://${process.env.NEXT_PUBLIC_HALOTRACK_DOMAIN}/t.js`}
            strategy="afterInteractive"
          />
        )}
      </head>
      <body
        className={`${inter.variable} ${jetbrainsMono.variable} font-sans bg-ha-bg text-white antialiased`}
        suppressHydrationWarning
      >
        {/* Google Tag Manager - Must be in body, immediately after opening tag */}
        {gtmId && (
          <>
            <Script
              id="gtm"
              strategy="afterInteractive"
              dangerouslySetInnerHTML={{
                __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','${gtmId}');`,
              }}
            />
            {/* GTM noscript fallback */}
            <noscript>
              <iframe
                src={`https://www.googletagmanager.com/ns.html?id=${gtmId}`}
                height="0"
                width="0"
                style={{ display: "none", visibility: "hidden" }}
                title="Google Tag Manager"
              />
            </noscript>
          </>
        )}

        <ContactModalProvider>
          <LayoutShell>
            {children}
          </LayoutShell>
          <CookieBanner />
          <ConsentScripts />
        </ContactModalProvider>
      </body>
    </html>
  );
}
