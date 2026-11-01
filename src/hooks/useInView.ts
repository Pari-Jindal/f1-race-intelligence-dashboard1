import { useEffect, useRef, useState } from "react";

/**
 * Reveal-on-scroll hook. Returns a ref to attach to an element; the element
 * becomes "visible" once it enters the viewport. A single observer is created
 * per element and disconnects after the first reveal.
 *
 * @param options.threshold  IntersectionObserver threshold (0..1).
 * @param options.once       If true (default), reveal only once then stop observing.
 */
export function useInView<T extends HTMLElement = HTMLDivElement>(
  options: { threshold?: number; rootMargin?: string; once?: boolean } = {}
) {
  const { threshold = 0.18, rootMargin = "0px 0px -10% 0px", once = true } = options;
  const ref = useRef<T | null>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    if (typeof IntersectionObserver === "undefined") {
      setInView(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          if (once) observer.disconnect();
        } else if (!once) {
          setInView(false);
        }
      },
      { threshold, rootMargin }
    );
    observer.observe(node);

    // Safety net: if the observer never fires (e.g. element is already
    // fully in view on load, or the browser throttles), force visible
    // after 800ms so content is never permanently stuck at opacity 0.
    const fallback = window.setTimeout(() => setInView(true), 800);

    return () => {
      observer.disconnect();
      window.clearTimeout(fallback);
    };
  }, [threshold, rootMargin, once]);

  return { ref, inView };
}

/**
 * Count-up hook: animates from `from` to `target` when `active` becomes true.
 * Handles decimals (e.g. 7.5) and suffixes/prefixes handled by the caller.
 */
export function useCountUp(target: number, active: boolean, durationMs = 1800) {
  const [value, setValue] = useState(0);
  const startedRef = useRef(false);

  useEffect(() => {
    if (!active || startedRef.current) return;
    startedRef.current = true;

    const isFloat = !Number.isInteger(target);
    let raf = 0;
    const start = performance.now();
    const tick = (now: number) => {
      const progress = Math.min((now - start) / durationMs, 1);
      // easeOutExpo for a punchy finish
      const eased = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
      const current = target * eased;
      setValue(isFloat ? Math.round(current * 10) / 10 : Math.round(current));
      if (progress < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [active, target, durationMs]);

  return value;
}
