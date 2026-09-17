export type SkillGroup = {
  title: string;
  skills: string[];
};

export const skillGroups: SkillGroup[] = [
  {
    title: "Mobile Development",
    skills: [
      "Kotlin",
      "Java",
      "Android SDK",
      "Jetpack",
      "XML",
      "Flutter",
      "Dart",
    ],
  },
  {
    title: "Architecture & API",
    skills: [
      "MVVM",
      "Retrofit",
      "REST APIs",
      "JSON",
      "Firebase",
    ],
  },
  {
    title: "Backend & Database",
    skills: [
      "Node.js",
      "Express.js",
      ".NET Web API",
      "SQL",
      "MySQL",
      "PostgreSQL",
    ],
  },
  {
    title: "Tools",
    skills: [
      "Git",
      "GitHub",
      "Android Studio",
      "Postman",
      "VS Code",
    ],
  },
];
