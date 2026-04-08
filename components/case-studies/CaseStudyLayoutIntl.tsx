import type { ComponentProps } from "react";
import ScopedNextIntlProvider from "@/components/i18n/ScopedNextIntlProvider";
import CaseStudyLayout from "./CaseStudyLayout";

type CaseStudyLayoutIntlProps = ComponentProps<typeof CaseStudyLayout>;

export default function CaseStudyLayoutIntl(props: CaseStudyLayoutIntlProps) {
  return (
    <ScopedNextIntlProvider namespaces={["caseStudyLayout"]}>
      <CaseStudyLayout {...props} />
    </ScopedNextIntlProvider>
  );
}
