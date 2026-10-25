# Rebranding de asovedra.org: estilo «Cercana», Colabora y Residencia 2027

Fecha: 2026-10-25 · Autor: Elias Osorio (con Claude)

## Por qué

La web actual (fondo oscuro, superficies translúcidas, gradientes azules) se percibe «muy oscura y genérica». Elias quiere que se parezca a una asociación o entidad seria y reconocible, no a una plantilla.

Además, el presidente de ASOVEDRA ha pedido dos cosas:

1. **Que se vea cómo apoyar a la asociación** («Colabora»). Ahora mismo no hay ninguna vía visible para hacerse socio o aportar dinero. En la página de emergencia, la donación solo aparece como una imagen con el IBAN.
2. **Una campaña «Residencia 2027»** para quienes obtuvieron la residencia con la regularización extraordinaria de 2026 y tendrán que pedir una prórroga o modificación entre abril y junio de 2027. La idea es organizar las solicitudes con antelación y evitar la avalancha de última hora por WhatsApp.

Este documento cubre **todo lo que no depende de formularios, base de datos ni portal**. El formulario de Residencia 2027, el almacenamiento de las solicitudes y su gestión interna son un proyecto aparte que se hará después.

## Objetivos

- Sustituir la identidad visual de todas las páginas públicas por la dirección B, «Cercana», que se aprobó con maquetas.
- Añadir «Colabora»: botón fijo en la cabecera, bloque en la portada, página propia, enlace en el pie y un botón específico en la página de emergencia.
- Añadir «Residencia 2027»: entrada fija en el menú, bloque en la portada y página propia con la explicación.
- Corregir de paso los fallos de contenido detectados (ver «Arreglos incluidos»).

## No objetivos

- El formulario de Residencia 2027 y cualquier tabla, función o integración con Supabase.
- El portal de empleados (`/portal`, `/portal/login`): no se toca el contenido de sus páginas. Las reservas de cita (`Booking*.jsx`) siguen fuera de las rutas.
  - *Decisión de Claude:* el portal comparte la nueva cabecera, la franja y el pie, porque son globales en `App.jsx`. Lo que conserva su aspecto oscuro es el cuerpo de sus páginas, que debe seguir siendo legible bajo la nueva cabecera. No se mantienen versiones antiguas de `Header` ni `Footer`.
- Cambiar textos institucionales o legales más allá de lo indicado aquí.
- Un logotipo nuevo. Se mantiene el actual (`public/favicon.png`).

## Antiobjetivos (aunque «funcione», sería un fracaso)

- Que la web vuelva a parecer una plantilla genérica: iconos emoji, «♥» como carácter de texto, tarjetas idénticas sin jerarquía, gradientes decorativos.
- Publicar importes o enlaces de pago sin verificar. Los importes vienen de la directiva, y el propio presidente advierte que hay que comprobarlos contra los enlaces de Stripe activos.
- Mezclar las aportaciones generales con las de la campaña de Venezuela. Quien aporta debe saber a qué destina su dinero.
- Que «Residencia 2027» dé a entender que la web reserva cita o presenta un trámite ante Extranjería.
- Un aviso parpadeante o animado para la campaña. El presidente pidió que fuera «fijo, con buen contraste y sin parpadeo».

## Sistema visual (dirección B, «Cercana»)

Referencia visual: `docs/superpowers/specs/2026-10-25-rebranding-mockups/propuestas-A-B-C.html`, pestaña **B**. Para el botón, `boton-colabora.html`, opción **1**. Ábrelos en el navegador.

- **Colores** (salen del logo):
  - Azul marino `#001E77`.
  - Amarillo `#F8C31C`.
  - Rojo `#E10E2F`.
  - Texto principal `#0d1530` / `#1d2433`; texto secundario `#4a5263`.
  - Fondo de página crema `#FFFCF6`; fondo de sección alterna amarillo suave `#FFF4D6`.
  - Pastillas: `#FFF1C7` (amarilla) y `#EEF2FB` (azul).
  - Pie `#0d1530`.
- **Tipografía**: Plus Jakarta Sans, pesos 400–800.
  - Titulares en 800 con interletrado negativo: portada ≈60px, sección ≈42px.
  - Texto base 17px con interlineado 1,6.
  - Sustituye a la Inter local actual.
- **Formas**:
  - Bloques grandes con radio de 28–32px, tarjetas de 22–28px, botones y pastillas en forma de cápsula.
  - Bordes finos cálidos (`#f0e9da`) en lugar de sombras pesadas.
- **Motivo gráfico**: las «cintas» del logo, cápsulas inclinadas 45° en amarillo y rojo, asoman detrás de la foto de portada. Se usan con moderación, como mucho una vez por pantalla.
- **Etiquetas de sección**: pastilla pequeña encima del titular («Lo que hacemos», «Colabora», «Noticias»).
- **Resaltado**: una palabra clave del titular de portada lleva subrayado amarillo de rotulador (`<em>`).
- **Iconos**: SVG de trazo, nunca emoji. Se puede usar `react-icons`, que ya está instalado, si el estilo de trazo es coherente.
- **Botón «Colabora» (cabecera)**:
  - Cápsula amarilla de 48px de alto con un círculo blanco a la izquierda; dentro del círculo, un corazón SVG rojo.
  - Texto «Colabora» en azul oscuro, peso 800.
  - Al pasar el ratón: sube 1px, el amarillo se aclara y el corazón «late» una vez. Esa animación debe desactivarse con `prefers-reduced-motion`.
- **Franja de emergencia**: banda roja a todo lo ancho encima de la cabecera, con el texto «Emergencia Venezuela · Apoyo psicológico gratuito y donaciones…» y el enlace «Ver cómo ayudar». Sustituye al botón rojo actual de la cabecera y al aviso de la portada.
- **Accesibilidad**: contraste AA en todo el texto (atención al blanco sobre rojo y al texto sobre amarillo), foco visible en todos los elementos interactivos y menú móvil usable con teclado.

## Estructura

### Navegación

- **Menú**: La Asociación (desplegable: Sobre nosotros, Estatutos, Declaración de valores, Plan de igualdad) · Servicios · **Residencia 2027** (destacado con pastilla azul suave, siempre visible) · Noticias · Contacto.
- **A la derecha**: botón «Colabora».
- **Móvil**: el menú hamburguesa incluye Residencia 2027 y Colabora; Colabora también es visible sin abrir el menú. Se desaconseja un botón flotante que tape contenido.

### Portada (orden)

1. Franja de emergencia.
2. Cabecera.
3. Héroe:
   - Pastilla «Asociación de Venezolanos en Pontevedra · desde 2018».
   - Titular «Una comunidad que no deja a nadie *atrás*».
   - Entradilla.
   - Botón «Pide orientación» (a `/contacto`) y el enlace «o llama al 604 016 113».
   - Foto redondeada con las cintas detrás y la tarjeta flotante «4.000+ personas atendidas».
4. Bloque **Residencia 2027**: tarjeta azul marino con el texto del presidente (ver más abajo), tres pasos y el botón amarillo.
5. **Servicios**: 4 tarjetas (Orientación legal, Trámites, Empleo, Formación) con icono y enlace a `/servicios`.
6. **Colabora**: fondo amarillo suave con 3 tarjetas. La central, «Hazte socio», va en azul marino y destacada. Debajo: «¿Ya eres socio? Paga tu cuota aquí» y «Pago seguro a través de Stripe · Transparencia».
7. **Noticias**: las 3 más recientes de `NEWS_DATA` y «Ver todas».
8. Pie.

Se elimina la sección «Próximo evento: Xornada de Convivencia en Ons», porque el evento ya pasó.

Las cifras (4.000+, 500+, 1.000+, 8 años) pueden aparecer en la tarjeta flotante del héroe o en una fila propia; lo decide el constructor siguiendo la maqueta.

### Páginas internas

Todas las páginas públicas adoptan el sistema:

- Sobre nosotros, Servicios, Noticias, Contacto.
- Emergencia Venezuela.
- Estatutos, Declaración de valores, Plan de igualdad.
- Aviso legal, Privacidad, Cookies y Accesibilidad.

`InternalPageHero`, `ContentSurface` y `LegalDocumentLayout` se rediseñan para que la mayoría de páginas cambien de una vez. El contenido de cada página se mantiene; solo cambia la presentación, salvo lo indicado en este documento.

La **página de emergencia** conserva su contenido. Su sección «Cada donación cuenta» mantiene el folleto con el IBAN y suma un botón específico para la campaña de Venezuela (ver Colabora). Su paleta puede tirar más del rojo, sin perder el sistema.

### Página «Colabora» (`/colabora`)

- Titular y entradilla:
  > «Tu aportación ayuda a sostener la orientación, la formación y el acompañamiento social que ofrecemos como asociación sin ánimo de lucro, incluida la atención a personas sin recursos.»
- Tres opciones, cada una con su botón hacia su enlace de Stripe:

  | Opción | Contenido | Botón |
  |---|---|---|
  | Colabora cada mes | 3,50 €/mes. Indicar claramente que es **recurrente** y **cómo cancelarla**. | Colaborar mensualmente |
  | Forma parte de ASOVEDRA | Cuota individual 24 €/año y cuota familiar 36 €/año, con sus condiciones. | Hacerme socio |
  | Haz un donativo puntual | Aportación única de importe libre o con los importes que permita el enlace. | Donar una vez |

- Acceso aparte: «¿Ya eres socio? Paga tu cuota aquí» (renovación, con su propio enlace).
- Pie del bloque: «Pago seguro a través de Stripe» y un enlace a transparencia.
- **Separación de destinos**: esta página es solo para la asociación en general. La campaña de Venezuela tiene su propio botón y enlace en la página de emergencia.

**Configuración**: todos los enlaces e importes viven en un único archivo de constantes, por ejemplo `src/constants/colabora.js`, con un campo por enlace:

- mensual,
- socio individual,
- socio familiar (si es un enlace aparte),
- donativo,
- renovación de socio,
- donativo para Venezuela,
- gestión o cancelación de la suscripción mensual (por ejemplo, el portal de cliente de Stripe).

*Decisión de Claude:* si falta el enlace de cancelación, la opción mensual dice «Puedes cancelarla cuando quieras escribiendo a info@asovedra.org».

**Mientras falte un enlace**, su botón no se muestra y en su lugar aparece «Escríbenos a info@asovedra.org para colaborar». Si faltan todos, la página y el bloque de la portada muestran la explicación y la vía de contacto. No se inventan enlaces.

### Página «Residencia 2027» (`/residencia-2027`)

Texto del presidente, literal:

> **EN 2026 DIMOS UN PASO. EN 2027 SEGUIMOS CONTIGO.**
>
> ¿Obtuviste tu residencia mediante la regularización extraordinaria de 2026? Si vence en abril, mayo o junio de 2027, contacta con ASOVEDRA para preparar la modificación o prórroga que corresponda.
>
> Solicita tu revisión con tres meses de antelación. Si no sabes cuándo caduca, también podemos orientarte.
>
> Botón: **SOLICITAR REVISIÓN DE MI RESIDENCIA**

Además, la página debe explicar:

- **A quién va dirigida**: a quienes hicieron la regularización con ASOVEDRA y también a personas de Galicia en situación de vulnerabilidad que necesiten apoyo.
- **Que los tres meses son un margen para preparar el caso**: no significan que el trámite pueda presentarse desde ese momento. Primero se comprueban la resolución y las fechas de cada persona.
- **Que contactar no reserva cita ni presenta ninguna solicitud ante Extranjería.**

**Destino del botón, por ahora** (hasta que exista el formulario):

- Enlace a WhatsApp, `https://wa.me/34604016113`, con un mensaje predefinido del tipo «Hola, quiero solicitar la revisión de mi residencia 2027».
- Alternativa visible: «o llama al 604 016 113».

El destino debe estar en una constante, para poder cambiarlo por el formulario sin tocar el diseño.

Es una campaña con recorrido propio: no se mezcla con cuotas ni donaciones.

### Pie

- 4 columnas:
  - Descripción.
  - Asociación: Sobre nosotros, Estatutos, Declaración de valores, Plan de igualdad.
  - Participa: Colabora con ASOVEDRA, Residencia 2027, Voluntariado (a `/contacto`).
  - Contacto: dirección, teléfono, correo y horario.
- Redes sociales.
- Barra legal con © del año actual (calculado, no escrito a mano) y los enlaces legales.
- El acceso «Portal de empleados» se mantiene, discreto.

## Arreglos incluidos

- El enlace del pie «Sobre nosotros» apunta a `/nosotros`; la ruta correcta es `/sobre-nosotros`.
- La antigüedad pasa de «7+» a un valor calculado desde 2018 (hoy, 8). Afecta a `src/constants/stats.js`.
- El © se actualiza al año actual.
- `public/sitemap.xml` incluye todas las rutas públicas, también `/colabora`, `/residencia-2027` y `/emergencia-terremoto-venezuela`.
- Se retira el aviso de emergencia duplicado (botón en la cabecera y tarjeta en la portada) en favor de la franja.

## Restricciones

- **Stack actual**: React 19, Vite 7, React Router 7, Tailwind 4 y Framer Motion. No se añaden dependencias salvo la fuente, que puede cargarse desde Google Fonts o alojarse localmente en `src/assets/fonts`, a elección del constructor.
- **Cookiebot** sigue cargándose en `index.html`.
- Las rutas existentes no cambian de URL.
- Todo en castellano, con tildes correctas.
- **Responsive**: debe verse bien desde 360px. La maqueta solo existe en escritorio, así que la adaptación a móvil la decide el constructor dentro del sistema.
- **Antes de dar por terminado**: `npm run lint` y `npm run build` sin errores, y revisión visual en escritorio y móvil de cada página.

## Lo que decide el constructor

- La estructura de componentes y tokens: variables `@theme` de Tailwind, clases y componentes compartidos como `Button`, `Pill` o `SectionHeader`.
- La versión móvil de cada sección.
- La foto del héroe. En la maqueta se usa `public/photo/foto_ayuda_1.jpeg`; se puede usar otra de las disponibles si funciona mejor recortada.
- Si las cifras van en una fila propia o solo en la tarjeta del héroe.
- La dosificación de las transiciones de Framer Motion, que deben ser suaves y respetar `prefers-reduced-motion`.

## Pendiente de terceros (no bloquea la construcción)

- Los enlaces públicos de Stripe y la confirmación de los importes (el presidente).
- Las condiciones de la cuota familiar.
- Cómo se cancela la aportación mensual: portal de cliente de Stripe o correo.
- Una vez construido, revisar el pie de la maqueta frente a este documento: si hay diferencias, manda este documento.
- A qué enlazar «Transparencia». Por ahora, a `/estatutos`.
- El inventario de prensa sobre la misión humanitaria (planta potabilizadora de Caraballeda, 15/09/2026, etc.): el mensaje llegó cortado y se añadirá a `NEWS_DATA` cuando llegue completo.
