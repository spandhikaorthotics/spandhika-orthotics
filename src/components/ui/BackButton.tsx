"use client";

import Link from "next/link";

export default function BackButton() {
  return (
    <Link href="/"
      aria-label="Back to home"
      className="absolute top-8 left-8 w-9 h-9 rounded-xl flex items-center justify-center transition-all"
      style={{ background: "color-mix(in oklab, var(--primary) 8%, transparent)", color: "var(--primary)", border: "1px solid color-mix(in oklab, var(--outline-variant) 50%, transparent)" }}
      onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = "color-mix(in oklab, var(--primary) 14%, transparent)"; }}
      onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = "color-mix(in oklab, var(--primary) 8%, transparent)"; }}>
      <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M19 12H5M5 12l7 7M5 12l7-7" />
      </svg>
    </Link>
  );
}