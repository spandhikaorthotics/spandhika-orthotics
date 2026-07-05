import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "The story behind Spandhika Orthotics and the team building SAARTHI.",
};

const sections = [
  {
    id: "origin-story",
    title: "The origin story",
    content: [
      {
        subtitle: "How it all started",
        text: "Saarthi was born from a simple question: what if diabetic foot complications could be detected before they became visible? What began as a hostel-room hackathon idea soon grew into a mission to build technology that empowers patients and clinicians with early, actionable insights. From day one, our focus has been on creating a solution that is accurate, practical, and comfortable enough for everyday use.",
      },
      {
        subtitle: "Identifying the gap",
        text: "Millions of people living with diabetes remain unaware of developing foot complications until they become painful or irreversible. Existing screening methods are often reactive, infrequent, and dependent on clinical visits. We saw an opportunity to bridge this gap by developing an intelligent insole capable of continuously monitoring foot health, enabling earlier intervention and reducing the risk of ulcers through accessible, real-time monitoring.",
      },
    ],
  },
  {
    id: "meet-the-team",
    title: "Meet the founders",
    isTeam: true, // Special flag to render the photo grid
    content: [
      {
        subtitle: "Abhishek",
        role: "Co-Founder",
        image: "abhishek.png",
        text: "Abhishek holds an M.Tech in Electronics & Communication Engineering from NIT Hamirpur. The idea for IOLMS began after a friend developed severe back pain that was eventually traced to an undiagnosed flat foot, a condition that could have been detected much earlier with the right data. That experience inspired a patent, the founding of the company, and a mission to make gait health visible before it turns into a serious medical problem.",
      },
      {
        subtitle: "Krishna",
        role: "Co-Founder",
        image: "krishna.png",
        text: "Krishna holds a B.Tech in Electronics & Communication Engineering from NIT Hamirpur. He leads the hardware and firmware development of IOLMS, designing everything from the sensor architecture to the embedded systems that have transformed an early hackathon prototype into a medical device ready for certification.",
      },
    ],
  },
  {
    id: "engineering-philosophy",
    title: "Our engineering philosophy",
    content: [
      {
        subtitle: "Hardware meets software",
        text: "Saarthi combines a 32-sensor pressure matrix with a 9-axis motion sensor, processing data in real time on an ESP32-C6 powered by our custom FreeRTOS firmware. Instead of simply recording pressure points, it interprets gait phases, balance, and movement patterns to deliver clinical-grade insights outside the confines of a gait laboratory.",
      },
      {
        subtitle: "Precision matters",
        text: "Every layer of Saarthi is engineered for long-term accuracy, from the placement of each sensor to the material stack that maintains consistent performance through everyday use. Our proprietary scoring algorithm transforms complex sensor data into a single, clinically meaningful metric, making gait health easy to understand and reliable enough to act upon.",
      },
    ],
  },
  {
    id: "behind-the-scenes",
    title: "Behind the scenes",
    content: [
      {
        subtitle: "Work in progress",
        text: "Saarthi started as a hostel-room hackathon idea and has since gone through five hardware revisions, a granted Indian patent, and a full FreeRTOS-based firmware rebuild. We're currently validating our smart insole's sensor accuracy against clinical gait labs at PGIMER Chandigarh, refining the insole's material stack for long-term wearability, and preparing for regulatory certification under India's CDSCO Class B pathway. Every version gets tested on real feet before it earns a place in the next one.",
      },
    ],
  },
];

export default function AboutPage() {
  return (
    <div className="min-h-screen" style={{ background: "var(--background)" }}>
      {/* ── HERO HEADER ── */}
      <div
        className="relative overflow-hidden"
        style={{ background: "var(--primary)" }}
      >
        {/* Ambient glows */}
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <div
            className="absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full opacity-15"
            style={{
              background:
                "radial-gradient(circle, var(--tertiary-fixed) 0%, transparent 70%)",
            }}
          />
          <div
            className="absolute -bottom-20 -left-20 w-[400px] h-[400px] rounded-full opacity-10"
            style={{
              background:
                "radial-gradient(circle, var(--tertiary-fixed-dim) 0%, transparent 70%)",
            }}
          />
        </div>

        {/* Top nav */}
        <div className="relative z-10 max-w-[1280px] mx-auto px-6 lg:px-8 py-6 flex items-center justify-between">
          <Link
            href="/"
            className="flex items-center gap-2 text-[13px] font-medium transition-opacity hover:opacity-70"
            style={{ color: "color-mix(in oklab, white 60%, transparent)" }}
          >
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
            Back to home
          </Link>
          <span
            className="text-[11px] font-semibold uppercase tracking-[0.15em]"
            style={{ color: "var(--tertiary-fixed-dim)" }}
          >
            Spandhika Orthotics
          </span>
        </div>

        {/* Hero content */}
        <div className="relative z-10 max-w-[1280px] mx-auto px-6 lg:px-8 pb-16 pt-8">
          <p
            className="text-[11px] font-semibold uppercase tracking-[0.15em] mb-4"
            style={{ color: "var(--tertiary-fixed-dim)" }}
          >
            Company
          </p>
          <h1 className="text-[48px] sm:text-[56px] lg:text-[64px] font-bold tracking-tight leading-[1.06] text-white mb-5">
            About Us
          </h1>
          <p
            className="text-[16px] leading-relaxed max-w-[560px] mb-8"
            style={{ color: "color-mix(in oklab, white 55%, transparent)" }}
          >
            Meet the team bringing clinical-grade movement technology out of the
            lab and into your daily life.
          </p>
          <div
            className="inline-flex items-center gap-2 rounded-full px-4 py-2 text-[12px] font-medium"
            style={{
              background:
                "color-mix(in oklab, var(--tertiary-fixed) 15%, transparent)",
              border:
                "1px solid color-mix(in oklab, var(--tertiary-fixed-dim) 25%, transparent)",
              color: "color-mix(in oklab, white 70%, transparent)",
            }}
          >
            <span
              className="w-1.5 h-1.5 rounded-full"
              style={{ background: "var(--tertiary-fixed-dim)" }}
            />
            Our Story
          </div>
        </div>

        {/* Bottom fade */}
        <div
          className="absolute bottom-0 left-0 right-0 h-px"
          style={{ background: "color-mix(in oklab, white 8%, transparent)" }}
        />
      </div>

      {/* ── MINT GREEN BACKGROUND WRAPPER ── */}
      <div
        className="w-full"
        style={{
          background:
            "linear-gradient(135deg, #ffffff 0%, #ffffff 30%, #e6f6f3 100%)",
        }}
      >
        {/* ── MAIN CONTENT: sidebar + body ── */}
        <div className="max-w-[1280px] mx-auto px-6 lg:px-8 py-16 lg:py-24">
          <div className="flex gap-16 lg:gap-24 items-start">
            {/* ── STICKY SIDEBAR (desktop only) ── */}
            <aside className="hidden lg:block w-56 shrink-0 sticky top-12">
              <p
                className="text-[10px] font-semibold uppercase tracking-[0.15em] mb-4"
                style={{ color: "var(--on-surface-variant)" }}
              >
                Contents
              </p>
              <nav className="flex flex-col gap-1">
                {sections.map((s, i) => (
                  <a
                    key={s.id}
                    href={`#${s.id}`}
                    className="flex items-center gap-3 py-2.5 px-3 rounded-xl text-[13px] font-medium transition-all group text-[var(--on-surface-variant)] hover:text-[var(--primary)] hover:bg-[color-mix(in_oklab,var(--primary)_6%,transparent)]"
                  >
                    <span
                      className="text-[10px] font-bold w-5 shrink-0 opacity-60 group-hover:opacity-100"
                      style={{ color: "var(--primary)" }}
                    >
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    {s.title}
                  </a>
                ))}
              </nav>

              {/* Contact card in sidebar */}
              <div
                className="mt-10 rounded-2xl p-5"
                style={{
                  background:
                    "color-mix(in oklab, var(--primary) 3%, transparent)",
                  border:
                    "1px solid color-mix(in oklab, var(--primary) 8%, transparent)",
                }}
              >
                <p
                  className="text-[13px] font-semibold mb-1"
                  style={{ color: "var(--primary)" }}
                >
                  Want to get in touch?
                </p>
                <p
                  className="text-[12px] leading-relaxed mb-4"
                  style={{ color: "var(--on-surface-variant)" }}
                >
                  We love hearing from fellow builders and potential users.
                </p>
                <a
                  href="mailto:spandhikaorthotics@gmail.com"
                  className="inline-flex text-[12px] font-medium transition-opacity hover:opacity-70 break-all"
                  style={{
                    color: "var(--primary)",
                    borderBottom:
                      "1px solid color-mix(in oklab, var(--primary) 30%, transparent)",
                  }}
                >
                  spandhikaorthotics@gmail.com
                </a>
              </div>
            </aside>

            {/* ── MAIN BODY ── */}
            <div className="flex-1 min-w-0 max-w-[720px]">
              {/* Mobile table of contents */}
              <div
                className="lg:hidden rounded-2xl p-6 mb-12"
                style={{
                  background:
                    "color-mix(in oklab, var(--surface-variant) 20%, transparent)",
                  border:
                    "1px solid color-mix(in oklab, var(--outline-variant) 25%, transparent)",
                }}
              >
                <p
                  className="text-[11px] font-semibold uppercase tracking-widest mb-4"
                  style={{ color: "var(--on-surface-variant)" }}
                >
                  Contents
                </p>
                <div className="flex flex-col gap-1.5">
                  {sections.map((s, i) => (
                    <a
                      key={s.id}
                      href={`#${s.id}`}
                      className="flex items-center gap-3 text-[14px] font-medium py-1.5"
                      style={{ color: "var(--primary)" }}
                    >
                      <span
                        className="text-[11px] font-bold opacity-60"
                        style={{ color: "var(--primary)" }}
                      >
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      {s.title}
                    </a>
                  ))}
                </div>
              </div>

              {/* Sections Flow */}
              <div className="space-y-20">
                {sections.map((section, i) => (
                  <section
                    key={section.id}
                    id={section.id}
                    className="scroll-mt-12"
                  >
                    {/* Section header */}
                    <div className="flex items-baseline gap-4 mb-8">
                      <span
                        className="text-[14px] font-bold shrink-0 opacity-40"
                        style={{ color: "var(--primary)" }}
                      >
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <h2
                        className="text-[26px] sm:text-[30px] font-bold tracking-tight"
                        style={{ color: "var(--primary)" }}
                      >
                        {section.title}
                      </h2>
                    </div>

                    {/* Check if it's the specific Team section for photo layout */}
                    {section.isTeam ? (
                      <div className="grid sm:grid-cols-2 gap-x-8 gap-y-12 pl-1 sm:pl-8">
                        {section.content.map((member) => (
                          <div
                            key={member.subtitle}
                            className="flex flex-col items-center text-center"
                          >
                            {/* Photo Container - ENLARGED */}
                            <div
                              className="w-full aspect-square max-w-[400px] rounded-[3.5rem] mb-10 overflow-hidden relative"
                              style={{
                                background:
                                  "color-mix(in oklab, var(--primary) 10%, transparent)",
                                border:
                                  "1px solid color-mix(in oklab, var(--primary) 20%, transparent)",
                              }}
                            >
                              {/* Use the member.image field for the actual image */}
                              <img
                                src={`/${member.image}`}
                                alt={member.subtitle}
                                className={`absolute inset-0 w-full h-full object-cover ${
                                  member.subtitle === "Krishna"
                                    ? "scale-200 object-[50%_80%]"
                                    : "scale-150 object-[60%_50%]"
                                }`}
                              />
                            </div>

                            {/* Member Details */}
                            <h3
                              className="text-[20px] font-bold mb-1.5"
                              style={{ color: "var(--primary)" }}
                            >
                              {member.subtitle}
                            </h3>
                            <p
                              className="text-[12px] font-semibold uppercase tracking-widest mb-4"
                              style={{ color: "var(--tertiary-fixed-dim)" }}
                            >
                              {member.role}
                            </p>
                            <p
                              className="text-[15px] leading-relaxed max-w-[320px]"
                              style={{ color: "var(--on-surface-variant)" }}
                            >
                              {member.text}
                            </p>
                          </div>
                        ))}
                      </div>
                    ) : (
                      /* Document-style Content List (Standard) */
                      <div className="space-y-8 pl-1 sm:pl-8">
                        {section.content.map((item) => (
                          <div key={item.subtitle} className="relative group">
                            {/* Subtle left dot for visual anchor */}
                            <div
                              className="absolute left-0 top-2.5 w-1.5 h-1.5 rounded-full hidden sm:block transition-all group-hover:scale-125 group-hover:opacity-100 opacity-40"
                              style={{ background: "var(--primary)" }}
                            />
                            <div className="sm:pl-6">
                              <h3
                                className="text-[17px] font-semibold mb-2"
                                style={{ color: "var(--primary)" }}
                              >
                                {item.subtitle}
                              </h3>
                              <p
                                className="text-[15px] sm:text-[16px] leading-relaxed"
                                style={{ color: "var(--on-surface-variant)" }}
                              >
                                {item.text}
                              </p>
                            </div>
                          </div>
                        ))}
                      </div>
                    )}

                    {/* Minimal Separator Line */}
                    {i < sections.length - 1 && (
                      <div
                        className="mt-20 h-px w-full"
                        style={{
                          background:
                            "color-mix(in oklab, var(--outline-variant) 20%, transparent)",
                        }}
                      />
                    )}
                  </section>
                ))}
              </div>

              {/* Bottom CTA (mobile) */}
              <div
                className="lg:hidden mt-20 rounded-2xl p-8 text-center"
                style={{
                  background:
                    "color-mix(in oklab, var(--primary) 3%, transparent)",
                  border:
                    "1px solid color-mix(in oklab, var(--primary) 10%, transparent)",
                }}
              >
                <p
                  className="text-[16px] font-semibold mb-2"
                  style={{ color: "var(--primary)" }}
                >
                  Want to get in touch?
                </p>
                <p
                  className="text-[14px] mb-6"
                  style={{ color: "var(--on-surface-variant)" }}
                >
                  We love hearing from fellow builders and potential users.
                </p>
                <a
                  href="mailto:spandhikaorthotics@gmail.com"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-[14px] font-semibold transition-transform hover:scale-105 active:scale-95"
                  style={{ background: "var(--primary)", color: "white" }}
                >
                  spandhikaorthotics@gmail.com
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* ── FOOTER BAR ── */}
        <div
          className="border-t"
          style={{
            borderColor:
              "color-mix(in oklab, var(--outline-variant) 15%, transparent)",
          }}
        >
          <div className="max-w-[1280px] mx-auto px-6 lg:px-8 py-8 flex flex-col sm:flex-row items-center justify-between gap-4">
            <p
              className="text-[13px] font-medium"
              style={{ color: "var(--on-surface-variant)" }}
            >
              © {new Date().getFullYear()} Spandhika Orthotics. All rights
              reserved.
            </p>
            <Link
              href="/"
              className="text-[13px] font-semibold transition-opacity hover:opacity-70"
              style={{ color: "var(--primary)" }}
            >
              Back to spandhikaorthotics.in →
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}