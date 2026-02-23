"use client";

import { useEffect } from "react";
import { trackEvent } from "@/lib/analytics";

const LINKEDIN_HOST = "linkedin.com";

const AnalyticsClickTracker = () => {
  useEffect(() => {
    const handleClick = (event: MouseEvent) => {
      const target = event.target as HTMLElement | null;
      const anchor = target?.closest("a[href]") as HTMLAnchorElement | null;

      if (!anchor) return;

      const href = anchor.getAttribute("href") ?? "";
      if (!href) return;

      if (href.startsWith("tel:")) {
        trackEvent("click_phone", {
          link_type: "tel",
          destination: href.replace("tel:", ""),
          location: window.location.pathname,
        });
        return;
      }

      if (href.startsWith("mailto:")) {
        trackEvent("click_email", {
          link_type: "mailto",
          destination: href.replace("mailto:", ""),
          location: window.location.pathname,
        });
        return;
      }

      try {
        const url = new URL(href, window.location.origin);
        if (url.hostname.includes(LINKEDIN_HOST)) {
          trackEvent("click_linkedin", {
            destination: url.href,
            location: window.location.pathname,
          });
        }
      } catch {
        // Ignore invalid URLs.
      }
    };

    document.addEventListener("click", handleClick, { capture: true });
    return () => {
      document.removeEventListener("click", handleClick, { capture: true });
    };
  }, []);

  return null;
};

export default AnalyticsClickTracker;
