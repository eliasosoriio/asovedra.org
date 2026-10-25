import React, { useEffect, useRef, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { LuChevronDown, LuMenu, LuX } from 'react-icons/lu'
import ColaboraButton from '../ui/ColaboraButton'

const asociacionItems = [
  { label: 'Sobre nosotros', path: '/sobre-nosotros', description: 'Misión, trayectoria y equipo.' },
  { label: 'Estatutos', path: '/estatutos', description: 'Marco organizativo y funcionamiento interno.' },
  { label: 'Declaración de valores', path: '/declaracion-valores', description: 'Principios que guían nuestra labor.' },
  { label: 'Plan de igualdad', path: '/plan-de-igualdad', description: 'Compromisos para una entidad más justa.' }
]

const mainLinks = [
  { label: 'Servicios', path: '/servicios' },
  { label: 'Residencia 2027', path: '/residencia-2027', highlight: true },
  { label: 'Noticias', path: '/noticias' },
  { label: 'Contacto', path: '/contacto' }
]

const linkBase = 'rounded-full px-3.5 py-2.5 text-[15px] font-semibold transition-colors duration-150'

function navClass({ isActive }, highlight) {
  if (highlight) return `${linkBase} bg-pill-blue text-navy hover:bg-[#e2e8f8]`
  return `${linkBase} ${isActive ? 'text-navy underline decoration-yellow decoration-[3px] underline-offset-8' : 'text-[#2d3548] hover:bg-white hover:text-navy'}`
}

export function Header() {
  const location = useLocation()
  const [menuOpen, setMenuOpen] = useState(false)
  const [dropdownOpen, setDropdownOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const headerRef = useRef(null)
  const dropdownButtonRef = useRef(null)
  const menuButtonRef = useRef(null)
  const openRef = useRef({ dropdown: false, menu: false })
  openRef.current = { dropdown: dropdownOpen, menu: menuOpen }

  const asociacionActive = asociacionItems.some((item) => item.path === location.pathname)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 8)
    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (headerRef.current && !headerRef.current.contains(event.target)) {
        setDropdownOpen(false)
        setMenuOpen(false)
      }
    }
    const handleKey = (event) => {
      if (event.key !== 'Escape') return
      if (openRef.current.dropdown) dropdownButtonRef.current?.focus()
      if (openRef.current.menu) menuButtonRef.current?.focus()
      setDropdownOpen(false)
      setMenuOpen(false)
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
    setDropdownOpen(false)
  }, [location.pathname])

  return (
    <header
      ref={headerRef}
      className={`sticky top-0 z-50 bg-cream/95 backdrop-blur transition-[border-color,box-shadow] duration-200 ${
        scrolled ? 'border-b border-line shadow-[0_10px_30px_-24px_rgba(13,21,48,0.45)]' : 'border-b border-transparent'
      }`}
    >
      <div className="mx-auto flex h-[76px] max-w-[1200px] items-center gap-3 px-4 sm:px-5 lg:h-[92px] lg:gap-8 lg:px-10">
        <Link to="/" className="flex shrink-0 items-center gap-3" aria-label="ASOVEDRA, inicio">
          <img src="/favicon.png" alt="" className="h-10 w-auto lg:h-[46px]" />
          <span className="hidden text-[22px] font-extrabold tracking-[-0.01em] text-navy min-[400px]:block">Asovedra</span>
        </Link>

        <nav aria-label="Principal" className="hidden items-center gap-1 lg:flex">
          <div className="relative">
            <button
              ref={dropdownButtonRef}
              type="button"
              aria-expanded={dropdownOpen}
              aria-controls="menu-asociacion"
              onClick={() => setDropdownOpen((open) => !open)}
              className={`${linkBase} inline-flex items-center gap-1.5 ${
                asociacionActive || dropdownOpen ? 'text-navy' : 'text-[#2d3548] hover:bg-white hover:text-navy'
              }`}
            >
              La Asociación
              <LuChevronDown aria-hidden="true" className={`h-4 w-4 transition-transform duration-200 ${dropdownOpen ? 'rotate-180' : ''}`} />
            </button>

            {dropdownOpen && (
              <div
                id="menu-asociacion"
                className="absolute left-0 top-[calc(100%+10px)] w-[340px] rounded-[22px] bg-white p-2.5 shadow-[0_24px_50px_-20px_rgba(13,21,48,0.35)] ring-1 ring-line"
              >
                {asociacionItems.map((item) => (
                  <NavLink
                    key={item.path}
                    to={item.path}
                    className={({ isActive }) =>
                      `block rounded-2xl px-4 py-3 transition-colors ${isActive ? 'bg-pill-blue' : 'hover:bg-sand'}`
                    }
                  >
                    <span className="block text-[15px] font-bold text-ink">{item.label}</span>
                    <span className="mt-0.5 block text-[13px] text-muted">{item.description}</span>
                  </NavLink>
                ))}
              </div>
            )}
          </div>

          {mainLinks.map((item) => (
            <NavLink key={item.path} to={item.path} className={(state) => navClass(state, item.highlight)}>
              {item.label}
            </NavLink>
          ))}
        </nav>

        <div className="ml-auto flex items-center gap-2">
          <ColaboraButton />
          <button
            ref={menuButtonRef}
            type="button"
            aria-expanded={menuOpen}
            aria-controls="menu-movil"
            aria-label={menuOpen ? 'Cerrar menú' : 'Abrir menú'}
            onClick={() => setMenuOpen((open) => !open)}
            className="grid h-12 w-12 place-items-center rounded-full border border-line bg-white text-ink lg:hidden"
          >
            {menuOpen ? <LuX aria-hidden="true" className="h-5 w-5" /> : <LuMenu aria-hidden="true" className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {menuOpen && (
        <div id="menu-movil" className="max-h-[calc(100svh-76px)] overflow-y-auto border-t border-line bg-cream px-4 pb-6 pt-4 sm:px-5 lg:hidden">
          <nav aria-label="Principal móvil" className="mx-auto flex max-w-[1200px] flex-col gap-1">
            {mainLinks.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                className={({ isActive }) =>
                  `rounded-2xl px-4 py-3 text-base font-semibold ${
                    item.highlight ? 'bg-pill-blue text-navy' : isActive ? 'bg-white text-navy' : 'text-ink hover:bg-white'
                  }`
                }
              >
                {item.label}
              </NavLink>
            ))}
            <NavLink
              to="/colabora"
              className={({ isActive }) =>
                `rounded-2xl px-4 py-3 text-base font-semibold ${isActive ? 'bg-white text-navy' : 'text-ink hover:bg-white'}`
              }
            >
              Colabora con ASOVEDRA
            </NavLink>
            <p className="mt-4 px-4 text-xs font-bold uppercase tracking-[0.14em] text-muted">La Asociación</p>
            {asociacionItems.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                className={({ isActive }) =>
                  `rounded-2xl px-4 py-3 text-base font-semibold ${isActive ? 'bg-white text-navy' : 'text-ink hover:bg-white'}`
                }
              >
                {item.label}
              </NavLink>
            ))}
          </nav>
        </div>
      )}
    </header>
  )
}

export default Header
