import React from 'react'
import { Link } from 'react-router-dom'
import { LuArrowRight, LuHeartHandshake } from 'react-icons/lu'
import SEO from '../components/SEO'
import InternalPageHero from '../components/layout/InternalPageHero'
import ColaboraOptions from '../components/colabora/ColaboraOptions'

function Colabora() {
  return (
    <>
      <SEO
        title="Colabora"
        description="Colabora con ASOVEDRA: hazte socio, aporta cada mes o haz un donativo puntual para sostener la orientación, la formación y el acompañamiento social."
        keywords="colabora asovedra, hazte socio, donativo, asociación venezolanos pontevedra"
        canonical="/colabora"
      />

      <main className="min-h-screen">
        <InternalPageHero
          eyebrow="Colabora"
          title="Colabora con ASOVEDRA"
          description="Tu aportación ayuda a sostener la orientación, la formación y el acompañamiento social que ofrecemos como asociación sin ánimo de lucro, incluida la atención a personas sin recursos."
        />

        <section className="bg-[#F5F5F7] py-20 lg:py-24">
          <div className="mx-auto max-w-[1440px] px-6 lg:px-16">
            <ColaboraOptions />
          </div>
        </section>

        <section className="mx-auto max-w-[1440px] px-6 py-20 lg:px-16">
          <div className="grid gap-8 rounded-[28px] border border-line bg-white p-8 sm:p-10 md:grid-cols-[auto_1fr] md:items-start">
            <span className="grid h-14 w-14 place-items-center rounded-2xl bg-pill-blue text-navy">
              <LuHeartHandshake aria-hidden="true" className="h-7 w-7" />
            </span>
            <div>
              <h2 className="text-2xl font-medium tracking-[-0.02em] text-ink sm:text-3xl">¿A dónde va tu aportación?</h2>
              <p className="mt-3 max-w-3xl text-[17px] leading-relaxed text-muted">
                Las aportaciones de esta página apoyan a la asociación en su conjunto: la atención en nuestra oficina de
                Pontevedra, la orientación en trámites, los programas de empleo y formación y el acompañamiento a
                personas sin recursos.
              </p>
              <p className="mt-3 max-w-3xl text-[17px] leading-relaxed text-muted">
                La campaña de emergencia por el terremoto en Venezuela tiene su propio canal de donación, para que
                sepas siempre a qué destinas tu ayuda.
              </p>
              <Link
                to="/emergencia-terremoto-venezuela"
                className="mt-5 inline-flex items-center gap-2 font-bold text-red underline-offset-4 hover:underline"
              >
                Ir a la campaña de Venezuela
                <LuArrowRight aria-hidden="true" />
              </Link>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}

export default Colabora
