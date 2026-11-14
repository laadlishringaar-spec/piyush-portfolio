import Link from "next/link";
export default function NotFound(){return <div className="wrapper not-found grid-paper"><span className="eyebrow">SYSTEM MESSAGE / 404</span><h1>PAGE <span className="outline-text">NOT FOUND.</span></h1><p>Ye link abhi available nahi hai.</p><Link className="button button-dark" href="/">BACK TO HOME ↗</Link></div>}
