import React, { useEffect } from 'react';

interface SEOProps {
  title: string;
  description?: string;
  keywords?: string;
  image?: string;
  url?: string;
}

const SEO: React.FC<SEOProps> = ({ title, description, keywords, image, url }) => {
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
    const updateOGTag = (property: string, content: string) => {
      let tag = document.querySelector(`meta[property="${property}"]`);
      if (!tag) {
        tag = document.createElement('meta');
        tag.setAttribute('property', property);
        document.head.appendChild(tag);
      }
      tag.setAttribute('content', content);
    };

    // Base URL for production
    const baseUrl = 'https://travel-platform-six.vercel.app';
    const currentUrl = `${baseUrl}${window.location.pathname}`;
    const ogImage = image ? (image.startsWith('http') ? image : `${baseUrl}${image}`) : `${baseUrl}/logo.png`;

    updateOGTag('og:title', fullTitle);
    updateOGTag('og:description', description || 'Descubre lo mejor de Ecuador con Juanito Travel.');
    updateOGTag('og:image', ogImage);
    updateOGTag('og:image:width', '1200');
    updateOGTag('og:image:height', '630');
    updateOGTag('og:site_name', 'Juanito Travel Ecuador');
    updateOGTag('og:url', currentUrl);
    updateOGTag('og:type', 'website');

    // Update Twitter Tags
    const updateTwitterTag = (name: string, content: string) => {
      let tag = document.querySelector(`meta[name="${name}"]`);
      if (!tag) {
        tag = document.createElement('meta');
        tag.setAttribute('name', name);
        document.head.appendChild(tag);
      }
      tag.setAttribute('content', content);
    };

    updateTwitterTag('twitter:card', 'summary_large_image');
    updateTwitterTag('twitter:title', fullTitle);
    updateTwitterTag('twitter:description', description || 'Descubre lo mejor de Ecuador con Juanito Travel.');
    updateTwitterTag('twitter:image', ogImage);

    // Structured Data (JSON-LD)
    const structuredData = {
      "@context": "https://schema.org",
      "@type": "TravelAgency",
      "name": "Juanito Travel",
      "image": `${baseUrl}/logo.png`,
      "@id": baseUrl,
      "url": baseUrl,
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
          "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"
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
    scriptTag.innerHTML = JSON.stringify(structuredData);

    return () => {
      // Cleanup
    };
  }, [title, description, keywords, image, url]);

  return null;
};

export default SEO;
