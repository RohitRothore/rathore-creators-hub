"use client";

import Script from "next/script";
import { useEffect } from "react";

const adsId = process.env.NEXT_PUBLIC_GOOGLE_ADS_ID;

export function GoogleAdsTag() {
  useEffect(() => {
    // Consent starts denied. The visitor can grant consent using the banner.
    if (typeof window !== "undefined" && typeof window.gtag === "function") {
      const consent = localStorage.getItem("rathore-ads-consent");
      window.gtag("consent", "update", {
        ad_storage: consent === "granted" ? "granted" : "denied",
        ad_user_data: consent === "granted" ? "granted" : "denied",
        ad_personalization: consent === "granted" ? "granted" : "denied",
      });
    }
  }, []);

  if (!adsId || adsId.includes("REPLACE")) return null;
  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${adsId}`}
        strategy="afterInteractive"
      />
      <Script id="google-ads-init" strategy="afterInteractive">
        {`window.dataLayer = window.dataLayer || []; window.gtag = function(){dataLayer.push(arguments);}; window.gtag('consent','default',{ad_storage:'denied',ad_user_data:'denied',ad_personalization:'denied',analytics_storage:'denied',wait_for_update:500}); window.gtag('js', new Date()); window.gtag('config', '${adsId}');`}
      </Script>
    </>
  );
}

declare global {
  interface Window {
    dataLayer: unknown[];
    gtag: (...args: unknown[]) => void;
  }
}

export function trackWebsiteConversion() {
  const label = process.env.NEXT_PUBLIC_GOOGLE_ADS_CONVERSION_LABEL;
  if (
    !adsId ||
    adsId.includes("REPLACE") ||
    !label ||
    label.includes("REPLACE")
  )
    return;
  if (typeof window === "undefined" || typeof window.gtag !== "function")
    return;
  if (localStorage.getItem("rathore-ads-consent") !== "granted") return;
  window.gtag("event", "conversion", { send_to: `${adsId}/${label}` });
}
