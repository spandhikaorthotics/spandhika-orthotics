"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { ArrowRight, Menu, X } from "lucide-react";
import { montserrat } from "@/lib/fonts";

const navLinks = [
  { name: "How it works", id: "how" },
  { name: "Who it's for", id: "who" },
  { name: "Our story", id: "story" },
  { name: "Blogs", id: "blogs" },
  { name: "FAQ", id: "faq" },
  { name: "Contact", id: "contact" },
];

function goToWaitlist() {
  document.getElementById("waitlist")?.scrollIntoView({ behavior: "smooth", block: "center" });
  setTimeout(() => document.getElementById("waitlist-email")?.focus({ preventScroll: true }), 700);
}

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState<string | null>(null);
  const navRef = useRef<HTMLElement>(null);

  // Add a shadow once the page has scrolled.
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Highlight the link for the section currently in view.
  useEffect(() => {
    const sections = navLinks
      .map((l) => document.getElementById(l.id))
      .filter((el): el is HTMLElement => el !== null);
    if (!sections.length) return;

    const io = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((e) => e.isIntersecting);
        if (visible.length) {
          visible.sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
          setActive(visible[0].target.id);
        } else if (window.scrollY < window.innerHeight * 0.5) {
          setActive(null);
        }
      },
      // A band across the upper-middle of the viewport decides the active section.
      { rootMargin: "-30% 0px -60% 0px" },
    );
    sections.forEach((s) => io.observe(s));
    return () => io.disconnect();
  }, []);

  // Mobile menu: close on Escape or a tap outside the navbar.
  useEffect(() => {
    if (!isOpen) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setIsOpen(false);
    const onPointer = (e: PointerEvent) => {
      if (!navRef.current?.contains(e.target as Node)) setIsOpen(false);
    };
    window.addEventListener("keydown", onKey);
    document.addEventListener("pointerdown", onPointer);
    return () => {
      window.removeEventListener("keydown", onKey);
      document.removeEventListener("pointerdown", onPointer);
    };
  }, [isOpen]);

  return (
    <nav
      ref={navRef}
      aria-label="Main"
      className={`${montserrat.className} lv-theme sticky top-0 z-50 border-b backdrop-blur-xl transition-[box-shadow,border-color] duration-300 ${
        scrolled || isOpen
          ? "border-border shadow-[0_8px_24px_-16px_color-mix(in_oklab,var(--primary)_45%,transparent)]"
          : "border-transparent"
      }`}
      style={{ backgroundColor: "rgb(255 255 255 / 0.86)" }}
    >
      <div className="mx-auto flex h-[76px] max-w-7xl items-center justify-between gap-6 px-6 lg:px-10">
        {/* Logo */}
        <a href="#top" aria-label="Spandhika Orthotics — back to top" className="flex shrink-0 items-center">
          <Image src="/SO_Logo.png" alt="Spandhika Orthotics" width={48} height={48} className="h-12 w-auto object-contain" priority />
        </a>

        {/* Desktop links */}
        <ul className="hidden items-center gap-1 lg:flex">
          {navLinks.map((link) => {
            const isActive = active === link.id;
            return (
              <li key={link.id}>
                <a
                  href={`#${link.id}`}
                  aria-current={isActive ? "true" : undefined}
                  className={`rounded-full px-3.5 py-2 text-[14px] font-medium transition-colors xl:px-4 ${
                    isActive
                      ? "bg-[var(--primary-soft)] text-primary"
                      : "text-muted-foreground hover:bg-[color-mix(in_oklab,var(--secondary)_70%,white)] hover:text-primary"
                  }`}
                >
                  {link.name}
                </a>
              </li>
            );
          })}
        </ul>

        {/* Actions */}
        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={() => {
              setIsOpen(false);
              goToWaitlist();
            }}
            className="group hidden cursor-pointer items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-[14px] font-semibold text-primary-foreground shadow-[0_8px_20px_-10px_color-mix(in_oklab,var(--primary)_80%,transparent)] transition-all hover:-translate-y-0.5 sm:inline-flex"
          >
            Join waitlist
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" aria-hidden="true" />
          </button>

          <button
            type="button"
            onClick={() => setIsOpen((o) => !o)}
            aria-label={isOpen ? "Close menu" : "Open menu"}
            aria-expanded={isOpen}
            aria-controls="mobile-menu"
            className="grid h-11 w-11 cursor-pointer place-items-center rounded-full text-primary transition-colors hover:bg-secondary lg:hidden"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div id="mobile-menu" className="lv-swap border-t border-border bg-white px-6 pb-6 pt-3 lg:hidden">
          <ul className="flex flex-col">
            {navLinks.map((link) => (
              <li key={link.id}>
                <a
                  href={`#${link.id}`}
                  onClick={() => setIsOpen(false)}
                  className={`flex items-center justify-between rounded-xl px-3 py-3.5 text-[16px] font-medium transition-colors ${
                    active === link.id ? "bg-[var(--primary-soft)] text-primary" : "text-foreground hover:bg-secondary"
                  }`}
                >
                  {link.name}
                  <ArrowRight className="h-4 w-4 text-muted-foreground" aria-hidden="true" />
                </a>
              </li>
            ))}
          </ul>
          <button
            type="button"
            onClick={() => {
              setIsOpen(false);
              goToWaitlist();
            }}
            className="mt-4 flex w-full cursor-pointer items-center justify-center gap-2 rounded-xl bg-primary py-3.5 text-[15px] font-semibold text-primary-foreground"
          >
            Join waitlist
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </button>
        </div>
      )}
    </nav>
  );
}
