"use client";
import Image from "next/image";
import { useState, type FormEvent } from "react";
import { Turnstile } from "nextjs-turnstile";

function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex items-center gap-3 text-slate-500 text-xs font-semibold tracking-widest uppercase mb-6">
      <span className="h-px w-6 bg-[#10b981]" />
      {children}
    </div>
  );
}

function FloatingCard({
  className,
  label,
  value,
  unit,
  sub,
  dotColor,
}: {
  className?: string;
  label: string;
  value: string;
  unit?: string;
  sub: string;
  dotColor: string;
}) {
  return (
    <div
      className={`absolute glass rounded-2xl p-3.5 w-40 z-20 ${className ?? ""}`}
      style={{
        backgroundColor: "color-mix(in oklab, var(--card) 25%, transparent)",
      }}
    >
      <div
        className="flex items-center gap-2 font-semibold uppercase tracking-widest text-[8px] mb-2"
        style={{ color: "var(--on-surface-variant)" }}
      >
        <span className="relative flex h-2 w-2 shrink-0">
          <span
            className={`animate-ping absolute inline-flex h-full w-full rounded-full opacity-75 ${dotColor}`}
          />
          <span
            className={`relative inline-flex h-2 w-2 rounded-full ${dotColor}`}
          />
        </span>
        {label}
      </div>
      <div className="flex items-baseline gap-1">
        <span
          className="text-[22px] font-bold leading-none"
          style={{ color: "var(--primary)" }}
        >
          {value}
        </span>
        {unit && (
          <span
            className="text-[11px] font-normal"
            style={{ color: "var(--secondary)" }}
          >
            {unit}
          </span>
        )}
      </div>
      <div className="text-[11px] mt-0.5" style={{ color: "var(--secondary)" }}>
        {sub}
      </div>
    </div>
  );
}

const heroStats = [
  { value: "32", label: "Pressure zones" },
  { value: "24", label: "Gait variables" },
  { value: "94%", label: "Balance accuracy" },
  { value: "1M+", label: "Data points / day" },
];

export default function Hero() {
  const [email, setEmail] = useState("");
  const [token, setToken] = useState<string | null>(null);
  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");
  const [errorMessage, setErrorMessage] = useState("");

  async function onSubmit(e: FormEvent) {
    e.preventDefault();
    
    // 3. Block submission if loading or missing token
    if (!email || status === "loading" || !token) {
      if (!token) {
        setStatus("error");
        setErrorMessage("Please complete the security check.");
      }
      return;
    }
    
    setStatus("loading");
    setErrorMessage(""); // Reset error message on new submission

    try {
      const res = await fetch("/api/waitlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, token }),
      });

      const data = await res.json();

      if (res.ok || res.status === 409) {
        setStatus("success");
        setEmail("");
      } else if (res.status === 429) {
        // Catch the rate limit error specifically
        setStatus("error");
        setErrorMessage(data.error || "Too many requests. Please try again in a minute.");
      } else {
        // Catch any other backend errors (400 invalid email, 500 server error, etc.)
        setStatus("error");
        setErrorMessage(data.error || "Something went wrong. Please try again.");
      }
    } catch {
      setStatus("error");
      setErrorMessage("Network error. Please check your connection.");
    }
  }

  return (
    <section
      id="top"
      className="relative overflow-hidden pt-10 pb-16 md:pt-16 md:pb-20 bg-[#f5faf7]"
    >
      <style
        dangerouslySetInnerHTML={{
          __html: `
        @keyframes float-smooth {
          0%   { transform: translateY(0px); }
          50%  { transform: translateY(-10px); }
          100% { transform: translateY(0px); }
        }
        .animate-float { animation: float-smooth 6s ease-in-out infinite; }
      `,
        }}
      />

      {/* Subtle radial bg glow */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-[700px] h-[700px] rounded-full bg-[#10b981]/10 blur-3xl" />
      </div>

      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-12 lg:gap-16 items-center relative">
        {/* ═══ LEFT COLUMN ═══ */}
        <div className="z-10 flex flex-col w-full max-w-[520px] mx-auto lg:mx-0">
          <Eyebrow>Smart orthotic insoles</Eyebrow>

          <h1 className="text-5xl sm:text-6xl lg:text-[64px] font-bold tracking-tight text-[#022c22] leading-[1.08]">
            Better movement <br />
            starts from your <br />
            <span className="text-[#10b981]">feet.</span>
          </h1>

          <p className="mt-5 text-[16px] text-slate-500 leading-relaxed max-w-[460px]">
            Most people ignore foot problems until they affect posture, comfort,
            and daily life. Spandhika is a smart orthotic insole that listens to
            how you walk — and helps you move better.
          </p>

          {/* ── Inline email form ── */}
          <div className="mt-8 w-full max-w-[460px]">
            {status === "success" ? (
              <div
                className="flex items-center gap-3 rounded-2xl px-5 py-4"
                style={{
                  background: "color-mix(in oklab, #10b981 12%, transparent)",
                  border:
                    "1px solid color-mix(in oklab, #10b981 25%, transparent)",
                }}
              >
                <svg
                  className="w-4 h-4 shrink-0 text-[#10b981]"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                <span className="text-[14px] font-medium text-[#022c22]">
                  You're on the list. We'll be in touch.
                </span>
              </div>
            ) : (
              <form
                onSubmit={onSubmit}
                className="flex flex-col gap-3"
              >
                <div className="flex flex-col sm:flex-row gap-2.5">
                  <input
                    id="waitlist-email"
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="you@example.com"
                    className="flex-1 bg-white rounded-full px-5 py-3.5 text-[15px] text-[#022c22] focus:outline-none focus:ring-2 focus:ring-[#10b981]/30 placeholder:text-slate-400 shadow-sm disabled:opacity-50"
                    style={{ border: "1px solid #e2e8f0" }}
                    disabled={status === "loading"}
                  />
                  <button
                    type="submit"
                    // 5. Disable button if missing token
                    disabled={status === "loading" || !token}
                    className="inline-flex items-center justify-center gap-2 bg-[#022c22] hover:bg-[#034032] text-white px-7 py-3.5 rounded-full text-[15px] font-semibold transition-colors shadow-md hover:shadow-lg shrink-0 disabled:opacity-70 cursor-pointer"
                  >
                    {status === "loading" ? "Joining..." : "Join waitlist"}
                    {status !== "loading" && <span aria-hidden="true">→</span>}
                  </button>
                </div>

                {/* 6. Render Turnstile Widget */}
                <div className="mt-1">
                  <Turnstile 
                    siteKey={process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY!}
                    onSuccess={(t) => {
                      setToken(t);
                      if (status === "error" && errorMessage === "Please complete the security check.") {
                        setErrorMessage("");
                        setStatus("idle");
                      }
                    }}
                    onExpire={() => setToken(null)}
                    onError={() => {
                      setStatus("error");
                      setErrorMessage("Security verification failed. Please refresh.");
                    }}
                  />
                </div>
              </form>
            )}
            {status === "error" && (
              <p className="mt-2 text-[13px] text-red-500 px-1">
                {errorMessage}
              </p>
            )}
          </div>

          <div className="mt-4 flex flex-wrap items-center gap-x-5 gap-y-2 text-[13px]">
            <a
              href="#features"
              className="text-[#022c22] font-semibold hover:text-[#10b981] flex items-center gap-1.5 transition-colors"
            >
              Learn about SAARTHI features →
            </a>
            <span className="text-slate-400">No spam · Launching 2026</span>
          </div>

          {/* Stats row */}
          <div className="mt-10 lg:mt-12 w-full grid grid-cols-4 gap-3 border-t border-slate-200/80 pt-6 lg:pt-8">
            {heroStats.map((s) => (
              <div key={s.label} className="text-left flex flex-col">
                <div className="text-[28px] lg:text-[32px] font-bold text-[#022c22] leading-none mb-1.5">
                  {s.value}
                </div>
                <div className="text-[9px] lg:text-[10px] font-semibold text-slate-500 uppercase tracking-[0.2em] leading-snug pr-2">
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ═══ RIGHT COLUMN ═══ */}
        <div
          className="relative w-full max-w-[500px] mx-auto lg:ml-auto mt-8 lg:mt-0"
          style={{ aspectRatio: "1 / 1.15" }}
        >
          {/* Card background */}
          <div className="absolute inset-0 bg-[#eaf5ef] rounded-[2rem] overflow-hidden">
            {/* Grid pattern */}
            <div
              className="absolute inset-0 opacity-70"
              style={{
                backgroundImage:
                  "linear-gradient(to right, #022c2220 1px, transparent 1px), linear-gradient(to bottom, #022c2220 1px, transparent 1px)",
                backgroundSize: "32px 32px",
              }}
            />
          </div>

          {/* Floating foot + cards */}
          <div className="absolute inset-0 flex items-center justify-center animate-float">
            {/* The foot heatmap */}
            <div className="relative w-[80%] h-[80%]">
              <Image
                src="/hero-foot.png"
                alt="Foot pressure heatmap with live pressure readings showing 38.2kPa at heel"
                fill
                className="object-contain drop-shadow-2xl"
                priority
              />
            </div>

            {/* Live Pressure card — top right */}
            <FloatingCard
              className="top-8 -right-2 sm:-right-6"
              label="Live Pressure"
              value="38.2"
              unit="kPa"
              sub="Heel · Right"
              dotColor="bg-[#10b981]"
            />

            {/* Gait Balance card — bottom left */}
            <FloatingCard
              className="bottom-8 -left-2 sm:-left-6"
              label="Gait Balance"
              value="94%"
              sub="Symmetry score"
              dotColor="bg-[#022c22]"
            />
          </div>
        </div>
      </div>
    </section>
  );
}