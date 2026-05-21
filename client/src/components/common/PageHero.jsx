// Shared hero block used across internal pages to keep headings visually consistent.
export function PageHero({ eyebrow, title, description, action }) {
  return (
    <section className="mx-auto w-full max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
      <div className="rounded-[2rem] border border-[var(--color-border)] bg-grain px-6 py-10 shadow-[0_25px_60px_rgba(17,24,39,0.06)] sm:px-8 lg:px-12">
        <span className="inline-flex rounded-full border border-[rgba(217,119,6,0.18)] bg-[rgba(217,119,6,0.08)] px-4 py-2 text-xs font-semibold uppercase tracking-[0.28em] text-[var(--color-accent)]">
          {eyebrow}
        </span>
        <div className="mt-5 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-2xl space-y-4">
            <h1 className="font-display text-4xl font-semibold tracking-[-0.04em] text-[var(--color-foreground)] sm:text-5xl">
              {title}
            </h1>
            <p className="max-w-xl text-base leading-8 text-[var(--color-muted)] sm:text-lg">
              {description}
            </p>
          </div>
          {action ? <div>{action}</div> : null}
        </div>
      </div>
    </section>
  )
}
