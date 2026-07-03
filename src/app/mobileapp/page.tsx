import Image from "next/image";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function ComingSoonPage() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-white px-6">
      <div className="max-w-xl text-center">
        <h1 className="text-5xl font-bold tracking-tight text-gray-900">
          Coming Soon
        </h1>

        <p className="mt-6 text-lg leading-8 text-gray-600">
          We're working on something exciting. This page is currently under
          development and will be available soon.
        </p>

        <Link
          href="/"
          className="mt-8 inline-flex items-center gap-2 rounded-lg bg-black px-6 py-3 text-sm font-medium text-white transition-all duration-200 hover:bg-gray-800 hover:scale-105"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to Homepage
        </Link>
      </div>
    </main>
  );
}
