// Small card for social proof on the homepage.
import { motion } from 'framer-motion'

export function TestimonialCard({ quote, author, role, index = 0 }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.45, delay: index * 0.07 }}
      className="rounded-[2rem] border border-[var(--color-border)] bg-[var(--color-surface)] p-6 shadow-[0_24px_60px_rgba(17,24,39,0.04)] backdrop-blur"
    >
      <p className="text-lg leading-8 text-[var(--color-foreground)]">“{quote}”</p>
      <div className="mt-6">
        <p className="font-display text-lg font-semibold text-[var(--color-foreground)]">
          {author}
        </p>
        <p className="text-sm text-[var(--color-muted)]">{role}</p>
      </div>
    </motion.article>
  )
}
