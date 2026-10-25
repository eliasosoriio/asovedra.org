import React from 'react'
import { Link } from 'react-router-dom'
import { FaFacebookF, FaInstagram, FaTelegramPlane } from 'react-icons/fa'
import { FaXTwitter } from 'react-icons/fa6'
import { CONTACT, currentYear } from '../../constants/site'

const socials = [
  { label: 'Facebook', href: 'https://facebook.com/asovedra', icon: FaFacebookF },
  { label: 'Instagram', href: 'https://instagram.com/asovedra', icon: FaInstagram },
  { label: 'X (Twitter)', href: 'https://twitter.com/asovedra', icon: FaXTwitter },
  { label: 'Telegram', href: 'https://t.me/asovedra', icon: FaTelegramPlane }
]

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

const linkClass = 'text-[#b8c0d6] transition-colors hover:text-white'

function Footer() {
  return (
    <footer className="rounded-t-[40px] bg-ink text-[15px] text-[#b8c0d6]">
      <div className="mx-auto grid max-w-[1200px] gap-10 px-5 pb-14 pt-16 sm:grid-cols-2 lg:grid-cols-[1.5fr_1fr_1fr_1.2fr] lg:px-10 lg:pt-[72px]">
        <div>
          <div className="flex items-center gap-3">
            <img src="/favicon.png" alt="" className="h-10 w-auto" />
            <span className="text-xl font-extrabold text-white">Asovedra</span>
          </div>
          <p className="mt-4 max-w-xs leading-relaxed">
            Asociación de Venezolanos en Pontevedra. Sin ánimo de lucro, al servicio de la comunidad iberoamericana en Galicia.
          </p>
          <ul className="mt-6 flex gap-2.5" aria-label="Redes sociales">
            {socials.map(({ label, href, icon }) => {
              const Icon = icon
              return (
              <li key={label}>
                <a
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="grid h-10 w-10 place-items-center rounded-full bg-white/[0.08] text-white transition-colors hover:bg-yellow hover:text-ink"
                >
                  <Icon aria-hidden="true" className="h-4 w-4" />
                </a>
              </li>
              )
            })}
          </ul>
        </div>

        {columns.map((column) => (
          <div key={column.title}>
            <h2 className="mb-4 text-[15px] font-bold text-white">{column.title}</h2>
            <ul className="space-y-2.5">
              {column.links.map((link) => (
                <li key={link.label}>
                  <Link to={link.to} className={linkClass}>{link.label}</Link>
                </li>
              ))}
            </ul>
          </div>
        ))}

        <div>
          <h2 className="mb-4 text-[15px] font-bold text-white">Contacto</h2>
          <address className="space-y-2.5 not-italic">
            <p>{CONTACT.address}<br />{CONTACT.city}</p>
            <p><a href={`tel:${CONTACT.phone}`} className={linkClass}>{CONTACT.phoneDisplay}</a></p>
            <p><a href={`mailto:${CONTACT.email}`} className={linkClass}>{CONTACT.email}</a></p>
            <ul className="pt-1 text-sm">
              {CONTACT.hours.map((line) => <li key={line}>{line}</li>)}
            </ul>
          </address>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-[1200px] flex-col gap-3 px-5 py-6 text-[13px] sm:flex-row sm:items-center sm:justify-between lg:px-10">
          <span>© {currentYear()} ASOVEDRA · Asociación de Venezolanos en Pontevedra</span>
          <ul className="flex flex-wrap gap-x-5 gap-y-2">
            {legalLinks.map((link) => (
              <li key={link.to}><Link to={link.to} className={linkClass}>{link.label}</Link></li>
            ))}
            <li><Link to="/portal/login" className="text-[#7c86a3] transition-colors hover:text-white">Portal de empleados</Link></li>
          </ul>
        </div>
      </div>
    </footer>
  )
}

export default Footer
