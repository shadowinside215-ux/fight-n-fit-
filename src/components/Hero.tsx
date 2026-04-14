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
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Martial Arts Training"
          className="w-full h-full object-cover opacity-60"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-transparent to-transparent" />
        <ImageUploader settingKey="heroImageUrl" label="Change Hero Image" />
      </div>

      <div className="container mx-auto px-10 relative z-10">
        <div className="max-w-4xl">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <span className="text-primary font-bold uppercase tracking-[2px] text-sm mb-3 block">
              Premium Martial Arts in Sala Al Jadida
            </span>
            <h1 className="text-6xl md:text-[64px] font-black leading-[0.95] mb-6 text-white uppercase">
              {t('hero.title').split('.').map((part, i) => (
                <span key={i} className="block">
                  {part}{i === 0 ? '.' : ''}
                </span>
              ))}
            </h1>
            <p className="text-base text-muted-foreground max-w-[450px] mb-8 leading-relaxed">
              {t('hero.subtitle')}
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                render={<a href="https://wa.me/212661530857" target="_blank" rel="noopener noreferrer" />}
                size="lg" 
                className="bg-primary text-black font-extrabold text-sm h-14 px-8 uppercase tracking-tight hover:bg-primary/90 rounded-[4px]"
              >
                {t('hero.cta')}
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white font-extrabold text-sm h-14 px-8 uppercase tracking-tight hover:bg-white/10 rounded-[4px]">
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
