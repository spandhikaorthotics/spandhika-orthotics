"use client";
import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function Navbar() {
  // State to manage mobile menu visibility
  const [isOpen, setIsOpen] = useState(false);
  // Transparent over the top of the hero video, solid white once the page scrolls.
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    let frame = 0;
    const update = () => {
      frame = 0;
      setScrolled(window.scrollY > 24);
    };
    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      if (frame) cancelAnimationFrame(frame);
    };
  }, []);

  const solid = scrolled || isOpen;

  // Array of links to avoid repeating code for desktop and mobile menus
  const navLinks = [
    { name: "How it works", href: "#how" },
    { name: "What Saarthi measures", href: "/what-saarthi-measures" },
    { name: "Who it's for", href: "#who" },
    { name: "Our story", href: "#story" },
    { name: "Blogs", href: "/blog" },
    { name: "FAQ", href: "#faq" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <nav
      className={`fixed inset-x-0 top-0 z-50 pt-6 pb-4 transition-[background-color,box-shadow] duration-100 ${
        solid ? "bg-white/90 backdrop-blur-md shadow-sm" : "bg-transparent"
      }`}
    >
      {/* Soft shade so white links stay readable over bright video frames */}
      <div
        aria-hidden="true"
        className={`pointer-events-none absolute inset-0 -z-10 bg-gradient-to-b from-black/45 to-transparent transition-opacity duration-100 ${
          solid ? "opacity-0" : "opacity-100"
        }`}
      />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <Link href="/" className="flex items-center justify-center">
            <Image
              src="/SO_Logo.png"
              alt="Spandhika Orthotics Logo"
              width={50}
              height={50}
              className={`object-contain transition-[filter] duration-100 ${solid ? "" : "brightness-0 invert"}`}
              priority
            />
          </Link>
        </div>

        {/* Desktop Links */}
        <div
          className={`hidden lg:flex items-center gap-6 xl:gap-8 font-medium text-[15px] transition-colors duration-100 ${
            solid ? "text-slate-600" : "text-white/90"
          }`}
        >
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className={solid ? "hover:text-emerald-800 transition-colors duration-100" : "hover:text-white transition-colors duration-100"}
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* Right Side Action Area */}
        <div className="flex items-center gap-3 sm:gap-4">
          {/* Waitlist Button */}
          <button
            onClick={() => {
              document
                .getElementById("waitlist-email")
                ?.scrollIntoView({ behavior: "smooth", block: "center" });
              setTimeout(
                () => document.getElementById("waitlist-email")?.focus(),
                500
              );
              setIsOpen(false); // Close menu if it was open
            }}
            className={`px-5 py-2.5 rounded-full text-sm sm:text-base font-medium transition-colors duration-100 shadow-sm cursor-pointer ${
              solid ? "bg-[#022c22] hover:bg-emerald-950 text-white" : "bg-white hover:bg-white/90 text-[#022c22]"
            }`}
          >
            Join waitlist
          </button>

          {/* Mobile Menu Toggle Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className={`lg:hidden p-2 -mr-2 transition-colors focus:outline-none ${
              solid ? "text-slate-600 hover:text-emerald-800" : "text-white"
            }`}
            aria-label="Toggle menu"
          >
            {/* Hamburger / Close Icon logic */}
            {isOpen ? (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div className="lg:hidden absolute top-full left-0 w-full bg-white shadow-lg border-t border-gray-100 py-4 px-6 flex flex-col gap-4">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="text-slate-600 hover:text-emerald-800 font-medium text-base py-2 border-b border-gray-50 last:border-none"
            >
              {link.name}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
}