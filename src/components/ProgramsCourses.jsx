import React from 'react';
import './ProgramsCourses.css';

export default function ProgramsCourses() {
  const base = import.meta.env.BASE_URL;
  
  return (
    <div className="programs-container">
      <h3 className="lined-title">PROGRAMS & COURSES</h3>
      
      <div 
        className="program-card" 
        onClick={() => alert('¡Redirigiendo a los detalles del programa!')}>
        <img 
          src={`${base}images/fotoplaya_hd.png`} 
          alt="Programa de Transformación" 
          className="program-bg" 
        />
        <div className="program-overlay"></div>
        
        <div className="share-button" onClick={(e) => {
            e.stopPropagation();
            alert('¡Enlace copiado al portapapeles!');
          }}>
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="18" cy="5" r="3"></circle>
            <circle cx="6" cy="12" r="3"></circle>
            <circle cx="18" cy="19" r="3"></circle>
            <line x1="8.59" y1="13.51" x2="15.42" y2="17.49"></line>
            <line x1="15.41" y1="6.51" x2="8.59" y2="10.49"></line>
          </svg>
        </div>

        <div className="program-info">
          <h4>Glúteos y piernas de Acero: Programa de Transformación en 4 Semanas</h4>
          <p>4 weeks · $29.99</p>
        </div>
      </div>
    </div>
  );
}
