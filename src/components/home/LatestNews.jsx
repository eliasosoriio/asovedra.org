import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import ArrowIcon from '../ui/ArrowIcon'
import { NEWS_DATA } from '../../constants/news'

// Columna «Últimas noticias» junto al titular de la portada. Se actualiza sola con NEWS_DATA.
const latest = [...NEWS_DATA]
  .sort((a, b) => new Date(b.isoDate || 0).getTime() - new Date(a.isoDate || 0).getTime())
  .slice(0, 4)

// Miniatura cuadrada de la noticia; si no hay foto o el medio no la deja cargar, logo sobre navy
function Thumb({ src }) {
  const [failed, setFailed] = useState(false)
  const box = 'h-14 w-14 shrink-0 overflow-hidden rounded-xl sm:h-16 sm:w-16'

  if (!src || failed) {
    return (
      <span aria-hidden="true" className={`${box} grid place-items-center bg-navy`}>
        <img src="/favicon.png" alt="" className="h-9 w-9 rounded-full bg-white object-contain p-1.5" />
      </span>
    )
  }

  return (
    <img
      src={src}
      alt=""
      referrerPolicy="no-referrer"
      onError={() => setFailed(true)}
      className={`${box} bg-line object-cover transition-transform duration-500 group-hover:scale-105 motion-reduce:transform-none`}
    />
  )
}

function LatestNews({ className = '' }) {
  return (
    <aside aria-labelledby="ultimas-noticias" className={`flex flex-col rounded-[24px] bg-white p-7 text-base shadow-[0_30px_60px_-30px_rgba(0,0,0,0.3)] lg:p-8 ${className}`}>
      <div className="flex items-center justify-between gap-4">
        <h2 id="ultimas-noticias" className="whitespace-nowrap text-sm font-medium uppercase tracking-[0.04em] text-ink">Últimas noticias</h2>
        <Link to="/noticias" className="group inline-flex shrink-0 items-center gap-3 whitespace-nowrap text-sm font-semibold text-navy">
          Ver todas
          <ArrowIcon />
        </Link>
      </div>
      <ul className="mt-5 flex flex-1 flex-col justify-between divide-y divide-line">
        {latest.map((news, i) => (
          <li key={news.url} className={`py-4 first:pt-0 last:pb-0 ${i === 3 ? 'hidden xl:block' : ''}`}>
            <a href={news.url} target="_blank" rel="noopener noreferrer" className="group flex items-center gap-4">
              <Thumb src={news.image} />
              <span className="min-w-0">
                <span className="block truncate text-[13px] font-medium text-muted">{news.source} · {news.date}</span>
                <span className="mt-1 line-clamp-2 text-[16px] font-medium leading-snug text-ink group-hover:text-navy group-hover:underline">
                  {news.title}
                </span>
              </span>
            </a>
          </li>
        ))}
      </ul>
    </aside>
  )
}

export default LatestNews
