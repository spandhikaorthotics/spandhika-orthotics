"use client";

import Image from "next/image";

export default function Blogs() {
  const blogs = [
    {
      id: 1,
      category: "Performance",
      readTime: "6 min read",
      title: "Beyond the Foam: How Pressure Mapping Helps Athletes Recover Faster",
      excerpt: "Athletes need more than just cushioning. Discover how dynamic pressure mapping and load distribution actively prevent repetitive strain injuries and speed up recovery.",
      image: "/1.png", // The runner image
      link: "/blog/beyond-the-foam"
    },
    {
      id: 2,
      category: "Clinical Care",
      readTime: "5 min read",
      title: "Why Diabetic Foot Ulcers Don't Start Overnight: The Importance of Continuous Foot Monitoring",
      excerpt: "A diabetic foot ulcer isn't a sudden crisis—it's the result of an 89-day blind spot between clinic visits. Discover why continuous pressure monitoring is crucial.",
      image: "/2_.png", // The physical therapist image
      link: "/blog/diabetic-foot-ulcers"
    },
    {
      id: 3,
      category: "Elderly Care",
      readTime: "6 min read",
      title: "Preventing Falls in Seniors: How Gait Tracking Detects Risks Before They Happen",
      excerpt: "A fall is rarely just a sudden accident. It is often the predictable outcome of weeks of invisible gait deterioration that standard checkups miss.",
      image: "/3_1.png", // Elderly person walking steadily
      link: "/blog/fall-predict"
    }
  ];

  return (
    <section id="blogs" className="bg-[#FAFAF7] py-20 md:py-28">
      <div className="mx-auto max-w-[1200px] px-6">

        {/* Header Section */}
        <div className="mb-14 flex flex-col gap-6 md:flex-row md:items-end md:justify-between lg:mb-16">
          <div>
            <div className="mb-4 flex items-center gap-3">
              <div className="h-[1px] w-6 bg-[#3D6B5C]"></div>
              <span className="text-xs font-semibold uppercase tracking-[0.15em] text-[#3D6B5C]">
                Clinical Insights
              </span>
            </div>
            <h2 className="text-3xl font-bold leading-[1.15] tracking-tight text-[#1C2B27] sm:text-4xl md:text-[42px]">
              The Spandhika Journal
            </h2>
          </div>

          <div className="flex flex-col items-start gap-4 md:items-end">
            <a 
              href="/blog" 
              className="group flex items-center gap-2 text-sm font-semibold text-[#3D6B5C] transition-colors hover:text-[#1C2B27]"
            >
              View all articles 
              <svg className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </a>
          </div>
        </div>

        {/* Blog Cards Grid */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {blogs.map((blog) => (
            <article 
              key={blog.id} 
              className="group flex flex-col overflow-hidden rounded-2xl bg-white shadow-[0_4px_20px_rgb(0,0,0,0.03)] transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_12px_30px_rgb(0,0,0,0.08)] ring-1 ring-black/[0.02]"
            >
              {/* Image Container */}
              <a href={blog.link} className="relative block aspect-[16/10] w-full overflow-hidden bg-gray-100">
                <Image 
                  src={blog.image} 
                  alt={blog.title} 
                  fill 
                  className="object-cover transition-transform duration-700 group-hover:scale-105" 
                />
                
                {/* Category Pill floating on image */}
                <div className="absolute left-4 top-4 rounded-full bg-white/90 px-3 py-1.5 text-[11px] font-bold uppercase tracking-wider text-[#1C2B27] backdrop-blur-sm shadow-sm">
                  {blog.category}
                </div>
              </a>

              {/* Content Container */}
              <div className="flex flex-1 flex-col p-6 sm:p-8">
                <div className="mb-4 flex items-center text-xs font-medium text-[#1C2B27]/50">
                  <span>{blog.readTime}</span>
                </div>

                <a href={blog.link} className="block">
                  <h3 className="mb-3 text-[19px] font-bold leading-snug text-[#1C2B27] transition-colors duration-300 group-hover:text-[#3D6B5C]">
                    {blog.title}
                  </h3>
                </a>

                <p className="mb-6 line-clamp-3 text-[14px] leading-relaxed text-[#1C2B27]/60">
                  {blog.excerpt}
                </p>

                {/* Bottom link anchored to bottom using mt-auto */}
                <div className="mt-auto pt-4 border-t border-gray-100">
                  <a 
                    href={blog.link} 
                    className="inline-flex items-center gap-2 text-[14px] font-semibold text-[#1C2B27] transition-colors duration-300 group-hover:text-[#C76B3F]"
                  >
                    Read article
                    <svg className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>

      </div>
    </section>
  );
}