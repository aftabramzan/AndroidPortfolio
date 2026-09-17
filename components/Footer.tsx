import Link from "next/link";
import { siteConfig } from "@/config/site";

export function Footer() {
  return (
    <footer className="border-t border-white/10 px-4 py-10 sm:px-6 lg:px-8">
      <div className="mx-auto flex max-w-7xl flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="text-xl font-semibold text-white">{siteConfig.name}</p>
          <p className="mt-2 text-sm text-slate-400">{siteConfig.title}</p>
        </div>

        <div className="flex flex-wrap items-center gap-4 text-sm text-slate-300">
          <Link href={siteConfig.socials.github} target="_blank" rel="noreferrer" className="transition hover:text-white">GitHub</Link>
          <Link href={siteConfig.socials.linkedin} target="_blank" rel="noreferrer" className="transition hover:text-white">LinkedIn</Link>
          <Link href={siteConfig.socials.email} className="transition hover:text-white">Email</Link>
          <Link href={siteConfig.socials.whatsapp} target="_blank" rel="noreferrer" className="transition hover:text-white">WhatsApp</Link>
        </div>
      </div>

      <div className="mx-auto mt-8 max-w-7xl border-t border-white/10 pt-6 text-center text-sm text-slate-400">
        © 2026 Aftab Ali. All rights reserved.
      </div>
    </footer>
  );
}
