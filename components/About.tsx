import { MapPin } from "lucide-react";

export function About() {
  return (
    <section id="about" className="px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-cyan-300">About Me</p>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white sm:text-4xl">A developer focused on practical product outcomes.</h2>
        </div>

        <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="rounded-3xl border border-white/10 bg-white/5 p-8 shadow-[0_18px_50px_rgba(14,116,144,0.12)]">
            <p className="text-base leading-8 text-slate-300">
              I am a BS Computer Science graduate with hands-on Android development experience, building mobile applications using Kotlin and Java with a focus on clean architecture, REST API integrations, and reliable user experiences.
            </p>
            <p className="mt-5 text-base leading-8 text-slate-300">
              My work includes integrating Firebase services, managing application data flows, and working with MVVM-based patterns and Git/GitHub-based development workflows. I also have a growing focus on cross-platform development using Flutter while continuing to strengthen my understanding of backend and database interactions.
            </p>
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              <div className="rounded-2xl border border-white/10 bg-slate-900/70 p-4">
                <p className="text-xs uppercase tracking-[0.2em] text-slate-400">Core</p>
                <p className="mt-2 text-base font-medium text-white">Kotlin, Java, Android SDK</p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-slate-900/70 p-4">
                <p className="text-xs uppercase tracking-[0.2em] text-slate-400">Stack</p>
                <p className="mt-2 text-base font-medium text-white">REST APIs, Firebase, MVVM</p>
              </div>
            </div>
          </div>

          <aside className="rounded-3xl border border-cyan-400/20 bg-gradient-to-br from-slate-900 via-slate-900 to-cyan-950/30 p-7 shadow-[0_20px_60px_rgba(8,145,178,0.15)]">
            <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-cyan-400 to-violet-500 text-xl font-bold text-slate-950">
              AA
            </div>
            <h3 className="text-2xl font-semibold text-white">Aftab Ali</h3>
            <p className="mt-2 text-cyan-300">Android &amp; Cross-Platform App Developer</p>
            <div className="mt-6 flex items-center gap-3 text-slate-300">
              <MapPin size={18} className="text-cyan-300" />
              <span>Karachi, Pakistan</span>
            </div>
            <div className="mt-8 rounded-2xl border border-white/10 bg-white/5 p-4 text-sm leading-7 text-slate-300">
              Building applications that are useful, reliable, and designed around real user workflows.
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}
