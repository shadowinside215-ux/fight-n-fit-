import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'motion/react';
import { Button } from '../../components/ui/button';
import { ChevronRight } from 'lucide-react';
import { useApp } from '../AppContext';
import { ImageUploader } from './AdminTools';

const Hero = () => {
  const { t } = useTranslation();
  const { settings } = useApp();

  const heroImage = settings.heroImageUrl || "https://images.unsplash.com/photo-1549719386-74dfcbf7dbed?q=80&w=2070&auto=format&fit=crop";

  return (
    <section id="home" className="relative h-screen w-full overflow-hidden flex items-center">
      {/* Background Image/Video Placeholder */}
      <div className="absolute inset-0 z-0 group">
        <img
          src={heroImage}
          alt="Martial Arts Training"
          className="w-full h-full object-cover opacity-100"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-transparent" />
        <div className="absolute inset-0 bg-transparent" />
        <div className="absolute top-4 left-4 z-50">
          <ImageUploader settingKey="heroImageUrl" label="Edit Banner" />
        </div>
      </div>

      <div className="container mx-auto px-6 sm:px-10 relative z-10 pt-10 sm:pt-0">
        <div className="max-w-4xl">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <span className="text-primary font-bold uppercase tracking-[4px] text-[10px] sm:text-xs mb-4 block text-glow drop-shadow-lg">
              Premium Martial Arts in Sala Al Jadida
            </span>
            <h1 className="text-3xl sm:text-6xl lg:text-7xl font-black leading-[0.85] mb-6 text-white uppercase tracking-tighter drop-shadow-2xl">
              {t('hero.title').split('.').filter(Boolean).map((part, i) => (
                <span key={i} className="block last:text-primary last:text-glow">
                  {part}.
                </span>
              ))}
            </h1>
            <p className="text-xs sm:text-base text-white font-medium max-w-[450px] mb-10 leading-relaxed drop-shadow-md">
              {t('hero.subtitle')}
            </p>
            <div className="flex flex-col sm:flex-row gap-5">
              <Button 
                nativeButton={false}
                render={<a href="https://wa.me/212661530857" target="_blank" rel="noopener noreferrer" />}
                size="lg" 
                style={{ backgroundColor: '#FFE600', color: '#000000' }}
                className="font-black text-sm h-16 px-10 uppercase tracking-widest transition-all border-none bg-gold-glow shadow-[0_0_30px_rgba(255,230,0,0.4)] flex items-center justify-center hover:brightness-110 active:scale-95"
              >
                {t('hero.cta')}
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                style={{ borderColor: '#FFE600', color: '#FFFFFF' }}
                className="border-2 font-black text-sm h-16 px-10 uppercase tracking-widest hover:bg-[#FFE600]/10 transition-all shadow-[0_0_15px_rgba(255,230,0,0.2)]"
              >
                {t('nav.programs')}
              </Button>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-10 right-10 hidden lg:block">
        <div className="flex flex-col items-end gap-2">
          <div className="w-32 h-1 bg-primary" />
          <div className="w-16 h-1 bg-primary" />
          <span className="text-primary font-black text-4xl italic opacity-50">EST. 2024</span>
        </div>
      </div>
    </section>
  );
};

export default Hero;
