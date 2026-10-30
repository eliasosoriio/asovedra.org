import React from 'react'
import { Link } from 'react-router-dom'
import { CONTACT, currentYear, whatsappUrl } from '../../constants/site'
import ArrowIcon from '../ui/ArrowIcon'

const columns = [
  {
    title: 'Asociación',
    links: [
      { label: 'Sobre nosotros', to: '/sobre-nosotros' },
      { label: 'Estatutos', to: '/estatutos' },
      { label: 'Declaración de valores', to: '/declaracion-valores' },
      { label: 'Plan de igualdad', to: '/plan-de-igualdad' }
    ]
  },
  {
    title: 'Participa',
    links: [
      { label: 'Colabora con ASOVEDRA', to: '/colabora' },
      { label: 'Residencia 2027', to: '/residencia-2027' },
      { label: 'Emergencia Venezuela', to: '/emergencia-terremoto-venezuela' },
      { label: 'Voluntariado', to: '/contacto' }
    ]
  }
]

const legalLinks = [
  { label: 'Aviso legal', to: '/aviso-legal' },
  { label: 'Privacidad', to: '/politica-privacidad' },
  { label: 'Cookies', to: '/politica-cookies' },
  { label: 'Accesibilidad', to: '/accesibilidad' }
]

const linkClass = 'text-white/80 transition-colors hover:text-white'

function Footer() {
  return (
    <footer className="bg-navy text-white">
      <div className="mx-auto max-w-[1440px] px-6 pb-16 pt-24 lg:px-16 lg:pt-36">
        <p className="text-xl text-white/80">¿Hablamos?</p>
        <h2 className="section-title mt-2">Escríbenos</h2>
        <a
          href={`mailto:${CONTACT.email}`}
          className="mt-8 inline-block break-all text-3xl font-medium underline decoration-1 underline-offset-[10px] transition-colors hover:text-yellow sm:text-5xl lg:text-[64px]"
        >
          {CONTACT.email}
        </a>

        <div className="mt-12 flex flex-wrap gap-3">
          <a
            href={whatsappUrl('Hola, necesito ayuda.')}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex min-h-16 items-center gap-6 rounded-full bg-white px-7 text-[17px] font-semibold text-ink shadow-pill"
          >
            WhatsApp {CONTACT.phoneDisplay}
            <ArrowIcon />
          </a>
          <a
            href={`tel:${CONTACT.phone}`}
            className="inline-flex min-h-16 items-center rounded-full border border-white/60 px-7 text-[17px] font-semibold transition-colors hover:border-white"
          >
            Llamar
          </a>
        </div>

        <div className="mt-20 grid gap-12 border-t border-white/20 pt-12 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <h3 className="text-sm font-medium uppercase tracking-[0.06em] text-white/70">Oficina</h3>
            <address className="mt-4 space-y-1 not-italic text-lg">
              <p>{CONTACT.address}</p>
              <p>{CONTACT.city}</p>
            </address>
          </div>
          <div>
            <h3 className="text-sm font-medium uppercase tracking-[0.06em] text-white/70">Horario</h3>
            <ul className="mt-4 space-y-1 text-lg">
              {CONTACT.hours.map((line) => <li key={line}>{line}</li>)}
            </ul>
          </div>
          {columns.map((column) => (
            <div key={column.title}>
              <h3 className="text-sm font-medium uppercase tracking-[0.06em] text-white/70">{column.title}</h3>
              <ul className="mt-4 space-y-2 text-lg">
                {column.links.map((link) => (
                  <li key={link.label}>
                    <Link to={link.to} className={linkClass}>{link.label}</Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <div className="border-t border-white/20">
        <div className="mx-auto flex max-w-[1440px] flex-col gap-4 px-6 py-7 text-base text-white/80 sm:flex-row sm:items-center sm:justify-between lg:px-16 lg:pb-24">
          <span>ASOVEDRA {currentYear()}© · Asociación de Venezolanos en Pontevedra</span>
          <ul className="flex flex-wrap gap-x-6 gap-y-2">
            {legalLinks.map((link) => (
              <li key={link.to}><Link to={link.to} className={linkClass}>{link.label}</Link></li>
            ))}
            <li><Link to="/portal/login" className={linkClass}>Portal de empleados</Link></li>
          </ul>
        </div>
      </div>
    </footer>
  )
}

export default Footer
