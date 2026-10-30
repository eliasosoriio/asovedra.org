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

      <main className="min-h-screen">
        <InternalPageHero
          eyebrow="Principios"
          title="Declaración de valores"
          description="Principios que guían nuestras decisiones, relaciones y forma de acompañar a la comunidad."
        />

        {/* Compromiso y valores: primera sección blanca, la cabecera ya deja el margen superior */}
        <section className="mx-auto max-w-[1440px] px-6 pb-24 lg:px-16 lg:pb-32">
          <SectionHeader
            title="Nuestro compromiso"
            subtitle="En Asovedra entendemos los valores como una guía práctica para actuar con cercanía, respeto, responsabilidad y vocación de servicio."
          />
          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:mt-16 lg:grid-cols-3">
            {valores.map((valor) => {
              const Icon = valor.icon
              return (
                <Card key={valor.titulo} className="p-8 lg:p-9">
                  <Icon aria-hidden="true" className="h-9 w-9 text-navy" />
                  <h3 className="mt-8 text-[24px] font-semibold tracking-[-0.01em] text-ink">{valor.titulo}</h3>
                  <p className="mt-3 text-[17px] leading-snug text-muted">{valor.descripcion}</p>
                </Card>
              )
            })}
          </div>
        </section>

        <section className="bg-cloud py-24 lg:py-32">
          <div className="mx-auto max-w-[1440px] px-6 lg:px-16">
            <SectionHeader pill="Cómo actuamos" title="Principios de actuación" />
            <ul className="mt-14 flex flex-wrap gap-3 lg:mt-16">
              {principios.map((principio) => (
                <li key={principio} className="rounded-full bg-white px-6 py-3 text-[17px] font-semibold text-ink">
                  {principio}
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Llamada final: descarga del documento completo */}
        <section className="mx-auto max-w-[1440px] px-6 py-24 lg:px-16 lg:py-32">
          <Card as="div" tone="navy" className="flex flex-col items-center px-8 py-14 text-center lg:px-16 lg:py-20">
            <LuFileText aria-hidden="true" className="h-9 w-9 text-yellow" />
            <SectionHeader
              onDark
              align="center"
              className="mt-8"
              title="Consulta la declaración completa"
              subtitle="Puedes descargar el documento íntegro con el detalle de nuestros principios y compromisos institucionales."
            />
            <Button
              href="https://asovedra.org/assets/docs/declaracion_valores_asovedra.pdf"
              variant="yellow"
              icon={<LuDownload />}
              className="mt-10"
            >
              Descargar PDF
            </Button>
          </Card>
        </section>
      </main>
    </>
  )
}

export default DeclaracionValores
