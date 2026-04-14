import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'motion/react';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

const CTASection = () => {
  const { t } = useTranslation();

  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-primary z-0" />
      
      {/* Pattern Overlay */}
      <div className="absolute inset-0 opacity-10 z-10" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, black 1px, transparent 0)', backgroundSize: '24px 24px' }} />

      <div className="container mx-auto px-4 relative z-20">
        <div className="flex flex-col items-center text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl"
          >
            <h2 className="text-5xl md:text-7xl lg:text-8xl font-black text-black mb-8 leading-[0.9]">
              {t('cta.title')}
            </h2>
            <Button 
              render={<a href="https://wa.me/212661530857" target="_blank" rel="noopener noreferrer" />}
              size="lg" 
              className="bg-black text-white hover:bg-black/90 font-extrabold text-xl h-20 px-12 rounded-[4px] uppercase tracking-tight group"
            >
              <div className="flex items-center">
                {t('cta.button')}
                <ArrowRight className="ml-3 w-6 h-6 group-hover:translate-x-2 transition-transform" />
              </div>
            </Button>
          </motion.div>
        </div>
      </div>

      {/* Decorative text */}
      <div className="absolute -bottom-10 left-0 w-full overflow-hidden whitespace-nowrap opacity-20 pointer-events-none">
        <span className="text-[15vw] font-black text-black uppercase tracking-tighter">
          FIGHT N' FIT FIGHT N' FIT FIGHT N' FIT
        </span>
      </div>
    </section>
  );
};

export default CTASection;
