import React from 'react';
import { Helmet } from 'react-helmet';

interface PageSEOProps {
  path: string;
  title?: string;
  description?: string;
}

const PageSEO: React.FC<PageSEOProps> = ({ path, title, description }) => {
  const baseUrl = 'https://n8nmake.tech';
  const pageUrl = `${baseUrl}${path}`;
  
  // Default SEO data for each section
  const seoData = {
    '/': {
      title: 'N8N & Make AI Automation | Enterprise-Grade Business Automation',
      description: 'Transform your business with AI-powered automation using n8n and Make.com. Custom solutions for streamlined operations, increased productivity, and accelerated growth.'
    },
    '#why-us': {
      title: 'Why Choose N8N & Make AI Automation | Expert Automation Services',
      description: 'Discover why businesses trust us for their automation needs. Specialized expertise in n8n and Make.com, custom solutions, and dedicated support.'
    },
    '#benefits': {
      title: 'Business Benefits of Automation | N8N & Make AI Solutions',
      description: 'Save time, reduce errors, and boost productivity with our custom automation solutions. See how our services can transform your business operations.'
    },
    '#testimonials': {
      title: 'Client Success Stories | N8N & Make AI Automation',
      description: 'Read how our automation solutions have helped businesses achieve significant time savings and productivity improvements.'
    }
  };

  const currentSeo = seoData[path as keyof typeof seoData] || seoData['/'];
  const pageTitle = title || currentSeo.title;
  const pageDescription = description || currentSeo.description;

  return (
    <Helmet>
      <title>{pageTitle}</title>
      <meta name="description" content={pageDescription} />
      <link rel="canonical" href={pageUrl} />
      
      {/* Open Graph */}
      <meta property="og:title" content={pageTitle} />
      <meta property="og:description" content={pageDescription} />
      <meta property="og:url" content={pageUrl} />
      
      {/* Twitter */}
      <meta name="twitter:title" content={pageTitle} />
      <meta name="twitter:description" content={pageDescription} />
    </Helmet>
  );
};

export default PageSEO;
