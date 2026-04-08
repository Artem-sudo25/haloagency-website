import ScopedNextIntlProvider from "@/components/i18n/ScopedNextIntlProvider";
import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";

export default function SiteLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <ScopedNextIntlProvider namespaces={["common", "header"]}>
        <Header />
      </ScopedNextIntlProvider>
      {children}
      <Footer />
    </>
  );
}
