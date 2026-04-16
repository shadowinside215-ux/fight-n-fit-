import React from 'react';
import { useTranslation } from 'react-i18next';
import { Instagram, Facebook, Twitter, Youtube } from 'lucide-react';
import { useApp } from '../AppContext';

const Footer = () => {
  const { t } = useTranslation();
  const { settings } = useApp();

  return (
    <footer className="bg-black py-20 border-t border-white/5">
      <div className="container mx-auto px-10">
        <div className="grid md:grid-cols-4 gap-12 mb-20">
          <div className="col-span-2">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-16 h-16 bg-white/5 border border-white/10 rounded-none flex items-center justify-center overflow-hidden border-gold-glow">
                {settings.logoUrl ? (
                  <img src={settings.logoUrl} alt="Logo" className="w-full h-full object-contain p-1" referrerPolicy="no-referrer" />
                ) : (
                  <span className="text-xl font-black text-primary">FNF</span>
                )}
              </div>
              <div className="flex flex-col">
                <span className="text-white font-black text-xl uppercase tracking-tighter leading-none">FIGHT N' FIT</span>
                <span className="text-primary font-black text-[10px] uppercase tracking-[0.3em] leading-none mt-1">Sala Al Jadida</span>
              </div>
            </div>
            <p className="text-white/30 max-w-md text-[13px] leading-relaxed uppercase font-black tracking-widest">
              Sala Al Jadida's Elite <br/> Martial Arts & Fitness Center.
            </p>
          </div>

          <div>
            <h4 className="text-white font-black uppercase tracking-[0.3em] text-[10px] mb-8 text-glow">Site Map</h4>
            <ul className="space-y-4">
              <li><a href="#home" className="text-white/40 hover:text-primary transition-all text-[11px] uppercase font-black tracking-widest">Home</a></li>
              <li><a href="#about" className="text-white/40 hover:text-primary transition-all text-[11px] uppercase font-black tracking-widest">The Dojo</a></li>
              <li><a href="#programs" className="text-white/40 hover:text-primary transition-all text-[11px] uppercase font-black tracking-widest">Disciplines</a></li>
              <li><a href="#offers" className="text-white/40 hover:text-primary transition-all text-[11px] uppercase font-black tracking-widest">Privileges</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-black uppercase tracking-[0.3em] text-[10px] mb-8 text-glow">Social Force</h4>
            <div className="flex gap-4">
              <a 
                href="https://www.instagram.com/fight.nfit" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-none border border-white/10 flex items-center justify-center hover:bg-primary hover:text-black transition-all cursor-pointer text-white/40 hover:border-primary border-gold-glow"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a 
                href="https://www.facebook.com/mahajalarouss" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-none border border-white/10 flex items-center justify-center hover:bg-primary hover:text-black transition-all cursor-pointer text-white/40 hover:border-primary border-gold-glow"
              >
                <Facebook className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center pt-10 border-t border-white/5 gap-6">
          <p className="text-white/20 text-[10px] uppercase font-black tracking-widest">
            © 2024 FIGHT N' FIT. Unstoppable.
          </p>
          <div className="flex items-center gap-10">
            <a href="#" className="text-white/20 text-[10px] uppercase font-black hover:text-white transition-colors tracking-widest">Privacy</a>
            <a href="#" className="text-white/20 text-[10px] uppercase font-black hover:text-white transition-colors tracking-widest">Terms</a>
            <button 
              onClick={() => window.dispatchEvent(new CustomEvent('open-admin-login'))}
              className="text-primary/20 text-[10px] uppercase font-black hover:text-primary transition-colors tracking-widest"
            >
              System
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
