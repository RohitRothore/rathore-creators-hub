"use client";
import { FormEvent, useState } from "react";
import { trackWebsiteConversion } from "./GoogleAds";

const channels = ["Shraddha Woolen DIY Creations", "Rohit Rathore Official"];
export default function SubscribeForm() {
  const [email, setEmail] = useState("");
  const [interests, setInterests] = useState<string[]>(channels);
  const [consent, setConsent] = useState(false);
  const [busy, setBusy] = useState(false);
  const [message, setMessage] = useState("");
  const [success, setSuccess] = useState(false);

  function toggle(channel: string) {
    setInterests((current) =>
      current.includes(channel)
        ? current.filter((x) => x !== channel)
        : [...current, channel],
    );
  }

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setMessage("");
    setSuccess(false);
    setBusy(true);
    try {
      const form = event.currentTarget;
      const website = (new FormData(form).get("website") as string) || "";
      const response = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, interests, consent, website }),
      });
      const result = await response.json();
      if (!response.ok)
        throw new Error(result.error || "Something went wrong.");
      setSuccess(true);
      if (result.conversionEligible) trackWebsiteConversion();
      setMessage(
        result.alreadySubscribed
          ? "This email is already subscribed. Your preferences have not been changed."
          : "Thanks! Your subscription has been saved.",
      );
      if (!result.alreadySubscribed) {
        setEmail("");
        setConsent(false);
      }
    } catch (error) {
      setMessage(error instanceof Error ? error.message : "Please try again.");
    } finally {
      setBusy(false);
    }
  }

  return (
    <form className="subscribe-form" onSubmit={submit}>
      <label htmlFor="email">Email address</label>
      <input
        id="email"
        type="email"
        autoComplete="email"
        required
        maxLength={254}
        placeholder="you@example.com"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <fieldset>
        <legend>I'm interested in</legend>
        {channels.map((channel) => (
          <label className="check-row" key={channel}>
            <input
              type="checkbox"
              checked={interests.includes(channel)}
              onChange={() => toggle(channel)}
            />
            {channel}
          </label>
        ))}
      </fieldset>
      <label className="check-row consent-check">
        <input
          type="checkbox"
          checked={consent}
          onChange={(e) => setConsent(e.target.checked)}
          required
        />
        I agree to receive email updates from the selected channel(s). I can
        unsubscribe by contacting the site owner.
      </label>
      <div className="honeypot" aria-hidden="true">
        <label htmlFor="website">Leave this field empty</label>
        <input id="website" name="website" tabIndex={-1} autoComplete="off" />
      </div>
      <button
        className="button"
        type="submit"
        disabled={busy || !consent || interests.length === 0}
      >
        {busy ? "Submitting…" : "Subscribe for updates"}
      </button>
      {message && (
        <p
          className={success ? "form-message success" : "form-message error"}
          role="status"
        >
          {message}
        </p>
      )}
      <p className="form-note">
        We will only use your email for the updates you request. No spam.
      </p>
    </form>
  );
}
