import { test } from 'node:test'
import assert from 'node:assert/strict'
import {
  CONSENT_VERSION,
  CONSENT_MAX_AGE_DAYS,
  acceptAll,
  rejectAll,
  normalizeChoices,
  isConsentValid,
  hasConsent
} from './consent.js'

const now = new Date('2026-10-30T12:00:00Z')

test('aceptar todo activa todas las categorías opcionales', () => {
  const record = acceptAll(now)
  assert.deepEqual(record.choices, { necesarias: true, analiticas: true, marketing: true })
  assert.equal(record.version, CONSENT_VERSION)
  assert.equal(record.date, now.toISOString())
})

test('rechazar todo deja solo las necesarias', () => {
  const record = rejectAll(now)
  assert.deepEqual(record.choices, { necesarias: true, analiticas: false, marketing: false })
})

test('las necesarias siempre quedan activas aunque se intente desactivarlas', () => {
  assert.equal(normalizeChoices({ necesarias: false, analiticas: true }).necesarias, true)
})

test('sin elección explícita, las opcionales están desactivadas', () => {
  assert.deepEqual(normalizeChoices({}), { necesarias: true, analiticas: false, marketing: false })
})

test('un consentimiento de otra versión no es válido', () => {
  assert.equal(isConsentValid({ ...acceptAll(now), version: CONSENT_VERSION - 1 }, now), false)
})

test('el consentimiento caduca pasados los días máximos', () => {
  const record = acceptAll(now)
  const later = new Date(now.getTime() + (CONSENT_MAX_AGE_DAYS + 1) * 24 * 60 * 60 * 1000)
  assert.equal(isConsentValid(record, now), true)
  assert.equal(isConsentValid(record, later), false)
})

test('hasConsent solo da permiso con un consentimiento válido', () => {
  assert.equal(hasConsent(null, 'analiticas', now), false)
  assert.equal(hasConsent(rejectAll(now), 'analiticas', now), false)
  assert.equal(hasConsent(acceptAll(now), 'analiticas', now), true)
  assert.equal(hasConsent(rejectAll(now), 'necesarias', now), true)
})
