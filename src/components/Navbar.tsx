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
    { name: t('nav.schedule'), href: '#schedule' },
    { name: t('nav.contact'), href: '#contact' },
  ];

  const whatsappLink = "https://wa.me/212661530857";

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 h-[70px] flex items-center border-b ${
        scrolled ? 'bg-background/95 backdrop-blur-md border-border' : 'bg-transparent border-transparent'
      }`}
    >
      <div className="container mx-auto px-10 flex justify-between items-center">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 bg-white/5 border border-border rounded-sm flex items-center justify-center overflow-hidden relative group">
            {settings.logoUrl ? (
              <img src={settings.logoUrl} alt="Logo" className="w-full h-full object-contain" referrerPolicy="no-referrer" />
            ) : (
              <span className="text-[10px] text-muted-foreground uppercase font-bold text-center leading-tight">Logo<br/>Space</span>
            )}
            <ImageUploader settingKey="logoUrl" label="Logo" />
          </div>
          <span className="text-2xl font-black tracking-tighter text-primary uppercase">
            FIGHT N' FIT
          </span>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-6">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="text-[13px] font-semibold uppercase tracking-widest hover:text-primary transition-colors text-white"
            >
              {item.name}
            </a>
          ))}
          
          <div className="flex items-center gap-4 border-l border-border pl-6">
            <DropdownMenu>
              <DropdownMenuTrigger render={<Button variant="ghost" size="icon" className="text-muted-foreground hover:text-primary" />}>
                <Globe className="w-4 h-4" />
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="bg-card border-border">
                <DropdownMenuItem onClick={() => changeLanguage('en')} className="cursor-pointer text-xs uppercase font-bold">EN</DropdownMenuItem>
                <DropdownMenuItem onClick={() => changeLanguage('fr')} className="cursor-pointer text-xs uppercase font-bold">FR</DropdownMenuItem>
                <DropdownMenuItem onClick={() => changeLanguage('ar')} className="cursor-pointer text-xs uppercase font-bold">AR</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
            
            <Button 
              render={<a href={whatsappLink} target="_blank" rel="noopener noreferrer" />}
              className="bg-primary text-black font-extrabold uppercase tracking-tight hover:bg-primary/90 rounded-[4px] px-6 text-xs h-10"
            >
              {t('nav.join')}
            </Button>
          </div>
        </div>

        {/* Mobile Toggle */}
        <div className="md:hidden flex items-center gap-4">
           <DropdownMenu>
              <DropdownMenuTrigger render={<Button variant="ghost" size="icon" className="text-white" />}>
                <Globe className="w-5 h-5" />
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem onClick={() => changeLanguage('en')}>EN</DropdownMenuItem>
                <DropdownMenuItem onClick={() => changeLanguage('fr')}>FR</DropdownMenuItem>
                <DropdownMenuItem onClick={() => changeLanguage('ar')}>AR</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          <button onClick={() => setIsOpen(!isOpen)} className="text-white">
            {isOpen ? <X className="w-8 h-8" /> : <Menu className="w-8 h-8" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 w-full bg-background border-b border-white/10 md:hidden"
          >
            <div className="flex flex-col p-6 gap-4">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className="text-xl font-bold uppercase tracking-tighter hover:text-primary"
                >
                  {item.name}
                </a>
              ))}
              <Button className="bg-primary text-black font-bold uppercase mt-4">
                {t('nav.join')}
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
