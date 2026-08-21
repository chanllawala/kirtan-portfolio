import type { ReactNode } from "react";
import { Reveal } from "./Reveal";

type SectionProps = {
  id: string;
  eyebrow: string;
  title: string;
  description?: string;
  children: ReactNode;
  className?: string;
};

export function Section({ id, eyebrow, title, description, children, className }: SectionProps) {
  return (
    <section id={id} className={`scroll-mt-24 py-20 sm:py-28 ${className ?? ""}`}>
      <div className="container-page">
        <Reveal className="max-w-2xl">
          <p className="font-mono text-sm tracking-wide text-accent">{eyebrow}</p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-fg text-balance sm:text-4xl">
            {title}
          </h2>
          {description ? (
            <p className="mt-4 text-base leading-relaxed text-fg-muted text-pretty sm:text-lg">
              {description}
            </p>
          ) : null}
        </Reveal>
        <div className="mt-12 sm:mt-16">{children}</div>
      </div>
    </section>
  );
}
