export type ProjectCategoryType = "Professional" | "Personal" | "FYP";

export type ProjectFlowStep = {
  number: string;
  title: string;
};

export type ProjectDetailItem = {
  label: string;
  value: string;
};

export type ProjectTechnologyGroup = {
  label: string;
  items: string[];
};

export type ProjectTeamMember = {
  name: string;
  responsibility: string;
};

export type ProjectCaseStudy = {
  platform: string;
  flow: ProjectFlowStep[];
  headline?: string;
  eyebrow?: string;
  heroBadge?: string;
  focusLabel?: string;
  focusItems?: string[];
  screenshotDescription?: string;
  storageLabel?: string;
  storageDescription?: string;
  roleDescription?: string;
  roleItems?: string[];
  confidentiality?: string;
  sourceLabel?: string;
  sourceDescription?: string;
  details?: ProjectDetailItem[];
  technologyGroups?: ProjectTechnologyGroup[];
  architecture?: ProjectFlowStep[][];
  challenges?: string[];
  outcome?: string;
  team?: ProjectTeamMember[];
};

export type Project = {
  slug: string;
  title: string;
  category: string;
  categoryType: ProjectCategoryType;
  description: string;
  technologies: string[];
  features: string[];
  screenshots: string[];
  github: string;
  demo: string;
  overview: string;
  problem: string;
  solution: string;
  developmentHighlights: string[];
  caseStudy?: ProjectCaseStudy;
};

export const projects: Project[] = [
  {
    slug: "job-tracker",
    title: "Job Tracker",
    category: "Personal Project",
    categoryType: "Personal",
    description:
      "A Flutter-based job application tracker that helps users organize their applications and visualize their job search progress through data-driven charts.",
    technologies: ["Flutter", "Dart", "SQLite"],
    features: [
      "JOB APPLICATION TRACKING|Store and manage job application information in one place.",
      "APPLICATION STATUS|Track the current status of each job application.",
      "DASHBOARD|Provide an overview of the user's job application activity.",
      "DATA VISUALIZATION|Display application data through charts to make overall progress easier to understand.",
      "LOCAL STORAGE|Store application data locally using SQLite.",
      "APPLICATION MANAGEMENT|Allow users to manage their saved job application records.",
    ],
    screenshots: [
      "/jobtracker/dashboard.jpeg",
      "/jobtracker/chart.jpeg",
      "/jobtracker/form.jpeg",
      "/jobtracker/records.jpeg",
      "/jobtracker/profile.jpeg",
      "/jobtracker/splash.jpeg",
    ],
    github: "",
    demo: "",
    overview:
      "Job Tracker is a mobile application designed to help users organize and monitor their job applications in one place. The application keeps records organized and provides a visual overview of application progress through charts and statistics.",
    problem:
      "Managing multiple job applications can become difficult when application details are scattered across notes, messages, emails, and different platforms. Users need a simple way to keep track of applications and understand their overall progress.",
    solution:
      "Job Tracker provides a centralized mobile interface where users can record and manage job applications and view their application data through visual charts, status tracking, local storage, and organized records.",
    developmentHighlights: [
      "Building a mobile application with Flutter",
      "Managing application state and UI workflows",
      "Implementing local SQLite data persistence",
      "Designing job application management screens",
      "Transforming stored application data into visual charts",
      "Creating a responsive mobile UI",
      "Structuring application data for meaningful visualization",
    ],
    caseStudy: {
      platform: "Mobile Application",
      headline: "Track Every Application. Understand Your Progress.",
      eyebrow: "Productivity and career management",
      heroBadge: "A focused job search workspace",
      focusLabel: "Built around clear progress",
      focusItems: ["Application tracking", "Status overview", "Dashboard", "Data visualization", "Local storage", "Application records"],
      screenshotDescription: "Explore the real Job Tracker screens, including the dashboard, chart view, forms, records, profile, and splash screen.",
      storageLabel: "Local-First Data Storage",
      storageDescription: "Job Tracker uses SQLite to persist job application records locally on the device, allowing the application to manage stored data without requiring a cloud backend.",
      details: [
        { label: "Category", value: "Personal Project" },
        { label: "Platform", value: "Mobile Application" },
        { label: "Framework", value: "Flutter" },
        { label: "Language", value: "Dart" },
        { label: "Local Database", value: "SQLite" },
      ],
      flow: [
        { number: "01", title: "Add a job application" },
        { number: "02", title: "Save application details" },
        { number: "03", title: "Track application status" },
        { number: "04", title: "Review application records" },
        { number: "05", title: "View charts and progress" },
      ],
      technologyGroups: [
        { label: "Framework", items: ["Flutter"] },
        { label: "Language", items: ["Dart"] },
        { label: "Local Database", items: ["SQLite"] },
      ],
      challenges: [
        "Designing an efficient job application data structure",
        "Managing local SQLite records",
        "Keeping dashboard information synchronized with stored data",
        "Converting application records into chart-friendly data",
        "Creating a clear and useful dashboard",
        "Maintaining a simple user experience while presenting multiple data points",
      ],
      outcome:
        "Job Tracker brings job application tracking, organized records, status-based progress, local data storage, and visual data representation into one focused mobile application.",
    },
  },
  {
    slug: "niyyahhabits",
    title: "NiyyahHabits",
    category: "Personal Project",
    categoryType: "Personal",
    description:
      "A faith-focused mobile companion designed to help users track daily prayers, view prayer timings, access the Quran, review prayer history, and stay consistent through reminders.",
    technologies: [],
    features: [
      "NAMAZ TRACKER|Track daily Namaz and maintain a record of completed prayers.",
      "PRAYER CARDS|Display daily prayer information through clean and easy-to-understand cards.",
      "PRAYER TIMES|Show prayer timings so users can keep track of their daily prayer schedule.",
      "QURAN|Provide a dedicated Quran section within the application.",
      "PRAYER HISTORY|Allow users to review their previous prayer activity and history.",
      "REMINDERS|Provide reminders to help users stay aware of their prayer schedule.",
    ],
    screenshots: [
      "/niyyahabbits/splash.jpeg",
      "/niyyahabbits/namaz.jpeg",
      "/niyyahabbits/time.jpeg",
      "/niyyahabbits/quran.jpeg",
      "/niyyahabbits/histiry.jpeg",
      "/niyyahabbits/reminder.jpeg",
      "/niyyahabbits/notification.jpeg",
      "/niyyahabbits/journey.jpeg",
      "/niyyahabbits/location.jpeg",
      "/niyyahabbits/login.jpeg",
      "/niyyahabbits/signup.jpeg",
    ],
    github: "",
    demo: "",
    overview:
      "NiyyahHabits is a faith-focused mobile application designed to help users maintain consistency in their daily worship and spiritual routine.",
    problem:
      "Maintaining consistency with daily prayers and spiritual routines can be difficult without a simple way to track daily progress, review prayer history, remember prayer timings, and maintain a routine.",
    solution:
      "NiyyahHabits brings important daily worship utilities into one mobile application, with focused spaces for Namaz tracking, prayer timings, Quran access, prayer history, reminders, and prayer status cards.",
    developmentHighlights: [
      "Daily Namaz tracking workflow",
      "Prayer status cards",
      "Prayer history",
      "Prayer timing display",
      "Reminder functionality",
      "Quran section",
      "Mobile-first user experience",
    ],
    caseStudy: {
      platform: "Mobile Application",
      flow: [
        { number: "01", title: "Open NiyyahHabits" },
        { number: "02", title: "View today's prayer schedule" },
        { number: "03", title: "Track completed Namaz" },
        { number: "04", title: "Use Quran and other sections" },
        { number: "05", title: "Review prayer history" },
        { number: "06", title: "Receive reminders" },
      ],
    },
  },
  {
    slug: "smartswap",
    title: "SmartSwap",
    category: "Final Year Project",
    categoryType: "FYP",
    description:
      "An educational swapping platform designed for students to exchange learning resources and connect with other students.",
    technologies: [
      "Kotlin",
      "XML",
      "Node.js",
      "Express.js",
      "PostgreSQL",
      "Firebase",
      "Agora",
      "Gemini 2.5",
      "Retrofit",
      "REST APIs",
      "Cloudinary",
      "Firebase Cloud Messaging",
      "Git / GitHub",
      "Postman",
    ],
    features: [
      "RESOURCE SWAPPING|Allow students to exchange educational and learning resources through the platform.",
      "SMART MATCHING|Connect students based on relevant learning interests and available resources.",
      "REAL-TIME CHAT|Provide real-time communication between students using Firebase Realtime Database.",
      "VIDEO CALLING|Enable students to communicate through video calls using Agora.",
      "RATING SYSTEM|Allow users to provide ratings as part of the platform's interaction system.",
      "AI-ASSISTED QUIZ|Provide an interactive quiz experience with a quiz pass requirement powered by Gemini 2.5.",
      "PUSH NOTIFICATIONS|Keep users informed through application notifications.",
      "STUDENT PROFILES|Provide student profiles containing relevant information for connecting and interacting with other learners.",
      "SWAP REQUESTS & LEARNING SESSIONS|Send swap requests and book sessions for learning with suitable students.",
    ],
    screenshots: [
      "/smartswap/d.jpeg",
      "/smartswap/c.jpeg",
      "/smartswap/sub.jpeg",
      "/smartswap/d (2).jpeg",
      "/smartswap/e.jpeg",
      "/smartswap/f.jpeg",
      "/smartswap/q.jpeg",
      "/smartswap/r.jpeg",
      "/smartswap/s.jpeg",
      "/smartswap/v.jpeg",
      "/smartswap/x.jpeg",
    ],
    github: "",
    demo: "",
    overview:
      "SmartSwap was designed as a student-focused resource exchange platform to help users discover, share, and access learning materials more easily.",
    problem:
      "Students often struggled to find useful learning resources, connect with peers, and participate in collaborative academic activities in a centralized platform.",
    solution:
      "SmartSwap brings educational resource swapping, student profiles, smart matching, real-time communication, video calling, ratings, interactive quizzes, and push notifications into one platform.",
    developmentHighlights: [
      "Android application development using Kotlin",
      "MVVM-based application architecture",
      "REST API integration using Retrofit",
      "Node.js and Express.js backend integration",
      "PostgreSQL database",
      "Firebase Realtime Database for real-time chat",
      "Agora integration for video calling",
      "Cloudinary for media handling",
      "Firebase Cloud Messaging for notifications",
      "Gemini 2.5 integration for quiz functionality",
      "Student matching workflow",
      "Rating system",
      "Multi-feature mobile application design",
    ],
    caseStudy: {
      platform: "Android Application",
      headline: "Learn. Connect. Swap.",
      eyebrow: "Educational mobile platform",
      heroBadge: "A connected learning platform",
      focusLabel: "Built around connected learning",
      focusItems: [
        "Resource swapping",
        "Smart matching",
        "Real-time chat",
        "Video calling",
        "Ratings",
        "AI-assisted quizzes",
      ],
      details: [
        { label: "Category", value: "Final Year Project" },
        { label: "Target Users", value: "11th–12th Grade Students" },
        { label: "Platform", value: "Android Application" },
        { label: "Backend", value: "Node.js / Express.js" },
        { label: "Database", value: "PostgreSQL" },
      ],
      flow: [
        { number: "01", title: "Create an account" },
        { number: "02", title: "Set up student profile" },
        { number: "03", title: "Discover relevant learning resources" },
        { number: "04", title: "Connect with suitable students" },
        { number: "05", title: "Swap learning resources" },
        { number: "06", title: "Chat or start a video call" },
        { number: "07", title: "Take interactive quizzes" },
        { number: "08", title: "Rate the interaction" },
      ],
      technologyGroups: [
        { label: "Mobile", items: ["Kotlin", "XML"] },
        { label: "Architecture", items: ["MVVM"] },
        { label: "Networking", items: ["Retrofit", "REST APIs"] },
        { label: "Backend", items: ["Node.js", "Express.js"] },
        { label: "Database", items: ["PostgreSQL"] },
        { label: "Real-Time Communication", items: ["Firebase Realtime Database"] },
        { label: "Video Calling", items: ["Agora"] },
        { label: "Cloud Storage / Media", items: ["Cloudinary"] },
        { label: "AI", items: ["Gemini 2.5"] },
        { label: "Notifications", items: ["Firebase Cloud Messaging"] },
        { label: "Development", items: ["Git / GitHub", "Postman"] },
      ],
      architecture: [
        ["Android App", "Retrofit / REST APIs", "Node.js + Express.js", "PostgreSQL"],
        ["Android App", "Firebase Realtime Database", "Real-Time Chat"],
        ["Android App", "Agora", "Video Calling"],
        ["Android App", "Firebase Cloud Messaging", "Push Notifications"],
        ["Android App", "Gemini 2.5", "AI-Assisted Quiz"],
      ].map((architectureFlow) => architectureFlow.map((title, stepIndex) => ({
        number: stepIndex === 0 ? "01" : "",
        title,
      }))),
      challenges: [
        "Managing multiple real-time communication features",
        "Integrating REST APIs with the Android application",
        "Maintaining consistent application state",
        "Integrating video calling",
        "Implementing student matching",
        "Handling notifications",
        "Connecting multiple external services",
        "Creating a smooth user experience across multiple features",
      ],
      outcome:
        "SmartSwap combines educational resource exchange, student discovery, communication, video interaction, ratings, AI-assisted quizzes, and notifications into one Android-based educational platform.",
      team: [
        { name: "Aftab Ali", responsibility: "Android Development" },
        { name: "Anas", responsibility: "Backend Development" },
        { name: "Maha", responsibility: "Project Team" },
      ],
    },
  },
  {
    slug: "mobilelink",
    title: "MobileLink",
    category: "Professional Project",
    categoryType: "Professional",
    description:
      "MobileLink is a business-focused Android application developed to support field visits, business workflows, and reporting through an integrated WebView experience.",
    technologies: ["Kotlin", "Android", "WebView", "REST API Integration", ".NET Web API"],
    features: [
      "BUSINESS VISITS|Users can add business visits through the Android application.",
      "VISIT MANAGEMENT|Users can work with visit-related business information through the mobile application.",
      "REPORTS|Business reports can be accessed from within the application.",
      "WEBVIEW REPORTS|Reports are displayed through an integrated Android WebView.",
      "API INTEGRATION|The Android application communicates with backend services through a .NET Web API.",
      "ENTERPRISE WORKFLOW|The application supports real-world business workflows rather than being a simple demonstration application.",
    ],
    screenshots: [
      "/mobilelink/dashboard.jpeg",
      "/mobilelink/visit.jpeg",
      "/mobilelink/tracker.jpeg",
      "/mobilelink/report.jpeg",
      "/mobilelink/dash.jpeg",
      "/mobilelink/announcement.jpeg",
      "/mobilelink/login.jpeg",
      "/mobilelink/splash.jpeg",
    ],
    github: "",
    demo: "",
    overview:
      "MobileLink is an Android business application used in a USA-based business environment. It provides mobile functionality for business users, including adding business visits, managing visit-related information, accessing business reports, viewing reports inside the application, and communicating with backend APIs.",
    problem:
      "Business users need mobile access to visit-related workflows and reporting information while working with operational data in the field.",
    solution:
      "MobileLink brings business visits, visit information, backend API communication, and report presentation into one professional Android application.",
    developmentHighlights: [
      "Real-world Android development",
      "Connected Android functionality with a .NET Web API",
      "Integrated web-based reporting with Android WebView",
      "Implemented mobile workflows around business visits",
    ],
    caseStudy: {
      platform: "Android",
      headline: "Enterprise Business & Field Operations Android Application",
      eyebrow: "Business / Enterprise Android application",
      heroBadge: "Professional Project",
      focusLabel: "Built for business operations",
      focusItems: ["Business visits", "Visit management", "Reports", "WebView reports", "API integration", "Enterprise workflow"],
      screenshotDescription: "Explore the available MobileLink screens. Confidential company information, internal URLs, and sensitive business details are not displayed.",
      details: [
        { label: "Project", value: "MobileLink" },
        { label: "Type", value: "Professional Project" },
        { label: "Platform", value: "Android" },
        { label: "Role", value: "Android Developer" },
        { label: "Language", value: "Kotlin" },
        { label: "Backend", value: ".NET Web API" },
        { label: "Category", value: "Business / Enterprise" },
        { label: "Environment", value: "USA-based Business Application" },
      ],
      flow: [
        { number: "01", title: "Business User" },
        { number: "02", title: "Android Application" },
        { number: "03", title: "Business Visit" },
        { number: "04", title: ".NET Web API" },
        { number: "05", title: "Business Data / Operations" },
        { number: "06", title: "Reports" },
        { number: "07", title: "WebView" },
        { number: "08", title: "Report Display" },
      ],
      technologyGroups: [
        { label: "Android", items: ["Kotlin", "Android", "WebView", "REST API Integration"] },
        { label: "Backend", items: [".NET Web API"] },
      ],
      roleDescription:
        "I worked on the Android application using Kotlin, implementing business functionality, API integration, visit-related workflows, and WebView-based report presentation.",
      roleItems: [
        "Android Development",
        "Kotlin Development",
        "REST API Integration",
        "Business Workflow Implementation",
        "Visit Functionality",
        "WebView Integration",
        "Report Presentation",
        "Bug Fixing & Maintenance",
      ],
      confidentiality:
        "Some application details, source code, internal APIs, URLs, and business information are not publicly displayed due to project confidentiality.",
      sourceLabel: "Source Code: Private",
      sourceDescription: "This professional project does not have a public repository.",
    },
  },
  {
    slug: "mobily",
    title: "Mobily LLC",
    category: "Professional Project",
    categoryType: "Professional",
    description: "Professional Android application project.",
    technologies: ["Android", "Kotlin/Java", "REST APIs"],
    features: ["Detailed feature list to be added later."],
    screenshots: [],
    github: "",
    demo: "",
    overview:
      "This project involved building a professional Android application for business use and operational workflows.",
    problem:
      "The project required a reliable mobile interface with clear data handling and user-friendly interactions.",
    solution:
      "A streamlined Android application was implemented with a focus on clean navigation, API-driven content, and practical usability.",
    developmentHighlights: [
      "Android application development for professional workflows",
      "REST API integration for dynamic data",
      "Focused on consistent and maintainable app structure",
    ],
  },
  {
    slug: "hrms",
    title: "HRMS",
    category: "Professional Project",
    categoryType: "Professional",
    description: "Human resource management mobile application.",
    technologies: ["Android", "REST APIs", "Firebase"],
    features: ["Detailed feature list to be added later."],
    screenshots: [],
    github: "",
    demo: "",
    overview:
      "HRMS is a mobile-first human resource management application concept focused on employee-related workflows and access to essential information.",
    problem:
      "Workforce information and internal processes often require quick access from mobile devices without sacrificing usability or reliability.",
    solution:
      "A mobile application was developed to align HR system workflows with an accessible application experience for users on the go.",
    developmentHighlights: [
      "Android app development for HR workflows",
      "Firebase-backed integration options",
      "Usability-focused UI design for business operations",
    ],
  },
  {
    slug: "arrowout",
    title: "ArrowOut",
    category: "Personal Project",
    categoryType: "Personal",
    description:
      "A dark-themed AI-inspired arrow puzzle game focused on strategic gameplay.",
    technologies: ["Android", "Kotlin", "Jetpack Compose"],
    features: [
      "Grid-based gameplay",
      "Player vs AI concept",
      "Puzzle mechanics",
      "Dark modern interface",
    ],
    screenshots: [],
    github: "",
    demo: "",
    overview:
      "ArrowOut is a personal game project exploring strategic puzzle gameplay in a dark, modern interface inspired by AI-driven challenge patterns.",
    problem:
      "A game concept was needed that felt modern, visually distinct, and focused on tactical decision-making rather than generic casual mechanics.",
    solution:
      "The project was designed around a dark interface and grid-based puzzle interactions, creating a focused and engaging gameplay loop.",
    developmentHighlights: [
      "Built using Kotlin and Jetpack Compose",
      "Explored responsive game UI and interaction patterns",
      "Focused on dark visual identity and strategic challenge design",
    ],
  },
  {
    slug: "beatai",
    title: "BeatMe AI",
    category: "Personal Project",
    categoryType: "Personal",
    description:
      "A casual AI-inspired challenge game concept designed around daily score-based challenges.",
    technologies: ["Android", "Kotlin", "Jetpack Compose"],
    features: ["Detailed feature list to be added later."],
    screenshots: [],
    github: "",
    demo: "",
    overview:
      "BeatMe AI is a personal game concept centered around quick challenges, daily scoring, and an AI-inspired gameplay loop.",
    problem:
      "The project aims to explore casual, challenge-based gameplay with a modern mobile-first presentation and a clear progression loop.",
    solution:
      "A concept app was designed using a polished UI and lightweight game mechanics to create an engaging daily challenge experience.",
    developmentHighlights: [
      "Concept exploration for challenge-driven gameplay",
      "Jetpack Compose-based interface design",
      "Responsive design focused on modern mobile UX",
    ],
  },
];
