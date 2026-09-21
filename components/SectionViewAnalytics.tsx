"use client";

import { useEffect } from "react";
import { track } from "@vercel/analytics";

const sections = [
  ["about", "about_viewed"],
  ["skills", "skills_viewed"],
  ["projects", "projects_viewed"],
  ["experience", "experience_viewed"],
  ["contact", "contact_viewed"],
] as const;

export function SectionViewAnalytics() {
  useEffect(() => {
    const observedSections = sections
      .map(([id, eventName]) => {
        const element = document.getElementById(id);
        return element ? { element, eventName } : null;
      })
      .filter((item): item is NonNullable<typeof item> => item !== null);

    if (!observedSections.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          const section = observedSections.find(({ element }) => element === entry.target);
          if (!section) return;
          track(section.eventName);
          observer.unobserve(entry.target);
        });
      },
      { threshold: 0.5 },
    );

    observedSections.forEach(({ element }) => observer.observe(element));
    return () => observer.disconnect();
  }, []);

  return null;
}