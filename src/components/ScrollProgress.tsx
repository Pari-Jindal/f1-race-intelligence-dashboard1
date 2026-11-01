import { useEffect, useState } from "react";

/** Thin red scroll-progress bar fixed at the very top of the page. */
export default function ScrollProgress() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(docHeight > 0 ? (scrollTop / docHeight) * 100 : 0);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="fixed inset-x-0 top-0 z-[60] h-1 bg-transparent">
      <div
        className="h-full bg-gradient-to-r from-f1red-700 via-f1red to-f1red-400 shadow-[0_0_10px_rgba(225,6,0,0.7)] transition-[width] duration-100"
        style={{ width: `${progress}%` }}
      />
    </div>
  );
}
