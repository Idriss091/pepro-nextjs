import { hasAnalyticsConsent } from "@/lib/consent";

type EventParams = Record<string, string | number | boolean | undefined>;

export const GTM_CONTAINER_ID = process.env.NEXT_PUBLIC_GTM_ID?.trim() ?? "";

export function trackEvent(eventName: string, params: EventParams = {}) {
  if (typeof window === "undefined") return;
  if (!GTM_CONTAINER_ID) return;
  if (!hasAnalyticsConsent()) return;
  if (typeof window.gtag !== "function") return;

  window.gtag("event", eventName, params);
}
