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

export interface CaseStudyDetails {
  overview: string;
  myRole: string;
  challenge: string;
  contributions: string[];
  keyEngineeringWork: string[];
  technicalApproach: string;
  technologies: string[];
  outcome: string;
}

export interface ProjectItem {
  id: string;
  title: string;
  type: "professional" | "personal";
  subtitle: string;
  description: string;
  myRole: string;
  technologies: string[];
  confidentialNotice?: string;
  featured: boolean;
  liveUrl?: string;
  githubUrl?: string;
  liveUrlPlaceholder?: string;
  githubUrlPlaceholder?: string;
  highlights?: string[];
  caseStudy?: CaseStudyDetails;
}

export interface SkillCategory {
  category: string;
  skills: string[];
}

export interface ServiceItem {
  id: string;
  title: string;
  subtitle?: string;
  description: string;
  categoryTag?: string;
  isPrimary?: boolean;
  capabilities: string[];
  highlights?: string[];
  iconName: string;
}
