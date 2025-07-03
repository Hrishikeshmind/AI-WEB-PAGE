import React from 'react';
import Navigation from './components/Navigation';
import HeroSection from './components/HeroSection';
import CameraSection from './components/CameraSection';
import ColorShowcase from './components/ColorShowcase';
import PrivacySection from './components/PrivacySection';
import PreOrderSection from './components/PreOrderSection';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <HeroSection />
      <CameraSection />
      <ColorShowcase />
      <PrivacySection />
      <PreOrderSection />
      <Footer />
    </div>
  );
}

export default App;