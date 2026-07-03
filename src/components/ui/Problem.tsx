"use client";

import { useState, useEffect, useRef, ReactNode } from "react";

// --- Hooks ---

function useInView<T extends HTMLElement>() {
  const ref = useRef<T | null>(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => { for (const e of entries) { if (e.isIntersecting) { setInView(true); io.disconnect(); break; } } },
      { threshold: 0.12, rootMargin: "0px 0px -60px 0px" }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);
  return { ref, inView };
}

function Reveal({ children, className = "", delay, stagger = false, as = "div" }: {
  children: ReactNode; className?: string; delay?: number; stagger?: boolean; as?: "div" | "ul" | "section";
}) {
  const { ref, inView } = useInView<HTMLElement>();
  const Tag = as as any;
  return (
    <Tag ref={ref} className={`${stagger ? "stagger" : "reveal"} ${inView ? "is-visible" : ""} ${className}`}
      style={delay != null ? { transitionDelay: `${delay}ms` } : undefined}>
      {children}
    </Tag>
  );
}

function Eyebrow({ children }: { children: ReactNode }) {
  return (
    <div className="inline-flex items-center gap-2 label-caps text-[var(--on-surface-variant)]">
      <span className="h-px w-6 bg-[var(--tertiary-fixed-dim)]" />
      {children}
    </div>
  );
}

// --- Icons ---

const icons = {
  heel: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
      <path d="M12 2C8 2 5 5 5 9c0 2.5 1 4.5 2.5 6L9 17h6l1.5-2c1.5-1.5 2.5-3.5 2.5-6 0-4-3-7-7-7z" />
      <path d="M9 17v2a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2v-2" />
      <circle cx="12" cy="9" r="2" />
    </svg>
  ),
  fatigue: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
      <circle cx="12" cy="12" r="9" />
      <polyline points="12 7 12 12 15 15" />
      <path d="M7 12h1M16 12h1M12 7v1" />
    </svg>
  ),
  wear: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
      <path d="M4 12h16M4 12l4-4M4 12l4 4M20 12l-4-4M20 12l-4 4" />
    </svg>
  ),
  back: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
      <path d="M12 2v10M12 12c-2 2-4 3-4 6a4 4 0 0 0 8 0c0-3-2-4-4-6z" />
      <path d="M9 7c-1.5.5-3 2-3 4M15 7c1.5.5 3 2 3 4" />
    </svg>
  ),
};

// --- Data ---

const signs = [
  {
    icon: "heel" as keyof typeof icons,
    title: "Heel pain after waking up",
    body: "That first painful step in the morning is often plantar fasciitis — and it doesn't fix itself.",
    details: "The plantar fascia tightens overnight; the first weight-bearing steps re-stretch inflamed tissue, causing sharp heel pain.",
    causes: ["Poor arch support", "Long standing hours", "Sudden activity spikes"],
    helps: "Deep heel cup, contoured medial arch, and shock-absorbing forefoot pad to redistribute load.",
  },
  {
    icon: "fatigue" as keyof typeof icons,
    title: "Foot fatigue after long hours",
    body: "Burning, aching, heavy feet after work or a long day on your feet is a signal — not normal.",
    details: "Repetitive standing without cushioning overloads the metatarsals and intrinsic foot muscles, reducing circulation.",
    causes: ["Hard floors", "Flat shoe insoles", "Poor pressure distribution"],
    helps: "Energy-return foam plus a 32-zone pressure map that balances load across the whole footprint.",
  },
  {
    icon: "wear" as keyof typeof icons,
    title: "Uneven shoe wear",
    body: "If one shoe wears down faster, your weight distribution is off — and your body is compensating.",
    details: "Asymmetric wear patterns reveal overpronation, supination, or a leg-length discrepancy.",
    causes: ["Overpronation", "Supination", "Leg-length difference"],
    helps: "Adaptive arch support and a carbon stability plate that re-centers the strike pattern.",
  },
  {
    icon: "back" as keyof typeof icons,
    title: "Knee or lower back discomfort",
    body: "Pain that feels unrelated often starts at the ground. Your feet are the foundation of every step.",
    details: "Misaligned feet rotate the tibia and femur subtly with every step, becoming chronic knee or lumbar strain.",
    causes: ["Collapsed arches", "Heel-strike imbalance", "Poor shock absorption"],
    helps: "Posture-aware support that aligns the foot, shin, and hip through a neutral gait cycle.",
  },
];

// --- Card ---

function SignCard({ sign, index }: { sign: typeof signs[number]; index: number }) {
  const [open, setOpen] = useState(false);

  return (
    <div className={`
    group relative flex flex-col h-full rounded-3xl p-6 sm:p-7
    bg-[color-mix(in_oklab,var(--card)_80%,transparent)]
    backdrop-blur-md border border-[var(--outline-variant)]/50
    hover-lift overflow-hidden transition-all duration-300
    ${open ? "shadow-2xl border-[var(--primary)]/20" : "shadow-sm"}
    `}>

      {/* Index */}
      <div className="absolute top-5 right-5 label-caps text-[var(--on-surface-variant)]/40 text-[10px] tracking-[0.25em]">
        0{index + 1}
      </div>

      {/* Icon bubble */}
      <div className="relative w-12 h-12 rounded-2xl flex items-center justify-center transition-all duration-500 group-hover:scale-110"
        style={{ background: "color-mix(in oklab, var(--secondary-container) 80%, var(--tertiary-fixed) 20%)", color: "var(--primary)" }}>
        {icons[sign.icon]}
      </div>

      {/* Title */}
      <h3 className="mt-5 text-[17px] sm:text-[18px] font-semibold leading-snug text-[var(--primary)]">
        {sign.title}
      </h3>

      {/* Body */}
      <p className="mt-2.5 text-[14px] sm:text-[15px] text-[var(--on-surface-variant)] leading-relaxed flex-1">
        {sign.body}
      </p>

      {/* Accordion */}
      <div
        className="grid transition-all duration-500 ease-out"
        style={{ gridTemplateRows: open ? "1fr" : "0fr", opacity: open ? 1 : 0, marginTop: open ? "1rem" : 0 }}
      >
        <div className="overflow-hidden">
          <div className="rounded-2xl p-4 text-[13px] leading-relaxed space-y-3"
            style={{ background: "color-mix(in oklab, var(--secondary-container) 50%, transparent)", border: "1px solid color-mix(in oklab, var(--outline-variant) 40%, transparent)", color: "var(--on-surface-variant)" }}>
            <p>{sign.details}</p>
            <div>
              <div className="label-caps mb-2" style={{ color: "color-mix(in oklab, var(--primary) 70%, transparent)", fontSize: "10px" }}>Common causes</div>
              <ul className="flex flex-wrap gap-1.5">
                {sign.causes.map((c) => (
                  <li key={c} className="text-[11px] rounded-full px-2.5 py-1"
                    style={{ background: "var(--card)", border: "1px solid color-mix(in oklab, var(--outline-variant) 60%, transparent)", color: "var(--primary)" }}>
                    {c}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <div className="label-caps mb-1" style={{ color: "color-mix(in oklab, var(--primary) 70%, transparent)", fontSize: "10px" }}>How SAARTHI helps</div>
              <p style={{ color: "var(--on-surface)" }}>{sign.helps}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Divider with fill animation */}
      <div className="mt-5 h-px overflow-hidden" style={{ background: "color-mix(in oklab, var(--outline-variant) 60%, transparent)" }}>
        <div className={`h-full transition-[width] duration-700 ease-out`}
          style={{
            width: open ? "100%" : "0%",
            background: "linear-gradient(to right, var(--primary), var(--tertiary-fixed-dim))",
          }}
        />
      </div>

      {/* Footer */}
      <div className="mt-4 flex items-center justify-between">
        <span className="label-caps text-[10px]" style={{ color: "var(--on-surface-variant)" }}>
          {open ? "Hide details" : "Early signal"}
        </span>
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Collapse" : "Expand"}
          className="inline-flex items-center justify-center w-8 h-8 rounded-full transition-all duration-300"
          style={{
            background: open ? "var(--primary)" : "color-mix(in oklab, var(--primary) 8%, transparent)",
            color: open ? "white" : "var(--primary)",
          }}
        >
          <svg
            viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
            strokeLinecap="round" strokeLinejoin="round"
            className="w-4 h-4 transition-transform duration-300"
            style={{ transform: open ? "rotate(180deg)" : "rotate(0deg)" }}
          >
            <polyline points="6 9 12 15 18 9" />
          </svg>
        </button>
      </div>
    </div>
  );
}

// --- Main ---

export default function Problem() {
  return (
    <section id="problem" className="scroll-mt-20 sm:scroll-mt-24 py-12 sm:py-16 lg:py-24 relative overflow-hidden">

      <div className="blob bg-[var(--secondary-container)] w-[420px] h-[420px] -top-32 -left-24 opacity-60" />
      <div className="blob bg-[var(--tertiary-fixed-dim)] w-[360px] h-[360px] bottom-0 -right-24 opacity-40" style={{ animationDelay: "3s" }} />

      <div className="mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8 relative">

        <Reveal>
          <div className="max-w-2xl">
            <Eyebrow>The signs</Eyebrow>
            <h2 className="mt-4 text-[28px] sm:text-4xl lg:text-5xl font-semibold tracking-tight text-[var(--primary)]">
              You might be ignoring{" "}
              <span className="text-gradient-primary">the signs.</span>
            </h2>
            <p className="mt-5 text-[var(--on-surface-variant)] text-[15px] sm:text-lg leading-relaxed">
              Small discomforts are usually the first chapter of a bigger story. Here's what your feet might be trying to tell you.
            </p>
          </div>
        </Reveal>

        <Reveal stagger className="mt-10 sm:mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 items-stretch">
          {signs.map((s, i) => (
            <SignCard key={s.title} sign={s} index={i} />
          ))}
        </Reveal>

      </div>
    </section>
  );
}