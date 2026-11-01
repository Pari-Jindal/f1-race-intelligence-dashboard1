import { useState } from "react";
import type { FormEvent } from "react";
import { CheckCircle2, Mail, MapPin, Send, Twitter, Github, Linkedin } from "lucide-react";
import Reveal from "@/components/Reveal";

export default function ContactFooter() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setForm({ name: "", email: "", message: "" });
    setTimeout(() => setSubmitted(false), 4000);
  };

  return (
    <>
      {/* Contact */}
      <section id="contact" className="relative bg-base py-24 sm:py-28">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-2 lg:gap-16">
            {/* Left: copy */}
            <Reveal>
              <span className="font-heading text-sm font-700 uppercase tracking-[0.3em] text-f1red">
                Get in Touch
              </span>
              <h2 className="mt-4 section-heading leading-tight">
                Questions about the <span className="text-f1red">Dashboard?</span>
              </h2>
              <p className="mt-5 max-w-md font-body text-base leading-relaxed text-neutral-300">
                Whether you want to dig deeper into the analytics, discuss the methodology, or
                suggest a new dimension to explore, drop a message below.
              </p>

              <div className="mt-8 space-y-4">
                <div className="flex items-center gap-3 text-neutral-300">
                  <Mail size={18} className="text-f1red" />
                  <span className="text-sm">hello@f1raceintelligence.dev</span>
                </div>
                <div className="flex items-center gap-3 text-neutral-300">
                  <MapPin size={18} className="text-f1red" />
                  <span className="text-sm">Paddock · Anywhere on the grid</span>
                </div>
              </div>
            </Reveal>

            {/* Right: form */}
            <Reveal delay={120}>
              <form
                onSubmit={onSubmit}
                className="rounded-xl border border-f1red/20 bg-neutral-900/60 p-6 sm:p-8"
              >
                <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                  <Field
                    label="Name"
                    id="name"
                    type="text"
                    value={form.name}
                    onChange={(v) => setForm((f) => ({ ...f, name: v }))}
                    placeholder="Ayrton Senna"
                    required
                  />
                  <Field
                    label="Email"
                    id="email"
                    type="email"
                    value={form.email}
                    onChange={(v) => setForm((f) => ({ ...f, email: v }))}
                    placeholder="you@example.com"
                    required
                  />
                </div>
                <div className="mt-5">
                  <label
                    htmlFor="message"
                    className="mb-1.5 block font-heading text-xs font-600 uppercase tracking-widest text-neutral-300"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    required
                    value={form.message}
                    onChange={(e) => setForm((f) => ({ ...f, message: e.target.value }))}
                    placeholder="Tell me what you'd like to explore..."
                    className="w-full resize-none rounded-lg border border-f1red/20 bg-base/60 px-4 py-3 text-sm text-white placeholder:text-neutral-600 focus:border-f1red focus:outline-none focus:ring-1 focus:ring-f1red"
                  />
                </div>

                <button type="submit" className="mt-6 inline-flex w-full justify-center btn-race-primary sm:w-auto">
                  {submitted ? (
                    <>
                      <CheckCircle2 size={16} /> Message Sent
                    </>
                  ) : (
                    <>
                      Send Message <Send size={15} />
                    </>
                  )}
                </button>

                {submitted && (
                  <p className="mt-3 text-sm text-f1red">
                    Thanks — your message has been recorded (front-end demo).
                  </p>
                )}
                <p className="mt-3 text-xs text-neutral-500">
                  Front-end only: this form does not store data yet.
                </p>
              </form>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-f1red/20 bg-base">
        <div className="mx-auto max-w-7xl px-5 py-12 sm:px-8">
          <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
            <div className="flex items-center gap-3">
              <span className="flex h-8 w-9 items-center justify-center rounded-md bg-f1red font-display text-sm font-900 text-white">
                F1
              </span>
              <span className="font-heading text-sm font-700 uppercase tracking-[0.2em] text-white">
                F1 Race Intelligence Dashboard
              </span>
            </div>

            <div className="flex items-center gap-3">
              {[
                { Icon: Twitter, label: "Twitter" },
                { Icon: Github, label: "GitHub" },
                { Icon: Linkedin, label: "LinkedIn" },
              ].map(({ Icon, label }) => (
                <a
                  key={label}
                  href="#"
                  aria-label={label}
                  className="flex h-10 w-10 items-center justify-center rounded-lg border border-f1red/20 bg-neutral-900/50 text-neutral-300 transition-all hover:border-f1red/60 hover:text-f1red"
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          <div className="mt-6 h-px w-full bg-gradient-to-r from-transparent via-f1red/40 to-transparent" />

          <div className="mt-6 flex flex-col items-center justify-between gap-3 text-center md:flex-row md:text-left">
            <p className="font-heading text-xs font-600 uppercase tracking-widest text-neutral-400">
              F1 Race Intelligence Dashboard | Built with Tableau &amp; Flask
            </p>
            <p className="max-w-md text-xs text-neutral-500">
              This is an educational analytics project and is not affiliated with Formula 1.
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}

function Field({
  label,
  id,
  type,
  value,
  onChange,
  placeholder,
  required,
}: {
  label: string;
  id: string;
  type: string;
  value: string;
  onChange: (v: string) => void;
  placeholder: string;
  required?: boolean;
}) {
  return (
    <div>
      <label htmlFor={id} className="mb-1.5 block font-heading text-xs font-600 uppercase tracking-widest text-neutral-300">
        {label}
      </label>
      <input
        id={id}
        type={type}
        required={required}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className="w-full rounded-lg border border-f1red/20 bg-base/60 px-4 py-3 text-sm text-white placeholder:text-neutral-600 focus:border-f1red focus:outline-none focus:ring-1 focus:ring-f1red"
      />
    </div>
  );
}
