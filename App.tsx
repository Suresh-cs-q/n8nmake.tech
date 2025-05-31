import React from 'react';
import Navbar from './components/Navbar';
import HomePage from '@/components/HomePage'; // Changed to aliased path
import Footer from './components/Footer';
import SEO from './components/SEO';

const App: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen overflow-hidden">
      <SEO />
      <Navbar />
      <main className="flex-grow relative">
        <div className="absolute inset-0 pointer-events-none bg-gradient-to-b from-primary/[0.02] to-transparent" />
        <HomePage />
      </main>
      <Footer />
    </div>
  );
};

export default App;