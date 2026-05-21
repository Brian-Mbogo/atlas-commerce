// Checkout page establishes the multi-step structure for future payment integration.
import { PageHero } from '../components/common/PageHero'
import { formatCurrency } from '../services/mockCatalog'
import { useCartStore } from '../store/useCartStore'

const steps = ['Address', 'Delivery', 'Payment', 'Confirmation']

export function CheckoutPage() {
  const items = useCartStore((state) => state.items)
  const subtotal = items.reduce(
    (total, item) => total + item.price * item.quantity,
    0,
  )
  const shipping = subtotal >= 200 || subtotal === 0 ? 0 : 18
  const total = subtotal + shipping

  return (
    <div className="pb-16">
      <PageHero
        eyebrow="Checkout"
        title="A streamlined four-step purchase flow."
        description="This page sets up the structure for address, delivery, payment, and confirmation with room for Stripe, PayPal, and M-Pesa integrations next."
      />

      <section className="mx-auto grid w-full max-w-7xl gap-6 px-4 sm:px-6 lg:grid-cols-[1.2fr_0.8fr] lg:px-8">
        <div className="space-y-6">
          <article className="rounded-[2rem] border border-[var(--color-border)] bg-white p-6 shadow-[0_20px_50px_rgba(17,24,39,0.05)]">
            <div className="grid gap-3 sm:grid-cols-4">
              {steps.map((step, index) => (
                <div
                  key={step}
                  className={`rounded-[1.5rem] px-4 py-4 text-center text-sm font-semibold ${
                    index === 0
                      ? 'bg-[var(--color-foreground)] text-white'
                      : 'bg-[rgba(250,250,247,0.9)] text-[var(--color-muted)]'
                  }`}
                >
                  <span className="block text-xs uppercase tracking-[0.24em]">
                    0{index + 1}
                  </span>
                  <span className="mt-2 block">{step}</span>
                </div>
              ))}
            </div>
          </article>

          <article className="rounded-[2rem] border border-[var(--color-border)] bg-white p-6 shadow-[0_20px_50px_rgba(17,24,39,0.05)]">
            <h2 className="font-display text-2xl font-semibold text-[var(--color-foreground)]">
              Delivery details
            </h2>
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              {['Full name', 'Email address', 'Phone number', 'City'].map((label) => (
                <label key={label} className="space-y-2 text-sm font-medium text-[var(--color-foreground)]">
                  <span>{label}</span>
                  <input
                    type="text"
                    placeholder={label}
                    className="w-full rounded-[1.25rem] border border-[var(--color-border)] bg-[rgba(250,250,247,0.9)] px-4 py-3 outline-none transition focus:border-[var(--color-accent)]"
                  />
                </label>
              ))}
            </div>
            <label className="mt-4 block space-y-2 text-sm font-medium text-[var(--color-foreground)]">
              <span>Street address</span>
              <input
                type="text"
                placeholder="Westlands, Nairobi"
                className="w-full rounded-[1.25rem] border border-[var(--color-border)] bg-[rgba(250,250,247,0.9)] px-4 py-3 outline-none transition focus:border-[var(--color-accent)]"
              />
            </label>
          </article>

          <article className="rounded-[2rem] border border-[var(--color-border)] bg-white p-6 shadow-[0_20px_50px_rgba(17,24,39,0.05)]">
            <h2 className="font-display text-2xl font-semibold text-[var(--color-foreground)]">
              Payment methods
            </h2>
            <div className="mt-6 grid gap-4 sm:grid-cols-3">
              {['Stripe', 'PayPal', 'M-Pesa'].map((method) => (
                <button
                  key={method}
                  type="button"
                  className={`rounded-[1.5rem] border px-4 py-5 text-left transition ${
                    method === 'M-Pesa'
                      ? 'border-[rgba(217,119,6,0.28)] bg-[rgba(217,119,6,0.08)] text-[var(--color-accent)]'
                      : 'border-[var(--color-border)] bg-[rgba(250,250,247,0.9)] text-[var(--color-foreground)] hover:border-[var(--color-accent)]'
                  }`}
                >
                  <span className="block text-xs uppercase tracking-[0.24em]">Option</span>
                  <span className="mt-2 block font-display text-xl font-semibold">
                    {method}
                  </span>
                </button>
              ))}
            </div>
          </article>
        </div>

        <aside className="rounded-[2rem] border border-[var(--color-border)] bg-white p-6 shadow-[0_20px_50px_rgba(17,24,39,0.05)]">
          <h2 className="font-display text-2xl font-semibold text-[var(--color-foreground)]">
            Order confirmation
          </h2>
          <div className="mt-6 space-y-4">
            {items.length === 0 ? (
              <p className="text-sm leading-7 text-[var(--color-muted)]">
                Add items to your cart to preview shipping and payment totals.
              </p>
            ) : (
              items.map((item) => (
                <div key={item.id} className="flex items-center justify-between gap-4 text-sm">
                  <div>
                    <p className="font-semibold text-[var(--color-foreground)]">
                      {item.title}
                    </p>
                    <p className="text-[var(--color-muted)]">Qty {item.quantity}</p>
                  </div>
                  <p className="font-semibold text-[var(--color-foreground)]">
                    {formatCurrency(item.price * item.quantity)}
                  </p>
                </div>
              ))
            )}
          </div>
          <div className="mt-6 space-y-3 border-t border-[var(--color-border)] pt-6 text-sm text-[var(--color-muted)]">
            <div className="flex items-center justify-between">
              <span>Subtotal</span>
              <span>{formatCurrency(subtotal)}</span>
            </div>
            <div className="flex items-center justify-between">
              <span>Shipping</span>
              <span>{shipping === 0 ? 'Free' : formatCurrency(shipping)}</span>
            </div>
            <div className="flex items-center justify-between font-semibold text-[var(--color-foreground)]">
              <span>Total</span>
              <span>{formatCurrency(total)}</span>
            </div>
          </div>
          <button
            type="button"
            className="mt-8 inline-flex w-full items-center justify-center rounded-full bg-[var(--color-foreground)] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[var(--color-accent)]"
          >
            Place order
          </button>
        </aside>
      </section>
    </div>
  )
}
