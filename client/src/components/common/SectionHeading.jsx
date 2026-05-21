// Shared heading pattern for section intros across the storefront.
export function SectionHeading({ eyebrow, title, description, align = 'left' }) {
  const alignment =
    align === 'center'
      ? 'mx-auto max-w-2xl text-center'
      : 'max-w-2xl text-left'

  return (
    <div className={`space-y-4 ${alignment}`}>
      <span className="inline-flex rounded-full border border-[rgba(217,119,6,0.18)] bg-[rgba(217,119,6,0.08)] px-4 py-2 text-xs font-semibold uppercase tracking-[0.28em] text-[var(--color-accent)]">
        {eyebrow}
      </span>
      <h2 className="font-display text-3xl font-semibold tracking-[-0.04em] text-[var(--color-foreground)] sm:text-4xl">
        {title}
      </h2>
      <p className="text-base leading-8 text-[var(--color-muted)] sm:text-lg">
        {description}
      </p>
    </div>
  )
}
