"use client";

import { useEffect, useRef, useState } from "react";
import { ArrowRight, ChevronDown } from "lucide-react";
import { montserrat } from "@/lib/fonts";

const clamp = (v: number) => Math.min(1, Math.max(0, v));

/**
 * Full-screen background video that stays pinned while the user scrolls
 * through a 180svh section. The headline fades in and the overlay darkens
 * as scroll progress increases.
 */
export default function HomeVideoHero() {
  const sectionRef = useRef<HTMLElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let frame = 0;
    const update = () => {
      frame = 0;
      const el = sectionRef.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const scrollable = rect.height - window.innerHeight;
      setProgress(scrollable > 0 ? clamp(-rect.top / scrollable) : 1);
    };
    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (frame) cancelAnimationFrame(frame);
    };
  }, []);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      video.pause();
    } else {
      video.play().catch(() => {});
    }
  }, []);

  const togglePlayback = () => {
    const video = videoRef.current;
    if (!video) return;
    if (video.paused) video.play().catch(() => {});
    else video.pause();
  };

  const contentOpacity = clamp((progress - 0.12) / 0.48);
  const shadeOpacity = Math.min(1, 0.15 + (progress / 0.65) * 0.85);
  const contentVisible = progress > 0.12;

  return (
    <section
      id="top"
      ref={sectionRef}
      className={`${montserrat.className} home-video-scroll`}
    >
      <div className="home-hero sticky top-0 flex overflow-hidden">
        <video
          ref={videoRef}
          className="absolute inset-0 h-full w-full object-cover"
          src="/hero.mp4"
          loop
          muted
          playsInline
          preload="auto"
          aria-hidden="true"
        />

        <div
          className="hero-shade absolute inset-0 cursor-pointer"
          role="button"
          tabIndex={-1}
          aria-label="Play or pause the background video"
          onClick={togglePlayback}
          style={{ opacity: shadeOpacity }}
        />
        <div className="hero-top-blur pointer-events-none absolute inset-0" aria-hidden="true" />

        <div
          className="relative mx-auto flex w-full max-w-7xl flex-col items-center justify-center px-6 pb-24 pt-32 text-center lg:px-10"
          style={{ opacity: contentOpacity }}
          inert={!contentVisible}
          aria-hidden={!contentVisible}
        >
          <p className="text-xs font-semibold uppercase tracking-[0.2em]">
            Spandhika Orthotics &middot; Saarthi
          </p>

          <h1 className="mt-5 text-[38px] font-semibold leading-[1.12] sm:text-5xl lg:text-[64px]">
            <span className="block">Smart Insights.</span>
            <span className="block">From Every Step.</span>
          </h1>

          <p className="mx-auto mt-6 max-w-xl text-[17px] leading-[1.65] lg:text-[19px]">
            Smart insoles that monitor your feet. Understand your pressure,
            balance and walking in one simple app.
          </p>

          <a
            href="#waitlist"
            className="mt-8 inline-flex h-14 w-full max-w-xs items-center justify-center gap-2 rounded-md bg-secondary-container px-4 text-base font-medium text-primary shadow-sm transition-colors hover:bg-secondary-container/80 sm:w-auto sm:px-8"
          >
            Join the waitlist <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </a>

          <a
            href="#features"
            className="mt-5 inline-flex min-h-11 items-center gap-2 text-[17px] text-white/95 hover:text-white"
          >
            See how it works <ChevronDown className="h-4 w-4" aria-hidden="true" />
          </a>
        </div>
      </div>
    </section>
  );
}
