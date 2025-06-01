import React from 'react';
import { motion } from 'framer-motion';
import Button from './Button';
import Section from './Section';

const Footer: React.FC = () => {
  const calendlyLink = "https://calendly.com/n8n-make-ai/30min";
  const phoneNumber = "+92 313 1136263";
  const emailAddress = "business@n8nmake.tech";

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
    <footer className="relative bg-neutral-900">
      <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:20px_20px]" />
      <div className="relative">
        <Section bg="neutral-900" id="contact" className="!py-20 md:!py-28">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
            className="text-center max-w-3xl mx-auto px-4"
          >
            <motion.h2
              variants={itemVariants}
              className="text-3xl md:text-4xl font-bold text-white mb-8"
            >
              Ready to Automate Your Success with{' '}
              <br className="hidden sm:block" />
              <span className="bg-gradient-to-r from-primary-light via-primary to-primary-dark bg-clip-text text-transparent">
                N8N and Make.com?
              </span>
            </motion.h2>
            
            <motion.p
              variants={itemVariants}
              className="text-lg text-neutral-300 mb-12 leading-relaxed"
            >
              Don't let manual processes limit your potential. Take the first step towards a more efficient, productive, and scalable future. Contact us today to discover how our expert automation services can transform your operations.
            </motion.p>

            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-6 mb-12"
            >
              <Button 
                href={calendlyLink} 
                variant="primary" 
                size="lg"
                className="w-full sm:w-auto px-8 py-4 shadow-xl shadow-primary/20 hover:shadow-primary/30 transition-all duration-300"
              >
                Get Your Free Consultation
              </Button>
            </motion.div>

            <motion.div
              variants={containerVariants}
              className="grid md:grid-cols-2 gap-6 max-w-2xl mx-auto"
            >
              <motion.div
                variants={itemVariants}
                className="group bg-white/5 backdrop-blur-sm rounded-xl p-6 hover:bg-white/[0.07] transition-all duration-300"
              >
                <p className="text-neutral-400 mb-2 text-sm uppercase tracking-wider font-medium">
                  Email Us
                </p>
                <a 
                  href={`mailto:${emailAddress}`} 
                  className="text-primary-light text-lg font-medium hover:text-primary transition-colors duration-300 flex items-center justify-center gap-2 group-hover:scale-105 transform"
                >
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  {emailAddress}
                </a>
              </motion.div>

              <motion.div
                variants={itemVariants}
                className="group bg-white/5 backdrop-blur-sm rounded-xl p-6 hover:bg-white/[0.07] transition-all duration-300"
              >
                <p className="text-neutral-400 mb-2 text-sm uppercase tracking-wider font-medium">
                  Call Us
                </p>
                <a 
                  href={`tel:${phoneNumber.replace(/\s/g, '')}`} 
                  className="text-primary-light text-lg font-medium hover:text-primary transition-colors duration-300 flex items-center justify-center gap-2 group-hover:scale-105 transform"
                >
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  {phoneNumber}
                </a>
              </motion.div>
            </motion.div>
          </motion.div>
        </Section>

        <div className="border-t border-white/10 backdrop-blur-sm">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="flex flex-col md:flex-row justify-between items-center gap-4"
            >
              <p className="text-neutral-400 text-sm">
                &copy; {new Date().getFullYear()} N8N & Make AI Automation. All Rights Reserved.
              </p>
              <div className="flex items-center space-x-6">
                <a 
                  href="#privacy" 
                  className="text-sm text-neutral-400 hover:text-primary-light transition-colors duration-300"
                >
                  Privacy Policy
                </a>
                <a 
                  href="#terms" 
                  className="text-sm text-neutral-400 hover:text-primary-light transition-colors duration-300"
                >
                  Terms of Service
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;