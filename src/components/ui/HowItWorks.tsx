import Image from "next/image";
import { montserrat } from "@/lib/fonts";
import BalanceTrend from "./BalanceTrend";

type Heat = "empty" | "low" | "medium" | "high" | "peak";

// 8 rows × 5 columns, read left-to-right, top-to-bottom.
const pressureMap: Heat[] = [
  "empty", "medium", "medium", "medium", "empty",
  "low", "high", "peak", "high", "low",
  "medium", "peak", "peak", "high", "medium",
  "low", "medium", "high", "medium", "low",
  "low", "low", "medium", "low", "low",
  "low", "medium", "medium", "medium", "low",
  "medium", "high", "peak", "high", "low",
  "low", "high", "high", "medium", "low",
];

const liveBars = [35, 72, 49, 86, 63, 40, 77, 54, 91, 68, 45, 82, 59, 36, 73, 50, 87, 64, 41, 78, 55, 92];

function WindowDots() {
  return (
    <div className="flex h-4 items-center gap-1 bg-foreground pl-2">
      {[0, 1, 2].map((i) => (
        <span key={i} className="h-1.5 w-1.5 rounded-full bg-background/80" />
      ))}
    </div>
  );
}

function SensorPreview() {
  return (
    <div className="relative mt-6 h-40 sm:h-44" aria-hidden="true">
      {/* Pressure map window */}
      <div className="absolute left-2 top-4 w-[58%] overflow-hidden rounded-lg border-4 border-background shadow-xl">
        <WindowDots />
        <div className="h-24 bg-secondary p-1.5">
          <p className="mb-1 text-[0.4rem] font-bold uppercase tracking-widest text-muted-foreground">
            Pressure map · Right
          </p>
          <div className="grid grid-cols-5 gap-[2px]">
            {pressureMap.map((h, i) => (
              <span
                key={i}
                className="h-[8px] rounded-[2px]"
                style={{ backgroundColor: `var(--heat-${h})` }}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Live pressure window */}
      <div className="absolute left-[28%] top-10 w-[58%] overflow-hidden rounded-lg border-4 border-background shadow-2xl">
        <WindowDots />
        <div className="h-24 bg-background p-2">
          <div className="flex items-baseline justify-between">
            <p className="text-[0.4rem] font-bold uppercase tracking-widest text-muted-foreground">
              Live pressure
            </p>
            <span className="flex items-center gap-1 text-[0.4rem] font-semibold text-primary">
              <span className="h-1 w-1 rounded-full bg-primary" />
              measuring
            </span>
          </div>
          <p className="mt-0.5 text-base font-bold leading-none text-primary">38.2 kPa</p>
          <div className="mt-1.5 flex h-8 items-end gap-[2px]">
            {liveBars.map((h, i) => (
              <span key={i} className="flex-1 rounded-sm bg-primary" style={{ height: `${h}%` }} />
            ))}
          </div>
          <div className="mt-1.5 flex gap-1.5">
            {[
              ["Heel", "42%"],
              ["Arch", "23%"],
              ["Toe", "35%"],
            ].map(([label, value]) => (
              <div key={label} className="flex-1 rounded bg-secondary/70 px-1 py-0.5">
                <p className="text-[0.35rem] uppercase tracking-widest text-muted-foreground">{label}</p>
                <p className="text-[0.5rem] font-bold text-foreground">{value}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default function HowItWorks() {
  return (
    <section id="how" className={`${montserrat.className} lv-theme scroll-mt-24 py-16 lg:py-20`}>
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <p className="lv-label">How it works</p>
        <h2 className="lv-title mt-3">Three steps. Nothing complicated.</h2>
        <p className="lv-copy mt-4 max-w-2xl">
          Everyday support, with technology quietly in the background.
        </p>

        <div className="mt-10 grid gap-5 md:grid-cols-3">
          <article className="feature-card flex flex-col">
            <p className="lv-label">01 · Slip it in</p>
            <h3 className="mt-4 text-2xl font-semibold text-primary">Your shoes. Smarter steps.</h3>
            <p className="lv-copy mt-3">
              Fits inside the shoes you already wear, with support where your feet need it.
            </p>
            <div className="relative mt-auto h-48 pt-5">
              <Image
                src="/insole-sliding.png"
                alt="Saarthi smart insole sliding into a shoe"
                fill
                sizes="(min-width: 768px) 30vw, 90vw"
                className="object-contain"
              />
            </div>
          </article>

          <article className="feature-card flex flex-col">
            <p className="lv-label">02 · Walk normally</p>
            <h3 className="mt-4 text-2xl font-semibold text-primary">Saarthi listens to your feet.</h3>
            <p className="lv-copy mt-3">
              Built-in sensors read your pressure and movement as you go about your day.
            </p>
            <div className="mt-auto">
              <SensorPreview />
            </div>
          </article>

          <article className="feature-card flex flex-col">
            <p className="lv-label">03 · Track your progress</p>
            <h3 className="mt-4 text-2xl font-semibold text-primary">See the bigger picture.</h3>
            <p className="lv-copy mt-3">
              Review changes in the Saarthi app and share your walking insights with your clinician.
            </p>
            <div className="mt-auto pt-4">
              <BalanceTrend />
              <p className="mt-3 text-sm text-muted-foreground">Illustrative balance trend</p>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
