import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import React from "react";

// --- Types & Interfaces ---
interface Metric {
  label: string;
  value: string;
  unit: string;
  note: string;
}

interface MiniStatProps {
  value: string;
  label: string;
}

interface SectionHeadingProps {
  children: React.ReactNode;
}

interface ConsequenceListProps {
  items: string[];
}

// --- Data Constants ---
const CONSEQUENCE_ITEMS: string[] = [
  "Reduced step length and stride length as mobility declines",
  "Increased stride variability indicating balance struggles",
  "Reduced dorsiflexion, which increases the risk of foot-drop or tripping",
  "A wider foot progression angle as the body attempts to artificially widen its base of support",
];

const ELDERLY_METRICS: Metric[] = [
  {
    label: "Advance fall warning",
    value: "6\u20138",
    unit: "wks",
    note: "detected via continuous ambulatory monitoring",
  },
  {
    label: "Critical stride variability",
    value: "> 4",
    unit: "%",
    note: "threshold for elevated fall risk",
  },
  {
    label: "Normal elderly gait speed",
    value: "0.8\u20131.0",
    unit: "m/s",
    note: "baseline speed for healthy seniors",
  },
  {
    label: "Normal stride length",
    value: "110\u2013130",
    unit: "cm",
    note: "baseline length for healthy seniors",
  },
];

export const metadata: Metadata = {
  title: "Preventing Falls in Seniors: How Gait Tracking Detects Risks Before They Happen",
  description: "A fall isn't just an accident—it is preceded by weeks of invisible gait deterioration. Learn how continuous monitoring detects fall risks 6-8 weeks in advance.",
  openGraph: {
    images: ["/3_1.png"],
  }
};

export default function BlogPost() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": "The Hidden Warning Signs of a Fall: How Smart Insoles Protect Seniors at Home",
    "image": [
      "https://spandhikaorthotics.in/3_1.png"
    ],
    "author": [{
      "@type": "Organization",
      "name": "Spandhika Orthotics",
      "url": "https://spandhikaorthotics.in"
    }],
    "publisher": {
      "@type": "Organization",
      "name": "Spandhika Orthotics",
      "logo": {
        "@type": "ImageObject",
        "url": "https://spandhikaorthotics.in/SO_Logo.png"
      }
    },
    "datePublished": "2026-07-01T08:00:00+05:30",
    "dateModified": "2026-07-01T08:00:00+05:30",
    "description": "A fall isn't just an accident—it is preceded by weeks of invisible gait deterioration. Learn how continuous monitoring detects fall risks 6-8 weeks in advance."
  };

  return (
    <main className="relative bg-[#FAFAF7] min-h-screen pb-32 selection:bg-[#3D6B5C]/20">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Decorative gradient rail (desktop only) */}
      <div
        aria-hidden="true"
        className="hidden lg:block fixed top-0 left-0 h-screen w-[3px] z-0"
        style={{
          background:
            "linear-gradient(180deg, transparent 0%, #3D6B5C22 12%, #3D6B5C 50%, #3D6B5C33 88%, transparent 100%)",
        }}
      />

      {/* Navigation */}
      <nav className="fixed top-8 left-6 sm:left-8 z-20">
        <Link
          href="/#blogs"
          aria-label="Back to homepage"
          className="group inline-flex items-center gap-2.5 rounded-full bg-[#FAFAF7]/90 px-4 py-2 text-[13px] font-semibold tracking-wide text-[#1C2B27] backdrop-blur-sm transition-colors hover:text-[#3D6B5C] border border-[#1C2B27]/10 shadow-sm"
        >
          <svg
            width="14"
            height="14"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="transition-transform group-hover:-translate-x-1"
            aria-hidden="true"
          >
            <path
              d="M10.6667 3.33331L5.33337 7.99998L10.6667 12.6666"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          Back to homepage
        </Link>
      </nav>

      {/* Article Header */}
      <header className="mx-auto max-w-[760px] px-6 pt-32 sm:pt-36 text-center">
        <div className="mb-6 flex items-center justify-center gap-3">
          <span className="inline-flex items-center gap-2 rounded-full border border-[#3D6B5C]/30 bg-[#3D6B5C]/[0.06] px-3 py-1 text-[11px] font-bold uppercase tracking-[0.14em] text-[#3D6B5C]">
            <span className="h-1.5 w-1.5 rounded-full bg-[#3D6B5C]" aria-hidden="true" />
            Elderly Care
          </span>
          <span className="text-[13px] text-[#1C2B27]/40 font-medium">
            6 min read
          </span>
        </div>

        <h1 className="text-[2.5rem] sm:text-[3.25rem] leading-[1.08] tracking-[-0.02em] text-[#1C2B27] font-bold mb-8">
          Preventing Falls in Seniors: How Gait Tracking Detects Risks Before They Happen
        </h1>

        <p className="mx-auto text-lg leading-[1.6] text-[#1C2B27]/55 max-w-[600px] font-normal">
          A fall is rarely just a sudden accident. It is often the
          predictable outcome of weeks of invisible gait deterioration that
          standard checkups miss.
        </p>
      </header>

      {/* Hero Image */}
      <figure className="mx-auto max-w-[760px] px-6 mt-10 mb-14">
        <div className="relative aspect-[16/9] w-full overflow-hidden bg-[#1C2B27]/5 rounded-xl ring-1 ring-[#1C2B27]/[0.06]">
          <Image
            src="/3_1.png"
            alt="An elderly person walking steadily, supported by continuous gait monitoring technology"
            fill
            className="object-cover object-center"
            priority
          />
        </div>
      </figure>

      {/* Main Content */}
      <div className="mx-auto max-w-[760px] px-6">
        <article className="text-[18px] leading-[1.8] text-[#1C2B27]/80">

          <p className="text-[21px] leading-[1.65] text-[#1C2B27] font-normal mb-9">
            India&apos;s aging population is expanding rapidly, with the 60+
            demographic currently at 153 million and projected to reach 317
            million by 2050. Alongside this growth comes a critical
            healthcare challenge: fall-related injuries cost an estimated
            &#8377;6,500 crore annually.
          </p>

          <p className="mb-7">
            Globally, falls are the second leading cause of accidental
            injury death. But the most vital piece of clinical data is
            often the most overlooked: <Stat>80%</Stat> of falls are
            preceded by measurable gait deterioration. These micro-changes
            in how a person walks are completely invisible to the naked eye
            without continuous monitoring.
          </p>

          <section>
            <SectionHeading>The Metrics That Matter</SectionHeading>
            <p className="mb-7">
              When a senior&apos;s mobility begins to decline, their body
              naturally compensates. These compensations manifest in
              distinct biomechanical shifts. Studies indicate that stride
              length variability&mdash;how inconsistent each step
              is&mdash;can predict falls up to <Stat>12 months</Stat> in
              advance.
            </p>

            <p className="mb-5">
              Clinicians look for several specific red flags in a
              patient&apos;s daily movement patterns:
            </p>

            <ConsequenceList items={CONSEQUENCE_ITEMS} />
            
            {/* --- ADDED IMAGE 1: GAIT MECHANICS --- */}
            <div className="mt-8 mb-12">
              <Image
                src="/gaitmechanics.png"
                alt="Biomechanical illustration comparing a healthy gait to a deteriorating gait, highlighting stride length and dorsiflexion"
                width={1200}
                height={675}
                layout="responsive"
                className="rounded-xl ring-1 ring-[#1C2B27]/[0.06] shadow-sm"
              />
            </div>
            {/* -------------------------------------- */}

          </section>

          <section>
            <SectionHeading>The Clinic vs. The Home</SectionHeading>
            <p className="mb-7">
              If these gait changes are so predictable, why are they
              missed? The problem lies in how we currently assess fall
              risk. When a senior visits a doctor&apos;s office, they are
              typically observed walking down a hallway for just a few
              minutes.
            </p>

            <blockquote className="my-10 border-l-2 border-[#3D6B5C]/40 pl-6 py-1 text-[19px] leading-[1.7] text-[#1C2B27]/70 italic">
              Clinical evidence shows that brief assessments are
              insufficient for accurate fall risk stratification. A
              10-minute session merely captures the patient&apos;s best
              performance, not the fatigued state when falls actually
              occur.
            </blockquote>
            
            {/* --- ADDED IMAGE 2: REAL VS CLINIC --- */}
            <div className="mb-10">
              <Image
                src="/realvsclinic.png"
                alt="Line graph comparing stable 10-minute clinic assessments with real-world monitoring that reveals hidden fatigue over time"
                width={1200}
                height={675}
                layout="responsive"
                className="rounded-xl ring-1 ring-[#1C2B27]/[0.06] shadow-sm"
              />
            </div>
            {/* ------------------------------------- */}

            <p className="mb-7">
              Patients consciously try harder when they know a physician is
              watching. This &quot;best performance&quot; illusion
              completely masks the real-world fatigue and gait
              deterioration that happens at home after 20 minutes of
              continuous movement.
            </p>
          </section>

          <section>
            <SectionHeading>The Six-Week Warning Window</SectionHeading>
            <p className="mb-7">
              The transition from clinical observation to continuous home
              monitoring is a game-changer for preventative care. By
              utilizing wearable technology, healthcare providers can track
              a patient&apos;s true biomechanics across thousands of daily
              gait cycles.
            </p>

            <p className="mb-5">
              Most importantly, continuous ambulatory monitoring can detect
              clinically significant gait changes an average of{" "}
              <Stat>6&ndash;8 weeks</Stat> before they are identifiable
              during a scheduled clinic assessment.
            </p>

            <FallWarningHorizon />

            <p className="mt-2 mb-7">
              This window is critical. It provides enough time for
              proactive interventions, such as adjusting walking aids,
              starting targeted physical therapy, or initiating home
              modifications&mdash;stopping the fall before it ever happens.
            </p>

            <GaitMetricsGrid metrics={ELDERLY_METRICS} />
          </section>

          <ClinicalPerspective />

          <section>
            <SectionHeading>Protecting Independence Through Data</SectionHeading>
            <p className="mb-7">
              For seniors and their families, a fall represents more than
              just a physical injury; it is a profound threat to
              independence. Hip fractures, for instance, carry a severe
              one-year mortality rate of <Stat>20&ndash;30%</Stat> in
              patients over 70.
            </p>

            <p className="mb-7">
              By embracing continuous gait monitoring, we can move away
              from reactive emergency care and toward a future where aging
              populations are protected by data. It is no longer about
              responding to the fall&mdash;it is about predicting and
              preventing it.
            </p>
          </section>

        </article>

        {/* Footer Navigation */}
        <nav className="mt-20 border-t border-[#1C2B27]/10 pt-10 flex items-center justify-between">
          <Link
            href="/blog"
            className="group inline-flex items-center gap-2 text-sm font-semibold text-[#3D6B5C] hover:text-[#1C2B27] transition-colors"
          >
            <svg
              width="14"
              height="14"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="transition-transform group-hover:-translate-x-1"
              aria-hidden="true"
            >
              <path
                d="M10.6667 3.33331L5.33337 7.99998L10.6667 12.6666"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            Back to Journal
          </Link>
          <span className="text-xs text-[#1C2B27]/35 font-medium tracking-wide">
            Spandhika Orthotics
          </span>
        </nav>

      </div>
    </main>
  );
}

/* ----------------------------------------------------------------------- */
/* Supporting Components                                                   */
/* ----------------------------------------------------------------------- */

function SectionHeading({ children }: SectionHeadingProps) {
  return (
    <h2 className="mt-16 mb-6 text-[1.65rem] sm:text-[1.85rem] leading-tight tracking-[-0.01em] text-[#1C2B27] font-bold">
      {children}
    </h2>
  );
}

function Stat({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-baseline rounded-md bg-[#3D6B5C]/[0.08] px-1.5 py-0.5 font-semibold text-[#3D6B5C] tabular-nums text-[0.95em] whitespace-nowrap">
      {children}
    </span>
  );
}

function ConsequenceList({ items }: ConsequenceListProps) {
  return (
    <ul className="mb-10 mt-5 grid gap-px overflow-hidden rounded-xl border border-[#1C2B27]/[0.08] bg-[#1C2B27]/[0.08] sm:grid-cols-2">
      {items.map((item, index) => (
        <li
          key={`consequence-${index}`}
          className="flex items-start gap-3 bg-[#FAFAF7] px-5 py-4 text-[15.5px] leading-snug text-[#1C2B27]/75"
        >
          <span className="mt-[7px] h-1.5 w-1.5 shrink-0 rounded-full bg-[#3D6B5C]" aria-hidden="true" />
          {item}
        </li>
      ))}
    </ul>
  );
}

/**
 * Content-specific visual for this article: a forward-looking warning
 * horizon rather than a backward-looking timeline. Where the diabetic
 * ulcer article visualized a "blind spot" gap between two past clinic
 * visits, this one visualizes the 6-8 week early-warning signal building
 * up to a fall that gets prevented before it happens — distinct shape,
 * distinct emotional register (early radar/signal, not a missed gap).
 */
function FallWarningHorizon() {
  return (
    <div className="mb-10 mt-7 rounded-xl border border-[#1C2B27]/[0.08] bg-white/60 px-6 py-7 sm:px-8 sm:py-8">
      <div className="mb-7 flex items-center justify-between text-[11px] font-semibold uppercase tracking-[0.08em] text-[#1C2B27]/40">
        <span>Today</span>
        <span className="text-[#3D6B5C]">6&ndash;8 week warning window</span>
        <span>Clinic check-in</span>
      </div>

      {/* Signal track: rising bars suggesting a building, detectable signal */}
      <div className="flex items-end gap-[3px] h-16 mb-3" aria-hidden="true">
        {Array.from({ length: 28 }).map((_, i) => {
          const progress = i / 27;
          // Gentle ramp with light noise so it reads as a real signal, not a ruler
          const noise = (i % 5 === 0 ? 6 : i % 3 === 0 ? -4 : 0);
          const heightPct = Math.min(100, 22 + progress * 70 + noise);
          const isAlert = i >= 22;
          return (
            <div
              key={i}
              className="flex-1 rounded-sm"
              style={{
                height: `${heightPct}%`,
                backgroundColor: isAlert ? "#3D6B5C" : "#3D6B5C55",
              }}
            />
          );
        })}
      </div>

      <div className="relative h-10 text-[12px] text-[#1C2B27]/50">
        <span className="absolute left-0">Day 0</span>
        <span
          className="absolute -translate-x-1/2 text-center font-semibold text-[#1C2B27]/70 leading-tight"
          style={{ left: "78%" }}
        >
          Signal crosses
          <br />
          alert threshold
        </span>
        <span className="absolute right-0">Week 8</span>
      </div>

      <p className="mt-5 pt-5 border-t border-[#1C2B27]/[0.06] text-[14.5px] leading-relaxed text-[#1C2B27]/55">
        Each bar represents a few days of real-world gait data. The
        deviation is small at first and grows steadily&mdash;detectable
        weeks before it would ever surface during a routine check-in.
      </p>
    </div>
  );
}

function GaitMetricsGrid({ metrics }: { metrics: Metric[] }) {
  return (
    <div className="mb-10 mt-5 grid gap-3 sm:grid-cols-2">
      {metrics.map((m, index) => (
        <div
          key={`metric-${index}`}
          className="rounded-xl border border-[#1C2B27]/[0.08] bg-white/60 px-5 py-4"
        >
          <div className="text-[12px] font-semibold uppercase tracking-[0.07em] text-[#1C2B27]/45 mb-1.5">
            {m.label}
          </div>
          <div className="flex items-baseline gap-1.5">
            <span className="text-[1.6rem] font-semibold tabular-nums text-[#1C2B27] leading-none">
              {m.value}
            </span>
            <span className="text-sm font-medium text-[#3D6B5C]">{m.unit}</span>
          </div>
          <div className="text-[13px] text-[#1C2B27]/45 mt-1">{m.note}</div>
        </div>
      ))}
    </div>
  );
}

function ClinicalPerspective() {
  return (
    <aside className="my-12 overflow-hidden rounded-2xl border border-[#1C2B27]/10 bg-[#1C2B27] text-[#FAFAF7] shadow-[0_20px_50px_-20px_rgba(28,43,39,0.4)]">
      <div className="px-7 py-7 sm:px-9 sm:py-9">
        <span className="inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.14em] text-[#7FAF9C] mb-4">
          <span className="h-1.5 w-1.5 rounded-full bg-[#7FAF9C]" aria-hidden="true" />
          Clinical Perspective
        </span>
        <p className="text-[1.3rem] leading-[1.5] font-semibold text-[#FAFAF7] mb-5">
          At Spandhika Orthotics, we believe in preventing falls before
          they happen.
        </p>
        <p className="text-[16px] leading-[1.75] text-[#FAFAF7]/65 mb-7">
          Our Intelligent Orthotic &amp; Leg Monitoring System (IOLMS) is
          India&apos;s first affordable, continuous home-use smart insole.
          By packing a 32-node FSR pressure matrix and a 9-axis IMU into an
          IP67-rated waterproof device, we can seamlessly track all 7
          critical gait parameters&mdash;including stride length and
          variability&mdash;every single day. This enables physicians and
          families to monitor progressive mobility decline without relying
          solely on brief clinic visits.
        </p>

        <div className="grid grid-cols-3 gap-3 border-t border-[#FAFAF7]/10 pt-6">
          <MiniStat value="32" label="FSR sensor nodes" />
          <MiniStat value="IP67" label="Rated, daily use" />
          <MiniStat value="7" label="Gait parameters tracked" />
        </div>
      </div>
    </aside>
  );
}

function MiniStat({ value, label }: MiniStatProps) {
  return (
    <div>
      <div className="text-[1.4rem] font-semibold tabular-nums text-[#FAFAF7] leading-none mb-1">
        {value}
      </div>
      <div className="text-[11.5px] leading-tight text-[#FAFAF7]/45">{label}</div>
    </div>
  );
}