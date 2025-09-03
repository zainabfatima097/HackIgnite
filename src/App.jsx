// src/App.jsx
import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Timeline from './components/Timeline';
import Registration from './components/Registration';
import Prizes from './components/Prizes';
import FAQ from './components/FAQ';
import Footer from './components/Footer';
import MagicCursorTrail from './components/MagicCursorTrail';
import './App.css';

function App() {
  return (
    <div className="App">
      <MagicCursorTrail />
      <Navbar />
      <Hero />
      <About />
      <Timeline />
      <Registration />
      <Prizes />
      <FAQ />
      <Footer />
    </div>
  );
}

export default App;