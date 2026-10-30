import React from 'react'
import { LuDownload, LuGavel, LuHandshake, LuScale, LuUsers } from 'react-icons/lu'
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

      <main className="min-h-screen">
        <InternalPageHero
          eyebrow="Marco normativo"
          title="Estatutos de Asovedra"
          description="Documento que regula la organización, el funcionamiento interno y el buen gobierno de la asociación."
        />

        <section className="mx-auto max-w-[1440px] px-6 pb-24 lg:px-16 lg:pb-32">
          <SectionHeader
            pill="Transparencia"
            title="Transparencia y normativa"
            subtitle="Los estatutos de Asovedra establecen nuestras bases organizativas, los derechos y obligaciones de las personas asociadas y los procedimientos que ordenan la toma de decisiones."
          />
          <p className="mt-6 text-[17px] font-semibold text-ink">
            Comprometidos con la transparencia y el buen gobierno asociativo.
          </p>
        </section>

        <section className="bg-cloud py-24 lg:py-32">
          <div className="mx-auto max-w-[1440px] px-6 lg:px-16">
            <SectionHeader
              pill="Contenido"
              title="Contenido de los estatutos"
              subtitle="Principales apartados que estructuran el funcionamiento de la asociación."
            />
            <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:mt-16 lg:grid-cols-4">
              {bloques.map((bloque) => {
                const Icon = bloque.icon
                return (
                  <Card key={bloque.title} tone="white" className="p-8 lg:p-9">
                    <Icon aria-hidden="true" className="h-9 w-9 text-navy" />
                    <h3 className="mt-8 text-[24px] font-semibold leading-tight tracking-[-0.01em] text-ink">{bloque.title}</h3>
                    <ul className="mt-4 space-y-2">
                      {bloque.items.map((item) => (
                        <li key={item} className="text-[17px] leading-snug text-muted">
                          {item}
                        </li>
                      ))}
                    </ul>
                  </Card>
                )
              })}
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-[1440px] px-6 py-24 lg:px-16 lg:py-32">
          <Card as="div" tone="navy" className="p-8 sm:p-12 lg:p-16">
            <SectionHeader
              onDark
              pill="Documento"
              title="Consulta nuestros estatutos"
              subtitle="Descarga el documento completo en PDF para conocer el detalle del marco organizativo y normativo de la asociación."
            />
            <div className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-4">
              <Button href="https://asovedra.org/assets/docs/estatutos_asovedra.pdf" variant="yellow" size="lg" icon={<LuDownload />}>
                Descargar estatutos
              </Button>
              <span className="text-[15px] text-white/80">Última actualización: 2025</span>
            </div>
          </Card>
        </section>

        <section className="bg-cloud py-24 lg:py-32">
          <div className="mx-auto max-w-[1440px] px-6 lg:px-16">
            <SectionHeader
              align="center"
              pill="Dudas"
              title="¿Tienes dudas sobre los estatutos?"
              subtitle="Si necesitas aclaraciones sobre cualquier aspecto del documento o sobre el funcionamiento de la asociación, podemos orientarte."
            />
            <div className="mt-10 flex justify-center">
              <Button to="/contacto" size="lg">Contactar con la Junta Directiva</Button>
            </div>
            <p className="mt-6 text-center text-[15px] text-muted">Los estatutos están inscritos en el Registro de Asociaciones correspondiente.</p>
          </div>
        </section>
      </main>
    </>
  )
}

export default Estatutos
