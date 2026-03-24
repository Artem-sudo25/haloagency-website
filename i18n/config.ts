export const locales = ["ru", "cs"] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = "ru";
