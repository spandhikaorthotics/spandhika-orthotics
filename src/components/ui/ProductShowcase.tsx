"use client";
import Image from "next/image";
import {
  useEffect,
  useRef,
  useState,
  type ReactNode,
  type ElementType,
} from "react";

/* ────────────────────────────────────────────────────────────
   Reveal: scroll-reveal using the .reveal / .stagger classes
──────────────────────────────────────────────────────────── */
function Reveal({
  children,
  as: Tag = "div",
  stagger = false,
  className = "",
}: {
  children: ReactNode;
  as?: ElementType;
  stagger?: boolean;
  className?: string;
}) {
  const ref = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15 },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <Tag
      ref={ref}
      className={`${className} ${stagger ? "stagger" : "reveal"} ${visible ? "is-visible" : ""}`}
    >
      {children}
    </Tag>
  );
}

/* ────────────────────────────────────────────────────────────
   Icon: tiny inline icon set
──────────────────────────────────────────────────────────── */
function Icon({ name }: { name: "pressure" | "gait" | "insights" }) {
  const icons = {
    pressure: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <rect x="3" y="3" width="7" height="7" rx="1.5" strokeWidth={1.8} />
        <rect x="14" y="3" width="7" height="7" rx="1.5" strokeWidth={1.8} />
        <rect x="3" y="14" width="7" height="7" rx="1.5" strokeWidth={1.8} />
        <rect x="14" y="14" width="7" height="7" rx="1.5" strokeWidth={1.8} fill="currentColor" />
      </svg>
    ),
    gait: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M13.5 5.5c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zM9.8 8.9L7 23h2.1l1.8-8 2.1 2v6h2v-7.5l-2.1-2 .6-3C14.8 12 16.8 13 19 13v-2c-1.9 0-3.5-1-4.3-2.4l-1-1.6c-.4-.6-1-1-1.7-1-.3 0-.5.1-.8.1L6 8.3V13h2V9.6l1.8-.7z" />
      </svg>
    ),
    insights: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M9 12l2 2 4-4" />
      </svg>
    ),
  };
  return icons[name];
}

const layers = [
  {
    layer: "01",
    name: "Breathable top cover",
    desc: "Keeps your feet cool, dry, and fresh.",
  },
  {
    layer: "02",
    name: "Pressure sensor array",
    desc: "Track pressure across your foot as you walk.",
  },
  {
    layer: "03",
    name: "PET piezoresistive layer",
    desc: "Captures every step with high accuracy.",
  },
  {
    layer: "04",
    name: "Support layer",
    desc: "Adds stability and lasting comfort.",
  },
  {
    layer: "05",
    name: "Anti-slip base",
    desc: "Stays securely in place inside your shoes.",
  },
];

const features = [
  {
    icon: "pressure" as const,
    title: "Pressure mapping",
    body: "See how pressure is spread across your feet with every step.",
  },
  {
    icon: "gait" as const,
    title: "Real-time gait analysis",
    body: "Understand your walking pattern and movement in real time.",
  },
  {
    icon: "insights" as const,
    title: "Preventive insights",
    body: "Spot changes in your walking pattern before they become bigger concerns.",
  },
];

export default function Features() {
  return (
    <section
      id="features"
      className="scroll-mt-20 sm:scroll-mt-24 py-16 sm:py-24 lg:py-32 bg-[#092215] text-white relative overflow-hidden font-sans"
    >
      <div className="mx-auto max-w-[1280px] px-6 lg:px-12 relative z-10">
        
        {/* ── HEADER ── */}
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-end mb-16 lg:mb-20">
          <div className="lg:col-span-6">
            <div className="flex items-center gap-4 text-[#6ee7b7] text-xs font-bold tracking-[0.2em] uppercase mb-6">
              <span className="h-[2px] w-8 bg-[#6ee7b7]" />
              Flagship innovation
            </div>
            <h2 className="text-4xl sm:text-5xl lg:text-7xl font-bold tracking-tight">
              Meet SAARTHI
            </h2>
          </div>
          <p className="lg:col-span-6 text-lg text-gray-400 font-light leading-relaxed max-w-lg">
            Smart insoles that do more than cushion your feet. SAARTHI understands how you walk to help you move with greater comfort and confidence.
          </p>
        </div>

        {/* ── EXPLODED INSOLE VISUAL + LAYERS ── */}
        <div className="grid lg:grid-cols-[11fr_13fr] gap-10 lg:gap-16 items-center">
          
          {/* Layers List */}
          <Reveal as="ul" stagger className="flex flex-col gap-3">
            {layers.map((l) => (
              <li
                key={l.layer}
                className="group flex items-start gap-5 rounded-2xl bg-[#102d1e] p-5 border border-[#1b452e] transition-all duration-300 hover:border-[#6ee7b7]/40 hover:bg-[#153926]"
              >
                <span className="font-mono text-sm font-bold text-[#6ee7b7] mt-1">
                  {l.layer}
                </span>
                <div>
                  <div className="text-md font-medium text-white">
                    {l.name}
                  </div>
                  <div className="text-sm text-gray-400 font-light leading-relaxed">
                    {l.desc}
                  </div>
                </div>
              </li>
            ))}
          </Reveal>

          {/* Image Area */}
          <div className="relative flex items-center justify-center min-h-[400px] lg:min-h-[500px] group">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[70%] h-[70%] bg-[#6ee7b7]/15 rounded-full blur-[140px] pointer-events-none transition-opacity duration-700 group-hover:bg-[#6ee7b7]/25" />
            <div className="relative w-full h-full aspect-[5/4] z-10">
              <Image
                src="/insole_2.png"
                alt="Exploded view of the SAARTHI smart insole"
                fill
                className="object-contain drop-shadow-2xl transition-transform duration-700 group-hover:scale-105"
              />
            </div>
          </div>
        </div>

        {/* ── REDESIGNED COMPACT FEATURE CARDS ── */}
        <Reveal
          stagger
          className="mt-16 lg:mt-24 grid sm:grid-cols-2 md:grid-cols-3 gap-4 lg:gap-5"
        >
          {features.map((f) => (
            <div
              key={f.title}
              className="group flex items-start gap-4 rounded-2xl bg-[#102d1e] border border-[#1b452e] p-5 lg:p-6 transition-all duration-300 hover:border-[#6ee7b7]/40 hover:bg-[#153926]"
            >
              <div className="w-10 h-10 shrink-0 rounded-[10px] bg-[#6ee7b7] text-[#051911] flex items-center justify-center transition-transform duration-300 group-hover:scale-110 group-hover:-rotate-3">
                <Icon name={f.icon} />
              </div>
              <div>
                <h3 className="text-[15px] font-semibold text-white mb-1.5 tracking-wide">
                  {f.title}
                </h3>
                <p className="text-[13px] text-gray-400 font-light leading-relaxed">
                  {f.body}
                </p>
              </div>
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  );
}