import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Download, GitBranch, Link as LinkIcon, Mail, Sparkles } from "lucide-react";
import { siteConfig } from "@/config/site";

export function Hero() {
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

          <div className="relative mx-auto w-full max-w-[460px] overflow-hidden rounded-[32px] border border-white/10 bg-[#0b1220]/90 p-3 shadow-[0_20px_80px_rgba(15,23,42,0.8)] sm:p-4">
            <div className="relative aspect-[4/5] overflow-hidden rounded-[25px] border border-white/10 bg-slate-900">
              <Image
                src="/profile/myprofile.jpeg"
                alt="Aftab Ali"
                fill
                priority
                className="object-cover"
                sizes="(max-width: 640px) 100vw, 460px"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
