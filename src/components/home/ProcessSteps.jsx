import React, { useRef } from 'react'
import { motion, useReducedMotion, useScroll, useTransform } from 'framer-motion'

const MotionSection = motion.section
const MotionLi = motion.li

const STEPS = [
  { title: 'Te escuchamos', text: 'Cuéntanos tu situación por WhatsApp, por teléfono o en la oficina.' },
  { title: 'Te orientamos', text: 'Te explicamos qué trámite te corresponde, qué documentos necesitas y qué plazos tienes, con palabras claras.' },
  { title: 'Te acompañamos', text: 'Preparamos contigo el expediente y, cuando hace falta, te derivamos a profesionales de confianza.' },
  { title: 'Seguimos contigo', text: 'Después del trámite seguimos a tu lado con empleo, formación y una comunidad que te recibe.' }
]

// Cada cápsula entra desde la derecha mientras bajas, como el «Process & approach» de North2
function Step({ step, index }) {
  const ref = useRef(null)
  const reduceMotion = useReducedMotion()
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'center center'] })
  const x = useTransform(scrollYProgress, [0, 1], ['45%', '0%'])
  const opacity = useTransform(scrollYProgress, [0, 0.6], [0.2, 1])

  return (
    <MotionLi
      ref={ref}
      style={reduceMotion ? undefined : { x, opacity }}
      className="relative rounded-[32px] border border-white/45 p-8 lg:ml-[22%] lg:flex lg:min-h-[260px] lg:items-center lg:gap-10 lg:rounded-full lg:py-10 lg:pl-24 lg:pr-20"
    >
      <span className="block text-[72px] font-medium leading-none text-white lg:w-[150px] lg:shrink-0 lg:text-[112px]">{index + 1}.</span>
      <h3 className="mt-4 text-[32px] font-medium leading-tight text-white lg:mt-0 lg:w-[330px] lg:shrink-0 lg:text-[40px]">{step.title}</h3>
      <p className="mt-4 text-lg leading-relaxed text-white/85 lg:mt-0 lg:max-w-[440px]">{step.text}</p>
    </MotionLi>
  )
}

function ProcessSteps() {
  const sectionRef = useRef(null)
  const reduceMotion = useReducedMotion()
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ['start end', 'start start'] })
  const backgroundColor = useTransform(scrollYProgress, [0.4, 0.9], ['#FCFCFC', '#001E77'])
  const color = useTransform(scrollYProgress, [0.4, 0.9], ['#1F1F21', '#FFFFFF'])

  return (
    <MotionSection
      ref={sectionRef}
      aria-labelledby="como-te-ayudamos"
      style={reduceMotion ? { backgroundColor: '#001E77', color: '#FFFFFF' } : { backgroundColor, color }}
      className="relative overflow-hidden py-28 lg:py-44"
    >
      <div className="mx-auto max-w-[1440px] px-6 lg:px-16">
        <h2 id="como-te-ayudamos" className="section-title lg:pl-[72px]">Cómo te ayudamos</h2>
        <ol className="mt-16 space-y-6 lg:mt-24 lg:space-y-8">
          {STEPS.map((step, index) => (
            <Step key={step.title} step={step} index={index} />
          ))}
        </ol>
      </div>
    </MotionSection>
  )
}

export default ProcessSteps
