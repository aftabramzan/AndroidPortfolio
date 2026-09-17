"use client";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <html lang="en">
      <body className="flex min-h-screen items-center justify-center bg-slate-950 px-4 text-slate-100">
        <div className="max-w-lg rounded-3xl border border-red-500/30 bg-slate-900 p-8 text-center shadow-[0_20px_60px_rgba(15,23,42,0.7)]">
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-red-300">Error</p>
          <h2 className="mt-4 text-3xl font-semibold text-white">Something went wrong</h2>
          <p className="mt-4 text-base text-slate-300">
            The portfolio hit an unexpected issue while loading. Please try again.
          </p>
          <button
            type="button"
            onClick={() => reset()}
            className="mt-6 inline-flex rounded-full bg-cyan-500 px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-cyan-400"
          >
            Try again
          </button>
          {error?.digest ? (
            <p className="mt-4 text-xs text-slate-400">Error ID: {error.digest}</p>
          ) : null}
        </div>
      </body>
    </html>
  );
}
