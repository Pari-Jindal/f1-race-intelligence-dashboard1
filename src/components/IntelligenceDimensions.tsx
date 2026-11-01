import { CloudSun, Flag, Gauge, MapPinned, Repeat, Swords } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import Reveal from "@/components/Reveal";

type Dimension = { icon: LucideIcon; title: string; desc: string };

const DIMENSIONS: Dimension[] = [
  { icon: MapPinned, title: "Circuit Analysis", desc: "Track characteristics, layout type and corner profiles for every Grand Prix venue." },
  { icon: Gauge, title: "Lap Time Breakdown", desc: "Sector splits, qualifying pace and fastest-lap trends across the season grid." },
  { icon: Repeat, title: "Tyre Strategy", desc: "Compound usage patterns, stint lengths and degradation impact on race outcomes." },
  { icon: Swords, title: "Driver Head-to-Head", desc: "Direct teammate and rival matchups on qualifying, race pace and points yield." },
  { icon: Flag, title: "Points Progression", desc: "Round-by-round championship swings and momentum shifts for drivers and teams." },
  { icon: CloudSun, title: "Weather & Safety Cars", desc: "Conditions and safety-car periods that reshaped strategy and results." },
];

const TICKER = [
  "Max leads Championship by 41 points",
  "Monaco GP fastest lap",
  "Ferrari leads pit-stop speed in 2024",
  "Red Bull Racing leads Constructors' championship",
];

export default function IntelligenceDimensions() {
  return (
    <section id="insights" className="relative bg-base py-24 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        {/* Heading */}
        <Reveal className="text-center">
          <span className="font-heading text-sm font-700 uppercase tracking-[0.3em] text-f1red">
            Analytical Power
          </span>
          <h2 className="mt-3 section-heading">
            Intelligence <span className="text-f1red">Dimensions</span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl font-body text-base leading-relaxed text-neutral-400">
            Six key analytical dimensions powering our Formula 1 Race Intelligence platform.
          </p>
        </Reveal>

        {/* Live ticker */}
        <Reveal delay={100}>
          <div className="mt-10 overflow-hidden rounded-lg border border-f1red/20 bg-neutral-900/60">
            <div className="flex items-stretch">
              <div className="flex shrink-0 items-center gap-2 bg-f1red px-4 py-2.5 font-heading text-xs font-700 uppercase tracking-widest text-white">
                <span className="h-1.5 w-1.5 animate-pulse-red rounded-full bg-white" /> Live
              </div>
              <div className="relative flex-1 overflow-hidden">
                <div className="flex w-max animate-marquee gap-12 py-2.5 pl-8">
                  {[...TICKER, ...TICKER].map((item, i) => (
                    <span
                      key={i}
                      className="whitespace-nowrap font-heading text-sm font-600 uppercase tracking-wider text-neutral-200"
                    >
                      <span className="mr-2 text-f1red">›</span>
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </Reveal>

        {/* 3x2 grid */}
        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {DIMENSIONS.map((d, i) => {
            const Icon = d.icon;
            return (
              <Reveal key={d.title} delay={i * 90}>
                <div className="card-glow group h-full p-6 transition-transform duration-300 hover:-translate-y-1.5">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg border border-f1red/30 bg-f1red/10 text-f1red transition-all duration-300 group-hover:shadow-red-glow">
                    <Icon size={24} />
                  </div>
                  <h3 className="mt-5 font-heading text-lg font-700 uppercase tracking-wide text-white">
                    {d.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-neutral-400">{d.desc}</p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
