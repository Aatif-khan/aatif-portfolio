export interface SocialLink {
  platform: string;
  url: string;
  label: string;
}

export interface PersonalInfo {
  name: string;
  role: string;
  tagline: string;
  summary: string;
  experienceYears: string;
  location: string;
  email: string;
  phone: string;
  linkedin: string;
  githubPlaceholder: string;
  resumePlaceholder: string;
  domainPlaceholder: string;
}

export interface ExperienceItem {
  id: string;
  company: string;
  role: string;
  period: string;
  location?: string;
  description: string;
  achievements: string[];
  technologies: string[];
  isCurrent?: boolean;
}

export interface ProjectItem {
  id: string;
  title: string;
  type: 'professional' | 'personal';
  subtitle: string;
  description: string;
  myRole: string;
  technologies: string[];
  confidentialNotice?: string;
  featured: boolean;
  liveUrlPlaceholder?: string;
  githubUrlPlaceholder?: string;
  caseStudy?: {
    overview: string;
    problem: string;
    context: string;
    approach: string;
    keyContributions: string[];
    technicalChallenges: string[];
    outcome: string;
  };
}

export interface SkillCategory {
  category: string;
  skills: string[];
}

export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  capabilities: string[];
}
