"use client";

import { useState } from "react";
import BlogCard from "@/components/blog/BlogCard";
import { listedPosts } from "@/lib/blog";

const categories = ["All", ...Array.from(new Set(listedPosts.map((p) => p.category)))];

export default function BlogIndex() {
  const [active, setActive] = useState("All");
  const posts = active === "All" ? listedPosts : listedPosts.filter((p) => p.category === active);
  // Feature the first article only on the unfiltered view.
  const featured = active === "All" ? posts[0] : undefined;
  const rest = featured ? posts.slice(1) : posts;

  return (
    <div className="mx-auto max-w-6xl px-6 py-12 lg:px-10 lg:py-16">
      <div role="group" aria-label="Filter by category" className="flex flex-wrap gap-2">
        {categories.map((c) => (
          <button
            key={c}
            type="button"
            onClick={() => setActive(c)}
            aria-pressed={active === c}
            className={`rounded-full px-4 py-2 text-[13px] font-semibold transition-colors ${
              active === c
                ? "bg-primary text-primary-foreground"
                : "bg-white text-muted-foreground ring-1 ring-border hover:text-primary hover:ring-primary"
            }`}
          >
            {c}
          </button>
        ))}
      </div>

      {featured && (
        <div className="mt-10">
          <BlogCard post={featured} featured />
        </div>
      )}

      {rest.length > 0 && (
        <ul className="mt-6 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {rest.map((p) => (
            <li key={p.slug} className="flex">
              <BlogCard post={p} />
            </li>
          ))}
        </ul>
      )}

      {posts.length === 0 && (
        <p className="mt-16 text-center text-muted-foreground">No articles in this category yet.</p>
      )}
    </div>
  );
}
