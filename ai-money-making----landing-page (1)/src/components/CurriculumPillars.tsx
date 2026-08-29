import React, { useState } from 'react';
import { 
  Magnet, 
  Crown, 
  Cpu, 
  TrendingUp, 
  CheckCircle2, 
  ArrowRight, 
  Sparkles, 
  Layers, 
  Laptop, 
  Code2, 
  FileText, 
  Play
} from 'lucide-react';
import { PILLARS_DATA } from '../data/courseData';
import { PillarModule } from '../types';

interface CurriculumPillarsProps {
  onRegisterClick: () => void;
}

export const CurriculumPillars: React.FC<CurriculumPillarsProps> = ({ onRegisterClick }) => {
  const [activePillarIndex, setActivePillarIndex] = useState(0);

  const getPillarIcon = (name: string) => {
    switch (name) {
      case 'Magnet':
        return <Magnet className="w-5 h-5" />;
      case 'Crown':
        return <Crown className="w-5 h-5" />;
      case 'Cpu':
        return <Cpu className="w-5 h-5" />;
      case 'TrendingUp':
        return <TrendingUp className="w-5 h-5" />;
      default:
        return <Sparkles className="w-5 h-5" />;
    }
  };

  return (
    <section id="curriculum-section" className="py-16 sm:py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-bold">
            <Layers className="w-3.5 h-3.5 text-blue-600" />
            <span>THE 4-PILLAR BLUEPRINT</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-950 tracking-tight font-heading">
            What You Will Learn In <span className="text-blue-600">90 Action-Packed Minutes</span>
          </h2>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            No vague fluff or philosophical theories. You get our exact step-by-step systems, architecture diagrams, and plug-and-play templates.
          </p>
        </div>

        {/* Pillar Selector Tabs on Mobile / Desktop */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 mb-8">
          {PILLARS_DATA.map((pillar, idx) => {
            const isActive = activePillarIndex === idx;
            return (
              <button
                key={idx}
                onClick={() => setActivePillarIndex(idx)}
                className={`p-4 rounded-2xl border text-left transition-all cursor-pointer flex flex-col justify-between relative overflow-hidden ${
                  isActive
                    ? 'bg-blue-50 border-blue-600 text-slate-900 shadow-md shadow-blue-500/10'
                    : 'bg-slate-50 border-slate-200 text-slate-600 hover:border-blue-300 hover:text-slate-900'
                }`}
              >
                {isActive && (
                  <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-600 to-indigo-600" />
                )}
                <div className="flex items-center justify-between mb-2">
                  <span className={`text-xs font-mono font-bold px-2 py-0.5 rounded ${
                    isActive ? 'bg-blue-600 text-white font-black' : 'bg-slate-200 text-slate-600'
                  }`}>
                    PILLAR {pillar.number}
                  </span>
                  <div className={isActive ? 'text-blue-600' : 'text-slate-400'}>
                    {getPillarIcon(pillar.iconName)}
                  </div>
                </div>
                <p className="text-xs sm:text-sm font-bold text-slate-900 line-clamp-1">{pillar.title}</p>
              </button>
            );
          })}
        </div>

        {/* Active Pillar Highlight Showcase */}
        {(() => {
          const pillar = PILLARS_DATA[activePillarIndex];
          return (
            <div className="bg-slate-50 border border-slate-200/90 rounded-3xl p-6 sm:p-8 lg:p-10 shadow-xl shadow-slate-200/40 relative overflow-hidden">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                
                {/* Left Side: Overview & Deliverables (7 cols) */}
                <div className="lg:col-span-7 space-y-6">
                  
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-2xl bg-blue-100 text-blue-600 border border-blue-200 flex items-center justify-center font-bold">
                      {getPillarIcon(pillar.iconName)}
                    </div>
                    <div>
                      <span className="text-xs font-mono uppercase tracking-wider text-blue-600 font-bold">
                        Pillar {pillar.number} Deep Dive
                      </span>
                      <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-950 font-heading">
                        {pillar.title}
                      </h3>
                    </div>
                  </div>

                  <p className="text-blue-700 font-semibold text-sm sm:text-base">
                    "{pillar.subtitle}"
                  </p>

                  <p className="text-slate-600 text-sm leading-relaxed">
                    {pillar.description}
                  </p>

                  {/* Concrete Deliverables Checklist */}
                  <div className="space-y-3 pt-2">
                    <p className="text-xs font-bold uppercase tracking-wider text-slate-600">
                      Key Deliverables & Systems Handed to You:
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                      {pillar.deliverables.map((item, dIdx) => (
                        <div key={dIdx} className="flex items-start gap-2 bg-white p-3.5 rounded-xl border border-slate-200 shadow-2xs">
                          <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                          <span className="text-xs font-medium text-slate-700">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Core Takeaway */}
                  <div className="bg-blue-50/80 border border-blue-200 p-4 rounded-xl flex items-start gap-3">
                    <Sparkles className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
                    <div>
                      <p className="text-xs font-bold text-blue-900 uppercase tracking-wide">The Outcome Transformation:</p>
                      <p className="text-xs sm:text-sm text-slate-700 mt-0.5">{pillar.takeaway}</p>
                    </div>
                  </div>

                </div>

                {/* Right Side: Visual Demo Preview & Tech Stack (5 cols) */}
                <div className="lg:col-span-5 bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-6">
                  
                  <div>
                    <div className="flex items-center justify-between pb-3 border-b border-slate-100 mb-3">
                      <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                        Live Demonstration:
                      </span>
                      <span className="text-[10px] font-mono bg-red-50 text-red-600 px-2 py-0.5 rounded border border-red-200 font-bold">
                        LIVE SCREEN SHARE
                      </span>
                    </div>

                    <p className="text-xs text-slate-700 bg-slate-50 p-3.5 rounded-xl border border-slate-200 font-mono leading-relaxed">
                      💡 {pillar.previewSnippet}
                    </p>
                  </div>

                  {/* Tools Used In This Pillar */}
                  <div>
                    <span className="text-xs font-bold text-slate-500 uppercase tracking-wider block mb-2">
                      Tools & Platforms Mastered:
                    </span>
                    <div className="flex flex-wrap gap-2">
                      {pillar.tools.map((tool, tIdx) => (
                        <span key={tIdx} className="bg-blue-50 text-blue-800 px-2.5 py-1 rounded-lg text-xs font-semibold border border-blue-200">
                          {tool}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* CTA */}
                  <div className="pt-2">
                    <button
                      onClick={onRegisterClick}
                      className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white font-bold py-3 px-4 rounded-xl flex items-center justify-center gap-2 text-sm shadow-md shadow-blue-500/20 active:scale-98 transition-all cursor-pointer cta-blink-blue"
                    >
                      <span>Unlock All 4 Pillars In Workshop</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                    <p className="text-[11px] text-center text-slate-500 mt-2 font-medium">
                      Includes 100% free Notion SOP templates & prompt pack
                    </p>
                  </div>

                </div>

              </div>
            </div>
          );
        })()}

      </div>
    </section>
  );
};
