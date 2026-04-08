import type { SeoFaqItem } from "@/lib/seo";

const FAQ_COUNT = 8;

export function getTrackingFaqs(
  tf: (key: string) => string,
): SeoFaqItem[] {
  return Array.from({ length: FAQ_COUNT }, (_, i) => ({
    question: tf(`items.${i}.question`),
    answer: tf(`items.${i}.answer`),
  }));
}
