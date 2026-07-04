import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "How Spandhika Orthotics collects, uses, and protects your personal data.",
};

const sections = [
  {
    id: "information-we-collect",
    title: "Information we collect",
    content: [
      {
        subtitle: "Waitlist signups",
        text: "When you join our waitlist, we collect your email address. That's it. We don't ask for your name, phone number, or any other personal information at this stage.",
      },
      {
        subtitle: "Contact form",
        text: "If you reach out via our contact form, we collect your name, email address, and the message you send us. We use this only to respond to your enquiry.",
      },
      {
        subtitle: "Usage data",
        text: "We may collect anonymised data about how visitors interact with our website — such as which pages are visited and how long they're viewed. This data cannot be used to identify you personally.",
      },
    ],
  },
  {
    id: "how-we-use-it",
    title: "How we use your information",
    content: [
      {
        subtitle: "To keep you informed",
        text: "We use your email address to notify you when SAARTHI is ready to launch, and for important updates about the product. We will never send you unrelated marketing emails.",
      },
      {
        subtitle: "To respond to you",
        text: "Contact form submissions are used solely to respond to your message. We do not add you to any mailing list without your explicit consent.",
      },
      {
        subtitle: "To improve our product",
        text: "Anonymised usage data helps us understand what's working on the website so we can make it better for everyone.",
      },
    ],
  },
  {
    id: "data-storage",
    title: "How we store your data",
    content: [
      {
        subtitle: "Secure storage",
        text: "Your email address is stored securely in an encrypted database hosted on MongoDB Atlas, a trusted cloud database provider. Access is restricted to authorised team members only.",
      },
      {
        subtitle: "Retention",
        text: "We keep your email on our waitlist until SAARTHI launches or until you ask us to remove it — whichever comes first. Contact form data is retained for up to 12 months.",
      },
      {
        subtitle: "No third-party sharing",
        text: "We do not sell, rent, or share your personal data with any third parties for marketing purposes. Ever.",
      },
    ],
  },
  {
    id: "your-rights",
    title: "Your rights",
    content: [
      {
        subtitle: "Access your data",
        text: "You can request a copy of the personal data we hold about you at any time by emailing us at spandhikaorthotics@gmail.com.",
      },
      {
        subtitle: "Delete your data",
        text: "You can ask us to permanently delete your data at any time. Send an email to spandhikaorthotics@gmail.com with the subject line 'Delete my data' and we'll action it within 7 days.",
      },
      {
        subtitle: "Unsubscribe",
        text: "Every email we send includes an unsubscribe link. You can also email us directly to be removed from our list.",
      },
    ],
  },
  {
    id: "cookies",
    title: "Cookies",
    content: [
      {
        subtitle: "Minimal cookie use",
        text: "Our website does not use tracking cookies or advertising cookies. We may use essential session cookies to ensure the website functions correctly, but these do not collect personal information and are not used for any tracking purpose.",
      },
    ],
  },
  {
    id: "security",
    title: "Security & Bot Protection",
    content: [
      {
        subtitle: "Cloudflare Turnstile",
        text: (
          <>
            We use Cloudflare Turnstile in "invisible mode" to protect our website forms from spam and abuse. Turnstile runs in the background to verify that visitors are human without requiring intrusive puzzles. As a condition of using this service, we are required to reference the{" "}
            <a
              href="https://www.cloudflare.com/en-gb/turnstile-privacy-policy/"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "var(--primary)", textDecoration: "underline" }}
              className="hover:opacity-70 transition-opacity"
            >
              Cloudflare Turnstile Privacy Addendum
            </a>
            , which governs how Cloudflare processes your data during this security check.
          </>
        ),
      },
    ],
  },
  {
    id: "dpdp-act",
    title: "India's DPDP Act compliance",
    content: [
      {
        subtitle: "Digital Personal Data Protection Act, 2023",
        text: "We are committed to complying with India's Digital Personal Data Protection Act (DPDP Act) 2023. We collect your data only with your explicit consent, use it only for the stated purpose, and provide you with the right to access, correct, and erase your data upon request.",
      },
    ],
  },
  {
    id: "changes",
    title: "Changes to this policy",
    content: [
      {
        subtitle: "We'll let you know",
        text: "If we make significant changes to this Privacy Policy, we'll update the 'Last updated' date below and, where appropriate, notify you by email. Continued use of our website after changes are posted constitutes your acceptance of the updated policy.",
      },
    ],
  },
  {
    id: "contact",
    title: "Questions?",
    content: [
      {
        subtitle: "Get in touch",
        text: "If you have any questions about this Privacy Policy or how we handle your data, please email us at spandhikaorthotics@gmail.com. We aim to respond within 2 business days.",
      },
    ],
  },
];

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen" style={{ background: "var(--background)" }}>
      {/* ── HERO HEADER ── */}
      <div
        className="relative overflow-hidden"
        style={{ background: "var(--primary)" }}
      >
        {/* Ambient glows */}
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <div
            className="absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full opacity-15"
            style={{
              background:
                "radial-gradient(circle, var(--tertiary-fixed) 0%, transparent 70%)",
            }}
          />
          <div
            className="absolute -bottom-20 -left-20 w-[400px] h-[400px] rounded-full opacity-10"
            style={{
              background:
                "radial-gradient(circle, var(--tertiary-fixed-dim) 0%, transparent 70%)",
            }}
          />
        </div>

        {/* Top nav */}
        <div className="relative z-10 max-w-[1280px] mx-auto px-6 lg:px-8 py-6 flex items-center justify-between">
          <Link
            href="/"
            className="flex items-center gap-2 text-[13px] font-medium transition-opacity hover:opacity-70"
            style={{ color: "color-mix(in oklab, white 60%, transparent)" }}
          >
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
            Back to home
          </Link>
          <span
            className="text-[11px] font-semibold uppercase tracking-[0.15em]"
            style={{ color: "var(--tertiary-fixed-dim)" }}
          >
            Spandhika Orthotics
          </span>
        </div>

        {/* Hero content */}
        <div className="relative z-10 max-w-[1280px] mx-auto px-6 lg:px-8 pb-16 pt-8">
          <p
            className="text-[11px] font-semibold uppercase tracking-[0.15em] mb-4"
            style={{ color: "var(--tertiary-fixed-dim)" }}
          >
            Legal
          </p>
          <h1 className="text-[48px] sm:text-[56px] lg:text-[64px] font-bold tracking-tight leading-[1.06] text-white mb-5">
            Privacy Policy
          </h1>
          <p
            className="text-[16px] leading-relaxed max-w-[560px] mb-8"
            style={{ color: "color-mix(in oklab, white 55%, transparent)" }}
          >
            We built Spandhika to help people move better — not to harvest their
            data. This policy explains plainly what we collect, why, and what
            you can do about it.
          </p>
          <div
            className="inline-flex items-center gap-2 rounded-full px-4 py-2 text-[12px] font-medium"
            style={{
              background:
                "color-mix(in oklab, var(--tertiary-fixed) 15%, transparent)",
              border:
                "1px solid color-mix(in oklab, var(--tertiary-fixed-dim) 25%, transparent)",
              color: "color-mix(in oklab, white 70%, transparent)",
            }}
          >
            <span
              className="w-1.5 h-1.5 rounded-full"
              style={{ background: "var(--tertiary-fixed-dim)" }}
            />
            Last updated: June 2026
          </div>
        </div>

        {/* Bottom fade */}
        <div
          className="absolute bottom-0 left-0 right-0 h-px"
          style={{ background: "color-mix(in oklab, white 8%, transparent)" }}
        />
      </div>

      {/* ── MINT GREEN BACKGROUND WRAPPER ── */}
      <div
        className="w-full"
        style={{
          background: "linear-gradient(135deg, #ffffff 0%, #ffffff 30%, #e6f6f3 100%)",
        }}
      >
        {/* ── MAIN CONTENT: sidebar + body ── */}
        <div className="max-w-[1280px] mx-auto px-6 lg:px-8 py-16 lg:py-24">
          <div className="flex gap-16 lg:gap-24 items-start">
            
            {/* ── STICKY SIDEBAR (desktop only) ── */}
            <aside className="hidden lg:block w-56 shrink-0 sticky top-12">
              <p
                className="text-[10px] font-semibold uppercase tracking-[0.15em] mb-4"
                style={{ color: "var(--on-surface-variant)" }}
              >
                Contents
              </p>
              <nav className="flex flex-col gap-1">
                {sections.map((s, i) => (
                  <a
                    key={s.id}
                    href={`#${s.id}`}
                    className="flex items-center gap-3 py-2.5 px-3 rounded-xl text-[13px] font-medium transition-all group text-[var(--on-surface-variant)] hover:text-[var(--primary)] hover:bg-[color-mix(in_oklab,var(--primary)_6%,transparent)]"
                  >
                    <span
                      className="text-[10px] font-bold w-5 shrink-0 opacity-60 group-hover:opacity-100"
                      style={{ color: "var(--primary)" }}
                    >
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    {s.title}
                  </a>
                ))}
              </nav>

              {/* Contact card in sidebar */}
              <div
                className="mt-10 rounded-2xl p-5"
                style={{
                  background:
                    "color-mix(in oklab, var(--primary) 3%, transparent)",
                  border:
                    "1px solid color-mix(in oklab, var(--primary) 8%, transparent)",
                }}
              >
                <p
                  className="text-[13px] font-semibold mb-1"
                  style={{ color: "var(--primary)" }}
                >
                  Have a question?
                </p>
                <p
                  className="text-[12px] leading-relaxed mb-4"
                  style={{ color: "var(--on-surface-variant)" }}
                >
                  We respond personally within 2 business days.
                </p>
                <a
                  href="mailto:spandhikaorthotics@gmail.com"
                  className="inline-flex text-[12px] font-medium transition-opacity hover:opacity-70 break-all"
                  style={{ color: "var(--primary)", borderBottom: "1px solid color-mix(in oklab, var(--primary) 30%, transparent)" }}
                >
                  spandhikaorthotics@gmail.com
                </a>
              </div>
            </aside>

            {/* ── MAIN BODY ── */}
            <div className="flex-1 min-w-0 max-w-[720px]">
              {/* Mobile table of contents */}
              <div
                className="lg:hidden rounded-2xl p-6 mb-12"
                style={{
                  background:
                    "color-mix(in oklab, var(--surface-variant) 20%, transparent)",
                  border:
                    "1px solid color-mix(in oklab, var(--outline-variant) 25%, transparent)",
                }}
              >
                <p
                  className="text-[11px] font-semibold uppercase tracking-widest mb-4"
                  style={{ color: "var(--on-surface-variant)" }}
                >
                  Contents
                </p>
                <div className="flex flex-col gap-1.5">
                  {sections.map((s, i) => (
                    <a
                      key={s.id}
                      href={`#${s.id}`}
                      className="flex items-center gap-3 text-[14px] font-medium py-1.5"
                      style={{ color: "var(--primary)" }}
                    >
                      <span
                        className="text-[11px] font-bold opacity-60"
                        style={{ color: "var(--primary)" }}
                      >
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      {s.title}
                    </a>
                  ))}
                </div>
              </div>

              {/* Sections Flow */}
              <div className="space-y-20">
                {sections.map((section, i) => (
                  <section
                    key={section.id}
                    id={section.id}
                    className="scroll-mt-12"
                  >
                    {/* Section header */}
                    <div className="flex items-baseline gap-4 mb-8">
                      <span
                        className="text-[14px] font-bold shrink-0 opacity-40"
                        style={{ color: "var(--primary)" }}
                      >
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <h2
                        className="text-[26px] sm:text-[30px] font-bold tracking-tight"
                        style={{ color: "var(--primary)" }}
                      >
                        {section.title}
                      </h2>
                    </div>

                    {/* Document-style Content List */}
                    <div className="space-y-8 pl-1 sm:pl-8">
                      {section.content.map((item) => (
                        <div key={item.subtitle} className="relative group">
                          {/* Subtle left dot for visual anchor */}
                          <div 
                            className="absolute left-0 top-2.5 w-1.5 h-1.5 rounded-full hidden sm:block transition-all group-hover:scale-125 group-hover:opacity-100 opacity-40" 
                            style={{ background: "var(--primary)" }} 
                          />
                          <div className="sm:pl-6">
                            <h3
                              className="text-[17px] font-semibold mb-2"
                              style={{ color: "var(--primary)" }}
                            >
                              {item.subtitle}
                            </h3>
                            <p
                              className="text-[15px] sm:text-[16px] leading-relaxed"
                              style={{ color: "var(--on-surface-variant)" }}
                            >
                              {item.text}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>

                    {/* Minimal Separator Line */}
                    {i < sections.length - 1 && (
                      <div
                        className="mt-20 h-px w-full"
                        style={{
                          background:
                            "color-mix(in oklab, var(--outline-variant) 20%, transparent)",
                        }}
                      />
                    )}
                  </section>
                ))}
              </div>

              {/* Bottom CTA (mobile) */}
              <div
                className="lg:hidden mt-20 rounded-2xl p-8 text-center"
                style={{
                  background:
                    "color-mix(in oklab, var(--primary) 3%, transparent)",
                  border:
                    "1px solid color-mix(in oklab, var(--primary) 10%, transparent)",
                }}
              >
                <p
                  className="text-[16px] font-semibold mb-2"
                  style={{ color: "var(--primary)" }}
                >
                  Have a question about your data?
                </p>
                <p
                  className="text-[14px] mb-6"
                  style={{ color: "var(--on-surface-variant)" }}
                >
                  We're a small team and we respond personally.
                </p>
                <a
                  href="mailto:spandhikaorthotics@gmail.com"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-[14px] font-semibold transition-transform hover:scale-105 active:scale-95"
                  style={{ background: "var(--primary)", color: "white" }}
                >
                  spandhikaorthotics@gmail.com
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* ── FOOTER BAR ── */}
        <div
          className="border-t"
          style={{
            borderColor:
              "color-mix(in oklab, var(--outline-variant) 15%, transparent)",
          }}
        >
          <div className="max-w-[1280px] mx-auto px-6 lg:px-8 py-8 flex flex-col sm:flex-row items-center justify-between gap-4">
            <p
              className="text-[13px] font-medium"
              style={{ color: "var(--on-surface-variant)" }}
            >
              © {new Date().getFullYear()} Spandhika Orthotics. All rights
              reserved.
            </p>
            <Link
              href="/"
              className="text-[13px] font-semibold transition-opacity hover:opacity-70"
              style={{ color: "var(--primary)" }}
            >
              Back to spandhikaorthotics.in →
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}