import React, { useState } from 'react';
import { 
  Share2, 
  Clock, 
  Play, 
  X, 
  ArrowRight, 
  CheckCircle2, 
  Sparkles,
  ExternalLink
} from 'lucide-react';

interface TestimonialVideo {
  id: string;
  youtubeId: string;
  youtubeUrl: string;
  title: string;
  author: string;
  authorAvatar: string;
  thumbnailUrl: string;
  badgeText: string;
  milestone: string;
  niche: string;
  revenueGenerated: string;
  storyQuote: string;
  videoDuration: string;
  keyTakeaways: string[];
}

interface StoriesOfSuccessSectionProps {
  onRegisterClick: () => void;
}

export const StoriesOfSuccessSection: React.FC<StoriesOfSuccessSectionProps> = ({ onRegisterClick }) => {
  const [selectedVideo, setSelectedVideo] = useState<TestimonialVideo | null>(null);
  const [copiedShareId, setCopiedShareId] = useState<string | null>(null);

  const testimonials: TestimonialVideo[] = [
    {
      id: 'success-story-1',
      youtubeId: '4gQxDTJeHqk',
      youtubeUrl: 'https://youtube.com/shorts/4gQxDTJeHqk?si=rbD18Z_twkouOE9b',
      title: 'AI Coaching & Income Transformation Story #1',
      author: 'Masterclass Student',
      authorAvatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=120&q=80',
      thumbnailUrl: 'https://img.youtube.com/vi/4gQxDTJeHqk/hqdefault.jpg',
      badgeText: 'Student Breakthrough',
      milestone: 'Consistent High-Ticket Clients',
      niche: 'AI Systems & Digital Coaching',
      revenueGenerated: '₹25,000 - ₹50,000/mo',
      storyQuote: 'AI കാരണം എൻറെ ജീവിതത്തിൽ ഒരുപാട് മാറ്റങ്ങൾ ഉണ്ടായി. ഇപ്പോൾ ഞാൻ പണം earn ചെയ്ത് തുടങ്ങുന്നു. എൻറെ ഒരുപാട് വർക്കുകൾ AI ആണ് ഇപ്പൊ ചെയ്യുന്നത് .',
      videoDuration: 'Shorts',
      keyTakeaways: [
        'Implemented automated AI outreach funnels',
        'Landed verified paying clients within 30 days',
        'Streamlined daily delivery using AI prompt templates'
      ]
    },
    {
      id: 'success-story-2',
      youtubeId: 'QCcYoDzDI8Y',
      youtubeUrl: 'https://youtube.com/shorts/QCcYoDzDI8Y?si=swAVn0NbfghstADE',
      title: 'From Zero to High-Ticket Retainers Story #2',
      author: 'Masterclass Student',
      authorAvatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=120&q=80',
      thumbnailUrl: 'https://img.youtube.com/vi/QCcYoDzDI8Y/hqdefault.jpg',
      badgeText: 'Top Performer',
      milestone: 'Automated Client Growth Engine',
      niche: 'B2B Consulting & Services',
      revenueGenerated: '₹30,000+ Sprints',
      storyQuote: 'YouTube-ൽ പല videos കണ്ടിട്ടും എവിടെ നിന്ന് തുടങ്ങണം എന്ന് അറിയില്ലായിരുന്നു. Qnayds-ൽ join ചെയ്തപ്പോൾ നല്ലൊരു direction കിട്ടി.',
      videoDuration: 'Shorts',
      keyTakeaways: [
        'Packaged AI skillsets into clear business solutions',
        'Eliminated manual proposals with pre-built models',
        'Scaled to recurring retainers'
      ]
    },
    {
      id: 'success-story-3',
      youtubeId: 'tIVud4h7ogk',
      youtubeUrl: 'https://youtube.com/shorts/tIVud4h7ogk?si=WJ7j8OyEacMiCjyz',
      title: 'Real Student Results & Breakthrough Story #3',
      author: 'Masterclass Student',
      authorAvatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=120&q=80',
      thumbnailUrl: 'https://img.youtube.com/vi/tIVud4h7ogk/hqdefault.jpg',
      badgeText: 'Verified Result',
      milestone: 'Rapid Income Milestone',
      niche: 'Agency & Freelance AI',
      revenueGenerated: '₹40,000+ Monthly',
      storyQuote: 'AI വെച്ചിട്ട് ഞാൻ ഇപ്പൊ ഒരുപാട് വീഡിയോസും, എഡിറ്റിങ് ഒക്കെ പഠിച്ചു. ഫ്രീലാൻസ് opportunities കിട്ടിത്തുടങ്ങി, ഞാൻ പണം ഉണ്ടാക്കി തുടങ്ങി.',
      videoDuration: 'Shorts',
      keyTakeaways: [
        'Built automated AI client onboarding flows',
        'Attracted inbound prospects without paid ads',
        'Achieved predictable monthly income'
      ]
    },
    {
      id: 'success-story-4',
      youtubeId: 'E68zlKM292A',
      youtubeUrl: 'https://youtube.com/shorts/E68zlKM292A?si=XiHF2VIBoXkQoBcT',
      title: 'Scale & Monetization Case Study Story #4',
      author: 'Masterclass Student',
      authorAvatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=120&q=80',
      thumbnailUrl: 'https://img.youtube.com/vi/E68zlKM292A/hqdefault.jpg',
      badgeText: 'Rapid Growth',
      milestone: 'First 5-Figure Milestone',
      niche: 'Content & AI Automation',
      revenueGenerated: '₹35,000+ per client',
      storyQuote: 'Business എങ്ങനെ തുടങ്ങണം എന്നൊരു idea പോലും ഇല്ലായിരുന്നു. ഈ ക്ലാസ് കേട്ടപ്പോൾ എല്ലാം മനസ്സിലായി.',
      videoDuration: 'Shorts',
      keyTakeaways: [
        'Used AI tools to deliver client projects in hours',
        'Structured compelling offers that convert easily',
        'Full step-by-step guidance from start to finish'
      ]
    }
  ];

  const handleShare = (e: React.MouseEvent, item: TestimonialVideo) => {
    e.stopPropagation();
    navigator.clipboard.writeText(item.youtubeUrl);
    setCopiedShareId(item.id);
    setTimeout(() => setCopiedShareId(null), 2500);
  };

  return (
    <section id="stories-of-success" className="py-20 sm:py-24 bg-[#050814] relative overflow-hidden border-t border-slate-900">
      {/* Ambient background glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[900px] h-[500px] bg-blue-900/15 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute bottom-0 right-1/4 w-[500px] h-[300px] bg-orange-600/10 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-orange-500/10 border border-orange-500/20 text-orange-400 text-xs font-bold mb-3 uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Verified Student Stories</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight font-heading block">
            <span className="text-[#f9572b]">Stories of</span> <span className="text-white">Success</span>
          </h2>
          
          {/* Orange underline bar */}
          <div className="w-24 h-1 bg-[#f9572b] rounded-full mx-auto mt-3 shadow-md shadow-orange-500/50" />

          <p className="text-slate-400 text-sm sm:text-base mt-4 font-normal max-w-2xl mx-auto">
            Watch real students share their verified breakthroughs, client results, and income milestones after implementing the AI blueprint.
          </p>
        </div>

        {/* 4 Video Cards Grid (4 columns on lg, 2 cols on md, 1 col on mobile) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonials.map((item) => (
            <div
              key={item.id}
              onClick={() => setSelectedVideo(item)}
              className="group relative rounded-2xl overflow-hidden bg-[#0a1024] border border-blue-950/80 hover:border-orange-500/60 transition-all duration-300 shadow-xl shadow-black/50 flex flex-col justify-between aspect-[9/16] sm:aspect-[4/5] cursor-pointer select-none"
            >
              {/* Background Thumbnail Image with Cinematic Dark Gradient Overlays */}
              <div className="absolute inset-0 z-0 overflow-hidden">
                <img 
                  src={item.thumbnailUrl} 
                  alt={item.title} 
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500 filter brightness-90 contrast-105"
                  loading="lazy"
                />
                {/* Gradient Overlays for YouTube Look */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/40 to-black/80" />
                <div className="absolute inset-0 bg-blue-950/20 mix-blend-multiply" />
              </div>



              {/* Center: Red YouTube Play Button */}
              <div className="relative z-10 flex items-center justify-center my-auto">
                <div className="w-14 h-10 bg-[#ff0000] rounded-xl flex items-center justify-center shadow-2xl shadow-red-950/80 group-hover:scale-110 group-hover:bg-[#e60000] transition-all duration-200 cursor-pointer">
                  {/* YouTube White Play Triangle */}
                  <div className="w-0 h-0 border-y-[6px] border-y-transparent border-l-[12px] border-l-white ml-1" />
                </div>
              </div>

              {/* Bottom Bar: Quote */}
              <div className="relative z-10 p-3.5 flex flex-col gap-2 bg-gradient-to-t from-black via-black/80 to-transparent">
                <p className="text-xs text-slate-200 line-clamp-3 font-medium leading-relaxed drop-shadow-md">
                  "{item.storyQuote}"
                </p>
              </div>

            </div>
          ))}
        </div>

        {/* Action Callout below gallery */}
        <div className="mt-14 text-center">
          <button
            onClick={onRegisterClick}
            className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-[#f9572b] hover:bg-[#e0451b] active:scale-95 text-white font-black text-base shadow-xl shadow-orange-600/25 transition-all cursor-pointer font-heading tracking-tight cta-blink-orange"
          >
            <span>Book Your Seat – Only ₹1</span>
            <ArrowRight className="w-4 h-4" />
          </button>
          <p className="text-xs text-slate-500 mt-2 font-medium">
            Live Interactive Masterclass • Only ₹1 • Instant VIP Seat Confirmation
          </p>
        </div>

      </div>

      {/* Video Modal Player (Embeds the actual YouTube Short) */}
      {selectedVideo && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-md animate-in fade-in duration-200"
          onClick={() => setSelectedVideo(null)}
        >
          <div 
            className="relative w-full max-w-lg bg-[#0b1226] border border-slate-700 rounded-3xl overflow-hidden shadow-2xl text-white my-auto"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="flex items-center justify-between px-5 py-3.5 border-b border-slate-800 bg-[#080d1e]">
              <div className="truncate">
                <h3 className="font-bold text-xs sm:text-sm text-white truncate">{selectedVideo.title}</h3>
              </div>

              <button
                onClick={() => setSelectedVideo(null)}
                className="w-8 h-8 rounded-full bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white flex items-center justify-center transition-colors cursor-pointer shrink-0 ml-2"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Embedded YouTube Iframe Player */}
            <div className="relative aspect-[9/16] max-h-[55vh] sm:max-h-[60vh] w-full bg-black flex items-center justify-center overflow-hidden mx-auto">
              <iframe
                src={`https://www.youtube.com/embed/${selectedVideo.youtubeId}?autoplay=1&rel=0&modestbranding=1`}
                title={selectedVideo.title}
                className="w-full h-full border-0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              />
            </div>

            {/* Video Details & Action Button */}
            <div className="p-4 sm:p-5 space-y-3.5 bg-[#0a1024]">
              {selectedVideo.storyQuote && (
                <p className="text-xs sm:text-sm text-slate-200 leading-relaxed border-l-2 border-orange-500 pl-3">
                  "{selectedVideo.storyQuote}"
                </p>
              )}
              {/* Action Button */}
              <div className="flex items-center justify-between gap-3">
                <a
                  href={selectedVideo.youtubeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs text-slate-400 hover:text-white flex items-center gap-1 underline"
                >
                  <span>Open on YouTube</span>
                  <ExternalLink className="w-3 h-3" />
                </a>

                <button
                  onClick={() => {
                    setSelectedVideo(null);
                    onRegisterClick();
                  }}
                  className="px-5 py-2.5 rounded-xl bg-orange-600 hover:bg-orange-500 text-white font-black text-xs tracking-tight transition-all cursor-pointer"
                >
                  Book Seat – Only ₹1
                </button>
              </div>
            </div>

          </div>
        </div>
      )}
    </section>
  );
};
