import React from 'react';
import { Helmet } from 'react-helmet';

interface SEOProps {
  title?: string;
  description?: string;
  canonicalUrl?: string;
  ogImage?: string;
}

const SEO: React.FC<SEOProps> = ({
  title = 'N8N & Make AI Automation Services | Enterprise-Grade Business Automation',
  description = 'Transform your business with AI-powered automation using n8n and Make.com. Custom solutions for streamlined operations, increased productivity, and accelerated growth.',
  canonicalUrl = 'https://n8nmake.tech',
  ogImage = '/og-image.jpg'  // You'll need to add this image to your public directory
}) => {
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    name: 'N8N & Make AI Automation Services',
    description,
    url: canonicalUrl,
    image: ogImage,
    telephone: '+92 313 1136263',
    email: 'business@n8nmake.tech',
    address: {
      '@type': 'PostalAddress',
      addressCountry: 'Global'
    },
    offers: {
      '@type': 'Offer',
      description: 'AI-Powered Business Automation Solutions'
    },
    sameAs: [
      // Add your social media URLs here
    ]
  };

  return (
    <Helmet>
      {/* Primary Meta Tags */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={canonicalUrl} />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage} />
      
      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={canonicalUrl} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />
      
      {/* Additional Meta Tags */}
      <meta name="robots" content="index, follow" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="keywords" content="n8n automation, Make.com automation, business automation, AI automation, workflow automation, enterprise automation, custom automation solutions, no-code automation" />
      <meta name="author" content="N8N & Make AI Automation" />
      
      {/* Theme Color for Mobile */}
      <meta name="theme-color" content="#0d9488" />
      
      {/* Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify(structuredData)}
      </script>
    </Helmet>
  );
};

export default SEO;
