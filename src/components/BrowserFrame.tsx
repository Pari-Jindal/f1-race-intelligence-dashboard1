import type { ReactNode } from "react";

/**
 * Browser-window mockup frame used to wrap the Tableau embeds.
 */
export default function BrowserFrame({
  title,
  children,
  cream = false,
}: {
  title: string;
  children: ReactNode;
  cream?: boolean;
}) {
  return (
    <div className="overflow-hidden rounded-xl border border-f1red/25 bg-neutral-900 shadow-red-glow">
      {/* Title bar */}
      <div className="flex items-center gap-3 border-b border-f1red/15 bg-neutral-950 px-4 py-3">
        <div className="flex gap-1.5">
          <span className="h-3 w-3 rounded-full bg-red-500/90" />
          <span className="h-3 w-3 rounded-full bg-yellow-500/80" />
          <span className="h-3 w-3 rounded-full bg-green-500/80" />
        </div>
        <div className="mx-auto flex items-center gap-2 rounded-md bg-base/60 px-3 py-1">
          <span className="h-1.5 w-1.5 rounded-full bg-f1red" />
          <span className="font-heading text-[11px] font-600 uppercase tracking-[0.25em] text-neutral-300 sm:text-xs">
            {title}
          </span>
        </div>
        <div className="w-12 sm:w-16" />
      </div>
      {/* Body */}
      <div className={`relative w-full ${cream ? "bg-[#f4efe6]" : "bg-neutral-950"}`}>
        {children}
      </div>
    </div>
  );
}
