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
    description: "Primary framework for enterprise applications, lazy loading, and modular architecture.",
    tag: "Primary Framework",
    highlights: ["Standalone Components", "Dependency Injection", "Lazy Loading & Splitting", "Angular CDK & Material"],
  },
  {
    name: "TypeScript",
    description: "Strongly-typed application engineering ensuring maintainable code and type safety.",
    tag: "Language Specialization",
    highlights: ["Generics & Utility Types", "Strict Type Checking", "Interface & Model Architecture", "ESNext Features"],
  },
  {
    name: "RxJS",
    description: "Reactive programming for complex data streams, state flows, and live subscriptions.",
    tag: "Reactive State Engine",
    highlights: ["Observables & Subjects", "Custom RxJS Operators", "BehaviorSubject State", "Async Event Pipeline"],
  },
];

export const skillCategoriesData: SkillCategoryGroup[] = [
  {
    id: "frontend-frameworks",
    category: "Frontend & Frameworks",
    description: "Core languages and web application frameworks.",
    skills: ["Angular", "TypeScript", "JavaScript ES6+", "Next.js", "HTML5", "CSS3", "SCSS"],
  },
  {
    id: "angular-ecosystem",
    category: "Angular Ecosystem & State",
    description: "Reactive tools, routing, and UI component engines.",
    skills: [
      "RxJS",
      "Reactive Forms",
      "Angular Router",
      "Route Guards",
      "Angular CDK",
      "Angular Material",
      "PrimeNG",
    ],
  },
  {
    id: "ui-styling",
    category: "UI Architecture & Styling",
    description: "Modern CSS frameworks, design systems, and responsive layouts.",
    skills: ["Tailwind CSS", "Bootstrap", "Responsive UI", "Reusable Components", "Design Systems"],
  },
  {
    id: "api-realtime",
    category: "API & Real-time Integration",
    description: "Data transport protocols, authentication, and WebSocket streams.",
    skills: ["REST APIs", "JSON", "JWT Authentication", "WebSockets", "Socket.IO", "STOMP", "SockJS"],
  },
  {
    id: "visualization-ui",
    category: "Visualizations & Specialized UI",
    description: "Process modeling, graphs, maps, charts, and PWAs.",
    skills: [
      "BPMN.js",
      "Cytoscape.js",
      "Chart.js",
      "Google Maps API",
      "Mapbox",
      "GrapesJS",
      "Progressive Web Apps (PWA)",
    ],
  },
  {
    id: "tools-practices",
    category: "Tools & Engineering Practices",
    description: "Version control, workflow methodologies, and code quality.",
    skills: [
      "Git",
      "GitHub",
      "GitLab",
      "Angular CLI",
      "npm",
      "Agile / Scrum",
      "Code Reviews",
      "Unit Testing",
      "Performance Optimization",
      "Accessibility (a11y)",
    ],
  },
];
