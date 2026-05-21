// Register page creates a demo user session and forwards to the dashboard.
import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { PageHero } from '../components/common/PageHero'
import { useSessionStore } from '../store/useSessionStore'

export function RegisterPage() {
  const navigate = useNavigate()
  const register = useSessionStore((state) => state.register)
  const [formData, setFormData] = useState({
    name: 'Atlas Customer',
    email: 'new@atlas.com',
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
    register(formData)
    navigate('/dashboard')
  }

  return (
    <div className="pb-16">
      <PageHero
        eyebrow="Register"
        title="Create an account in one clean step."
        description="This is the frontend scaffold for JWT signup, wishlist sync, order history, and profile management."
      />

      <section className="mx-auto w-full max-w-xl px-4 sm:px-6 lg:px-8">
        <article className="rounded-[2rem] border border-[var(--color-border)] bg-white p-6 shadow-[0_20px_50px_rgba(17,24,39,0.05)] sm:p-8">
          <form onSubmit={handleSubmit} className="space-y-5">
            {[
              { label: 'Full name', name: 'name', type: 'text' },
              { label: 'Email address', name: 'email', type: 'email' },
              { label: 'Password', name: 'password', type: 'password' },
            ].map((field) => (
              <label
                key={field.name}
                className="block space-y-2 text-sm font-medium text-[var(--color-foreground)]"
              >
                <span>{field.label}</span>
                <input
                  type={field.type}
                  name={field.name}
                  value={formData[field.name]}
                  onChange={handleChange}
                  className="w-full rounded-[1.25rem] border border-[var(--color-border)] bg-[rgba(250,250,247,0.9)] px-4 py-3 outline-none transition focus:border-[var(--color-accent)]"
                  required
                />
              </label>
            ))}
            <button
              type="submit"
              className="inline-flex w-full items-center justify-center rounded-full bg-[var(--color-foreground)] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[var(--color-accent)]"
            >
              Create account
            </button>
          </form>
          <p className="mt-6 text-sm text-[var(--color-muted)]">
            Already have an account?{' '}
            <Link to="/login" className="font-semibold text-[var(--color-foreground)]">
              Sign in
            </Link>
          </p>
        </article>
      </section>
    </div>
  )
}
