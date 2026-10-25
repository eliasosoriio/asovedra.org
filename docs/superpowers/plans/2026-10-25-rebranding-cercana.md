# Rebranding «Cercana» Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Replace the dark visual identity of every public page of asovedra.org with the approved light "Cercana" (B) system, and add the «Colabora» and «Residencia 2027» sections (no forms, no DB).

**Architecture:** Design tokens live in Tailwind 4 `@theme` in `src/styles/styles.css`. A few shared primitives (`Button`, `Pill`, `SectionHeader`, `Card`) plus rewritten layout components (`EmergencyStrip`, `Header`, `Footer`, `InternalPageHero`, `ContentSurface`, `LegalDocumentLayout`) carry the look, so pages mostly swap class names. Content that changes (contact data, Colabora links and amounts, Residencia copy, founding year) moves to plain JS constants with pure helpers, which are unit-tested with Node's built-in test runner (no new dependency).

**Tech Stack:** React 19, Vite 7, React Router 7, Tailwind CSS 4 (`@tailwindcss/vite`), Framer Motion 12, `react-icons/lu` (Lucide stroke icons, already installed), Node 22 `node:test`.

**Spec:** `docs/superpowers/specs/2026-10-25-rebranding-cercana-design.md`. Visual reference: `docs/superpowers/specs/2026-10-25-rebranding-mockups/propuestas-A-B-C.html`, tab **B**, and `boton-colabora.html`, option **1**. Open both in a browser before starting any UI task.

## Global Constraints

- Colours: navy `#001E77`, yellow `#F8C31C`, red `#E10E2F`, ink `#0d1530`, body text `#1d2433`, muted `#4a5263`, cream `#FFFCF6`, sand `#FFF4D6`, pill-yellow `#FFF1C7`, pill-blue `#EEF2FB`, line `#f0e9da`, footer `#0d1530`.
- Font: Plus Jakarta Sans 400–800, loaded from Google Fonts in `index.html`. Base text 17px, line-height 1.6. Headings weight 800 with negative letter-spacing: hero ≈60px, section ≈42px on desktop.
- Radius: big blocks 28–32px, cards 22–28px, buttons and pills fully rounded.
- Icons: `react-icons/lu` only for new or reworked UI. No emoji. No «♥» text glyph.
- Contrast WCAG AA. Visible `:focus-visible` ring on every interactive element.
- No animation that blinks or loops. Every motion respects `prefers-reduced-motion`.
- No new npm dependencies.
- Route URLs stay the same. New routes: `/colabora` and `/residencia-2027`.
- All copy in Spanish with correct accents. The Residencia 2027 copy is verbatim from the spec.
- Never render a payment button whose link is empty. Never invent links or amounts.
- The portal (`/portal`, `/portal/login`): only the minimal changes in Task 4. Its page bodies stay dark.
- Must look right from 360px wide up to 1440px.
- `index.html` keeps the Cookiebot script untouched.
- Every task ends with `npm run lint` and `npm run build` exiting 0, and `npm test` passing.

## Review Focus

1. **360px phone width:** the header (logo + Colabora + menu button) must fit on one row with no horizontal scroll. Task 4 checks this at 360×740.
2. **Empty Stripe links (the real state at launch):** no `href=""`, no `href="#"` and no dead buttons; the email fallback shows instead. Pinned by `resolveColaboraOptions` tests (Task 2) and a visual check (Task 6).
3. **Portal under the new chrome:** `/portal/login` keeps its dark body, stays readable and isn't hidden by the sticky header. Task 4 includes a screenshot check.
4. **Keyboard users:** the «La Asociación» dropdown and the mobile menu open with Enter/Space, close with Escape, and show visible focus. Task 4 step.
5. **Anchors under a sticky header:** News pagination `scrollIntoView` and any `#anchor` must not land under the header. Global `scroll-margin-top` in Task 1, checked in Task 8.

---

### Task 1: Tokens, font, base styles and a green lint baseline

**Files:**
- Modify: `src/styles/styles.css`
- Modify: `index.html` (Google Fonts `<link>`; `<title>` and description say «Asociación de Venezolanos en Pontevedra»; `theme-color` `#001E77` stays)
- Modify: `eslint.config.js` (add `globals.node` for `*.config.js`)
- Modify: `src/components/PageTransition.jsx` (clear its lint error and use Framer's `useReducedMotion()`: when it is true, skip the exit `y` offset and use `duration: 0`)
- Modify: `src/pages/BookingConfirmation.jsx` (only to clear its 2 existing lint errors)
- Modify: `package.json` (add `"test": "node --test"`)
- Delete: `src/assets/fonts/inter.woff2` and the Inter `@font-face`

**Interfaces:**
- Produces Tailwind colour utilities: `navy`, `yellow`, `red`, `ink`, `body`, `muted`, `cream`, `sand`, `pill-yellow`, `pill-blue`, `line` (`bg-navy`, `text-ink`, `border-line`…). Also `--font-display: 'Plus Jakarta Sans'`.
- Produces CSS: `@keyframes heartbeat` (scale 1 → 1.18 → 0.95 → 1, 0.6s). Class `.animate-heartbeat-hover` runs it once on `:hover` of its nearest `.group`, and is disabled under `prefers-reduced-motion: reduce`.
- Produces base styles: `body` background cream and colour body; `:focus-visible` outline 3px navy with 2px offset; `[id] { scroll-margin-top: 112px }`.
- Removes the old colour tokens: `primary`, `primary-light`, `primary-dark`, `primary-blue`, `primary-gray`, `primary-light-gray`. If other files still use them (`NewsCard.jsx`, for example), remap them in the same task: `primary-blue` → `navy`, `primary-dark` → `ink`.

- [ ] **Step 1:** Run `npm run lint`. Expected: 5 errors (the baseline recorded on 2026-10-25).
- [ ] **Step 2:** Fix the 3 source errors. `PageTransition` uses `motion.div`, so make ESLint recognise it without disabling the rule. `BookingConfirmation`: drop the unused setters. Add the node-globals override for `*.config.js`.
- [ ] **Step 3:** Run `npm run lint`. Expected: exit 0.
- [ ] **Step 4:** Implement the tokens, font, base styles and `test` script listed above.
- [ ] **Step 5:** Run `npm test`. Expected: exit 0 with "tests 0" (no test files yet). Then run `npm run build`. Expected: "✓ built".
- [ ] **Step 6: Commit** `git commit -m "chore: tokens y tipografía del nuevo sistema visual; lint en verde"`

### Task 2: Content constants with tested helpers

**Files:**
- Create: `src/constants/site.js`, `src/constants/site.test.js`
- Create: `src/constants/colabora.js`, `src/constants/colabora.test.js`
- Create: `src/constants/residencia.js`
- Modify: `src/constants/stats.js` (years come from `yearsSince`)

**Interfaces (Produces):**
- `site.js`:
  - `FOUNDING_YEAR = 2018`
  - `CONTACT = { phone: '+34604016113', phoneDisplay: '604 016 113', email: 'info@asovedra.org', address: 'Rúa Sor Lucía 4, Oficina 50', city: '36002 Pontevedra', hours: ['Lunes y miércoles: 10:00–14:00', 'Martes: 17:00–19:00', 'Jueves: 10:00–14:00 y 17:00–19:00'] }`
  - `yearsSince(year: number, now: Date = new Date()): number`
  - `whatsappUrl(text: string): string`, which returns `https://wa.me/34604016113?text=<encodeURIComponent(text)>`
  - `currentYear(now: Date = new Date()): number`
- `colabora.js`:
  - `COLABORA_LINKS = { mensual: '', socioIndividual: '', socioFamiliar: '', donativo: '', renovacion: '', venezuela: '', cancelarMensual: '' }`
  - `COLABORA_OPTIONS`, an array of `{ id: 'mensual'|'socio'|'donativo', title, price, priceSuffix, description, cta, linkKey, featured }` with the spec's values:
    - mensual: «Colabora cada mes», `3,50 €`, `/mes`, «Colaborar mensualmente», linkKey `mensual`.
    - socio: «Forma parte de ASOVEDRA», `24 €`, `/año · familiar 36 €`, «Hacerme socio», linkKey `socioIndividual`, `featured: true`.
    - donativo: «Haz un donativo puntual», `Libre`, `''`, «Donar una vez», linkKey `donativo`.
  - `safeLink(url: string): string | null`, which returns the url only if it starts with `https://`, otherwise `null`.
  - `resolveColaboraOptions(options = COLABORA_OPTIONS, links = COLABORA_LINKS): Array<option & { href: string | null }>`
  - `cancelText(links = COLABORA_LINKS): { text: string, href: string | null }`. With no link: `{ text: 'Puedes cancelarla cuando quieras escribiendo a info@asovedra.org', href: 'mailto:info@asovedra.org' }`. With a link: `{ text: 'Puedes cancelarla cuando quieras desde tu área de cliente', href: <link> }`.
  - `COLABORA_FALLBACK = 'Escríbenos a info@asovedra.org para colaborar'`
  - `TRANSPARENCIA_PATH = '/estatutos'`
- `residencia.js`:
  - `RESIDENCIA = { headline: 'En 2026 dimos un paso. En 2027 seguimos contigo.', intro, advance, cta: 'Solicitar revisión de mi residencia', ctaHref: whatsappUrl('Hola, quiero solicitar la revisión de mi residencia 2027.'), steps: ['Cuéntanos tu caso con tres meses de antelación.', 'Revisamos tu resolución y tus fechas.', 'Preparamos contigo lo que corresponda.'] }`. `intro` and `advance` are verbatim from the spec.

- [ ] **Step 1: Write failing tests**

```js
// site.test.js
test('yearsSince counts full years', () => {
  assert.equal(yearsSince(2018, new Date('2026-10-25')), 8)
})
test('whatsappUrl encodes text', () => {
  assert.equal(whatsappUrl('Hola, ñ'), 'https://wa.me/34604016113?text=Hola%2C%20%C3%B1')
})
// colabora.test.js
test('empty links resolve to null href', () => {
  assert.ok(resolveColaboraOptions().every(o => o.href === null))
})
test('https link is kept', () => {
  const r = resolveColaboraOptions(undefined, { ...COLABORA_LINKS, mensual: 'https://buy.stripe.com/x' })
  assert.equal(r.find(o => o.id === 'mensual').href, 'https://buy.stripe.com/x')
})
test('non-https and placeholder links are rejected', () => {
  for (const bad of ['', '#', 'http://x', 'javascript:alert(1)']) assert.equal(safeLink(bad), null)
})
test('cancelText falls back to email', () => {
  assert.equal(cancelText().href, 'mailto:info@asovedra.org')
})
test('options carry the spec amounts', () => {
  assert.deepEqual(COLABORA_OPTIONS.map(o => o.price), ['3,50 €', '24 €', 'Libre'])
})
```

- [ ] **Step 2:** Run `npm test`. Expected: FAIL (modules missing).
- [ ] **Step 3:** Implement the three modules. In `stats.js`, every "years" entry uses `` `${yearsSince(FOUNDING_YEAR)}` `` (no "+") with labels as they are now.
- [ ] **Step 4:** Run `npm test`. Expected: all pass.
- [ ] **Step 5: Commit** `git commit -m "feat: constantes de contacto, Colabora y Residencia 2027 con pruebas"`

### Task 3: UI primitives

**Files:** Create `src/components/ui/Button.jsx`, `Pill.jsx`, `SectionHeader.jsx`, `Card.jsx`, `ColaboraButton.jsx`. Delete `ServiceCard.jsx` and `ServiceCardModern.jsx` if `grep` confirms nothing imports them.

**Interfaces (Produces):**
- `Button({ to?, href?, variant: 'navy'|'yellow'|'white'|'ghost', size?: 'md'|'lg', icon?, children, ...rest })`:
  - Renders `<Link>` with `to`, `<a>` with `href` (external `https:` links get `target="_blank" rel="noopener noreferrer"`), otherwise `<button>`.
  - Pill shape, weight 700, 15px.
  - `md` is 48px tall, `lg` is 52px.
- `Pill({ tone: 'yellow'|'blue'|'white'|'onNavy', children })`: small rounded label, 14px, weight 600.
- `SectionHeader({ pill, title, subtitle?, align: 'left'|'center' = 'left', as: 'h1'|'h2' = 'h2' })`.
- `Card({ as = 'article', tone: 'white'|'navy' = 'white', className, children })`: radius 24px, `border-line`, white background.
- `ColaboraButton({ className })`:
  - The approved option 1: `<Link to="/colabora">` styled as a yellow capsule 48px tall with a white 36px circle holding a red `LuHeart` (filled), and the text «Colabora» in `text-ink` weight 800.
  - Uses `group`; the circle has `animate-heartbeat-hover`.
  - Hover: `-translate-y-px` and a lighter yellow `#ffcd33`.

- [ ] **Step 1:** Implement the primitives.
- [ ] **Step 2:** Temporarily render one of each on `/` and screenshot at 1440 wide with Playwright. Compare to the mockups. Expected: the Colabora button matches `boton-colabora.html` option 1; focus ring visible on Tab. Remove the temporary render.
- [ ] **Step 3:** Run `npm run lint && npm run build`. Expected: both exit 0.
- [ ] **Step 4: Commit** `git commit -m "feat: componentes base del sistema Cercana"`

### Task 4: Global chrome (emergency strip, header, footer, page heroes, shared surfaces) and new routes

**Files:**
- Create: `src/components/layout/EmergencyStrip.jsx`
- Rewrite: `src/components/layout/Header.jsx`, `Footer.jsx`, `InternalPageHero.jsx`, `ContentSurface.jsx`, `LegalDocumentLayout.jsx`
- Modify: `src/App.jsx`
- Modify: `src/pages/Portal.jsx`, `src/pages/PortalLogin.jsx` (only add `variant="dark"` to `InternalPageHero`)
- Create: stubs for `src/pages/Colabora.jsx` and `src/pages/Residencia2027.jsx` (an `InternalPageHero` plus a `TODO` comment; filled in Tasks 6–7)
- Delete: `src/components/layout/Hero.jsx` (the old video hero)

**Interfaces:**
- Consumes: Tasks 1–3, plus `CONTACT` and `currentYear` from `site.js`.
- Produces:
  - `EmergencyStrip()`: full-width red band linking to `/emergencia-terremoto-venezuela`, text «Emergencia Venezuela · Apoyo psicológico gratuito y donaciones para los afectados por el terremoto.» and the link «Ver cómo ayudar». It shows on every route except `/emergencia-terremoto-venezuela` itself. On narrow screens it shortens to «Emergencia Venezuela · Ver cómo ayudar».
  - `Header()`:
    - Sticky (`sticky top-0 z-50`), cream background with a bottom `border-line` once scrolled. Not fixed, and no floating rounded box.
    - Menu order: La Asociación (dropdown: Sobre nosotros, Estatutos, Declaración de valores, Plan de igualdad), Servicios, Residencia 2027 (always shown on a `pill-blue` background), Noticias, Contacto. Then `ColaboraButton` on the right.
    - Under the `lg` breakpoint: logo, `ColaboraButton` and the menu button stay visible. The panel lists every item including Residencia 2027.
    - Escape closes the dropdown and the panel. `aria-expanded` on the toggles.
    - The old red "Emergencia" button and the «Inicio» item are removed (the logo links home).
  - `Footer()`:
    - Four columns, as in the spec: description and social links; Asociación (4 links, «Sobre nosotros» → `/sobre-nosotros`); Participa (Colabora con ASOVEDRA → `/colabora`, Residencia 2027 → `/residencia-2027`, Voluntariado → `/contacto`); Contacto (address, phone, email, hours from `CONTACT`).
    - Legal bar with `© {currentYear()} ASOVEDRA`, the four legal links and a discreet «Portal de empleados».
    - Background `#0d1530`, top radius 40px.
  - `InternalPageHero({ eyebrow, title, description, variant = 'light' })`:
    - `light`: left-aligned on cream, with `Pill` and `SectionHeader as="h1"`, and one pair of logo ribbons (yellow and red capsules at ±45°) decoratively in the right corner, `aria-hidden`.
    - `dark`: the current markup, unchanged except that the top padding drops by the height of the old fixed header.
  - `ContentSurface({ children, className })`: same signature as now, rendered as a light `Card`.
  - `LegalDocumentLayout`: same props, with a light `InternalPageHero` and a white card containing a `.legal-prose` wrapper.
    - Add `.legal-prose` rules to `styles.css`: h2 24px/800 ink, h3 19px/700, p/li muted 17px, a navy underlined, lists with bullets.
    - Remove the colour classes (`text-white`, `text-slate-*`) from the four legal pages' children so `.legal-prose` takes over.
- `App.jsx`:
  - Wrapper uses `overflow-x-clip`, not `overflow-x-hidden`, so `sticky` works.
  - Order: `<EmergencyStrip/>`, `<Header/>`, routes.
  - The `/` route renders only `<Home/>` + `<Footer/>`.
  - Add `/colabora` → `Colabora` and `/residencia-2027` → `Residencia2027`, each wrapped in `PageTransition` + `Footer` like the others.
  - Every page removes the `pt-24` that compensated for the old fixed header (pages are restyled in Tasks 5–8; here, only make sure nothing is hidden).

- [ ] **Step 1:** Implement the components and the `App.jsx` changes.
- [ ] **Step 2:** Run `npm run dev`. With Playwright, screenshot `/estatutos`, `/aviso-legal` and `/portal/login` at 1440×900 and 360×740. Expected:
  - Header and strip as in mockup B.
  - At 360px, no horizontal scroll (`document.documentElement.scrollWidth <= 360`) and the header sits on one row.
  - `/portal/login` shows the dark body below the new header, with its form fully visible and readable.
  - `/aviso-legal` text is dark on white.
- [ ] **Step 3:** Keyboard check: Tab to «La Asociación», press Enter → opens, Escape → closes with focus back on the toggle. At 360px, the same for the menu button. Expected: works, and a focus ring is visible throughout.
- [ ] **Step 4:** Run `npm run lint && npm run build && npm test`. Expected: all exit 0.
- [ ] **Step 5: Commit** `git commit -m "feat: cabecera, franja de emergencia, pie y plantillas internas del rebranding"`

### Task 5: Home page

**Files:**
- Rewrite: `src/pages/Home.jsx`
- Create: `src/components/home/HomeHero.jsx`, `src/components/home/ResidenciaBanner.jsx`, `src/components/colabora/ColaboraOptions.jsx`

**Interfaces:**
- Consumes: `RESIDENCIA`, `resolveColaboraOptions`, `cancelText`, `COLABORA_FALLBACK`, `TRANSPARENCIA_PATH`, `CONTACT`, `NEWS_DATA`, `HERO_STATS`/`ABOUT_STATS`, plus the primitives.
- Produces:
  - `ResidenciaBanner()`: navy block with radius 32px:
    - Left: `Pill tone="onNavy"` «Residencia 2027», the `RESIDENCIA.headline` as h2, and `intro`.
    - Right: a translucent box with the ordered `steps`, a yellow full-width `Button href={RESIDENCIA.ctaHref}` showing `RESIDENCIA.cta`, and a line «o llama al 604 016 113» (`tel:`).
    - A link «Más información» → `/residencia-2027`.
    - It must not animate or blink.
  - `ColaboraOptions({ links?, compact?: boolean })`: the three cards from `resolveColaboraOptions(…)`. The featured «socio» card is navy with a yellow button; the others are white with navy buttons.
    - **Each card's button renders only when `href !== null`.** Otherwise the card shows `COLABORA_FALLBACK` as a `mailto:` link.
    - The «mensual» card also shows `cancelText()` and the word «recurrente».
    - Under the cards: «¿Ya eres socio? Paga tu cuota aquí» (only if `safeLink(links.renovacion)`; otherwise «¿Ya eres socio? Escríbenos para renovar tu cuota»), and «Pago seguro a través de Stripe · Transparencia» (→ `TRANSPARENCIA_PATH`). The Stripe sentence shows only if at least one href exists.
- `Home` section order:
  1. `HomeHero`: `Pill` «Asociación de Venezolanos en Pontevedra · desde 2018»; h1 «Una comunidad que no deja a nadie <em>atrás</em>» (yellow marker underline on the `em`); the lead text from mockup B; `Button` «Pide orientación» → `/contacto`; a `tel:` link «o llama al 604 016 113»; on the right, the photo `public/photo/foto_ayuda_1.jpeg` with radius 32px, two ribbons behind it and a floating white card «4.000+ personas atendidas desde que empezamos».
  2. `ResidenciaBanner`.
  3. Services: `SectionHeader` «Lo que hacemos» / «Te ayudamos con lo que más importa», then 4 `Card`s with a tinted `Lu` icon tile (`LuScale`, `LuFileText`, `LuBriefcase`, `LuGraduationCap`). Titles and descriptions as in mockup B. Each card links to `/servicios`.
  4. Colabora: sand section, centred `SectionHeader` «Colabora» / «Juntos llegamos más lejos» with the spec's subtitle, then `ColaboraOptions`.
  5. News: `SectionHeader` «Noticias» / «Lo último de ASOVEDRA», the 3 newest items of `NEWS_DATA` sorted by `isoDate` (image 16:10 radius 22px, source and date in red, title, external link), and «Ver todas →» → `/noticias`.
  - Remove the Ons event section, the old emergency card, the old stats band and the Plan de Igualdad teaser.

- [ ] **Step 1:** Implement the components and the new `Home`.
- [ ] **Step 2:** Screenshot `/` at 1440×900 (full page) and at 390×844 (full page). Compare against mockup B side by side. Expected:
  - Same order, spacing rhythm and colours.
  - With all `COLABORA_LINKS` empty, no Colabora buttons and the email fallback in each card.
  - The ribbons sit behind the photo; nothing overflows at 390px.
- [ ] **Step 3:** In a scratch run, set `COLABORA_LINKS.mensual = 'https://buy.stripe.com/test'` locally. Expected: only the mensual button appears, opens in a new tab, and the Stripe sentence appears. Revert.
- [ ] **Step 4:** Run `npm run lint && npm run build && npm test`. Expected: all exit 0.
- [ ] **Step 5: Commit** `git commit -m "feat: nueva portada con Residencia 2027 y Colabora"`

### Task 6: «Colabora» page and the Venezuela donation button

**Files:** Fill `src/pages/Colabora.jsx`; modify `src/pages/EmergenciaVenezuela.jsx` (donation section only in this task).

**Interfaces:** Consumes `ColaboraOptions`, `COLABORA_LINKS.venezuela`, `safeLink`.

- `Colabora` page:
  - `SEO` with title «Colabora», canonical `/colabora`.
  - `InternalPageHero` with eyebrow «Colabora», title «Colabora con ASOVEDRA», and the spec's entradilla as description.
  - `ColaboraOptions`.
  - A short block «¿A dónde va tu aportación?» saying the contribution supports the association in general, and that the Venezuela campaign has its own channel (link to `/emergencia-terremoto-venezuela`).
- Emergency donation section:
  - Keep the IBAN flyer image.
  - Add `Button variant="yellow"` «Donar a la campaña de Venezuela», shown only if `safeLink(COLABORA_LINKS.venezuela)`.
  - Add one sentence: «Esta donación se destina íntegramente a la campaña de emergencia en Venezuela.»

- [ ] **Step 1:** Implement both.
- [ ] **Step 2:** Screenshot `/colabora` at 1440 and 390. Expected: no payment buttons (links empty), the fallback shown, and the destination block present.
- [ ] **Step 3:** Run `npm run lint && npm run build && npm test`. Expected: exit 0.
- [ ] **Step 4: Commit** `git commit -m "feat: página Colabora y botón de donación de la campaña de Venezuela"`

### Task 7: «Residencia 2027» page

**Files:** Fill `src/pages/Residencia2027.jsx`.

- `SEO` with title «Residencia 2027», canonical `/residencia-2027`, and a description from `RESIDENCIA.intro`.
- `InternalPageHero` with eyebrow «Residencia 2027» and title `RESIDENCIA.headline`.
- Body, in order:
  1. `intro` and `advance` (verbatim).
  2. The primary CTA (`RESIDENCIA.ctaHref`, yellow) plus «o llama al 604 016 113».
  3. «¿A quién va dirigida?»: two cards. «Personas que hicieron la regularización con ASOVEDRA», and «Personas de Galicia en situación de vulnerabilidad que necesiten nuestro apoyo».
  4. «Cómo lo haremos»: the 3 `steps` as a numbered list.
  5. An «Importante» note card with two sentences: «Los tres meses son el margen que recomendamos para preparar tu caso; no significan que el trámite pueda presentarse desde ese momento. Primero comprobaremos tu resolución y tus fechas.» and «Contactar con nosotros no reserva automáticamente una cita ni presenta ninguna solicitud ante Extranjería.»
  6. A closing CTA repeated.
- No Colabora or donation content on this page.

- [ ] **Step 1:** Implement it.
- [ ] **Step 2:** Screenshot at 1440 and 390. Click the CTA. Expected: it opens `https://wa.me/34604016113?text=Hola%2C%20quiero%20solicitar%20la%20revisi%C3%B3n%20de%20mi%20residencia%202027.`
- [ ] **Step 3:** Run `npm run lint && npm run build && npm test`. Expected: exit 0.
- [ ] **Step 4: Commit** `git commit -m "feat: página de la campaña Residencia 2027"`

### Task 8: Restyle the remaining public pages

**Files:**
- Modify: `src/pages/About.jsx`, `Services.jsx`, `News.jsx`, `Contact.jsx`, `EmergenciaVenezuela.jsx`, `Estatutos.jsx`, `DeclaracionValores.jsx`, `PlanIgualdad.jsx`
- Modify: `src/components/ui/NewsCard.jsx` if still used

Rule for each page:
- Delete the dark `<main>` gradient and all `text-white` / `text-slate-*` / `bg-white/[…]` / `border-white/…` classes.
- Use the primitives and tokens; keep all copy and data (except the factual fixes below).
- Sections alternate cream and sand backgrounds. At most one ribbon motif per screen.
- Specific points:
  - `About`: stats come from `ABOUT_STATS` (now with computed years). The team cards show photos with radius 24px.
  - `Contact`: phone, email, address and hours come from `CONTACT`.
  - `News`: the pagination scroll still lands below the sticky header.
  - `EmergenciaVenezuela`: a light page whose accents lean red (eyebrow, pills, the «peligro inmediato» card on a pale red `#FDE4E8` background with red text that meets AA). Its videos and photos stay. Its own hero replaces the generic `InternalPageHero`.
  - `PlanIgualdad`: do not touch the jsPDF generation code.

- [ ] **Step 1:** Restyle the pages one at a time. After each, screenshot it at 1440 and 390.
- [ ] **Step 2:** Run `grep -rnE "text-white|slate-|#020617|#0f172a" src/pages src/components --include=*.jsx`. Expected: matches only in `Portal.jsx`, `PortalLogin.jsx`, `src/components/portal/**`, the `Booking*` files, `src/components/booking/**`, the `variant === 'dark'` branch of `InternalPageHero`, the footer, the navy cards, and `ResidenciaBanner`.
- [ ] **Step 3:** On `/noticias`, click page 2. Expected: the first news card is fully visible below the header.
- [ ] **Step 4:** Run `npm run lint && npm run build && npm test`. Expected: exit 0.
- [ ] **Step 5: Commit** `git commit -m "feat: aplica el sistema Cercana al resto de páginas públicas"`

### Task 9: Sitemap, SEO consistency and final pass

**Files:** Modify `public/sitemap.xml`, `src/components/SEO.jsx` (the `siteTitle` says «Asociación de Venezolanos en Pontevedra»), and `README.md` (stack line: drop «React Helmet Async», add the design-system note and `npm test`).

- [ ] **Step 1:** List every public route in `sitemap.xml`: `/`, `/sobre-nosotros`, `/servicios`, `/residencia-2027`, `/colabora`, `/noticias`, `/emergencia-terremoto-venezuela`, `/contacto`, `/estatutos`, `/declaracion-valores`, `/plan-de-igualdad`, `/aviso-legal`, `/politica-privacidad`, `/politica-cookies`, `/accesibilidad`. Run `grep -c "<loc>" public/sitemap.xml`. Expected: `15`.
- [ ] **Step 2:** With Playwright, visit all 15 routes plus `/portal/login` at 1440×900 and 360×740. Record console errors and `scrollWidth`. Expected: no console errors besides third-party Cookiebot, and `scrollWidth <= viewport` everywhere.
- [ ] **Step 3:** Emulate `prefers-reduced-motion: reduce` on `/`. Hover the Colabora button. Expected: no heartbeat, and page transitions are instant or fade only.
- [ ] **Step 4:** Run `npm run lint && npm run build && npm test`. Expected: all exit 0.
- [ ] **Step 5: Commit** `git commit -m "chore: sitemap completo y coherencia de SEO tras el rebranding"`
