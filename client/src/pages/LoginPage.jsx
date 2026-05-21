// Login page simulates authentication and unlocks protected routes in the demo.
import { useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { PageHero } from '../components/common/PageHero'
import { useSessionStore } from '../store/useSessionStore'

export function LoginPage() {
  const navigate = useNavigate()
  const location = useLocation()
  const signIn = useSessionStore((state) => state.signIn)

  const [formData, setFormData] = useState({
    email: 'shopper@atlas.com',
    password: 'password123',
  })

  function handleChange(event) {
    setFormData((current) => ({
      ...current,
      [event.target.name]: event.target.value,
    }))
  }

  function handleSubmit(event) {
    event.preventDefault()

    // Emails containing "admin" are treated as admin users for preview purposes.
    const role = formData.email.toLowerCase().includes('admin') ? 'admin' : 'user'

    signIn({
      name: role === 'admin' ? 'Atlas Admin' : 'Atlas Shopper',
      email: formData.email,
      role,
    })

    const destination = location.state?.from?.pathname || (role === 'admin' ? '/admin' : '/dashboard')
    navigate(destination, { replace: true })
  }

  return (
    <div className="pb-16">
      <PageHero
        eyebrow="Login"
        title="Welcome back to Atlas Commerce."
        description="This demo login already powers protected routes. Use an email containing “admin” to preview the admin dashboard flow."
      />

      <section className="mx-auto w-full max-w-xl px-4 sm:px-6 lg:px-8">
        <article className="rounded-[2rem] border border-[var(--color-border)] bg-white p-6 shadow-[0_20px_50px_rgba(17,24,39,0.05)] sm:p-8">
          <form onSubmit={handleSubmit} className="space-y-5">
            <label className="block space-y-2 text-sm font-medium text-[var(--color-foreground)]">
              <span>Email address</span>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full rounded-[1.25rem] border border-[var(--color-border)] bg-[rgba(250,250,247,0.9)] px-4 py-3 outline-none transition focus:border-[var(--color-accent)]"
                required
              />
            </label>
            <label className="block space-y-2 text-sm font-medium text-[var(--color-foreground)]">
              <span>Password</span>
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                className="w-full rounded-[1.25rem] border border-[var(--color-border)] bg-[rgba(250,250,247,0.9)] px-4 py-3 outline-none transition focus:border-[var(--color-accent)]"
                required
              />
            </label>
            <button
              type="submit"
              className="inline-flex w-full items-center justify-center rounded-full bg-[var(--color-foreground)] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[var(--color-accent)]"
            >
              Login with JWT flow
            </button>
          </form>

          <div className="mt-4 grid gap-3 sm:grid-cols-2">
            <button
              type="button"
              className="rounded-full border border-[var(--color-border)] px-4 py-3 text-sm font-semibold text-[var(--color-foreground)] transition hover:border-[var(--color-accent)] hover:text-[var(--color-accent)]"
            >
              Continue with Google
            </button>
            <Link
              to="/forgot-password"
              className="inline-flex items-center justify-center rounded-full border border-[var(--color-border)] px-4 py-3 text-sm font-semibold text-[var(--color-foreground)] transition hover:border-[var(--color-accent)] hover:text-[var(--color-accent)]"
            >
              Forgot password
            </Link>
          </div>

          <p className="mt-6 text-sm text-[var(--color-muted)]">
            New here?{' '}
            <Link to="/register" className="font-semibold text-[var(--color-foreground)]">
              Create your account
            </Link>
          </p>
        </article>
      </section>
    </div>
  )
}
