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
  if (typeof window === "undefined") return;

  // Must use gtag() function — dataLayer.push([]) array format is not recognized by GTM Consent Mode v2
  if (typeof (window as any).gtag === "function") {
    (window as any).gtag("consent", "update", {
      analytics_storage: preferences.analytics ? "granted" : "denied",
      ad_storage: preferences.marketing ? "granted" : "denied",
      ad_user_data: preferences.marketing ? "granted" : "denied",
      ad_personalization: preferences.marketing ? "granted" : "denied",
    });
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
