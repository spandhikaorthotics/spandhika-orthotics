"use client";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

export default function Navbar() {
  // State to manage mobile menu visibility
  const [isOpen, setIsOpen] = useState(false);

  // Array of links to avoid repeating code for desktop and mobile menus
  const navLinks = [
    { name: "The problem", href: "#problem" },
    { name: "Features", href: "#features" },
    { name: "Who it's for", href: "#who-its-for" },
    { name: "Purpose", href: "#purpose" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <nav className="sticky top-0 z-50 pt-6 pb-4 bg-white/90 backdrop-blur-md shadow-sm relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <Link href="/" className="flex items-center justify-center">
            <Image
              src="/SO_Logo.png"
              alt="Spandhika Orthotics Logo"
              width={50}
              height={50}
              className="object-contain"
              priority
            />
          </Link>
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8 font-medium text-[15px] text-slate-600">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="hover:text-emerald-800 transition-colors"
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
            className="bg-[#022c22] hover:bg-emerald-950 text-white px-5 py-2.5 rounded-full text-sm sm:text-base font-medium transition-colors shadow-sm cursor-pointer"
          >
            Join waitlist
          </button>

          {/* Mobile Menu Toggle Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 -mr-2 text-slate-600 hover:text-emerald-800 transition-colors focus:outline-none"
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
        <div className="md:hidden absolute top-full left-0 w-full bg-white shadow-lg border-t border-gray-100 py-4 px-6 flex flex-col gap-4">
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