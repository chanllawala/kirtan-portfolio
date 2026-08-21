import { Section } from "./Section";
import { Reveal } from "./Reveal";
import { skills } from "@/lib/content";

export function Skills() {
  return (
    <Section
      id="skills"
      eyebrow="Tech stack"
      title="Tools I build with"
      description="The technologies behind the platforms, freelance projects and AI tools above — used in production, not just tutorials."
    >
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {skills.map((group, i) => (
          <Reveal
            key={group.label}
            delay={i * 0.05}
            className="rounded-2xl border border-border bg-bg-elevated p-5 transition-colors hover:border-border-strong"
          >
            <h3 className="font-mono text-xs uppercase tracking-wide text-accent">{group.label}</h3>
            <ul className="mt-3 flex flex-wrap gap-2">
              {group.items.map((item) => (
                <li
                  key={item}
                  className="rounded-md bg-bg-elevated-2 px-2.5 py-1 text-sm text-fg-muted"
                >
                  {item}
                </li>
              ))}
            </ul>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
