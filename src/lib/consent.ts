export const CONSENT_STORAGE_KEY = "pepro_cookie_consent_v1";
export const CONSENT_DURATION_MS = 180 * 24 * 60 * 60 * 1000;

export type AnalyticsConsent = "granted" | "denied";

export type StoredConsent = {
  analytics: AnalyticsConsent;
  savedAt: number;
};

export function readStoredConsent(): StoredConsent | null {
  if (typeof window === "undefined") return null;

  try {
    const rawValue = window.localStorage.getItem(CONSENT_STORAGE_KEY);
    if (!rawValue) return null;

    const value = JSON.parse(rawValue) as Partial<StoredConsent>;
    if (
      (value.analytics !== "granted" && value.analytics !== "denied") ||
      typeof value.savedAt !== "number"
    ) {
      return null;
    }

    if (Date.now() - value.savedAt > CONSENT_DURATION_MS) {
      window.localStorage.removeItem(CONSENT_STORAGE_KEY);
      return null;
    }

    return {
      analytics: value.analytics,
      savedAt: value.savedAt,
    };
  } catch {
    window.localStorage.removeItem(CONSENT_STORAGE_KEY);
    return null;
  }
}

export function storeConsent(analytics: AnalyticsConsent) {
  if (typeof window === "undefined") return;

  const value: StoredConsent = {
    analytics,
    savedAt: Date.now(),
  };

  window.localStorage.setItem(CONSENT_STORAGE_KEY, JSON.stringify(value));
}

export function hasAnalyticsConsent() {
  return readStoredConsent()?.analytics === "granted";
}

export function deleteGoogleAnalyticsCookies() {
  if (typeof document === "undefined") return;

  const cookieNames = document.cookie
    .split(";")
    .map((cookie) => cookie.split("=")[0]?.trim())
    .filter((name): name is string => Boolean(name?.startsWith("_ga")));

  const hostname = window.location.hostname;
  const domainCandidates = new Set([hostname, `.${hostname}`]);
  const hostnameParts = hostname.split(".");

  if (hostnameParts.length >= 2) {
    const rootDomain = hostnameParts.slice(-2).join(".");
    domainCandidates.add(rootDomain);
    domainCandidates.add(`.${rootDomain}`);
  }

  for (const name of cookieNames) {
    document.cookie = `${name}=; Max-Age=0; path=/; SameSite=Lax`;
    for (const domain of domainCandidates) {
      document.cookie = `${name}=; Max-Age=0; path=/; domain=${domain}; SameSite=Lax`;
    }
  }
}
