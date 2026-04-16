import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Menu, X, Globe, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '../../components/ui/dropdown-menu';
import { motion, AnimatePresence } from 'motion/react';
import { useApp } from '../AppContext';
import { ImageUploader } from './AdminTools';

const Navbar = () => {
  const { t, i18n } = useTranslation();
  const { settings } = useApp();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
    document.documentElement.dir = lng === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.className = lng === 'ar' ? 'rtl' : '';
  };

  const navItems = [
    { name: t('nav.home'), href: '#home' },
    { name: t('nav.about'), href: '#about' },
    { name: t('nav.programs'), href: '#programs' },
    { name: 'Offers', href: '#offers' },
    { name: t('nav.schedule'), href: '#schedule' },
    { name: t('nav.contact'), href: '#contact' },
  ];

  const whatsappLink = "https://wa.me/212661530857";

  return (
    <>
      <nav
        className="fixed top-0 w-full z-50 transition-all duration-500 h-[70px] sm:h-[90px] flex items-center border-b bg-black/95 backdrop-blur-md border-white/10 shadow-[0_4px_30px_rgba(0,0,0,0.5)]"
      >
        <div className="container mx-auto px-6 sm:px-10 flex justify-between items-center h-full">
          {/* Logo Section */}
          <div className="flex items-center gap-3 sm:gap-4 flex-shrink-0">
            <div className="w-10 h-10 xs:w-12 xs:h-12 sm:w-16 sm:h-16 bg-white/5 border border-white/10 rounded-none flex items-center justify-center overflow-hidden relative group border-gold-glow">
              {settings.logoUrl && (
                <img src={settings.logoUrl} alt="Logo" className="w-full h-full object-contain p-1" referrerPolicy="no-referrer" />
              )}
              <ImageUploader settingKey="logoUrl" label="Logo" />
            </div>
            <div className="flex flex-col">
              <span className="text-white font-black text-lg sm:text-2xl uppercase tracking-tighter leading-none">FIGHT N' FIT</span>
              <span className="text-primary font-black text-[7px] xs:text-[9px] sm:text-[11px] uppercase tracking-[0.4em] leading-none mt-1 sm:mt-1.5 text-glow">Sala Al Jadida</span>
            </div>
          </div>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-8">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-[12px] font-black uppercase tracking-[0.2em] hover:text-primary transition-all text-white/70 hover:text-glow active:scale-95 whitespace-nowrap"
              >
                {item.name}
              </a>
            ))}
            
            <div className="flex items-center gap-6 border-l border-white/10 pl-8">
              <DropdownMenu>
                <DropdownMenuTrigger render={<Button variant="ghost" size="icon" className="text-white/40 hover:text-primary transition-colors" />}>
                  <Globe className="w-5 h-5" />
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="bg-background/95 backdrop-blur-md border-white/10 min-w-[120px]">
                  <DropdownMenuItem onClick={() => changeLanguage('en')} className="cursor-pointer text-[10px] uppercase font-black tracking-widest p-3 hover:bg-primary hover:text-black">English</DropdownMenuItem>
                  <DropdownMenuItem onClick={() => changeLanguage('fr')} className="cursor-pointer text-[10px] uppercase font-black tracking-widest p-3 hover:bg-primary hover:text-black">Français</DropdownMenuItem>
                  <DropdownMenuItem onClick={() => changeLanguage('ar')} className="cursor-pointer text-[10px] uppercase font-black tracking-widest p-3 hover:bg-primary hover:text-black">العربية</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
              
              <Button 
                nativeButton={false}
                render={<a href={whatsappLink} target="_blank" rel="noopener noreferrer" />}
                style={{ backgroundColor: '#FFE600', color: '#000000' }}
                className="font-black uppercase tracking-[0.1em] transition-all px-8 text-[11px] h-11 bg-gold-glow hover:brightness-110"
              >
                {t('nav.join')}
              </Button>
            </div>
          </div>

          {/* Mobile Actions */}
          <div className="lg:hidden flex items-center gap-3">
             <DropdownMenu>
                <DropdownMenuTrigger render={<Button variant="ghost" size="icon" className="text-white hover:text-primary" />}>
                  <Globe className="w-5 h-5" />
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="bg-background border-white/10">
                  <DropdownMenuItem onClick={() => changeLanguage('en')} className="font-black text-[10px]">EN</DropdownMenuItem>
                  <DropdownMenuItem onClick={() => changeLanguage('fr')} className="font-black text-[10px]">FR</DropdownMenuItem>
                  <DropdownMenuItem onClick={() => changeLanguage('ar')} className="font-black text-[10px]">AR</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            <button 
              onClick={() => setIsOpen(!isOpen)} 
              className="text-white p-2 hover:bg-white/5 rounded-none border border-white/10 bg-gold-glow-subtle transition-all active:scale-90"
              aria-label="Toggle Menu"
            >
              {isOpen ? <X className="w-8 h-8" /> : <Menu className="w-8 h-8" />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 w-full h-screen bg-black z-[10000] lg:hidden flex flex-col items-center justify-center p-6"
          >
            <button 
              onClick={() => setIsOpen(false)}
              className="absolute top-6 right-6 text-white p-2 hover:bg-white/10 rounded-full transition-colors"
              aria-label="Close Menu"
            >
              <X className="w-10 h-10" />
            </button>
            
            <div className="flex flex-col items-center justify-center gap-2 sm:gap-4 w-full h-full overflow-y-auto mt-10">
              {navItems.map((item, idx) => (
                <motion.a
                  key={item.name}
                  href={item.href}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.05 + 0.2 }}
                  onClick={() => setIsOpen(false)}
                  className="text-4xl xs:text-5xl sm:text-7xl font-black uppercase tracking-tighter hover:text-primary transition-all py-3 sm:py-5 text-center w-full active:scale-95 text-white"
                >
                  {item.name}
                </motion.a>
              ))}
              
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
                className="mt-12 flex flex-col items-center gap-6"
              >
                <div className="flex gap-10">
                  <a href="#" className="text-white/40 hover:text-primary transition-all uppercase font-black text-[10px] tracking-[0.3em] hover:text-glow">Instagram</a>
                  <a href="#" className="text-white/40 hover:text-primary transition-all uppercase font-black text-[10px] tracking-[0.3em] hover:text-glow">Facebook</a>
                </div>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
