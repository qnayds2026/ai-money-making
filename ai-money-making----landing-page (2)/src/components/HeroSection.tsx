import React, { useState } from 'react';
import { 
  Calendar, 
  Clock, 
  Globe2, 
  Star, 
  Play, 
  ShieldCheck,
  CheckCircle2,
  ExternalLink
} from 'lucide-react';

interface HeroSectionProps {
  onRegisterClick: () => void;
  onOpenVideoModal: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onRegisterClick, onOpenVideoModal }) => {
  const [isPlayingInline, setIsPlayingInline] = useState(false);
  const videoId = 'b_QcH_6HUco';

  return (
    <section className="relative overflow-hidden pt-10 pb-16 lg:pt-14 lg:pb-24 bg-[#050b1d] text-white">
      {/* Background Ambient Glows */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-blue-600/15 rounded-full blur-3xl pointer-events-none -z-0" />
      <div className="absolute top-1/3 left-10 w-[350px] h-[350px] bg-orange-500/10 rounded-full blur-3xl pointer-events-none -z-0" />
      <div className="absolute top-1/2 right-10 w-[400px] h-[400px] bg-indigo-600/15 rounded-full blur-3xl pointer-events-none -z-0" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* 1. Top Centered Badge */}
        <div className="flex justify-center mb-6">
          <div className="inline-flex items-center gap-2 px-5 py-1.5 rounded-full bg-[#16203c] border border-slate-700/70 text-slate-200 text-xs sm:text-sm font-semibold shadow-inner">
            <span className="w-2 h-2 rounded-full bg-orange-500 animate-pulse"></span>
            <span>90-Min Live Workshop</span>
          </div>
        </div>

        {/* 2. Main Headline */}
        <div className="text-center max-w-5xl mx-auto space-y-4">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.25rem] font-black text-white tracking-tight leading-[1.18] font-heading">
            Turn AI Skills Into <span className="text-[#f9572b]">Digital Income Opportunities</span>
          </h1>

          {/* Subheadline */}
          <p className="text-sm sm:text-base md:text-lg text-slate-300 max-w-4xl mx-auto font-normal leading-relaxed pt-2">
            Learn How to Use AI to Create Content, Design Graphics, Make Videos, Build Websites, Market Businesses & Start Your Own Digital Service or Online Business.
          </p>
        </div>

        {/* 3. Hero Two-Column Container (Portrait Video on Left, Event Meta Cards + Gold CTA on Right) */}
        <div className="mt-10 grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 items-center max-w-5xl mx-auto">
          
          {/* Left Column: Portrait Video Container (9:16 Aspect Ratio) */}
          <div className="lg:col-span-5 flex justify-center w-full">
            <div className="relative w-full max-w-[300px] sm:max-w-[320px] aspect-[9/16] rounded-3xl overflow-hidden bg-slate-950 border-2 border-slate-700/80 shadow-2xl shadow-blue-950/60 group flex flex-col justify-between ring-1 ring-white/10">
              
              {isPlayingInline ? (
                <iframe
                  src={`https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0&modestbranding=1`}
                  title="Masterclass Video Teaser"
                  className="w-full h-full border-0 absolute inset-0 z-20"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                />
              ) : (
                <div 
                  onClick={() => setIsPlayingInline(true)}
                  className="w-full h-full relative cursor-pointer flex flex-col justify-between"
                >
                  {/* YouTube Thumbnail / Video Background */}
                  <img
                    src={`https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`}
                    onError={(e) => {
                      // Fallback if maxres is not available
                      (e.target as HTMLImageElement).src = `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`;
                    }}
                    alt="Masterclass Video Preview"
                    className="absolute inset-0 w-full h-full object-cover filter brightness-90 contrast-105 group-hover:scale-105 transition-transform duration-700"
                  />
                  
                  {/* Studio lighting gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/30 to-slate-950/60" />
                  <div className="absolute inset-0 bg-gradient-to-r from-slate-950/40 via-transparent to-blue-950/40" />

                  {/* Top Bar Actions / Live Tag */}
                  <div className="relative z-10 p-4 flex items-center justify-between">
                    <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-red-600/90 text-white text-[11px] font-bold tracking-wide uppercase shadow-lg">
                      <span className="w-1.5 h-1.5 rounded-full bg-white animate-ping"></span>
                      Teaser
                    </span>

                    <button
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation();
                        onOpenVideoModal();
                      }}
                      className="inline-flex items-center gap-1 text-[11px] font-medium text-slate-200 hover:text-white bg-black/60 hover:bg-black/80 px-2.5 py-1 rounded-lg border border-white/15 backdrop-blur-sm transition-colors"
                      title="Open full preview"
                    >
                      <span>Full View</span>
                      <ExternalLink className="w-3 h-3" />
                    </button>
                  </div>

                  {/* Center Big Play Button */}
                  <div className="absolute inset-0 flex items-center justify-center z-10 pointer-events-none">
                    <div className="w-16 h-16 sm:w-18 sm:h-18 rounded-full bg-gradient-to-tr from-[#f9572b] to-orange-400 text-white flex items-center justify-center shadow-2xl shadow-orange-500/50 group-hover:scale-110 transition-all border-2 border-white/30">
                      <Play className="w-8 h-8 fill-white ml-1 text-white" />
                    </div>
                  </div>

                  {/* Lower Third Banner (Build A Business From Home) */}
                  <div className="relative z-10 p-4 mt-auto">
                    <div className="bg-slate-950/90 backdrop-blur-md border-l-4 border-orange-500 p-3 rounded-r-xl shadow-xl">
                      <h4 className="text-white font-black text-sm tracking-tight font-heading">
                        Build A Business From Home
                      </h4>
                      <p className="text-slate-300 text-xs font-medium pt-0.5">
                        Tap to Watch Teaser Video
                      </p>
                    </div>
                  </div>
                </div>
              )}

            </div>
          </div>

          {/* Right Column: 2x2 Details Grid + Gold CTA Button */}
          <div className="lg:col-span-7 flex flex-col justify-center space-y-5">
            
            {/* 2x2 Event Detail Cards */}
            <div className="grid grid-cols-2 gap-3 sm:gap-4 flex-1">
              
              {/* Card 1: Date */}
              <div className="bg-[#101935] hover:bg-[#152042] transition-colors border border-slate-800/90 rounded-2xl p-4 sm:p-5 flex items-center gap-3.5 shadow-lg">
                <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-gradient-to-tr from-pink-500 via-rose-500 to-pink-400 flex items-center justify-center text-white shrink-0 shadow-md shadow-pink-500/20">
                  <Calendar className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs text-slate-400 font-medium">Date</p>
                  <p className="text-base sm:text-lg font-bold text-white tracking-tight">5-Sep</p>
                </div>
              </div>

              {/* Card 2: Time */}
              <div className="bg-[#101935] hover:bg-[#152042] transition-colors border border-slate-800/90 rounded-2xl p-4 sm:p-5 flex items-center gap-3.5 shadow-lg">
                <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-gradient-to-tr from-pink-500 via-rose-500 to-pink-400 flex items-center justify-center text-white shrink-0 shadow-md shadow-pink-500/20">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs text-slate-400 font-medium">Time</p>
                  <p className="text-base sm:text-lg font-bold text-white tracking-tight">08:00 PM</p>
                </div>
              </div>

              {/* Card 3: Language */}
              <div className="bg-[#101935] hover:bg-[#152042] transition-colors border border-slate-800/90 rounded-2xl p-4 sm:p-5 flex items-center gap-3.5 shadow-lg">
                <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-gradient-to-tr from-pink-500 via-rose-500 to-pink-400 flex items-center justify-center text-white shrink-0 shadow-md shadow-pink-500/20">
                  <Globe2 className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs text-slate-400 font-medium">Language</p>
                  <p className="text-base sm:text-lg font-bold text-white tracking-tight">Malayalam</p>
                </div>
              </div>

              {/* Card 4: Duration */}
              <div className="bg-[#101935] hover:bg-[#152042] transition-colors border border-slate-800/90 rounded-2xl p-4 sm:p-5 flex items-center gap-3.5 shadow-lg">
                <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-gradient-to-tr from-pink-500 via-rose-500 to-pink-400 flex items-center justify-center text-white shrink-0 shadow-md shadow-pink-500/20">
                  <Star className="w-5 h-5 fill-white" />
                </div>
                <div>
                  <p className="text-xs text-slate-400 font-medium">Duration</p>
                  <p className="text-base sm:text-lg font-bold text-white tracking-tight">90 Mins</p>
                </div>
              </div>

            </div>

            {/* Big Golden Yellow CTA Button */}
            <button
              id="hero-model-register-btn"
              onClick={onRegisterClick}
              className="w-full bg-[#f5a623] hover:bg-[#e69818] active:scale-[0.98] text-slate-950 font-black text-lg sm:text-xl py-4 sm:py-4.5 px-6 rounded-xl shadow-xl shadow-amber-500/25 hover:shadow-amber-500/40 transition-all flex items-center justify-center gap-2 cursor-pointer font-heading tracking-tight cta-blink-btn"
            >
              <span>Book Your Seat – Only ₹99</span>
            </button>

            {/* Quick Guarantees / Microcopy */}
            <div className="flex items-center justify-center gap-4 text-xs text-slate-400 font-medium pt-1">
              <span className="flex items-center gap-1">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                Only ₹99 Pass
              </span>
              <span>•</span>
              <span className="flex items-center gap-1">
                <ShieldCheck className="w-3.5 h-3.5 text-blue-400" />
                Instant Confirmation
              </span>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};


