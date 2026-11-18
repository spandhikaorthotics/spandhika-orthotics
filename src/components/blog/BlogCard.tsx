import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { BlogPost } from "@/lib/blog";

/** Article card used on the blog index and in "Keep reading". */
export default function BlogCard({ post, featured = false }: { post: BlogPost; featured?: boolean }) {
  return (
    <Link
      href={`/blog/${post.slug}`}
      className={`group flex w-full flex-col overflow-hidden rounded-2xl bg-white ring-1 ring-border/70 transition-shadow hover:shadow-[0_20px_40px_-24px_color-mix(in_oklab,var(--primary)_45%,transparent)] ${
        featured ? "lg:flex-row" : ""
      }`}
    >
      <span className={`relative block aspect-[16/10] w-full shrink-0 overflow-hidden bg-muted ${featured ? "lg:aspect-auto lg:w-[56%]" : ""}`}>
        <Image
          src={post.image}
          alt=""
          fill
          loading="eager"
          sizes={featured ? "(min-width: 1024px) 600px, 100vw" : "(min-width: 1024px) 360px, (min-width: 768px) 50vw, 100vw"}
          className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
        />
      </span>
      <span className={`flex flex-1 flex-col p-6 ${featured ? "sm:p-8 lg:justify-center lg:p-10" : ""}`}>
        <span className="flex items-center gap-2 text-[13px] text-muted-foreground">
          <span className="lv-label">{post.category}</span>
          <span aria-hidden="true">·</span>
          {post.readTime}
        </span>
        <span
          className={`mt-3 block font-semibold leading-snug text-primary ${
            featured ? "text-2xl sm:text-[28px] sm:leading-tight" : "text-lg"
          }`}
        >
          {post.title}
        </span>
        <span className={`mt-3 block text-[15px] leading-relaxed text-muted-foreground ${featured ? "" : "line-clamp-3"}`}>
          {post.excerpt}
        </span>
        <span className="mt-auto inline-flex items-center gap-1.5 pt-6 text-sm font-semibold text-primary">
          Read article
          <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
        </span>
      </span>
    </Link>
  );
}
