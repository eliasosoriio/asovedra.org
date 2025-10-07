import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <footer className="bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900 text-white">
      {/* Main Footer Content */}
      <div className="max-w-6xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          
          {/* About Section */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <span className="text-2xl font-bold text-primary-dark">
                ASOVEDRA
              </span>
            </div>
            <p className="text-primary-dark text-sm leading-relaxed">
              Asociación de Venezolanos en Pontevedra. Tu aliado en España, brindamos apoyo integral a la comunidad venezolana con servicios especializados.
            </p>
            <div className="flex space-x-4" aria-label="Redes sociales">
              <a href="https://facebook.com/asovedra" target="_blank" rel="noopener" className="text-primary-dark hover:text-yellow-400 transition-colors duration-300" aria-label="Facebook">
                <span className="sr-only">Facebook</span>
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M22.675 0h-21.35C.597 0 0 .597 0 1.333v21.334C0 23.403.597 24 1.325 24H12.82v-9.294H9.692v-3.622h3.128V8.413c0-3.1 1.893-4.788 4.657-4.788 1.325 0 2.464.099 2.797.143v3.24l-1.918.001c-1.504 0-1.796.716-1.796 1.767v2.318h3.587l-.467 3.622h-3.12V24h6.116C23.403 24 24 23.403 24 22.667V1.333C24 .597 23.403 0 22.675 0z"/>
                </svg>
              </a>

              <a href="https://instagram.com/asovedra" target="_blank" rel="noopener" className="text-primary-dark hover:text-blue-400 transition-colors duration-300" aria-label="Instagram">
                <span className="sr-only">Instagram</span>
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <rect x="3" y="3" width="18" height="18" rx="5" strokeWidth="2" />
                  <circle cx="12" cy="12" r="3.2" strokeWidth="2" />
                  <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" />
                </svg>
              </a>

              <a href="https://twitter.com/asovedra" target="_blank" rel="noopener" className="text-primary-dark hover:text-red-400 transition-colors duration-300" aria-label="X (Twitter)">
                <span className="sr-only">X</span>
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M23.954 4.569c-.885.389-1.83.654-2.825.775 1.014-.611 1.794-1.574 2.163-2.723-.951.564-2.005.974-3.127 1.195-.897-.959-2.178-1.557-3.594-1.557-2.717 0-4.92 2.203-4.92 4.917 0 .39.045.765.127 1.124C7.691 8.094 4.066 6.13 1.64 3.161c-.427.722-.666 1.561-.666 2.475 0 1.71.87 3.213 2.188 4.096-.807-.026-1.566-.248-2.229-.616v.062c0 2.386 1.693 4.374 3.946 4.827-.413.111-.849.171-1.296.171-.314 0-.615-.03-.916-.086.631 1.953 2.445 3.377 4.6 3.417-1.68 1.318-3.809 2.105-6.102 2.105-.396 0-.79-.023-1.17-.069 2.189 1.402 4.768 2.22 7.557 2.22 9.054 0 14-7.496 14-13.986 0-.21-.006-.423-.016-.634.961-.695 1.8-1.562 2.462-2.549z"/>
                </svg>
              </a>

              <a href="http://t.me/asovedra" target="_blank" rel="noopener" className="text-primary-dark hover:text-blue-600 transition-colors duration-300" aria-label="Telegram">
                <span className="sr-only">Telegram</span>
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M22.5 2.5L1.5 9.5l4.5 1.6 1.6 5.2c.3 1 1.1 1.2 2 0.8l3.3-2.1 4.8 3.5c.9.6 1.6.3 1.8-.8L23 3.3c.2-1.1-.6-1.3-1.1-.8z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white">Enlaces Rápidos</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-primary-dark hover:text-yellow-400 transition-colors duration-300 text-sm">
                  Inicio
                </Link>
              </li>
              <li>
                <Link to="/nosotros" className="text-primary-dark hover:text-yellow-400 transition-colors duration-300 text-sm">
                  Sobre Nosotros
                </Link>
              </li>
              <li>
                <Link to="/servicios" className="text-primary-dark hover:text-yellow-400 transition-colors duration-300 text-sm">
                  Servicios
                </Link>
              </li>
              <li>
                <Link to="/noticias" className="text-primary-dark hover:text-yellow-400 transition-colors duration-300 text-sm">
                  Noticias
                </Link>
              </li>
              <li>
                <Link to="/contacto" className="text-primary-dark hover:text-yellow-400 transition-colors duration-300 text-sm">
                  Contacto
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white">Servicios</h3>
            <ul className="space-y-2">
              <li className="text-primary-dark text-sm">Asesoría Legal</li>
              <li className="text-primary-dark text-sm">Inserción Laboral</li>
              <li className="text-primary-dark text-sm">Apoyo Psicológico</li>
              <li className="text-primary-dark text-sm">Integración Social</li>
              <li className="text-primary-dark text-sm">Talleres y Formación</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white">Contacto</h3>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <svg className="w-4 h-4 text-yellow-400 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                </svg>
                <span className="text-primary-dark text-sm">
                  Pontevedra, Galicia<br />España
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <svg className="w-4 h-4 text-yellow-400 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                </svg>
                <span className="text-primary-dark text-sm">info@asovedra.org</span>
              </div>
              <div className="flex items-center space-x-3">
                <svg className="w-4 h-4 text-yellow-400 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                </svg>
                <span className="text-primary-dark text-sm">+34 604 016 113</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-700">
        <div className="max-w-6xl mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-primary-dark text-sm text-center md:text-left">
              © 2025 ASOVEDRA - Asociación de Venezolanos en Pontevedra. Todos los derechos reservados.
            </div>
            <div className="flex items-center space-x-6">
              <Link to="/aviso-legal" className="text-primary-dark hover:text-yellow-400 text-sm transition-colors duration-300">
                Aviso Legal
              </Link>
              <Link to="/politica-privacidad" className="text-primary-dark hover:text-yellow-400 text-sm transition-colors duration-300">
                Política de Privacidad
              </Link>
              <Link to="/politica-cookies" className="text-primary-dark hover:text-yellow-400 text-sm transition-colors duration-300">
                Política de Cookies
              </Link>
              <Link to="/accesibilidad" className="text-primary-dark hover:text-yellow-400 text-sm transition-colors duration-300">
                Accesibilidad
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
