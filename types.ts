export interface Award {
  year: string;
  title: string;
  organization: string;
  description: string;
  iconType: 'star' | 'trophy' | 'award';
}

export interface Role {
  title: string;
  category: string;
  description: string;
}

export interface Project {
  title: string;
  description: string;
  url: string;
}

export interface Degree {
  degree: string;
  school: string;
  location: string;
  years: string;
}

export interface Position {
  title: string;
  organization: string;
  period: string;
  highlights: string[];
}

export interface SocialLink {
  platform: string;
  url: string;
}

export enum SectionId {
  HERO = 'home',
  AWARDS = 'awards',
  FOCUS = 'focus',
  EDUCATION = 'education',
  EXPERIENCE = 'experience',
  CONTACT = 'contact',
}