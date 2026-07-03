"use client";

import { useState, type FormEvent } from "react";

export default function WaitlistForm() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  async function onSubmit(e: FormEvent) {
  e.preventDefault();
  if (!email) return;
  setStatus("loading");

  try {
    const res = await fetch("/api/waitlist", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email }),
    });

    const data = await res.json();
    
    if (res.status === 409) {
      // Already registered — treat as success so UX feels smooth
      setStatus("success");
    } else if (!res.ok) {
      throw new Error(data.error);
    } else {
      setStatus("success");
      setEmail("");
    }
  } catch (error) {
    console.error(error);
    setStatus("error");
  }
}

  if (status === "success") {
    return (
      <div className="w-full rounded-2xl px-5 py-4 flex items-center gap-3"
        style={{
          background: "color-mix(in oklab, var(--tertiary-fixed) 12%, transparent)",
          border: "1px solid color-mix(in oklab, var(--tertiary-fixed-dim) 30%, transparent)",
        }}>
        <div className="w-8 h-8 rounded-xl flex items-center justify-center shrink-0"
          style={{ background: "color-mix(in oklab, var(--tertiary-fixed-dim) 20%, transparent)" }}>
          <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"
            style={{ color: "var(--on-tertiary-container)" }}>
            <polyline points="20 6 9 17 4 12" />
          </svg>
        </div>
        <div>
          <p className="text-[14px] font-semibold" style={{ color: "var(--primary)" }}>You're on the list!</p>
          <p className="text-[12px] mt-0.5" style={{ color: "var(--on-surface-variant)" }}>We'll reach out when we launch.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full">

      {/* Email input row */}
      <div className="relative flex flex-col gap-2.5">
        <div className="relative">
          <div className="absolute left-4 top-1/2 -translate-y-1/2"
            style={{ color: "var(--on-surface-variant)" }}>
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
          </div>
          <input
            id="email"
            type="email"
            required
            disabled={status === "loading"}
            value={email}
            onChange={(e) => { setEmail(e.target.value); if (status === "error") setStatus("idle"); }}
            placeholder="you@example.com"
            className="w-full pl-11 pr-4 py-3.5 rounded-2xl text-[14px] focus:outline-none transition-all disabled:opacity-60"
            style={{
              background: "var(--surface-container-low)",
              border: status === "error"
                ? "1.5px solid var(--destructive)"
                : "1.5px solid color-mix(in oklab, var(--outline-variant) 60%, transparent)",
              color: "var(--on-surface)",
            }}
            onFocus={e => { (e.currentTarget as HTMLElement).style.borderColor = "var(--on-tertiary-container)"; }}
            onBlur={e => { (e.currentTarget as HTMLElement).style.borderColor = status === "error" ? "var(--destructive)" : "color-mix(in oklab, var(--outline-variant) 60%, transparent)"; }}
          />
        </div>

        <button
          type="button"
          disabled={status === "loading"}
          onClick={(e) => { const form = (e.currentTarget as HTMLElement).closest("div")?.querySelector("input"); if (form) { const fakeEvent = { preventDefault: () => {}, currentTarget: form } as any; onSubmit({ preventDefault: () => {} } as FormEvent); } else { onSubmit({ preventDefault: () => {} } as FormEvent); } }}
          className="w-full py-3.5 rounded-2xl text-[14px] font-semibold transition-all flex items-center justify-center gap-2 disabled:opacity-70 cursor-pointer"
          style={{ background: "var(--primary)", color: "white" }}
          onMouseEnter={e => { if (status !== "loading") (e.currentTarget as HTMLElement).style.opacity = "0.9"; }}
          onMouseLeave={e => { (e.currentTarget as HTMLElement).style.opacity = "1"; }}
        >
          {status === "loading" ? (
            <>
              <svg className="w-4 h-4 animate-spin" viewBox="0 0 24 24" fill="none">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z" />
              </svg>
              Joining...
            </>
          ) : status === "error" ? (
            "Try again →"
          ) : (
            <>Join the waitlist <span aria-hidden="true">→</span></>
          )}
        </button>
      </div>

      {/* Error */}
      {status === "error" && (
        <p className="mt-2 text-[12px] px-1" style={{ color: "var(--destructive)" }}>
          Something went wrong. Please try again.
        </p>
      )}
    </div>
  );
}