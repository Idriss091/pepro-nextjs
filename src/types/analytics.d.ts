export {};

type ConsentState = "granted" | "denied";

type GtagFunction = {
  (
    command: "consent",
    action: "default" | "update",
    params: {
      analytics_storage: ConsentState;
      ad_storage: ConsentState;
      ad_user_data: ConsentState;
      ad_personalization: ConsentState;
      wait_for_update?: number;
    },
  ): void;
  (command: "js", date: Date): void;
  (command: "config", target: string, params?: Record<string, unknown>): void;
  (command: "event", eventName: string, params?: Record<string, unknown>): void;
};

declare global {
  interface Window {
    dataLayer: unknown[];
    gtag?: GtagFunction;
  }
}
