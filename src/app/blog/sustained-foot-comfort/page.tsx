import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Surviving a 12-Hour Shift: The Science of Sustained Foot Comfort",
  description: "Discover the biomechanics behind foot fatigue during long work shifts. Learn how pressure distribution, alignment, and personalized support can help nurses, teachers, retail workers, and other professionals stay comfortable throughout the day.",
  openGraph: {
    images: ["/3.png"],
  }
};

export default function BlogPost() {
  // Define the schema object tailored to this specific article
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": "Surviving a 12-Hour Shift: The Science of Sustained Foot Comfort",
    "image": [
      "https://spandhikaorthotics.in/3.png"
    ],
    "author": [{
      "@type": "Organization",
      "name": "Spandhika Orthotics",
      "url": "https://spandhikaorthotics.in"
    }],
    "publisher": {
      "@type": "Organization",
      "name": "Spandhika Orthotics",
      "logo": {
        "@type": "ImageObject",
        "url": "https://spandhikaorthotics.in/SO_Logo.png"
      }
    },
    // Update this date whenever you publish new articles
    "datePublished": "2026-06-23T08:00:00+05:30", 
    "dateModified": "2026-06-23T08:00:00+05:30",
    "description": "Discover the biomechanics behind foot fatigue during long work shifts. Learn how pressure distribution, alignment, and personalized support can help nurses, teachers, retail workers, and other professionals stay comfortable throughout the day."
  };

  return (
    <main className="relative bg-[#FAFAF7] min-h-screen pt-24 pb-24 selection:bg-[#3D6B5C]/20">
      
      {/* --- Article Schema Markup --- */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      {/* ----------------------------- */}

      {/* --- Back to Homepage Button --- */}
      <div className="fixed top-8 left-8 z-10">
        <Link
          href="/#blogs"
          className="group inline-flex items-center gap-2.5 text-sm font-semibold text-[#1C2B27] transition-colors hover:text-[#3D6B5C]"
        >
          {/* SVG Arrow Icon with hover animation */}
          <svg 
            width="16" 
            height="16" 
            viewBox="0 0 16 16" 
            fill="none" 
            xmlns="http://www.w3.org/2000/svg"
            className="transition-transform group-hover:-translate-x-1"
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
      </div>
      {/* ----------------------------------- */}

      {/* 1. Minimal Header */}
      <header className="mx-auto max-w-[720px] px-6">
        <div className="mb-4">
          <span className="text-xs font-bold uppercase tracking-wider text-[#3D6B5C]">
            Occupational Health
          </span>
        </div>
        
        <h1 className="text-4xl font-bold leading-tight tracking-tight text-[#1C2B27] sm:text-5xl mb-10">
          Surviving a 12-Hour Shift: The Science of Sustained Foot Comfort
        </h1>
      </header>

      {/* 2. Hero Image */}
      <div className="mx-auto max-w-[720px] px-6 mb-12">
        <div className="relative aspect-[18/12] w-full overflow-hidden bg-gray-100">
          <Image 
            src="/3.png" 
            alt="Nurse standing in a hospital corridor wearing supportive work shoes" 
            fill 
            className="object-cover object-center" 
          />
        </div>
      </div>

      {/* 3. Pure Content Column */}
      <div className="mx-auto max-w-[720px] px-6">
        <article className="prose prose-lg max-w-none prose-p:text-[#1C2B27]/80 prose-p:leading-[1.8] prose-headings:text-[#1C2B27] prose-headings:font-bold prose-headings:tracking-tight prose-li:marker:text-[#3D6B5C] prose-li:text-[#1C2B27]/80">
          
          <p className="text-xl text-[#1C2B27] font-medium leading-[1.7] mb-8">
            For nurses, teachers, retail workers, hospitality professionals, and countless others, spending an entire shift on your feet is simply part of the job. While the work may differ, the physical demands often share one common challenge: foot fatigue.
          </p>

          <p>
            After hours of standing and walking, many people experience aching feet, sore heels, tired legs, and lower back discomfort. These symptoms are frequently dismissed as an unavoidable consequence of a demanding profession. However, understanding the biomechanics behind prolonged standing reveals that comfort is about much more than soft shoes alone.
          </p>

          <h2 className="text-2xl mt-12 mb-6">Why Long Shifts Take a Toll on Your Feet</h2>
          <p>
            The human body is designed for movement. When we stand or walk for extended periods without adequate support, the muscles, ligaments, and joints of the lower body work continuously to maintain stability and posture.
          </p>

          <p>
            Over the course of a 12-hour shift, the feet absorb thousands of loading cycles. Small biomechanical inefficiencies that might seem insignificant during a short walk can become major sources of fatigue after hours of continuous activity.
          </p>
          
          <p>Common complaints include:</p>
          <ul className="mb-8 space-y-2 mt-4">
            <li>Aching arches</li>
            <li>Heel pain</li>
            <li>Forefoot pressure</li>
            <li>Swollen feet</li>
            <li>Calf tightness</li>
            <li>Knee discomfort</li>
            <li>Lower back fatigue</li>
          </ul>

          <p>
            Often, these symptoms develop gradually and worsen as the workday progresses.
          </p>

          <h2 className="text-2xl mt-12 mb-6">The Hidden Impact of Pressure Accumulation</h2>
          <p>
            Every step creates pressure beneath the foot. Ideally, this pressure should be distributed evenly across the foot's structure.
          </p>
          <p>
            However, factors such as:
          </p>
          
          <ul className="mb-8 space-y-2 mt-4">
            <li>Flat feet</li>
            <li>High arches</li>
            <li>Poor footwear support</li>
            <li>Muscle fatigue</li>
            <li>Altered walking patterns</li>
          </ul>

          <p>
            can cause certain areas to absorb more stress than others. As pressure repeatedly accumulates in the same locations, tissues become overloaded, leading to discomfort and reduced endurance throughout the day.
          </p>
          <p>
            The result isn't just foot pain—it can affect the entire kinetic chain, influencing the ankles, knees, hips, and lower back.
          </p>

          <h2 className="text-2xl mt-12 mb-6">Why Cushioning Isn't the Complete Solution</h2>
          <p>
            Many people search for relief by choosing softer shoes or adding foam insoles. While cushioning can improve comfort initially, it doesn't always address the root cause of fatigue.
          </p>
          <p>
            A highly cushioned surface may absorb impact, but if the foot remains poorly aligned or unstable, excessive loading can still occur in specific areas. True long-term comfort depends on balancing:
          </p>

          <ul className="mb-8 space-y-2 mt-4">
            <li>Cushioning</li>
            <li>Stability</li>
            <li>Alignment</li>
            <li>Pressure distribution</li>
          </ul>

          <p>
            When these factors work together, the body can move more efficiently and with less strain.
          </p>

          <h2 className="text-2xl mt-12 mb-6">How Foot Mechanics Influence Energy Levels</h2>
          <p>
            One often-overlooked aspect of prolonged standing is energy efficiency. When the foot lacks proper support, muscles must work harder to maintain balance and posture throughout the day. This increased effort can contribute to:
          </p>

          <ul className="mb-8 space-y-2 mt-4">
            <li>Earlier onset of fatigue</li>
            <li>Reduced endurance</li>
            <li>Increased soreness after work</li>
            <li>Slower recovery between shifts</li>
          </ul>

          <p>
            Supporting natural foot mechanics helps reduce unnecessary muscular effort, allowing workers to remain comfortable and productive for longer periods.
          </p>

          <h2 className="text-2xl mt-12 mb-6">The Value of Personalized Support</h2>
          <p>
            No two people stand or walk exactly the same way. Differences in:
          </p>

          <ul className="mb-8 space-y-2 mt-4">
            <li>Foot structure</li>
            <li>Weight distribution</li>
            <li>Walking patterns</li>
            <li>Occupational demands</li>
          </ul>

          <p>
            mean that a solution that works for one person may not work for another. Through gait assessment and pressure analysis, clinicians can gain a clearer understanding of how an individual moves and where excessive stress may be occurring.
          </p>
          <p>
            This information helps guide support strategies that are tailored to the individual's needs rather than relying on a one-size-fits-all approach.
          </p>

          <h2 className="text-2xl mt-12 mb-6">Comfort Is About More Than Your Feet</h2>
          <p>
            The benefits of improved foot support often extend beyond the feet themselves. By promoting better pressure distribution and alignment, appropriate support may help:
          </p>

          <ul className="mb-8 space-y-2 mt-4">
            <li>Reduce lower limb fatigue</li>
            <li>Improve standing comfort</li>
            <li>Enhance stability during movement</li>
            <li>Support healthier posture</li>
            <li>Reduce stress on the knees and lower back</li>
          </ul>

          <p>
            For professionals who spend long hours on their feet, these small improvements can have a meaningful impact over the course of a workweek.
          </p>

          {/* Clinical Perspective Highlight Block */}
          <div className="my-10 border-l-4 border-[#3D6B5C] bg-[#FAFAF7] py-2 pl-6">
            <span className="block text-xs font-bold uppercase tracking-wider text-[#3D6B5C] mb-2">
              Clinical Perspective
            </span>
            <p className="text-lg font-semibold text-[#1C2B27] m-0">
              At Spandhika Orthotics, we understand that occupational foot fatigue isn't simply about comfort—it's about helping people perform their jobs without unnecessary physical strain. Through gait assessment and pressure analysis, we aim to identify the biomechanical factors that contribute to fatigue and provide support tailored to each individual's needs.
            </p>
          </div>

          <h2 className="text-2xl mt-12 mb-6">Building Comfort That Lasts the Entire Shift</h2>
          <p>
            Long workdays place significant demands on the body, particularly the feet. While discomfort may feel inevitable, the right combination of footwear, support, and biomechanical assessment can help reduce unnecessary strain.
          </p>
          <p>
            Because when you're caring for patients, teaching students, helping customers, or keeping operations running, your feet shouldn't be working harder than they need to.
          </p>

        </article>

        {/* Minimal Back Link */}
        <div className="mt-16 border-t border-gray-200 pt-8">
          <Link href="/blog" className="text-sm font-semibold text-[#3D6B5C] hover:text-[#1C2B27] transition-colors">
            &larr; Back to Journal
          </Link>
        </div>

      </div>
    </main>
  );
}