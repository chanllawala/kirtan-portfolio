import { Section } from "./Section";
import { Reveal } from "./Reveal";
import { experience } from "@/lib/content";

export function Experience() {
  return (
    <Section
      id="experience"
      eyebrow="Experience"
      title="Professional experience"
      description="Full-lifecycle development work — from client requirements to production maintenance — plus the customer-facing roles that shaped how I communicate."
    >
      <ol className="relative space-y-10 border-l border-border pl-8 sm:pl-10">
        {experience.map((job, i) => (
          <Reveal as="li" key={job.org} delay={i * 0.06} className="relative">
            <span
              className={`absolute -left-[2.56rem] top-1.5 h-3 w-3 rounded-full border-2 border-bg sm:-left-[2.81rem] ${
                job.featured ? "bg-accent" : "bg-border-strong"
              }`}
            />
            <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
              <h3 className="text-lg font-semibold text-fg sm:text-xl">
                {job.role} <span className="text-fg-subtle">· {job.org}</span>
              </h3>
              <p className="font-mono text-xs text-fg-subtle sm:text-sm">{job.period}</p>
            </div>
            <p className="mt-1 text-sm text-fg-subtle">{job.location}</p>
            <p className="mt-3 text-base text-fg-muted text-pretty">{job.summary}</p>

            <ul className="mt-4 space-y-2">
              {job.points.map((point) => (
                <li key={point} className="flex gap-3 text-sm leading-relaxed text-fg-muted sm:text-[15px]">
                  <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-fg-subtle" />
                  <span className="text-pretty">{point}</span>
                </li>
              ))}
            </ul>

            <div className="mt-4 flex flex-wrap gap-2">
              {job.tech.map((t) => (
                <span
                  key={t}
                  className="rounded-full border border-border px-2.5 py-1 font-mono text-xs text-fg-subtle"
                >
                  {t}
                </span>
              ))}
            </div>
          </Reveal>
        ))}
      </ol>
    </Section>
  );
}
