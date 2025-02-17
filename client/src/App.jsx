import React from 'react';
import Header from './components/Header/header';
import HeroSection from './components/HeroSection/herosection';
import Features from './components/Features/feature';
import './App.css';

const App = () => {
  return (
    <div className="app">
      <Header />
      <HeroSection />
      <Features />
    </div>
  );
};

export default App;