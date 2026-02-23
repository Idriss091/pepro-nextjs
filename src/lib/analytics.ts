export const GA_MEASUREMENT_ID =
  process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID?.trim() ?? "";

type EventParams = Record<string, string | number | boolean | undefined>;

export const isAnalyticsEnabled = GA_MEASUREMENT_ID.length > 0;

export function trackEvent(eventName: string, params: EventParams = {}) {
  if (typeof window === "undefined") return;
  if (!isAnalyticsEnabled) return;
  if (typeof window.gtag !== "function") return;

  window.gtag("event", eventName, params);
}
