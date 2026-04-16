import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'motion/react';
import { Shield, Users, TrendingUp } from 'lucide-react';
import { useApp } from '../AppContext';
import { ImageUploader } from './AdminTools';

const About = () => {
  const { t } = useTranslation();
  const { settings } = useApp();

  const aboutImage = settings.aboutImageUrl || "https://images.unsplash.com/photo-1599058917233-3583e71f11f0?q=80&w=2070&auto=format&fit=crop";

  const features = [
    {
      icon: <Users className="w-8 h-8 text-primary" />,
      title: t('about.features.coaching'),
      desc: 'Expert instructors with years of ring experience.'
    },
    {
      icon: <Shield className="w-8 h-8 text-primary" />,
      title: t('about.features.atmosphere'),
      desc: 'A safe, respectful, and motivating environment for everyone.'
    },
    {
      icon: <TrendingUp className="w-8 h-8 text-primary" />,
      title: t('about.features.growth'),
      desc: 'Build confidence, discipline, and peak physical fitness.'
    }
  ];

  return (
    <section id="about" className="py-24 bg-background relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-10 sm:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative px-6 sm:px-0"
          >
            <div className="aspect-square rounded-none overflow-hidden border border-white/10 relative group border-gold-glow">
              <img
                src={aboutImage}
                alt="Gym Interior"
                className="w-full h-full object-cover opacity-100 transition-all duration-700"
                referrerPolicy="no-referrer"
              />
              <ImageUploader settingKey="aboutImageUrl" label="Edit Photo" />
            </div>
            <div className="absolute -bottom-6 -right-6 bg-primary p-6 sm:p-8 rounded-none hidden md:block bg-gold-glow">
              <span className="text-black font-black text-4xl sm:text-5xl block leading-none">10+</span>
              <span className="text-black font-black uppercase text-[10px] tracking-widest">Expert Coaches</span>
            </div>
          </motion.div>

          <div className="px-6 sm:px-0">
            <span className="text-primary font-bold uppercase tracking-[0.4em] text-[10px] sm:text-xs mb-4 block text-glow">
              The Dojo
            </span>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-black mb-8 leading-[0.9] tracking-tighter uppercase">
              {t('about.title')}
            </h2>
            <p className="text-base sm:text-lg text-white/50 mb-12 leading-relaxed font-medium">
              {t('about.description')}
            </p>

            <div className="grid gap-6">
              {features.map((feature, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="flex gap-5 items-start"
                >
                  <div className="mt-1 p-3 bg-secondary border border-white/5 rounded-none border-gold-glow">
                    {feature.icon}
                  </div>
                  <div>
                    <h3 className="text-lg sm:text-xl font-black mb-1 uppercase tracking-tighter">{feature.title}</h3>
                    <p className="text-xs sm:text-sm text-white/30 font-medium">{feature.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
