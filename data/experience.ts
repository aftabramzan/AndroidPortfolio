export type ExperienceItem = {
  title: string;
  company: string;
  location?: string;
  startDate: string;
  endDate: string;
  responsibilities: string[];
};

export const experiences: ExperienceItem[] = [
  {
    title: "Android Developer",
    company: "Level 3 BOS / MIS Department",
    location: "Karachi, Pakistan",
    startDate: "September 2025",
    endDate: "Present",
    responsibilities: [
      "Developing and maintaining Android applications",
      "Integrating REST APIs",
      "Working with authentication and API data",
      "Implementing UI and application workflows",
      "Debugging and resolving application issues",
      "Working with Git-based development workflows",
    ],
  },
  {
    title: "Mobile Development Intern",
    company: "SWAG KICKS",
    startDate: "February 2025",
    endDate: "August 2025",
    responsibilities: [
      "Developed Android mobile applications using Kotlin and Java, implementing advanced features and optimizing performance for enhanced user experience",
      "Designed key app functionalities improving navigation efficiency and overall application performance",
      "Implemented web scraping solutions and AI-driven data automation to extract structured data from websites",
      "Created automated scripts for data extraction and processing, reducing manual effort and improving data accuracy",
      "Applied modern Android development practices including MVVM architecture and Material Design guidelines",
    ],
  },
];

export const education = [
  {
    degree: "Bachelor of Computer Science",
    school: "KIET University",
    startDate: "February 2022",
    endDate: "July 2026",
  },
];
