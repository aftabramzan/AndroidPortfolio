import { BriefcaseBusiness } from "lucide-react";
import { education, experiences } from "@/data/experience";

export function Experience() {
  return (
    <section id="experience" className="px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-cyan-300">Experience</p>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white sm:text-4xl">Professional experience and academic background.</h2>
        </div>

        <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
            <div className="flex items-center gap-3">
              <div className="rounded-xl border border-cyan-400/20 bg-cyan-500/10 p-2 text-cyan-200">
                <BriefcaseBusiness size={18} />
              </div>
              <div>
                <p className="text-xs uppercase tracking-[0.2em] text-slate-400">Current role</p>
                <h3 className="mt-1 text-xl font-semibold text-white">Android Developer</h3>
              </div>
            </div>

            <div className="mt-6 space-y-6">
              {experiences.map((experience) => (
                <div key={`${experience.title}-${experience.company}`} className="rounded-2xl border border-white/10 bg-slate-900/60 p-5">
                  <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
                    <div>
                      <h4 className="text-lg font-semibold text-white">{experience.title}</h4>
                      <p className="mt-1 text-cyan-300">{experience.company}</p>
                    </div>
                    <span className="text-sm text-slate-400">{experience.startDate} - {experience.endDate}</span>
                  </div>

                  {experience.location && <p className="mt-3 text-sm text-slate-400">{experience.location}</p>}

                  <ul className="mt-4 space-y-2 text-sm leading-7 text-slate-300">
                    {experience.responsibilities.map((item) => (
                      <li key={item} className="flex gap-2">
                        <span className="mt-2 h-1.5 w-1.5 rounded-full bg-cyan-300" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-slate-900 to-slate-950 p-6">
            <p className="text-xs uppercase tracking-[0.2em] text-slate-400">Education</p>
            {education.map((item) => (
              <div key={item.degree} className="mt-6 rounded-2xl border border-cyan-400/20 bg-cyan-500/5 p-5">
                <h3 className="text-xl font-semibold text-white">{item.degree}</h3>
                <p className="mt-3 text-cyan-300">{item.school}</p>
                <div className="mt-5 flex items-center justify-between text-sm text-slate-300">
                  <span>Duration</span>
                  <span>{item.startDate} - {item.endDate}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
