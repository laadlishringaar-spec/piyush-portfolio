import Link from "next/link";
import { identity } from "@/data/portfolio";
export default function Footer() {
  return <footer className="footer border-top" id="contact">
    <div className="wrapper footer-inner">
      <div><div className="eyebrow">LET'S BUILD SOMETHING USEFUL</div><h2>GOT AN <span className="outline-text">IDEA?</span></h2><p>Collaboration aur meaningful projects ke liye open to conversations.</p></div>
      <div className="footer-actions">
        {identity.email ? <a className="button button-dark" href={`mailto:${identity.email}`}>EMAIL ME ↗</a> : <span className="button button-disabled" aria-label="Contact email will be added later">CONTACT SOON</span>}
        {identity.github && <a href={identity.github} target="_blank" rel="noopener noreferrer">GITHUB ↗</a>}
        {identity.reddit && <a href={identity.reddit} target="_blank" rel="noopener noreferrer">REDDIT ↗</a>}
        <Link href="/">BACK HOME ↑</Link>
      </div>
    </div>
    <div className="wrapper footer-bottom"><span>© {new Date().getFullYear()} PIYUSH GIRI</span><span>BUILT WITH CURIOSITY. NOT HYPE.</span></div>
  </footer>;
}
