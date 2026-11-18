"use client";

import { useEffect, useRef, useState } from "react";
import { ArrowRight, ChevronDown, Pause, Play } from "lucide-react";
import { montserrat } from "@/lib/fonts";

/**
 * Full-screen background video hero. Clicking anywhere on the video
 * (outside the buttons) toggles playback; a corner button shows the state.
 */
export default function HomeVideoHero() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [playing, setPlaying] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    video.play().catch(() => {});
  }, []);

  const togglePlayback = () => {
    const video = videoRef.current;
    if (!video) return;
    if (video.paused) video.play().catch(() => {});
    else video.pause();
  };

  return (
    <section
      id="top"
      className={`${montserrat.className} home-hero relative isolate flex cursor-pointer items-center justify-center overflow-hidden`}
      onClick={togglePlayback}
    >
      <video
        ref={videoRef}
        className="absolute inset-0 -z-20 h-full w-full object-cover"
        src="/hero.mp4"
        loop
        muted
        playsInline
        preload="auto"
        aria-hidden="true"
        onPlay={() => setPlaying(true)}
        onPause={() => setPlaying(false)}
      />
      <div className="hero-shade pointer-events-none absolute inset-0 -z-10" aria-hidden="true" />

      {/* Content: the wrapper ignores clicks so they reach the section; interactive children opt back in. */}
      <div className="hero-content pointer-events-none mx-auto flex w-full max-w-4xl flex-col items-center px-6 pb-20 pt-28 text-center text-white">
        <p className="text-[11px] font-semibold uppercase tracking-[0.25em] text-white/80 sm:text-xs">
          Spandhika Orthotics &middot; Saarthi
        </p>

        <h1 className="mt-5 text-[38px] font-semibold leading-[1.1] tracking-tight sm:text-5xl lg:text-[64px]">
          Smart Insights.
          <br />
          From Every Step.
        </h1>

        <p className="mx-auto mt-6 max-w-xl text-[16px] leading-[1.65] text-white/85 sm:text-[18px]">
          Smart insoles that monitor your feet. Understand your pressure,
          balance and walking in one simple app.
        </p>

        <div className="pointer-events-auto mt-9 flex flex-col items-center gap-4 sm:flex-row">
          <a
            href="#waitlist"
            onClick={(e) => e.stopPropagation()}
            className="inline-flex h-12 items-center justify-center gap-2 rounded-full bg-white px-7 text-[15px] font-semibold text-primary shadow-lg transition-all hover:-translate-y-0.5 hover:bg-secondary-container"
          >
            Join the waitlist <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </a>
          <a
            href="#how"
            onClick={(e) => e.stopPropagation()}
            className="inline-flex h-12 items-center gap-2 rounded-full border border-white/40 px-6 text-[15px] font-medium text-white backdrop-blur-sm transition-colors hover:bg-white/10"
          >
            See how it works <ChevronDown className="h-4 w-4" aria-hidden="true" />
          </a>
        </div>
      </div>

      <button
        type="button"
        onClick={(e) => {
          e.stopPropagation();
          togglePlayback();
        }}
        aria-label={playing ? "Pause background video" : "Play background video"}
        className="absolute bottom-5 right-5 grid h-11 w-11 cursor-pointer place-items-center rounded-full border border-white/40 bg-black/30 text-white backdrop-blur-md transition-colors hover:bg-black/50 sm:bottom-8 sm:right-8"
      >
        {playing ? <Pause className="h-4 w-4" /> : <Play className="h-4 w-4 translate-x-px" />}
      </button>
    </section>
  );
}
