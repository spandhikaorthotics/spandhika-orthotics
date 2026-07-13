import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export const metadata: Metadata = {
  title: "Diabetic Foot Ulcer Prevention: Why Continuous Pressure Monitoring Matters | Spandhika Orthotics",
  description: "Diabetic foot ulcers don't appear overnight—they form during the 89-day blind spot between clinic visits. Learn how continuous plantar pressure monitoring and smart insoles support earlier diabetic foot ulcer prevention.",
  keywords: [
    "diabetic foot ulcer prevention",
    "continuous pressure monitoring",
    "plantar pressure monitoring",
    "smart insole for diabetics",
    "diabetic foot care",
    "diabetic neuropathy foot care",
    "offloading diabetic foot ulcer",
    "diabetic foot ulcer India",
    "IOLMS smart insole",
    "Spandhika Orthotics",
  ],
  alternates: {
    canonical: "https://spandhikaorthotics.in/blog/diabetic-foot-ulcer-prevention-continuous-monitoring",
  },
  openGraph: {
    title: "Diabetic Foot Ulcer Prevention: Why Continuous Pressure Monitoring Matters",
    description: "A diabetic foot ulcer isn't a sudden crisis—it's the result of an 89-day blind spot between clinic visits. See why continuous plantar pressure monitoring changes outcomes.",
    url: "https://spandhikaorthotics.in/blog/diabetic-foot-ulcer-prevention-continuous-monitoring",
    siteName: "Spandhika Orthotics",
    type: "article",
    images: [
      {
        url: "https://spandhikaorthotics.in/2_.png",
        width: 1200,
        height: 675,
        alt: "Clinician examining a diabetic patient's foot to assess plantar pressure and ulcer risk",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Diabetic Foot Ulcer Prevention: Why Continuous Pressure Monitoring Matters",
    description: "Diabetic foot ulcers form in the 89-day blind spot between clinic visits. Here's why continuous plantar pressure monitoring closes that gap.",
    images: ["https://spandhikaorthotics.in/2_.png"],
  },
};
// ----------------------------

export default function BlogPost() {
  // Define the schema object tailored to this specific article
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": "https://spandhikaorthotics.in/blog/diabetic-foot-ulcer-prevention-continuous-monitoring"
    },
    "headline": "Diabetic Foot Ulcer Prevention: Why Continuous Pressure Monitoring Matters",
    "alternativeHeadline": "Why Diabetic Foot Ulcers Don't Start Overnight",
    "description": "A diabetic foot ulcer isn't a sudden crisis—it's the result of an 89-day blind spot between clinic visits. Discover why continuous pressure monitoring is crucial for diabetic foot ulcer prevention.",
    "image": [
      "https://spandhikaorthotics.in/2_.png"
    ],
    "keywords": [
      "diabetic foot ulcer prevention",
      "continuous pressure monitoring",
      "plantar pressure monitoring",
      "smart insole",
      "diabetic foot care",
      "offloading"
    ],
    "articleSection": "Clinical Care",
    "inLanguage": "en-IN",
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
    // Update this date whenever you publish new articles
    "datePublished": "2026-06-30T08:00:00+05:30",
    "dateModified": "2026-06-30T08:00:00+05:30"
  };

  return (
    <main className="relative bg-[#FAFAF7] min-h-screen pb-32 selection:bg-[#3D6B5C]/20">

      {/* --- Article Schema Markup --- */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      {/* ----------------------------- */}

      {/* --- Signature element: ambient pressure-gradient rail (desktop only) --- */}
      <div
        aria-hidden="true"
        className="hidden lg:block fixed top-0 left-0 h-screen w-[3px] z-0"
        style={{
          background:
            "linear-gradient(180deg, transparent 0%, #3D6B5C22 12%, #3D6B5C 50%, #3D6B5C33 88%, transparent 100%)",
        }}
      />

      {/* --- Back to Homepage Button --- */}
      <div className="fixed top-8 left-6 sm:left-8 z-20">
        <Link
          href="/#blogs"
          className="group inline-flex items-center gap-2.5 rounded-full bg-[#FAFAF7]/90 px-4 py-2 text-[13px] font-semibold tracking-wide text-[#1C2B27] backdrop-blur-sm transition-colors hover:text-[#3D6B5C] border border-[#1C2B27]/10 shadow-sm"
        >
          <svg
            width="14"
            height="14"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="transition-transform group-hover:-translate-x-1"
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
      </div>
      {/* ----------------------------------- */}

      {/* 1. Header */}
      <header className="mx-auto max-w-[760px] px-6 pt-32 sm:pt-36 text-center">
        <div className="mb-6 flex items-center justify-center gap-3">
          <span className="inline-flex items-center gap-2 rounded-full border border-[#3D6B5C]/30 bg-[#3D6B5C]/[0.06] px-3 py-1 text-[11px] font-bold uppercase tracking-[0.14em] text-[#3D6B5C]">
            <span className="h-1.5 w-1.5 rounded-full bg-[#3D6B5C]" />
            Clinical Care
          </span>
          <span className="text-[13px] text-[#1C2B27]/40 font-medium">
            5 min read
          </span>
        </div>

        <h1 className="text-[2.5rem] sm:text-[3.25rem] leading-[1.08] tracking-[-0.02em] text-[#1C2B27] font-bold mb-8">
          Why Diabetic Foot Ulcers Don&apos;t Start Overnight: The Case for
          Continuous Pressure Monitoring
        </h1>

        <p className="mx-auto text-lg leading-[1.6] text-[#1C2B27]/55 max-w-[600px] font-normal">
          A diabetic foot sore does not happen suddenly. It is usually the
          final result of weeks of invisible damage that happens between your
          doctor visits.
        </p>
      </header>

      {/* 2. Hero Image — aligned to the same column as the text */}
      <div className="mx-auto max-w-[760px] px-6 mt-10 mb-14">
        <div className="relative aspect-[16/9] w-full overflow-hidden bg-[#1C2B27]/5 rounded-xl ring-1 ring-[#1C2B27]/[0.06]">
          <Image
            src="/2_.png"
            alt="Clinician assessing a diabetic patient's foot for early ulcer risk and plantar pressure"
            fill
            className="object-cover object-center"
            priority
          />
        </div>
      </div>

      {/* 3. Content Column */}
      <div className="mx-auto max-w-[760px] px-6">
        <article className="text-[18px] leading-[1.8] text-[#1C2B27]/80">

          <p className="text-[21px] leading-[1.65] text-[#1C2B27] font-normal mb-9">
            When a diabetic foot sore appears, it often feels like a sudden
            emergency. One day your foot looks fine, and the next, there is a
            serious wound. But the facts tell a very different story.
          </p>

          <p className="mb-7">
            In India alone, there are over 50,000 leg or foot amputations every
            year, and 80% of them start with a sore caused by too much foot
            pressure. These wounds are the final result of weeks or months of
            silent, repeated stress on the foot.
          </p>

          <SectionHeading>The Myth of the &quot;Sudden&quot; Ulcer</SectionHeading>

          <p className="mb-7">
            Foot sores are caused by pressure building up day after day, not by
            a single injury. For people with diabetic nerve damage (neuropathy),
            the ability to feel this pressure is greatly reduced or completely gone.
          </p>

          <p className="mb-5">
            Doctors know that the danger zone starts when foot pressure crosses
            a certain level (<Stat>200 kPa</Stat>). When one spot on your foot
            repeatedly takes this much weight, the skin and tissue begin to break
            down. This damage speeds up due to:
          </p>

          <ConsequenceList
            items={[
              "High pressure in the middle of the foot, which can double for people who have had sores before",
              "Unnoticed changes in how you walk to make up for foot numbness",
              "Tiny daily injuries that go unnoticed because the foot cannot feel pain",
              "Slower walking and stiff ankles that force your weight onto the wrong parts of your foot",
            ]}
          />

          <SectionHeading>The 89-Day Blind Spot</SectionHeading>

          <p className="mb-7">
            Right now, most patients only see their foot doctor every 3 to 6
            months. This creates a dangerous gap between visits where high-pressure
            spots go completely unnoticed.
          </p>

          <BlindSpotTimeline />

          <blockquote className="my-10 border-l-2 border-[#3D6B5C]/40 pl-6 py-1 text-[19px] leading-[1.7] text-[#1C2B27]/70 italic">
            A quick 10-minute walk at the doctor&apos;s office only shows how you
            walk at your best. It does not show how your feet act when you are
            tired at the end of the day.
          </blockquote>

          <p className="mb-7">
            The way you walk breaks down after just 20 to 30 minutes of being on
            your feet. If we only check your feet in a clean clinic a few times
            a year, we miss the thousands of steps you take at home where the
            real damage happens.
          </p>

          <SectionHeading>The Power of Continuous Foot Monitoring</SectionHeading>

          <p className="mb-7">
            The best way to fix this blind spot is to track your feet every day.
            By monitoring foot pressure in the real world, we can help stop sores
            before they start. The evidence is clear:
          </p>

          <OutcomeCards />

          <SectionHeading>Shifting to Proactive Care</SectionHeading>

          <p className="mb-7">
            We cannot afford to wait for sores to appear before doing something.
            Global health guidelines now highly recommend continuous foot tracking
            for high-risk diabetic patients.
          </p>

          <p className="mb-7">
            By bringing smart, doctor-level tracking into your home, we can catch
            invisible warning signs weeks before they turn into a crisis. This
            helps protect your feet, keeps you moving, and supports a healthier life.
          </p>

          {/* Clinical Perspective Highlight Block */}
          <ClinicalPerspective />

        </article>

        {/* Minimal Back Link */}
        <div className="mt-20 border-t border-[#1C2B27]/10 pt-10 flex items-center justify-between">
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
        </div>

      </div>
    </main>
  );
}

/* ----------------------------------------------------------------------- */
/* Supporting components                                                   */
/* ----------------------------------------------------------------------- */

function SectionHeading({
  children,
}: {
  children: React.ReactNode;
}) {
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

function ConsequenceList({ items }: { items: string[] }) {
  return (
    <ul className="mb-10 mt-5 grid gap-px overflow-hidden rounded-xl border border-[#1C2B27]/[0.08] bg-[#1C2B27]/[0.08] sm:grid-cols-2">
      {items.map((item, i) => (
        <li
          key={i}
          className="flex items-start gap-3 bg-[#FAFAF7] px-5 py-4 text-[15.5px] leading-snug text-[#1C2B27]/75"
        >
          <span className="mt-[7px] h-1.5 w-1.5 shrink-0 rounded-full bg-[#3D6B5C]" />
          {item}
        </li>
      ))}
    </ul>
  );
}

/**
 * Content-specific visual for this article: a horizontal timeline showing
 * the 89-day gap between clinic visits as a "blind spot" zone, with the
 * pressure threshold breach happening invisibly somewhere inside it.
 * This is built specifically for the article's central argument and isn't
 * reused from the other blog post.
 */
function BlindSpotTimeline() {
  return (
    <div className="mb-10 mt-7 rounded-xl border border-[#1C2B27]/[0.08] bg-white/60 px-6 py-7 sm:px-8 sm:py-8">
      <div className="mb-7 flex items-center justify-between text-[11px] font-semibold uppercase tracking-[0.08em] text-[#1C2B27]/40">
        <span>Clinic visit</span>
        <span className="text-[#3D6B5C]">~89 days unmonitored</span>
        <span>Next clinic visit</span>
      </div>

      {/* Track */}
      <div className="relative h-2 rounded-full bg-[#3D6B5C]/15 mb-3">
        {/* Solid confidence at day 0 */}
        <div className="absolute left-0 top-0 h-full w-[6%] rounded-full bg-[#3D6B5C]" />
        {/* Dashed blind-spot zone */}
        <div
          className="absolute top-0 h-full"
          style={{
            left: "6%",
            right: "6%",
            backgroundImage:
              "repeating-linear-gradient(90deg, #1C2B2733 0px, #1C2B2733 6px, transparent 6px, transparent 12px)",
            borderRadius: "9999px",
          }}
        />
        {/* Threshold breach marker, perfectly centered now */}
        <div
          className="absolute -top-1.5 flex flex-col items-center -translate-x-1/2"
          style={{ left: "50%" }}
        >
          <span className="h-5 w-[3px] rounded-full bg-[#1C2B27]" />
        </div>
        {/* Solid confidence at day 89 */}
        <div className="absolute right-0 top-0 h-full w-[6%] rounded-full bg-[#3D6B5C]" />
      </div>

      {/* Labels under track */}
      <div className="relative h-10 text-[12px] text-[#1C2B27]/50">
        <span className="absolute left-0 -translate-x-1/2 sm:translate-x-0">
          Day 0
        </span>
        <span
          className="absolute -translate-x-1/2 text-center font-semibold text-[#1C2B27]/70 leading-tight"
          style={{ left: "50%" }}
        >
          Pressure gets
          <br />
          dangerously high, unseen
        </span>
        <span className="absolute right-0 translate-x-1/2 sm:translate-x-0">
          Day 89
        </span>
      </div>

      <p className="mt-5 pt-5 border-t border-[#1C2B27]/[0.06] text-[14.5px] leading-relaxed text-[#1C2B27]/55">
        Your foot may look normal at both doctor visits. The real danger
        happens in the dashed middle section&mdash;completely invisible to you
        and your doctor.
      </p>
      
      <div className="mt-6">
        <Image
          src="/89day.png"
          alt="Detailed medical diagram illustrating the invisible tissue stress and ulcer progression within the 89-day blind spot between clinic visits, compared to the exterior foot appearance"
          width={1200}
          height={600}
          layout="responsive"
          className="rounded-lg shadow-inner border border-[#1C2B27]/10"
        />
      </div>

    </div>
  );
}

/**
 * Outcome-focused metric cards for this article. Distinct framing from
 * the "ranges to know" grid used in the foam/pressure-mapping post: these
 * are evidence points for why continuous monitoring works, not normal
 * operating ranges.
 */
function OutcomeCards() {
  const metrics = [
    { label: "Fewer returning sores", value: "86", unit: "%", note: "shown in 18-month studies" },
    { label: "Danger zone pressure", value: "200", unit: "kPa", note: "standard risk level for sores" },
    { label: "Daily use needed", value: "4.5", unit: "hr", note: "to see real benefits" },
    { label: "Early fall warning", value: "6\u20138", unit: "wks", note: "found by tracking daily walking changes" },
  ];
  return (
    <div className="mb-10 mt-5 grid gap-3 sm:grid-cols-2">
      {metrics.map((m) => (
        <div
          key={m.label}
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
      <div className="sm:col-span-2 rounded-xl border border-[#1C2B27]/[0.08] bg-white/60 px-5 py-4 text-[15px] text-[#1C2B27]/70">
        Seeing your own foot data helps you learn naturally. Once patients can
        see their pressure levels on a screen, they automatically adjust how
        they walk to protect their feet.
      </div>
    </div>
  );
}

function ClinicalPerspective() {
  return (
    <div className="my-12 overflow-hidden rounded-2xl border border-[#1C2B27]/10 bg-[#1C2B27] text-[#FAFAF7] shadow-[0_20px_50px_-20px_rgba(28,43,39,0.4)]">
      <div className="px-7 py-7 sm:px-9 sm:py-9">
        <span className="inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.14em] text-[#7FAF9C] mb-4">
          <span className="h-1.5 w-1.5 rounded-full bg-[#7FAF9C]" />
          Clinical Perspective
        </span>
        <p className="text-[1.3rem] leading-[1.5] font-semibold text-[#FAFAF7] mb-5">
          At Spandhika Orthotics, we built the Intelligent Orthotic
          &amp; Leg Monitoring System (IOLMS) to bring high-tech foot tracking
          out of the lab and into your daily life.
        </p>
        <p className="text-[16px] leading-[1.75] text-[#FAFAF7]/65 mb-7">
          Traditional foot trackers can cost millions of rupees and are
          stuck in research labs. IOLMS is India&apos;s first
          affordable, water-resistant smart insole made for everyday use.
          It uses 32 tiny sensors and motion trackers to map exactly how
          you walk. It tracks 7 key movement stats in real time to help support
          safer diabetic foot care and reduce injury risks.
        </p>

        <div className="grid grid-cols-3 gap-3 border-t border-[#FAFAF7]/10 pt-6">
          <MiniStat value="32" label="Pressure sensors" />
          <MiniStat value="IP67" label="Waterproof rating" />
          <MiniStat value="7" label="Movement stats tracked" />
        </div>
      </div>
    </div>
  );
}

function MiniStat({ value, label }: { value: string; label: string }) {
  return (
    <div>
      <div className="text-[1.4rem] font-semibold tabular-nums text-[#FAFAF7] leading-none mb-1">
        {value}
      </div>
      <div className="text-[11.5px] leading-tight text-[#FAFAF7]/45">{label}</div>
    </div>
  );
}