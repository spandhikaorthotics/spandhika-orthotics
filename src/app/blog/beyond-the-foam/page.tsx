import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Beyond the Foam: How Pressure Mapping Helps Athletes Recover Faster",
  description: "Learn how smart load distribution, continuous pressure mapping, and gait analysis help athletes recover faster by reducing repetitive strain and supporting efficient movement patterns.",
  openGraph: {
    images: ["/1.png"],
  }
};
// ----------------------------

export default function BlogPost() {
  // Define the schema object tailored to this specific article
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": "Beyond the Foam: How Pressure Mapping Helps Athletes Recover Faster",
    "image": [
      "https://spandhikaorthotics.in/1.png"
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
    // Update this date whenever you publish new articles
    "datePublished": "2026-06-30T08:00:00+05:30",
    "dateModified": "2026-06-30T08:00:00+05:30",
    "description": "Learn how smart load distribution, continuous pressure mapping, and gait analysis help athletes recover faster by reducing repetitive strain and supporting efficient movement patterns."
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
            Performance
          </span>
          <span className="text-[13px] text-[#1C2B27]/40 font-medium">
            6 min read
          </span>
        </div>

        <h1 className="text-[2.5rem] sm:text-[3.25rem] leading-[1.08] tracking-[-0.02em] text-[#1C2B27] font-bold mb-8">
          Beyond the Foam: How Pressure Mapping Helps Athletes Recover Faster
        </h1>

        <p className="mx-auto text-lg leading-[1.6] text-[#1C2B27]/55 max-w-[600px] font-normal">
          Cushioning quiets the impact you feel. It rarely fixes the load
          pattern underneath it &mdash; and that's usually where lasting
          recovery is won or lost.
        </p>
      </header>

      {/* 2. Hero Image — aligned to the same column as the text */}
      <div className="mx-auto max-w-[760px] px-6 mt-10 mb-14">
        <div className="relative aspect-[16/9] w-full overflow-hidden bg-[#1C2B27]/5 rounded-xl ring-1 ring-[#1C2B27]/[0.06]">
          <Image
            src="/1.png"
            alt="Runner's shoe showing dynamic pressure mapping load distribution"
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
            Athletes often assume that more cushioning means better
            protection. Whether it&apos;s running shoes, gel inserts, or soft
            insoles, comfort is frequently associated with injury prevention
            and recovery. While cushioning can reduce the sensation of
            impact, it doesn&apos;t always address how forces move through
            the foot during activity.
          </p>

          <p className="mb-7">
            For athletes dealing with recurring foot discomfort, shin pain,
            knee strain, or fatigue after training, the problem may not be a
            lack of cushioning&mdash;it may be poor load distribution.
          </p>

          <SectionHeading>Understanding Load Distribution</SectionHeading>

          <p className="mb-7">
            Every step you take generates forces that travel through your
            feet, ankles, knees, and hips. During running and high-impact
            activities, these forces can be several times your body weight,
            with optimized athletes maintaining high gait speeds of{" "}
            <Stat>2.5&ndash;6 m/s</Stat>.
          </p>

          <p className="mb-5">
            Ideally, pressure should be distributed efficiently across the
            foot. However, when certain areas absorb excessive stress
            repeatedly, tissues can become overloaded. Clinical data shows
            that in-shoe peak pressures exceeding <Stat>200 kPa</Stat> can act
            as an alert threshold for elevated injury or ulcer risk. Over
            time, poor load distribution may contribute to:
          </p>

          <ConsequenceList
            items={[
              "Heel pain and asymmetric impact loading",
              "Plantar fasciitis linked to hyperpronation and excessive eversion",
              "Metatarsal discomfort from forefoot pressure exceeding safe thresholds",
              "Lateral instability risks associated with excessive inversion",
              "Knee irritation driven by an abnormal foot progression angle",
              "Muscle fatigue and reduced push-off power during plantarflexion",
            ]}
          />

          <SectionHeading>Why Cushioning Alone Isn&apos;t Enough</SectionHeading>

          <p className="mb-7">
            Soft foam and gel inserts are designed to absorb impact, which
            can provide immediate comfort. However, they often do little to
            improve the underlying mechanics that cause excessive loading.
          </p>

          <blockquote className="my-10 border-l-2 border-[#3D6B5C]/40 pl-6 py-1 text-[19px] leading-[1.7] text-[#1C2B27]/70 italic">
            Imagine driving a car with misaligned wheels. Adding softer
            tires may improve the ride temporarily, but the uneven wear and
            instability remain.
          </blockquote>
          
          <figure className="my-10 w-full overflow-hidden rounded-xl border border-[#1C2B27]/[0.08] bg-[#FAFAF7]">
            <div className="relative aspect-[18/9] w-full bg-[#1C2B27]/5">
              <Image
                src="/pronation.png"
                alt="Digital heat map showing dynamic pressure distribution across a foot"
                fill
                className="object-cover object-center"
              />
            </div>
            <figcaption className="px-5 py-3.5 text-[14px] leading-snug text-[#1C2B27]/60 text-center border-t border-[#1C2B27]/[0.08]">
              Dynamic pressure mapping reveals exactly where your unique stride places the most stress.
            </figcaption>
          </figure>

          <p className="mb-7">
            Similarly, cushioning without proper biomechanical support may
            reduce discomfort while allowing inefficient movement patterns
            to continue. For many athletes, lasting improvement requires
            both shock absorption and effective force management.
          </p>

          <SectionHeading>The Need for Continuous Pressure Mapping</SectionHeading>

          <figure className="my-10 w-full overflow-hidden rounded-xl border border-[#1C2B27]/[0.08] bg-[#FAFAF7]">
            <div className="relative aspect-[16/9] w-full bg-[#1C2B27]/5">
              <Image
                src="/degradation.png"
                alt="Fatigue-induced gait degradation showing pressure mapping comparison between a fresh and fatigued athlete"
                fill
                className="object-cover object-center"
              />
            </div>
            <figcaption className="px-5 py-3.5 text-[14px] leading-snug text-[#1C2B27]/60 text-center border-t border-[#1C2B27]/[0.08]">
              Fatigue-induced gait degradation: Localized high-pressure hot spots emerge as the athlete tires over time.
            </figcaption>
          </figure>

          <p className="mb-7">
            Historically, athletes have relied on standard 10-minute clinic
            assessments to evaluate their stride. However, gait parameters
            degrade significantly after <Stat>20&ndash;30 min</Stat> of
            continuous walking or running. A brief lab session captures the
            athlete&apos;s best performance, completely missing the
            fatigue-dependent gait changes that occur when injuries actually
            happen.
          </p>

          <p className="mb-5">
            Modern continuous pressure mapping systems can identify exactly
            what happens when fatigue sets in, including:
          </p>

          <GaitMetricsGrid />

          <SectionHeading>Recovery Isn&apos;t Just About Rest</SectionHeading>

          <p className="mb-7">
            Many athletes focus solely on stretching, strengthening, and
            rest when recovering from injury. While these strategies are
            important, recovery is also heavily influenced by what happens
            every time the foot contacts the ground.
          </p>

          <p className="mb-7">
            If excessive pressure continues to be concentrated in the same
            areas, irritation can persist despite other treatments.
            Addressing biomechanics alongside rehabilitation often provides
            a more complete recovery strategy.
          </p>

          {/* Clinical Perspective Highlight Block */}
          <ClinicalPerspective />

          <SectionHeading>A Smarter Approach to Performance and Recovery</SectionHeading>

          <p className="mb-7">
            Athletic recovery is about more than reducing impact. It&apos;s
            about helping the body manage forces efficiently with every
            step.
          </p>

          <p className="mb-7">
            While cushioning can improve comfort, smart load distribution
            focuses on the mechanics behind movement. By understanding
            where pressure builds and how it can be redistributed through
            continuous data, athletes can support recovery, improve
            comfort, and move with greater confidence.
          </p>

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

function GaitMetricsGrid() {
  const metrics = [
    { label: "Stride length", value: "150\u2013200", unit: "cm", note: "optimized range for runners" },
    { label: "Stride variability", value: "< 1", unit: "%", note: "ceiling for highly optimized athletes" },
    { label: "Foot progression angle", value: "7\u201310", unit: "\u00B0", note: "consistent toe-out range" },
    { label: "Dorsiflexion (swing phase)", value: "10\u201325", unit: "\u00B0", note: "optimal range" },
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
        Plus eversion and inversion asymmetry that develops as muscles
        tire&mdash;visible only once fatigue sets in, not during a short
        clinic walk.
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
          At Spandhika Orthotics, we developed the Intelligent Orthotic
          &amp; Leg Monitoring System (IOLMS) to bring clinical-grade data
          out of the lab and into the real world.
        </p>
        <p className="text-[16px] leading-[1.75] text-[#FAFAF7]/65 mb-7">
          Unlike traditional systems that cost up to &#8377;83 Lakhs and are
          confined to research labs, IOLMS is India&apos;s first
          affordable, IP67-rated smart insole designed for continuous
          daily home use. By utilizing a 32-node FSR sensor matrix mapping
          pressures up to 1,000 kPa and a 9-axis IMU, we provide real-time
          biomechanical analysis on all 7 critical gait parameters to
          support injury prevention and optimized recovery.
        </p>

        <div className="grid grid-cols-3 gap-3 border-t border-[#FAFAF7]/10 pt-6">
          <MiniStat value="32" label="FSR sensor nodes" />
          <MiniStat value="IP67" label="Rated, daily use" />
          <MiniStat value="7" label="Gait parameters tracked" />
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