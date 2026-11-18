import type { CSSProperties } from "react";
import { Quote } from "lucide-react";
import { montserrat } from "@/lib/fonts";

type Testimonial = { name: string; role: string; linkedin: string; quote: string };

const testimonials: Testimonial[] = [
  {
    name: "Dr. Vijay G. Goni",
    role: "HoD, Orthopaedics, PGIMER Chandigarh",
    linkedin: "https://www.linkedin.com/in/dr-vijay-g-goni-1b73b427",
    quote:
      "Continuous tracking of peak plantar pressure, offloading-device usage, gait speed, and step symmetry could help identify changes from a patient's personal baseline and enable earlier intervention.",
  },
  {
    name: "Dr. R. B. Kalia",
    role: "MS Orthopaedics, AIIMS Rishikesh",
    linkedin: "https://www.linkedin.com/in/roop-kalia-49062956",
    quote:
      "Diabetic neuropathy can reduce foot sensation, making patients unaware of abnormal pressure. Early pressure monitoring could enable customized offloading and help prevent ulcers and their recurrence.",
  },
  {
    name: "Dr. Ankit Dadra",
    role: "MS Orthopaedics, PGIMER Chandigarh",
    linkedin: "https://www.linkedin.com/in/ankit-dadra-95811316",
    quote:
      "Many diabetic foot patients present only after wounds become severe. Early detection of abnormal pressure through smart insoles could enable intervention before ulcer formation. Gait monitoring could also help identify deterioration and fall-risk indicators in elderly patients.",
  },
  {
    name: "Dr. Manisha Chatterjee",
    role: "MD, Endocrinologist & Diabetologist",
    linkedin: "https://www.linkedin.com/in/dr-manisha-chatterjee-satapathi-a27b41141",
    quote:
      "Continuous monitoring could help identify early warning signs such as pressure-related changes, swelling, redness, and skin abnormalities, supporting preventive care before ulcers develop.",
  },
  {
    name: "Dr. Monica Chhabra",
    role: "Superintendent Physiotherapist, PGIMER Chandigarh",
    linkedin: "https://www.linkedin.com/in/drmonicachhabra",
    quote:
      "There is a need for an affordable, accessible alternative to expensive foreign smart insoles. Such technology could provide objective gait and movement data for everyday physiotherapy practice.",
  },
  {
    name: "Dr. Kanan Doshi",
    role: "Master's in Occupational Therapy",
    linkedin: "https://www.linkedin.com/in/dr-kanan-doshi",
    quote:
      "Smart insoles could support multiple patient groups, from athletes to diabetic patients, by continuously tracking posture, movement, and changes that may not be easily observed clinically.",
  },
  {
    name: "Dr. Manish Gupta",
    role: "Scientist-III, Orthopaedics, AIIMS Delhi",
    linkedin: "https://www.linkedin.com/in/manish-gupta-7666a059",
    quote:
      "Portable gait monitoring could extend gait assessment beyond specialized gait laboratories, including remote and underserved settings. It could also support the development of Indian normative gait datasets.",
  },
  {
    name: "Dr. Anant",
    role: "Physiotherapist",
    linkedin: "https://www.linkedin.com/in/physioanant",
    quote:
      "Continuous monitoring of seniors' everyday movement could help identify changes in gait and movement patterns early, supporting timely intervention and potentially reducing fall risk.",
  },
  {
    name: "Mr. Ajay Chavan",
    role: "High-Performance Analyst, Biomechanics",
    linkedin: "https://www.linkedin.com/in/ajwazza",
    quote:
      "Real-time monitoring can help athletes continuously assess movement, posture, and technique, enabling data-driven performance improvement. An indigenously developed smart insole could add value to India's sports ecosystem.",
  },
  {
    name: "Dr. Shivank",
    role: "Physiotherapist",
    linkedin: "https://www.linkedin.com/in/shivank-khare-thefounding-doc-1597b7169",
    quote:
      "With growing diabetic and elderly populations, continuous monitoring can help patients track key parameters between clinical visits, reducing dependence on occasional assessments and supporting timely intervention.",
  },
  {
    name: "Dr. Salaj Rana",
    role: "",
    linkedin: "https://www.linkedin.com/in/dr-salaj-rana-666674a3",
    quote:
      "Patient-specific data can enable more customized assistive devices and interventions, supporting prevention and improving overall quality of life.",
  },
  {
    name: "Dr. Shivank",
    role: "Additional Insight",
    linkedin: "https://www.linkedin.com/in/shivank-khare-thefounding-doc-1597b7169",
    quote:
      "There is currently no standardized pressure threshold applicable to every patient because factors such as height, weight, and body structure vary. Building a dataset of 200–300 patients could help identify consistent metrics that are more closely associated with patient outcomes, while comfort remains an important measure of effectiveness.",
  },
];

const rowA = testimonials.slice(0, 6);
const rowB = testimonials.slice(6);

function initials(name: string) {
  return name
    .replace(/^(Dr\.|Mr\.)\s*/, "")
    .trim()
    .split(/\s+/)
    .map((w) => w[0])
    .slice(0, 2)
    .join("");
}

function LinkedInIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.03-3.04-1.85-3.04-1.86 0-2.14 1.45-2.14 2.95v5.66H9.35V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28ZM5.34 7.43a2.06 2.06 0 1 1 0-4.13 2.06 2.06 0 0 1 0 4.13ZM7.12 20.45H3.56V9h3.56v11.45ZM22.22 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.73V1.73C24 .77 23.2 0 22.22 0Z" />
    </svg>
  );
}

function Card({ t, hidden }: { t: Testimonial; hidden?: boolean }) {
  return (
    <article className="flex w-[300px] shrink-0 flex-col rounded-2xl bg-background p-6 ring-1 ring-border/60 transition-shadow duration-300 hover:shadow-lg sm:w-[380px]">
      <Quote className="h-7 w-7 text-primary/25" aria-hidden="true" />
      <p className="mt-4 flex-1 text-[15px] leading-relaxed text-foreground">
        &ldquo;{t.quote}&rdquo;
      </p>
      <div className="mt-6 flex items-center gap-3 border-t border-border/60 pt-5">
        <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-primary text-sm font-semibold text-primary-foreground">
          {initials(t.name)}
        </span>
        <span className="min-w-0 flex-1">
          <span className="block truncate text-sm font-semibold text-primary">{t.name}</span>
          {t.role && (
            <span className="mt-0.5 block text-xs leading-snug text-muted-foreground">{t.role}</span>
          )}
        </span>
        <a
          href={t.linkedin}
          target="_blank"
          rel="noreferrer"
          tabIndex={hidden ? -1 : undefined}
          aria-label={`${t.name} on LinkedIn`}
          className="grid h-10 w-10 shrink-0 place-items-center rounded-full text-primary ring-1 ring-border/60 transition-colors hover:bg-primary hover:text-primary-foreground"
        >
          <LinkedInIcon className="h-[18px] w-[18px]" />
        </a>
      </div>
    </article>
  );
}

/**
 * One infinitely scrolling row. The list is rendered twice and the track is
 * translated by -50%, so the loop is seamless. The copy is hidden from
 * assistive tech and from the keyboard.
 */
function MarqueeRow({
  items,
  reverse = false,
  duration,
}: {
  items: Testimonial[];
  reverse?: boolean;
  duration: string;
}) {
  return (
    <div className="tm-marquee">
      <div
        className="tm-marquee-track"
        data-reverse={reverse || undefined}
        style={{ "--tm-dur": duration } as CSSProperties}
      >
        <ul className="tm-marquee-group">
          {items.map((t, i) => (
            <li key={`${t.name}-${i}`} className="flex">
              <Card t={t} />
            </li>
          ))}
        </ul>
        <ul className="tm-marquee-group tm-marquee-copy" aria-hidden="true">
          {items.map((t, i) => (
            <li key={`${t.name}-${i}-copy`} className="flex">
              <Card t={t} hidden />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default function Testimonials() {
  return (
    <section
      id="testimonials"
      aria-label="Clinician testimonials"
      className={`${montserrat.className} lv-theme scroll-mt-24 py-16 lg:py-20`}
      style={{ backgroundColor: "var(--secondary)" }}
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <p className="lv-label">From the clinic</p>
        <h2 className="lv-title mt-3">What clinicians are saying</h2>
        <p className="lv-copy mt-4 max-w-3xl">
          Real responses from clinicians who see the value of continuous, everyday gait data.
        </p>
      </div>

      <div className="mt-10 flex flex-col gap-5">
        <MarqueeRow items={rowA} duration="70s" />
        <MarqueeRow items={rowB} duration="80s" reverse />
      </div>
    </section>
  );
}
