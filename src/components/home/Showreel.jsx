import React, { useEffect, useRef, useState } from 'react'
import { motion, useReducedMotion, useScroll, useTransform } from 'framer-motion'
import { LuVolume2, LuVolumeX } from 'react-icons/lu'
import Button from '../ui/Button'
import Pill from '../ui/Pill'
import { FOUNDING_YEAR } from '../../constants/site'

const MotionDiv = motion.div

// Vídeo que crece al hacer scroll (el «Showreel» de North2) junto a «Sobre nosotros», en la misma fila
function Showreel() {
  const reduceMotion = useReducedMotion()
  const sectionRef = useRef(null)
  const videoRef = useRef(null)
  const [muted, setMuted] = useState(true)
  const [autoplay, setAutoplay] = useState(false)
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ['start end', 'center center'] })
  const scale = useTransform(scrollYProgress, [0, 1], [0.86, 1])

  // El vídeo solo se descarga en escritorio y si no se ha pedido ahorrar datos o movimiento
  useEffect(() => {
    const saveData = navigator.connection?.saveData
    setAutoplay(!reduceMotion && !saveData && window.matchMedia('(min-width: 1024px)').matches)
  }, [reduceMotion])

  const toggleSound = () => {
    const video = videoRef.current
    if (!video) return
    video.muted = !muted
    if (video.paused) video.play()
    setMuted(!muted)
  }

  return (
    <section
      ref={sectionRef}
      aria-labelledby="sobre-nosotros"
      className="relative mx-auto grid max-w-[1440px] gap-12 px-4 pb-24 sm:px-6 lg:grid-cols-[1.35fr_1fr] lg:items-center lg:gap-16 lg:px-16 lg:pb-36"
    >
      <MotionDiv
        data-cursor="view"
        style={{ scale: reduceMotion ? 1 : scale }}
        className="relative h-[62vh] overflow-hidden rounded-[24px] bg-navy lg:h-[72vh]"
      >
        {autoplay ? (
          <video
            ref={videoRef}
            className="absolute inset-0 h-full w-full object-cover"
            src="/video/video_hero.mp4"
            poster="/photo/foto_ayuda_1.jpeg"
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
          />
        ) : (
          <img src="/photo/foto_ayuda_1.jpeg" alt="" className="absolute inset-0 h-full w-full object-cover" />
        )}
        <div className="absolute inset-0 bg-navy/45"></div>
        <p className="absolute inset-0 grid place-items-center px-6 text-center text-[56px] font-medium leading-none text-white sm:text-[88px] lg:text-[96px]">
          Conócenos
        </p>
        {autoplay && (
          <button
            type="button"
            onClick={toggleSound}
            className="absolute bottom-6 right-6 inline-flex min-h-12 items-center gap-2 rounded-full bg-white px-5 text-base font-semibold text-ink shadow-pill"
          >
            {muted ? <LuVolumeX aria-hidden="true" /> : <LuVolume2 aria-hidden="true" />}
            {muted ? 'Activar sonido' : 'Silenciar'}
          </button>
        )}
      </MotionDiv>

      <div className="px-2 sm:px-0">
        <Pill>Sobre nosotros</Pill>
        <h2 id="sobre-nosotros" className="sr-only">Sobre nosotros</h2>
        <p className="mt-8 text-[22px] font-[450] leading-[1.5] text-ink lg:text-[26px]">
          Somos la Asociación de Venezolanos en Pontevedra. Desde {FOUNDING_YEAR} orientamos, formamos y acompañamos
          a personas migrantes para que empezar de nuevo en Galicia sea más fácil. Lo hacemos sin ánimo de lucro,
          con cercanía y con la experiencia de miles de casos resueltos.
        </p>
        <Button to="/sobre-nosotros" variant="white" className="mt-10">Conoce la asociación</Button>
      </div>
    </section>
  )
}

export default Showreel
