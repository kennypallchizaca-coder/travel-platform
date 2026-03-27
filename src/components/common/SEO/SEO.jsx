import React, { useEffect } from 'react';

const SEO = ({ title, description, keywords, image, url }) => {
  useEffect(() => {
    // Update Document Title
    const fullTitle = `${title} | Juanito Travel Ecuador`;
    document.title = fullTitle;

    // Update Meta Description
    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.setAttribute('name', 'description');
      document.head.appendChild(metaDescription);
    }
    metaDescription.setAttribute('content', description || 'Descubre lo mejor de Ecuador con Juanito Travel. Galápagos, Andes, Amazonía y Costa.');

    // Update Meta Keywords
    let metaKeywords = document.querySelector('meta[name="keywords"]');
    if (!metaKeywords) {
      metaKeywords = document.createElement('meta');
      metaKeywords.setAttribute('name', 'keywords');
      document.head.appendChild(metaKeywords);
    }
    metaKeywords.setAttribute('content', keywords || 'Ecuador, turismo, Galápagos, Quito, Amazonía, viajes, Juanito Travel');

    // Update OG Tags (Social Media)
    const updateOGTag = (property, content) => {
      let tag = document.querySelector(`meta[property="${property}"]`);
      if (!tag) {
        tag = document.createElement('meta');
        tag.setAttribute('property', property);
        document.head.appendChild(tag);
      }
      tag.setAttribute('content', content);
    };

    updateOGTag('og:title', fullTitle);
    updateOGTag('og:description', description);
    updateOGTag('og:image', image || '/logo.png');
    updateOGTag('og:url', window.location.href);
    updateOGTag('og:type', 'website');

    // Structured Data (JSON-LD)
    const structuredData = {
      "@context": "https://schema.org",
      "@type": "TravelAgency",
      "name": "Juanito Travel",
      "image": "https://juanitotravel.com/logo.png",
      "@id": "",
      "url": "https://juanitotravel.com",
      "telephone": "+593900000000",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Av. Amazonas y Republica",
        "addressLocality": "Quito",
        "postalCode": "170102",
        "addressCountry": "EC"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": -0.180653,
        "longitude": -78.467838
      },
      "openingHoursSpecification": {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
          "Sunday"
        ],
        "opens": "00:00",
        "closes": "23:59"
      },
      "sameAs": [
        "https://www.facebook.com/juanitotravel",
        "https://www.instagram.com/juanitotravel"
      ]
    };

    let scriptTag = document.getElementById('json-ld-sd');
    if (!scriptTag) {
      scriptTag = document.createElement('script');
      scriptTag.setAttribute('type', 'application/ld+json');
      scriptTag.setAttribute('id', 'json-ld-sd');
      document.head.appendChild(scriptTag);
    }
    scriptTag.text = JSON.stringify(structuredData);

    return () => {
      // Cleanup (Optional: revert title etc if needed when component unmounts)
    };
  }, [title, description, keywords, image, url]);

  return null; // This component doesn't render anything
};

export default SEO;
