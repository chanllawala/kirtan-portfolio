"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { GithubIcon } from "./icons";
import { Section } from "./Section";
import { ProjectsFrame } from "./ProjectsFrame";
import { RevealGroup, itemVariants } from "./Reveal";
import { projects, type Project } from "@/lib/content";

function ProjectCard({ project, index }: { project: Project; index: number }) {
  return (
    <motion.article
      variants={itemVariants}
      whileHover={{ y: -6 }}
      transition={{ type: "spring", stiffness: 300, damping: 22 }}
      className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-bg-elevated p-6 shadow-none transition-[colors,box-shadow] duration-300 hover:border-border-strong hover:shadow-xl hover:shadow-black/20"
    >
      <span
        aria-hidden="true"
        className="pointer-events-none absolute -right-2 -top-4 select-none font-mono text-7xl font-semibold text-fg/[0.035] transition-colors duration-300 group-hover:text-accent/[0.08]"
      >
        {String(index).padStart(2, "0")}
      </span>

      <div className="relative flex items-start justify-between gap-4">
        <div>
          <p className="font-mono text-xs text-fg-subtle">{String(index).padStart(2, "0")}</p>
          <h3 className="mt-1 text-lg font-semibold text-fg">{project.name}</h3>
          <p className="mt-1 text-sm text-accent">{project.tagline}</p>
        </div>
        <div className="flex shrink-0 items-center gap-3">
          {project.github ? (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${project.name} source on GitHub`}
              data-cursor-label="Code"
              className="text-fg-subtle transition-colors hover:text-fg"
            >
              <GithubIcon size={18} />
            </a>
          ) : null}
          {project.live ? (
            <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${project.name} live demo`}
              data-cursor-label="Live"
              className="text-fg-subtle transition-colors hover:text-fg"
            >
              <ArrowUpRight size={18} strokeWidth={1.75} />
            </a>
          ) : null}
        </div>
      </div>

      <p className="relative mt-4 text-sm leading-relaxed text-fg-muted text-pretty">{project.description}</p>

      <ul className="relative mt-4 space-y-1.5">
        {project.points.map((point) => (
          <li key={point} className="flex gap-2.5 text-sm leading-relaxed text-fg-muted">
            <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-fg-subtle" />
            <span className="text-pretty">{point}</span>
          </li>
        ))}
      </ul>

      {project.note ? (
        <p className="relative mt-4 rounded-lg border border-border-strong bg-bg px-3 py-2 text-xs text-fg-subtle">
          {project.note}
        </p>
      ) : null}

      <div className="relative mt-auto flex flex-wrap gap-2 pt-5">
        {project.tech.map((t) => (
          <span
            key={t}
            className="rounded-full border border-border px-2.5 py-1 font-mono text-xs text-fg-subtle"
          >
            {t}
          </span>
        ))}
      </div>
    </motion.article>
  );
}

export function Projects() {
  const featured = projects.filter((p) => p.featured);
  const secondary = projects.filter((p) => !p.featured);
  const [showAll, setShowAll] = useState(false);

  return (
    <Section
      id="projects"
      eyebrow="Projects"
      title="Selected work"
      description="Production platforms, freelance client work and independent AI projects — verified against my public GitHub where a repository exists."
    >
      <div className="relative">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 z-0 hidden justify-center lg:flex"
        >
          <div className="sticky top-24 w-full">
            <ProjectsFrame />
          </div>
        </div>

        <div className="relative z-10">
          <RevealGroup className="grid gap-5 sm:grid-cols-2">
            {featured.map((project, i) => (
              <ProjectCard key={project.name} project={project} index={i + 1} />
            ))}
          </RevealGroup>

          <div className="mt-10">
            <button
              type="button"
              onClick={() => setShowAll((v) => !v)}
              className="inline-flex items-center gap-2 text-sm font-medium text-fg-muted transition-colors hover:text-fg"
              aria-expanded={showAll}
            >
              {showAll ? "Hide additional projects" : `Show ${secondary.length} more projects`}
              <ArrowUpRight
                size={14}
                className={`transition-transform ${showAll ? "rotate-[135deg]" : "rotate-45"}`}
              />
            </button>

            {showAll ? (
              <RevealGroup className="mt-6 grid gap-5 sm:grid-cols-2">
                {secondary.map((project, i) => (
                  <ProjectCard key={project.name} project={project} index={featured.length + i + 1} />
                ))}
              </RevealGroup>
            ) : null}
          </div>
        </div>
      </div>
    </Section>
  );
}
