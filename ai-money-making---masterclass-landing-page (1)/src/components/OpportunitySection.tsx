import React from 'react';
import { 
  Sparkles, 
  CheckCircle2, 
  ArrowRight, 
  BrainCircuit, 
  Wrench, 
  TrendingUp, 
  XCircle,
  Zap
} from 'lucide-react';

interface OpportunitySectionProps {
  onRegisterClick: () => void;
}

export const OpportunitySection: React.FC<OpportunitySectionProps> = ({ onRegisterClick }) => {
  return (
    <section className="py-20 bg-white relative overflow-hidden">
      {/* Subtle Background Glows */}
      <div className="absolute top-0 right-1/4 w-[500px] h-[300px] bg-blue-50/60 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute bottom-0 left-1/4 w-[500px] h-[300px] bg-orange-50/50 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header with User's Exact Copy */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-50 border border-blue-200/80 text-blue-700 text-xs sm:text-sm font-bold tracking-wide">
            <Sparkles className="w-4 h-4 text-blue-600" />
            <span>THE NEW DIGITAL REALITY</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-950 tracking-tight leading-[1.2] font-heading">
            Still wondering how people are making money with AI?
          </h2>

          <p className="text-xl sm:text-2xl font-bold text-[#f9572b] tracking-tight">
            AI is changing the way people work, create, and earn.
          </p>
        </div>

        {/* Contrast Breakdown: What you DON'T need vs What you DO need */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch">
          
          {/* Box 1: The Common Myth */}
          <div className="bg-slate-50 border border-slate-200/90 rounded-2xl p-6 sm:p-8 flex flex-col justify-between shadow-xs">
            <div>
              <div className="w-12 h-12 rounded-xl bg-red-100 text-red-600 flex items-center justify-center mb-4">
                <XCircle className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-black text-slate-900 mb-2 font-heading">
                What You Don't Need
              </h3>
              <p className="text-slate-600 text-base leading-relaxed mb-6 font-medium">
                You <strong className="text-slate-900 font-bold">don't need</strong> to be a programmer, a mathematician, or a technical AI expert to build a profitable digital business today.
              </p>
            </div>

            <ul className="space-y-3 pt-4 border-t border-slate-200 text-sm text-slate-600 font-medium">
              <li className="flex items-center gap-2.5">
                <span className="w-1.5 h-1.5 rounded-full bg-slate-400"></span>
                <span>No complicated coding or computer science degree</span>
              </li>
              <li className="flex items-center gap-2.5">
                <span className="w-1.5 h-1.5 rounded-full bg-slate-400"></span>
                <span>No expensive office leases or full-time employees</span>
              </li>
              <li className="flex items-center gap-2.5">
                <span className="w-1.5 h-1.5 rounded-full bg-slate-400"></span>
                <span>No complex software engineering setup</span>
              </li>
            </ul>
          </div>

          {/* Box 2: What You Actually Need */}
          <div className="bg-gradient-to-b from-[#0b142c] to-[#060c1d] border border-slate-800 rounded-2xl p-6 sm:p-8 text-white flex flex-col justify-between shadow-xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-orange-500/10 rounded-full blur-2xl pointer-events-none" />
            
            <div>
              <div className="w-12 h-12 rounded-xl bg-orange-500/20 text-orange-400 border border-orange-500/30 flex items-center justify-center mb-4">
                <Zap className="w-6 h-6 fill-orange-400" />
              </div>
              <h3 className="text-xl font-black text-white mb-2 font-heading">
                What You Actually Need
              </h3>
              <p className="text-slate-300 text-base leading-relaxed mb-6">
                You need the <span className="text-orange-400 font-bold">right skills, tools, and practical strategies</span> to turn modern AI systems into income.
              </p>
            </div>

            <div className="space-y-3 pt-4 border-t border-slate-800">
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-orange-500/20 text-orange-400 flex items-center justify-center shrink-0 mt-0.5">
                  <BrainCircuit className="w-3.5 h-3.5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white">The Right Skills</h4>
                  <p className="text-xs text-slate-400">Prompting, content generation, video crafting, and digital offer design.</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-orange-500/20 text-orange-400 flex items-center justify-center shrink-0 mt-0.5">
                  <Wrench className="w-3.5 h-3.5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white">The Modern Tools</h4>
                  <p className="text-xs text-slate-400">Generative graphic engines, automated web builders, and copywriting AI.</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-orange-500/20 text-orange-400 flex items-center justify-center shrink-0 mt-0.5">
                  <TrendingUp className="w-3.5 h-3.5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white">Practical Strategies</h4>
                  <p className="text-xs text-slate-400">Clear client acquisition, service packaging, and step-by-step monetization.</p>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Closing Banner: "This course shows you how." */}
        <div className="mt-12 text-center bg-gradient-to-r from-blue-50 via-amber-50/60 to-orange-50 border border-slate-200/90 rounded-2xl p-8 shadow-xs">
          <p className="text-2xl sm:text-3xl font-black text-slate-950 font-heading tracking-tight mb-2">
            This course shows you how.
          </p>
          <p className="text-slate-600 text-sm sm:text-base max-w-xl mx-auto mb-6">
            Join the live 90-minute masterclass for only ₹1 and see how to package and deliver high-value AI services step by step.
          </p>

          <button
            onClick={onRegisterClick}
            className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl bg-[#f5a623] hover:bg-[#e09214] active:scale-95 text-slate-950 font-black text-base sm:text-lg shadow-lg shadow-amber-500/25 transition-all cursor-pointer font-heading cta-blink-btn"
          >
            <span>Book Your Seat – Only ₹1</span>
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>

      </div>
    </section>
  );
};
