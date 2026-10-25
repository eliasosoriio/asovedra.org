import React from 'react'
import { LuDownload, LuFileText, LuHandshake, LuHeart, LuLeaf, LuScale, LuStar, LuUsers } from 'react-icons/lu'
import SEO from '../components/SEO'
import InternalPageHero from '../components/layout/InternalPageHero'
import Button from '../components/ui/Button'
import Card from '../components/ui/Card'
import SectionHeader from '../components/ui/SectionHeader'

function DeclaracionValores() {
  const valores = [
    { icon: LuHeart, titulo: 'Solidaridad', descripcion: 'Nos apoyamos mutuamente, construyendo una red de ayuda donde cada persona cuenta y nadie queda atrás.' },
    { icon: LuHandshake, titulo: 'Respeto', descripcion: 'Valoramos la diversidad y tratamos a cada persona con dignidad, independientemente de su origen o circunstancias.' },
    { icon: LuUsers, titulo: 'Inclusión', descripcion: 'Promovemos espacios donde todas las personas son bienvenidas y pueden participar activamente.' },
    { icon: LuScale, titulo: 'Transparencia', descripcion: 'Actuamos con honestidad y claridad en nuestras acciones y decisiones.' },
    { icon: LuStar, titulo: 'Compromiso', descripcion: 'Nos dedicamos plenamente al bienestar de nuestra comunidad y al cumplimiento de nuestra misión.' },
    { icon: LuLeaf, titulo: 'Responsabilidad social', descripcion: 'Trabajamos por el bien común y el desarrollo sostenible de la comunidad.' }
  ]

  const principios = [
    'Dignidad humana',
    'No discriminación',
    'Participación activa',
    'Trabajo en red',
    'Mejora continua',
    'Sostenibilidad'
  ]

  return (
    <>
      <SEO
        title="Declaración de Valores"
        description="Declaración de Valores de ASOVEDRA. Conoce los principios y valores que guían nuestro trabajo con la comunidad iberoamericana."
        keywords="valores asovedra, principios, ética, solidaridad, inclusión, transparencia"
        canonical="/declaracion-valores"
      />

      <main className="min-h-screen pb-24">
        <InternalPageHero
          eyebrow="Principios"
          title="Declaración de valores"
          description="Principios que guían nuestras decisiones, relaciones y forma de acompañar a la comunidad."
        />

        <section className="mx-auto max-w-[1200px] px-5 lg:px-10">
          <Card tone="navy" className="p-8 sm:p-10">
            <LuHeart aria-hidden="true" className="h-9 w-9 fill-red text-red" />
            <h2 className="mt-5 text-2xl font-extrabold tracking-[-0.02em] sm:text-3xl">Nuestro compromiso</h2>
            <p className="mt-3 max-w-3xl text-[17px] leading-relaxed text-[#c9d3f0]">
              En Asovedra entendemos los valores como una guía práctica para actuar con cercanía, respeto, responsabilidad y vocación de servicio.
            </p>
          </Card>
        </section>

        <section className="mx-auto max-w-[1200px] px-5 pt-16 lg:px-10">
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {valores.map((valor) => {
              const Icon = valor.icon
              return (
                <Card key={valor.titulo} className="p-7">
                  <span className="grid h-12 w-12 place-items-center rounded-2xl bg-pill-blue text-navy">
                    <Icon aria-hidden="true" className="h-6 w-6" />
                  </span>
                  <h3 className="mt-5 text-xl font-bold text-ink">{valor.titulo}</h3>
                  <p className="mt-2 text-[15px] leading-relaxed text-muted">{valor.descripcion}</p>
                </Card>
              )
            })}
          </div>
        </section>

        <section className="mt-20 bg-sand py-20">
          <div className="mx-auto max-w-[1200px] px-5 lg:px-10">
            <SectionHeader pill="Cómo actuamos" pillTone="white" title="Principios de actuación" />
            <ul className="mt-8 flex flex-wrap gap-3">
              {principios.map((principio) => (
                <li key={principio} className="rounded-full bg-white px-5 py-3 text-base font-semibold text-ink ring-1 ring-line">
                  {principio}
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="mx-auto max-w-[1200px] px-5 pt-20 lg:px-10">
          <Card className="flex flex-col gap-6 p-8 sm:flex-row sm:items-center sm:p-10">
            <span className="grid h-14 w-14 shrink-0 place-items-center rounded-2xl bg-pill-yellow text-[#7a5a00]">
              <LuFileText aria-hidden="true" className="h-7 w-7" />
            </span>
            <div className="flex-1">
              <h2 className="text-2xl font-extrabold tracking-[-0.02em] text-ink">Consulta la declaración completa</h2>
              <p className="mt-2 text-[17px] text-muted">
                Puedes descargar el documento íntegro con el detalle de nuestros principios y compromisos institucionales.
              </p>
            </div>
            <Button href="https://asovedra.org/assets/docs/declaracion_valores_asovedra.pdf" icon={<LuDownload />}>
              Descargar PDF
            </Button>
          </Card>
        </section>
      </main>
    </>
  )
}

export default DeclaracionValores
