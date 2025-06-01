import React from 'react';
import { HelmetProvider } from 'react-helmet-async';
import { AnimatePresence } from 'framer-motion';
import Navbar from './components/Navbar';
import HomePage from '@/components/HomePage';
import Footer from './components/Footer';
import SEO from './components/SEO';

const App: React.FC = () => {
  return (
    <HelmetProvider>
      <div className="flex flex-col min-h-screen bg-neutral-50">
        <SEO />
        <Navbar />
        <AnimatePresence mode="wait">
          <main className="flex-grow relative">
            <div className="absolute inset-0 pointer-events-none bg-gradient-to-b from-primary/[0.02] to-transparent" />
            <HomePage />
          </main>
        </AnimatePresence>
        <Footer />
      </div>
    </HelmetProvider>
  );
};

export default App;