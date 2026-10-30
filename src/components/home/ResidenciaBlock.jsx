import React from 'react'
import { LuMessageCircle } from 'react-icons/lu'
import Button from '../ui/Button'
import Pill from '../ui/Pill'
import { RESIDENCIA } from '../../constants/residencia'
import { CONTACT } from '../../constants/site'

function ResidenciaBlock() {
  return (
    <section aria-labelledby="residencia-2027" className="mx-auto max-w-[1440px] px-6 pb-24 lg:px-16 lg:pb-36">
      <div className="grid gap-14 lg:grid-cols-[1.25fr_1fr] lg:gap-20">
        <div>
          <Pill>Residencia 2027</Pill>
          <h2 id="residencia-2027" className="mt-8 text-[40px] font-medium leading-[1.15] text-ink sm:text-[56px] lg:text-[72px]">
            {RESIDENCIA.headline}
          </h2>
          <p className="mt-8 text-xl leading-relaxed text-ink lg:text-[22px]">{RESIDENCIA.intro}</p>
          <p className="mt-4 text-xl font-semibold leading-relaxed text-ink lg:text-[22px]">{RESIDENCIA.advance}</p>
        </div>

        <div className="lg:pt-24">
          <ol className="space-y-4">
            {RESIDENCIA.steps.map((step, index) => (
              <li key={step} className="flex items-center gap-6 rounded-full border border-ink/25 py-4 pl-4 pr-8">
                <span className="grid h-14 w-14 shrink-0 place-items-center rounded-full bg-navy text-2xl font-medium text-white">
                  {index + 1}
                </span>
                <span className="text-lg leading-snug text-ink">{step}</span>
              </li>
            ))}
          </ol>
          <div className="mt-10 flex flex-col gap-3">
            <Button href={RESIDENCIA.ctaHref} variant="navy" size="lg" icon={<LuMessageCircle />}>
              {RESIDENCIA.cta}
            </Button>
            <Button to="/residencia-2027" variant="white" size="lg">Más información</Button>
          </div>
          <p className="mt-5 text-lg text-muted">
            o llama al{' '}
            <a href={`tel:${CONTACT.phone}`} className="font-semibold text-ink underline underline-offset-4">{CONTACT.phoneDisplay}</a>
          </p>
        </div>
      </div>
    </section>
  )
}

export default ResidenciaBlock
