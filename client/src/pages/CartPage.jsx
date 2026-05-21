// Cart page reflects live cart state and prepares the user for checkout.
import { Link } from 'react-router-dom'
import { PageHero } from '../components/common/PageHero'
import { formatCurrency } from '../services/mockCatalog'
import { useCartStore } from '../store/useCartStore'

export function CartPage() {
  const items = useCartStore((state) => state.items)
  const removeItem = useCartStore((state) => state.removeItem)
  const updateQuantity = useCartStore((state) => state.updateQuantity)

  const subtotal = items.reduce(
    (total, item) => total + item.price * item.quantity,
    0,
  )
  const shipping = subtotal >= 200 || subtotal === 0 ? 0 : 18
  const total = subtotal + shipping

  return (
    <div className="pb-16">
      <PageHero
        eyebrow="Your bag"
        title="Review items before checkout."
        description="The cart flow is now wired to local state so quantity changes, removals, and totals all update live."
      />

      <section className="mx-auto grid w-full max-w-7xl gap-6 px-4 sm:px-6 lg:grid-cols-[1.3fr_0.7fr] lg:px-8">
        <article className="rounded-[2rem] border border-[var(--color-border)] bg-white p-6 shadow-[0_20px_50px_rgba(17,24,39,0.05)]">
          <div className="flex items-center justify-between gap-4">
            <h2 className="font-display text-2xl font-semibold text-[var(--color-foreground)]">
              Cart items
            </h2>
            <p className="text-sm text-[var(--color-muted)]">{items.length} product types</p>
          </div>

          {items.length === 0 ? (
            <div className="mt-8 rounded-[1.75rem] border border-dashed border-[var(--color-border)] bg-[rgba(250,250,247,0.8)] p-8 text-center">
              <p className="font-display text-2xl font-semibold text-[var(--color-foreground)]">
                Your cart is empty
              </p>
              <p className="mt-3 text-sm leading-7 text-[var(--color-muted)]">
                Start in the shop and add a few products to see pricing,
                quantity updates, and checkout work together.
              </p>
              <Link
                to="/shop"
                className="mt-6 inline-flex rounded-full bg-[var(--color-foreground)] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[var(--color-accent)]"
              >
                Explore shop
              </Link>
            </div>
          ) : (
            <div className="mt-8 space-y-4">
              {items.map((item) => (
                <article
                  key={item.id}
                  className="flex flex-col gap-4 rounded-[1.75rem] border border-[var(--color-border)] p-4 sm:flex-row sm:items-center"
                >
                  <img
                    src={item.image}
                    alt={item.title}
                    className="h-28 w-full rounded-[1.5rem] object-cover sm:w-28"
                  />
                  <div className="min-w-0 flex-1">
                    <p className="font-display text-xl font-semibold text-[var(--color-foreground)]">
                      {item.title}
                    </p>
                    <p className="mt-1 text-sm text-[var(--color-muted)]">{item.subtitle}</p>
                    <p className="mt-3 text-sm font-semibold text-[var(--color-accent)]">
                      {formatCurrency(item.price)}
                    </p>
                  </div>
                  <div className="flex items-center gap-3">
                    <label className="text-sm text-[var(--color-muted)]" htmlFor={`qty-${item.id}`}>
                      Qty
                    </label>
                    <select
                      id={`qty-${item.id}`}
                      value={item.quantity}
                      onChange={(event) =>
                        updateQuantity(item.id, Number(event.target.value))
                      }
                      className="rounded-full border border-[var(--color-border)] bg-[rgba(250,250,247,0.9)] px-4 py-2 text-sm text-[var(--color-foreground)]"
                    >
                      {[1, 2, 3, 4, 5].map((value) => (
                        <option key={value} value={value}>
                          {value}
                        </option>
                      ))}
                    </select>
                  </div>
                  <button
                    type="button"
                    onClick={() => removeItem(item.id)}
                    className="rounded-full border border-[var(--color-border)] px-4 py-2 text-sm font-semibold text-[var(--color-foreground)] transition hover:border-[var(--color-accent)] hover:text-[var(--color-accent)]"
                  >
                    Remove
                  </button>
                </article>
              ))}
            </div>
          )}
        </article>

        <aside className="rounded-[2rem] border border-[var(--color-border)] bg-white p-6 shadow-[0_20px_50px_rgba(17,24,39,0.05)]">
          <h2 className="font-display text-2xl font-semibold text-[var(--color-foreground)]">
            Summary
          </h2>
          <div className="mt-6 space-y-4 text-sm text-[var(--color-muted)]">
            <div className="flex items-center justify-between">
              <span>Subtotal</span>
              <span>{formatCurrency(subtotal)}</span>
            </div>
            <div className="flex items-center justify-between">
              <span>Shipping</span>
              <span>{shipping === 0 ? 'Free' : formatCurrency(shipping)}</span>
            </div>
            <div className="flex items-center justify-between border-t border-[var(--color-border)] pt-4 font-semibold text-[var(--color-foreground)]">
              <span>Total</span>
              <span>{formatCurrency(total)}</span>
            </div>
          </div>
          <Link
            to="/checkout"
            className="mt-8 inline-flex w-full items-center justify-center rounded-full bg-[var(--color-foreground)] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[var(--color-accent)]"
          >
            Continue to checkout
          </Link>
        </aside>
      </section>
    </div>
  )
}
