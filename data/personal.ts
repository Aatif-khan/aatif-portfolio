import { PersonalInfo } from "./types";

export interface HeroData extends PersonalInfo {
  specialization: string;
  headline: string;
  primaryTech: string[];
  secondaryTech: string[];
}

export const personalData: HeroData = {
  name: "Aatif Khan Pathan",
  role: "Senior Frontend Engineer",
  specialization: "Angular • TypeScript • RxJS • Enterprise SaaS",
  experienceYears: "6+",
  headline: "Building Scalable Enterprise Web Experiences",
  tagline: "Scalable enterprise web applications, data-driven interfaces, workflow engines, and modern frontend architecture.",
  summary:
    "6+ years building enterprise applications with Angular, TypeScript, and modern frontend technologies — from complex data-driven interfaces to AI-powered SaaS platforms.",
  location: "Ahmedabad, Gujarat, India",
  email: "pathanaatif6@gmail.com",
  phone: "+91 75729 77724",
  linkedin: "https://www.linkedin.com/in/aatif-khan-pathan",
  githubPlaceholder: "[PLACEHOLDER: Add GitHub URL]",
  resumePlaceholder: "[PLACEHOLDER: Resume PDF path]",
  domainPlaceholder: "[PLACEHOLDER: Add final domain]",
  primaryTech: ["Angular", "TypeScript", "RxJS"],
  secondaryTech: ["Next.js", "Enterprise SaaS", "Tailwind CSS", "REST APIs", "WebSockets"],
};
