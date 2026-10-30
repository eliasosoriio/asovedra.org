// Enlaces públicos de pago (Stripe). Mientras un enlace esté vacío, su botón
// no se muestra y la web ofrece escribir a info@asovedra.org.
// Antes de rellenarlos, comprobad que los importes coinciden con cada enlace.
export const COLABORA_LINKS = {
  mensual: 'https://buy.stripe.com/5kQ14p3KmcBG1CZ3kidAk03',
  socioIndividual: '',
  socioFamiliar: '',
  donativo: 'https://donate.stripe.com/5kQbJ3cgS59e4Pbg74dAk00',
  renovacion: '',
  venezuela: '',
  cancelarMensual: ''
}

export const COLABORA_OPTIONS = [
  {
    id: 'mensual',
    title: 'Colabora cada mes',
    price: '3,50 €',
    priceSuffix: '/mes',
    description: 'Aportación voluntaria y recurrente que da continuidad a nuestra labor.',
    cta: 'Colaborar mensualmente',
    linkKey: 'mensual',
    featured: false
  },
  {
    id: 'socio',
    title: 'Forma parte de ASOVEDRA',
    price: '24 €',
    priceSuffix: '/año · familiar 36 €',
    description: 'Hazte socio con la cuota individual o familiar y participa en la vida de la asociación.',
    cta: 'Hacerme socio',
    linkKey: 'socioIndividual',
    featured: true
  },
  {
    id: 'donativo',
    title: 'Haz un donativo puntual',
    price: 'Desde 3 €',
    priceSuffix: '',
    description: 'Una aportación única, del importe que elijas a partir de 3 €, para apoyar nuestra actividad.',
    cta: 'Donar una vez',
    linkKey: 'donativo',
    featured: false
  }
]

export const COLABORA_FALLBACK = 'Escríbenos para colaborar'

export const TRANSPARENCIA_PATH = '/estatutos'

export function safeLink(url) {
  return typeof url === 'string' && url.startsWith('https://') ? url : null
}

export function resolveColaboraOptions(options = COLABORA_OPTIONS, links = COLABORA_LINKS) {
  return options.map(option => ({ ...option, href: safeLink(links[option.linkKey]) }))
}

export function cancelText(links = COLABORA_LINKS) {
  const href = safeLink(links.cancelarMensual)
  if (href) return { text: 'Puedes cancelarla cuando quieras desde tu área de cliente', href }
  return {
    text: 'Puedes cancelarla cuando quieras escribiendo a info@asovedra.org',
    href: 'mailto:info@asovedra.org'
  }
}
