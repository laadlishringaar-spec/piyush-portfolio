import Link from "next/link";
import type { Metadata } from "next";
import ProjectCard from "@/components/project-card";
import {projects} from "@/data/portfolio";
export const metadata: Metadata = {title:"Selected Work"};
export default function Work() {return <>
<section className="subhero grid-paper"><div className="wrapper"><span className="eyebrow">/ WORK / SELECTED PROJECTS</span><h1>WORK IN <span className="outline-text">PROGRESS.</span></h1><p>Real builds, experimental ideas aur early milestones — sabki status clearly label ki gayi hai.</p></div></section>
<section className="section wrapper"><div className="project-grid">{projects.filter(p=>p.featured).map((p,i)=><ProjectCard project={p} n={i+1} key={p.slug}/>)}</div><div className="work-info"><strong>PROJECT SELECTION / </strong>Ye carefully selected work hai, complete project archive nahi. Additional screenshots, repositories aur demos future mein add kiye ja sakte hain. <Link href="/about">More about my journey ↗</Link></div></section></>}
