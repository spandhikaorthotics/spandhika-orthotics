import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "The Spandhika Journal",
  description:
    "Explore our latest clinical insights, performance tips, and scientific deep dives into the world of biomechanics and foot health.",
};

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
