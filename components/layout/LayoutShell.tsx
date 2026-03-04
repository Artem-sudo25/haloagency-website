"use client";

import { usePathname } from "next/navigation";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { ContactModal } from "@/components/ui/contact-modal";

export function LayoutShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const isLandingPage = pathname.startsWith("/lp");

  return (
    <>
      {!isLandingPage && <Header />}
      {children}
      {!isLandingPage && <Footer />}
      {!isLandingPage && <ContactModal />}
    </>
  );
}
