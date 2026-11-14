import Link from "next/link";
import type { Project } from "@/data/portfolio";

export default function ProjectCard({ project, n }: { project: Project; n: number }) {
  return (
    <article className={`project-card accent-${project.accent}`}>
      <Link className="project-card-main" href={`/work/${project.slug}`} aria-label={`View ${project.name} case study`}>
        <div className="project-top">
          <span>{String(n).padStart(2, "0")} / {project.category}</span>
          <span aria-hidden="true">↗</span>
        </div>
        <div className="project-art" aria-hidden="true">
          <span>{project.name === "Buddy AI" ? "AI_" : project.name === "Laadli Shringaar" ? "WEB/" : "HTML."}</span>
          <div className="art-corner" />
        </div>
        <div className="project-body">
          <span className="tiny-tag">{project.status.toUpperCase()} · {project.year}</span>
          <h3>{project.name}</h3>
          <p>{project.short}</p>
        </div>
      </Link>
      {project.href && (
        <a
          className="project-card-live"
          href={project.href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`Visit ${project.name} live website (opens in a new tab)`}
        >
          VISIT LIVE WEBSITE <span aria-hidden="true">↗</span>
        </a>
      )}
    </article>
  );
}
