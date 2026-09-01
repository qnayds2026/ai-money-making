import React, { useState, useEffect } from 'react';
import { Clock, Zap, ArrowRight, ShieldCheck, Gift } from 'lucide-react';

interface StickyBottomBarProps {
  onRegisterClick: () => void;
}

export const StickyBottomBar: React.FC<StickyBottomBarProps> = ({ onRegisterClick }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 450) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!isVisible) return null;

  return (
    <div 
      id="sticky-bottom-conversion-bar"
      className="fixed bottom-0 left-0 right-0 z-40 bg-white/95 border-t border-blue-200 p-3 sm:py-3.5 sm:px-6 shadow-2xl backdrop-blur-xl transition-all"
    >
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3">
        
        <div className="hidden sm:flex items-center gap-3">
          <div className="w-9 h-9 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center border border-blue-200">
            <Zap className="w-5 h-5 fill-blue-600" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="text-xs font-extrabold text-slate-950 font-heading">AI COACH LAUNCHPAD™</span>
              <span className="text-[10px] font-bold bg-amber-100 text-amber-800 px-1.5 py-0.2 rounded border border-amber-300">
                12 Spots Left
              </span>
            </div>
            <p className="text-[11px] text-slate-600 font-medium">Includes $3,988 Free Prompt & Contract Suite • 100% Free Live Pass</p>
          </div>
        </div>

        <div className="w-full sm:w-auto flex items-center justify-between sm:justify-end gap-3">
          <div className="text-left sm:text-right hidden xs:block">
            <p className="text-[10px] text-slate-500 uppercase font-bold">Today's Broadcast</p>
            <p className="text-xs font-bold text-blue-600">7:00 PM EST (Live)</p>
          </div>

          <button
            onClick={onRegisterClick}
            className="w-full sm:w-auto bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-600 hover:from-blue-500 hover:to-indigo-500 text-white font-black px-6 py-2.5 sm:px-8 sm:py-3 rounded-xl text-xs sm:text-sm shadow-lg shadow-blue-500/25 active:scale-95 transition-all flex items-center justify-center gap-2 cursor-pointer cta-blink-blue"
          >
            <Zap className="w-4 h-4 fill-white" />
            <span>CLAIM 100% FREE SEAT NOW</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </div>
  );
};
