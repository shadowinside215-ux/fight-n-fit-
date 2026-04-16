import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'motion/react';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

const CTASection = () => {
  const { t } = useTranslation();

  return (
    <section className="py-24 relative overflow-hidden bg-black">
      <div className="absolute inset-0 bg-primary/5 z-0" />
      
      {/* Pattern Overlay */}
      <div className="absolute inset-0 opacity-10 z-10" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, var(--primary) 1px, transparent 0)', backgroundSize: '32px 32px' }} />

      <div className="container mx-auto px-4 relative z-20">
        <div className="flex flex-col items-center text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl"
          >
            <h2 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black text-white mb-10 leading-[0.85] tracking-tighter uppercase text-glow">
              {t('cta.title')}
            </h2>
            <Button 
              nativeButton={false}
              render={<a href="https://wa.me/212661530857" target="_blank" rel="noopener noreferrer" />}
              size="lg" 
              style={{ backgroundColor: '#FFE600', color: '#000000' }}
              className="font-black text-lg sm:text-xl h-20 sm:h-24 px-12 sm:px-16 rounded-none uppercase tracking-[0.2em] group transition-all duration-500 shadow-[0_0_50px_rgba(255,230,0,0.4)] bg-gold-glow border-none flex items-center justify-center hover:brightness-110 active:scale-95"
            >
              <div className="flex items-center gap-4">
                {t('cta.button')}
                <ArrowRight className="w-6 h-6 group-hover:translate-x-3 transition-transform duration-500" />
              </div>
            </Button>
          </motion.div>
        </div>
      </div>

      {/* Decorative text */}
      <div className="absolute -bottom-10 left-0 w-full overflow-hidden whitespace-nowrap opacity-5 pointer-events-none">
        <span className="text-[15vw] font-black text-primary uppercase tracking-tighter">
          FIGHT N' FIT FIGHT N' FIT FIGHT N' FIT
        </span>
      </div>
    </section>
  );
};

export default CTASection;
