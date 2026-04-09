import React from 'react';
import './ProfileHeader.css';

export default function ProfileHeader() {
  const base = import.meta.env.BASE_URL;
  return (
    <div className="profile-header">
      <div className="profile-image-container">
        <img 
          src={`${base}images/Cisne.png`} 
          alt="Cisne Almeida" 
          className="profile-image" 
        />
        <div className="glow-ring"></div>
      </div>
      <h1 className="profile-name">Cisne Almeida</h1>
      <p className="profile-bio">Fitness Coach | Transforma tu físico desde casa o en el gym 💪✨</p>
      <div className="metrics">
        <div className="metric">
          <span className="metric-number">70K+</span>
          <span className="metric-label">Followers</span>
        </div>
        <div className="metric">
          <span className="metric-number">1k+</span>
          <span className="metric-label">Alumnos</span>
        </div>
      </div>
    </div>
  );
}
