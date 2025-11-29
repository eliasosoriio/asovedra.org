import React from 'react'
import SEO from '../components/SEO'

function PoliticaPrivacidad() {
  return (
    <>
      <SEO
        title="Política de Privacidad"
        description="Política de privacidad y protección de datos de Asovedra. Información sobre cómo recopilamos, utilizamos y protegemos tu información personal."
        keywords="política privacidad, protección datos, rgpd, lopd, asovedra, datos personales"
        canonical="/politica-privacidad"
      />
      <main className='min-h-screen bg-white pt-20'>
        {/* Header Section */}
        <section className="!bg-gradient-to-br !from-[#1B2336] !via-slate-800 !to-slate-900 py-20 lg:py-24 px-4 relative overflow-hidden">
          {/* Puntos decorativos */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-yellow-400/30 rounded-full"></div>
            <div className="absolute bottom-1/3 right-1/3 w-3 h-3 bg-blue-500/30 rounded-full"></div>
            <div className="absolute top-2/3 right-1/4 w-2.5 h-2.5 bg-red-500/30 rounded-full"></div>
          </div>

          <div className="max-w-6xl mx-auto text-center text-white relative z-10">
            <div className="inline-block bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-medium mb-6">
              Legal
            </div>
            <div className="w-24 h-1 !bg-gradient-to-r !from-yellow-400 !via-blue-500 !to-red-600 mx-auto mb-6"></div>
            <h1 className="text-4xl md:text-6xl font-bold mb-4">Política de Privacidad</h1>
            <p className="text-xl opacity-90 max-w-3xl mx-auto">
              Información sobre protección y tratamiento de datos personales
            </p>
          </div>
        </section>

        {/* Privacy Policy Content */}
        <section className="py-20 lg:py-24 bg-slate-50">
          <div className="max-w-4xl mx-auto px-4">
            <div className="bg-white rounded-xl shadow-lg p-8 space-y-8">
              
              <div>
                <h2 className="text-2xl font-bold text-[#1B2336] mb-4">Política de Privacidad (LOPD y RGPD)</h2>
                <p className="text-slate-600 leading-relaxed mb-4">
                  En esta Política de Privacidad te explicamos cómo recopilamos, utilizamos, compartimos y protegemos tu información de carácter personal a raíz de la contratación y uso que haces de nuestros productos, servicios y/o de nuestro Sitio Web.
                </p>
                <p className="text-slate-600 leading-relaxed">
                  Esta Política de Privacidad se irá actualizando, pero cada vez que hagamos un cambio lo publicaremos en nuestro sitio web asovedra.org (en adelante "Sitio Web").
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-[#1B2336] mb-4">¿Quién recopila tus datos?</h2>
                <p className="text-slate-600 leading-relaxed mb-4">
                  Asovedra.org, cuyo titular del sitio web es Asociación de Venezolanos en Pontevedra, con domicilio en Pontevedra, España (en adelante "la Asociación").
                </p>
                <p className="text-slate-600 leading-relaxed">
                  La Política de Privacidad es sólo aplicable al Sitio Web, entendiendo como tal todas las páginas y subpáginas incluidas en el mismo, declinando la Asociación cualquier responsabilidad sobre las diferentes políticas de privacidad y protección de datos de carácter personal que puedan contener las páginas web a las cuales pueda accederse a través de los hipervínculos ubicados en este sitio web y no gestionadas directamente por la Asociación.
                </p>
                <p className="text-slate-600 leading-relaxed mt-4">
                  Esta política se ha configurado respetando escrupulosamente la normativa europea vigente a partir del 25/05/18 en materia de protección de datos personales.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-[#1B2336] mb-4">¿Qué datos personales tenemos?</h2>
                <p className="text-slate-600 leading-relaxed">
                  <strong>Datos que tú nos has facilitado:</strong> Los datos personales incluyen información como el correo electrónico, direcciones postales particulares, teléfono móvil, nombres de usuario, preferencias personales, contenido generado por el usuario e información de contacto, entre otros. También puede incluir identificadores numéricos como la dirección IP de su ordenador o la información obtenida a través de cookies.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-[#1B2336] mb-4">Finalidad de tener datos</h2>
                <p className="text-slate-600 leading-relaxed">
                  Utilizamos tus datos para llevar a cabo los servicios de apoyo y orientación que ofrecemos a la comunidad iberoamericana, para enviarte notificaciones con información sobre nuestros servicios, eventos y actividades. También, para enviarte información y emails sobre nuestros programas, así como ofertas de formación y oportunidades laborales.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-[#1B2336] mb-4">¿Qué derechos tienes?</h2>
                <div className="space-y-4">
                  <div>
                    <h3 className="text-lg font-semibold text-[#1B2336] mb-2">Derecho de información:</h3>
                    <p className="text-slate-600 leading-relaxed">
                      Tienes derecho a recibir información transparente y fácil de entender sobre la forma en que usamos tus datos personales.
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="text-lg font-semibold text-[#1B2336] mb-2">Derecho de acceso:</h3>
                    <p className="text-slate-600 leading-relaxed">
                      Tienes derecho a la confirmación de si se están tratando tus datos o no. Puedes acceder a tus datos personales, poniéndote en contacto con nosotros en: info@asovedra.org
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="text-lg font-semibold text-[#1B2336] mb-2">Derecho de rectificación:</h3>
                    <p className="text-slate-600 leading-relaxed">
                      Tienes derecho a hacer que se rectifiquen tus datos personales cuando sean inexactos o hayan dejado de ser válidos o a hacer que se completen cuando sean incompletos. Puedes solicitarlo enviándonos un email a info@asovedra.org.
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="text-lg font-semibold text-[#1B2336] mb-2">Derecho de supresión:</h3>
                    <p className="text-slate-600 leading-relaxed">
                      También conocido como derecho al olvido. En determinados casos, te corresponde el derecho a hacer que tus datos personales sean eliminados, aunque podremos tener motivos legales o legítimos para conservarlos.
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="text-lg font-semibold text-[#1B2336] mb-2">Derecho de oposición al marketing directo:</h3>
                    <p className="text-slate-600 leading-relaxed">
                      Puedes darte de baja de nuestras comunicaciones de marketing directo en cualquier momento. Para hacerlo, ponte en contacto con nosotros en info@asovedra.org.
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="text-lg font-semibold text-[#1B2336] mb-2">Derecho de portabilidad de los datos:</h3>
                    <p className="text-slate-600 leading-relaxed">
                      Tienes derecho a recibir tus datos personales que nos hayas proporcionado, en formato estructurado y lectura mecánica. Tras ello podrás solicitar el traspaso de estos datos cuando el tratamiento esté basado en el consentimiento. Para solicitar el derecho de portabilidad deberás ponerte en contacto con nosotros escribiendo a info@asovedra.org.
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="text-lg font-semibold text-[#1B2336] mb-2">Derecho a la desactivación de cookies:</h3>
                    <p className="text-slate-600 leading-relaxed">
                      Puedes gestionar las cookies a través de la configuración de tu navegador.
                    </p>
                  </div>
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-[#1B2336] mb-4">¿Cuánto tiempo conservamos datos?</h2>
                <p className="text-slate-600 leading-relaxed">
                  Conservaremos tus datos el tiempo necesario que dure la actividad para la cual recolectamos tus datos en un principio, cumpliendo siempre con la normativa vigente de protección de datos.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-[#1B2336] mb-4">Datos Identificativos</h2>
                <div className="bg-slate-100 p-6 rounded-lg">
                  <p className="text-slate-600 leading-relaxed mb-4">
                    En cumplimiento con el deber de información recogido en artículo 10 de la Ley 34/2002, de 11 de julio, de Servicios de la Sociedad de la Información y del Comercio Electrónico, a continuación se reflejan los siguientes datos:
                  </p>
                  <ul className="space-y-2 text-slate-600">
                    <li><strong>Titular:</strong> Asociación de Venezolanos en Pontevedra (ASOVEDRA)</li>
                    <li><strong>Domicilio:</strong> Rúa Sor Lucía 4, Oficina 50, 36002 Pontevedra, España</li>
                    <li><strong>Correo electrónico de contacto:</strong> info@asovedra.org</li>
                    <li><strong>Teléfono:</strong> +34 604 016 113</li>
                  </ul>
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-[#1B2336] mb-4">Protección de Datos</h2>
                <p className="text-slate-600 leading-relaxed mb-4">
                  La Asociación cumple con las directrices de la Ley Orgánica 3/2018, de 5 de diciembre, de Protección de Datos Personales y garantía de los derechos digitales, el RGPD y demás normativa vigente en cada momento, y vela por garantizar un correcto uso y tratamiento de los datos personales del usuario.
                </p>
                <p className="text-slate-600 leading-relaxed mb-4">
                  Para ello, junto a cada formulario de recabo de datos de carácter personal, en los servicios que el usuario pueda solicitar a la Asociación, hará saber al usuario de la existencia y aceptación de las condiciones particulares del tratamiento de sus datos en cada caso, informándole de la responsabilidad del fichero creado, la dirección del responsable, la posibilidad de ejercer sus derechos de acceso, rectificación, cancelación u oposición, la finalidad del tratamiento y las comunicaciones de datos a terceros en su caso.
                </p>
                <p className="text-slate-600 leading-relaxed">
                  Asimismo, la Asociación informa que da cumplimiento a la Ley 34/2002 de 11 de julio, de Servicios de la Sociedad de la Información y el Comercio Electrónico y le solicitará su consentimiento al tratamiento de su correo electrónico con fines informativos en cada momento.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-[#1B2336] mb-4">Información Personal</h2>
                <p className="text-slate-600 leading-relaxed mb-4">
                  Cuando te unes a nuestra lista de correo, creas una cuenta o solicitas nuestros servicios a través de nuestro sitio, tu información personal es recogida y almacenada. Los datos personales que recopilamos incluyen (pero no está limitado a) tu nombre completo, dirección, número de teléfono y dirección de correo electrónico.
                </p>
                <p className="text-slate-600 leading-relaxed">
                  También podemos utilizar tu dirección de correo electrónico con el fin de enviarte información sobre nuestros servicios, eventos y oportunidades (comercial o no comercial), siempre con tu consentimiento previo.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-[#1B2336] mb-4">Información No Identificable</h2>
                <p className="text-slate-600 leading-relaxed">
                  La información no identificable son porciones individuales de tu información personal que no puede ser vinculada a ti por sí mismas, por ejemplo, el código postal o ciudad. La Asociación puede utilizar la información no identificable con fines estadísticos para mejorar, en última instancia, tu experiencia en nuestro sitio web. Podemos combinar tu información no identificable con tu información personal para proporcionarte servicios personalizados o hacer frente a tus preguntas.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-[#1B2336] mb-4">Uso del Portal</h2>
                <p className="text-slate-600 leading-relaxed mb-4">
                  Asovedra.org proporciona el acceso a multitud de informaciones, servicios, programas o datos (en adelante, "los contenidos") en Internet pertenecientes a la Asociación a los que el USUARIO pueda tener acceso. El USUARIO asume la responsabilidad del uso del portal.
                </p>
                <p className="text-slate-600 leading-relaxed">
                  El USUARIO se compromete a hacer un uso adecuado de los contenidos y servicios que la Asociación ofrece a través de su portal, respetando los valores de respeto, dignidad y no discriminación que caracterizan nuestra labor.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-[#1B2336] mb-4">Modificaciones</h2>
                <p className="text-slate-600 leading-relaxed">
                  La Asociación se reserva el derecho de efectuar sin previo aviso las modificaciones que considere oportunas en esta Política de Privacidad. La vigencia de las citadas condiciones irá en función de su exposición y estarán vigentes hasta que sean modificadas por otras debidamente publicadas.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-[#1B2336] mb-4">Legislación Aplicable y Jurisdicción</h2>
                <p className="text-slate-600 leading-relaxed">
                  La relación entre la Asociación y el USUARIO se regirá por la normativa española vigente y cualquier controversia se someterá a los Juzgados y tribunales de la ciudad de Pontevedra.
                </p>
              </div>

              <div className="border-t pt-6">
                <p className="text-sm text-gray-500">
                  Última actualización: Octubre 2025
                </p>
                <p className="text-sm text-gray-500 mt-2">
                  Para cualquier consulta sobre esta política de privacidad, contacta con nosotros en: info@asovedra.org
                </p>
              </div>

            </div>
          </div>
        </section>
      </main>
    </>
  )
}

export default PoliticaPrivacidad

