import React, { useEffect, useState } from 'react'
import { FaFacebookF, FaInstagram } from 'react-icons/fa'
import { LuArrowUp } from 'react-icons/lu'

const socials = [
  { label: 'Facebook de ASOVEDRA', href: 'https://facebook.com/asovedra', icon: FaFacebookF },
  { label: 'Instagram de ASOVEDRA', href: 'https://instagram.com/asovedra', icon: FaInstagram }
]

// A partir de cuántos píxeles de scroll aparece el botón de subir
const SHOW_TOP_AFTER = 400

const circle = 'grid h-11 w-11 place-items-center rounded-full shadow-pill transition-colors'

// Redes fijas abajo a la derecha (a la izquierda está el botón de configurar cookies)
// y, al bajar por la página, un botón para volver arriba a su derecha.
function SocialDock() {
  const [showTop, setShowTop] = useState(false)

  useEffect(() => {
    const handleScroll = () => setShowTop(window.scrollY > SHOW_TOP_AFTER)
    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToTop = () => {
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    window.scrollTo({ top: 0, behavior: reduce ? 'auto' : 'smooth' })
  }

  return (
    <div className="pointer-events-none fixed bottom-6 right-6 z-40 flex items-center gap-2 lg:right-16">
      <ul aria-label="Redes sociales" className="pointer-events-auto hidden gap-2 lg:flex">
        {socials.map(({ label, href, icon }) => {
          const Icon = icon
          return (
            <li key={label}>
              <a
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className={`${circle} bg-white text-ink hover:bg-navy hover:text-white`}
              >
                <Icon aria-hidden="true" className="h-4 w-4" />
              </a>
            </li>
          )
        })}
      </ul>
      <button
        type="button"
        onClick={scrollToTop}
        aria-label="Volver arriba"
        tabIndex={showTop ? 0 : -1}
        aria-hidden={!showTop}
        className={`${circle} border-2 border-white bg-navy text-white transition-all duration-300 hover:bg-navy-deep motion-reduce:transition-none ${
          showTop ? 'pointer-events-auto translate-y-0 opacity-100' : 'translate-y-3 opacity-0'
        }`}
      >
        <LuArrowUp aria-hidden="true" className="h-5 w-5" />
      </button>
    </div>
  )
}

export default SocialDock
