import React from 'react';
import './PlanCard.css';

export default function PlanCard() {
  return (
    <div className="plan-card glass-panel">
      <div className="pulse-badge">🔥 Más Vendido</div>
      <h2 className="plan-title">Rutina Completa 4 Días</h2>
      <div className="price-tag">
        <span className="currency">$</span>
        <span className="amount">10</span>
        <span className="period">/ único pago</span>
      </div>
      <ul className="features-list">
        <li>✅ Enfoque en Glúteos y Piernas</li>
        <li>✅ Rutina para Tren Superior</li>
        <li>✅ Videos demostrativos</li>
        <li>✅ Acceso de por vida</li>
      </ul>
      <button className="buy-button" onClick={() => alert('¡Pronto habilitaremos los pagos!')}>
        Obtener Rutina Ahora
      </button>
    </div>
  );
}
