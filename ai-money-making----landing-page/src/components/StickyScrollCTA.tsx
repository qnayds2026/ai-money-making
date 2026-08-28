import React, { useState, useEffect } from 'react';
import { ArrowRight, Zap } from 'lucide-react';
import { AnimatePresence, motion } from 'motion/react';

interface StickyScrollCTAProps {
  onRegisterClick: () => void;
}

export const StickyScrollCTA: React.FC<StickyScrollCTAProps> = ({ onRegisterClick }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show when scrolled down past 450px
      if (window.scrollY > 450) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.aside
          aria-label="Floating Registration Button"
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ type: 'spring', stiffness: 350, damping: 30 }}
          className="fixed bottom-4 sm:bottom-6 left-0 right-0 z-50 px-4 flex justify-center pointer-events-none"
        >
          <div className="pointer-events-auto">
            <button
              onClick={onRegisterClick}
              className="inline-flex items-center justify-center gap-2.5 px-8 sm:px-10 py-3.5 sm:py-4 rounded-full bg-[#f9572b] hover:bg-[#e0451b] active:scale-95 text-white font-black text-sm sm:text-base tracking-tight shadow-2xl shadow-orange-600/50 hover:shadow-orange-600/70 border border-white/20 transition-all cursor-pointer font-heading group cta-blink-orange"
            >
              <Zap className="w-4 h-4 fill-white text-white group-hover:scale-110 transition-transform" />
              <span>Book Your Seat – Only ₹99</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </button>
          </div>
        </motion.aside>
      )}
    </AnimatePresence>
  );
};

