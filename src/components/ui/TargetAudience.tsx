"use client";

import React from 'react';

export default function TargetAudience() {
  const personas = [
    {
      title: "Professionals",
      subtitle: "Nurses, Teachers & Retail",
      image: "/prof.png",
      bullets: [
        "Comfort during long shifts",
        "Better support all day",
        "Helps reduce foot fatigue"
      ]
    },
    {
      title: "Active Athletes",
      subtitle: "Runners & Gym Goers",
      image: "/sports.png",
      bullets: [
        "Better support while training",
        "Added comfort during workouts",
        "Helps you stay active"
      ]
    },
    {
      title: "People with Disabilities",
      subtitle: "Adaptive Support & Mobility",
      image: "/pwd.png",
      bullets: [
        "Comfortable everyday support",
        "Better stability while moving",
        "Designed for daily mobility"
      ]
    },
    {
      title: "Everyday Seniors",
      subtitle: "Comfort for Daily Walks",
      image: "/eldery.png",
      bullets: [
        "Better support for walking",
        "Shock-absorbing comfort",
        "Stay active and mobile"
      ]
    }
  ];

  return (
    <section id="who-its-for" className="scroll-mt-18 py-24 bg-[#08261b] relative overflow-hidden">
      
      {/* Background Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-emerald-900/30 blur-[150px] rounded-full pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-extrabold text-white tracking-tight mb-6">
            Designed for <span className="text-emerald-400">Your Life.</span>
          </h2>
          <p className="text-lg text-emerald-100/70 max-w-2xl mx-auto font-light">
            Custom orthotics designed to provide lasting comfort and support, wherever life takes you.
          </p>
        </div>

        {/* Premium Dark Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {personas.map((persona, index) => (
            <div 
              key={index}
              className="group relative flex flex-col bg-gradient-to-b from-white/[0.05] to-transparent backdrop-blur-md border border-white/10 rounded-3xl overflow-hidden hover:from-white/[0.08] hover:to-white/[0.02] hover:border-emerald-500/40 hover:-translate-y-2 transition-all duration-300 ease-out shadow-2xl"
            >
              {/* Full-width Rectangular Image Container */}
              <div className="w-full h-48 sm:h-52 overflow-hidden relative border-b border-white/10 shrink-0">
                <img 
                  src={persona.image} 
                  alt={persona.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out" 
                />
              </div>

              {/* Text Content Container */}
              <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between">
                <div>
                  {/* Added truncate and whitespace-nowrap to strictly enforce 1 line */}
                  <h3 className="text-lg font-bold text-white mb-1 truncate" title={persona.title}>
                    {persona.title}
                  </h3>
                  <p className="text-xs text-emerald-400 font-medium mb-6 truncate" title={persona.subtitle}>
                    {persona.subtitle}
                  </p>
                </div>

                <ul className="space-y-3 mt-auto">
                  {persona.bullets.map((bullet, idx) => (
                    <li key={idx} className="flex items-center text-slate-300">
                      <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 mr-2.5 shrink-0"></div>
                      {/* Enforces single line per bullet point */}
                      <span className="text-xs sm:text-sm leading-none whitespace-nowrap truncate" title={bullet}>
                        {bullet}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}