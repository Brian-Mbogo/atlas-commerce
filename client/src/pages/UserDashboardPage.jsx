// User dashboard groups together profile info, orders, and recent activity.
import { Link } from 'react-router-dom'
import { PageHero } from '../components/common/PageHero'
import { formatCurrency, mockOrders } from '../services/mockCatalog'
import { useRecentlyViewedStore } from '../store/useRecentlyViewedStore'
import { useSessionStore } from '../store/useSessionStore'

export function UserDashboardPage() {
  const user = useSessionStore((state) => state.user)
  const recentProducts = useRecentlyViewedStore((state) => state.products)

  return (
    <div className="pb-16">
      <PageHero
        eyebrow="Dashboard"
        title={`Welcome back, ${user?.name ?? 'shopper'}.`}
        description="This page sets up the main user account surface for profile details, orders, wishlist, and settings."
      />

      <section className="mx-auto grid w-full max-w-7xl gap-6 px-4 sm:px-6 lg:grid-cols-[0.42fr_0.58fr] lg:px-8">
        <article className="rounded-[2rem] border border-[var(--color-border)] bg-white p-6 shadow-[0_20px_50px_rgba(17,24,39,0.05)]">
          <h2 className="font-display text-2xl font-semibold text-[var(--color-foreground)]">
            Profile
          </h2>
          <div className="mt-6 space-y-4 rounded-[1.5rem] bg-[rgba(250,250,247,0.9)] p-5">
            <p className="font-semibold text-[var(--color-foreground)]">{user?.name}</p>
            <p className="text-sm text-[var(--color-muted)]">{user?.email}</p>
            <p className="text-sm text-[var(--color-muted)]">Role: {user?.role}</p>
          </div>

          <div className="mt-6 grid gap-3">
            {['Profile settings', 'Wishlist sync', 'Email receipts', 'Dark mode'].map((item) => (
              <div
                key={item}
                className="rounded-[1.25rem] border border-[var(--color-border)] px-4 py-3 text-sm text-[var(--color-foreground)]"
              >
                {item}
              </div>
            ))}
          </div>
        </article>

        <div className="space-y-6">
          <article className="rounded-[2rem] border border-[var(--color-border)] bg-white p-6 shadow-[0_20px_50px_rgba(17,24,39,0.05)]">
            <div className="flex items-center justify-between gap-4">
              <h2 className="font-display text-2xl font-semibold text-[var(--color-foreground)]">
                Recent orders
              </h2>
              <span className="rounded-full bg-[rgba(217,119,6,0.08)] px-4 py-2 text-xs font-semibold uppercase tracking-[0.24em] text-[var(--color-accent)]">
                Order tracking next
              </span>
            </div>
            <div className="mt-6 space-y-4">
              {mockOrders.map((order) => (
                <div
                  key={order.id}
                  className="flex items-center justify-between gap-4 rounded-[1.5rem] border border-[var(--color-border)] p-4"
                >
                  <div>
                    <p className="font-semibold text-[var(--color-foreground)]">
                      {order.id}
                    </p>
                    <p className="text-sm text-[var(--color-muted)]">{order.status}</p>
                  </div>
                  <p className="font-semibold text-[var(--color-foreground)]">
                    {formatCurrency(order.total)}
                  </p>
                </div>
              ))}
            </div>
          </article>

          <article className="rounded-[2rem] border border-[var(--color-border)] bg-white p-6 shadow-[0_20px_50px_rgba(17,24,39,0.05)]">
            <div className="flex items-center justify-between gap-4">
              <h2 className="font-display text-2xl font-semibold text-[var(--color-foreground)]">
                Recently viewed
              </h2>
              <Link to="/shop" className="text-sm font-semibold text-[var(--color-accent)]">
                Continue shopping
              </Link>
            </div>
            <div className="mt-6 space-y-4">
              {recentProducts.length === 0 ? (
                <p className="text-sm leading-7 text-[var(--color-muted)]">
                  Visit a product page to start building recent activity and
                  personalized recommendations.
                </p>
              ) : (
                recentProducts.map((product) => (
                  <Link
                    key={product.id}
                    to={`/product/${product.slug}`}
                    className="flex items-center gap-4 rounded-[1.5rem] border border-[var(--color-border)] p-3 transition hover:border-[var(--color-accent)]"
                  >
                    <img
                      src={product.image}
                      alt={product.title}
                      className="h-16 w-16 rounded-[1.25rem] object-cover"
                    />
                    <div>
                      <p className="font-semibold text-[var(--color-foreground)]">
                        {product.title}
                      </p>
                      <p className="text-sm text-[var(--color-muted)]">{product.category}</p>
                    </div>
                  </Link>
                ))
              )}
            </div>
          </article>
        </div>
      </section>
    </div>
  )
}
