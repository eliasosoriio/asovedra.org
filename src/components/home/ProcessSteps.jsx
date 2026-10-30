import React, { useRef, useState } from 'react'
import { AnimatePresence, motion, useMotionValueEvent, useReducedMotion, useScroll } from 'framer-motion'
import { LuChevronRight, LuCompass, LuFileCheck, LuHeartHandshake, LuMessageCircle } from 'react-icons/lu'
import { whatsappUrl } from '../../constants/site'

const MotionLi = motion.li
const MotionDiv = motion.div
const MotionSpan = motion.span

const STEPS = [
  { icon: LuMessageCircle, title: 'Te escuchamos', text: 'Cuéntanos tu situación por WhatsApp, por teléfono o en la oficina.' },
  { icon: LuCompass, title: 'Te orientamos', text: 'Te explicamos qué trámite te corresponde, qué documentos necesitas y qué plazos tienes, con palabras claras.' },
  { icon: LuFileCheck, title: 'Te acompañamos', text: 'Preparamos contigo el expediente y, cuando hace falta, te derivamos a profesionales de confianza.' },
  { icon: LuHeartHandshake, title: 'Seguimos contigo', text: 'Después del trámite seguimos a tu lado con empleo, formación y una comunidad que te recibe.' }
]

// Recorrido de scroll que dura cada paso, en alto de pantalla
const STEP_SCROLL_VH = 70

function Heading({ className = '' }) {
  return (
    <div className={className}>
      <h2 className="text-[40px] font-semibold leading-[1.08] tracking-[-0.02em] text-ink sm:text-[56px]">
        Cómo te ayudamos.
      </h2>
      <p className="mt-5 text-[19px] leading-relaxed text-muted lg:text-[21px]">
        Cuatro pasos, de la primera consulta a tu nueva vida en Galicia.
      </p>
    </div>
  )
}

function StartLink({ className = '' }) {
  return (
    <p className={`text-[17px] text-ink ${className}`}>
      ¿Empezamos?{' '}
      <a
        href={whatsappUrl('Hola, necesito ayuda.')}
        target="_blank"
        rel="noopener noreferrer"
        className="group inline-flex items-center gap-1 text-navy hover:underline"
      >
        Escríbenos por WhatsApp
        <LuChevronRight aria-hidden="true" className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
        <span className="sr-only">(se abre WhatsApp)</span>
      </a>
    </p>
  )
}

// (El titular se pinta en las dos variantes; solo una es visible según el ancho, por eso no lleva id.)
// Escritorio: la sección se queda fija mientras bajas y los pasos van pasando, como en las
// páginas de producto de Apple. La lista de la izquierda marca el paso activo.
function ScrollSteps() {
  const wrapperRef = useRef(null)
  const [active, setActive] = useState(0)
  const { scrollYProgress } = useScroll({ target: wrapperRef, offset: ['start start', 'end end'] })

  useMotionValueEvent(scrollYProgress, 'change', (value) => {
    setActive(Math.min(STEPS.length - 1, Math.max(0, Math.floor(value * STEPS.length))))
  })

  // Lleva el scroll al centro del tramo de cada paso
  const goToStep = (index) => {
    const wrapper = wrapperRef.current
    if (!wrapper) return
    const top = wrapper.getBoundingClientRect().top + window.scrollY
    const travel = wrapper.offsetHeight - window.innerHeight
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    window.scrollTo({ top: top + travel * ((index + 0.5) / STEPS.length), behavior: reduce ? 'auto' : 'smooth' })
  }

  const step = STEPS[active]
  const Icon = step.icon

  return (
    <div ref={wrapperRef} className="relative hidden lg:block" style={{ height: `${STEPS.length * STEP_SCROLL_VH + 30}vh` }}>
      <div className="sticky top-0 flex h-screen items-center">
        <div className="mx-auto grid w-full max-w-[1440px] grid-cols-[1fr_1.25fr] items-center gap-20 px-16">
          <div>
            <Heading />
            <ol className="relative mt-12 space-y-1">
              {/* Línea de progreso que se va llenando */}
              <span aria-hidden="true" className="absolute bottom-6 left-[19px] top-6 w-px bg-[#d2d2d7]"></span>
              <MotionSpan
                aria-hidden="true"
                className="absolute left-[19px] top-6 w-px origin-top bg-navy"
                style={{ bottom: 24, scaleY: scrollYProgress }}
              />
              {STEPS.map((item, index) => {
                const isActive = index === active
                const done = index < active
                return (
                  <li key={item.title}>
                    <button
                      type="button"
                      onClick={() => goToStep(index)}
                      aria-current={isActive ? 'step' : undefined}
                      className="relative flex w-full items-center gap-5 rounded-2xl py-3 text-left"
                    >
                      <span
                        className={`grid h-10 w-10 shrink-0 place-items-center rounded-full text-[15px] font-semibold transition-colors duration-500 ${
                          isActive || done ? 'bg-navy text-white' : 'border border-[#d2d2d7] bg-[#F5F5F7] text-muted'
                        }`}
                      >
                        {index + 1}
                      </span>
                      <span className={`text-[22px] font-semibold tracking-[-0.01em] transition-colors duration-500 ${isActive ? 'text-ink' : 'text-[#a1a1a6]'}`}>
                        {item.title}
                      </span>
                    </button>
                  </li>
                )
              })}
            </ol>
            <StartLink className="mt-10" />
          </div>

          <div className="relative min-h-[460px] overflow-hidden rounded-[32px] bg-white" aria-live="polite">
            {/* Fundido cruzado: el paso nuevo entra mientras sale el anterior, la tarjeta nunca queda vacía */}
            <AnimatePresence initial={false}>
              <MotionDiv
                key={step.title}
                className="absolute inset-0 p-14"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.35, ease: [0.25, 0.1, 0.25, 1] }}
              >
                <Icon aria-hidden="true" className="h-14 w-14 text-navy" strokeWidth={1.5} />
                <p className="mt-12 text-[17px] font-semibold text-muted">Paso {active + 1} de {STEPS.length}</p>
                <h3 className="mt-2 text-[48px] font-semibold leading-[1.08] tracking-[-0.02em] text-ink">{step.title}</h3>
                <p className="mt-5 max-w-[520px] text-[21px] leading-relaxed text-muted">{step.text}</p>
              </MotionDiv>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </div>
  )
}

// Móvil (y con «reducir movimiento»): tarjetas apiladas que suben al entrar en pantalla
function StackedSteps({ always = false }) {
  const reduceMotion = useReducedMotion()

  return (
    <div className={`mx-auto max-w-[1440px] px-6 lg:px-16 ${always ? '' : 'lg:hidden'}`}>
      <Heading className="mx-auto max-w-[760px] text-center" />
      <ol className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {STEPS.map((item, index) => {
          const Icon = item.icon
          return (
            <MotionLi
              key={item.title}
              initial={reduceMotion ? false : { opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
              className="flex flex-col rounded-[28px] bg-white p-8"
            >
              <Icon aria-hidden="true" className="h-9 w-9 text-navy" strokeWidth={1.75} />
              <p className="mt-8 text-[15px] font-semibold text-muted">Paso {index + 1}</p>
              <h3 className="mt-1 text-[24px] font-semibold leading-tight tracking-[-0.01em] text-ink">{item.title}</h3>
              <p className="mt-3 text-[17px] leading-snug text-muted">{item.text}</p>
            </MotionLi>
          )
        })}
      </ol>
      <StartLink className="mt-12 text-center" />
    </div>
  )
}

function ProcessSteps() {
  const reduceMotion = useReducedMotion()

  return (
    <section id="como-te-ayudamos" aria-label="Cómo te ayudamos" className="bg-[#F5F5F7] py-24 lg:py-0">
      {reduceMotion ? (
        <div className="lg:py-32"><StackedSteps always /></div>
      ) : (
        <>
          <ScrollSteps />
          <StackedSteps />
        </>
      )}
    </section>
  )
}

export default ProcessSteps
