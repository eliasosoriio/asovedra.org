import React, { useState, useEffect, useRef } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { FaChevronDown, FaBars, FaTimes, FaPhone } from 'react-icons/fa'

// Estructura del menú con secciones y subsecciones
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
      { label: 'Sobre Nosotros', path: '/sobre-nosotros' },
      { label: 'Estatutos', path: '/estatutos' },
      { label: 'Declaración de Valores', path: '/declaracion-valores' },
      { label: 'Plan de Igualdad', path: '/plan-de-igualdad' }
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
  const dropdownRef = useRef(null)
  const mobileDropdownRef = useRef(null)

  // Detectar scroll para cambiar estilo del header
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Cerrar dropdown al hacer click fuera (solo para desktop)
  useEffect(() => {
    const handleClickOutside = (event) => {
      // Solo aplicar en desktop (pantallas grandes)
      if (window.innerWidth >= 1024) {
        if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
          setActiveDropdown(null)
        }
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  // Cerrar menú móvil al cambiar de ruta
  useEffect(() => {
    setMobileMenuOpen(false)
    setActiveDropdown(null)
  }, [location.pathname])

  const toggleDropdown = (id) => {
    setActiveDropdown(prevState => prevState === id ? null : id)
  }

  const isActiveLink = (path) => {
    return location.pathname === path
  }

  const isActiveSection = (items) => {
    return items?.some(item => location.pathname === item.path)
  }

  return (
    <header 
      className="fixed top-0 left-0 right-0 z-50 bg-slate-900/95 backdrop-blur-lg shadow-lg shadow-black/20 transition-all duration-300"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Logo */}
          <Link to="/" className="flex items-center group">
            <img 
              src="/favicon.png" 
              alt="ASOVEDRA" 
              className="h-10 w-10 transition-transform duration-300 group-hover:scale-105"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8" ref={dropdownRef}>
            {menuStructure.map((item) => (
              <div key={item.id} className="relative">
                {item.type === 'link' ? (
                  <Link
                    to={item.path}
                    className={`px-3 py-2 font-medium text-sm transition-all duration-200 relative ${
                      isActiveLink(item.path)
                        ? 'text-white'
                        : 'text-gray-300 hover:text-white'
                    } ${isActiveLink(item.path) ? 'after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-blue-400' : ''}`}
                  >
                    {item.label}
                  </Link>
                ) : (
                  <>
                    <button
                      onClick={() => toggleDropdown(item.id)}
                      className={`flex items-center gap-1.5 px-3 py-2 font-medium text-sm transition-all duration-200 relative ${
                        isActiveSection(item.items)
                          ? 'text-white'
                          : 'text-gray-300 hover:text-white'
                      } ${isActiveSection(item.items) ? 'after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-blue-400' : ''}`}
                    >
                      {item.label}
                      <FaChevronDown 
                        className={`text-[10px] transition-transform duration-200 ${
                          activeDropdown === item.id ? 'rotate-180' : ''
                        }`}
                      />
                    </button>
                    
                    {/* Dropdown Menu */}
                    {activeDropdown === item.id && (
                      <div className="absolute top-full left-0 mt-1 w-56 bg-slate-900/95 backdrop-blur-lg rounded-lg shadow-lg border border-slate-700 overflow-hidden transition-all duration-200 ease-in-out animate-fade-in-down">
                        {item.items.map((subItem, index) => (
                          <Link
                            key={index}
                            to={subItem.path}
                            className={`block px-4 py-2.5 text-sm font-medium transition-colors duration-150 ${
                              isActiveLink(subItem.path)
                                ? 'bg-blue-600 text-white'
                                : 'text-gray-300 hover:bg-slate-700 hover:text-white'
                            }`}
                          >
                            {subItem.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </>
                )}
              </div>
            ))}
          </nav>

          {/* CTA Button & Mobile Toggle */}
          <div className="flex items-center gap-3">
            <a
              href="tel:+34604016113"
              className="hidden md:flex items-center gap-2 px-4 py-2 rounded-md font-medium text-sm transition-all duration-200 bg-white text-slate-900 hover:bg-gray-100"
            >
              <FaPhone className="text-xs" />
              <span>604 016 113</span>
            </a>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-md transition-colors duration-200 text-gray-300 hover:text-white hover:bg-white/10"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? (
                <FaTimes className="w-5 h-5" />
              ) : (
                <FaBars className="w-5 h-5" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div 
        className={`lg:hidden bg-[#1B2336] border-t border-slate-700 shadow-lg overflow-hidden transition-all duration-300 ease-in-out ${
          mobileMenuOpen 
            ? 'max-h-[calc(100vh-5rem)] opacity-100' 
            : 'max-h-0 opacity-0 border-t-0'
        }`}
      >
        <nav className="px-4 py-3 space-y-0.5">
            {menuStructure.map((item) => (
              <div key={item.id}>
                {item.type === 'link' ? (
                  <Link
                    to={item.path}
                    className={`block px-4 py-2.5 rounded-md font-medium text-sm transition-colors duration-150 ${
                      isActiveLink(item.path)
                        ? 'bg-blue-600 text-white'
                        : 'text-gray-300 hover:bg-[#2a3548] hover:text-white'
                    }`}
                  >
                    {item.label}
                  </Link>
                ) : (
                  <>
                    <button
                      onClick={() => toggleDropdown(item.id)}
                      type="button"
                      className={`w-full flex items-center justify-between px-4 py-2.5 rounded-md font-medium text-sm transition-all duration-200 ${
                        isActiveSection(item.items)
                          ? 'bg-blue-600 text-white'
                          : 'text-gray-300 hover:bg-[#2a3548] hover:text-white'
                      }`}
                    >
                      {item.label}
                      <FaChevronDown 
                        className={`text-[10px] transition-transform duration-300 ${
                          activeDropdown === item.id ? 'rotate-180' : ''
                        }`}
                      />
                    </button>
                    
                    {/* Mobile Dropdown */}
                    {activeDropdown === item.id && (
                      <div className="mt-0.5 ml-4 space-y-0.5 animate-fade-in-down">
                        {item.items.map((subItem, index) => (
                          <Link
                            key={index}
                            to={subItem.path}
                          className={`block pl-4 pr-4 py-2 rounded-md text-sm font-medium transition-colors duration-150 ${
                            isActiveLink(subItem.path)
                              ? 'bg-blue-600 text-white'
                              : 'text-gray-400 hover:bg-[#2a3548] hover:text-white'
                          }`}
                          >
                            {subItem.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </>
                )}
              </div>
            ))}
            
            {/* Mobile CTA */}
            <a
              href="tel:+34604016113"
              className="flex items-center justify-center gap-2 px-4 py-2.5 mt-3 bg-white text-[#1B2336] rounded-md font-medium text-sm hover:bg-gray-100 transition-colors duration-200"
            >
              <FaPhone className="text-xs" />
              <span>604 016 113</span>
            </a>
          </nav>
        </div>
    </header>
  );
}

export default Header;
