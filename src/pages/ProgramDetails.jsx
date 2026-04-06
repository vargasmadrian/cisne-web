import React, { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import { useNavigate } from 'react-router-dom';
import './ProgramDetails.css';

export default function ProgramDetails() {
  const navigate = useNavigate();
  const base = import.meta.env.BASE_URL;
  const [selectedImage, setSelectedImage] = useState(null);

  // Scroll to top on load and manage body scroll lock for lightbox
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    if (selectedImage) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => { document.body.style.overflow = 'unset'; };
  }, [selectedImage]);

  return (
    <div className="program-details-container">
      {/* Background Hero Image */}
      <img src={`${base}images/fotoplaya_hd.png`} alt="Fondo" className="hero-background-image" />
      <div className="hero-dark-overlay"></div>

      <button className="back-button" onClick={() => navigate(-1)} aria-label="Volver">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <line x1="19" y1="12" x2="5" y2="12"></line>
          <polyline points="12 19 5 12 12 5"></polyline>
        </svg>
      </button>

      <div className="content-wrapper">
        
        {/* Block 1: Hero Floating Card */}
        <div className="hero-floating-card">
          <h1>GLÚTEOS Y PIERNAS DE ACERO</h1>
          <h2 className="subtitle">PROGRAMA DE TRANSFORMACIÓN EN 4 SEMANAS</h2>
          
          <div className="pills-container">
            <span className="pill"><span className="icon">⏱️</span> 4 semanas</span>
            <span className="pill"><span className="icon">🔥</span> 16 entrenamientos</span>
            <span className="pill"><span className="icon">🏠</span> Casa o Gym</span>
          </div>

          <button className="cta-button primary" onClick={() => alert('Próximamente: Redirección de Pago (ej. Stripe)')}>
            Únete Ahora — $29.99
          </button>
          <a href="#" className="secondary-link">¿Tienes un pase gratuito?</a>
        </div>

        {/* Block 2: Lo Que Incluye */}
        <section className="split-section">
          <div className="split-text">
            <h3 className="section-title">LO QUE INCLUYE</h3>
            <ul className="benefits-list">
              <li><span className="check">✓</span> <strong>Glúteos más fuertes y tonificados</strong> con ejercicios enfocados.</li>
              <li><span className="check">✓</span> <strong>Mejora de la fuerza general</strong> del tren inferior a largo plazo.</li>
              <li><span className="check">✓</span> <strong>Técnica de ejercicio optimizada</strong> y guiada para no lastimarte.</li>
              <li><span className="check">✓</span> <strong>Aumento de resistencia</strong> muscular en cada rutina.</li>
              <li><span className="check">🏆</span> <strong>Progresión gradual</strong> para resultados sostenibles.</li>
            </ul>
          </div>
          <div className="split-image">
            <img src={`${base}images/fotoplaya_hd.png`} style={{objectPosition: 'center 40%'}} alt="Entrenamiento" />
          </div>
        </section>

        {/* Block 3: Sobre Este Challenge */}
        <section className="split-section reverse">
          <div className="split-image">
            <img src={`${base}images/Cisne.png`} style={{objectPosition: 'top'}} alt="Cisne Almeida" />
          </div>
          <div className="split-text">
            <h3 className="section-title">SOBRE ESTE CHALLENGE</h3>
            <p>Prepárate para esculpir y fortalecer tu cuerpo a través de un enfoque estructurado. Este programa está diseñado meticulosamente para enfocarse en tus glúteos y piernas asegurando que cada entrenamiento te acerque a la versión más fuerte y tonificada de ti misma.</p>
            <p>No necesitas experiencia previa, solo las ganas de dar lo mejor de ti y comprometerte durante 4 semanas. ¡Prepárate para desafiar tus límites!</p>
          </div>
        </section>

        {/* Block 4: Resultados y Transformaciones */}
        <section className="results-section">
          <h3 className="section-title">RESULTADOS <span className="star-icon">⭐</span></h3>
          <div className="carousel-container">
            <div className="carousel-item" onClick={() => setSelectedImage(`${base}images/Gemini_Generated_Image_.png`)} style={{cursor: 'zoom-in'}}>
              <img src={`${base}images/Gemini_Generated_Image_.png`} style={{objectFit: 'cover'}} alt="Transformación Antes y Después" />
            </div>
            <div className="carousel-item" onClick={() => setSelectedImage(`${base}images/WhatsApp Image 2026-03-01 at 14.01.30.jpeg`)} style={{cursor: 'zoom-in'}}>
              <img src={`${base}images/WhatsApp Image 2026-03-01 at 14.01.30.jpeg`} style={{objectFit: 'cover'}} alt="Transformación Cliente" />
            </div>
          </div>
        </section>

        {/* Block 5: Qué Hay Dentro (The Curriculum) */}
        <section className="curriculum-section">
          <h3 className="section-title">QUÉ HAY DENTRO</h3>
          <div className="curriculum-grid">
            <div className="curriculum-card">
              <h4>SEMANA 1</h4>
              <p className="week-title">Fundamentos y Activación</p>
              <div className="week-meta">4 Entrenos · 3 Descanso</div>
              <div className="progress-bar"><div className="fill w-25"></div></div>
            </div>
            <div className="curriculum-card">
              <h4>SEMANA 2</h4>
              <p className="week-title">Sobrecarga Progresiva</p>
              <div className="week-meta">4 Entrenos · 3 Descanso</div>
              <div className="progress-bar"><div className="fill w-50"></div></div>
            </div>
            <div className="curriculum-card">
              <h4>SEMANA 3</h4>
              <p className="week-title">Pico del Desafío</p>
              <div className="week-meta">4 Entrenos · Máxima Intensidad</div>
              <div className="progress-bar"><div className="fill w-75"></div></div>
            </div>
            <div className="curriculum-card">
              <h4>SEMANA 4</h4>
              <p className="week-title">Consolidación</p>
              <div className="week-meta">4 Entrenos · Evaluación final</div>
              <div className="progress-bar"><div className="fill w-100"></div></div>
            </div>
          </div>
        </section>

        {/* Block 6: Final CTA */}
        <section className="footer-cta">
          <button className="cta-button primary large" onClick={() => alert('Próximamente: Redirección de Pago')}>
            Únete Ahora — $29.99
          </button>
          <a href="#" className="secondary-link">¿Tienes un pase gratuito?</a>
          <p className="credit">POWERED BY CISNE ALMEIDA</p>
        </section>

      </div>

      {/* Global Lightbox for Program Details */}
      {selectedImage && createPortal(
        <div className="lightbox-modal" onClick={() => setSelectedImage(null)}>
          <img src={selectedImage} alt="Transformación Ampliada" />
        </div>,
        document.body
      )}
    </div>
  );
}
