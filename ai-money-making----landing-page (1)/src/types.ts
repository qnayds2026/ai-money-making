export interface MasterclassSession {
  id: string;
  date: string;
  time: string;
  timezone: string;
  spotsRemaining: number;
  isPopular?: boolean;
}

export interface PillarModule {
  number: string;
  title: string;
  subtitle: string;
  description: string;
  iconName: string;
  deliverables: string[];
  tools: string[];
  takeaway: string;
  previewSnippet: string;
}

export interface BonusItem {
  id: string;
  title: string;
  value: number;
  tag: string;
  description: string;
  bullets: string[];
  iconName: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  niche: string;
  avatar: string;
  revenueBefore: string;
  revenueAfter: string;
  timeline: string;
  headline: string;
  quote: string;
  videoDuration?: string;
  verifiedBadge: boolean;
  highlightTag: string;
}

export interface FaqItem {
  question: string;
  answer: string;
  category: 'general' | 'experience' | 'results' | 'logistics';
}

export interface RegistrationData {
  fullName: string;
  email: string;
  phone: string;
  sessionId: string;
  experienceLevel: string;
  currentStatus?: string;
  primaryNiche: string;
  sendSmsReminder: boolean;
  ticketId?: string;
  registeredAt?: string;
}

export interface NichePreset {
  id: string;
  name: string;
  icon: string;
  averageDealSize: number;
  typicalOffers: string[];
  recommendedAITools: string[];
  exampleTransformation: string;
}
