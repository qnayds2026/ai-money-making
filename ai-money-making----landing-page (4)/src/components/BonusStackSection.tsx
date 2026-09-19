import React from 'react';
import { 
  Gift, 
  Sparkles, 
  CheckCircle2, 
  ArrowRight, 
  FileText, 
  ShieldCheck, 
  Bot, 
  Video,
  Lock,
  Zap
} from 'lucide-react';
import { BONUSES_DATA } from '../data/courseData';
import { BonusItem } from '../types';

interface BonusStackSectionProps {
  onRegisterClick: () => void;
}

export const BonusStackSection: React.FC<BonusStackSectionProps> = ({ onRegisterClick }) => {
  const getBonusIcon = (name: string) => {
    switch (name) {
      case 'FileText':
        return <FileText className="w-6 h-6" />;
      case 'ShieldCheck':
        return <ShieldCheck className="w-6 h-6" />;
      case 'Bot':
        return <Bot className="w-6 h-6" />;
      case 'Video':
        return <Video className="w-6 h-6" />;
      default:
        return <Gift className="w-6 h-6" />;
    }
  };

  const totalValue = BONUSES_DATA.reduce((acc, item) => acc + item.value, 0);

  return (
    <section id="bonuses-section" className="py-16 sm:py-24 bg-white border-y border-slate-200 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-bold">
            <Gift className="w-3.5 h-3.5 text-blue-600" />
            <span>FAST-ACTION ATTENDEE BONUSES</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-950 tracking-tight font-heading">
            Unlock <span className="text-blue-600">${totalValue.toLocaleString()} in Free Toolkits</span> When You Attend
          </h2>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            These are not superficial PDF cheatsheets. These are the exact multi-thousand dollar operating systems, contracts, and custom GPT blueprints our private accelerator members use.
          </p>
        </div>

        {/* 4 Bonus Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 max-w-5xl mx-auto">
          {BONUSES_DATA.map((bonus, idx) => (
            <div 
              key={bonus.id}
              className="bg-slate-50 border border-slate-200 hover:border-blue-400 rounded-3xl p-6 sm:p-7 flex flex-col justify-between transition-all group shadow-sm hover:shadow-md hover:bg-white"
            >
              <div>
                {/* Top Badge & Valuation */}
                <div className="flex items-center justify-between gap-2 mb-4 pb-3 border-b border-slate-200">
                  <div className="flex items-center gap-2">
                    <span className="w-7 h-7 rounded-lg bg-blue-100 text-blue-700 font-bold text-xs flex items-center justify-center font-mono">
                      #{idx + 1}
                    </span>
                    <span className="text-xs font-bold text-blue-700 bg-blue-100/70 px-2.5 py-0.5 rounded-full border border-blue-200">
                      {bonus.tag}
                    </span>
                  </div>
                  <div className="text-right">
                    <span className="text-xs text-slate-400 line-through mr-1.5 font-mono">
                      ${bonus.value}
                    </span>
                    <span className="text-sm font-black text-amber-600 font-mono">
                      $0 FREE
                    </span>
                  </div>
                </div>

                {/* Title and Icon */}
                <div className="flex items-start gap-3.5 mb-3">
                  <div className="w-12 h-12 rounded-2xl bg-blue-100 text-blue-600 border border-blue-200 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                    {getBonusIcon(bonus.iconName)}
                  </div>
                  <div>
                    <h3 className="text-base sm:text-lg font-bold text-slate-900 leading-snug">
                      {bonus.title}
                    </h3>
                  </div>
                </div>

                <p className="text-xs sm:text-sm text-slate-600 mb-4 leading-relaxed">
                  {bonus.description}
                </p>

                {/* Bullet Points */}
                <ul className="space-y-2 mb-6 bg-white p-3.5 rounded-xl border border-slate-200 shadow-2xs">
                  {bonus.bullets.map((bullet, bIdx) => (
                    <li key={bIdx} className="flex items-start gap-2 text-xs text-slate-700 font-medium">
                      <CheckCircle2 className="w-3.5 h-3.5 text-blue-600 shrink-0 mt-0.5" />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Status footer */}
              <div className="flex items-center justify-between pt-3 border-t border-slate-200 text-xs text-slate-500">
                <span className="flex items-center gap-1.5 text-blue-600 font-bold">
                  <Lock className="w-3.5 h-3.5" />
                  Unlocked In Live Room
                </span>
                <span className="text-[11px] text-slate-500 font-medium">1-Click Notion & JSON</span>
              </div>
            </div>
          ))}
        </div>

        {/* Total Valuation Recap Box */}
        <div className="mt-12 max-w-3xl mx-auto bg-gradient-to-r from-blue-900 via-blue-950 to-indigo-950 border border-blue-700 rounded-3xl p-6 sm:p-8 text-center shadow-xl text-white">
          <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-6 text-sm font-semibold mb-4">
            <span className="text-slate-300">Total Combined Value: <strong className="line-through text-slate-400">${totalValue.toLocaleString()}</strong></span>
            <span className="text-blue-400">•</span>
            <span className="text-blue-300 font-bold">Your Price: $0.00 (100% Free Live Pass)</span>
          </div>

          <p className="text-xs sm:text-sm text-slate-200 max-w-xl mx-auto mb-6">
            All 4 bonus suites are automatically reserved under your name when you submit your free registration form today.
          </p>

          <button
            id="bonuses-claim-all-btn"
            onClick={onRegisterClick}
            className="w-full sm:w-auto bg-gradient-to-r from-blue-500 to-indigo-500 hover:from-blue-400 hover:to-indigo-400 text-white font-black px-8 py-3.5 rounded-xl text-base shadow-lg shadow-blue-500/30 active:scale-95 transition-all inline-flex items-center justify-center gap-2 cursor-pointer cta-blink-blue"
          >
            <Zap className="w-5 h-5 fill-white" />
            <span>CLAIM FREE SEAT + UNLOCK $3,988 BONUSES</span>
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>

      </div>
    </section>
  );
};
