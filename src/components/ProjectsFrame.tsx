export function ProjectsFrame() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 900 620"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="h-full w-full max-w-[900px] text-fg"
    >
      <g stroke="currentColor" strokeLinecap="round" strokeLinejoin="round">
        {/* monitor bezel */}
        <rect x="40" y="20" width="820" height="500" rx="18" opacity="0.08" strokeWidth="2" />
        {/* browser chrome */}
        <line x1="40" y1="78" x2="860" y2="78" opacity="0.08" strokeWidth="1.5" />
        <circle cx="72" cy="49" r="6" opacity="0.12" strokeWidth="1.5" />
        <circle cx="94" cy="49" r="6" opacity="0.12" strokeWidth="1.5" />
        <circle cx="116" cy="49" r="6" opacity="0.12" strokeWidth="1.5" />
        <rect x="150" y="41" width="300" height="16" rx="8" opacity="0.06" strokeWidth="1.5" />

        {/* faint screen grid */}
        <line x1="40" y1="220" x2="860" y2="220" opacity="0.04" strokeWidth="1" />
        <line x1="40" y1="360" x2="860" y2="360" opacity="0.04" strokeWidth="1" />
        <line x1="450" y1="78" x2="450" y2="520" opacity="0.04" strokeWidth="1" />

        {/* stand */}
        <line x1="450" y1="520" x2="450" y2="565" opacity="0.08" strokeWidth="2" />
        <line x1="370" y1="565" x2="530" y2="565" opacity="0.08" strokeWidth="2" />
      </g>
    </svg>
  );
}
