import React, { useEffect, useRef, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { FaChevronDown, FaPhone } from 'react-icons/fa'

const menuStructure = [
  {
    id: 'inicio',
    label: 'Inicio',
    path: '/',
    type: 'link'
  },
  {
    id: 'noticias',
    label: 'Noticias',
    path: '/noticias',
    type: 'link'
  },
  {
    id: 'la-asociacion',
    label: 'La Asociación',
    type: 'dropdown',
    items: [
      { label: 'Sobre Nosotros', path: '/sobre-nosotros', description: 'Misión, trayectoria y trabajo con la comunidad.' },
      { label: 'Estatutos', path: '/estatutos', description: 'Marco organizativo y funcionamiento interno.' },
      { label: 'Declaración de Valores', path: '/declaracion-valores', description: 'Principios que guían nuestra labor social.' },
      { label: 'Plan de Igualdad', path: '/plan-de-igualdad', description: 'Compromisos y medidas para una entidad más justa.' }
    ]
  },
  {
    id: 'servicios',
    label: 'Servicios',
    path: '/servicios',
    type: 'link'
  },
  {
    id: 'contacto',
    label: 'Contacto',
    path: '/contacto',
    type: 'link'
  }
]

export function Header() {
  const location = useLocation()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState(null)
  const [scrolled, setScrolled] = useState(false)
  const headerRef = useRef(null)

  const desktopItemClass = 'rounded-full px-4 py-2.5 text-sm font-semibold transition-all duration-200'
  const desktopItemActiveClass = 'bg-gradient-to-r from-blue-700 to-blue-600 text-white shadow-[0_14px_28px_-18px_rgba(37,99,235,0.95)]'
  const desktopItemInactiveClass = 'text-slate-300 hover:bg-white/7 hover:text-white'
  const mobileItemClass = 'rounded-2xl px-4 py-3 text-sm font-semibold transition-all duration-200'
  const mobileItemActiveClass = 'bg-gradient-to-r from-blue-700 to-blue-600 text-white shadow-[0_14px_28px_-18px_rgba(37,99,235,0.95)]'
  const mobileItemInactiveClass = 'text-slate-300 hover:bg-white/6 hover:text-white'
  const dropdownCardBaseClass = 'rounded-2xl border px-4 py-3 transition-all duration-200'
  const dropdownCardActiveClass = 'border-blue-500/80 bg-blue-700 text-white shadow-[0_16px_32px_-22px_rgba(37,99,235,0.95)]'
  const dropdownCardInactiveClass = 'border-white/8 bg-white/[0.03] text-slate-200 hover:border-blue-500/40 hover:bg-blue-700/12 hover:text-white'

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (headerRef.current && !headerRef.current.contains(event.target)) {
        setActiveDropdown(null)
        setMobileMenuOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  useEffect(() => {
    setMobileMenuOpen(false)
    setActiveDropdown(null)
  }, [location.pathname])

  const toggleDropdown = (id) => {
    setActiveDropdown((prevState) => prevState === id ? null : id)
  }

  const isActiveLink = (path) => location.pathname === path

  const isActiveSection = (items) => items?.some((item) => location.pathname === item.path)

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-3 pt-3 sm:px-4 lg:px-6" ref={headerRef}>
      <div
        className={`mx-auto max-w-7xl rounded-[1.75rem] border text-white transition-all duration-300 ${
          scrolled
            ? 'border-white/10 bg-slate-950/90 shadow-[0_20px_60px_-28px_rgba(15,23,42,0.8)] backdrop-blur-2xl'
            : 'border-white/8 bg-slate-950/78 shadow-[0_14px_40px_-24px_rgba(15,23,42,0.75)] backdrop-blur-xl'
        }`}
      >
        <div className="flex items-center justify-between gap-3 px-4 py-3 sm:px-5 lg:px-6 lg:py-4">
          <Link to="/" className="flex min-w-0 items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-white shadow-[0_10px_24px_-18px_rgba(15,23,42,0.6)]">
              <img src="/favicon.png" alt="ASOVEDRA" className="h-8 w-8" />
            </div>
            <div className="min-w-0">
              <p className="truncate text-[0.68rem] font-semibold uppercase tracking-[0.28em] text-slate-400">Asovedra</p>
              <p className="truncate text-sm font-semibold text-white sm:text-[0.95rem]">Asociación en Pontevedra</p>
            </div>
          </Link>

          <nav className="hidden items-center rounded-full border border-white/8 bg-white/[0.035] p-1.5 lg:flex">
            {menuStructure.map((item) => (
              <div key={item.id} className="relative">
                {item.type === 'link' ? (
                  <Link
                    to={item.path}
                    className={`${desktopItemClass} ${
                      isActiveLink(item.path) ? desktopItemActiveClass : desktopItemInactiveClass
                    }`}
                  >
                    {item.label}
                  </Link>
                ) : (
                  <>
                    <button
                      type="button"
                      onClick={() => toggleDropdown(item.id)}
                      className={`flex items-center gap-2 ${desktopItemClass} ${
                        isActiveSection(item.items) || activeDropdown === item.id
                          ? desktopItemActiveClass
                          : desktopItemInactiveClass
                      }`}
                    >
                      {item.label}
                      <FaChevronDown
                        className={`text-[10px] transition-transform duration-200 ${
                          activeDropdown === item.id ? 'rotate-180' : ''
                        }`}
                      />
                    </button>

                    {activeDropdown === item.id && (
                      <div className="absolute left-0 top-full mt-3 w-[25rem] rounded-[1.5rem] border border-white/10 bg-slate-950/96 p-3 shadow-[0_28px_70px_-30px_rgba(15,23,42,0.9)] backdrop-blur-2xl">
                        <div className="rounded-[1.2rem] border border-white/8 bg-gradient-to-br from-white/[0.06] to-transparent px-4 py-4">
                          <p className="text-[0.68rem] font-semibold uppercase tracking-[0.24em] text-slate-400">La Asociación</p>
                          <p className="mt-2 text-sm leading-6 text-slate-300">Información institucional, principios y documentos que definen la actividad de Asovedra.</p>
                        </div>

                        <div className="mt-3 grid gap-2">
                          {item.items.map((subItem) => (
                            <Link
                              key={subItem.path}
                              to={subItem.path}
                              className={`${dropdownCardBaseClass} ${
                                isActiveLink(subItem.path) ? dropdownCardActiveClass : dropdownCardInactiveClass
                              }`}
                            >
                              <span className="block text-sm font-semibold">{subItem.label}</span>
                              <span className={`mt-1 block text-xs leading-5 ${
                                isActiveLink(subItem.path) ? 'text-blue-100' : 'text-slate-400'
                              }`}>
                                {subItem.description}
                              </span>
                            </Link>
                          ))}
                        </div>
                      </div>
                    )}
                  </>
                )}
              </div>
            ))}
          </nav>

          <div className="flex items-center gap-2 sm:gap-3">
            <a
              href="tel:+34604016113"
              className="hidden items-center gap-2 rounded-full bg-white px-4 py-2.5 text-sm font-semibold text-slate-900 transition-all duration-200 hover:-translate-y-0.5 hover:bg-slate-100 md:flex"
            >
              <FaPhone className="text-xs" />
              <span>604 016 113</span>
            </a>

            <button
              type="button"
              onClick={() => setMobileMenuOpen((prevState) => !prevState)}
              className={`relative flex h-11 w-11 items-center justify-center rounded-2xl border transition-all duration-200 lg:hidden ${
                mobileMenuOpen
                  ? 'border-blue-500 bg-gradient-to-r from-blue-700 to-blue-600 text-white shadow-[0_14px_28px_-18px_rgba(37,99,235,0.95)]'
                  : 'border-white/10 bg-white/[0.04] text-slate-200 hover:border-white/16 hover:bg-white/[0.08] hover:text-white'
              }`}
              aria-label="Abrir menú"
              aria-expanded={mobileMenuOpen}
            >
              <span className="sr-only">Abrir menú</span>
              <span className="relative h-4 w-5">
                <span className={`absolute left-0 top-0 h-0.5 w-5 rounded-full bg-current transition-all duration-300 ${mobileMenuOpen ? 'top-[7px] rotate-45' : ''}`}></span>
                <span className={`absolute left-0 top-[7px] h-0.5 w-5 rounded-full bg-current transition-all duration-300 ${mobileMenuOpen ? 'opacity-0' : 'opacity-100'}`}></span>
                <span className={`absolute left-0 top-[14px] h-0.5 w-5 rounded-full bg-current transition-all duration-300 ${mobileMenuOpen ? 'top-[7px] -rotate-45' : ''}`}></span>
              </span>
            </button>
          </div>
        </div>

        <div
          className={`overflow-hidden transition-all duration-300 lg:hidden ${
            mobileMenuOpen ? 'max-h-[calc(100svh-5.5rem)] opacity-100' : 'max-h-0 opacity-0'
          }`}
        >
          <div className="max-h-[calc(100svh-5.5rem)] overflow-y-auto overscroll-contain border-t border-white/8 px-4 pb-4 pt-3 sm:px-5">
            <div className="rounded-[1.5rem] border border-white/8 bg-white/[0.03] p-4">
              <p className="text-[0.68rem] font-semibold uppercase tracking-[0.24em] text-slate-400">Navegación</p>
              <p className="mt-2 text-sm leading-6 text-slate-300">Acceso directo a servicios, noticias y documentos institucionales.</p>
            </div>

            <nav className="mt-3 space-y-2">
              {menuStructure.map((item) => (
                <div key={item.id}>
                  {item.type === 'link' ? (
                    <Link
                      to={item.path}
                      className={`block ${mobileItemClass} ${
                        isActiveLink(item.path) ? mobileItemActiveClass : mobileItemInactiveClass
                      }`}
                    >
                      {item.label}
                    </Link>
                  ) : (
                    <>
                      <button
                        type="button"
                        onClick={() => toggleDropdown(item.id)}
                        className={`flex w-full items-center justify-between ${mobileItemClass} ${
                          isActiveSection(item.items) || activeDropdown === item.id
                            ? mobileItemActiveClass
                            : mobileItemInactiveClass
                        }`}
                      >
                        {item.label}
                        <FaChevronDown
                          className={`text-[10px] transition-transform duration-200 ${
                            activeDropdown === item.id ? 'rotate-180' : ''
                          }`}
                        />
                      </button>

                      {activeDropdown === item.id && (
                        <div className="mt-2 rounded-[1.5rem] border border-white/8 bg-white/[0.03] p-2.5">
                          <div className="rounded-[1.1rem] border border-white/8 bg-white/[0.03] px-4 py-3">
                            <p className="text-[0.68rem] font-semibold uppercase tracking-[0.22em] text-slate-400">La Asociación</p>
                            <p className="mt-1 text-sm leading-6 text-slate-300">Documentos y apartados clave de la entidad.</p>
                          </div>

                          <div className="mt-2 grid gap-2">
                            {item.items.map((subItem) => (
                              <Link
                                key={subItem.path}
                                to={subItem.path}
                                className={`${dropdownCardBaseClass} ${
                                  isActiveLink(subItem.path)
                                    ? dropdownCardActiveClass
                                    : dropdownCardInactiveClass
                                }`}
                              >
                                <span className="block text-sm font-semibold">{subItem.label}</span>
                                <span className={`mt-1 block text-xs leading-5 ${
                                  isActiveLink(subItem.path) ? 'text-blue-100' : 'text-slate-400'
                                }`}>
                                  {subItem.description}
                                </span>
                              </Link>
                            ))}
                          </div>
                        </div>
                      )}
                    </>
                  )}
                </div>
              ))}
            </nav>

            <a
              href="tel:+34604016113"
              className="mt-4 flex items-center justify-center gap-2 rounded-2xl bg-white px-4 py-3 text-sm font-semibold text-slate-900 transition-all duration-200 hover:bg-slate-100"
            >
              <FaPhone className="text-xs" />
              <span>604 016 113</span>
            </a>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
