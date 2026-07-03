"use client";
import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 pt-6 pb-4 bg-white/90 backdrop-blur-md shadow-sm">
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
          <Link
            href="#problem"
            className="hover:text-emerald-800 transition-colors"
          >
            The problem
          </Link>
          <Link
            href="#features"
            className="hover:text-emerald-800 transition-colors"
          >
            Features
          </Link>
          <Link
            href="#who-its-for"
            className="hover:text-emerald-800 transition-colors"
          >
            Who it's for
          </Link>
          <Link
            href="#purpose"
            className="hover:text-emerald-800 transition-colors"
          >
            Purpose
          </Link>
          <Link
            href="#contact"
            className="hover:text-emerald-800 transition-colors"
          >
            Contact
          </Link>
        </div>

        {/* Waitlist Button */}
        <div>
          <button
            onClick={() => {
              document
                .getElementById("waitlist-email")
                ?.scrollIntoView({ behavior: "smooth", block: "center" });
              setTimeout(
                () => document.getElementById("waitlist-email")?.focus(),
                500,
              );
            }}
            className="bg-[#022c22] hover:bg-emerald-950 text-white px-6 py-2.5 rounded-full text-base font-medium transition-colors shadow-sm cursor-pointer"
          >
            Join waitlist
          </button>
        </div>
      </div>
    </nav>
  );
}