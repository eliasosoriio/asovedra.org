import React, { useEffect, useLayoutEffect, useRef, useState } from 'react'
import { motion, useReducedMotion } from 'framer-motion'
import LatestNews from './LatestNews'
import { FOUNDING_YEAR } from '../../constants/site'
import { HERO_STATS } from '../../constants/stats'

const MotionSpan = motion.span

// Palabras que van entrando en la cápsula navy del titular
const WORDS = ['tus papeles', 'tu empleo', 'tu formación', 'tu nueva vida']

const TRUST = [
  `${HERO_STATS.venezuelansSupported.number} personas atendidas`,
  `Desde ${FOUNDING_YEAR}`,
  'Sin ánimo de lucro',
  'Entidad autorizada para emitir el certificado de vulnerabilidad'
]
const LABEL = 'Te acompañamos en tus papeles, tu empleo, tu formación y tu nueva vida en Galicia.'

// Tiempos del ciclo (ms): espera inicial (tras la pantalla de carga), palabra visible, cápsula cerrada
const START_DELAY = 2600
const HOLD = 2600
const CLOSED = 650

function Hero() {
  const reduceMotion = useReducedMotion()
  const wrapperRef = useRef(null)
  const measureRefs = useRef([])
  const startedRef = useRef(false)
  const [sizes, setSizes] = useState({ line: 0, widths: [] })
  const [index, setIndex] = useState(0)
  const [open, setOpen] = useState(false)

  useLayoutEffect(() => {
    const measure = () => setSizes({
      line: wrapperRef.current?.offsetHeight || 0,
      widths: measureRefs.current.map((el) => el?.offsetWidth || 0)
    })
    measure()
    document.fonts?.ready.then(measure)
    window.addEventListener('resize', measure)
    return () => window.removeEventListener('resize', measure)
  }, [])

  useEffect(() => {
    if (reduceMotion) return undefined
    const delay = open ? HOLD : startedRef.current ? CLOSED : START_DELAY
    const id = window.setTimeout(() => {
      if (open) {
        setOpen(false)
        return
      }
      if (startedRef.current) setIndex((i) => (i + 1) % WORDS.length)
      startedRef.current = true
      setOpen(true)
    }, delay)
    return () => window.clearTimeout(id)
  }, [open, index, reduceMotion])

  const showWord = reduceMotion || open
  const pad = sizes.line * 0.32
  const width = showWord && sizes.widths[index] ? sizes.widths[index] + pad * 2 : sizes.line

  return (
    <section className="overflow-hidden pb-16 pt-36 lg:pb-24 lg:pt-[150px]">
      {/* Dos tercios para el titular y un tercio, a toda altura, para las últimas noticias */}
      <div className="mx-auto grid max-w-[1440px] px-6 lg:grid-cols-[minmax(0,2fr)_minmax(0,1fr)] lg:gap-12 lg:px-16">
        <div className="flex flex-col justify-center">
          {/* Nombre de la asociación con una franja tricolor (amarillo, azul y rojo del logo y la bandera) */}
          <p className="mb-8 flex items-center gap-4 lg:mb-10">
            <span aria-hidden="true" className="flex h-[5px] w-14 shrink-0 overflow-hidden rounded-full">
              <span className="flex-1 bg-yellow"></span>
              <span className="flex-1 bg-navy"></span>
              <span className="flex-1 bg-red"></span>
            </span>
            <span className="text-[15px] font-semibold leading-snug tracking-[-0.005em] text-ink sm:text-[17px] lg:text-[19px]"><span className="font-bold text-navy">ASOVEDRA</span> · Asociación de Venezolanos en Pontevedra</span>
          </p>
          <h1 aria-label={LABEL} className="big-headline hero-headline flex flex-col text-ink">
            <span aria-hidden="true">Te acompañamos en</span>
            <span aria-hidden="true" ref={wrapperRef} className="relative block h-[1.25em] whitespace-nowrap text-white">
              <MotionSpan
                className="absolute left-0 top-0 h-full rounded-full bg-navy"
                initial={false}
                animate={{ width: width || '1.25em' }}
                transition={{ duration: reduceMotion ? 0 : 0.6, ease: [0.7, 0, 0.3, 1] }}
              />
              {WORDS.map((word, i) => (
                <MotionSpan
                  key={word}
                  className="absolute top-0"
                  style={{ left: pad }}
                  initial={false}
                  animate={{ opacity: showWord && i === index ? 1 : 0 }}
                  transition={{ duration: 0.3, delay: showWord && i === index && !reduceMotion ? 0.35 : 0 }}
                >
                  {word}
                </MotionSpan>
              ))}
              {/* Medidas de cada palabra para ajustar el ancho de la cápsula */}
              {WORDS.map((word, i) => (
                <span key={`m-${word}`} ref={(el) => { measureRefs.current[i] = el }} className="invisible absolute left-0 top-0">
                  {word}
                </span>
              ))}
            </span>
            <span aria-hidden="true">en Galicia.</span>
          </h1>

          <ul className="mt-14 grid gap-3 border-t border-line pt-7 text-base font-medium text-ink sm:grid-cols-3 sm:gap-x-8 lg:mt-16">
            {TRUST.map((item, i) => (
              <li key={item} className={`flex items-center gap-3 ${i === TRUST.length - 1 ? 'sm:col-span-3' : ''}`}>
                <span aria-hidden="true" className="h-1.5 w-1.5 shrink-0 rounded-full bg-navy"></span>
                {item}
              </li>
            ))}
          </ul>
        </div>

        <LatestNews className="mt-14 lg:mt-0" />
      </div>
    </section>
  )
}

export default Hero
