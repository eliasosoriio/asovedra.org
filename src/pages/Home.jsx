import React from 'react'
import { Link } from 'react-router-dom'
import { STATS_ARRAY } from '../constants/stats'
import { NEWS_DATA } from '../constants/news'
import SEO from '../components/SEO'
import {
  FaArrowRight,
  FaBalanceScale,
  FaBook,
  FaBriefcase,
  FaBullseye,
  FaClipboardList,
  FaHandshake,
  FaHeart,
  FaMapMarkerAlt,
  FaUsers
} from 'react-icons/fa'

const serviceHighlights = [
  {
    title: 'Orientacion legal',
    description: 'Te orientamos en extranjeria, derechos y tramites, y te derivamos a profesionales especializados cuando se requiere asesoramiento juridico formal.',
    icon: <FaBalanceScale />
  },
  {
    title: 'Bolsa de empleo',
    description: 'Conectamos perfiles profesionales con oportunidades laborales y redes utiles.',
    icon: <FaBriefcase />
  },
  {
    title: 'Tramites migratorios',
    description: 'Acompanamiento en regularizacion, renovaciones y documentacion administrativa.',
    icon: <FaClipboardList />
  },
  {
    title: 'Formacion y cursos',
    description: 'Programas para fortalecer competencias, autonomia y acceso al mercado laboral.',
    icon: <FaBook />
  }
]

const trustPoints = [
  {
    title: 'Nuestra mision',
    text: 'Promover la integracion social, laboral y cultural de la comunidad venezolana e iberoamericana en Galicia desde el acompanamiento y la cooperacion solidaria.',
    icon: <FaMapMarkerAlt />
  },
  {
    title: 'Nuestra vision',
    text: 'Ser una organizacion de referencia para la comunidad iberoamericana en Espana, reconocida por la calidad del apoyo y su impacto real.',
    icon: <FaBullseye />
  },
  {
    title: 'Comunidad y red',
    text: 'Trabajamos desde la escucha, el vinculo comunitario y la orientacion practica para responder a necesidades concretas.',
    icon: <FaUsers />
  }
]

function Home() {
  const latestNews = [...NEWS_DATA]
    .sort((a, b) => {
      const dA = new Date(a.isoDate || 0).getTime()
      const dB = new Date(b.isoDate || 0).getTime()
      return dB - dA
    })
    .slice(0, 3)

  return (
    <>
      <SEO
        title="Asovedra"
        description="Asovedra apoya a iberoamericanos en Pontevedra, Galicia y toda España con asesoría migratoria, legal y laboral. Te ayudamos en trámites y adaptación en España."
        keywords="asovedra, iberoamericanos españa, asociación iberoamericana, apoyo legal, empleo, pontevedra, galicia, inmigración, trámites migratorios"
        canonical="/"
      />

      <main className="flex flex-col items-center justify-center overflow-x-hidden bg-slate-950 text-white">
        <section className="relative w-full border-t border-white/6 bg-[linear-gradient(180deg,#020617_0%,#0b1225_100%)] py-16 lg:py-20">
          <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_top,rgba(59,130,246,0.14),transparent_30%),radial-gradient(circle_at_bottom_right,rgba(250,204,21,0.08),transparent_25%)]"></div>
          <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 gap-4 lg:grid-cols-4 lg:gap-6">
              {STATS_ARRAY.map((stat, index) => (
                <div
                  key={index}
                  className="rounded-[1.6rem] border border-white/8 bg-white/[0.04] px-5 py-6 text-center shadow-[0_18px_40px_-28px_rgba(15,23,42,0.9)] backdrop-blur-sm"
                >
                  <div className="text-3xl font-bold text-white lg:text-4xl">{stat.number}</div>
                  <div className="mt-2 text-sm font-medium text-slate-300 lg:text-base">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="relative w-full bg-[linear-gradient(180deg,#0b1225_0%,#111827_100%)] py-20 lg:py-24">
          <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_left,rgba(37,99,235,0.12),transparent_28%)]"></div>
          <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto mb-14 max-w-3xl text-center">
              <span className="inline-flex rounded-full border border-white/10 bg-white/[0.05] px-4 py-2 text-sm font-semibold text-slate-200">
                Actualidad
              </span>
              <h2 className="mt-5 text-4xl font-bold text-white lg:text-5xl">Ultimas noticias y actividad</h2>
              <div className="mx-auto mt-5 h-1 w-24 rounded-full bg-gradient-to-r from-yellow-400 via-blue-500 to-red-500"></div>
              <p className="mt-5 text-lg leading-8 text-slate-300">
                Seguimiento de nuestras acciones, colaboraciones y novedades de interes para la comunidad.
              </p>
            </div>

            <div className="grid gap-6">
              {latestNews.map((news, index) => (
                <article
                  key={news.url || index}
                  className="group overflow-hidden rounded-[1.8rem] border border-white/8 bg-white/[0.04] shadow-[0_24px_50px_-30px_rgba(15,23,42,0.9)] backdrop-blur-sm lg:grid lg:grid-cols-[0.95fr_1.05fr]"
                >
                  <div className="relative h-72 overflow-hidden lg:h-full lg:min-h-[20rem]">
                    <img
                      src={news.image}
                      alt={news.title}
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-slate-950/10 to-transparent"></div>
                    <div className="absolute left-5 top-5 rounded-full border border-white/14 bg-slate-950/72 px-3 py-1 text-xs font-semibold text-white backdrop-blur-sm">
                      {news.source}
                    </div>
                  </div>

                  <div className="flex flex-col justify-center p-6 sm:p-8 lg:p-10">
                    <p className="text-sm font-medium text-slate-400">{news.date}</p>
                    <h3 className="mt-3 text-2xl font-bold text-white transition-colors duration-200 group-hover:text-blue-300 lg:text-3xl">
                      {news.title}
                    </h3>
                    <p className="mt-4 line-clamp-3 text-base leading-7 text-slate-300">
                      {news.description}
                    </p>
                    <a
                      href={news.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-white transition-colors duration-200 hover:text-blue-300"
                    >
                      Leer noticia completa
                      <FaArrowRight className="text-xs transition-transform duration-200 group-hover:translate-x-1" />
                    </a>
                  </div>
                </article>
              ))}
            </div>

            <div className="mt-10 flex justify-center">
              <Link
                to="/noticias"
                className="inline-flex items-center gap-2 rounded-xl border border-white/12 bg-white px-8 py-4 text-sm font-semibold text-slate-950 transition-all duration-200 hover:-translate-y-0.5 hover:bg-slate-100"
              >
                Ver todas las noticias
                <FaArrowRight className="text-sm" />
              </Link>
            </div>
          </div>
        </section>

        <section className="relative w-full bg-[linear-gradient(180deg,#111827_0%,#0f172a_100%)] py-20 lg:py-24">
          <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_top_right,rgba(250,204,21,0.08),transparent_22%),radial-gradient(circle_at_bottom_left,rgba(59,130,246,0.1),transparent_24%)]"></div>
          <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto mb-14 max-w-3xl text-center">
              <span className="inline-flex rounded-full border border-white/10 bg-white/[0.05] px-4 py-2 text-sm font-semibold text-slate-200">
                Lo que hacemos
              </span>
              <h2 className="mt-5 text-4xl font-bold text-white lg:text-5xl">Servicios de acompanamiento</h2>
              <div className="mx-auto mt-5 h-1 w-24 rounded-full bg-gradient-to-r from-yellow-400 via-blue-500 to-red-500"></div>
              <p className="mt-5 text-lg leading-8 text-slate-300">
                Recursos y programas pensados para responder a situaciones reales con apoyo cercano y practico.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-4">
              {serviceHighlights.map((service) => (
                <article
                  key={service.title}
                  className="group flex h-full flex-col rounded-[1.75rem] border border-white/8 bg-white/[0.05] p-6 shadow-[0_22px_44px_-30px_rgba(15,23,42,0.95)] backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-blue-400/30 hover:bg-white/[0.07]"
                >
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white/10 text-2xl text-white transition-colors duration-300 group-hover:bg-blue-600/22 group-hover:text-blue-200">
                    {service.icon}
                  </div>
                  <h3 className="mt-5 text-xl font-bold text-white">{service.title}</h3>
                  <p className="mt-3 flex-grow text-sm leading-7 text-slate-300">{service.description}</p>
                  <Link
                    to="/contacto"
                    className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-white transition-colors duration-200 hover:text-blue-300"
                  >
                    Consultanos
                    <FaArrowRight className="text-xs" />
                  </Link>
                </article>
              ))}
            </div>

            <div className="mt-10 rounded-[2rem] border border-white/10 bg-[linear-gradient(135deg,rgba(255,255,255,0.08),rgba(255,255,255,0.03))] p-8 text-center shadow-[0_28px_60px_-32px_rgba(15,23,42,0.95)] backdrop-blur-sm lg:p-10">
              <h3 className="text-2xl font-bold text-white lg:text-3xl">Necesitas ayuda especializada</h3>
              <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-slate-300 lg:text-lg">
                Nuestro equipo esta preparado para orientarte y ayudarte a encontrar el siguiente paso mas adecuado.
              </p>
              <div className="mt-6 flex flex-col justify-center gap-4 sm:flex-row">
                <Link
                  to="/servicios"
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-white px-8 py-4 text-sm font-semibold text-slate-950 transition-all duration-200 hover:-translate-y-0.5 hover:bg-slate-100"
                >
                  Ver todos los servicios
                  <FaArrowRight className="text-sm" />
                </Link>
                <Link
                  to="/contacto"
                  className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/14 bg-white/[0.05] px-8 py-4 text-sm font-semibold text-white transition-all duration-200 hover:-translate-y-0.5 hover:bg-white/[0.08]"
                >
                  Contactar
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section className="relative w-full bg-[linear-gradient(180deg,#0f172a_0%,#111827_100%)] py-20 lg:py-24">
          <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.08),transparent_32%)]"></div>
          <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto mb-14 max-w-3xl text-center">
              <span className="inline-flex rounded-full border border-white/10 bg-white/[0.05] px-4 py-2 text-sm font-semibold text-slate-200">
                Quienes somos
              </span>
              <h2 className="mt-5 text-4xl font-bold text-white lg:text-5xl">Compromiso con la comunidad</h2>
              <div className="mx-auto mt-5 h-1 w-24 rounded-full bg-gradient-to-r from-yellow-400 via-blue-500 to-red-500"></div>
              <p className="mt-5 text-lg leading-8 text-slate-300">
                Una asociacion construida desde la cercania, la orientacion y la cooperacion con impacto real.
              </p>
            </div>

            <div className="grid gap-5 lg:grid-cols-3">
              {trustPoints.map((point) => (
                <article
                  key={point.title}
                  className="rounded-[1.75rem] border border-white/8 bg-white/[0.05] p-6 shadow-[0_22px_44px_-30px_rgba(15,23,42,0.95)] backdrop-blur-sm"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/10 text-xl text-blue-200">
                    {point.icon}
                  </div>
                  <h3 className="mt-5 text-2xl font-bold text-white">{point.title}</h3>
                  <p className="mt-4 text-base leading-7 text-slate-300">{point.text}</p>
                </article>
              ))}
            </div>

            <div className="mt-8 overflow-hidden rounded-[2rem] border border-white/8 bg-white/[0.04] shadow-[0_26px_56px_-32px_rgba(15,23,42,0.95)] backdrop-blur-sm">
              <div className="grid gap-0 lg:grid-cols-[0.9fr_1.1fr]">
                <div className="relative min-h-[18rem] lg:min-h-full">
                  <img
                    src="https://www.diariodepontevedra.es/asset/thumbnail,1280,720,center,center/media/diariodepontevedra/images/2025/07/22/2025072215310571656.jpg"
                    alt="Historia de Asovedra"
                    className="absolute inset-0 h-full w-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-slate-950/20 to-transparent"></div>
                </div>

                <div className="p-8 lg:p-10">
                  <h3 className="text-3xl font-bold text-white lg:text-4xl">Nuestra historia</h3>
                  <div className="mt-4 h-1 w-16 rounded-full bg-gradient-to-r from-yellow-400 via-blue-500 to-red-500"></div>
                  <p className="mt-6 text-base leading-7 text-slate-300 lg:text-lg">
                    Fundada en 2018, Asovedra nace para crear un espacio de orientacion y apoyo a personas que llegan a Espana buscando estabilidad, oportunidades y red comunitaria.
                  </p>

                  <div className="mt-6 grid gap-3 sm:grid-cols-3">
                    <div className="rounded-2xl border border-white/8 bg-white/[0.04] px-4 py-4 text-center">
                      <p className="text-2xl font-bold text-white">2018</p>
                      <p className="mt-1 text-sm text-slate-300">Inicio de actividad</p>
                    </div>
                    <div className="rounded-2xl border border-white/8 bg-white/[0.04] px-4 py-4 text-center">
                      <p className="text-2xl font-bold text-white">4000+</p>
                      <p className="mt-1 text-sm text-slate-300">Personas atendidas</p>
                    </div>
                    <div className="rounded-2xl border border-white/8 bg-white/[0.04] px-4 py-4 text-center">
                      <p className="text-2xl font-bold text-white">Galicia</p>
                      <p className="mt-1 text-sm text-slate-300">Red territorial</p>
                    </div>
                  </div>

                  <Link
                    to="/sobre-nosotros"
                    className="mt-7 inline-flex items-center gap-2 text-sm font-semibold text-white transition-colors duration-200 hover:text-blue-300"
                  >
                    Conocer mas sobre Asovedra
                    <FaArrowRight className="text-xs" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="relative w-full bg-[linear-gradient(135deg,#172554_0%,#1e293b_45%,#7f1d1d_100%)] py-20 lg:py-24">
          <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.12),transparent_22%)]"></div>
          <div className="relative mx-auto max-w-5xl px-4 text-center sm:px-6 lg:px-8">
            <div className="mx-auto flex h-18 w-18 items-center justify-center rounded-[1.6rem] border border-white/12 bg-white/12 text-4xl text-white shadow-[0_22px_48px_-30px_rgba(15,23,42,0.9)] backdrop-blur-sm">
              <FaBalanceScale />
            </div>
            <h2 className="mt-6 text-3xl font-bold text-white lg:text-5xl">Plan de Igualdad de Genero 2025-2026</h2>
            <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-white/90">
              Nuestro compromiso con la igualdad de oportunidades y la equidad forma parte del modo en que trabajamos y acompañamos.
            </p>
            <Link
              to="/plan-de-igualdad"
              className="mt-8 inline-flex items-center gap-2 rounded-xl bg-white px-8 py-4 text-sm font-semibold text-slate-950 transition-all duration-200 hover:-translate-y-0.5 hover:bg-slate-100"
            >
              Ver plan de igualdad
              <FaArrowRight className="text-sm" />
            </Link>
          </div>
        </section>

        <section className="relative w-full bg-[linear-gradient(180deg,#111827_0%,#020617_100%)] py-20 lg:py-24">
          <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_bottom,rgba(59,130,246,0.1),transparent_30%)]"></div>
          <div className="relative mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
            <div className="rounded-[2rem] border border-white/8 bg-white/[0.04] px-8 py-10 text-center shadow-[0_28px_64px_-36px_rgba(15,23,42,0.95)] backdrop-blur-sm lg:px-12 lg:py-12">
              <div className="mx-auto flex max-w-3xl flex-col items-center">
                <div className="flex items-center gap-3 text-sm font-semibold uppercase tracking-[0.24em] text-slate-400">
                  <FaHandshake className="text-blue-300" />
                  Contacto
                </div>
                <h2 className="mt-5 text-3xl font-bold text-white lg:text-5xl">Necesitas mas informacion</h2>
                <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-300">
                  Resolvemos dudas, orientamos procesos y ayudamos a encontrar el recurso o servicio que mejor se adapta a cada situacion.
                </p>

                <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                  <Link
                    to="/contacto"
                    className="inline-flex items-center justify-center gap-2 rounded-xl bg-white px-8 py-4 text-sm font-semibold text-slate-950 transition-all duration-200 hover:-translate-y-0.5 hover:bg-slate-100"
                  >
                    Contactar ahora
                    <FaArrowRight className="text-sm" />
                  </Link>
                  <a
                    href="tel:+34604016113"
                    className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/14 bg-white/[0.05] px-8 py-4 text-sm font-semibold text-white transition-all duration-200 hover:-translate-y-0.5 hover:bg-white/[0.08]"
                  >
                    Llamar: 604 016 113
                  </a>
                </div>

                <div className="mt-8 flex flex-wrap items-center justify-center gap-3 text-sm text-slate-300">
                  <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-4 py-2">
                    <FaHeart className="text-blue-300" />
                    Atencion cercana
                  </span>
                  <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-4 py-2">
                    <FaUsers className="text-blue-300" />
                    Apoyo comunitario
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}

export default Home
