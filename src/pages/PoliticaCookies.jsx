import React from 'react'
import SEO from '../components/SEO'
import LegalDocumentLayout from '../components/layout/LegalDocumentLayout'
import { CONSENT_MAX_AGE_DAYS, openCookieSettings } from '../lib/consent'

const h2 = 'mb-6 text-[28px] font-semibold leading-tight tracking-[-0.01em] text-ink'
const h3 = 'mb-4 mt-12 text-[22px] font-semibold leading-tight tracking-[-0.01em] text-ink'

// Lo que la web guarda realmente en el navegador (mantener al día si se añade algún servicio)
const STORED = [
  {
    name: 'asovedra-consent',
    type: 'Almacenamiento local · propia',
    purpose: 'Recuerda qué cookies has aceptado o rechazado y cuándo.',
    duration: `${Math.round(CONSENT_MAX_AGE_DAYS / 30)} meses`,
    category: 'Necesaria'
  },
  {
    name: 'asovedra-preloader',
    type: 'Almacenamiento de sesión · propia',
    purpose: 'Evita repetir la pantalla de carga en cada página.',
    duration: 'Hasta cerrar el navegador',
    category: 'Necesaria'
  },
  {
    name: 'sb-…-auth-token',
    type: 'Almacenamiento local · propia (Supabase)',
    purpose: 'Mantiene la sesión del portal de empleados. Solo existe si inicias sesión en el portal.',
    duration: 'Hasta cerrar sesión',
    category: 'Necesaria'
  }
]

function PoliticaCookies() {
  return (
    <>
      <SEO
        title="Política de Cookies"
        description="Qué guarda la web de ASOVEDRA en tu navegador, para qué y cómo aceptar, rechazar o cambiar tu elección en cualquier momento."
        keywords="cookies asovedra, política cookies, privacidad web, consentimiento"
        canonical="/politica-cookies"
      />
      <LegalDocumentLayout
        eyebrow="Legal"
        title="Política de Cookies"
        description="Qué guardamos en tu navegador, para qué y cómo cambiar tu elección"
      >
        <h2 className={h2}>Política de cookies de asovedra.org</h2>

        <p className="mb-6">
          Esta política explica qué información guarda la web <strong>https://asovedra.org</strong> en tu navegador, para qué
          la usamos y cómo puedes aceptarla, rechazarla o cambiar de opinión cuando quieras, conforme al artículo 22.2 de la
          Ley 34/2002 de Servicios de la Sociedad de la Información (LSSI) y a la guía de cookies de la Agencia Española de
          Protección de Datos.
        </p>

        <div className="mb-10 rounded-[28px] bg-cloud p-8">
          <p className="text-[19px] font-semibold text-ink">En resumen</p>
          <p className="mt-2">
            Solo usamos lo necesario para que la web funcione. No usamos cookies de analítica, de publicidad ni de redes
            sociales, y no compartimos tus datos de navegación con nadie.
          </p>
          <button
            type="button"
            onClick={openCookieSettings}
            className="mt-6 inline-flex min-h-12 items-center rounded-full bg-navy px-6 text-[16px] font-semibold text-white transition-colors hover:bg-navy-deep"
          >
            Configurar cookies
          </button>
        </div>

        <h3 className={h3}>¿Qué son las cookies?</h3>
        <p className="mb-6">
          Son pequeños archivos o datos que una web guarda en tu navegador para recordar información entre una página y otra
          o entre visitas. En esta política llamamos «cookies» también a otras formas parecidas de guardar información, como
          el almacenamiento local del navegador.
        </p>

        <h3 className={h3}>Qué guardamos y para qué</h3>
        <p className="mb-6">Todo lo que guardamos es propio (no de terceros) y necesario para que la web funcione:</p>
        <ul className="mb-6 list-none space-y-4 pl-0">
          {STORED.map((item) => (
            <li key={item.name} className="rounded-[20px] bg-cloud p-6">
              <p className="font-semibold text-ink">{item.name}</p>
              <p className="mt-1 text-[15px]">{item.type} · {item.category} · Duración: {item.duration}</p>
              <p className="mt-2">{item.purpose}</p>
            </li>
          ))}
        </ul>

        <h3 className={h3}>Categorías</h3>
        <ul className="mb-6 space-y-2">
          <li><strong>Necesarias:</strong> permiten que la web funcione. Están siempre activas porque la ley no exige consentimiento para ellas.</li>
          <li><strong>Analíticas:</strong> servirían para medir las visitas. Ahora mismo no usamos ninguna.</li>
          <li><strong>Marketing:</strong> servirían para mostrar publicidad o contenido personalizado. Ahora mismo no usamos ninguna.</li>
        </ul>
        <p className="mb-6">
          Si en el futuro añadimos algún servicio de estas categorías, solo se activará si lo aceptas, y te volveremos a pedir
          tu elección.
        </p>

        <h3 className={h3}>Cómo aceptar, rechazar o cambiar tu elección</h3>
        <p className="mb-6">
          La primera vez que entras te preguntamos con un aviso en el que puedes <strong>aceptar todas</strong>,{' '}
          <strong>rechazar todas</strong> o <strong>configurarlas</strong> por categorías. Navegar por la web no supone aceptar
          nada. Puedes cambiar tu elección en cualquier momento desde el botón de la galleta, abajo a la izquierda, o desde el
          botón «Configurar cookies» de esta página. Tu elección se guarda {Math.round(CONSENT_MAX_AGE_DAYS / 30)} meses;
          pasado ese tiempo, o si cambiamos los servicios que usamos, te la volveremos a pedir.
        </p>

        <h3 className={h3}>Enlaces a otras webs</h3>
        <p className="mb-6">
          Cuando sales de nuestra web por un enlace (por ejemplo, a Stripe para hacer un donativo, a WhatsApp, a las redes
          sociales o a las noticias de los periódicos), esas webs tienen sus propias políticas de cookies, que no dependen de
          nosotros. Las imágenes de las noticias se sirven desde nuestro propio servidor, así que verlas no envía datos a los
          periódicos.
        </p>

        <h3 className={h3}>Borrar las cookies desde tu navegador</h3>
        <p className="mb-4">También puedes borrar o bloquear lo que guarda cualquier web desde la configuración de tu navegador:</p>
        <ul className="mb-6">
          <li><a href="https://support.google.com/chrome/answer/95647?hl=es" target="_blank" rel="noopener noreferrer">Chrome</a></li>
          <li><a href="https://support.mozilla.org/es/kb/Borrar%20cookies" target="_blank" rel="noopener noreferrer">Firefox</a></li>
          <li><a href="https://support.apple.com/es-es/guide/safari/sfri11471/mac" target="_blank" rel="noopener noreferrer">Safari</a></li>
          <li><a href="https://support.microsoft.com/es-es/microsoft-edge/eliminar-las-cookies-en-microsoft-edge-63947406-40ac-c3b8-57b9-2a946a29ae09" target="_blank" rel="noopener noreferrer">Microsoft Edge</a></li>
        </ul>

        <h3 className={h3}>Contacto</h3>
        <p className="mb-6">
          Para cualquier duda sobre esta política escríbenos a <a href="mailto:info@asovedra.org">info@asovedra.org</a>.
        </p>

        <div className="mt-12 rounded-[28px] bg-cloud p-8">
          <p className="text-[15px] text-muted">
            <strong>Última actualización:</strong> octubre de 2026
          </p>
        </div>
      </LegalDocumentLayout>
    </>
  )
}

export default PoliticaCookies
