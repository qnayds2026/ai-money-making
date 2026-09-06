import React, { useState } from 'react';
import { 
  Calculator, 
  DollarSign, 
  Clock, 
  Users, 
  Zap, 
  Sparkles, 
  CheckCircle2, 
  ArrowRight, 
  TrendingUp, 
  Bot, 
  ShieldAlert,
  Briefcase,
  Activity,
  Building,
  Target,
  FileCheck
} from 'lucide-react';
import { NICHE_PRESETS } from '../data/courseData';
import { NichePreset } from '../types';

interface InteractiveRevenueCalculatorProps {
  onRegisterClick: (preset?: NichePreset, targetIncome?: number) => void;
}

export const InteractiveRevenueCalculator: React.FC<InteractiveRevenueCalculatorProps> = ({ onRegisterClick }) => {
  const [selectedNicheId, setSelectedNicheId] = useState<string>(NICHE_PRESETS[0].id);
  const [monthlyTarget, setMonthlyTarget] = useState<number>(15000);
  const [dealPrice, setDealPrice] = useState<number>(4500);

  const selectedNiche = NICHE_PRESETS.find(n => n.id === selectedNicheId) || NICHE_PRESETS[0];

  const handleNicheChange = (niche: NichePreset) => {
    setSelectedNicheId(niche.id);
    setDealPrice(niche.averageDealSize);
  };

  // Calculations
  const clientsNeeded = Math.max(1, Math.ceil(monthlyTarget / dealPrice));
  const actualRevenue = clientsNeeded * dealPrice;
  const annualRevenue = actualRevenue * 12;

  // Manual hours vs AI hours (typically 80% time reduction)
  const manualFulfillmentHoursPerClient = 8; // hrs/week
  const aiFulfillmentHoursPerClient = 1.5; // hrs/week
  const totalManualWeeklyHours = clientsNeeded * manualFulfillmentHoursPerClient;
  const totalAiWeeklyHours = Math.round(clientsNeeded * aiFulfillmentHoursPerClient * 10) / 10;
  const timeSavedPercentage = Math.round(((totalManualWeeklyHours - totalAiWeeklyHours) / totalManualWeeklyHours) * 100);

  return (
    <section id="revenue-calculator-section" className="py-16 sm:py-24 bg-slate-50 border-y border-slate-200 relative overflow-hidden">
      <div className="absolute -top-32 -left-32 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-bold">
            <Calculator className="w-3.5 h-3.5 text-blue-600" />
            <span>INTERACTIVE SIMULATOR</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-950 tracking-tight font-heading">
            Calculate Your <span className="text-blue-600">AI Income Potential</span>
          </h2>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            See how few high-ticket clients you need per month to replace or 3x your current income when leveraging our 1-Click AI Delivery System.
          </p>
        </div>

        {/* Interactive Grid Card */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 bg-white border border-slate-200/90 rounded-3xl p-6 sm:p-8 lg:p-10 shadow-xl shadow-slate-200/50">
          
          {/* Left Column: Controls & Inputs (7 cols) */}
          <div className="lg:col-span-7 space-y-8">
            
            {/* 1. Select Niche */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-3">
                1. Select Your Target Industry / Niche:
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
                {NICHE_PRESETS.map((niche) => {
                  const isSelected = niche.id === selectedNicheId;
                  return (
                    <button
                      key={niche.id}
                      onClick={() => handleNicheChange(niche)}
                      className={`p-3 rounded-xl border text-left transition-all cursor-pointer flex flex-col justify-between ${
                        isSelected
                          ? 'bg-blue-50 border-blue-600 text-slate-900 shadow-md shadow-blue-500/10'
                          : 'bg-slate-50 border-slate-200 text-slate-700 hover:border-blue-300 hover:bg-white'
                      }`}
                    >
                      <div className="flex items-center justify-between mb-1.5">
                        <span className={`text-[10px] font-bold px-1.5 py-0.5 rounded ${
                          isSelected ? 'bg-blue-600 text-white' : 'bg-slate-200 text-slate-600'
                        }`}>
                          Avg. ${niche.averageDealSize.toLocaleString()}
                        </span>
                        {isSelected && <Zap className="w-3.5 h-3.5 text-blue-600 fill-blue-600" />}
                      </div>
                      <p className="text-xs font-bold line-clamp-1">{niche.name}</p>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* 2. Target Monthly Revenue Slider */}
            <div className="space-y-3 bg-slate-50 p-5 rounded-2xl border border-slate-200">
              <div className="flex items-center justify-between">
                <label className="text-xs font-bold uppercase tracking-wider text-slate-600">
                  2. Target Monthly Income Goal:
                </label>
                <div className="text-xl sm:text-2xl font-black text-blue-600 font-mono">
                  ${monthlyTarget.toLocaleString()}<span className="text-xs text-slate-500 font-normal">/mo</span>
                </div>
              </div>

              <input
                type="range"
                min="5000"
                max="50000"
                step="2500"
                value={monthlyTarget}
                onChange={(e) => setMonthlyTarget(Number(e.target.value))}
                className="w-full h-2.5 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-blue-600"
              />

              <div className="flex justify-between text-[11px] font-mono text-slate-500 font-medium">
                <span>$5,000/mo (Side-Hustle)</span>
                <span>$20,000/mo (Full-Time)</span>
                <span>$50,000/mo (Agency)</span>
              </div>
            </div>

            {/* 3. Offer Package Price Slider */}
            <div className="space-y-3 bg-slate-50 p-5 rounded-2xl border border-slate-200">
              <div className="flex items-center justify-between">
                <label className="text-xs font-bold uppercase tracking-wider text-slate-600">
                  3. Your High-Ticket Package Price:
                </label>
                <div className="text-xl sm:text-2xl font-black text-indigo-600 font-mono">
                  ${dealPrice.toLocaleString()}<span className="text-xs text-slate-500 font-normal">/client</span>
                </div>
              </div>

              <input
                type="range"
                min="1500"
                max="10000"
                step="500"
                value={dealPrice}
                onChange={(e) => setDealPrice(Number(e.target.value))}
                className="w-full h-2.5 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-indigo-600"
              />

              <div className="flex justify-between text-[11px] font-mono text-slate-500 font-medium">
                <span>$1,500 (Entry Sprint)</span>
                <span>$5,000 (Standard Retainer)</span>
                <span>$10,000 (Enterprise AI)</span>
              </div>
            </div>

            {/* Recommended AI Tech Stack for Selected Niche */}
            <div className="bg-blue-50/60 p-4 rounded-xl border border-blue-100">
              <p className="text-[11px] font-bold uppercase text-blue-900 mb-2 flex items-center gap-1.5">
                <Bot className="w-3.5 h-3.5 text-blue-600" />
                Recommended AI Tools for {selectedNiche.name}:
              </p>
              <div className="flex flex-wrap gap-2">
                {selectedNiche.recommendedAITools.map((tool, idx) => (
                  <span key={idx} className="bg-white text-blue-800 px-2.5 py-1 rounded-md text-xs font-semibold border border-blue-200 shadow-2xs">
                    {tool}
                  </span>
                ))}
              </div>
            </div>

          </div>

          {/* Right Column: Dynamic Results & Execution Card (5 cols) */}
          <div className="lg:col-span-5 flex flex-col justify-between bg-gradient-to-b from-blue-900 via-blue-950 to-slate-950 p-6 sm:p-7 rounded-2xl border border-blue-800 shadow-xl space-y-6 text-white">
            
            <div>
              <div className="flex items-center justify-between pb-4 border-b border-blue-800/80">
                <span className="text-xs font-bold uppercase tracking-wider text-blue-300 flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5 text-blue-400" />
                  Your AI Execution Matrix
                </span>
                <span className="bg-blue-500/20 text-blue-300 text-[10px] font-bold px-2 py-0.5 rounded-full border border-blue-400/30">
                  94.7% High Margin
                </span>
              </div>

              {/* Core Output Metrics */}
              <div className="grid grid-cols-2 gap-4 my-6">
                <div className="bg-slate-900/90 p-4 rounded-xl border border-blue-800/60">
                  <div className="flex items-center gap-1.5 text-slate-300 text-xs mb-1">
                    <Users className="w-3.5 h-3.5 text-blue-400" />
                    <span>Clients Needed:</span>
                  </div>
                  <div className="text-3xl font-black text-white font-heading">
                    {clientsNeeded} <span className="text-sm font-normal text-slate-400">active</span>
                  </div>
                  <p className="text-[10px] text-slate-300 mt-1">
                    Only <strong className="text-blue-400">{clientsNeeded} clients</strong> to make ${actualRevenue.toLocaleString()}/mo
                  </p>
                </div>

                <div className="bg-slate-900/90 p-4 rounded-xl border border-blue-800/60">
                  <div className="flex items-center gap-1.5 text-slate-300 text-xs mb-1">
                    <Clock className="w-3.5 h-3.5 text-indigo-400" />
                    <span>Weekly Workload:</span>
                  </div>
                  <div className="text-3xl font-black text-indigo-300 font-heading">
                    {totalAiWeeklyHours} <span className="text-sm font-normal text-slate-400">hrs/wk</span>
                  </div>
                  <p className="text-[10px] text-blue-300 mt-1 font-semibold">
                    ⚡ {timeSavedPercentage}% faster than manual
                  </p>
                </div>
              </div>

              {/* Annualized Projection */}
              <div className="bg-slate-900/90 p-4 rounded-xl border border-blue-800/60 space-y-2 mb-6">
                <div className="flex items-center justify-between text-xs">
                  <span className="text-slate-300">Projected Annual Revenue:</span>
                  <span className="font-bold text-white font-mono text-base sm:text-lg">
                    ${annualRevenue.toLocaleString()}<span className="text-xs text-slate-400">/yr</span>
                  </span>
                </div>
                <div className="w-full bg-slate-800 h-2 rounded-full overflow-hidden">
                  <div 
                    className="bg-gradient-to-r from-blue-500 to-indigo-400 h-full rounded-full transition-all duration-500"
                    style={{ width: `${Math.min(100, (monthlyTarget / 50000) * 100)}%` }}
                  />
                </div>
              </div>

              {/* Actionable Blueprint Highlights */}
              <div className="space-y-2.5 text-xs text-slate-200">
                <p className="font-bold text-white text-xs uppercase tracking-wide">
                  Your 30-Day Implementation Plan:
                </p>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                  <span>Package a <strong>${dealPrice.toLocaleString()} {selectedNiche.name} AI Sprint</strong>.</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                  <span>Deploy the <strong>AI Mini-Audit</strong> to book 15-20 inbound discovery calls.</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                  <span>Deliver in <strong>{totalAiWeeklyHours} hrs/wk</strong> with zero employees.</span>
                </div>
              </div>
            </div>

            {/* Trigger Button */}
            <button
              id="calc-claim-blueprint-btn"
              onClick={() => onRegisterClick(selectedNiche, monthlyTarget)}
              className="w-full group bg-gradient-to-r from-blue-500 to-indigo-500 hover:from-blue-400 hover:to-indigo-400 text-white font-black py-3.5 px-4 rounded-xl flex items-center justify-center gap-2 shadow-lg shadow-blue-500/30 active:scale-98 transition-all cursor-pointer cta-blink-blue"
            >
              <span>Get This Exact Blueprint In Live Workshop</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </button>

          </div>

        </div>

      </div>
    </section>
  );
};
