import { z } from "zod";

// Default validation messages (Russian)
const defaultValidationMessages = {
  nameMin: "Имя должно содержать минимум 2 символа",
  nameTooLong: "Имя слишком длинное",
  emailRequired: "Email обязателен",
  emailInvalid: "Неверный формат email",
  messageMin: "Сообщение должно содержать минимум 10 символов",
  messageTooLong: "Сообщение слишком длинное",
  consentRequired: "Необходимо согласие с политикой конфиденциальности",
  urlRequired: "URL обязателен",
  urlInvalid: "Неверный формат URL",
  urlProtocol: "URL должен начинаться с http:// или https://",
  siteOrProfileRequired: "Укажите сайт или профиль бизнеса",
  businessTypeRequired: "Выберите тип бизнеса",
  mainGoalRequired: "Выберите главную цель",
  textTooLong: "Текст слишком длинный",
  businessTypeMin: "Укажите тип бизнеса",
};

type ValidationMessages = typeof defaultValidationMessages;

function defaultT(key: string): string {
  return defaultValidationMessages[key as keyof ValidationMessages] ?? key;
}

// --- Factory Functions ---

export function createContactFormSchema(t: (key: string) => string) {
  return z.object({
    name: z.string().min(2, t("nameMin")).max(100, t("nameTooLong")),
    email: z.string().min(1, t("emailRequired")).email(t("emailInvalid")),
    message: z.string().max(1000, t("messageTooLong")),
    service: z.string().optional(),
    phone: z.string().optional(),
    consent: z.boolean().refine((val) => val === true, {
      message: t("consentRequired"),
    }),
  });
}

export function createWebsiteAnalysisSchema(t: (key: string) => string) {
  return z.object({
    url: z
      .string()
      .min(1, t("urlRequired"))
      .url(t("urlInvalid"))
      .refine(
        (url) => {
          try {
            const parsed = new URL(url);
            return parsed.protocol === "http:" || parsed.protocol === "https:";
          } catch {
            return false;
          }
        },
        { message: t("urlProtocol") },
      ),
    email: z.string().min(1, t("emailRequired")).email(t("emailInvalid")),
    phone: z.string().optional(),
    consent: z.boolean().refine((val) => val === true, {
      message: t("consentRequired"),
    }),
  });
}

export function createGrowthPlanSchema(t: (key: string) => string) {
  return z.object({
    websiteOrProfile: z.string().min(1, t("siteOrProfileRequired")),
    businessType: z.string().min(1, t("businessTypeRequired")),
    mainGoal: z.string().min(1, t("mainGoalRequired")),
    triedBefore: z.array(z.string()).optional(),
    mainProblem: z.string().max(500, t("textTooLong")).optional(),
    contact: z.string().min(1, t("emailRequired")).email(t("emailInvalid")),
    phone: z.string().optional(),
    consent: z.boolean().refine((val) => val === true, {
      message: t("consentRequired"),
    }),
  });
}

export function createAuditConsultationSchema(t: (key: string) => string) {
  return z.object({
    businessType: z.string().min(2, t("businessTypeMin")),
    websiteOrProfile: z.string().optional(),
    email: z.string().min(1, t("emailRequired")).email(t("emailInvalid")),
    phone: z.string().optional(),
    consent: z.boolean().refine((val) => val === true, {
      message: t("consentRequired"),
    }),
  });
}

// --- Backward-compatible static exports ---

export const contactFormSchema = createContactFormSchema(defaultT);
export type ContactFormData = z.infer<typeof contactFormSchema>;

export const websiteAnalysisSchema = createWebsiteAnalysisSchema(defaultT);
export type WebsiteAnalysisData = z.infer<typeof websiteAnalysisSchema>;

export const growthPlanSchema = createGrowthPlanSchema(defaultT);
export type GrowthPlanData = z.infer<typeof growthPlanSchema>;

export const auditConsultationSchema = createAuditConsultationSchema(defaultT);
export type AuditConsultationData = z.infer<typeof auditConsultationSchema>;

// Post-submit micro-survey (optional, for lead scoring)
export const auditPostSubmitSchema = z.object({
  decisionTimeline: z.string().optional(),
});

export type AuditPostSubmitData = z.infer<typeof auditPostSubmitSchema>;
