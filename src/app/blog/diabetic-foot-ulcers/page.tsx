import type { Metadata } from "next";
import Image from "next/image";
import BlogArticle from "@/components/blog/BlogArticle";
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
    <BlogArticle slug="diabetic-foot-ulcers" jsonLd={jsonLd}>
        <article className="text-[17px] leading-[1.85] text-foreground/80">

          <p className="text-[21px] leading-[1.65] text-foreground font-normal mb-9">
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

          <blockquote className="my-10 border-l-2 border-primary/40 pl-6 py-1 text-[19px] leading-[1.7] text-foreground/70 italic">
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
    </BlogArticle>
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
    <h2 className="mt-16 mb-6 text-[1.65rem] sm:text-[1.85rem] leading-tight tracking-[-0.01em] text-primary font-semibold">
      {children}
    </h2>
  );
}

function Stat({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-baseline rounded-md bg-primary/[0.08] px-1.5 py-0.5 font-semibold text-primary tabular-nums text-[0.95em] whitespace-nowrap">
      {children}
    </span>
  );
}

function ConsequenceList({ items }: { items: string[] }) {
  return (
    <ul className="mb-10 mt-5 grid gap-px overflow-hidden rounded-xl border border-foreground/[0.08] bg-foreground/[0.08] sm:grid-cols-2">
      {items.map((item, i) => (
        <li
          key={i}
          className="flex items-start gap-3 bg-background px-5 py-4 text-[15.5px] leading-snug text-foreground/75"
        >
          <span className="mt-[7px] h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
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
    <div className="mb-10 mt-7 rounded-xl border border-foreground/[0.08] bg-white/60 px-6 py-7 sm:px-8 sm:py-8">
      <div className="mb-7 flex items-center justify-between text-[11px] font-semibold uppercase tracking-[0.08em] text-foreground/40">
        <span>Clinic visit</span>
        <span className="text-primary">~89 days unmonitored</span>
        <span>Next clinic visit</span>
      </div>

      {/* Track */}
      <div className="relative h-2 rounded-full bg-primary/15 mb-3">
        {/* Solid confidence at day 0 */}
        <div className="absolute left-0 top-0 h-full w-[6%] rounded-full bg-primary" />
        {/* Dashed blind-spot zone */}
        <div
          className="absolute top-0 h-full"
          style={{
            left: "6%",
            right: "6%",
            backgroundImage:
              "repeating-linear-gradient(90deg, color-mix(in oklab, var(--foreground) 20%, transparent) 0px, color-mix(in oklab, var(--foreground) 20%, transparent) 6px, transparent 6px, transparent 12px)",
            borderRadius: "9999px",
          }}
        />
        {/* Threshold breach marker, perfectly centered now */}
        <div
          className="absolute -top-1.5 flex flex-col items-center -translate-x-1/2"
          style={{ left: "50%" }}
        >
          <span className="h-5 w-[3px] rounded-full bg-primary" />
        </div>
        {/* Solid confidence at day 89 */}
        <div className="absolute right-0 top-0 h-full w-[6%] rounded-full bg-primary" />
      </div>

      {/* Labels under track */}
      <div className="relative h-10 text-[12px] text-foreground/50">
        <span className="absolute left-0 -translate-x-1/2 sm:translate-x-0">
          Day 0
        </span>
        <span
          className="absolute -translate-x-1/2 text-center font-semibold text-foreground/70 leading-tight"
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

      <p className="mt-5 pt-5 border-t border-foreground/[0.06] text-[14.5px] leading-relaxed text-foreground/55">
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
          className="rounded-lg shadow-inner border border-foreground/10"
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
          className="rounded-xl border border-foreground/[0.08] bg-white/60 px-5 py-4"
        >
          <div className="text-[12px] font-semibold uppercase tracking-[0.07em] text-foreground/45 mb-1.5">
            {m.label}
          </div>
          <div className="flex items-baseline gap-1.5">
            <span className="text-[1.6rem] font-semibold tabular-nums text-foreground leading-none">
              {m.value}
            </span>
            <span className="text-sm font-medium text-primary">{m.unit}</span>
          </div>
          <div className="text-[13px] text-foreground/45 mt-1">{m.note}</div>
        </div>
      ))}
      <div className="sm:col-span-2 rounded-xl border border-foreground/[0.08] bg-white/60 px-5 py-4 text-[15px] text-foreground/70">
        Seeing your own foot data helps you learn naturally. Once patients can
        see their pressure levels on a screen, they automatically adjust how
        they walk to protect their feet.
      </div>
    </div>
  );
}

function ClinicalPerspective() {
  return (
    <div className="my-12 overflow-hidden rounded-2xl border border-foreground/10 bg-primary text-primary-foreground shadow-[0_20px_50px_-20px_rgba(28,43,39,0.4)]">
      <div className="px-7 py-7 sm:px-9 sm:py-9">
        <span className="inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.14em] text-[var(--brand-green)] mb-4">
          <span className="h-1.5 w-1.5 rounded-full bg-[var(--brand-green)]" />
          Clinical Perspective
        </span>
        <p className="text-[1.3rem] leading-[1.5] font-semibold text-primary-foreground mb-5">
          At Spandhika Orthotics, we built the Intelligent Orthotic
          &amp; Leg Monitoring System (IOLMS) to bring high-tech foot tracking
          out of the lab and into your daily life.
        </p>
        <p className="text-[16px] leading-[1.75] text-primary-foreground/65 mb-7">
          Traditional foot trackers can cost millions of rupees and are
          stuck in research labs. IOLMS is India&apos;s first
          affordable, water-resistant smart insole made for everyday use.
          It uses 32 tiny sensors and motion trackers to map exactly how
          you walk. It tracks 7 key movement stats in real time to help support
          safer diabetic foot care and reduce injury risks.
        </p>

        <div className="grid grid-cols-3 gap-3 border-t border-background/10 pt-6">
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
      <div className="text-[1.4rem] font-semibold tabular-nums text-primary-foreground leading-none mb-1">
        {value}
      </div>
      <div className="text-[11.5px] leading-tight text-primary-foreground/45">{label}</div>
    </div>
  );
}