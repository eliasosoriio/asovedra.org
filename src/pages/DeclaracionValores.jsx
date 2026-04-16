import React from 'react'
import {
  FaBalanceScale,
  FaDownload,
  FaFileAlt,
  FaHandshake,
  FaHeart,
  FaLeaf,
  FaStar,
  FaUsers
} from 'react-icons/fa'
import SEO from '../components/SEO'
import ContentSurface from '../components/layout/ContentSurface'
import InternalPageHero from '../components/layout/InternalPageHero'

function DeclaracionValores() {
  const valores = [
    { icon: <FaHeart />, titulo: 'Solidaridad', descripcion: 'Nos apoyamos mutuamente, construyendo una red de ayuda donde cada persona cuenta y nadie queda atrás.' },
    { icon: <FaHandshake />, titulo: 'Respeto', descripcion: 'Valoramos la diversidad y tratamos a cada persona con dignidad, independientemente de su origen o circunstancias.' },
    { icon: <FaUsers />, titulo: 'Inclusión', descripcion: 'Promovemos espacios donde todas las personas son bienvenidas y pueden participar activamente.' },
    { icon: <FaBalanceScale />, titulo: 'Transparencia', descripcion: 'Actuamos con honestidad y claridad en nuestras acciones y decisiones.' },
    { icon: <FaStar />, titulo: 'Compromiso', descripcion: 'Nos dedicamos plenamente al bienestar de nuestra comunidad y al cumplimiento de nuestra misión.' },
    { icon: <FaLeaf />, titulo: 'Responsabilidad social', descripcion: 'Trabajamos por el bien común y el desarrollo sostenible de la comunidad.' }
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

      <main className="min-h-screen bg-[linear-gradient(180deg,#020617_0%,#0f172a_38%,#111827_100%)] pt-24 text-white">
        <InternalPageHero
          eyebrow="Principios"
          title="Declaración de valores"
          description="Principios que guían nuestras decisiones, relaciones y forma de acompañar a la comunidad."
        />

        <section className="px-4 pb-20 lg:pb-24">
          <div className="mx-auto max-w-4xl">
            <ContentSurface className="p-8 text-center lg:p-10">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-[1.4rem] bg-white/[0.08] text-3xl text-blue-300">
                <FaHeart />
              </div>
              <h2 className="mt-6 text-3xl font-bold text-white">Nuestro compromiso</h2>
              <p className="mt-5 text-lg leading-8 text-slate-300">
                En Asovedra entendemos los valores como una guía práctica para actuar con cercanía, respeto, responsabilidad y vocación de servicio.
              </p>
            </ContentSurface>
          </div>
        </section>

        <section className="px-4 pb-20 lg:pb-24">
          <div className="mx-auto max-w-7xl">
            <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
              {valores.map((valor) => (
                <ContentSurface key={valor.titulo} className="p-6 text-center">
                  <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-2xl bg-white/[0.08] text-xl text-blue-300">
                    {valor.icon}
                  </div>
                  <h3 className="mt-5 text-xl font-bold text-white">{valor.titulo}</h3>
                  <p className="mt-3 text-sm leading-7 text-slate-300">{valor.descripcion}</p>
                </ContentSurface>
              ))}
            </div>
          </div>
        </section>

        <section className="px-4 pb-20 lg:pb-24">
          <div className="mx-auto grid max-w-7xl gap-6 lg:grid-cols-[1.1fr_0.9fr]">
            <ContentSurface className="p-8 lg:p-10">
              <h2 className="text-3xl font-bold text-white">Principios de actuación</h2>
              <div className="mt-6 grid gap-3 sm:grid-cols-2">
                {principios.map((principio) => (
                  <div key={principio} className="rounded-2xl border border-white/8 bg-white/[0.03] px-4 py-4 text-sm font-medium text-slate-200">
                    {principio}
                  </div>
                ))}
              </div>
            </ContentSurface>

            <ContentSurface className="p-8 text-center lg:p-10">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-[1.4rem] bg-white/[0.08] text-3xl text-blue-300">
                <FaFileAlt />
              </div>
              <h2 className="mt-6 text-2xl font-bold text-white">Consulta la declaración completa</h2>
              <p className="mt-4 text-base leading-7 text-slate-300">
                Puedes descargar el documento íntegro con el detalle de nuestros principios y compromisos institucionales.
              </p>
              <a
                href="https://asovedra.org/assets/docs/declaracion_valores_asovedra.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-flex items-center gap-3 rounded-xl bg-white px-7 py-4 text-sm font-semibold text-slate-950 hover:bg-slate-100"
              >
                <FaDownload className="text-lg" />
                Descargar PDF
              </a>
            </ContentSurface>
          </div>
        </section>
      </main>
    </>
  )
}

export default DeclaracionValores
