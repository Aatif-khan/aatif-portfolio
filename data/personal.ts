import { PersonalInfo } from "./types";

export interface AboutFocusArea {
  title: string;
  description: string;
  skills: string[];
}

export interface PersonalData extends PersonalInfo {
  specialization: string;
  headline: string;
  primaryTech: string[];
  secondaryTech: string[];
  aboutBio: string[];
  engineeringApproach: string[];
  focusAreas: AboutFocusArea[];
}

export const personalData: PersonalData = {
  name: "Aatif Khan Pathan",
  role: "Senior Frontend Engineer / Senior Angular Developer",
  specialization: "Angular • TypeScript • RxJS • React • Next.js",
  experienceYears: "6+",
  headline: "Building Scalable Enterprise Web Applications & Modern UI Architecture",
  tagline: "Scalable enterprise web applications, data-driven interfaces, workflow engines, and modern frontend architecture.",
  summary:
    "Senior Frontend Engineer with 6+ years of experience building scalable enterprise web applications using Angular, TypeScript, RxJS, React, and Next.js. Experienced in developing enterprise SaaS platforms, data-driven applications, dashboards, workflow-based systems, administration portals, PWAs, and customer-facing applications.",
  location: "Ahmedabad, Gujarat, India",
  email: "pathanaatif6@gmail.com",
  phone: "+91 75729 77724",
  linkedin: "https://www.linkedin.com/in/aatif-khan-pathan",
  githubPlaceholder: "[PLACEHOLDER: Add GitHub URL]",
  resumePlaceholder: "[PLACEHOLDER: Resume PDF path]",
  domainPlaceholder: "[PLACEHOLDER: Add final domain]",
  primaryTech: ["Angular", "TypeScript", "RxJS", "React", "Next.js"],
  secondaryTech: ["Enterprise SaaS", "REST APIs", "PWA", "Tailwind CSS", "WebSockets"],
  aboutBio: [
    "I am a Senior Frontend Engineer / Senior Angular Developer based in Ahmedabad, India, with 6+ years of professional experience building scalable web applications across enterprise SaaS platforms, operational systems, administration portals, and progressive web apps.",
    "My technical foundation centers on deep expertise in Angular, TypeScript, and RxJS alongside hands-on experience engineering modern React and Next.js applications. I focus on translating complex business requirements into intuitive, maintainable, and high-performance user interfaces.",
    "Throughout my career, I have architected reusable component libraries, multi-tenant administrative platforms, interactive canvas tools, mobile-first PWA field applications, real-time streaming dashboards, and secure API integrations.",
  ],
  engineeringApproach: [
    "Maintainable Architecture & Reusable Component Systems",
    "Predictable State Management with RxJS & React Hooks",
    "Performance Optimization, Lazy Loading & Code Splitting",
    "Robust REST API, SignalR & WebSocket Real-Time Integrations",
    "Accessible, Responsive, & High-Contrast UI Engineering",
  ],
  focusAreas: [
    {
      title: "Enterprise Web Applications & SaaS",
      description:
        "Building modular Angular enterprise applications with robust dependency injection, lazy loading, multi-tenant RBAC guards, and clean component hierarchies.",
      skills: ["Angular", "TypeScript", "RxJS", "Angular CDK", "PrimeNG", "Angular Material"],
    },
    {
      title: "React & Next.js Ecosystem",
      description:
        "Developing SSR/SSG web applications, administrative portals, NextAuth.js authentication flows, and schema-driven form validation.",
      skills: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Formik", "Zod", "Yup"],
    },
    {
      title: "Progressive Web Apps & Interactive UI",
      description:
        "Engineering mobile-first PWAs with Service Worker caching, Android TWA deployment, interactive HTML5 canvas magnification, and SVG overlays.",
      skills: ["PWA", "Angular Service Worker", "Android TWA", "HTML5 Canvas", "SVG", "ApexCharts"],
    },
    {
      title: "API & Real-Time Integrations",
      description:
        "Connecting frontend interfaces to REST services, NSwag typed clients, JWT auth interceptors, SignalR, Socket.IO, and payment gateways.",
      skills: ["REST APIs", "Axios", "JWT", "SignalR", "Socket.IO", "Stripe", "PayPal"],
    },
  ],
};
