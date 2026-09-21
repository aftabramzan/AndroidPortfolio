"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowDown, ArrowUpRight, Check, GitBranch, Sparkles } from "lucide-react";
import { track } from "@vercel/analytics";
import { projects, type Project } from "@/data/projects";
import { siteConfig } from "@/config/site";
import { ProjectGallery } from "@/components/ProjectGallery";

type ProjectCaseStudyProps = {
  project: Project;
};

const featureIcons = ["01", "02", "03", "04", "05", "06"];

export function ProjectCaseStudy({ project }: ProjectCaseStudyProps) {
  const caseStudy = project.caseStudy;
  if (!caseStudy) return null;

  const currentIndex = projects.findIndex((item) => item.slug === project.slug);
  const previousProject = projects[(currentIndex - 1 + projects.length) % projects.length];
  const nextProject = projects[(currentIndex + 1) % projects.length];
  const primaryImage = project.screenshots[0] || "/projects/placeholder.svg";
  const featureDetails = project.features.map((feature, index) => {
    const [title, description] = feature.split("|");
    return {
      number: featureIcons[index] || String(index + 1).padStart(2, "0"),
      title,
      description: description || "",
    };
  });

  return (
    <main className={`case-study overflow-hidden bg-[#f7f5ef] text-[#173f32] ${project.slug === "smartswap" ? "case-study--smartswap" : project.slug === "job-tracker" ? "case-study--jobtracker" : project.slug === "mobilelink" || project.slug === "mobily" ? "case-study--mobilelink" : "case-study--niyyahhabits"}`}>
      <section className="relative isolate px-4 pb-16 pt-8 sm:px-6 sm:pb-24 lg:px-8 lg:pt-12">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_12%_8%,rgba(201,171,55,0.22),transparent_26%),radial-gradient(circle_at_88%_18%,rgba(38,104,76,0.18),transparent_28%)]" />
        <div className="mx-auto max-w-7xl">
          <div className="flex items-center justify-between gap-4 text-xs font-semibold uppercase tracking-[0.24em] text-[#b08c20]">
            <span>{project.category}</span>
            <span className="hidden items-center gap-2 sm:flex"><Sparkles size={14} /> Case Study</span>
          </div>

          <div className="mt-10 grid items-center gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
            <div className="max-w-2xl">
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#2b7457]">{caseStudy.eyebrow || "Faith-focused mobile application"}</p>
              <h1 className="mt-5 max-w-xl text-5xl font-semibold tracking-[-0.04em] text-[#173f32] sm:text-6xl lg:text-7xl">{project.title}</h1>
              <h2 className="mt-6 max-w-xl text-3xl font-medium leading-tight text-[#2b7457] sm:text-4xl">{caseStudy.headline || "Build Consistency in Your Daily Worship."}</h2>
              <p className="mt-7 max-w-xl text-base leading-8 text-[#50645b] sm:text-lg">{project.description}</p>
              <div className="mt-9 flex flex-wrap gap-3">
                <a href="#screenshots" className="inline-flex items-center gap-2 rounded-full bg-[#1d654b] px-5 py-3 text-sm font-semibold text-white shadow-[0_14px_30px_rgba(29,101,75,0.2)] transition hover:-translate-y-0.5 hover:bg-[#174f3b]">
                  Explore the app <ArrowDown size={16} />
                </a>
                <Link href="/#projects" className="inline-flex items-center rounded-full border border-[#b9c9bd] bg-white/60 px-5 py-3 text-sm font-semibold text-[#285441] transition hover:bg-white">
                  Back to projects
                </Link>
              </div>
            </div>

            <div className="relative mx-auto w-full max-w-[440px] lg:justify-self-end">
              <div className="absolute -inset-8 -z-10 rounded-[45%] bg-[#dbe8d9] blur-3xl" />
              <div className="relative mx-auto w-[min(82vw,330px)] rounded-[42px] border-[10px] border-[#173f32] bg-[#173f32] p-2 shadow-[0_30px_70px_rgba(23,63,50,0.25)] sm:w-[350px]">
                <div className="relative aspect-[9/19.2] overflow-hidden rounded-[30px] bg-[#f7f5ef]">
                  <Image src={primaryImage} alt={`${project.title} app splash screen`} fill priority className="object-cover" sizes="(max-width: 640px) 82vw, 350px" />
                </div>
                <div className="absolute left-1/2 top-2 h-5 w-24 -translate-x-1/2 rounded-full bg-[#173f32]" />
              </div>
              <div className="case-study-hero-badge absolute -bottom-5 -left-3 rounded-2xl border border-[#d3dfd0] bg-white/90 px-4 py-3 text-xs font-semibold uppercase tracking-[0.16em] text-[#2b7457] shadow-lg sm:left-0">{caseStudy.heroBadge || "A daily worship companion"}</div>
            </div>
          </div>

          <div className="mt-20 grid gap-3 border-t border-[#cad8ca] pt-6 sm:grid-cols-3 lg:grid-cols-5">
            {(caseStudy.details || [
              { label: "Category", value: project.category },
              { label: "Platform", value: caseStudy.platform },
              { label: "Project", value: project.title },
            ]).map(({ label, value }) => (
              <div key={label} className="border-l-2 border-[#d4b63f] px-4">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#819187]">{label}</p>
                <p className="mt-2 font-medium text-[#1d503c]">{value}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.7fr_1.3fr] lg:gap-24">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#b08c20]">01 / Overview</p>
            <h2 className="mt-4 text-4xl font-semibold tracking-[-0.03em] text-[#173f32] sm:text-5xl">Project Overview</h2>
          </div>
          <p className="max-w-3xl text-xl leading-9 text-[#50645b] sm:text-2xl sm:leading-10">{project.overview}</p>
        </div>
      </section>

      <section className="border-y border-[#dce5d9] bg-white/60 px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.7fr_1.3fr] lg:gap-24">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#b08c20]">01 / Context</p>
            <h2 className="mt-4 text-4xl font-semibold tracking-[-0.03em] text-[#173f32] sm:text-5xl">The Problem</h2>
          </div>
          <p className="max-w-3xl text-xl leading-9 text-[#50645b] sm:text-2xl sm:leading-10">{project.problem}</p>
        </div>
      </section>

      <section className="px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#b08c20]">02 / Direction</p>
            <h2 className="mt-4 text-4xl font-semibold tracking-[-0.03em] text-[#173f32] sm:text-5xl">The Idea</h2>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-[#50645b]">{project.solution}</p>
          </div>
          <div className="rounded-[28px] border border-[#cad8ca] bg-[#eaf2e7] p-7">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#2b7457]">{caseStudy.focusLabel || "Designed around daily utility"}</p>
            <div className="mt-6 grid grid-cols-2 gap-3 text-sm font-medium text-[#285441]">
              {(caseStudy.focusItems || ["Namaz tracking", "Prayer timings", "Quran access", "Prayer history", "Reminders", "Prayer status"]).map((item) => (
                <div key={item} className="flex items-center gap-2 rounded-xl bg-white/75 px-3 py-3"><Check size={15} className="text-[#b08c20]" />{item}</div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#173f32] px-4 py-16 text-[#f7f5ef] sm:px-6 lg:px-8 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#d4b63f]">03 / Product surface</p>
          <h2 className="mt-4 max-w-xl text-4xl font-semibold tracking-[-0.03em] sm:text-5xl">Main Features</h2>
          <div className="mt-12 grid gap-px overflow-hidden rounded-[28px] border border-white/15 bg-white/15 sm:grid-cols-2 lg:grid-cols-3">
            {featureDetails.map((feature) => (
              <article key={feature.number} className="bg-[#1b4939] p-6 transition hover:bg-[#225b45] sm:p-8">
                <span className="text-sm font-semibold tracking-[0.18em] text-[#d4b63f]">{feature.number}</span>
                <h3 className="mt-12 text-xl font-semibold tracking-[0.04em]">{feature.title}</h3>
                <p className="mt-4 text-sm leading-7 text-[#c8d7cb]">{feature.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {caseStudy.quizFlow && caseStudy.quizDescription && (
        <section className="case-study-quiz-section border-y border-[#dce5d9] bg-white/60 px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
          <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.7fr_1.3fr] lg:gap-20">
            <div><p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#b08c20]">04 / Distinctive feature</p><h2 className="mt-4 text-4xl font-semibold tracking-[-0.03em] text-[#173f32] sm:text-5xl">Interactive Quiz System</h2><p className="mt-6 text-lg leading-8 text-[#50645b]">{caseStudy.quizDescription}</p></div>
            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">{caseStudy.quizFlow.map((step) => <div key={step.number} className="rounded-2xl border border-[#d5e0d3] bg-white/70 p-5"><span className="text-sm font-semibold text-[#b08c20]">{step.number}</span><p className="mt-8 text-sm font-semibold leading-6 text-[#285441]">{step.title}</p></div>)}</div>
          </div>
          <div className="mx-auto mt-10 max-w-7xl rounded-[28px] border border-[#d5e0d3] bg-white/70 p-4 sm:p-6"><p className="mb-4 text-sm text-[#64776d]">{caseStudy.quizScreenshotDescription}</p><ProjectGallery images={project.screenshots.filter((image) => image.includes("quiz"))} projectTitle={`${project.title} quiz`} projectSlug={project.slug} /></div>
        </section>
      )}

      <section id="screenshots" className="px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#b08c20]">04 / In the app</p>
              <h2 className="mt-4 text-4xl font-semibold tracking-[-0.03em] text-[#173f32] sm:text-5xl">App Screenshots</h2>
            </div>
            <p className="max-w-sm text-sm leading-7 text-[#64776d]">{caseStudy.screenshotDescription || "Explore the real app screens. Select any image to open the full-screen gallery."}</p>
          </div>
          <div className="mt-10 rounded-[32px] border border-[#d5e0d3] bg-white/60 p-4 sm:p-7">
            <ProjectGallery images={project.screenshots} projectTitle={project.title} projectSlug={project.slug} />
          </div>
        </div>
      </section>

      {project.slug === "job-tracker" && (
        <section className="case-study-chart-section border-y border-[#dce5d9] bg-[#f0eee4] px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
          <div className="mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#b08c20]">04 / Data visualization</p>
              <h2 className="mt-4 text-4xl font-semibold tracking-[-0.03em] text-[#173f32] sm:text-5xl">Visualizing the Job Search</h2>
              <p className="mt-6 text-lg leading-8 text-[#50645b]">Job Tracker transforms stored application data into visual insights, allowing users to quickly understand how their applications are distributed across different statuses.</p>
            </div>
            <div className="relative mx-auto w-full max-w-[430px] overflow-hidden rounded-[32px] border border-[#d5e0d3] bg-white p-3 shadow-[0_24px_60px_rgba(54,45,120,0.12)]">
              <div className="relative aspect-[9/16] overflow-hidden rounded-[24px] bg-[#f7f8fc]"><Image src="/jobtracker/chart.jpeg" alt="Job Tracker chart screen" fill className="object-cover" sizes="(max-width: 1024px) 90vw, 430px" /></div>
            </div>
          </div>
        </section>
      )}

      <section className="border-y border-[#dce5d9] bg-[#eaf2e7] px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#b08c20]">05 / The flow</p>
          <h2 className="mt-4 text-4xl font-semibold tracking-[-0.03em] text-[#173f32] sm:text-5xl">How {project.title} Works</h2>
          <div className="mt-10 grid gap-3 md:grid-cols-3 lg:grid-cols-6">
            {caseStudy.flow.map((step, index) => (
              <div key={step.number} className="relative rounded-2xl border border-[#c8d9c9] bg-white/75 p-5">
                <span className="text-sm font-semibold text-[#b08c20]">{step.number}</span>
                <p className="mt-8 text-sm font-semibold leading-6 text-[#285441]">{step.title}</p>
                {index < caseStudy.flow.length - 1 && <span className="absolute -right-3 top-1/2 z-10 hidden text-[#b08c20] lg:block"><ArrowUpRight size={18} /></span>}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#b08c20]">06 / Build notes</p>
            <h2 className="mt-4 text-4xl font-semibold tracking-[-0.03em] text-[#173f32] sm:text-5xl">Development Highlights</h2>
          </div>
          <ul className="grid gap-3 sm:grid-cols-2">
            {project.developmentHighlights.map((highlight) => (
              <li key={highlight} className="flex gap-3 rounded-2xl border border-[#d5e0d3] bg-white/70 p-5 text-sm leading-7 text-[#50645b]"><Check size={18} className="mt-1 shrink-0 text-[#2b7457]" />{highlight}</li>
            ))}
          </ul>
        </div>
      </section>

      {caseStudy.roleDescription && caseStudy.roleItems && (
        <section className="case-study-role-section border-y border-[#dce5d9] bg-white/60 px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
          <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.8fr_1.2fr]">
            <div><p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#b08c20]">07 / Contribution</p><h2 className="mt-4 text-4xl font-semibold tracking-[-0.03em] text-[#173f32] sm:text-5xl">My Role</h2><p className="mt-6 text-lg leading-8 text-[#50645b]">{caseStudy.roleDescription}</p></div>
            <div className="grid gap-3 sm:grid-cols-2">{caseStudy.roleItems.map((item) => <div key={item} className="flex items-center gap-3 rounded-2xl border border-[#d5e0d3] bg-white/70 p-5 text-sm font-medium text-[#50645b]"><Check size={18} className="shrink-0 text-[#2b7457]" />{item}</div>)}</div>
          </div>
        </section>
      )}

      {caseStudy.storageDescription && (
        <section className="case-study-storage-section border-y border-[#dce5d9] bg-[#eaf2e7] px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
          <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.7fr_1.3fr] lg:items-center"><div><p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#b08c20]">08 / Persistence</p><h2 className="mt-4 text-4xl font-semibold tracking-[-0.03em] text-[#173f32] sm:text-5xl">{caseStudy.storageLabel}</h2></div><p className="text-xl leading-9 text-[#50645b] sm:text-2xl sm:leading-10">{caseStudy.storageDescription}</p></div>
        </section>
      )}

      {(caseStudy.technologyGroups?.length || project.technologies.length > 0) && (
        <section className={`case-study-tech-section px-4 pb-16 sm:px-6 lg:px-8 lg:pb-24 ${project.slug === "mobilelink" || project.slug === "mobily" ? "case-study-tech-section--mobilelink" : ""}`}>
          <div className="mx-auto max-w-7xl rounded-[28px] border border-[#cad8ca] bg-white/65 p-7 sm:p-10">
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#b08c20]">07 / Tools</p>
            <h2 className="mt-4 text-3xl font-semibold text-[#173f32]">Tech Stack</h2>
            {caseStudy.technologyGroups ? (
              <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
                {caseStudy.technologyGroups.map((group) => (
                  <div key={group.label}>
                    <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#819187]">{group.label}</p>
                    <div className="mt-3 flex flex-wrap gap-2">{group.items.map((technology) => <span key={technology} className="rounded-full border border-[#b8d0bb] bg-[#eaf2e7] px-3 py-1.5 text-sm font-medium text-[#285441]">{technology}</span>)}</div>
                  </div>
                ))}
              </div>
            ) : <div className="mt-6 flex flex-wrap gap-2">{project.technologies.map((technology) => <span key={technology} className="rounded-full border border-[#b8d0bb] bg-[#eaf2e7] px-4 py-2 text-sm font-medium text-[#285441]">{technology}</span>)}</div>}
          </div>
        </section>
      )}

      {caseStudy.architecture && (
        <section className="bg-[#173f32] px-4 py-16 text-[#f7f5ef] sm:px-6 lg:px-8 lg:py-24">
          <div className="mx-auto max-w-7xl">
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#d4b63f]">08 / System design</p>
            <h2 className="mt-4 text-4xl font-semibold tracking-[-0.03em] sm:text-5xl">System Architecture</h2>
            <div className="mt-10 grid gap-4 lg:grid-cols-2">
              {caseStudy.architecture.map((architectureFlow, flowIndex) => (
                <div key={flowIndex} className="rounded-[24px] border border-white/15 bg-[#1b4939] p-5 sm:p-6">
                  <div className="flex flex-wrap items-center gap-2">
                    {architectureFlow.map((step, stepIndex) => <span key={`${step.title}-${stepIndex}`} className="flex items-center gap-2"><span className="rounded-xl border border-white/15 bg-white/10 px-3 py-2 text-sm font-medium text-[#e7efe6]">{step.title}</span>{stepIndex < architectureFlow.length - 1 && <ArrowUpRight size={16} className="text-[#d4b63f]" />}</span>)}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {caseStudy.challenges && (
        <section className="px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
          <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.8fr_1.2fr]">
            <div><p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#b08c20]">09 / Learning through complexity</p><h2 className="mt-4 text-4xl font-semibold tracking-[-0.03em] text-[#173f32] sm:text-5xl">Development Challenges</h2></div>
            <ul className="grid gap-3 sm:grid-cols-2">{caseStudy.challenges.map((challenge) => <li key={challenge} className="rounded-2xl border border-[#d5e0d3] bg-white/70 p-5 text-sm leading-7 text-[#50645b]">{challenge}</li>)}</ul>
          </div>
        </section>
      )}

      {caseStudy.outcome && (
        <section className="border-y border-[#dce5d9] bg-[#eaf2e7] px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
          <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.7fr_1.3fr] lg:items-center"><div><p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#b08c20]">10 / Outcome</p><h2 className="mt-4 text-4xl font-semibold tracking-[-0.03em] text-[#173f32] sm:text-5xl">What We Built</h2></div><p className="text-xl leading-9 text-[#50645b] sm:text-2xl sm:leading-10">{caseStudy.outcome}</p></div>
        </section>
      )}

      {caseStudy.team && (
        <section className="px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
          <div className="mx-auto max-w-7xl"><p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#b08c20]">11 / Team</p><h2 className="mt-4 text-4xl font-semibold tracking-[-0.03em] text-[#173f32] sm:text-5xl">Project Team</h2><div className="mt-10 grid gap-4 sm:grid-cols-3">{caseStudy.team.map((member) => <div key={member.name} className="rounded-[24px] border border-[#d5e0d3] bg-white/70 p-6"><p className="text-xl font-semibold text-[#173f32]">{member.name}</p><p className="mt-2 text-sm text-[#64776d]">{member.responsibility}</p></div>)}</div></div>
        </section>
      )}

      {project.github && (
        <section className="px-4 pb-16 sm:px-6 lg:px-8 lg:pb-24">
          <div className="mx-auto flex max-w-7xl flex-col justify-between gap-6 rounded-[28px] bg-[#d4b63f] p-7 sm:flex-row sm:items-center sm:p-10">
            <div><p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#5b4b11]">Project Links</p><h2 className="mt-3 text-3xl font-semibold text-[#173f32]">See the project repository</h2></div>
            <a href={project.github} onClick={() => track("project_click", { project: project.slug, destination: "github" })} target="_blank" rel="noreferrer" className="inline-flex items-center justify-center gap-2 rounded-full bg-[#173f32] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#285441]"><GitBranch size={17} /> View on GitHub</a>
          </div>
        </section>
      )}

      {caseStudy.confidentiality && (
        <section className="case-study-confidentiality-section px-4 pb-16 sm:px-6 lg:px-8 lg:pb-24">
          <div className="mx-auto max-w-7xl rounded-[28px] border border-[#d5e0d3] bg-white/70 p-6 text-sm leading-7 text-[#64776d] sm:p-8"><p className="font-semibold text-[#173f32]">Professional project confidentiality</p><p className="mt-2">{caseStudy.confidentiality}</p></div>
        </section>
      )}

      {caseStudy.sourceLabel && (
        <section className="case-study-source-section px-4 pb-16 sm:px-6 lg:px-8 lg:pb-24">
          <div className="mx-auto flex max-w-7xl items-center gap-4 rounded-[28px] border border-[#d5e0d3] bg-white/70 p-6 sm:p-8"><span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-[#eaf2e7] text-[#285441]">&#128274;</span><div><p className="font-semibold text-[#173f32]">{caseStudy.sourceLabel}</p><p className="mt-1 text-sm text-[#64776d]">{caseStudy.sourceDescription}</p></div></div>
        </section>
      )}

      <nav className="case-study-project-nav px-4 pb-16 sm:px-6 lg:px-8 lg:pb-24" aria-label="Project navigation">
        <div className="mx-auto grid max-w-7xl gap-3 sm:grid-cols-2">
          <Link href={`/projects/${previousProject.slug}`} className="rounded-2xl border border-[#d5e0d3] bg-white/70 p-5 transition hover:bg-white"><span className="text-xs font-semibold uppercase tracking-[0.18em] text-[#64776d]">Previous Project</span><span className="mt-2 block text-lg font-semibold text-[#173f32]">{previousProject.title}</span></Link>
          <Link href={`/projects/${nextProject.slug}`} className="rounded-2xl border border-[#d5e0d3] bg-white/70 p-5 text-left transition hover:bg-white sm:text-right"><span className="text-xs font-semibold uppercase tracking-[0.18em] text-[#64776d]">Next Project</span><span className="mt-2 block text-lg font-semibold text-[#173f32]">{nextProject.title}</span></Link>
        </div>
      </nav>

      {caseStudy.showFinalCta && (
        <section className="case-study-final-cta border-t border-[#dce5d9] bg-[#f0eee4] px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
          <div className="mx-auto flex max-w-7xl flex-col justify-between gap-8 sm:flex-row sm:items-end"><div><p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#b08c20]">Keep exploring</p><h2 className="mt-4 text-4xl font-semibold tracking-[-0.03em] text-[#173f32] sm:text-5xl">Interested in my Android development work?</h2><p className="mt-4 max-w-xl text-base leading-7 text-[#64776d]">Explore more of my professional and personal projects or get in touch to discuss an opportunity.</p></div><div className="flex flex-wrap gap-3"><Link href="/#projects" className="inline-flex items-center gap-2 rounded-full bg-[#1d654b] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#174f3b]">View Projects <ArrowUpRight size={16} /></Link><a href={siteConfig.resumeUrl} onClick={() => track("resume_download")} download className="inline-flex items-center rounded-full border border-[#9eb7a3] px-5 py-3 text-sm font-semibold text-[#285441] transition hover:bg-white">Download Resume</a><Link href="/#contact" className="inline-flex items-center rounded-full border border-[#9eb7a3] px-5 py-3 text-sm font-semibold text-[#285441] transition hover:bg-white">Contact Me</Link></div></div>
        </section>
      )}

    </main>
  );
}
