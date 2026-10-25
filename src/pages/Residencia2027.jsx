import React from 'react'
import { LuCircleAlert, LuMapPin, LuMessageCircle, LuUsers } from 'react-icons/lu'
import SEO from '../components/SEO'
import InternalPageHero from '../components/layout/InternalPageHero'
import Button from '../components/ui/Button'
import SectionHeader from '../components/ui/SectionHeader'
import { RESIDENCIA } from '../constants/residencia'
import { CONTACT } from '../constants/site'

const audiences = [
  {
    icon: LuUsers,
    title: 'Personas que hicieron la regularización con ASOVEDRA',
    text: 'Si tramitaste tu regularización extraordinaria de 2026 con nosotros, revisaremos contigo tu resolución y tus plazos.'
  },
  {
    icon: LuMapPin,
    title: 'Personas de Galicia en situación de vulnerabilidad',
    text: 'Si necesitas nuestro apoyo por tu situación, aunque no hicieras el trámite con nosotros, también podemos orientarte.'
  }
]

function Cta() {
  return (
    <div className="flex flex-wrap items-center gap-x-4 gap-y-3">
      <Button href={RESIDENCIA.ctaHref} variant="yellow" size="lg" icon={<LuMessageCircle />}>
        {RESIDENCIA.cta}
      </Button>
      <a href={`tel:${CONTACT.phone}`} className="text-[15px] font-semibold text-navy underline-offset-4 hover:underline">
        o llama al {CONTACT.phoneDisplay}
      </a>
    </div>
  )
}

function Residencia2027() {
  return (
    <>
      <SEO
        title="Residencia 2027"
        description={RESIDENCIA.intro}
        keywords="residencia 2027, regularización extraordinaria 2026, prórroga residencia, modificación residencia, asovedra pontevedra"
        canonical="/residencia-2027"
      />

      <main className="min-h-screen pb-24">
        <InternalPageHero eyebrow="Residencia 2027" pillTone="blue" title={RESIDENCIA.headline} />

        <section className="mx-auto max-w-[1200px] px-5 lg:px-10">
          <div className="max-w-3xl space-y-4 text-lg leading-relaxed text-body">
            <p>{RESIDENCIA.intro}</p>
            <p className="font-semibold text-ink">{RESIDENCIA.advance}</p>
          </div>
          <div className="mt-8">
            <Cta />
          </div>
        </section>

        <section className="mx-auto max-w-[1200px] px-5 pt-20 lg:px-10">
          <SectionHeader title="¿A quién va dirigida?" />
          <div className="mt-8 grid gap-5 md:grid-cols-2">
            {audiences.map((item) => {
              const Icon = item.icon
              return (
                <article key={item.title} className="rounded-[24px] border border-line bg-white p-7">
                  <span className="grid h-12 w-12 place-items-center rounded-2xl bg-pill-blue text-navy">
                    <Icon aria-hidden="true" className="h-6 w-6" />
                  </span>
                  <h3 className="mt-5 text-xl font-bold text-ink">{item.title}</h3>
                  <p className="mt-2 text-[15px] leading-relaxed text-muted">{item.text}</p>
                </article>
              )
            })}
          </div>
        </section>

        <section className="mx-auto max-w-[1200px] px-5 pt-20 lg:px-10">
          <div className="rounded-[32px] bg-navy p-8 text-white sm:p-12">
            <h2 className="text-3xl font-extrabold tracking-[-0.025em] sm:text-4xl">Cómo lo haremos</h2>
            <ol className="mt-8 grid gap-6 md:grid-cols-3">
              {RESIDENCIA.steps.map((step, index) => (
                <li key={step} className="rounded-[22px] border border-white/15 bg-white/[0.07] p-6">
                  <span className="grid h-9 w-9 place-items-center rounded-full bg-yellow text-base font-extrabold text-ink">
                    {index + 1}
                  </span>
                  <p className="mt-4 text-[17px] leading-relaxed text-[#dfe6fa]">{step}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section className="mx-auto max-w-[1200px] px-5 pt-20 lg:px-10">
          <div className="flex gap-4 rounded-[24px] border border-[#f3d27a] bg-pill-yellow p-7 sm:p-8">
            <LuCircleAlert aria-hidden="true" className="mt-1 h-6 w-6 shrink-0 text-[#7a5a00]" />
            <div className="space-y-3 text-[16px] leading-relaxed text-[#4a3a00]">
              <h2 className="text-xl font-bold text-ink">Importante</h2>
              <p>
                Los tres meses son el margen que recomendamos para preparar tu caso; no significan que el trámite pueda
                presentarse desde ese momento. Primero comprobaremos tu resolución y tus fechas.
              </p>
              <p>
                Contactar con nosotros no reserva automáticamente una cita ni presenta ninguna solicitud ante Extranjería.
              </p>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-[1200px] px-5 pt-20 lg:px-10">
          <div className="rounded-[28px] bg-sand p-8 sm:p-12">
            <h2 className="max-w-2xl text-3xl font-extrabold tracking-[-0.025em] text-ink">
              Organicemos tu revisión con tiempo
            </h2>
            <p className="mt-3 max-w-2xl text-[17px] text-muted">{RESIDENCIA.advance}</p>
            <div className="mt-7">
              <Cta />
            </div>
          </div>
        </section>
      </main>
    </>
  )
}

export default Residencia2027
