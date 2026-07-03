"use client";

import { useEffect, useState } from "react";

const facts = [
  {
    text: "Up to 1 in 3 people living with diabetes will develop a diabetic foot complication in their lifetime, making preventive care critical.",
    source: "NIH"
  },
  {
    text: "Most diabetic foot ulcers develop because repetitive pressure damages tissue long before visible wounds appear.",
    source: "IWGDF"
  },
  {
    text: "Abnormal plantar pressure is one of the strongest predictors of diabetic foot ulcer formation.",
    source: "IWGDF"
  },
  {
    text: "Changes in gait can appear before a diabetic foot ulcer becomes visible.",
    source: "Clinical Biomechanics"
  },
  {
    text: "Pressure hotspots often form beneath the forefoot, heel, and big toe during walking.",
    source: "Foot & Ankle Research"
  },
  {
    text: "People with diabetic neuropathy may continue walking on an injured foot without realizing it.",
    source: "CDC"
  },
  {
    text: "Continuous foot pressure monitoring can identify high-risk areas before tissue breakdown occurs.",
    source: "Diabetic Foot Research"
  },
  {
    text: "Smart insoles can collect gait and pressure data during normal daily activities.",
    source: "Wearable Health Technology"
  },
  {
    text: "Every step leaves a pressure signature that can reveal changes in foot health.",
    source: "Biomechanics Research"
  },
  {
    text: "Uneven weight distribution during walking can increase ulcer risk.",
    source: "Journal of Biomechanics"
  },
  {
    text: "Foot pressure measurements are often more sensitive than visual inspection alone.",
    source: "Diabetic Foot Research"
  },
  {
    text: "Diabetic neuropathy commonly causes slower walking speed and shorter stride length.",
    source: "Gait & Posture"
  },
  {
    text: "Foot ulcers are frequently caused by repetitive stress rather than a single injury.",
    source: "NIH"
  },
  {
    text: "Patients with a history of foot ulcers remain at high risk for recurrence.",
    source: "IWGDF"
  },
  {
    text: "Pressure redistribution is a key strategy for preventing diabetic foot ulcers.",
    source: "Orthotic Research"
  },
  {
    text: "Proper orthotic design can reduce pressure concentration in vulnerable areas of the foot.",
    source: "World Journal of Diabetes"
  },
  {
    text: "Gait analysis can detect walking asymmetries that are difficult to notice visually.",
    source: "Clinical Biomechanics"
  },
  {
    text: "A rise in local foot temperature may signal inflammation before an ulcer develops.",
    source: "Diabetic Medicine"
  },
  {
    text: "Loss of protective sensation is one of the biggest risk factors for diabetic foot complications.",
    source: "CDC"
  },
  {
    text: "Many serious diabetic foot complications begin with a painless injury.",
    source: "CDC"
  },
  {
    text: "Real-time gait monitoring enables clinicians to track rehabilitation progress remotely.",
    source: "Digital Health Research"
  },
  {
    text: "Walking patterns can reveal underlying neurological and musculoskeletal problems.",
    source: "NIH"
  },
  {
    text: "Wearable sensors are making gait analysis possible outside specialized laboratories.",
    source: "IEEE Biomedical Engineering"
  },
  {
    text: "Machine learning can identify abnormal gait patterns from foot pressure data.",
    source: "IEEE Access"
  },
  {
    text: "Pressure sensors can capture thousands of data points during a short walk.",
    source: "Sensor Technology Research"
  },
  {
    text: "High plantar pressure combined with neuropathy greatly increases ulcer risk.",
    source: "IWGDF"
  },
  {
    text: "Custom orthoses help distribute load more evenly across the foot.",
    source: "World Journal of Diabetes"
  },
  {
    text: "Early detection is significantly less costly than treating advanced diabetic foot ulcers.",
    source: "Diabetic Foot Care Research"
  },
  {
    text: "Foot complications remain one of the leading causes of diabetes-related hospital admissions.",
    source: "NIH"
  },
  {
    text: "Monitoring walking behavior over time can reveal subtle declines in foot health.",
    source: "Digital Medicine"
  },
  {
    text: "Preventing excessive pressure is often easier than treating the damage it causes.",
    source: "IWGDF"
  },
  {
    text: "Foot biomechanics change throughout the progression of diabetic neuropathy.",
    source: "NIH"
  },
  {
    text: "Pressure and shear forces together contribute to skin breakdown and ulcer formation.",
    source: "Gerontechnology Research"
  },
  {
    text: "Many diabetic foot ulcers occur at locations exposed to repetitive loading every day.",
    source: "NIH"
  },
  {
    text: "The earlier an abnormal gait pattern is detected, the better the chances of prevention.",
    source: "Clinical Biomechanics"
  },
  {
    text: "Digital foot-health monitoring can support proactive rather than reactive care.",
    source: "Nature Digital Medicine"
  },
  {
    text: "Footwear and orthotics play a critical role in managing plantar pressure.",
    source: "World Journal of Diabetes"
  },
  {
    text: "Gait analysis can help evaluate whether an orthotic is effectively reducing pressure.",
    source: "Pedorthic Care Research"
  },
  {
    text: "People with diabetic gait often spend more time in the stance phase of walking.",
    source: "Gait Analysis Research"
  },
  {
    text: "Remote monitoring technologies can help identify problems between clinic visits.",
    source: "Digital Health"
  },
  {
    text: "Not all dangerous pressure points are visible from the outside of the foot.",
    source: "Pressure Mapping Research"
  },
  {
    text: "Pressure mapping transforms invisible biomechanical risks into measurable data.",
    source: "Biomechanics Research"
  },
  {
    text: "Foot pressure monitoring is increasingly used in preventive diabetic care.",
    source: "IWGDF"
  },
  {
    text: "Repetitive loading thousands of times per day can turn a small hotspot into a serious wound.",
    source: "Diabetic Foot Research"
  },
  {
    text: "Orthotic interventions aim to reduce pressure, improve stability, and protect vulnerable tissues.",
    source: "World Journal of Diabetes"
  },
  {
    text: "Sensor-based insoles allow clinicians to assess foot function in real-world conditions.",
    source: "Wearable Technology Research"
  },
  {
    text: "Data-driven foot care can help personalize treatment for each patient.",
    source: "Digital Medicine"
  },
  {
    text: "The goal of gait analysis is not just to measure walking, but to prevent injury and improve mobility.",
    source: "Clinical Biomechanics"
  },
  {
    text: "A diabetic foot ulcer is often the result of pressure, time, and lack of sensation acting together.",
    source: "NIH"
  },
  {
    text: "Foot pressure data can provide early warning signs before symptoms are felt.",
    source: "Sensor Health Research"
  },
  {
    text: "Smart orthotics are transforming foot care from periodic assessment to continuous monitoring.",
    source: "Digital Health Technology"
  }
];

export default function DidYouKnowBanner() {
  const [fact, setFact] = useState(facts[0]);
  const [mounted, setMounted] = useState(false);
  const [dismissed, setDismissed] = useState(false);

  useEffect(() => {
    const randomIndex = Math.floor(Math.random() * facts.length);
    setFact(facts[randomIndex]);
    setMounted(true);
  }, []);

  if (!mounted) {
    return <div className="w-full h-10" style={{ background: "#eef7f1" }} />;
  }

  if (dismissed) return null;

  return (
    <div
      className="relative w-full flex items-center justify-center px-4 py-2.5"
      style={{
        background: "linear-gradient(to right, #e3f3e8, #eef7f1 50%, #e3f3e8)",
        boxShadow: "0 2px 6px -2px rgba(2, 44, 34, 0.08)",
      }}
    >
      <div className="flex items-center flex-wrap justify-center gap-x-3 gap-y-1 text-center max-w-[1100px] pr-8">
        {/* Lightbulb Icon + Label */}
        <div className="flex items-center gap-1.5 shrink-0">
          <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" style={{ color: "var(--primary)" }}>
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
          </svg>
          <span
            className="text-[10px] font-bold tracking-[0.2em] uppercase"
            style={{ color: "var(--primary)" }}
          >
            Did you know
          </span>
        </div>

        {/* Fact Text */}
        <p className="text-[12px] sm:text-[13px]" style={{ color: "var(--on-surface-variant)" }}>
          {fact.text} <span style={{ opacity: 0.5 }}>— {fact.source}</span>
        </p>
      </div>

      {/* Dismiss button */}
      <button
        onClick={() => setDismissed(true)}
        aria-label="Dismiss"
        className="absolute right-3 sm:right-5 top-1/2 -translate-y-1/2 w-6 h-6 rounded-full flex items-center justify-center transition-colors cursor-pointer shrink-0"
        style={{ color: "var(--on-surface-variant)" }}
        onMouseEnter={(e) => {
          (e.currentTarget as HTMLElement).style.background = "color-mix(in oklab, var(--primary) 10%, transparent)";
        }}
        onMouseLeave={(e) => {
          (e.currentTarget as HTMLElement).style.background = "transparent";
        }}
      >
        <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>
    </div>
  );
}