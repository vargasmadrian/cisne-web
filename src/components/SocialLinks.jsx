import React from 'react';
import './SocialLinks.css';

export default function SocialLinks() {
  const socials = [
    { name: 'Instagram', handle: '@cisne_199', url: 'https://www.instagram.com/cisne_199/' },
    { name: 'TikTok', handle: '@itsciss919', url: 'https://www.tiktok.com/@itsciss919' }
  ];

  return (
    <div className="social-links-container">
      {socials.map((social) => (
        <a key={social.name} href={social.url} target="_blank" rel="noreferrer" className="social-button glass-panel">
          <span className="social-name">{social.name}</span>
          <span className="social-handle">{social.handle}</span>
        </a>
      ))}
    </div>
  );
}
