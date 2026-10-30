import React from 'react'
import { Link } from 'react-router-dom'
import { LuChevronRight, LuLock } from 'react-icons/lu'
import {
  COLABORA_FALLBACK,
  COLABORA_LINKS,
  TRANSPARENCIA_PATH,
  cancelText,
  resolveColaboraOptions,
  safeLink
} from '../../constants/colabora'
import { CONTACT } from '../../constants/site'

// Tarjetas al estilo de las páginas de planes de Apple: blancas, centradas, precio grande
function OptionCard({ option, links, surface }) {
  const cancel = option.id === 'mensual' ? cancelText(links) : null

  return (
    <li className={`flex flex-col items-center rounded-[28px] px-8 pb-10 pt-12 text-center lg:px-10 ${surface}`}>
      <h3 className="text-[24px] font-semibold leading-tight tracking-[-0.01em] text-ink md:flex md:min-h-[2.5em] md:items-center md:justify-center">{option.title}</h3>
      <p className="mt-6 flex items-baseline gap-1.5">
        <span className="text-[48px] font-semibold leading-none tracking-[-0.02em] text-ink">{option.price}</span>
        {option.priceSuffix && <span className="text-[17px] font-medium text-muted">{option.priceSuffix}</span>}
      </p>
      <p className="mt-6 max-w-[300px] text-[17px] leading-snug text-muted">{option.description}</p>
      {cancel && (
        <p className="mt-3 text-[15px] leading-snug text-muted">
          Pago recurrente.{' '}
          <a href={cancel.href} className="text-navy hover:underline" {...(cancel.href.startsWith('https:') ? { target: '_blank', rel: 'noopener noreferrer' } : {})}>
            Cancélalo cuando quieras
          </a>
        </p>
      )}

      <div className="mt-auto flex w-full flex-col items-center pt-9">
        {option.href ? (
          <a
            href={option.href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`${option.cta} (se abre Stripe en otra pestaña)`}
            className="inline-flex min-h-12 items-center justify-center rounded-full bg-navy px-7 text-[17px] font-medium text-white transition-colors hover:bg-navy-deep"
          >
            {option.cta}
          </a>
        ) : (
          <a
            href={`mailto:${CONTACT.email}`}
            aria-label={`${COLABORA_FALLBACK}: ${CONTACT.email}`}
            className="inline-flex min-h-12 items-center justify-center rounded-full border border-navy px-7 text-[17px] font-medium text-navy transition-colors hover:bg-navy hover:text-white"
          >
            {COLABORA_FALLBACK}
          </a>
        )}
      </div>
    </li>
  )
}

// `tone`: «white» (tarjetas blancas sobre fondo gris) o «grey» (tarjetas grises sobre fondo blanco)
function ColaboraOptions({ links = COLABORA_LINKS, tone = 'white' }) {
  const surface = tone === 'grey' ? 'bg-cloud' : 'bg-white'
  const options = resolveColaboraOptions(undefined, links)
  const anyPayment = options.some((option) => option.href)
  const renovacion = safeLink(links.renovacion)
  const linkClass = 'group inline-flex items-center gap-1 text-navy hover:underline'

  return (
    <div>
      <ul className="grid gap-5 md:grid-cols-3">
        {options.map((option) => (
          <OptionCard key={option.id} option={option} links={links} surface={surface} />
        ))}
      </ul>

      <div className="mt-10 flex flex-col items-center gap-3 text-center text-[17px] text-ink">
        <p>
          ¿Ya eres socio?{' '}
          {renovacion ? (
            <a href={renovacion} target="_blank" rel="noopener noreferrer" className={linkClass}>
              Paga tu cuota aquí <LuChevronRight aria-hidden="true" className="h-4 w-4" />
            </a>
          ) : (
            <a href={`mailto:${CONTACT.email}`} className={linkClass}>
              Escríbenos para renovar tu cuota <LuChevronRight aria-hidden="true" className="h-4 w-4" />
            </a>
          )}
        </p>
        <p className="inline-flex flex-wrap items-center justify-center gap-x-2 text-[15px] text-muted">
          {anyPayment && (
            <span className="inline-flex items-center gap-1.5">
              <LuLock aria-hidden="true" /> Pago seguro a través de Stripe ·
            </span>
          )}
          <Link to={TRANSPARENCIA_PATH} className={linkClass}>
            Transparencia <LuChevronRight aria-hidden="true" className="h-4 w-4" />
          </Link>
        </p>
      </div>
    </div>
  )
}

export default ColaboraOptions
