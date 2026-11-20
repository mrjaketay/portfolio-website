import Seo from '../components/Seo'
import { PageHero, ProjectCard, VideoCard, CloseBand } from '../components/Blocks'
import { projects, videos, site } from '../data/site'

export default function Work() {
  return (
    <>
      <Seo
        title="Work | Jake Tay"
        description="Web apps, AI evaluation sets, websites and video edits by Jake Tay. Live links and code on GitHub."
        path="/portfolio"
      />
      <PageHero
        title="Apps, evaluation sets, websites and video"
        lead="Real projects with live links or the code behind them. Most of it is on my GitHub."
      >
        <div className="btn-row">
          <a className="btn btn-secondary" href={site.github} target="_blank" rel="noopener noreferrer">Open my GitHub</a>
        </div>
      </PageHero>

      <section className="section">
        <div className="wrap">
          <h2 className="sr-only">Software projects</h2>
          <div className="grid-2 project-grid">
            {[...projects].sort((a, b) => (a.kind === 'Collaboration') - (b.kind === 'Collaboration')).map((p, i) => <ProjectCard key={p.id} project={p} index={i % 2} />)}
          </div>
        </div>
      </section>

      <section className="section section-alt">
        <div className="wrap video-split">
          <div>
            <h2>Short-form video for Tesano Campus Institute</h2>
            <p className="lead">Vertical edits for the school’s TikTok: tight cuts, readable captions and clean audio.</p>
            <p>I also edit reels and full episodes for podcasts and studio discussion shows in DaVinci Resolve.</p>
          </div>
          <div className="video-pair">
            {videos.map((v, i) => <VideoCard key={v.id} video={v} index={i} />)}
          </div>
        </div>
      </section>

      <CloseBand title="Want something like this built or edited?" />
    </>
  )
}
