import React from 'react'
import { Header } from '../components/layout/Header'
import SEO from '../components/SEO'

function PoliticaCookies() {
  return (
    <>
      <SEO 
        title="Política de Cookies"
        description="Información sobre el uso de cookies en ASOVEDRA. Conoce cómo utilizamos las cookies para mejorar tu experiencia de navegación."
        keywords="cookies asovedra, política cookies, privacidad web, navegación segura"
        canonical="/politica-cookies"
      />
      <main className='min-h-screen bg-gray-50 pt-20'>
        {/* Header Section */}
        <section className="bg-gradient-to-br from-primary-blue to-blue-700 py-16 px-4">
          <div className="max-w-6xl mx-auto text-center text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Política de Cookies</h1>
            <p className="text-xl opacity-90 max-w-3xl mx-auto">
              Información sobre el uso de cookies en nuestro sitio web
            </p>
          </div>
        </section>

        {/* Legal Content */}
        <section className="py-16">
          <div className="max-w-4xl mx-auto px-4">
            <div className="bg-white rounded-xl shadow-lg p-8 md:p-12">
              <div className="prose prose-lg max-w-none">
                
                <h2 className="text-2xl font-bold text-primary-dark mb-6">Política de Cookies de ASOVEDRA.org</h2>
                
                <p className="mb-6">
                  Esta política define las condiciones establecidas para el dominio:
                </p>
                
                <ul className="mb-6">
                  <li><strong>https://asovedra.org</strong></li>
                </ul>

                <h3 className="text-xl font-semibold text-primary-dark mb-4">¿Qué son las cookies?</h3>
                <p className="mb-6">
                  Las cookies constituyen una herramienta empleada por los servidores Web para almacenar y recuperar información acerca de sus visitantes. No es más que un fichero de texto que algunos servidores piden a nuestro navegador que escriba en nuestro disco duro, con información acerca de lo que hemos estado haciendo por sus páginas.
                </p>
                
                <p className="mb-6">
                  Poseen una fecha de caducidad, que puede oscilar desde el tiempo que dure la sesión hasta una fecha futura especificada, a partir de la cual dejan de ser operativas. ASOVEDRA.org utiliza cookies para facilitar la navegación por su Portal y para obtener una mayor eficacia y personalización de los servicios ofrecidos a los Usuarios.
                </p>

                <h3 className="text-xl font-semibold text-primary-dark mb-4">Uso de cookies en ASOVEDRA</h3>
                <p className="mb-6">
                  Las cookies empleadas en ASOVEDRA.org se asocian únicamente con un Usuario anónimo y su ordenador, no proporcionan referencias que permitan deducir el nombre y apellidos del Usuario y no pueden leer datos de su disco duro ni incluir virus en sus textos. Asimismo, ASOVEDRA.org no puede leer las cookies implantadas en el disco duro del Usuario desde otros servidores.
                </p>

                <h3 className="text-xl font-semibold text-primary-dark mb-4">Control de cookies</h3>
                <p className="mb-6">
                  El usuario puede libremente decidir acerca de la implantación o no en su disco duro de las cookies empleadas en ASOVEDRA.org. En este sentido, el usuario puede configurar su navegador para aceptar o rechazar por defecto todas las cookies o para recibir un aviso en pantalla de la recepción de cada cookie y decidir en ese momento su implantación o no en su disco duro.
                </p>
                
                <p className="mb-6">
                  Le sugerimos consultar la sección de ayuda de su navegador para saber cómo cambiar la configuración que actualmente emplea. Aun cuando el Usuario configurase su navegador para rechazar todas las cookies o rechazase expresamente las cookies de ASOVEDRA.org podrá navegar por el Portal con el único inconveniente de no poder disfrutar de las funcionalidades del Portal que requieran la instalación de alguna de ellas.
                </p>

                <h3 className="text-xl font-semibold text-primary-dark mb-4">Consentimiento</h3>
                <p className="mb-6">
                  Según los términos incluidos en el artículo 22.2 de la Ley 34/2002 de Servicios de la Sociedad de la Información y Comercio Electrónico, si continúas navegando, estarás prestando tu consentimiento para el empleo de las cookies que detallamos a continuación.
                </p>

                <h3 className="text-xl font-semibold text-primary-dark mb-4">Las cookies de esta web ayudan a:</h3>
                <ul className="mb-6 space-y-2">
                  <li>• Hacer que esta web funcione correctamente</li>
                  <li>• Ahorrarle el tener que iniciar sesión cada vez que visitas este sitio</li>
                  <li>• Recordarte tus ajustes durante y entre las visitas</li>
                  <li>• Permitirte visualizar videos</li>
                  <li>• Mejorar la velocidad / seguridad del sitio</li>
                  <li>• Que puedas compartir páginas con redes sociales</li>
                  <li>• Mejora continua de este sitio web</li>
                  <li>• Mostrarte contenido relevante según tus hábitos de navegación</li>
                </ul>

                <h3 className="text-xl font-semibold text-primary-dark mb-4">No utilizamos cookies para:</h3>
                <ul className="mb-6 space-y-2">
                  <li>• Recoger información de identificación personal (sin tu permiso expreso)</li>
                  <li>• Recoger información sensible (sin tu permiso expreso)</li>
                  <li>• Compartir datos de identificación personal a terceros</li>
                </ul>

                <h3 className="text-xl font-semibold text-primary-dark mb-4">Tipos de cookies utilizadas</h3>
                
                <h4 className="text-lg font-semibold text-gray-800 mb-3">Cookies técnicas</h4>
                <p className="mb-6">
                  Son aquéllas que permiten al USUARIO la navegación a través de la página web y la utilización de las diferentes opciones o servicios que en ella existen como, por ejemplo, controlar el tráfico y la comunicación de datos, identificar la sesión, acceder a partes de acceso restringido, recordar los elementos que integran un pedido, realizar el proceso de compra de un pedido, realizar la solicitud de inscripción o participación en un evento, utilizar elementos de seguridad durante la navegación, almacenar contenidos para la difusión de vídeos o sonido o compartir contenidos a través de redes sociales.
                </p>

                <h4 className="text-lg font-semibold text-gray-800 mb-3">Cookies de Google Analytics</h4>
                <p className="mb-4">
                  Son cookies de terceros (Google Inc.) de análisis que permiten el seguimiento y análisis del comportamiento de los USUARIOS de los sitios web a los que están vinculadas. La información recogida mediante este tipo de cookies se utiliza en la medición de la actividad de los sitios web, aplicación o plataforma y para la elaboración de perfiles de navegación de los USUARIOS de dichos sitios, aplicaciones y plataformas, con el fin de introducir mejoras en función del análisis de los datos de uso que hacen los USUARIOS del servicio.
                </p>
                
                <p className="mb-6">
                  Google Analytics, almacena las cookies en servidores ubicados en Estados Unidos y se compromete a no compartirla con terceros, excepto en los casos en los que sea necesario para el funcionamiento del sistema o cuando la ley obligue a tal efecto. Según Google no guarda la dirección IP del USUARIO.
                </p>

                <p className="mb-6">
                  Más información sobre Google Analytics en los siguientes enlaces:
                </p>
                <ul className="mb-6">
                  <li>• <a href="https://www.google.com/analytics/" target="_blank" rel="noopener noreferrer" className="text-primary-blue hover:underline">www.google.com/analytics/</a></li>
                  <li>• <a href="http://www.google.com/intl/es/policies/privacy/" target="_blank" rel="noopener noreferrer" className="text-primary-blue hover:underline">Política de privacidad de Google</a></li>
                  <li>• <a href="https://developers.google.com/analytics/devguides/collection/analyticsjs/cookie-usage?hl=es&csw=1" target="_blank" rel="noopener noreferrer" className="text-primary-blue hover:underline">Uso de cookies en Analytics</a></li>
                </ul>

                <h4 className="text-lg font-semibold text-gray-800 mb-3">Cookies de redes sociales</h4>
                <p className="mb-6">
                  Las Cookies de redes sociales pueden almacenarse en su navegador mientras navega por ASOVEDRA.org por ejemplo, cuando utiliza el botón de compartir contenidos de ASOVEDRA.org en alguna red social.
                </p>

                <p className="mb-4">Las empresas que generan estas cookies correspondientes a las redes sociales que utiliza esta web tienen sus propias políticas de cookies:</p>
                <ul className="mb-6">
                  <li>• <a href="https://help.twitter.com/es/rules-and-policies/twitter-cookies" target="_blank" rel="noopener noreferrer" className="text-primary-blue hover:underline">Cookie de Twitter</a></li>
                  <li>• <a href="https://www.linkedin.com/legal/cookie-policy" target="_blank" rel="noopener noreferrer" className="text-primary-blue hover:underline">Cookie de LinkedIn</a></li>
                  <li>• <a href="https://www.facebook.com/policies/cookies/" target="_blank" rel="noopener noreferrer" className="text-primary-blue hover:underline">Cookie de Facebook</a></li>
                </ul>

                <h3 className="text-xl font-semibold text-primary-dark mb-4">¿Cómo desactivar cookies?</h3>
                <p className="mb-4">El usuario podrá -en cualquier momento- elegir qué cookies quiere que funcionen en este sitio web mediante la configuración de su navegador:</p>
                <ul className="mb-6">
                  <li>• <a href="http://support.google.com/chrome/bin/answer.py?hl=es&answer=95647" target="_blank" rel="noopener noreferrer" className="text-primary-blue hover:underline">Chrome</a></li>
                  <li>• <a href="http://windows.microsoft.com/es-es/windows7/how-to-manage-cookies-in-internet-explorer-9" target="_blank" rel="noopener noreferrer" className="text-primary-blue hover:underline">Internet Explorer</a></li>
                  <li>• <a href="http://support.mozilla.org/es/kb/habilitar-y-deshabilitar-cookies-que-los-sitios-we" target="_blank" rel="noopener noreferrer" className="text-primary-blue hover:underline">Firefox</a></li>
                  <li>• <a href="http://support.apple.com/kb/ph5042" target="_blank" rel="noopener noreferrer" className="text-primary-blue hover:underline">Safari</a></li>
                  <li>• <a href="http://help.opera.com/Windows/11.50/es-ES/cookies.html" target="_blank" rel="noopener noreferrer" className="text-primary-blue hover:underline">Opera</a></li>
                </ul>

                <h3 className="text-xl font-semibold text-primary-dark mb-4">Cookies específicas que utiliza esta web</h3>
                <ul className="mb-6 space-y-2">
                  <li>• <strong>PHPSESSID</strong> (2 años): Cookie técnica para mantener la sesión del usuario</li>
                  <li>• <strong>_ga, _gid, _gat</strong> (2 años): Cookies de Google Analytics para análisis de tráfico y estadísticas</li>
                  <li>• <strong>Cookies de redes sociales</strong>: Para funcionalidades de compartir en redes sociales</li>
                </ul>

                <h3 className="text-xl font-semibold text-primary-dark mb-4">Responsabilidad</h3>
                <p className="mb-6">
                  Ni esta web, ni sus representantes legales se hacen responsables ni del contenido ni de la veracidad de las políticas de privacidad que puedan tener los terceros mencionados en esta política de cookies.
                </p>
                
                <p className="mb-6">
                  Los navegadores web son las herramientas encargadas de almacenar las cookies y desde esos navegadores debes efectuar tu derecho a eliminación o desactivación de las mismas. Ni esta web ni sus representantes legales pueden garantizar la correcta o incorrecta manipulación de las cookies por parte de los mencionados navegadores.
                </p>

                <h3 className="text-xl font-semibold text-primary-dark mb-4">Aceptación</h3>
                <p className="mb-6">
                  La aceptación de la presente política de cookies implica que el usuario ha sido informado de una forma clara y completa sobre el uso de dispositivos de almacenamiento y recuperación de datos (cookies) así como que ASOVEDRA.org dispone del consentimiento del usuario para el uso de las mismas tal y como establece el artículo 22 de la Ley 34/2002, de 11 de julio, de Servicios de la Sociedad de la Información y Comercio Electrónico (LSSI-CE).
                </p>

                <h3 className="text-xl font-semibold text-primary-dark mb-4">Contacto</h3>
                <p className="mb-6">
                  Para cualquier duda o consulta acerca de esta política de cookies no dudes en comunicarte con nosotros a través de la dirección de correo electrónico <a href="mailto:info@asovedra.org" className="text-primary-blue hover:underline">info@asovedra.org</a>.
                </p>

                <div className="mt-8 p-4 bg-gray-100 rounded-lg">
                  <p className="text-sm text-gray-600">
                    <strong>Última actualización:</strong> Octubre 2025
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}

export default PoliticaCookies