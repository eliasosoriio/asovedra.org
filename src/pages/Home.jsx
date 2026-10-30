import React from 'react'
import SEO from '../components/SEO'
import Hero from '../components/home/Hero'
import Showreel from '../components/home/Showreel'
import ResidenciaBlock from '../components/home/ResidenciaBlock'
import ProgramsStack from '../components/home/ProgramsStack'
import ProcessSteps from '../components/home/ProcessSteps'
import Statement from '../components/home/Statement'
import ColaboraOptions from '../components/colabora/ColaboraOptions'

function Home() {
  return (
    <>
      <SEO
        description="Asovedra apoya a iberoamericanos en Pontevedra, Galicia y toda España con asesoría migratoria, legal y laboral. Te ayudamos en trámites y adaptación en España."
        keywords="asovedra, iberoamericanos españa, asociación iberoamericana, apoyo legal, empleo, pontevedra, galicia, inmigración, trámites migratorios"
        canonical="/"
      />

      <main>
        <Hero />
        <Showreel />
        <ResidenciaBlock />
        <ProgramsStack />

        <section aria-labelledby="colabora" className="py-24 lg:py-32">
          <div className="mx-auto max-w-[1440px] px-6 lg:px-16">
            <div className="mx-auto max-w-[760px] text-center">
              <h2 id="colabora" className="text-[40px] font-semibold leading-[1.08] tracking-[-0.02em] text-ink sm:text-[56px]">
                Colabora.
              </h2>
              <p className="mt-5 text-[19px] leading-relaxed text-muted lg:text-[21px]">
                Tu aportación sostiene la orientación, la formación y el acompañamiento que ofrecemos, incluida la atención a personas sin recursos.
              </p>
            </div>
            <div className="mt-14 lg:mt-16">
              <ColaboraOptions tone="grey" />
            </div>
          </div>
        </section>

        <ProcessSteps />
        <Statement />
      </main>
    </>
  )
}

export default Home
