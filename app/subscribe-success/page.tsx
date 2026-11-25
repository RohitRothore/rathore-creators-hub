import Link from "next/link";
export default function SubscribeSuccess() {
  return (
    <main className="plain-page container success-page">
      <div className="success-icon">✓</div>
      <p className="eyebrow">YOU'RE CONNECTED</p>
      <h1>Thanks for subscribing!</h1>
      <p className="lead">
        Your email subscription has been saved. We appreciate your interest in
        our creative channels.
      </p>
      <Link href="/" className="button">
        Back to homepage
      </Link>
    </main>
  );
}
