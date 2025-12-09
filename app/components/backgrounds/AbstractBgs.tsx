export const SmokeBg = () => (
  <svg className="absolute inset-0 w-full h-full opacity-40" viewBox="0 0 100 100" preserveAspectRatio="none">
    <filter id="smokeFilter">
      <feTurbulence type="fractalNoise" baseFrequency="0.01" numOctaves="3" result="noise" />
      <feDisplacementMap in="SourceGraphic" in2="noise" scale="20" />
    </filter>
    <rect width="100" height="100" fill="url(#smokeGradient)" filter="url(#smokeFilter)" />
    <defs>
      <linearGradient id="smokeGradient" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stopColor="#333" stopOpacity="0" />
        <stop offset="50%" stopColor="#666" stopOpacity="0.6" />
        <stop offset="100%" stopColor="#333" stopOpacity="0" />
      </linearGradient>
    </defs>
  </svg>
);

export const VeinsBg = () => (
  <svg className="absolute inset-0 w-full h-full opacity-30" viewBox="0 0 100 100" preserveAspectRatio="none">
    <path d="M50,0 Q60,50 50,100 M30,0 Q60,50 30,100 M70,0 Q40,50 70,100" fill="none" stroke="#aaa" strokeWidth="0.3" />
    <path d="M0,50 Q50,40 100,50 M0,30 Q50,60 100,30 M0,70 Q50,40 100,70" fill="none" stroke="#aaa" strokeWidth="0.3" />
  </svg>
);

export const ClockBg = () => (
  <svg className="absolute inset-0 w-full h-full opacity-30" viewBox="0 0 100 100">
    <circle cx="50" cy="50" r="40" fill="none" stroke="#666" strokeWidth="0.8" strokeDasharray="1 2" />
    <circle cx="50" cy="50" r="30" fill="none" stroke="#666" strokeWidth="0.8" />
    <line x1="50" y1="50" x2="50" y2="20" stroke="#666" strokeWidth="0.8" />
    <line x1="50" y1="50" x2="70" y2="50" stroke="#666" strokeWidth="0.8" />
  </svg>
);

export const HeartbeatBg = () => (
  <svg className="absolute inset-0 w-full h-full opacity-30" viewBox="0 0 200 100" preserveAspectRatio="none">
    <path d="M0,50 L40,50 L50,20 L60,80 L70,50 L200,50" fill="none" stroke="#a00" strokeWidth="0.8" />
  </svg>
);

export const GrowthBg = () => (
  <svg className="absolute inset-0 w-full h-full opacity-30" viewBox="0 0 100 100" preserveAspectRatio="none">
    <circle cx="50" cy="50" r="10" fill="#444" />
    <circle cx="50" cy="50" r="20" fill="none" stroke="#666" strokeWidth="0.8" />
    <circle cx="50" cy="50" r="30" fill="none" stroke="#666" strokeWidth="0.8" strokeDasharray="4 4" />
  </svg>
);

export const MortalityBg = () => (
  <svg className="absolute inset-0 w-full h-full opacity-30" viewBox="0 0 100 100" preserveAspectRatio="none">
    <defs>
      <pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse">
        <rect width="10" height="10" fill="none" stroke="#555" strokeWidth="0.2" />
        <circle cx="5" cy="5" r="1.5" fill="#555" />
      </pattern>
    </defs>
    <rect width="100" height="100" fill="url(#grid)" />
  </svg>
);

export const VoidBg = () => (
  <svg className="absolute inset-0 w-full h-full opacity-40" viewBox="0 0 100 100" preserveAspectRatio="none">
    <radialGradient id="voidGrad" cx="0.5" cy="0.5" r="0.5">
      <stop offset="0%" stopColor="#111" />
      <stop offset="100%" stopColor="#444" />
    </radialGradient>
    <rect width="100" height="100" fill="url(#voidGrad)" />
  </svg>
);

