import React from 'react';
import { 
  GraduationCap, 
  Briefcase, 
  Laptop, 
  Store, 
  UserCheck, 
  Home, 
  Video, 
  TrendingUp, 
  Rocket, 
  CheckCircle2, 
  Sparkles,
  ArrowRight
} from 'lucide-react';

interface WhoIsThisForSectionProps {
  onRegisterClick: () => void;
}

export const WhoIsThisForSection: React.FC<WhoIsThisForSectionProps> = ({ onRegisterClick }) => {
  const targetAudience = [
    {
      emoji: '🎓',
      icon: GraduationCap,
      title: 'Students',
      description: 'Build future-proof AI skills to earn while studying and graduate ahead of the job market.'
    },
    {
      emoji: '💼',
      icon: Briefcase,
      title: 'Job Seekers',
      description: 'Stand out from hundreds of applicants with in-demand AI workflows and prompt capabilities.'
    },
    {
      emoji: '🧑‍💻',
      icon: Laptop,
      title: 'Freelancers',
      description: 'Deliver client projects 10x faster and charge premium rates for AI-assisted services.'
    },
    {
      emoji: '🏪',
      icon: Store,
      title: 'Business Owners',
      description: 'Automate marketing, customer communication, and content creation to cut costs.'
    },
    {
      emoji: '👩‍💻',
      icon: UserCheck,
      title: 'Professionals',
      description: 'Boost day-to-day productivity and explore high-margin side-income streams.'
    },
    {
      emoji: '🏠',
      icon: Home,
      title: 'Housewives',
      description: 'Build a flexible, location-independent digital income right from the comfort of home.'
    },
    {
      emoji: '📱',
      icon: Video,
      title: 'Content Creators',
      description: 'Speed up scripting, video rendering, graphics, and social media scheduling with AI.'
    },
    {
      emoji: '📈',
      icon: TrendingUp,
      title: 'Digital Marketers',
      description: 'Supercharge campaigns with AI copywriting, visual generation, and automated ad creatives.'
    },
    {
      emoji: '🚀',
      icon: Rocket,
      title: 'Anyone who wants to learn AI',
      description: 'Explore practical online income opportunities with zero coding or technical background required.',
      highlight: true
    }
  ];

  return (
    <section className="py-20 bg-white relative overflow-hidden border-t border-slate-200/80">
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 right-1/4 w-[600px] h-[300px] bg-orange-50/60 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute bottom-1/4 left-1/4 w-[600px] h-[300px] bg-blue-50/60 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-14">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-orange-50 border border-orange-200 text-orange-800 text-xs sm:text-sm font-bold tracking-wide">
            <Sparkles className="w-4 h-4 text-orange-600" />
            <span>IDEAL CANDIDATES</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-950 tracking-tight font-heading">
            Who Is This For?
          </h2>

          <p className="text-lg sm:text-xl font-bold text-[#f9572b] tracking-tight">
            This Course Is Perfect For You If You Are:
          </p>

          <p className="text-slate-600 text-sm sm:text-base max-w-2xl mx-auto pt-1 font-medium">
            Whether you want a flexible side-income or a full-time digital business, this system is designed for anyone ready to leverage modern AI tools.
          </p>
        </div>

        {/* 9 Audience Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {targetAudience.map((item, idx) => {
            const Icon = item.icon;
            const isHighlight = item.highlight;

            return (
              <div
                key={idx}
                className={`rounded-2xl p-6 transition-all duration-200 flex flex-col justify-between ${
                  isHighlight 
                    ? 'bg-gradient-to-br from-[#0c152e] to-[#060b1d] border-2 border-orange-500/60 text-white shadow-xl sm:col-span-2 lg:col-span-1'
                    : 'bg-slate-50/90 hover:bg-white border border-slate-200/90 hover:border-slate-300 shadow-xs hover:shadow-md'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <span className="text-3xl" role="img" aria-label={item.title}>
                        {item.emoji}
                      </span>
                      <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${
                        isHighlight 
                          ? 'bg-orange-500 text-white shadow-md shadow-orange-500/30' 
                          : 'bg-white border border-slate-200 text-slate-700'
                      }`}>
                        <Icon className="w-5 h-5" />
                      </div>
                    </div>

                    {isHighlight && (
                      <span className="text-[10px] font-black uppercase tracking-wider px-2.5 py-1 rounded-full bg-orange-500/20 text-orange-400 border border-orange-500/40">
                        Universal
                      </span>
                    )}
                  </div>

                  <h3 className={`text-lg sm:text-xl font-black mb-2 font-heading tracking-tight ${
                    isHighlight ? 'text-white' : 'text-slate-900'
                  }`}>
                    {item.title}
                  </h3>

                  <p className={`text-xs sm:text-sm leading-relaxed font-normal ${
                    isHighlight ? 'text-slate-300' : 'text-slate-600'
                  }`}>
                    {item.description}
                  </p>
                </div>

                <div className={`pt-4 mt-4 border-t flex items-center gap-1.5 text-xs font-semibold ${
                  isHighlight ? 'border-slate-800 text-orange-400' : 'border-slate-200/80 text-emerald-600'
                }`}>
                  <CheckCircle2 className="w-4 h-4 shrink-0" />
                  <span>100% Beginner Friendly</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Banner */}
        <div className="mt-12 text-center bg-slate-50 border border-slate-200/80 rounded-2xl p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xs">
          <div className="text-left">
            <h4 className="text-lg sm:text-xl font-black text-slate-900 font-heading">
              Ready to see how AI fits your specific background?
            </h4>
            <p className="text-slate-600 text-xs sm:text-sm mt-1">
              Join live to get real-world examples and step-by-step monetization roadmaps.
            </p>
          </div>

          <button
            onClick={onRegisterClick}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-[#f5a623] hover:bg-[#e09214] active:scale-95 text-slate-950 font-black text-base shadow-lg shadow-amber-500/20 transition-all cursor-pointer shrink-0 font-heading tracking-tight cta-blink-btn"
          >
            <span>Book Your Seat – Only ₹1</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </section>
  );
};
