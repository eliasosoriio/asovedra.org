import React from 'react'
import { Link } from 'react-router-dom'
import { LuArrowRight, LuMessageCircle } from 'react-icons/lu'
import Button from '../ui/Button'
import Pill from '../ui/Pill'
import { RESIDENCIA } from '../../constants/residencia'
import { CONTACT } from '../../constants/site'

function ResidenciaBanner() {
  return (
    <div className="relative overflow-hidden rounded-[32px] bg-navy px-6 py-10 text-white sm:px-10 lg:grid lg:grid-cols-[1.3fr_1fr] lg:items-center lg:gap-12 lg:p-14">
      <span aria-hidden="true" className="pointer-events-none absolute -right-28 -top-2 h-[110px] w-[420px] -rotate-45 rounded-full bg-white/[0.06]"></span>

      <div className="relative">
        <Pill tone="onNavy">Residencia 2027</Pill>
        <h2 className="mt-4 text-3xl font-extrabold leading-[1.1] tracking-[-0.025em] sm:text-4xl lg:text-[40px]">
          {RESIDENCIA.headline}
        </h2>
        <p className="mt-4 text-[17px] leading-relaxed text-[#c9d3f0]">{RESIDENCIA.intro}</p>
        <Link
          to="/residencia-2027"
          className="mt-5 inline-flex items-center gap-2 font-bold text-[#FBD96A] underline-offset-4 hover:underline"
        >
          Más información
          <LuArrowRight aria-hidden="true" />
        </Link>
      </div>

      <div className="relative mt-8 rounded-[22px] border border-white/15 bg-white/[0.07] p-6 sm:p-7 lg:mt-0">
        <ol className="space-y-3 text-[15px] text-[#dfe6fa]">
          {RESIDENCIA.steps.map((step, index) => (
            <li key={step} className="flex gap-3">
              <span className="grid h-6 w-6 shrink-0 place-items-center rounded-full bg-yellow text-xs font-extrabold text-ink">
                {index + 1}
              </span>
              <span>{step}</span>
            </li>
          ))}
        </ol>
        <Button href={RESIDENCIA.ctaHref} variant="yellow" className="mt-6 w-full" icon={<LuMessageCircle />}>
          {RESIDENCIA.cta}
        </Button>
        <p className="mt-3 text-center text-sm text-[#c9d3f0]">
          o llama al{' '}
          <a href={`tel:${CONTACT.phone}`} className="font-bold text-white underline-offset-4 hover:underline">
            {CONTACT.phoneDisplay}
          </a>
        </p>
      </div>
    </div>
  )
}

export default ResidenciaBanner
