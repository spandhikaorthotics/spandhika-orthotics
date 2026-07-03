import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export const metadata: Metadata = {
  title: "Plantar Fasciitis Relief: Why Standard Insoles Often Fall Short",
  description: "Learn why standard insoles often fall short for plantar fasciitis and how personalized, dynamic pressure mapping can correct the root cause of heel pain.",
  openGraph: {
    images: ["/4.png"],
  }
};

export default function BlogPost() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": "Plantar Fasciitis Relief: Why Standard Insoles Often Fall Short",
    "image": [
      "https://spandhikaorthotics.in/4.png"
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
    "datePublished": "2026-06-23T08:00:00+05:30",
    "dateModified": "2026-06-23T08:00:00+05:30",
    "description": "Learn why standard insoles often fall short for plantar fasciitis and how personalized, dynamic pressure mapping can correct the root cause of heel pain."
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
            Clinical Care
          </span>
          <span className="text-[13px] text-[#1C2B27]/40 font-medium">
            5 min read
          </span>
        </div>

        <h1 className="text-[2.5rem] sm:text-[3.25rem] leading-[1.08] tracking-[-0.02em] text-[#1C2B27] font-bold mb-8">
          Plantar Fasciitis Relief: Why Standard Insoles Often Fall Short
        </h1>

        <p className="mx-auto text-lg leading-[1.6] text-[#1C2B27]/55 max-w-[600px] font-normal">
          Cushioning can quiet heel pain for a while. It rarely fixes the
          uneven load pattern that caused it&mdash;and that&apos;s usually
          where lasting relief is won or lost.
        </p>
      </header>

      {/* Hero Image */}
      <figure className="mx-auto max-w-[760px] px-6 mt-10 mb-14">
        <div className="relative aspect-[16/9] w-full overflow-hidden bg-[#1C2B27]/5 rounded-xl ring-1 ring-[#1C2B27]/[0.06]">
          <Image
            src="/4.png"
            alt="Clinician examining a patient's foot mechanics to assess plantar fasciitis"
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
            If you&apos;ve ever felt a sharp pain in your heel when taking
            your first steps in the morning, you&apos;re not alone.
            Plantar fasciitis is one of the most common causes of foot
            pain, affecting people from healthcare workers and teachers to
            runners and active adults.
          </p>

          <p className="mb-7">
            Many people turn to soft insoles or cushioned shoes for
            relief. While these products can feel comfortable initially,
            they don&apos;t always address the underlying reason the pain
            developed in the first place.
          </p>

          <SectionHeading>Understanding the Cause of Plantar Fasciitis</SectionHeading>

          <p className="mb-7">
            The plantar fascia is a strong band of tissue that runs along
            the bottom of your foot, connecting your heel to your toes.
            Its job is to support your arch and help absorb the forces
            created when you walk, run, or stand for long periods.
          </p>

          <ArticleFigure
            src="/plantar_fascia.png"
            alt="Diagram showing the plantar fascia band connecting the heel bone to the toes"
            caption="The plantar fascia acts like a shock-absorbing bowstring, supporting the arch of your foot."
          />

          <p className="mb-5">
            When excessive stress is placed on this tissue over time,
            small areas of irritation and inflammation can develop,
            leading to the heel pain commonly associated with plantar
            fasciitis. Factors that may contribute include:
          </p>

          <ConsequenceList
            items={[
              "Flat feet or high arches",
              "Poor foot alignment",
              "Long hours of standing",
              "Unsupportive footwear",
              "Changes in walking mechanics",
              "Increased physical activity",
            ]}
          />

          <SectionHeading>Why Soft Insoles Aren&apos;t Always Enough</SectionHeading>

          <p className="mb-7">
            Soft foam or gel inserts can provide temporary comfort by
            cushioning the heel. However, cushioning alone doesn&apos;t
            improve how forces are distributed across the foot.
          </p>

          <p className="mb-7">
            In some cases, an insole may feel comfortable at first but
            fail to provide enough structural support to reduce strain on
            the plantar fascia during daily activities. Effective support
            typically requires more than cushioning&mdash;the foot needs
            proper alignment and stability so that pressure is distributed
            more evenly with each step.
          </p>

          <CushioningVsSupport />

          <SectionHeading>The Importance of Personalized Foot Support</SectionHeading>

          <p className="mb-7">
            Every person walks differently. The way your foot contacts
            the ground, how your weight shifts during movement, and where
            pressure builds up can vary significantly from someone
            else&apos;s. This is why a one-size-fits-all approach may not
            work for everyone.
          </p>

          <ArticleFigure
            src="/heat-map.png"
            alt="Digital heat map showing dynamic pressure distribution across a foot"
            caption="Dynamic pressure mapping reveals exactly where your unique stride places the most stress."
          />

          <p className="mb-5">
            By assessing gait patterns and pressure distribution,
            clinicians can better understand how the foot functions during
            movement and identify areas that may be contributing to
            discomfort. Key considerations often include:
          </p>

          <ConsequenceList
            items={[
              "Arch support tailored to the individual's foot structure",
              "Improved pressure distribution across the foot",
              "Enhanced stability during walking and standing",
              "Better alignment of the foot and lower limb",
            ]}
          />

          <blockquote className="my-10 border-l-2 border-[#3D6B5C]/40 pl-6 py-1 text-[19px] leading-[1.7] text-[#1C2B27]/70 italic">
            Understanding how a person moves is just as important as
            understanding where they feel pain.
          </blockquote>

          <SectionHeading>A More Informed Approach to Relief</SectionHeading>

          <p className="mb-7">
            Through gait assessment and pressure analysis, the goal is to
            create orthotic solutions that support the unique biomechanics
            of each individual. Rather than focusing solely on cushioning,
            this approach is designed to improve foot function, reduce
            excessive strain, and help people stay active more
            comfortably.
          </p>

          <p className="mb-7">
            While plantar fasciitis can be frustrating, the right
            combination of assessment, support, and ongoing care can make
            a meaningful difference in recovery and long-term foot health.
          </p>

          <ClinicalPerspective />

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

function SectionHeading({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="mt-16 mb-6 text-[1.65rem] sm:text-[1.85rem] leading-tight tracking-[-0.01em] text-[#1C2B27] font-bold">
      {children}
    </h2>
  );
}

function ConsequenceList({ items }: { items: string[] }) {
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
 * Explanatory in-article figure, styled to match the hero image treatment
 * (rounded corners, subtle ring) but smaller and captioned, used for the
 * anatomy and pressure-map illustrations this article needs that the
 * other posts don't.
 */
function ArticleFigure({
  src,
  alt,
  caption,
}: {
  src: string;
  alt: string;
  caption: string;
}) {
  return (
    <figure className="my-10">
      <div className="relative aspect-[18/9] w-full overflow-hidden rounded-xl bg-[#1C2B27]/5 ring-1 ring-[#1C2B27]/[0.06]">
        <Image src={src} alt={alt} fill className="object-cover object-center" />
      </div>
      <figcaption className="mt-3 text-center text-[14px] leading-snug text-[#1C2B27]/50">
        {caption}
      </figcaption>
    </figure>
  );
}

/**
 * Content-specific visual for this article: a side-by-side comparison of
 * what soft cushioning does versus what pressure-mapped structural
 * support does. This is the article's actual argument made visible, and
 * is distinct from the timeline/horizon visuals used in the other posts.
 */
function CushioningVsSupport() {
  return (
    <div className="mb-10 mt-7 grid gap-3 sm:grid-cols-2">
      <div className="rounded-xl border border-[#B3493B]/20 bg-[#B3493B]/[0.05] px-6 py-6">
        <div className="mb-3 inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.1em] text-[#B3493B]/70">
          <span className="h-1.5 w-1.5 rounded-full bg-[#B3493B]/60" />
          Soft cushioning
        </div>
        <ul className="space-y-2.5 text-[15px] leading-snug text-[#1C2B27]/65">
          <li>Softens impact you feel underfoot</li>
          <li>Comfortable in the short term</li>
          <li>Doesn&apos;t change how load travels through the foot</li>
          <li>Underlying strain pattern continues unchanged</li>
        </ul>
      </div>
      <div className="rounded-xl border border-[#3D6B5C]/20 bg-[#3D6B5C]/[0.05] px-6 py-6">
        <div className="mb-3 inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.1em] text-[#3D6B5C]">
          <span className="h-1.5 w-1.5 rounded-full bg-[#3D6B5C]" />
          Pressure-mapped support
        </div>
        <ul className="space-y-2.5 text-[15px] leading-snug text-[#1C2B27]/75">
          <li>Identifies exactly where pressure concentrates</li>
          <li>Corrects alignment and stability, not just sensation</li>
          <li>Redistributes load away from irritated tissue</li>
          <li>Targets the mechanical cause, not just the symptom</li>
        </ul>
      </div>
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
          At Spandhika Orthotics, we believe that understanding how a
          person moves is just as important as understanding where they
          feel pain.
        </p>
        <p className="text-[16px] leading-[1.75] text-[#FAFAF7]/65">
          Through gait assessment and dynamic pressure analysis, we build
          orthotic solutions around each person&apos;s unique biomechanics
          rather than relying on cushioning alone&mdash;aiming to reduce
          excessive strain at its source and support lasting recovery.
        </p>
      </div>
    </aside>
  );
}