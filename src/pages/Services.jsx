import Seo from '../components/Seo'
import { PageHero, ServiceCard, CloseBand } from '../components/Blocks'
import { services, requests, steps } from '../data/site'

export default function Services() {
  return (
    <>
      <Seo
        title="Services | Jake Tay"
        description="Remote IT support, data operations, virtual assistance, websites, video editing and automation from Jake Tay in Accra, Ghana."
        path="/services"
      />
      <PageHero
        title="Services for teams that need things fixed and kept in order"
        lead="Everything here is work I already do week to week, for my employer or for clients. All of it can be done remotely."
      />

      <section className="section">
        <div className="wrap">
          <h2 data-reveal>Main services</h2>
          <div className="grid-2 service-detail-grid">
            {services.filter((s) => s.primary).map((s, i) => <ServiceCard key={s.id} service={s} index={i} detailed />)}
          </div>
          <h2 className="sub-head" data-reveal>Also available</h2>
          <div className="grid-2 service-detail-grid">
            {services.filter((s) => !s.primary).map((s, i) => <ServiceCard key={s.id} service={s} index={i} detailed />)}
          </div>
        </div>
      </section>

      <section className="section section-alt">
        <div className="wrap split">
          <h2 data-reveal>Requests I get often</h2>
          <ul className="request-list">
            {requests.map((r, i) => <li key={r} data-reveal style={{ '--i': i % 2 }}>{r}</li>)}
          </ul>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <h2 data-reveal>How a job runs</h2>
          <ol className="steps">
            {steps.map((s, i) => (
              <li key={s.title} data-reveal style={{ '--i': i }}>
                <h3>{s.title}</h3>
                <p>{s.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <CloseBand />
    </>
  )
}
