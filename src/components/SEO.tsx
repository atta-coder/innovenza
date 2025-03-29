import React from 'react';
import { Helmet } from 'react-helmet-async';

const SEO: React.FC = () => {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Innovenza",
    "url": "https://innovenza.com",
    "logo": "https://innovenza.com/logo.png",
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+92-300-1234567",
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
      <script type="application/ld+json">
        {JSON.stringify(organizationSchema)}
      </script>
    </Helmet>
  );
};

export default SEO;