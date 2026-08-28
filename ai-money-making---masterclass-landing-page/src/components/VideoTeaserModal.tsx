import React from 'react';
import { 
  X, 
  ArrowRight, 
  Zap, 
  Sparkles
} from 'lucide-react';
import sawadImg from '../assets/sawad.png';

interface VideoTeaserModalProps {
  isOpen: boolean;
  onClose: () => void;
  onRegisterClick: () => void;
}

export const VideoTeaserModal: React.FC<VideoTeaserModalProps> = ({
  isOpen,
  onClose,
  onRegisterClick
}) => {
  const videoId = 'b_QcH_6HUco';

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-slate-950/80 backdrop-blur-md overflow-y-auto">
      <div 
        id="video-teaser-modal-container"
        className="relative w-full max-w-3xl bg-slate-900 border border-slate-800 rounded-3xl overflow-hidden shadow-2xl my-6 flex flex-col"
      >
        {/* Top Header Bar */}
        <div className="bg-[#0b1329] px-5 py-3.5 border-b border-slate-800 flex items-center justify-between text-white">
          <div className="flex items-center gap-2.5">
            <div className="w-2.5 h-2.5 rounded-full bg-orange-500 animate-ping" />
            <span className="text-xs sm:text-sm font-bold text-white tracking-wide">
              Live Masterclass Sneak Peek
            </span>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 text-slate-400 hover:text-white rounded-full bg-slate-800/80 hover:bg-slate-700 transition-colors cursor-pointer"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Video Canvas Container */}
        <div className="relative aspect-video w-full bg-black">
          <iframe
            src={`https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0&modestbranding=1`}
            title="Masterclass Video Teaser"
            className="w-full h-full border-0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          />
        </div>

        {/* Modal Bottom Info & CTA */}
        <div className="p-4 sm:p-6 bg-[#070b1a] border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3 text-left w-full sm:w-auto">
            <img
              src={sawadImg}
              alt="Sawad"
              onError={(e) => {
                const target = e.currentTarget;
                if (!target.src.includes('image%20sawad.png') && !target.src.includes('sawad.png')) {
                  target.src = '/image sawad.png';
                }
              }}
              className="w-10 h-10 rounded-full object-cover border border-orange-500/40 shrink-0"
            />
            <div>
              <h5 className="text-sm font-bold text-white flex items-center gap-1.5">
                <span>Sawad</span>
                <span className="text-[10px] text-orange-400 bg-orange-500/15 px-2 py-0.5 rounded-full border border-orange-500/30">
                  Mentor
                </span>
              </h5>
              <p className="text-xs text-slate-400 mt-0.5">
                90-Min Live AI Monetization Blueprint
              </p>
            </div>
          </div>

          <button
            onClick={() => {
              onClose();
              onRegisterClick();
            }}
            className="w-full sm:w-auto bg-[#f5a623] hover:bg-[#e09214] text-slate-950 font-black px-6 sm:px-8 py-3.5 rounded-xl text-sm flex items-center justify-center gap-2 shadow-lg shadow-amber-500/25 active:scale-95 transition-all cursor-pointer shrink-0 font-heading cta-blink-btn"
          >
            <Zap className="w-4 h-4 fill-slate-950" />
            <span>Book Your Seat – Only ₹1</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </div>
  );
};

