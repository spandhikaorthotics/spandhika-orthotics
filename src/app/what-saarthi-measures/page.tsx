import type { Metadata } from "next";
import Link from "next/link";
import { Activity, ArrowRight, Footprints, Grid2x2, Ruler, Scale, ShieldAlert, Timer, type LucideIcon } from "lucide-react";
import { CtaBand, SiteShell } from "@/components/site/SiteChrome";

export const metadata: Metadata = {
  title: "What Saarthi measures",
  description:
    "SAARTHI reads pressure, motion, balance and rhythm inside a thin everyday insole, turning real-world walking into clear insights anyone can understand.",
};

const metrics: { icon: LucideIcon; title: string; text: string }[] = [
  {
    icon: Grid2x2,
    title: "Pressure sensing",
    text: "32 embedded pressure sensors map how your foot loads the ground — from heel strike to toe-off — revealing pressure distribution with every step.",
  },
  {
    icon: Timer,
    title: "Cadence",
    text: "Steps per minute, measured continuously — showing how steady and rhythmic your walking pace stays through the day.",
  },
  {
    icon: Ruler,
    title: "Step & stride length",
    text: "How far each foot travels with every step and full stride — a clear signal of confidence, mobility and recovery progress.",
  },
  {
    icon: Scale,
    title: "Balance",
    text: "Left-to-right load sharing and centre-of-pressure sway, revealing how evenly and steadily you stand and move.",
  },
  {
    icon: ShieldAlert,
    title: "Fall risk",
    text: "Stability, symmetry and step variability combine into a single fall-risk index, flagging changes early.",
  },
  {
    icon: Activity,
    title: "Gait insights",
    text: "Raw pressure and movement data becomes a readable picture of gait — helping identify unusual patterns and changes over time.",
  },
];

const loads = [
  { zone: "Heel", value: 42 },
  { zone: "Midfoot", value: 21 },
  { zone: "Forefoot", value: 37 },
];

/** Compact pressure-map card: insole heat map plus heel/midfoot/forefoot load split. */
function PressureCard() {
  return (
    <div className="mx-auto w-full max-w-[440px] rounded-[1.75rem] bg-white p-5 shadow-[0_30px_60px_-30px_color-mix(in_oklab,var(--primary)_45%,transparent)] ring-1 ring-border/70 sm:p-6">
      <div className="flex items-center justify-between text-[11px] font-semibold uppercase tracking-[0.12em] text-muted-foreground">
        <span>Gait monitor</span>
        <span className="inline-flex items-center gap-1.5 text-primary">
          <span className="h-1.5 w-1.5 rounded-full bg-[var(--brand-green)]" aria-hidden="true" />
          Connected
        </span>
      </div>

      <div className="mt-5 grid grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] items-center gap-5">
        {/* Insole heat map */}
        <div className="rounded-2xl bg-muted px-4 py-5">
          <svg viewBox="0 0 120 260" className="mx-auto h-auto w-full max-w-[120px]" role="img" aria-label="Pressure map of an insole showing high load at the heel and forefoot">
            <defs>
              <clipPath id="insole">
                <path d="M60 8C88 8 104 40 104 84c0 36-12 56-14 86-2 35-4 80-30 82-26-2-30-42-32-80-2-32-12-54-12-88C16 40 32 8 60 8Z" />
              </clipPath>
              <filter id="blur" x="-50%" y="-50%" width="200%" height="200%">
                <feGaussianBlur stdDeviation="9" />
              </filter>
            </defs>
            <g clipPath="url(#insole)">
              <rect width="120" height="260" fill="white" />
              <g filter="url(#blur)">
                <circle cx="62" cy="66" r="32" fill="var(--heat-high)" />
                <circle cx="66" cy="60" r="16" fill="var(--heat-peak)" />
                <circle cx="44" cy="150" r="16" fill="var(--heat-low)" />
                <circle cx="60" cy="214" r="30" fill="var(--heat-high)" />
                <circle cx="60" cy="220" r="16" fill="var(--heat-peak)" />
              </g>
              {Array.from({ length: 8 }).map((_, r) =>
                Array.from({ length: 4 }).map((_, c) => (
                  <circle key={`${r}-${c}`} cx={30 + c * 20} cy={30 + r * 29} r="1.6" fill="var(--primary)" opacity="0.35" />
                )),
              )}
            </g>
            <path
              d="M60 8C88 8 104 40 104 84c0 36-12 56-14 86-2 35-4 80-30 82-26-2-30-42-32-80-2-32-12-54-12-88C16 40 32 8 60 8Z"
              fill="none"
              stroke="var(--border)"
              strokeWidth="2"
            />
          </svg>
          <p className="mt-3 text-center text-[10px] font-semibold uppercase tracking-[0.12em] text-muted-foreground">32-sensor array</p>
        </div>

        {/* Load split */}
        <div>
          <p className="text-[11px] font-semibold uppercase tracking-[0.12em] text-muted-foreground">Pressure load</p>
          <ul className="mt-4 space-y-4">
            {loads.map((l) => (
              <li key={l.zone}>
                <div className="flex items-baseline justify-between text-sm">
                  <span className="font-medium text-foreground">{l.zone}</span>
                  <span className="font-semibold tabular-nums text-primary">{l.value}%</span>
                </div>
                <div className="mt-1.5 h-1.5 overflow-hidden rounded-full bg-muted">
                  <div className="h-full rounded-full bg-primary" style={{ width: `${l.value}%` }} />
                </div>
              </li>
            ))}
          </ul>
          <p className="mt-5 flex items-center gap-1.5 text-xs text-muted-foreground">
            <Footprints className="h-3.5 w-3.5 text-primary" aria-hidden="true" />
            Updated with every step
          </p>
        </div>
      </div>
    </div>
  );
}

export default function WhatSaarthiMeasuresPage() {
  return (
    <SiteShell>
      {/* ── Hero ── */}
      <section className="mx-auto grid max-w-6xl items-center gap-12 px-6 pb-16 pt-12 lg:grid-cols-[1.1fr_1fr] lg:gap-16 lg:px-10 lg:pb-24 lg:pt-20">
        <div>
          <p className="lv-label">What Saarthi measures</p>
          <h1 className="mt-4 text-[38px] font-semibold leading-[1.08] tracking-tight text-primary sm:text-5xl lg:text-[52px]">
            Data from every step, made simple.
          </h1>
          <p className="lv-copy mt-5 max-w-xl">
            SAARTHI reads pressure, motion, balance and rhythm inside a thin everyday insole — turning real-world
            walking into clear insights anyone can understand.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <Link
              href="/#waitlist"
              className="group inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-[15px] font-semibold text-primary-foreground shadow-[0_12px_24px_-12px_color-mix(in_oklab,var(--primary)_70%,transparent)] transition-all hover:-translate-y-0.5"
            >
              Get launch updates
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" aria-hidden="true" />
            </Link>
            <Link
              href="/#how"
              className="inline-flex items-center gap-2 rounded-full border border-border bg-white px-6 py-3 text-[15px] font-medium text-primary transition-colors hover:border-primary"
            >
              See how it works
            </Link>
          </div>
        </div>

        <PressureCard />
      </section>

      {/* ── Metrics ── */}
      <section className="bg-secondary py-16 lg:py-24">
        <div className="mx-auto max-w-6xl px-6 lg:px-10">
          <div className="max-w-2xl">
            <p className="lv-label">Six signals, one insole</p>
            <h2 className="lv-title mt-3">What every step tells you.</h2>
          </div>
          <ol className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {metrics.map(({ icon: Icon, title, text }, i) => (
              <li key={title} className="rounded-2xl bg-white p-7 ring-1 ring-border/70">
                <div className="flex items-center justify-between">
                  <span className="grid h-11 w-11 place-items-center rounded-xl bg-[var(--primary-soft)] text-primary">
                    <Icon className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <span className="text-[13px] font-semibold tabular-nums text-primary/40">{String(i + 1).padStart(2, "0")}</span>
                </div>
                <h3 className="mt-5 text-lg font-semibold text-primary">{title}</h3>
                <p className="mt-2 text-[15px] leading-relaxed text-muted-foreground">{text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* ── Note ── */}
      <section className="mx-auto max-w-3xl px-6 py-16 text-center lg:py-20">
        <p className="text-lg font-medium leading-relaxed text-primary sm:text-xl">
          No lab, no wires, no complicated setup. Just slip SAARTHI into your shoes and walk the way you always do.
        </p>
      </section>

      <CtaBand title="Ready to feel the difference?" text="Join the waitlist for early access and launch pricing." />
    </SiteShell>
  );
}
