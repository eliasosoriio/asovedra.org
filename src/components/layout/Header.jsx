import React, { useEffect, useRef, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import ArrowIcon from '../ui/ArrowIcon'
import { whatsappUrl } from '../../constants/site'

const mainLinks = [
  { label: 'La Asociación', path: '/sobre-nosotros' },
  { label: 'Servicios', path: '/servicios' },
  { label: 'Residencia 2027', path: '/residencia-2027' },
  { label: 'Emergencia Venezuela', path: '/emergencia-terremoto-venezuela' },
  { label: 'Noticias', path: '/noticias' },
  { label: 'Contacto', path: '/contacto' }
]

const secondaryLinks = [
  { label: 'Colabora', path: '/colabora' },
  { label: 'Estatutos', path: '/estatutos' },
  { label: 'Declaración de valores', path: '/declaracion-valores' },
  { label: 'Plan de igualdad', path: '/plan-de-igualdad' }
]

const AYUDA_HREF = whatsappUrl('Hola, necesito ayuda.')

const circle = 'grid h-12 w-12 shrink-0 place-items-center rounded-full lg:h-16 lg:w-16'

function MenuLines({ open }) {
  return (
    <span aria-hidden="true" className="relative block h-4 w-5 lg:w-6">
      <span className={`absolute left-0 h-0.5 w-full bg-white transition-all duration-300 lg:h-px ${open ? 'top-[7px] rotate-45' : 'top-0'}`}></span>
      <span className={`absolute left-0 top-[7px] h-0.5 w-full bg-white transition-opacity duration-300 lg:h-px ${open ? 'opacity-0' : ''}`}></span>
      <span className={`absolute left-0 h-0.5 w-full bg-white transition-all duration-300 lg:h-px ${open ? 'top-[7px] -rotate-45' : 'top-[14px]'}`}></span>
    </span>
  )
}

export function Header() {
  const location = useLocation()
  const [menuOpen, setMenuOpen] = useState(false)
  const [shown, setShown] = useState(false)
  const headerRef = useRef(null)
  const menuButtonRef = useRef(null)

  // Entrada de la cabecera, como en North2: baja y aparece al cargar
  useEffect(() => {
    const id = window.setTimeout(() => setShown(true), 150)
    return () => window.clearTimeout(id)
  }, [])

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (headerRef.current && !headerRef.current.contains(event.target)) setMenuOpen(false)
    }
    const handleKey = (event) => {
      if (event.key !== 'Escape') return
      setMenuOpen((open) => {
        if (open) menuButtonRef.current?.focus()
        return false
      })
    }
    document.addEventListener('mousedown', handleClickOutside)
    document.addEventListener('keydown', handleKey)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
      document.removeEventListener('keydown', handleKey)
    }
  }, [])

  useEffect(() => {
    setMenuOpen(false)
  }, [location.pathname])

  // Bloquea el scroll de fondo con el menú móvil a pantalla completa
  useEffect(() => {
    const mobile = window.matchMedia('(max-width: 1023px)').matches
    document.body.style.overflow = menuOpen && mobile ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  // En la portada, el logo sube arriba del todo en lugar de recargar la ruta
  const handleLogoClick = (event) => {
    if (location.pathname !== '/') return
    event.preventDefault()
    setMenuOpen(false)
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    window.scrollTo({ top: 0, behavior: reduce ? 'auto' : 'smooth' })
  }

  return (
    <header ref={headerRef} className="pointer-events-none fixed left-0 top-0 z-50 w-full">
      <div
        className={`relative z-20 mx-auto flex max-w-[1440px] items-center justify-between px-6 py-[18px] transition-all duration-1000 motion-reduce:transition-none lg:px-16 lg:py-9 ${
          shown ? 'translate-y-0 opacity-100' : '-translate-y-1/2 opacity-0'
        }`}
      >
        <div className="pointer-events-auto relative flex items-center">
          <Link to="/" onClick={handleLogoClick} aria-label="ASOVEDRA, inicio" className={`${circle} relative z-20 bg-white p-2 shadow-pill lg:p-3`}>
            <img src="/favicon.png" alt="" className="h-full w-full object-contain" />
          </Link>
          <button
            ref={menuButtonRef}
            type="button"
            aria-expanded={menuOpen}
            aria-controls="menu-principal"
            aria-label={menuOpen ? 'Cerrar menú' : 'Abrir menú'}
            onClick={() => setMenuOpen((open) => !open)}
            className={`${circle} relative z-20 bg-navy shadow-pill ring-2 ring-white transition-colors duration-500 hover:bg-navy-deep`}
          >
            <MenuLines open={menuOpen} />
          </button>

          {/* Escritorio: el menú se despliega en una cápsula junto al botón */}
          <nav
            id="menu-principal"
            aria-label="Principal"
            className={`absolute left-[104px] top-1/2 z-10 hidden -translate-y-1/2 overflow-hidden rounded-full bg-white shadow-pill transition-[max-width,opacity] duration-500 ease-out motion-reduce:transition-none lg:block ${
              menuOpen ? 'max-w-[900px] opacity-100' : 'pointer-events-none max-w-0 opacity-0'
            }`}
          >
            <ul className="flex h-16 items-center gap-0.5 whitespace-nowrap pl-6 pr-3">
              {mainLinks.map((item) => (
                <li key={item.path}>
                  <NavLink
                    to={item.path}
                    tabIndex={menuOpen ? 0 : -1}
                    className={({ isActive }) =>
                      `block rounded-full px-3 py-3 text-[15px] font-medium transition-colors ${isActive ? 'bg-navy text-white' : 'text-ink hover:bg-sand'}`
                    }
                  >
                    {item.label}
                  </NavLink>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <div className="pointer-events-auto flex items-center gap-2 lg:gap-3">
          <Link
            to="/colabora"
            className={`group flex h-12 items-center gap-6 rounded-full bg-yellow px-5 text-base font-semibold text-ink shadow-pill transition-all duration-300 hover:bg-yellow-soft lg:h-16 lg:px-7 ${
              menuOpen ? 'lg:pointer-events-none lg:opacity-0' : ''
            }`}
          >
            <span>Colabora</span>
            <ArrowIcon className="hidden sm:block" />
          </Link>
          <a
            href={AYUDA_HREF}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Necesito ayuda: escribir por WhatsApp (se abre WhatsApp)"
            className="group flex h-12 items-center gap-4 rounded-full bg-white px-5 text-base font-semibold text-ink shadow-pill transition-shadow hover:shadow-lg lg:h-16 lg:gap-6 lg:px-7"
          >
            <span><span className="sm:hidden">Ayuda</span><span className="hidden sm:inline">Necesito ayuda</span></span>
            <ArrowIcon className="hidden sm:block" />
          </a>
        </div>
      </div>

      {/* Móvil: menú a pantalla completa en navy */}
      {menuOpen && (
        <div id="menu-movil" className="pointer-events-auto fixed inset-0 z-10 overflow-y-auto bg-navy px-6 pb-10 pt-28 text-white lg:hidden">
          <nav aria-label="Principal móvil">
            <ul className="space-y-1">
              {mainLinks.map((item) => (
                <li key={item.path}>
                  <NavLink to={item.path} className="block py-2 text-[34px] font-medium leading-tight">
                    {item.label}
                  </NavLink>
                </li>
              ))}
            </ul>
            <ul className="mt-8 space-y-3 border-t border-white/20 pt-6">
              {secondaryLinks.map((item) => (
                <li key={item.path}>
                  <NavLink to={item.path} className="block py-1.5 text-lg text-white/85">
                    {item.label}
                  </NavLink>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      )}
    </header>
  )
}

export default Header
