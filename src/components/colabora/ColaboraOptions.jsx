import React from 'react'
import { Link } from 'react-router-dom'
import { LuLock, LuMail } from 'react-icons/lu'
import Button from '../ui/Button'
import {
  COLABORA_FALLBACK,
  COLABORA_LINKS,
  TRANSPARENCIA_PATH,
  cancelText,
  resolveColaboraOptions,
  safeLink
} from '../../constants/colabora'
import { CONTACT } from '../../constants/site'

function OptionCard({ option, links }) {
  const featured = option.featured
  const cancel = option.id === 'mensual' ? cancelText(links) : null

  return (
    <article
      className={`flex flex-col rounded-[28px] p-8 sm:p-9 ${
        featured ? 'bg-navy text-white shadow-[0_24px_50px_-28px_rgba(0,30,119,0.8)]' : 'bg-white text-body'
      }`}
    >
      <h3 className={`text-[21px] font-bold ${featured ? 'text-white' : 'text-ink'}`}>{option.title}</h3>
      <p className={`mt-4 text-[44px] font-extrabold leading-none tracking-[-0.03em] ${featured ? 'text-[#FBD96A]' : 'text-navy'}`}>
        {option.price}
        {option.priceSuffix && (
          <small className={`ml-1.5 text-base font-semibold tracking-normal ${featured ? 'text-[#c9d3f0]' : 'text-muted'}`}>
            {option.priceSuffix}
          </small>
        )}
      </p>
      <p className={`mt-4 text-[15px] leading-relaxed ${featured ? 'text-[#c9d3f0]' : 'text-muted'}`}>{option.description}</p>
      {cancel && (
        <p className={`mt-2 text-sm ${featured ? 'text-[#c9d3f0]' : 'text-muted'}`}>
          Es un pago recurrente.{' '}
          <a href={cancel.href} className="font-semibold underline underline-offset-2" {...(cancel.href.startsWith('https:') ? { target: '_blank', rel: 'noopener noreferrer' } : {})}>
            {cancel.text}
          </a>
          .
        </p>
      )}

      <div className="mt-auto pt-7">
        {option.href ? (
          <Button href={option.href} variant={featured ? 'yellow' : 'navy'} className="w-full">
            {option.cta}
          </Button>
        ) : (
          <a
            href={`mailto:${CONTACT.email}`}
            className={`flex items-center justify-center gap-2 rounded-full border px-5 py-3 text-center text-sm font-semibold ${
              featured ? 'border-white/25 text-white hover:bg-white/10' : 'border-line text-navy hover:bg-sand'
            }`}
          >
            <LuMail aria-hidden="true" className="shrink-0" />
            {COLABORA_FALLBACK}
          </a>
        )}
      </div>
    </article>
  )
}

function ColaboraOptions({ links = COLABORA_LINKS }) {
  const options = resolveColaboraOptions(undefined, links)
  const anyPayment = options.some((option) => option.href)
  const renovacion = safeLink(links.renovacion)

  return (
    <div>
      <div className="grid gap-5 md:grid-cols-3">
        {options.map((option) => (
          <OptionCard key={option.id} option={option} links={links} />
        ))}
      </div>

      <div className="mt-8 flex flex-col items-center gap-2 text-center text-[15px] text-[#5c4500]">
        <p>
          ¿Ya eres socio?{' '}
          {renovacion ? (
            <a href={renovacion} target="_blank" rel="noopener noreferrer" className="font-bold underline underline-offset-[3px]">
              Paga tu cuota aquí
            </a>
          ) : (
            <a href={`mailto:${CONTACT.email}`} className="font-bold underline underline-offset-[3px]">
              Escríbenos para renovar tu cuota
            </a>
          )}
        </p>
        <p className="inline-flex flex-wrap items-center justify-center gap-x-2 text-sm">
          {anyPayment && (
            <span className="inline-flex items-center gap-1.5">
              <LuLock aria-hidden="true" /> Pago seguro a través de Stripe ·
            </span>
          )}
          <Link to={TRANSPARENCIA_PATH} className="font-semibold underline underline-offset-[3px]">
            Transparencia
          </Link>
        </p>
      </div>
    </div>
  )
}

export default ColaboraOptions
