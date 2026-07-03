import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";
import ScrollProgress from "@/components/ui/ScrollProgress";
import DidYouKnowBanner from "@/components/ui/DidYouKnow";

// 1. Configure Manrope
const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  display: "swap", 
});

export const metadata: Metadata = {
  metadataBase: new URL("https://spandhikaorthotics.in"),
  title: {
    default: "Spandhika — Smart Orthotic Insoles for Better Movement",
    template: "%s | Spandhika Orthotics",
  },
  description:
    "SAARTHI by Spandhika is a smart orthotic insole that maps pressure, detects gait issues, and helps improve posture, comfort, and everyday movement.",
  keywords: [
    "smart insoles",
    "orthotic insoles",
    "SAARTHI",
    "foot pressure mapping",
    "gait analysis",
    "plantar fasciitis",
    "Spandhika Orthotics",
    "smart footwear India",
  ],
  authors: [{ name: "Spandhika Orthotics" }],
  creator: "Spandhika Orthotics",
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://spandhikaorthotics.in",
    siteName: "Spandhika Orthotics",
    title: "Spandhika — Smart Orthotic Insoles for Better Movement",
    description:
      "SAARTHI maps pressure, detects gait issues, and helps you move better — every step.",
    images: [
      {
        url: "/SO_Logo.png",
        width: 1200,
        height: 630,
        alt: "Spandhika SAARTHI smart orthotic insole",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Spandhika — Smart Orthotic Insoles for Better Movement",
    description:
      "SAARTHI maps pressure, detects gait issues, and helps you move better — every step.",
    images: ["/SO_Logo.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      // 2. Inject the Manrope variable into the HTML tag
      className={`${manrope.variable} h-full antialiased`}
    >
      {/* 3. Add font-sans here to make Manrope the global default */}
      <body className="min-h-full flex flex-col font-sans">
        <ScrollProgress />
        {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Spandhika Orthotics",
              url: "https://spandhikaorthotics.in",
              logo: "https://spandhikaorthotics.in/SO_Logo.png",
              description:
                "Smart orthotic insoles that map pressure and improve every step.",
              email: "spandhikaorthotics@gmail.com",
              sameAs: ["https://www.linkedin.com/company/spandhika-orthotics"],
            }),
          }}
        />
      </body>
    </html>
  );
}