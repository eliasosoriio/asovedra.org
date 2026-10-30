import React, { useRef } from 'react'
import { motion, useReducedMotion, useScroll, useTransform } from 'framer-motion'
import { FOUNDING_YEAR, yearsSince } from '../../constants/site'

const MotionSpan = motion.span

// Cada palabra se enciende al bajar, como la frase final de North2
function Word({ children, progress, range }) {
  const opacity = useTransform(progress, range, [0.12, 1])
  return <MotionSpan style={{ opacity }}>{children}</MotionSpan>
}

function Statement() {
  const ref = useRef(null)
  const reduceMotion = useReducedMotion()
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start 0.85', 'end 0.6'] })
  const text = `Llevamos ${yearsSince(FOUNDING_YEAR)} años acompañando a más de 4.000 personas a empezar de nuevo en Galicia.`
  const words = text.split(' ')

  return (
    <section className="bg-ink py-32 text-white lg:py-48">
      <div className="mx-auto max-w-[1440px] px-6 lg:px-16">
        <p ref={ref} aria-label={text} className="section-title relative mx-auto max-w-[1100px] text-center">
          {words.map((word, i) => (
            <React.Fragment key={`${word}-${i}`}>
              {reduceMotion ? <span aria-hidden="true">{word}</span> : (
                <span aria-hidden="true">
                  <Word progress={scrollYProgress} range={[i / words.length, (i + 1) / words.length]}>{word}</Word>
                </span>
              )}
              {i < words.length - 1 && ' '}
            </React.Fragment>
          ))}
        </p>
        <p className="mt-20 text-center text-base font-semibold">Desde {FOUNDING_YEAR}</p>
      </div>
    </section>
  )
}

export default Statement
