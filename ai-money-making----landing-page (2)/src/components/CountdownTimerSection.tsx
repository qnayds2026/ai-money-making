import React, { useState, useEffect } from 'react';
import { Clock, Zap, Flame, Users, ArrowRight } from 'lucide-react';

interface CountdownTimerSectionProps {
  onRegisterClick: () => void;
}

export const CountdownTimerSection: React.FC<CountdownTimerSectionProps> = ({ onRegisterClick }) => {
  // Target date: September 5, 2026 at 20:00:00 (8:00 PM) IST or dynamic fallback
  const [timeLeft, setTimeLeft] = useState({
    days: 3,
    hours: 10,
    minutes: 48,
    seconds: 25,
  });

  useEffect(() => {
    const calculateTimeLeft = () => {
      // Calculate target to 5 Sep 8:00 PM
      const now = new Date();
      let targetYear = now.getFullYear();
      let targetDate = new Date(targetYear, 8, 5, 20, 0, 0); // Month 8 is September (0-indexed)

      // If already past this year's Sept 5, set for next year or maintain realistic countdown
      let diff = targetDate.getTime() - now.getTime();

      if (diff <= 0) {
        // Fallback realistic active urgency loop (e.g., 3 days, 8 hours)
        diff = (3 * 24 * 3600 + 8 * 3600 + 45 * 60 + 30) * 1000;
      }

      const days = Math.floor(diff / (1000 * 60 * 60 * 24));
      const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((diff % (1000 * 60)) / 1000);

      return {
        days: days > 0 ? days : 0,
        hours: hours >= 0 ? hours : 0,
        minutes: minutes >= 0 ? minutes : 0,
        seconds: seconds >= 0 ? seconds : 0,
      };
    };

    setTimeLeft(calculateTimeLeft());

    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatNumber = (num: number) => String(num).padStart(2, '0');

  return (
    <section 
      id="countdown-timer-section" 
      className="relative bg-gradient-to-b from-[#082245] via-[#0b1b36] to-[#0a162b] border-y border-amber-500/20 py-8 sm:py-10 px-4 shadow-2xl overflow-hidden"
    >
      {/* Subtle Background Glows */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-72 h-72 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-72 h-72 bg-orange-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-5xl mx-auto relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-6 lg:gap-8">
          
          {/* Left: Urgency & Details */}
          <div className="text-center lg:text-left space-y-2 max-w-md">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-500/15 border border-amber-400/30 text-amber-300 text-xs font-bold uppercase tracking-wider">
              <Flame className="w-4 h-4 text-orange-400 animate-bounce" />
              <span>Limited Seats Live Masterclass</span>
            </div>

            <h3 className="text-2xl sm:text-3xl font-black text-white tracking-tight font-heading">
              Session Starts on <span className="text-[#f5a623]">5-Sep @ 08:00 PM</span>
            </h3>

            <div className="flex items-center justify-center lg:justify-start gap-2 text-xs sm:text-sm text-slate-300">
              <Clock className="w-4 h-4 text-amber-400" />
              <span>Registration closing soon • Reserve your spot now</span>
            </div>

            {/* Quick Seats Progress */}
            <div className="pt-1.5 flex items-center justify-center lg:justify-start gap-3">
              <div className="w-36 sm:w-44 bg-slate-800 rounded-full h-2 overflow-hidden border border-slate-700">
                <div className="bg-gradient-to-r from-amber-500 to-orange-500 h-full rounded-full w-[88%]" />
              </div>
              <span className="text-xs font-bold text-amber-300 flex items-center gap-1">
                <Users className="w-3.5 h-3.5" />
                Only 12 Seats Left!
              </span>
            </div>
          </div>

          {/* Right: Digital Countdown Timer Blocks & CTA */}
          <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6 w-full lg:w-auto justify-center">
            
            {/* Timer Digits */}
            <div className="grid grid-cols-4 gap-2 sm:gap-3 text-center">
              
              {/* Days */}
              <div className="flex flex-col items-center">
                <div className="w-16 sm:w-20 h-16 sm:h-20 bg-[#0f2347] border border-amber-500/30 rounded-2xl flex items-center justify-center shadow-lg shadow-black/40 relative overflow-hidden group">
                  <div className="absolute inset-x-0 top-0 h-[1px] bg-white/20" />
                  <span className="text-2xl sm:text-3xl font-black text-white font-mono tracking-tight group-hover:scale-105 transition-transform">
                    {formatNumber(timeLeft.days)}
                  </span>
                </div>
                <span className="text-[10px] sm:text-xs font-bold text-slate-400 mt-1.5 uppercase tracking-wider">Days</span>
              </div>

              {/* Hours */}
              <div className="flex flex-col items-center">
                <div className="w-16 sm:w-20 h-16 sm:h-20 bg-[#0f2347] border border-amber-500/30 rounded-2xl flex items-center justify-center shadow-lg shadow-black/40 relative overflow-hidden group">
                  <div className="absolute inset-x-0 top-0 h-[1px] bg-white/20" />
                  <span className="text-2xl sm:text-3xl font-black text-amber-300 font-mono tracking-tight group-hover:scale-105 transition-transform">
                    {formatNumber(timeLeft.hours)}
                  </span>
                </div>
                <span className="text-[10px] sm:text-xs font-bold text-slate-400 mt-1.5 uppercase tracking-wider">Hours</span>
              </div>

              {/* Minutes */}
              <div className="flex flex-col items-center">
                <div className="w-16 sm:w-20 h-16 sm:h-20 bg-[#0f2347] border border-amber-500/30 rounded-2xl flex items-center justify-center shadow-lg shadow-black/40 relative overflow-hidden group">
                  <div className="absolute inset-x-0 top-0 h-[1px] bg-white/20" />
                  <span className="text-2xl sm:text-3xl font-black text-white font-mono tracking-tight group-hover:scale-105 transition-transform">
                    {formatNumber(timeLeft.minutes)}
                  </span>
                </div>
                <span className="text-[10px] sm:text-xs font-bold text-slate-400 mt-1.5 uppercase tracking-wider">Mins</span>
              </div>

              {/* Seconds */}
              <div className="flex flex-col items-center">
                <div className="w-16 sm:w-20 h-16 sm:h-20 bg-[#0f2347] border border-orange-500/40 rounded-2xl flex items-center justify-center shadow-lg shadow-black/40 relative overflow-hidden group">
                  <div className="absolute inset-x-0 top-0 h-[1px] bg-white/20" />
                  <span className="text-2xl sm:text-3xl font-black text-orange-400 font-mono tracking-tight group-hover:scale-105 transition-transform animate-pulse">
                    {formatNumber(timeLeft.seconds)}
                  </span>
                </div>
                <span className="text-[10px] sm:text-xs font-bold text-orange-300 mt-1.5 uppercase tracking-wider">Secs</span>
              </div>

            </div>

            {/* Direct Register Action */}
            <div className="w-full sm:w-auto flex justify-center">
              <button
                id="timer-section-book-btn"
                onClick={onRegisterClick}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 sm:px-8 py-4 rounded-xl bg-[#f5a623] hover:bg-[#e09214] active:scale-95 text-slate-950 font-black text-sm sm:text-base shadow-xl shadow-amber-500/25 transition-all cursor-pointer font-heading tracking-tight cta-blink-btn whitespace-nowrap"
              >
                <Zap className="w-4 h-4 fill-slate-950" />
                <span>Book Your Seat – Only ₹99</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
