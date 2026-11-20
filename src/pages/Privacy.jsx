import { Link } from 'react-router-dom'
import Seo from '../components/Seo'
import { site } from '../data/site'

export default function Privacy() {
  return (
    <>
      <Seo title="Privacy | Jake Tay" description="How mrjaketay.com handles your information when you visit or get in touch." path="/privacy" />
      <section className="page-hero" data-enter>
        <div className="wrap prose">
          <h1>Privacy policy for mrjaketay.com</h1>
          <p className="lead">Last updated: November 2026</p>
        </div>
      </section>
      <section className="section">
        <div className="wrap prose">
          <h2>Who runs this site</h2>
          <p>This site is run by Jake Tay. This page explains what happens to your information when you visit or contact me.</p>
          <h2>When you visit</h2>
          <p>The hosting server keeps standard logs such as IP address, browser type and pages visited, to keep the site working and secure. Nothing is sold or shared for marketing.</p>
          <h2>When you contact me</h2>
          <p>The contact form doesn’t send anything by itself. It opens your own email app. I receive only what you put in that email and use it to reply to you.</p>
          <h2>Videos</h2>
          <p>TikTok videos load only after you press play. TikTok then handles that video under its own privacy policy.</p>
          <h2>Cookies</h2>
          <p>This site sets no advertising or tracking cookies.</p>
          <h2>Your choices</h2>
          <p>You can ask what I hold about you, or ask me to correct or delete it, by emailing <a className="text-link strong" href={`mailto:${site.email}`}>{site.email}</a>.</p>
          <p><Link className="btn btn-secondary" to="/">Back to the home page</Link></p>
        </div>
      </section>
    </>
  )
}
