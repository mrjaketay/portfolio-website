import { Link } from 'react-router-dom'
import Seo from '../components/Seo'
import { Flow, CloseBand } from '../components/Blocks'
import { ToolChip } from '../components/ToolIcon'
import { SplitWords } from '../components/Motion'
import { leagueCase as c, projects } from '../data/site'

const project = projects.find((p) => p.id === 'league-table')

export default function CaseStudy() {
  return (
    <>
      <Seo
        title="The League Table case study | Jake Tay"
        description="How Jake Tay built a web app that runs a 12-manager Fantasy Premier League mini-league from the official FPL API: awards, head-to-head and quarterly challenges."
        path="/portfolio/league-table"
      />

      <section className="page-hero case-hero" data-enter>
        <div className="wrap">
          <Link className="text-link back-link" to="/portfolio">Back to all work</Link>
          <SplitWords text={c.title} />
          <p className="lead">{c.lead}</p>
          <dl className="case-facts">
            {c.facts.map((f) => (
              <div key={f.label}><dt>{f.label}</dt><dd>{f.value}</dd></div>
            ))}
          </dl>
          <div className="btn-row">
            {project.links.map((l, i) => (
              <a key={l.href} className={`btn ${i === 0 ? 'btn-primary' : 'btn-secondary'}`} href={l.href} target="_blank" rel="noopener noreferrer">{l.label}</a>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="wrap split">
          <h2 data-reveal>The problem</h2>
          <div className="case-text" data-reveal>
            {c.problem.map((p) => <p key={p}>{p}</p>)}
          </div>
        </div>
      </section>

      <section className="section section-alt">
        <div className="wrap">
          <h2 data-reveal>How the data moves</h2>
          <div className="case-flow" data-reveal>
            <Flow steps={project.flow} />
          </div>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <h2 data-reveal>What I built</h2>
          <div className="grid-2 case-grid">
            {c.built.map((b, i) => (
              <article className="card case-card" key={b.title} data-reveal style={{ '--i': i % 2 }}>
                <h3>{b.title}</h3>
                <p>{b.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-alt">
        <div className="wrap split">
          <div data-reveal>
            <h2>Built with</h2>
            <div className="chip-row case-stack">
              {c.stack.map((n) => <ToolChip key={n} name={n} />)}
            </div>
          </div>
          <div data-reveal>
            <h2>The result</h2>
            <p className="lead case-result">{c.result}</p>
          </div>
        </div>
      </section>

      <CloseBand title="Need an app that runs something you now do by hand?" />
    </>
  )
}
