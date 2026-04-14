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
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-primary font-bold uppercase tracking-[0.3em] text-sm mb-4 block">
            Train Hard
          </span>
          <h2 className="text-5xl md:text-6xl font-black mb-6">{t('programs.title')}</h2>
          <div className="h-1.5 w-24 bg-primary mx-auto" />
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
          {programs.map((program, i) => (
            <motion.div
              key={program.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <Card className="bg-card border border-border p-5 rounded-[8px] h-full flex flex-col justify-between relative overflow-hidden group">
                <div className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-500 pointer-events-none">
                  <img 
                    src={(settings as any)[program.imageKey]} 
                    alt="" 
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="relative z-10">
                  <h3 className="text-primary text-[18px] font-bold mb-2 uppercase">
                    {program.name}
                  </h3>
                  <p className="text-[12px] text-muted-foreground leading-relaxed">
                    {program.desc}
                  </p>
                </div>
                <div className="mt-4 relative z-10 flex justify-between items-center">
                  <span className="text-[10px] bg-primary/15 text-primary px-2 py-1 rounded-[4px] font-bold uppercase">
                    {program.level}
                  </span>
                  <ImageUploader settingKey={program.imageKey} label="Image" />
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Programs;
