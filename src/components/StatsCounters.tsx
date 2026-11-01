import { BarChart3, Car, Flag, Gauge, Trophy, Users, Wrench, Zap } from "lucide-react";
import { useCountUp, useInView } from "@/hooks/useInView";
import type { LucideIcon } from "lucide-react";

type Stat = {
  icon: LucideIcon;
  value: number;
  suffix: string;
  prefix?: string;
  decimals?: number;
  label: string;
};

const ROW_ONE: Stat[] = [
  { icon: BarChart3, value: 7.5, suffix: "+", decimals: 1, label: "Seasons Analyzed" },
  { icon: Flag, value: 1, suffix: "K+", label: "Races Covered" },
  { icon: Users, value: 20, suffix: "", label: "Active Drivers" },
  { icon: Wrench, value: 10, suffix: "", label: "Constructors" },
];

const ROW_TWO: Stat[] = [
  { icon: Car, value: 897, suffix: "", label: "Total Race Entries" },
  { icon: Trophy, value: 33, suffix: "", label: "Championship Titles" },
  { icon: Gauge, value: 372, suffix: " km/h", label: "Max Top Speed" },
  { icon: Zap, value: 15, suffix: "", label: "KPIs Visualized" },
];

function StatCard({ stat, active, delay }: { stat: Stat; active: boolean; delay: number }) {
  const { icon: Icon } = stat;
  const count = useCountUp(stat.value, active);
  const display =
    stat.decimals != null ? count.toFixed(stat.decimals) : Math.round(count).toString();

  return (
    <div
      className="card-glow group flex flex-col items-start gap-4 p-6"
      style={{ transitionDelay: `${delay}ms` }}
    >
      <div className="flex h-12 w-12 items-center justify-center rounded-lg border border-f1red/30 bg-f1red/10 text-f1red transition-all duration-300 group-hover:shadow-red-glow">
        <Icon size={24} />
      </div>
      <div className="font-display text-3xl font-900 tracking-tight text-white sm:text-4xl">
        {stat.prefix}
        <span className="text-f1red">{display}</span>
        {stat.suffix}
      </div>
      <div className="font-heading text-xs font-600 uppercase tracking-[0.2em] text-neutral-400">
        {stat.label}
      </div>
    </div>
  );
}

function StatRow({ stats, active }: { stats: Stat[]; active: boolean }) {
  return (
    <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
      {stats.map((stat, i) => (
        <StatCard key={stat.label} stat={stat} active={active} delay={i * 120} />
      ))}
    </div>
  );
}

export default function StatsCounters() {
  const { ref, inView } = useInView<HTMLDivElement>({ threshold: 0.25 });

  return (
    <section className="relative bg-base py-20 sm:py-24">
      <div ref={ref} className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="mb-12 text-center">
          <span className="font-heading text-sm font-700 uppercase tracking-[0.3em] text-f1red">
            By the Numbers
          </span>
          <h2 className="mt-3 section-heading">
            Championship <span className="text-f1red">Data</span> at a Glance
          </h2>
        </div>
        <div className="flex flex-col gap-5">
          <StatRow stats={ROW_ONE} active={inView} />
          <StatRow stats={ROW_TWO} active={inView} />
        </div>
      </div>
    </section>
  );
}
