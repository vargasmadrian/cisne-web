import React, { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import './SuccessCases.css';

export default function SuccessCases() {
  const base = import.meta.env.BASE_URL;
  const [selectedImage, setSelectedImage] = useState(null);

  const images = [
    `${base}images/WhatsApp Image 2026-03-01 at 14.01.30.jpeg`,
    `${base}images/Gemini_Generated_Image_.png`
  ];

  useEffect(() => {
    if (selectedImage) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => { document.body.style.overflow = 'unset'; };
  }, [selectedImage]);

  return (
    <>
      <div className="success-cases glass-panel">
        <h3 className="section-title">Resultados 🔥</h3>
        <div className="cases-grid">
          {images.map((img, index) => (
            <div key={index} className="case-card" onClick={() => setSelectedImage(img)} style={{cursor: 'zoom-in'}}>
              <img src={img} alt={`Caso de éxito ${index + 1}`} loading="lazy" />
            </div>
          ))}
        </div>
      </div>

      {/* Global Portal para evitar conflictos de Position Fixed */}
      {selectedImage && createPortal(
        <div className="lightbox-modal" onClick={() => setSelectedImage(null)}>
          <img src={selectedImage} alt="Transformación Ampliada" />
        </div>,
        document.body
      )}
    </>
  );
}
