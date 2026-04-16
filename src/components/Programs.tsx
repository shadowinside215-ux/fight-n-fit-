import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'motion/react';
import { Card, CardContent } from '../../components/ui/card';
import { Badge } from '../../components/ui/badge';
import { useApp } from '../AppContext';
import { ImageUploader } from './AdminTools';

const Programs = () => {
  const { t } = useTranslation();
  const { settings } = useApp();

  const programs = [
    {
      id: 'boxing',
      name: t('programs.boxing.name'),
      desc: t('programs.boxing.desc'),
      level: t('programs.boxing.level'),
      imageKey: 'boxingImageUrl'
    },
    {
      id: 'kickboxing',
      name: t('programs.kickboxing.name'),
      desc: t('programs.kickboxing.desc'),
      level: t('programs.kickboxing.level'),
      imageKey: 'kickboxingImageUrl'
    },
    {
      id: 'mma',
      name: t('programs.mma.name'),
      desc: t('programs.mma.desc'),
      level: t('programs.mma.level'),
      imageKey: 'mmaImageUrl'
    },
    {
      id: 'fitness',
      name: t('programs.fitness.name'),
      desc: t('programs.fitness.desc'),
      level: t('programs.fitness.level'),
      imageKey: 'fitnessImageUrl'
    }
  ];

  return (
    <section id="programs" className="py-24 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-20 px-6">
          <span className="text-primary font-bold uppercase tracking-[0.4em] text-[10px] mb-4 block text-glow">
            Push Your Limits
          </span>
          <h2 className="text-4xl sm:text-6xl font-black mb-6 tracking-tighter uppercase leading-[0.9]">
            {t('programs.title')}
          </h2>
          <div className="h-1 w-20 bg-primary mx-auto bg-gold-glow" />
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 px-6 sm:px-10">
          {programs.map((program, i) => (
            <motion.div
              key={program.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group"
            >
              <Card className="bg-secondary/40 border-white/5 rounded-none h-full flex flex-col overflow-hidden relative group hover:border-primary/50 transition-colors duration-500 border-gold-glow">
                <div className="h-56 sm:h-64 w-full overflow-hidden relative">
                  <img 
                    src={(settings as any)[program.imageKey] || "https://images.unsplash.com/photo-1552072092-7f9b8d63efcb?q=80&w=2070&auto=format&fit=crop"} 
                    alt={program.name} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-all duration-700 opacity-100"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-secondary/20 via-transparent to-transparent" />
                  <ImageUploader settingKey={program.imageKey} label="Edit Photo" />
                </div>
                <CardContent className="p-8 flex flex-col flex-grow relative z-10">
                  <div className="flex flex-col gap-2 mb-4">
                    <span className="text-primary font-black text-[10px] uppercase tracking-widest text-glow">
                      {program.level}
                    </span>
                    <h3 className="text-white text-2xl font-black uppercase tracking-tighter">
                      {program.name}
                    </h3>
                  </div>
                  <p className="text-xs text-white/40 leading-relaxed font-medium">
                    {program.desc}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Programs;
