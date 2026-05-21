// Fallback page for unknown routes.
import { Link } from 'react-router-dom'

export function NotFoundPage() {
  return (
    <section className="mx-auto flex min-h-[70vh] w-full max-w-3xl flex-col items-center justify-center px-4 py-16 text-center sm:px-6 lg:px-8">
      <span className="rounded-full bg-[rgba(217,119,6,0.08)] px-4 py-2 text-xs font-semibold uppercase tracking-[0.28em] text-[var(--color-accent)]">
        404
      </span>
      <h1 className="mt-6 font-display text-5xl font-semibold tracking-[-0.05em] text-[var(--color-foreground)]">
        This page wandered off the shelf.
      </h1>
      <p className="mt-4 max-w-xl text-base leading-8 text-[var(--color-muted)]">
        The route exists in our roadmap, but not in the app yet. Head back to the
        landing page or browse the shop to keep exploring.
      </p>
      <div className="mt-8 flex flex-col gap-4 sm:flex-row">
        <Link
          to="/"
          className="inline-flex items-center justify-center rounded-full bg-[var(--color-foreground)] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[var(--color-accent)]"
        >
          Back home
        </Link>
        <Link
          to="/shop"
          className="inline-flex items-center justify-center rounded-full border border-[var(--color-border)] bg-white px-6 py-3 text-sm font-semibold text-[var(--color-foreground)] transition hover:border-[var(--color-accent)] hover:text-[var(--color-accent)]"
        >
          Browse shop
        </Link>
      </div>
    </section>
  )
}
