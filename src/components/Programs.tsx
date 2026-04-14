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

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {programs.map((program, i) => (
            <motion.div
              key={program.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group"
            >
              <Card className="bg-card border border-border rounded-[8px] h-full flex flex-col overflow-hidden relative">
                <div className="h-48 w-full overflow-hidden relative">
                  <img 
                    src={(settings as any)[program.imageKey] || "https://images.unsplash.com/photo-1552072092-7f9b8d63efcb?q=80&w=2070&auto=format&fit=crop"} 
                    alt={program.name} 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-60" />
                  <ImageUploader settingKey={program.imageKey} label="Change Image" />
                </div>
                <CardContent className="p-6 flex flex-col flex-grow">
                  <div className="flex justify-between items-start mb-3">
                    <h3 className="text-primary text-xl font-black uppercase tracking-tighter">
                      {program.name}
                    </h3>
                    <Badge variant="secondary" className="bg-primary/10 text-primary border-none text-[10px] font-bold uppercase">
                      {program.level}
                    </Badge>
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed">
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
