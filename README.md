# ASOVEDRA.org

Sitio web corporativo de ASOVEDRA, la Asociacion de Venezolanos en Pontevedra, desarrollado con React y Vite para presentar su actividad, servicios, noticias y documentacion institucional.

[![Estado](https://img.shields.io/badge/estado-operativo-2d9d78?style=for-the-badge)](https://asovedra.org)
[![Frontend](https://img.shields.io/badge/frontend-React_19-61dafb?style=for-the-badge&logo=react&logoColor=000000)](package.json)
[![Build](https://img.shields.io/badge/build-Vite_7.1.2-646cff?style=for-the-badge&logo=vite&logoColor=ffffff)](package.json)
[![Router](https://img.shields.io/badge/router-React_Router_7.9.3-ca4245?style=for-the-badge&logo=reactrouter&logoColor=ffffff)](package.json)
[![Animaciones](https://img.shields.io/badge/animaciones-Framer_Motion_12.23.22-ff4f87?style=for-the-badge)](package.json)
[![Estilos](https://img.shields.io/badge/estilos-Tailwind_CSS_4-38bdf8?style=for-the-badge&logo=tailwindcss&logoColor=ffffff)](tailwind.config.js)

**Stack principal:** React 19, Vite, React Router, Tailwind CSS, Framer Motion y React Helmet Async.

**Objetivo del proyecto:** mantener la web publica de ASOVEDRA con una presencia institucional clara, accesible y orientada a la comunidad iberoamericana en Galicia y en el resto de Espana.

## Estado del proyecto

El proyecto se encuentra operativo como web corporativa e informativa. Incluye paginas de presentacion institucional, listado de servicios, noticias destacadas, contacto y documentos legales o de cumplimiento.

## Descripcion

ASOVEDRA.org centraliza la presencia publica de la asociacion en un frontend unico. La aplicacion esta orientada a:

- explicar la mision, vision e historia de la asociacion;
- mostrar servicios de acompanamiento legal, migratorio, laboral y formativo;
- publicar noticias y actividad institucional;
- ofrecer puntos de contacto y llamadas a la accion claras;
- reunir documentacion legal, accesibilidad, estatutos, plan de igualdad y declaraciones corporativas.

La interfaz esta construida como una SPA con React Router y animaciones de transicion entre paginas. El sistema visual actual combina fondos cinematicos, superficies transluidas y layouts reutilizables para las paginas internas.

## Puesta en marcha

### Requisitos

- Node.js 20 o superior recomendado.
- npm 10 o superior recomendado.

### Instalacion

```bash
npm install
```

### Desarrollo

```bash
npm run dev
```

El servidor de desarrollo de Vite quedara disponible en local, normalmente en `http://localhost:5173`.

### Build de produccion

```bash
npm run build
```

La salida optimizada se genera en la carpeta `dist/`.

### Vista previa local de produccion

```bash
npm run preview
```

## Scripts disponibles

- `npm run dev`: inicia el entorno de desarrollo con Vite.
- `npm run build`: genera la build de produccion.
- `npm run preview`: sirve localmente la build generada.
- `npm run lint`: ejecuta ESLint sobre el codigo del proyecto.

## Estructura del proyecto

```text
asovedra.org/
├── public/                   # Recursos publicos, manifest, sitemap y video del hero
├── src/
│   ├── assets/               # Recursos del frontend, incluidas fuentes
│   ├── components/           # Componentes compartidos, layout, UI y SEO
│   ├── constants/            # Datos estaticos como noticias y estadisticas
│   ├── pages/                # Paginas enroutadas del sitio
│   ├── styles/               # Hoja global y estilos base
│   ├── translations/         # Espacio reservado para textos o traducciones
│   ├── App.jsx               # Definicion de rutas y estructura general
│   └── main.jsx              # Punto de entrada de React
├── index.html
├── package.json
├── tailwind.config.js
├── vite.config.js
└── README.md
```

## Rutas principales

- `/`: portada con hero, estadisticas, noticias y resumen de servicios.
- `/sobre-nosotros`: historia, valores, equipo y cifras de la asociacion.
- `/servicios`: descripcion de servicios principales y programas complementarios.
- `/noticias`: actualidad institucional y apariciones en medios.
- `/contacto`: canales de contacto y conversion.
- `/aviso-legal`, `/politica-privacidad`, `/politica-cookies`, `/accesibilidad`: documentos legales y de cumplimiento.
- `/plan-de-igualdad`, `/estatutos`, `/declaracion-valores`: documentacion institucional.

## Decisiones tecnicas

- React Router gestiona la navegacion del sitio y las rutas internas.
- Framer Motion se utiliza para transiciones entre paginas.
- React Helmet Async centraliza metadatos SEO y datos estructurados.
- Tailwind CSS soporta la capa visual utilitaria del frontend.
- Los contenidos de noticias y estadisticas se mantienen actualmente en constantes locales dentro de `src/constants`.

## Despliegue

El proyecto genera una salida estatica con Vite, por lo que puede desplegarse en plataformas compatibles con sitios SPA o contenido estatico, siempre que se configure correctamente la resolucion de rutas del cliente.

Antes de publicar cambios conviene validar como minimo:

- `npm run lint`
- `npm run build`

## Mantenimiento

Si se modifica contenido institucional o legal, revisa tambien:

- metadatos SEO y enlaces canonicos;
- archivos en `public/` como `manifest.json`, `robots.txt` y `sitemap.xml`;
- consistencia entre textos de paginas, footer y datos de contacto.

## Autor

Desarrollo y adaptacion visual del proyecto por Elias Osorio Pouseu.

## Licencia

El repositorio no incluye actualmente un archivo de licencia explicito. Si se va a redistribuir o abrir a terceros, conviene anadir una licencia en la raiz del proyecto.
