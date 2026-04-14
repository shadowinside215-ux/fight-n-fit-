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
      title: 'New Member Special',
      subtitle: 'Get 20% off your first month',
      imageKey: 'offer1ImageUrl',
      icon: <Zap className="w-6 h-6 text-primary" />
    },
    {
      id: 'offer2',
      title: 'Annual Membership',
      subtitle: '2 Months Free with yearly plan',
      imageKey: 'offer2ImageUrl',
      icon: <Gift className="w-6 h-6 text-primary" />
    },
    {
      id: 'offer3',
      title: 'Student Discount',
      subtitle: 'Special rates for students',
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

      <div className="container mx-auto px-10 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="max-w-2xl">
            <span className="text-primary font-bold uppercase tracking-[4px] text-xs mb-4 block">Exclusive Deals</span>
            <h2 className="text-5xl md:text-7xl font-black text-white uppercase leading-[0.9] tracking-tighter">
              Limited Time <span className="text-primary">Offers</span>
            </h2>
          </div>
          <p className="text-muted-foreground max-w-xs text-sm italic">
            Don't miss out on our special promotions. Join the elite team today.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {offers.map((offer, i) => (
            <motion.div
              key={offer.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group"
            >
              <div className="relative h-[450px] rounded-xl overflow-hidden border border-border bg-card group-hover:border-primary/50 transition-colors">
                <img 
                  src={(settings as any)[offer.imageKey] || "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=2070&auto=format&fit=crop"} 
                  alt={offer.title}
                  className="w-full h-full object-cover opacity-50 group-hover:opacity-70 transition-all duration-700 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />
                
                <div className="absolute inset-0 p-8 flex flex-col justify-end">
                  <div className="mb-4 bg-primary/20 w-12 h-12 rounded-lg flex items-center justify-center backdrop-blur-md border border-primary/30">
                    {offer.icon}
                  </div>
                  <h3 className="text-3xl font-black text-white uppercase tracking-tighter mb-2">
                    {offer.title}
                  </h3>
                  <p className="text-primary font-bold text-sm uppercase tracking-widest">
                    {offer.subtitle}
                  </p>
                </div>

                <ImageUploader settingKey={offer.imageKey} label="Upload Offer Image" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Offers;
