import React from 'react'

// Ilustraciones de marca para los paneles de «Lo que hacemos».
// El dibujo se escala entero (nunca se recorta) y se pega a la derecha, porque la tarjeta
// blanca tapa la parte izquierda del panel; el color de fondo lo pone el contenedor.
// Mismos colores, cintas del logo y tipografía que el resto de la web.
const NAVY = '#001E77'
const NAVY_DEEP = '#00278f'
const YELLOW = '#F8C31C'
const RED = '#E10E2F'
const PAPER = '#FCFCFC'
const MIST_BLUE = '#EEF2FB'
const INK = '#1F1F21'

// Cinta en cápsula como las del logo, girada sobre su centro
function Ribbon({ x, y, w = 420, h = 64, angle = -45, fill, opacity = 1 }) {
  return (
    <rect
      x={x - w / 2}
      y={y - h / 2}
      width={w}
      height={h}
      rx={h / 2}
      fill={fill}
      opacity={opacity}
      transform={`rotate(${angle} ${x} ${y})`}
    />
  )
}

function Word({ children, fill, y = 820 }) {
  return (
    <text x="960" y={y} fill={fill} fontSize="112" fontWeight="500" letterSpacing="-1" textAnchor="end">
      {children}
    </text>
  )
}

function Tramites({ label }) {
  return (
    <>
      <Ribbon x={690} y={120} w={520} fill={YELLOW} />
      <Ribbon x={760} y={260} w={360} angle={45} fill={RED} />
      {/* Documento con sello */}
      <g transform="rotate(-8 330 400)">
        <rect x="150" y="180" width="340" height="440" rx="28" fill={PAPER} />
        <rect x="200" y="240" width="160" height="22" rx="11" fill={NAVY} />
        {[300, 345, 390, 435].map((y, i) => (
          <rect key={y} x="200" y={y} width={i % 2 ? 190 : 240} height="14" rx="7" fill="#d9dce6" />
        ))}
        <rect x="200" y="500" width="120" height="56" rx="28" fill={NAVY} />
      </g>
      <g transform="rotate(12 520 520)">
        <circle cx="520" cy="520" r="96" fill={YELLOW} />
        <circle cx="520" cy="520" r="74" fill="none" stroke={NAVY} strokeWidth="4" strokeDasharray="10 8" />
        <text x="520" y="540" fill={NAVY} fontSize="54" fontWeight="600" textAnchor="middle">NIE</text>
      </g>
      {label && <Word fill={PAPER}>Trámites</Word>}
    </>
  )
}

function Empleo({ label }) {
  const bars = [180, 270, 360, 470]
  return (
    <>
      <Ribbon x={110} y={110} w={420} angle={45} fill={NAVY} opacity="0.12" />
      {/* Cápsulas que crecen, como un gráfico de progreso */}
      {bars.map((h, i) => (
        <rect key={h} x={150 + i * 130} y={640 - h} width="96" height={h} rx="48" fill={i === bars.length - 1 ? NAVY : PAPER} />
      ))}
      <circle cx="628" cy="138" r="40" fill={RED} />
      {label && <Word fill={INK}>Empleo</Word>}
    </>
  )
}

function Comunidad({ label }) {
  const nodes = [
    [190, 230, 54, NAVY], [420, 170, 40, YELLOW], [620, 290, 62, RED],
    [300, 430, 70, YELLOW], [540, 520, 48, NAVY], [170, 590, 36, RED], [660, 640, 34, NAVY]
  ]
  const links = [[0, 1], [1, 2], [0, 3], [1, 3], [3, 4], [2, 4], [3, 5], [4, 6]]
  return (
    <>
      {links.map(([a, b]) => (
        <line key={`${a}-${b}`} x1={nodes[a][0]} y1={nodes[a][1]} x2={nodes[b][0]} y2={nodes[b][1]} stroke={INK} strokeOpacity="0.18" strokeWidth="3" />
      ))}
      {nodes.map(([x, y, r, fill]) => (
        <g key={`${x}-${y}`}>
          <circle cx={x} cy={y} r={r} fill={fill} />
          <circle cx={x} cy={y - r * 0.18} r={r * 0.3} fill={PAPER} opacity="0.9" />
          <path d={`M${x - r * 0.48} ${y + r * 0.5} a${r * 0.48} ${r * 0.4} 0 0 1 ${r * 0.96} 0`} fill={PAPER} opacity="0.9" />
        </g>
      ))}
      {label && <Word fill={NAVY}>Comunidad</Word>}
    </>
  )
}

function Convivencia({ label }) {
  return (
    <>
      <defs>
        <clipPath id="convivencia-derecha">
          <circle cx="500" cy="400" r="210" />
        </clipPath>
      </defs>
      <circle cx="320" cy="400" r="210" fill={YELLOW} />
      <circle cx="500" cy="400" r="210" fill={RED} />
      {/* Donde se encuentran los dos círculos */}
      <circle cx="320" cy="400" r="210" fill={PAPER} clipPath="url(#convivencia-derecha)" />
      <rect x="396" y="340" width="28" height="120" rx="14" fill={NAVY} />
      <rect x="350" y="386" width="120" height="28" rx="14" fill={NAVY} />
      {label && <Word fill={PAPER}>Convivencia</Word>}
    </>
  )
}

function Presente({ label }) {
  return (
    <>
      <Ribbon x={700} y={110} w={460} angle={45} fill={PAPER} opacity="0.14" />
      {/* Latido: línea de pulso que atraviesa un corazón */}
      <path
        d="M400 600 C 250 500, 150 410, 150 300 C 150 220, 215 160, 290 160 C 340 160, 380 190, 400 230 C 420 190, 460 160, 510 160 C 585 160, 650 220, 650 300 C 650 410, 550 500, 400 600 Z"
        fill={PAPER}
      />
      <polyline
        points="40,380 250,380 300,300 350,470 410,250 460,420 500,380 760,380"
        fill="none"
        stroke={NAVY}
        strokeWidth="14"
        strokeLinejoin="round"
        strokeLinecap="round"
      />
      <circle cx="660" cy="560" r="44" fill={YELLOW} />
      {label && <Word fill={PAPER}>Presente</Word>}
    </>
  )
}

const ART = {
  orientacion: { Art: Tramites, bg: NAVY },
  reinventate: { Art: Empleo, bg: YELLOW },
  'galicia-activa': { Art: Comunidad, bg: MIST_BLUE },
  convivencia: { Art: Convivencia, bg: NAVY_DEEP },
  presente: { Art: Presente, bg: RED }
}

function ProgramArt({ id, label = true, align = 'right', className = '' }) {
  const entry = ART[id]
  if (!entry) return null
  const { Art, bg } = entry
  return (
    <div aria-hidden="true" className={`overflow-hidden ${className}`} style={{ backgroundColor: bg }}>
      <svg
        viewBox="-200 0 1200 900"
        preserveAspectRatio={align === 'center' ? 'xMidYMax meet' : 'xMaxYMid meet'}
        overflow="visible"
        className="h-full w-full"
        style={{ fontFamily: 'var(--font-display)' }}
      >
        <Art label={label} />
      </svg>
    </div>
  )
}

export default ProgramArt
