// Landing page introduces the Atlas Commerce brand and core conversion sections.
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { CategoryCard } from '../components/common/CategoryCard'
import { ProductCard } from '../components/common/ProductCard'
import { SectionHeading } from '../components/common/SectionHeading'
import { TestimonialCard } from '../components/common/TestimonialCard'
import {
  bestSellers,
  categories,
  featuredCollections,
  formatCurrency,
  products,
  testimonials,
} from '../services/mockCatalog'

export function HomePage() {
  // A smaller featured set keeps the hero area focused instead of overcrowded.
  const heroProducts = products.slice(0, 3)

  return (
    <div className="pb-16">
      <section className="mx-auto grid w-full max-w-7xl gap-10 px-4 py-12 sm:px-6 lg:grid-cols-[1.08fr_0.92fr] lg:items-center lg:px-8 lg:py-16">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55 }}
          className="space-y-8"
        >
          <span className="inline-flex rounded-full border border-[rgba(217,119,6,0.18)] bg-[rgba(217,119,6,0.08)] px-4 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-[var(--color-accent)]">
            New collection
          </span>
          <div className="space-y-5">
            <h1 className="font-display text-5xl font-semibold leading-[0.95] tracking-[-0.06em] text-[var(--color-foreground)] sm:text-6xl lg:text-7xl">
              Built for everyday.
              <span className="block text-[var(--color-accent)]">Designed to move fast.</span>
            </h1>
            <p className="max-w-xl text-base leading-8 text-[var(--color-muted)] sm:text-lg">
              Atlas Commerce is a modern storefront concept inspired by clean
              lifestyle brands, combining larger imagery, breathable layouts, and a
              checkout journey that feels effortless from browse to payment.
            </p>
          </div>
          <div className="flex flex-col gap-4 sm:flex-row">
            <Link
              to="/shop"
              className="inline-flex items-center justify-center rounded-full bg-[var(--color-foreground)] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[var(--color-accent)]"
            >
              Shop now
            </Link>
            <Link
              to="/register"
              className="inline-flex items-center justify-center rounded-full border border-[var(--color-border)] bg-white px-6 py-3 text-sm font-semibold text-[var(--color-foreground)] transition hover:border-[var(--color-accent)] hover:text-[var(--color-accent)]"
            >
              Create account
            </Link>
          </div>
          <div className="grid gap-4 sm:grid-cols-3">
            {[
              { label: 'Avg. checkout time', value: '1m 42s' },
              { label: 'Top-rated products', value: '4.9/5' },
              { label: 'Mobile-first layout', value: '100%' },
            ].map((stat) => (
              <div
                key={stat.label}
                className="rounded-[1.5rem] border border-[var(--color-border)] bg-[rgba(255,255,255,0.72)] p-4 backdrop-blur"
              >
                <p className="text-xs uppercase tracking-[0.24em] text-[var(--color-muted)]">
                  {stat.label}
                </p>
                <p className="mt-3 font-display text-2xl font-semibold text-[var(--color-foreground)]">
                  {stat.value}
                </p>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.12 }}
          className="grid gap-5 sm:grid-cols-2"
        >
          <article className="rounded-[2rem] border border-[var(--color-border)] bg-white p-4 shadow-[0_24px_60px_rgba(17,24,39,0.07)] sm:col-span-2">
            <div className="grid gap-4 lg:grid-cols-[1.1fr_0.9fr]">
              <img
                src={heroProducts[0].image}
                alt={heroProducts[0].title}
                className="h-72 w-full rounded-[1.75rem] object-cover"
              />
              <div className="flex flex-col justify-between rounded-[1.75rem] bg-[rgba(250,250,247,0.94)] p-6">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[var(--color-accent)]">
                    Featured drop
                  </p>
                  <h2 className="mt-3 font-display text-3xl font-semibold tracking-[-0.04em] text-[var(--color-foreground)]">
                    {heroProducts[0].title}
                  </h2>
                  <p className="mt-3 text-sm leading-7 text-[var(--color-muted)]">
                    {heroProducts[0].description}
                  </p>
                </div>
                <div className="mt-6 flex items-end justify-between gap-3">
                  <div>
                    <p className="font-display text-2xl font-semibold text-[var(--color-foreground)]">
                      {formatCurrency(heroProducts[0].price)}
                    </p>
                    <p className="text-sm text-[var(--color-muted)]">
                      {heroProducts[0].rating.toFixed(1)} rating
                    </p>
                  </div>
                  <Link
                    to={`/product/${heroProducts[0].slug}`}
                    className="inline-flex rounded-full bg-[var(--color-foreground)] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[var(--color-accent)]"
                  >
                    View product
                  </Link>
                </div>
              </div>
            </div>
          </article>

          {heroProducts.slice(1).map((product) => (
            <article
              key={product.id}
              className="overflow-hidden rounded-[2rem] border border-[var(--color-border)] bg-white shadow-[0_24px_60px_rgba(17,24,39,0.05)]"
            >
              <img
                src={product.image}
                alt={product.title}
                className="h-52 w-full object-cover"
              />
              <div className="space-y-2 p-5">
                <p className="text-xs uppercase tracking-[0.22em] text-[var(--color-muted)]">
                  {product.category}
                </p>
                <h3 className="font-display text-2xl font-semibold text-[var(--color-foreground)]">
                  {product.title}
                </h3>
                <p className="text-sm leading-7 text-[var(--color-muted)]">
                  {product.subtitle}
                </p>
              </div>
            </article>
          ))}
        </motion.div>
      </section>

      <section className="mx-auto w-full max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        <div className="grid gap-6 lg:grid-cols-3">
          {featuredCollections.map((collection, index) => (
            <motion.article
              key={collection.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.45, delay: index * 0.06 }}
              className="rounded-[2rem] border border-[var(--color-border)] bg-[rgba(255,255,255,0.82)] p-6 shadow-[0_20px_50px_rgba(17,24,39,0.04)]"
            >
              <p className="text-xs uppercase tracking-[0.24em] text-[var(--color-accent)]">
                {collection.label}
              </p>
              <h3 className="mt-4 font-display text-2xl font-semibold text-[var(--color-foreground)]">
                {collection.title}
              </h3>
              <p className="mt-3 text-sm leading-7 text-[var(--color-muted)]">
                {collection.description}
              </p>
            </motion.article>
          ))}
        </div>
      </section>

      <section className="mx-auto w-full max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Categories"
          title="Browse the way people naturally shop."
          description="The catalog starts with high-signal categories, generous imagery, and quick pathways into search, filters, and product discovery."
        />
        <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {categories.map((category, index) => (
            <CategoryCard key={category.name} category={category} index={index} />
          ))}
        </div>
      </section>

      <section className="mx-auto w-full max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Best sellers"
          title="Products designed to convert."
          description="Rounded cards, larger visuals, and minimal copy keep the focus on what matters most: trust, quality, and a fast path to purchase."
        />
        <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {bestSellers.map((product, index) => (
            <ProductCard key={product.id} product={product} index={index} compact />
          ))}
        </div>
      </section>

      <section className="mx-auto w-full max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Testimonials"
          title="A cleaner shopping experience builds loyalty."
          description="Customer proof points are part of the landing page from the start, giving the brand voice and trust alongside product imagery."
          align="center"
        />
        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={testimonial.author} {...testimonial} index={index} />
          ))}
        </div>
      </section>

      <section className="mx-auto w-full max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-8 rounded-[2.25rem] border border-[var(--color-border)] bg-white p-8 shadow-[0_24px_60px_rgba(17,24,39,0.06)] lg:grid-cols-[1fr_0.9fr] lg:items-center lg:p-10">
          <div className="space-y-4">
            <span className="inline-flex rounded-full bg-[rgba(217,119,6,0.08)] px-4 py-2 text-xs font-semibold uppercase tracking-[0.28em] text-[var(--color-accent)]">
              Newsletter
            </span>
            <h2 className="font-display text-4xl font-semibold tracking-[-0.04em] text-[var(--color-foreground)]">
              Launch updates, curated drops, and checkout improvements.
            </h2>
            <p className="max-w-xl text-base leading-8 text-[var(--color-muted)]">
              The final platform can connect this section to email marketing,
              coupon onboarding, and post-purchase flows. For now, the design and
              interaction surface is ready.
            </p>
          </div>
          <form className="grid gap-4 sm:grid-cols-[1fr_auto]">
            <input
              type="email"
              placeholder="Your email address"
              className="rounded-full border border-[var(--color-border)] bg-[rgba(250,250,247,0.9)] px-5 py-4 outline-none transition focus:border-[var(--color-accent)]"
            />
            <button
              type="submit"
              className="inline-flex items-center justify-center rounded-full bg-[var(--color-foreground)] px-6 py-4 text-sm font-semibold text-white transition hover:bg-[var(--color-accent)]"
            >
              Join list
            </button>
          </form>
        </div>
      </section>
    </div>
  )
}
