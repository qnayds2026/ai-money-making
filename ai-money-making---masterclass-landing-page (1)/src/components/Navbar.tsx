import React from 'react';
import { ArrowRight, Bot } from 'lucide-react';

interface NavbarProps {
  onRegisterClick: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onRegisterClick }) => {
  return (
    <header className="border-b border-slate-200 bg-white/95 backdrop-blur-md sticky top-0 z-40 shadow-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Brand Logo */}
        <div className="flex items-center gap-2.5">
          <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-gradient-to-tr from-blue-600 via-indigo-600 to-sky-500 flex items-center justify-center text-white shadow-md shadow-blue-500/25 ring-2 ring-blue-100">
            <Bot className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
          </div>
          <div className="flex flex-col">
            <span className="font-heading font-black text-base sm:text-xl text-slate-950 tracking-tight leading-tight">
              AI Money Making
            </span>
            <span className="text-[9px] sm:text-[10px] font-bold tracking-widest text-blue-600 uppercase leading-none">
              Live Masterclass
            </span>
          </div>
        </div>

        {/* Desktop Nav Links - Empty */}
        <div className="hidden lg:block"></div>

        {/* Right CTA Area */}
        <div className="hidden sm:flex items-center gap-3">
          <button
            id="nav-register-cta-btn"
            onClick={onRegisterClick}
            className="group relative inline-flex items-center justify-center p-0.5 rounded-full font-bold text-sm overflow-hidden shadow-md shadow-amber-500/20 cursor-pointer active:scale-95 transition-transform cta-blink-btn"
          >
            <span className="absolute inset-0 bg-gradient-to-r from-amber-500 via-orange-500 to-amber-400 rounded-full"></span>
            <span className="relative px-5 py-2 rounded-full bg-[#f5a623] hover:bg-[#e09214] text-slate-950 font-bold transition-all flex items-center gap-2">
              <span>Book Your Seat – Only ₹1</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </span>
          </button>
        </div>

        {/* Mobile Action Button */}
        <div className="flex sm:hidden items-center gap-2">
          <button
            onClick={onRegisterClick}
            className="bg-[#f5a623] hover:bg-[#e09214] text-slate-950 font-bold px-4 py-2 rounded-full text-xs shadow-md shadow-amber-500/20 active:scale-95 transition-all cta-blink-btn"
          >
            Book Seat – Only ₹1
          </button>
        </div>
      </div>
    </header>
  );
};
