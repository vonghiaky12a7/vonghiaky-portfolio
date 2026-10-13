export interface Project {
  id: string;
  title: string;
  category: "Odoo ERP" | "Mobile Apps" | "Web Apps" | "AI & Systems";
  tag: string;
  image: string;
  desc: string;
  highlights: string[];
  techStack: string[];
  githubUrl?: string;
  demoUrl?: string;
  packageName?: string;
  badge?: string;
}

export const projects: Project[] = [
  // 1. Enterprise ERP Solutions
  {
    id: "thanh-phong-auto",
    title: "Thanh Phong Auto - Garage ERP System",
    category: "Odoo ERP",
    tag: "Odoo 18 / Python",
    image: "/portfolio/Portfolio (1).png",
    desc: "Comprehensive automotive workshop ERP customizing repair requests, repair orders, technician job cards, quality inspection gates, and VNPay automated payment integration on Sale Order invoices with Zalo ZNS service reminders.",
    highlights: [
      "End-to-end repair orders and multi-stage technician workflow",
      "Automated VNPay & VietQR dynamic payment QR code generation",
      "Zalo ZNS customer service notification and maintenance reminders",
      "Role-based access control and custom QWeb service invoices"
    ],
    techStack: ["Odoo 18", "Python", "PostgreSQL", "VNPay Gateway", "Zalo ZNS API", "QWeb Reports"]
  },
  {
    id: "sports-medic-erp",
    title: "SportsMedic - Hospital & Clinic ERP",
    category: "Odoo ERP",
    tag: "Healthcare & AI",
    image: "/portfolio/ERPNext.png",
    desc: "Complete clinic reception, patient electronic health records (EMR), and medical prescription workflows interconnected with pharmacy inventory, procurement, and real-time AI Camera attendance recognition.",
    highlights: [
      "Patient appointment scheduling and clinical examination forms",
      "Realtime synchronization with internal pharmacy stock and billing",
      "Integrated with xcamera for face recognition & presence tracking",
      "VietQR & VNPay payment processing for medical services"
    ],
    techStack: ["Odoo 18/19", "Python", "FastAPI", "xcamera Service", "PostgreSQL", "VietQR"]
  },
  {
    id: "vinh-loc-lab",
    title: "Vinh Loc - Construction Materials Lab ERP",
    category: "Odoo ERP",
    tag: "Lab Automation",
    image: "/portfolio/Portfolio (3).png",
    desc: "Automated laboratory testing workflow for construction materials: specimen intake, raw measurement capture, automated formula calculations, conformity assessment, and Python/XML lab instrument data import.",
    highlights: [
      "Automated formula calculations comparing against TCVN/ASTM standards",
      "Python/XML direct instrument data import without manual entry",
      "One-click certified inspection report generation via QWeb",
      "Full audit trail and sample testing lifecycle tracking"
    ],
    techStack: ["Odoo 18", "Python", "XML Data Parser", "PostgreSQL", "QWeb"]
  },
  {
    id: "xbook-addons-ecosystem",
    title: "xbook_addons - Modular ERP Ecosystem",
    category: "Odoo ERP",
    tag: "195+ Modules",
    image: "/portfolio/frappe-crm.jpeg",
    desc: "Extensive enterprise library of 195+ modular business addons covering CRM, Sales pipelines, multi-company Inventory, Accounting, Pharmacy, and Garage operations with high test coverage.",
    highlights: [
      "195+ reusable, plug-and-play Odoo 18/19 business addons",
      "Standardized ORM models, computed fields, constraints & wizards",
      "Automated unit tests and CI/CD code quality pipeline",
      "Modular separation of core logic and client-specific workflows"
    ],
    techStack: ["Odoo 18/19", "Python ORM", "XML Views", "Docker", "Ruff"]
  },

  // 2. Cross-Platform Mobile Apps (React Native & Expo)
  {
    id: "streak-hoc-bai",
    title: "Streak Học Bài - Gamified Study Habits & Pomodoro",
    category: "Mobile Apps",
    tag: "Google Play / Expo",
    image: "/portfolio/streak-hoc-bai.png",
    desc: "Mobile application engineered to build disciplined daily study routines using Duolingo-style animated streak flames, science-backed Pomodoro focus sessions, ambient brainwave soundscapes, and competitive friend leaderboards.",
    highlights: [
      "Duolingo-style animated streak flame system with milestone freezes & lifelines",
      "Integrated Pomodoro focus timer with ambient white noise & alpha waves",
      "Smart study schedule planner with personalized local push notifications",
      "Competitive friend leaderboards & study podium rankings",
      "100% privacy-friendly offline-first architecture with zero unauthorized tracking"
    ],
    techStack: ["React Native", "Expo", "TypeScript", "Tailwind CSS", "Reanimated", "AsyncStorage", "Expo Notifications"],
    packageName: "com.streakhocbai.app",
    badge: "Google Play Ready"
  },
  {
    id: "fittrack-mobile",
    title: "FitTrack - Workout & Health Companion",
    category: "Mobile Apps",
    tag: "React Native / Expo",
    image: "/portfolio/react-native.png",
    desc: "Modern fitness tracking mobile application featuring daily workout logging, calorie intake calculator, customized training plans, fluid animated charts, and offline-first SQLite synchronization.",
    highlights: [
      "Smooth 60fps animations with React Native Reanimated",
      "Offline-first local database storage and syncing",
      "Interactive progress dashboards and workout analytics",
      "Cross-platform iOS and Android production build"
    ],
    techStack: ["React Native", "Expo", "TypeScript", "Tailwind / NativeWind", "Reanimated", "SQLite"]
  },
  {
    id: "serene-yoga",
    title: "Serene Yoga & Wellness App",
    category: "Mobile Apps",
    tag: "Wellness / Audio",
    image: "/portfolio/Portfolio (5).png",
    desc: "Mindfulness and yoga routine mobile app with curated video/audio meditation sessions, ambient soundscapes, streaks tracking, and customizable breathing timers.",
    highlights: [
      "Immersive dark glassmorphic design and calming typography",
      "Background audio playback engine with sound mixing",
      "Daily habit streak and meditation milestone tracker",
      "Haptic feedback and custom gesture navigation"
    ],
    techStack: ["React Native", "Expo", "TypeScript", "Expo AV", "AsyncStorage", "Tailwind"]
  },
  {
    id: "sports-medic-app",
    title: "SportsMedic Mobile Patient App",
    category: "Mobile Apps",
    tag: "Healthcare App",
    image: "/portfolio/Portfolio (2)1.png",
    desc: "Mobile companion app for patients: instant doctor appointment booking, digital prescription and lab result viewer, push notification reminders, and QR check-in.",
    highlights: [
      "Secure biometrics login (FaceID / Fingerprint)",
      "Instant doctor consultation booking and calendar sync",
      "Digital prescription viewing and medication reminders",
      "Direct integration with Odoo backend via REST API"
    ],
    techStack: ["React Native", "Expo", "TypeScript", "REST API", "Odoo Backend"]
  },

  // 3. Modern Web Applications (Next.js & React)
  {
    id: "medconnect-portal",
    title: "MedConnect - Healthcare Patient Portal",
    category: "Web Apps",
    tag: "Next.js 14 / SaaS",
    image: "/portfolio/Portfolio (4).png",
    desc: "Full-stack healthcare web portal for patients and doctors featuring real-time doctor availability calendars, telemedicine appointment scheduling, and online invoice settlement.",
    highlights: [
      "Next.js 14 App Router with Server Components for sub-second load times",
      "Interactive calendar booking with real-time slot conflict resolution",
      "Integrated VNPay and VietQR online payment checkout",
      "Dark/Light mode with responsive Glassmorphism design"
    ],
    techStack: ["Next.js 14", "React 19", "TypeScript", "Tailwind CSS", "VNPay", "PostgreSQL"]
  },
  {
    id: "autocare-portal",
    title: "AutoCare Plus - Garage Tracking Web",
    category: "Web Apps",
    tag: "Realtime Portal",
    image: "/portfolio/Portfolio (6).png",
    desc: "Customer vehicle tracking portal providing vehicle owners with real-time inspection photos, mechanic repair stage milestones (Kanban view), and one-click quotation approvals.",
    highlights: [
      "Live vehicle repair timeline and photo inspection gallery",
      "Online quotation review and digital signature confirmation",
      "Mobile-friendly responsive UI for on-the-go vehicle owners",
      "Direct webhook sync with Odoo repair order status"
    ],
    techStack: ["Next.js", "React", "TypeScript", "Tailwind CSS", "WebSockets"]
  },
  {
    id: "xbook-saas-dashboard",
    title: "XBook Enterprise Analytics Dashboard",
    category: "Web Apps",
    tag: "Admin Dashboard",
    image: "/portfolio/Portfolio (7).png",
    desc: "Modern executive web dashboard delivering consolidated financial analytics, inventory turnover metrics, and sales forecasting across multi-branch enterprises.",
    highlights: [
      "Interactive financial charts, cashflow metrics, and revenue heatmaps",
      "Role-based dashboard widgets customizable per department manager",
      "Instant export to Excel, PDF, and automated email scheduled reports",
      "GraphQL & REST connectivity to Odoo ERP backend"
    ],
    techStack: ["Next.js 14", "React", "Tailwind CSS", "Recharts", "GraphQL"]
  },

  // 4. AI Vision & Microservices
  {
    id: "xcamera-ai-service",
    title: "xcamera - AI Computer Vision & Edge Service",
    category: "AI & Systems",
    tag: "FastAPI / OpenCV",
    image: "/portfolio/frappe-hrms.jpeg",
    desc: "High-performance AI Camera microservice capable of processing multiple IP RTSP camera video streams, detecting and recognizing human faces in real time, capturing event snapshots, and firing attendance webhooks to Odoo ERP.",
    highlights: [
      "Multi-stream RTSP decoding with Go2RTC and hardware acceleration",
      "Real-time face recognition and facial embedding database",
      "Automated employee attendance check-in and visitor logging",
      "FastAPI asynchronous event broker with webhook retry queues"
    ],
    techStack: ["FastAPI", "Python", "OpenCV", "Go2RTC", "RTSP Streams", "Docker", "Odoo Webhooks"]
  },
  {
    id: "xprint-silent-printer",
    title: "xprint - Industrial Silent Printing Engine",
    category: "AI & Systems",
    tag: "C# .NET / Microservice",
    image: "/portfolio/Portfolio (2).png",
    desc: "High-throughput silent printing service designed for enterprise clinics, pharmacies, and automotive garages to print prescriptions, barcode labels, and invoices directly to local thermal/laser printers without browser dialog delays.",
    highlights: [
      "Zero-click instant silent printing directly to Windows/Linux printers",
      "DevExpress & QWeb report document rendering and PDF flattening",
      "Network printer discovery and automatic paper tray selection",
      "High reliability with background spooler and print queue recovery"
    ],
    techStack: ["C# .NET Core", "DevExpress", "ASP.NET Core Web API", "Thermal Printers", "Docker"]
  }
];
