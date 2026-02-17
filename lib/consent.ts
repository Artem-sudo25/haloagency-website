/**
 * Cookie Consent Management
 * Handles GDPR consent with GTM Consent Mode v2 integration
 */

export type ConsentPreferences = {
  necessary: boolean;
  analytics: boolean;
  marketing: boolean;
  timestamp: number;
};

const CONSENT_KEY = "halo_cookie_consent";

/**
 * Get current consent preferences from localStorage
 */
export function getConsentPreferences(): ConsentPreferences | null {
  if (typeof window === "undefined") return null;

  try {
    const stored = localStorage.getItem(CONSENT_KEY);
    if (!stored) return null;
    return JSON.parse(stored) as ConsentPreferences;
  } catch {
    return null;
  }
}

/**
 * Save consent preferences and update GTM
 */
export function saveConsentPreferences(preferences: Omit<ConsentPreferences, "timestamp">) {
  if (typeof window === "undefined") return;

  const fullPreferences: ConsentPreferences = {
    ...preferences,
    timestamp: Date.now(),
  };

  localStorage.setItem(CONSENT_KEY, JSON.stringify(fullPreferences));

  // Update GTM Consent Mode v2
  updateGTMConsent(preferences);

  // Notify same-tab listeners (ConsentScripts component)
  window.dispatchEvent(new Event("consent-updated"));
}

/**
 * Update GTM Consent Mode v2 signals
 */
export function updateGTMConsent(preferences: Omit<ConsentPreferences, "timestamp">) {
  if (typeof window === "undefined" || !(window as any).gtag) return;

  const gtag = (window as any).gtag;

  gtag("consent", "update", {
    analytics_storage: preferences.analytics ? "granted" : "denied",
    ad_storage: preferences.marketing ? "granted" : "denied",
    ad_user_data: preferences.marketing ? "granted" : "denied",
    ad_personalization: preferences.marketing ? "granted" : "denied",
  });
}

/**
 * Initialize GTM Consent Mode v2 with default denied state
 * This must run BEFORE GTM loads
 */
export function initializeConsentMode() {
  if (typeof window === "undefined") return;

  // Create gtag function if it doesn't exist
  (window as any).dataLayer = (window as any).dataLayer || [];
  function gtag(...args: any[]) {
    (window as any).dataLayer.push(args);
  }
  (window as any).gtag = gtag;

  // Set default consent - analytics granted, ads denied
  gtag("consent", "default", {
    analytics_storage: "granted",
    ad_storage: "denied",
    ad_user_data: "denied",
    ad_personalization: "denied",
    wait_for_update: 500, // Wait 500ms for consent banner
  });

  // Check if user has already consented
  const stored = getConsentPreferences();
  if (stored) {
    updateGTMConsent(stored);
  }
}

/**
 * Accept all cookies
 */
export function acceptAllCookies() {
  saveConsentPreferences({
    necessary: true,
    analytics: true,
    marketing: true,
  });
}


/**
 * Check if user has made a consent choice
 */
export function hasConsented(): boolean {
  return getConsentPreferences() !== null;
}
