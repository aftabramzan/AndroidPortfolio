export type ExperienceItem = {
  title: string;
  company: string;
  location: string;
  startDate: string;
  endDate: string;
  responsibilities: string[];
};

export const experiences: ExperienceItem[] = [
  {
    title: "Android Developer",
    company: "Level 3 BOS / MIS Department",
    location: "Karachi, Pakistan",
    startDate: "2024",
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
];

export const education = [
  {
    degree: "Bachelor of Computer Science",
    school: "KIET University",
    startDate: "February 2022",
    endDate: "July 2026",
  },
];
