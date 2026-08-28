/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { HeroSection } from './components/HeroSection';
import { OpportunitySection } from './components/OpportunitySection';
import { WhatYouWillLearnSection } from './components/WhatYouWillLearnSection';
import { LearnOneSkillSection } from './components/LearnOneSkillSection';
import { StoriesOfSuccessSection } from './components/StoriesOfSuccessSection';
import { WhatsAppVoiceReviewsSection } from './components/WhatsAppVoiceReviewsSection';
import { MentorSection } from './components/MentorSection';
import { WhoIsThisForSection } from './components/WhoIsThisForSection';
import { FaqSection } from './components/FaqSection';
import { StickyScrollCTA } from './components/StickyScrollCTA';
import { RegistrationModal } from './components/RegistrationModal';
import { VideoTeaserModal } from './components/VideoTeaserModal';
import { NichePreset } from './types';

export default function App() {
  const [isRegistrationModalOpen, setIsRegistrationModalOpen] = useState(false);
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);
  const [selectedNichePreset, setSelectedNichePreset] = useState<NichePreset | undefined>();
  const [targetIncomePreset, setTargetIncomePreset] = useState<number | undefined>();

  const handleOpenRegistration = (preset?: NichePreset, targetIncome?: number) => {
    if (preset) {
      setSelectedNichePreset(preset);
    }
    if (targetIncome) {
      setTargetIncomePreset(targetIncome);
    }
    setIsRegistrationModalOpen(true);
  };

  const handleCloseRegistration = () => {
    setIsRegistrationModalOpen(false);
  };

  const handleOpenVideo = () => {
    setIsVideoModalOpen(true);
  };

  const handleCloseVideo = () => {
    setIsVideoModalOpen(false);
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 flex flex-col font-sans selection:bg-blue-600 selection:text-white">
      <main className="flex-grow">
        {/* 1. Hero Section with Direct CTA & Trust Badges */}
        <HeroSection 
          onRegisterClick={() => handleOpenRegistration()} 
          onOpenVideoModal={handleOpenVideo}
        />

        {/* 2. AI Income Opportunity Core Narrative Section */}
        <OpportunitySection 
          onRegisterClick={() => handleOpenRegistration()}
        />

        {/* 3. What You'll Learn in Our 1-Hour Practical Workshop */}
        <WhatYouWillLearnSection 
          onRegisterClick={() => handleOpenRegistration()}
        />

        {/* 4. Learn One Skill at a Time & Bonuses Section */}
        <LearnOneSkillSection 
          onRegisterClick={() => handleOpenRegistration()}
        />

        {/* 5. Stories of Success Video Testimonials Gallery */}
        <StoriesOfSuccessSection 
          onRegisterClick={() => handleOpenRegistration()}
        />

        {/* 6. WhatsApp Voice Notes / Audio Testimonials Player */}
        <WhatsAppVoiceReviewsSection 
          onRegisterClick={() => handleOpenRegistration()}
        />

        {/* 7. Meet Your Mentor & Lead Instructor Section */}
        <MentorSection 
          onRegisterClick={() => handleOpenRegistration()}
        />

        {/* 7. Who Is This For Audience Section */}
        <WhoIsThisForSection 
          onRegisterClick={() => handleOpenRegistration()}
        />

        {/* 6. Direct-Response Comprehensive FAQ */}
        <FaqSection 
          onRegisterClick={() => handleOpenRegistration()}
        />
      </main>

      {/* Floating Sticky Bottom Scrolling CTA */}
      <StickyScrollCTA onRegisterClick={() => handleOpenRegistration()} />

      {/* Registration & VIP Pass Modal */}
      <RegistrationModal
        isOpen={isRegistrationModalOpen}
        onClose={handleCloseRegistration}
        initialNiche={selectedNichePreset}
        initialTargetIncome={targetIncomePreset}
      />

      {/* Video Masterclass Teaser Modal */}
      <VideoTeaserModal
        isOpen={isVideoModalOpen}
        onClose={handleCloseVideo}
        onRegisterClick={() => handleOpenRegistration()}
      />

    </div>
  );
}
