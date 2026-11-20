import { useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import Seo from '../components/Seo'
import { PageHero } from '../components/Blocks'
import { services, site } from '../data/site'

const emailOk = (v) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v)

export default function Contact() {
  const [params] = useSearchParams()
  const preset = services.some((s) => s.id === params.get('topic')) ? params.get('topic') : ''
  const [form, setForm] = useState({ name: '', email: '', topic: preset, message: '', sample: false })
  const [errors, setErrors] = useState({})
  const [opened, setOpened] = useState(false)

  const set = (k) => (e) => setForm({ ...form, [k]: e.target.type === 'checkbox' ? e.target.checked : e.target.value })

  // no backend, so this builds a mailto with everything filled in
  const submit = (e) => {
    e.preventDefault()
    const next = {}
    if (!form.name.trim()) next.name = 'Add your name.'
    if (!emailOk(form.email)) next.email = 'Add an email address I can reply to.'
    if (form.message.trim().length < 10) next.message = 'Add a few words about what you need.'
    setErrors(next)
    if (Object.keys(next).length) return

    const topic = services.find((s) => s.id === form.topic)?.title || 'General enquiry'
    const subject = `${topic}: ${form.name}`
    const body = [
      form.message,
      '',
      `Name: ${form.name}`,
      `Email: ${form.email}`,
      form.sample ? 'I’d like a free sample task first.' : '',
    ].filter(Boolean).join('\n')
    window.location.href = `mailto:${site.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
    setOpened(true)
  }

  return (
    <>
      <Seo
        title="Contact | Jake Tay"
        description="Get in touch with Jake Tay for remote IT support, data work, virtual assistance, websites or video editing. Replies within 24 hours."
        path="/contact"
      />
      <PageHero
        title="Contact Jake about your project or problem"
        lead="Tell me what’s broken, slow or unfinished. I reply within 24 hours with a plan, a time and a price."
      />

      <section className="section contact-section">
        <div className="wrap contact-grid">
          <form className="card contact-form" onSubmit={submit} noValidate>
            <div className="field">
              <label htmlFor="c-name">Your name</label>
              <input id="c-name" type="text" autoComplete="name" value={form.name} onChange={set('name')} aria-invalid={!!errors.name} aria-describedby={errors.name ? 'c-name-err' : undefined} />
              {errors.name && <p className="field-error" id="c-name-err">{errors.name}</p>}
            </div>
            <div className="field">
              <label htmlFor="c-email">Your email</label>
              <input id="c-email" type="email" autoComplete="email" value={form.email} onChange={set('email')} aria-invalid={!!errors.email} aria-describedby={errors.email ? 'c-email-err' : undefined} />
              {errors.email && <p className="field-error" id="c-email-err">{errors.email}</p>}
            </div>
            <div className="field">
              <label htmlFor="c-topic">What do you need help with?</label>
              <select id="c-topic" value={form.topic} onChange={set('topic')}>
                <option value="">Something else</option>
                {services.map((s) => <option key={s.id} value={s.id}>{s.title}</option>)}
              </select>
            </div>
            <div className="field">
              <label htmlFor="c-msg">What’s going on?</label>
              <textarea id="c-msg" rows="6" value={form.message} onChange={set('message')} aria-invalid={!!errors.message} aria-describedby={errors.message ? 'c-msg-err' : undefined} />
              {errors.message && <p className="field-error" id="c-msg-err">{errors.message}</p>}
            </div>
            <label className="check">
              <input type="checkbox" checked={form.sample} onChange={set('sample')} />
              <span>I’d like a free sample task before we agree on the full job</span>
            </label>
            <button className="btn btn-primary btn-block" type="submit">Write the email</button>
            <p className="form-note" role="status">
              {opened
                ? 'Your email app should be open with the message filled in. Press send there to reach me.'
                : 'This opens your email app with everything filled in, ready to send.'}
            </p>
          </form>

          <aside className="contact-side">
            <h2>Other ways to reach me</h2>
            <ul className="contact-list">
              <li><span>Email</span><a className="text-link strong" href={`mailto:${site.email}`}>{site.email}</a></li>
              <li><span>LinkedIn</span><a className="text-link strong" href={site.linkedin} target="_blank" rel="noopener noreferrer">linkedin.com/in/mrjaketay</a></li>
              <li><span>GitHub</span><a className="text-link strong" href={site.github} target="_blank" rel="noopener noreferrer">github.com/mrjaketay</a></li>
              <li><span>Based in</span><strong>{site.location}, working remotely worldwide</strong></li>
            </ul>
            <p>For anything urgent, put “Urgent” at the start of the subject line.</p>
          </aside>
        </div>
      </section>
    </>
  )
}
