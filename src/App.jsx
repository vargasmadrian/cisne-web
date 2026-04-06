import React from 'react';
import ProfileHeader from './components/ProfileHeader';
import SocialLinks from './components/SocialLinks';
import PlanCard from './components/PlanCard';
import SuccessCases from './components/SuccessCases';
import Newsletter from './components/Newsletter';
import './App.css';

function App() {
  return (
    <>
      <video className="video-background" autoPlay loop muted playsInline>
        <source src="/videos/ssstik.io_1775490866311.mp4" type="video/mp4" />
      </video>
      <div className="video-overlay"></div>
      
      <div className="app-container">
        <ProfileHeader />
        <SocialLinks />
        <PlanCard />
        <SuccessCases />
        <Newsletter />
      </div>
    </>
  );
}

export default App;
