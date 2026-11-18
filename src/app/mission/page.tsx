import type { Metadata } from "next";
import DocPage, { type DocSection } from "@/components/site/DocPage";

export const metadata: Metadata = {
  title: "Our Mission",
  description:
    "Why we are building Spandhika Orthotics and our vision for the future of better movement.",
};

const sections: DocSection[] = [
  {
    id: "the-foundation",
    title: "The foundation of movement",
    content: [
      {
        subtitle: "Starting from the ground up",
        text: "Human movement starts at the feet. They are the foundation of our posture, balance, and daily comfort. Yet, foot health is often ignored until pain forces us to pay attention. We believe proactive care is the key to lifelong mobility and well-being.",
      },
    ],
  },
  {
    id: "the-gap",
    title: "Bridging the gap",
    content: [
      {
        subtitle: "Clinical insights, everyday wear",
        text: "Traditionally, understanding your gait and pressure distribution required expensive clinical visits and specialized equipment. Our mission is to democratize this technology. We are taking advanced biomechanical analysis out of the lab and putting it directly into the shoes you wear every day.",
      },
    ],
  },
  {
    id: "our-approach",
    title: "Our approach with SAARTHI",
    content: [
      {
        subtitle: "Data-driven orthotics",
        text: "With SAARTHI, we are building more than just an insole. We are creating a smart companion that continuously monitors pressure points, balance, and gait symmetry. By turning invisible physical patterns into actionable data, we empower you to correct imbalances before they become injuries.",
      },
      {
        subtitle: "Precision engineering",
        text: "We are combining robust hardware sensors with intelligent software to provide real-time, easy-to-understand feedback. Our goal is to make smart, personalized orthotics as seamless and essential as a fitness tracker, but focused entirely on your foundation.",
      },
    ],
  },
  {
    id: "the-vision",
    title: "The ultimate vision",
    content: [
      {
        subtitle: "A pain-free future",
        text: "We envision a world where technology actively works to keep you moving comfortably. Whether you are an athlete looking to optimize performance, a professional on your feet all day, or someone simply wanting to walk without pain, Spandhika is here to support every step.",
      },
    ],
  },
];

export default function MissionPage() {
  return (
    <DocPage
      eyebrow="Company"
      title="Our Mission"
      intro="Empowering better movement from the ground up. We are building the tools to help you understand your body and walk with confidence."
      sections={sections}
      cta
    />
  );
}
