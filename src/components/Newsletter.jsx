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
            <div className="country-code-container">
              <select className="country-code-select" defaultValue="+34">
                <option value="+34">🇪🇸 +34</option>
                <option value="+593">🇪🇨 +593</option>
                <option value="+52">🇲🇽 +52</option>
                <option value="+57">🇨🇴 +57</option>
                <option value="+54">🇦🇷 +54</option>
                <option value="+56">🇨🇱 +56</option>
                <option value="+51">🇵🇪 +51</option>
                <option value="+1">🇺🇸 +1</option>
              </select>
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
