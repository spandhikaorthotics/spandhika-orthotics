import type { Metadata } from "next";
import DocPage, { type DocSection } from "@/components/site/DocPage";

export const metadata: Metadata = {
  title: "Terms of Service",
  description:
    "The rules, guidelines, and legal terms for using the Spandhika Orthotics website.",
};

const sections: DocSection[] = [
  {
    id: "acceptance",
    title: "Acceptance of terms",
    content: [
      {
        subtitle: "Agreement to terms",
        text: "By accessing or using the Spandhika Orthotics website and joining our waitlist, you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our website.",
      },
    ],
  },
  {
    id: "medical-disclaimer",
    title: "Medical disclaimer",
    content: [
      {
        subtitle: "Not medical advice",
        text: "Spandhika Orthotics and our upcoming product, SAARTHI, are designed to provide data, insights, and support for your gait and posture. However, the information provided on this website is for educational and informational purposes only. It is not a substitute for professional medical advice, diagnosis, or treatment.",
      },
      {
        subtitle: "Consult a professional",
        text: "Always seek the advice of your physician or other qualified healthcare provider with any questions you may have regarding a medical condition or foot pain. Never disregard professional medical advice or delay in seeking it because of something you have read on this website.",
      },
    ],
  },
  {
    id: "waitlist",
    title: "Waitlist & communications",
    content: [
      {
        subtitle: "No obligation",
        text: "Joining our waitlist simply means you wish to be notified when SAARTHI is ready for launch. It does not constitute a legally binding contract to purchase the product, nor does it guarantee a specific price, feature set, or launch date.",
      },
    ],
  },
  {
    id: "intellectual-property",
    title: "Intellectual property",
    content: [
      {
        subtitle: "Our content",
        text: "All text, graphics, logos, designs, and software on this website are the exclusive property of Spandhika Orthotics and are protected by applicable copyright and trademark laws. You may not copy, reproduce, distribute, or create derivative works from our content without explicit written permission.",
      },
    ],
  },
  {
    id: "acceptable-use",
    title: "Acceptable use",
    content: [
      {
        subtitle: "Website usage",
        text: "You agree to use our website only for lawful purposes. You must not use the site in any way that causes, or may cause, damage to the website or impairment of the availability or accessibility of the website. Attempting to hack, scrape, spam, or disrupt our services is strictly prohibited.",
      },
    ],
  },
  {
    id: "liability",
    title: "Limitation of liability",
    content: [
      {
        subtitle: "Provided 'as is'",
        text: "Our website is provided on an 'as is' and 'as available' basis. While we strive to keep the information accurate and up-to-date, Spandhika Orthotics makes no warranties, expressed or implied, regarding the completeness or reliability of the website.",
      },
      {
        subtitle: "Damages",
        text: "To the maximum extent permitted by law, Spandhika Orthotics will not be liable for any indirect, consequential, or incidental damages arising out of your use of, or inability to use, this website.",
      },
    ],
  },
  {
    id: "governing-law",
    title: "Governing law",
    content: [
      {
        subtitle: "Jurisdiction",
        text: "These terms shall be governed by and construed in accordance with the laws of India. Any disputes relating to these terms and conditions will be subject to the exclusive jurisdiction of the courts of India.",
      },
    ],
  },
  {
    id: "contact",
    title: "Questions?",
    content: [
      {
        subtitle: "Get in touch",
        text: "If you have any questions about these Terms of Service, please reach out to us at spandhikaorthotics@gmail.com. We aim to respond within 2 business days.",
      },
    ],
  },
];

export default function TermsOfServicePage() {
  return (
    <DocPage
      eyebrow="Legal"
      title="Terms of Service"
      intro="The rules and guidelines for using our website. By accessing Spandhika Orthotics, you agree to these terms."
      meta="Last updated: June 2026"
      sections={sections}
    />
  );
}
