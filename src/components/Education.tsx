import { Section } from "./Section";
import { Reveal } from "./Reveal";
import { certifications, education } from "@/lib/content";
import { Award, GraduationCap } from "lucide-react";

export function Education() {
  return (
    <Section
      id="education"
      eyebrow="Education"
      title="Education & certifications"
    >
      <div className="grid gap-10 lg:grid-cols-[1.4fr_1fr]">
        <Reveal>
          <div className="rounded-2xl border border-border bg-bg-elevated p-6 sm:p-8">
            <div className="flex items-start gap-3">
              <GraduationCap size={22} strokeWidth={1.75} className="mt-1 shrink-0 text-accent" />
              <div>
                <h3 className="text-lg font-semibold text-fg sm:text-xl">
                  {education.degree.title}
                </h3>
                <p className="text-sm text-fg-muted">{education.degree.org}</p>
                <p className="mt-1 font-mono text-xs text-fg-subtle">
                  {education.degree.period} · {education.degree.result}
                </p>
              </div>
            </div>

            <p className="mt-6 text-xs uppercase tracking-wide text-fg-subtle">Module results</p>
            <ul className="mt-3 grid gap-2 sm:grid-cols-2">
              {education.degree.modules.map((m) => (
                <li
                  key={m.name}
                  className="flex items-center justify-between gap-3 rounded-lg bg-bg-elevated-2 px-3 py-2 text-sm"
                >
                  <span className="text-fg-muted">{m.name}</span>
                  <span className="font-mono text-xs text-accent">{m.grade}</span>
                </li>
              ))}
            </ul>

            <div className="mt-8 border-t border-border pt-6">
              <h4 className="text-sm font-medium text-fg">{education.secondary.title}</h4>
              <p className="mt-1 text-sm text-fg-muted">{education.secondary.org}</p>
              <p className="mt-1 font-mono text-xs text-fg-subtle">{education.secondary.period}</p>
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <h3 className="flex items-center gap-2 text-sm font-medium text-fg">
            <Award size={18} strokeWidth={1.75} className="text-accent" />
            Certifications
          </h3>
          <ul className="mt-4 space-y-3">
            {certifications.map((cert) => (
              <li
                key={cert.title}
                className="rounded-xl border border-border bg-bg-elevated p-4"
              >
                <p className="text-sm font-medium text-fg">{cert.title}</p>
                <p className="mt-0.5 text-sm text-fg-muted">{cert.org}</p>
                <p className="mt-1 font-mono text-xs text-fg-subtle">{cert.period}</p>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </Section>
  );
}
