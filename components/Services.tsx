import { AppWindow, Braces, Database, Palette, Smartphone, Zap } from "lucide-react";

const services = [
  {
    title: "Android Applications",
    description: "User-focused Android apps designed for performance, clarity, and reliable everyday use.",
    icon: Smartphone,
  },
  {
    title: "Cross-Platform Apps",
    description: "Flutter-based experiences that help reach mobile users with efficient, scalable UI delivery.",
    icon: AppWindow,
  },
  {
    title: "REST API Integration",
    description: "Seamless connectivity between apps and backend systems with clean request and response handling.",
    icon: Braces,
  },
  {
    title: "Firebase Applications",
    description: "Real-time features, authentication, cloud storage, and app functionality powered by Firebase tools.",
    icon: Zap,
  },
  {
    title: "Business Applications",
    description: "Practical mobile products for workflow operations, productivity, and internal business needs.",
    icon: Palette,
  },
  {
    title: "API-connected Mobile Apps",
    description: "Apps designed around real data flows, secure communication, and reliable user interactions.",
    icon: Database,
  },
];

export function Services() {
  return (
    <section className="px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-cyan-300">What I Can Build</p>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white sm:text-4xl">Practical mobile and API-connected solutions.</h2>
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {services.map(({ title, description, icon: Icon }) => (
            <div key={title} className="rounded-3xl border border-white/10 bg-white/5 p-6 transition hover:-translate-y-1 hover:border-cyan-400/30 hover:bg-slate-900/70">
              <div className="mb-5 inline-flex rounded-2xl border border-cyan-400/20 bg-cyan-500/10 p-3 text-cyan-200">
                <Icon size={22} />
              </div>
              <h3 className="text-xl font-semibold text-white">{title}</h3>
              <p className="mt-3 text-sm leading-7 text-slate-300">{description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
