declare global {
  interface Window {
    __haloPosthogInitialized?: boolean;
  }
}

let posthogInitPromise: Promise<void> | null = null;

export function initPosthog(): Promise<void> {
  const key = process.env.NEXT_PUBLIC_POSTHOG_KEY;
  const apiHost = process.env.NEXT_PUBLIC_POSTHOG_HOST;

  if (typeof window === "undefined") {
    return Promise.resolve();
  }

  if (window.__haloPosthogInitialized || !key || !apiHost) {
    return Promise.resolve();
  }

  if (!posthogInitPromise) {
    posthogInitPromise = import("posthog-js").then(({ default: posthog }) => {
      if (window.__haloPosthogInitialized) {
        return;
      }

      posthog.init(key, {
        api_host: apiHost,
        ui_host: process.env.NEXT_PUBLIC_POSTHOG_UI_HOST,
        defaults: "2026-01-30",
      });

      window.__haloPosthogInitialized = true;
    });
  }

  return posthogInitPromise;
}
