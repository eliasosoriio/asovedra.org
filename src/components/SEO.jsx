import { Helmet } from 'react-helmet-async'

const SEO = ({ 
  title, 
  description, 
  keywords,
  canonical,
  ogImage,
  ogType = 'website',
  article = null
}) => {
  const siteTitle = 'Asovedra - Asociación de Venezolanos en Pontevedra'
  const siteUrl = 'https://asovedra.org'
  const defaultDescription = 'Asovedra brinda apoyo integral a la comunidad venezolana en Galicia y toda España. Servicios legales, empleo, trámites migratorios y más. ¡Contáctanos!'
  const defaultKeywords = 'asovedra, venezolanos españa, asociación venezolana, ayuda legal migratoria, empleo venezuela, pontevedra, galicia, inmigración'
  const defaultImage = `${siteUrl}/og-image.jpg`

  const fullTitle = title ? `${title} | ${siteTitle}` : siteTitle
  const metaDescription = description || defaultDescription
  const metaKeywords = keywords || defaultKeywords
  const canonicalUrl = canonical ? `${siteUrl}${canonical}` : siteUrl
  const imageUrl = ogImage || defaultImage

  return (
    <Helmet>
      {/* Title */}
      <title>{fullTitle}</title>
      
      {/* Meta tags básicas */}
      <meta name="description" content={metaDescription} />
      <meta name="keywords" content={metaKeywords} />
      <meta name="author" content="Asovedra" />
      <meta name="robots" content="index, follow" />
      <link rel="canonical" href={canonicalUrl} />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content={ogType} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={metaDescription} />
      <meta property="og:image" content={imageUrl} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:site_name" content={siteTitle} />
      <meta property="og:locale" content="es_ES" />
      
      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={metaDescription} />
      <meta name="twitter:image" content={imageUrl} />
      
      {/* Geo tags para localización */}
      <meta name="geo.region" content="ES-PO" />
      <meta name="geo.placename" content="Pontevedra, España" />
      <meta name="geo.position" content="42.4297;-8.6444" />
      <meta name="ICBM" content="42.4297, -8.6444" />
      
      {/* Artículo específico */}
      {article && (
        <>
          <meta property="article:published_time" content={article.publishedTime} />
          <meta property="article:modified_time" content={article.modifiedTime} />
          <meta property="article:section" content={article.section} />
          <meta property="article:tag" content={article.tags} />
        </>
      )}
      
      {/* Hreflang para idiomas */}
      <link rel="alternate" href={canonicalUrl} hrefLang="es" />
      <link rel="alternate" href={canonicalUrl} hrefLang="x-default" />
      
      {/* Preconnect para performance */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      
      {/* Structured Data - Organization */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          "name": "Asovedra",
          "alternateName": "Asociación de Venezolanos en Pontevedra",
          "description": metaDescription,
          "url": siteUrl,
          "logo": `${siteUrl}/favicon.png`,
          "foundingDate": "2018",
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "Rúa Sor Lucía 4, Oficina 50",
            "addressLocality": "Pontevedra",
            "addressRegion": "Galicia",
            "postalCode": "36002",
            "addressCountry": "ES"
          },
          "contactPoint": [
            {
              "@type": "ContactPoint",
              "telephone": "+34-604-016-113",
              "contactType": "customer service",
              "email": "info@asovedra.org",
              "availableLanguage": ["Spanish"]
            }
          ],
          "areaServed": {
            "@type": "Country",
            "name": "Spain"
          },
          "knowsAbout": [
            "Immigration Law",
            "Employment Services",
            "Legal Consultation",
            "Venezuelan Community Support"
          ],
          "sameAs": [
            "https://facebook.com/asovedra",
            "https://instagram.com/asovedra"
          ]
        })}
      </script>
      
      {/* Structured Data - WebSite */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebSite",
          "name": "Asovedra",
          "url": siteUrl,
          "potentialAction": {
            "@type": "SearchAction",
            "target": `${siteUrl}/buscar?q={search_term_string}`,
            "query-input": "required name=search_term_string"
          }
        })}
      </script>
    </Helmet>
  )
}

export default SEO