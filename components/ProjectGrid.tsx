"use client";

import { useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import type { Project } from "@/data/projects";
import { ProjectCard } from "@/components/ProjectCard";

const filterOptions = [
  { label: "All", value: "All" },
  { label: "Professional", value: "Professional" },
  { label: "Personal", value: "Personal" },
  { label: "FYP", value: "FYP" },
] as const;

type ProjectGridProps = {
  projects: Project[];
};

export function ProjectGrid({ projects }: ProjectGridProps) {
  const [activeFilter, setActiveFilter] = useState<(typeof filterOptions)[number]["value"]>("All");

  const visibleProjects = useMemo(() => {
    if (activeFilter === "All") return projects;
    return projects.filter((project) => project.categoryType === activeFilter);
  }, [activeFilter, projects]);

  return (
    <div>
      <div className="mb-8 flex flex-wrap gap-3">
        {filterOptions.map((option) => (
          <button
            key={option.value}
            type="button"
            onClick={() => setActiveFilter(option.value)}
            className={`rounded-full px-4 py-2 text-sm font-medium transition ${
              activeFilter === option.value
                ? "bg-cyan-500 text-slate-950 shadow-[0_0_25px_rgba(6,182,212,0.35)]"
                : "border border-white/10 bg-white/5 text-slate-300 hover:border-cyan-400/30 hover:text-white"
            }`}
          >
            {option.label}
          </button>
        ))}
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={activeFilter}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -12 }}
          transition={{ duration: 0.25, ease: "easeOut" }}
          className="grid gap-6 md:grid-cols-2 xl:grid-cols-3"
        >
          {visibleProjects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
