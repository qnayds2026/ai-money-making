import React, { useState, useEffect } from 'react';
import { ArrowRight, Zap, MessageCircle } from 'lucide-react';
import { AnimatePresence, motion } from 'motion/react';
import { WHATSAPP_CHAT_LINK, WHATSAPP_PHONE_NUMBER } from '../data/courseData';

interface StickyScrollCTAProps {
  onRegisterClick: () => void;
}

export const StickyScrollCTA: React.FC<StickyScrollCTAProps> = ({ onRegisterClick }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show when scrolled down past 400px
      if (window.scrollY > 400) {
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
        <>
          {/* Centered Sticky Registration CTA */}
          <motion.aside
            id="sticky-scroll-popup-bar"
            aria-label="Floating Registration Action"
            initial={{ y: 80, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 80, opacity: 0 }}
            transition={{ type: 'spring', stiffness: 350, damping: 30 }}
            className="fixed bottom-3 sm:bottom-5 left-0 right-0 z-40 px-3 flex justify-center pointer-events-none"
          >
            <div className="pointer-events-auto">
              <button
                id="scroll-popup-book-seat-btn"
                onClick={onRegisterClick}
                className="inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3 sm:py-3.5 rounded-full bg-[#f9572b] hover:bg-[#e0451b] active:scale-95 text-white font-black text-xs sm:text-base tracking-tight shadow-xl shadow-orange-600/40 hover:shadow-orange-600/60 border border-white/20 transition-all cursor-pointer font-heading group cta-blink-orange"
              >
                <Zap className="w-3.5 h-3.5 sm:w-4 sm:h-4 fill-white text-white group-hover:scale-110 transition-transform" />
                <span>Book Seat – Only ₹99</span>
                <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 transition-transform group-hover:translate-x-1 hidden xs:inline" />
              </button>
            </div>
          </motion.aside>

          {/* Right Side Floating WhatsApp Button (Icon Only, No Text, Blinking) */}
          <motion.div
            id="sticky-floating-whatsapp-container"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            transition={{ type: 'spring', stiffness: 400, damping: 25 }}
            className="fixed bottom-3.5 sm:bottom-5 right-3 sm:right-6 z-50 pointer-events-auto"
          >
            <a
              id="scroll-popup-whatsapp-btn"
              href={WHATSAPP_CHAT_LINK}
              target="_blank"
              rel="noopener noreferrer"
              title={`Chat on WhatsApp (${WHATSAPP_PHONE_NUMBER})`}
              aria-label={`Chat on WhatsApp (${WHATSAPP_PHONE_NUMBER})`}
              className="relative flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-[#25D366] hover:bg-[#20ba59] text-white shadow-2xl border-2 border-white/30 cursor-pointer whatsapp-blink group transition-transform active:scale-90"
            >
              {/* Animated ping ring */}
              <span className="absolute -inset-1 rounded-full bg-emerald-400 opacity-60 animate-ping pointer-events-none" />

              {/* WhatsApp Icon */}
              <MessageCircle className="w-6 h-6 sm:w-7 sm:h-7 fill-white text-white group-hover:scale-115 transition-transform drop-shadow" />
            </a>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

