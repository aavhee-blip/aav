
import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import TrainingSection from './components/TrainingSection';
import AnalysisSection from './components/AnalysisSection';
import BrandingSection from './components/BrandingSection';
import MedicalSection from './components/MedicalSection';
import CareerSection from './components/CareerSection';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-24 md:pt-32">
        <Hero />
        <TrainingSection />
        <AnalysisSection />
        <BrandingSection />
        <MedicalSection />
        <CareerSection />
      </main>
      <Footer />
    </div>
  );
};

export default App;
