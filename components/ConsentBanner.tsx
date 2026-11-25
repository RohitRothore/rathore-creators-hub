"use client";
import { useEffect, useState } from "react";

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

export default function ConsentBanner() {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    if (!localStorage.getItem("rathore-ads-consent")) setVisible(true);
  }, []);
  function choose(granted: boolean) {
    localStorage.setItem("rathore-ads-consent", granted ? "granted" : "denied");
    window.gtag?.("consent", "update", {
      ad_storage: granted ? "granted" : "denied",
      ad_user_data: granted ? "granted" : "denied",
      ad_personalization: granted ? "granted" : "denied",
      analytics_storage: "denied",
    });
    setVisible(false);
  }
  if (!visible) return null;
  return (
    <aside
      className="consent-banner"
      aria-label="Advertising cookie preferences"
    >
      <div>
        <strong>Your privacy choices</strong>
        <p>
          This site uses Google Ads conversion measurement. You can allow or
          reject advertising-related storage. Read our{" "}
          <a href="/privacy">Privacy Policy</a>.
        </p>
      </div>
      <div className="consent-actions">
        <button className="button button-small" onClick={() => choose(true)}>
          Accept
        </button>
        <button
          className="button button-small button-outline"
          onClick={() => choose(false)}
        >
          Reject
        </button>
      </div>
    </aside>
  );
}
