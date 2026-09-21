"use client";

import Image from "next/image";
import Link from "next/link";
import { track } from "@vercel/analytics";
import type { Project } from "@/data/projects";
import { ProjectGallery } from "@/components/ProjectGallery";
import { ProjectCaseStudy } from "@/components/ProjectCaseStudy";

export function ProjectDetail({ project }: { project: Project }) {
  if (project.caseStudy) {
    return <ProjectCaseStudy project={project} />;
  }

  const galleryImages = project.screenshots.length
    ? project.screenshots.map((image) => ({
        src: image.startsWith("/") ? image : `/projects/${project.slug}/${image}`,
        alt: `${project.title} screenshot ${image}`,
      }))
    : [{ src: "/projects/placeholder.svg", alt: `${project.title} screenshot placeholder` }];

  return (
    <article className="px-4 pb-20 pt-10 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mb-8 flex items-center justify-between gap-4">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-cyan-300">{project.category}</p>
            <h1 className="mt-3 text-4xl font-semibold text-white sm:text-5xl">{project.title}</h1>
          </div>
          <Link href="/#projects" className="hidden rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-slate-200 transition hover:border-cyan-400/40 hover:text-white md:inline-flex">
            Back to projects
          </Link>
        </div>

        <div className="overflow-hidden rounded-[28px] border border-white/10 bg-slate-900 shadow-[0_20px_80px_rgba(15,23,42,0.7)]">
          <div className="relative h-[420px] w-full overflow-hidden">
            <Image
              src={galleryImages[0].src}
              alt={galleryImages[0].alt}
              fill
              className="object-cover"
              priority
              sizes="100vw"
            />
          </div>
        </div>

        <div className="mt-10 grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="space-y-8">
            <section className="rounded-3xl border border-white/10 bg-white/5 p-6">
              <h2 className="text-2xl font-semibold text-white">Overview</h2>
              <p className="mt-4 text-base leading-8 text-slate-300">{project.overview}</p>
            </section>

            <section className="rounded-3xl border border-white/10 bg-white/5 p-6">
              <h2 className="text-2xl font-semibold text-white">Problem</h2>
              <p className="mt-4 text-base leading-8 text-slate-300">{project.problem}</p>
            </section>

            <section className="rounded-3xl border border-white/10 bg-white/5 p-6">
              <h2 className="text-2xl font-semibold text-white">Solution</h2>
              <p className="mt-4 text-base leading-8 text-slate-300">{project.solution}</p>
            </section>
          </div>

          <aside className="space-y-6">
            <div className="rounded-3xl border border-cyan-400/20 bg-gradient-to-br from-slate-900 to-slate-950 p-6">
              <h3 className="text-xl font-semibold text-white">Technology Stack</h3>
              <div className="mt-5 flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <span key={tech} className="rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-sm text-slate-200">
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
              <h3 className="text-xl font-semibold text-white">Key Features</h3>
              <ul className="mt-4 space-y-2 text-base text-slate-300">
                {project.features.map((feature) => (
                  <li key={feature} className="flex gap-2">
                    <span className="mt-2 h-1.5 w-1.5 rounded-full bg-cyan-300" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
              <h3 className="text-xl font-semibold text-white">Project Links</h3>
              <div className="mt-4 flex flex-col gap-3">
                {project.github ? (
                  <a href={project.github} onClick={() => track("project_click", { project: project.slug, destination: "github" })} target="_blank" rel="noreferrer" className="rounded-full border border-white/10 bg-white/5 px-4 py-2.5 text-center text-sm font-medium text-white transition hover:border-cyan-400/40 hover:text-cyan-200">
                    GitHub
                  </a>
                ) : null}
                {project.demo ? (
                  <a href={project.demo} onClick={() => track("project_click", { project: project.slug, destination: "demo" })} target="_blank" rel="noreferrer" className="rounded-full border border-white/10 bg-white/5 px-4 py-2.5 text-center text-sm font-medium text-white transition hover:border-cyan-400/40 hover:text-cyan-200">
                    Live Demo
                  </a>
                ) : null}
              </div>
            </div>
          </aside>
        </div>

        <section className="mt-12 rounded-3xl border border-white/10 bg-white/5 p-6">
          <h2 className="text-2xl font-semibold text-white">Screenshots</h2>
          <div className="mt-6">
            <ProjectGallery images={project.screenshots} projectTitle={project.title} projectSlug={project.slug} />
          </div>
        </section>

        <section className="mt-12 rounded-3xl border border-white/10 bg-white/5 p-6">
          <h2 className="text-2xl font-semibold text-white">Development Highlights</h2>
          <ul className="mt-5 space-y-3 text-base leading-8 text-slate-300">
            {project.developmentHighlights.map((highlight) => (
              <li key={highlight} className="flex gap-3">
                <span className="mt-2 h-2 w-2 rounded-full bg-cyan-300" />
                <span>{highlight}</span>
              </li>
            ))}
          </ul>
        </section>
      </div>
    </article>
  );
}
