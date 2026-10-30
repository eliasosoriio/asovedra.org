import { test } from 'node:test'
import assert from 'node:assert/strict'
import { COLABORA_LINKS, COLABORA_OPTIONS, resolveColaboraOptions, safeLink, cancelText } from './colabora.js'

test('empty links resolve to null href', () => {
  const empty = Object.fromEntries(Object.keys(COLABORA_LINKS).map(k => [k, '']))
  assert.ok(resolveColaboraOptions(undefined, empty).every(o => o.href === null))
})

test('https link is kept', () => {
  const r = resolveColaboraOptions(undefined, { ...COLABORA_LINKS, mensual: 'https://buy.stripe.com/x' })
  assert.equal(r.find(o => o.id === 'mensual').href, 'https://buy.stripe.com/x')
})

test('non-https and placeholder links are rejected', () => {
  for (const bad of ['', '#', 'http://x', 'javascript:alert(1)', undefined, null]) assert.equal(safeLink(bad), null)
})

test('cancelText falls back to email', () => {
  assert.equal(cancelText().href, 'mailto:info@asovedra.org')
})

test('cancelText uses the portal link when present', () => {
  const r = cancelText({ ...COLABORA_LINKS, cancelarMensual: 'https://billing.stripe.com/p/x' })
  assert.equal(r.href, 'https://billing.stripe.com/p/x')
})

test('options carry the spec amounts', () => {
  assert.deepEqual(COLABORA_OPTIONS.map(o => o.price), ['3,50 €', '24 €', 'Desde 3 €'])
})
