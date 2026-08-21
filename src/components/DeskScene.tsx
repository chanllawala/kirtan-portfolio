export function DeskScene() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 1000 560"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="pointer-events-none absolute inset-0 h-full w-full text-fg"
      preserveAspectRatio="xMidYMax slice"
    >
      <g opacity="0.05" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        {/* desk surface */}
        <line x1="0" y1="470" x2="1000" y2="470" />
        <line x1="40" y1="470" x2="80" y2="520" />
        <line x1="960" y1="470" x2="920" y2="520" />

        {/* monitor */}
        <rect x="330" y="230" width="340" height="215" rx="10" />
        <rect x="360" y="258" width="280" height="160" rx="4" />
        <line x1="500" y1="445" x2="500" y2="470" />
        <line x1="455" y1="470" x2="545" y2="470" />
        {/* screen content lines, echoing a code editor */}
        <line x1="384" y1="284" x2="470" y2="284" />
        <line x1="384" y1="304" x2="560" y2="304" />
        <line x1="404" y1="324" x2="520" y2="324" />
        <line x1="404" y1="344" x2="500" y2="344" />
        <line x1="384" y1="364" x2="540" y2="364" />

        {/* keyboard */}
        <rect x="360" y="486" width="220" height="16" rx="4" />

        {/* mouse */}
        <rect x="605" y="486" width="26" height="40" rx="10" />

        {/* mug, to the right */}
        <path d="M735 400 h60 v60 a30 30 0 0 1 -30 30 h0 a30 30 0 0 1 -30 -30 Z" />
        <path d="M795 415 q28 0 28 22 q0 22 -28 22" />
        <path d="M752 380 q4 -14 -4 -22" />
        <path d="M770 380 q4 -14 -4 -22" />

        {/* plant, to the left */}
        <path d="M180 470 v-70" />
        <path d="M180 420 q-38 -10 -46 -46 q38 4 46 46 Z" />
        <path d="M180 400 q34 -6 44 -40 q-36 0 -44 40 Z" />
        <path d="M180 460 q-30 -4 -36 -34 q30 2 36 34 Z" />
        <path d="M150 470 h60 l-8 40 h-44 Z" />

        {/* desk lamp, far right */}
        <path d="M860 470 v-40" />
        <path d="M860 430 l70 -60" />
        <ellipse cx="936" cy="366" rx="18" ry="10" />
      </g>
    </svg>
  );
}
