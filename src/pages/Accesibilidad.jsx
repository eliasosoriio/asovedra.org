import React from 'react'
import SEO from '../components/SEO'
import LegalDocumentLayout from '../components/layout/LegalDocumentLayout'

function Accesibilidad() {
  return (
    <>
      <SEO
        title="Declaración de Accesibilidad"
        description="Declaración de accesibilidad de ASOVEDRA. Nuestro compromiso con la accesibilidad web y la inclusión digital para todos los usuarios."
        keywords="accesibilidad web asovedra, wcag 2.1, inclusión digital, accesibilidad discapacidad"
        canonical="/accesibilidad"
      />
      <LegalDocumentLayout
        eyebrow="Accesibilidad"
        title="Declaracion de Accesibilidad"
        description="Nuestro compromiso con la accesibilidad web para todos los usuarios"
      >
                <h2 className="text-2xl font-bold text-[#1B2336] mb-6">Declaración de Accesibilidad</h2>

                <p className="mb-6">
                  En ASOVEDRA, estamos comprometidos a hacer accesible nuestro sitio de acuerdo al Real Decreto 1112/2018, de 7 de septiembre, sobre accesibilidad de los sitios web y aplicaciones para dispositivos móviles del sector público.
                </p>

                <p className="mb-8">
                  La presente declaración de accesibilidad se aplica al sitio web <strong>https://asovedra.org</strong>
                </p>

                <h3 className="text-xl font-semibold text-[#1B2336] mb-4">Situación de Cumplimiento</h3>
                <p className="mb-6">
                  En ASOVEDRA estamos comprometidos con la accesibilidad de nuestro sitio web para que todos los usuarios, incluyendo personas con discapacidades, tengan las mismas condiciones de acceso a nuestro sitio web. Hemos trabajado arduamente para garantizar que nuestro sitio cumpla con los estándares de accesibilidad establecidos en las <strong>Directrices de Accesibilidad para el Contenido Web (WCAG) 2.1 Nivel AA</strong>.
                </p>

                <p className="mb-6">
                  Nuestro sitio web incluye características de accesibilidad como texto alternativo para imágenes, navegación por teclado, etiquetas de formulario claras y opciones de contraste de color para garantizar que los usuarios con discapacidades visuales puedan acceder fácilmente a nuestro contenido. Además, nuestro sitio web es compatible con tecnologías de asistencia como lectores de pantalla y software de reconocimiento de voz.
                </p>

                <h3 className="text-xl font-semibold text-[#1B2336] mb-4">Características de Accesibilidad Implementadas</h3>
                <ul className="mb-6 space-y-2">
                  <li>• <strong>Navegación por teclado:</strong> Todas las funciones están disponibles mediante teclado</li>
                  <li>• <strong>Texto alternativo:</strong> Las imágenes incluyen descripciones alt apropiadas</li>
                  <li>• <strong>Contraste de colores:</strong> Cumplimos con los ratios de contraste recomendados</li>
                  <li>• <strong>Estructura semántica:</strong> Uso correcto de encabezados y etiquetas HTML</li>
                  <li>• <strong>Formularios accesibles:</strong> Etiquetas claras y mensajes de error descriptivos</li>
                  <li>• <strong>Compatibilidad con lectores de pantalla:</strong> Optimizado para tecnologías asistivas</li>
                  <li>• <strong>Responsive design:</strong> Adaptable a diferentes dispositivos y tamaños de pantalla</li>
                </ul>

                <h3 className="text-xl font-semibold text-[#1B2336] mb-4">Preparación de la Presente Declaración de Accesibilidad</h3>
                <p className="mb-6">
                  La presente declaración fue preparada el <strong>7 de octubre de 2025</strong>.
                </p>

                <p className="mb-6">
                  El método empleado para preparar la declaración ha sido una autoevaluación llevada a cabo por los desarrolladores del sitio web.
                </p>

                <p className="mb-8">
                  Continuaremos monitoreando y mejorando continuamente la accesibilidad de nuestro sitio web para asegurarnos de que sea fácilmente accesible para todos los usuarios. Si tiene alguna sugerencia o problema para mejorar nuestra accesibilidad, no dude en ponerse en contacto con nosotros.
                </p>

                <h3 className="text-xl font-semibold text-[#1B2336] mb-4">Propiedad Intelectual e Industrial</h3>
                <p className="mb-8">
                  Los derechos de propiedad intelectual del contenido de las páginas web, su diseño gráfico y códigos son titularidad de ASOVEDRA (Asociación de Venezolanos en Pontevedra) y, por tanto, queda prohibida su reproducción, distribución, comunicación pública, transformación o cualquier otra actividad que se pueda realizar con los contenidos de sus páginas web ni aun citando las fuentes, salvo consentimiento por escrito de ASOVEDRA. Todos los nombres comerciales, marcas o signos distintos de cualquier clase contenidos en las páginas web de la Asociación son propiedad de sus dueños y están protegidos por ley.
                </p>

                <h3 className="text-xl font-semibold text-[#1B2336] mb-4">Observaciones y Datos de Contacto</h3>
                <p className="mb-4">
                  Puede realizar comunicaciones sobre requisitos de accesibilidad (artículo 10.2.a del RD 1112/2018), como, por ejemplo:
                </p>

                <ul className="mb-6 space-y-2">
                  <li>• Informar sobre cualquier posible incumplimiento por parte de este sitio web</li>
                  <li>• Transmitir otras dificultades de acceso al contenido</li>
                  <li>• Formular cualquier otra consulta o sugerencia de mejora relativa a la accesibilidad del sitio web</li>
                </ul>

                <p className="mb-6">
                  Escribiendo un email a <a href="mailto:info@asovedra.org" className="text-blue-600 hover:underline">info@asovedra.org</a> o a través del número de teléfono <a href="tel:+34604016113" className="text-blue-600 hover:underline">(+34) 604 016 113</a>.
                </p>

                <h4 className="text-lg font-semibold text-gray-800 mb-3">Puede presentar:</h4>
                <ul className="mb-6 space-y-2">
                  <li>• <strong>Queja relativa al cumplimiento</strong> de los requisitos del RD 1112/2018 o</li>
                  <li>• <strong>Solicitud de Información accesible</strong> relativa a:
                    <ul className="ml-6 mt-2 space-y-1">
                      <li>- Contenidos que están excluidos del ámbito de aplicación del RD 1112/2018 según lo establecido por el artículo 3, apartado 4</li>
                      <li>- Contenidos que están exentos del cumplimiento de los requisitos de accesibilidad por imponer una carga desproporcionada</li>
                    </ul>
                  </li>
                </ul>

                <p className="mb-8">
                  En la Solicitud de información accesible, se debe concretar, con toda claridad, los hechos, razones y petición que permitan constatar que se trata de una solicitud razonable y legítima.
                </p>

                <h3 className="text-xl font-semibold text-[#1B2336] mb-4">Procedimiento de Aplicación</h3>
                <p className="mb-6">
                  Si una vez realizada una solicitud de información accesible o queja, esta hubiera sido desestimada, no se estuviera de acuerdo con la decisión adoptada, o la respuesta no cumpliera los requisitos contemplados en el artículo 12.5, la persona interesada podrá iniciar una reclamación. Igualmente se podrá iniciar una reclamación en el caso de que haya transcurrido el plazo de veinte días hábiles sin haber obtenido respuesta.
                </p>

                <p className="mb-8">
                  La reclamación puede ser presentada través de la Instancia Genérica de la Sede electrónica del Ministerio de Asuntos Económicos y Transformación Digital, así como en el resto de opciones recogidas en la Ley 39/2015, de 1 de octubre, del Procedimiento Administrativo Común de las Administraciones Públicas. Las reclamaciones serán recibidas y tratadas por la Subdirección General de Inspección de Servicios del Ministerio.
                </p>

                <h3 className="text-xl font-semibold text-[#1B2336] mb-4">Contenido Opcional - Ayuda para la Navegación</h3>
                <p className="mb-6">
                  Este portal está diseñado para poder cambiar el tamaño del texto y el color, así como el fondo de la página mediante las opciones de configuración estándar de los navegadores.
                </p>

                <h4 className="text-lg font-semibold text-gray-800 mb-3">Cambiar el tamaño de letra:</h4>
                <ul className="mb-6 space-y-2">
                  <li>• <strong>Internet Explorer, Mozilla y Firefox:</strong> Ver → Tamaño del texto</li>
                  <li>• <strong>Opera:</strong> Ver → Zoom</li>
                  <li>• <strong>Safari:</strong> Ver → Hacer el texto más grande</li>
                  <li>• <strong>Chrome:</strong> Controla la página actual → Tamaño del texto</li>
                </ul>

                <h4 className="text-lg font-semibold text-gray-800 mb-3">Atajos de teclado universales:</h4>
                <ul className="mb-6 space-y-2">
                  <li>• <strong>Ctrl + +</strong> para aumentar el tamaño</li>
                  <li>• <strong>Ctrl + -</strong> para disminuir el tamaño</li>
                  <li>• <strong>Ctrl + 0</strong> restaura el tamaño original del texto</li>
                </ul>

                <p className="mb-6">
                  Si lo que quiere es anular la hoja de estilos o modificar el color del texto, puede consultar la página <a href="https://www.w3.org/WAI/meta/customize/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">"How to Change Text Size or Colors"</a> de la WAI (Web Accessibility Initiative).
                </p>

                <h3 className="text-xl font-semibold text-[#1B2336] mb-4">Mejora Continua</h3>
                <p className="mb-6">
                  En ASOVEDRA nos comprometemos a seguir mejorando la accesibilidad de nuestro sitio web. Realizamos revisiones periódicas y actualizaciones para mantener y mejorar los estándares de accesibilidad, garantizando que todas las personas puedan acceder a nuestros servicios y contenidos de manera equitativa.
                </p>

                <div className="mt-8 p-4 bg-blue-50 rounded-lg border-l-4 border-blue-600">
                  <p className="text-sm text-gray-700">
                    <strong>Última actualización de esta declaración:</strong> 7 de octubre de 2025<br/>
                    <strong>Próxima revisión programada:</strong> 7 de octubre de 2026
                  </p>
                </div>
      </LegalDocumentLayout>
    </>
  )
}

export default Accesibilidad
