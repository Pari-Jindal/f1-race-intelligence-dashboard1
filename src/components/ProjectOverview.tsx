import { CheckCircle2, Database, Globe2, LineChart, ShieldCheck, Trophy } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import Reveal from "@/components/Reveal";
import AnimatedRaceTrack from "@/components/AnimatedRaceTrack";

type Feature = { icon: LucideIcon; title: string; desc: string };

const FEATURES: Feature[] = [
  { icon: Globe2, title: "Global Race Overview", desc: "Every circuit mapped with participation and outcome data." },
  { icon: Trophy, title: "Driver Performance Metrics", desc: "Points, podiums, poles and reliability per driver." },
  { icon: ShieldCheck, title: "Constructor Championship Battle", desc: "Team-by-team points progression across seasons." },
  { icon: Database, title: "DNF and Reliability Analysis", desc: "Failure reasons, frequency and team reliability trends." },
  { icon: LineChart, title: "Championship Success Prediction", desc: "Models projecting the eventual championship winner." },
];

const TECH_TAGS = ["Tableau Public", "Flask", "Python", "SQL", "F1 Dataset"];

export default function ProjectOverview() {
  return (
    <section id="project" className="relative bg-base py-24 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Left: animated race track card */}
          <Reveal>
            <div className="card-glow overflow-hidden p-1.5">
              <div className="rounded-lg bg-neutral-950/60 p-6">
                <AnimatedRaceTrack />
              </div>
            </div>
          </Reveal>

          {/* Right: copy */}
          <Reveal delay={120}>
            <div>
              <span className="font-heading text-sm font-700 uppercase tracking-[0.3em] text-f1red">
                Project Overview
              </span>
              <h2 className="mt-4 section-heading leading-tight">
                Transforming F1 Data Into
                <span className="text-f1red"> Championship Intelligence</span>
              </h2>
              <p className="mt-5 font-body text-base leading-relaxed text-neutral-300">
                This project leverages rich historical and race data from Formula 1 to build a
                comprehensive analytics platform. Using Tableau's powerful visualization engine, we
                transform raw race data into actionable insights for fans, analysts, and
                strategists.
              </p>

              <ul className="mt-8 space-y-4">
                {FEATURES.map((f) => {
                  const Icon = f.icon;
                  return (
                    <li key={f.title} className="flex gap-3.5">
                      <CheckCircle2 size={20} className="mt-0.5 shrink-0 text-f1red" />
                      <div>
                        <div className="flex items-center gap-2">
                          <Icon size={16} className="text-f1red/80" />
                          <span className="font-heading text-sm font-700 uppercase tracking-wide text-white">
                            {f.title}
                          </span>
                        </div>
                        <p className="mt-0.5 text-sm leading-relaxed text-neutral-400">{f.desc}</p>
                      </div>
                    </li>
                  );
                })}
              </ul>

              <div className="mt-8 flex flex-wrap gap-2.5">
                {TECH_TAGS.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-f1red/30 bg-f1red/5 px-3.5 py-1.5 font-heading text-xs font-600 uppercase tracking-wider text-neutral-200"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <a href="#dashboard" className="mt-8 inline-flex">
                <span className="btn-race-primary">Explore Dashboard</span>
              </a>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
