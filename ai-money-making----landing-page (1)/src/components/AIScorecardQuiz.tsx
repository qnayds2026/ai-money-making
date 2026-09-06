import React, { useState } from 'react';
import { 
  Sparkles, 
  CheckCircle2, 
  ArrowRight, 
  RotateCcw, 
  Award, 
  Target, 
  Bot, 
  Zap,
  TrendingUp
} from 'lucide-react';

interface AIScorecardQuizProps {
  onRegisterClick: () => void;
}

interface QuizQuestion {
  question: string;
  options: { label: string; score: number; takeaway: string }[];
}

const QUIZ_QUESTIONS: QuizQuestion[] = [
  {
    question: '1. What is your current professional or business stage?',
    options: [
      { label: 'Corporate professional or 9-to-5 employee transitioning to AI consulting', score: 25, takeaway: 'High corporate domain expertise ready to package into $5k sprints.' },
      { label: 'Freelancer / agency owner struggling with low margins and manual hours', score: 25, takeaway: 'Prime candidate to replace manual work with 1-Click AI delivery.' },
      { label: 'Existing coach or consultant looking to scale past $10k-$30k/mo', score: 30, takeaway: 'Ready to transition from 1-on-1 calls to high-ticket AI group copilots.' },
      { label: 'Total beginner eager to start a high-income online business with AI', score: 20, takeaway: 'Can bypass years of old-school mistakes using pre-validated AI niches.' }
    ]
  },
  {
    question: '2. How many hours per week do you spend on manual delivery or prospecting?',
    options: [
      { label: '25+ hours/week (Constantly busy, feeling near burnout)', score: 25, takeaway: 'Will immediately reclaim 15-20 hours weekly using custom GPT workflows.' },
      { label: '10–25 hours/week (Moderate workload, seeking high leverage)', score: 25, takeaway: 'Ideal sweet spot to implement AI Mini-Audits for inbound pipeline.' },
      { label: 'Under 10 hours/week (Looking to maximize output and deal sizes)', score: 25, takeaway: 'Ready to build high-ticket $5,000+ offer infrastructure.' },
      { label: '0 hours/week (Currently starting fresh or planning launch)', score: 20, takeaway: 'Clean slate to launch 90% automated from Day 1.' }
    ]
  },
  {
    question: '3. What is your primary 90-day monthly income objective?',
    options: [
      { label: '$5,000 to $10,000 / month (1-2 high-ticket clients)', score: 25, takeaway: 'Requires only 2 clients @ $4,000 using our outreach script.' },
      { label: '$15,000 to $30,000 / month (3-6 clients on AI retainers)', score: 30, takeaway: 'Achievable within 60 days stacking $3,500 sprints + $1,500 MRR.' },
      { label: '$50,000+ / month (Scaling an AI agency or mastermind)', score: 30, takeaway: 'Requires hiring $8/hr AI prompt operators and group delivery.' }
    ]
  },
  {
    question: '4. What is your #1 biggest bottleneck holding you back right now?',
    options: [
      { label: 'Attracting high-intent qualified leads who can afford $3k-$5k fees', score: 25, takeaway: 'Covered in Pillar 1 (The AI Client Magnet).' },
      { label: 'Knowing how to package and price AI workflows into a compelling offer', score: 25, takeaway: 'Covered in Pillar 2 (The Value Paradox Matrix).' },
      { label: 'Technical overwhelm: knowing which AI tools and automations to use', score: 25, takeaway: 'Covered in Pillar 3 (1-Click No-Code GPT Delivery).' },
      { label: 'Closing calls without feeling pushy or salesy', score: 25, takeaway: 'Covered in Bonus #1 & #2 (One-Call Close Swipe File).' }
    ]
  }
];

export const AIScorecardQuiz: React.FC<AIScorecardQuizProps> = ({ onRegisterClick }) => {
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState<number[]>([]);
  const [isCompleted, setIsCompleted] = useState(false);

  const handleSelectOption = (optionIndex: number) => {
    const nextAnswers = [...answers, optionIndex];
    setAnswers(nextAnswers);

    if (currentStep < QUIZ_QUESTIONS.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      setIsCompleted(true);
    }
  };

  const handleReset = () => {
    setCurrentStep(0);
    setAnswers([]);
    setIsCompleted(false);
  };

  // Compute total score (out of 100)
  const totalScore = answers.reduce((acc, optionIdx, qIdx) => {
    return acc + (QUIZ_QUESTIONS[qIdx]?.options[optionIdx]?.score || 20);
  }, 0);

  return (
    <section id="scorecard-section" className="py-16 sm:py-24 bg-white relative overflow-hidden">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="bg-slate-50 border border-slate-200/90 rounded-3xl p-6 sm:p-10 shadow-xl shadow-slate-200/40 relative">
          
          {!isCompleted ? (
            <div>
              {/* Quiz Header */}
              <div className="text-center max-w-xl mx-auto mb-8 space-y-2">
                <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-bold">
                  <Target className="w-3.5 h-3.5 text-blue-600" />
                  <span>FREE 60-SECOND AUDIT</span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-950 font-heading">
                  AI Coaching <span className="text-blue-600">Readiness Scorecard</span>
                </h3>
                <p className="text-xs sm:text-sm text-slate-600">
                  Answer 4 quick questions to see your exact high-ticket earning potential and custom diagnosis.
                </p>
              </div>

              {/* Progress Bar */}
              <div className="mb-8">
                <div className="flex justify-between text-xs text-slate-500 mb-2 font-mono font-medium">
                  <span>Question {currentStep + 1} of {QUIZ_QUESTIONS.length}</span>
                  <span>{Math.round(((currentStep) / QUIZ_QUESTIONS.length) * 100)}% Complete</span>
                </div>
                <div className="w-full bg-slate-200 h-2.5 rounded-full overflow-hidden">
                  <div
                    className="bg-blue-600 h-full transition-all duration-300 rounded-full"
                    style={{ width: `${((currentStep + 1) / QUIZ_QUESTIONS.length) * 100}%` }}
                  />
                </div>
              </div>

              {/* Question Text */}
              <div className="mb-6">
                <h4 className="text-lg sm:text-xl font-bold text-slate-950 leading-snug">
                  {QUIZ_QUESTIONS[currentStep].question}
                </h4>
              </div>

              {/* Options */}
              <div className="space-y-3">
                {QUIZ_QUESTIONS[currentStep].options.map((option, idx) => (
                  <button
                    key={idx}
                    onClick={() => handleSelectOption(idx)}
                    className="w-full p-4 rounded-xl bg-white border border-slate-200 hover:border-blue-500 hover:bg-blue-50/50 text-left transition-all flex items-center justify-between group cursor-pointer shadow-2xs"
                  >
                    <span className="text-xs sm:text-sm font-semibold text-slate-800 group-hover:text-blue-900">
                      {option.label}
                    </span>
                    <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-blue-600 transition-transform group-hover:translate-x-1 shrink-0 ml-3" />
                  </button>
                ))}
              </div>
            </div>
          ) : (
            /* Quiz Completed Results Card */
            <div className="space-y-6 text-center">
              <div className="w-16 h-16 rounded-full bg-blue-100 text-blue-600 border border-blue-200 mx-auto flex items-center justify-center">
                <Award className="w-8 h-8" />
              </div>

              <div>
                <span className="text-xs font-mono uppercase tracking-widest text-blue-600 font-bold">
                  YOUR DIAGNOSTIC RESULT
                </span>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-950 mt-1 font-heading">
                  {totalScore}% AI Readiness Match
                </h3>
                <p className="text-blue-600 text-sm font-bold mt-1">
                  Status: High-Ticket AI Monetization Prime Candidate
                </p>
              </div>

              {/* Key Diagnosed Takeaways */}
              <div className="text-left bg-white p-5 rounded-2xl border border-slate-200 shadow-2xs space-y-3 max-w-lg mx-auto">
                <p className="text-xs font-bold uppercase text-slate-500 tracking-wider">
                  Personalized Roadmap Insights:
                </p>
                {answers.map((ansIdx, qIdx) => {
                  const opt = QUIZ_QUESTIONS[qIdx]?.options[ansIdx];
                  if (!opt) return null;
                  return (
                    <div key={qIdx} className="flex items-start gap-2.5 text-xs text-slate-700 font-medium">
                      <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                      <span>{opt.takeaway}</span>
                    </div>
                  );
                })}
              </div>

              {/* Action */}
              <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
                <button
                  onClick={onRegisterClick}
                  className="w-full sm:w-auto bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white font-black px-8 py-3.5 rounded-xl text-sm sm:text-base shadow-lg shadow-blue-500/20 active:scale-95 transition-all cursor-pointer flex items-center justify-center gap-2 cta-blink-blue"
                >
                  <Zap className="w-4 h-4 fill-white" />
                  <span>Claim Free Masterclass Seat to Execute This</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                <button
                  onClick={handleReset}
                  className="p-2.5 rounded-xl text-xs text-slate-500 hover:text-slate-900 flex items-center gap-1.5 cursor-pointer font-semibold"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                  <span>Retake Audit</span>
                </button>
              </div>
            </div>
          )}

        </div>

      </div>
    </section>
  );
};
