import { ProjectDetail } from "@/components/ProjectDetail";
import { projects } from "@/data/projects";

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = projects.find((item) => item.slug === slug);

  if (!project) {
    return (
      <main className="flex min-h-[60vh] items-center justify-center px-4 py-20">
        <div className="max-w-xl rounded-3xl border border-white/10 bg-white/5 p-8 text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-cyan-300">404</p>
          <h1 className="mt-4 text-3xl font-semibold text-white">Project not found</h1>
          <p className="mt-4 text-base text-slate-300">This project is not available right now.</p>
        </div>
      </main>
    );
  }

  return <ProjectDetail project={project} />;
}
