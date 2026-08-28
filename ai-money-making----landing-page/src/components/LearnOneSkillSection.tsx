import React from 'react';
import { 
  Sparkles, 
  Gift, 
  Users, 
  Lightbulb, 
  ArrowRight, 
  CheckCircle2, 
  Rocket, 
  Compass, 
  TrendingUp, 
  ShieldCheck 
} from 'lucide-react';

interface LearnOneSkillSectionProps {
  onRegisterClick: () => void;
}

export const LearnOneSkillSection: React.FC<LearnOneSkillSectionProps> = ({ onRegisterClick }) => {
  const steps = [
    { num: '01', label: 'Choose One Skill', desc: 'Pick any 1 tool or skill that excites you' },
    { num: '02', label: 'Learn the Basics', desc: 'Grasp the core fundamentals in 1 hour' },
    { num: '03', label: 'Practice & Execute', desc: 'Create your first output using real prompts' },
    { num: '04', label: 'Build Confidence', desc: 'Share your work and see instant momentum' },
    { num: '05', label: 'Next Level', desc: 'Unlock advanced AI workflows & opportunities' }
  ];

  const bonuses = [
    {
      icon: Gift,
      badge: 'FREE BONUS • VALUE ₹2,000+',
      title: '₹2,000+ Worth of Prompt Kits',
      description: 'Get a valuable collection of ready-to-use AI prompts to help you learn and create faster.',
      highlights: ['Pre-tested master prompts', 'Copy-paste workflow templates', 'Fast-track output cheatsheets'],
      gradient: 'from-amber-500/10 via-orange-500/5 to-transparent',
      borderColor: 'border-amber-200/90 hover:border-amber-400',
      iconBg: 'bg-amber-500 text-white',
      badgeBg: 'bg-amber-100 text-amber-900 border-amber-300'
    },
    {
      icon: Users,
      badge: 'EXCLUSIVE ACCESS',
      title: 'Community Access',
      description: 'Join our learning community and stay connected with other AI learners.',
      highlights: ['Peer networking & feedback', 'Direct mentor announcements', 'Collaborative growth circle'],
      gradient: 'from-blue-500/10 via-indigo-500/5 to-transparent',
      borderColor: 'border-blue-200/90 hover:border-blue-400',
      iconBg: 'bg-blue-600 text-white',
      badgeBg: 'bg-blue-100 text-blue-900 border-blue-300'
    },
    {
      icon: Lightbulb,
      badge: 'CONTINUOUS VALUE',
      title: 'Free AI Tips & Updates',
      description: 'Get useful tips, resources, and practical AI insights even after the workshop.',
      highlights: ['Weekly tool recommendations', 'Emerging AI trends breakdown', 'Actionable monetization tips'],
      gradient: 'from-emerald-500/10 via-teal-500/5 to-transparent',
      borderColor: 'border-emerald-200/90 hover:border-emerald-400',
      iconBg: 'bg-emerald-600 text-white',
      badgeBg: 'bg-emerald-100 text-emerald-900 border-emerald-300'
    }
  ];

  return (
    <section id="learn-one-skill" className="py-20 bg-white relative overflow-hidden border-t border-slate-200">
      {/* Ambient background decoration */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[400px] bg-gradient-to-r from-orange-100/40 via-amber-50/40 to-blue-100/40 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-14">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-100 border border-slate-200 text-slate-800 text-xs sm:text-sm font-bold tracking-wide">
            <Compass className="w-4 h-4 text-[#f9572b]" />
            <span>SIMPLE & EFFECTIVE LEARNING PATH</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-950 tracking-tight font-heading">
            Learn One Skill at a Time
          </h2>

          <p className="text-lg sm:text-xl font-bold text-[#f9572b] tracking-tight">
            You don’t need to master everything at once.
          </p>

          <p className="text-slate-600 text-sm sm:text-base max-w-2xl mx-auto pt-1 font-medium leading-relaxed">
            This workshop gives you a strong beginner-level foundation. Once you gain confidence, you can continue your journey and move towards advanced-level AI skills and opportunities.
          </p>
        </div>

        {/* Step-by-Step Flow Bar */}
        <div className="bg-slate-900 text-white rounded-2xl p-6 sm:p-8 shadow-xl border border-slate-800 mb-16 relative overflow-hidden">
          <div className="absolute -right-12 -bottom-12 w-64 h-64 bg-orange-500/10 rounded-full blur-3xl pointer-events-none" />
          
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-6">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-orange-500/20 text-orange-400 flex items-center justify-center font-black text-sm border border-orange-500/30">
                <TrendingUp className="w-4 h-4" />
              </div>
              <span className="text-sm font-extrabold uppercase tracking-wider text-orange-400">
                Your Natural Progression Roadmap
              </span>
            </div>
            <span className="text-xs text-slate-400 font-medium">
              Zero Overwhelm • Pure Practical Focus
            </span>
          </div>

          {/* Steps Horizontal / Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-3 relative">
            {steps.map((step, idx) => (
              <div 
                key={step.num}
                className="bg-slate-800/80 hover:bg-slate-800 border border-slate-700/70 hover:border-orange-500/40 rounded-xl p-4 transition-all flex flex-col justify-between relative group"
              >
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-black text-orange-400 font-mono tracking-wider">
                      STEP {step.num}
                    </span>
                    {idx < steps.length - 1 && (
                      <ArrowRight className="w-3.5 h-3.5 text-slate-500 hidden md:block group-hover:text-orange-400 transition-colors" />
                    )}
                  </div>
                  <h4 className="text-sm font-bold text-white font-heading tracking-tight mb-1">
                    {step.label}
                  </h4>
                  <p className="text-[11px] text-slate-400 leading-snug">
                    {step.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-6 pt-5 border-t border-slate-800/90 flex flex-col sm:flex-row items-center justify-between gap-3 text-center sm:text-left">
            <p className="text-xs text-slate-300 font-medium">
              ✨ <strong className="text-white">Choose one skill → Learn the basics → Practice → Build your confidence → Move to the next level.</strong>
            </p>
            <div className="inline-flex items-center gap-1.5 text-xs text-emerald-400 font-bold shrink-0">
              <ShieldCheck className="w-4 h-4" />
              <span>100% Beginner Friendly</span>
            </div>
          </div>
        </div>

        {/* 🎁 What You'll Get Subsection */}
        <div className="mb-14">
          <div className="text-center max-w-2xl mx-auto space-y-2 mb-10">
            <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-amber-100 border border-amber-300 text-amber-900 text-xs font-extrabold tracking-wide">
              <span>🎁 WHAT YOU’LL GET</span>
            </div>
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-black text-slate-950 font-heading tracking-tight">
              Included With Your ₹99 Registration
            </h3>
            <p className="text-slate-600 text-xs sm:text-sm font-medium">
              Everything you receive when you reserve your live workshop seat today.
            </p>
          </div>

          {/* 3 Bonus Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {bonuses.map((bonus, idx) => {
              const Icon = bonus.icon;
              return (
                <div 
                  key={idx}
                  className={`bg-white bg-gradient-to-b ${bonus.gradient} border ${bonus.borderColor} rounded-2xl p-6 sm:p-7 shadow-xs hover:shadow-lg transition-all duration-300 flex flex-col justify-between group`}
                >
                  <div>
                    {/* Header */}
                    <div className="flex items-center justify-between mb-5">
                      <div className={`w-12 h-12 rounded-xl ${bonus.iconBg} flex items-center justify-center shadow-md shadow-slate-900/10 group-hover:scale-105 transition-transform`}>
                        <Icon className="w-6 h-6" />
                      </div>
                      <span className={`text-[10px] font-extrabold uppercase tracking-wider px-2.5 py-1 rounded-full border ${bonus.badgeBg}`}>
                        {bonus.badge}
                      </span>
                    </div>

                    <h4 className="text-xl font-black text-slate-900 mb-2.5 font-heading tracking-tight">
                      {bonus.title}
                    </h4>

                    <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mb-5">
                      {bonus.description}
                    </p>
                  </div>

                  {/* Highlights list */}
                  <div className="pt-4 border-t border-slate-100 space-y-2 mt-auto">
                    {bonus.highlights.map((item, hIdx) => (
                      <div key={hIdx} className="flex items-center gap-2 text-xs text-slate-700 font-medium">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Start Small Philosophy Banner & Final CTA */}
        <div className="bg-gradient-to-br from-[#0c1633] via-[#091128] to-[#040817] border-2 border-orange-500/30 rounded-3xl p-6 sm:p-10 text-white shadow-2xl relative overflow-hidden">
          <div className="absolute -top-12 -right-12 w-64 h-64 bg-[#f9572b]/20 rounded-full blur-3xl pointer-events-none" />
          
          <div className="max-w-3xl mx-auto text-center space-y-4 relative z-10">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-orange-500/20 border border-orange-500/30 text-orange-400 text-xs font-black">
              <Rocket className="w-4 h-4 text-orange-400" />
              <span>YOUR AI JOURNEY STARTS HERE</span>
            </div>

            <h3 className="text-2xl sm:text-3xl md:text-4xl font-black text-white font-heading tracking-tight leading-tight">
              Start Small. Learn One Skill. <br className="hidden sm:inline" />
              <span className="text-[#f5a623]">Grow to the Advanced Level.</span>
            </h3>

            <p className="text-slate-300 text-sm sm:text-base leading-relaxed max-w-2xl mx-auto font-medium">
              This is just the beginning of your AI journey. Learn the fundamentals today, build your skills with practice, and progress towards advanced AI skills tomorrow.
            </p>

            <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
              <button
                onClick={onRegisterClick}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-[#f5a623] hover:bg-[#e09214] active:scale-95 text-slate-950 font-black text-base shadow-xl shadow-amber-500/25 transition-all cursor-pointer font-heading tracking-tight cta-blink-btn"
              >
                <span>Book Your Seat – Only ₹99</span>
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>

            <p className="text-xs text-slate-400 pt-1 font-medium">
              🔒 Instant Access • WhatsApp & Email Confirmation • 100% Practical
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};
