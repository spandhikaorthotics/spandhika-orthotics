import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { montserrat } from "@/lib/fonts";

const audiences = [
  {
    title: "For you",
    description:
      "Understand your steps — whether you're managing foot health, recovering, or staying active.",
    image: "/audience/for-you.jpg",
    alt: "Elderly woman walking confidently beside her companion on a city street",
    position: "center 30%",
  },
  {
    title: "For families",
    description:
      "A clearer picture of a loved one's walking, for more informed conversations about their care.",
    image: "/audience/for-families.jpg",
    alt: "A man doing a balance exercise with support from a physiotherapist",
    position: "62% center",
  },
  {
    title: "For clinicians",
    description:
      "Explore pressure, balance and gait insights to support your clinical assessment.",
    image: "/audience/for-clinicians.jpg",
    alt: "A clinician examining a patient's shoe in a clinic",
    position: "42% center",
  },
];

export default function WhoItsFor() {
  return (
    <section
      id="who"
      className={`${montserrat.className} scroll-mt-24 bg-[#FAFAF7] pt-20 pb-6 md:pt-28`}
    >
      <div className="mx-auto max-w-[1200px] px-6">
        {/* Header — mirrors the Orthotics range header below */}
        <div className="mb-12 flex flex-col gap-6 md:mb-16 md:flex-row md:items-end md:justify-between">
          <div>
            <div className="mb-5 flex items-center gap-3">
              <span className="h-px w-6 bg-[#3D6B5C]" aria-hidden="true" />
              <span className="text-xs font-semibold uppercase tracking-[0.15em] text-[#3D6B5C]">
                Who it&apos;s for
              </span>
            </div>
            <h2 className="text-3xl font-semibold leading-[1.15] tracking-tight text-[#1C2B27] sm:text-4xl md:text-[42px]">
              Care that fits your life.
            </h2>
          </div>
          <p className="max-w-sm text-[15px] leading-relaxed text-[#1C2B27]/60 sm:text-base">
            For your own foot health, a loved one&apos;s care, or a deeper
            understanding of your patients&apos; walking.
          </p>
        </div>

        {/* Cards — swipe row on mobile, 3-column grid from md */}
        <ul className="-mx-6 flex snap-x snap-mandatory gap-5 overflow-x-auto px-6 pb-2 [scrollbar-width:none] md:mx-0 md:grid md:grid-cols-3 md:gap-6 md:overflow-visible md:px-0 [&::-webkit-scrollbar]:hidden">
          {audiences.map((a, i) => (
            <li key={a.title} className="w-[78%] shrink-0 snap-start sm:w-[55%] md:w-auto">
              <a
                href="#waitlist"
                className="group relative block aspect-[4/5] overflow-hidden rounded-[28px] bg-[#e7ece9] shadow-[0_1px_2px_rgba(16,40,30,0.06)] transition-shadow duration-500 hover:shadow-[0_24px_48px_-24px_rgba(16,40,30,0.45)]"
              >
                <Image
                  src={a.image}
                  alt={a.alt}
                  fill
                  sizes="(min-width: 768px) 384px, 78vw"
                  style={{ objectPosition: a.position }}
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                />

                {/* Legibility gradient */}
                <div
                  className="absolute inset-0 bg-gradient-to-t from-[#0b1f17]/85 via-[#0b1f17]/15 to-transparent"
                  aria-hidden="true"
                />

                {/* Index + arrow */}
                <div className="absolute inset-x-5 top-5 flex items-center justify-between">
                  <span className="rounded-full bg-white/85 px-3 py-1 text-[11px] font-semibold tracking-[0.12em] text-[#1C2B27] backdrop-blur">
                    0{i + 1}
                  </span>
                  <span className="grid h-10 w-10 place-items-center rounded-full bg-white/20 text-white backdrop-blur-md transition-all duration-300 group-hover:rotate-45 group-hover:bg-white group-hover:text-[#1C2B27]">
                    <ArrowUpRight className="h-[18px] w-[18px]" aria-hidden="true" />
                  </span>
                </div>

                {/* Copy */}
                <div className="absolute inset-x-0 bottom-0 p-6 text-white">
                  <h3 className="text-2xl font-semibold tracking-tight">{a.title}</h3>
                  <p className="mt-2 text-[14.5px] leading-relaxed text-white/80">
                    {a.description}
                  </p>
                </div>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
