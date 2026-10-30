import React from 'react'
import {
  LuArrowRight,
  LuHandHeart,
  LuHeart,
  LuHouse,
  LuLock,
  LuShieldCheck,
  LuTriangleAlert,
  LuUsers
} from 'react-icons/lu'
import SEO from '../components/SEO'
import Button from '../components/ui/Button'
import Card from '../components/ui/Card'
import Pill from '../components/ui/Pill'
import SectionHeader from '../components/ui/SectionHeader'
import { COLABORA_LINKS, safeLink } from '../constants/colabora'

const VENEZUELA_DONATION_HREF = safeLink(COLABORA_LINKS.venezuela)

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
    icon: LuHouse,
    title: 'Personas directamente afectadas',
    text: 'Quienes vivieron el terremoto o sus consecuencias inmediatas.'
  },
  {
    icon: LuHeart,
    title: 'Personas que han sufrido pérdidas',
    text: 'Pérdidas personales, familiares, materiales o de seguridad.'
  },
  {
    icon: LuUsers,
    title: 'Familiares y seres queridos',
    text: 'Quienes sienten miedo o preocupación por personas en las zonas afectadas.'
  },
  {
    icon: LuShieldCheck,
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

const confidentiality = [
  { title: 'Valoración inicial', text: 'El formulario orienta el proceso, pero no constituye por sí mismo un diagnóstico clínico.' },
  { title: 'Uso limitado de la información', text: 'Los datos se emplearán exclusivamente para evaluación, coordinación y atención psicosocial.' },
  { title: 'Atención según disponibilidad', text: 'Completar el formulario no garantiza atención inmediata; permite organizarla de forma responsable.' }
]

function FormButton({ children }) {
  return (
    <Button href={FORM_URL} variant="navy" size="lg" icon={<LuArrowRight />}>
      {children}
    </Button>
  )
}

function EmergenciaVenezuela() {
  return (
    <>
      <SEO
        title="Emergencia Terremoto Venezuela — Asovedra Presente"
        description="Red de apoyo psicosocial gratuita y confidencial de Asovedra para personas afectadas por el terremoto en Venezuela del 24 de junio de 2026, sus familiares y la comunidad en el exterior."
        keywords="terremoto venezuela, asovedra presente, apoyo psicologico venezuela, emergencia venezuela pontevedra, donaciones terremoto venezuela"
        canonical="/emergencia-terremoto-venezuela"
      />

      <main className="min-h-screen">
        <section className="mx-auto max-w-[1440px] px-6 pb-16 pt-36 lg:px-16 lg:pb-24 lg:pt-[190px]">
          <div className="lg:pl-[72px]">
            <Pill tone="red">
              <LuTriangleAlert aria-hidden="true" />
              Emergencia · Terremoto en Venezuela
            </Pill>
            <h1 className="big-headline mt-6 max-w-6xl text-ink">
              No tienes que afrontar este momento en soledad
            </h1>
            <p className="mt-8 max-w-3xl text-xl leading-relaxed text-ink lg:text-[22px]">
              El terremoto ocurrido en Venezuela el <strong className="text-ink">24 de junio de 2026</strong> ha dejado
              miedo, incertidumbre y una profunda preocupación. Asovedra pone a tu disposición una red de
              profesionales para ofrecerte orientación y acompañamiento emocional, de forma gratuita y confidencial.
            </p>
            <div className="mt-8">
              <FormButton>Solicitar apoyo psicológico</FormButton>
            </div>
            <p className="mt-5 max-w-3xl text-base leading-relaxed text-muted">
              Completarás la <strong className="text-ink">Escala de Triaje Psicológico ante Desastres Naturales (ETP-DN)</strong>,
              un breve formulario de orientación inicial que ayuda a valorar el impacto emocional y psicológico y a
              clasificar las necesidades de atención. Servicio sujeto a disponibilidad profesional y tus respuestas se
              tratan con estricta confidencialidad.
            </p>
          </div>
        </section>

        <section className="mx-auto grid max-w-[1440px] gap-10 px-6 py-20 lg:grid-cols-[1.1fr_0.9fr] lg:px-16">
          <div>
            <SectionHeader
              title="Lo que estás sintiendo también importa"
              subtitle="Después de una experiencia así pueden aparecer miedo, tristeza, angustia, insomnio, irritabilidad, sensación de peligro o preocupación constante por las personas cercanas. Estas reacciones también pueden afectar a quienes viven la emergencia desde la distancia."
            />
            <ul className="mt-6 flex flex-wrap gap-2">
              {reactions.map((reaction) => (
                <li key={reaction} className="rounded-full bg-pill-red px-4 py-2 text-sm font-semibold text-[#a10a22]">
                  {reaction}
                </li>
              ))}
            </ul>
          </div>
          <blockquote className="flex items-center rounded-[28px] bg-navy p-8 sm:p-10">
            <p className="text-xl font-semibold leading-8 text-white">
              «Pedir apoyo no significa que seas débil. Significa que no tienes que cargar con todo en soledad.»
            </p>
          </blockquote>
        </section>

        <section className="bg-sand py-20">
          <div className="mx-auto max-w-[1440px] px-6 lg:px-16">
            <SectionHeader
              align="center"
              title="¿Cómo podemos ayudarte?"
              subtitle="Comenzaremos con un formulario breve para conocer tu situación y organizar una atención responsable y adaptada a tus necesidades."
            />
            <ol className="mt-10 grid gap-5 md:grid-cols-3">
              {steps.map((step) => (
                <li key={step.number}>
                  <Card as="article" className="h-full p-7">
                    <span className="grid h-11 w-11 place-items-center rounded-full bg-yellow text-lg font-medium text-ink">
                      {step.number}
                    </span>
                    <h3 className="mt-5 text-xl font-bold text-ink">{step.title}</h3>
                    <p className="mt-2 text-[15px] leading-relaxed text-muted">{step.text}</p>
                  </Card>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section className="mx-auto max-w-[1440px] px-6 py-20 lg:px-16">
          <SectionHeader
            align="center"
            title="Este acompañamiento puede ser para ti"
            subtitle="No es necesario esperar a encontrarte completamente desbordado para pedir ayuda."
          />
          <div className="mt-10 grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
            {audiences.map((item) => {
              const Icon = item.icon
              return (
                <Card key={item.title} className="p-7">
                  <span className="grid h-12 w-12 place-items-center rounded-2xl bg-pill-red text-[#a10a22]">
                    <Icon aria-hidden="true" className="h-6 w-6" />
                  </span>
                  <h3 className="mt-5 text-lg font-bold text-ink">{item.title}</h3>
                  <p className="mt-2 text-[15px] leading-relaxed text-muted">{item.text}</p>
                </Card>
              )
            })}
          </div>
        </section>

        <section className="bg-sand py-20">
          <div className="mx-auto max-w-[1440px] px-6 lg:px-16">
            <SectionHeader
              align="center"
              pill="Nuestro equipo"
              pillTone="white"
              title="Una red profesional que acompaña"
              subtitle="Profesionales de la psicología han decidido aportar voluntariamente su experiencia para atender las necesidades emocionales derivadas de la emergencia."
            />
            <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
              {team.map((member) => (
                <Card key={member.name} className="overflow-hidden">
                  {member.video ? (
                    <video
                      src={member.video}
                      controls
                      playsInline
                      preload="metadata"
                      className="h-72 w-full bg-ink object-cover"
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
                    <h3 className="text-xl font-bold text-ink">{member.name}</h3>
                    <p className="mt-1 text-[15px] leading-relaxed text-muted">{member.role}</p>
                  </div>
                </Card>
              ))}
            </div>
            <p className="mt-6 text-center text-sm text-muted">
              La asignación se realizará según las necesidades identificadas, la especialización y la disponibilidad
              de los profesionales participantes.
            </p>
          </div>
        </section>

        <section className="mx-auto max-w-[1440px] px-6 py-20 lg:px-16">
          <SectionHeader
            align="center"
            pill="Nuestra ayuda en acción"
            pillTone="red"
            title="La solidaridad ya está llegando"
            subtitle="Junto a Galicia Activa, la Iglesia Católica y los Bancos de Alimentos de Colombia, Asovedra ya está haciendo llegar ayuda humanitaria directamente a las familias afectadas en Venezuela."
          />
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {helpPhotos.map((photo) => (
              <a
                key={photo.src}
                href={photo.src}
                target="_blank"
                rel="noopener noreferrer"
                className="group overflow-hidden rounded-[24px] bg-line"
              >
                <img
                  src={photo.src}
                  alt={photo.alt}
                  loading="lazy"
                  className="h-64 w-full object-cover transition-transform duration-500 group-hover:scale-105 motion-reduce:transition-none motion-reduce:group-hover:scale-100"
                />
              </a>
            ))}
          </div>
          <div className="mt-5 overflow-hidden rounded-[28px] bg-ink">
            <video
              src="/video/video_ayuda_0.mp4"
              controls
              playsInline
              preload="metadata"
              className="max-h-[32rem] w-full object-contain"
            >
              Tu navegador no soporta la reproducción de vídeo.
            </video>
          </div>
        </section>

        <section className="mx-auto max-w-[1440px] px-6 pb-20 lg:px-16">
          <Card className="p-8 lg:p-10">
            <div className="flex items-start gap-4">
              <span className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-pill-blue text-navy">
                <LuLock aria-hidden="true" className="h-6 w-6" />
              </span>
              <div>
                <h2 className="text-xl font-bold text-ink">Tu información será tratada con respeto y confidencialidad</h2>
                <p className="mt-1 text-[15px] leading-relaxed text-muted">
                  Solo se utilizará para valorar tu solicitud, organizar la atención y facilitar la derivación profesional.
                </p>
              </div>
            </div>
            <div className="mt-8 grid gap-5 sm:grid-cols-3">
              {confidentiality.map((item) => (
                <div key={item.title} className="rounded-[20px] bg-cream p-5">
                  <p className="font-bold text-ink">{item.title}</p>
                  <p className="mt-1 text-sm leading-relaxed text-muted">{item.text}</p>
                </div>
              ))}
            </div>
          </Card>
        </section>

        <section className="mx-auto max-w-[1440px] px-6 pb-20 lg:px-16">
          <div className="rounded-[32px] bg-sand p-8 text-center sm:p-12">
            <h2 className="mx-auto max-w-3xl text-3xl font-medium tracking-[-0.01em] text-ink lg:text-4xl">
              Dar el primer paso puede ayudarte a sentirte acompañado
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-[17px] leading-relaxed text-muted">
              No tienes que saber exactamente qué ayuda necesitas. Cuéntanos brevemente qué estás viviendo y
              trataremos de orientarte hacia la atención más adecuada.
            </p>
            <div className="mt-7">
              <FormButton>Completar el formulario</FormButton>
            </div>

            <div role="note" className="mx-auto mt-10 max-w-3xl rounded-[22px] border border-[#f5b8c3] bg-pill-red p-6 text-left sm:p-8">
              <div className="flex items-center gap-3">
                <LuTriangleAlert aria-hidden="true" className="h-6 w-6 shrink-0 text-[#a10a22]" />
                <p className="text-sm font-medium uppercase tracking-wide text-[#a10a22]">
                  En una situación de peligro inmediato
                </p>
              </div>
              <p className="mt-3 text-[15px] leading-relaxed text-[#6b0716]">
                Este servicio no sustituye a emergencias. Si existe riesgo para tu vida, riesgo de autolesión o
                peligro para otra persona, contacta con los servicios de emergencia del país en el que te encuentres
                o acude al centro sanitario más cercano.
              </p>
            </div>
          </div>
        </section>

        <section className="bg-navy py-20 text-white">
          <div className="mx-auto max-w-[1440px] px-6 lg:px-16">
            <div className="mx-auto max-w-3xl text-center">
              <span className="mx-auto grid h-16 w-16 place-items-center rounded-[20px] bg-white/10 text-yellow">
                <LuHandHeart aria-hidden="true" className="h-8 w-8" />
              </span>
              <h2 className="mt-6 text-3xl font-medium tracking-[-0.01em] lg:text-4xl">Cada donación cuenta</h2>
              <p className="mt-4 text-[17px] leading-relaxed text-[#c9d3f0]">
                Asovedra canaliza la solidaridad de la comunidad de Pontevedra hacia las personas afectadas por los
                terremotos en Venezuela, de forma rápida, útil y transparente. Toda ayuda se destina a material de
                rescate y apoyo directo a los damnificados.
              </p>
            </div>

            {VENEZUELA_DONATION_HREF && (
              <div className="mt-8 flex flex-col items-center gap-3 text-center">
                <Button href={VENEZUELA_DONATION_HREF} variant="yellow" size="lg">
                  Donar a la campaña de Venezuela
                </Button>
                <p className="text-sm text-[#c9d3f0]">Esta donación se destina íntegramente a la campaña de emergencia en Venezuela.</p>
              </div>
            )}

            <div className="mx-auto mt-10 max-w-xl overflow-hidden rounded-[28px] bg-white/5">
              <a href="/photo/folleto_ayuda.png" target="_blank" rel="noopener noreferrer">
                <img
                  src="/photo/folleto_ayuda.png"
                  alt="Folleto con datos de la cuenta bancaria (IBAN) para donar y ayudar a los afectados por el terremoto en Venezuela"
                  className="w-full"
                />
              </a>
            </div>
            <p className="mt-4 text-center text-sm text-[#c9d3f0]">
              Toca la imagen para verla ampliada. Ante cualquier duda sobre cómo colaborar, puedes escribirnos a{' '}
              <a href="mailto:info@asovedra.org" className="font-semibold text-white underline">
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
