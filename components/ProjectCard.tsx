import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight, GitBranch } from "lucide-react";
import type { Project } from "@/data/projects";

type ProjectCardProps = {
  project: Project;
};

export function ProjectCard({ project }: ProjectCardProps) {
  const imageSrc = project.screenshots[0]
    ? project.screenshots[0].startsWith("/")
      ? project.screenshots[0]
      : `/projects/${project.slug}/${project.screenshots[0]}`
    : "/projects/placeholder.svg";

  return (
    <article className="group overflow-hidden rounded-3xl border border-white/10 bg-slate-950/80 shadow-[0_12px_40px_rgba(2,6,23,0.6)] transition duration-300 hover:-translate-y-1 hover:border-cyan-400/30">
      <div className="relative h-60 overflow-hidden border-b border-white/10 bg-slate-900">
        <Image
          src={imageSrc}
          alt={`${project.title} project preview`}
          fill
          className="object-cover transition duration-500 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>

      <div className="p-6">
        <div className="mb-4 flex items-center justify-between gap-3">
          <span className="rounded-full border border-cyan-400/20 bg-cyan-500/10 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.2em] text-cyan-200">
            {project.category}
          </span>
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noreferrer"
              aria-label={`GitHub for ${project.title}`}
              className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/5 text-slate-200 transition hover:border-cyan-400/40 hover:text-cyan-200"
            >
              <GitBranch size={16} />
            </a>
          )}
        </div>

        <h3 className="text-2xl font-semibold text-white">{project.title}</h3>
        <p className="mt-3 text-sm leading-7 text-slate-300">{project.description}</p>

        <div className="mt-5 flex flex-wrap gap-2">
          {project.technologies.slice(0, 5).map((tech) => (
            <span key={tech} className="rounded-full border border-white/10 bg-white/5 px-2.5 py-1 text-[11px] text-slate-300">
              {tech}
            </span>
          ))}
        </div>

        <ul className="mt-5 space-y-2 text-sm text-slate-300">
          {project.features.slice(0, 3).map((feature) => (
            <li key={feature} className="flex gap-2">
              <span className="mt-1 text-cyan-300">•</span>
              <span>{feature}</span>
            </li>
          ))}
        </ul>

        <div className="mt-6 flex items-center justify-between gap-3">
          <Link
            href={`/projects/${project.slug}`}
            className="inline-flex items-center gap-2 text-sm font-semibold text-cyan-300 transition hover:text-cyan-200"
          >
            View Project
            <ArrowUpRight size={16} />
          </Link>
          {project.demo && (
            <a href={project.demo} target="_blank" rel="noreferrer" className="text-sm font-medium text-slate-300 hover:text-white">
              Demo
            </a>
          )}
        </div>
      </div>
    </article>
  );
}
