"use client";

import { useState } from "react";
import Image from "next/image";

function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex items-center gap-3 text-slate-500 text-xs font-semibold tracking-widest uppercase mb-6">
      <span className="h-px w-6 bg-[#10b981]" />
      {children}
    </div>
  );
}

export default function VideoSection() {
  const [isPlaying, setIsPlaying] = useState(false);

  const videoId = "frtB6dHuL1s";
  // URL for the normal, full video with sound
  const activeVideoUrl = `https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0`;

  return (
    <section
      id="about"
      className="relative overflow-hidden bg-[#FAFAF7] py-20 md:py-28"
    >
      <div className="relative z-10 mx-auto max-w-[1300px] px-4 sm:px-6">
        <div className="grid items-center gap-10 lg:grid-cols-12 lg:gap-16">
          {/* ═══ LEFT COLUMN: Professionally Styled Text ═══ */}
          <div className="flex flex-col lg:col-span-5">
            <div className="mb-1 flex items-center gap-3">
              <Eyebrow>Introduction</Eyebrow>
            </div>

            <h2 className="mb-8 text-3xl font-extrabold leading-[1.15] tracking-tight text-[#1C2B27] sm:text-4xl md:text-[44px]">
              Spandhika Orthotics
            </h2>

            {/* Lead Paragraph: Slightly larger and darker to grab attention */}
            <p className="mb-6 text-[17px] leading-[1.7] text-[#1C2B27]/90 sm:text-md">
              Each step reveals a new story about your body and how it moves.
              Traditional insoles consider only shock absorption and stability.
              We start somewhere else:{" "}
              <span className="font-semibold text-[#3D6B5C]">
                hearing every step.
              </span>
            </p>

            <p className="mb-6 text-[17px] leading-[1.7] text-[#1C2B27]/90 sm:text-md">
              Smart sensors built into our custom orthotics generate detailed
              pressure maps from every stride, supporting gait analysis that
              helps prevent foot complications in diabetic patients, guide
              rehabilitation, and restore everyday mobility.
            </p>

            {/* Final Prompt: Styled like a subtle, sophisticated caption */}
            <p className="flex items-center gap-2 text-sm font-medium tracking-wide text-[#1C2B27]/60">
              Watch the video to see how we put it all into practice.
            </p>
          </div>

          {/* ═══ RIGHT COLUMN: Framed Video Player ═══ */}
          <div className="mt-10 w-full lg:col-span-7 lg:mt-0">
            <div
              className="group relative w-full overflow-hidden rounded-2xl border-[3px] border-[#3D6B5C] bg-[#1C2B27] shadow-[0_20px_50px_-12px_rgba(0,0,0,0.15)] transition-all duration-500 hover:shadow-[0_25px_50px_-12px_rgba(0,0,0,0.2)]"
              style={{ aspectRatio: "16 / 9" }}
            >
              {isPlaying ? (
                // --- ACTIVE STATE ---
                <iframe
                  src={activeVideoUrl}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="absolute inset-0 h-full w-full border-0"
                />
              ) : (
                // --- PREVIEW STATE ---
                <div 
                  className="absolute inset-0 h-full w-full cursor-pointer bg-[#1C2B27]"
                  onClick={() => setIsPlaying(true)}
                  role="button"
                  tabIndex={0}
                  aria-label="Play introduction video"
                  onKeyDown={(e) => {
                    if (e.key === "Enter" || e.key === " ") {
                      e.preventDefault();
                      setIsPlaying(true);
                    }
                  }}
                >
                  {/* Seamless native HTML5 Video */}
                  <video
                    src="/preview_.mp4"
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="absolute inset-0 h-full w-full object-cover transition-transform duration-[1.5s] group-hover:scale-105"
                  />

                  {/* Elegant Gradient Overlay to frame the video smoothly */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1C2B27]/40 via-transparent to-transparent opacity-60 transition-opacity duration-500 group-hover:opacity-30" />

                  {/* 3D "Pop-Out" Play Button */}
                  <div className="absolute top-6 left-6 pointer-events-none sm:top-8 sm:left-8">
                    
                    {/* Slowed down ambient pulse */}
                    <div className="absolute inset-0 animate-[ping_3s_cubic-bezier(0,0,0.2,1)_infinite] rounded-full bg-[#3D6B5C] opacity-20"></div>

                    {/* Main Button */}
                    <div className="relative z-10 flex h-14 w-14 items-center justify-center rounded-full bg-[#3D6B5C] shadow-[0_8px_24px_rgba(61,107,92,0.6)] ring-4 ring-white/50 transition-all duration-500 group-hover:scale-110 group-hover:bg-[#2E5246] group-hover:ring-white/80 sm:h-16 sm:w-16">
                      <svg
                        className="h-6 w-6 translate-x-0.5 text-white transition-transform duration-500 group-hover:scale-105 sm:h-7 sm:w-7"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M8 5v14l11-7z" />
                      </svg>
                    </div>
                  </div>
                  
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}