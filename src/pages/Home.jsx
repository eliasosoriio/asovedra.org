import React from 'react'
import { Link } from 'react-router-dom'
import { LuArrowRight, LuBriefcase, LuFileText, LuGraduationCap, LuScale } from 'react-icons/lu'
import SEO from '../components/SEO'
import HomeHero from '../components/home/HomeHero'
import ResidenciaBanner from '../components/home/ResidenciaBanner'
import ColaboraOptions from '../components/colabora/ColaboraOptions'
import SectionHeader from '../components/ui/SectionHeader'
import { NEWS_DATA } from '../constants/news'

const services = [
  {
    title: 'Orientación legal',
    description: 'Extranjería, derechos y deberes, con derivación a profesionales cuando hace falta.',
    icon: LuScale,
    tile: 'bg-pill-blue text-navy'
  },
  {
    title: 'Trámites',
    description: 'Regularización, renovaciones, nacionalidad y reagrupación familiar.',
    icon: LuFileText,
    tile: 'bg-pill-yellow text-[#7a5a00]'
  },
  {
    title: 'Empleo',
    description: 'Bolsa de empleo, orientación profesional y preparación de entrevistas.',
    icon: LuBriefcase,
    tile: 'bg-pill-red text-[#a10a22]'
  },
  {
    title: 'Formación',
    description: 'Idiomas, capacitación digital y talleres de emprendimiento.',
    icon: LuGraduationCap,
    tile: 'bg-[#EAF6EE] text-[#17663a]'
  }
]

function Home() {
  const latestNews = [...NEWS_DATA]
    .sort((a, b) => new Date(b.isoDate || 0).getTime() - new Date(a.isoDate || 0).getTime())
    .slice(0, 3)

  return (
    <>
      <SEO
        title="Asovedra"
        description="Asovedra apoya a iberoamericanos en Pontevedra, Galicia y toda España con asesoría migratoria, legal y laboral. Te ayudamos en trámites y adaptación en España."
        keywords="asovedra, iberoamericanos españa, asociación iberoamericana, apoyo legal, empleo, pontevedra, galicia, inmigración, trámites migratorios"
        canonical="/"
      />

      <main>
        <HomeHero />

        <section className="mx-auto max-w-[1200px] px-5 pb-24 lg:px-10">
          <ResidenciaBanner />
        </section>

        <section className="mx-auto max-w-[1200px] px-5 pb-24 lg:px-10">
          <SectionHeader pill="Lo que hacemos" title="Te ayudamos con lo que más importa" />
          <div className="mt-11 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {services.map((service) => {
              const Icon = service.icon
              return (
                <Link
                  key={service.title}
                  to="/servicios"
                  className="group rounded-[24px] border border-line bg-white p-7 transition-shadow hover:shadow-[0_18px_40px_-28px_rgba(13,21,48,0.5)]"
                >
                  <span className={`grid h-[52px] w-[52px] place-items-center rounded-2xl ${service.tile}`}>
                    <Icon aria-hidden="true" className="h-6 w-6" />
                  </span>
                  <h3 className="mt-5 text-xl font-bold text-ink">{service.title}</h3>
                  <p className="mt-2 text-[15px] leading-relaxed text-muted">{service.description}</p>
                  <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-bold text-navy">
                    Saber más
                    <LuArrowRight aria-hidden="true" className="transition-transform group-hover:translate-x-0.5" />
                  </span>
                </Link>
              )
            })}
          </div>
        </section>

        <section className="bg-sand py-24">
          <div className="mx-auto max-w-[1200px] px-5 lg:px-10">
            <SectionHeader
              align="center"
              pill="Colabora"
              pillTone="white"
              title="Juntos llegamos más lejos"
              subtitle="Tu aportación ayuda a sostener la orientación, la formación y el acompañamiento social que ofrecemos como asociación sin ánimo de lucro, incluida la atención a personas sin recursos."
            />
            <div className="mt-12">
              <ColaboraOptions />
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-[1200px] px-5 py-24 lg:px-10">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <SectionHeader pill="Noticias" title="Lo último de ASOVEDRA" />
            <Link to="/noticias" className="inline-flex items-center gap-1.5 font-bold text-navy hover:underline">
              Ver todas <LuArrowRight aria-hidden="true" />
            </Link>
          </div>
          <div className="mt-11 grid gap-6 md:grid-cols-3">
            {latestNews.map((news) => (
              <article key={news.url}>
                <a href={news.url} target="_blank" rel="noopener noreferrer" className="group block">
                  <img
                    src={news.image}
                    alt=""
                    loading="lazy"
                    className="aspect-[16/10] w-full rounded-[22px] bg-line object-cover"
                  />
                  <p className="mt-4 text-[13px] font-semibold text-red">{news.source} · {news.date}</p>
                  <h3 className="mt-1.5 text-[19px] font-bold leading-snug text-ink group-hover:text-navy">{news.title}</h3>
                </a>
              </article>
            ))}
          </div>
        </section>
      </main>
    </>
  )
}

export default Home
