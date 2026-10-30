import React from 'react'
import { LuGem, LuHandshake, LuHeart, LuScale, LuStar, LuTarget } from 'react-icons/lu'
import SEO from '../components/SEO'
import InternalPageHero from '../components/layout/InternalPageHero'
import Button from '../components/ui/Button'
import Card from '../components/ui/Card'
import SectionHeader from '../components/ui/SectionHeader'
import Timeline from '../components/about/Timeline'
import { ABOUT_STATS_ARRAY } from '../constants/stats'
import { CONTACT } from '../constants/site'

function About() {
  const teamMembers = [
    {
      name: 'Manuel Osorio Lozano',
      position: 'Presidente',
      image: '/photo/equipo/manuel-osorio.webp',
      description: 'Más de 20 años de experiencia con la comunidad venezolana y su integración en España.'
    },
    {
      name: 'César Augusto Alarcón',
      position: 'Vicepresidente',
      image: '/photo/equipo/cesar-alarcon.webp',
      description: 'Abogado y referente en acompañamiento jurídico y procesos de regularización.'
    },
    {
      name: 'Mónica Brenna Álvarez',
      position: 'Secretaria',
      image: '/photo/equipo/monica-brenna.webp',
      description: 'Compagina su profesión sanitaria con un fuerte compromiso de voluntariado en Asovedra.'
    },
    {
      name: 'María Elena Buján',
      position: 'Tesorera',
      image: '/photo/equipo/maria-elena.webp',
      description: 'Apoya a familias migrantes desde una mirada cercana, comunitaria y práctica.'
    }
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

        {/* Misión y visión: primera sección blanca, la cabecera ya deja el margen superior */}
        <section className="mx-auto max-w-[1440px] px-6 pb-24 lg:px-16 lg:pb-32">
          <SectionHeader pill="Propósito" title="Misión y visión." />
          <div className="mt-14 grid gap-5 md:grid-cols-2 lg:mt-16">
            <Card tone="navy" className="p-8 lg:p-9">
              <LuTarget aria-hidden="true" className="h-9 w-9 text-yellow" />
              <h3 className="mt-8 text-[24px] font-semibold tracking-[-0.01em]">Nuestra misión</h3>
              <p className="mt-3 text-[17px] leading-snug text-white/80">
                Promover la integración social, laboral y cultural de la comunidad venezolana e iberoamericana en Galicia desde el acompañamiento, la orientación y la cooperación solidaria.
              </p>
            </Card>
            <Card className="p-8 lg:p-9">
              <LuStar aria-hidden="true" className="h-9 w-9 text-navy" />
              <h3 className="mt-8 text-[24px] font-semibold tracking-[-0.01em] text-ink">Nuestra visión</h3>
              <p className="mt-3 text-[17px] leading-snug text-muted">
                Consolidarnos como una organización de referencia por su compromiso con la integración, la solidaridad y el desarrollo humano de la comunidad iberoamericana.
              </p>
            </Card>
          </div>
        </section>

        <section className="bg-cloud py-24 lg:py-32">
          <div className="mx-auto max-w-[1440px] px-6 lg:px-16">
            <SectionHeader
              pill="Valores"
              title="Valores que sostienen nuestra labor"
              subtitle="Principios que orientan nuestras decisiones, relaciones y forma de trabajar con la comunidad."
            />
            <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:mt-16 lg:grid-cols-4">
              {values.map((value) => {
                const Icon = value.icon
                return (
                  <Card key={value.title} tone="white" className="p-8 lg:p-9">
                    <Icon aria-hidden="true" className="h-9 w-9 text-navy" />
                    <h3 className="mt-8 text-[24px] font-semibold tracking-[-0.01em] text-ink">{value.title}</h3>
                    <p className="mt-3 text-[17px] leading-snug text-muted">{value.text}</p>
                  </Card>
                )
              })}
            </div>
          </div>
        </section>

        {/* Historia: titular con foto, línea de tiempo que se recorre con el scroll y cifras */}
        <section className="mx-auto max-w-[1440px] px-6 py-24 lg:px-16 lg:py-32">
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
            <SectionHeader
              pill="Historia"
              title="Nuestra historia."
              subtitle="Asovedra surge en 2018 para crear un espacio de apoyo, orientación e integración para personas que llegan a España buscando nuevas oportunidades y una red comunitaria estable."
            />
            <img
              src="/photo/junta-directiva.webp"
              alt="Junta directiva de Asovedra"
              loading="lazy"
              className="aspect-[4/3] w-full rounded-[28px] bg-cloud object-cover"
            />
          </div>

          <div className="mt-20 lg:mt-28">
            <Timeline />
          </div>

          <ul className="mt-16 grid grid-cols-2 gap-5 lg:mt-20 lg:grid-cols-4">
            {ABOUT_STATS_ARRAY.map((stat) => (
              <li key={stat.label} className="rounded-[28px] bg-cloud p-8 text-center lg:p-9">
                <p className="text-[40px] font-semibold leading-none tracking-[-0.02em] text-navy lg:text-[48px]">{stat.number}</p>
                <p className="mt-3 text-[15px] font-semibold text-muted">{stat.label}</p>
              </li>
            ))}
          </ul>
        </section>

        <section className="bg-cloud py-24 lg:py-32">
          <div className="mx-auto max-w-[1440px] px-6 lg:px-16">
            <SectionHeader
              pill="Equipo"
              title="Nuestro equipo"
              subtitle="Personas que impulsan la actividad de la asociación desde la experiencia, el compromiso y el trabajo voluntario."
            />
            <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:mt-16 lg:grid-cols-4">
              {teamMembers.map((member) => (
                <Card key={member.name} tone="white" className="overflow-hidden">
                  <img src={member.image} alt={member.name} loading="lazy" className="aspect-square w-full bg-line object-cover" />
                  <div className="p-8 lg:p-9">
                    <h3 className="text-[22px] font-semibold tracking-[-0.01em] text-ink">{member.name}</h3>
                    <p className="mt-1 text-[15px] font-semibold text-navy">{member.position}</p>
                    <p className="mt-3 text-[17px] leading-snug text-muted">{member.description}</p>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-[1440px] px-6 py-24 lg:px-16 lg:py-32">
          <Card as="div" tone="navy" className="px-8 py-14 text-center lg:px-16 lg:py-20">
            <SectionHeader
              onDark
              align="center"
              title="¿Quieres colaborar con Asovedra?"
              subtitle="Siempre estamos abiertos a nuevas colaboraciones, voluntariado y personas comprometidas con nuestra comunidad."
            />
            <div className="mt-10 flex flex-wrap justify-center gap-3">
              <Button to="/contacto" variant="yellow">Únete como voluntario</Button>
              <Button href={`tel:${CONTACT.phone}`} variant="white">Llamar: {CONTACT.phoneDisplay}</Button>
            </div>
          </Card>
        </section>
      </main>
    </>
  )
}

export default About
