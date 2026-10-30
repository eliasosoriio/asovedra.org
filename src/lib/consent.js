// Gestor de consentimiento de cookies propio (sustituye a Cookiebot).
// Guarda la elección en el navegador con fecha y versión, y avisa a la web cuando cambia.

// Sube la versión si cambian las categorías o los servicios: se volverá a pedir el consentimiento
export const CONSENT_VERSION = 1
// La elección se vuelve a pedir pasado este tiempo (la AEPD recomienda no más de 24 meses)
export const CONSENT_MAX_AGE_DAYS = 365
export const CONSENT_STORAGE_KEY = 'asovedra-consent'
export const CONSENT_EVENT = 'asovedra:consent'

export const CONSENT_CATEGORIES = [
  {
    id: 'necesarias',
    title: 'Necesarias',
    required: true,
    description: 'Hacen que la web funcione: recuerdan tu elección de cookies y mantienen la sesión del portal de empleados. No se pueden desactivar.'
  },
  {
    id: 'analiticas',
    title: 'Analíticas',
    required: false,
    description: 'Nos ayudarían a saber cuántas personas visitan la web y qué páginas usan más. Ahora mismo no usamos ninguna.'
  },
  {
    id: 'marketing',
    title: 'Marketing',
    required: false,
    description: 'Servirían para mostrar contenido o publicidad personalizada de terceros. Ahora mismo no usamos ninguna.'
  }
]

export function normalizeChoices(choices = {}) {
  const normalized = {}
  for (const category of CONSENT_CATEGORIES) {
    normalized[category.id] = category.required ? true : choices[category.id] === true
  }
  return normalized
}

function buildRecord(choices, now = new Date()) {
  return { version: CONSENT_VERSION, date: now.toISOString(), choices: normalizeChoices(choices) }
}

export function acceptAll(now = new Date()) {
  return buildRecord(Object.fromEntries(CONSENT_CATEGORIES.map((c) => [c.id, true])), now)
}

export function rejectAll(now = new Date()) {
  return buildRecord({}, now)
}

export function customConsent(choices, now = new Date()) {
  return buildRecord(choices, now)
}

export function isConsentValid(record, now = new Date()) {
  if (!record || record.version !== CONSENT_VERSION || !record.date) return false
  const age = now.getTime() - new Date(record.date).getTime()
  return age >= 0 && age <= CONSENT_MAX_AGE_DAYS * 24 * 60 * 60 * 1000
}

export function hasConsent(record, categoryId, now = new Date()) {
  const category = CONSENT_CATEGORIES.find((c) => c.id === categoryId)
  if (category?.required) return true
  return isConsentValid(record, now) && record.choices?.[categoryId] === true
}

// --- Navegador ---

export function readConsent() {
  try {
    const raw = window.localStorage.getItem(CONSENT_STORAGE_KEY)
    const record = raw ? JSON.parse(raw) : null
    return isConsentValid(record) ? record : null
  } catch {
    return null
  }
}

export function saveConsent(record) {
  try { window.localStorage.setItem(CONSENT_STORAGE_KEY, JSON.stringify(record)) } catch { /* sin almacenamiento */ }
  window.dispatchEvent(new CustomEvent(CONSENT_EVENT, { detail: record }))
}

// Servicios que solo se cargan con consentimiento. Para añadir uno (p. ej. analítica),
// basta con una entrada: { id, category: 'analiticas', src: 'https://…' }.
export const CONSENT_SCRIPTS = []

// Carga los scripts permitidos que aún no estén en la página
export function applyConsentScripts(record) {
  for (const script of CONSENT_SCRIPTS) {
    if (!hasConsent(record, script.category)) continue
    if (document.querySelector(`script[data-consent-id="${script.id}"]`)) continue
    const tag = document.createElement('script')
    tag.src = script.src
    tag.async = true
    tag.dataset.consentId = script.id
    document.head.appendChild(tag)
  }
}

// ¿Había algún script cargado que ahora deja de estar permitido? (para recargar y quitarlo)
export function revokedScriptsLoaded(record) {
  return CONSENT_SCRIPTS.some(
    (script) => !hasConsent(record, script.category) && document.querySelector(`script[data-consent-id="${script.id}"]`)
  )
}

// Abre el panel de configuración desde cualquier parte (p. ej. la política de cookies)
export const OPEN_SETTINGS_EVENT = 'asovedra:open-cookie-settings'

export function openCookieSettings() {
  window.dispatchEvent(new Event(OPEN_SETTINGS_EVENT))
}
