import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";
import { ArrowLeft } from "lucide-react";
import { CtaBand, SiteShell } from "@/components/site/SiteChrome";
import BlogCard from "@/components/blog/BlogCard";
import { formatPostDate, getPost, listedPosts } from "@/lib/blog";

/** Shared layout for every blog article: header, hero image, body, related posts. */
export default function BlogArticle({
  slug,
  jsonLd,
  children,
}: {
  slug: string;
  jsonLd?: object;
  children: ReactNode;
}) {
  const post = getPost(slug);
  const related = listedPosts.filter((p) => p.slug !== slug).slice(0, 3);

  return (
    <SiteShell backHref="/blog" backLabel="All articles" backShort="Blog">
      {jsonLd && (
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      )}

      {/* ── Header ── */}
      <header className="mx-auto max-w-[760px] px-6 pt-12 text-center sm:pt-16">
        <p className="flex flex-wrap items-center justify-center gap-x-2.5 gap-y-1 text-[13px] font-medium text-muted-foreground">
          <span className="lv-label">{post.category}</span>
          <span aria-hidden="true">·</span>
          <span>{post.readTime}</span>
          <span aria-hidden="true">·</span>
          <time dateTime={post.date}>{formatPostDate(post.date)}</time>
        </p>
        <h1 className="mt-5 text-[32px] font-semibold leading-[1.12] tracking-tight text-primary sm:text-[44px]">
          {post.title}
        </h1>
        {post.dek && <p className="lv-copy mx-auto mt-5 max-w-[620px]">{post.dek}</p>}
      </header>

      {/* ── Hero image ── */}
      <figure className="mx-auto mb-12 mt-10 max-w-[900px] px-6 sm:mb-14">
        <div className="relative aspect-[16/9] w-full overflow-hidden rounded-[1.5rem] bg-muted ring-1 ring-border/70">
          <Image
            src={post.image}
            alt={post.imageAlt}
            fill
            priority
            sizes="(min-width: 960px) 852px, 100vw"
            className="object-cover object-center"
          />
        </div>
      </figure>

      {/* ── Body ── */}
      <div className="article-body mx-auto max-w-[720px] px-6">
        {children}

        <div className="mt-16 flex items-center justify-between border-t border-border pt-8">
          <Link
            href="/blog"
            className="group inline-flex items-center gap-2 text-sm font-semibold text-primary"
          >
            <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" aria-hidden="true" />
            All articles
          </Link>
          <span className="text-xs font-medium text-muted-foreground">Spandhika Orthotics</span>
        </div>
      </div>

      {/* ── Keep reading ── */}
      {related.length > 0 && (
        <section className="mt-20 bg-secondary py-16 lg:py-20">
          <div className="mx-auto max-w-6xl px-6 lg:px-10">
            <h2 className="text-2xl font-semibold text-primary sm:text-[28px]">Keep reading</h2>
            <ul className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {related.map((p) => (
                <li key={p.slug} className="flex">
                  <BlogCard post={p} />
                </li>
              ))}
            </ul>
          </div>
        </section>
      )}

      <div className={related.length > 0 ? "pt-20" : ""}>
        <CtaBand />
      </div>
    </SiteShell>
  );
}
