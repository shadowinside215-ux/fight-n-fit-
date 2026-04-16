import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'motion/react';
import { MapPin, Phone, Mail, Instagram, Facebook, Twitter, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Contact = () => {
  const { t } = useTranslation();

  return (
    <section id="contact" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 px-6 sm:px-0">
          <div>
            <span className="text-primary font-bold uppercase tracking-[0.4em] text-[10px] mb-4 block text-glow">
              Contact
            </span>
            <h2 className="text-4xl sm:text-6xl font-black mb-10 tracking-tighter uppercase leading-[0.9]">
              {t('contact.title')}
            </h2>
            
            <div className="grid sm:grid-cols-2 gap-8 mb-12">
              <div className="info-item border-l-2 border-primary/20 pl-6 border-gold-glow py-2">
                <label className="block text-[9px] text-white/30 uppercase mb-2 font-black tracking-[0.2em]">Location</label>
                <p className="text-[13px] text-white font-black uppercase tracking-tight leading-snug">{t('contact.address')}</p>
              </div>

              <div className="info-item border-l-2 border-primary/20 pl-6 border-gold-glow py-2">
                <label className="block text-[9px] text-white/30 uppercase mb-2 font-black tracking-[0.2em]">Phone</label>
                <p className="text-[13px] text-primary font-black uppercase tracking-tight text-glow">{t('contact.phone')}</p>
              </div>

              <div className="info-item border-l-2 border-primary/20 pl-6 border-gold-glow py-2">
                <label className="block text-[9px] text-white/30 uppercase mb-2 font-black tracking-[0.2em]">Email</label>
                <p className="text-[13px] text-white font-black uppercase tracking-tight">info@fightnfit.ma</p>
              </div>

              <div className="info-item border-l-2 border-primary/20 pl-6 border-gold-glow py-2">
                <label className="block text-[9px] text-white/30 uppercase mb-2 font-black tracking-[0.2em]">Socials</label>
                <div className="flex gap-4">
                  <a href="https://www.instagram.com/fight.nfit" target="_blank" className="text-white hover:text-primary transition-colors"><Instagram className="w-5 h-5" /></a>
                  <a href="https://www.facebook.com/mahajalarouss" target="_blank" className="text-white hover:text-primary transition-colors"><Facebook className="w-5 h-5" /></a>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 mb-10">
              <Button 
                nativeButton={false}
                render={<a href="tel:+212661530857" />}
                size="lg" 
                style={{ backgroundColor: '#FFE600', color: '#000000' }}
                className="font-black uppercase tracking-widest h-14 px-10 rounded-none text-xs bg-gold-glow w-full sm:w-auto border-none hover:brightness-110 flex items-center justify-center"
              >
                {t('contact.call')}
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                style={{ borderColor: '#FFE600', color: '#FFFFFF' }}
                className="border-2 font-black uppercase tracking-widest h-14 px-10 rounded-none text-xs w-full sm:w-auto hover:bg-[#FFE600]/10"
              >
                {t('contact.directions')}
              </Button>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="h-[400px] lg:h-auto rounded-none overflow-hidden border border-white/5 relative group border-gold-glow"
          >
            {/* Google Maps Embed Placeholder */}
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3307.345678901234!2d-6.754321098765432!3d33.98765432109876!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzPCsDU5JzE1LjYiTiA2wrA0NScxNS42Ilc!5e0!3m2!1sen!2sma!4v1650000000000!5m2!1sen!2sma"
              width="100%"
              height="100%"
              style={{ border: 0, filter: 'grayscale(1) invert(0.9) contrast(1.2)' }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
            <div className="absolute inset-0 pointer-events-none border-[12px] border-background" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
