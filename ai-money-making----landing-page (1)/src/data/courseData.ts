import { MasterclassSession, PillarModule, BonusItem, Testimonial, FaqItem, NichePreset } from '../types';

export const WHATSAPP_PHONE_NUMBER = "+91 90748 71204";
export const WHATSAPP_DEFAULT_MESSAGE = "I want to join the ₹99 AI Money-Making Course Workshop.";
export const WHATSAPP_CHAT_LINK = `https://wa.me/919074871204?text=${encodeURIComponent(WHATSAPP_DEFAULT_MESSAGE)}`;
export const WHATSAPP_GROUP_LINK = "https://chat.whatsapp.com/Du3KC8mPXLjK2q7b0vUtf7?mode=gi_t";

export const SESSIONS_DATA: MasterclassSession[] = [
  {
    id: 'session-today',
    date: 'Today / Broadcast 1',
    time: '7:00 PM EST (4:00 PM PST)',
    timezone: 'Eastern Standard Time',
    spotsRemaining: 12,
    isPopular: true
  },
  {
    id: 'session-tomorrow',
    date: 'Tomorrow / Broadcast 2',
    time: '2:00 PM EST (11:00 AM PST)',
    timezone: 'Eastern Standard Time',
    spotsRemaining: 19
  },
  {
    id: 'session-weekend',
    date: 'This Saturday / Encore',
    time: '11:00 AM EST (8:00 AM PST)',
    timezone: 'Eastern Standard Time',
    spotsRemaining: 27
  }
];

export const NICHE_PRESETS: NichePreset[] = [
  {
    id: 'b2b-consulting',
    name: 'B2B & Sales Consulting',
    icon: 'Briefcase',
    averageDealSize: 4500,
    typicalOffers: ['AI Cold Outreach Infrastructure', 'B2B Lead Pipeline Automation', 'AI Sales Rep Clone'],
    recommendedAITools: ['Claude 3.5 Sonnet', 'Make.com', 'Clay.com', 'Vapi AI'],
    exampleTransformation: 'Land 3 clients @ $4,500/mo = $13,500/mo with 85% automated prospecting'
  },
  {
    id: 'fitness-wellness',
    name: 'Fitness & Health Coaching',
    icon: 'Activity',
    averageDealSize: 2500,
    typicalOffers: ['Custom AI Nutrition & Workout Copilot', 'High-Touch 90-Day VIP Transformation', '24/7 AI Accountability Bot'],
    recommendedAITools: ['ChatGPT Plus Custom GPTs', 'Zapier Central', 'WhatsApp API / ManyChat'],
    exampleTransformation: 'Enroll 4 clients @ $2,500 = $10,000/mo saving 15+ hours weekly with automated check-ins'
  },
  {
    id: 'real-estate',
    name: 'Real Estate & Property',
    icon: 'Building',
    averageDealSize: 5000,
    typicalOffers: ['AI Lead Qualifying Voice Agent', 'Listing Video & Staging Generator', 'Local Investor Acquisition Engine'],
    recommendedAITools: ['Vapi / Retell AI', 'Midjourney v6', 'HighLevel CRM', 'HeyGen'],
    exampleTransformation: '2 brokerage clients @ $5,000/mo = $10,000/mo retainer on complete autopilot'
  },
  {
    id: 'executive-career',
    name: 'Executive & Career Coaching',
    icon: 'Target',
    averageDealSize: 3500,
    typicalOffers: ['AI Resume & C-Suite Interview Simulator', 'Executive Thought Leadership System', 'Promotion Accelerator Sprint'],
    recommendedAITools: ['Claude Artifacts', 'LinkedIn AI Automation', 'Voice Cloner'],
    exampleTransformation: '3 professionals @ $3,500 = $10,500/mo with zero manual slide building'
  },
  {
    id: 'creator-marketing',
    name: 'Content & Marketing Agency',
    icon: 'Sparkles',
    averageDealSize: 4000,
    typicalOffers: ['Omnichannel AI Content Flywheel', 'Short-Form Viral Scripting System', 'AI Brand Voice Custom Agents'],
    recommendedAITools: ['Cursor / Replit', 'Descript', 'HeyGen Avatar', 'Claude Sonnet'],
    exampleTransformation: '4 creator clients @ $4,000 = $16,000/mo delivering 60 videos in under 2 hours'
  },
  {
    id: 'finance-wealth',
    name: 'Wealth & Financial Planning',
    icon: 'DollarSign',
    averageDealSize: 4800,
    typicalOffers: ['AI Cash Flow Analyzer & Tax Prep System', 'High-Net-Worth Advisory Funnel', 'Automated Wealth Dashboard'],
    recommendedAITools: ['OpenAI Assistant API', 'Make.com', 'Airtable Automations'],
    exampleTransformation: '3 clients @ $4,800 = $14,400/mo with automated data synthesis'
  }
];

export const PILLARS_DATA: PillarModule[] = [
  {
    number: '01',
    title: 'The AI Client Magnet Engine',
    subtitle: 'Generate 20-50 Qualified High-Ticket Inbound Inquiries Every Single Month Without Ad Spend',
    description: 'How to deploy automated AI avatars, multi-agent DM prospecting bots, and value-packed AI mini-audits that attract high-net-worth clients directly into your calendar ready to buy.',
    iconName: 'Magnet',
    deliverables: [
      'The 3-Step AI Mini-Audit Funnel that converts cold leads at 34%',
      'Automated LinkedIn & Instagram AI DM assistant setup',
      'The "Zero Ad Spend" organic distribution algorithm formula',
      'Plug-and-play outbound prompts that generate 5-10 booked calls per 100 messages'
    ],
    tools: ['Claude 3.5', 'Make.com', 'HeyGen', 'ManyChat AI'],
    takeaway: 'Never worry about where your next client is coming from or get stuck on the revenue roller-coaster.',
    previewSnippet: 'Live Demonstration: Deploying a hyper-personalized video AI avatar that contacts 200 high-intent prospects and books 14 calls in 48 hours.'
  },
  {
    number: '02',
    title: 'The $3k-$10k High-Ticket Offer Blueprint',
    subtitle: 'Package Your Knowledge or Curated AI Systems Into Irresistible Premium Transformations',
    description: 'Transform low-margin hourly services or vague advice into a packaged, proprietary "AI-Powered Sprint" that clients gladly pay $3,000 to $10,000 upfront for.',
    iconName: 'Crown',
    deliverables: [
      'The "Value Paradox" pricing matrix for high-ticket coaching & consulting',
      'How to position AI tools as a luxury premium differentiator',
      'The 1-Page High-Ticket Proposal and One-Call Close script',
      'Handling objections: "Why cant I just use ChatGPT myself?" with total mastery'
    ],
    tools: ['Custom GPTs', 'Notion OS', 'Stripe', 'DocuSign'],
    takeaway: 'Stop trading hours for dollars. Charge based on quantifiable business outcomes.',
    previewSnippet: 'Framework Breakdown: Turning a $50/hr task into a $6,500 30-day AI implementation package.'
  },
  {
    number: '03',
    title: 'The 1-Click AI Delivery Engine',
    subtitle: 'Fulfill 10x Client Results in 80% Less Time Using Automated Agents & Custom Copilots',
    description: 'The exact technical workflow to build custom GPT copilots, automated client onboarding portals, and real-time deliverable engines so you can fulfill contracts in under 3 hours per week.',
    iconName: 'Cpu',
    deliverables: [
      'Building zero-code custom client dashboard and GPT assistants',
      'Automated weekly sprint deliverables generator',
      'AI 24/7 client support bot that resolves 92% of client queries',
      'Client retention & renewal frameworks for $2,000/mo ongoing retainers'
    ],
    tools: ['OpenAI Custom GPTs', 'Airtable', 'Zapier / Make', 'Voice AI'],
    takeaway: 'Run a 7-figure roster of 15+ high-paying clients without needing a bloated team or burning out.',
    previewSnippet: 'Architecture Walkthrough: Cloning your proprietary expertise into a secure private client assistant.'
  },
  {
    number: '04',
    title: 'The 0-to-Scale Flywheel System',
    subtitle: 'Transition From Solopreneur to Automated High-Leverage AI Agency / Mastermind',
    description: 'How our top students scale past $20,000/mo and $50,000/mo by stacking monthly recurring AI maintenance retainers, hiring offshore AI prompt operators, and creating group cohorts.',
    iconName: 'TrendingUp',
    deliverables: [
      'The Monthly Recurring Retainer (MRR) stack for guaranteed income',
      'Hiring and delegating to $8/hr AI operators to run your fulfillment',
      'Transitioning 1-on-1 clients into a $15k/yr private mastermind cohort',
      'The $100k/quarter roadmap with legal and operational protections'
    ],
    tools: ['Stripe Billing', 'Slack Community', 'Loom AI', 'Whop / Circle'],
    takeaway: 'Build real business equity and predictable compounding monthly recurring revenue.',
    previewSnippet: 'Case Study Blueprint: How Mark scaled from $3,500/mo to $38,000/mo recurring in 90 days.'
  }
];

export const BONUSES_DATA: BonusItem[] = [
  {
    id: 'bonus-1',
    title: '50+ Plug-and-Play AI Coaching Prompts & SOP Swipe File',
    value: 997,
    tag: 'FREE TODAY',
    description: 'Battle-tested master prompts to generate high-converting sales scripts, client onboarding roadmaps, curriculum outlines, and high-ticket client proposals in seconds.',
    bullets: [
      '14 Cold Outreach & Lead Generation Prompt Sequences',
      '12 Client Diagnostic & Niche Positioning Prompts',
      '15 Fulfillment & Content Generation Workflows',
      'Full Notion workspace template ready for 1-click duplicate'
    ],
    iconName: 'FileText'
  },
  {
    id: 'bonus-2',
    title: 'The $10k High-Ticket Client Contract & Proposal Suite',
    value: 797,
    tag: 'FREE TODAY',
    description: 'Our attorney-reviewed high-ticket client agreement templates, retainer contract addendums, and non-disclosure agreements designed for AI consulting and coaching.',
    bullets: [
      '1-Page High-Ticket Agreement (Instant DocuSign ready)',
      'Scope of Work (SOW) AI deliverables clause templates',
      'Monthly Recurring Retainer agreement contract',
      'Payment plans & late fee structure protections'
    ],
    iconName: 'ShieldCheck'
  },
  {
    id: 'bonus-3',
    title: 'Custom "AI Client Qualifier" GPT & Make.com Automation Blueprint',
    value: 1197,
    tag: 'FREE TODAY',
    description: 'Import our pre-built custom GPT assistant and webhook automation that scores inbound leads, qualifies budgets, and automatically books calendar appointments with Zero manual effort.',
    bullets: [
      '1-Click Make.com scenario JSON file import',
      'Configured Custom GPT system prompt & knowledge base',
      'Calendar integration (Calendly / Cal.com / HighLevel)',
      '10-minute setup video tutorial'
    ],
    iconName: 'Bot'
  },
  {
    id: 'bonus-4',
    title: 'Live 1-on-1 Niche Hotseat & Offer Audit With Alex Vance',
    value: 997,
    tag: 'FREE TODAY',
    description: 'During the live masterclass broadcast, 3 lucky attendees will be selected live on screen to have their offer roasted, restructured, and priced at $5,000+ in real time.',
    bullets: [
      'Direct feedback on your target market and unique hook',
      'Exact pricing tier recommendation for your skill set',
      'Live Q&A session until every single question is answered',
      'Private recording access of all attendee hotseats'
    ],
    iconName: 'Video'
  }
];

export const TESTIMONIALS_DATA: Testimonial[] = [
  {
    id: 'test-1',
    name: 'Julian Montgomery',
    role: 'Former Corporate Consultant',
    niche: 'B2B Sales Optimization',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&q=80',
    revenueBefore: '$0 / Transitioning',
    revenueAfter: '$34,500 / Month',
    timeline: 'Within 68 Days',
    headline: 'Signed 4 clients at $6,000 each in my first 60 days using the AI Mini-Audit!',
    quote: 'I had 10 years of business experience but had no clue how to monetize AI. The AI Money Making system gave me the exact architecture. Alex showed me how to package custom GPTs into a $6k sprint. My first week using the outreach script I booked 9 calls and closed 2 immediately. Truly life changing.',
    videoDuration: '3:42 Min Video',
    verifiedBadge: true,
    highlightTag: '$34.5k/mo Verified'
  },
  {
    id: 'test-2',
    name: 'Elena Rostova',
    role: 'Wellness & Mindset Coach',
    niche: 'Health & Executive Wellness',
    avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=400&q=80',
    revenueBefore: '$2,800 / Mo (Burned Out)',
    revenueAfter: '$18,200 / Month',
    timeline: 'Within 45 Days',
    headline: 'Cut my working hours from 55 hrs/wk down to 12 hrs/wk while 6x-ing income!',
    quote: 'I was charging $75/hr for coaching and was on the brink of exhaustion. Alex showed me how to create an AI Accountability Copilot for my clients. Now I charge $3,000 for a 90-day program. The AI does the daily check-ins and my clients get BETTER results. I have 6 active retainers now.',
    videoDuration: '2:18 Min Video',
    verifiedBadge: true,
    highlightTag: '6x Income Growth'
  },
  {
    id: 'test-3',
    name: 'David Chen',
    role: 'Digital Agency Owner',
    niche: 'Real Estate Lead Generation',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80',
    revenueBefore: '$6,000 / Mo (High Churn)',
    revenueAfter: '$42,000 / Month',
    timeline: 'Within 90 Days',
    headline: 'Replaced my 4-person VA team with 2 AI agents and added $36k in MRR.',
    quote: 'The 1-Click AI Delivery Engine is worth thousands alone. We used to struggle with fulfillment delays. Implementing the automated sprint templates allowed us to take on 11 new commercial real estate clients without hiring extra staff. Profit margins went from 30% to 88%.',
    videoDuration: '4:15 Min Video',
    verifiedBadge: true,
    highlightTag: '$42k/mo MRR'
  },
  {
    id: 'test-4',
    name: 'Marcus Sterling',
    role: 'Career Strategist',
    niche: 'Tech & Career Coaching',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=400&q=80',
    revenueBefore: '$1,500 / Freelance',
    revenueAfter: '$21,000 / Month',
    timeline: 'Within 50 Days',
    headline: 'Closed my first $5,000 client on my very first pitch using Alexs script.',
    quote: 'I was terrified of sales calls. The objection handling breakdown in Module 2 gave me unstoppable confidence. When the prospect asked "Why should I pay $5k when I have ChatGPT?", I used Alexs Value Paradox framework and they sent the wire transfer that same afternoon.',
    videoDuration: '1:54 Min Video',
    verifiedBadge: true,
    highlightTag: 'First $5k Deal'
  },
  {
    id: 'test-5',
    name: 'Sophia Al-Mansoor',
    role: 'Content Strategist',
    niche: 'Creator Economy & Brand Strategy',
    avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=400&q=80',
    revenueBefore: '$4,200 / Month',
    revenueAfter: '$27,800 / Month',
    timeline: 'Within 75 Days',
    headline: 'Scaled to 7 monthly recurring agency retainers using custom AI avatars.',
    quote: 'The AI Client Magnet framework is insane. We set up an automated demo using HeyGen and Claude. We generated 38 calls in 3 weeks. Clients are stunned by the tech and happily pay our $4,000/month ongoing retainer to manage their AI systems.',
    videoDuration: '3:02 Min Video',
    verifiedBadge: true,
    highlightTag: '7 Active Retainers'
  },
  {
    id: 'test-6',
    name: 'Robert Vane',
    role: 'Financial Advisor',
    niche: 'Wealth & Small Biz Advisory',
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=400&q=80',
    revenueBefore: '$8,000 / Traditional',
    revenueAfter: '$31,500 / Month',
    timeline: 'Within 60 Days',
    headline: 'Transformed traditional advisory into an AI-augmented wealth accelerator.',
    quote: 'Clients today want speed and data. Packaging our financial planning with real-time AI cash-flow dashboards allowed us to triple our upfront onboarding fee to $7,500 with zero resistance from business owners.',
    videoDuration: '2:45 Min Video',
    verifiedBadge: true,
    highlightTag: 'Tripled Fees'
  }
];

export const FAQS_DATA: FaqItem[] = [
  {
    question: 'What is the AI Money Making Webinar?',
    answer: 'It’s a live beginner-friendly webinar where you’ll learn how AI can be used to build skills, create opportunities, and explore different ways to earn online.',
    category: 'general'
  },
  {
    question: 'Do I need any prior AI knowledge?',
    answer: 'No. The webinar is designed for complete beginners. You don’t need any technical or coding experience.',
    category: 'experience'
  },
  {
    question: 'How will I access the webinar?',
    answer: 'After successful registration and payment, you’ll receive the webinar access details through WhatsApp.',
    category: 'logistics'
  },
  {
    question: 'Will I learn practical AI tools?',
    answer: 'Yes. The session focuses on practical AI tools, use cases, and strategies that you can start exploring after the webinar.',
    category: 'experience'
  },
  {
    question: 'Is this a guaranteed way to make money?',
    answer: 'No. The webinar teaches AI skills and potential ways to monetize them. Your results will depend on your skills, effort, consistency, and implementation.',
    category: 'results'
  },
  {
    question: 'What is your refund policy?',
    answer: 'This is a digital recorded course with instant access. Once access to the course is provided, refunds cannot be issued. If you have any questions before enrolling, please contact us on WhatsApp.',
    category: 'general'
  },
  {
    question: 'Who can join this webinar?',
    answer: 'Students, job seekers, freelancers, professionals, business owners, homemakers, content creators, and anyone interested in learning AI can join.',
    category: 'general'
  },
  {
    question: 'Why is the webinar priced at only ₹99?',
    answer: 'The ₹99 fee is intentionally kept affordable so that anyone who is genuinely interested in learning AI can join the session. It also helps us attract serious learners who are willing to invest in their learning journey.',
    category: 'general'
  }
];

export const MEDIA_LOGOS = [
  { name: 'Forbes', label: 'FORBES' },
  { name: 'Entrepreneur', label: 'ENTREPRENEUR' },
  { name: 'Business Insider', label: 'BUSINESS INSIDER' },
  { name: 'TechCrunch', label: 'TECHCRUNCH' },
  { name: 'Bloomberg', label: 'BLOOMBERG' },
  { name: 'Fast Company', label: 'FAST COMPANY' }
];

export const LIVE_ACTIVITY_EVENTS = [
  'Michael R. from Chicago just reserved a VIP Seat',
  'David S. from London claimed the $3,988 Bonus Bundle',
  'Amanda L. from Sydney booked for the 7:00 PM EST masterclass',
  'Carlos M. from Miami locked in a free seat',
  'Jessica T. from Toronto unlocked the 50+ AI Prompts Swipe File',
  'Alexander W. from Berlin just registered for the masterclass',
  'Rachel K. from Los Angeles secured seat for 7:00 PM broadcast'
];
