import React from 'react'
import { Link } from 'react-router-dom'
import ArrowIcon from './ArrowIcon'

const VARIANTS = {
  navy: 'bg-navy text-white hover:bg-navy-deep',
  yellow: 'bg-yellow text-ink hover:bg-yellow-soft',
  white: 'bg-white text-ink shadow-pill hover:shadow-lg',
  ghost: 'border border-ink/30 bg-transparent text-ink hover:border-ink'
}

const SIZES = {
  md: 'min-h-14 px-6 text-base',
  lg: 'min-h-16 px-7 text-[17px]'
}

// Botón en cápsula. Por defecto lleva la flecha larga; `icon` la sustituye y `arrow={false}` la quita.
function Button({ to, href, variant = 'navy', size = 'md', icon, arrow = true, longArrow = false, className = '', children, ...rest }) {
  const classes = `group inline-flex items-center justify-between gap-5 rounded-full font-semibold leading-tight transition-all duration-300 ${VARIANTS[variant]} ${SIZES[size]} ${className}`
  const content = (
    <>
      <span>{children}</span>
      {icon
        ? <span aria-hidden="true" className="text-lg">{icon}</span>
        : arrow && <ArrowIcon long={longArrow} />}
    </>
  )

  if (to) {
    return <Link to={to} className={classes} {...rest}>{content}</Link>
  }

  if (href) {
    const external = href.startsWith('https:')
    return (
      <a
        href={href}
        className={classes}
        {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
        {...rest}
      >
        {content}
      </a>
    )
  }

  return <button type="button" className={classes} {...rest}>{content}</button>
}

export default Button
