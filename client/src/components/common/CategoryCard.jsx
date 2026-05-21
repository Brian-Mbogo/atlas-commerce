// Reusable category card for the landing page and future catalog experiences.
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

export function CategoryCard({ category, index = 0 }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.45, delay: index * 0.06 }}
      className="overflow-hidden rounded-[2rem] border border-[var(--color-border)] bg-[var(--color-surface-strong)] shadow-[0_20px_60px_rgba(17,24,39,0.06)]"
    >
      <div
        className="h-56 bg-cover bg-center"
        style={{ backgroundImage: `linear-gradient(180deg, transparent 0%, rgba(17,24,39,0.12) 100%), url(${category.image})` }}
      />
      <div className="space-y-3 p-6">
        <div className="flex items-center justify-between gap-3">
          <h3 className="font-display text-2xl font-semibold text-[var(--color-foreground)]">
            {category.name}
          </h3>
          <span className="rounded-full bg-[rgba(217,119,6,0.12)] px-3 py-1 text-xs font-semibold uppercase tracking-[0.24em] text-[var(--color-accent)]">
            {category.itemCount} picks
          </span>
        </div>
        <p className="text-sm leading-7 text-[var(--color-muted)]">
          {category.description}
        </p>
        <Link
          to={`/shop?category=${encodeURIComponent(category.name)}`}
          className="inline-flex items-center gap-2 text-sm font-semibold text-[var(--color-foreground)] transition hover:text-[var(--color-accent)]"
        >
          Browse collection
          <span aria-hidden="true">→</span>
        </Link>
      </div>
    </motion.article>
  )
}
