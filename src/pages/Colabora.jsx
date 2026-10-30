import React from 'react'
import { Link } from 'react-router-dom'
import { LuChevronRight, LuHeartHandshake } from 'react-icons/lu'
import SEO from '../components/SEO'
import InternalPageHero from '../components/layout/InternalPageHero'
import ColaboraOptions from '../components/colabora/ColaboraOptions'
import Card from '../components/ui/Card'
import SectionHeader from '../components/ui/SectionHeader'

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

        {/* Primera sección gris: se pega a la cabecera anulando su margen inferior */}
        <section className="-mt-20 bg-cloud py-24 lg:-mt-28 lg:py-32">
          <div className="mx-auto max-w-[1440px] px-6 lg:px-16">
            <SectionHeader align="center" pill="Formas de colaborar" title="Elige cómo ayudar." />
            <div className="mt-14 lg:mt-16">
              <ColaboraOptions tone="white" />
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-[1440px] px-6 py-24 lg:px-16 lg:py-32">
          <SectionHeader
            pill="Transparencia"
            title="¿A dónde va tu aportación?"
            subtitle="Las aportaciones de esta página apoyan a la asociación en su conjunto: la atención en nuestra oficina de Pontevedra, la orientación en trámites, los programas de empleo y formación y el acompañamiento a personas sin recursos."
          />
          <Card tone="grey" className="mt-14 p-8 lg:mt-16 lg:p-9">
            <LuHeartHandshake aria-hidden="true" className="h-9 w-9 text-navy" />
            <p className="mt-6 max-w-3xl text-[17px] leading-snug text-muted">
              La campaña de emergencia por el terremoto en Venezuela tiene su propio canal de donación, para que
              sepas siempre a qué destinas tu ayuda.
            </p>
            <Link
              to="/emergencia-terremoto-venezuela"
              className="group mt-5 inline-flex items-center gap-1 text-[17px] text-navy hover:underline"
            >
              Ir a la campaña de Venezuela
              <LuChevronRight aria-hidden="true" className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </Link>
          </Card>
        </section>
      </main>
    </>
  )
}

export default Colabora
