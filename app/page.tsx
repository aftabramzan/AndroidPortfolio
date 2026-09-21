import { About } from "@/components/About";
import { Contact } from "@/components/Contact";
import { Experience } from "@/components/Experience";
import { Hero } from "@/components/Hero";
import { ProjectGrid } from "@/components/ProjectGrid";
import { Services } from "@/components/Services";
import { Skills } from "@/components/Skills";
import { SectionViewAnalytics } from "@/components/SectionViewAnalytics";
import { projects } from "@/data/projects";

export default function HomePage() {
  return (
    <main>
      <Hero />
      <section className="px-4 pb-8 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-4 rounded-3xl border border-white/10 bg-white/5 p-6 sm:grid-cols-3 md:grid-cols-3">
          <div className="rounded-2xl border border-white/10 bg-slate-950/60 p-5 text-center">
            <div className="text-3xl font-semibold text-white">1.5+</div>
            <div className="mt-2 text-sm uppercase tracking-[0.18em] text-slate-400">Years Experience</div>
          </div>
          <div className="rounded-2xl border border-white/10 bg-slate-950/60 p-5 text-center">
            <div className="text-3xl font-semibold text-white">BS</div>
            <div className="mt-2 text-sm uppercase tracking-[0.18em] text-slate-400">Computer Science</div>
          </div>
          <div className="rounded-2xl border border-white/10 bg-slate-950/60 p-5 text-center">
            <div className="text-3xl font-semibold text-white">Android</div>
            <div className="mt-2 text-sm uppercase tracking-[0.18em] text-slate-400">Development</div>
          </div>
        </div>
      </section>
      <About />
      <Skills />
      <section id="projects" className="px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mb-10 max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-cyan-300">Selected Projects</p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white sm:text-4xl">A selection of mobile applications and software projects I&apos;ve worked on.</h2>
          </div>
          <ProjectGrid projects={projects} />
        </div>
      </section>
      <Services />
      <Experience />
      <Contact />
      <SectionViewAnalytics />
    </main>
  );
}
