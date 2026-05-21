// Admin dashboard preview for analytics, products, orders, and revenue trends.
import { PageHero } from '../components/common/PageHero'
import { formatCurrency, mockOrders, products } from '../services/mockCatalog'

const metrics = [
  { label: 'Revenue', value: formatCurrency(124800) },
  { label: 'Orders', value: '428' },
  { label: 'Customers', value: '1,920' },
  { label: 'Conversion', value: '4.8%' },
]

export function AdminDashboardPage() {
  const topProducts = [...products].slice(0, 4)

  return (
    <div className="pb-16">
      <PageHero
        eyebrow="Admin dashboard"
        title="A cleaner command center for store operations."
        description="This first pass gives Atlas Commerce an admin surface for analytics, product management, orders, users, and revenue health."
      />

      <section className="mx-auto grid w-full max-w-7xl gap-6 px-4 sm:px-6 lg:grid-cols-4 lg:px-8">
        {metrics.map((metric) => (
          <article
            key={metric.label}
            className="rounded-[1.75rem] border border-[var(--color-border)] bg-white p-6 shadow-[0_20px_50px_rgba(17,24,39,0.05)]"
          >
            <p className="text-sm uppercase tracking-[0.24em] text-[var(--color-muted)]">
              {metric.label}
            </p>
            <p className="mt-3 font-display text-3xl font-semibold text-[var(--color-foreground)]">
              {metric.value}
            </p>
          </article>
        ))}
      </section>

      <section className="mx-auto mt-10 grid w-full max-w-7xl gap-6 px-4 sm:px-6 lg:grid-cols-[1.3fr_0.7fr] lg:px-8">
        <article className="rounded-[2rem] border border-[var(--color-border)] bg-white p-6 shadow-[0_20px_50px_rgba(17,24,39,0.05)]">
          <div className="flex items-center justify-between gap-3">
            <div>
              <p className="font-display text-2xl font-semibold text-[var(--color-foreground)]">
                Revenue trend
              </p>
              <p className="text-sm text-[var(--color-muted)]">
                Placeholder chart ready for Chart.js or Recharts next.
              </p>
            </div>
            <span className="rounded-full bg-[rgba(217,119,6,0.1)] px-4 py-2 text-xs font-semibold uppercase tracking-[0.24em] text-[var(--color-accent)]">
              Monthly
            </span>
          </div>
          <div className="mt-8 flex h-64 items-end gap-4 rounded-[1.5rem] bg-[rgba(250,250,247,0.9)] p-5">
            {[48, 62, 54, 76, 80, 72, 94, 88].map((height, index) => (
              <div key={height} className="flex flex-1 flex-col items-center gap-3">
                <div
                  className="w-full rounded-t-[1rem] bg-gradient-to-t from-[var(--color-accent)] to-[var(--color-foreground)]"
                  style={{ height: `${height}%` }}
                />
                <span className="text-xs uppercase tracking-[0.2em] text-[var(--color-muted)]">
                  {['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug'][index]}
                </span>
              </div>
            ))}
          </div>
        </article>

        <article className="rounded-[2rem] border border-[var(--color-border)] bg-white p-6 shadow-[0_20px_50px_rgba(17,24,39,0.05)]">
          <p className="font-display text-2xl font-semibold text-[var(--color-foreground)]">
            Best performers
          </p>
          <div className="mt-6 space-y-4">
            {topProducts.map((product) => (
              <div
                key={product.id}
                className="flex items-center gap-4 rounded-[1.5rem] bg-[rgba(250,250,247,0.9)] p-3"
              >
                <img
                  src={product.image}
                  alt={product.title}
                  className="h-16 w-16 rounded-[1.25rem] object-cover"
                />
                <div className="min-w-0 flex-1">
                  <p className="truncate font-semibold text-[var(--color-foreground)]">
                    {product.title}
                  </p>
                  <p className="text-sm text-[var(--color-muted)]">{product.category}</p>
                </div>
                <p className="text-sm font-semibold text-[var(--color-accent)]">
                  {formatCurrency(product.price)}
                </p>
              </div>
            ))}
          </div>
        </article>
      </section>

      <section className="mx-auto mt-10 grid w-full max-w-7xl gap-6 px-4 sm:px-6 lg:grid-cols-[1fr_1fr] lg:px-8">
        <article className="rounded-[2rem] border border-[var(--color-border)] bg-white p-6 shadow-[0_20px_50px_rgba(17,24,39,0.05)]">
          <p className="font-display text-2xl font-semibold text-[var(--color-foreground)]">
            Recent orders
          </p>
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
                  <p className="text-sm text-[var(--color-muted)]">{order.customer}</p>
                </div>
                <div className="text-right">
                  <p className="font-semibold text-[var(--color-foreground)]">
                    {formatCurrency(order.total)}
                  </p>
                  <p className="text-sm text-[var(--color-muted)]">{order.status}</p>
                </div>
              </div>
            ))}
          </div>
        </article>

        <article className="rounded-[2rem] border border-[var(--color-border)] bg-white p-6 shadow-[0_20px_50px_rgba(17,24,39,0.05)]">
          <p className="font-display text-2xl font-semibold text-[var(--color-foreground)]">
            What’s next
          </p>
          <div className="mt-6 space-y-4 text-sm leading-7 text-[var(--color-muted)]">
            <p>Product CRUD connected to Cloudinary uploads.</p>
            <p>Live user management with role-based access.</p>
            <p>Revenue and order charts wired to backend analytics endpoints.</p>
            <p>Coupon tracking, refunds, and delivery status auditing.</p>
          </div>
        </article>
      </section>
    </div>
  )
}
