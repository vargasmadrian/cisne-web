import React from 'react';
import './Newsletter.css';

export default function Newsletter() {
  return (
    <div className="newsletter-container glass-panel">
      <h3 className="newsletter-title">NEWSLETTER</h3>
      <p className="newsletter-subtitle">Drop your email here if you want a free workout every Monday</p>
      
      <form className="newsletter-form" onSubmit={(e) => e.preventDefault()}>
        <div className="form-group">
          <label>NOMBRE</label>
          <div className="input-with-icon">
            <span className="icon">👤</span>
            <input type="text" placeholder="Tu nombre" />
          </div>
        </div>

        <div className="form-group">
          <label>GÉNERO</label>
          <div className="input-with-icon">
            <span className="icon">👥</span>
            <select defaultValue="">
              <option value="" disabled hidden>Selecciona género</option>
              <option value="femenino">Femenino</option>
              <option value="masculino">Masculino</option>
            </select>
          </div>
        </div>

        <div className="form-group">
          <label>EMAIL</label>
          <div className="input-with-icon">
            <span className="icon">✉️</span>
            <input type="email" placeholder="yourname@gmail.com" />
          </div>
        </div>

        <div className="form-group">
          <label>TELÉFONO</label>
          <div className="phone-input">
            <div className="country-code">
              <span className="flag">🇪🇸</span> +34 ⌄
            </div>
            <div className="input-with-icon no-bg">
              <span className="icon">📞</span>
              <input type="tel" placeholder="612 345 678" />
            </div>
          </div>
        </div>

        <button type="submit" className="submit-button">Registrarse</button>
      </form>
      
      <p className="disclaimer">
        Tu información está segura y nunca será compartida con terceros. Sin spam, nunca.
      </p>
    </div>
  );
}
