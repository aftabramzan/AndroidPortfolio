"use client";

import { Mail, MessageSquareText, Send } from "lucide-react";
import { siteConfig } from "@/config/site";

export function Contact() {
  const mailtoLink = `mailto:${siteConfig.email}?subject=${encodeURIComponent("Project Inquiry")}`;

  return (
    <section id="contact" className="px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="rounded-[32px] border border-white/10 bg-gradient-to-br from-slate-900 via-slate-950 to-cyan-950/30 p-6 sm:p-8 lg:p-10">
          <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-cyan-300">Contact</p>
              <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white sm:text-4xl">Have a project in mind?</h2>
              <p className="mt-4 text-lg text-slate-300">Let&apos;s build something useful, reliable, and scalable.</p>

              <div className="mt-8 flex flex-col gap-3">
                <a href={mailtoLink} className="inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/5 px-4 py-3 text-sm font-medium text-white transition hover:border-cyan-400/30 hover:text-cyan-200">
                  <Mail size={16} />
                  Email Me
                </a>
                <a href={siteConfig.socials.whatsapp} target="_blank" rel="noreferrer" className="inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/5 px-4 py-3 text-sm font-medium text-white transition hover:border-cyan-400/30 hover:text-cyan-200">
                  <MessageSquareText size={16} />
                  WhatsApp
                </a>
                <a href={siteConfig.socials.linkedin} target="_blank" rel="noreferrer" className="inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/5 px-4 py-3 text-sm font-medium text-white transition hover:border-cyan-400/30 hover:text-cyan-200">
                  <svg viewBox="0 0 24 24" aria-hidden="true" className="h-4 w-4 fill-current">
                    <path d="M6.94 8.5A1.56 1.56 0 1 1 6.94 5.4a1.56 1.56 0 0 1 0 3.1ZM5.5 9.8h2.9V18H5.5V9.8Zm5.4 0h2.8v1.1h.04c.4-.75 1.36-1.54 2.8-1.54 3 0 3.56 1.97 3.56 4.53V18h-2.9v-16c0-1.35-.03-3.08-1.88-3.08-1.88 0-2.17 1.47-2.17 2.98V18h-2.9V9.8Z" />
                  </svg>
                  LinkedIn
                </a>
              </div>
            </div>

            <form action={mailtoLink} method="post" encType="text/plain" className="rounded-3xl border border-white/10 bg-slate-900/70 p-5 sm:p-6">
              <div className="grid gap-5">
                <div>
                  <label htmlFor="name" className="mb-2 block text-sm font-medium text-slate-300">Name</label>
                  <input id="name" name="name" type="text" required className="w-full rounded-2xl border border-white/10 bg-slate-950/80 px-4 py-3 text-white outline-none transition focus:border-cyan-400/50 focus:ring-2 focus:ring-cyan-500/20" />
                </div>
                <div>
                  <label htmlFor="email" className="mb-2 block text-sm font-medium text-slate-300">Email</label>
                  <input id="email" name="email" type="email" required className="w-full rounded-2xl border border-white/10 bg-slate-950/80 px-4 py-3 text-white outline-none transition focus:border-cyan-400/50 focus:ring-2 focus:ring-cyan-500/20" />
                </div>
                <div>
                  <label htmlFor="message" className="mb-2 block text-sm font-medium text-slate-300">Message</label>
                  <textarea id="message" name="message" rows={5} required className="w-full rounded-2xl border border-white/10 bg-slate-950/80 px-4 py-3 text-white outline-none transition focus:border-cyan-400/50 focus:ring-2 focus:ring-cyan-500/20" />
                </div>
                <button type="submit" className="inline-flex items-center justify-center gap-2 rounded-full bg-cyan-500 px-5 py-3 text-sm font-semibold text-slate-950 transition hover:-translate-y-0.5 hover:bg-cyan-400">
                  Send Message
                  <Send size={16} />
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
