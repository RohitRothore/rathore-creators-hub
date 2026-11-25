import Link from "next/link";
import SubscribeForm from "@/components/SubscribeForm";

export default function Home() {
  return (
    <main>
      <section className="hero">
        <div className="container hero-grid">
          <div className="hero-copy">
            <p className="eyebrow">WELCOME TO RATHORE CREATORS HUB</p>
            <h1>
              Two passions.
              <br />
              <span>One creative space.</span>
            </h1>
            <p className="hero-text">
              Explore handmade woolen creations, crochet ideas, music and
              harmonium performances from our two YouTube channels.
            </p>
            <div className="hero-actions">
              <a className="button" href="#channels">
                Explore channels
              </a>
              <a className="text-link" href="#subscribe">
                Get email updates ↗
              </a>
            </div>
            <div className="hero-proof">
              <span>✦ DIY & handmade</span>
              <span>✦ Music & creativity</span>
            </div>
          </div>
          <div className="hero-art">
            <div className="art-orbit orbit-one" />
            <div className="art-orbit orbit-two" />
            <div className="art-card art-craft">
              <span>🧶</span>
              <strong>Made with love</strong>
              <small>Creativity in every stitch</small>
            </div>
            <div className="art-card art-music">
              <span>🎼</span>
              <strong>Feel the music</strong>
              <small>Melodies from the heart</small>
            </div>
            <div className="art-center">
              R<span>✦</span>
            </div>
          </div>
        </div>
      </section>
      <section className="section container" id="channels">
        <div className="section-heading">
          <p className="eyebrow">MEET THE CHANNELS</p>
          <h2>Find what inspires you.</h2>
          <p>
            Choose your favourite corner of creativity and join the journey.
          </p>
        </div>
        <div className="channel-grid">
          <article className="channel-card craft-card">
            <div className="channel-visual craft-visual">
              <span>🧶</span>
              <span className="visual-caption">CREATE • CRAFT • REPEAT</span>
            </div>
            <div className="channel-content">
              <span className="tag">CROCHET & DIY</span>
              <h3>Shraddha Woolen DIY Creations</h3>
              <p>
                Discover crochet patterns, woolen designs, handmade creations
                and DIY inspiration.
              </p>
              <a
                className="button button-dark"
                href="https://www.youtube.com/@ShraddhaWoolenDIYCreations"
                target="_blank"
                rel="noreferrer"
              >
                Visit YouTube channel ↗
              </a>
            </div>
          </article>
          <article className="channel-card music-card">
            <div className="channel-visual music-visual">
              <span>🎹</span>
              <span className="visual-caption">SING • PLAY • SHARE</span>
            </div>
            <div className="channel-content">
              <span className="tag">MUSIC & ENTERTAINMENT</span>
              <h3>Rohit Rathore Official</h3>
              <p>
                Enjoy singing, harmonium performances, music and other creative
                content.
              </p>
              <a
                className="button button-dark"
                href="https://www.youtube.com/@itsRohitRathoreOfficial"
                target="_blank"
                rel="noreferrer"
              >
                Visit YouTube channel ↗
              </a>
            </div>
          </article>
        </div>
      </section>
      <section className="subscribe-section" id="subscribe">
        <div className="container subscribe-grid">
          <div>
            <p className="eyebrow">STAY IN THE LOOP</p>
            <h2>
              A little creativity
              <br />
              in your inbox.
            </h2>
            <p>
              Subscribe to receive occasional updates about new videos and
              creative projects. Choose the channel(s) you want to hear from.
            </p>
            <div className="privacy-promise">
              🔒 Your email stays private and is used only for the updates you
              request.
            </div>
          </div>
          <div className="form-card">
            <h3>Join our creative community</h3>
            <p className="form-intro">
              Choose your interests and leave your email below.
            </p>
            <SubscribeForm />
          </div>
        </div>
      </section>
      <section className="closing container">
        <p className="eyebrow">THANKS FOR BEING HERE</p>
        <h2>Keep creating. Keep sharing.</h2>
        <p>
          Every view, kind word and bit of encouragement helps creativity grow.
        </p>
        <Link href="#subscribe" className="text-link">
          Stay connected ↑
        </Link>
      </section>
    </main>
  );
}
