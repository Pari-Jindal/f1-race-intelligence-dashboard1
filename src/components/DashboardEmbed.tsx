import { AlertTriangle, BarChart2, ExternalLink, Filter, Gauge, Globe2, Medal, PieChart, SlidersHorizontal, Trophy } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import Reveal from "@/components/Reveal";
import BrowserFrame from "@/components/BrowserFrame";
import TableauEmbed from "@/components/TableauEmbed";
import { tableauConfig } from "@/config";

type Item = { icon: LucideIcon; label: string };

const DASHBOARD_ITEMS: Item[] = [
  { icon: AlertTriangle, label: "DNF Analysis" },
  { icon: Trophy, label: "Team Championship Performance" },
  { icon: Globe2, label: "Race Participation by Country" },
  { icon: Medal, label: "Podium Achievements by Driver and Team" },
  { icon: BarChart2, label: "Team Performance Ranking" },
  { icon: PieChart, label: "Tyre Compound Usage Distribution" },
  { icon: Globe2, label: "Global Driver Distribution" },
  { icon: Gauge, label: "KPI Summary Cards" },
];

export default function DashboardEmbed() {
  return (
    <section id="dashboard" className="relative bg-base py-24 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal className="text-center">
          <span className="font-heading text-sm font-700 uppercase tracking-[0.3em] text-f1red">
            Tableau Public
          </span>
          <h2 className="mt-3 section-heading">
            Race Intelligence <span className="text-f1red">Dashboard</span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl font-body text-base leading-relaxed text-neutral-400">
            Explore the full Formula 1 Race Intelligence Dashboard: interactive charts, filters,
            and deep-dive analytics built in Tableau Public.
          </p>
        </Reveal>

        <Reveal delay={120} className="mt-12">
          <BrowserFrame title="F1 Race Intelligence Dashboard">
            <TableauEmbed
              id="dashboardViz"
              src="https://public.tableau.com/views/F1VisualsDashboard/Dashboard"
            />
          </BrowserFrame>
        </Reveal>

        {/* Includes list */}
        <Reveal delay={80}>
          <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {DASHBOARD_ITEMS.map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.label}
                  className="flex items-center gap-3 rounded-lg border border-f1red/15 bg-neutral-900/50 px-4 py-3"
                >
                  <Icon size={18} className="shrink-0 text-f1red" />
                  <span className="font-heading text-xs font-600 uppercase tracking-wide text-neutral-200">
                    {item.label}
                  </span>
                </div>
              );
            })}
          </div>
        </Reveal>

        {/* Filters note + button */}
        <Reveal delay={80}>
          <div className="mt-10 flex flex-col items-center justify-between gap-5 rounded-xl border border-f1red/20 bg-neutral-900/40 px-6 py-5 sm:flex-row">
            <div className="flex items-center gap-3 text-neutral-300">
              <Filter size={18} className="text-f1red" />
              <span className="font-heading text-xs font-600 uppercase tracking-widest sm:text-sm">
                Interactive filters:
              </span>
              <span className="flex flex-wrap items-center gap-2 text-xs text-neutral-400">
                <SlidersHorizontal size={14} className="text-f1red" />
                DNF Reason
                <span className="text-neutral-600">•</span>
                Year of Race Date
                <span className="text-neutral-600">•</span>
                Top N Parameter
              </span>
            </div>
            <a
              href={tableauConfig.dashboardOpenUrl}
              target="_blank"
              rel="noreferrer noopener"
              className="btn-race-primary"
            >
              Open in Tableau Public <ExternalLink size={15} />
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
