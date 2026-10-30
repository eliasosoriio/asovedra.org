import React from 'react'
import { LuGem, LuHandshake, LuHeart, LuScale, LuStar, LuTarget } from 'react-icons/lu'
import SEO from '../components/SEO'
import InternalPageHero from '../components/layout/InternalPageHero'
import Button from '../components/ui/Button'
import Card from '../components/ui/Card'
import SectionHeader from '../components/ui/SectionHeader'
import { ABOUT_STATS_ARRAY } from '../constants/stats'
import { CONTACT } from '../constants/site'

function About() {
  const teamMembers = [
    {
      name: 'Manuel Osorio Lozano',
      position: 'Presidente',
      image: 'https://asovedra.org/assets/img/people/manuel-osorio.jpg',
      description: 'Más de 20 años de experiencia con la comunidad venezolana y su integración en España.'
    },
    {
      name: 'César Augusto Alarcón',
      position: 'Vicepresidente',
      image: 'https://asovedra.org/assets/img/people/cesar-alarcon.jpg',
      description: 'Abogado y referente en acompañamiento jurídico y procesos de regularización.'
    },
    {
      name: 'Mónica Brenna Álvarez',
      position: 'Secretaria',
      image: 'https://asovedra.org/assets/img/people/monica-brenna.jpg',
      description: 'Compagina su profesión sanitaria con un fuerte compromiso de voluntariado en Asovedra.'
    },
    {
      name: 'María Elena Buján',
      position: 'Tesorera',
      image: 'https://asovedra.org/assets/img/people/maria-elena.jpg',
      description: 'Apoya a familias migrantes desde una mirada cercana, comunitaria y práctica.'
    }
  ]

  const milestones = [
    { year: '2018', event: 'Fundación de Asovedra', description: 'Nace la asociación para apoyar a venezolanos e iberoamericanos en Pontevedra.' },
    { year: '2020', event: 'Programa Reinvéntate y Trabaja', description: 'Impulso a la inserción laboral y acompañamiento a personas en riesgo de exclusión.' },
    { year: '2021', event: 'Expansión territorial', description: 'Asovedra amplía su alcance a toda Galicia y a otras zonas de la península.' },
    { year: '2023', event: 'Galicia Activa', description: 'Se refuerza la participación social y comunitaria con nuevos programas y alianzas.' }
  ]

  const values = [
    { title: 'Solidaridad', text: 'Promovemos la ayuda mutua y el trabajo compartido dentro de la comunidad.', icon: LuHandshake },
    { title: 'Transparencia', text: 'Actuamos con honestidad, responsabilidad y claridad institucional.', icon: LuScale },
    { title: 'Excelencia', text: 'Buscamos calidad humana y profesional en cada acompañamiento.', icon: LuGem },
    { title: 'Compromiso', text: 'Asumimos el bienestar y la integración de la comunidad como prioridad.', icon: LuHeart }
  ]

  return (
    <>
      <SEO
        title="Sobre Nosotros"
        description="Conoce la historia, misión y equipo de Asovedra. Ofrecemos apoyo e integración a la comunidad iberoamericana en España."
        keywords="asovedra, sobre nosotros, misión, equipo, asociación, iberoamericanos, integración"
        canonical="/sobre-nosotros"
      />

      <main className="min-h-screen">
        <InternalPageHero
          eyebrow="Sobre Asovedra"
          title="Una asociación construida desde el acompañamiento"
          description="Historia, valores y equipo al servicio de la comunidad iberoamericana en Galicia."
        />

        <section className="mx-auto grid max-w-[1440px] gap-5 px-6 pb-20 md:grid-cols-2 lg:px-16">
          <Card tone="navy" className="p-8 sm:p-10">
            <span className="grid h-12 w-12 place-items-center rounded-2xl bg-yellow text-ink">
              <LuTarget aria-hidden="true" className="h-6 w-6" />
            </span>
            <h2 className="mt-6 text-2xl font-medium tracking-[-0.02em]">Nuestra misión</h2>
            <p className="mt-3 text-[17px] leading-relaxed text-[#c9d3f0]">
              Promover la integración social, laboral y cultural de la comunidad venezolana e iberoamericana en Galicia desde el acompañamiento, la orientación y la cooperación solidaria.
            </p>
          </Card>
          <Card className="p-8 sm:p-10">
            <span className="grid h-12 w-12 place-items-center rounded-2xl bg-pill-yellow text-[#7a5a00]">
              <LuStar aria-hidden="true" className="h-6 w-6" />
            </span>
            <h2 className="mt-6 text-2xl font-medium tracking-[-0.02em] text-ink">Nuestra visión</h2>
            <p className="mt-3 text-[17px] leading-relaxed text-muted">
              Consolidarnos como una organización de referencia por su compromiso con la integración, la solidaridad y el desarrollo humano de la comunidad iberoamericana.
            </p>
          </Card>
        </section>

        <section className="bg-sand py-20">
          <div className="mx-auto max-w-[1440px] px-6 lg:px-16">
            <SectionHeader
              pill="Valores"
              pillTone="white"
              title="Valores que sostienen nuestra labor"
              subtitle="Principios que orientan nuestras decisiones, relaciones y forma de trabajar con la comunidad."
            />
            <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {values.map((value) => {
                const Icon = value.icon
                return (
                  <Card key={value.title} className="p-7">
                    <span className="grid h-12 w-12 place-items-center rounded-2xl bg-pill-blue text-navy">
                      <Icon aria-hidden="true" className="h-6 w-6" />
                    </span>
                    <h3 className="mt-5 text-xl font-bold text-ink">{value.title}</h3>
                    <p className="mt-2 text-[15px] leading-relaxed text-muted">{value.text}</p>
                  </Card>
                )
              })}
            </div>
          </div>
        </section>

        <section className="mx-auto grid max-w-[1440px] items-start gap-12 px-6 py-20 lg:grid-cols-2 lg:px-16">
          <img
            src="https://www.diariodepontevedra.es/asset/thumbnail,1280,720,center,center/media/diariodepontevedra/images/2025/07/22/2025072215310571656.jpg"
            alt="Junta directiva de Asovedra"
            loading="lazy"
            className="aspect-[4/3] w-full rounded-[32px] bg-line object-cover"
          />
          <div>
            <SectionHeader
              pill="Historia"
              title="Nuestra historia"
              subtitle="Asovedra surge en 2018 para crear un espacio de apoyo, orientación e integración para personas que llegan a España buscando nuevas oportunidades y una red comunitaria estable."
            />
            <ol className="mt-8 space-y-5 border-l-2 border-line pl-6">
              {milestones.map((milestone) => (
                <li key={milestone.year} className="relative">
                  <span aria-hidden="true" className="absolute -left-[33px] top-1.5 h-4 w-4 rounded-full border-4 border-cream bg-yellow"></span>
                  <p className="text-sm font-medium text-red">{milestone.year}</p>
                  <h3 className="text-lg font-bold text-ink">{milestone.event}</h3>
                  <p className="text-[15px] leading-relaxed text-muted">{milestone.description}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section className="mx-auto max-w-[1440px] px-6 pb-20 lg:px-16">
          <SectionHeader
            pill="Equipo"
            title="Nuestro equipo"
            subtitle="Personas que impulsan la actividad de la asociación desde la experiencia, el compromiso y el trabajo voluntario."
          />
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {teamMembers.map((member) => (
              <Card key={member.name} className="overflow-hidden">
                <img src={member.image} alt={member.name} loading="lazy" className="aspect-square w-full bg-line object-cover" />
                <div className="p-6">
                  <h3 className="text-lg font-bold text-ink">{member.name}</h3>
                  <p className="text-sm font-semibold text-red">{member.position}</p>
                  <p className="mt-2 text-[15px] leading-relaxed text-muted">{member.description}</p>
                </div>
              </Card>
            ))}
          </div>
        </section>

        <section className="mx-auto max-w-[1440px] px-6 pb-20 lg:px-16">
          <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
            {ABOUT_STATS_ARRAY.map((stat) => (
              <div key={stat.label} className="rounded-[24px] bg-white p-6 text-center ring-1 ring-line">
                <p className="text-4xl font-medium tracking-[-0.01em] text-navy">{stat.number}</p>
                <p className="mt-1 text-sm font-semibold text-muted">{stat.label}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mx-auto max-w-[1440px] px-6 pb-24 lg:px-16">
          <div className="rounded-[32px] bg-navy p-8 text-center text-white sm:p-12">
            <h2 className="text-3xl font-medium tracking-[-0.01em]">¿Quieres colaborar con Asovedra?</h2>
            <p className="mx-auto mt-3 max-w-2xl text-[17px] text-[#c9d3f0]">
              Siempre estamos abiertos a nuevas colaboraciones, voluntariado y personas comprometidas con nuestra comunidad.
            </p>
            <div className="mt-7 flex flex-wrap justify-center gap-3">
              <Button to="/contacto" variant="yellow">Únete como voluntario</Button>
              <Button href={`tel:${CONTACT.phone}`} variant="white">Llamar: {CONTACT.phoneDisplay}</Button>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}

export default About
