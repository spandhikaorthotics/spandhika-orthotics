import type { Metadata } from "next";
import DocPage, { type DocSection } from "@/components/site/DocPage";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "How Spandhika Orthotics collects, uses, and protects your personal data.",
};

const sections: DocSection[] = [
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
    <DocPage
      eyebrow="Legal"
      title="Privacy Policy"
      intro="We built Spandhika to help people move better — not to harvest their data. This policy explains plainly what we collect, why, and what you can do about it."
      meta="Last updated: June 2026"
      sections={sections}
    />
  );
}
