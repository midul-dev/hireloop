import React from "react"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { Logo } from "@/components/shared/logo"

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="min-h-screen w-full bg-[#050508] text-white flex flex-col justify-between relative overflow-hidden isolate selection:bg-indigo-500/30 selection:text-white">
      {/* Ambient background lighting matching site theme */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-indigo-600/15 rounded-full filter blur-[150px] pointer-events-none -z-10" />
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-purple-600/10 rounded-full filter blur-[150px] pointer-events-none -z-10" />

      {/* Top Header */}
      <header className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex items-center justify-between z-10">
        <Logo size="md" />
        <Link
          href="/"
          className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-medium text-neutral-400 hover:text-white transition-colors duration-200"
        >
          <ArrowLeft className="size-4" />
          <span>Back to Home</span>
        </Link>
      </header>

      {/* Main Auth Form Container */}
      <main className="flex-1 flex items-center justify-center px-4 sm:px-6 py-8 sm:py-12 z-10">
        {children}
      </main>

      {/* Footer */}
      <footer className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-6 text-center text-xs text-neutral-500 z-10">
        <span>© {new Date().getFullYear()} HireLoop. All rights reserved.</span>
      </footer>
    </div>
  )
}
