import { Globe2, MapPin, Trophy, ShieldCheck, Medal, Disc3, BarChart2, ExternalLink } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import Reveal from "@/components/Reveal";
import BrowserFrame from "@/components/BrowserFrame";
import TableauEmbed from "@/components/TableauEmbed";
import { tableauConfig } from "@/config";

type Chip = { icon: LucideIcon; label: string };

const STORY_CHIPS: Chip[] = [
  { icon: Globe2, label: "Global Driver Distribution" },
  { icon: MapPin, label: "Country-wise Race Participation" },
  { icon: Trophy, label: "Team Championship Performance" },
  { icon: ShieldCheck, label: "Driver Reliability" },
  { icon: Medal, label: "Podium Achievements" },
  { icon: Disc3, label: "Tyre Compound Usage" },
  { icon: BarChart2, label: "Team Performance Ranking" },
];

export default function StoryEmbed() {
  return (
    <section id="story" className="relative bg-base py-24 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal className="text-center">
          <span className="font-heading text-sm font-700 uppercase tracking-[0.3em] text-f1red">
            Tableau Public Story
          </span>
          <h2 className="mt-3 section-heading">
            Race Intelligence <span className="text-f1red">Story</span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl font-body text-base leading-relaxed text-neutral-400">
            Formula 1 Race Intelligence: From Global Overview to Championship Success.
          </p>
        </Reveal>

        <Reveal delay={120} className="mt-12">
          <BrowserFrame title="F1 Race Intelligence Story" cream>
            <TableauEmbed
              id="storyViz"
              src="https://public.tableau.com/views/F1Visuals/F1RaceIntelligenceStory"
            />
          </BrowserFrame>
        </Reveal>

        {/* Story-point chips */}
        <Reveal delay={80}>
          <div className="mt-10 flex flex-wrap justify-center gap-3">
            {STORY_CHIPS.map((c, i) => {
              const Icon = c.icon;
              return (
                <span
                  key={c.label}
                  className="inline-flex items-center gap-2 rounded-full border border-f1red/25 bg-neutral-900/50 px-4 py-2 font-heading text-xs font-600 uppercase tracking-wide text-neutral-200 transition-colors hover:border-f1red/60 hover:text-white"
                >
                  <span className="font-display text-f1red">{String(i + 1).padStart(2, "0")}</span>
                  <Icon size={14} className="text-f1red" />
                  {c.label}
                </span>
              );
            })}
          </div>
        </Reveal>

        {/* Open in Tableau Public button */}
        <Reveal delay={80}>
          <div className="mt-10 flex justify-center">
            <a
              href={tableauConfig.storyOpenUrl}
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
