import Link from "next/link";
export default function Privacy() {
  return (
    <main className="plain-page container">
      <p className="eyebrow">YOUR PRIVACY</p>
      <h1>Privacy Policy</h1>
      <p className="lead">Last updated: November 21, 2026</p>
      <div className="plain-panel">
        <h2>Information we collect</h2>
        <p>
          If you subscribe, we collect the email address you provide, your
          selected channel interests and the time of consent. We use this
          information to send the updates you requested.
        </p>
        <h2>How we use your information</h2>
        <p>
          We use subscriber information only to manage email updates and your
          subscription preferences. We do not sell your email address.
        </p>
        <h2>Advertising measurement</h2>
        <p>
          This website may use Google Ads conversion measurement to understand
          whether an advertisement led to a completed subscription. Google may
          process information according to its own policies. You can reject
          advertising-related storage using the consent choice shown on this
          website.
        </p>
        <h2>Data storage and deletion</h2>
        <p>
          Subscription information is stored in a Supabase database. To request
          access, correction or deletion of your subscription, contact the site
          owner using the contact details they publish before launch.
        </p>
        <h2>Your choices</h2>
        <p>
          You may choose not to subscribe and may reject advertising-related
          storage. Do not submit another person's email address without their
          permission.
        </p>
        <h2>Contact</h2>
        <p>
          Before publishing, replace this section with a real contact email
          address and the identity/location of the website operator.
        </p>
      </div>
      <p>
        <Link href="/">← Back to home</Link>
      </p>
    </main>
  );
}
