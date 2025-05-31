import React, { useState, useEffect, useRef } from 'react';
import Button from './Button';

const Navbar: React.FC = () => {
  const [navbarHeight, setNavbarHeight] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navRef = useRef<HTMLElement>(null);
  const calendlyLink = "https://calendly.com/n8n-make-ai/30min";

  useEffect(() => {
    if (navRef.current) {
      setNavbarHeight(navRef.current.offsetHeight);
    }
    const handleResize = () => {
      if (navRef.current) {
        setNavbarHeight(navRef.current.offsetHeight);
      }
      // Close mobile menu on resize to avoid layout issues
      if (window.innerWidth >= 768) { // md breakpoint
        setIsMenuOpen(false);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
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
        
        // Close mobile menu after navigation
        setIsMenuOpen(false);
      } else {
        console.warn(`Element with id '${id}' not found for anchor link.`);
      }
    }
  };

  return (
    <header ref={navRef} className="bg-white/95 backdrop-blur-sm border-b border-neutral-200 sticky top-0 z-50 transition-all duration-300">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-18">
          <div className="flex-shrink-0">
            <a 
              href="#hero" 
              onClick={(e) => handleAnchorClick(e, e.currentTarget.getAttribute('href'))}
              className="text-xl font-bold text-primary hover:text-primary-dark transition-colors duration-200"
              aria-label="N8N & Make AI, Navigate to Hero Section"
            >
              N8N & Make AI
            </a>
          </div>

          {/* Desktop Navigation */}
          <nav role="navigation" aria-label="Main Navigation" className="hidden md:flex space-x-1 items-center">
            {navLinks.map((link) => (
              <a
                key={link.text}
                href={link.href}
                onClick={(e) => handleAnchorClick(e, e.currentTarget.getAttribute('href'))}
                className="text-neutral-600 hover:bg-primary-lighter hover:text-primary-dark px-3 py-2 rounded-md text-sm font-medium transition-all duration-200 ease-in-out"
              >
                {link.text}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-4">
            {/* Mobile menu button */}
            <button
              type="button"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden inline-flex items-center justify-center p-2 rounded-md text-neutral-600 hover:text-primary hover:bg-primary-lighter"
              aria-expanded={isMenuOpen}
              aria-controls="mobile-menu"
              aria-label="Main menu"
            >
              <span className="sr-only">{isMenuOpen ? 'Close main menu' : 'Open main menu'}</span>
              {/* Hamburger icon */}
              <svg
                className={`${isMenuOpen ? 'hidden' : 'block'} h-6 w-6`}
                stroke="currentColor"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
              {/* Close icon */}
              <svg
                className={`${isMenuOpen ? 'block' : 'hidden'} h-6 w-6`}
                stroke="currentColor"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>

            {/* Desktop CTA */}
            <div className="hidden md:block">
              <Button href={calendlyLink} variant="primary" className="text-sm px-5 py-2">
                Get Free Consultation
              </Button>
            </div>

            {/* Mobile CTA */}
            <div className="md:hidden">
              <Button href={calendlyLink} variant="primary" size="sm" className="px-3 py-1.5">
                Contact
              </Button>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        <div
          className={`${
            isMenuOpen ? 'block' : 'hidden'
          } md:hidden transition-all duration-200 ease-in-out`}
          id="mobile-menu"
        >
          <div className="px-2 pt-2 pb-3 space-y-1 border-t border-neutral-200">
            {navLinks.map((link) => (
              <a
                key={link.text}
                href={link.href}
                onClick={(e) => handleAnchorClick(e, e.currentTarget.getAttribute('href'))}
                className="block px-3 py-2 rounded-md text-base font-medium text-neutral-600 hover:text-primary hover:bg-primary-lighter"
              >
                {link.text}
              </a>
            ))}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;