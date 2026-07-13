import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export const metadata: Metadata = {
  title: "Plantar Fasciitis Relief: Why Standard Insoles Often Fall Short",
  description: "Learn why standard soft insoles often fail to fix heel pain (plantar fasciitis), and how tracking your unique foot pressure can help target the root cause.",
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
    "description": "Learn why standard soft insoles often fail to fix heel pain (plantar fasciitis), and how tracking your unique foot pressure can help target the root cause."
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
          Soft foam can hide your heel pain for a little while. But it rarely
          fixes the uneven pressure that caused the pain in the first
          place&mdash;and that is usually the key to lasting relief.
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
            If you have ever felt a sharp, stabbing pain in your heel right after
            getting out of bed, you are not alone. This condition, called plantar
            fasciitis, is a very common cause of foot pain. It affects everyone
            from nurses and teachers to runners and active seniors.
          </p>

          <p className="mb-7">
            Many people buy soft insoles or extra-cushioned shoes hoping for
            relief. While these might feel good at first, they do not usually fix
            the real reason your heel started hurting.
          </p>

          <SectionHeading>Understanding the Cause of Plantar Fasciitis</SectionHeading>

          <p className="mb-7">
            The plantar fascia is a thick, strong band of tissue running along
            the bottom of your foot. It connects your heel to your toes. Think
            of it like a bowstring that holds up your arch and absorbs the shock
            every time you take a step.
          </p>

          <ArticleFigure
            src="/plantar_fascia.png"
            alt="Diagram showing the plantar fascia band connecting the heel bone to the toes"
            caption="The plantar fascia acts like a shock-absorbing bowstring that supports your arch."
          />

          <p className="mb-5">
            When you put too much stress on this tissue day after day, tiny tears
            and swelling can happen. This is what causes that sharp heel pain.
            Things that add to this stress include:
          </p>

          <ConsequenceList
            items={[
              "Having flat feet or very high arches",
              "Standing or walking with your feet rolled inward or outward",
              "Standing on hard floors for long hours",
              "Wearing shoes that lack proper support",
              "Sudden changes in how you walk or run",
              "Quickly increasing your exercise routine",
            ]}
          />

          <SectionHeading>Why Soft Insoles Aren&apos;t Always Enough</SectionHeading>

          <p className="mb-7">
            Soft foam or gel inserts can give you quick comfort by padding your
            sore heel. But adding a soft pad does not change how your body weight
            presses down on your feet when you move.
          </p>

          <p className="mb-7">
            Often, a soft insole feels great on day one, but it is too weak to
            actually support your foot during a long shift. To truly help your
            feet, you need more than just a soft landing. Your foot needs firm,
            structured support to spread your weight evenly with every step.
          </p>

          <CushioningVsSupport />

          <SectionHeading>The Importance of Personalized Foot Support</SectionHeading>

          <p className="mb-7">
            Everyone walks a little differently. How your foot hits the ground
            and where your weight lands is completely unique to you. Because of
            this, standard insoles from a pharmacy shelf often fail to do the trick.
          </p>

          <ArticleFigure
            src="/heat-map.png"
            alt="Digital heat map showing dynamic pressure distribution across a foot"
            caption="Tracking your foot pressure shows exactly where your unique walking style puts the most stress."
          />

          <p className="mb-5">
            By tracking exactly how you walk and where you put pressure, we can
            see exactly why your foot hurts. A smart, personalized approach
            focuses on:
          </p>

          <ConsequenceList
            items={[
              "Arch support shaped specifically for your foot",
              "Spreading your body weight evenly across your whole foot",
              "Keeping your ankles and feet stable while you stand or walk",
              "Helping your feet, knees, and legs line up correctly",
            ]}
          />

          <blockquote className="my-10 border-l-2 border-[#3D6B5C]/40 pl-6 py-1 text-[19px] leading-[1.7] text-[#1C2B27]/70 italic">
            Knowing exactly how you walk is just as important as knowing where
            your heel hurts.
          </blockquote>

          <SectionHeading>A More Informed Approach to Relief</SectionHeading>

          <p className="mb-7">
            By tracking your movement and foot pressure, we can build a solution
            that actually fits the way you walk. Instead of just adding foam
            padding, this smart approach aims to improve how your foot works,
            reduce stress on your muscles, and help you stay active.
          </p>

          <p className="mb-7">
            Heel pain can be incredibly frustrating. But with the right tracking,
            proper support, and smart care, you can help your feet recover and
            walk comfortably again.
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
          <li>Softens the impact when your foot hits the ground</li>
          <li>Feels comfortable for a short time</li>
          <li>Does not fix how your body weight presses on your foot</li>
          <li>Leaves the bad walking habits unchanged</li>
        </ul>
      </div>
      <div className="rounded-xl border border-[#3D6B5C]/20 bg-[#3D6B5C]/[0.05] px-6 py-6">
        <div className="mb-3 inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.1em] text-[#3D6B5C]">
          <span className="h-1.5 w-1.5 rounded-full bg-[#3D6B5C]" />
          Pressure-mapped support
        </div>
        <ul className="space-y-2.5 text-[15px] leading-snug text-[#1C2B27]/75">
          <li>Finds exactly where your foot takes the hardest hits</li>
          <li>Supports your posture and balance, not just the pain</li>
          <li>Shifts your weight away from your sore heel</li>
          <li>Helps fix the root cause, instead of just hiding the pain</li>
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
          At Spandhika Orthotics, we believe that tracking how you move is the
          secret to fixing why you hurt.
        </p>
        <p className="text-[16px] leading-[1.75] text-[#FAFAF7]/65">
          Using smart sensors to track your steps, we design insoles that
          support your unique walking style. We do not just rely on soft foam.
          We aim to help reduce the pressure causing your pain, supporting a
          faster and more lasting recovery.
        </p>
      </div>
    </aside>
  );
}