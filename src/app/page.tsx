import Navbar from "@/components/ui/Navbar";
import Hero from "@/components/ui/Hero";
import Problem from "@/components/ui/Problem";
import Footer from "@/components/ui/Footer";
import ProductShowcase from "@/components/ui/ProductShowcase";
import DidYouKnowBanner from "@/components/ui/DidYouKnow";
import VideoSection from "@/components/ui/VideoSection";
import OrthoticsRange from "@/components/ui/OrthoticsRange";
import Blogs from "@/components/ui/Blogs";
import ContactUs from "@/components/ui/ContactUs";
import Purpose from "@/components/ui/Purpose";
import TargetAudience from "@/components/ui/TargetAudience";
import Chatbot from "@/components/ui/Chatbot";

export const metadata = {
  title: "Spandhika Orthotics | Smart Orthotic Insoles",
  description:
    "Spandhika is a smart orthotic insole that listens to how you walk — and helps you move better.",
};

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-emerald-100 text-slate-900 font-sans">
      <Navbar />
      <DidYouKnowBanner />
      <main>
        <Hero />
        <VideoSection />
        <Problem />
        <ProductShowcase />
        <OrthoticsRange />
        <TargetAudience />
        <Blogs />
        <Purpose />
        <ContactUs />
        <Footer />
      </main>
    </div>
  );
}
