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
  const heroRef = useRef(null)
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

  // En móvil el hero no cabe en pantalla: indicador fijo abajo hasta que empiezas a bajar
  const [atTop, setAtTop] = useState(true)
  useEffect(() => {
    const handleScroll = () => setAtTop(window.scrollY < 40)
    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Baja hasta justo después del hero
  const scrollPastHero = () => {
    const hero = heroRef.current
    if (!hero) return
    window.scrollTo({ top: hero.offsetTop + hero.offsetHeight, behavior: reduceMotion ? 'auto' : 'smooth' })
  }

  const showWord = reduceMotion || open
  const pad = sizes.line * 0.32
  const width = showWord && sizes.widths[index] ? sizes.widths[index] + pad * 2 : sizes.line

  return (
    <section ref={heroRef} className="flex min-h-[100svh] items-center overflow-hidden bg-navy pb-6 pt-32 text-white lg:pb-5 lg:pt-[118px]">
      {/* Dos tercios para el titular y un tercio para las últimas noticias; debajo, las cifras a todo el ancho */}
      <div className="mx-auto grid w-full max-w-[1440px] grid-cols-[minmax(0,1fr)] px-6 lg:grid-cols-[minmax(0,2fr)_minmax(0,1fr)] lg:gap-12 lg:px-16">
        <div className="flex flex-col justify-center">
          {/* «ASOVEDRA» en grande, lo primero bajo la cabecera; ocupa el ancho de su columna (se mide en cqw) */}
          <p className="@container mb-10 lg:mb-8">
            <span className="wordmark-macro text-yellow">ASOVEDRA</span>
          </p>

          <h1 aria-label={LABEL} className="big-headline hero-headline flex flex-col text-white">
            <span aria-hidden="true">Te acompañamos en</span>
            <span aria-hidden="true" ref={wrapperRef} className="relative block h-[1.25em] whitespace-nowrap text-navy">
              <MotionSpan
                className="absolute left-0 top-0 h-full rounded-full bg-white"
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

        </div>

        <LatestNews className="mt-14 lg:mt-0" />

        {/* Cifras de confianza a todo el ancho, por debajo del titular y de las noticias */}
        <ul className="mt-14 flex flex-col gap-3 border-t border-white/20 pt-7 text-base font-medium text-white sm:flex-row sm:flex-wrap sm:gap-x-10 lg:col-span-2 lg:mt-8 lg:pt-5">
          {TRUST.map((item) => (
            <li key={item} className="flex items-center gap-3">
              <span aria-hidden="true" className="h-1.5 w-1.5 shrink-0 rounded-full bg-yellow"></span>
              {item}
            </li>
          ))}
        </ul>

        {/* Indicador para seguir bajando: lleva a la siguiente sección */}
        <div className="mt-8 hidden justify-center lg:col-span-2 lg:mt-3 lg:flex">
          <button
            type="button"
            onClick={scrollPastHero}
            className="group flex flex-col items-center gap-2 rounded-full px-4 py-1 text-white/80 transition-colors hover:text-white"
          >
            <span aria-hidden="true" className="relative flex h-9 w-6 justify-center rounded-full border-2 border-current">
              <span className="animate-scroll-dot mt-1.5 h-2 w-1 rounded-full bg-yellow"></span>
            </span>
            <span className="text-[13px] font-medium">Desliza</span>
            <span className="sr-only">para ver más contenido</span>
          </button>
        </div>

      </div>
      <button
        type="button"
        onClick={scrollPastHero}
        tabIndex={atTop ? 0 : -1}
        aria-hidden={!atTop}
        className={`fixed bottom-6 left-1/2 z-30 flex -translate-x-1/2 items-center gap-2.5 rounded-full bg-navy/95 py-2 pl-3 pr-4 text-[13px] font-medium text-white shadow-pill ring-1 ring-white/30 transition-all duration-300 motion-reduce:transition-none lg:hidden ${
          atTop ? 'translate-y-0 opacity-100' : 'pointer-events-none translate-y-4 opacity-0'
        }`}
      >
        <span aria-hidden="true" className="relative flex h-7 w-[18px] justify-center rounded-full border-2 border-white">
          <span className="animate-scroll-dot mt-1 h-1.5 w-[3px] rounded-full bg-yellow"></span>
        </span>
        Desliza
        <span className="sr-only">para ver más contenido</span>
      </button>
    </section>
  )
}

export default Hero
