import Seo from '../components/Seo'
import { Ledger, CloseBand } from '../components/Blocks'
import { experience, education, certifications, skills, site } from '../data/site'

export default function About() {
  return (
    <>
      <Seo
        title="About | Jake Tay"
        description="Jake Tay: data operations team lead and technical support at Construction Monitor, BSc Software Engineering from Coventry University, Google-certified in data analytics and tech support."
        path="/about"
      />

      <section className="page-hero about-hero" data-enter>
        <div className="wrap about-grid">
          <div>
            <h1>About Jake Tay, IT and operations lead in Accra</h1>
            <p className="lead">
              I started at Construction Monitor entering 1,000+ permit records a week. Today I lead the data operations team there,
              and I’m the person staff call when a laptop, printer or Wi‑Fi connection stops working.
            </p>
            <p>
              Outside that role I build web apps, edit video and help small teams get their admin and tools in order.
              I have a BSc in Software Engineering from Coventry University and I’m studying IT Systems Administration at Ensign College.
            </p>
            <div className="btn-row">
              <a className="btn btn-primary" href={site.cv} download>Download my CV</a>
              <a className="btn btn-secondary" href={site.linkedin} target="_blank" rel="noopener noreferrer">View LinkedIn</a>
            </div>
          </div>
          <figure className="portrait portrait-sm">
            <img src="/images/jake-tay-portrait.jpg" alt="Portrait of Jake Tay" width="853" height="1280" />
          </figure>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <h2>Work history</h2>
          <Ledger rows={experience} />
        </div>
      </section>

      <section className="section section-alt">
        <div className="wrap">
          <h2>Skills by area</h2>
          <div className="grid-4">
            {skills.map((g) => (
              <div className="skill-group" key={g.group}>
                <h3>{g.group}</h3>
                <ul>{g.items.map((i) => <li key={i}>{i}</li>)}</ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="wrap split">
          <div>
            <h2>Education</h2>
            <ul className="edu-list">
              {education.map((e) => (
                <li key={e.title}>
                  <strong>{e.title}</strong>
                  <span>{e.place}, {e.years}</span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2>Google certificates</h2>
            <ul className="cert-list">
              {certifications.map((c) => (
                <li key={c.title}><span>{c.title}</span><span className="cert-year">{c.year}</span></li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <CloseBand />
    </>
  )
}
