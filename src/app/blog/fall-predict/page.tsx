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
  "Shorter steps as moving gets harder",
  "Uneven or unsteady stepping patterns that show balance issues",
  "Not lifting the foot high enough, which increases the chance of tripping",
  "Walking with toes pointing further outward to try and feel more stable",
];

const ELDERLY_METRICS: Metric[] = [
  {
    label: "Early fall warning",
    value: "6\u20138",
    unit: "wks",
    note: "found by tracking daily walking habits",
  },
  {
    label: "Uneven step risk",
    value: "> 4",
    unit: "%",
    note: "the point where fall risk goes up",
  },
  {
    label: "Normal walking speed",
    value: "0.8\u20131.0",
    unit: "m/s",
    note: "average speed for healthy older adults",
  },
  {
    label: "Normal step size",
    value: "110\u2013130",
    unit: "cm",
    note: "average step size for healthy older adults",
  },
];

export const metadata: Metadata = {
  title: "Preventing Falls in Seniors: How Gait Tracking Detects Risks Before They Happen",
  description: "A fall isn't just an accident—it usually follows weeks of invisible changes in walking. Learn how daily tracking helps detect fall risks 6-8 weeks early.",
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
    "description": "A fall isn't just an accident—it usually follows weeks of invisible changes in walking. Learn how daily tracking helps detect fall risks 6-8 weeks early."
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
          A fall is rarely just a sudden accident. It is usually the result of
          weeks of slow, invisible changes in how a person walks that standard
          doctor checkups often miss.
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
            India&apos;s older population is growing fast, with over 153 million
            people aged 60 and above today, and expected to reach 317 million by 2050.
            With this growth comes a major health challenge: injuries from falls cost
            an estimated &#8377;6,500 crore every year.
          </p>

          <p className="mb-7">
            Globally, falls are the second leading cause of accidental death.
            But one important fact is often ignored: <Stat>80%</Stat> of falls
            happen after a measurable decline in walking ability. These tiny
            changes in how a person walks are impossible to see with the naked
            eye without daily tracking.
          </p>

          <section>
            <SectionHeading>The Metrics That Matter</SectionHeading>
            <p className="mb-7">
              When an older adult&apos;s mobility starts to decline, their body
              naturally tries to adjust. These adjustments show up as changes in
              how they move. Studies show that uneven stepping&mdash;meaning how
              inconsistent each step is&mdash;can help predict falls up to{" "}
              <Stat>12 months</Stat> in advance.
            </p>

            <p className="mb-5">
              Doctors look for several specific warning signs in a patient&apos;s
              daily walking habits:
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
              If these walking changes are so predictable, why are they missed?
              The problem is how we currently check for fall risks. When older
              adults visit the doctor, they are usually only watched while walking
              down a short hallway for a few minutes.
            </p>

            <blockquote className="my-10 border-l-2 border-[#3D6B5C]/40 pl-6 py-1 text-[19px] leading-[1.7] text-[#1C2B27]/70 italic">
              Medical studies show that quick checkups are not enough to accurately
              predict falls. A 10-minute visit only shows the patient at their
              best, not when they are tired&mdash;which is when falls usually happen.
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
              Patients naturally try harder when they know a doctor is watching.
              This &quot;best behavior&quot; hides the real-world tiredness and
              walking struggles that happen at home after 20 minutes of moving around.
            </p>
          </section>

          <section>
            <SectionHeading>The Six-Week Warning Window</SectionHeading>
            <p className="mb-7">
              Moving from quick doctor visits to daily home tracking is a
              game-changer for senior care. By using smart wearable technology,
              doctors can track a patient&apos;s true walking habits across thousands
              of everyday steps.
            </p>

            <p className="mb-5">
              Most importantly, daily tracking can spot serious walking changes an average of{" "}
              <Stat>6&ndash;8 weeks</Stat> before a doctor would notice them
              during a regular checkup.
            </p>

            <FallWarningHorizon />

            <p className="mt-2 mb-7">
              This extra time is crucial. It gives families and doctors enough
              time to help&mdash;like adjusting a cane, starting physical
              therapy, or making the home safer&mdash;helping to stop the fall
              before it ever happens.
            </p>

            <GaitMetricsGrid metrics={ELDERLY_METRICS} />
          </section>

          <ClinicalPerspective />

          <section>
            <SectionHeading>Protecting Independence Through Data</SectionHeading>
            <p className="mb-7">
              For seniors and their families, a fall is more than just a physical
              injury; it is a huge threat to living independently. Hip fractures,
              for example, carry a very high risk of severe complications for
              patients over 70.
            </p>

            <p className="mb-7">
              By tracking walking habits daily, we can move away from waiting for
              emergencies to happen. Instead, we can use smart data to protect
              older adults. It is no longer about responding to a fall&mdash;it is
              about predicting and preventing it.
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
          Warning signs get
          <br />
          dangerously high
        </span>
        <span className="absolute right-0">Week 8</span>
      </div>

      <p className="mt-5 pt-5 border-t border-[#1C2B27]/[0.06] text-[14.5px] leading-relaxed text-[#1C2B27]/55">
        Each bar represents a few days of real-world walking data. The
        changes start small and grow steadily&mdash;showing up weeks before they
        would ever be noticed during a normal doctor visit.
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
          At Spandhika Orthotics, we believe in helping prevent falls before
          they happen.
        </p>
        <p className="text-[16px] leading-[1.75] text-[#FAFAF7]/65 mb-7">
          Our Intelligent Orthotic &amp; Leg Monitoring System (IOLMS) is
          India&apos;s first affordable smart insole made for daily home use.
          By packing 32 tiny pressure sensors and motion trackers into a
          waterproof device, we can constantly track 7 key walking stats&mdash;like 
          step size and steadiness&mdash;every single day. This helps doctors
          and families watch for early signs of trouble without relying only on
          short doctor visits.
        </p>

        <div className="grid grid-cols-3 gap-3 border-t border-[#FAFAF7]/10 pt-6">
          <MiniStat value="32" label="Pressure sensors" />
          <MiniStat value="IP67" label="Waterproof rating" />
          <MiniStat value="7" label="Movement stats tracked" />
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