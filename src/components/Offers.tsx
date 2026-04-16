import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'motion/react';
import { useApp } from '../AppContext';
import { ImageUploader } from './AdminTools';
import { Tag, Zap, Gift } from 'lucide-react';

const Offers = () => {
  const { t } = useTranslation();
  const { settings } = useApp();

  const offers = [
    {
      id: 'offer1',
      title: t('offers.new_member.title'),
      subtitle: t('offers.new_member.subtitle'),
      imageKey: 'offer1ImageUrl',
      icon: <Zap className="w-6 h-6 text-primary" />
    },
    {
      id: 'offer2',
      title: t('offers.annual.title'),
      subtitle: t('offers.annual.subtitle'),
      imageKey: 'offer2ImageUrl',
      icon: <Gift className="w-6 h-6 text-primary" />
    },
    {
      id: 'offer3',
      title: t('offers.student.title'),
      subtitle: t('offers.student.subtitle'),
      imageKey: 'offer3ImageUrl',
      icon: <Tag className="w-6 h-6 text-primary" />
    }
  ];

  return (
    <section id="offers" className="py-24 bg-black relative overflow-hidden">
      {/* Background Accents */}
      <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none">
        <div className="absolute top-1/4 -left-20 w-96 h-96 bg-primary rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-primary rounded-full blur-[120px]" />
      </div>

      <div className="container mx-auto px-6 sm:px-10 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
          <div className="max-w-3xl">
            <span className="text-primary font-bold uppercase tracking-[0.4em] text-[10px] mb-4 block text-glow">Exclusive Deals</span>
            <h2 className="text-4xl sm:text-6xl md:text-7xl font-black text-white uppercase leading-[0.85] tracking-tighter">
              Limited Time <br className="hidden sm:block" /><span className="text-primary text-glow">Offers</span>
            </h2>
          </div>
          <p className="text-white/40 max-w-xs text-xs sm:text-sm italic font-medium">
            Don't miss out on our special promotions. Join the elite team today.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-12 sm:gap-16">
          {offers.map((offer, i) => (
            <motion.div
              key={offer.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group"
            >
              <div className="relative flex flex-col h-full bg-secondary/20 border border-white/5 group-hover:border-primary/50 transition-all duration-500 border-gold-glow">
                <div className="relative h-[300px] sm:h-[400px] overflow-hidden">
                  <img 
                    src={(settings as any)[offer.imageKey] || "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=2070&auto=format&fit=crop"} 
                    alt={offer.title}
                    className="w-full h-full object-cover opacity-100 transition-all duration-1000 group-hover:scale-110"
                    referrerPolicy="no-referrer"
                  />
                  <ImageUploader settingKey={offer.imageKey} label="Edit Deal Image" />
                </div>
                
                <div className="p-8 pb-10 flex flex-col">
                  <div className="mb-6 bg-primary w-12 h-12 rounded-none flex items-center justify-center bg-gold-glow">
                    <div className="text-black scale-110">
                      {offer.icon && React.cloneElement(offer.icon as React.ReactElement, { className: 'w-6 h-6' })}
                    </div>
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-black text-white uppercase tracking-tighter mb-2 leading-tight">
                    {offer.title}
                  </h3>
                  <p className="text-primary font-black text-[10px] sm:text-xs uppercase tracking-[0.2em] text-glow mt-2">
                    {offer.subtitle}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Offers;
