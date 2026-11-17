import Image from "next/image";
import type { CSSProperties } from "react";
import {
  Activity,
  Footprints,
  Gauge,
  Grid2x2,
  Ruler,
  Shield,
  Timer,
  TrendingUp,
  type LucideIcon,
} from "lucide-react";
import { montserrat } from "@/lib/fonts";

type Chip = { angle: number; tilt: number; icon: LucideIcon; label: string; value: string };

const innerRing: Chip[] = [
  { angle: 0, tilt: -5, icon: Grid2x2, label: "Pressure", value: "92%" },
  { angle: 40, tilt: 5, icon: Timer, label: "Cadence", value: "112 spm" },
  { angle: 80, tilt: -5, icon: Gauge, label: "Balance", value: "88%" },
  { angle: 120, tilt: 5, icon: Ruler, label: "Stride", value: "1.22 m" },
  { angle: 160, tilt: -5, icon: Footprints, label: "Symmetry", value: "94%" },
  { angle: 200, tilt: 5, icon: Shield, label: "Fall risk", value: "Low" },
  { angle: 240, tilt: -5, icon: Activity, label: "Stability", value: "87%" },
  { angle: 280, tilt: 5, icon: TrendingUp, label: "Steps", value: "7,842" },
  { angle: 320, tilt: -5, icon: Activity, label: "Arch load", value: "76%" },
];

const outerRing: Chip[] = [
  { angle: 20, tilt: 5, icon: Timer, label: "Stance", value: "0.62 s" },
  { angle: 60, tilt: -5, icon: Gauge, label: "Heel strike", value: "Normal" },
  { angle: 100, tilt: 5, icon: Footprints, label: "Toe-off", value: "Strong" },
  { angle: 140, tilt: -5, icon: TrendingUp, label: "Distance", value: "5.4 km" },
  { angle: 180, tilt: 5, icon: Ruler, label: "Step width", value: "9.8 cm" },
  { angle: 220, tilt: -5, icon: Shield, label: "Impact", value: "Low" },
  { angle: 260, tilt: 5, icon: Grid2x2, label: "Forefoot", value: "68%" },
  { angle: 300, tilt: -5, icon: Gauge, label: "Pronation", value: "4°" },
  { angle: 340, tilt: 5, icon: Grid2x2, label: "Midfoot", value: "74%" },
];

// Static chips shown on small screens instead of the rotating rings.
const mobileChips: Chip[] = [
  { angle: 315, tilt: 0, icon: Grid2x2, label: "Pressure", value: "92%" },
  { angle: 45, tilt: 0, icon: Gauge, label: "Balance", value: "88%" },
  { angle: 225, tilt: 0, icon: TrendingUp, label: "Steps", value: "7,842" },
  { angle: 135, tilt: 0, icon: Timer, label: "Cadence", value: "112 spm" },
];

const measures: { icon: LucideIcon; label: string }[] = [
  { icon: Grid2x2, label: "Foot pressure" },
  { icon: Gauge, label: "Balance" },
  { icon: Activity, label: "Cadence" },
  { icon: Ruler, label: "Step & stride" },
  { icon: Footprints, label: "Symmetry" },
  { icon: Shield, label: "Fall-risk indicators" },
];

function ChipCard({ chip }: { chip: Chip }) {
  const Icon = chip.icon;
  return (
    <div
      className="orbit-chip flex w-[72px] flex-col items-start gap-0.5 rounded-xl border border-border bg-card/95 px-2 py-1.5 shadow-[0_10px_28px_-14px_rgba(15,40,30,0.35)] backdrop-blur"
      style={{ "--tilt": `${chip.tilt}deg` } as CSSProperties}
    >
      <span className="flex items-center gap-1">
        <Icon className="h-3 w-3 shrink-0 text-primary" aria-hidden="true" />
        <span className="text-[8px] font-semibold uppercase tracking-[0.12em] text-muted-foreground">
          {chip.label}
        </span>
      </span>
      <span className="text-[11px] font-bold leading-none text-foreground">{chip.value}</span>
    </div>
  );
}

function OrbitRing({
  chips,
  radius,
  duration,
  reverse = false,
}: {
  chips: Chip[];
  radius: number;
  duration: string;
  reverse?: boolean;
}) {
  const durStyle = { "--orbit-dur": duration } as CSSProperties;
  return (
    <div className="orbit-spin" data-dir={reverse ? "reverse" : "normal"} style={durStyle}>
      {chips.map((chip) => (
        <div
          key={chip.label}
          className="orbit-slot"
          style={{ transform: `rotate(${chip.angle}deg) translateX(${radius}px)` }}
        >
          <div className="orbit-upright" style={{ transform: `rotate(${-chip.angle}deg)` }}>
            <div className="orbit-counter" style={durStyle}>
              <ChipCard chip={chip} />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default function InsoleToInsight() {
  return (
    <section id="parameters" className={`${montserrat.className} lv-theme scroll-mt-24 py-16 lg:py-20`}>
      <div className="mx-auto grid max-w-7xl items-center gap-10 px-6 lg:grid-cols-[3fr_2fr] lg:gap-16 lg:px-10">
        {/* Orbit visual */}
        <div className="parameter-stage relative flex items-center justify-center overflow-hidden py-8">
          <div className="orbit-core relative z-10">
            <Image
              src="/insole-app-device.png"
              alt="Spandhika smart insole beside the Saarthi smartphone app"
              width={631}
              height={878}
              sizes="(min-width: 1024px) 250px, 190px"
            />
          </div>

          {/* Small screens: two static rings with four chips */}
          <div aria-hidden="true" className="parameter-ring absolute lg:hidden" />
          <div aria-hidden="true" className="parameter-ring parameter-ring-outer absolute lg:hidden" />
          <div aria-hidden="true" className="orbit-scene pointer-events-none absolute left-1/2 top-1/2 lg:hidden">
            {mobileChips.map((chip) => (
              <div
                key={chip.label}
                className="orbit-slot"
                style={{ transform: `rotate(${chip.angle}deg) translateX(min(155px, 40vw))` }}
              >
                <div className="orbit-upright" style={{ transform: `rotate(${-chip.angle}deg)` }}>
                  <ChipCard chip={chip} />
                </div>
              </div>
            ))}
          </div>

          {/* Desktop: two counter-rotating rings of chips */}
          <div
            aria-hidden="true"
            className="orbit-scene pointer-events-none absolute left-1/2 top-1/2 hidden h-[620px] w-[620px] -translate-x-1/2 -translate-y-1/2 lg:block"
          >
            <span className="orbit-ring" style={{ width: 410, height: 410 }} />
            <span className="orbit-ring" style={{ width: 570, height: 570 }} />
            <span className="orbit-ring orbit-ring-faint" style={{ width: 600, height: 600 }} />
            <OrbitRing chips={innerRing} radius={205} duration="55s" />
            <OrbitRing chips={outerRing} radius={285} duration="62s" reverse />
          </div>

          <span className="spx-tag absolute bottom-0 left-1/2 hidden -translate-x-1/2 lg:inline-block">
            Illustrative readings
          </span>
        </div>

        {/* Copy */}
        <div>
          <p className="lv-label">From insole to insight</p>
          <h2 className="lv-title mt-3">
            <span className="block">Your walking data,</span>
            <span className="block">securely in one place</span>
          </h2>
          <p className="lv-copy mt-5">
            Pressure, cadence, balance and stride flow from the insole into the Saarthi app — a
            record you can review and share with your clinician.
          </p>

          <ul className="mt-8 grid grid-cols-2 gap-x-6 gap-y-5">
            {measures.map(({ icon: Icon, label }) => (
              <li key={label} className="flex items-start gap-3">
                <Icon className="mt-0.5 h-5 w-5 shrink-0 text-primary" aria-hidden="true" />
                <span className="text-[17px] text-foreground">{label}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
