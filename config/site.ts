export type NavItem = {
  label: string;
  href: string;
};

export const siteConfig = {
  name: "Aftab Ali",
  title: "Android & Cross-Platform App Developer",
  shortPositioning:
    "Building modern mobile applications with Kotlin, Flutter, APIs, and scalable backend integrations.",
  location: "Karachi, Pakistan",
  description:
    "Portfolio of Aftab Ali, an Android and cross-platform app developer specializing in Kotlin, Flutter, REST APIs, Firebase, and modern mobile application development.",
  url: "https://example.com",
  email: "aftabramzan567@gmail.com",
  socials: {
    github: "https://github.com/aftabramzan",
    linkedin: "https://www.linkedin.com/in/aftab-ramzan-408b33288",
    email: "mailto:aftabramzan567@gmail.com",
    whatsapp: "https://wa.me/923493383685",
  },
  navItems: [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Skills", href: "#skills" },
    { label: "Projects", href: "#projects" },
    { label: "Experience", href: "#experience" },
    { label: "Contact", href: "#contact" },
  ] as NavItem[],
  resumeUrl: "/resume/Aftab_Ali_Android_Developer.pdf",
};
