import Link from 'next/link';
// Replace this import with your actual Icon component path (e.g., Lucide React, Material Icons)
// import { Icon } from '@/components/ui/Icon'; 

export default function Purpose() {
  return (
    <section 
      id="purpose" 
      className="scroll-mt-20 sm:scroll-mt-24 py-16 sm:py-20 lg:py-28 bg-primary text-primary-foreground relative overflow-hidden"
    >
      {/* Decorative Background Blob */}
      <div className="blob bg-tertiary-fixed w-[600px] h-[600px] -top-60 left-1/2 -translate-x-1/2 opacity-20 absolute rounded-full blur-3xl pointer-events-none" />
      
      {/* Main Content Container */}
      <div className="mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-20 relative text-center">
        
        {/* Label */}
        <div className="inline-flex items-center gap-2 label-caps text-tertiary-fixed-dim justify-center uppercase text-sm tracking-wider font-semibold">
          <span className="h-px w-6 bg-tertiary-fixed-dim" aria-hidden="true" />
          Brand purpose
        </div>
        
        {/* Heading */}
        <h2 className="mt-4 text-[28px] sm:text-5xl lg:text-6xl font-bold tracking-tight max-w-3xl mx-auto">
          We're not just building insoles.
        </h2>
        
        {/* Supporting Text */}
        <p className="mt-6 text-[15px] sm:text-lg text-on-primary-container max-w-2xl mx-auto leading-relaxed">
          We're building confidence, comfort, and better movement for everyday life — quietly, underfoot, for the people who carry the world on theirs.
        </p>

      </div>
    </section>
  );
}