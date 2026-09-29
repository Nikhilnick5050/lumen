import { useState, type FormEvent } from 'react'
import Button from '../components/Button'
import { useToast } from '../hooks/useToast'

export default function Contact() {
  const { push } = useToast()
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [errors, setErrors] = useState<Record<string, string>>({})
  const [sending, setSending] = useState(false)

  const validate = () => {
    const e: Record<string, string> = {}
    if (form.name.trim().length < 2) e.name = 'Please enter your name.'
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = 'Please enter a valid email.'
    if (form.message.trim().length < 10) e.message = 'Message must be at least 10 characters.'
    return e
  }

  const onSubmit = (ev: FormEvent) => {
    ev.preventDefault()
    const e = validate()
    setErrors(e)
    if (Object.keys(e).length) return
    setSending(true)
    setTimeout(() => {
      setSending(false)
      setForm({ name: '', email: '', message: '' })
      push('success', 'Message sent! Our team will reply within one business day.')
    }, 900)
  }

  const set = (k: string, v: string) => {
    setForm((f) => ({ ...f, [k]: v }))
    if (errors[k]) setErrors((e) => ({ ...e, [k]: '' }))
  }

  return (
    <section className="section" id="contact">
      <div className="container container--narrow">
        <div className="section-head">
          <span className="eyebrow">Contact</span>
          <h2>Talk to our team</h2>
          <p>Questions about pricing, security, or a custom plan? We're here to help.</p>
        </div>
        <form className="form" onSubmit={onSubmit} noValidate>
          <div className="form__row">
            <div className="field">
              <label htmlFor="name">Name</label>
              <input id="name" type="text" value={form.name} onChange={(e) => set('name', e.target.value)} placeholder="Jane Doe" aria-invalid={!!errors.name} />
              {errors.name && <span className="field__error">{errors.name}</span>}
            </div>
            <div className="field">
              <label htmlFor="email">Email</label>
              <input id="email" type="email" value={form.email} onChange={(e) => set('email', e.target.value)} placeholder="jane@company.com" aria-invalid={!!errors.email} />
              {errors.email && <span className="field__error">{errors.email}</span>}
            </div>
          </div>
          <div className="field">
            <label htmlFor="message">Message</label>
            <textarea id="message" rows={5} value={form.message} onChange={(e) => set('message', e.target.value)} placeholder="Tell us what you need…" aria-invalid={!!errors.message} />
            {errors.message && <span className="field__error">{errors.message}</span>}
          </div>
          <Button type="submit" size="lg" loading={sending} fullWidth>Send message</Button>
        </form>
      </div>
    </section>
  )
}