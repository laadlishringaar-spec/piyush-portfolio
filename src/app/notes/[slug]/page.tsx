import Link from "next/link";
import {notFound} from "next/navigation";
import type {Metadata} from "next";
import {notes} from "@/data/notes";
type Props={params:Promise<{slug:string}>};
export function generateStaticParams(){return notes.map(n=>({slug:n.slug}));}
export async function generateMetadata({params}:Props):Promise<Metadata>{const {slug}=await params;const n=notes.find(n=>n.slug===slug);return {title:n?.title??"Note",description:n?.description};}
export default async function NoteDetail({params}:Props){const {slug}=await params;const n=notes.find(n=>n.slug===slug);if(!n)notFound();return <><section className="subhero grid-paper"><div className="wrapper"><Link href="/notes" className="eyebrow back-link">← ALL NOTES</Link><h1 className="note-title">{n.title}</h1><p>{n.description}</p></div></section><article className="section wrapper prose-note"><div className="notice">EDITORIAL DRAFT — please review wording and facts before publishing.</div>{n.paragraphs.map((p,i)=><p key={i}>{p}</p>)}<Link href="/notes" className="inline-link">← BACK TO NOTES</Link></article></>}
