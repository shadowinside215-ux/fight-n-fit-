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
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="aspect-square rounded-2xl overflow-hidden border-2 border-primary/20 relative">
              <img
                src={aboutImage}
                alt="Gym Interior"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <ImageUploader settingKey="aboutImageUrl" label="Change About Image" />
            </div>
            <div className="absolute -bottom-6 -right-6 bg-primary p-8 rounded-xl hidden md:block">
              <span className="text-black font-black text-5xl block leading-none">10+</span>
              <span className="text-black font-bold uppercase text-sm tracking-widest">Expert Coaches</span>
            </div>
          </motion.div>

          <div>
            <span className="text-primary font-bold uppercase tracking-[0.3em] text-sm mb-4 block">
              The Dojo
            </span>
            <h2 className="text-5xl md:text-6xl font-black mb-8 leading-tight">
              {t('about.title')}
            </h2>
            <p className="text-xl text-white/60 mb-12 leading-relaxed">
              {t('about.description')}
            </p>

            <div className="grid gap-8">
              {features.map((feature, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="flex gap-6 items-start"
                >
                  <div className="mt-1 p-3 bg-white/5 rounded-lg border border-white/10">
                    {feature.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2 uppercase tracking-tight">{feature.title}</h3>
                    <p className="text-white/50">{feature.desc}</p>
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
