import Image from "next/image";
import { montserrat } from "@/lib/fonts";

type Supporter = {
  name: string;
  initials: string;
  /** Path in /public, e.g. "/partners/tides-iitr.png". Leave undefined to show the placeholder. */
  logo?: string;
};

const supporters: Supporter[] = [
  { name: "Uttishthati Foundation", initials: "UF", logo: "/partners/uttishthati.png" },
  { name: "TIDES, IIT Roorkee", initials: "TIDES", logo: "/partners/tides-iitr.webp" },
  { name: "STPI Mohali", initials: "STPI", logo: "/partners/stpi.jpg" },
  { name: "NSRCEL, IIM Bangalore", initials: "NSRCEL", logo: "/partners/nsrcel.jpg" },
  { name: "NCPEDP", initials: "NCPEDP", logo: "/partners/ncpedp.jpg" },
];

function LogoPlaceholder({ initials }: { initials: string }) {
  return (
    <div
      aria-hidden="true"
      className="grid h-14 w-[120px] place-items-center rounded-lg border border-dashed border-outline-variant bg-surface-container-low text-[11px] font-semibold tracking-[0.14em] text-on-surface-variant"
    >
      {initials}
    </div>
  );
}

export default function SupportedBy() {
  return (
    <section
      id="supported-by"
      aria-label="Supported by"
      className={`${montserrat.className} border-b border-border bg-background py-8 lg:py-10`}
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <p className="text-center text-[11px] font-semibold uppercase tracking-[0.2em] text-muted-foreground">
          Supported by
        </p>

        <ul className="mt-5 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
          {supporters.map((s) => (
            <li
              key={s.name}
              className="flex flex-col items-center justify-center gap-3 px-2 py-3 text-center"
            >
              {s.logo ? (
                <Image
                  src={s.logo}
                  alt={`${s.name} logo`}
                  width={140}
                  height={56}
                  className="h-14 w-auto max-w-[140px] object-contain mix-blend-multiply"
                />
              ) : (
                <LogoPlaceholder initials={s.initials} />
              )}
              <span className="text-xs font-medium leading-snug text-muted-foreground">
                {s.name}
              </span>
            </li>
          ))}
        </ul>

        <blockquote className="mx-auto mt-6 max-w-3xl border-t border-border pt-6 text-center">
          <p className="text-[17px] font-medium leading-relaxed text-primary">
            &ldquo;There is a need for an affordable, accessible alternative to
            expensive foreign smart insoles.&rdquo;
          </p>
          <cite className="mt-3 block text-sm not-italic text-muted-foreground">
            Dr. Monica Chhabra &middot; Superintendent Physiotherapist, PGIMER
            Chandigarh
          </cite>
        </blockquote>
      </div>
    </section>
  );
}
