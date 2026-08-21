"use client";

import { motion } from "framer-motion";
import { ArrowDown, ArrowUpRight, Download } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./icons";
import { CodeWindow } from "./CodeWindow";
import { Magnetic } from "./Magnetic";
import { heroStats, personal } from "@/lib/content";

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.09, delayChildren: 0.1 } },
};

const item = {
  hidden: { opacity: 0, y: 18 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] as const } },
};

export function Hero({ cvAvailable }: { cvAvailable: boolean }) {
  return (
    <section
      id="top"
      className="relative flex min-h-[92svh] flex-col justify-center overflow-hidden pt-16"
    >
      <div className="pointer-events-none absolute inset-0 bg-grid mask-fade-bottom opacity-[0.35]" />
      <div className="pointer-events-none absolute left-1/2 top-[-10%] h-[36rem] w-[36rem] -translate-x-1/2 rounded-full bg-accent/10 blur-[120px]" />
      <motion.div
        aria-hidden="true"
        className="pointer-events-none absolute right-[-8%] bottom-[-6%] h-[28rem] w-[28rem] rounded-full bg-accent/[0.06] blur-[100px]"
        animate={{ opacity: [0.5, 0.9, 0.5] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="container-page relative grid gap-12 xl:grid-cols-[1fr_auto] xl:items-center xl:gap-10">
      <motion.div
        initial="hidden"
        animate="visible"
        variants={container}
      >
        <motion.p
          variants={item}
          className="inline-flex items-center gap-2 rounded-full border border-border-strong px-3 py-1 font-mono text-xs text-fg-muted"
        >
          <span className="h-1.5 w-1.5 rounded-full bg-accent" />
          Available for full-time &amp; freelance roles
        </motion.p>

        <motion.h1
          variants={item}
          className="mt-6 max-w-4xl text-4xl font-semibold leading-[1.08] tracking-tight text-fg text-balance sm:text-6xl lg:text-7xl"
        >
          {personal.name}
        </motion.h1>

        <motion.p
          variants={item}
          className="mt-4 text-xl font-medium text-accent sm:text-2xl"
        >
          {personal.role}
        </motion.p>

        <motion.p
          variants={item}
          className="mt-6 max-w-2xl text-base leading-relaxed text-fg-muted text-pretty sm:text-lg"
        >
          I build production-ready web applications and AI-powered software — currently the sole
          developer across four live platforms for a corporate client, alongside freelance client
          work and independent LLM projects.
        </motion.p>

        <motion.div variants={item} className="mt-9 flex flex-wrap items-center gap-4">
          <Magnetic>
            <a
              href="#projects"
              data-cursor-hover
              className="group inline-flex items-center gap-2 rounded-full bg-accent px-5 py-3 text-sm font-medium text-accent-fg transition-transform hover:-translate-y-0.5"
            >
              View my work
              <ArrowUpRight
                size={16}
                className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </a>
          </Magnetic>
          <Magnetic>
            <a
              href="#contact"
              data-cursor-hover
              className="inline-flex items-center gap-2 rounded-full border border-border-strong px-5 py-3 text-sm font-medium text-fg transition-colors hover:border-accent hover:text-accent"
            >
              Get in touch
            </a>
          </Magnetic>
          {cvAvailable ? (
            <a
              href="/Kirtan-Chanllawala-CV.pdf"
              download
              className="inline-flex items-center gap-2 rounded-full px-5 py-3 text-sm font-medium text-fg-muted transition-colors hover:text-fg"
            >
              <Download size={16} />
              Download CV
            </a>
          ) : null}
        </motion.div>

        <motion.div variants={item} className="mt-6 flex items-center gap-5">
          <a
            href={personal.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm text-fg-subtle transition-colors hover:text-fg"
          >
            <GithubIcon size={16} />
            {personal.githubHandle}
          </a>
          <a
            href={personal.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm text-fg-subtle transition-colors hover:text-fg"
          >
            <LinkedinIcon size={16} />
            LinkedIn
          </a>
        </motion.div>

        <motion.dl
          variants={item}
          className="mt-16 grid max-w-3xl grid-cols-2 gap-x-6 gap-y-8 border-t border-border pt-10 sm:grid-cols-4"
        >
          {heroStats.map((stat) => (
            <div key={stat.label}>
              <dt className="sr-only">{stat.label}</dt>
              <dd className="font-mono text-2xl font-semibold text-fg sm:text-3xl">{stat.value}</dd>
              <p className="mt-1 text-sm text-fg-subtle">{stat.label}</p>
            </div>
          ))}
        </motion.dl>
      </motion.div>

        <div className="hidden justify-self-end xl:block">
          <CodeWindow />
        </div>
      </div>

      <motion.a
        href="#about"
        aria-label="Scroll to about section"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.6 }}
        className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-fg-subtle transition-colors hover:text-fg sm:flex"
      >
        <span className="font-mono text-[11px] tracking-widest uppercase">Scroll</span>
        <ArrowDown size={16} />
      </motion.a>
    </section>
  );
}
