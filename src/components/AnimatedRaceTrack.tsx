import { useInView } from "@/hooks/useInView";

/**
 * Animated SVG of a stylized race circuit with two colored dots that
 * travel along the track path using SVG <animateMotion>. Falls back to
 * a static path if IntersectionObserver / SMIL is unavailable.
 */
export default function AnimatedRaceTrack() {
  const { ref, inView } = useInView<HTMLDivElement>({ once: false, threshold: 0.4 });

  return (
    <div ref={ref} className="relative">
      <div className="mb-3 flex items-center justify-between">
        <span className="font-heading text-xs font-700 uppercase tracking-[0.25em] text-f1red">
          Live Circuit Telemetry
        </span>
        <span className="flex items-center gap-1.5 font-heading text-[10px] uppercase tracking-widest text-neutral-400">
          <span className="h-1.5 w-1.5 animate-pulse-red rounded-full bg-f1red" /> Simulating
        </span>
      </div>

      <svg
        viewBox="0 0 600 360"
        className="h-auto w-full"
        role="img"
        aria-label="Animated schematic of a Formula 1 race circuit with two cars circling the track."
      >
        <defs>
          <linearGradient id="trackGlow" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#3a3a3a" />
            <stop offset="100%" stopColor="#1a1a1a" />
          </linearGradient>
          <filter id="redGlow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="4" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* Track surface (wider, grey) */}
        <path
          d="M70,300 C70,180 150,120 250,130 C330,138 360,80 440,90 C520,100 540,180 500,240 C470,290 380,300 300,280 C220,260 150,300 120,300 C90,300 70,330 70,300 Z"
          fill="none"
          stroke="url(#trackGlow)"
          strokeWidth="22"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        {/* Racing line (thin, red) */}
        <path
          id="raceLine"
          d="M70,300 C70,180 150,120 250,130 C330,138 360,80 440,90 C520,100 540,180 500,240 C470,290 380,300 300,280 C220,260 150,300 120,300 C90,300 70,330 70,300 Z"
          fill="none"
          stroke="#e10600"
          strokeWidth="2"
          strokeLinecap="round"
          strokeDasharray="6 10"
          opacity="0.8"
        />

        {/* Start/finish line */}
        <g transform="translate(70,300) rotate(-78)">
          <rect x="-14" y="-3" width="28" height="6" fill="#fff" />
          <rect x="-14" y="-3" width="7" height="3" fill="#0a0a0a" />
          <rect x="0" y="0" width="7" height="3" fill="#0a0a0a" />
          <rect x="-7" y="0" width="7" height="3" fill="#0a0a0a" />
          <rect x="7" y="-3" width="7" height="3" fill="#0a0a0a" />
        </g>

        {/* Corner markers */}
        {[
          [70, 300],
          [250, 130],
          [440, 90],
          [500, 240],
          [300, 280],
        ].map(([x, y], i) => (
          <circle key={i} cx={x} cy={y} r="3" fill="#e10600" opacity="0.6" />
        ))}

        {/* Moving cars - only animate when in view */}
        {inView && (
          <>
            <circle r="5" fill="#e10600" filter="url(#redGlow)">
              <animateMotion dur="6s" repeatCount="indefinite" rotate="auto">
                <mpath href="#raceLine" />
              </animateMotion>
            </circle>
            <circle r="4" fill="#ffffff" filter="url(#redGlow)">
              <animateMotion dur="6s" begin="-1.2s" repeatCount="indefinite" rotate="auto">
                <mpath href="#raceLine" />
              </animateMotion>
            </circle>
          </>
        )}
      </svg>

      <div className="mt-2 flex items-center justify-between font-heading text-[10px] uppercase tracking-widest text-neutral-500">
        <span>Lap 1 / 58</span>
        <span>Sector 3</span>
        <span className="text-f1red">DRS Active</span>
      </div>
    </div>
  );
}
