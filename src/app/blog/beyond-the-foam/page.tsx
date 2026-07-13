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
          Cushioning hides the impact you feel. But it rarely fixes how pressure
          is spread across your feet &mdash; and that is usually where lasting
          recovery begins.
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
            Athletes often think that more cushioning means better
            protection. Whether you use running shoes, gel inserts, or soft
            insoles, we usually link comfort with preventing injuries
            and healing. Cushioning can make your steps feel softer,
            but it does not always fix how weight moves through your foot
            when you run or walk.
          </p>

          <p className="mb-7">
            If you deal with foot pain, shin splints, sore knees,
            or heavy legs after training, the problem might not be your shoes.
            The real issue may be how pressure is spread across your feet.
          </p>

          <SectionHeading>Understanding Load Distribution</SectionHeading>

          <p className="mb-7">
            Every step sends shockwaves through your
            feet, ankles, knees, and hips. When you run or jump,
            this force can be several times your body weight.
            Fast runners hit the ground even harder, moving at speeds of{" "}
            <Stat>2.5&ndash;6 m/s</Stat>.
          </p>

          <p className="mb-5">
            Ideally, your weight should spread evenly across your whole foot.
            But when one spot takes too much stress over and over,
            your muscles and joints get overworked. Studies show
            that when foot pressure crosses a certain level (<Stat>200 kPa</Stat>),
            the risk of injury goes up. Over time, uneven pressure may help cause:
          </p>

          <ConsequenceList
            items={[
              "Heel pain and uneven impact on your joints",
              "Arch pain (plantar fasciitis) caused by feet rolling inward too much",
              "Pain in the ball of your foot from too much front-end pressure",
              "Ankle instability from feet rolling outward",
              "Knee pain caused by your feet pointing too far in or out",
              "Tired muscles and weaker push-offs when you jump or run",
            ]}
          />

          <SectionHeading>Why Cushioning Alone Isn&apos;t Enough</SectionHeading>

          <p className="mb-7">
            Soft foam and gel inserts are made to absorb shock. This gives you
            quick comfort. But they rarely fix the root cause of why your foot
            hits the ground too hard in the first place.
          </p>

          <blockquote className="my-10 border-l-2 border-[#3D6B5C]/40 pl-6 py-1 text-[19px] leading-[1.7] text-[#1C2B27]/70 italic">
            Imagine driving a car with badly aligned wheels. Adding softer
            tires might make the ride feel smoother for a while, but the uneven
            wear and steering problems will still be there.
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
              Tracking your foot pressure in real-time shows exactly where your unique step puts the most stress.
            </figcaption>
          </figure>

          <p className="mb-7">
            Just like that car, padding your shoes without fixing your foot posture
            only hides the problem. Bad walking habits will continue to cause damage.
            For many athletes, lasting recovery requires both a soft landing and
            smart pressure control.
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
              As you get tired, your walking style breaks down. This causes dangerous high-pressure hot spots to form on your feet.
            </figcaption>
          </figure>

          <p className="mb-7">
            In the past, athletes relied on short 10-minute clinic visits
            to check their walking style. But the way your body moves breaks down
            after <Stat>20&ndash;30 min</Stat> of continuous exercise.
            A quick lab test only captures you at your best. It completely
            misses what happens when you are tired&mdash;which is when
            injuries usually happen.
          </p>

          <p className="mb-5">
            Modern smart insoles can track your pressure constantly.
            They help identify exactly what goes wrong when you get tired, including:
          </p>

          <GaitMetricsGrid />

          <SectionHeading>Recovery Isn&apos;t Just About Rest</SectionHeading>

          <p className="mb-7">
            When healing an injury, many athletes only focus on stretching,
            strength training, and resting. These are very important.
            But recovery is also deeply affected by what happens every
            time your foot hits the ground.
          </p>

          <p className="mb-7">
            If too much pressure keeps pounding the same spot on your foot,
            the pain may stay no matter how much you rest. Fixing the way
            your body moves while doing physical therapy often gives you
            the best chance to fully recover.
          </p>

          {/* Clinical Perspective Highlight Block */}
          <ClinicalPerspective />

          <SectionHeading>A Smarter Approach to Performance and Recovery</SectionHeading>

          <p className="mb-7">
            Athletic recovery is about more than just softening the blow.
            It is about helping your body manage weight and pressure safely
            with every single step.
          </p>

          <p className="mb-7">
            Cushioning makes your shoes comfortable. But smart pressure control
            focuses on the mechanics behind your movement. By understanding
            exactly where pressure builds up, you can fix bad habits early.
            This helps support your recovery, improves your daily comfort,
            and lets you move with confidence.
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
    { label: "Step length", value: "150\u2013200", unit: "cm", note: "ideal range for runners" },
    { label: "Step consistency", value: "< 1", unit: "%", note: "goal for top athletes" },
    { label: "Toe angle", value: "7\u201310", unit: "\u00B0", note: "healthy slight outward point" },
    { label: "Ankle lift (swing phase)", value: "10\u201325", unit: "\u00B0", note: "ideal range for clearing the ground" },
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
        They also catch uneven foot rolling (when your foot tilts too far inward or outward) that only happens as your muscles get tired. You won&apos;t see this during a quick doctor&apos;s visit.
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
          you walk. It tracks 7 key movement stats in real time.
          This helps reduce injury risks and supports a faster, safer recovery.
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