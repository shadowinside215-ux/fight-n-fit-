import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'motion/react';
import { Star, Quote } from 'lucide-react';

const Testimonials = () => {
  const { t } = useTranslation();

  const reviews = [
    {
      name: 'Ahmed R.',
      text: t('testimonials.review1'),
      rating: 5,
      date: '2 weeks ago'
    },
    {
      name: 'Sarah M.',
      text: t('testimonials.review2'),
      rating: 5,
      date: '1 month ago'
    },
    {
      name: 'Youssef K.',
      text: 'Best MMA gym in the area. The coaches really know their stuff.',
      rating: 4,
      date: '3 months ago'
    }
  ];

  return (
    <section className="py-24 bg-secondary/20 relative overflow-hidden">
      {/* Decorative background text */}
      <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center opacity-[0.02] pointer-events-none select-none">
        <span className="text-[20vw] font-black uppercase leading-none">REVIEWS</span>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-10 px-6 sm:px-0">
          <div className="max-w-2xl">
            <span className="text-primary font-bold uppercase tracking-[0.4em] text-[10px] mb-4 block text-glow">
              Testimonials
            </span>
            <h2 className="text-4xl sm:text-6xl font-black leading-[0.9] uppercase tracking-tighter">
              {t('testimonials.title')}
            </h2>
          </div>
          <div className="flex flex-col items-start sm:items-end">
            <div className="flex gap-1 mb-2">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-primary text-primary text-glow" />
              ))}
            </div>
            <span className="text-white/40 font-black uppercase tracking-widest text-[10px]">
              {t('testimonials.rating')}
            </span>
          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 px-6 sm:px-0">
          {reviews.map((review, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-secondary border border-white/5 p-8 sm:p-10 rounded-none relative group hover:border-primary/50 transition-all duration-500 border-gold-glow"
            >
              <Quote className="absolute top-8 right-8 w-12 h-12 text-primary/10 group-hover:text-primary/20 transition-colors" />
              <div className="flex gap-1 mb-8">
                {[...Array(review.rating)].map((_, j) => (
                  <Star key={j} className="w-4 h-4 fill-primary text-primary" />
                ))}
              </div>
              <p className="text-base sm:text-lg text-white/60 mb-8 italic leading-relaxed font-medium">
                "{review.text}"
              </p>
              <div className="flex justify-between items-center border-t border-white/5 pt-8">
                <span className="font-black uppercase tracking-tighter text-white text-sm">{review.name}</span>
                <span className="text-[10px] text-white/20 uppercase font-black tracking-widest">{review.date}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
