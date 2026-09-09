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
  aboutBio: [
    "I am a Senior Frontend Engineer based in Ahmedabad, India, with 6+ years of experience engineering production web applications for enterprise clients and modern SaaS platforms.",
    "My core specialization centers on Angular, TypeScript, and RxJS. Throughout my career, I have focused on translating complex business requirements into intuitive, scalable, and maintainable user interfaces.",
    "My professional experience spans enterprise workflow automation platforms, AI-assisted interfaces, document management systems, data-driven analytics dashboards, progressive web applications (PWAs), e-commerce platforms, and real-time streaming tools.",
  ],
  engineeringApproach: [
    "Maintainable Architecture & Reusable Component Systems",
    "Predictable State Management with RxJS & Reactive Forms",
    "Performance Optimization & Lazy Loading Strategies",
    "Robust REST API & WebSocket Real-Time Integrations",
    "Accessible, Responsive, & High-Contrast UI Design",
  ],
  focusAreas: [
    {
      title: "Angular & Enterprise SaaS",
      description:
        "Building modular Angular applications with robust dependency injection, lazy loading, and clean component hierarchies for enterprise workflows.",
      skills: ["Angular", "TypeScript", "Angular CDK", "PrimeNG", "Angular Material"],
    },
    {
      title: "Reactive Systems & State",
      description:
        "Managing asynchronous data flows, complex user inputs, and live socket streams using RxJS observables and reactive state patterns.",
      skills: ["RxJS", "Observables", "BehaviorSubject", "Reactive Forms"],
    },
    {
      title: "Workflow & Data Visualizations",
      description:
        "Integrating dynamic visual canvas tools, flowcharts, charts, and interactive document editing interfaces into enterprise web applications.",
      skills: ["BPMN.js", "Cytoscape.js", "Chart.js", "PWA", "IndexedDB"],
    },
    {
      title: "API & Real-time Integrations",
      description:
        "Connecting frontend interfaces seamlessly to backend REST services, WebSockets, STOMP streams, and payment/auth gateways.",
      skills: ["REST APIs", "WebSockets", "STOMP / SockJS", "JWT Auth"],
    },
  ],
};
