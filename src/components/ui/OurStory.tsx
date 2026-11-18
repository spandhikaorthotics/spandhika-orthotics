import Image from "next/image";
import type { CSSProperties } from "react";
import { Quote } from "lucide-react";
import { montserrat } from "@/lib/fonts";

type Founder = {
  name: string;
  role: string;
  image: string;
  /** Per-photo framing so both faces sit at the same height and size. */
  imageStyle: CSSProperties;
};

const founders: Founder[] = [
  {
    name: "Abhishek Goyal",
    role: "Co-founder",
    image: "/founders/abhishek.jpg",
    imageStyle: { objectPosition: "50% 0%", transform: "scale(1.25)", transformOrigin: "50% 23%" },
  },
  {
    name: "Krishna Gambhir",
    role: "Co-founder",
    image: "/founders/krishna.jpg",
    imageStyle: { objectPosition: "50% 76%" },
  },
];

const milestones = [
  { when: "2024", what: "Smart India Hackathon problem discovered" },
  { when: "Feb 2025", what: "Spandhika Orthotics incorporated" },
  { when: "Granted", what: "Indian patent for smart insole technology" },
  { when: "Today", what: "Incubated at TIDES, IIT Roorkee" },
];

export default function OurStory() {
  return (
    <section id="story" className={`${montserrat.className} lv-theme scroll-mt-24 py-20 lg:py-28`}>
      <div className="mx-auto max-w-6xl px-6 lg:px-10">
        {/* Header */}
        <div className="text-center">
          <p className="lv-label">Our story</p>
          <h2 className="lv-title mt-3">
            Every step tells a story.
          </h2>
        </div>

        {/* Origin + founders */}
        <div className="mt-14 grid items-center gap-12 lg:mt-16 lg:grid-cols-2 lg:gap-16">
          <div>
            <Quote className="h-8 w-8 text-[color-mix(in_oklab,var(--primary)_25%,transparent)]" aria-hidden="true" />
            <blockquote className="mt-4 text-[22px] font-semibold leading-snug tracking-tight text-primary sm:text-2xl">
              What if we could understand what is happening inside someone&apos;s shoe, every time they take a step?
            </blockquote>
            <p className="lv-copy mt-5 max-w-lg">
              That question led two engineering students, Abhishek Goyal and Krishna Gambhir, from a Smart India
              Hackathon problem to the first SAARTHI prototype.
            </p>
          </div>

          <ul className="mx-auto grid w-full max-w-md grid-cols-2 gap-5 sm:gap-6">
            {founders.map((f) => (
              <li key={f.name}>
                <figure>
                  <div className="relative aspect-square overflow-hidden rounded-2xl bg-muted ring-1 ring-border">
                    <Image
                      src={f.image}
                      alt={`${f.name}, ${f.role}`}
                      fill
                      sizes="(min-width: 1024px) 220px, 45vw"
                      loading="eager"
                      className="object-cover"
                      style={f.imageStyle}
                    />
                  </div>
                  <figcaption className="mt-4 text-center">
                    <span className="block text-[15px] font-semibold text-primary">{f.name}</span>
                    <span className="mt-0.5 block text-sm text-muted-foreground">{f.role}</span>
                  </figcaption>
                </figure>
              </li>
            ))}
          </ul>
        </div>

        {/* Timeline */}
        <ol className="relative mt-20 grid grid-cols-2 gap-x-6 gap-y-10 md:grid-cols-4 md:gap-x-4 lg:mt-24">
          <span
            aria-hidden="true"
            className="absolute left-[12.5%] right-[12.5%] top-[7px] hidden h-px bg-border md:block"
          />
          {milestones.map((m) => (
            <li key={m.when} className="relative text-center">
              <span className="mx-auto block h-3.5 w-3.5 rounded-full bg-primary ring-4 ring-[var(--background)]" aria-hidden="true" />
              <p className="mt-5 text-[13px] font-semibold uppercase tracking-[0.14em] text-primary">{m.when}</p>
              <p className="mx-auto mt-2 max-w-[15rem] text-[15px] leading-snug text-muted-foreground">{m.what}</p>
            </li>
          ))}
        </ol>

        {/* Closing line */}
        <div className="mx-auto mt-20 max-w-3xl text-center lg:mt-24">
          <p className="text-lg font-medium leading-relaxed text-primary sm:text-xl">
            Today, SAARTHI listens to every step — using plantar-pressure and movement data to catch changes early, so
            comfort and mobility don&apos;t have to wait for pain to arrive.
          </p>
          <p className="mt-3 text-sm text-muted-foreground">Every step tells a story. Let&apos;s listen.</p>
        </div>

        {/* Mission & vision */}
        <div className="mt-14 grid gap-5 md:grid-cols-2">
          <div className="rounded-2xl bg-secondary p-7 sm:p-9">
            <p className="lv-label">Our mission</p>
            <p className="mt-4 text-lg font-medium leading-relaxed text-primary sm:text-xl">
              Make simple foot analysis something anybody can do for themselves, by themselves — and give doctors
              continuous, actionable data to act on their patients sooner.
            </p>
          </div>
          <div className="rounded-2xl bg-secondary p-7 sm:p-9">
            <p className="lv-label">Our vision</p>
            <p className="mt-4 text-lg font-medium leading-relaxed text-primary sm:text-xl">
              Help people fight foot pain through self-help foot monitoring — &ldquo;like a Fitbit, for your
              feet.&rdquo;
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
