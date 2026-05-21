// Product details page shows a richer product view and tracks recent browsing.
import { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { ProductCard } from '../components/common/ProductCard'
import { formatCurrency, products } from '../services/mockCatalog'
import { useCartStore } from '../store/useCartStore'
import { useRecentlyViewedStore } from '../store/useRecentlyViewedStore'

export function ProductDetailsPage() {
  const { slug } = useParams()
  const addItem = useCartStore((state) => state.addItem)
  const addRecentProduct = useRecentlyViewedStore((state) => state.addProduct)
  const [quantity, setQuantity] = useState(1)

  const product = products.find((item) => item.slug === slug)

  useEffect(() => {
    // Recently viewed items will later feed recommendations and dashboard history.
    if (product) {
      addRecentProduct(product)
    }
  }, [addRecentProduct, product])

  if (!product) {
    return (
      <section className="mx-auto w-full max-w-4xl px-4 py-20 text-center sm:px-6 lg:px-8">
        <p className="font-display text-3xl font-semibold text-[var(--color-foreground)]">
          Product not found
        </p>
        <Link
          to="/shop"
          className="mt-6 inline-flex rounded-full bg-[var(--color-foreground)] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[var(--color-accent)]"
        >
          Return to shop
        </Link>
      </section>
    )
  }

  const relatedProducts = products
    .filter((item) => item.category === product.category && item.id !== product.id)
    .slice(0, 3)

  return (
    <div className="pb-16">
      <section className="mx-auto grid w-full max-w-7xl gap-8 px-4 py-12 sm:px-6 lg:grid-cols-[1.05fr_0.95fr] lg:px-8 lg:py-16">
        <article className="rounded-[2.25rem] border border-[var(--color-border)] bg-white p-4 shadow-[0_24px_60px_rgba(17,24,39,0.06)]">
          <div className="overflow-hidden rounded-[1.9rem]">
            <img
              src={product.image}
              alt={product.title}
              className="h-[28rem] w-full object-cover transition duration-500 hover:scale-110"
            />
          </div>
        </article>

        <article className="rounded-[2.25rem] border border-[var(--color-border)] bg-white p-6 shadow-[0_24px_60px_rgba(17,24,39,0.06)] sm:p-8">
          <div className="flex flex-wrap items-center gap-3 text-xs font-semibold uppercase tracking-[0.24em] text-[var(--color-muted)]">
            <span>{product.category}</span>
            <span className="rounded-full bg-[rgba(217,119,6,0.08)] px-3 py-1 text-[var(--color-accent)]">
              {product.rating.toFixed(1)} rating
            </span>
          </div>
          <h1 className="mt-5 font-display text-4xl font-semibold tracking-[-0.05em] text-[var(--color-foreground)]">
            {product.title}
          </h1>
          <p className="mt-3 text-lg text-[var(--color-muted)]">{product.subtitle}</p>
          <p className="mt-6 font-display text-3xl font-semibold text-[var(--color-foreground)]">
            {formatCurrency(product.price)}
          </p>
          <p className="mt-6 text-sm leading-8 text-[var(--color-muted)]">
            {product.description}
          </p>

          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {product.features.map((feature) => (
              <div
                key={feature}
                className="rounded-[1.5rem] bg-[rgba(250,250,247,0.94)] px-4 py-4 text-sm text-[var(--color-foreground)]"
              >
                {feature}
              </div>
            ))}
          </div>

          <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center">
            <label className="text-sm font-medium text-[var(--color-foreground)]" htmlFor="product-quantity">
              Quantity
            </label>
            <select
              id="product-quantity"
              value={quantity}
              onChange={(event) => setQuantity(Number(event.target.value))}
              className="rounded-full border border-[var(--color-border)] bg-[rgba(250,250,247,0.9)] px-4 py-3 text-sm text-[var(--color-foreground)] outline-none transition focus:border-[var(--color-accent)]"
            >
              {[1, 2, 3, 4, 5].map((value) => (
                <option key={value} value={value}>
                  {value}
                </option>
              ))}
            </select>
            <button
              type="button"
              onClick={() => addItem(product, quantity)}
              className="inline-flex items-center justify-center rounded-full bg-[var(--color-foreground)] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[var(--color-accent)]"
            >
              Add to cart
            </button>
          </div>

          <div className="mt-10 border-t border-[var(--color-border)] pt-8">
            <h2 className="font-display text-2xl font-semibold text-[var(--color-foreground)]">
              Reviews
            </h2>
            <div className="mt-5 space-y-4">
              {product.reviews.map((review) => (
                <article
                  key={review.author}
                  className="rounded-[1.5rem] border border-[var(--color-border)] p-4"
                >
                  <div className="flex items-center justify-between gap-3">
                    <p className="font-semibold text-[var(--color-foreground)]">
                      {review.author}
                    </p>
                    <p className="text-sm text-[var(--color-muted)]">{review.rating}/5</p>
                  </div>
                  <p className="mt-3 text-sm leading-7 text-[var(--color-muted)]">
                    {review.comment}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </article>
      </section>

      <section className="mx-auto w-full max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between gap-4">
          <div>
            <p className="text-xs uppercase tracking-[0.24em] text-[var(--color-accent)]">
              Related products
            </p>
            <h2 className="mt-2 font-display text-3xl font-semibold text-[var(--color-foreground)]">
              Keep the collection cohesive.
            </h2>
          </div>
          <Link
            to="/shop"
            className="hidden rounded-full border border-[var(--color-border)] bg-white px-5 py-3 text-sm font-semibold text-[var(--color-foreground)] transition hover:border-[var(--color-accent)] hover:text-[var(--color-accent)] sm:inline-flex"
          >
            Back to shop
          </Link>
        </div>
        <div className="mt-8 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {relatedProducts.map((item, index) => (
            <ProductCard key={item.id} product={item} index={index} compact />
          ))}
        </div>
      </section>
    </div>
  )
}
