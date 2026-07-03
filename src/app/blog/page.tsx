"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function BlogListing() {
  // State for the active category filter
  const [activeCategory, setActiveCategory] = useState("All");

  const categories = ["All", "Performance", "Clinical Care", "Elderly Care"];

  // Current live articles
  const articles = [
    {
      id: 1,
      category: "Performance",
      readTime: "6 min read",
      title: "Beyond the Foam: How Pressure Mapping Helps Athletes Recover Faster",
      excerpt: "Athletes need more than just cushioning. Discover how dynamic pressure mapping and load distribution actively prevent repetitive strain injuries and speed up recovery.",
      image: "/1.png",
      link: "/blog/beyond-the-foam"
    },
    {
      id: 2,
      category: "Clinical Care",
      readTime: "5 min read",
      title: "Why Diabetic Foot Ulcers Don't Start Overnight: The Importance of Continuous Foot Monitoring",
      excerpt: "A diabetic foot ulcer isn't a sudden crisis—it's the result of an 89-day blind spot between clinic visits. Discover why continuous pressure monitoring matters.",
      image: "/2_.png",
      link: "/blog/diabetic-foot-ulcers"
    },
    {
      id: 3,
      category: "Elderly Care",
      readTime: "6 min read",
      title: "Preventing Falls in Seniors: How Gait Tracking Detects Risks Before They Happen",
      excerpt: "A fall is rarely just a sudden accident. It is often the predictable outcome of weeks of invisible gait deterioration that standard checkups miss.",
      image: "/3_1.png",
      link: "/blog/fall-predict"
    },
    {
      id: 4,
      category: "Clinical Care",
      readTime: "5 min read",
      title: "Plantar Fasciitis Relief: Why Standard Insoles Often Fall Short?",
      excerpt: "Learn why standard insoles often fall short for plantar fasciitis and how personalized, dynamic pressure mapping can correct the root cause of heel pain.",
      image: "/4.png",
      link: "/blog/plantar-fasciitis"
    }
  ];

  // Filter logic
  const filteredArticles = activeCategory === "All" 
    ? articles 
    : articles.filter(article => article.category === activeCategory);

  return (
    <main className="relative min-h-screen bg-[#FAFAF7] pb-24 pt-24 selection:bg-[#3D6B5C]/20">
      
      {/* Back to Homepage Button */}
      <nav className="fixed top-8 left-6 sm:left-8 z-20">
              <Link
                href="/#blogs"
                aria-label="Back to homepage"
                className="group inline-flex items-center gap-2.5 rounded-full bg-[#FAFAF7]/90 px-4 py-2 text-[13px] font-semibold tracking-wide text-[#1C2B27] backdrop-blur-sm transition-colors hover:text-[#3D6B5C] border border-[#1C2B27]/10 shadow-sm"
              >
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="transition-transform group-hover:-translate-x-1"
                  aria-hidden="true"
                >
                  <path
                    d="M10.6667 3.33331L5.33337 7.99998L10.6667 12.6666"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                Back to homepage
              </Link>
            </nav>

      <div className="mx-auto max-w-[1200px] px-6">
        
        {/* Header Section */}
        <header className="mb-16 mt-8 md:mt-12 md:text-center">
          <div className="mb-6 flex items-center gap-3 md:justify-center">
            <div className="h-[1px] w-6 bg-[#3D6B5C] md:hidden"></div>
            <span className="text-xs font-semibold uppercase tracking-[0.15em] text-[#3D6B5C]">
              Insights & Research
            </span>
            <div className="hidden h-[1px] w-6 bg-[#3D6B5C] md:block"></div>
          </div>
          
          <h1 className="mb-6 text-4xl font-bold leading-tight tracking-tight text-[#1C2B27] sm:text-5xl md:text-[56px]">
            The Spandhika Journal
          </h1>
          <p className="mx-auto max-w-[600px] text-lg text-[#1C2B27]/60">
            Explore our latest clinical insights, performance tips, and scientific deep dives into the world of biomechanics and foot health.
          </p>
        </header>

        {/* Category Filters */}
        <div className="mb-12 flex flex-wrap items-center justify-start gap-3 md:justify-center">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`rounded-full px-5 py-2.5 text-[13px] font-bold tracking-wide transition-all duration-300 ${
                activeCategory === category
                  ? "bg-[#1C2B27] text-white shadow-md"
                  : "bg-white text-[#1C2B27]/70 shadow-sm ring-1 ring-black/[0.04] hover:bg-gray-50 hover:text-[#1C2B27]"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Articles Grid */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {filteredArticles.map((article) => (
            <article 
              key={article.id} 
              className="group flex flex-col overflow-hidden rounded-[20px] bg-white shadow-[0_4px_20px_rgb(0,0,0,0.03)] ring-1 ring-black/[0.03] transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_12px_30px_rgb(0,0,0,0.08)]"
            >
              {/* Image Container */}
              <Link href={article.link} className="relative block aspect-[16/10] w-full overflow-hidden bg-gray-100">
                <Image 
                  src={article.image} 
                  alt={article.title} 
                  fill 
                  className="object-cover transition-transform duration-700 group-hover:scale-105" 
                />
                
                {/* Floating Category Pill */}
                <div className="absolute left-4 top-4 rounded-full bg-white/95 px-3 py-1.5 text-[11px] font-bold uppercase tracking-wider text-[#1C2B27] shadow-sm backdrop-blur-sm">
                  {article.category}
                </div>
              </Link>

              {/* Content Container */}
              <div className="flex flex-1 flex-col p-6 sm:p-8">
                <div className="mb-4 flex items-center text-[13px] font-medium text-[#1C2B27]/50">
                  <span>{article.readTime}</span>
                </div>

                <Link href={article.link} className="block">
                  <h3 className="mb-3 text-[19px] font-bold leading-snug text-[#1C2B27] transition-colors duration-300 group-hover:text-[#3D6B5C]">
                    {article.title}
                  </h3>
                </Link>

                <p className="mb-6 line-clamp-3 text-[14px] leading-relaxed text-[#1C2B27]/60">
                  {article.excerpt}
                </p>

                {/* Bottom link anchored to bottom using mt-auto */}
                <div className="mt-auto border-t border-gray-100 pt-5">
                  <Link 
                    href={article.link} 
                    className="inline-flex items-center gap-2 text-[14px] font-bold text-[#1C2B27] transition-colors duration-300 group-hover:text-[#C76B3F]"
                  >
                    Read article
                    <svg className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Empty State */}
        {filteredArticles.length === 0 && (
          <div className="py-20 text-center">
            <h3 className="text-xl font-bold text-[#1C2B27]">No articles found.</h3>
            <p className="mt-2 text-[#1C2B27]/60">Check back later for more insights in this category.</p>
          </div>
        )}

      </div>
    </main>
  );
}