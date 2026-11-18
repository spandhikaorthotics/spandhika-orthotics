import type { Metadata } from "next";
import { Footprints, HeartHandshake, TrendingUp } from "lucide-react";
import AudiencePage from "@/components/audience/AudiencePage";

export const metadata: Metadata = {
  title: "Saarthi for families",
  description:
    "Understand a loved one's steps and support their independence with foot pressure, balance and gait insights.",
};

export default function ForFamiliesPage() {
  return (
    <AudiencePage
      current="for-families"
      eyebrow="For families"
      title="Saarthi for families"
      tagline="Understand a loved one's steps. Support their independence."
      intro="Changes in walking can be hard to describe. Saarthi measures foot pressure, balance and gait, helping you and your loved one have more informed conversations about everyday movement."
      heroImage="/audience/for-families.jpg"
      heroAlt="A man doing a balance exercise with support from a physiotherapist"
      heroPosition="62% center"
      benefitsTitle="A clearer picture of everyday walking"
      benefits={[
        {
          icon: Footprints,
          title: "Understand their steps",
          text: "Look at pressure and balance patterns together, rather than relying only on how a walk feels.",
        },
        {
          icon: TrendingUp,
          title: "Notice changes over time",
          text: "Discuss walking trends with your loved one and bring questions to their care team.",
        },
        {
          icon: HeartHandshake,
          title: "Keep independence at the centre",
          text: "Explore insights together, with your loved one's involvement and consent.",
        },
      ]}
      disclaimer="Saarthi is not an emergency alert service and cannot guarantee fall prevention. Seek professional advice for new pain, wounds or changes in walking."
    />
  );
}
