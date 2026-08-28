import React from 'react';
import sawadImg from '../assets/sawad.png';
import { 
  Award, 
  CheckCircle2, 
  TrendingUp, 
  Users, 
  Sparkles, 
  ArrowRight, 
  ShieldCheck, 
  Star,
  BrainCircuit,
  Megaphone,
  Share2,
  Workflow,
  Code2,
  ShoppingBag
} from 'lucide-react';

interface MentorSectionProps {
  onRegisterClick: () => void;
}

export const MentorSection: React.FC<MentorSectionProps> = ({ onRegisterClick }) => {
  const expertiseList = [
    { name: 'Artificial Intelligence', icon: BrainCircuit },
    { name: 'Meta Ads', icon: Megaphone },
    { name: 'Digital Marketing', icon: Share2 },
    { name: 'Business Automation', icon: Workflow },
    { name: 'Web Development', icon: Code2 },
    { name: 'Dropshipping', icon: ShoppingBag },
  ];

  return (
    <section id="mentor-section" className="py-20 sm:py-28 bg-[#070b19] relative overflow-hidden border-t border-slate-900">
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 left-10 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute bottom-10 right-10 w-[500px] h-[500px] bg-orange-600/10 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-orange-500/10 border border-orange-500/30 text-orange-400 text-xs font-bold uppercase tracking-wider mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Masterclass Host & Lead Strategist</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight font-heading">
            Meet Your <span className="text-[#f9572b]">Mentor</span>
          </h2>
          
          <div className="w-20 h-1 bg-[#f9572b] rounded-full mx-auto mt-3 shadow-md shadow-orange-500/50" />

          <p className="text-slate-400 text-sm sm:text-base mt-4 max-w-2xl mx-auto">
            Learn directly from industry leader <strong className="text-white">Sawad</strong> — mastering real-world AI automation and digital growth systems.
          </p>
        </div>

        {/* Main Mentor Card Container */}
        <div className="bg-[#0c142c] border border-blue-950/80 rounded-3xl p-6 sm:p-10 lg:p-12 relative overflow-hidden shadow-2xl shadow-black/60">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center">
            
            {/* Left: Mentor Portrait & Milestone Badges (5 Cols) */}
            <div className="lg:col-span-5 relative">
              <div className="relative mx-auto max-w-md rounded-3xl overflow-hidden border-2 border-blue-600/30 shadow-2xl shadow-blue-900/30 group">
                
                {/* Mentor Photo */}
                <img
                  src={sawadImg}
                  alt="Sawad - AI Mentor & Digital Strategist"
                  loading="eager"
                  onError={(e) => {
                    const target = e.currentTarget;
                    if (!target.src.includes('image%20sawad.png') && !target.src.includes('sawad.png')) {
                      target.src = '/image sawad.png';
                    }
                  }}
                  className="w-full h-auto aspect-[4/5] object-cover object-top filter brightness-95 contrast-105 group-hover:scale-102 transition-transform duration-500"
                />
                
                {/* Subtle vignette gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#070b19]/90 via-transparent to-transparent pointer-events-none" />

                {/* Floating Top Verified Badge */}
                <div className="absolute top-4 left-4 bg-black/70 backdrop-blur-md border border-white/20 px-3 py-1.5 rounded-full flex items-center gap-1.5 shadow-lg">
                  <Award className="w-4 h-4 text-orange-400" />
                  <span className="text-xs font-bold text-white tracking-wide">Top AI Strategist</span>
                </div>

                {/* Floating Bottom Verified Track Record Badge */}
                <div className="absolute bottom-4 left-4 right-4 bg-[#0a1128]/95 backdrop-blur-md border border-blue-500/30 p-3.5 rounded-2xl flex items-center justify-between shadow-xl">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-orange-500/20 text-orange-400 flex items-center justify-center font-black border border-orange-500/30">
                      <Users className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-[10px] text-slate-400 uppercase font-bold tracking-wider">Social Impact</p>
                      <p className="text-xs sm:text-sm font-black text-white">1 Million+ Learners Educated</p>
                    </div>
                  </div>
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse shadow-md shadow-emerald-400/50" />
                </div>
              </div>
            </div>

            {/* Right: Mentor Story, Credentials & Key Highlights (7 Cols) */}
            <div className="lg:col-span-7 space-y-6">
              
              <div>
                <div className="flex flex-wrap items-center gap-2 mb-2">
                  <span className="px-2.5 py-0.5 rounded-md bg-blue-600/20 text-blue-400 border border-blue-500/30 text-xs font-bold">
                    Official Masterclass Instructor
                  </span>
                  <div className="flex items-center text-amber-400 gap-1 text-xs font-semibold">
                    <Star className="w-3.5 h-3.5 fill-amber-400" />
                    <span>4.9/5 Student Rating</span>
                  </div>
                </div>
                
                <h3 className="text-3xl sm:text-4xl font-black text-white tracking-tight font-heading">
                  Sawad
                </h3>
                <p className="text-[#f9572b] font-bold text-base sm:text-lg mt-1 tracking-wide">
                  AI Mentor • Digital Strategist
                </p>
              </div>

              {/* Key Achievements Cards */}
              <div>
                <h4 className="text-xs font-black uppercase tracking-wider text-slate-400 mb-3 flex items-center gap-2">
                  <TrendingUp className="w-4 h-4 text-orange-400" />
                  <span>Key Achievements</span>
                </h4>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                  {/* Achievement 1 */}
                  <div className="bg-[#070c1e] p-4 rounded-2xl border border-blue-900/40 hover:border-blue-700/60 transition-all">
                    <div className="flex items-start gap-3">
                      <div className="w-9 h-9 rounded-xl bg-orange-500/20 text-orange-400 flex items-center justify-center font-black border border-orange-500/30 shrink-0 mt-0.5">
                        <Users className="w-4 h-4" />
                      </div>
                      <div>
                        <h5 className="text-sm font-bold text-white font-heading">Educated 1 Million+ Learners</h5>
                        <p className="text-xs text-slate-400 mt-1 leading-relaxed">
                          Educated 1 Million+ learners via social media with actionable frameworks.
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Achievement 2 */}
                  <div className="bg-[#070c1e] p-4 rounded-2xl border border-blue-900/40 hover:border-blue-700/60 transition-all">
                    <div className="flex items-start gap-3">
                      <div className="w-9 h-9 rounded-xl bg-blue-500/20 text-blue-400 flex items-center justify-center font-black border border-blue-500/30 shrink-0 mt-0.5">
                        <TrendingUp className="w-4 h-4" />
                      </div>
                      <div>
                        <h5 className="text-sm font-bold text-white font-heading">Business Scaling</h5>
                        <p className="text-xs text-slate-400 mt-1 leading-relaxed">
                          Helped multiple businesses scale via AI & Automation systems.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Areas of Expertise */}
              <div>
                <h4 className="text-xs font-black uppercase tracking-wider text-slate-400 mb-3 flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-emerald-400" />
                  <span>Areas of Expertise</span>
                </h4>

                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
                  {expertiseList.map((item, idx) => {
                    const IconComp = item.icon;
                    return (
                      <div 
                        key={idx} 
                        className="flex items-center gap-2.5 px-3 py-2.5 rounded-xl bg-[#070c1e] border border-slate-800/90 text-xs text-slate-200 font-medium hover:border-orange-500/40 hover:text-white transition-colors"
                      >
                        <IconComp className="w-4 h-4 text-orange-400 shrink-0" />
                        <span className="truncate">{item.name}</span>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Direct CTA button */}
              <div className="pt-2">
                <button
                  id="mentor-register-live-btn"
                  onClick={onRegisterClick}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-xl bg-[#f9572b] hover:bg-[#e0451b] active:scale-95 text-white font-black text-sm sm:text-base tracking-tight shadow-xl shadow-orange-600/30 transition-all cursor-pointer font-heading cta-blink-orange"
                >
                  <span>Book Your Seat – Only ₹1</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

