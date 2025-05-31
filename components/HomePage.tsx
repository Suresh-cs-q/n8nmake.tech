import React from 'react';
import Section from './Section';
import PageSEO from './PageSEO';

interface BenefitItemProps {
  icon: string; 
  title: string;
  description: string;
}

const BenefitItem: React.FC<BenefitItemProps> = ({ icon, title, description }) => (
  <div className="flex flex-col items-center text-center p-6 bg-white rounded-xl shadow-card hover:shadow-lg transition-all duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-[1.03]">
    <span className="inline-flex items-center justify-center w-16 h-16 mb-6 rounded-full bg-primary-lighter text-primary text-3xl shadow-sm">
      {icon}
    </span>
    <h3 className="text-xl font-semibold text-neutral-800 mb-2">{title}</h3>
    <p className="text-neutral-600 text-sm leading-relaxed">{description}</p>
  </div>
);

interface SolutionCardProps {
  icon: string;
  title: string;
  description: string;
}

const SolutionCard: React.FC<SolutionCardProps> = ({ icon, title, description }) => (
  <div className="flex flex-col p-8 bg-white rounded-xl shadow-card hover:shadow-lg transition-all duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-[1.02]">
    <span className="text-4xl mb-6">{icon}</span>
    <h3 className="text-xl font-semibold text-neutral-800 mb-3">{title}</h3>
    <p className="text-neutral-600 text-sm leading-relaxed">{description}</p>
  </div>
);

interface TestimonialCardProps {
  quote: string;
  author: string;
  company: string;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({ quote, author, company }) => (
  <div className="bg-white p-8 rounded-xl shadow-card h-full flex flex-col justify-between transition-all duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-[1.02] hover:shadow-lg">
    <blockquote className="text-neutral-600 italic text-base leading-relaxed mb-6 relative">
      <span className="absolute -left-4 -top-2 text-4xl text-primary-light opacity-80">&ldquo;</span>
      {quote}
    </blockquote>
    <div>
      <p className="text-neutral-800 font-semibold text-sm">{author}</p>
      <p className="text-sm text-neutral-500">{company}</p>
    </div>
  </div>
);

const HomePage: React.FC = () => {
  const calendlyLink = "https://calendly.com/n8n-make-ai/30min"; // Updated Calendly link
  
  const handleCalendlyClick = () => {
    window.open(calendlyLink, '_blank', 'noopener,noreferrer');
  };

  const handleLearnMoreClick = () => {
    const whyUsSection = document.getElementById('why-us');
    if (whyUsSection) {
      const navbarHeight = document.querySelector('header')?.offsetHeight || 0;
      const yOffset = -navbarHeight - 20; // Additional offset for spacing
      const y = whyUsSection.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <>
      <PageSEO path="/" />
      
      {/* Hero Section */}
      <Section bg="neutral-50" id="hero" firstSection>
        <div className="relative max-w-7xl mx-auto">
          {/* Background Effects */}
          <div className="absolute inset-0 -top-24 bg-gradient-radial from-primary/10 via-transparent to-transparent pointer-events-none opacity-70" />
          <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=\'30\' height=\'30\' viewBox=\'0 0 30 30\' fill=\'none\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cpath d=\'M1.22676 0C1.91374 0 2.45351 0.539773 2.45351 1.22676C2.45351 1.91374 1.91374 2.45351 1.22676 2.45351C0.539773 2.45351 0 1.91374 0 1.22676C0 0.539773 0.539773 0 1.22676 0Z\' fill=\'rgba(13,148,136,0.07)\'/%3E%3C/svg%3E')] opacity-40" />
          <div className="absolute inset-0 backdrop-blur-[1px]" /> {/* Subtle blur effect */}
          
          {/* Main Content */}
          <div className="relative flex flex-col lg:flex-row items-center justify-between gap-12 pt-8">
            {/* Left Column */}
            <div className="flex-1 text-left">
              {/* Enterprise Tag */}
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-glass text-primary-dark text-sm font-medium mb-8 shadow-sm hover:shadow-md transition-all duration-300 animate-float">
                <span className="flex h-2 w-2 relative">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary/40"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                </span>
                Enterprise-Grade Automation Solutions
              </div>

              {/* Main Headline */}
              <h1 className="text-4xl sm:text-5xl lg:text-7xl font-extrabold text-neutral-900 !leading-[1.1] tracking-tight mb-8">
                Automate Your Business &{' '}
                <span className="relative inline-block">
                  <span className="relative z-10">
                    Unlock{' '}
                    <span className="relative inline-block">
                      <span className="text-gradient">Efficiency</span>
                      <span className="absolute -inset-2 bg-gradient-to-r from-primary/20 via-teal-500/20 to-primary/20 blur-lg opacity-50" />
                    </span>
                  </span>
                </span>
              </h1>

              {/* Subheadline */}
              <p className="text-lg sm:text-xl text-neutral-600 mb-12 leading-relaxed max-w-2xl">
                Stop wasting valuable time on repetitive tasks. We build custom AI-powered automations using n8n and Make.com to streamline operations, boost productivity, and drive growth—no code required.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-wrap gap-6 mb-12">
                {/* Primary CTA */}
                <button 
                  onClick={handleCalendlyClick}
                  className="group relative inline-flex items-center gap-2 px-8 py-4 text-base font-semibold text-white overflow-hidden rounded-lg transition-all duration-500 cursor-pointer"
                  aria-label="Schedule a consultation"
                >
                  {/* Background layers */}
                  <div className="absolute inset-0 bg-gradient-to-r from-primary to-teal-500"></div>
                  <div className="absolute inset-0 bg-gradient-to-r from-primary-light via-teal-400 to-primary opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  
                  {/* Content */}
                  <span className="relative flex items-center gap-2 z-10">
                    Get Started
                    <svg 
                      className="w-5 h-5 group-hover:translate-x-1 transition-transform"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path 
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M13 7l5 5m0 0l-5 5m5-5H6"
                      />
                    </svg>
                  </span>

                  {/* Shine effect */}
                  <div className="absolute inset-0 translate-x-full group-hover:translate-x-[-100%] bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-1000"></div>
                </button>
              </div>
            </div>

            {/* Right Column - Stats Grid */}
            <div className="lg:w-[45%] relative">
              <div className="absolute inset-0 bg-gradient-radial-top from-primary/5 via-transparent to-transparent opacity-70"></div>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { number: '500+', label: 'Workflows Automated', description: 'Streamlined processes' },
                  { number: '98%', label: 'Client Satisfaction', description: 'Happy customers' },
                  { number: '10K+', label: 'Hours Saved Monthly', description: 'Increased efficiency' },
                  { number: '24/7', label: 'Support Available', description: 'Always here to help' }
                ].map((stat, index) => (
                  <div 
                    key={index}
                    className="group relative overflow-hidden bg-glass p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-500 hover:-translate-y-1"
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    <div className="relative">
                      <div className="text-3xl font-bold text-gradient mb-2">{stat.number}</div>
                      <div className="font-semibold text-neutral-800 mb-1">{stat.label}</div>
                      <div className="text-sm text-neutral-500">{stat.description}</div>
                    </div>
                    
                    {/* Decorative bottom border */}
                    <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          {/* Bottom wave decoration */}
          <div className="absolute bottom-0 left-0 right-0 h-24 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTQ0MCIgaGVpZ2h0PSI3NCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNMCAwczMwMCAzNiA3MjAgMzZTMTQ0MCAwIDE0NDAgMHY3NEgwVjB6IiBmaWxsLW9wYWNpdHk9Ii4wMiIgZmlsbD0iI2Y1ZjVmNSIvPjwvc3ZnPg==')] bg-repeat-x bg-bottom opacity-50" />
        </div>
      </Section>

      {/* Problem Section */}
      <Section id="problem" bg="white">
        <PageSEO path="#problem" />
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-neutral-800 mb-6">Drowning in Manual Tasks? <span className="block sm:inline text-primary">There's a Smarter Way.</span></h2>
          <p className="text-base md:text-lg text-neutral-600 leading-relaxed"> {/* Base text-base for mobile */}
            Tedious manual processes hinder growth, drain morale, and lead to costly errors. Disconnected systems and workflow inefficiencies limit your potential. It's time to embrace intelligent automation.
          </p>
        </div>
      </Section>

      {/* Solution Section */}
      <Section id="solution" bg="neutral-50">
        <div className="relative text-center mb-12 md:mb-16">
          <div className="absolute inset-0 -top-24 bg-gradient-radial from-primary/5 via-transparent to-transparent pointer-events-none" />
          <h2 className="relative text-3xl md:text-4xl font-bold text-neutral-800 mb-4">
            Your Solution: 
            <span className="bg-gradient-to-r from-primary to-teal-500 bg-clip-text text-transparent"> Seamless AI Automation</span>
          </h2>
          <p className="text-base md:text-lg text-neutral-600 max-w-3xl mx-auto leading-relaxed">
            We specialize in n8n and Make.com, delivering tailored business automation solutions that connect your apps, orchestrate processes, and integrate AI to transform how you work.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8 text-left">
          <SolutionCard
            icon="🔄"
            title="Expert N8N Automation"
            description="For complex, highly customizable workflows, n8n offers unparalleled power. We build intricate integrations, data manipulations, and backend task automations tailored to your needs, including self-hosted options."
          />
          <SolutionCard
            icon="⚡"
            title="Powerful Make.com Solutions"
            description="Make.com's visual builder and vast connectors excel for streamlining marketing, sales, e-commerce, and reporting. We create effective no-code automations rapidly."
          />
          <SolutionCard
            icon="🧠"
            title="AI-Powered Smarts"
            description="Elevate automation with AI. From GPT-driven content generation to AI data analysis and intelligent decision-making, we embed AI into your workflows for peak efficiency."
          />
        </div>
      </Section>

      {/* Process Section */}
      <Section id="process" bg="white">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-neutral-800 mb-4">Our Simple 3-Step Path to <span className="text-primary">Effortless Automation</span></h2>
          <p className="text-base md:text-lg text-neutral-600 max-w-3xl mx-auto leading-relaxed">{/* Base text-base for mobile */}Our proven process ensures solutions that meet your exact needs and deliver tangible results quickly.</p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            { step: "1", title: "Discovery & Strategy", description: "Free consultation to understand your processes, identify automation opportunities, and define clear goals. We focus on your unique challenges." },
            { step: "2", title: "Custom Design & Build", description: "Our experts design and meticulously build your custom automation solution using n8n or Make.com, followed by rigorous testing." },
            { step: "3", title: "Deployment & Support", description: "Seamless implementation into your live environment with clear documentation, team training, and optional ongoing support for sustained value." }
          ].map(item => (
             <div key={item.step} className="bg-neutral-50 p-8 rounded-xl shadow-card text-center md:text-left transition-all duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-[1.02] hover:shadow-lg">
              <div className="flex justify-center md:justify-start mb-5">
                  <span className="bg-gradient-to-br from-primary to-teal-500 text-white text-xl font-bold w-12 h-12 rounded-full flex items-center justify-center shadow-md">{item.step}</span>
              </div>
              <h3 className="text-xl font-semibold text-neutral-800 mb-3">{item.title}</h3>
              <p className="text-sm text-neutral-600 leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Why Us Section */}
      <Section id="why-us" bg="neutral-50">
         <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-neutral-800 mb-4">Why Partner with <span className="text-primary">N8N and Make AI Automation?</span></h2>
          <p className="text-base md:text-lg text-neutral-600 max-w-3xl mx-auto leading-relaxed">{/* Base text-base for mobile */}We are more than an agency; we are your dedicated automation partners, focused on delivering excellence.</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            { title: "N8N & Make.com Specialists", description: "Deep, focused expertise in these leading platforms ensures highly effective and knowledgeable service." },
            { title: "Custom-Tailored Solutions", description: "Bespoke automation. We craft solutions for your specific business challenges, not one-size-fits-all." },
            { title: "ROI-Driven Automation", description: "Workflows designed for measurable returns: time savings, cost reduction, error minimization, and growth." },
            { title: "Transparent Collaboration", description: "Clear communication and partnership. You're informed and involved throughout the project lifecycle." },
            { title: "AI Integration Expertise", description: "Strategic integration of cutting-edge AI to unlock smarter processes and deeper business insights." },
            { title: "Dedicated Support", description: "We're committed to your long-term success with reliable support and optimization services."}
          ].map((item, index) => (
            <div key={index} className="bg-white p-8 rounded-xl shadow-card hover:shadow-lg transition-all duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-[1.02]">
              <h3 className="text-xl font-semibold text-primary mb-3">{item.title}</h3>
              <p className="text-sm sm:text-base text-neutral-600 leading-relaxed">{/* Base text-sm for mobile */item.description}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Benefits Section */}
      <Section id="benefits" bg="white">
        <PageSEO path="#benefits" />
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-neutral-800 mb-4">Unlock Tangible Business Benefits</h2>
          <p className="text-base md:text-lg text-neutral-600 max-w-3xl mx-auto leading-relaxed">{/* Base text-base for mobile */}Our automation solutions translate directly into significant advantages for your business, starting immediately.</p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-10">
          <BenefitItem icon="🕒" title="Save Countless Hours" description="Reclaim valuable time lost to manual work, freeing your team for strategic initiatives." />
          <BenefitItem icon="✅" title="Reduce Costly Errors" description="Minimize human errors in data entry and processing for greater accuracy and reliability." />
          <BenefitItem icon="📈" title="Boost Productivity" description="Empower your team by automating mundane tasks, allowing focus on high-value activities." />
          <BenefitItem icon="🚀" title="Scale Operations Seamlessly" description="Handle growth and increased workloads efficiently without proportionally increasing headcount." />
          <BenefitItem icon="🔗" title="Improve Data Flow" description="Ensure consistent data synchronization and accuracy across all your critical applications." />
          <BenefitItem icon="⭐" title="Enhance Experiences" description="Deliver faster responses, smoother onboarding, and more efficient service for customers and staff." />
        </div>
      </Section>

      {/* Testimonials Section */}
      <Section id="testimonials" bg="primary-lighter">
        <PageSEO path="#testimonials" />
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-neutral-800 mb-4">Loved by Businesses <span className="text-primary">Like Yours</span></h2>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <TestimonialCard
            quote="Automating our lead processing cut response time by 90% and increased conversions by 15%! Their n8n expertise was invaluable."
            author="Alex Martinez"
            company="CEO, Innovatech Solutions"
          />
          <TestimonialCard
            quote="We were drowning in manual reporting. They built a Make.com solution that saves us 20 hours per week and gives us real-time insights. Absolutely fantastic!"
            author="Samantha Lee"
            company="Operations Manager, Growth Co."
          />
          <TestimonialCard
            quote="The custom AI automation for our content workflow has been a game-changer. Our productivity is through the roof. Highly recommend!"
            author="David Chen"
            company="Marketing Director, Creative Hub"
          />
        </div>
      </Section>
    </>
  );
};

export default HomePage;