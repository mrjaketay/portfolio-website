import { useState } from 'react'
import { Link } from 'react-router-dom'
import ToolIcon, { ToolChip } from './ToolIcon'
import { siTiktok } from 'simple-icons'
import { site } from '../data/site'
import { SplitWords } from './Motion'

// top of inner pages
export function PageHero({ title, lead, children }) {
  return (
    <section className="page-hero" data-enter>
      <div className="wrap">
        <SplitWords text={title} />
        {lead && <p className="lead">{lead}</p>}
        {children}
      </div>
    </section>
  )
}

export function ServiceCard({ service, detailed = false, index = 0 }) {
  const showPoints = detailed || service.primary
  return (
    <article
      className={`card service-card${service.primary ? ' is-primary' : ''}`}
      id={detailed ? service.id : undefined}
      data-reveal
      style={{ '--i': index }}
    >
      <div className="icon-row" aria-hidden="true">
        {service.icons.map((n) => <ToolIcon key={n} name={n} size={24} />)}
      </div>
      <h3>{service.title}</h3>
      <p>{detailed ? service.long : service.short}</p>
      {showPoints && (
        <ul className="tick-list">
          {service.points.map((p) => <li key={p}>{p}</li>)}
        </ul>
      )}
      {detailed ? (
        <Link className="btn btn-secondary btn-sm" to={`/contact?topic=${service.id}`}>Ask about {service.title.toLowerCase().replace(/^it /, 'IT ').replace(/ ai /, ' AI ')}</Link>
      ) : (
        <Link className="card-link" to={`/services#${service.id}`}>
          <span className="sr-only">More on {service.title}</span>
        </Link>
      )}
    </article>
  )
}

// the project's real flow, left to right, with a pulse running along it
export function Flow({ steps }) {
  return (
    <div className="flow" aria-hidden="true" style={{ '--n': steps.length - 1 }}>
      {steps.map((s, i) => (
        <div className="flow-step" key={s} style={{ '--k': i }}>
          <span className="flow-node">{s}</span>
          {i < steps.length - 1 && <span className="flow-line"><span className="flow-pulse" /></span>}
        </div>
      ))}
    </div>
  )
}

export function ProjectCard({ project, index = 0 }) {
  return (
    <article className="card project-card" data-reveal style={{ '--i': index }}>
      <div className="project-visual">
        <span className="project-kind">{project.kind}</span>
        <Flow steps={project.flow} />
      </div>
      <div className="project-body">
        <h3>{project.title}</h3>
        <p>{project.text}</p>
        <div className="chip-row">
          {project.stack.map((n) => <ToolChip key={n} name={n} />)}
        </div>
        <div className="link-row">
          {project.caseStudy && <Link className="text-link strong" to={project.caseStudy}>Read the case study</Link>}
          {project.links.map((l) => (
            <a key={l.href} className="text-link strong" href={l.href} target="_blank" rel="noopener noreferrer">{l.label}</a>
          ))}
        </div>
      </div>
    </article>
  )
}

// tiktok player only loads once someone presses play
export function VideoCard({ video, index }) {
  const [playing, setPlaying] = useState(false)
  return (
    <div className="video-card" data-reveal style={{ '--i': index }}>
      {playing ? (
        <iframe
          src={`https://www.tiktok.com/player/v1/${video.id}?autoplay=1&music_info=0&description=0&rel=0`}
          title={`${video.title}, ${video.client}`}
          allow="autoplay; fullscreen; encrypted-media; picture-in-picture"
          allowFullScreen
        />
      ) : (
        <button type="button" className="video-poster" onClick={() => setPlaying(true)} aria-label={`Play ${video.title}, ${video.client}`}>
          <span className="video-top">
            <svg width="22" height="22" viewBox="0 0 24 24" aria-hidden="true"><path d={siTiktok.path} fill="#fff" /></svg>
            <span className="video-client">{video.title}</span>
          </span>
          <span className="play-ring" aria-hidden="true"><span className="play-tri" /></span>
          <span className="video-meta">{video.client}</span>
        </button>
      )}
      <a className="text-link" href={video.href} target="_blank" rel="noopener noreferrer">Watch on TikTok</a>
    </div>
  )
}

function Result({ parts }) {
  return parts.map((p, i) => (typeof p === 'string' ? <span key={i}>{p}</span> : <mark key={i}>{p.mark}</mark>))
}

export function Ledger({ rows }) {
  return (
    <div className="ledger" role="table" aria-label="Work history">
      <div className="ledger-row ledger-head" role="row">
        <span role="columnheader">Years</span>
        <span role="columnheader">Role</span>
        <span role="columnheader">What came of it</span>
      </div>
      {rows.map((r) => (
        <div className="ledger-row" role="row" key={r.role + r.years} data-reveal>
          <span className="ledger-years" role="cell">{r.years}</span>
          <span className="ledger-role" role="cell"><strong>{r.role}</strong><span>{r.org}</span></span>
          <span className="ledger-result" role="cell"><Result parts={r.result} /></span>
        </div>
      ))}
    </div>
  )
}

export function CloseBand({ title = 'Got something broken, slow or half-finished?', text = 'Send me a few lines about it. You’ll hear back within 24 hours with a plan and a time.' }) {
  return (
    <section className="close-band">
      <div className="wrap close-inner" data-reveal>
        <h2>{title}</h2>
        <p>{text}</p>
        <div className="btn-row">
          <a className="btn btn-marker" href={`mailto:${site.email}`}>Email me</a>
          <Link className="btn btn-ghost-light" to="/contact">Use the contact form</Link>
        </div>
      </div>
    </section>
  )
}
