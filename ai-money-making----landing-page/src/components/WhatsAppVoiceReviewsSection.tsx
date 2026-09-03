import React, { useState, useEffect, useRef } from 'react';
import { 
  Play, 
  Pause, 
  Mic, 
  CheckCheck, 
  Volume2, 
  VolumeX, 
  Sparkles, 
  MessageSquare, 
  ArrowRight,
  Share2,
  Clock
} from 'lucide-react';

interface VoiceReview {
  id: string;
  senderName: string;
  location: string;
  role: string;
  avatarBg: string;
  initials: string;
  time: string;
  durationSeconds: number;
  durationFormatted: string;
  malayalamQuote: string;
  englishSummary: string;
  waveformHeights: number[];
  audioUrl?: string; // Real audio file path
}

interface WhatsAppVoiceReviewsSectionProps {
  onRegisterClick: () => void;
}

export const WhatsAppVoiceReviewsSection: React.FC<WhatsAppVoiceReviewsSectionProps> = ({ onRegisterClick }) => {
  const voiceReviews: VoiceReview[] = [
    {
      id: 'voice-1',
      senderName: 'Live Workshop Attendee',
      location: 'Kerala',
      role: 'AI Video Creation Student',
      avatarBg: 'bg-emerald-600',
      initials: 'VN',
      time: 'Today, 10:14 AM',
      durationSeconds: 37,
      durationFormatted: '0:37',
      malayalamQuote: 'ക്ലാസ്സ് വളരെ ഉഷാറായിരുന്നു! AI ഉപയോഗിച്ച് പ്രോംപ്റ്റും സ്റ്റോറിബോർഡും വെച്ച് വീഡിയോ ക്രിയേറ്റ് ചെയ്യാൻ സാധിച്ചു. സാറിന്റെ ക്ലാസ് വളരെ സഹായകരമായിരുന്നു.',
      englishSummary: 'Created an AI video using prompts & storyboard techniques learned in the masterclass.',
      waveformHeights: [25, 45, 65, 85, 40, 70, 95, 60, 40, 75, 90, 65, 45, 80, 55, 70, 85, 35, 50, 70, 90, 65, 45, 75, 60, 40, 65, 85, 50, 30],
      audioUrl: '/review1.mp3'
    },
    {
      id: 'voice-2',
      senderName: 'Live Workshop Attendee',
      location: 'Kerala',
      role: 'Content & Design Learner',
      avatarBg: 'bg-teal-600',
      initials: 'VN',
      time: 'Yesterday, 8:45 PM',
      durationSeconds: 55,
      durationFormatted: '0:55',
      malayalamQuote: 'ഇന്നത്തെ സെഷൻ അടിപൊളിയായിരുന്നു! കുറഞ്ഞ സമയം കൊണ്ട് സോഷ്യൽ മീഡിയ പോസ്റ്ററുകളെക്കുറിച്ചുള്ള ഒരുപാട് സംശയങ്ങൾ മാറി. ബിഗിനർമാർക്കും വളരെ എളുപ്പത്തിൽ പഠിക്കാൻ കഴിയുന്ന രീതിയിലാണ് ക്ലാസ്സ്.',
      englishSummary: 'Cleared doubts about social media posters in a short session. Beginner-friendly and practical.',
      waveformHeights: [25, 40, 70, 50, 80, 90, 65, 45, 75, 85, 50, 60, 95, 70, 45, 85, 60, 40, 75, 90, 55, 40, 70, 85, 60, 45, 80, 65, 40, 25],
      audioUrl: '/review2.mp3'
    },
    {
      id: 'voice-3',
      senderName: 'Live Workshop Attendee',
      location: 'Kerala',
      role: 'ChatGPT & Canva Learner',
      avatarBg: 'bg-green-700',
      initials: 'VN',
      time: 'Yesterday, 3:20 PM',
      durationSeconds: 34,
      durationFormatted: '0:34',
      malayalamQuote: 'ഒരു മണിക്കൂർ സമയം കൊണ്ട് ChatGPT, Canva എന്നിവയിലെ മൈനൂട്ട് കാര്യങ്ങൾ വരെ സാർ വളരെ വ്യക്തമായി പറഞ്ഞു തന്നു. ശരിക്കും അടിപൊളിയായിരുന്നു, സൂപ്പർ വർത്ത് സെഷൻ!',
      englishSummary: 'Gained clear insights into ChatGPT & Canva fundamentals in just 1 hour. Super valuable experience.',
      waveformHeights: [35, 55, 75, 40, 60, 85, 95, 70, 50, 80, 65, 45, 90, 75, 60, 85, 95, 50, 65, 80, 70, 45, 85, 90, 60, 40, 75, 60, 45, 30],
      audioUrl: '/review3.mp3'
    }
  ];

  const [activeVoiceId, setActiveVoiceId] = useState<string | null>(null);
  const [playbackProgress, setPlaybackProgress] = useState<{ [key: string]: number }>({});
  const [playbackSpeed, setPlaybackSpeed] = useState<number>(1);
  const [actualDuration, setActualDuration] = useState<{ [key: string]: number }>({});
  
  const timerRef = useRef<NodeJS.Timeout | null>(null);
  const audioElementRef = useRef<HTMLAudioElement | null>(null);

  // Initialize or handle HTML5 audio playback for actual audio files
  const handleTogglePlay = (id: string, totalDuration: number, audioUrl?: string) => {
    if (activeVoiceId === id) {
      // Pause
      if (audioElementRef.current) {
        audioElementRef.current.pause();
      }
      if (timerRef.current) {
        clearInterval(timerRef.current);
      }
      setActiveVoiceId(null);
    } else {
      // Switch or Start new
      if (audioElementRef.current) {
        audioElementRef.current.pause();
      }
      if (timerRef.current) {
        clearInterval(timerRef.current);
      }

      setActiveVoiceId(id);

      if (audioUrl) {
        if (!audioElementRef.current) {
          audioElementRef.current = new Audio(audioUrl);
        } else {
          audioElementRef.current.src = audioUrl;
        }

        const audio = audioElementRef.current;
        audio.playbackRate = playbackSpeed;
        
        // Start from current progress if any
        const resumeTime = playbackProgress[id] || 0;
        if (resumeTime > 0 && resumeTime < (actualDuration[id] || totalDuration)) {
          audio.currentTime = resumeTime;
        } else {
          audio.currentTime = 0;
        }

        audio.play().catch((err) => {
          console.warn('Audio autoplay prevented or file format issue:', err);
        });

        audio.onloadedmetadata = () => {
          if (audio.duration && !isNaN(audio.duration)) {
            setActualDuration((prev) => ({ ...prev, [id]: audio.duration }));
          }
        };

        audio.ontimeupdate = () => {
          setPlaybackProgress((prev) => ({ ...prev, [id]: audio.currentTime }));
        };

        audio.onended = () => {
          setActiveVoiceId(null);
          setPlaybackProgress((prev) => ({ ...prev, [id]: 0 }));
        };
      } else {
        // Fallback simulated player for items without audio file yet
        timerRef.current = setInterval(() => {
          setPlaybackProgress((prev) => {
            const current = prev[id] || 0;
            if (current >= totalDuration) {
              clearInterval(timerRef.current!);
              setActiveVoiceId(null);
              return { ...prev, [id]: 0 };
            }
            return { ...prev, [id]: Math.min(totalDuration, current + 0.5 * playbackSpeed) };
          });
        }, 500);
      }
    }
  };

  const handleSeek = (id: string, percentage: number, totalDuration: number, audioUrl?: string) => {
    const dur = actualDuration[id] || totalDuration;
    const newTime = percentage * dur;
    setPlaybackProgress((prev) => ({ ...prev, [id]: newTime }));
    
    if (audioUrl && audioElementRef.current && activeVoiceId === id) {
      audioElementRef.current.currentTime = newTime;
    }
  };

  const togglePlaybackSpeed = () => {
    const speeds = [1, 1.5, 2];
    const nextIdx = (speeds.indexOf(playbackSpeed) + 1) % speeds.length;
    const nextSpeed = speeds[nextIdx];
    setPlaybackSpeed(nextSpeed);
    if (audioElementRef.current) {
      audioElementRef.current.playbackRate = nextSpeed;
    }
  };

  useEffect(() => {
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
      if (audioElementRef.current) {
        audioElementRef.current.pause();
        audioElementRef.current = null;
      }
    };
  }, []);

  const formatCurrentTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins}:${secs < 10 ? '0' : ''}${secs}`;
  };

  return (
    <section id="whatsapp-voice-reviews" className="py-20 bg-[#070d1e] text-white relative overflow-hidden border-t border-slate-800">
      {/* Background ambient lighting */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-emerald-600/10 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute -top-10 right-10 w-72 h-72 bg-[#25D366]/10 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-14">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-950/80 border border-emerald-500/30 text-emerald-400 text-xs sm:text-sm font-bold tracking-wide">
            <Mic className="w-4 h-4 text-emerald-400" />
            <span>AUTHENTIC AUDIO FEEDBACK</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight font-heading">
            Listen to Real Student <span className="text-[#25D366]">Voice Notes</span>
          </h2>

          <p className="text-lg sm:text-xl font-bold text-[#f5a623] tracking-tight">
            WhatsApp Voice Reviews from Our Community Members
          </p>

          <p className="text-slate-300 text-sm sm:text-base max-w-2xl mx-auto pt-1 font-medium">
            Hear directly how students, freelancers, and business owners transformed their workflows and started earning with AI.
          </p>
        </div>

        {/* Voice Note Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {voiceReviews.map((review) => {
            const isPlaying = activeVoiceId === review.id;
            const currentTime = playbackProgress[review.id] || 0;
            const progressRatio = currentTime / review.durationSeconds;

            return (
              <div 
                key={review.id}
                className="bg-[#0f1b35] hover:bg-[#122040] border border-slate-700/80 hover:border-emerald-500/40 rounded-2xl p-5 sm:p-6 shadow-xl transition-all flex flex-col justify-between group relative overflow-hidden"
              >
                {/* Subtle WhatsApp top accent bar */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-emerald-500 via-teal-400 to-[#25D366]" />

                <div>
                  {/* Card Header: User details & WhatsApp time */}
                  <div className="flex items-center justify-between gap-3 mb-4">
                    <div className="flex items-center gap-3">
                      {/* Avatar */}
                      <div className={`w-11 h-11 rounded-full ${review.avatarBg} text-white font-bold flex items-center justify-center text-sm shadow-md border-2 border-slate-700 relative shrink-0`}>
                        {review.initials}
                        <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-[#25D366] rounded-full border-2 border-[#0f1b35] flex items-center justify-center">
                          <Mic className="w-2.5 h-2.5 text-white" />
                        </div>
                      </div>

                      {/* Name & Role */}
                      <div>
                        <div className="flex items-center gap-1.5">
                          <h3 className="text-base font-bold text-white leading-tight">
                            {review.senderName}
                          </h3>
                          <span className="text-xs text-slate-400 font-normal">({review.location})</span>
                        </div>
                        <p className="text-xs text-emerald-400 font-medium">
                          {review.role}
                        </p>
                      </div>
                    </div>

                    {/* Timestamp & Double checkmark */}
                    <div className="flex items-center gap-1 text-[11px] text-slate-400 font-mono shrink-0">
                      <span>{review.time}</span>
                      <CheckCheck className="w-4 h-4 text-emerald-400 ml-0.5" />
                    </div>
                  </div>

                  {/* Malayalam Review Quote */}
                  <div className="bg-[#0b1428] rounded-xl p-3.5 border border-slate-800 mb-4">
                    <p className="text-xs sm:text-sm text-slate-200 leading-relaxed font-medium">
                      "{review.malayalamQuote}"
                    </p>
                    <p className="text-[11px] text-slate-400 mt-2 italic font-normal border-t border-slate-800/80 pt-1.5">
                      💡 {review.englishSummary}
                    </p>
                  </div>

                  {/* 🟢 WhatsApp Style Voice Note Player Bar */}
                  <div className="bg-[#081022] rounded-2xl p-4 border border-emerald-900/40 shadow-inner">
                    <div className="flex items-center gap-3">
                      {/* Play/Pause Button */}
                      <button
                        onClick={() => handleTogglePlay(review.id, review.durationSeconds, review.audioUrl)}
                        className={`w-12 h-12 rounded-full flex items-center justify-center transition-all cursor-pointer shadow-lg shrink-0 ${
                          isPlaying 
                            ? 'bg-[#25D366] text-slate-950 scale-105 shadow-emerald-500/40' 
                            : 'bg-emerald-600 hover:bg-[#25D366] text-white hover:text-slate-950'
                        }`}
                        title={isPlaying ? 'Pause Voice Note' : 'Play Voice Note'}
                        aria-label={isPlaying ? 'Pause Voice Note' : 'Play Voice Note'}
                      >
                        {isPlaying ? (
                          <Pause className="w-5 h-5 fill-current" />
                        ) : (
                          <Play className="w-5 h-5 fill-current ml-0.5" />
                        )}
                      </button>

                      {/* Waveform Scrubber */}
                      <div className="flex-1 space-y-1.5">
                        <div 
                          className="h-8 flex items-center gap-[3px] cursor-pointer py-1 select-none"
                          onClick={(e) => {
                            const rect = e.currentTarget.getBoundingClientRect();
                            const clickX = e.clientX - rect.left;
                            const percentage = Math.max(0, Math.min(1, clickX / rect.width));
                            handleSeek(review.id, percentage, review.durationSeconds, review.audioUrl);
                          }}
                        >
                          {review.waveformHeights.map((h, wIdx) => {
                            const barRatio = wIdx / review.waveformHeights.length;
                            const isPassed = barRatio <= progressRatio;
                            
                            return (
                              <div
                                key={wIdx}
                                className={`flex-1 rounded-full transition-all duration-150 ${
                                  isPassed 
                                    ? 'bg-[#25D366]' 
                                    : 'bg-slate-700 hover:bg-slate-500'
                                } ${isPlaying && isPassed ? 'opacity-100' : 'opacity-80'}`}
                                style={{ height: `${h}%` }}
                              />
                            );
                          })}
                        </div>

                        {/* Progress and Speed indicator */}
                        <div className="flex items-center justify-between text-[11px] font-mono text-slate-400">
                          <span>
                            {isPlaying || currentTime > 0 
                              ? formatCurrentTime(currentTime) 
                              : review.durationFormatted}
                          </span>
                          
                          <div className="flex items-center gap-2">
                            {isPlaying && (
                              <span className="inline-flex items-center gap-1 text-emerald-400 font-sans font-bold text-[10px] animate-pulse">
                                <Volume2 className="w-3 h-3" />
                                <span>Playing</span>
                              </span>
                            )}
                            <button
                              onClick={togglePlaybackSpeed}
                              className="px-1.5 py-0.5 rounded bg-slate-800 hover:bg-slate-700 text-slate-300 text-[10px] font-bold transition-colors cursor-pointer"
                              title="Change Playback Speed"
                            >
                              {playbackSpeed}x
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Call to Action */}
        <div className="bg-gradient-to-r from-emerald-950/60 via-[#0d1c3a] to-emerald-950/60 border border-emerald-500/30 rounded-2xl p-6 sm:p-8 text-center max-w-3xl mx-auto shadow-xl space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 text-xs font-bold">
            <Sparkles className="w-3.5 h-3.5 text-emerald-400" />
            <span>Join 1,000+ Happy Malayalam Learners</span>
          </div>

          <h3 className="text-2xl sm:text-3xl font-black text-white font-heading tracking-tight">
            Ready to Build Your Own Success Story?
          </h3>

          <p className="text-slate-300 text-xs sm:text-sm max-w-xl mx-auto font-medium">
            Learn the exact AI workflows, get ₹2,000+ worth of prompts, and join our active community for just ₹99.
          </p>

          <div className="pt-2">
            <button
              onClick={onRegisterClick}
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-[#f5a623] hover:bg-[#e09214] active:scale-95 text-slate-950 font-black text-sm sm:text-base shadow-xl shadow-amber-500/25 transition-all cursor-pointer font-heading tracking-tight cta-blink-btn"
            >
              <span>Book Your Seat – Only ₹99</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};
