import React, { useRef } from 'react'
import { motion, useReducedMotion, useScroll, useTransform } from 'framer-motion'
import { FOUNDING_YEAR, yearsSince } from '../../constants/site'
import { HERO_STATS } from '../../constants/stats'

const MotionSpan = motion.span

const GREY = '#d2d2d7'
const INK = '#1F1F21'
const NAVY = '#001E77'

// Cada palabra pasa de gris claro a su color al bajar, como los textos que se revelan en Apple.
// Las cifras se encienden en navy.
function Word({ children, progress, range, highlight }) {
  const color = useTransform(progress, range, [GREY, highlight ? NAVY : INK])
  return <MotionSpan style={{ color }}>{children}</MotionSpan>
}

function Statement() {
  const ref = useRef(null)
  const reduceMotion = useReducedMotion()
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start 0.8', 'end 0.45'] })

  const years = yearsSince(FOUNDING_YEAR)
  const people = HERO_STATS.venezuelansSupported.number.replace('+', '')
  // Frase por tramos; los marcados con `highlight` son las cifras
  const parts = [
    { text: 'Llevamos' },
    { text: `${years} años`, highlight: true },
    { text: 'acompañando a' },
    { text: `más de ${people} personas`, highlight: true },
    { text: 'a empezar de nuevo en Galicia.' }
  ]
  const words = parts.flatMap((part) => part.text.split(' ').map((word) => ({ word, highlight: part.highlight })))
  const label = parts.map((part) => part.text).join(' ')

  return (
    <section className="py-28 lg:py-44">
      <div className="mx-auto max-w-[1440px] px-6 lg:px-16">
        <p className="text-center text-[17px] font-semibold text-muted">Desde {FOUNDING_YEAR}</p>
        <p
          ref={ref}
          aria-label={label}
          className="relative mx-auto mt-6 max-w-[1100px] text-center text-[40px] font-semibold leading-[1.12] tracking-[-0.02em] sm:text-[56px] lg:text-[80px]"
        >
          {words.map(({ word, highlight }, i) => (
            <React.Fragment key={`${word}-${i}`}>
              <span aria-hidden="true">
                {reduceMotion ? (
                  <span style={{ color: highlight ? NAVY : INK }}>{word}</span>
                ) : (
                  <Word progress={scrollYProgress} range={[i / words.length, (i + 1) / words.length]} highlight={highlight}>
                    {word}
                  </Word>
                )}
              </span>
              {i < words.length - 1 && ' '}
            </React.Fragment>
          ))}
        </p>
      </div>
    </section>
  )
}

export default Statement
