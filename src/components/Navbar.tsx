import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

const NAV_LINKS = [
  { label: "Home", href: "#home" },
  { label: "Project", href: "#project" },
  { label: "Dashboard", href: "#dashboard" },
  { label: "Story", href: "#story" },
  { label: "Insights", href: "#insights" },
  { label: "Drivers", href: "#drivers" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const close = () => setOpen(false);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "border-b border-f1red/20 bg-base/80 backdrop-blur-md shadow-[0_4px_30px_-12px_rgba(225,6,0,0.35)]"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5 sm:px-8">
        {/* Left: F1 badge + brand */}
        <a href="#home" onClick={close} className="flex items-center gap-3">
          <span className="flex h-8 w-9 items-center justify-center rounded-md bg-f1red font-display text-sm font-900 text-white shadow-red-glow">
            F1
          </span>
          <span className="font-heading text-sm font-700 uppercase tracking-[0.2em] text-white sm:text-base">
            Race Intelligence
          </span>
        </a>

        {/* Center: links (desktop) */}
        <ul className="hidden items-center gap-7 lg:flex">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="group relative font-heading text-[13px] font-600 uppercase tracking-widest text-neutral-300 transition-colors hover:text-white"
              >
                {link.label}
                <span className="absolute -bottom-1.5 left-0 h-px w-0 bg-f1red transition-all duration-300 group-hover:w-full" />
              </a>
            </li>
          ))}
        </ul>

        {/* Right: contact button */}
        <a href="#contact" onClick={close} className="hidden lg:inline-flex">
          <span className="btn-race-primary">Contact</span>
        </a>

        {/* Mobile toggle */}
        <button
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          className="text-white lg:hidden"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile menu */}
      {open && (
        <div className="border-t border-f1red/20 bg-base/95 backdrop-blur-md lg:hidden">
          <ul className="flex flex-col gap-1 px-5 py-4">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={close}
                  className="block rounded-md px-3 py-2.5 font-heading text-sm font-600 uppercase tracking-widest text-neutral-200 transition-colors hover:bg-f1red/10 hover:text-white"
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li>
              <a
                href="#contact"
                onClick={close}
                className="mt-2 block rounded-md bg-f1red px-3 py-2.5 text-center font-heading text-sm font-700 uppercase tracking-widest text-white"
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
