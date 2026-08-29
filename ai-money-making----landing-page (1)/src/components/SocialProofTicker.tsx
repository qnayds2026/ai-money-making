import React, { useState, useEffect } from 'react';
import { LIVE_ACTIVITY_EVENTS } from '../data/courseData';
import { CheckCircle2, X, Sparkles, Zap } from 'lucide-react';

export const SocialProofTicker: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [dismissed, setDismissed] = useState(false);

  useEffect(() => {
    if (dismissed) return;

    // Show after 3 seconds
    const initialTimer = setTimeout(() => {
      setIsVisible(true);
    }, 2500);

    // Cycle every 8 seconds
    const interval = setInterval(() => {
      setIsVisible(false);
      setTimeout(() => {
        setCurrentIndex(prev => (prev + 1) % LIVE_ACTIVITY_EVENTS.length);
        setIsVisible(true);
      }, 500);
    }, 8000);

    return () => {
      clearTimeout(initialTimer);
      clearInterval(interval);
    };
  }, [dismissed]);

  if (dismissed || !isVisible) return null;

  return (
    <div className="fixed bottom-20 left-4 z-40 max-w-sm transition-all duration-500 ease-out transform translate-y-0 opacity-100 hidden sm:block">
      <div className="bg-white/95 border border-blue-200 rounded-2xl p-3.5 shadow-xl shadow-blue-500/10 backdrop-blur-md flex items-center justify-between gap-3">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center shrink-0">
            <Zap className="w-4 h-4 fill-blue-600" />
          </div>
          <div>
            <p className="text-xs font-bold text-slate-900 leading-tight">
              {LIVE_ACTIVITY_EVENTS[currentIndex]}
            </p>
            <p className="text-[10px] text-blue-600 font-semibold flex items-center gap-1 mt-0.5">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-600 animate-pulse" />
              <span>Verified VIP Registration</span>
            </p>
          </div>
        </div>

        <button
          onClick={() => setDismissed(true)}
          className="text-slate-400 hover:text-slate-600 p-1 rounded-full cursor-pointer"
          aria-label="Dismiss notification"
        >
          <X className="w-3.5 h-3.5" />
        </button>
      </div>
    </div>
  );
};
