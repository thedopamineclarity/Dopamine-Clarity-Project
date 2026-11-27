export type Language = 'en' | 'fr' | 'es';

export type SectionId =
  | 'home'
  | 'about'
  | 'education'
  | 'resources'
  | 'journal'
  | 'references'
  | 'donate'
  | 'contact';

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  statement: string;
}

export interface EducationTopic {
  id: string;
  number: string;
  question: string;
  paragraphs: string[];
  bulletHeading?: string;
  bulletItems?: { label: string; description: string }[];
  externalLink?: { introText: string; label: string; url: string };
  keyTakeaway: string;
  citationIds: number[];
}

export interface ReferenceItem {
  id: number;
  apaCitation: string;
  publisher: string;
  year: string;
  topicArea: string;
  url: string;
}

export interface ResourceOrg {
  id: string;
  name: string;
  category: 'helpline' | 'treatment' | 'youth' | 'research';
  region: string;
  description: string;
  phone?: string;
  textInfo?: string;
  email?: string;
  website: string;
  availability: string;
}

export interface JournalStory {
  id: string;
  title: string;
  author: string;
  isAnonymous: boolean;
  date: string;
  topic: 'recovery' | 'family' | 'hope' | 'community';
  content: string;
  status: 'approved' | 'pending';
  consentGiven: boolean;
}
