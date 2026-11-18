import type { Metadata } from "next";
import Image from "next/image";
import type { CSSProperties } from "react";
import DocPage, { type DocSection } from "@/components/site/DocPage";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "The story behind Spandhika Orthotics and the team building SAARTHI.",
};

const founders: { name: string; role: string; image: string; imageStyle: CSSProperties; text: string }[] = [
  {
    name: "Abhishek Goyal",
    role: "Co-founder",
    image: "/founders/abhishek.jpg",
    imageStyle: { objectPosition: "50% 0%", transform: "scale(1.25)", transformOrigin: "50% 23%" },
    text: "Abhishek holds an M.Tech in Electronics & Communication Engineering from NIT Hamirpur. The idea for IOLMS began after a friend developed severe back pain that was eventually traced to an undiagnosed flat foot, a condition that could have been detected much earlier with the right data. That experience inspired a patent, the founding of the company, and a mission to make gait health visible before it turns into a serious medical problem.",
  },
  {
    name: "Krishna Gambhir",
    role: "Co-founder",
    image: "/founders/krishna.jpg",
    imageStyle: { objectPosition: "50% 76%" },
    text: "Krishna holds a B.Tech in Electronics & Communication Engineering from NIT Hamirpur. He leads the hardware and firmware development of IOLMS, designing everything from the sensor architecture to the embedded systems that have transformed an early hackathon prototype into a medical device ready for certification.",
  },
];

function FounderGrid() {
  return (
    <ul className="mt-8 grid gap-6 sm:grid-cols-2">
      {founders.map((f) => (
        <li key={f.name} className="overflow-hidden rounded-2xl bg-white ring-1 ring-border/70">
          <div className="relative aspect-[4/3] overflow-hidden bg-muted">
            <Image
              src={f.image}
              alt={`${f.name}, ${f.role}`}
              fill
              sizes="(min-width: 1024px) 380px, (min-width: 640px) 50vw, 100vw"
              loading="eager"
              className="object-cover"
              style={f.imageStyle}
            />
          </div>
          <div className="p-6">
            <h3 className="text-lg font-semibold text-primary">{f.name}</h3>
            <p className="mt-0.5 text-sm font-medium text-muted-foreground">{f.role}</p>
            <p className="mt-4 text-[15px] leading-relaxed text-muted-foreground">{f.text}</p>
          </div>
        </li>
      ))}
    </ul>
  );
}

const sections: DocSection[] = [
  {
    id: "origin-story",
    title: "The origin story",
    content: [
      {
        subtitle: "How it all started",
        text: "Saarthi was born from a simple question: what if diabetic foot complications could be detected before they became visible? What began as a hostel-room hackathon idea soon grew into a mission to build technology that empowers patients and clinicians with early, actionable insights. From day one, our focus has been on creating a solution that is accurate, practical, and comfortable enough for everyday use.",
      },
      {
        subtitle: "Identifying the gap",
        text: "Millions of people living with diabetes remain unaware of developing foot complications until they become painful or irreversible. Existing screening methods are often reactive, infrequent, and dependent on clinical visits. We saw an opportunity to bridge this gap by developing an intelligent insole capable of continuously monitoring foot health, enabling earlier intervention and reducing the risk of ulcers through accessible, real-time monitoring.",
      },
    ],
  },
  {
    id: "meet-the-team",
    title: "Meet the founders",
    custom: <FounderGrid />,
  },
  {
    id: "engineering-philosophy",
    title: "Our engineering philosophy",
    content: [
      {
        subtitle: "Hardware meets software",
        text: "Saarthi combines a 32-sensor pressure matrix with a 9-axis motion sensor, processing data in real time on an ESP32-C6 powered by our custom FreeRTOS firmware. Instead of simply recording pressure points, it interprets gait phases, balance, and movement patterns to deliver clinical-grade insights outside the confines of a gait laboratory.",
      },
      {
        subtitle: "Precision matters",
        text: "Every layer of Saarthi is engineered for long-term accuracy, from the placement of each sensor to the material stack that maintains consistent performance through everyday use. Our proprietary scoring algorithm transforms complex sensor data into a single, clinically meaningful metric, making gait health easy to understand and reliable enough to act upon.",
      },
    ],
  },
  {
    id: "behind-the-scenes",
    title: "Behind the scenes",
    content: [
      {
        subtitle: "Work in progress",
        text: "Saarthi started as a hostel-room hackathon idea and has since gone through five hardware revisions, a granted Indian patent, and a full FreeRTOS-based firmware rebuild. We're currently validating our smart insole's sensor accuracy against clinical gait labs at PGIMER Chandigarh, refining the insole's material stack for long-term wearability, and preparing for regulatory certification under India's CDSCO Class B pathway. Every version gets tested on real feet before it earns a place in the next one.",
      },
    ],
  },
];

export default function AboutPage() {
  return (
    <DocPage
      eyebrow="Company"
      title="About Us"
      intro="Meet the team bringing clinical-grade movement technology out of the lab and into your daily life."
      sections={sections}
      cta
    />
  );
}
