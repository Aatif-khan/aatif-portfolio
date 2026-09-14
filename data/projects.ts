import { ProjectItem } from "./types";

export const projectsData: ProjectItem[] = [
  {
    id: "enterprise-ai-platform",
    title: "Enterprise AI-Powered Data Platform",
    type: "professional",
    subtitle: "Enterprise Workflow Automation & Knowledge Discovery",
    description:
      "An enterprise-grade web platform for data management, document workflows, knowledge discovery, dynamic visual graphing, and AI-assisted application experiences.",
    myRole:
      "Lead Frontend Engineer responsible for Angular application architecture, RxJS state management, workflow visualizer components, and API/WebSocket integration.",
    confidentialNotice: "Enterprise Project — Details generalized due to confidentiality.",
    featured: true,
    highlights: [
      "Built complex Angular interfaces for enterprise workflow automation and knowledge discovery.",
      "Integrated BPMN-based process modeling tools and dynamic visual canvas components.",
      "Built knowledge graph visualization interfaces using Cytoscape.js.",
      "Integrated real-time streaming experiences via WebSockets, STOMP, and SockJS protocol flows.",
      "Implemented JWT-based authentication, permission guards, and reusable component libraries.",
    ],
    technologies: [
      "Angular",
      "TypeScript",
      "RxJS",
      "PrimeNG",
      "Angular CDK",
      "BPMN.js",
      "Cytoscape.js",
      "STOMP",
      "SockJS",
      "REST APIs",
    ],
    caseStudy: {
      overview:
        "Enterprise-scale SaaS platform focused on workflow automation, document management, knowledge discovery, dynamic data handling, and AI-assisted experiences.",
      problem:
        "Enterprise teams required a unified, high-performance interface to orchestrate complex document workflows, visualize interconnected data entities, and interact with AI-driven discovery engines.",
      context:
        "Built within an Agile enterprise engineering team at GTC Software targeting mission-critical data management operations.",
      approach:
        "Architected a modular Angular frontend using RxJS for predictable reactive state management, Angular CDK for complex UI behaviors, and custom visual canvas integrations.",
      keyContributions: [
        "Designed reusable UI components and shared Angular services across domain modules.",
        "Engineered interactive BPMN workflow visualizers and Cytoscape.js graph discovery tools.",
        "Implemented real-time WebSocket communication channels using STOMP and SockJS.",
        "Optimized application performance through lazy loading and route-based code splitting.",
      ],
      technicalChallenges: [
        "Handling high-frequency WebSocket data streams without triggering excessive Angular change detection cycles.",
        "Rendering complex graph structures with hundreds of nodes smoothly in browser canvases.",
      ],
      outcome:
        "Delivered a responsive, enterprise-ready frontend interface enabling seamless workflow execution and knowledge discovery.",
    },
  },
  {
    id: "cashloom",
    title: "CashLoom",
    type: "personal",
    subtitle: "Personal Expense Management PWA",
    description:
      "A personal expense management Progressive Web App built with Next.js and TypeScript, designed to track spending, manage budgets, recurring transactions, and review financial activity through interactive reports.",
    myRole:
      "Independent Product Developer responsible for end-to-end design, frontend architecture, local data persistence, PWA optimization, and Vercel deployment.",
    featured: true,
    liveUrl: "https://cashloom.vercel.app",
    githubUrl: "https://github.com/Aatif-khan/expense-tracker-pwa",
    highlights: [
      "Developed a local-first Progressive Web App (PWA) with offline persistence using IndexedDB.",
      "Engineered interactive financial reporting, category breakdown charts, and date-range filtering.",
      "Implemented recurring expense automation, budget goal tracking, and instant CSV export capabilities.",
      "Optimized mobile responsiveness and client-side rendering performance for near-instant load times.",
    ],
    technologies: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "PWA",
      "IndexedDB",
      "Chart.js",
      "Vercel",
    ],
    caseStudy: {
      overview:
        "A personal expense management application designed for intuitive daily tracking, budget management, recurring transactions, and offline data persistence.",
      problem:
        "Many personal finance tools require mandatory cloud accounts, paid subscriptions, or unstable network connectivity for simple expense tracking.",
      context:
        "Independent open-source product built to demonstrate Next.js, TypeScript, PWA capabilities, and local data persistence.",
      approach:
        "Built a local-first architecture using IndexedDB to ensure total user data privacy, zero-latency interactions, and full offline accessibility.",
      keyContributions: [
        "Designed clean, mobile-first responsive interfaces using Tailwind CSS.",
        "Implemented local data persistence layer with IndexedDB and web storage fallbacks.",
        "Integrated interactive chart visualizations for weekly, monthly, and yearly expense reporting.",
        "Configured PWA manifest, service worker caching, and offline app capabilities.",
      ],
      technicalChallenges: [
        "Maintaining fast client-side query performance across multi-year expense records stored locally in IndexedDB.",
        "Ensuring consistent PWA service worker behavior and asset caching across mobile browsers.",
      ],
      outcome:
        "Successfully launched CashLoom as a standalone, responsive PWA with zero external server dependencies.",
    },
  },
  {
    id: "enterprise-operations-platform",
    title: "Enterprise Operations Management Platform",
    type: "professional",
    subtitle: "Project, Warehouse & Field Operations Management",
    description:
      "An enterprise web application supporting project management, warehouse workflows, equipment tracking, field crew coordination, and administrative reporting.",
    myRole:
      "Angular & Next.js Developer responsible for building operational dashboards, equipment tracking modules, automated PDF rate sheet generation, and PWA capabilities.",
    confidentialNotice: "Enterprise Project — Details generalized due to confidentiality.",
    featured: false,
    highlights: [
      "Engineered project management, warehouse workflow, equipment tracking, and field crew interfaces.",
      "Built automated PDF rate sheet generation tools, email notification systems, and data visualizers.",
      "Developed a Progressive Web Application (PWA) with offline capabilities across web and mobile platforms.",
    ],
    technologies: [
      "Angular",
      "Next.js",
      "TypeScript",
      "PWA",
      "PDF Generation",
      "REST APIs",
      "Tailwind CSS",
    ],
  },
  {
    id: "modern-ecommerce-web-apps",
    title: "E-Commerce & Social Web Applications",
    type: "professional",
    subtitle: "E-Commerce, Auctions & Real-time Social Platforms",
    description:
      "A collection of production web applications featuring e-commerce, auction functionality, real-time social interaction features, authentication, and payment gateway integrations.",
    myRole:
      "Angular Developer responsible for REST API integration, JWT authentication, Socket.IO real-time features, and payment workflows.",
    confidentialNotice: "Enterprise Project — Details generalized due to confidentiality.",
    featured: false,
    highlights: [
      "Engineered dynamic blog applications, e-commerce storefronts, auction modules, and social features.",
      "Implemented Socket.IO real-time communication, JWT authentication, and secure authorization flows.",
      "Integrated payment gateways including Stripe, PayPal, and Escrow-based payment workflows.",
    ],
    technologies: [
      "Angular",
      "Next.js",
      "TypeScript",
      "Socket.IO",
      "JWT",
      "Stripe",
      "PayPal",
      "Escrow",
      "REST APIs",
    ],
  },
  {
    id: "healthcare-collaboration-app",
    title: "Healthcare Collaboration Application",
    type: "professional",
    subtitle: "Cross-Platform Healthcare Workflow System",
    description:
      "A cross-platform healthcare application designed to streamline workflows between patients, doctors, laboratories, pharmacies, and medical stores.",
    myRole:
      "Jr. Ionic Developer responsible for developing cross-platform UI components, patient/doctor workflow screens, and Google Maps API integrations.",
    confidentialNotice: "Enterprise Project — Details generalized due to confidentiality.",
    featured: false,
    highlights: [
      "Built patient, doctor, laboratory, and pharmacy collaboration workflow interfaces.",
      "Integrated Google Maps API for facility location search and medical store discovery.",
    ],
    technologies: ["Ionic", "Angular", "TypeScript", "Google Maps API", "REST APIs"],
  },
];
