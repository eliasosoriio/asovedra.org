import React from 'react'
import { Link } from 'react-router-dom'

const VARIANTS = {
  navy: 'bg-navy text-white hover:bg-navy-deep',
  yellow: 'bg-yellow text-ink hover:bg-yellow-soft',
  white: 'bg-white text-navy hover:bg-pill-blue',
  ghost: 'border border-navy/25 bg-transparent text-navy hover:border-navy hover:bg-white'
}

const SIZES = {
  md: 'min-h-12 px-6 text-[15px]',
  lg: 'min-h-[52px] px-7 text-base'
}

function Button({ to, href, variant = 'navy', size = 'md', icon, className = '', children, ...rest }) {
  const classes = `inline-flex items-center justify-center gap-2 rounded-full font-bold leading-tight transition-all duration-200 hover:-translate-y-px motion-reduce:transform-none ${VARIANTS[variant]} ${SIZES[size]} ${className}`
  const content = (
    <>
      {children}
      {icon && <span aria-hidden="true" className="text-base">{icon}</span>}
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
