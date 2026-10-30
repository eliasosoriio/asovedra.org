import React, { useEffect, useRef, useState } from 'react'
import { useReducedMotion } from 'framer-motion'
import ArrowIcon from '../ui/ArrowIcon'

// Punto navy que sigue al ratón con un pequeño retardo, como el cursor de North2.
// Crece sobre enlaces y botones, y se convierte en un círculo con flecha sobre [data-cursor="view"].
const INTERACTIVE = 'a, button, [role="button"], input, select, textarea, label'

function CustomCursor() {
  const reduceMotion = useReducedMotion()
  const dotRef = useRef(null)
  const [enabled, setEnabled] = useState(false)
  const [mode, setMode] = useState('default')
  const [visible, setVisible] = useState(false)

  // Solo con ratón: en pantallas táctiles no hay cursor que seguir
  useEffect(() => {
    const query = window.matchMedia('(hover: hover) and (pointer: fine)')
    const update = () => setEnabled(query.matches)
    update()
    query.addEventListener('change', update)
    return () => query.removeEventListener('change', update)
  }, [])

  useEffect(() => {
    if (!enabled) return undefined
    const target = { x: -100, y: -100 }
    const current = { x: -100, y: -100 }
    let frame = 0
    let last = performance.now()

    // Suavizado por tiempo: el punto alcanza al ratón igual aunque el navegador vaya a pocos fotogramas
    const render = (now = performance.now()) => {
      const elapsed = Math.min(now - last, 100)
      last = now
      const ease = reduceMotion ? 1 : 1 - Math.pow(0.8, elapsed / 16.7)
      current.x += (target.x - current.x) * ease
      current.y += (target.y - current.y) * ease
      if (dotRef.current) dotRef.current.style.transform = `translate3d(${current.x}px, ${current.y}px, 0)`
      frame = window.requestAnimationFrame(render)
    }

    const handleMove = (event) => {
      target.x = event.clientX
      target.y = event.clientY
      setVisible(true)
      const element = event.target instanceof Element ? event.target : null
      if (element?.closest('[data-cursor="view"]')) setMode('view')
      else if (element?.closest(INTERACTIVE)) setMode('hover')
      else setMode('default')
    }
    const handleLeave = () => setVisible(false)

    frame = window.requestAnimationFrame(render)
    window.addEventListener('mousemove', handleMove, { passive: true })
    document.documentElement.addEventListener('mouseleave', handleLeave)
    return () => {
      window.cancelAnimationFrame(frame)
      window.removeEventListener('mousemove', handleMove)
      document.documentElement.removeEventListener('mouseleave', handleLeave)
    }
  }, [enabled, reduceMotion])

  if (!enabled) return null

  const size = mode === 'view' ? 'h-24 w-24' : mode === 'hover' ? 'h-10 w-10 bg-navy/25' : 'h-4 w-4'

  return (
    <div
      ref={dotRef}
      aria-hidden="true"
      className={`pointer-events-none fixed left-0 top-0 z-[70] transition-opacity duration-300 ${visible ? 'opacity-100' : 'opacity-0'}`}
    >
      <span
        className={`absolute grid -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full border-2 border-white bg-navy text-white transition-[width,height,background-color] duration-300 ease-out ${size}`}
      >
        {mode === 'view' && <ArrowIcon className="-rotate-45" />}
      </span>
    </div>
  )
}

export default CustomCursor
