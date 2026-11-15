import React from "react"
import Link from "next/link"
import { Logo } from "@/components/shared/logo"

export function Footer() {
  const productLinks = [
    { label: "Job discovery", href: "#jobs" },
    { label: "Worker AI", href: "#features" },
    { label: "Companies", href: "#features" },
    { label: "Salary data", href: "#pricing" },
  ]

  const navigationLinks = [
    { label: "Help center", href: "#" },
    { label: "Career library", href: "#" },
    { label: "Contact", href: "#" },
  ]

  const resourceLinks = [
    { label: "Brand Guideline", href: "#" },
    { label: "Newsroom", href: "#" },
  ]

  return (
    <footer className="w-full bg-[#050508] relative z-10 pt-16 sm:pt-20 pb-12 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Grid: Brand & 3 Link Columns */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-10 lg:gap-14 pb-14 sm:pb-16">
          {/* Brand & Mission column */}
          <div className="md:col-span-2 space-y-3.5">
            <Logo size="md" />
            <p className="text-xs sm:text-sm text-neutral-400 max-w-xs leading-relaxed">
              The AI-native career platform. Built for people who take their work seriously.
            </p>
          </div>

          {/* Links Column 1: Product */}
          <div className="space-y-3">
            <h4 className="text-sm font-semibold text-[#5c67f5]">
              Product
            </h4>
            <ul className="space-y-2.5">
              {productLinks.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="text-xs sm:text-sm text-neutral-400 hover:text-white transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Links Column 2: Navigations */}
          <div className="space-y-3">
            <h4 className="text-sm font-semibold text-[#5c67f5]">
              Navigations
            </h4>
            <ul className="space-y-2.5">
              {navigationLinks.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="text-xs sm:text-sm text-neutral-400 hover:text-white transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Links Column 3: Resources */}
          <div className="space-y-3">
            <h4 className="text-sm font-semibold text-[#5c67f5]">
              Resources
            </h4>
            <ul className="space-y-2.5">
              {resourceLinks.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="text-xs sm:text-sm text-neutral-400 hover:text-white transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Row */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-neutral-500 pt-6 border-t border-white/[0.04]">
          {/* Social Links (3 icons: Facebook, Dribbble/Purple, LinkedIn) */}
          <div className="flex items-center gap-2.5">
            {/* Facebook */}
            <Link
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="size-8 sm:size-9 rounded-xl bg-[#0e1017] border border-white/10 flex items-center justify-center text-neutral-400 hover:text-white hover:border-white/20 transition-all"
            >
              <svg className="size-4 fill-current" viewBox="0 0 24 24">
                <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
              </svg>
            </Link>

            {/* Dribbble / Community (Vibrant Indigo Button) */}
            <Link
              href="https://dribbble.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Community"
              className="size-8 sm:size-9 rounded-xl bg-[#5c54f5] hover:bg-[#4f46e5] flex items-center justify-center text-white shadow-[0_0_14px_rgba(92,84,245,0.4)] transition-all hover:scale-105 active:scale-95"
            >
              <svg className="size-4 fill-current" viewBox="0 0 24 24">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm6.6 6.58c-.78-.29-2.24-.71-4.04-.39-.12-.31-.25-.63-.39-.95-.2-.46-.42-.92-.66-1.37 2.08.57 3.86 1.55 5.09 2.71zM12 4.07c.28.51.53 1.03.75 1.55-.17.06-.34.12-.51.18-1.57.54-3.52 1.22-4.91 1.38C8.16 5.58 9.94 4.37 12 4.07zm-5.9 4.14c1.37-.15 3.19-.8 4.7-1.33.22.48.42.97.6 1.46-.22.06-.44.13-.66.21-3.23 1.13-5.74 3.73-6.66 4.88-.13-.71-.2-1.45-.2-2.2 0-1.12.28-2.18.78-3.11zm1.09 6.27c.88-1.07 3.25-3.54 6.27-4.63.15.34.29.69.41 1.05.12.35.22.7.3 1.04-3.54.95-6.19 3.51-7.1 4.54.04-.69.12-1.37.26-2.01zm3.17 4.9c-.83-.87-1.42-2.02-1.84-3.26.85-.97 3.32-3.37 6.64-4.29.54 1.53.82 3.14.82 4.79 0 .61-.06 1.21-.17 1.8-1.63.7-3.47 1.06-5.45.96zm6.81-1.35c.1-.55.15-1.11.15-1.69 0-1.82-.41-3.53-1.15-5.06 1.59-.3 2.89.04 3.59.33-.29 2.45-1.29 4.62-2.59 6.42z" />
              </svg>
            </Link>

            {/* LinkedIn */}
            <Link
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="size-8 sm:size-9 rounded-xl bg-[#0e1017] border border-white/10 flex items-center justify-center text-neutral-400 hover:text-white hover:border-white/20 transition-all"
            >
              <svg className="size-4 fill-current" viewBox="0 0 24 24">
                <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.2V10.9H6.46M7.83 6.45a1.62 1.62 0 1 0 1.62 1.62c0-.89-.73-1.62-1.62-1.62z" />
              </svg>
            </Link>
          </div>

          {/* Copyright & Legal Links */}
          <div className="flex flex-wrap items-center gap-4 sm:gap-6 text-neutral-500 text-xs">
            <span>Copyright 2024 —Programming Hero</span>
            <div className="flex items-center gap-2">
              <Link href="#terms" className="hover:text-neutral-400 transition-colors">
                Terms &amp; Policy
              </Link>
              <span>-</span>
              <Link href="#privacy" className="hover:text-neutral-400 transition-colors">
                Privacy Guideline
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
