"use client";

import { useState, type FormEvent } from "react";
import { Turnstile } from "nextjs-turnstile";
import {
  BatteryCharging,
  Check,
  ChevronDown,
  ChevronUp,
  ShieldCheck,
  Smartphone,
} from "lucide-react";
import { montserrat } from "@/lib/fonts";

const faqs: [question: string, answer: string][] = [
  [
    "What is Saarthi, and how does it work?",
    "Saarthi is a smart insole system that slips into your everyday shoes and tracks how your feet move while you walk. The insole sends pressure, balance, and gait data to the Saarthi app so you can understand your foot health in plain language.",
  ],
  [
    "What can Saarthi tell me about my foot pressure, balance, and gait?",
    "It shows your foot pressure distribution, balance score, step and stride length, cadence, and fall-risk indicators — all tracked over time so you can see patterns, spot changes early, and measure progress.",
  ],
  [
    "How does Saarthi's smart insole connect with the app?",
    "The insole has built-in pressure and motion sensors. It connects wirelessly to the Saarthi app via Bluetooth, so your walking data syncs automatically after each walk.",
  ],
  [
    "Who can benefit from using Saarthi?",
    "Anyone who wants to walk better, feel steadier, or prevent foot problems — including elders, people with diabetic or neuropathic feet, flat foot, chronic pain, athletes, and clinicians who want real-world gait data.",
  ],
  [
    "When will Saarthi be available?",
    "Saarthi is launching soon. Join the waitlist and we'll let you know the moment it becomes available.",
  ],
  [
    "How can I get early access or be notified when Saarthi launches?",
    "Tap the 'Join waitlist' button, enter your email, and we'll send you early-access updates as soon as we launch.",
  ],
];

function WaitlistForm() {
  const [email, setEmail] = useState("");
  const [token, setToken] = useState<string | null>(null);
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  async function onSubmit(e: FormEvent) {
    e.preventDefault();

    if (!email || status === "loading" || !token) {
      if (!token) {
        setStatus("error");
        setErrorMessage("Please complete the security check.");
      }
      return;
    }

    setStatus("loading");
    setErrorMessage("");

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
        setStatus("error");
        setErrorMessage(data.error || "Too many requests. Please try again in a minute.");
      } else {
        setStatus("error");
        setErrorMessage(data.error || "Something went wrong. Please try again.");
      }
    } catch {
      setStatus("error");
      setErrorMessage("Network error. Please check your connection.");
    }
  }

  if (status === "success") {
    return (
      <div className="flex w-full max-w-md items-center justify-center gap-3 rounded-xl bg-white/15 px-5 py-4 backdrop-blur-sm">
        <Check className="h-4 w-4 shrink-0" aria-hidden="true" />
        <span className="text-sm font-medium">You&apos;re on the list. We&apos;ll be in touch.</span>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="flex w-full max-w-md flex-col items-center gap-3">
      <div className="flex w-full flex-col gap-3 sm:flex-row">
        <label htmlFor="waitlist-email" className="sr-only">
          Email address
        </label>
        <input
          id="waitlist-email"
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="you@email.com"
          disabled={status === "loading"}
          className="w-full rounded-xl bg-white px-5 py-3.5 text-base text-foreground outline-none placeholder:text-muted-foreground focus:ring-2 focus:ring-tertiary-fixed-dim/60 disabled:opacity-60"
        />
        <button
          type="submit"
          disabled={status === "loading" || !token}
          className="shrink-0 cursor-pointer rounded-xl bg-foreground px-7 py-3.5 text-sm font-semibold text-background shadow-[0_10px_20px_rgba(0,0,0,0.25)] transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_14px_30px_rgba(0,0,0,0.35)] disabled:cursor-not-allowed disabled:opacity-70 disabled:hover:translate-y-0"
        >
          {status === "loading" ? "Joining..." : "Join waitlist"}
        </button>
      </div>

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

      {status === "error" && (
        <p role="alert" className="rounded-md bg-black/25 px-3 py-1.5 text-[13px]">
          {errorMessage}
        </p>
      )}
    </form>
  );
}

export default function WaitlistFaq() {
  const [open, setOpen] = useState(0);

  return (
    <section
      id="faq"
      className={`${montserrat.className} mx-auto max-w-7xl scroll-mt-24 px-6 py-24 lg:px-10`}
    >
      <div className="grid items-stretch gap-8 lg:grid-cols-[1.6fr_1fr] lg:gap-[30px]">
        {/* Waitlist card */}
        <div
          id="waitlist"
          className="waitlist-gradient flex scroll-mt-28 flex-col items-center justify-center rounded-[2rem] px-8 py-16 text-center text-primary-foreground shadow-[0_10px_30px_rgba(0,0,0,0.08)] sm:px-10 sm:py-20"
        >
          <h2 className="mb-4 text-4xl font-semibold leading-[1.1] tracking-tight sm:text-5xl">
            Be first to walk
            <br />
            on SAARTHI.
          </h2>
          <p className="mb-8 max-w-sm text-base opacity-90">
            Join the waitlist for early access and launch pricing in 2026.
          </p>

          <WaitlistForm />

          <div className="mt-8 flex flex-wrap items-center justify-center gap-5 text-sm opacity-90">
            <span className="inline-flex items-center gap-2">
              <ShieldCheck className="h-4 w-4" aria-hidden="true" /> 30-day comfort promise
            </span>
            <span className="inline-flex items-center gap-2">
              <BatteryCharging className="h-4 w-4" aria-hidden="true" /> Week-long battery
            </span>
            <span className="inline-flex items-center gap-2">
              <Smartphone className="h-4 w-4" aria-hidden="true" /> Works with any phone
            </span>
          </div>
        </div>

        {/* FAQ accordion */}
        <div className="flex flex-col justify-center gap-3">
          {faqs.map(([question, answer], i) => {
            const isOpen = open === i;
            return (
              <div
                key={question}
                className={`rounded-xl border bg-card transition-all duration-200 ${
                  isOpen
                    ? "border-border shadow-[0_4px_12px_rgba(0,0,0,0.05)]"
                    : "border-border/50 shadow-[0_2px_8px_rgba(0,0,0,0.02)] hover:border-border"
                }`}
              >
                <button
                  type="button"
                  onClick={() => setOpen(isOpen ? -1 : i)}
                  aria-expanded={isOpen}
                  aria-controls={`faq-answer-${i}`}
                  className="flex w-full cursor-pointer items-center justify-between gap-4 px-5 py-[18px] text-left text-[0.95rem] font-medium text-foreground"
                >
                  <span>{question}</span>
                  {isOpen ? (
                    <ChevronUp className="h-5 w-5 shrink-0 text-primary" aria-hidden="true" />
                  ) : (
                    <ChevronDown className="h-5 w-5 shrink-0 text-muted-foreground" aria-hidden="true" />
                  )}
                </button>
                {isOpen && (
                  <p
                    id={`faq-answer-${i}`}
                    className="-mt-1 px-5 pb-[18px] text-[0.9rem] leading-[1.6] text-muted-foreground"
                  >
                    {answer}
                  </p>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
