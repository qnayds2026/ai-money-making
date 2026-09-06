import React from 'react';
import { 
  Sparkles, 
  Terminal, 
  Palette, 
  Video, 
  UserSquare2, 
  Mic, 
  Globe, 
  Megaphone, 
  Search, 
  Rocket, 
  Users, 
  MessageSquare, 
  Trophy,
  ArrowRight,
  CheckCircle2
} from 'lucide-react';

interface CourseModulesSectionProps {
  onRegisterClick: () => void;
}

export const CourseModulesSection: React.FC<CourseModulesSectionProps> = ({ onRegisterClick }) => {
  const modules = [
    {
      number: '01',
      title: 'AI Fundamentals & Prompt Engineering',
      description: 'Learn how to use generative AI effectively and create better prompts.',
      icon: Terminal,
      category: 'Foundation',
      highlights: ['Prompt structuring frameworks', 'Context engineering & chaining', 'Avoiding AI hallucinations']
    },
    {
      number: '02',
      title: 'AI Graphic Design',
      description: 'Create professional posters, advertisements and social media creatives.',
      icon: Palette,
      category: 'Design & Visuals',
      highlights: ['High-converting ad posters', 'Branding & logo creation', 'Commercial image generation']
    },
    {
      number: '03',
      title: 'AI Video Creation',
      description: 'Create videos, Reels, Shorts and promotional content using AI.',
      icon: Video,
      category: 'Video Production',
      highlights: ['Viral Reels & Shorts creation', 'Text-to-video automation', 'Promotional product videos']
    },
    {
      number: '04',
      title: 'AI Avatar Videos',
      description: 'Create professional AI avatar and presenter videos.',
      icon: UserSquare2,
      category: 'Presenter AI',
      highlights: ['Photorealistic AI human avatars', 'Multi-speaker video rendering', 'Camera-free presenter content']
    },
    {
      number: '05',
      title: 'AI Voice & Audio',
      description: 'Create AI voiceovers and multilingual audio content.',
      icon: Mic,
      category: 'Audio & Voice',
      highlights: ['Natural humanlike voice clones', 'Multilingual translations & dubbing', 'Background score generation']
    },
    {
      number: '06',
      title: 'Build Websites With AI',
      description: 'Create functional websites and landing pages without traditional coding.',
      icon: Globe,
      category: 'Web & Funnels',
      highlights: ['High-converting landing pages', 'No-code builder workflows', 'E-commerce & portfolio setups']
    },
    {
      number: '07',
      title: 'AI Digital Marketing',
      description: 'Use AI for content strategy, social media and marketing campaigns.',
      icon: Megaphone,
      category: 'Marketing Growth',
      highlights: ['30-day automated content plans', 'Ad copy and email sequencing', 'Audience engagement tactics']
    },
    {
      number: '08',
      title: 'AI Product Research',
      description: 'Research products, trends, competitors and potential opportunities.',
      icon: Search,
      category: 'Market Intelligence',
      highlights: ['Trend forecasting with AI', 'Competitor ad & pricing teardowns', 'High-margin niche discovery']
    },
    {
      number: '09',
      title: 'Launch an Online Business',
      description: 'Explore product-based, service-based, affiliate and digital business models.',
      icon: Rocket,
      category: 'Business Models',
      highlights: ['Digital agency setup', 'Affiliate & digital products', 'Recurring retainer packages']
    },
    {
      number: '10',
      title: 'Customer Acquisition',
      description: 'Learn how to identify potential customers, create offers and follow up with leads.',
      icon: Users,
      category: 'Sales & Leads',
      highlights: ['Irresistible offer creation', 'Inbound & outbound lead engines', 'High-converting sales scripts']
    },
    {
      number: '11',
      title: 'WhatsApp Business',
      description: 'Set up WhatsApp Business for customer communication, lead management and follow-up.',
      icon: MessageSquare,
      category: 'Automation & Chat',
      highlights: ['Automated greeting & quick replies', 'Catalog & payment integration', 'Broadcast lead follow-up flows']
    },
    {
      number: '12',
      title: 'Final AI Business Project',
      description: "Combine what you've learned into one practical AI-powered project.",
      icon: Trophy,
      category: 'Capstone Project',
      highlights: ['Complete portfolio showcase', 'Real client proposal & assets', 'Live launch roadmap review']
    }
  ];

  return (
    <section className="py-20 bg-slate-50 relative overflow-hidden border-t border-slate-200">
      {/* Background glow effects */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-blue-100/40 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-14">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-100/70 border border-blue-200 text-blue-800 text-xs sm:text-sm font-bold tracking-wide">
            <Sparkles className="w-4 h-4 text-blue-600" />
            <span>STEP-BY-STEP COMPLETE CURRICULUM</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-950 tracking-tight font-heading">
            What You Will Learn
          </h2>

          <p className="text-lg sm:text-xl font-bold text-[#f9572b] tracking-tight">
            12 Comprehensive Action-Oriented Modules
          </p>

          <p className="text-slate-600 text-sm sm:text-base max-w-2xl mx-auto pt-1 font-medium">
            From prompting mastery to launching your automated digital business and landing paying clients.
          </p>
        </div>

        {/* 12 Modules Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {modules.map((mod, idx) => {
            const Icon = mod.icon;
            const isCapstone = mod.number === '12';

            return (
              <div
                key={idx}
                className={`rounded-2xl p-6 transition-all duration-200 flex flex-col justify-between ${
                  isCapstone 
                    ? 'bg-gradient-to-br from-[#0c152e] to-[#060b1d] border-2 border-orange-500/60 text-white shadow-xl md:col-span-2 lg:col-span-1'
                    : 'bg-white hover:bg-slate-50/50 border border-slate-200/90 hover:border-slate-300 shadow-xs hover:shadow-md'
                }`}
              >
                <div>
                  {/* Module Header Bar */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <span className={`text-xs font-black tracking-wider uppercase px-2.5 py-1 rounded-lg ${
                        isCapstone 
                          ? 'bg-orange-500 text-white font-heading' 
                          : 'bg-slate-100 text-slate-700 font-heading border border-slate-200'
                      }`}>
                        Module {mod.number}
                      </span>
                    </div>

                    <div className={`w-9 h-9 rounded-xl flex items-center justify-center ${
                      isCapstone 
                        ? 'bg-orange-500/20 text-orange-400 border border-orange-500/30' 
                        : 'bg-blue-50 text-blue-700 border border-blue-100'
                    }`}>
                      <Icon className="w-4 h-4" />
                    </div>
                  </div>

                  {/* Module Title */}
                  <h3 className={`text-lg sm:text-xl font-black mb-2 font-heading tracking-tight ${
                    isCapstone ? 'text-white' : 'text-slate-900'
                  }`}>
                    {mod.title}
                  </h3>

                  {/* Module Description */}
                  <p className={`text-xs sm:text-sm leading-relaxed mb-4 ${
                    isCapstone ? 'text-slate-300' : 'text-slate-600'
                  }`}>
                    {mod.description}
                  </p>
                </div>

                {/* Practical Takeaways */}
                <div className={`pt-4 border-t space-y-1.5 ${
                  isCapstone ? 'border-slate-800' : 'border-slate-100'
                }`}>
                  {mod.highlights.map((item, hIdx) => (
                    <div key={hIdx} className="flex items-center gap-2 text-xs font-medium">
                      <CheckCircle2 className={`w-3.5 h-3.5 shrink-0 ${
                        isCapstone ? 'text-orange-400' : 'text-emerald-500'
                      }`} />
                      <span className={isCapstone ? 'text-slate-300' : 'text-slate-600'}>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Action Callout Bar */}
        <div className="mt-14 bg-gradient-to-r from-[#0c152e] via-[#091126] to-[#060b1d] border border-slate-800 rounded-2xl p-6 sm:p-8 text-white flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl">
          <div className="space-y-1 text-center md:text-left">
            <span className="text-xs font-bold text-orange-400 uppercase tracking-widest">
              Join The Next Live Cohort
            </span>
            <h3 className="text-xl sm:text-2xl font-black font-heading text-white">
              Get Complete Access to All 12 Modules & Blueprints
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 max-w-xl">
              Includes prompt libraries, client proposal templates, and practical project walkthroughs.
            </p>
          </div>

          <button
            onClick={onRegisterClick}
            className="w-full md:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-[#f5a623] hover:bg-[#e09214] active:scale-95 text-slate-950 font-black text-base shadow-lg shadow-amber-500/25 transition-all cursor-pointer shrink-0 font-heading tracking-tight cta-blink-btn"
          >
            <span>Book Your Seat – Only ₹99</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </section>
  );
};
