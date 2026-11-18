import type { Metadata } from "next";
import { Activity, ShieldCheck, TrendingUp } from "lucide-react";
import AudiencePage from "@/components/audience/AudiencePage";

export const metadata: Metadata = {
  title: "Saarthi for you",
  description:
    "See your own pressure, balance and walking patterns in the Saarthi app — no clinic visits, no complicated setup.",
};

export default function ForYouPage() {
  return (
    <AudiencePage
      current="for-you"
      eyebrow="For you"
      title="Saarthi for you"
      tagline="Your walking, clearly understood."
      intro="Slip Saarthi into your shoes and see your own pressure, balance and walking patterns in the app — no clinic visits, no complicated setup. Whether you're staying active, recovering or looking after your feet, your steps tell you how you're doing."
      heroImage="/audience/for-you.jpg"
      heroAlt="Elderly woman walking confidently beside her companion on a city street"
      heroPosition="center 30%"
      benefitsTitle="Know your steps better"
      benefits={[
        {
          icon: Activity,
          title: "See your walking patterns",
          text: "Pressure, balance, cadence and symmetry, translated into simple insights you can read at a glance.",
        },
        {
          icon: TrendingUp,
          title: "Track changes over time",
          text: "Watch daily and weekly trends so you know whether you're moving steadier and more confidently.",
        },
        {
          icon: ShieldCheck,
          title: "Stay in control",
          text: "Your walking data lives securely in one place, and you choose what to share with family or your care team.",
        },
      ]}
      groups={[
        {
          title: "Elders",
          text: "Walk with more confidence — Saarthi keeps an eye on balance and pressure so small changes don't go unnoticed.",
          image: "/audience/for-you.jpg",
          alt: "Two elderly people walking together",
        },
        {
          title: "Diabetic foot care",
          text: "Gentle, everyday pressure monitoring helps protect feet that need a little extra care.",
          image: "/audience/groups/diabetic.jpg",
          alt: "Foot care for a person with diabetes",
        },
        {
          title: "On your feet all day",
          text: "Long hours of standing and walking, understood — see the load your feet carry every day.",
          image: "/audience/groups/on-your-feet.jpg",
          alt: "A worker who spends the day on their feet",
        },
        {
          title: "Athletes",
          text: "Train smarter with cadence, stride and symmetry insights after every run or session.",
          image: "/audience/groups/athletes.jpg",
          alt: "An athlete running",
        },
        {
          title: "Divyangjan",
          text: "Support for every step — pressure and balance insights that help make everyday movement safer and more confident.",
          image: "/audience/groups/divyangjan.jpg",
          alt: "A person with a disability moving confidently",
        },
      ]}
      disclaimer="Saarthi supports awareness of everyday movement. It is not a medical device and does not provide a diagnosis — please consult a healthcare professional about any health concerns."
    />
  );
}
