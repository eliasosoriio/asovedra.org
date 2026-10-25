import { whatsappUrl } from './site.js'

// Textos de la campaña Residencia 2027 (literales de la directiva).
// Cuando exista el formulario, basta con cambiar ctaHref.
export const RESIDENCIA = {
  headline: 'En 2026 dimos un paso. En 2027 seguimos contigo.',
  intro: '¿Obtuviste tu residencia mediante la regularización extraordinaria de 2026? Si vence en abril, mayo o junio de 2027, contacta con ASOVEDRA para preparar la modificación o prórroga que corresponda.',
  advance: 'Solicita tu revisión con tres meses de antelación. Si no sabes cuándo caduca, también podemos orientarte.',
  cta: 'Solicitar revisión de mi residencia',
  ctaHref: whatsappUrl('Hola, quiero solicitar la revisión de mi residencia 2027.'),
  steps: [
    'Cuéntanos tu caso con tres meses de antelación.',
    'Revisamos tu resolución y tus fechas.',
    'Preparamos contigo lo que corresponda.'
  ]
}
