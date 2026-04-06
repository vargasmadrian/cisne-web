import React from 'react';
import ProfileHeader from '../components/ProfileHeader';
import SocialLinks from '../components/SocialLinks';
import PlanCard from '../components/PlanCard';
import ProgramsCourses from '../components/ProgramsCourses';
import SuccessCases from '../components/SuccessCases';
import Newsletter from '../components/Newsletter';

export default function Home() {
  return (
    <div className="app-container">
      <ProfileHeader />
      <SocialLinks />
      <ProgramsCourses />
      <PlanCard />
      <SuccessCases />
      <Newsletter />
    </div>
  );
}
