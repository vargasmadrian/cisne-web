import React from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import ProgramDetails from './pages/ProgramDetails';
import WhatsappButton from './components/WhatsappButton';
import './App.css';

function App() {
  const base = import.meta.env.BASE_URL;
  return (
    <HashRouter>
      <video className="video-background" autoPlay loop muted playsInline>
        <source src={`${base}videos/ssstik.io_1775490866311.mp4`} type="video/mp4" />
      </video>
      <div className="video-overlay"></div>
      <div className="ambient-glow"></div>
      <div className="ambient-glow glow-bottom"></div>
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/programa" element={<ProgramDetails />} />
      </Routes>
      <WhatsappButton />
    </HashRouter>
  );
}

export default App;
