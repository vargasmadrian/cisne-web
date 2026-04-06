import React from 'react';
import ProfileHeader from './components/ProfileHeader';
import SocialLinks from './components/SocialLinks';
import PlanCard from './components/PlanCard';
import ProgramsCourses from './components/ProgramsCourses';
import SuccessCases from './components/SuccessCases';
import Newsletter from './components/Newsletter';
import './App.css';

function App() {
  const base = import.meta.env.BASE_URL;
  return (
    <>
      <video className="video-background" autoPlay loop muted playsInline>
        <source src={`${base}videos/ssstik.io_1775490866311.mp4`} type="video/mp4" />
      </video>
      <div className="video-overlay"></div>
      
      <div className="app-container">
        <ProfileHeader />
        <SocialLinks />
        <ProgramsCourses />
        <PlanCard />
        <SuccessCases />
        <Newsletter />
      </div>
    </>
  );
}

export default App;
