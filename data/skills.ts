export interface CoreSkill {
  name: string;
  description: string;
  tag: string;
  highlights: string[];
}

export interface SkillCategoryGroup {
  id: string;
  category: string;
  description: string;
  skills: string[];
}

export const coreSkillsData: CoreSkill[] = [
  {
    name: "Angular",
    description: "Primary framework for enterprise applications, lazy loaded routing, dependency injection, and modular architecture.",
    tag: "Primary Framework",
    highlights: ["Angular 15-19", "Dependency Injection", "Lazy Loading & Code Splitting", "Angular CDK & Material"],
  },
  {
    name: "TypeScript",
    description: "Strongly-typed application engineering ensuring maintainable codebase, strict typing, and compile-time safety.",
    tag: "Language Specialization",
    highlights: ["Generics & Utility Types", "Strict Type Checking", "Interface & Schema Design", "ESNext Features"],
  },
  {
    name: "RxJS",
    description: "Reactive programming for complex asynchronous data streams, state management, and real-time event pipelines.",
    tag: "Reactive Engine",
    highlights: ["Observables & Subjects", "Custom RxJS Operators", "BehaviorSubject State", "Async Event Pipelines"],
  },
  {
    name: "React & Next.js",
    description: "Modern SSR/SSG application development, server components, NextAuth.js authentication, and custom hooks.",
    tag: "SSR & Web Apps",
    highlights: ["Next.js 14/15 & React 18/19", "NextAuth.js & Middleware", "Tailwind CSS Layouts", "Formik / Yup / Zod Validation"],
  },
];

export const skillCategoriesData: SkillCategoryGroup[] = [
  {
    id: "frontend-frameworks",
    category: "Frontend Frameworks",
    description: "Core languages and web application frameworks.",
    skills: ["Angular", "TypeScript", "JavaScript ES6+", "React", "Next.js", "HTML5", "CSS3", "SCSS"],
  },
  {
    id: "angular-reactive",
    category: "Angular & Reactive Development",
    description: "Reactive state tools, routing, and UI component engines.",
    skills: [
      "RxJS",
      "Angular Reactive Forms",
      "Angular Router",
      "Route Guards",
      "Dependency Injection",
      "Angular CDK",
      "Angular Material",
      "PrimeNG",
    ],
  },
  {
    id: "ui-styling",
    category: "UI & Styling",
    description: "Modern CSS frameworks, administrative themes, and responsive design systems.",
    skills: ["Tailwind CSS", "Bootstrap", "AdminLTE", "Reactstrap", "Responsive UI", "Reusable Components", "Design Systems"],
  },
  {
    id: "api-forms-auth",
    category: "API, Forms & Authentication",
    description: "Data transport services, schema validation, and auth protocols.",
    skills: [
      "REST APIs",
      "Axios",
      "Angular HttpClient",
      "React Hook Form",
      "Formik",
      "Yup",
      "Zod",
      "JWT Authentication",
      "OAuth / OIDC",
      "NextAuth.js",
      "Next.js Middleware",
    ],
  },
  {
    id: "realtime-visualization",
    category: "Real-Time, Visualization & Interactive UI",
    description: "Real-time streaming, interactive canvas, SVG overlays, and charts.",
    skills: [
      "SignalR",
      "Socket.IO",
      "WebSockets",
      "STOMP",
      "SockJS",
      "ApexCharts",
      "React Table",
      "HTML5 Canvas",
      "SVG",
      "BPMN.js",
      "Cytoscape.js",
      "PDF Generation",
    ],
  },
  {
    id: "pwa-engineering",
    category: "PWA & Engineering Practices",
    description: "Progressive web applications, mobile wrappers, testing, and quality.",
    skills: [
      "Progressive Web Apps (PWA)",
      "Service Workers",
      "Android TWA",
      "NSwag",
      "Git",
      "GitHub",
      "GitLab",
      "Unit Testing",
      "Agile / Scrum",
      "Performance Optimization",
      "Accessibility (a11y)",
    ],
  },
];
