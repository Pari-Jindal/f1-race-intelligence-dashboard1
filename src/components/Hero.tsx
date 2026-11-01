import { heroImages } from "@/config";
import { ChevronDown } from "lucide-react";
import { useInView } from "@/hooks/useInView";

export default function Hero() {
  const { ref, inView } = useInView<HTMLDivElement>({ once: true });

  return (
    <section id="home" className="relative flex min-h-screen items-center overflow-hidden">
      {/* Background image */}
      <img
        src={heroImages.hero}
        alt="A Formula 1 car speeding down a race track at night under floodlights."
        className="absolute inset-0 h-full w-full object-cover"
        loading="eager"
      />
      {/* Black-to-red gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-base/70 via-base/55 to-base" />
      <div className="absolute inset-0 bg-gradient-to-r from-base via-base/40 to-f1red/30 mix-blend-multiply" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_70%_60%,rgba(225,6,0,0.25),transparent_55%)]" />

      {/* Content */}
      <div ref={ref} className="relative z-10 mx-auto w-full max-w-7xl px-5 pt-24 sm:px-8">
        <div className={`max-w-3xl ${inView ? "animate-fade-up" : ""}`}>
          <span className="inline-flex items-center gap-2 rounded-full border border-f1red/40 bg-f1red/10 px-4 py-1.5 font-heading text-xs font-700 uppercase tracking-[0.25em] text-f1red">
            <span className="h-1.5 w-1.5 animate-pulse-red rounded-full bg-f1red" />
            Elite Race Analytics Platform
          </span>

          <h1 className="mt-6 font-display text-5xl font-900 uppercase leading-[0.95] tracking-tight text-white sm:text-7xl md:text-8xl">
            Formula <span className="text-f1red drop-shadow-[0_0_25px_rgba(225,6,0,0.55)]">1</span>
          </h1>
          <h2 className="mt-2 font-display text-2xl font-700 uppercase tracking-[0.25em] text-white/90 sm:text-3xl md:text-4xl">
            Race Intelligence Dashboard
          </h2>

          <p className="mt-6 max-w-xl font-body text-base leading-relaxed text-neutral-300 sm:text-lg">
            Deep-dive analytics into Formula 1 Championship data, from driver performance metrics and
            team strategy to circuit analysis and historical championship trends. Powered by Tableau
            visualization intelligence.
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-4">
            <a href="#dashboard" className="btn-race-primary">
              View Dashboard
            </a>
            <a href="#story" className="btn-race-outline">
              Explore Story
            </a>
          </div>
        </div>
      </div>

      {/* Scroll-down indicator */}
      <a
        href="#project"
        aria-label="Scroll to project overview"
        className="absolute bottom-7 left-1/2 z-10 -translate-x-1/2 text-white/70 transition-colors hover:text-f1red"
      >
        <div className="flex flex-col items-center gap-2">
          <span className="font-heading text-[10px] uppercase tracking-[0.3em]">Scroll</span>
          <div className="flex h-9 w-5 items-start justify-center rounded-full border border-white/40 p-1.5">
            <span className="h-2 w-1 animate-scrollWheel rounded-full bg-f1red" />
          </div>
          <ChevronDown size={16} className="animate-bounce" />
        </div>
      </a>
    </section>
  );
}
