import React from 'react'
import SEO from '../components/SEO'
import { Header } from '../components/layout/Header'

function AvisoLegal() {
  return (
    <>
      <SEO
        title="Aviso Legal"
        description="Aviso legal, términos y condiciones de uso del sitio web de Asovedra. Información sobre titularidad, responsabilidades y protección de datos."
        keywords="aviso legal, términos condiciones, asovedra, protección datos, privacidad"
        canonical="/aviso-legal"
      />
      <main className='min-h-screen bg-gray-50'>
        {/* Header Section with Navigation */}
        <section className="nav-bg py-6 px-3 sticky top-0 z-50">
          <Header />
          <div className="max-w-6xl mx-auto px-4 text-center text-white pt-12 pb-10">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Aviso Legal</h1>
            <p className="text-xl opacity-90 max-w-3xl mx-auto">
              Términos y condiciones de uso del sitio web
            </p>
          </div>
        </section>

        {/* Legal Notice Content */}
        <section className="py-16">
          <div className="max-w-4xl mx-auto px-4">
            <div className="bg-white rounded-xl shadow-lg p-8 space-y-8">
              
              <div>
                <p className="text-gray-700 leading-relaxed">
                  El presente Aviso Legal regula las condiciones generales de acceso y utilización del sitio web accesible en la dirección URL https://asovedra.org (en adelante, el sitio web), que Asovedra pone a disposición de los usuarios de Internet.
                </p>
                <p className="text-gray-700 leading-relaxed mt-4">
                  La utilización del sitio web implica la aceptación plena y sin reservas de todas y cada una de las disposiciones incluidas en este Aviso Legal. En consecuencia, el usuario del sitio web debe leer atentamente el presente Aviso Legal en cada una de las ocasiones en que se proponga utilizar la web, ya que el texto podría sufrir modificaciones a criterio del titular de la web, o a causa de un cambio legislativo, jurisprudencial o en la práctica empresarial.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-primary-dark mb-4">TITULARIDAD DEL SITIO WEB</h2>
                <div className="bg-gray-50 p-6 rounded-lg">
                  <ul className="space-y-2 text-gray-700">
                    <li><strong>Razón Social:</strong> ASOVEDRA</li>
                    <li><strong>Nombre del titular:</strong> Asociación de Venezolanos en Pontevedra</li>
                    <li><strong>Domicilio social:</strong> Rúa Sor Lucía 4, Oficina 50</li>
                    <li><strong>Población:</strong> Pontevedra</li>
                    <li><strong>Provincia:</strong> Pontevedra</li>
                    <li><strong>Teléfono de contacto:</strong> +34 604 016 113</li>
                    <li><strong>Correo electrónico:</strong> info@asovedra.org</li>
                  </ul>
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-primary-dark mb-4">OBJETO</h2>
                <p className="text-gray-700 leading-relaxed">
                  El sitio web facilita a los usuarios del mismo el acceso a información y servicios prestados por Asovedra a aquellas personas u organizaciones interesadas en los mismos, especialmente en relación con el apoyo y la integración de la comunidad venezolana en España.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-primary-dark mb-4">ACCESO Y UTILIZACIÓN DE LA WEB</h2>
                <h3 className="text-lg font-semibold text-primary-dark mb-2">Carácter gratuito del acceso y utilización de la web:</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  El acceso a la web tiene carácter gratuito para los usuarios de la misma.
                </p>
                <h3 className="text-lg font-semibold text-primary-dark mb-2">Registro de usuarios:</h3>
                <p className="text-gray-700 leading-relaxed">
                  Con carácter general el acceso y utilización de la web no exige la previa suscripción o registro de los usuarios de la misma.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-primary-dark mb-4">CONTENIDOS DE LA WEB</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  El idioma utilizado por el titular en la web será el castellano. Asovedra no se responsabiliza de la no comprensión o entendimiento del idioma de la web por el usuario, ni de sus consecuencias.
                </p>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Asovedra podrá modificar los contenidos sin previo aviso, así como suprimir y cambiar éstos dentro de la web, como la forma en que se accede a éstos, sin justificación alguna y libremente, no responsabilizándose de las consecuencias que los mismos puedan ocasionar a los usuarios.
                </p>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Se prohíbe el uso de los contenidos de la web para promocionar, contratar o divulgar publicidad o información propia o de terceras personas sin la autorización de Asovedra, ni remitir publicidad o información valiéndose para ello de los servicios o información que se ponen a disposición de los usuarios, independientemente de si la utilización es gratuita o no.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  Los enlaces o hiperenlaces que incorporen terceros en sus páginas web, dirigidos a esta web, serán para la apertura de la página web completa, no pudiendo manifestar, directa o indirectamente, indicaciones falsas, inexactas o confusas, ni incurrir en acciones desleales o ilícitas en contra de Asovedra.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-primary-dark mb-4">LIMITACIÓN DE RESPONSABILIDAD</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Tanto el acceso a la web como el uso inconsentido que pueda efectuarse de la información contenida en la misma es de la exclusiva responsabilidad de quien lo realiza.
                </p>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Asovedra no responderá de ninguna consecuencia, daño o perjuicio que pudieran derivarse de dicho acceso o uso. Asovedra no se hace responsable de los errores de seguridad, que se puedan producir ni de los daños que puedan causarse al sistema informático del usuario (hardware y software), o a los ficheros o documentos almacenados en el mismo, como consecuencia de:
                </p>
                <ul className="list-disc list-inside text-gray-700 space-y-2 mb-4 ml-4">
                  <li>la presencia de un virus en el ordenador del usuario que sea utilizado para la conexión a los servicios y contenidos de la web,</li>
                  <li>un mal funcionamiento del navegador,</li>
                  <li>y/o del uso de versiones no actualizadas del mismo.</li>
                </ul>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Asovedra no se hace responsable de la fiabilidad y rapidez de los hiperenlaces que se incorporen en la web para la apertura de otras. Asovedra no garantiza la utilidad de estos enlaces, ni se responsabiliza de los contenidos o servicios a los que pueda acceder el usuario por medio de estos enlaces, ni del buen funcionamiento de estas webs.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  Asovedra no será responsable de los virus o demás programas informáticos que deterioren o puedan deteriorar los sistemas o equipos informáticos de los usuarios al acceder a su web u otras webs a las que se haya accedido mediante enlaces de esta web.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-primary-dark mb-4">EMPLEO DE LA TECNOLOGÍA "COOKIE"</h2>
                <p className="text-gray-700 leading-relaxed">
                  La web puede emplear cookies para mejorar la experiencia del usuario. Puede consultar nuestra Política de Cookies, que respeta en todo momento la confidencialidad e intimidad del mismo.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-primary-dark mb-4">PROPIEDAD INTELECTUAL E INDUSTRIAL</h2>
                <p className="text-gray-700 leading-relaxed">
                  Son propiedad de Asovedra, todos los derechos de propiedad industrial e intelectual de la web, así como de los contenidos que alberga. Cualquier uso de la web o sus contenidos deberá tener un carácter exclusivamente particular. Cualquier otro uso que suponga la copia, reproducción, distribución, transformación, comunicación pública o cualquier otra acción similar, de todo o parte de los contenidos de la web, por lo que ningún usuario podrá llevar a cabo estas acciones sin la autorización previa y por escrito de Asovedra.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-primary-dark mb-4">POLÍTICA DE PRIVACIDAD Y PROTECCIÓN DE DATOS</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Asovedra garantiza la protección y confidencialidad de los datos personales, de cualquier tipo que nos proporcionen nuestros usuarios de acuerdo con lo dispuesto en la Ley Orgánica 3/2018, de 5 de diciembre, de Protección de Datos Personales y garantía de los derechos digitales y al RGPD.
                </p>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Todos los datos facilitados por nuestros usuarios a Asovedra o a su personal, serán incluidos en un fichero automatizado de datos de carácter personal creado y mantenido bajo la responsabilidad de Asovedra, imprescindibles para prestar los servicios solicitados por los usuarios.
                </p>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Los datos facilitados serán tratados según el Reglamento General de Protección de Datos (RGPD), en este sentido Asovedra ha adoptado los niveles de protección que legalmente se exigen, y ha instalado todas las medidas técnicas a su alcance para evitar la pérdida, mal uso, alteración, acceso no autorizado por terceros. No obstante, el usuario debe ser consciente de que las medidas de seguridad en Internet no son inexpugnables.
                </p>
                <p className="text-gray-700 leading-relaxed mb-4">
                  En caso en que considere oportuno que se cedan sus datos de carácter personal a otras entidades, el usuario será informado de los datos cedidos, de la finalidad del fichero y del nombre y dirección del cesionario, para que de su consentimiento inequívoco al respecto.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  En cumplimiento de lo establecido en el RGPD, el usuario podrá ejercer todos sus derechos. Para ello debe de contactar con nosotros en info@asovedra.org
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-primary-dark mb-4">LEGISLACIÓN APLICABLE Y JURISDICCIÓN COMPETENTE</h2>
                <p className="text-gray-700 leading-relaxed">
                  El presente Aviso Legal se interpretará y regirá de conformidad con la legislación española. Asovedra y los usuarios, con renuncia expresa a cualquier otro fuero que pudiera corresponderles, se someten al de los juzgados y tribunales del domicilio de Asovedra para cualquier controversia que pudiera derivarse del acceso o uso de la web.
                </p>
              </div>

              <div className="border-t pt-6">
                <p className="text-sm text-gray-500">
                  Última actualización: Octubre 2025
                </p>
              </div>

            </div>
          </div>
        </section>
      </main>
    </>
  )
}

export default AvisoLegal