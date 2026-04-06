import React from 'react';
import './SuccessCases.css';

export default function SuccessCases() {
  const images = [
    '/images/WhatsApp Image 2026-03-01 at 14.01.30.jpeg',
    '/images/Gemini_Generated_Image_.png'
  ];

  return (
    <div className="success-cases glass-panel">
      <h3 className="section-title">Resultados 🔥</h3>
      <div className="cases-grid">
        {images.map((img, index) => (
          <div key={index} className="case-card">
            <img src={img} alt={`Caso de éxito ${index + 1}`} loading="lazy" />
          </div>
        ))}
      </div>
    </div>
  );
}
