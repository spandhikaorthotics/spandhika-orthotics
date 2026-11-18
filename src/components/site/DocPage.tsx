import type { ReactNode } from "react";
import { Mail } from "lucide-react";
import { CtaBand, SiteShell } from "@/components/site/SiteChrome";

export type DocItem = { subtitle: string; text: ReactNode };
export type DocSection = {
  id: string;
  title: string;
  content?: DocItem[];
  /** Replaces the default subtitle/text list, e.g. a founders grid. */
  custom?: ReactNode;
};

type DocPageProps = {
  eyebrow: string;
  title: string;
  intro: string;
  /** Small note under the intro, e.g. "Last updated: June 2026". */
  meta?: string;
  sections: DocSection[];
  /** Show the waitlist band before the footer (company pages). */
  cta?: boolean;
};

const EMAIL = "spandhikaorthotics@gmail.com";

function ContactCard() {
  return (
    <div className="rounded-2xl bg-secondary p-5">
      <p className="text-sm font-semibold text-primary">Questions?</p>
      <p className="mt-1 text-[13px] leading-relaxed text-muted-foreground">We&apos;re happy to help. Write to us any time.</p>
      <a
        href={`mailto:${EMAIL}`}
        className="mt-3 inline-flex items-center gap-1.5 break-all text-[13px] font-medium text-primary underline decoration-[color-mix(in_oklab,var(--primary)_30%,transparent)] underline-offset-4 hover:decoration-current"
      >
        <Mail className="h-3.5 w-3.5 shrink-0" aria-hidden="true" />
        {EMAIL}
      </a>
    </div>
  );
}

/** Clean, document-style page used for company and legal pages. */
export default function DocPage({ eyebrow, title, intro, meta, sections, cta = false }: DocPageProps) {
  return (
    <SiteShell>
      {/* ── Hero ── */}
      <section className="border-b border-border">
        <div className="mx-auto max-w-6xl px-6 pb-14 pt-14 lg:px-10 lg:pb-20 lg:pt-20">
          <p className="lv-label">{eyebrow}</p>
          <h1 className="mt-4 text-[38px] font-semibold leading-[1.08] tracking-tight text-primary sm:text-5xl lg:text-[56px]">
            {title}
          </h1>
          <p className="lv-copy mt-5 max-w-2xl">{intro}</p>
          {meta && (
            <p className="mt-6 inline-flex items-center gap-2 rounded-full bg-secondary px-3.5 py-1.5 text-[13px] font-medium text-primary">
              <span className="h-1.5 w-1.5 rounded-full bg-[var(--brand-green)]" aria-hidden="true" />
              {meta}
            </p>
          )}
        </div>
      </section>

      {/* ── Body ── */}
      <div className="mx-auto max-w-6xl px-6 py-14 lg:px-10 lg:py-20">
        <div className="grid gap-12 lg:grid-cols-[220px_minmax(0,1fr)] lg:gap-20">
          {/* Table of contents */}
          <aside className="lg:sticky lg:top-28 lg:self-start">
            <p className="text-xs font-semibold uppercase tracking-[0.12em] text-muted-foreground">On this page</p>
            <nav aria-label="On this page" className="mt-4 flex gap-2 overflow-x-auto pb-1 lg:flex-col lg:gap-0.5 lg:overflow-visible lg:pb-0">
              {sections.map((s, i) => (
                <a
                  key={s.id}
                  href={`#${s.id}`}
                  className="flex shrink-0 items-center gap-3 rounded-full border border-border px-3.5 py-1.5 text-[13px] font-medium text-muted-foreground transition-colors hover:border-primary hover:text-primary lg:rounded-lg lg:border-0 lg:px-3 lg:py-2 lg:hover:bg-secondary"
                >
                  <span className="hidden w-5 text-[11px] font-semibold tabular-nums text-primary/50 lg:inline">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  {s.title}
                </a>
              ))}
            </nav>
            <div className="mt-8 hidden lg:block">
              <ContactCard />
            </div>
          </aside>

          {/* Sections */}
          <div className="max-w-3xl">
            {sections.map((section, i) => (
              <section
                key={section.id}
                id={section.id}
                className={`scroll-mt-28 ${i > 0 ? "mt-12 border-t border-border pt-12" : ""}`}
              >
                <p className="text-[13px] font-semibold tabular-nums text-primary/50">{String(i + 1).padStart(2, "0")}</p>
                <h2 className="mt-1.5 text-2xl font-semibold tracking-tight text-primary sm:text-[28px]">{section.title}</h2>
                {section.custom ?? (
                  <div className="mt-6 space-y-7">
                    {section.content?.map((item) => (
                      <div key={item.subtitle}>
                        <h3 className="text-[17px] font-semibold text-foreground">{item.subtitle}</h3>
                        <p className="mt-2 text-[15.5px] leading-[1.8] text-muted-foreground [&_a]:font-medium [&_a]:text-primary [&_a]:underline [&_a]:underline-offset-4">
                          {item.text}
                        </p>
                      </div>
                    ))}
                  </div>
                )}
              </section>
            ))}

            <div className="mt-14 lg:hidden">
              <ContactCard />
            </div>
          </div>
        </div>
      </div>

      {cta && <CtaBand />}
    </SiteShell>
  );
}
