import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Info, type LucideIcon } from "lucide-react";
import { CtaBand, SiteShell } from "@/components/site/SiteChrome";

export type AudienceKey = "for-you" | "for-families" | "for-clinicians";

type Benefit = { icon: LucideIcon; title: string; text: string };
type Group = {
  title: string;
  text: string;
  image: string;
  alt: string;
  /** CSS object-position for the photo crop, e.g. "center 15%". */
  position?: string;
};

export type AudiencePageProps = {
  current: AudienceKey;
  eyebrow: string;
  title: string;
  tagline: string;
  intro: string;
  heroImage: string;
  heroAlt: string;
  heroPosition?: string;
  benefitsTitle: string;
  benefits: Benefit[];
  groups?: Group[];
  disclaimer: string;
};

const audienceCards: Record<AudienceKey, { title: string; text: string; image: string; position: string }> = {
  "for-you": {
    title: "For you",
    text: "Understand your own steps, pressure and balance.",
    image: "/audience/for-you.jpg",
    position: "center 30%",
  },
  "for-families": {
    title: "For families",
    text: "A clearer picture of a loved one's walking.",
    image: "/audience/for-families.jpg",
    position: "62% center",
  },
  "for-clinicians": {
    title: "For clinicians",
    text: "Everyday walking insights to support your assessment.",
    image: "/audience/for-clinicians.jpg",
    position: "42% center",
  },
};

export default function AudiencePage({
  current,
  eyebrow,
  title,
  tagline,
  intro,
  heroImage,
  heroAlt,
  heroPosition = "center",
  benefitsTitle,
  benefits,
  groups,
  disclaimer,
}: AudiencePageProps) {
  const others = (Object.keys(audienceCards) as AudienceKey[]).filter((k) => k !== current);

  return (
    <SiteShell>
        {/* ── Hero ── */}
        <section className="mx-auto grid max-w-6xl items-center gap-10 px-6 pb-16 pt-12 lg:grid-cols-[1.05fr_1fr] lg:gap-16 lg:px-10 lg:pb-24 lg:pt-20">
          <div>
            <p className="lv-label">{eyebrow}</p>
            <h1 className="mt-4 text-[38px] font-semibold leading-[1.08] tracking-tight text-primary sm:text-5xl lg:text-[56px]">
              {title}
            </h1>
            <p className="mt-5 text-xl font-medium leading-snug text-primary sm:text-2xl">{tagline}</p>
            <p className="lv-copy mt-5 max-w-xl">{intro}</p>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <Link
                href="/#waitlist"
                className="group inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-[15px] font-semibold text-primary-foreground shadow-[0_12px_24px_-12px_color-mix(in_oklab,var(--primary)_70%,transparent)] transition-all hover:-translate-y-0.5"
              >
                Get launch updates
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" aria-hidden="true" />
              </Link>
              <Link
                href="/#how"
                className="inline-flex items-center gap-2 rounded-full border border-border bg-white px-6 py-3 text-[15px] font-medium text-primary transition-colors hover:border-primary"
              >
                See how it works
              </Link>
            </div>
          </div>

          <div className="relative aspect-[4/3] overflow-hidden rounded-[2rem] bg-muted shadow-[0_30px_60px_-30px_color-mix(in_oklab,var(--primary)_45%,transparent)] lg:aspect-[5/6]">
            <Image
              src={heroImage}
              alt={heroAlt}
              fill
              priority
              sizes="(min-width: 1024px) 540px, 100vw"
              className="object-cover"
              style={{ objectPosition: heroPosition }}
            />
          </div>
        </section>

        {/* ── Benefits ── */}
        <section className="bg-secondary py-16 lg:py-24">
          <div className="mx-auto max-w-6xl px-6 lg:px-10">
            <h2 className="lv-title max-w-2xl">{benefitsTitle}</h2>
            <ul className="mt-10 grid gap-5 md:grid-cols-3">
              {benefits.map(({ icon: Icon, title: bTitle, text }) => (
                <li key={bTitle} className="rounded-2xl bg-white p-7 ring-1 ring-border/70">
                  <span className="grid h-12 w-12 place-items-center rounded-xl bg-[var(--primary-soft)] text-primary">
                    <Icon className="h-6 w-6" aria-hidden="true" />
                  </span>
                  <h3 className="mt-6 text-xl font-semibold text-primary">{bTitle}</h3>
                  <p className="mt-2.5 text-[15.5px] leading-relaxed text-muted-foreground">{text}</p>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* ── Groups (optional) ── */}
        {groups && groups.length > 0 && (
          <section className="py-16 lg:py-24">
            <div className="mx-auto max-w-6xl px-6 lg:px-10">
              <p className="lv-label">Who it&apos;s for</p>
              <h2 className="lv-title mt-3">Made for the way you live.</h2>
              <ul className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-6">
                {groups.map((g, i) => {
                  // Five cards: three on the first row, two wider ones on the second.
                  const wide = groups.length === 5 && i >= 3;
                  return (
                  <li key={g.title} className={`overflow-hidden rounded-2xl bg-white ring-1 ring-border/70 ${wide ? "lg:col-span-3 lg:flex lg:items-center" : "lg:col-span-2"}`}>
                    <div className={`relative aspect-[4/3] bg-muted ${wide ? "lg:aspect-square lg:w-[46%] lg:shrink-0" : ""}`}>
                      <Image
                        src={g.image}
                        alt={g.alt}
                        fill
                        sizes="(min-width: 1024px) 360px, (min-width: 640px) 50vw, 100vw"
                        className="object-cover"
                        style={{ objectPosition: g.position ?? "center" }}
                      />
                    </div>
                    <div className={wide ? "p-6 lg:p-8" : "p-6"}>
                      <h3 className="text-lg font-semibold text-primary">{g.title}</h3>
                      <p className="mt-2 text-[15px] leading-relaxed text-muted-foreground">{g.text}</p>
                    </div>
                  </li>
                  );
                })}
              </ul>
            </div>
          </section>
        )}

        {/* ── Disclaimer ── */}
        <section className={groups?.length ? "pb-16 lg:pb-20" : "py-16 lg:py-20"}>
          <div className="mx-auto max-w-6xl px-6 lg:px-10">
            <div className="flex gap-3 rounded-2xl border border-border bg-[color-mix(in_oklab,var(--secondary)_40%,white)] p-5 sm:p-6">
              <Info className="mt-0.5 h-5 w-5 shrink-0 text-primary" aria-hidden="true" />
              <p className="text-sm leading-relaxed text-muted-foreground">{disclaimer}</p>
            </div>
          </div>
        </section>

        {/* ── Explore more ── */}
        <section className="pb-16 lg:pb-24">
          <div className="mx-auto max-w-6xl px-6 lg:px-10">
            <h2 className="text-2xl font-semibold text-primary">Explore more</h2>
            <ul className="mt-6 grid gap-5 sm:grid-cols-2">
              {others.map((key) => {
                const c = audienceCards[key];
                return (
                  <li key={key}>
                    <Link href={`/${key}`} className="group flex items-center gap-5 rounded-2xl bg-white p-4 ring-1 ring-border/70 transition-shadow hover:shadow-lg">
                      <span className="relative h-20 w-24 shrink-0 overflow-hidden rounded-xl bg-muted">
                        <Image src={c.image} alt="" fill sizes="96px" loading="eager" className="object-cover" style={{ objectPosition: c.position }} />
                      </span>
                      <span className="min-w-0 flex-1">
                        <span className="block text-lg font-semibold text-primary">{c.title}</span>
                        <span className="mt-1 block text-sm leading-snug text-muted-foreground">{c.text}</span>
                      </span>
                      <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-primary text-primary-foreground transition-transform group-hover:translate-x-1">
                        <ArrowRight className="h-4 w-4" aria-hidden="true" />
                      </span>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        </section>

        <CtaBand />
    </SiteShell>
  );
}
