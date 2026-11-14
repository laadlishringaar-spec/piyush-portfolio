import Link from "next/link";
import ThemeToggle from "./theme-toggle";
export default function Header() {
  return <header className="site-header wrapper">
    <Link className="brand" href="/" aria-label="Piyush Giri home">PIYUSH<span className="brand-dot">.</span>EXE</Link>
    <nav aria-label="Main navigation" className="nav-links">
      <Link href="/#about">/ABOUT</Link>
      <Link href="/#skills">/SKILLS</Link>
      <Link href="/work">/WORK</Link>
      <Link href="/explore">/EXPLORE</Link>
      <Link href="/#journey">/JOURNEY</Link>
      <Link href="/notes">/NOTES</Link>
      <Link className="nav-contact" href="/#contact">CONNECT</Link>
    </nav>
    <ThemeToggle />
  </header>;
}
