import Link from "next/link";
export default function About() {
  return (
    <main className="plain-page container">
      <p className="eyebrow">ABOUT US</p>
      <h1>Welcome to Rathore Creators Hub.</h1>
      <p className="lead">
        A shared home for two creative journeys: handmade woolen and crochet
        creations, and music with a personal touch.
      </p>
      <div className="plain-panel">
        <h2>Our channels</h2>
        <h3>Shraddha Woolen DIY Creations</h3>
        <p>Creative crochet, woolen crafts, handmade designs and DIY ideas.</p>
        <a
          href="https://www.youtube.com/@ShraddhaWoolenDIYCreations"
          target="_blank"
          rel="noreferrer"
        >
          Visit channel ↗
        </a>
        <h3>Rohit Rathore Official</h3>
        <p>
          Singing, harmonium performances, music and other creative content.
        </p>
        <a
          href="https://www.youtube.com/@itsRohitRathoreOfficial"
          target="_blank"
          rel="noreferrer"
        >
          Visit channel ↗
        </a>
      </div>
      <p>
        <Link href="/">← Back to home</Link>
      </p>
    </main>
  );
}
