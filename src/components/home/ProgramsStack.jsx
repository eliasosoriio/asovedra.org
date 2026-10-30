import React, { useCallback, useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { LuChevronLeft, LuChevronRight, LuPlus } from 'react-icons/lu'
import { PROGRAMS } from '../../constants/programs'
import ProgramArt from './ProgramArt'

// «Lo que hacemos» al estilo de los carruseles de Apple: fondo gris claro, tarjetas altas
// que se deslizan en horizontal con imán y un botón «+» en cada una.
function ProgramCard({ program }) {
  const text = program.dark ? 'text-white' : 'text-ink'
  const soft = program.dark ? 'text-white/80' : 'text-ink/70'

  return (
    <li className="w-[82vw] max-w-[400px] shrink-0 snap-start sm:w-[372px]">
      <Link
        to={program.to}
        data-cursor="view"
        className="group relative flex h-[540px] flex-col overflow-hidden rounded-[28px] transition-transform duration-500 ease-out hover:scale-[1.015] motion-reduce:transform-none lg:h-[600px]"
      >
        <ProgramArt id={program.id} label={false} align="center" className="absolute inset-0 h-full w-full" />
        {/* Velo superior para que el texto se lea siempre sobre la ilustración */}
        <div aria-hidden="true" className="absolute inset-x-0 top-0 h-3/5" style={{ background: `linear-gradient(${program.bg} 55%, transparent)` }}></div>

        <div className={`relative p-8 lg:p-9 ${text}`}>
          <p className={`text-[15px] font-semibold ${soft}`}>{program.tags.join(' · ')}</p>
          <h3 className="mt-2 text-[28px] font-semibold leading-[1.12] tracking-[-0.015em] lg:text-[32px]">{program.title}</h3>
          <p className={`mt-3 text-[17px] leading-snug ${soft}`}>{program.description}</p>
        </div>

        <span
          aria-hidden="true"
          className={`absolute bottom-6 right-6 grid h-11 w-11 place-items-center rounded-full transition-transform duration-300 group-hover:rotate-90 motion-reduce:transform-none ${
            program.dark ? 'bg-white text-ink' : 'bg-ink text-white'
          }`}
        >
          <LuPlus className="h-5 w-5" />
        </span>
        <span className="sr-only">Saber más sobre {program.title}</span>
      </Link>
    </li>
  )
}

function ProgramsStack() {
  const trackRef = useRef(null)
  const [edges, setEdges] = useState({ start: true, end: false })

  const updateEdges = useCallback(() => {
    const track = trackRef.current
    if (!track) return
    setEdges({
      start: track.scrollLeft <= 4,
      end: track.scrollLeft + track.clientWidth >= track.scrollWidth - 4
    })
  }, [])

  useEffect(() => {
    updateEdges()
    window.addEventListener('resize', updateEdges)
    return () => window.removeEventListener('resize', updateEdges)
  }, [updateEdges])

  const scrollByCard = (direction) => {
    const track = trackRef.current
    if (!track) return
    const card = track.querySelector('li')
    const step = card ? card.getBoundingClientRect().width + 20 : track.clientWidth * 0.8
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    track.scrollBy({ left: direction * step, behavior: reduce ? 'auto' : 'smooth' })
  }

  const arrow = 'grid h-11 w-11 place-items-center rounded-full bg-[#e8e8ed] text-ink transition-colors hover:bg-[#dcdce1] disabled:cursor-default disabled:opacity-40'

  return (
    <section aria-labelledby="lo-que-hacemos" className="bg-[#F5F5F7] py-24 lg:py-32">
      <div className="mx-auto flex max-w-[1440px] flex-wrap items-end justify-between gap-6 px-6 lg:px-16">
        <h2 id="lo-que-hacemos" className="text-[40px] font-semibold leading-[1.08] tracking-[-0.02em] text-ink sm:text-[56px]">
          Lo que hacemos.
        </h2>
        <div className="flex items-center gap-6">
          <Link to="/servicios" className="group inline-flex items-center gap-1 text-[17px] font-medium text-navy hover:underline">
            Ver todos los servicios
            <LuChevronRight aria-hidden="true" className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
          </Link>
          <div className="hidden gap-3 sm:flex">
            <button type="button" onClick={() => scrollByCard(-1)} disabled={edges.start} aria-label="Programa anterior" className={arrow}>
              <LuChevronLeft aria-hidden="true" className="h-5 w-5" />
            </button>
            <button type="button" onClick={() => scrollByCard(1)} disabled={edges.end} aria-label="Programa siguiente" className={arrow}>
              <LuChevronRight aria-hidden="true" className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>

      <ul
        ref={trackRef}
        onScroll={updateEdges}
        className="mx-auto mt-12 flex max-w-[1440px] snap-x snap-mandatory scroll-px-6 gap-5 overflow-x-auto px-6 pb-6 [scrollbar-width:none] lg:mt-14 lg:scroll-px-16 lg:px-16 [&::-webkit-scrollbar]:hidden"
      >
        {PROGRAMS.map((program) => (
          <ProgramCard key={program.id} program={program} />
        ))}
        <li aria-hidden="true" className="w-1 shrink-0"></li>
      </ul>

    </section>
  )
}

export default ProgramsStack
