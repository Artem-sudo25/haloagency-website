"use client";

import { usePathname } from "@/i18n/routing";
import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";

export function LayoutShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const isLandingPage = pathname.startsWith("/lp");

  return (
    <>
      {!isLandingPage && <Header />}
      {children}
      {!isLandingPage && <Footer />}
    </>
  );
}
