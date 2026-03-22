declare global {
  interface Window {
    dataLayer?: Array<Record<string, unknown>>;
    fbq?: (
      command: string,
      eventName: string,
      parameters?: Record<string, unknown>,
      options?: Record<string, unknown>,
    ) => void;
  }
}

export type CtaClickPayload = {
  name: string;
  location: string;
  category?: string;
  href?: string;
};

export function trackCtaClick(payload: CtaClickPayload): void {
  if (typeof window === "undefined") {
    return;
  }

  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({
    event: "cta_clicked",
    cta_name: payload.name,
    cta_location: payload.location,
    cta_category: payload.category || "primary",
    cta_href: payload.href || "",
    page_path: window.location.pathname,
    page_title: document.title,
  });
}

type LeadTrackingPayload = {
  leadId: string;
  formType: string;
  contentName: string;
  email?: string;
  phone?: string;
  value?: number;
  currency?: string;
  dataLayerEvent?: string;
  metadata?: Record<string, unknown>;
};

export function trackLeadSubmission(payload: LeadTrackingPayload): void {
  if (typeof window === "undefined") {
    return;
  }

  const value = payload.value ?? 0;
  const currency = payload.currency ?? "CZK";

  if (typeof window.fbq === "function") {
    window.fbq(
      "track",
      "Lead",
      {
        content_name: payload.contentName,
        currency,
        value,
      },
      { eventID: payload.leadId },
    );
  }

  window.dataLayer = window.dataLayer || [];

  const userData: Record<string, string> = {};
  if (payload.email) {
    userData.email_address = payload.email;
  }
  if (payload.phone) {
    userData.phone_number = payload.phone;
  }

  window.dataLayer.push({
    event: payload.dataLayerEvent || "generate_lead_v2",
    eventID: payload.leadId,
    form_type: payload.formType,
    ...payload.metadata,
    ...(Object.keys(userData).length > 0 ? { user_data: userData } : {}),
  });
}
