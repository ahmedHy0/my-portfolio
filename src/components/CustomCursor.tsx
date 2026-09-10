import { useEffect, useRef } from 'react'

const INTERACTIVE = 'a, button, select, label, [role="button"], .card--interactive'
const TEXT = 'p, h1, h2, h3, h4, h5, h6, span, li, blockquote, figcaption, dt, dd, input, textarea, label'

// Relaxed autoscroll physics: offset from the anchor (px) → target velocity
// (px/frame). The small gain and low cap keep the glide calm; the lerp does
// the easing so speed changes feel smooth rather than immediate.
const SCROLL_GAIN = 0.035
const SCROLL_MAX = 9
const VELOCITY_EASE = 0.08

/**
 * Desktop-only custom cursor with themed variants:
 *  - arrow      — default, glows brighter over interactive elements
 *  - text       — glowing I-beam over selectable text and text fields
 *  - scroll     — middle-click toggles a persistent autoscroll mode; only a
 *                 down or up arrow shows (the site scrolls vertically only),
 *                 the page glides at an eased, relaxed pace, and the mode
 *                 exits on a left click or another middle click. The native
 *                 OS autoscroll overlay is fully suppressed.
 * The follower is decorative: pointer-events never reach it, and it renders
 * nothing on touch or coarse-pointer devices.
 */
export function CustomCursor() {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    // Graceful disable: touch screens and coarse pointers keep the native cursor.
    if (!window.matchMedia('(hover: hover) and (pointer: fine)').matches) return

    document.body.classList.add('custom-cursor')

    let scrollMode: { anchorY: number; velocity: number; targetVelocity: number; raf: number } | null = null
    let lastDirection: 'up' | 'down' = 'down'

    const setState = (state: string) => {
      el.dataset.state = state
      el.classList.add('is-visible')
    }

    const point = (e: MouseEvent) => {
      el.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0)`
    }

    const stopScrollMode = () => {
      if (!scrollMode) return
      cancelAnimationFrame(scrollMode.raf)
      scrollMode = null
    }

    const runScroll = () => {
      if (!scrollMode) return
      scrollMode.velocity += (scrollMode.targetVelocity - scrollMode.velocity) * VELOCITY_EASE
      if (Math.abs(scrollMode.velocity) > 0.05) {
        window.scrollTo({ top: window.scrollY + scrollMode.velocity, behavior: 'instant' })
      }
      scrollMode.raf = requestAnimationFrame(runScroll)
    }

    const onMove = (e: MouseEvent) => {
      point(e)
      if (scrollMode) {
        // Vertical only: horizontal movement is ignored while autoscrolling.
        const offset = e.clientY - scrollMode.anchorY
        scrollMode.targetVelocity = Math.max(-SCROLL_MAX, Math.min(SCROLL_MAX, offset * SCROLL_GAIN))
        const direction = scrollMode.targetVelocity >= 0 ? 'down' : 'up'
        if (direction !== lastDirection) {
          lastDirection = direction
          setState(direction === 'down' ? 'scroll-down' : 'scroll-up')
        }
        return
      }
      const target = e.target instanceof Element ? e.target : null
      if (target?.closest(INTERACTIVE)) {
        setState('pointer')
        el.classList.toggle('is-hover', true)
        return
      }
      el.classList.toggle('is-hover', false)
      if (target?.closest(TEXT)) setState('text')
      else setState('default')
    }

    const onDown = (e: MouseEvent) => {
      if (e.button === 1) {
        // Suppress the native middle-click autoscroll overlay entirely and
        // toggle our persistent mode instead.
        e.preventDefault()
        if (scrollMode) {
          stopScrollMode()
          onMove(e)
          return
        }
        scrollMode = { anchorY: e.clientY, velocity: 0, targetVelocity: 0, raf: 0 }
        lastDirection = 'down'
        setState('scroll-down')
        scrollMode.raf = requestAnimationFrame(runScroll)
        return
      }
      if (e.button === 0 && scrollMode) {
        // A left click exits autoscroll mode (and proceeds as a normal click).
        stopScrollMode()
        onMove(e)
      }
      el.classList.add('is-active')
    }
    const onUp = () => {
      // Middle-button release does NOT exit: autoscroll mode persists until
      // explicitly toggled off. Left-click releases just clear the compress.
      el.classList.remove('is-active')
    }
    const onLeave = () => el.classList.remove('is-visible')
    const onBlur = () => {
      stopScrollMode()
      el.classList.remove('is-active')
    }

    window.addEventListener('mousemove', onMove, { passive: true })
    window.addEventListener('mousedown', onDown)
    window.addEventListener('mouseup', onUp)
    window.addEventListener('blur', onBlur)
    document.documentElement.addEventListener('mouseleave', onLeave)

    return () => {
      stopScrollMode()
      document.body.classList.remove('custom-cursor')
      window.removeEventListener('mousemove', onMove)
      window.removeEventListener('mousedown', onDown)
      window.removeEventListener('mouseup', onUp)
      window.removeEventListener('blur', onBlur)
      document.documentElement.removeEventListener('mouseleave', onLeave)
    }
  }, [])

  return (
    <div ref={ref} className="cursor-follower" aria-hidden="true" data-state="default">
      <div className="cursor-follower__glyph">
        {/* Default / clickable pointer */}
        <svg className="cursor-glyph cursor-glyph--default cursor-glyph--pointer" width="30" height="30" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="cursor-body" x1="4" y1="2" x2="16" y2="20" gradientUnits="userSpaceOnUse">
              <stop offset="0" stopColor="#2a3542" />
              <stop offset="0.55" stopColor="#141c26" />
              <stop offset="1" stopColor="#0a111b" />
            </linearGradient>
          </defs>
          <path
            d="M4.5 2.5 L19.5 11.8 L12.3 13.4 L8.9 20.6 Z"
            fill="url(#cursor-body)"
            stroke="var(--cursor-glow)"
            strokeWidth="1.4"
            strokeLinejoin="round"
          />
        </svg>

        {/* Text / I-beam */}
        <svg className="cursor-glyph cursor-glyph--text" width="30" height="30" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M9 3 H15 M12 3 V21 M9 21 H15"
            stroke="var(--cursor-glow)"
            strokeWidth="1.6"
            strokeLinecap="round"
          />
          <path
            d="M10.6 5.4 V18.6"
            stroke="var(--cursor-glow)"
            strokeWidth="0.9"
            strokeLinecap="round"
            opacity="0.55"
          />
        </svg>

        {/* Autoscroll: single-direction arrows — the site scrolls vertically only */}
        <svg className="cursor-glyph cursor-glyph--scroll-down" width="34" height="34" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="12" cy="12" r="9" fill="rgba(10, 17, 27, 0.85)" stroke="var(--cursor-glow)" strokeWidth="1.1" opacity="0.9" />
          <path
            d="M12 6.5 V16.5 M12 17.5 L8.6 13.8 M12 17.5 L15.4 13.8"
            stroke="var(--cursor-glow)"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        <svg className="cursor-glyph cursor-glyph--scroll-up" width="34" height="34" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="12" cy="12" r="9" fill="rgba(10, 17, 27, 0.85)" stroke="var(--cursor-glow)" strokeWidth="1.1" opacity="0.9" />
          <path
            d="M12 17.5 V7.5 M12 6.5 L8.6 10.2 M12 6.5 L15.4 10.2"
            stroke="var(--cursor-glow)"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
    </div>
  )
}
