import React from 'react'
import SEO from '../components/SEO'
import {
  FaExclamationTriangle,
  FaHandsHelping,
  FaHeart,
  FaHome,
  FaLock,
  FaUsers,
  FaArrowRight,
  FaShieldAlt
} from 'react-icons/fa'

const FORM_URL = 'https://docs.google.com/forms/d/e/1FAIpQLSfhna_sr_ML0vuWtxPOhnq9G3ttD1sCcOT70pzr1Qz6iFBcbQ/viewform?usp=send_form'

const reactions = [
  'Miedo e incertidumbre',
  'Ansiedad',
  'Problemas de sueño',
  'Duelo y pérdidas',
  'Impotencia desde el exterior'
]

const steps = [
  {
    number: '1',
    title: 'Cuéntanos cómo te encuentras',
    text: 'Responde unas preguntas sobre cómo te ha afectado la emergencia y qué tipo de apoyo podrías necesitar.'
  },
  {
    number: '2',
    title: 'Valoramos tu situación',
    text: 'El equipo responsable revisará la información para identificar necesidades emocionales y establecer prioridades.'
  },
  {
    number: '3',
    title: 'Te orientamos y derivamos',
    text: 'Cuando corresponda, coordinaremos el contacto con el profesional más adecuado dentro de la red.'
  }
]

const audiences = [
  {
    icon: <FaHome />,
    title: 'Personas directamente afectadas',
    text: 'Quienes vivieron el terremoto o sus consecuencias inmediatas.'
  },
  {
    icon: <FaHeart />,
    title: 'Personas que han sufrido pérdidas',
    text: 'Pérdidas personales, familiares, materiales o de seguridad.'
  },
  {
    icon: <FaUsers />,
    title: 'Familiares y seres queridos',
    text: 'Quienes sienten miedo o preocupación por personas en las zonas afectadas.'
  },
  {
    icon: <FaShieldAlt />,
    title: 'Venezolanos en el exterior',
    text: 'Personas que viven la emergencia desde la distancia con angustia o impotencia.'
  }
]

const team = [
  {
    video: '/video/video_carmen.mp4',
    name: 'Carmen Jaudenes',
    role: 'Coordinadora General de la Red Internacional de Apoyo Psicosocial de ASOVEDRA'
  },
  {
    video: '/video/video_julia.mp4',
    name: 'Julia Herranz',
    role: 'Coordinadora Clínica de la Red de Apoyo Psicosocial de ASOVEDRA'
  },
  {
    photo: '/photo/jesus_castellano.png',
    name: 'Jesús Castellano Medina',
    role: 'Coordinador Territorial de ASOVEDRA en La Guaira'
  }
]

const helpPhotos = [
  {
    src: '/photo/foto_ayuda_0.jpeg',
    alt: 'Contenedor con ayuda humanitaria de la Iglesia Católica, Bancos de Alimentos de Colombia y Galicia Activa - Asovedra en apoyo a Venezuela'
  },
  {
    src: '/photo/foto_ayuda_1.jpeg',
    alt: 'Voluntarios de Asovedra entregando una caja de ayuda a una familia afectada'
  },
  {
    src: '/photo/foto_ayuda_2.jpeg',
    alt: 'Entrega de caja de ayuda humanitaria a una familia en Barquisimeto, Venezuela'
  }
]

function EmergenciaVenezuela() {
  return (
    <>
      <SEO
        title="Emergencia Terremoto Venezuela — Asovedra Presente"
        description="Red de apoyo psicosocial gratuita y confidencial de Asovedra para personas afectadas por el terremoto en Venezuela del 24 de junio de 2026, sus familiares y la comunidad en el exterior."
        keywords="terremoto venezuela, asovedra presente, apoyo psicologico venezuela, emergencia venezuela pontevedra, donaciones terremoto venezuela"
        canonical="/emergencia-terremoto-venezuela"
      />

      <main className="min-h-screen bg-[linear-gradient(180deg,#1c0a0a_0%,#111827_35%,#0f172a_100%)] pt-24 text-white">
        <section className="relative overflow-hidden px-4 pt-16 pb-16 lg:pt-24 lg:pb-20">
          <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_top,rgba(248,113,113,0.18),transparent_30%),radial-gradient(circle_at_bottom_right,rgba(59,130,246,0.12),transparent_26%)]"></div>
          <div className="relative mx-auto max-w-5xl text-center">
            <span className="inline-flex items-center gap-2 rounded-full border border-red-400/30 bg-red-500/15 px-4 py-2 text-sm font-semibold text-red-200">
              <FaExclamationTriangle />
              Emergencia · Terremoto en Venezuela
            </span>
            <h1 className="mt-6 text-4xl font-bold leading-tight text-white md:text-6xl">
              No tienes que afrontar este momento en soledad
            </h1>
            <div className="mx-auto mt-6 h-1 w-24 rounded-full bg-gradient-to-r from-red-500 via-yellow-400 to-blue-500"></div>
            <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-300 lg:text-xl">
              El terremoto ocurrido en Venezuela el <strong className="text-white">24 de junio de 2026</strong> ha dejado
              miedo, incertidumbre y una profunda preocupación. Asovedra pone a tu disposición una red de
              profesionales para ofrecerte orientación y acompañamiento emocional, de forma gratuita y confidencial.
            </p>
            <div className="mt-8 flex justify-center">
              <a
                href={FORM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-xl bg-white px-8 py-4 text-sm font-semibold text-slate-950 transition-all duration-200 hover:-translate-y-0.5 hover:bg-slate-100"
              >
                Solicitar apoyo psicológico
                <FaArrowRight className="text-sm" />
              </a>
            </div>
            <p className="mt-4 text-sm text-slate-400">
              Completarás la <strong className="text-slate-300">Escala de Triaje Psicológico ante Desastres Naturales (ETP-DN)</strong>,
              un breve formulario de orientación inicial que ayuda a valorar el impacto emocional y psicológico y a
              clasificar las necesidades de atención. Servicio sujeto a disponibilidad profesional y tus respuestas se
              tratan con estricta confidencialidad.
            </p>
          </div>
        </section>

        <section className="relative w-full bg-white/[0.03] py-16 lg:py-20">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
              <div>
                <h2 className="text-3xl font-bold text-white lg:text-4xl">Lo que estás sintiendo también importa</h2>
                <p className="mt-5 text-base leading-7 text-slate-300 lg:text-lg">
                  Después de una experiencia así pueden aparecer miedo, tristeza, angustia, insomnio, irritabilidad,
                  sensación de peligro o preocupación constante por las personas cercanas. Estas reacciones también
                  pueden afectar a quienes viven la emergencia desde la distancia.
                </p>
                <div className="mt-6 flex flex-wrap gap-2">
                  {reactions.map((reaction) => (
                    <span
                      key={reaction}
                      className="rounded-full border border-white/10 bg-white/[0.05] px-4 py-2 text-sm font-medium text-slate-200"
                    >
                      {reaction}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex items-center rounded-[1.8rem] border border-white/10 bg-white/[0.05] p-8">
                <p className="text-xl font-medium italic leading-8 text-slate-200">
                  "Pedir apoyo no significa que seas débil. Significa que no tienes que cargar con todo en soledad."
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="relative w-full py-16 lg:py-20">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto mb-12 max-w-3xl text-center">
              <h2 className="text-3xl font-bold text-white lg:text-4xl">¿Cómo podemos ayudarte?</h2>
              <p className="mt-4 text-base leading-7 text-slate-300 lg:text-lg">
                Comenzaremos con un formulario breve para conocer tu situación y organizar una atención responsable
                y adaptada a tus necesidades.
              </p>
            </div>

            <div className="grid gap-5 md:grid-cols-3">
              {steps.map((step) => (
                <article
                  key={step.number}
                  className="rounded-[1.75rem] border border-white/8 bg-white/[0.05] p-6 shadow-[0_22px_44px_-30px_rgba(15,23,42,0.95)] backdrop-blur-sm"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-600/20 text-lg font-bold text-blue-200">
                    {step.number}
                  </div>
                  <h3 className="mt-5 text-xl font-bold text-white">{step.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-slate-300">{step.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="relative w-full bg-white/[0.03] py-16 lg:py-20">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto mb-12 max-w-3xl text-center">
              <h2 className="text-3xl font-bold text-white lg:text-4xl">Este acompañamiento puede ser para ti</h2>
              <p className="mt-4 text-base leading-7 text-slate-300 lg:text-lg">
                No es necesario esperar a encontrarte completamente desbordado para pedir ayuda.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-4">
              {audiences.map((item) => (
                <article
                  key={item.title}
                  className="flex h-full flex-col rounded-[1.75rem] border border-white/8 bg-white/[0.05] p-6 shadow-[0_22px_44px_-30px_rgba(15,23,42,0.95)] backdrop-blur-sm"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/10 text-xl text-blue-200">
                    {item.icon}
                  </div>
                  <h3 className="mt-5 text-lg font-bold text-white">{item.title}</h3>
                  <p className="mt-3 flex-grow text-sm leading-7 text-slate-300">{item.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="relative w-full py-16 lg:py-20">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto mb-12 max-w-3xl text-center">
              <span className="inline-flex rounded-full border border-white/10 bg-white/[0.05] px-4 py-2 text-sm font-semibold text-slate-200">
                Nuestro equipo
              </span>
              <h2 className="mt-5 text-3xl font-bold text-white lg:text-4xl">Una red profesional que acompaña</h2>
              <p className="mt-4 text-base leading-7 text-slate-300 lg:text-lg">
                Profesionales de la psicología han decidido aportar voluntariamente su experiencia para atender las
                necesidades emocionales derivadas de la emergencia.
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
              {team.map((member) => (
                <article
                  key={member.name}
                  className="overflow-hidden rounded-[1.8rem] border border-white/8 bg-white/[0.04] shadow-[0_24px_50px_-30px_rgba(15,23,42,0.9)] backdrop-blur-sm"
                >
                  {member.video ? (
                    <video
                      src={member.video}
                      controls
                      playsInline
                      preload="metadata"
                      className="h-72 w-full bg-black object-cover"
                    >
                      Tu navegador no soporta la reproducción de vídeo.
                    </video>
                  ) : (
                    <img
                      src={member.photo}
                      alt={member.name}
                      className="h-72 w-full object-cover object-[center_20%]"
                    />
                  )}
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-white">{member.name}</h3>
                    <p className="mt-2 text-sm leading-6 text-slate-300">{member.role}</p>
                  </div>
                </article>
              ))}
            </div>

            <p className="mt-6 text-center text-sm text-slate-400">
              La asignación se realizará según las necesidades identificadas, la especialización y la disponibilidad
              de los profesionales participantes.
            </p>
          </div>
        </section>

        <section className="relative w-full py-16 lg:py-20">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto mb-12 max-w-3xl text-center">
              <span className="inline-flex rounded-full border border-white/10 bg-white/[0.05] px-4 py-2 text-sm font-semibold text-slate-200">
                Nuestra ayuda en acción
              </span>
              <h2 className="mt-5 text-3xl font-bold text-white lg:text-4xl">La solidaridad ya está llegando</h2>
              <p className="mt-4 text-base leading-7 text-slate-300 lg:text-lg">
                Junto a Galicia Activa, la Iglesia Católica y los Bancos de Alimentos de Colombia, Asovedra ya está
                haciendo llegar ayuda humanitaria directamente a las familias afectadas en Venezuela.
              </p>
            </div>

            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {helpPhotos.map((photo) => (
                <a
                  key={photo.src}
                  href={photo.src}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group overflow-hidden rounded-[1.6rem] border border-white/8 bg-white/[0.04] shadow-[0_22px_44px_-30px_rgba(15,23,42,0.95)]"
                >
                  <img
                    src={photo.src}
                    alt={photo.alt}
                    className="h-64 w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </a>
              ))}
            </div>

            <div className="mt-6 overflow-hidden rounded-[1.8rem] border border-white/8 bg-white/[0.04] shadow-[0_24px_50px_-30px_rgba(15,23,42,0.9)]">
              <video
                src="/video/video_ayuda_0.mp4"
                controls
                playsInline
                preload="metadata"
                className="max-h-[32rem] w-full bg-black object-contain"
              >
                Tu navegador no soporta la reproducción de vídeo.
              </video>
            </div>
          </div>
        </section>

        <section className="relative w-full bg-white/[0.03] py-16 lg:py-20">
          <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
            <div className="rounded-[1.8rem] border border-white/8 bg-white/[0.05] p-8 lg:p-10">
              <div className="flex items-start gap-3">
                <FaLock className="mt-1 text-xl text-blue-200" />
                <div>
                  <h3 className="text-lg font-bold text-white">
                    Tu información será tratada con respeto y confidencialidad
                  </h3>
                  <p className="mt-2 text-sm leading-7 text-slate-300">
                    Solo se utilizará para valorar tu solicitud, organizar la atención y facilitar la derivación
                    profesional.
                  </p>
                </div>
              </div>

              <div className="mt-8 grid gap-5 sm:grid-cols-3">
                <div>
                  <p className="text-sm font-bold text-white">Valoración inicial</p>
                  <p className="mt-2 text-sm leading-6 text-slate-300">
                    El formulario orienta el proceso, pero no constituye por sí mismo un diagnóstico clínico.
                  </p>
                </div>
                <div>
                  <p className="text-sm font-bold text-white">Uso limitado de la información</p>
                  <p className="mt-2 text-sm leading-6 text-slate-300">
                    Los datos se emplearán exclusivamente para evaluación, coordinación y atención psicosocial.
                  </p>
                </div>
                <div>
                  <p className="text-sm font-bold text-white">Atención según disponibilidad</p>
                  <p className="mt-2 text-sm leading-6 text-slate-300">
                    Completar el formulario no garantiza atención inmediata; permite organizarla de forma responsable.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="relative w-full py-16 lg:py-20">
          <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold text-white lg:text-4xl">
              Dar el primer paso puede ayudarte a sentirte acompañado
            </h2>
            <p className="mx-auto mt-5 max-w-3xl text-base leading-7 text-slate-300 lg:text-lg">
              No tienes que saber exactamente qué ayuda necesitas. Cuéntanos brevemente qué estás viviendo y
              trataremos de orientarte hacia la atención más adecuada.
            </p>
            <div className="mt-8 flex justify-center">
              <a
                href={FORM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-xl bg-white px-8 py-4 text-sm font-semibold text-slate-950 transition-all duration-200 hover:-translate-y-0.5 hover:bg-slate-100"
              >
                Completar el formulario
                <FaArrowRight className="text-sm" />
              </a>
            </div>

            <div className="mt-10 rounded-[1.5rem] border border-red-400/25 bg-red-500/10 p-6 text-left sm:p-8">
              <div className="flex items-center gap-3">
                <FaExclamationTriangle className="shrink-0 text-xl text-red-300" />
                <p className="text-sm font-bold uppercase tracking-wide text-red-200">
                  En una situación de peligro inmediato
                </p>
              </div>
              <p className="mt-4 text-sm leading-7 text-red-100 lg:text-base">
                Este servicio no sustituye a emergencias. Si existe riesgo para tu vida, riesgo de autolesión o
                peligro para otra persona, contacta con los servicios de emergencia del país en el que te encuentres
                o acude al centro sanitario más cercano.
              </p>
            </div>
          </div>
        </section>

        <section className="relative w-full bg-[linear-gradient(135deg,#172554_0%,#1e293b_45%,#7f1d1d_100%)] py-16 lg:py-20">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-3xl text-center">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-[1.4rem] border border-white/12 bg-white/12 text-3xl text-white">
                <FaHandsHelping />
              </div>
              <h2 className="mt-6 text-3xl font-bold text-white lg:text-4xl">Cada donación cuenta</h2>
              <p className="mt-5 text-base leading-7 text-white/90 lg:text-lg">
                Asovedra canaliza la solidaridad de la comunidad de Pontevedra hacia las personas afectadas por los
                terremotos en Venezuela, de forma rápida, útil y transparente. Toda ayuda se destina a material de
                rescate y apoyo directo a los damnificados.
              </p>
            </div>

            <div className="mx-auto mt-10 max-w-xl overflow-hidden rounded-[1.8rem] border border-white/15 bg-white/5 shadow-[0_28px_60px_-30px_rgba(0,0,0,0.6)]">
              <a href="/photo/folleto_ayuda.png" target="_blank" rel="noopener noreferrer">
                <img
                  src="/photo/folleto_ayuda.png"
                  alt="Folleto con datos de la cuenta bancaria (IBAN) para donar y ayudar a los afectados por el terremoto en Venezuela"
                  className="w-full"
                />
              </a>
            </div>
            <p className="mt-4 text-center text-sm text-white/70">
              Toca la imagen para verla ampliada. Ante cualquier duda sobre cómo colaborar, puedes escribirnos a{' '}
              <a href="mailto:info@asovedra.org" className="underline hover:text-white">
                info@asovedra.org
              </a>.
            </p>
          </div>
        </section>
      </main>
    </>
  )
}

export default EmergenciaVenezuela
