import React from 'react'
import { LuChevronRight, LuCircleAlert, LuMapPin, LuMessageCircle, LuUsers } from 'react-icons/lu'
import SEO from '../components/SEO'
import InternalPageHero from '../components/layout/InternalPageHero'
import Button from '../components/ui/Button'
import Card from '../components/ui/Card'
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

// Botón amarillo (siempre sobre navy) y enlace secundario al teléfono al estilo Apple
function Cta() {
  return (
    <div className="flex flex-wrap items-center gap-x-6 gap-y-4">
      <Button href={RESIDENCIA.ctaHref} variant="yellow" size="lg" icon={<LuMessageCircle />}>
        {RESIDENCIA.cta}
      </Button>
      <a href={`tel:${CONTACT.phone}`} className="group inline-flex items-center gap-1 text-[17px] text-white hover:underline">
        o llama al {CONTACT.phoneDisplay}
        <LuChevronRight aria-hidden="true" className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
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

      <main className="min-h-screen">
        <InternalPageHero eyebrow="Residencia 2027" title={RESIDENCIA.headline} description={RESIDENCIA.intro}>
          <p className="mt-5 max-w-3xl text-[19px] font-semibold leading-relaxed text-white lg:text-[22px]">{RESIDENCIA.advance}</p>
          <div className="mt-10">
            <Cta />
          </div>
        </InternalPageHero>

        {/* Primera sección gris: se pega a la cabecera anulando su margen inferior */}
        <section className="-mt-20 bg-cloud py-24 lg:-mt-28 lg:py-32">
          <div className="mx-auto max-w-[1440px] px-6 lg:px-16">
            <SectionHeader pill="Destinatarios" title="¿A quién va dirigida?" />
            <div className="mt-14 grid gap-5 md:grid-cols-2 lg:mt-16">
              {audiences.map((item) => {
                const Icon = item.icon
                return (
                  <Card key={item.title} tone="white" className="p-8 lg:p-9">
                    <Icon aria-hidden="true" className="h-9 w-9 text-navy" />
                    <h3 className="mt-8 text-[24px] font-semibold leading-tight tracking-[-0.01em] text-ink">{item.title}</h3>
                    <p className="mt-3 text-[17px] leading-snug text-muted">{item.text}</p>
                  </Card>
                )
              })}
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-[1440px] px-6 py-24 lg:px-16 lg:py-32">
          <SectionHeader pill="Proceso" title="Cómo lo haremos." />
          <ol className="mt-14 grid gap-5 md:grid-cols-3 lg:mt-16">
            {RESIDENCIA.steps.map((step, index) => (
              <Card as="li" key={step} tone="grey" className="p-8 lg:p-9">
                <p className="text-[15px] font-semibold text-muted">Paso {index + 1}</p>
                <p className="mt-3 text-[22px] font-semibold leading-snug tracking-[-0.01em] text-ink">{step}</p>
              </Card>
            ))}
          </ol>
        </section>

        <section className="bg-cloud py-24 lg:py-32">
          <div className="mx-auto max-w-[1440px] px-6 lg:px-16">
            <SectionHeader pill="Antes de empezar" title="Importante." />
            <Card tone="white" className="mt-14 p-8 lg:mt-16 lg:p-9">
              <LuCircleAlert aria-hidden="true" className="h-9 w-9 text-navy" />
              <div className="mt-6 max-w-3xl space-y-3 text-[17px] leading-snug text-muted">
                <p>
                  Los tres meses son el margen que recomendamos para preparar tu caso; no significan que el trámite pueda
                  presentarse desde ese momento. Primero comprobaremos tu resolución y tus fechas.
                </p>
                <p>
                  Contactar con nosotros no reserva automáticamente una cita ni presenta ninguna solicitud ante Extranjería.
                </p>
              </div>
            </Card>
          </div>
        </section>

        <section className="mx-auto max-w-[1440px] px-6 py-24 lg:px-16 lg:py-32">
          <Card as="div" tone="navy" className="p-8 sm:p-12 lg:p-16">
            <SectionHeader onDark title="Organicemos tu revisión con tiempo" subtitle={RESIDENCIA.advance} />
            <div className="mt-10">
              <Cta />
            </div>
          </Card>
        </section>
      </main>
    </>
  )
}

export default Residencia2027
