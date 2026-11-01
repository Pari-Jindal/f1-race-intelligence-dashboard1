/**
 * Convenience wrapper that applies the `reveal`/`is-visible` classes
 * (defined in index.css) via the useInView hook.
 */
import type { ReactNode } from "react";
import { useInView } from "@/hooks/useInView";

type RevealProps = {
  children: ReactNode;
  className?: string;
  /** Stagger delay in ms */
  delay?: number;
  as?: "div" | "section" | "li" | "span";
};

export default function Reveal({ children, className = "", delay = 0, as = "div" }: RevealProps) {
  const { ref, inView } = useInView<HTMLDivElement>();
  const Tag = as;
  return (
    <Tag
      ref={ref as never}
      className={`reveal ${inView ? "is-visible" : ""} ${className}`}
      style={delay ? { transitionDelay: `${delay}ms` } : undefined}
    >
      {children}
    </Tag>
  );
}
