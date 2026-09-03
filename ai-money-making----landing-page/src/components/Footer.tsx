import React, { useState } from 'react';
import { ShieldCheck, Zap, Lock, Info, X, Bot } from 'lucide-react';

export const Footer: React.FC = () => {
  const [legalModalOpen, setLegalModalOpen] = useState<'privacy' | 'terms' | 'earnings' | null>(null);

  return (
    <footer className="bg-slate-900 border-t border-slate-800 text-slate-400 text-xs py-12 pb-24 sm:pb-16 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        {/* Brand & Summary */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 border-b border-slate-800 pb-8 text-center sm:text-left">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-blue-500 to-indigo-500 flex items-center justify-center text-white shadow-md">
              <Bot className="w-4 h-4 text-white" />
            </div>
            <span className="font-heading font-bold text-lg text-white tracking-tight">
              AI Money Making
            </span>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-4 text-xs">
            <button
              onClick={() => setLegalModalOpen('privacy')}
              className="hover:text-white transition-colors cursor-pointer font-medium"
            >
              Privacy Policy
            </button>
            <span>•</span>
            <button
              onClick={() => setLegalModalOpen('terms')}
              className="hover:text-white transition-colors cursor-pointer font-medium"
            >
              Terms of Service
            </button>
            <span>•</span>
            <button
              onClick={() => setLegalModalOpen('earnings')}
              className="hover:text-white transition-colors cursor-pointer font-medium"
            >
              Earnings Disclaimer
            </button>
          </div>
        </div>

        {/* Copyright */}
        <div className="pt-2 text-center text-slate-500 text-[11px]">
          <p>© {new Date().getFullYear()} AI Money Making. All Rights Reserved.</p>
        </div>

      </div>

      {/* Simple Legal Modal */}
      {legalModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm">
          <div className="relative w-full max-w-lg bg-white border border-slate-200 rounded-2xl p-6 shadow-2xl text-slate-700 space-y-4">
            <div className="flex items-center justify-between pb-3 border-b border-slate-200">
              <h3 className="font-bold text-slate-900 text-base capitalize">
                {legalModalOpen === 'privacy' && 'Privacy Policy'}
                {legalModalOpen === 'terms' && 'Terms of Service'}
                {legalModalOpen === 'earnings' && 'Earnings & Results Disclaimer'}
              </h3>
              <button
                onClick={() => setLegalModalOpen(null)}
                className="p-1 rounded-lg text-slate-400 hover:text-slate-700 bg-slate-100 cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <div className="text-xs space-y-3 max-h-80 overflow-y-auto pr-2 leading-relaxed text-slate-600">
              {legalModalOpen === 'privacy' && (
                <>
                  <p>We respect your privacy. By registering for this masterclass, you agree to receive email and SMS reminders regarding your session and training materials.</p>
                  <p>We do not sell or rent your personal information to third parties. You may unsubscribe from communications at any time by clicking the unsubscribe link in our emails or replying STOP to SMS messages.</p>
                </>
              )}

              {legalModalOpen === 'terms' && (
                <>
                  <p>By registering for and attending this live masterclass, you agree that the information and materials provided are for educational and training purposes only.</p>
                  <p>Any proprietary prompts, Notion templates, and SOPs provided are licensed for your internal business use and may not be resold as standalone courses without authorization.</p>
                </>
              )}

              {legalModalOpen === 'earnings' && (
                <>
                  <p>Any financial figures stated on this page or during the workshop are illustrative of what is possible with our systems and are not guarantees of earnings.</p>
                  <p>Building a successful coaching, consulting, or agency business requires hard work, persistence, and continuous skill refinement. We cannot and do not guarantee your financial outcome.</p>
                </>
              )}
            </div>

            <div className="pt-2 text-right">
              <button
                onClick={() => setLegalModalOpen(null)}
                className="bg-blue-600 hover:bg-blue-700 text-white font-semibold text-xs px-4 py-2 rounded-lg cursor-pointer"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </footer>
  );
};
