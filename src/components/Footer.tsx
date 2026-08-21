import { Mail } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./icons";
import { personal } from "@/lib/content";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border py-10">
      <div className="container-page flex flex-col items-center gap-6 sm:flex-row sm:justify-between">
        <div className="text-center sm:text-left">
          <p className="font-mono text-sm text-fg">{personal.name}</p>
          <p className="text-xs text-fg-subtle">{personal.role}</p>
        </div>

        <div className="flex items-center gap-5">
          <a
            href={personal.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub profile"
            className="text-fg-subtle transition-colors hover:text-fg"
          >
            <GithubIcon size={18} />
          </a>
          <a
            href={personal.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn profile"
            className="text-fg-subtle transition-colors hover:text-fg"
          >
            <LinkedinIcon size={18} />
          </a>
          <a
            href={`mailto:${personal.email}`}
            aria-label="Send an email"
            className="text-fg-subtle transition-colors hover:text-fg"
          >
            <Mail size={18} strokeWidth={1.75} />
          </a>
        </div>

        <p className="text-xs text-fg-subtle">© {year} {personal.name}</p>
      </div>
    </footer>
  );
}
