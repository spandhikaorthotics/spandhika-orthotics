"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Image from "next/image";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import { montserrat } from "@/lib/fonts";

const audiences = [
  {
    title: "For you",
    description:
      "Understand your steps — whether you're managing foot health, recovering, or staying active.",
    image: "/audience/for-you.jpg",
    alt: "Elderly woman using a crutch walking confidently beside her companion on a city street",
    position: "center 35%",
  },
  {
    title: "For families",
    description:
      "A clearer picture of a loved one's walking, for more informed conversations about their care.",
    image: "/audience/for-families.jpg",
    alt: "A person supported during walking rehabilitation",
    position: "center 25%",
  },
  {
    title: "For clinicians",
    description:
      "Explore pressure, balance and gait insights to support your clinical assessment.",
    image: "/audience/for-clinicians.jpg",
    alt: "Foot care in a clinical setting",
    position: "center 25%",
  },
];

const concerns = [
  { label: "Ball of foot pain", detail: "Extra support where you need it most", src: "/BOFP_.png" },
  { label: "Heel pain", detail: "Better cushioning for lasting comfort", src: "/H_P.png" },
  { label: "Diabetic foot", detail: "Gentle support and all-day comfort", src: "/DF_.png" },
  { label: "Fallen arches", detail: "Arch support for better comfort", src: "/F_A.png" },
  { label: "Bunions", detail: "Reduces pressure for greater comfort", src: "/BU_.png" },
  { label: "Flat feet", detail: "Better support for improved stability", src: "/F_F.png" },
];

export default function WhoItsFor() {
  const trackRef = useRef<HTMLDivElement>(null);
  const [canPrev, setCanPrev] = useState(false);
  const [canNext, setCanNext] = useState(false);

  const updateArrows = useCallback(() => {
    const el = trackRef.current;
    if (!el) return;
    setCanPrev(el.scrollLeft > 4);
    setCanNext(el.scrollLeft + el.clientWidth < el.scrollWidth - 4);
  }, []);

  useEffect(() => {
    updateArrows();
    window.addEventListener("resize", updateArrows);
    return () => window.removeEventListener("resize", updateArrows);
  }, [updateArrows]);

  const scrollByCard = (dir: 1 | -1) => {
    const el = trackRef.current;
    if (!el) return;
    const card = el.firstElementChild as HTMLElement | null;
    const step = card ? card.offsetWidth + 16 : el.clientWidth * 0.8;
    el.scrollBy({ left: dir * step, behavior: "smooth" });
  };

  return (
    <section
      id="who"
      className={`${montserrat.className} scroll-mt-24 bg-[color-mix(in_oklab,var(--secondary-container)_45%,white)] py-16 lg:py-20`}
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="max-w-3xl">
          <p className="text-xs font-semibold uppercase tracking-[0.12em] text-primary">
            Who it&apos;s for
          </p>
          <h2 className="mt-3 text-3xl font-semibold leading-[1.18] text-primary sm:text-[40px]">
            Care that fits your life.
          </h2>
          <p className="mt-4 text-[17px] leading-[1.75] text-on-surface-variant">
            For your own foot health, a loved one&apos;s care, or a deeper
            understanding of your patients&apos; walking.
          </p>
        </div>

        <div className="relative mt-10" role="region" aria-label="Who smart insoles are for">
          <div
            ref={trackRef}
            onScroll={updateArrows}
            tabIndex={0}
            className="flex snap-x snap-mandatory gap-4 overflow-x-auto scroll-smooth pb-1 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
          >
            {audiences.map((a) => (
              <div
                key={a.title}
                className="w-[82%] shrink-0 snap-start sm:w-[calc((100%-1rem)/2)] lg:w-[calc((100%-2rem)/3)]"
              >
                <a
                  href="#waitlist"
                  className="group relative block h-full overflow-hidden rounded-lg border border-outline-variant/70 bg-card transition-shadow duration-300 hover:shadow-xl"
                >
                  <div className="relative aspect-[4/3] overflow-hidden bg-muted">
                    <Image
                      src={a.image}
                      alt={a.alt}
                      fill
                      sizes="(min-width: 1024px) 400px, (min-width: 640px) 50vw, 82vw"
                      style={{ objectPosition: a.position }}
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-primary/25 via-transparent to-transparent" />
                  </div>
                  <div className="flex items-start justify-between gap-4 p-5">
                    <div>
                      <span className="block text-[0.65rem] font-semibold uppercase tracking-[0.22em] text-primary/70">
                        Best for
                      </span>
                      <span className="mt-2 block text-xl font-semibold text-primary">
                        {a.title}
                      </span>
                      <span className="mt-2 block text-[16px] leading-relaxed text-on-surface-variant">
                        {a.description}
                      </span>
                    </div>
                    <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-primary text-primary-foreground transition-transform duration-300 group-hover:translate-x-1">
                      <ArrowRight className="h-5 w-5" aria-hidden="true" />
                    </span>
                  </div>
                </a>
              </div>
            ))}
          </div>

          {(canPrev || canNext) && (
            <div className="mt-3 flex items-center justify-between gap-2">
              <button
                type="button"
                aria-label="Previous"
                onClick={() => scrollByCard(-1)}
                disabled={!canPrev}
                className="grid h-11 w-11 cursor-pointer place-items-center rounded-full border border-outline-variant bg-background shadow-sm transition-colors hover:bg-accent disabled:cursor-not-allowed disabled:opacity-40"
              >
                <ChevronLeft className="h-5 w-5" aria-hidden="true" />
              </button>
              <button
                type="button"
                aria-label="Next"
                onClick={() => scrollByCard(1)}
                disabled={!canNext}
                className="grid h-11 w-11 cursor-pointer place-items-center rounded-full border border-outline-variant bg-background shadow-sm transition-colors hover:bg-accent disabled:cursor-not-allowed disabled:opacity-40"
              >
                <ChevronRight className="h-5 w-5" aria-hidden="true" />
              </button>
            </div>
          )}
        </div>

        {/* Everyday foot concerns */}
        <div id="foot-concerns" className="mt-10 border-t border-outline-variant/70 pt-10">
          <h3 className="text-lg font-semibold text-primary sm:text-xl">
            Everyday foot concerns, understood.
          </h3>
          <ul className="mt-8 grid grid-cols-2 gap-x-6 gap-y-10 sm:grid-cols-3 lg:grid-cols-6">
            {concerns.map((c) => (
              <li key={c.label} className="group flex flex-col items-center text-center">
                <div className="relative grid aspect-square w-full max-w-[150px] place-items-center overflow-hidden rounded-full bg-white shadow-[0_8px_24px_-12px_rgba(16,40,30,0.25)] ring-1 ring-outline-variant/40 transition-shadow duration-300 group-hover:shadow-[0_14px_30px_-12px_rgba(16,40,30,0.35)]">
                  <Image
                    src={c.src}
                    alt=""
                    width={120}
                    height={120}
                    className="h-[70%] w-[70%] object-contain mix-blend-multiply transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <span className="mt-4 block text-[16px] font-medium text-foreground">{c.label}</span>
                <span className="mt-1 block max-w-[180px] text-sm leading-snug text-on-surface-variant">
                  {c.detail}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
