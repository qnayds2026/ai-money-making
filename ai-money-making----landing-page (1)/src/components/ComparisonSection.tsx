import React from 'react';
import { XCircle, CheckCircle2, Zap, ArrowRight, ShieldAlert, Sparkles } from 'lucide-react';

interface ComparisonSectionProps {
  onRegisterClick: () => void;
}

export const ComparisonSection: React.FC<ComparisonSectionProps> = ({ onRegisterClick }) => {
  const oldWayPoints = [
    'Billing $50–$100/hr and constantly trading precious time for modest income.',
    'Cold spamming 100s of DMs manually and getting ignored or blocked.',
    'Working 50–70 hours per week writing custom documents and answering client questions 24/7.',
    'Competing against cheap commodity freelancers on Upwork and Fiverr on price.',
    'High churn rates: clients cancel after 30 days because manual fulfillment is delayed.',
    'Living with endless anxiety: "Where is my next client coming from this month?"'
  ];

  const newWayPoints = [
    'Selling $3,000–$10,000 upfront "AI Implementation Sprints" based on tangible outcome value.',
    'Deploying AI video avatars & automated Mini-Audits that attract 20–50 inbound calls/mo.',
    'Fulfilling high-tier client deliverables in 2.5 hours/week using custom GPT copilots.',
    'Positioning as an irreplaceable AI transformation partner with zero price resistance.',
    '90%+ client retention by giving clients 24/7 private AI assistants that resolve queries instantly.',
    'Predictable monthly recurring revenue (MRR) with 90%+ gross profit margins and real equity.'
  ];

  return (
    <section className="py-16 sm:py-24 bg-slate-50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-bold">
            <Sparkles className="w-3.5 h-3.5 text-blue-600" />
            <span>THE LEVERAGE SHIFT</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-950 tracking-tight font-heading">
            The Old Way vs. <span className="text-blue-600">The AI Launchpad System</span>
          </h2>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            Stop grinding 60-hour weeks for mediocre retainers. Leverage intelligent systems to 10x your client output in a fraction of the time.
          </p>
        </div>

        {/* 2-Column Comparison Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 max-w-5xl mx-auto">
          
          {/* The Old Way (Red / Slate Card) */}
          <div className="bg-white border border-red-200 rounded-3xl p-6 sm:p-8 space-y-6 relative shadow-sm">
            <div className="flex items-center justify-between pb-4 border-b border-slate-100">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-rose-500">The Traditional Model</span>
                <h3 className="text-xl font-bold text-slate-900 mt-0.5">The Exhausting Grind</h3>
              </div>
              <div className="w-10 h-10 rounded-xl bg-rose-50 border border-rose-200 flex items-center justify-center text-rose-600">
                <XCircle className="w-6 h-6" />
              </div>
            </div>

            <ul className="space-y-4">
              {oldWayPoints.map((point, idx) => (
                <li key={idx} className="flex items-start gap-3 text-slate-600 text-xs sm:text-sm">
                  <XCircle className="w-4 h-4 text-rose-500 shrink-0 mt-0.5" />
                  <span>{point}</span>
                </li>
              ))}
            </ul>

            <div className="pt-4 border-t border-slate-100 text-xs text-rose-600 font-medium">
              Result: Burnout, unpredictable income, and constant stress.
            </div>
          </div>

          {/* The AI Launchpad Way (Blue / Indigo Card) */}
          <div className="bg-gradient-to-b from-blue-900 via-blue-950 to-slate-950 border-2 border-blue-500 rounded-3xl p-6 sm:p-8 space-y-6 relative shadow-xl shadow-blue-900/20 text-white">
            {/* Best Choice Pill */}
            <div className="absolute -top-3.5 right-8 bg-blue-500 text-white font-black text-[11px] uppercase tracking-wider px-3.5 py-1 rounded-full shadow-md">
              The 2026 AI Standard
            </div>

            <div className="flex items-center justify-between pb-4 border-b border-blue-800">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-blue-300">The High-Leverage Blueprint</span>
                <h3 className="text-xl font-bold text-white mt-0.5">The AI Money Making Masterclass</h3>
              </div>
              <div className="w-10 h-10 rounded-xl bg-blue-800/80 border border-blue-400 flex items-center justify-center text-blue-300">
                <Zap className="w-6 h-6 fill-blue-400" />
              </div>
            </div>

            <ul className="space-y-4">
              {newWayPoints.map((point, idx) => (
                <li key={idx} className="flex items-start gap-3 text-slate-200 text-xs sm:text-sm">
                  <CheckCircle2 className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                  <span>{point}</span>
                </li>
              ))}
            </ul>

            <div className="pt-4 border-t border-blue-800/80 text-xs text-blue-300 font-medium">
              Result: 90%+ margins, 10 hours/week, predictable $10k–$50k/month.
            </div>
          </div>

        </div>

        {/* Section Call to action */}
        <div className="mt-12 text-center">
          <button
            onClick={onRegisterClick}
            className="inline-flex items-center gap-2 text-sm sm:text-base font-bold text-blue-600 hover:text-blue-800 transition-colors group cursor-pointer"
          >
            <span>Learn How to Make This Shift In the 90-Min Live Masterclass</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </button>
        </div>

      </div>
    </section>
  );
};
