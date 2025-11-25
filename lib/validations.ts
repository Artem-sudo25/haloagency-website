import { z } from "zod";

// Contact Form Schema
export const contactFormSchema = z.object({
  name: z
    .string()
    .min(2, "Имя должно содержать минимум 2 символа")
    .max(100, "Имя слишком длинное"),
  email: z
    .string()
    .min(1, "Email обязателен")
    .email("Неверный формат email"),
  telegram: z.string().optional(),
  message: z
    .string()
    .min(10, "Сообщение должно содержать минимум 10 символов")
    .max(1000, "Сообщение слишком длинное"),
  service: z.string().optional(),
});

export type ContactFormData = z.infer<typeof contactFormSchema>;

// Lead Magnet / Website Analysis Schema
export const websiteAnalysisSchema = z.object({
  url: z
    .string()
    .min(1, "URL обязателен")
    .url("Неверный формат URL")
    .refine(
      (url) => {
        try {
          const parsed = new URL(url);
          return parsed.protocol === "http:" || parsed.protocol === "https:";
        } catch {
          return false;
        }
      },
      { message: "URL должен начинаться с http:// или https://" }
    ),
  email: z
    .string()
    .min(1, "Email обязателен")
    .email("Неверный формат email"),
  consent: z
    .boolean()
    .refine((val) => val === true, {
      message: "Необходимо согласие с политикой конфиденциальности",
    }),
});

export type WebsiteAnalysisData = z.infer<typeof websiteAnalysisSchema>;
