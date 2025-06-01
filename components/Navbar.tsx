import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Button from './Button';

const Navbar: React.FC = () => {
  const [navbarHeight, setNavbarHeight] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const navRef = useRef<HTMLElement>(null);
  const calendlyLink = "https://calendly.com/n8n-make-ai/30min";

  useEffect(() => {
    if (navRef.current) {
      setNavbarHeight(navRef.current.offsetHeight);
    }

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    const handleResize = () => {
      if (navRef.current) {
        setNavbarHeight(navRef.current.offsetHeight);
      }
      if (window.innerWidth >= 768) {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const navLinks = [
    { href: '#solution', text: 'Solution' },
    { href: '#process', text: 'Process' },
    { href: '#benefits', text: 'Benefits' },
    { href: '#why-us', text: 'Why Us' },
  ];

  const handleAnchorClick = (event: React.MouseEvent<HTMLAnchorElement>, href: string | null) => {
    if (href && href.startsWith('#')) {
      event.preventDefault();
      const id = href.substring(1);
      const element = document.getElementById(id);
      if (element) {
        const currentNavbarHeight = navRef.current?.offsetHeight || navbarHeight || 70;
        const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
        const offsetPosition = elementPosition - currentNavbarHeight - 20;
        
        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
        
        setIsMenuOpen(false);
      }
    }
  };

  return (
    <motion.header
      ref={navRef}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed w-full top-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/90 backdrop-blur-lg shadow-lg'
          : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="flex-shrink-0"
          >
            <a 
              href="#hero" 
              onClick={(e) => handleAnchorClick(e, e.currentTarget.getAttribute('href'))}
              className="text-xl font-bold bg-gradient-to-r from-primary via-teal-500 to-primary bg-clip-text text-transparent hover:opacity-80 transition-opacity duration-200"
              aria-label="N8N & Make AI, Navigate to Hero Section"
            >
              N8N & Make AI
            </a>
          </motion.div>

          <nav role="navigation" aria-label="Main Navigation" className="hidden md:flex space-x-1 items-center">
            {navLinks.map((link, index) => (
              <motion.a
                key={link.text}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                href={link.href}
                onClick={(e) => handleAnchorClick(e, e.currentTarget.getAttribute('href'))}
                className="relative px-3 py-2 text-neutral-600 hover:text-primary transition-colors duration-200 text-sm font-medium group"
              >
                {link.text}
                <motion.span
                  className="absolute bottom-0 left-0 w-full h-0.5 bg-primary scale-x-0 group-hover:scale-x-100 transition-transform duration-200 origin-left"
                  initial={false}
                />
              </motion.a>
            ))}
          </nav>

          <div className="flex items-center gap-4">
            <button
              type="button"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden inline-flex items-center justify-center p-2 rounded-lg text-neutral-600 hover:text-primary hover:bg-primary-lighter transition-colors duration-200"
              aria-expanded={isMenuOpen}
              aria-controls="mobile-menu"
              aria-label="Main menu"
            >
              <span className="sr-only">{isMenuOpen ? 'Close main menu' : 'Open main menu'}</span>
              <motion.div
                animate={isMenuOpen ? "open" : "closed"}
                className="w-6 h-6 flex flex-col justify-center items-center"
              >
                <motion.span
                  className="w-6 h-0.5 bg-current transform origin-center transition-transform duration-200"
                  variants={{
                    open: { rotate: 45, y: 2 },
                    closed: { rotate: 0, y: 0 }
                  }}
                />
                <motion.span
                  className="w-6 h-0.5 bg-current my-1 transform origin-center transition-transform duration-200"
                  variants={{
                    open: { opacity: 0 },
                    closed: { opacity: 1 }
                  }}
                />
                <motion.span
                  className="w-6 h-0.5 bg-current transform origin-center transition-transform duration-200"
                  variants={{
                    open: { rotate: -45, y: -2 },
                    closed: { rotate: 0, y: 0 }
                  }}
                />
              </motion.div>
            </button>

            <div className="hidden md:block">
              <Button 
                href={calendlyLink} 
                variant="primary"
                className="text-sm px-5 py-2.5 shadow-xl shadow-primary/20 hover:shadow-primary/30"
              >
                Get Free Consultation
              </Button>
            </div>

            <div className="md:hidden">
              <Button 
                href={calendlyLink} 
                variant="primary" 
                size="sm" 
                className="px-3 py-1.5"
              >
                Contact
              </Button>
            </div>
          </div>
        </div>

        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.2 }}
              className="md:hidden border-t border-neutral-100"
              id="mobile-menu"
            >
              <div className="px-2 pt-2 pb-3 space-y-1">
                {navLinks.map((link) => (
                  <motion.a
                    key={link.text}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    href={link.href}
                    onClick={(e) => handleAnchorClick(e, e.currentTarget.getAttribute('href'))}
                    className="block px-3 py-2 rounded-lg text-base font-medium text-neutral-600 hover:text-primary hover:bg-primary-lighter transition-all duration-200"
                  >
                    {link.text}
                  </motion.a>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  );
};

export default Navbar;