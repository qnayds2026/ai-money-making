import React, { useState, useEffect } from 'react';
import { Sparkles, Clock, Users, ArrowRight } from 'lucide-react';

interface UrgencyHeaderProps {
  onRegisterClick: () => void;
}

export const UrgencyHeader: React.FC<UrgencyHeaderProps> = ({ onRegisterClick }) => {
  const [timeLeft, setTimeLeft] = useState({
    hours: 4,
    minutes: 42,
    seconds: 19,
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: 59, seconds: 59 };
        } else if (prev.hours > 0) {
          return { hours: prev.hours - 1, minutes: 59, seconds: 59 };
        }
        return { hours: 4, minutes: 30, seconds: 0 }; // Loop for direct response urgency
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const formatNumber = (num: number) => String(num).padStart(2, '0');

  return (
    <aside aria-label="Urgency announcement" id="urgency-header-bar" className="bg-gradient-to-r from-blue-950 via-slate-900 to-blue-950 border-b border-blue-500/20 py-2.5 px-4 sticky top-0 z-50 shadow-md backdrop-blur-md">
      <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-3 text-xs sm:text-sm">
        <div className="flex items-center gap-2 text-blue-400 font-medium">
          <span className="relative flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-blue-500"></span>
          </span>
          <span className="font-semibold text-white tracking-wide uppercase text-[11px] sm:text-xs">
            Free Live 90-Min Masterclass:
          </span>
          <span className="text-slate-200 hidden md:inline">
            Broadcast Starting Today @ 7:00 PM EST
          </span>
        </div>

        <div className="flex items-center gap-3 sm:gap-5">
          <div className="flex items-center gap-1.5 text-slate-200">
            <Clock className="w-3.5 h-3.5 text-blue-400" />
            <span className="text-[11px] text-slate-300 hidden sm:inline">Registration Closes In:</span>
            <div className="flex items-center gap-1 font-mono font-bold text-amber-300">
              <span className="bg-slate-950 px-1.5 py-0.5 rounded border border-blue-900 text-xs text-white">
                {formatNumber(timeLeft.hours)}h
              </span>
              <span className="text-blue-300">:</span>
              <span className="bg-slate-950 px-1.5 py-0.5 rounded border border-blue-900 text-xs text-white">
                {formatNumber(timeLeft.minutes)}m
              </span>
              <span className="text-blue-300">:</span>
              <span className="bg-slate-950 px-1.5 py-0.5 rounded border border-blue-900 text-xs text-white">
                {formatNumber(timeLeft.seconds)}s
              </span>
            </div>
          </div>

          <div className="hidden lg:flex items-center gap-1.5 text-slate-200 text-xs">
            <Users className="w-3.5 h-3.5 text-blue-400" />
            <span><strong className="text-white">12</strong> spots remaining</span>
          </div>

          <button
            id="header-claim-seat-btn"
            onClick={onRegisterClick}
            className="group flex items-center gap-1.5 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white font-bold px-3 py-1 sm:px-4 sm:py-1 rounded-full text-xs transition-all shadow-sm hover:shadow-blue-500/30 active:scale-95 cursor-pointer cta-blink-blue"
          >
            <span>Claim Free Seat</span>
            <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5" />
          </button>
        </div>
      </div>
    </aside>
  );
};
