import type { Metadata } from "next";
import Link from "next/link";
import "./globals.css";
import { GoogleAdsTag } from "@/components/GoogleAds";
import ConsentBanner from "@/components/ConsentBanner";

export const metadata: Metadata = {
  title: "Rathore Creators Hub | DIY, Music & Creativity",
  description:
    "Discover Shraddha Woolen DIY Creations and Rohit Rathore Official. Subscribe for updates on crochet, woolen crafts, singing and harmonium.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <GoogleAdsTag />
        <header className="site-header">
          <div className="container nav-wrap">
            <Link href="/" className="brand">
              Rathore<span>Creators</span>
            </Link>
            <nav>
              <Link href="/#channels">Channels</Link>
              <Link href="/#subscribe">Subscribe</Link>
              <Link href="/about">About</Link>
            </nav>
          </div>
        </header>
        {children}
        <footer className="site-footer">
          <div className="container footer-wrap">
            <div>
              <Link href="/" className="brand">
                Rathore<span>Creators</span>
              </Link>
              <p>Creativity, craft and music — all in one place.</p>
            </div>
            <div className="footer-links">
              <Link href="/about">About</Link>
              <Link href="/privacy">Privacy Policy</Link>
              <a href="mailto:rohitrathorebanda123@gmail.com">Contact</a>
            </div>
          </div>
          <div className="container copyright">
            © {new Date().getFullYear()} Rathore Creators Hub. All rights
            reserved.
          </div>
        </footer>
        <ConsentBanner />
      </body>
    </html>
  );
}
