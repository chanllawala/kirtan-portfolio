"use client";

import { useState } from "react";
import { ArrowUpRight, Check, Copy, Mail } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./icons";
import { Reveal } from "./Reveal";
import { personal } from "@/lib/content";

export function Contact() {
  const [copied, setCopied] = useState(false);

  async function copyEmail() {
    try {
      await navigator.clipboard.writeText(personal.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      /* clipboard unavailable — the email link still works */
    }
  }

  return (
    <section id="contact" className="scroll-mt-24 py-20 sm:py-28">
      <div className="container-page">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="font-mono text-sm tracking-wide text-accent">Contact</p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-fg text-balance sm:text-5xl">
            Have a project, opportunity, or problem worth solving?
          </h2>
          <p className="mt-4 text-lg text-fg-muted">Let&apos;s talk.</p>
        </Reveal>

        <Reveal delay={0.1} className="mx-auto mt-12 grid max-w-2xl gap-4 sm:grid-cols-3">
          <a
            href={`mailto:${personal.email}`}
            data-cursor-label="Email"
            className="group flex flex-col items-center gap-3 rounded-2xl border border-border bg-bg-elevated p-6 text-center transition-colors hover:border-accent"
          >
            <Mail size={22} strokeWidth={1.75} className="text-accent" />
            <div>
              <p className="text-sm font-medium text-fg">Email</p>
              <p className="mt-0.5 break-all text-xs text-fg-subtle">{personal.email}</p>
            </div>
          </a>

          <a
            href={personal.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            data-cursor-label="LinkedIn"
            className="group flex flex-col items-center gap-3 rounded-2xl border border-border bg-bg-elevated p-6 text-center transition-colors hover:border-accent"
          >
            <LinkedinIcon size={22} className="text-accent" />
            <div className="flex items-center gap-1 text-sm font-medium text-fg">
              LinkedIn
              <ArrowUpRight size={14} className="text-fg-subtle transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </div>
          </a>

          <a
            href={personal.github}
            target="_blank"
            rel="noopener noreferrer"
            data-cursor-label="GitHub"
            className="group flex flex-col items-center gap-3 rounded-2xl border border-border bg-bg-elevated p-6 text-center transition-colors hover:border-accent"
          >
            <GithubIcon size={22} className="text-accent" />
            <div className="flex items-center gap-1 text-sm font-medium text-fg">
              GitHub
              <ArrowUpRight size={14} className="text-fg-subtle transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </div>
          </a>
        </Reveal>

        <Reveal delay={0.15} className="mt-8 flex justify-center">
          <button
            type="button"
            onClick={copyEmail}
            className="inline-flex items-center gap-2 rounded-full border border-border-strong px-4 py-2 text-sm text-fg-muted transition-colors hover:border-accent hover:text-accent"
          >
            {copied ? <Check size={14} /> : <Copy size={14} />}
            {copied ? "Email copied" : "Copy email address"}
          </button>
        </Reveal>
      </div>
    </section>
  );
}
