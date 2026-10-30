import React from 'react'
import { LuDownload, LuFileText, LuGavel, LuHandshake, LuScale, LuUsers } from 'react-icons/lu'
import SEO from '../components/SEO'
import InternalPageHero from '../components/layout/InternalPageHero'
import Button from '../components/ui/Button'
import Card from '../components/ui/Card'
import SectionHeader from '../components/ui/SectionHeader'

function Estatutos() {
  const bloques = [
    {
      title: 'Asociados',
      icon: LuUsers,
      items: ['Requisitos y procedimiento de admisión', 'Derechos y obligaciones', 'Tipos de socios', 'Causas de baja']
    },
    {
      title: 'Órganos de gobierno',
      icon: LuScale,
      items: ['Asamblea General', 'Junta Directiva', 'Composición y funciones', 'Procedimientos de elección']
    },
    {
      title: 'Régimen económico',
      icon: LuHandshake,
      items: ['Patrimonio y recursos', 'Cuotas de socios', 'Gestión económica', 'Presupuestos y rendición de cuentas']
    },
    {
      title: 'Modificación y disolución',
      icon: LuGavel,
      items: ['Procedimiento de reforma', 'Causas de disolución', 'Liquidación del patrimonio', 'Destino de bienes']
    }
  ]

  return (
    <>
      <SEO
        title="Estatutos"
        description="Estatutos de ASOVEDRA. Consulta nuestro marco normativo, organizativo y de buen gobierno asociativo."
        keywords="estatutos asovedra, normativa, asociacion iberoamericana, reglamento, documentos legales"
        canonical="/estatutos"
      />

      <main className="min-h-screen pb-24">
        <InternalPageHero
          eyebrow="Marco normativo"
          title="Estatutos de Asovedra"
          description="Documento que regula la organización, el funcionamiento interno y el buen gobierno de la asociación."
        />

        <section className="mx-auto max-w-[1440px] px-6 lg:px-16">
          <Card className="grid gap-6 p-8 sm:p-10 md:grid-cols-[auto_1fr] md:items-start">
            <span className="grid h-14 w-14 place-items-center rounded-2xl bg-pill-blue text-navy">
              <LuScale aria-hidden="true" className="h-7 w-7" />
            </span>
            <div>
              <h2 className="text-2xl font-medium tracking-[-0.02em] text-ink sm:text-3xl">Transparencia y normativa</h2>
              <p className="mt-3 max-w-3xl text-[17px] leading-relaxed text-muted">
                Los estatutos de Asovedra establecen nuestras bases organizativas, los derechos y obligaciones de las personas asociadas y los procedimientos que ordenan la toma de decisiones.
              </p>
              <p className="mt-4 inline-flex rounded-full bg-pill-yellow px-4 py-2 text-sm font-semibold text-[#5c4500]">
                Comprometidos con la transparencia y el buen gobierno asociativo.
              </p>
            </div>
          </Card>
        </section>

        <section className="mx-auto max-w-[1440px] px-6 pt-20 lg:px-16">
          <SectionHeader
            pill="Contenido"
            title="Contenido de los estatutos"
            subtitle="Principales apartados que estructuran el funcionamiento de la asociación."
          />
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {bloques.map((bloque) => {
              const Icon = bloque.icon
              return (
                <Card key={bloque.title} className="p-7">
                  <span className="grid h-12 w-12 place-items-center rounded-2xl bg-pill-blue text-navy">
                    <Icon aria-hidden="true" className="h-6 w-6" />
                  </span>
                  <h3 className="mt-5 text-xl font-bold text-ink">{bloque.title}</h3>
                  <ul className="mt-3 space-y-2">
                    {bloque.items.map((item) => (
                      <li key={item} className="flex gap-2.5 text-[15px] text-muted">
                        <span aria-hidden="true" className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-yellow"></span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </Card>
              )
            })}
          </div>
        </section>

        <section className="mx-auto max-w-[1440px] px-6 pt-20 lg:px-16">
          <div className="grid gap-5 lg:grid-cols-[1.3fr_1fr]">
            <div className="rounded-[32px] bg-navy p-8 text-white sm:p-12">
              <LuFileText aria-hidden="true" className="h-10 w-10 text-yellow" />
              <h2 className="mt-5 text-3xl font-medium tracking-[-0.01em]">Consulta nuestros estatutos</h2>
              <p className="mt-3 max-w-xl text-[17px] text-[#c9d3f0]">
                Descarga el documento completo en PDF para conocer el detalle del marco organizativo y normativo de la asociación.
              </p>
              <div className="mt-7 flex flex-wrap items-center gap-4">
                <Button href="https://asovedra.org/assets/docs/estatutos_asovedra.pdf" variant="yellow" icon={<LuDownload />}>
                  Descargar estatutos
                </Button>
                <span className="text-sm text-[#c9d3f0]">Última actualización: 2025</span>
              </div>
            </div>
            <Card className="flex flex-col p-8 sm:p-10">
              <h2 className="text-2xl font-medium tracking-[-0.02em] text-ink">¿Tienes dudas sobre los estatutos?</h2>
              <p className="mt-3 text-[17px] leading-relaxed text-muted">
                Si necesitas aclaraciones sobre cualquier aspecto del documento o sobre el funcionamiento de la asociación, podemos orientarte.
              </p>
              <div className="mt-auto pt-7">
                <Button to="/contacto">Contactar con la Junta Directiva</Button>
              </div>
              <p className="mt-5 text-sm text-muted">Los estatutos están inscritos en el Registro de Asociaciones correspondiente.</p>
            </Card>
          </div>
        </section>
      </main>
    </>
  )
}

export default Estatutos
