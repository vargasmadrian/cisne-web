import React, { useState } from 'react';
import './Newsletter.css';

export default function Newsletter() {
  const [formData, setFormData] = useState({
    nombre: '',
    genero: '',
    email: '',
    codigoPais: '+34',
    telefono: ''
  });
  const [status, setStatus] = useState('idle'); // 'idle' | 'loading' | 'success' | 'error'

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('loading');

    // 🔴 REEMPLAZA ESTE ENLACE con tu ID de Formspree (Ej: https://formspree.io/f/xabcdefg)
    const FORM_ENDPOINT = "https://formspree.io/f/TU_ID_AQUI";

    try {
      if (FORM_ENDPOINT.includes("TU_ID_AQUI")) {
        // Simulación visual si aún no han puesto el enlace verdadero
        setTimeout(() => setStatus('success'), 1500);
        return;
      }

      const response = await fetch(FORM_ENDPOINT, {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        setStatus('success');
        setFormData({ nombre: '', genero: '', email: '', codigoPais: '+34', telefono: '' });
      } else {
        setStatus('error');
      }
    } catch (error) {
      console.error(error);
      setStatus('error');
    }
  };

  if (status === 'success') {
    return (
      <div className="newsletter-container glass-panel" style={{textAlign: 'center', padding: '3rem 1.5rem'}}>
        <h3 className="newsletter-title" style={{color: 'var(--accent-hover)'}}>¡GRACIAS POR SUSCRIBIRTE!</h3>
        <p className="newsletter-subtitle">Revisa tu bandeja de entrada pronto para recibir tu primera rutina gratuita.</p>
        <button onClick={() => setStatus('idle')} className="submit-button" style={{marginTop: '1.5rem', width: 'auto', padding: '0.8rem 2rem'}}>Volver</button>
      </div>
    );
  }

  return (
    <div className="newsletter-container glass-panel">
      <h3 className="newsletter-title">NEWSLETTER</h3>
      <p className="newsletter-subtitle">Drop your email here if you want a free workout every Monday</p>
      
      <form className="newsletter-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label>NOMBRE</label>
          <div className="input-with-icon">
            <span className="icon">👤</span>
            <input type="text" name="nombre" value={formData.nombre} onChange={handleChange} placeholder="Tu nombre" required />
          </div>
        </div>

        <div className="form-group">
          <label>GÉNERO</label>
          <div className="input-with-icon">
            <span className="icon">👥</span>
            <select name="genero" value={formData.genero} onChange={handleChange} required>
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
            <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="yourname@gmail.com" required />
          </div>
        </div>

        <div className="form-group">
          <label>TELÉFONO</label>
          <div className="phone-input">
            <div className="country-code-container">
              <select className="country-code-select" name="codigoPais" value={formData.codigoPais} onChange={handleChange}>
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
              <input type="tel" name="telefono" value={formData.telefono} onChange={handleChange} placeholder="612 345 678" required />
            </div>
          </div>
        </div>

        {status === 'error' && <p style={{color: '#ff4d4d', fontSize: '0.9rem', marginBottom: '1rem'}}>Hubo un error al enviar tu información. Inténtalo de nuevo.</p>}

        <button type="submit" className="submit-button" disabled={status === 'loading'}>
          {status === 'loading' ? 'Enviando...' : 'Registrarse'}
        </button>
      </form>
      
      <p className="disclaimer">
        Tu información está segura y nunca será compartida con terceros. Sin spam, nunca.
      </p>
    </div>
  );
}
