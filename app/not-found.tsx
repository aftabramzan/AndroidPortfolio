import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex min-h-[60vh] items-center justify-center px-4 py-20">
      <div className="max-w-xl rounded-3xl border border-white/10 bg-white/5 p-8 text-center">
        <p className="text-sm font-semibold uppercase tracking-[0.22em] text-cyan-300">404</p>
        <h1 className="mt-4 text-3xl font-semibold text-white">Project not found</h1>
        <p className="mt-4 text-base text-slate-300">
          The requested project could not be found, but there are other portfolio pieces available.
        </p>
        <Link href="/#projects" className="mt-6 inline-flex rounded-full bg-cyan-500 px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-cyan-400">
          View projects
        </Link>
      </div>
    </main>
  );
}
