import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { montserrat } from "@/lib/fonts";

/** Sticky header shared by all sub-pages (audience, company, legal, blog). */
export function SiteHeader({
  backHref = "/",
  backLabel = "Back to home",
  backShort = "Home",
}: {
  backHref?: string;
  backLabel?: string;
  backShort?: string;
}) {
  return (
    <header className="sticky top-0 z-50 border-b border-border backdrop-blur-xl" style={{ backgroundColor: "rgb(255 255 255 / 0.86)" }}>
      <div className="mx-auto flex h-[72px] max-w-6xl items-center justify-between gap-4 px-6 lg:px-10">
        <Link href="/" aria-label="Spandhika Orthotics home" className="flex shrink-0 items-center">
          <Image src="/SO_Logo.png" alt="Spandhika Orthotics" width={48} height={48} className="h-11 w-auto object-contain" priority />
        </Link>
        <div className="flex items-center gap-2 sm:gap-3">
          <Link
            href={backHref}
            className="inline-flex items-center gap-1.5 rounded-full px-3 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-secondary hover:text-primary"
          >
            <ArrowLeft className="h-4 w-4" aria-hidden="true" />
            <span className="hidden sm:inline">{backLabel}</span>
            <span className="sm:hidden">{backShort}</span>
          </Link>
          <Link
            href="/#waitlist"
            className="inline-flex items-center gap-1.5 rounded-full bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground transition-transform hover:-translate-y-0.5"
          >
            Join waitlist
          </Link>
        </div>
      </div>
    </header>
  );
}

/** Small footer shared by all sub-pages. */
export function SiteFooter() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 py-7 text-sm text-muted-foreground md:flex-row lg:px-10">
        <p>© {new Date().getFullYear()} Spandhika Orthotics. All rights reserved.</p>
        <nav aria-label="Footer" className="flex flex-wrap justify-center gap-x-5 gap-y-2">
          <Link href="/about" className="hover:text-primary">About</Link>
          <Link href="/blog" className="hover:text-primary">Blog</Link>
          <Link href="/privacy" className="hover:text-primary">Privacy</Link>
          <Link href="/terms" className="hover:text-primary">Terms</Link>
          <Link href="/returns" className="hover:text-primary">Returns</Link>
          <Link href="/#contact" className="hover:text-primary">Contact</Link>
        </nav>
      </div>
    </footer>
  );
}

/** Green waitlist call-to-action band. */
export function CtaBand({
  title = "Be first to walk on SAARTHI.",
  text = "Join the waitlist for early access and launch pricing.",
}: {
  title?: string;
  text?: string;
}) {
  return (
    <section className="pb-20">
      <div className="mx-auto max-w-6xl px-6 lg:px-10">
        <div className="waitlist-gradient flex flex-col items-center rounded-[2rem] px-8 py-14 text-center text-primary-foreground sm:py-16">
          <h2 className="text-3xl font-semibold leading-tight tracking-tight sm:text-4xl">{title}</h2>
          <p className="mt-3 max-w-md text-base opacity-90">{text}</p>
          <Link
            href="/#waitlist"
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-[15px] font-semibold text-primary transition-transform hover:-translate-y-0.5"
          >
            Join the waitlist
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Link>
        </div>
      </div>
    </section>
  );
}

/** Page wrapper: site font + palette, header, content, footer. */
export function SiteShell({
  children,
  backHref,
  backLabel,
  backShort,
}: {
  children: ReactNode;
  backHref?: string;
  backLabel?: string;
  backShort?: string;
}) {
  return (
    <div className={`${montserrat.className} lv-theme flex min-h-screen flex-col`}>
      <SiteHeader backHref={backHref} backLabel={backLabel} backShort={backShort} />
      <main className="flex-1">{children}</main>
      <SiteFooter />
    </div>
  );
}
