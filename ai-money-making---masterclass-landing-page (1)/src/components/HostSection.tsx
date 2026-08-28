import React from 'react';
import { 
  Award, 
  CheckCircle2, 
  TrendingUp, 
  Users, 
  Sparkles, 
  ArrowRight, 
  ShieldCheck, 
  Globe,
  Quote
} from 'lucide-react';

interface HostSectionProps {
  onRegisterClick: () => void;
}

export const HostSection: React.FC<HostSectionProps> = ({ onRegisterClick }) => {
  return (
    <section id="host-section" className="py-16 sm:py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="bg-slate-50 border border-slate-200/90 rounded-3xl p-6 sm:p-10 lg:p-12 relative overflow-hidden shadow-xl shadow-slate-200/40">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* Host Image / Graphic (5 cols) */}
            <div className="lg:col-span-5 relative">
              <div className="relative mx-auto max-w-sm rounded-3xl overflow-hidden border-2 border-blue-200 shadow-2xl shadow-blue-500/10">
                <img
                  src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=800&q=80"
                  alt="Alex Vance - AI Coach Launchpad Host"
                  className="w-full h-auto aspect-[4/5] object-cover object-top"
                />
                
                {/* Floating Revenue Milestone Badge */}
                <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-md border border-blue-200 p-3 rounded-2xl flex items-center justify-between shadow-lg">
                  <div className="flex items-center gap-2.5">
                    <div className="w-9 h-9 rounded-xl bg-blue-100 text-blue-600 flex items-center justify-center font-bold">
                      <TrendingUp className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-[10px] text-slate-500 uppercase font-bold">Verified Track Record</p>
                      <p className="text-xs font-bold text-slate-900">$3.8M+ Generated For Students</p>
                    </div>
                  </div>
                  <span className="w-2.5 h-2.5 rounded-full bg-blue-600 animate-pulse"></span>
                </div>
              </div>
            </div>

            {/* Host Bio & Background (7 cols) */}
            <div className="lg:col-span-7 space-y-6">
              
              <div>
                <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-bold mb-3">
                  <Award className="w-3.5 h-3.5 text-blue-600" />
                  <span>MEET YOUR MASTERCLASS INSTRUCTOR</span>
                </div>
                
                <h2 className="text-3xl sm:text-4xl font-black text-slate-950 tracking-tight font-heading">
                  Alex Vance
                </h2>
                <p className="text-blue-600 font-bold text-sm sm:text-base mt-1">
                  AI Systems Architect & Founder of AI Money Making
                </p>
              </div>

              <div className="space-y-3.5 text-slate-600 text-sm sm:text-base leading-relaxed">
                <p>
                  Over the past 4 years, Alex transitioned from working 70-hour weeks as an overstressed freelancer to pioneering the <strong>1-Click AI Delivery Model</strong> — scaling his private advisory client roster to multi-7-figures with zero full-time employees.
                </p>
                <p>
                  Today, through the AI Money Making Masterclass, Alex has helped over <strong>4,820+ coaches, agency operators, and consultants across 34 countries</strong> package, sell, and fulfill high-ticket AI transformations ($3k–$10k) while dramatically slashing their weekly working hours.
                </p>
              </div>

              {/* Host Quote Box */}
              <div className="bg-white p-4 sm:p-5 rounded-2xl border border-slate-200 shadow-2xs relative">
                <Quote className="w-6 h-6 text-blue-200 absolute top-3 right-3" />
                <p className="text-xs sm:text-sm text-slate-700 italic font-medium leading-relaxed">
                  "AI will not replace great coaches, consultants, and experts. But the coaches and consultants who leverage intelligent AI systems will completely dominate and replace those who don't. That is what this masterclass is designed to help you execute."
                </p>
              </div>

              {/* Host Stat Pills */}
              <div className="grid grid-cols-3 gap-3 pt-2">
                <div className="bg-white p-3 rounded-xl border border-slate-200 shadow-2xs text-center">
                  <div className="text-xl sm:text-2xl font-black text-slate-950 font-heading">4,820+</div>
                  <div className="text-[11px] text-slate-500 font-semibold">Students Trained</div>
                </div>
                <div className="bg-white p-3 rounded-xl border border-slate-200 shadow-2xs text-center">
                  <div className="text-xl sm:text-2xl font-black text-blue-600 font-heading">$4.5k</div>
                  <div className="text-[11px] text-slate-500 font-semibold">Avg. Deal Size</div>
                </div>
                <div className="bg-white p-3 rounded-xl border border-slate-200 shadow-2xs text-center">
                  <div className="text-xl sm:text-2xl font-black text-indigo-600 font-heading">34</div>
                  <div className="text-[11px] text-slate-500 font-semibold">Countries Worldwide</div>
                </div>
              </div>

              {/* CTA */}
              <div className="pt-2">
                <button
                  id="host-learn-with-alex-btn"
                  onClick={onRegisterClick}
                  className="bg-blue-50 hover:bg-blue-100 text-blue-700 font-bold px-6 py-3 rounded-xl text-sm flex items-center gap-2 border border-blue-200 transition-all cursor-pointer shadow-2xs"
                >
                  <span>Learn Live With Alex in Today's Workshop</span>
                  <ArrowRight className="w-4 h-4 text-blue-600" />
                </button>
              </div>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
