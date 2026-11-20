import { Link } from 'react-router-dom'
import Seo from '../components/Seo'

export default function NotFound() {
  return (
    <>
      <Seo title="Page not found | Jake Tay" description="This page doesn’t exist or has moved." path="/404" noindex />
      <section className="page-hero not-found" data-enter>
        <div className="wrap">
          <h1>This page doesn’t exist or has moved</h1>
          <p className="lead">The link may be old. Everything is still reachable from the home page.</p>
          <div className="btn-row">
            <Link className="btn btn-primary" to="/">Go to the home page</Link>
            <Link className="btn btn-secondary" to="/contact">Contact Jake</Link>
          </div>
        </div>
      </section>
    </>
  )
}
