"use client"

import React, { useState } from "react"
import Link from "next/link"
import { Menu, X, ArrowUpRight } from "lucide-react"
import { Logo } from "@/components/shared/logo"
import { Button, buttonVariants } from "@/components/ui/button"
import { cn } from "@/lib/utils"

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const navLinks = [
    { label: "Explore Jobs", href: "#jobs" },
    { label: "Companies", href: "#features" },
    { label: "Pricing", href: "#pricing" },
  ]

  return (
    <header className="sticky top-0 z-50 w-full border-b border-white/[0.08] bg-[#050508]/75 backdrop-blur-xl transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 sm:h-20 flex items-center justify-between">
        {/* Brand Logo */}
        <Logo size="md" />

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="text-sm font-medium text-neutral-300 hover:text-white transition-colors duration-200"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Right CTA / Auth Buttons */}
        <div className="hidden md:flex items-center gap-4">
          <Link
            href="#signin"
            className="text-sm font-medium text-neutral-300 hover:text-white transition-colors px-3 py-1.5"
          >
            Sign In
          </Link>
          <Link
            href="#post-a-job"
            className={cn(
              buttonVariants({ variant: "default" }),
              "rounded-full bg-gradient-to-r from-indigo-500 via-indigo-600 to-purple-600 hover:from-indigo-600 hover:to-purple-700 text-white font-medium px-5 py-2 text-sm shadow-[0_0_24px_rgba(99,102,241,0.35)] border border-indigo-400/30 transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]"
            )}
          >
            Post a Job
            <ArrowUpRight className="ml-1 size-3.5 opacity-80" />
          </Link>
        </div>

        {/* Mobile menu button */}
        <div className="flex md:hidden items-center gap-2">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="text-neutral-300 hover:text-white hover:bg-white/10"
            aria-label="Toggle Navigation"
          >
            {mobileMenuOpen ? <X className="size-5" /> : <Menu className="size-5" />}
          </Button>
        </div>
      </div>

      {/* Mobile dropdown menu */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-white/10 bg-[#07070c]/95 backdrop-blur-2xl px-6 py-6 space-y-4 animate-in slide-in-from-top-4 duration-200">
          <nav className="flex flex-col space-y-3">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-base font-medium text-neutral-200 hover:text-white py-1.5 transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="pt-4 border-t border-white/10 flex flex-col gap-3">
            <Link
              href="#signin"
              onClick={() => setMobileMenuOpen(false)}
              className="text-center py-2 text-sm font-medium text-neutral-300 hover:text-white border border-white/10 rounded-full"
            >
              Sign In
            </Link>
            <Link
              href="#post-a-job"
              onClick={() => setMobileMenuOpen(false)}
              className={cn(
                buttonVariants({ variant: "default" }),
                "w-full rounded-full bg-gradient-to-r from-indigo-500 to-purple-600 text-white font-medium py-2 text-sm shadow-lg text-center"
              )}
            >
              Post a Job
            </Link>
          </div>
        </div>
      )}
    </header>
  )
}
