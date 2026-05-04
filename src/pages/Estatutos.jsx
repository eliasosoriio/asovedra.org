import React from 'react'
import { Link } from 'react-router-dom'
import { FaBalanceScale, FaDownload, FaFileAlt, FaGavel, FaHandshake, FaUsers } from 'react-icons/fa'
import SEO from '../components/SEO'
import ContentSurface from '../components/layout/ContentSurface'
import InternalPageHero from '../components/layout/InternalPageHero'

function Estatutos() {
  const bloques = [
    {
      title: 'Asociados',
      icon: <FaUsers />,
      items: ['Requisitos y procedimiento de admisión', 'Derechos y obligaciones', 'Tipos de socios', 'Causas de baja']
    },
    {
      title: 'Órganos de gobierno',
      icon: <FaBalanceScale />,
      items: ['Asamblea General', 'Junta Directiva', 'Composición y funciones', 'Procedimientos de elección']
    },
    {
      title: 'Régimen económico',
      icon: <FaHandshake />,
      items: ['Patrimonio y recursos', 'Cuotas de socios', 'Gestión económica', 'Presupuestos y rendición de cuentas']
    },
    {
      title: 'Modificación y disolución',
      icon: <FaGavel />,
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

      <main className="min-h-screen bg-[linear-gradient(180deg,#020617_0%,#0f172a_38%,#111827_100%)] pt-24 text-white">
        <InternalPageHero
          eyebrow="Marco normativo"
          title="Estatutos de Asovedra"
          description="Documento que regula la organización, el funcionamiento interno y el buen gobierno de la asociación."
        />

        <section className="px-4 pb-20 lg:pb-24">
          <div className="mx-auto max-w-4xl">
            <ContentSurface className="p-8 text-center lg:p-10">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-[1.4rem] bg-white/[0.08] text-3xl text-blue-300">
                <FaBalanceScale />
              </div>
              <h2 className="mt-6 text-3xl font-bold text-white">Transparencia y normativa</h2>
              <p className="mt-5 text-lg leading-8 text-slate-300">
                Los estatutos de Asovedra establecen nuestras bases organizativas, los derechos y obligaciones de las personas asociadas y los procedimientos que ordenan la toma de decisiones.
              </p>
              <div className="mt-8 rounded-[1.75rem] border border-white/10 bg-[linear-gradient(135deg,rgba(59,130,246,0.24),rgba(15,23,42,0.3))] px-6 py-8 text-white">
                <FaGavel className="mx-auto text-4xl text-blue-200" />
                <p className="mt-4 text-lg font-medium">
                  Comprometidos con la transparencia y el buen gobierno asociativo.
                </p>
              </div>
            </ContentSurface>
          </div>
        </section>

        <section className="px-4 pb-20 lg:pb-24">
          <div className="mx-auto max-w-7xl">
            <div className="mx-auto mb-12 max-w-3xl text-center">
              <h2 className="text-3xl font-bold text-white lg:text-4xl">Contenido de los estatutos</h2>
              <p className="mt-4 text-base leading-7 text-slate-300 lg:text-lg">
                Principales apartados que estructuran el funcionamiento de la asociación.
              </p>
            </div>
            <div className="grid gap-5 md:grid-cols-2">
              {bloques.map((bloque) => (
                <ContentSurface key={bloque.title} className="p-6 sm:p-8">
                  <div className="flex items-start gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/[0.08] text-xl text-blue-300">
                      {bloque.icon}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-white">{bloque.title}</h3>
                      <div className="mt-4 grid gap-3">
                        {bloque.items.map((item) => (
                          <div key={item} className="rounded-2xl border border-white/8 bg-white/[0.03] px-4 py-3 text-sm leading-6 text-slate-300">
                            {item}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </ContentSurface>
              ))}
            </div>
          </div>
        </section>

        <section className="px-4 pb-20 lg:pb-24">
          <div className="mx-auto grid max-w-6xl gap-6 lg:grid-cols-[1fr_0.9fr]">
            <ContentSurface className="p-8 text-center lg:p-10">
              <FaFileAlt className="mx-auto text-5xl text-blue-300" />
              <h2 className="mt-6 text-3xl font-bold text-white">Consulta nuestros estatutos</h2>
              <p className="mt-4 text-base leading-7 text-slate-300 lg:text-lg">
                Descarga el documento completo en PDF para conocer el detalle del marco organizativo y normativo de la asociación.
              </p>
              <a
                href="https://asovedra.org/assets/docs/estatutos_asovedra.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-flex items-center gap-3 rounded-xl bg-white px-7 py-4 text-sm font-semibold text-slate-950 hover:bg-slate-100"
              >
                <FaDownload className="text-lg" />
                Descargar estatutos
              </a>
              <p className="mt-5 text-sm text-slate-400">Última actualización: 2025</p>
            </ContentSurface>

            <ContentSurface className="p-8 text-center lg:p-10">
              <h2 className="text-2xl font-bold text-white lg:text-3xl">Tienes dudas sobre los estatutos</h2>
              <p className="mt-4 text-base leading-7 text-slate-300">
                Si necesitas aclaraciones sobre cualquier aspecto del documento o sobre el funcionamiento de la asociación, podemos orientarte.
              </p>
              <Link
                to="/contacto"
                className="mt-6 inline-flex items-center justify-center rounded-xl border border-white/14 bg-white/[0.05] px-8 py-4 text-sm font-semibold text-white hover:bg-white/[0.08]"
              >
                Contactar con la Junta Directiva
              </Link>
              <p className="mt-6 text-sm text-slate-400">
                Los estatutos están inscritos en el Registro de Asociaciones correspondiente.
              </p>
            </ContentSurface>
          </div>
        </section>
      </main>
    </>
  )
}

export default Estatutos
