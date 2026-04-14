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
        <div className="grid lg:grid-cols-2 gap-16">
          <div>
            <span className="text-primary font-bold uppercase tracking-[0.3em] text-sm mb-4 block">
              Contact
            </span>
            <h2 className="text-5xl md:text-6xl font-black mb-8 leading-tight">
              {t('contact.title')}
            </h2>
            
            <div className="space-y-8 mb-12">
              <div className="info-item">
                <label className="block text-[10px] text-muted-foreground uppercase mb-1 font-bold tracking-wider">Location</label>
                <p className="text-[14px] text-white">{t('contact.address')}</p>
              </div>

              <div className="info-item">
                <label className="block text-[10px] text-muted-foreground uppercase mb-1 font-bold tracking-wider">Phone</label>
                <p className="text-[14px] text-white">{t('contact.phone')}</p>
              </div>

              <div className="info-item">
                <label className="block text-[10px] text-muted-foreground uppercase mb-1 font-bold tracking-wider">Email</label>
                <p className="text-[14px] text-white">info@fightnfit.ma</p>
              </div>

              <a href="https://wa.me/212661530857" className="flex items-center gap-2 text-[#25D366] font-bold text-[14px] hover:underline">
                Chat on WhatsApp →
              </a>
            </div>

            <div className="flex flex-wrap gap-4">
              <Button size="lg" className="bg-primary text-black font-extrabold uppercase tracking-tight h-14 px-8 rounded-[4px] text-sm">
                {t('contact.call')}
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white font-extrabold uppercase tracking-tight h-14 px-8 rounded-[4px] text-sm hover:bg-white/5">
                {t('contact.directions')}
              </Button>
            </div>

            <div className="flex gap-4 mt-10">
              <a 
                href="https://www.instagram.com/fight.nfit?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-8 h-8 border border-border flex items-center justify-center rounded-full text-muted-foreground hover:text-primary hover:border-primary transition-colors cursor-pointer"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a 
                href="https://www.facebook.com/mahajalarouss/?locale=ar_AR" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-8 h-8 border border-border flex items-center justify-center rounded-full text-muted-foreground hover:text-primary hover:border-primary transition-colors cursor-pointer"
              >
                <Facebook className="w-4 h-4" />
              </a>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="h-[500px] lg:h-auto rounded-[12px] overflow-hidden border border-border relative group"
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
