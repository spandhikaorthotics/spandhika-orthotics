import { CtaBand, SiteShell } from "@/components/site/SiteChrome";
import BlogIndex from "@/components/blog/BlogIndex";

export default function BlogListing() {
  return (
    <SiteShell>
      <section className="border-b border-border">
        <div className="mx-auto max-w-6xl px-6 pb-12 pt-14 lg:px-10 lg:pb-16 lg:pt-20">
          <p className="lv-label">Insights &amp; research</p>
          <h1 className="mt-4 text-[38px] font-semibold leading-[1.08] tracking-tight text-primary sm:text-5xl lg:text-[56px]">
            The Spandhika Journal
          </h1>
          <p className="lv-copy mt-5 max-w-2xl">
            Explore our latest clinical insights, performance tips, and scientific deep dives into the world of
            biomechanics and foot health.
          </p>
        </div>
      </section>

      <BlogIndex />

      <div className="pt-4">
        <CtaBand />
      </div>
    </SiteShell>
  );
}
