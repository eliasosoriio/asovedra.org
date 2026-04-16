import React from 'react'
import { Link } from 'react-router-dom'
import {
  FaBalanceScale,
  FaBullseye,
  FaGraduationCap,
  FaHandshake,
  FaHeart,
  FaStar,
  FaUsers
} from 'react-icons/fa'
import SEO from '../components/SEO'
import ContentSurface from '../components/layout/ContentSurface'
import InternalPageHero from '../components/layout/InternalPageHero'
import { ABOUT_STATS_ARRAY } from '../constants/stats'

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
    { title: 'Solidaridad', text: 'Promovemos la ayuda mutua y el trabajo compartido dentro de la comunidad.', icon: <FaHandshake /> },
    { title: 'Transparencia', text: 'Actuamos con honestidad, responsabilidad y claridad institucional.', icon: <FaBalanceScale /> },
    { title: 'Excelencia', text: 'Buscamos calidad humana y profesional en cada acompañamiento.', icon: <FaGraduationCap /> },
    { title: 'Compromiso', text: 'Asumimos el bienestar y la integración de la comunidad como prioridad.', icon: <FaHeart /> }
  ]

  return (
    <>
      <SEO
        title="Sobre Nosotros"
        description="Conoce la historia, misión y equipo de Asovedra. Ofrecemos apoyo e integración a la comunidad iberoamericana en España."
        keywords="asovedra, sobre nosotros, misión, equipo, asociación, iberoamericanos, integración"
        canonical="/sobre-nosotros"
      />

      <main className="min-h-screen bg-[linear-gradient(180deg,#020617_0%,#0f172a_38%,#111827_100%)] pt-24 text-white">
        <InternalPageHero
          eyebrow="Sobre Asovedra"
          title="Una asociación construida desde el acompañamiento"
          description="Historia, valores y equipo al servicio de la comunidad iberoamericana en Galicia."
        />

        <section className="px-4 pb-20 lg:pb-24">
          <div className="mx-auto grid max-w-7xl gap-6 lg:grid-cols-2">
            <ContentSurface className="p-6 sm:p-8 lg:p-10">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white/[0.08] text-2xl text-blue-300">
                <FaBullseye />
              </div>
              <h2 className="mt-5 text-2xl font-bold text-white lg:text-3xl">Nuestra misión</h2>
              <p className="mt-4 text-base leading-7 text-slate-300">
                Promover la integración social, laboral y cultural de la comunidad venezolana e iberoamericana en Galicia desde el acompañamiento, la orientación y la cooperación solidaria.
              </p>
            </ContentSurface>

            <ContentSurface className="p-6 sm:p-8 lg:p-10">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white/[0.08] text-2xl text-blue-300">
                <FaStar />
              </div>
              <h2 className="mt-5 text-2xl font-bold text-white lg:text-3xl">Nuestra visión</h2>
              <p className="mt-4 text-base leading-7 text-slate-300">
                Consolidarnos como una organización de referencia por su compromiso con la integración, la solidaridad y el desarrollo humano de la comunidad iberoamericana.
              </p>
            </ContentSurface>
          </div>
        </section>

        <section className="px-4 pb-20 lg:pb-24">
          <div className="mx-auto max-w-7xl">
            <div className="mx-auto mb-12 max-w-3xl text-center">
              <h2 className="text-3xl font-bold text-white lg:text-4xl">Valores que sostienen nuestra labor</h2>
              <p className="mt-4 text-base leading-7 text-slate-300 lg:text-lg">
                Principios que orientan nuestras decisiones, relaciones y forma de trabajar con la comunidad.
              </p>
            </div>
            <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
              {values.map((value) => (
                <ContentSurface key={value.title} className="p-6 text-center">
                  <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-2xl bg-white/[0.08] text-xl text-blue-300">
                    {value.icon}
                  </div>
                  <h3 className="mt-5 text-xl font-bold text-white">{value.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-slate-300">{value.text}</p>
                </ContentSurface>
              ))}
            </div>
          </div>
        </section>

        <section className="px-4 pb-20 lg:pb-24">
          <div className="mx-auto max-w-7xl overflow-hidden rounded-[2rem] border border-white/8 bg-white/[0.04] shadow-[0_26px_56px_-32px_rgba(15,23,42,0.95)] backdrop-blur-sm">
            <div className="grid gap-0 lg:grid-cols-[0.95fr_1.05fr]">
              <div className="relative min-h-[18rem] lg:min-h-full">
                <img
                  src="https://www.diariodepontevedra.es/asset/thumbnail,1280,720,center,center/media/diariodepontevedra/images/2025/07/22/2025072215310571656.jpg"
                  alt="Historia de Asovedra"
                  className="absolute inset-0 h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-slate-950/20 to-transparent"></div>
              </div>
              <div className="p-8 lg:p-10">
                <h2 className="text-3xl font-bold text-white lg:text-4xl">Nuestra historia</h2>
                <p className="mt-5 text-base leading-7 text-slate-300 lg:text-lg">
                  Asovedra surge en 2018 para crear un espacio de apoyo, orientación e integración para personas que llegan a España buscando nuevas oportunidades y una red comunitaria estable.
                </p>
                <div className="mt-6 grid gap-3">
                  {milestones.map((milestone) => (
                    <div key={milestone.year} className="rounded-2xl border border-white/8 bg-white/[0.03] px-4 py-4">
                      <div className="text-sm font-semibold uppercase tracking-[0.18em] text-blue-300">{milestone.year}</div>
                      <h3 className="mt-2 text-lg font-semibold text-white">{milestone.event}</h3>
                      <p className="mt-2 text-sm leading-6 text-slate-300">{milestone.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="px-4 pb-20 lg:pb-24">
          <div className="mx-auto max-w-7xl">
            <div className="mx-auto mb-12 max-w-3xl text-center">
              <h2 className="text-3xl font-bold text-white lg:text-4xl">Nuestro equipo</h2>
              <p className="mt-4 text-base leading-7 text-slate-300 lg:text-lg">
                Personas que impulsan la actividad de la asociación desde la experiencia, el compromiso y el trabajo voluntario.
              </p>
            </div>
            <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
              {teamMembers.map((member) => (
                <ContentSurface key={member.name} className="overflow-hidden p-0">
                  <img src={member.image} alt={member.name} className="h-56 w-full object-cover" />
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-white">{member.name}</h3>
                    <p className="mt-1 text-sm font-semibold text-blue-300">{member.position}</p>
                    <p className="mt-4 text-sm leading-7 text-slate-300">{member.description}</p>
                  </div>
                </ContentSurface>
              ))}
            </div>
          </div>
        </section>

        <section className="px-4 pb-20 lg:pb-24">
          <div className="mx-auto max-w-7xl grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {ABOUT_STATS_ARRAY.map((stat) => (
              <ContentSurface key={stat.label} className="p-6 text-center">
                <div className="text-3xl font-bold text-white lg:text-4xl">{stat.number}</div>
                <div className="mt-2 text-sm text-slate-300">{stat.label}</div>
              </ContentSurface>
            ))}
          </div>
        </section>

        <section className="px-4 pb-20 lg:pb-24">
          <div className="mx-auto max-w-5xl">
            <ContentSurface className="p-8 text-center lg:p-10">
              <div className="mx-auto flex max-w-3xl flex-col items-center">
                <h2 className="text-3xl font-bold text-white lg:text-5xl">¿Quieres colaborar con Asovedra?</h2>
                <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-300">
                  Siempre estamos abiertos a nuevas colaboraciones, voluntariado y personas comprometidas con nuestra comunidad.
                </p>
                <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                  <Link to="/contacto" className="inline-flex items-center justify-center rounded-xl bg-white px-8 py-4 text-sm font-semibold text-slate-950 hover:bg-slate-100">
                    Unete como voluntario
                  </Link>
                  <a href="tel:+34604016113" className="inline-flex items-center justify-center rounded-xl border border-white/14 bg-white/[0.05] px-8 py-4 text-sm font-semibold text-white hover:bg-white/[0.08]">
                    Llamar: 604 016 113
                  </a>
                </div>
              </div>
            </ContentSurface>
          </div>
        </section>
      </main>
    </>
  )
}

export default About
