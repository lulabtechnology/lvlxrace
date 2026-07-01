export default function Logo({ compact = false, className = "" }) {
  if (compact) {
    return (
      <svg
        viewBox="0 0 120 120"
        className={className}
        aria-label="LVLX"
        role="img"
      >
        <defs>
          <filter id="logoGlowCompact" x="-40%" y="-40%" width="180%" height="180%">
            <feGaussianBlur stdDeviation="3.2" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
          <linearGradient id="cyanStrokeCompact" x1="0" y1="0" x2="1" y2="1">
            <stop stopColor="#2af1ff" />
            <stop offset="1" stopColor="#0476ff" />
          </linearGradient>
        </defs>
        <rect x="7" y="7" width="106" height="106" rx="26" fill="#031632" stroke="#19c8ff" strokeOpacity="0.45" />
        <path d="M27 28 L47 28 L60 47 L73 28 L93 28 L70 60 L93 92 L73 92 L60 73 L47 92 L27 92 L50 60 Z" fill="none" stroke="url(#cyanStrokeCompact)" strokeWidth="6" filter="url(#logoGlowCompact)" />
        <path d="M36 40 L55 40 L60 48 L65 40 L84 40 L61 78 Z" fill="#fff" />
      </svg>
    );
  }

  return (
    <svg
      viewBox="0 0 360 118"
      className={className}
      aria-label="LVLX"
      role="img"
    >
      <defs>
        <filter id="logoGlow" x="-30%" y="-60%" width="160%" height="220%">
          <feGaussianBlur stdDeviation="3.4" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
        <linearGradient id="cyanStroke" x1="0" y1="0" x2="1" y2="1">
          <stop stopColor="#2af1ff" />
          <stop offset=".52" stopColor="#18c8ff" />
          <stop offset="1" stopColor="#0476ff" />
        </linearGradient>
        <linearGradient id="whiteMark" x1="0" y1="0" x2="0" y2="1">
          <stop stopColor="#ffffff" />
          <stop offset="1" stopColor="#dbefff" />
        </linearGradient>
      </defs>
      <g filter="url(#logoGlow)" opacity=".96">
        <path d="M105 15 H151 L180 49 L209 15 H255 L213 59 L255 103 H210 L180 70 L150 103 H105 L147 59 Z" fill="none" stroke="url(#cyanStroke)" strokeWidth="8" strokeLinejoin="miter" />
        <path d="M112 23 H142 L180 63 L218 23 H248 L204 59 L248 95 H218 L180 75 L142 95 H112 L156 59 Z" fill="none" stroke="#19c8ff" strokeOpacity="0.28" strokeWidth="3" />
      </g>
      <g fill="url(#whiteMark)">
        <path d="M11 31 H45 V75 H105 V103 H11 Z" />
        <path d="M127 31 H165 L180 55 L195 31 H233 L180 103 Z" />
        <path d="M255 31 H289 V75 H349 V103 H255 Z" />
      </g>
    </svg>
  );
}
