import React from 'react';
import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title?: string;
  description?: string;
  image?: string;
  url?: string;
}

const SEO: React.FC<SEOProps> = ({
  title = "Innovenza - Digital Marketing & Web Development Agency",
  description = "Transform your digital presence with our comprehensive digital marketing solutions. Expert web development, SEO, and digital strategy services.",
  image = "https://innovenza.com/og-image.jpg",
  url = "https://innovenza.com"
}) => {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Innovenza",
    "url": url,
    "logo": "https://innovenza.com/logo.png",
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+923481642395",
      "contactType": "customer service",
      "areaServed": "PK",
      "availableLanguage": ["en", "ur"]
    },
    "sameAs": [
      "https://facebook.com/innovenza",
      "https://twitter.com/innovenza",
      "https://linkedin.com/company/innovenza"
    ]
  };

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      
      {/* Open Graph Tags */}
      <meta property="og:type" content="website" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:url" content={url} />
      
      {/* Twitter Card Tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
      
      {/* Schema.org JSON-LD */}
      <script type="application/ld+json">
        {JSON.stringify(organizationSchema)}
      </script>
    </Helmet>
  );
};

export default SEO;