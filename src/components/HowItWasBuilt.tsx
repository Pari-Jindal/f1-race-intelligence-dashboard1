import { Database, Wand2, BarChart3, LayoutDashboard, BookOpen, Gauge, Globe2 } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import Reveal from "@/components/Reveal";
import { useInView } from "@/hooks/useInView";

type Step = { icon: LucideIcon; title: string; desc: string };

const STEPS: Step[] = [
  { icon: Database, title: "Data Collection & Extraction", desc: "Pulled historical and race data from the F1 dataset via SQL queries." },
  { icon: Wand2, title: "Data Preparation", desc: "Cleaned, shaped and enriched the dataset in Python for analysis." },
  { icon: BarChart3, title: "Data Visualization", desc: "Designed individual charts and analytical views in Tableau." },
  { icon: LayoutDashboard, title: "Dashboard", desc: "Assembled the interactive multi-sheet Race Intelligence dashboard." },
  { icon: BookOpen, title: "Story", desc: "Sequenced visual story points from global overview to championship success." },
  { icon: Gauge, title: "Performance Testing", desc: "Validated filters, parameters and load behaviour for smooth interactivity." },
  { icon: Globe2, title: "Web Integration", desc: "Embedded Tableau Public in a Flask-powered web app for public access." },
];

export default function HowItWasBuilt() {
  const { ref, inView } = useInView<HTMLDivElement>({ threshold: 0.2 });

  return (
    <section className="relative bg-base py-24 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal className="text-center">
          <span className="font-heading text-sm font-700 uppercase tracking-[0.3em] text-f1red">
            Workflow
          </span>
          <h2 className="mt-3 section-heading">
            How It Was <span className="text-f1red">Built</span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl font-body text-base leading-relaxed text-neutral-400">
            Seven steps from raw race data to a live, web-embedded analytics experience.
          </p>
        </Reveal>

        {/* Timeline */}
        <div ref={ref} className="relative mt-16">
          {/* Center spine (desktop) */}
          <div className="absolute left-1/2 top-0 hidden h-full w-px -translate-x-1/2 bg-gradient-to-b from-transparent via-f1red/40 to-transparent lg:block" />

          <ol className="flex flex-col gap-8 lg:gap-0">
            {STEPS.map((step, i) => {
              const Icon = step.icon;
              const left = i % 2 === 0;
              return (
                <li key={step.title} className="relative lg:grid lg:grid-cols-2 lg:gap-12">
                  {/* Node dot on the spine (desktop) */}
                  <span
                    className={`absolute left-1/2 top-7 z-10 hidden h-4 w-4 -translate-x-1/2 rounded-full border-2 border-f1red bg-base lg:block ${
                      inView ? "animate-pulse-red" : ""
                    }`}
                  />

                  {/* Mobile: index badge */}
                  <div className="flex items-center gap-3 lg:hidden">
                    <span className="flex h-9 w-9 items-center justify-center rounded-full bg-f1red font-display text-sm font-900 text-white">
                      {i + 1}
                    </span>
                    <span className="font-heading text-xs font-700 uppercase tracking-widest text-f1red">
                      Step {i + 1}
                    </span>
                  </div>

                  <Reveal
                    delay={60}
                    className={left ? "lg:pr-8 lg:text-right" : "lg:col-start-2 lg:pl-8"}
                  >
                    <div className="card-glow group mt-3 p-6 lg:mt-0 lg:[&_.icon-row]:flex-row-reverse">
                      <div className="icon-row flex items-center gap-3">
                        <div className="flex h-12 w-12 items-center justify-center rounded-lg border border-f1red/30 bg-f1red/10 text-f1red transition-all group-hover:shadow-red-glow">
                          <Icon size={24} />
                        </div>
                        <div className="flex items-center gap-2 lg:hidden">
                          <span className="font-display text-2xl font-900 text-f1red/30">
                            {String(i + 1).padStart(2, "0")}
                          </span>
                        </div>
                      </div>
                      <div className="mt-4">
                        <div className="hidden font-display text-3xl font-900 text-f1red/15 lg:block">
                          {String(i + 1).padStart(2, "0")}
                        </div>
                        <h3 className="font-heading text-lg font-700 uppercase tracking-wide text-white">
                          {step.title}
                        </h3>
                        <p className="mt-1.5 text-sm leading-relaxed text-neutral-400">{step.desc}</p>
                      </div>
                    </div>
                  </Reveal>
                </li>
              );
            })}
          </ol>
        </div>
      </div>
    </section>
  );
}
