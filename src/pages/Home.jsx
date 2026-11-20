import { Link } from 'react-router-dom'
import Seo from '../components/Seo'
import { ServiceCard, ProjectCard, VideoCard, Ledger, CloseBand } from '../components/Blocks'
import { ToolChip } from '../components/ToolIcon'
import { SplitWords, CountUp, Marquee } from '../components/Motion'
import { site, services, projects, videos, experience, tools } from '../data/site'

const main = services.filter((s) => s.primary)
const extra = services.filter((s) => !s.primary)
const half = Math.ceil(tools.length / 2)

export default function Home() {
  return (
    <>
      <Seo
        title="Jake Tay | IT Support, Data Operations and Virtual Assistance"
        description="Jake Tay is an IT support and data operations lead in Accra, Ghana. Remote tech support, data clean-up, virtual assistance, websites and video editing for teams anywhere."
        path="/"
      />

      <section className="hero" data-enter>
        <div className="wrap hero-grid">
          <div className="hero-copy">
            <p className="hero-intro">Jake Tay, {site.location}</p>
            <SplitWords text="IT support, data operations and remote help for teams anywhere." />
            <p className="lead">
              I lead a 10-person data operations team at Construction Monitor and I’m the one staff call when a laptop or the Wi‑Fi stops working.
              I take on the same kind of work for other teams, plus websites and video.
            </p>
            <div className="btn-row">
              <a className="btn btn-primary" href={`mailto:${site.email}`}>Email me</a>
              <Link className="btn btn-secondary" to="/portfolio">See my work</Link>
            </div>
            <ul className="hero-facts">
              <li><strong><CountUp to={5} suffix="+ years" /></strong> in support and data operations</li>
              <li><strong><CountUp to={1000} suffix="+" /></strong> reports a month from my team</li>
              <li><strong><CountUp to={24} suffix=" hours" /></strong> to hear back from me</li>
            </ul>
          </div>

          <div className="hero-visual">
            <figure className="portrait">
              <img src="/images/jake-tay-portrait.jpg" alt="Jake Tay in a white shirt and striped tie, leaning against a wall under a lamp" width="853" height="1280" fetchpriority="high" />
            </figure>
            <div className="ticket" aria-label="Recent result">
              <span className="ticket-status">Resolved</span>
              <p>70+ delayed legacy tasks cleared. Turnaround down 25%.</p>
              <span className="ticket-bar" aria-hidden="true"><span /></span>
            </div>
          </div>
        </div>
      </section>

      <section className="section" id="services">
        <div className="wrap">
          <div className="section-head" data-reveal>
            <h2>Support and data work first, with more when you need it</h2>
            <Link className="text-link strong" to="/services">All services</Link>
          </div>
          <div className="grid-2 primary-grid">
            {main.map((s, i) => <ServiceCard key={s.id} service={s} index={i} />)}
          </div>
          <div className="grid-4 extra-grid">
            {extra.map((s, i) => <ServiceCard key={s.id} service={s} index={i} />)}
          </div>
        </div>
      </section>

      <section className="section section-alt">
        <div className="wrap">
          <div className="section-head" data-reveal>
            <h2>Things I’ve built</h2>
            <Link className="text-link strong" to="/portfolio">All work</Link>
          </div>
          <div className="grid-2 project-grid">
            {projects.slice(0, 2).map((p, i) => <ProjectCard key={p.id} project={p} index={i} />)}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="wrap video-split">
          <div data-reveal>
            <h2>Video edits for TikTok</h2>
            <p className="lead">Short vertical edits for Tesano Campus Institute: an event promo and a graduation night recap. Press play to watch them here.</p>
            <p>I also cut reels and full episodes for podcasts and studio shows in DaVinci Resolve.</p>
            <Link className="btn btn-secondary" to="/services#video-editing">Ask about video editing</Link>
          </div>
          <div className="video-pair">
            {videos.map((v, i) => <VideoCard key={v.id} video={v} index={i} />)}
          </div>
        </div>
      </section>

      <section className="section section-alt">
        <div className="wrap">
          <div className="section-head" data-reveal>
            <h2>Where I’ve done this work</h2>
            <Link className="text-link strong" to="/about">Full background</Link>
          </div>
          <Ledger rows={experience.slice(0, 3)} />
        </div>
      </section>

      <section className="section tools-section">
        <div className="wrap" data-reveal>
          <h2>Tools I use every week</h2>
        </div>
        <Marquee rows={[tools.slice(0, half), tools.slice(half)]} render={(t) => <ToolChip name={t} />} />
      </section>

      <CloseBand />
    </>
  )
}
