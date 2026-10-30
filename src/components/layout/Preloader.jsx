import React, { useEffect, useState } from 'react'
import { useReducedMotion } from 'framer-motion'

// Pantalla de carga: fondo navy con el logo, que luego se recoge en un círculo
// hacia el botón del menú. Solo en la primera carga de la sesión.
const SEEN_KEY = 'asovedra-preloader'

function alreadySeen() {
  try { return window.sessionStorage.getItem(SEEN_KEY) === '1' } catch { return false }
}

function Preloader() {
  const reduceMotion = useReducedMotion()
  const [phase, setPhase] = useState(() => (alreadySeen() ? 'done' : 'logo'))

  useEffect(() => {
    if (phase === 'done') return
    if (reduceMotion) { setPhase('done'); return }
    try { window.sessionStorage.setItem(SEEN_KEY, '1') } catch { /* sin almacenamiento */ }
    const toExit = window.setTimeout(() => setPhase('exit'), 1300)
    const toDone = window.setTimeout(() => setPhase('done'), 2300)
    return () => { window.clearTimeout(toExit); window.clearTimeout(toDone) }
  }, [phase, reduceMotion])

  if (phase === 'done') return null

  return (
    <div
      aria-hidden="true"
      className="fixed inset-0 z-[60] grid place-items-center bg-navy transition-[clip-path] duration-1000 ease-[cubic-bezier(0.7,0,0.3,1)]"
      style={{ clipPath: phase === 'exit' ? 'circle(0px at 112px 68px)' : 'circle(150% at 112px 68px)' }}
    >
      <div className={`grid h-40 w-40 place-items-center rounded-full bg-white p-7 transition-all duration-500 ${phase === 'exit' ? 'scale-50 opacity-0' : 'animate-[preloader-in_0.9s_ease-out]'}`}>
        <img src="/favicon.png" alt="" className="h-full w-full object-contain" />
      </div>
    </div>
  )
}

export default Preloader
