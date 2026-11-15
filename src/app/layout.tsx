import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "sonner";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "HireLoop — Find Your Dream Job Today",
  description:
    "HireLoop connects top talent with world-class companies. Browse thousands of curated opportunities and land your next career move.",
  keywords: [
    "jobs",
    "careers",
    "tech jobs",
    "frontend developer",
    "remote jobs",
    "hireloop",
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} dark scroll-smooth h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-[#050508] text-white selection:bg-indigo-500/30 selection:text-indigo-200 antialiased overflow-x-hidden">
        <main>{children}</main>
        <Toaster />
      </body>
    </html>
  );
}
