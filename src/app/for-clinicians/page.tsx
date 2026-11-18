import type { Metadata } from "next";
import { Gauge, Grid2x2, TrendingUp } from "lucide-react";
import AudiencePage from "@/components/audience/AudiencePage";

export const metadata: Metadata = {
  title: "Saarthi for clinicians",
  description:
    "Everyday pressure, balance and gait measurements from a smart insole to add context to your clinical assessment.",
};

export default function ForCliniciansPage() {
  return (
    <AudiencePage
      current="for-clinicians"
      eyebrow="For clinicians"
      title="Saarthi for clinicians"
      tagline="Everyday walking insights. A more informed assessment."
      intro="Explore how pressure, balance and gait measurements from a smart insole can add context to patient conversations and complement your clinical examination."
      heroImage="/audience/for-clinicians.jpg"
      heroAlt="A clinician examining a patient's shoe in a clinic"
      heroPosition="42% center"
      benefitsTitle="More context for patient care"
      benefits={[
        {
          icon: Grid2x2,
          title: "Pressure and loading",
          text: "Explore how weight is distributed underfoot and compare patterns between steps.",
        },
        {
          icon: Gauge,
          title: "Balance and gait",
          text: "Consider cadence, step and stride length, and symmetry alongside your clinical findings.",
        },
        {
          icon: TrendingUp,
          title: "Progress over time",
          text: "Use walking trends as a starting point for discussions about rehabilitation and follow-up.",
        },
      ]}
      disclaimer="Measurements support, rather than replace, clinical judgement. Saarthi does not provide a standalone diagnosis or guarantee clinical outcomes."
    />
  );
}
