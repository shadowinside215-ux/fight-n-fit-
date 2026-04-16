import React, { Suspense } from 'react';
import { useTranslation } from 'react-i18next';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Programs from './components/Programs';
import Offers from './components/Offers';
import Schedule from './components/Schedule';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import CTASection from './components/CTASection';
import Footer from './components/Footer';
import { AppProvider, useApp } from './AppContext';
import { AdminLogin } from './components/AdminTools';
import { HelmetProvider } from 'react-helmet-async';
import BrandingMeta from './components/BrandingMeta';

import { useEffect } from 'react';
import { auth, signOut } from './firebase';

function AppContent() {
  const { i18n } = useTranslation();
  const { loading } = useApp();

  useEffect(() => {
    // One-time logout as requested by the user
    const hasLoggedOut = sessionStorage.getItem('force_logout_2024');
    if (!hasLoggedOut) {
      signOut(auth);
      sessionStorage.setItem('force_logout_2024', 'true');
    }
  }, []);

  if (loading) {
    return <div className="h-screen w-full flex items-center justify-center bg-background text-primary font-black text-4xl animate-pulse">FIGHT N' FIT</div>;
  }
  
  return (
    <div className={`min-h-screen bg-background text-foreground selection:bg-primary selection:text-black overflow-x-hidden ${i18n.language === 'ar' ? 'rtl' : ''}`}>
      <BrandingMeta />
      <Suspense fallback={<div className="h-screen w-full flex items-center justify-center bg-background text-primary font-black text-4xl animate-pulse">FIGHT N' FIT</div>}>
        <Navbar />
        <main>
          <Hero />
          <About />
          <Programs />
          <Offers />
          <Schedule />
          <Testimonials />
          <Contact />
          <CTASection />
        </main>
        <Footer />
        <AdminLogin />
      </Suspense>
    </div>
  );
}

function App() {
  return (
    <HelmetProvider>
      <AppProvider>
        <AppContent />
      </AppProvider>
    </HelmetProvider>
  );
}

export default App;
