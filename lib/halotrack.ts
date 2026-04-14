/**
 * HaloTrack Attribution Tracking Utilities
 * Provides type-safe interfaces and helper functions for HaloTrack integration
 */

// Extend Window interface to include HaloTrack
declare global {
    interface Window {
        HaloTrack?: {
            sessionId: string;
            getSessionId: () => string;
            updateConsent?: (consent: boolean) => void;
        };
    }
}

/**
 * Lead data structure for HaloTrack webhook
 */
export interface HaloTrackLead {
    lead_id: string;
    source: string;
    form_type: 'web-project' | 'tracking-audit' | 'ads-lead' | 'growth-plan' | 'contact' | 'audit-consultation';
    email: string;
    name?: string;
    phone?: string;
    message?: string;
    session_id: string;
    consent_given: boolean;
    lead_value: number;
    currency: string;
    custom_fields?: Record<string, any>;
}

/**
 * Get the current HaloTrack session ID
 * @returns Session ID or empty string if HaloTrack is not loaded
 */
export function getHaloTrackSessionId(): string {
    if (typeof window === 'undefined') return '';

    // Priority 1: HaloTrack object (set after /api/touch response)
    if (window.HaloTrack?.getSessionId?.()) {
        const sid = window.HaloTrack.getSessionId();
        if (sid) return sid;
    }

    // Priority 2: _halo cookie (set by tracking server)
    const match = document.cookie.match(/(^| )_halo=([^;]+)/);
    if (match?.[2]) return match[2];

    return '';
}

/**
 * Wait for HaloTrack to be ready
 * @returns Promise that resolves when HaloTrack is loaded
 */
export function waitForHaloTrack(): Promise<void> {
    return new Promise((resolve) => {
        if (typeof window === 'undefined') {
            resolve();
            return;
        }

        if (window.HaloTrack) {
            resolve();
            return;
        }

        // Listen for ready event
        window.addEventListener('halotrack:ready', () => resolve(), { once: true });

        // Timeout after 5 seconds
        setTimeout(() => resolve(), 5000);
    });
}

/**
 * Send lead data to n8n webhook (via HaloAgency API)
 * @param leadData Lead information to send
 * @returns Promise with the response
 */
export async function sendLeadToWebhook(
    leadData: HaloTrackLead
): Promise<{ success: boolean; error?: string }> {
    try {
        const response = await fetch('/api/webhook/lead', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'X-Webhook-Secret': process.env.NEXT_PUBLIC_HALOTRACK_WEBHOOK_SECRET || '',
            },
            body: JSON.stringify(leadData),
        });

        const result = await response.json();

        if (!response.ok) {
            throw new Error(result.error || 'Failed to send lead');
        }

        return { success: true };
    } catch (error) {
        console.error('Lead submission error:', error);
        return {
            success: false,
            error: error instanceof Error ? error.message : 'Unknown error'
        };
    }
}

/**
 * Update HaloTrack consent status
 * @param consent Whether consent was given
 */
export function updateHaloTrackConsent(consent: boolean): void {
    if (typeof window !== 'undefined' && window.HaloTrack?.updateConsent) {
        window.HaloTrack.updateConsent(consent);
    }
}

/**
 * Track form interaction events
 * @param eventName Event name (e.g., 'form_start', 'form_submit')
 * @param properties Event properties
 */
export async function trackFormEvent(
    eventName: string,
    properties?: Record<string, any>
): Promise<void> {
    // Silent fail - don't break UX if tracking fails
    try {
        const sessionId = getHaloTrackSessionId();

        if (!sessionId) {
            console.warn('No HaloTrack session ID available');
            return;
        }

        // Send to HaloTrack event API
        await fetch(`https://${process.env.NEXT_PUBLIC_HALOTRACK_DOMAIN}/api/event`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                event_name: eventName,
                properties: properties || {},
            }),
        });
    } catch (error) {
        console.error('Event tracking error:', error);
    }
}

/**
 * Send lead directly to HaloTrack API (Client-Side)
 * Matches Propradlo implementation for accurate attribution
 */
export async function sendLeadToHaloTrack(leadData: HaloTrackLead): Promise<void> {
    try {
        if (!process.env.NEXT_PUBLIC_HALOTRACK_DOMAIN) {
            console.warn("HaloTrack domain not set");
            return;
        }

        const payload = {
            ...leadData,
            // Ensure lead_id is present if not provided
            lead_id: leadData.lead_id || crypto.randomUUID(),
            lead_value: leadData.lead_value || 0,
            currency: leadData.currency || "CZK",
        };

        await fetch(`https://${process.env.NEXT_PUBLIC_HALOTRACK_DOMAIN}/api/webhook/lead`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'X-Webhook-Secret': process.env.NEXT_PUBLIC_HALOTRACK_WEBHOOK_SECRET || '',
            },
            body: JSON.stringify(payload),
        });
    } catch (error) {
        // Non-blocking error
        console.error("HaloTrack direct submission failed:", error);
    }
}
