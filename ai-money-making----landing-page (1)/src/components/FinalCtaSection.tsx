import React from 'react';
import { 
  Zap, 
  Sparkles, 
  ArrowRight, 
  ShieldCheck, 
  Gift, 
  Calendar, 
  Clock, 
  CheckCircle2,
  Users
} from 'lucide-react';

interface FinalCtaSectionProps {
  onRegisterClick: () => void;
}

export const FinalCtaSection: React.FC<FinalCtaSectionProps> = ({ onRegisterClick }) => {
  return (
    <section id="closing-cta-section" className="py-16 sm:py-24 bg-white relative overflow-hidden">
      {/* Subtle Blue Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-blue-100/60 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="bg-gradient-to-b from-blue-50/80 via-white to-blue-50/50 border-2 border-blue-200/90 rounded-3xl p-8 sm:p-12 lg:p-14 text-center space-y-8 shadow-xl shadow-blue-500/5 relative">
          
          {/* Top Pill */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-100/80 border border-blue-300/80 text-blue-800 text-xs sm:text-sm font-bold shadow-2xs">
            <span className="w-2.5 h-2.5 rounded-full bg-blue-600 animate-pulse"></span>
            <span>ONLY 12 FREE VIP SEATS REMAINING FOR TODAY</span>
          </div>

          {/* Heading */}
          <div className="space-y-4 max-w-3xl mx-auto">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-950 tracking-tight leading-tight font-heading">
              Stop Watching Others Monetize AI. <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-700">
                Claim Your High-Ticket Seat Today.
              </span>
            </h2>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              Join Alex Vance live for 90 minutes. Learn the exact 4-pillar blueprint, receive the <strong>$3,988 in plug-and-play prompt suites and contracts</strong>, and launch your automated client engine.
            </p>
          </div>

          {/* Value Recaps */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 max-w-3xl mx-auto text-left">
            <div className="bg-white p-3.5 rounded-xl border border-slate-200 shadow-2xs flex items-start gap-2.5">
              <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
              <span className="text-xs text-slate-700 font-medium">
                <strong className="text-slate-950">100% Free Live Access</strong> (Zero credit card or fees)
              </span>
            </div>
            <div className="bg-white p-3.5 rounded-xl border border-slate-200 shadow-2xs flex items-start gap-2.5">
              <Gift className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
              <span className="text-xs text-slate-700 font-medium">
                <strong className="text-slate-950">$3,988 Bonus Stack</strong> (SOPs, contracts, GPT scripts)
              </span>
            </div>
            <div className="bg-white p-3.5 rounded-xl border border-slate-200 shadow-2xs flex items-start gap-2.5">
              <Users className="w-4 h-4 text-indigo-600 shrink-0 mt-0.5" />
              <span className="text-xs text-slate-700 font-medium">
                <strong className="text-slate-950">Live Interactive Q&A</strong> (1-on-1 niche hotseat chance)
              </span>
            </div>
          </div>

          {/* Big CTA */}
          <div className="pt-2">
            <button
              id="final-cta-register-btn"
              onClick={onRegisterClick}
              className="w-full sm:w-auto group relative inline-flex items-center justify-center px-10 py-5 rounded-2xl bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-600 text-white font-black text-lg sm:text-xl tracking-tight shadow-xl shadow-blue-500/25 hover:shadow-blue-500/40 hover:scale-[1.02] active:scale-95 transition-all cursor-pointer cta-blink-blue"
            >
              <div className="flex items-center gap-3">
                <Zap className="w-6 h-6 fill-white" />
                <span>CLAIM 100% FREE MASTERCLASS PASS NOW</span>
                <ArrowRight className="w-6 h-6 transition-transform group-hover:translate-x-1.5" />
              </div>
            </button>
            <p className="text-xs text-slate-500 mt-3 flex items-center justify-center gap-1.5 font-medium">
              <ShieldCheck className="w-4 h-4 text-blue-600" />
              <span>Instant Digital VIP Ticket & Calendar Confirmation Link</span>
            </p>
          </div>

        </div>

      </div>
    </section>
  );
};
