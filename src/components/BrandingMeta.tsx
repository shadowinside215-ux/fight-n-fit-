import React from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';

const BrandingMeta = () => {
  return (
    <Helmet>
      <title>FIGHT N' FIT - Sala Al Jadida</title>
      <meta name="description" content="Premium martial arts and fitness gym in Sala Al Jadida. Boxing, Kickboxing, MMA, and Fitness conditioning." />
      
      {/* Open Graph / WhatsApp */}
      <meta property="og:type" content="website" />
      <meta property="og:title" content="FIGHT N' FIT - Sala Al Jadida" />
      <meta property="og:description" content="Premium martial arts and fitness gym. Master your discipline." />
      <meta property="og:site_name" content="FIGHT N' FIT" />
      
      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="FIGHT N' FIT - Sala Al Jadida" />
      <meta name="twitter:description" content="Professional coaching in a friendly atmosphere." />
    </Helmet>
  );
};

export default BrandingMeta;
