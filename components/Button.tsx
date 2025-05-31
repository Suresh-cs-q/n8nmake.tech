
import React from 'react';

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  className?: string;
  href?: string;
  type?: 'button' | 'submit' | 'reset';
  size?: 'sm' | 'md' | 'lg';
}

const Button: React.FC<ButtonProps> = ({
  children,
  onClick,
  variant = 'primary',
  className = '',
  href,
  type = 'button',
  size = 'md',
}) => {
  const baseStyles = 'relative overflow-hidden font-semibold rounded-lg transition-all duration-300 ease-out focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-white transform active:scale-95';
  
  let sizeStyles = '';
  switch (size) {
    case 'sm':
      sizeStyles = 'px-4 py-2 text-sm';
      break;
    case 'md':
      sizeStyles = 'px-6 py-2.5 text-sm';
      break;
    case 'lg':
      sizeStyles = 'px-8 py-3.5 text-base';
      break;
  }

  let variantStyles = '';
  switch (variant) {
    case 'primary':
      variantStyles = `
        bg-gradient-to-br from-primary to-teal-500 text-white
        before:absolute before:inset-0 before:bg-[length:400%_400%] before:bg-gradient-to-br
        before:from-primary-light before:via-teal-400 before:to-primary
        before:opacity-0 before:transition-opacity before:duration-500
        hover:before:opacity-100 focus-visible:ring-primary
        shadow-lg shadow-primary/10 hover:shadow-xl hover:shadow-primary/20
        hover:-translate-y-0.5 hover:scale-[1.02]
        active:shadow-inner active:scale-95
      `;
      break;
    case 'secondary':
      variantStyles = `
        bg-gradient-to-br from-secondary to-amber-400 text-white
        before:absolute before:inset-0 before:bg-[length:400%_400%] before:bg-gradient-to-br
        before:from-amber-300 before:via-secondary before:to-amber-400
        before:opacity-0 before:transition-opacity before:duration-500
        hover:before:opacity-100 focus-visible:ring-secondary
        shadow-lg shadow-secondary/10 hover:shadow-xl hover:shadow-secondary/20
        hover:-translate-y-0.5 hover:scale-[1.02]
        active:shadow-inner active:scale-95
      `;
      break;
    case 'outline':
      variantStyles = `
        border-2 border-primary/80 text-primary bg-white/80
        hover:bg-primary-lighter hover:text-primary-dark hover:border-primary
        focus-visible:ring-primary backdrop-blur-sm
        shadow-lg shadow-transparent hover:shadow-xl hover:shadow-primary/5
        hover:-translate-y-0.5 hover:scale-[1.02]
      `;
      break;
    case 'ghost':
      variantStyles = `
        text-primary hover:bg-primary-lighter/80 hover:text-primary-dark
        focus-visible:ring-primary backdrop-blur-sm
        hover:-translate-y-0.5 hover:scale-[1.02]
      `;
      break;
  }

  const handleLinkClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
    let navigateToHref = true;
    if (href && href.startsWith('#')) {
      event.preventDefault();
      navigateToHref = false; 
      const id = href.substring(1);
      const element = document.getElementById(id);
      if (element) {
        const navbarElement = document.querySelector('header'); 
        let navbarHeight = 70; 
        if (navbarElement instanceof HTMLElement) {
            navbarHeight = navbarElement.offsetHeight;
        }
        
        const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
        const offsetPosition = elementPosition - navbarHeight - 20; 
        
        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      } else {
        console.warn(`Element with id '${id}' not found for anchor link.`);
      }
    }
    
    if (onClick) {
      onClick(); 
    }

    if (navigateToHref && href && !href.startsWith('#') && !(event.metaKey || event.ctrlKey)) {
      // Standard anchor link behavior will take over unless it's a hash or was handled by onClick
    }
  };

  if (href) {
    return (
      <a
        href={href}
        onClick={handleLinkClick}
        className={`${baseStyles} ${sizeStyles} ${variantStyles} ${className} inline-block text-center`}
        target={href.startsWith('#') || href.startsWith('/') ? '_self' : '_blank'}
        rel={href.startsWith('#') || href.startsWith('/') ? '' : 'noopener noreferrer'}
      >
        {children}
      </a>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      className={`${baseStyles} ${sizeStyles} ${variantStyles} ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;