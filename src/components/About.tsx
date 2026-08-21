import Image from "next/image";
import { Section } from "./Section";
import { Reveal } from "./Reveal";
import { languages, personal } from "@/lib/content";
import { MapPin, GraduationCap, Briefcase, Languages as LanguagesIcon } from "lucide-react";

const facts = [
  { icon: MapPin, label: "Based in", value: personal.location },
  { icon: GraduationCap, label: "Education", value: "BSc (Hons) Computing Science, Stirling" },
  { icon: Briefcase, label: "Currently", value: "Full Stack Developer, Canvia Group" },
];

export function About() {
  return (
    <Section
      id="about"
      eyebrow="About"
      title="From production platforms to AI experiments, I enjoy turning real problems into practical software."
    >
      <div className="grid gap-12 lg:grid-cols-[1.3fr_1fr]">
        <Reveal className="space-y-5 text-base leading-relaxed text-fg-muted text-pretty sm:text-lg">
          <p>
            I studied Computing Science at the University of Stirling, where I built foundations
            across AI, machine learning, data science, distributed systems, security and database
            design — and graduated with a 2:1.
          </p>
          <p>
            Today I work as a full stack developer at{" "}
            <span className="text-fg">Canvia Group</span>, where I&apos;m the sole developer
            responsible for four live production platforms — from client requirements through UI,
            backend, APIs, deployment and ongoing maintenance. Alongside that, I take on freelance
            client projects and keep building independent AI/LLM software, from an OpenAI-backed
            storytelling system to a self-hosted study assistant running an open-weights model.
          </p>
          <p>
            Before development, I spent three years in customer service handling 50+ conversations
            a day for a UK utility client — which is where the instinct to communicate clearly,
            translate a vague problem into a concrete fix, and stay calm under pressure comes from.
            It shows up in how I gather requirements and talk to clients now.
          </p>
        </Reveal>

        <Reveal delay={0.1} className="space-y-6">
          <div className="group relative mx-auto w-48 overflow-hidden rounded-2xl border border-border sm:w-56 lg:mx-0 lg:w-full">
            <div className="pointer-events-none absolute -inset-px rounded-2xl bg-gradient-to-b from-accent/40 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
            <Image
              src="/images/kirtan-graduation.jpg"
              alt="Kirtan Chanllawala at his BSc (Hons) Computing Science graduation, University of Stirling"
              width={1000}
              height={1250}
              className="aspect-[4/5] w-full object-cover grayscale-[15%] transition-all duration-500 group-hover:grayscale-0"
              sizes="(min-width: 1024px) 320px, 224px"
              priority={false}
            />
          </div>

          <div className="rounded-2xl border border-border bg-bg-elevated p-6">
            <ul className="space-y-4">
              {facts.map((fact) => (
                <li key={fact.label} className="flex items-start gap-3">
                  <fact.icon size={18} strokeWidth={1.75} className="mt-0.5 shrink-0 text-accent" />
                  <div>
                    <p className="text-xs text-fg-subtle">{fact.label}</p>
                    <p className="text-sm text-fg">{fact.value}</p>
                  </div>
                </li>
              ))}
              <li className="flex items-start gap-3">
                <LanguagesIcon size={18} strokeWidth={1.75} className="mt-0.5 shrink-0 text-accent" />
                <div>
                  <p className="text-xs text-fg-subtle">Languages</p>
                  <p className="text-sm text-fg">
                    {languages.map((l) => `${l.name} (${l.level})`).join(" · ")}
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </Reveal>
      </div>
    </Section>
  );
}
