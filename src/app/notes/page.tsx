import Link from "next/link";
import type { Metadata } from "next";
import {notes} from "@/data/notes";
export const metadata:Metadata={title:"Notes"};
export default function Notes(){return <><section className="subhero grid-paper"><div className="wrapper"><span className="eyebrow">/ IDEAS / NOTES</span><h1>THE <span className="outline-text">NOTEBOOK.</span></h1><p>Thoughts on learning and building. These entries are editorial drafts to be reviewed before public launch.</p></div></section><section className="section wrapper"><div className="notes-grid">{notes.map((n,i)=><Link className="note-card" href={`/notes/${n.slug}`} key={n.slug}><span>NOTE {String(i+1).padStart(2,"0")} / {n.category}</span><h2>{n.title} ↗</h2><p>{n.description}</p><small>EDITORIAL DRAFT</small></Link>)}</div></section></>}
