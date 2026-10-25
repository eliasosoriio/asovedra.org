// Datos de contacto y de la asociación que se repiten en varias páginas.
export const FOUNDING_YEAR = 2018

export const CONTACT = {
  phone: '+34604016113',
  phoneDisplay: '604 016 113',
  whatsapp: '34604016113',
  email: 'info@asovedra.org',
  address: 'Rúa Sor Lucía 4, Oficina 50',
  city: '36002 Pontevedra',
  hours: [
    'Lunes y miércoles: 10:00–14:00',
    'Martes: 17:00–19:00',
    'Jueves: 10:00–14:00 y 17:00–19:00'
  ]
}

export function yearsSince(year, now = new Date()) {
  return now.getFullYear() - year
}

export function currentYear(now = new Date()) {
  return now.getFullYear()
}

export function whatsappUrl(text) {
  return `https://wa.me/${CONTACT.whatsapp}?text=${encodeURIComponent(text)}`
}
