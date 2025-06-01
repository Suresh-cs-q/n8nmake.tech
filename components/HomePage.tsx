import React from 'react';
import { motion } from 'framer-motion';
import Section from './Section';
import PageSEO from './PageSEO';
import Button from './Button';

interface BenefitItemProps {
  icon: string;
  title: string;
  description: string;
}

const BenefitItem: React.FC<BenefitItemProps> = ({ icon, title, description }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5 }}
    className="group flex flex-col items-center text-center p-8 bg-white rounded-2xl shadow-card hover:shadow-card-hover transition-all duration-300"
  >
    <span className="inline-flex items-center justify-center w-16 h-16 mb-6 rounded-2xl bg-primary-lighter text-primary text-3xl shadow-lg shadow-primary/5 group-hover:scale-110 transition-transform duration-300">
      {icon}
    </span>
    <h3 className="text-xl font-semibold text-neutral-800 mb-3">{title}</h3>
    <p className="text-neutral-600 leading-relaxed">{description}</p>
  </motion.div>
);

interface SolutionCardProps {
  icon: string;
  title: string;
  description: string;
}

const SolutionCard: React.FC<SolutionCardProps> = ({ icon, title, description }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5 }}
    className="flex flex-col p-8 bg-white rounded-2xl shadow-card hover:shadow-card-hover transition-all duration-300"
  >
    <span className="text-4xl mb-6">{icon}</span>
    <h3 className="text-xl font-semibold text-neutral-800 mb-3">{title}</h3>
    <p className="text-neutral-600 leading-relaxed">{description}</p>
  </motion.div>
);

interface TestimonialCardProps {
  quote: string;
  author: string;
  company: string;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({ quote, author, company }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5 }}
    className="bg-white p-8 rounded-2xl shadow-card h-full flex flex-col justify-between hover:shadow-card-hover transition-all duration-300"
  >
    <blockquote className="text-neutral-600 italic text-lg leading-relaxed mb-6 relative">
      <span className="absolute -left-4 -top-2 text-5xl text-primary opacity-20">"</span>
      {quote}
    </blockquote>
    <div>
      <p className="text-neutral-800 font-semibold">{author}</p>
      <p className="text-neutral-500">{company}</p>
    </div>
  </motion.div>
);

const HomePage: React.FC = () => {
  const calendlyLink = "https://calendly.com/n8n-make-ai/30min";

  const handleCalendlyClick = () => {
    window.open(calendlyLink, '_blank', 'noopener,noreferrer');
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <>
      <PageSEO path="/" />
      
      {/* Hero Section */}
      <Section bg="neutral-50" id="hero" firstSection>
        <div className="relative max-w-7xl mx-auto pt-20 pb-16 sm:pt-24 sm:pb-20">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={containerVariants}
            className="relative flex flex-col lg:flex-row items-center justify-between gap-12"
          >
            {/* Left Column */}
            <motion.div variants={itemVariants} className="flex-1 text-left">
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/80 backdrop-blur-sm text-primary text-sm font-medium mb-8 shadow-sm hover:shadow-md transition-all duration-300"
              >
                <span className="flex h-2 w-2 relative">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary/40"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                </span>
                Enterprise-Grade Automation Solutions
              </motion.div>

              <motion.h1
                variants={itemVariants}
                className="text-4xl sm:text-5xl lg:text-6xl font-bold text-neutral-900 !leading-[1.1] tracking-tight mb-8"
              >
                Automate Your Business &{' '}
                <span className="relative inline-block">
                  <span className="relative z-10">
                    Unlock{' '}
                    <span className="relative inline-block">
                      <span className="text-gradient">Efficiency</span>
                      <span className="absolute -inset-2 bg-gradient-to-r from-primary/20 via-primary-light/20 to-primary/20 blur-lg opacity-50" />
                    </span>
                  </span>
                </span>
              </motion.h1>

              <motion.p
                variants={itemVariants}
                className="text-lg sm:text-xl text-neutral-600 mb-12 leading-relaxed max-w-2xl"
              >
                Stop wasting valuable time on repetitive tasks. We build custom AI-powered automations using n8n and Make.com to streamline operations, boost productivity, and drive growth—no code required.
              </motion.p>

              <motion.div
                variants={itemVariants}
                className="flex flex-wrap gap-6 mb-12"
              >
                <Button
                  onClick={handleCalendlyClick}
                  variant="primary"
                  size="lg"
                  className="group relative overflow-hidden shadow-xl shadow-primary/20 hover:shadow-primary/30"
                >
                  <span className="relative flex items-center gap-2">
                    Get Started
                    <motion.svg
                      className="w-5 h-5 transition-transform group-hover:translate-x-1"
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
                    </motion.svg>
                  </span>
                </Button>
              </motion.div>
            </motion.div>

            {/* Right Column - Stats Grid */}
            <motion.div
              variants={itemVariants}
              className="lg:w-[45%] relative"
            >
              <div className="absolute inset-0 bg-gradient-radial from-primary/5 via-transparent to-transparent opacity-70" />
              <div className="grid grid-cols-2 gap-4">
                {[
                  { number: '500+', label: 'Workflows Automated', description: 'Streamlined processes' },
                  { number: '98%', label: 'Client Satisfaction', description: 'Happy customers' },
                  { number: '10K+', label: 'Hours Saved Monthly', description: 'Increased efficiency' },
                  { number: '24/7', label: 'Support Available', description: 'Always here to help' }
                ].map((stat, index) => (
                  <motion.div
                    key={index}
                    variants={itemVariants}
                    className="group relative overflow-hidden bg-white/80 backdrop-blur-sm p-6 rounded-2xl shadow-card hover:shadow-card-hover transition-all duration-300"
                  >
                    <div className="relative">
                      <div className="text-3xl font-bold text-gradient mb-2">{stat.number}</div>
                      <div className="font-semibold text-neutral-800 mb-1">{stat.label}</div>
                      <div className="text-sm text-neutral-600">{stat.description}</div>
                    </div>
                    <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </Section>

      {/* Problem Section */}
      <Section id="problem" bg="white">
        <PageSEO path="#problem" />
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mx-auto text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-neutral-800 mb-6">
            Drowning in Manual Tasks? <span className="block sm:inline text-primary">There's a Smarter Way.</span>
          </h2>
          <p className="text-lg text-neutral-600 leading-relaxed">
            Tedious manual processes hinder growth, drain morale, and lead to costly errors. Disconnected systems and workflow inefficiencies limit your potential. It's time to embrace intelligent automation.
          </p>
        </motion.div>
      </Section>

      {/* Solution Section */}
      <Section id="solution" bg="neutral-50">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-neutral-800 mb-4">
            Your Solution: 
            <span className="bg-gradient-to-r from-primary to-primary-light bg-clip-text text-transparent"> Seamless AI Automation</span>
          </h2>
          <p className="text-lg text-neutral-600 max-w-3xl mx-auto leading-relaxed">
            We specialize in n8n and Make.com, delivering tailored business automation solutions that connect your apps, orchestrate processes, and integrate AI to transform how you work.
          </p>
        </motion.div>
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
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-neutral-800 mb-4">
            Our Simple 3-Step Path to <span className="text-primary">Effortless Automation</span>
          </h2>
          <p className="text-lg text-neutral-600 max-w-3xl mx-auto leading-relaxed">
            Our proven process ensures solutions that meet your exact needs and deliver tangible results quickly.
          </p>
        </motion.div>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            { step: "1", title: "Discovery & Strategy", description: "Free consultation to understand your processes, identify automation opportunities, and define clear goals. We focus on your unique challenges." },
            { step: "2", title: "Custom Design & Build", description: "Our experts design and meticulously build your custom automation solution using n8n or Make.com, followed by rigorous testing." },
            { step: "3", title: "Deployment & Support", description: "Seamless implementation into your live environment with clear documentation, team training, and optional ongoing support for sustained value." }
          ].map((item, index) => (
            <motion.div
              key={item.step}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-neutral-50 p-8 rounded-2xl shadow-card hover:shadow-card-hover transition-all duration-300"
            >
              <div className="flex justify-center md:justify-start mb-5">
                <span className="bg-gradient-to-br from-primary to-primary-light text-white text-xl font-bold w-12 h-12 rounded-full flex items-center justify-center shadow-lg">
                  {item.step}
                </span>
              </div>
              <h3 className="text-xl font-semibold text-neutral-800 mb-3">{item.title}</h3>
              <p className="text-neutral-600 leading-relaxed">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Why Us Section */}
      <Section id="why-us" bg="neutral-50">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-neutral-800 mb-4">
            Why Partner with <span className="text-primary">N8N and Make AI Automation?</span>
          </h2>
          <p className="text-lg text-neutral-600 max-w-3xl mx-auto leading-relaxed">
            We are more than an agency; we are your dedicated automation partners, focused on delivering excellence.
          </p>
        </motion.div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            { title: "N8N & Make.com Specialists", description: "Deep, focused expertise in these leading platforms ensures highly effective and knowledgeable service." },
            { title: "Custom-Tailored Solutions", description: "Bespoke automation. We craft solutions for your specific business challenges, not one-size-fits-all." },
            { title: "ROI-Driven Automation", description: "Workflows designed for measurable returns: time savings, cost reduction, error minimization, and growth." },
            { title: "Transparent Collaboration", description: "Clear communication and partnership. You're informed and involved throughout the project lifecycle." },
            { title: "AI Integration Expertise", description: "Strategic integration of cutting-edge AI to unlock smarter processes and deeper business insights." },
            { title: "Dedicated Support", description: "We're committed to your long-term success with reliable support and optimization services." }
          ].map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white p-8 rounded-2xl shadow-card hover:shadow-card-hover transition-all duration-300"
            >
              <h3 className="text-xl font-semibold text-primary mb-3">{item.title}</h3>
              <p className="text-neutral-600 leading-relaxed">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Benefits Section */}
      <Section id="benefits" bg="white">
        <PageSEO path="#benefits" />
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-neutral-800 mb-4">Unlock Tangible Business Benefits</h2>
          <p className="text-lg text-neutral-600 max-w-3xl mx-auto leading-relaxed">
            Our automation solutions translate directly into significant advantages for your business, starting immediately.
          </p>
        </motion.div>
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
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-neutral-800 mb-4">
            Loved by Businesses <span className="text-primary">Like Yours</span>
          </h2>
        </motion.div>
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