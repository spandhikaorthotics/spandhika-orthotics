"use client";

import { useState } from "react";
import { Activity, Share2, TrendingUp, type LucideIcon } from "lucide-react";
import { montserrat } from "@/lib/fonts";
import BalanceTrend from "./BalanceTrend";

const tabs: { label: string; icon: LucideIcon; copy: string }[] = [
  {
    label: "Daily summary",
    icon: Activity,
    copy: "Your pressure, balance and activity, brought together in a clear daily picture.",
  },
  {
    label: "Balance trends",
    icon: TrendingUp,
    copy: "See how your walking changes over time, rather than relying on a single day's snapshot.",
  },
  {
    label: "Share insights",
    icon: Share2,
    copy: "Bring your walking history into the conversation with your clinician.",
  },
];

const dailyStats = [
  ["Walking balance", "52 : 48", "Left : Right"],
  ["Steps", "8,732", "steps today"],
  ["Foot pressure", "38.2", "kPa"],
];

function PhoneContent({ active }: { active: number }) {
  if (active === 0) {
    return (
      <>
        <h3 className="mt-5 text-2xl font-semibold text-primary">Daily summary</h3>
        <p className="mt-3 text-sm text-muted-foreground">Today · 2:34 PM</p>
        <div className="mt-6 divide-y divide-border">
          {dailyStats.map(([label, value, unit]) => (
            <div key={label} className="py-4">
              <p className="text-sm text-muted-foreground">{label}</p>
              <p className="mt-1 text-2xl font-semibold text-primary">{value}</p>
              <p className="mt-1 text-sm text-muted-foreground">{unit}</p>
            </div>
          ))}
        </div>
        <span className="spx-tag mt-4">Illustrative readings</span>
      </>
    );
  }

  if (active === 1) {
    return (
      <>
        <h3 className="mt-5 text-2xl font-semibold text-primary">Your balance</h3>
        <p className="mt-3 text-[17px] text-muted-foreground">A week at a glance</p>
        <div className="mt-10">
          <BalanceTrend />
        </div>
        <p className="mt-8 text-[17px] leading-relaxed text-muted-foreground">
          Notice patterns. Follow changes over time.
        </p>
      </>
    );
  }

  return (
    <>
      <h3 className="mt-5 text-2xl font-semibold text-primary">Your walking report</h3>
      <Share2 className="mx-auto my-10 h-14 w-14 text-primary" aria-hidden="true" />
      <div className="divide-y divide-border">
        {["Foot pressure", "Balance history", "Walking patterns"].map((item) => (
          <p key={item} className="py-4 text-[17px] text-foreground">
            {item}
          </p>
        ))}
      </div>
      <p className="mt-5 text-sm text-muted-foreground">A clearer conversation about your care.</p>
    </>
  );
}

export default function AppPreview() {
  const [active, setActive] = useState(0);

  return (
    <section id="app" className={`${montserrat.className} lv-theme app-band scroll-mt-24 py-16 lg:py-20`}>
      <div className="mx-auto grid max-w-7xl items-center gap-10 px-6 lg:grid-cols-2 lg:gap-20 lg:px-10">
        <div>
          <p className="lv-label">The Saarthi app</p>
          <h2 className="lv-title mt-3">
            Your steps.
            <br />
            A clearer picture.
          </h2>
          <p className="lv-copy mt-5 max-w-lg">
            Make sense of your everyday walking, without making your day more complicated.
          </p>

          <div className="mt-8 flex flex-col gap-2" role="tablist" aria-label="App views">
            {tabs.map((tab, i) => {
              const Icon = tab.icon;
              const selected = active === i;
              return (
                <button
                  key={tab.label}
                  id={`app-tab-${i}`}
                  type="button"
                  role="tab"
                  aria-selected={selected}
                  aria-controls="app-panel"
                  onClick={() => setActive(i)}
                  className={`inline-flex h-14 cursor-pointer items-center justify-start gap-4 rounded-lg px-4 text-[17px] font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-white ${
                    selected ? "bg-[var(--primary-soft)] text-primary" : ""
                  }`}
                >
                  <Icon className="h-4 w-4 shrink-0" aria-hidden="true" />
                  {tab.label}
                </button>
              );
            })}
          </div>

          <p key={active} className="lv-copy lv-swap mt-6 max-w-lg">
            {tabs[active].copy}
          </p>
        </div>

        <div
          id="app-panel"
          role="tabpanel"
          aria-labelledby={`app-tab-${active}`}
          className="flex min-h-[420px] flex-col items-center justify-center"
        >
          <div className="phone-preview">
            <span className="phone-speaker" aria-hidden="true" />
            <p className="mt-8 text-sm font-semibold text-primary">SAARTHI</p>
            <div key={active} className="lv-swap">
              <PhoneContent active={active} />
            </div>
          </div>
          <p className="mt-5 text-sm">Illustrative app preview</p>
        </div>
      </div>
    </section>
  );
}
