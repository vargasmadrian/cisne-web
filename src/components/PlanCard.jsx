import React from 'react';
import './PlanCard.css';

export default function PlanCard() {
  const base = import.meta.env.BASE_URL;

  return (
    <div className="plan-card glass-panel">
      <div className="pulse-badge">🔥 Más Vendido</div>
      
      <div className="plan-image-container">
        <img 
          src={`${base}images/rutina4dias.png`} 
          alt="Rutina Completa 4 Días" 
          className="plan-image"
        />
        <div className="plan-image-overlay"></div>
        <div className="plan-image-price">
          <span className="old-price">$20</span>
          <span className="new-price">$10</span>
        </div>
      </div>

      <div className="plan-body">
        <h2 className="plan-title">RUTINA COMPLETA 4 DÍAS</h2>
        <p className="plan-subtitle">+ videos explicativos</p>
        
        <ul className="features-list">
          <li><span className="feature-icon">📅</span> Plan estructurado semanal</li>
          <li><span className="feature-icon">▶️</span> Videos explicativos en HD</li>
          <li><span className="feature-icon">✅</span> Rutina completa Torso + Pierna</li>
          <li><span className="feature-icon">♾️</span> Acceso de por vida</li>
        </ul>

        <button className="buy-button" onClick={() => alert('Próximamente: Integración con Stripe')}>
          Buy Now
        </button>
      </div>
    </div>
  );
}
