import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import "./globals.css";

export const metadata: Metadata = {
  title: "DGG LEARNING PLATFORM",
  description: "Join our transformative, career-ready program to master digital literacy, coding, and monetization strategies with expert instructors",
};

export default function RootLayout({
  children,
}: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <header className="sticky top-0 z-20 w-full border-b bg-white/75 backdrop-blur">
          <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4">
            <Link href="/" className="flex items-center gap-3">
              <Image src="/Logoo.jpg" alt="DGG Logo" width={150} height={40} className="h-10 w-auto" priority />
            </Link>
            <nav className="flex items-center gap-4">
              <a href="https://www.dglobalgrowthfield.com" target="_blank" rel="noopener noreferrer"
                className="hidden text-sm font-medium text-[#512d7c] hover:underline sm:block">
                Visit D Global Growthfield
              </a>
              <Link href="/auth/login">
                <button className="rounded-md px-4 py-2 text-sm font-medium text-[#512d7c] hover:bg-[#512d7c]/10">Log in</button>
              </Link>
              <Link href="/auth/sign-up">
                <button className="rounded-md bg-[#512d7c] px-6 py-2 text-sm font-medium text-white hover:bg-[#3f2361]">
                  Start learning
                </button>
              </Link>
            </nav>
          </div>
        </header>
        {children}
      </body>
    </html>
  );
}