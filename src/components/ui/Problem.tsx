"use client";

import { useState, useEffect, useRef, ReactNode } from "react";

// --- Hooks ---

function useInView<T extends HTMLElement>() {
  const ref = useRef<T | null>(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) {
            setInView(true);
            io.disconnect();
            break;
          }
        }
      },
      { threshold: 0.12, rootMargin: "0px 0px -60px 0px" }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);
  return { ref, inView };
}

function Reveal({
  children,
  className = "",
  delay,
  stagger = false,
  as = "div",
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
  stagger?: boolean;
  as?: "div" | "ul" | "section";
}) {
  const { ref, inView } = useInView<HTMLElement>();
  const Tag = as as any;
  return (
    <Tag
      ref={ref}
      className={`${stagger ? "stagger" : "reveal"} ${
        inView ? "is-visible" : ""
      } ${className}`}
      style={delay != null ? { transitionDelay: `${delay}ms` } : undefined}
    >
      {children}
    </Tag>
  );
}

function Eyebrow({ children }: { children: ReactNode }) {
  return (
    <div className="inline-flex items-center gap-3 uppercase tracking-[0.15em] text-[11px] font-semibold text-[var(--on-surface-variant)]">
      <span className="h-px w-8 bg-[var(--outline-variant)]" />
      {children}
    </div>
  );
}

// --- Icons ---

const icons = {
  heel: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
      <path d="M12 2C8 2 5 5 5 9c0 2.5 1 4.5 2.5 6L9 17h6l1.5-2c1.5-1.5 2.5-3.5 2.5-6 0-4-3-7-7-7z" />
      <path d="M9 17v2a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2v-2" />
      <circle cx="12" cy="9" r="2" />
    </svg>
  ),
  fatigue: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
      <circle cx="12" cy="12" r="9" />
      <polyline points="12 7 12 12 15 15" />
      <path d="M7 12h1M16 12h1M12 7v1" />
    </svg>
  ),
  wear: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
      <path d="M4 12h16M4 12l4-4M4 12l4 4M20 12l-4-4M20 12l-4 4" />
    </svg>
  ),
  back: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
      <path d="M12 2v10M12 12c-2 2-4 3-4 6a4 4 0 0 0 8 0c0-3-2-4-4-6z" />
      <path d="M9 7c-1.5.5-3 2-3 4M15 7c1.5.5 3 2 3 4" />
    </svg>
  ),
  chevronLeft: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
      <polyline points="15 18 9 12 15 6" />
    </svg>
  ),
  chevronRight: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
      <polyline points="9 18 15 12 9 6" />
    </svg>
  ),
};

// --- Data ---

const signs = [
  {
    icon: "heel" as keyof typeof icons,
    title: "Heel pain after waking up",
    body: "Many people feel a sharp pain in their heel when they take their first few steps in the morning. This is often a sign of plantar fasciitis, a common condition that usually gets worse if left untreated.",
    details: "During the night, the tissue that supports your foot becomes tight. When you take your first steps in the morning, it stretches again, causing pain in your heel.",
    causes: ["Poor foot support", "Standing for long hours", "Sudden increase in physical activity"],
    helps: "Saarthi's custom insoles reduce heel pressure and provide better support for comfortable movement.",
  },
  {
    icon: "fatigue" as keyof typeof icons,
    title: "Foot fatigue after long hours",
    body: "If your feet feel tired, sore, or heavy after a long day of standing or walking, it's a sign they may not be getting the support they need.",
    details: "Standing or walking for long periods puts extra pressure on your feet. Without proper support, your feet can become tired, sore, and uncomfortable by the end of the day.",
    causes: ["Standing for long hours", "Hard floors", "Shoes with little support"],
    helps: "Saarthi's custom insoles reduce foot pressure and improve all-day comfort.",
  },
  {
  icon: "wear" as keyof typeof icons,
  title: "Uneven shoe wear",
  body: "If one of your shoes wears out faster than the other, it could be a sign that you're putting more weight on one side of your body.",
  details: "The way your shoes wear down can reveal problems with your walking pattern or body alignment.",
  causes: [
    "Walking pattern differences",
    "Poor foot support",
    "Leg-length difference"
  ],
  helps: "Saarthi's custom insoles provide better support and help distribute pressure more evenly with every step.",
},
  {
  icon: "back" as keyof typeof icons,
  title: "Knee or lower back discomfort",
  body: "Pain in your knees or lower back can sometimes begin with the way your feet move and support your body.",
  details: "When your feet aren't properly supported, it can put extra stress on your knees, hips, and lower back with every step.",
  causes: [
    "Poor foot support",
    "Uneven walking pattern",
    "Lack of cushioning"
  ],
  helps: "Saarthi's custom insoles provide better support and cushioning to help reduce strain and improve comfort while you walk.",
},
];

// --- Main Component ---

export default function Problem() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  // Swipe States
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);

  // Minimum distance required to trigger a swipe
  const minSwipeDistance = 50;

  // Auto-slide logic
  useEffect(() => {
    if (isHovered || touchStart !== null) {
      if (timerRef.current) clearInterval(timerRef.current);
      return;
    }

    timerRef.current = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % signs.length);
    }, 6000); // Slides every 6 seconds

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [isHovered, touchStart]);

  const handleManualNav = (index: number) => {
    setActiveIndex(index);
    setIsHovered(true);
    setTimeout(() => setIsHovered(false), 100);
  };

  const handlePrev = () => {
    setActiveIndex((prev) => (prev === 0 ? signs.length - 1 : prev - 1));
    setIsHovered(true);
    setTimeout(() => setIsHovered(false), 100);
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % signs.length);
    setIsHovered(true);
    setTimeout(() => setIsHovered(false), 100);
  };

  // --- Drag / Swipe Handlers ---
  const onDragStart = (clientX: number) => {
    setTouchEnd(null);
    setTouchStart(clientX);
    setIsHovered(true);
  };

  const onDragMove = (clientX: number) => {
    if (touchStart !== null) {
      setTouchEnd(clientX);
    }
  };

  const onDragEnd = () => {
    if (touchStart === null || touchEnd === null) {
      setTouchStart(null);
      setTouchEnd(null);
      setIsHovered(false);
      return;
    }

    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;

    if (isLeftSwipe) {
      handleNext();
    } else if (isRightSwipe) {
      handlePrev();
    }

    // Reset states
    setTouchStart(null);
    setTouchEnd(null);
    setIsHovered(false);
  };

  return (
    <section id="problem" className="scroll-mt-20 sm:scroll-mt-24 py-16 lg:py-32 relative overflow-hidden bg-[var(--surface)]">
      
      {/* Muted background accents */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -top-[20%] -left-[10%] w-[60%] h-[60%] rounded-full bg-[var(--secondary-container)] opacity-10 blur-[100px]" />
        <div className="absolute top-[60%] -right-[10%] w-[50%] h-[50%] rounded-full bg-[var(--primary)] opacity-[0.03] blur-[120px]" />
      </div>

      <div className="mx-auto max-w-[1100px] px-4 sm:px-6 lg:px-8 relative z-10">
        <Reveal>
          <div className="max-w-2xl mx-auto text-center">
            <Eyebrow>The signs</Eyebrow>
            <h2 className="mt-5 text-[32px] sm:text-4xl lg:text-[44px] font-semibold tracking-tight text-[var(--on-surface)] leading-[1.1]">
              You might be ignoring{" "}
              <span className="text-[var(--primary)]">the signs.</span>
            </h2>
          </div>
        </Reveal>

        <Reveal delay={150} className="mt-12 lg:mt-16">
          
          {/* Wrapper for Carousel + Outside Arrows */}
          <div className="relative group px-0 md:px-14">
            
            {/* Left Navigation Arrow */}
            <button 
              onClick={handlePrev}
              aria-label="Previous slide"
              className="absolute left-0 top-1/2 -translate-y-1/2 z-20 w-10 h-10 md:w-12 md:h-12 hidden md:flex items-center justify-center rounded-full bg-[var(--surface)] border border-[var(--outline-variant)] shadow-sm hover:shadow-md hover:bg-[color-mix(in_oklab,var(--surface-variant)_30%,transparent)] transition-all text-[var(--on-surface-variant)] hover:text-[var(--primary)]"
            >
              {icons.chevronLeft}
            </button>

            {/* Right Navigation Arrow */}
            <button 
              onClick={handleNext}
              aria-label="Next slide"
              className="absolute right-0 top-1/2 -translate-y-1/2 z-20 w-10 h-10 md:w-12 md:h-12 hidden md:flex items-center justify-center rounded-full bg-[var(--surface)] border border-[var(--outline-variant)] shadow-sm hover:shadow-md hover:bg-[color-mix(in_oklab,var(--surface-variant)_30%,transparent)] transition-all text-[var(--on-surface-variant)] hover:text-[var(--primary)]"
            >
              {icons.chevronRight}
            </button>

            {/* Carousel Container */}
            <div 
              className="relative w-full rounded-[1.5rem] border border-[var(--outline-variant)]/40 shadow-lg overflow-hidden bg-[var(--surface)] cursor-grab active:cursor-grabbing select-none touch-pan-y"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => {
                setIsHovered(false);
                onDragEnd(); // Cancel drag if mouse leaves container
              }}
              // Touch Events (Mobile)
              onTouchStart={(e) => onDragStart(e.targetTouches[0].clientX)}
              onTouchMove={(e) => onDragMove(e.targetTouches[0].clientX)}
              onTouchEnd={onDragEnd}
              // Mouse Events (Desktop)
              onMouseDown={(e) => onDragStart(e.clientX)}
              onMouseMove={(e) => onDragMove(e.clientX)}
              onMouseUp={onDragEnd}
            >
              {/* Sliding Track */}
              <div 
                className="flex transition-transform duration-700 ease-[cubic-bezier(0.2,0.8,0.2,1)]"
                style={{ transform: `translateX(-${activeIndex * 100}%)` }}
              >
                {signs.map((sign, index) => (
                  <div key={index} className="w-full shrink-0 flex flex-col md:flex-row pointer-events-none sm:pointer-events-auto">
                    
                    {/* Left Panel - Increased title size and tightened leading for visual anchor */}
                    <div className="md:w-[38%] bg-[color-mix(in_oklab,var(--secondary-container)_30%,transparent)] p-8 md:p-10 flex flex-col justify-between border-b md:border-b-0 md:border-r border-[var(--outline-variant)]/40 min-h-[200px] md:min-h-[400px]">
                      <div className="flex justify-center md:justify-start">
                        <div className="w-12 h-12 rounded-xl bg-[color-mix(in_oklab,var(--secondary-container)_80%,transparent)] flex items-center justify-center text-[var(--primary)] shadow-sm">
                          {icons[sign.icon]}
                        </div>
                      </div>
                      
                      <div className="flex-1 flex items-center mt-8 md:mt-0">
                        <h3 className="text-[28px] md:text-[36px] lg:text-[40px] font-medium tracking-tight text-[var(--on-surface)] leading-[1.15] text-center md:text-left w-full">
                          {sign.title}
                        </h3>
                      </div>

                      <div className="mt-8 text-center md:text-left">
                        <span className="text-[12px] tracking-[0.25em] font-semibold text-[var(--on-surface-variant)]/50">
                          0 {index + 1}
                        </span>
                      </div>
                    </div>

                    {/* Right Panel - Restructured typographic hierarchy */}
                    <div className="md:w-[62%] p-8 md:p-10 lg:p-12 flex flex-col justify-center bg-[var(--surface)]">
                      
                      <h4 className="text-[20px] lg:text-[22px] font-medium text-[var(--on-surface)] mb-3">
                        The Signal
                      </h4>
                      <p className="text-[15px] lg:text-[16px] text-[var(--on-surface-variant)] leading-relaxed mb-8">
                        {sign.body}
                      </p>

                      {/* Highlighted Mechanics Box - Strengthened contrast */}
                      <div className="bg-[color-mix(in_oklab,var(--surface-variant)_15%,transparent)] rounded-2xl p-5 lg:p-6 mb-10 border border-[var(--outline-variant)]/30">
                        <p className="text-[14px] lg:text-[15px] leading-relaxed text-[var(--on-surface)] font-medium">
                          {sign.details}
                        </p>
                      </div>

                      {/* Causes & Helps Grid - Pronounced subheaders */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 md:gap-10">
                        <div>
                          <h5 className="uppercase tracking-[0.15em] text-[10px] md:text-[11px] font-bold text-[var(--on-surface-variant)] mb-4 opacity-80">
                            Common Causes
                          </h5>
                          <ul className="flex flex-col gap-3.5">
                            {sign.causes.map((c) => (
                              <li key={c} className="text-[14px] md:text-[15px] flex items-center gap-3 text-[var(--on-surface-variant)]">
                                <span className="w-1.5 h-1.5 rounded-full bg-[var(--on-surface-variant)] shrink-0 opacity-60" />
                                {c}
                              </li>
                            ))}
                          </ul>
                        </div>

                        <div>
                          <h5 className="uppercase tracking-[0.15em] text-[10px] md:text-[11px] font-bold text-[var(--on-surface-variant)] mb-4 opacity-80">
                            How Saarthi Helps
                          </h5>
                          <p className="text-[14px] md:text-[15px] leading-relaxed text-[var(--on-surface-variant)]">
                            {sign.helps}
                          </p>
                        </div>
                      </div>
                    </div>

                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Manual Navigation Dots */}
          <div className="flex items-center justify-center gap-3 mt-6 md:mt-8">
            {signs.map((_, index) => (
              <button
                key={index}
                onClick={() => handleManualNav(index)}
                aria-label={`Go to slide ${index + 1}`}
                className={`transition-all duration-300 rounded-full ${
                  activeIndex === index 
                    ? "w-8 h-2.5 bg-[var(--primary)]" 
                    : "w-2.5 h-2.5 bg-[var(--outline-variant)]/50 hover:bg-[var(--outline-variant)]"
                }`}
              />
            ))}
          </div>

        </Reveal>
      </div>
    </section>
  );
}