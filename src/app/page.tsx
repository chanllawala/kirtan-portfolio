import fs from "node:fs";
import path from "node:path";
import { Hero } from "@/components/Hero";
import { TechTicker } from "@/components/TechTicker";
import { About } from "@/components/About";
import { Experience } from "@/components/Experience";
import { Projects } from "@/components/Projects";
import { Skills } from "@/components/Skills";
import { Education } from "@/components/Education";
import { Contact } from "@/components/Contact";

function getCvAvailable() {
  try {
    return fs.existsSync(path.join(process.cwd(), "public", "Kirtan-Chanllawala-CV.pdf"));
  } catch {
    return false;
  }
}

export default function Home() {
  const cvAvailable = getCvAvailable();

  return (
    <>
      <Hero cvAvailable={cvAvailable} />
      <TechTicker />
      <About />
      <Experience />
      <Projects />
      <Skills />
      <Education />
      <Contact />
    </>
  );
}
