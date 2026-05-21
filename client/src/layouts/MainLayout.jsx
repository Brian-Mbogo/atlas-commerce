// Main layout wraps every page with the shared header and footer.
import { NavLink, Outlet } from 'react-router-dom'
import { useCartStore } from '../store/useCartStore'
import { useSessionStore } from '../store/useSessionStore'

const navItems = [
  { label: 'Home', to: '/' },
  { label: 'Shop', to: '/shop' },
  { label: 'Cart', to: '/cart' },
  { label: 'Checkout', to: '/checkout' },
]

function navLinkClass({ isActive }) {
  // Active links are visually filled so navigation state is obvious at a glance.
  return `rounded-full px-4 py-2 text-sm font-medium transition ${
    isActive
      ? 'bg-[var(--color-foreground)] text-white'
      : 'text-[var(--color-muted)] hover:bg-white hover:text-[var(--color-foreground)]'
  }`
}

export function MainLayout() {
  // Cart and session state live in Zustand so top-level UI can react immediately.
  const itemCount = useCartStore((state) =>
    state.items.reduce((total, item) => total + item.quantity, 0),
  )
  const user = useSessionStore((state) => state.user)
  const signOut = useSessionStore((state) => state.signOut)

  return (
    <div className="min-h-screen">
      <header className="sticky top-0 z-30 border-b border-[var(--color-border)] bg-[rgba(250,250,247,0.82)] backdrop-blur-xl">
        <div className="mx-auto flex w-full max-w-7xl flex-col gap-4 px-4 py-4 sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:px-8">
          <div className="flex items-center justify-between gap-4">
            <NavLink to="/" className="flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[var(--color-foreground)] text-lg font-bold text-white">
                AC
              </div>
              <div>
                <p className="font-display text-lg font-semibold text-[var(--color-foreground)]">
                  Atlas Commerce
                </p>
                <p className="text-sm text-[var(--color-muted)]">
                  Buy better. Faster checkout. Clean experience.
                </p>
              </div>
            </NavLink>
            <NavLink
              to="/cart"
              className="inline-flex items-center rounded-full border border-[var(--color-border)] bg-white px-4 py-2 text-sm font-semibold text-[var(--color-foreground)] lg:hidden"
            >
              Cart ({itemCount})
            </NavLink>
          </div>

          <nav className="flex flex-wrap items-center gap-2">
            {navItems.map((item) => (
              <NavLink key={item.to} to={item.to} className={navLinkClass}>
                {item.label}
              </NavLink>
            ))}
            {user ? (
              <NavLink
                to={user.role === 'admin' ? '/admin' : '/dashboard'}
                className={navLinkClass}
              >
                {user.role === 'admin' ? 'Admin' : 'Dashboard'}
              </NavLink>
            ) : null}
          </nav>

          <div className="hidden items-center gap-3 lg:flex">
            <NavLink
              to="/cart"
              className="inline-flex items-center rounded-full border border-[var(--color-border)] bg-white px-4 py-2 text-sm font-semibold text-[var(--color-foreground)]"
            >
              Cart ({itemCount})
            </NavLink>
            {user ? (
              <>
                <div className="text-right">
                  <p className="text-sm font-semibold text-[var(--color-foreground)]">
                    {user.name}
                  </p>
                  <p className="text-xs uppercase tracking-[0.2em] text-[var(--color-muted)]">
                    {user.role}
                  </p>
                </div>
                <button
                  type="button"
                  onClick={signOut}
                  className="inline-flex items-center rounded-full bg-[var(--color-foreground)] px-4 py-2 text-sm font-semibold text-white transition hover:bg-[var(--color-accent)]"
                >
                  Sign out
                </button>
              </>
            ) : (
              <>
                <NavLink
                  to="/login"
                  className="inline-flex items-center rounded-full px-4 py-2 text-sm font-semibold text-[var(--color-foreground)] transition hover:text-[var(--color-accent)]"
                >
                  Login
                </NavLink>
                <NavLink
                  to="/register"
                  className="inline-flex items-center rounded-full bg-[var(--color-foreground)] px-4 py-2 text-sm font-semibold text-white transition hover:bg-[var(--color-accent)]"
                >
                  Create account
                </NavLink>
              </>
            )}
          </div>
        </div>
      </header>

      <main>
        <Outlet />
      </main>

      <footer className="border-t border-[var(--color-border)] bg-[rgba(255,255,255,0.65)]">
        <div className="mx-auto grid w-full max-w-7xl gap-8 px-4 py-12 sm:px-6 lg:grid-cols-[1.4fr_1fr_1fr_1fr] lg:px-8">
          <div className="space-y-4">
            <p className="font-display text-2xl font-semibold text-[var(--color-foreground)]">
              Atlas Commerce
            </p>
            <p className="max-w-sm text-sm leading-7 text-[var(--color-muted)]">
              A modern storefront prototype inspired by premium lifestyle brands,
              tuned for faster browsing, cleaner product discovery, and checkout
              that feels effortless.
            </p>
          </div>
          <div>
            <p className="font-display text-lg font-semibold text-[var(--color-foreground)]">
              Shop
            </p>
            <div className="mt-4 space-y-3 text-sm text-[var(--color-muted)]">
              <NavLink to="/shop">All products</NavLink>
              <NavLink to="/shop?category=Footwear">Footwear</NavLink>
              <NavLink to="/shop?category=Apparel">Apparel</NavLink>
            </div>
          </div>
          <div>
            <p className="font-display text-lg font-semibold text-[var(--color-foreground)]">
              Account
            </p>
            <div className="mt-4 space-y-3 text-sm text-[var(--color-muted)]">
              <NavLink to="/dashboard">Dashboard</NavLink>
              <NavLink to="/checkout">Checkout</NavLink>
              <NavLink to="/admin">Admin preview</NavLink>
            </div>
          </div>
          <div>
            <p className="font-display text-lg font-semibold text-[var(--color-foreground)]">
              Contact
            </p>
            <div className="mt-4 space-y-3 text-sm text-[var(--color-muted)]">
              <p>hello@atlascommerce.co</p>
              <p>+254 700 123 456</p>
              <p>Nairobi, Kenya</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
