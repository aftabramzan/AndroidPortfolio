import Link from "next/link";
import { ArrowRight, Download, GitBranch, Link as LinkIcon, Mail, Sparkles } from "lucide-react";
import { siteConfig } from "@/config/site";

export function Hero() {
  const techBadges = ["Kotlin", "Flutter", "Firebase", "MVVM", "REST APIs", "Jetpack"];

  return (
    <section id="home" className="relative overflow-hidden px-4 pb-16 pt-10 sm:px-6 lg:px-8">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(34,211,238,0.18),transparent_25%),radial-gradient(circle_at_bottom_right,_rgba(168,85,247,0.18),transparent_30%)]" />

      <div className="relative mx-auto grid max-w-7xl items-center gap-12 xl:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)]">
        <div className="min-w-0">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-cyan-400/30 bg-cyan-500/10 px-3 py-1.5 text-[11px] font-semibold tracking-[0.22em] text-cyan-200 uppercase">
            <Sparkles size={12} />
            Available for opportunities
          </div>

          <h1 className="max-w-2xl text-4xl font-semibold tracking-tight text-white sm:text-5xl lg:text-6xl">
            Building Mobile Experiences
            <span className="block bg-gradient-to-r from-cyan-300 via-sky-400 to-violet-400 bg-clip-text text-transparent">
              That Actually Matter.
            </span>
          </h1>

          <p className="mt-6 max-w-xl text-base leading-8 text-slate-300 sm:text-lg">
            Android &amp; Cross-Platform App Developer focused on building reliable, user-friendly applications with Kotlin, Flutter, REST APIs, Firebase, and modern development practices.
          </p>

          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <Link
              href="#projects"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-cyan-500 px-5 py-3 text-sm font-semibold text-slate-950 shadow-[0_0_30px_rgba(6,182,212,0.35)] transition hover:-translate-y-0.5 hover:bg-cyan-400"
            >
              View Projects
              <ArrowRight size={16} />
            </Link>

            <a
              href={siteConfig.resumeUrl}
              download
              className="inline-flex items-center justify-center gap-2 rounded-full border border-white/15 bg-white/5 px-5 py-3 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-white/10"
            >
              <Download size={16} />
              Download Resume
            </a>
          </div>

          <div className="mt-8 flex items-center gap-4">
            {[
              { href: siteConfig.socials.github, label: "GitHub", icon: GitBranch },
              { href: siteConfig.socials.linkedin, label: "LinkedIn", icon: LinkIcon },
              { href: siteConfig.socials.email, label: "Email", icon: Mail },
            ].map(({ href, label, icon: Icon }) => (
              <a
                key={label}
                href={href}
                aria-label={label}
                target={href.startsWith("http") ? "_blank" : undefined}
                rel={href.startsWith("http") ? "noreferrer" : undefined}
                className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 text-slate-200 transition hover:-translate-y-0.5 hover:border-cyan-400/40 hover:text-cyan-200"
              >
                <Icon size={18} />
              </a>
            ))}
          </div>
        </div>

        <div className="relative mx-auto min-w-0 w-full max-w-[520px]">
          <div className="absolute -left-10 top-12 h-24 w-24 rounded-full bg-cyan-500/20 blur-3xl" />
          <div className="absolute -right-6 bottom-12 h-28 w-28 rounded-full bg-violet-500/20 blur-3xl" />

          <div className="relative overflow-hidden rounded-[32px] border border-white/10 bg-[#0b1220]/90 p-4 shadow-[0_20px_80px_rgba(15,23,42,0.8)]">
            <div className="rounded-[28px] border border-white/10 bg-slate-950 p-3">
              <div className="mb-4 flex items-center gap-2">
                <div className="h-2.5 w-2.5 rounded-full bg-red-400" />
                <div className="h-2.5 w-2.5 rounded-full bg-yellow-400" />
                <div className="h-2.5 w-2.5 rounded-full bg-green-400" />
              </div>

              <div className="grid gap-4 lg:grid-cols-[1fr_0.8fr]">
                <div className="rounded-2xl border border-cyan-500/20 bg-slate-900 p-4">
                  <div className="mb-3 flex items-center justify-between">
                    <span className="text-xs uppercase tracking-[0.2em] text-slate-400">App</span>
                    <span className="rounded-full border border-emerald-500/30 bg-emerald-500/10 px-2 py-0.5 text-[10px] font-medium text-emerald-300">
                      Live
                    </span>
                  </div>

                  <div className="rounded-2xl border border-white/5 bg-gradient-to-br from-slate-800 to-slate-900 p-4">
                    <div className="mb-3 flex items-center justify-between">
                      <div>
                        <p className="text-[10px] uppercase tracking-[0.2em] text-slate-400">Dashboard</p>
                        <h3 className="mt-1 text-xl font-semibold text-white">Aftab Apps</h3>
                      </div>
                      <div className="rounded-xl bg-cyan-500/10 px-2 py-1 text-[10px] font-medium text-cyan-300">
                        Kotlin
                      </div>
                    </div>

                    <div className="space-y-3">
                      <div className="flex items-center justify-between rounded-xl bg-white/5 px-3 py-2">
                        <span className="text-xs text-slate-300">API Sync</span>
                        <span className="text-xs font-medium text-cyan-300">92%</span>
                      </div>
                      <div className="h-2.5 rounded-full bg-slate-800">
                        <div className="h-full w-[92%] rounded-full bg-gradient-to-r from-cyan-400 to-violet-500" />
                      </div>
                      <div className="grid grid-cols-2 gap-2">
                        <div className="rounded-xl bg-violet-500/10 p-2.5">
                          <p className="text-[10px] uppercase tracking-[0.18em] text-violet-200">Users</p>
                          <p className="mt-2 text-lg font-semibold text-white">1.2K</p>
                        </div>
                        <div className="rounded-xl bg-cyan-500/10 p-2.5">
                          <p className="text-[10px] uppercase tracking-[0.18em] text-cyan-200">UX</p>
                          <p className="mt-2 text-lg font-semibold text-white">Smooth</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="rounded-2xl border border-white/10 bg-slate-900 p-4">
                    <p className="text-[10px] uppercase tracking-[0.2em] text-slate-400">Connection</p>
                    <div className="mt-3 flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <div className="h-2.5 w-2.5 rounded-full bg-cyan-400" />
                        <span className="text-xs text-slate-300">REST API</span>
                      </div>
                      <span className="text-[10px] text-emerald-300">Secure</span>
                    </div>
                    <div className="mt-4 rounded-xl border border-cyan-500/20 bg-slate-950 p-3 text-[11px] text-slate-300">
                      GET /api/profile<br />
                      auth: token<br />
                      cache: enabled
                    </div>
                  </div>

                  <div className="rounded-2xl border border-white/10 bg-slate-900 p-4">
                    <p className="text-[10px] uppercase tracking-[0.2em] text-slate-400">Code</p>
                    <div className="mt-3 space-y-2 text-[10px] text-slate-300">
                      <div className="rounded-lg bg-slate-950 p-2 text-cyan-300">viewModelScope.launch</div>
                      <div className="rounded-lg bg-slate-950 p-2 text-violet-300">FirebaseMessaging</div>
                      <div className="rounded-lg bg-slate-950 p-2 text-sky-300">Retrofit + MVVM</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-4 flex flex-wrap gap-2">
              {techBadges.map((badge) => (
                <span
                  key={badge}
                  className="rounded-full border border-white/10 bg-white/5 px-2.5 py-1 text-[10px] font-medium text-slate-300"
                >
                  {badge}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
