import type { Metadata } from "next";
import DocPage, { type DocSection } from "@/components/site/DocPage";

export const metadata: Metadata = {
  title: "Return Policy",
  description:
    "Our commitment to your satisfaction and our return guidelines for Spandhika Orthotics.",
};

const sections: DocSection[] = [
  {
    id: "current-status",
    title: "Current status",
    content: [
      {
        subtitle: "Pre-launch phase",
        text: "SAARTHI is currently in its pre-launch waitlist phase. As no financial transactions have taken place and no physical products have been shipped, we are not currently processing any physical returns.",
      },
    ],
  },
  {
    id: "waitlist-cancellations",
    title: "Waitlist cancellations",
    content: [
      {
        subtitle: "100% free waitlist",
        text: "Joining our waitlist is completely free and requires no deposit. If you change your mind and no longer wish to purchase SAARTHI when it launches, you can simply unsubscribe from our emails. No refunds or formal cancellations are necessary.",
      },
    ],
  },
  {
    id: "future-policy",
    title: "Our future return policy",
    content: [
      {
        subtitle: "The 30-day guarantee",
        text: "Once SAARTHI officially launches, we intend to offer a 30-day return window. If the smart insoles do not fit or meet your expectations, you will have 30 days from the date of delivery to initiate a return.",
      },
      {
        subtitle: "Hygiene and condition",
        text: "Because insoles are worn directly inside your shoes, we will require returns to be in clean, lightly tested (indoors only) condition, along with the original packaging, to be eligible for a full refund. We want you to test them, but please treat them with care.",
      },
    ],
  },
  {
    id: "hardware-warranty",
    title: "Hardware warranty",
    content: [
      {
        subtitle: "Protecting your tech",
        text: "SAARTHI is a sophisticated electronic device. Every pair will come with a standard 1-year manufacturer's warranty covering any structural defects, sensor failures, battery issues, or internal electronic component malfunctions under normal use.",
      },
    ],
  },
  {
    id: "defective-units",
    title: "Damaged or defective units",
    content: [
      {
        subtitle: "Free replacements",
        text: "When we begin shipping, if your product arrives damaged or is found to be defective out of the box, we will replace it entirely free of charge. Your seamless movement is our priority.",
      },
    ],
  },
  {
    id: "contact",
    title: "Questions?",
    content: [
      {
        subtitle: "Get in touch",
        text: "If you have any questions about our future return processes or warranty coverage, please reach out to us at spandhikaorthotics@gmail.com. We aim to respond within 2 business days.",
      },
    ],
  },
];

export default function ReturnPolicyPage() {
  return (
    <DocPage
      eyebrow="Legal"
      title="Return Policy"
      intro="Our commitment to your satisfaction. Read about our current waitlist phase and what to expect when SAARTHI officially launches."
      meta="Last updated: June 2026"
      sections={sections}
    />
  );
}
