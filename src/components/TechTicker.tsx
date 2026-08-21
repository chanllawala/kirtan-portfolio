const items = [
  "React",
  "TypeScript",
  "Python",
  "Flask",
  "Node.js",
  "MySQL",
  "REST APIs",
  "GitHub Actions",
  "Docker",
  "OpenAI API",
  "Groq · Llama 3",
  "Hugging Face",
];

export function TechTicker() {
  const loop = [...items, ...items];

  return (
    <div className="overflow-hidden border-y border-border bg-bg-elevated/50 py-5">
      <div
        className="no-scrollbar flex w-max gap-10 [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)] motion-safe:animate-marquee"
        aria-hidden="true"
      >
        {loop.map((item, i) => (
          <span
            key={`${item}-${i}`}
            className="flex items-center gap-10 font-mono text-sm text-fg-subtle"
          >
            {item}
            <span className="text-accent">/</span>
          </span>
        ))}
      </div>
      <span className="sr-only">{items.join(", ")}</span>
    </div>
  );
}
