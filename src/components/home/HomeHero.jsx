import React from 'react'
import Button from '../ui/Button'
import Pill from '../ui/Pill'
import Ribbons from '../ui/Ribbons'
import { CONTACT, FOUNDING_YEAR } from '../../constants/site'
import { HERO_STATS } from '../../constants/stats'

function HomeHero() {
  return (
    <section className="mx-auto grid max-w-[1200px] items-center gap-12 px-5 pb-20 pt-8 lg:grid-cols-2 lg:gap-14 lg:px-10 lg:pb-24 lg:pt-10">
      <div>
        <Pill>Asociación de Venezolanos en Pontevedra · desde {FOUNDING_YEAR}</Pill>
        <h1 className="mt-5 text-[42px] font-extrabold leading-[1.04] tracking-[-0.03em] text-ink sm:text-5xl lg:text-[60px]">
          Una comunidad que no deja a nadie{' '}
          <em className="not-italic text-navy [background:linear-gradient(transparent_62%,#FBD96A_62%_92%,transparent_92%)]">atrás</em>
        </h1>
        <p className="mt-5 max-w-[500px] text-lg leading-relaxed text-muted lg:text-[19px]">
          Te orientamos en tus trámites, en la búsqueda de empleo y en tu formación, y te acompañamos en cada paso de tu vida en Galicia.
        </p>
        <div className="mt-8 flex flex-wrap items-center gap-x-4 gap-y-3">
          <Button to="/contacto" size="lg">Pide orientación</Button>
          <a href={`tel:${CONTACT.phone}`} className="text-[15px] font-semibold text-navy underline-offset-4 hover:underline">
            o llama al {CONTACT.phoneDisplay}
          </a>
        </div>
      </div>

      <div className="relative mx-auto w-full max-w-[540px] lg:max-w-none">
        <Ribbons size="lg" className="-inset-x-2 sm:inset-x-0" />
        <img
          src="/photo/foto_ayuda_1.jpeg"
          alt="Voluntarios de ASOVEDRA entregando ayuda humanitaria a una familia"
          className="relative aspect-square w-full rounded-[32px] object-cover"
        />
        <div className="absolute -bottom-6 left-4 max-w-[240px] rounded-[20px] bg-white px-5 py-4 text-sm text-muted shadow-[0_20px_40px_-24px_rgba(13,21,48,0.45)] sm:-left-7 sm:bottom-9">
          <b className="block text-[30px] font-extrabold leading-tight text-navy">{HERO_STATS.venezuelansSupported.number}</b>
          personas atendidas desde que empezamos
        </div>
      </div>
    </section>
  )
}

export default HomeHero
