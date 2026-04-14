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
import { AppProvider } from './AppContext';
import { AdminLogin } from './components/AdminTools';

function App() {
  const { i18n } = useTranslation();
  
  return (
    <AppProvider>
      <div className={`min-h-screen bg-background text-foreground selection:bg-primary selection:text-black overflow-x-hidden ${i18n.language === 'ar' ? 'rtl' : ''}`}>
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
    </AppProvider>
  );
}

export default App;
