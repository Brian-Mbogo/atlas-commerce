// Shop page combines search, filters, sorting, and pagination in one storefront view.
import { useDeferredValue, useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import { PageHero } from '../components/common/PageHero'
import { ProductCard } from '../components/common/ProductCard'
import { categories, products } from '../services/mockCatalog'

const PRODUCTS_PER_PAGE = 6

export function ShopPage() {
  const [searchParams, setSearchParams] = useSearchParams()
  const [search, setSearch] = useState(searchParams.get('search') ?? '')
  const [category, setCategory] = useState(searchParams.get('category') ?? 'All')
  const [sortBy, setSortBy] = useState(searchParams.get('sort') ?? 'featured')
  const [currentPage, setCurrentPage] = useState(1)

  const deferredSearch = useDeferredValue(search.trim().toLowerCase())

  useEffect(() => {
    // URL params mirror UI state so the catalog can be shared or refreshed cleanly.
    const nextParams = {}

    if (search) {
      nextParams.search = search
    }
    if (category !== 'All') {
      nextParams.category = category
    }
    if (sortBy !== 'featured') {
      nextParams.sort = sortBy
    }

    setSearchParams(nextParams, { replace: true })
  }, [category, search, setSearchParams, sortBy])

  let filteredProducts = products.filter((product) => {
    const matchesCategory = category === 'All' || product.category === category
    const matchesSearch =
      deferredSearch.length === 0 ||
      product.title.toLowerCase().includes(deferredSearch) ||
      product.tags.some((tag) => tag.toLowerCase().includes(deferredSearch))

    return matchesCategory && matchesSearch
  })

  if (sortBy === 'price-asc') {
    filteredProducts = [...filteredProducts].sort((left, right) => left.price - right.price)
  } else if (sortBy === 'price-desc') {
    filteredProducts = [...filteredProducts].sort((left, right) => right.price - left.price)
  } else if (sortBy === 'rating') {
    filteredProducts = [...filteredProducts].sort((left, right) => right.rating - left.rating)
  } else if (sortBy === 'newest') {
    filteredProducts = [...filteredProducts].sort((left, right) => Number(right.isNew) - Number(left.isNew))
  }

  const totalPages = Math.max(1, Math.ceil(filteredProducts.length / PRODUCTS_PER_PAGE))
  // Keep pagination safe when filters reduce the total number of available pages.
  const activePage = Math.min(currentPage, totalPages)
  const visibleProducts = filteredProducts.slice(
    (activePage - 1) * PRODUCTS_PER_PAGE,
    activePage * PRODUCTS_PER_PAGE,
  )

  return (
    <div className="pb-16">
      <PageHero
        eyebrow="Shop"
        title="Search, sort, and filter with less noise."
        description="This first shop build already supports product grid browsing, search, category filters, sorting, and pagination using mock catalog data."
      />

      <section className="mx-auto grid w-full max-w-7xl gap-6 px-4 sm:px-6 lg:grid-cols-[0.34fr_0.66fr] lg:px-8">
        <aside className="rounded-[2rem] border border-[var(--color-border)] bg-white p-6 shadow-[0_20px_50px_rgba(17,24,39,0.05)]">
          <h2 className="font-display text-2xl font-semibold text-[var(--color-foreground)]">
            Filters
          </h2>
          <div className="mt-6 space-y-5">
            <label className="block space-y-2 text-sm font-medium text-[var(--color-foreground)]">
              <span>Search</span>
              <input
                value={search}
                onChange={(event) => {
                  setSearch(event.target.value)
                  setCurrentPage(1)
                }}
                placeholder="Try wool, commuter, travel..."
                className="w-full rounded-[1.25rem] border border-[var(--color-border)] bg-[rgba(250,250,247,0.9)] px-4 py-3 outline-none transition focus:border-[var(--color-accent)]"
              />
            </label>

            <label className="block space-y-2 text-sm font-medium text-[var(--color-foreground)]">
              <span>Category</span>
              <select
                value={category}
                onChange={(event) => {
                  setCategory(event.target.value)
                  setCurrentPage(1)
                }}
                className="w-full rounded-[1.25rem] border border-[var(--color-border)] bg-[rgba(250,250,247,0.9)] px-4 py-3 outline-none transition focus:border-[var(--color-accent)]"
              >
                <option value="All">All categories</option>
                {categories.map((item) => (
                  <option key={item.name} value={item.name}>
                    {item.name}
                  </option>
                ))}
              </select>
            </label>

            <label className="block space-y-2 text-sm font-medium text-[var(--color-foreground)]">
              <span>Sort</span>
              <select
                value={sortBy}
                onChange={(event) => {
                  setSortBy(event.target.value)
                  setCurrentPage(1)
                }}
                className="w-full rounded-[1.25rem] border border-[var(--color-border)] bg-[rgba(250,250,247,0.9)] px-4 py-3 outline-none transition focus:border-[var(--color-accent)]"
              >
                <option value="featured">Featured</option>
                <option value="price-asc">Price: Low to high</option>
                <option value="price-desc">Price: High to low</option>
                <option value="rating">Rating</option>
                <option value="newest">Newest</option>
              </select>
            </label>

            <div className="rounded-[1.5rem] bg-[rgba(250,250,247,0.9)] p-4 text-sm leading-7 text-[var(--color-muted)]">
              Price, rating, and “newest” filtering are scaffolded in the UI now.
              We can extend this next with server-driven filters and MongoDB-backed
              pagination.
            </div>
          </div>
        </aside>

        <div className="space-y-6">
          <div className="flex flex-col gap-3 rounded-[2rem] border border-[var(--color-border)] bg-white p-6 shadow-[0_20px_50px_rgba(17,24,39,0.05)] sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="font-display text-2xl font-semibold text-[var(--color-foreground)]">
                Product grid
              </p>
              <p className="text-sm text-[var(--color-muted)]">
                Showing {visibleProducts.length} of {filteredProducts.length} products
              </p>
            </div>
            <div className="rounded-full bg-[rgba(217,119,6,0.08)] px-4 py-2 text-xs font-semibold uppercase tracking-[0.24em] text-[var(--color-accent)]">
              Page {activePage} of {totalPages}
            </div>
          </div>

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {visibleProducts.map((product, index) => (
              <ProductCard key={product.id} product={product} index={index} compact />
            ))}
          </div>

          <div className="flex flex-wrap items-center justify-center gap-3">
            {Array.from({ length: totalPages }, (_, index) => index + 1).map((page) => (
              <button
                key={page}
                type="button"
                onClick={() => setCurrentPage(page)}
                className={`rounded-full px-4 py-2 text-sm font-semibold transition ${
                  page === activePage
                    ? 'bg-[var(--color-foreground)] text-white'
                    : 'border border-[var(--color-border)] bg-white text-[var(--color-foreground)] hover:border-[var(--color-accent)] hover:text-[var(--color-accent)]'
                }`}
              >
                {page}
              </button>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
