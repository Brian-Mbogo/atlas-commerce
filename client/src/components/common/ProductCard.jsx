// Product card handles quick browsing and direct add-to-cart actions.
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { formatCurrency } from '../../services/mockCatalog'
import { useCartStore } from '../../store/useCartStore'

export function ProductCard({ product, index = 0, compact = false }) {
  const addItem = useCartStore((state) => state.addItem)

  return (
    <motion.article
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.18 }}
      transition={{ duration: 0.45, delay: index * 0.05 }}
      className="group overflow-hidden rounded-[2rem] border border-[var(--color-border)] bg-[var(--color-surface-strong)] shadow-[0_24px_60px_rgba(17,24,39,0.06)]"
    >
      <Link to={`/product/${product.slug}`} className="block overflow-hidden">
        <div className={compact ? 'h-64 overflow-hidden' : 'h-80 overflow-hidden'}>
          <img
            src={product.image}
            alt={product.title}
            className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
          />
        </div>
      </Link>
      <div className="space-y-4 p-5">
        <div className="flex flex-wrap items-center gap-2 text-xs font-semibold uppercase tracking-[0.22em] text-[var(--color-muted)]">
          <span>{product.category}</span>
          {product.isNew ? (
            <span className="rounded-full bg-[rgba(217,119,6,0.1)] px-3 py-1 text-[var(--color-accent)]">
              New
            </span>
          ) : null}
        </div>
        <div className="space-y-2">
          <Link
            to={`/product/${product.slug}`}
            className="font-display text-2xl font-semibold text-[var(--color-foreground)] transition hover:text-[var(--color-accent)]"
          >
            {product.title}
          </Link>
          <p className="text-sm leading-7 text-[var(--color-muted)]">
            {product.subtitle}
          </p>
        </div>
        <div className="flex items-center justify-between gap-4">
          <div>
            <p className="font-display text-2xl font-semibold text-[var(--color-foreground)]">
              {formatCurrency(product.price)}
            </p>
            <p className="text-sm text-[var(--color-muted)]">
              {product.rating.toFixed(1)} rating · {product.reviews.length} reviews
            </p>
          </div>
          <button
            type="button"
            onClick={() => addItem(product)}
            className="inline-flex items-center justify-center rounded-full bg-[var(--color-foreground)] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[var(--color-accent)]"
          >
            Add to cart
          </button>
        </div>
      </div>
    </motion.article>
  )
}
