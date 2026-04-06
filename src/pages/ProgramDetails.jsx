import React from 'react';
import { useNavigate } from 'react-router-dom';
import './ProgramDetails.css';

export default function ProgramDetails() {
  const navigate = useNavigate();
  const base = import.meta.env.BASE_URL;

  return (
    <div className="program-details-container">
      <button className="back-button" onClick={() => navigate(-1)}>
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <line x1="19" y1="12" x2="5" y2="12"></line>
          <polyline points="12 19 5 12 12 5"></polyline>
        </svg>
      </button>

      <div className="hero-section">
        <img 
          src={`${base}images/fotoplaya_hd.png`} 
          alt="Programa de Glúteos y Piernas" 
          className="hero-image" 
        />
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <span className="badge">NUEVO RETO</span>
          <h1>Glúteos y piernas de Acero</h1>
          <p className="subtitle">Programa de Transformación en 4 Semanas</p>
        </div>
      </div>

      <div className="details-content">
        <div className="meta-info">
          <div className="meta-item">
            <span className="meta-icon">📅</span>
            <span className="meta-text">4 Semanas</span>
          </div>
          <div className="meta-item">
            <span className="meta-icon">💪</span>
            <span className="meta-text">Principiante a Avanzado</span>
          </div>
          <div className="meta-item">
            <span className="meta-icon">🏠</span>
            <span className="meta-text">En casa o gimnasio</span>
          </div>
        </div>

        <section className="info-section">
          <h3>¿Qué incluye el programa?</h3>
          <ul className="benefits-list">
            <li>
              <span className="check">✓</span>
              <strong>Rutinas exclusivas</strong> diseñadas específicamente para maximizar el crecimiento de glúteos y piernas.
            </li>
            <li>
              <span className="check">✓</span>
              <strong>Videos explicativos</strong> por Cisne con la técnica correcta de cada ejercicio.
            </li>
            <li>
              <span className="check">✓</span>
              <strong>Guía de alimentación</strong> básica para potenciar resultados musculares.
            </li>
            <li>
              <span className="check">✓</span>
              <strong>Acceso de por vida</strong> a la plataforma del reto.
            </li>
          </ul>
        </section>

        <section className="info-section highlight">
          <h3>Precio Exclusivo</h3>
          <div className="price-tag">
            <span className="currency">$</span>
            <span className="amount">29.99</span>
            <span className="period">USD</span>
          </div>
          <p className="price-note">Pago único seguro a través de Stripe</p>
        </section>

        <button className="cta-button" onClick={() => alert('Próximamente: Integración con Stripe Checkout')}>
          Obtener Acceso Inmediato
        </button>
      </div>
    </div>
  );
}
