import React, { useRef } from 'react'
import { motion, useReducedMotion, useScroll, useTransform } from 'framer-motion'
import { MILESTONES } from '../../constants/milestones'

const MotionLi = motion.li
const MotionSpan = motion.span

// Cada hito se enciende cuando su punto cruza el centro de la pantalla
function Milestone({ milestone, index, reduceMotion }) {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start 0.85', 'start 0.5'] })
  const dotScale = useTransform(scrollYProgress, [0, 1], [0.6, 1])
  const dotColor = useTransform(scrollYProgress, [0, 1], ['#d2d2d7', '#001E77'])
  const left = index % 2 === 0

  return (
    <MotionLi
      ref={ref}
      initial={reduceMotion ? false : { opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
      className="relative grid grid-cols-[40px_1fr] gap-x-6 lg:grid-cols-[1fr_64px_1fr] lg:gap-x-0"
    >
      {/* Punto sobre la línea */}
      <span className="relative flex justify-center lg:col-start-2 lg:row-start-1">
        <MotionSpan
          aria-hidden="true"
          style={reduceMotion ? { backgroundColor: '#001E77' } : { scale: dotScale, backgroundColor: dotColor }}
          className="mt-2 h-4 w-4 rounded-full ring-[6px] ring-white"
        />
      </span>

      <div className={`pb-14 lg:row-start-1 lg:pb-20 ${left ? 'lg:col-start-1 lg:pr-14 lg:text-right' : 'lg:col-start-3 lg:pl-14'}`}>
        <p className="text-[44px] font-semibold leading-none tracking-[-0.02em] text-navy lg:text-[64px]">{milestone.year}</p>
        <h3 className="mt-4 text-[24px] font-semibold leading-tight tracking-[-0.01em] text-ink lg:text-[28px]">{milestone.title}</h3>
        <p className={`mt-3 max-w-[460px] text-[17px] leading-relaxed text-muted lg:text-[19px] ${left ? 'lg:ml-auto' : ''}`}>{milestone.text}</p>
      </div>
    </MotionLi>
  )
}

// Línea de tiempo de «Sobre nosotros»: la línea se va llenando de navy al hacer scroll
function Timeline() {
  const listRef = useRef(null)
  const reduceMotion = useReducedMotion()
  const { scrollYProgress } = useScroll({ target: listRef, offset: ['start 0.6', 'end 0.6'] })

  return (
    <div className="relative">
      <ol ref={listRef} className="relative">
        {/* Línea gris de fondo y línea navy que crece con el scroll */}
        <span aria-hidden="true" className="absolute bottom-0 left-5 top-3 w-px bg-[#d2d2d7] lg:left-1/2"></span>
        <MotionSpan
          aria-hidden="true"
          style={reduceMotion ? undefined : { scaleY: scrollYProgress }}
          className="absolute bottom-0 left-5 top-3 w-[2px] origin-top -translate-x-[0.5px] bg-navy lg:left-1/2"
        />
        {MILESTONES.map((milestone, index) => (
          <Milestone key={`${milestone.year}-${milestone.title}`} milestone={milestone} index={index} reduceMotion={reduceMotion} />
        ))}
      </ol>
    </div>
  )
}

export default Timeline
