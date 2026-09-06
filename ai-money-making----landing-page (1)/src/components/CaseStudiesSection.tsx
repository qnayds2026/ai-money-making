import React, { useState } from 'react';
import { 
  Users, 
  Star, 
  CheckCircle2, 
  TrendingUp, 
  Play, 
  ShieldCheck, 
  ArrowRight, 
  Sparkles,
  Award
} from 'lucide-react';
import { TESTIMONIALS_DATA } from '../data/courseData';
import { Testimonial } from '../types';

interface CaseStudiesSectionProps {
  onRegisterClick: () => void;
  onOpenVideoModal: () => void;
}

export const CaseStudiesSection: React.FC<CaseStudiesSectionProps> = ({ onRegisterClick, onOpenVideoModal }) => {
  const [selectedFilter, setSelectedFilter] = useState<string>('all');

  const filterCategories = [
    { id: 'all', label: 'All Transformations (6)' },
    { id: 'b2b', label: 'B2B & Sales' },
    { id: 'health', label: 'Health & Wellness' },
    { id: 'agency', label: 'Agency & Real Estate' },
    { id: 'career', label: 'Career & Wealth' }
  ];

  const filteredTestimonials = TESTIMONIALS_DATA.filter(item => {
    if (selectedFilter === 'all') return true;
    if (selectedFilter === 'b2b') return item.niche.includes('B2B');
    if (selectedFilter === 'health') return item.niche.includes('Health');
    if (selectedFilter === 'agency') return item.niche.includes('Real Estate') || item.niche.includes('Creator');
    if (selectedFilter === 'career') return item.niche.includes('Career') || item.niche.includes('Wealth');
    return true;
  });

  return (
    <section id="case-studies-section" className="py-16 sm:py-24 bg-slate-50 border-t border-slate-200 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-bold">
            <Users className="w-3.5 h-3.5 text-blue-600" />
            <span>VERIFIED STUDENT TRANSFORMATIONS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-950 tracking-tight font-heading">
            From Burnout to <span className="text-blue-600">$10k–$40k/Month</span>
          </h2>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            Real coaches, agency owners, and professionals who installed the AI Money Making system and completely reshaped their business.
          </p>
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
          {filterCategories.map(cat => (
            <button
              key={cat.id}
              onClick={() => setSelectedFilter(cat.id)}
              className={`px-4 py-1.5 rounded-full text-xs font-bold transition-all cursor-pointer ${
                selectedFilter === cat.id
                  ? 'bg-blue-600 text-white shadow-md shadow-blue-500/20'
                  : 'bg-white text-slate-600 border border-slate-200 hover:border-blue-300 hover:text-blue-600'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Testimonials 3-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredTestimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-white border border-slate-200 hover:border-blue-300 rounded-3xl p-6 flex flex-col justify-between transition-all group shadow-sm hover:shadow-md"
            >
              <div>
                {/* Header with Avatar and Stats */}
                <div className="flex items-start justify-between gap-3 mb-4">
                  <div className="flex items-center gap-3">
                    <img
                      src={testimonial.avatar}
                      alt={testimonial.name}
                      className="w-12 h-12 rounded-full object-cover border border-blue-200"
                    />
                    <div>
                      <div className="flex items-center gap-1.5">
                        <h4 className="font-bold text-slate-900 text-sm">{testimonial.name}</h4>
                        {testimonial.verifiedBadge && (
                          <ShieldCheck className="w-3.5 h-3.5 text-blue-600" />
                        )}
                      </div>
                      <p className="text-[11px] text-slate-500">{testimonial.role}</p>
                    </div>
                  </div>

                  <span className="text-[10px] font-bold bg-blue-50 text-blue-700 border border-blue-200 px-2.5 py-0.5 rounded-full">
                    {testimonial.highlightTag}
                  </span>
                </div>

                {/* Before / After Bar */}
                <div className="bg-slate-50 p-3 rounded-xl border border-slate-200 mb-4 grid grid-cols-2 gap-2 text-center">
                  <div>
                    <span className="text-[10px] text-slate-500 block uppercase font-medium">Before</span>
                    <span className="text-xs font-bold text-slate-700 font-mono">{testimonial.revenueBefore}</span>
                  </div>
                  <div className="border-l border-slate-200 pl-2">
                    <span className="text-[10px] text-blue-600 block uppercase font-bold">After AI Launch</span>
                    <span className="text-xs font-black text-blue-700 font-mono">{testimonial.revenueAfter}</span>
                  </div>
                </div>

                {/* Rating Stars */}
                <div className="flex items-center gap-1 mb-2.5">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                  ))}
                  <span className="text-[11px] text-slate-500 font-medium ml-1">({testimonial.timeline})</span>
                </div>

                {/* Headline & Quote */}
                <h5 className="text-sm font-bold text-slate-900 mb-2 leading-snug">
                  "{testimonial.headline}"
                </h5>

                <p className="text-xs text-slate-600 leading-relaxed line-clamp-4 group-hover:line-clamp-none transition-all">
                  {testimonial.quote}
                </p>
              </div>

              {/* Video Review Trigger Button */}
              <div className="mt-5 pt-3 border-t border-slate-100 flex items-center justify-between">
                <span className="text-[11px] text-slate-500 font-medium">{testimonial.niche}</span>
                
                <button
                  onClick={onOpenVideoModal}
                  className="flex items-center gap-1.5 text-xs text-blue-600 font-bold hover:text-blue-800 cursor-pointer"
                >
                  <Play className="w-3.5 h-3.5 fill-blue-600" />
                  <span>Watch Case Study</span>
                </button>
              </div>

            </div>
          ))}
        </div>

        {/* Bottom Social Proof Bar */}
        <div className="mt-14 p-6 rounded-2xl bg-white border border-slate-200 shadow-sm flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div>
            <h4 className="text-base font-bold text-slate-900">Want your own high-ticket transformation story?</h4>
            <p className="text-xs text-slate-500 mt-0.5">Register for today's free 90-minute live masterclass and receive the exact playbook.</p>
          </div>
          <button
            onClick={onRegisterClick}
            className="shrink-0 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white font-bold px-6 py-2.5 rounded-xl text-xs sm:text-sm flex items-center gap-2 shadow-md shadow-blue-500/20 active:scale-95 transition-all cursor-pointer cta-blink-blue"
          >
            <span>Claim Your Free Spot Now</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </section>
  );
};
