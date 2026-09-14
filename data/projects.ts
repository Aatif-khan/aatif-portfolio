import { ProjectItem } from "./types";

export const projectsData: ProjectItem[] = [
  {
    id: "enterprise-ai-platform",
    title: "Enterprise AI & Data Platform",
    type: "professional",
    subtitle: "Enterprise Workflow Automation, Data Taxonomy & Knowledge Discovery",
    description:
      "Enterprise-grade web application focused on data management, workflow automation, document processes, and knowledge-driven interfaces.",
    myRole: "Senior Frontend Engineer / Angular Developer",
    confidentialNotice: "Professional Experience — Confidential Project",
    featured: true,
    highlights: [
      "Built reusable Angular components and reactive state patterns for complex enterprise data workflows.",
      "Integrated BPMN.js and Cytoscape.js for interactive workflow and relationship visualization.",
      "Developed recursive Angular structures and CDK drag-and-drop interactions for configurable interfaces.",
    ],
    technologies: [
      "Angular",
      "TypeScript",
      "RxJS",
      "PrimeNG",
      "Angular CDK",
      "BPMN.js",
      "Cytoscape.js",
      "REST APIs",
      "WebSockets",
    ],
    caseStudy: {
      overview:
        "An enterprise-grade web application focused on data management, taxonomy control, document processing workflows, knowledge graph visualization, and real-time collaborative state.",
      myRole:
        "Senior Frontend Engineer / Angular Developer responsible for Angular client architecture, reactive RxJS state management, workflow visualizers, recursive template component design, and real-time communication layers.",
      challenge:
        "The application involved complex data-driven workflows and deeply interconnected features requiring consistent state synchronization, reusable UI primitives, dynamic visual canvas interactions (BPMN workflow diagrams and Cytoscape relationship graphs), recursive template building, drag-and-drop layouts, and low-latency WebSocket updates without compromising rendering performance.",
      contributions: [
        "Architected reusable Angular component systems and dynamic forms for enterprise data dictionary and taxonomy management.",
        "Integrated BPMN.js process modeling tools for visual workflow configuration and Cytoscape.js for interactive enterprise knowledge graph discovery.",
        "Developed recursive Angular template builder components and Angular CDK drag-and-drop mechanics for dynamic document generation and layout configuration.",
        "Implemented secure JWT authentication handlers, multi-level role-based access control (RBAC), and Angular route guards for permission validation.",
        "Integrated real-time bidirectional communication via STOMP and SockJS over WebSockets to synchronize active collaborative state and live notification events.",
        "Engineered standardized REST API client services with strongly typed DTO mappings and centralized HTTP interceptors for error handling.",
      ],
      keyEngineeringWork: [
        "Designed reactive state stores using RxJS BehaviorSubject streams, combineLatest operators, and switchMap pipelines to decouple API asynchronous responses from template rendering cycles.",
        "Created optimized Angular wrapper directives around Cytoscape.js and BPMN.js canvas instances, handling custom node interactions and lifecycle cleanup to prevent memory leaks.",
        "Engineered recursive tree-rendering components to render deeply nested taxonomy structures and dynamic document builder sections.",
        "Implemented automated document export workflows supporting enterprise PDF/CSV report generation.",
      ],
      technicalApproach:
        "Leveraged RxJS reactive streams to handle asynchronous backend state transitions, maintaining single-source-of-truth state stores across deeply nested component trees. Standardized UI components using PrimeNG primitives and custom CSS tokens for theme consistency and accessibility.",
      technologies: [
        "Angular 16+",
        "TypeScript",
        "RxJS",
        "PrimeNG",
        "Angular CDK",
        "BPMN.js",
        "Cytoscape.js",
        "STOMP",
        "SockJS",
        "REST APIs",
        "JWT Authentication",
        "Route Guards",
      ],
      outcome:
        "Successfully established a scalable frontend architecture that simplified complex workflow interactions, improved component reusability across multiple internal feature modules, and ensured clean maintainability for enterprise data management workflows.",
    },
  },
  {
    id: "enterprise-operations-platform",
    title: "Enterprise Operations Platform",
    type: "professional",
    subtitle: "Multi-Tenant Enterprise Operations, Resource Management & Scheduling",
    description:
      "Multi-tenant enterprise platform supporting complex operational workflows, scheduling, resource management, and data-driven business processes.",
    myRole: "Senior Frontend Engineer / Angular Developer",
    confidentialNotice: "Professional Experience — Confidential Project",
    featured: true,
    highlights: [
      "Built scalable Angular interfaces for complex operational workflows and data management.",
      "Developed interactive workflow and scheduling interfaces with reactive data handling.",
      "Implemented reusable enterprise UI components, forms, tables, filters, and API-driven workflows.",
      "Worked with multi-tenant application requirements and role-based access.",
    ],
    technologies: [
      "Angular 15",
      "TypeScript",
      "RxJS",
      "PrimeNG",
      "Bootstrap",
      "SignalR",
      "NSwag",
      "REST APIs",
    ],
    caseStudy: {
      overview:
        "A multi-tenant enterprise operations platform designed to streamline complex resource allocation, scheduling, operational estimation, and data-heavy enterprise workflows.",
      myRole:
        "Senior Frontend Engineer / Angular Developer responsible for enterprise module interfaces, scheduling user experience, multi-tenant security headers, SignalR integration, and NSwag TypeScript client automation.",
      challenge:
        "Managing high-density operational data streams, multi-tenant access boundaries, dynamic operational grid updates, complex multi-step rate calculation forms, and keeping the interface responsive under real-time event streams.",
      contributions: [
        "Developed multi-tenant Angular interfaces for operational resource scheduling, workforce assignment, and project estimation.",
        "Built interactive workflow interfaces for coordinating resource dispatching and partner logistics.",
        "Built project estimation modules covering labor, equipment, materials, and calculation engines with dynamic form validation.",
        "Integrated SignalR real-time event listeners to push instant updates, status changes, and notifications to active operational views.",
        "Configured NSwag automated TypeScript client generation pipelines, providing type-safe API communication across enterprise backend endpoints.",
        "Implemented multi-tenant route guards and HTTP interceptors to dynamically attach tenant context headers and validate permission scopes.",
      ],
      keyEngineeringWork: [
        "Structured features into lazy-loaded Angular modules to optimize initial bundle size and speed up route navigation across enterprise divisions.",
        "Applied ChangeDetectionStrategy.OnPush in data-heavy operational grids to minimize DOM re-renders during high-frequency SignalR updates.",
        "Built complex reactive forms with custom validators for dynamic rate calculations and multi-currency equipment estimations.",
        "Created custom PrimeNG data table wrappers with multi-column filtering, sorting, state persistence, and CSV/Excel export triggers.",
      ],
      technicalApproach:
        "Structured the application using feature-based lazy-loaded modules, combining RxJS reactive forms with PrimeNG data tables and custom filter pipelines. Enforced strict OnPush change detection in operational grids to ensure high performance.",
      technologies: [
        "Angular 15",
        "TypeScript",
        "RxJS",
        "PrimeNG",
        "Bootstrap",
        "SignalR",
        "NSwag",
        "REST APIs",
        "Lazy Loading",
        "JWT / RBAC",
      ],
      outcome:
        "Delivered a maintainable, enterprise-grade operations platform that streamlined daily operational workflows, unified estimation and scheduling across multi-tenant divisions, and enhanced overall UI responsiveness.",
    },
  },
  {
    id: "field-operations-pwa",
    title: "Field Operations PWA",
    type: "professional",
    subtitle: "Mobile-First Field Workflows, State-Driven Operations & Offline PWA",
    description:
      "Mobile-first Progressive Web Application designed for field teams to manage operational activities, time-based workflows, and site-related tasks.",
    myRole: "Senior Frontend Engineer / Angular Developer",
    confidentialNotice: "Professional Experience — Confidential Project",
    featured: true,
    highlights: [
      "Built mobile-first responsive interfaces and Progressive Web Application (PWA) architecture.",
      "Engineered state-driven time and activity workflows with validation and controlled transitions.",
      "Integrated Angular Service Worker caching for offline reliability and site-related activity tracking.",
    ],
    technologies: [
      "Angular 17",
      "TypeScript",
      "RxJS",
      "PWA",
      "Angular Service Worker",
      "Luxon",
      "REST APIs",
    ],
    caseStudy: {
      overview:
        "A mobile-first Progressive Web Application tailored for field operations teams to manage daily activity tracking, equipment logs, site documents, and external vendor verification directly on mobile devices.",
      myRole:
        "Senior Frontend Engineer / Angular Developer responsible for mobile UX layout, state-driven workflow state machine logic, Angular Service Worker offline caching strategies, and touch-optimized interactive viewers.",
      challenge:
        "Delivering a fast, responsive mobile experience for field personnel working in low-connectivity environments, ensuring accurate activity tracking through controlled state transitions, and enabling fluid document viewing on mobile touch screens.",
      contributions: [
        "Engineered a state-driven time and activity tracking workflow with location validation and automated duration calculations.",
        "Configured Angular Service Worker offline caching strategies (stale-while-revalidate for static assets, network-first for transactional API calls).",
        "Built an interactive mobile document and blueprint viewer supporting touch panning, pinch-to-zoom, and markup overlays.",
        "Implemented secure external vendor workflows allowing partner drivers to submit digital delivery tickets via tokenized secure links without requiring app installation.",
        "Delivered Progressive Web Application capabilities for installation on mobile devices with responsive touch controls.",
      ],
      keyEngineeringWork: [
        "Implemented custom Luxon-based date/time utilities to accurately calculate multi-shift hours, break durations, and timezone offsets across geographically distributed site locations.",
        "Engineered an offline submission queue backed by IndexedDB to store activity logs captured offline and automatically sync them upon network reconnection.",
        "Designed high-contrast, thumb-friendly mobile interface layouts optimized for outdoor visibility.",
      ],
      technicalApproach:
        "Adopted a mobile-first responsive design strategy with thumb-friendly controls, standalone Angular components, deferrable views (`@defer`), and strict Service Worker caching policies to ensure reliable performance on field mobile hardware.",
      technologies: [
        "Angular 17",
        "TypeScript",
        "RxJS",
        "PWA",
        "Angular Service Worker",
        "Luxon",
        "IndexedDB",
        "REST APIs",
      ],
      outcome:
        "Provided a robust, offline-capable PWA that empowered field teams to capture operational data accurately, eliminating paper-based logs and streamlining vendor verification.",
    },
  },
  {
    id: "customer-facing-web-applications",
    title: "Customer-Facing Web Applications",
    type: "professional",
    subtitle: "React / Next.js High-Traffic Interactive Canvas & Payment Workflows",
    description:
      "Customer-facing web platforms built with React and Next.js, featuring interactive coordinate selection tools, timer-driven workflows, search filtering, and payment integrations.",
    myRole: "Senior Frontend Engineer / Next.js Developer",
    confidentialNotice: "Professional Experience — Confidential Project",
    featured: true,
    highlights: [
      "Developed interactive high-resolution canvas tools with responsive coordinate mapping algorithms.",
      "Engineered real-time zoom controls, SVG precision drawing tools, and timer-driven checkout workflows.",
      "Integrated Stripe and PayPal payment gateways, JWT authentication, and Next.js middleware protection.",
    ],
    technologies: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Stripe",
      "PayPal",
      "JWT",
      "REST APIs",
    ],
    caseStudy: {
      overview:
        "Consumer-facing React and Next.js web applications delivering interactive canvas selection tools, digital catalog search, user account authentication, and multi-currency payment checkout.",
      myRole:
        "Senior Frontend Engineer / Next.js Developer responsible for interactive canvas tools, responsive layout design, client state management, cart timers, payment integrations, and performance optimization.",
      challenge:
        "Delivering smooth 60fps interactive canvas tools with magnifying lens controls, maintaining precise coordinate transformation across variable screen sizes, handling reservation countdown timers, and providing seamless multi-currency checkout.",
      contributions: [
        "Developed interactive high-resolution coordinate selection tools with responsive viewport-to-image coordinate mapping algorithms.",
        "Built magnifying lens zoom interactions, keyboard-based precision controls, and SVG reference-line drawing tools for exact targeting.",
        "Engineered reservation timers, cart checkout workflows, and dynamic address forms.",
        "Integrated PayPal and Stripe payment flows, JWT authentication, Next.js middleware route protection, and historical transaction breakdowns.",
        "Implemented custom audio player controls, search filtering, and NextAuth.js social authentication for consumer media applications.",
      ],
      keyEngineeringWork: [
        "Formulated custom HTML5 Canvas rendering loops using requestAnimationFrame to ensure smooth magnifying glass movement over high-resolution imagery.",
        "Structured modular form architectures utilizing React Hook Form with Yup/Zod schema validation to handle dynamic billing and shipping details cleanly.",
        "Leveraged Next.js App Router server components for content rendering while maintaining modular interactive client components.",
      ],
      technicalApproach:
        "Emphasized clean React component composition, strict TypeScript typing, Tailwind CSS styling tokens, and React hook optimizations (useCallback, useMemo) to eliminate unwanted re-renders during high-frequency user canvas interactions.",
      technologies: [
        "Next.js",
        "React",
        "TypeScript",
        "Tailwind CSS",
        "HTML5 Canvas",
        "React Hook Form",
        "Stripe",
        "PayPal",
        "NextAuth.js",
        "JWT",
      ],
      outcome:
        "Delivered a sleek, highly interactive customer application that provided intuitive user interactions, reliable payment processing, and smooth cross-device responsiveness.",
    },
  },
  {
    id: "enterprise-admin-platform",
    title: "Enterprise Administration Platform",
    type: "professional",
    subtitle: "Next.js Admin Systems, Dynamic Forms, Schema Validation & Analytics",
    description:
      "Centralized administrative platform for managing multi-region platform settings, user role permissions, content catalog items, subscription tiers, and analytics dashboards.",
    myRole: "Senior Frontend Engineer / React & Next.js Developer",
    confidentialNotice: "Professional Experience — Confidential Project",
    featured: true,
    highlights: [
      "Built Next.js administrative interfaces for managing platform settings, user permissions, and subscription tiers.",
      "Engineered schema-driven dynamic form builders with Formik, Yup, and Zod for instant client-side validation.",
      "Integrated ApexCharts analytics dashboards and paginated React Tables with multi-column filtering.",
    ],
    technologies: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Formik",
      "Yup / Zod",
      "React Table",
      "ApexCharts",
    ],
    caseStudy: {
      overview:
        "An enterprise administration portal designed to manage multi-region platform settings, user role permissions, content inventories, pricing rules, subscription accounts, and executive analytics dashboards.",
      myRole:
        "Senior Frontend Engineer / React & Next.js Developer responsible for admin frontend architecture, schema-driven dynamic forms, data table primitives, analytics charting integration, and route authorization handlers.",
      challenge:
        "Building scalable, schema-driven administrative form builders, managing complex multi-column filterable data tables with server-side pagination, visualizing analytics metrics clearly, and enforcing strict admin route protection.",
      contributions: [
        "Built Next.js administrative interfaces for managing content assets, user roles, pricing structures, and subscription plans.",
        "Engineered schema-driven dynamic form builders using Formik, Yup, and Zod for instant client-side validation and error messaging.",
        "Integrated ApexCharts analytics dashboards for tracking revenue metrics, user registration velocity, active subscriptions, and system activity logs.",
        "Implemented advanced React Table wrappers supporting multi-column sorting, filter presets, column visibility toggles, and CSV exports.",
        "Integrated AWS S3 / CloudFront media management workflows with secure tokenized presigned upload URLs.",
      ],
      keyEngineeringWork: [
        "Developed custom client-side coordinate and content encryption helper utilities communicating with backend encryption services before API dispatch.",
        "Configured Next.js Middleware route guards to enforce role-based access control (RBAC), automatic token refreshes, and unauthorized redirect flows.",
        "Created reusable admin UI primitives (modals, slide-over drawers, status indicators, toast notifications) adhering to accessibility standards.",
      ],
      technicalApproach:
        "Architected the admin platform around reusable modular UI components and standardized API wrapper hooks. Standardized form schemas across all admin entity modules, simplifying backend contract updates and reducing boilerplates.",
      technologies: [
        "Next.js",
        "React",
        "TypeScript",
        "Tailwind CSS",
        "Formik",
        "Yup / Zod",
        "React Table",
        "ApexCharts",
        "AWS S3",
        "JWT",
      ],
      outcome:
        "Successfully established an intuitive, robust administrative suite that streamlined operational data management, improved administrative workflow efficiency, and provided accurate real-time business insights.",
    },
  },
  {
    id: "cashloom",
    title: "CashLoom — Personal Expense Management PWA",
    type: "personal",
    subtitle: "Local-First Personal Finance, Budgeting & Analytical Expense Tracker",
    description:
      "A personal expense management Progressive Web App built with Next.js and TypeScript, designed to track spending, manage budgets, and review financial activity through interactive reports.",
    myRole: "Independent Product Developer",
    featured: true,
    liveUrl: "https://cashloom.vercel.app",
    githubUrl: "https://github.com/Aatif-khan/expense-tracker-pwa",
    highlights: [
      "Developed a local-first Progressive Web App (PWA) with offline persistence using IndexedDB.",
      "Engineered interactive financial reporting, category breakdown charts, and date-range filtering.",
      "Implemented recurring expense automation, budget goal tracking, and instant CSV export capabilities.",
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
        "CashLoom is an independent personal expense management Progressive Web Application designed for convenient day-to-day use. It provides zero-friction expense logging, budgeting tools, recurring expense processing, and analytical spending reports while guaranteeing complete user data privacy through local storage.",
      myRole:
        "Independent Creator & Developer responsible for full-stack product definition, UI design, Next.js frontend architecture, IndexedDB persistence, PWA service worker setup, Chart.js visualizations, and Vercel deployment.",
      challenge:
        "Managing personal financial records typically suffers from clunky user interfaces, mandatory cloud signups, invasive advertisements, or lack of offline support. The goal was to build an ultra-fast, local-first finance PWA that works seamlessly across mobile and desktop devices without backend dependency.",
      contributions: [
        "Architected a local-first data storage engine using IndexedDB, allowing complete offline transaction creation, editing, category tagging, and retrieval without server latency.",
        "Implemented Next.js PWA capabilities with Service Worker offline caching, app manifest, installable home screen support, and responsive touch controls.",
        "Built interactive financial reporting dashboards with Chart.js, rendering spending breakdowns by category, monthly trend comparisons, and budget progress meters.",
        "Engineered recurring transaction logic that automatically calculates and prompts due expenses upon app open based on weekly, monthly, or yearly schedules.",
        "Created customizable date-range filtering, transaction search, category customization, and instant CSV export features for data mobility.",
      ],
      keyEngineeringWork: [
        "Formulated a reactive IndexedDB wrapper using TypeScript promises to handle database version migrations, indexing, and asynchronous queries cleanly.",
        "Implemented responsive Tailwind CSS UI components optimized for both desktop browsers and mobile touch devices, adhering to dark/light color schemes.",
        "Configured automated Vercel deployment pipeline triggered on main branch commits with static optimization for maximum initial load performance.",
      ],
      technicalApproach:
        "Combined Next.js static page generation with client-side local database hydration to achieve near-zero initial loading time. Implemented structured React context state to broadcast data mutations instantly across all active dashboard components and chart views.",
      technologies: [
        "Next.js",
        "TypeScript",
        "Tailwind CSS",
        "PWA",
        "Service Worker",
        "IndexedDB",
        "Chart.js",
        "Vercel",
      ],
      outcome:
        "Built and deployed a fully functional, public Progressive Web App that provides an intuitive, ad-free personal finance tool with complete user data privacy, high mobile usability, and zero backend maintenance overhead.",
    },
  },
  {
    id: "audio-streaming-platform",
    title: "Digital Content & Audio Streaming Platform",
    type: "professional",
    subtitle: "Consumer Audio Storytelling & Subscription Platform",
    description:
      "Consumer-facing audio streaming platform with content discovery, custom playback controls, subscription onboarding, and personalized audio experiences.",
    myRole: "Senior Frontend Engineer",
    confidentialNotice: "Professional Experience — Confidential Project",
    featured: false,
    highlights: [
      "Built custom HTML5 audio player controls featuring playback, scrubbing, buffering, and volume adjustments.",
      "Implemented multi-attribute catalog filtering, URL-synchronized search, and content API integration.",
      "Integrated NextAuth.js social authentication, OTP registration, and Stripe subscription billing.",
    ],
    technologies: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "NextAuth.js",
      "Stripe",
      "REST APIs",
    ],
    caseStudy: {
      overview:
        "A consumer audio storytelling and streaming web application delivering high-quality audio playback, subscription memberships, content catalogs, and personalized user playlists.",
      myRole:
        "Senior Frontend Engineer responsible for custom HTML5 audio player state, catalog search interfaces, NextAuth.js social login integration, and Stripe subscription onboarding workflows.",
      challenge:
        "Building a persistent, uninterrupted audio player that continues playing smoothly during client-side route navigation, supporting dynamic media streaming, and managing multi-tiered subscription access states.",
      contributions: [
        "Built custom HTML5 audio player controls featuring playback, timeline scrubbing, buffering indicators, and volume adjustments.",
        "Implemented multi-attribute catalog filtering, URL-synchronized search parameters, and content API integrations.",
        "Integrated Google/Facebook/Apple authentication via NextAuth.js alongside OTP email login workflows.",
        "Integrated Stripe Checkout subscription billing for tier-based streaming access.",
      ],
      keyEngineeringWork: [
        "Created a React Context global player store managing active track state, audio HTML5 element bindings, and playback queue indices across page transitions.",
        "Implemented signed URL streaming handlers to securely deliver protected audio files to authorized subscriber sessions.",
      ],
      technicalApproach:
        "Utilized Next.js App Router layout state persistence to keep the audio player alive during route changes. Used custom React hooks for audio element event listeners.",
      technologies: [
        "Next.js",
        "React",
        "TypeScript",
        "Tailwind CSS",
        "HTML5 Audio API",
        "NextAuth.js",
        "Stripe",
      ],
      outcome:
        "Delivered a fast, engaging audio streaming web app that provided smooth continuous audio playback, reliable subscription access, and responsive mobile listening.",
    },
  },
  {
    id: "healthcare-collaboration-app",
    title: "Healthcare Collaboration Application",
    type: "professional",
    subtitle: "Cross-Platform Healthcare Workflow System",
    description:
      "Cross-platform healthcare application designed to streamline workflows between patients, doctors, laboratories, and pharmacies.",
    myRole: "Frontend Developer",
    confidentialNotice: "Professional Experience — Confidential Project",
    featured: false,
    highlights: [
      "Built patient, doctor, laboratory, and pharmacy collaboration workflow interfaces.",
      "Integrated Google Maps API for facility location search and medical store discovery.",
    ],
    technologies: ["Ionic", "Angular", "TypeScript", "Google Maps API", "REST APIs"],
    caseStudy: {
      overview:
        "A cross-platform mobile and web application facilitating healthcare workflows between patients, doctors, laboratories, and local pharmacies.",
      myRole:
        "Frontend Developer responsible for building cross-platform UI screens, appointment booking flows, and Google Maps location discovery.",
      challenge:
        "Creating a unified cross-platform mobile UI that provides accessible interfaces for diverse user groups with location-based facility searching.",
      contributions: [
        "Built patient, doctor, laboratory, and pharmacy collaboration workflow interfaces using Ionic and Angular.",
        "Integrated Google Maps JavaScript API for facility location search, nearby pharmacy discovery, and driving directions.",
        "Developed responsive list and detail views for patient appointment booking and prescription history.",
      ],
      keyEngineeringWork: [
        "Integrated Google Maps SDK markers and info windows with custom Angular components.",
        "Built reusable UI components for appointment status tracking and user profile management.",
      ],
      technicalApproach:
        "Leveraged Ionic UI component primitives and Angular services to ensure cross-platform compatibility across web browsers and mobile screen sizes.",
      technologies: ["Ionic", "Angular", "TypeScript", "Google Maps API", "REST APIs"],
      outcome:
        "Successfully developed cross-platform healthcare workflow views that simplified appointment scheduling and nearby medical facility discovery.",
    },
  },
];
