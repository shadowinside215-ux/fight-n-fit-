import React from 'react';
import { useTranslation } from 'react-i18next';
import { Instagram, Facebook, Twitter, Youtube } from 'lucide-react';

const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer className="bg-black py-16 border-t border-border">
      <div className="container mx-auto px-10">
        <div className="grid md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-2">
            <div className="flex items-center gap-2 mb-6">
              <span className="text-2xl font-black tracking-tighter text-white uppercase">
                FIGHT N' <span className="text-primary">FIT</span>
              </span>
            </div>
            <p className="text-muted-foreground max-w-md text-base leading-relaxed">
              Premium martial arts and fitness center in Sala Al Jadida. 
              Dedicated to building strength, discipline, and real skills.
            </p>
          </div>

          <div>
            <h4 className="text-white font-bold uppercase tracking-widest text-xs mb-6">Quick Links</h4>
            <ul className="space-y-4">
              <li><a href="#home" className="text-muted-foreground hover:text-primary transition-colors text-sm">Home</a></li>
              <li><a href="#about" className="text-muted-foreground hover:text-primary transition-colors text-sm">About Us</a></li>
              <li><a href="#programs" className="text-muted-foreground hover:text-primary transition-colors text-sm">Programs</a></li>
              <li><a href="#offers" className="text-muted-foreground hover:text-primary transition-colors text-sm">Offers</a></li>
              <li><a href="#schedule" className="text-muted-foreground hover:text-primary transition-colors text-sm">Schedule</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold uppercase tracking-widest text-xs mb-6">Social Media</h4>
            <div className="flex gap-4">
              <a 
                href="https://www.instagram.com/fight.nfit?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full border border-border flex items-center justify-center hover:bg-primary hover:text-black transition-all cursor-pointer text-muted-foreground"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a 
                href="https://www.facebook.com/mahajalarouss/?locale=ar_AR" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full border border-border flex items-center justify-center hover:bg-primary hover:text-black transition-all cursor-pointer text-muted-foreground"
              >
                <Facebook className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-border gap-4">
          <p className="text-muted-foreground/40 text-xs">
            © 2024 FIGHT N' FIT. All rights reserved.
          </p>
          <div className="flex items-center gap-8">
            <a href="#" className="text-muted-foreground/40 text-[10px] uppercase font-bold hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="text-muted-foreground/40 text-[10px] uppercase font-bold hover:text-white transition-colors">Terms of Service</a>
            <button 
              onClick={() => window.dispatchEvent(new CustomEvent('open-admin-login'))}
              className="text-primary/40 text-[10px] uppercase font-bold hover:text-primary transition-colors"
            >
              Admin
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
