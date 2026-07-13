"use client";

import Image from "next/image";

export default function OrthoticsRange() {
  return (
    <section className="bg-[#FAFAF7] py-20 md:py-28">
      {/* Reduced max-width to create more "padding" on the left and right sides */}
      <div className="mx-auto max-w-[1200px] px-6">

        {/* Header */}
        <div className="mb-16 flex flex-col gap-6 md:flex-row md:items-end md:justify-between lg:mb-20">
          <div>
            <div className="mb-5 flex items-center gap-3">
              <div className="h-[1px] w-6 bg-[#3D6B5C]"></div>
              <span className="text-xs font-semibold uppercase tracking-[0.15em] text-[#3D6B5C]">
                Problems we are solving
              </span>
            </div>
            <h2 className="text-3xl font-bold leading-[1.15] tracking-tight text-[#1C2B27] sm:text-4xl md:text-[42px]">
              Orthotics range
            </h2>
          </div>

          <p className="max-w-sm text-[15px] leading-relaxed text-[#1C2B27]/60 sm:text-base">
            Support designed for the foot problems people experience every day.
          </p>
        </div>

        {/* Tightened grid spacing */}
        <div className="grid grid-cols-1 gap-x-4 gap-y-12 sm:grid-cols-2 lg:grid-cols-3 lg:gap-y-16">
          {[
            { label: "Ball of foot pain", detail: "Extra support where you need it most", src: "/BOFP_.png" },
            { label: "Heel pain", detail: "Better cushioning for lasting comfort", src: "/H_P.png" },
            { label: "Diabetic foot", detail: "Gentle support and all-day comfort", src: "/DF_.png" },
            { label: "Fallen arches", detail: "Arch support for better comfort", src: "/F_A.png" },
            { label: "Bunions", detail: "Reduces pressure for greater comfort", src: "/BU_.png" },
            { label: "Flat feet", detail: "Better support for improved stability", src: "/F_F.png" },
          ].map((item) => (
            <div key={item.label} className="group flex flex-col items-center text-center">
              
              {/* Compact, tightly aligned circles with Next.js Image */}
              <div className="mb-6 flex h-36 w-36 items-center justify-center rounded-full bg-white shadow-[0_8px_30px_rgb(0,0,0,0.05)] transition-transform duration-500 group-hover:-translate-y-1">
                <Image 
                  src={item.src} 
                  alt={item.label} 
                  width={200} 
                  height={200} 
                  className="object-contain transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              
              <h3 className="text-[15px] font-semibold leading-snug text-[#1C2B27]">
                {item.label}
              </h3>
              <p className="mt-1 max-w-[180px] text-[14px] leading-relaxed text-[#1C2B27]/60">
                {item.detail}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}