import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import { ContactModalProvider } from "@/context/contact-modal-context";
import { ContactModal } from "@/components/ui/contact-modal";
import Script from "next/script";

const inter = Inter({ subsets: ["latin", "cyrillic"] });

export const metadata: Metadata = {
  title: "HaloAgency - Digital Agency",
  description: "Web Development, Ads & Tracking",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru" className="scroll-smooth" suppressHydrationWarning>
      <head>
        {/* CookieYes Consent Management - REPLACE YOUR_ID with actual CookieYes ID */}
        <Script
          id="cookieyes"
          src="https://cdn-cookieyes.com/client_data/YOUR_ID/script.js"
          strategy="beforeInteractive"
        />

        {/* Google Tag Manager - REPLACE GTM-XXXXXXX with actual GTM ID */}
        <Script
          id="gtm"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-XXXXXXX');`,
          }}
        />
      </head>
      <body className={`${inter.className} bg-ha-bg text-white antialiased`}>
        {/* GTM noscript fallback */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-XXXXXXX"
            height="0"
            width="0"
            style={{ display: 'none', visibility: 'hidden' }}
          />
        </noscript>

        <ContactModalProvider>
          <Header />
          {children}
          <ContactModal />
        </ContactModalProvider>
      </body>
    </html>
  );
}
