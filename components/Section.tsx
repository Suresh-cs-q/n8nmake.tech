import React from 'react';

interface SectionProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
  bg?: 'white' | 'neutral-50' | 'neutral-100' | 'neutral-900' | 'primary-lighter'; // Updated bg options
  bleed?: boolean; // If true, background covers full width, content is still in container
  firstSection?: boolean; // Special padding for the first section after navbar
}

const Section: React.FC<SectionProps> = ({ children, className = '', id, bg = 'white', bleed = false, firstSection = false }) => {
  let bgColorClass = 'bg-white';
  let gradientOverlay = '';
  
  switch (bg) {
    case 'neutral-50':
      bgColorClass = 'bg-neutral-50 bg-opacity-60';
      gradientOverlay = 'before:absolute before:inset-0 before:bg-gradient-to-b before:from-white/5 before:to-transparent before:pointer-events-none';
      break;
    case 'neutral-100':
      bgColorClass = 'bg-neutral-100 bg-opacity-60';
      gradientOverlay = 'before:absolute before:inset-0 before:bg-gradient-to-br before:from-white/10 before:to-transparent before:pointer-events-none';
      break;
    case 'neutral-900':
      bgColorClass = 'bg-neutral-900 text-neutral-200';
      gradientOverlay = 'before:absolute before:inset-0 before:bg-gradient-to-br before:from-primary/5 before:to-transparent before:pointer-events-none';
      break;
    case 'primary-lighter':
      bgColorClass = 'bg-primary-lighter bg-opacity-[0.15]';
      gradientOverlay = 'before:absolute before:inset-0 before:bg-gradient-to-br before:from-primary/5 before:to-transparent before:pointer-events-none';
      break;
  }
  
  const paddingClass = firstSection ? 'pt-24 pb-16 md:pt-32 md:pb-24' : 'py-16 md:py-24';

  const sectionClass = `relative ${paddingClass} ${bgColorClass} ${gradientOverlay} overflow-hidden backdrop-blur-[2px]`;
  
  if (bleed) {
    return (
      <section 
        id={id} 
        className={`${sectionClass} ${className} motion-safe:animate-fadeIn`}
      >
        <div className="container relative mx-auto px-4 sm:px-6 lg:px-8 motion-safe:animate-slideUpEnter">
          {children}
        </div>
        <div className="absolute inset-0 bg-grid-pattern opacity-[0.015] pointer-events-none" />
      </section>
    );
  }

  return (
    <section id={id} className={className}>
      <div className={sectionClass}>
        <div className="container relative mx-auto px-4 sm:px-6 lg:px-8 motion-safe:animate-slideUpEnter">
          {children}
        </div>
        <div className="absolute inset-0 bg-grid-pattern opacity-[0.015] pointer-events-none" />
      </div>
    </section>
  );
};

export default Section;