import Navbar from "@/components/ui/Navbar";
import HomeVideoHero from "@/components/ui/HomeVideoHero";
import WaitlistFaq from "@/components/ui/WaitlistFaq";
import Problem from "@/components/ui/Problem";
import Footer from "@/components/ui/Footer";
import ProductShowcase from "@/components/ui/ProductShowcase";
// import VideoSection from "@/components/ui/VideoSection"; // Hidden for redesign — re-enable when needed
// import OrthoticsRange from "@/components/ui/OrthoticsRange"; // Merged into WhoItsFor — re-enable if needed
import Blogs from "@/components/ui/Blogs";
import ContactUs from "@/components/ui/ContactUs";
import Purpose from "@/components/ui/Purpose";
import TargetAudience from "@/components/ui/TargetAudience";
import Chatbot from "@/components/ui/Chatbot";
import SupportedBy from "@/components/ui/SupportedBy";
import WhoItsFor from "@/components/ui/WhoItsFor";

export const metadata = {
  title: "Spandhika Orthotics | Smart Orthotic Insoles",
  description:
    "Spandhika is a smart orthotic insole that listens to how you walk — and helps you move better.",
};

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-emerald-100 text-slate-900 font-sans">
      <Navbar />
      <main>
        <HomeVideoHero />
        <SupportedBy />
        <WhoItsFor />
        {/* <OrthoticsRange /> */}
        {/* <VideoSection /> */}
        <Problem />
        <ProductShowcase />
        <TargetAudience />
        <Blogs />
        <Purpose />
        <WaitlistFaq />
        <ContactUs />
        <Footer />
      </main>
    </div>
  );
}
