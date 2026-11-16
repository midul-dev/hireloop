"use client"

import React, { useState } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import { Logo } from "@/components/shared/logo"
import { Button } from "@/components/ui/button"
import { signOut, useSession } from "@/lib/auth-client"

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const { 
        data: session, 
        isPending, 
        error, 
    } = useSession() 
    
    const user = session?.user

  const navLinks = [
    { label: "Browse Jobs", href: "#jobs" },
    { label: "Company", href: "#features" },
    { label: "Pricing", href: "#pricing" },
  ]

  const handleSignOut =async ()=>{
    await signOut();
  }

  return (
    <header className="sticky top-3 sm:top-5 z-50 w-full px-4 sm:px-6 lg:px-8 -mb-16 sm:-mb-20 pointer-events-none">
      <div className="max-w-6xl mx-auto rounded-2xl border border-white/[0.08] bg-[#0c0d15]/85 backdrop-blur-xl px-4 sm:px-6 h-14 sm:h-16 flex items-center justify-between shadow-[0_8px_32px_rgba(0,0,0,0.6)] pointer-events-auto">
        {/* Brand Logo */}
        <Logo size="md" />

        {/* Desktop Navigation Links & Actions */}
        <div className="hidden md:flex items-center gap-6 lg:gap-8">
          <nav className="flex items-center gap-6 lg:gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="text-sm font-normal text-neutral-300 hover:text-white transition-colors duration-200"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Divider */}
          <div className="h-4 w-px bg-white/20" />

        {user ? (
  <button onClick={handleSignOut}>Logout</button>
) : (
  <>
    {/* Sign In (soft purple matching reference design) */}
    <Link
      href="/sign-in"
      className="text-sm font-medium text-[#8c82ff] hover:text-[#a59eff] transition-colors"
    >
      Sign In
    </Link>

    {/* Get Started Button */}
    <Link
      href="/sign-up"
      className="rounded-xl bg-[#5c54f5] hover:bg-[#4f46e5] text-white font-medium px-4 py-2 sm:px-5 sm:py-2 text-sm shadow-[0_0_20px_rgba(92,84,245,0.4)] transition-all duration-200 hover:scale-[1.02] active:scale-[0.98]"
    >
      Get Started
    </Link>
  </>
)}
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
        <div className="md:hidden max-w-6xl mx-auto mt-2 rounded-2xl border border-white/10 bg-[#0d0e16]/95 backdrop-blur-2xl p-5 space-y-4 shadow-2xl pointer-events-auto animate-in slide-in-from-top-2 duration-200">
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
              href="/sign-in"
              onClick={() => setMobileMenuOpen(false)}
              className="text-center py-2 text-sm font-medium text-[#8c82ff] hover:text-white border border-white/10 rounded-xl"
            >
              Sign In
            </Link>
            <Link
              href="/sign-up"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full rounded-xl bg-[#5c54f5] text-white font-medium py-2.5 text-sm shadow-lg text-center"
            >
              Get Started
            </Link>
          </div>
        </div>
      )}
    </header>
  )
}
