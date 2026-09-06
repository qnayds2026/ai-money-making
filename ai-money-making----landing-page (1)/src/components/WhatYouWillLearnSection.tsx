import React from 'react';
import { 
  Video, 
  Megaphone, 
  PenTool, 
  Globe, 
  Palette, 
  ArrowRight,
  Sparkles,
  CheckCircle2,
  Clock,
  Zap
} from 'lucide-react';

interface WhatYouWillLearnSectionProps {
  onRegisterClick: () => void;
}

export const WhatYouWillLearnSection: React.FC<WhatYouWillLearnSectionProps> = ({ onRegisterClick }) => {
  const workshopTopics = [
    {
      id: 'ai-video-making',
      title: 'AI Video Making',
      subtitle: 'Create engaging videos, viral Reels, and promotional clips without complex editing or showing your face.',
      icon: Video,
      badge: 'High In-Demand',
      gradient: 'from-orange-500/10 via-amber-500/5 to-transparent',
      borderColor: 'border-orange-200/80 hover:border-orange-400',
      iconBg: 'bg-orange-500 text-white',
      badgeBg: 'bg-orange-50 text-orange-700 border-orange-200',
      takeaways: [
        'Script-to-video AI generation in seconds',
        'Viral Reels & Shorts creation workflows',
        'Faceless video creation with AI voiceovers'
      ]
    },
    {
      id: 'ai-digital-marketing',
      title: 'AI Digital Marketing',
      subtitle: 'Supercharge marketing campaigns, run high-converting ad copy, and scale customer outreach effortlessly.',
      icon: Megaphone,
      badge: 'Client Favorite',
      gradient: 'from-blue-500/10 via-indigo-500/5 to-transparent',
      borderColor: 'border-blue-200/80 hover:border-blue-400',
      iconBg: 'bg-blue-600 text-white',
      badgeBg: 'bg-blue-50 text-blue-700 border-blue-200',
      takeaways: [
        'AI-driven customer acquisition & targeting',
        'Automated 30-day marketing content calendars',
        'High-converting ad copy & email sequences'
      ]
    },
    {
      id: 'ai-content-creation',
      title: 'AI Content Creation',
      subtitle: 'Generate high-impact blog posts, social media captions, newsletters, and engaging stories in minutes.',
      icon: PenTool,
      badge: 'Essential Skill',
      gradient: 'from-emerald-500/10 via-teal-500/5 to-transparent',
      borderColor: 'border-emerald-200/80 hover:border-emerald-400',
      iconBg: 'bg-emerald-600 text-white',
      badgeBg: 'bg-emerald-50 text-emerald-700 border-emerald-200',
      takeaways: [
        'Viral hook writing & captivating storytelling',
        'Fast copywriting for posts, emails & blogs',
        'Content repurposing across multiple platforms'
      ]
    },
    {
      id: 'ai-website-designing',
      title: 'AI Website Designing',
      subtitle: 'Build stunning, fast, and mobile-friendly websites and sales landing pages with zero coding knowledge.',
      icon: Globe,
      badge: 'High Value',
      gradient: 'from-purple-500/10 via-indigo-500/5 to-transparent',
      borderColor: 'border-purple-200/80 hover:border-purple-400',
      iconBg: 'bg-purple-600 text-white',
      badgeBg: 'bg-purple-50 text-purple-700 border-purple-200',
      takeaways: [
        'Build complete websites with AI prompt builders',
        'Conversion-focused landing page structures',
        'Portfolio & business service page setup'
      ]
    },
    {
      id: 'ai-poster-designing',
      title: 'AI Poster Designing',
      subtitle: 'Design eye-catching promotional posters, social media banners, event flyers, and commercial graphics.',
      icon: Palette,
      badge: 'Instant Results',
      gradient: 'from-rose-500/10 via-pink-500/5 to-transparent',
      borderColor: 'border-rose-200/80 hover:border-rose-400',
      iconBg: 'bg-rose-600 text-white',
      badgeBg: 'bg-rose-50 text-rose-700 border-rose-200',
      takeaways: [
        'Professional commercial & event poster designs',
        'Custom social media banners & thumbnails',
        'Fast typography & visual composition tips'
      ]
    }
  ];

  return (
    <section id="workshop-curriculum" className="py-20 bg-slate-50 relative overflow-hidden border-t border-slate-200/80">
      {/* Ambient background decoration */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[850px] h-[450px] bg-gradient-to-r from-orange-100/50 via-blue-100/40 to-amber-100/40 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-14">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-orange-100/80 border border-orange-200 text-orange-900 text-xs sm:text-sm font-bold tracking-wide">
            <Clock className="w-4 h-4 text-[#f9572b]" />
            <span>1-HOUR LIVE INTENSIVE TRAINING</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-950 tracking-tight font-heading">
            What You’ll Learn in Our 1-Hour Practical Workshop
          </h2>

          <p className="text-lg sm:text-xl font-bold text-[#f9572b] tracking-tight">
            5 Core AI Skills to Start Earning & Automating Immediately
          </p>
          
          <p className="text-slate-600 text-sm sm:text-base max-w-2xl mx-auto pt-1 font-medium">
            Learn step-by-step practical workflows you can apply on day one. No prior technical skills, coding, or design experience needed.
          </p>
        </div>

        {/* 5 Workshop Modules Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {workshopTopics.map((topic, idx) => {
            const Icon = topic.icon;
            return (
              <div 
                key={topic.id}
                className={`bg-white bg-gradient-to-b ${topic.gradient} border ${topic.borderColor} rounded-2xl p-6 sm:p-7 shadow-xs hover:shadow-lg transition-all duration-300 flex flex-col justify-between group`}
              >
                <div>
                  {/* Card Header: Icon & Badge */}
                  <div className="flex items-center justify-between mb-5">
                    <div className={`w-12 h-12 rounded-xl ${topic.iconBg} flex items-center justify-center shadow-md shadow-slate-900/10 group-hover:scale-105 transition-transform`}>
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className={`text-[11px] font-extrabold uppercase tracking-wider px-3 py-1 rounded-full border ${topic.badgeBg}`}>
                      {topic.badge}
                    </span>
                  </div>

                  {/* Step Number & Title */}
                  <div className="text-[11px] font-bold text-slate-400 uppercase tracking-widest mb-1">
                    Topic 0{idx + 1}
                  </div>
                  <h3 className="text-xl font-black text-slate-900 mb-2 font-heading tracking-tight">
                    {topic.title}
                  </h3>

                  {/* Subtitle */}
                  <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mb-5 font-normal">
                    {topic.subtitle}
                  </p>
                </div>

                {/* Practical Takeaways */}
                <div className="pt-4 border-t border-slate-100 space-y-2.5 mt-auto">
                  {topic.takeaways.map((takeaway, tIdx) => (
                    <div key={tIdx} className="flex items-start gap-2 text-xs text-slate-700 font-medium">
                      <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                      <span>{takeaway}</span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

