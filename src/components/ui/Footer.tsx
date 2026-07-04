"use client";

import { useState, type FormEvent } from "react";
import Image from "next/image";

export default function Footer() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  async function onSubmit(e: FormEvent) {
    e.preventDefault();
    if (!email || loading) return;

    setLoading(true);
    setErrorMessage("");
    try {
      const res = await fetch("/api/waitlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      const data = await res.json();

      if (res.ok || res.status === 409) {
        setSubmitted(true);
        setEmail("");
      } else if (res.status === 429) {
        // Catch the rate limit specifically here
        setErrorMessage(data.error || "Too many requests. Please try again in a minute.");
      } else {
        setErrorMessage(data.error || "Something went wrong. Please try again.");
      }
    } catch {
      setErrorMessage("Network error. Please check your connection.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <footer className="relative overflow-hidden bg-[var(--primary)]">
      {/* Ambient glows */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div
          className="absolute -top-48 -left-32 w-[600px] h-[600px] rounded-full opacity-20"
          style={{
            background:
              "radial-gradient(circle, var(--tertiary-fixed) 0%, transparent 70%)",
          }}
        />
        <div
          className="absolute -bottom-32 right-0 w-[500px] h-[500px] rounded-full opacity-10"
          style={{
            background:
              "radial-gradient(circle, var(--tertiary-fixed-dim) 0%, transparent 70%)",
          }}
        />
      </div>

      {/* Top gradient line */}
      <div
        className="absolute top-0 left-0 w-full h-px"
        style={{
          background:
            "linear-gradient(to right, transparent, color-mix(in oklab, var(--tertiary-fixed) 40%, transparent), transparent)",
        }}
      />

      <div className="relative z-10 max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* ── BIG CTA BAND ── */}
        <div
          className="py-16 sm:py-20 lg:py-24 flex flex-col lg:flex-row lg:items-end lg:justify-between gap-10 border-b"
          style={{ borderColor: "color-mix(in oklab, white 10%, transparent)" }}
        >
          <div className="max-w-xl">
            <p
              className="label-caps text-[11px] mb-4"
              style={{ color: "var(--tertiary-fixed-dim)" }}
            >
              Be first in line
            </p>
            <h2 className="text-[36px] sm:text-[48px] lg:text-[56px] font-bold tracking-tight leading-[1.06] text-white">
              Hearing every step
            </h2>
            <p
              className="mt-4 text-[15px] leading-relaxed"
              style={{ color: "color-mix(in oklab, white 55%, transparent)" }}
            >
              Join the waitlist and be among the first to experience SAARTHI —
              smart insoles that listen to how you walk.
            </p>
          </div>

          {/* Newsletter form */}
          <div className="flex flex-col gap-3 w-full max-w-sm lg:max-w-xs shrink-0">
            {submitted ? (
              <div
                className="flex items-center gap-3 rounded-2xl px-5 py-4"
                style={{
                  background:
                    "color-mix(in oklab, var(--tertiary-fixed) 15%, transparent)",
                  border:
                    "1px solid color-mix(in oklab, var(--tertiary-fixed) 30%, transparent)",
                }}
              >
                <span
                  className="w-2 h-2 rounded-full shrink-0"
                  style={{ background: "var(--tertiary-fixed-dim)" }}
                />
                <span className="text-[14px] font-medium text-white">
                  You're on the list. We'll be in touch.
                </span>
              </div>
            ) : (
              <form onSubmit={onSubmit} className="flex flex-col gap-2.5">
                <div
                  className="flex items-center rounded-2xl p-1.5 transition-all"
                  style={{
                    background: "color-mix(in oklab, white 8%, transparent)",
                    border:
                      "1px solid color-mix(in oklab, white 12%, transparent)",
                  }}
                >
                  <input
                    type="email"
                    required
                    disabled={loading}
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="your@email.com"
                    className="flex-1 bg-transparent px-3 py-2 text-[14px] text-white focus:outline-none placeholder:opacity-40 disabled:opacity-50"
                  />
                  <button
                    type="submit"
                    disabled={loading}
                    className="px-4 py-2 rounded-xl text-[13px] font-semibold transition-all shrink-0 cursor-pointer flex items-center justify-center gap-1.5 disabled:opacity-75 disabled:cursor-not-allowed"
                    style={{
                      background: "var(--tertiary-fixed-dim)",
                      color: "var(--primary)",
                    }}
                  >
                    {loading ? (
                      <>
                        <svg
                          className="animate-spin h-3.5 w-3.5 text-[var(--primary)]"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                        >
                          <circle
                            className="opacity-25"
                            cx="12"
                            cy="12"
                            r="10"
                            stroke="currentColor"
                            strokeWidth="4"
                          ></circle>
                          <path
                            className="opacity-75"
                            fill="currentColor"
                            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                          ></path>
                        </svg>
                        <span>Joining...</span>
                      </>
                    ) : (
                      "Join waitlist →"
                    )}
                  </button>
                </div>
                {/* Error Message Display */}
                {errorMessage ? (
                  <p className="text-[12px] px-1 text-red-400">
                    {errorMessage}
                  </p>
                ) : (
                  <p
                    className="text-[11px] px-1"
                    style={{
                      color: "color-mix(in oklab, white 35%, transparent)",
                    }}
                  >
                    No spam. Launching 2026.
                  </p>
                )}
              </form>
            )}

            {/* ── CONTACT OPTIONS BLOCK ── */}
            <div className="flex flex-col gap-2 mt-1">
              {/* Email contact */}
              <a
                href="mailto:spandhikaorthotics@gmail.com"
                className="group flex items-center gap-3 rounded-2xl px-4 py-3 transition-all"
                style={{
                  background: "color-mix(in oklab, white 5%, transparent)",
                  border: "1px solid color-mix(in oklab, white 8%, transparent)",
                }}
              >
                <div
                  className="w-8 h-8 rounded-xl flex items-center justify-center shrink-0 transition-all"
                  style={{
                    background:
                      "color-mix(in oklab, var(--tertiary-fixed) 15%, transparent)",
                    color: "var(--tertiary-fixed-dim)",
                  }}
                >
                  <svg
                    className="w-3.5 h-3.5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                </div>
                <div>
                  <div
                    className="text-[10px] font-semibold uppercase tracking-widest mb-0.5"
                    style={{
                      color: "color-mix(in oklab, white 35%, transparent)",
                    }}
                  >
                    Email us
                  </div>
                  <div className="text-[13px] font-medium text-white/80 group-hover:text-white transition-colors">
                    spandhikaorthotics@gmail.com
                  </div>
                </div>
              </a>

              {/* Phone contact */}
              <a
                href="tel:+919350026954" // <-- UPDATE THIS NUMBER
                className="group flex items-center gap-3 rounded-2xl px-4 py-3 transition-all"
                style={{
                  background: "color-mix(in oklab, white 5%, transparent)",
                  border: "1px solid color-mix(in oklab, white 8%, transparent)",
                }}
              >
                <div
                  className="w-8 h-8 rounded-xl flex items-center justify-center shrink-0 transition-all"
                  style={{
                    background:
                      "color-mix(in oklab, var(--tertiary-fixed) 15%, transparent)",
                    color: "var(--tertiary-fixed-dim)",
                  }}
                >
                  <svg
                    className="w-3.5 h-3.5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>
                </div>
                <div>
                  <div
                    className="text-[10px] font-semibold uppercase tracking-widest mb-0.5"
                    style={{
                      color: "color-mix(in oklab, white 35%, transparent)",
                    }}
                  >
                    Call us
                  </div>
                  <div className="text-[13px] font-medium text-white/80 group-hover:text-white transition-colors">
                    +91-93500-26954 {/* <-- UPDATE THIS NUMBER */}
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>

        {/* ── LINKS ROW ── */}
        <div className="py-12 grid grid-cols-2 sm:grid-cols-4 gap-8">
          {/* Brand blurb */}
          <div className="col-span-2 sm:col-span-1 flex flex-col gap-5">
            <a href="#top">
              <Image
                src="/SO_Logo.png"
                alt="Spandhika Orthotics logo"
                width={50}
                height={32}
                className="brightness-0 invert opacity-80"
              />
            </a>
            <p
              className="text-[13px] leading-relaxed max-w-[200px]"
              style={{ color: "color-mix(in oklab, white 40%, transparent)" }}
            >
              Smart orthotic insoles that map pressure and improve every step.
            </p>
            {/* Socials */}
            <div className="flex items-center gap-2 mt-1">
              {[
                {
                  label: "YouTube",
                  href: "https://www.youtube.com/@SPANDHIKAORTHOTICS",
                  icon: (
                    <svg
                      className="w-3.5 h-3.5"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                    </svg>
                  ),
                },
                {
                  label: "LinkedIn",
                  href: "https://www.linkedin.com/company/spandhika-orthotics",
                  icon: (
                    <svg
                      className="w-3.5 h-3.5"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z" />
                    </svg>
                  ),
                },
                {
                  label: "GitHub",
                  href: "https://github.com/spandhikaorthotics/spandhika-orthotics",
                  icon: (
                    <svg
                      className="w-3.5 h-3.5"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                    </svg>
                  ),
                }
              ].map(({ label, href, icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-8 h-8 rounded-xl flex items-center justify-center transition-all"
                  style={{
                    background: "color-mix(in oklab, white 6%, transparent)",
                    color: "color-mix(in oklab, white 50%, transparent)",
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLElement).style.background =
                      "color-mix(in oklab, var(--tertiary-fixed) 20%, transparent)";
                    (e.currentTarget as HTMLElement).style.color =
                      "var(--tertiary-fixed-dim)";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLElement).style.background =
                      "color-mix(in oklab, white 6%, transparent)";
                    (e.currentTarget as HTMLElement).style.color =
                      "color-mix(in oklab, white 50%, transparent)";
                  }}
                >
                  {icon}
                </a>
              ))}
            </div>
          </div>

          {/* Product */}
          <div>
            <h3
              className="label-caps text-[12px] mb-5"
              style={{ color: "color-mix(in oklab, white 35%, transparent)" }}
            >
              Product
            </h3>
            <ul className="space-y-3">
              {[
                { label: "SAARTHI Tech", href: "#features" },
                { label: "Foot Conditions", href: "#problem" },
                { label: "Mobile App", href: "/mobileapp" },
                {
                  label: "Join Waitlist",
                  href: "#top",
                  accent: true,
                  isWaitlist: true,
                },
              ].map(({ label, href, accent, isWaitlist }) => (
                <li key={label}>
                  <a
                    href={href}
                    onClick={(e) => {
                      if (isWaitlist) {
                        e.preventDefault(); // Stop standard jump
                        document
                          .getElementById("waitlist-email")
                          ?.scrollIntoView({
                            behavior: "smooth",
                            block: "center",
                          });
                        setTimeout(
                          () =>
                            document.getElementById("waitlist-email")?.focus(),
                          500,
                        );
                      }
                    }}
                    className="text-[14px] transition-colors cursor-pointer"
                    style={{
                      color: accent
                        ? "var(--tertiary-fixed-dim)"
                        : "color-mix(in oklab, white 50%, transparent)",
                    }}
                    onMouseEnter={(e) => {
                      (e.currentTarget as HTMLElement).style.color = "white";
                    }}
                    onMouseLeave={(e) => {
                      (e.currentTarget as HTMLElement).style.color = accent
                        ? "var(--tertiary-fixed-dim)"
                        : "color-mix(in oklab, white 50%, transparent)";
                    }}
                  >
                    {label}
                    {accent && " →"}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3
              className="label-caps text-[12px] mb-5"
              style={{ color: "color-mix(in oklab, white 35%, transparent)" }}
            >
              Company
            </h3>
            <ul className="space-y-3">
              {[
                { label: "About Us", href: "/about" },
                { label: "Our Mission", href: "/mission" },
                // { label: "Careers", href: "#" },
                {
                  label: "LinkedIn",
                  href: "https://www.linkedin.com/company/spandhika-orthotics",
                },
              ].map(({ label, href }) => (
                <li key={label}>
                  <a
                    href={href}
                    target={href.startsWith("http") ? "_blank" : undefined}
                    rel="noopener noreferrer"
                    className="text-[14px] transition-colors"
                    style={{
                      color: "color-mix(in oklab, white 50%, transparent)",
                    }}
                    onMouseEnter={(e) => {
                      (e.currentTarget as HTMLElement).style.color = "white";
                    }}
                    onMouseLeave={(e) => {
                      (e.currentTarget as HTMLElement).style.color =
                        "color-mix(in oklab, white 50%, transparent)";
                    }}
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3
              className="label-caps text-[12px] mb-5"
              style={{ color: "color-mix(in oklab, white 35%, transparent)" }}
            >
              Legal
            </h3>

            <ul className="space-y-3">
              {[
                { label: "Privacy Policy", href: "/privacy" },
                { label: "Terms of Service", href: "/terms" },
                { label: "Return Policy", href: "/returns" },
              ].map(({ label, href }) => (
                <li key={label}>
                  <a
                    href={href}
                    className="text-[14px] transition-colors"
                    style={{
                      color: "color-mix(in oklab, white 50%, transparent)",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.color = "white";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.color =
                        "color-mix(in oklab, white 50%, transparent)";
                    }}
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* ── BOTTOM BAR ── */}
        <div
          className="py-6 flex flex-col sm:flex-row items-center justify-between gap-3"
          style={{
            borderTop: "1px solid color-mix(in oklab, white 8%, transparent)",
          }}
        >
          <p
            className="text-[12px]"
            style={{ color: "color-mix(in oklab, white 30%, transparent)" }}
          >
            © {new Date().getFullYear()} Spandhika Orthotics. All rights
            reserved.
          </p>
          <p
            className="text-[12px]"
            style={{ color: "color-mix(in oklab, white 20%, transparent)" }}
          >
            Launching 2026 · Be first to know
          </p>
        </div>
      </div>
    </footer>
  );
}