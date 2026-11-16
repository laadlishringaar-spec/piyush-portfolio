import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { projects } from "@/data/portfolio";
type Props = { params: Promise<{slug:string}> };
export function generateStaticParams(){return projects.map(p=>({slug:p.slug}));}
export async function generateMetadata({params}:Props):Promise<Metadata>{const {slug}=await params;const p=projects.find(p=>p.slug===slug);return {title:p?.name ?? "Project",description:p?.short};}
export default async function ProjectDetail({params}:Props){const {slug}=await params;const p=projects.find(p=>p.slug===slug);if(!p)notFound();
return <><section className="subhero grid-paper"><div className="wrapper"><Link className="eyebrow back-link" href="/work">← BACK TO WORK</Link><div className="detail-meta"><span>{p.category}</span><span>{p.status.toUpperCase()}</span><span>{p.year}</span></div><h1>{p.name.toUpperCase()}<span className="outline-text detail-title-second">/ PROJECT.</span></h1><p>{p.short}</p></div></section>
<section className="section wrapper"><div className="detail-layout"><div><span className="eyebrow">PROJECT OVERVIEW / 01</span><h2>WHAT I <span className="outline-text">BUILT.</span></h2></div><div className="detail-copy"><p>{p.intro}</p><div className="detail-chip-list">{p.focus.map(t=><span key={t}>{t}</span>)}</div>{p.href?<a className="button button-dark" href={p.href} target="_blank" rel="noopener noreferrer" aria-label={`Visit ${p.name} live website (opens in a new tab)`}>VISIT LIVE WEBSITE ↗</a>:<div className="notice">{p.slug === "friends-webpage" ? "Friends Webpage ka verified Netlify link abhi pending hai. Link add karte hi yahan live website ka button aa jayega." : "Public project link / screenshots will be added later."}</div>}</div></div></section>
<section className="section section-surface"><div className="wrapper detail-layout"><div><span className="eyebrow">FEATURES / 02</span><h2>KEY <span className="outline-text">DETAILS.</span></h2></div><div className="detail-copy"><ol className="feature-list">{p.highlights.map((x,i)=><li key={x}><span>{String(i+1).padStart(2,"0")}</span><strong>{x}</strong></li>)}</ol></div></div></section>
<section className="section wrapper detail-layout"><div><span className="eyebrow">WHAT I LEARNED / 03</span><h2>BUILD. DEBUG. <span className="outline-text">REPEAT.</span></h2></div><div className="detail-copy"><p>{p.lessons}</p><Link className="inline-link" href="/work">← ALL PROJECTS</Link></div></section></>;
}
