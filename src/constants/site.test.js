import { test } from 'node:test'
import assert from 'node:assert/strict'
import { yearsSince, whatsappUrl, currentYear, FOUNDING_YEAR } from './site.js'

test('yearsSince counts full years', () => {
  assert.equal(yearsSince(2018, new Date('2026-10-25')), 8)
})

test('founding year is 2018', () => {
  assert.equal(FOUNDING_YEAR, 2018)
})

test('whatsappUrl encodes text', () => {
  assert.equal(whatsappUrl('Hola, ñ'), 'https://wa.me/34604016113?text=Hola%2C%20%C3%B1')
})

test('currentYear reads the given date', () => {
  assert.equal(currentYear(new Date('2027-01-02')), 2027)
})
