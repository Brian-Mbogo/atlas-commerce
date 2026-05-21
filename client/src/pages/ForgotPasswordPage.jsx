// Forgot password page is scaffolded now and ready for backend email flow later.
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { PageHero } from '../components/common/PageHero'

export function ForgotPasswordPage() {
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)

  function handleSubmit(event) {
    event.preventDefault()
    setSubmitted(true)
  }

  return (
    <div className="pb-16">
      <PageHero
        eyebrow="Password recovery"
        title="Reset access without friction."
        description="The final version will call the backend reset flow; this scaffold already gives the page, messaging, and form structure."
      />

      <section className="mx-auto w-full max-w-xl px-4 sm:px-6 lg:px-8">
        <article className="rounded-[2rem] border border-[var(--color-border)] bg-white p-6 shadow-[0_20px_50px_rgba(17,24,39,0.05)] sm:p-8">
          <form onSubmit={handleSubmit} className="space-y-5">
            <label className="block space-y-2 text-sm font-medium text-[var(--color-foreground)]">
              <span>Email address</span>
              <input
                type="email"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                placeholder="hello@example.com"
                className="w-full rounded-[1.25rem] border border-[var(--color-border)] bg-[rgba(250,250,247,0.9)] px-4 py-3 outline-none transition focus:border-[var(--color-accent)]"
                required
              />
            </label>
            <button
              type="submit"
              className="inline-flex w-full items-center justify-center rounded-full bg-[var(--color-foreground)] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[var(--color-accent)]"
            >
              Send reset link
            </button>
          </form>

          {submitted ? (
            <p className="mt-5 rounded-[1.25rem] bg-[rgba(217,119,6,0.08)] px-4 py-3 text-sm leading-7 text-[var(--color-accent)]">
              Reset instructions would be sent to {email}. The backend email flow
              is the next implementation slice.
            </p>
          ) : null}

          <p className="mt-6 text-sm text-[var(--color-muted)]">
            Remembered your password?{' '}
            <Link to="/login" className="font-semibold text-[var(--color-foreground)]">
              Return to login
            </Link>
          </p>
        </article>
      </section>
    </div>
  )
}
