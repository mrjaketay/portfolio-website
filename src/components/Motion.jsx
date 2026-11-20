import { Fragment, useEffect, useRef, useState } from 'react'
import { useLocation } from 'react-router-dom'

const calm = () => window.matchMedia('(prefers-reduced-motion: reduce)').matches

// anything with data-reveal fades up once when it scrolls into view
export function RevealOnScroll() {
  const { pathname } = useLocation()
  useEffect(() => {
    const els = [...document.querySelectorAll('[data-reveal]:not(.is-in)')]
    if (calm() || !('IntersectionObserver' in window)) {
      els.forEach((el) => el.classList.add('is-in'))
      return
    }
    document.documentElement.classList.add('motion-on')
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => {
        if (e.isIntersecting) {
          e.target.classList.add('is-in')
          io.unobserve(e.target)
        }
      }),
      { rootMargin: '0px 0px -8% 0px', threshold: 0.12 },
    )
    els.forEach((el) => io.observe(el))
    return () => io.disconnect()
  }, [pathname])
  return null
}

// headline that rises in word by word on load
export function SplitWords({ text, as: Tag = 'h1', className }) {
  const words = text.split(' ')
  return (
    <Tag className={`words ${className || ''}`} aria-label={text}>
      {words.map((w, i) => (
        <Fragment key={i}>
          <span className="split-word" aria-hidden="true" style={{ '--w': i }}><span>{w}</span></span>
          {i < words.length - 1 ? ' ' : null}
        </Fragment>
      ))}
    </Tag>
  )
}

// counts up to the number once it's on screen
export function CountUp({ to, suffix = '', duration = 1400 }) {
  const ref = useRef(null)
  const [val, setVal] = useState(calm() ? to : 0)
  useEffect(() => {
    if (calm()) return
    const el = ref.current
    let raf
    const io = new IntersectionObserver(([e]) => {
      if (!e.isIntersecting) return
      io.disconnect()
      const start = performance.now()
      const tick = (now) => {
        const t = Math.min(1, (now - start) / duration)
        const eased = 1 - Math.pow(1 - t, 3)
        setVal(Math.round(to * eased))
        if (t < 1) raf = requestAnimationFrame(tick)
      }
      raf = requestAnimationFrame(tick)
    })
    io.observe(el)
    return () => { io.disconnect(); cancelAnimationFrame(raf) }
  }, [to, duration])
  return <span ref={ref} aria-label={`${to.toLocaleString()}${suffix}`}><span aria-hidden="true">{val.toLocaleString()}{suffix}</span></span>
}

// slow tool strip, stops while hovered or focused
export function Marquee({ rows, render }) {
  return (
    <div className="marquee">
      {rows.map((row, r) => (
        <div className={`marquee-row${r % 2 ? ' is-reverse' : ''}`} key={r}>
          <div className="marquee-track">
            <ul className="marquee-set">{row.map((item) => <li key={item}>{render(item)}</li>)}</ul>
            <ul className="marquee-set" aria-hidden="true">{row.map((item) => <li key={item}>{render(item)}</li>)}</ul>
          </div>
        </div>
      ))}
    </div>
  )
}

// header gets a shadow once the page has scrolled
export function useScrolled(offset = 8) {
  const [scrolled, setScrolled] = useState(false)
  useEffect(() => {
    const on = () => setScrolled(window.scrollY > offset)
    on()
    window.addEventListener('scroll', on, { passive: true })
    return () => window.removeEventListener('scroll', on)
  }, [offset])
  return scrolled
}
