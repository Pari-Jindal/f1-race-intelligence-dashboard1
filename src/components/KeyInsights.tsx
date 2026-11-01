import { TrendingUp, Users2, Trophy, Flag, Globe2 } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { useInView } from "@/hooks/useInView";
import Reveal from "@/components/Reveal";

type InsightCard = { icon: LucideIcon; title: string; value: string; desc: string };

const INSIGHTS: InsightCard[] = [
  { icon: Trophy, title: "Red Bull Racing", value: "8,006 pts", desc: "Leads the all-time Team Performance ranking." },
  { icon: TrendingUp, title: "Mercedes", value: "7,790 pts", desc: "Close behind in second on constructors' points." },
  { icon: Trophy, title: "Ferrari", value: "5,778 pts", desc: "Third by total team points across the dataset." },
  { icon: Users2, title: "Carlos Sainz", value: "34 DNFs", desc: "Most DNFs among the listed drivers." },
  { icon: Flag, title: "Bahrain · USA · Spain", value: "Top participation", desc: "Canada and UAE also rank among the highest." },
  { icon: Globe2, title: "Race Outcomes", value: "6,464 logged", desc: "Across 29 circuits and 17 seasons of data." },
];

// Team performance ranking (all-time points) - team brand colors.
const TEAM_COLORS: Record<string, string> = {
  "Red Bull Racing": "#1e3a8a",
  Mercedes: "#00d2be",
  Ferrari: "#dc0000",
  McLaren: "#ff8000",
  Alpine: "#0090ff",
  "Aston Martin": "#229971",
  Williams: "#00a0dd",
  RB: "#6692ff",
  Haas: "#b6babd",
  "Kick Sauber": "#52e252",
};

const CHART_DATA = [
  { name: "Red Bull Racing", points: 8006 },
  { name: "Mercedes", points: 7790 },
  { name: "Ferrari", points: 5778 },
  { name: "McLaren", points: 4270 },
  { name: "Alpine", points: 1947 },
  { name: "Aston Martin", points: 1181 },
  { name: "Williams", points: 1057 },
  { name: "RB", points: 923 },
  { name: "Haas", points: 591 },
  { name: "Kick Sauber", points: 363 },
];

const MAX_POINTS = Math.max(...CHART_DATA.map((d) => d.points));

export default function KeyInsights() {
  const { ref, inView } = useInView<HTMLDivElement>({ threshold: 0.3 });

  return (
    <section id="drivers" className="relative bg-base py-24 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal className="text-center">
          <span className="font-heading text-sm font-700 uppercase tracking-[0.3em] text-f1red">
            What the Data Reveals
          </span>
          <h2 className="mt-3 section-heading">
            Key <span className="text-f1red">Insights</span>
          </h2>
        </Reveal>

        {/* Insight cards */}
        <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {INSIGHTS.map((ins, i) => {
            const Icon = ins.icon;
            return (
              <Reveal key={ins.title} delay={i * 80}>
                <div className="card-glow group h-full p-6">
                  <div className="flex items-center justify-between">
                    <div className="flex h-11 w-11 items-center justify-center rounded-lg border border-f1red/30 bg-f1red/10 text-f1red">
                      <Icon size={22} />
                    </div>
                    <span className="font-display text-xl font-900 text-f1red">{ins.value}</span>
                  </div>
                  <h3 className="mt-4 font-heading text-base font-700 uppercase tracking-wide text-white">
                    {ins.title}
                  </h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-neutral-400">{ins.desc}</p>
                </div>
              </Reveal>
            );
          })}
        </div>

        {/* Bar chart */}
        <Reveal delay={100}>
          <div ref={ref} className="mt-12 rounded-xl border border-f1red/20 bg-neutral-900/50 p-6 sm:p-8">
            <div className="mb-6 flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <h3 className="font-heading text-lg font-700 uppercase tracking-wide text-white">
                  Team Performance Ranking
                </h3>
                <p className="mt-1 text-sm text-neutral-400">All-time constructor points across the dataset.</p>
              </div>
              <span className="inline-flex w-fit items-center gap-2 rounded-full border border-f1red/30 bg-f1red/10 px-3 py-1 font-heading text-[11px] font-600 uppercase tracking-widest text-f1red">
                <Trophy size={13} /> Points
              </span>
            </div>

            {/* Plain HTML/CSS horizontal bar chart with animated widths via CSS transitions */}
            <div className="flex flex-col gap-3.5">
              {CHART_DATA.map((entry, i) => {
                const color = TEAM_COLORS[entry.name] ?? "#e10600";
                const widthPct = (entry.points / MAX_POINTS) * 100;
                return (
                  <div key={entry.name} className="group flex items-center gap-3 sm:gap-4">
                    {/* Team label */}
                    <div className="w-24 shrink-0 truncate font-heading text-xs font-600 uppercase tracking-wide text-neutral-200 sm:w-32 sm:text-sm">
                      {entry.name}
                    </div>

                    {/* Bar track */}
                    <div className="relative h-7 flex-1 overflow-hidden rounded-md bg-neutral-800/70">
                      <div
                        className="h-full rounded-md transition-all duration-1000 ease-[cubic-bezier(0.22,1,0.36,1)]"
                        style={{
                          backgroundColor: color,
                          boxShadow: `0 0 14px -2px ${color}`,
                          width: inView ? `${widthPct}%` : "0%",
                          transitionDelay: `${i * 90}ms`,
                        }}
                      />
                      {/* Points label inside bar */}
                      <div className="pointer-events-none absolute inset-y-0 right-2 flex items-center">
                        <span className="font-display text-xs font-700 text-white drop-shadow sm:text-sm">
                          {entry.points.toLocaleString()}
                        </span>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Axis hint */}
            <div className="mt-4 flex items-center justify-between pl-28 text-[10px] uppercase tracking-widest text-neutral-600 sm:pl-36">
              <span>0</span>
              <span>{MAX_POINTS.toLocaleString()} pts</span>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
