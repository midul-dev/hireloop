import React from "react"
import Link from "next/link"
import { Logo } from "@/components/shared/logo"

export function Footer() {
  const productLinks = [
    { label: "Explore Jobs", href: "#jobs" },
    { label: "Companies", href: "#features" },
    { label: "Pricing", href: "#pricing" },
    { label: "Salary Calculator", href: "#" },
    { label: "Remote Jobs", href: "#" },
  ]

  const companyLinks = [
    { label: "About Us", href: "#" },
    { label: "Careers", href: "#" },
    { label: "Press", href: "#" },
    { label: "Blog", href: "#" },
    { label: "Contact Us", href: "#" },
  ]

  const resourceLinks = [
    { label: "Help Center", href: "#" },
    { label: "Community", href: "#" },
    { label: "Guides & Docs", href: "#" },
    { label: "Interview Prep", href: "#" },
    { label: "System Status", href: "#" },
  ]

  return (
    <footer className="w-full border-t border-white/[0.08] bg-[#050508] relative z-10 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-10 pb-12 border-b border-white/[0.06]">
          {/* Brand & Mission column */}
          <div className="md:col-span-2 space-y-4">
            <Logo size="md" />
            <p className="text-sm text-neutral-400 max-w-sm leading-relaxed">
              HireLoop connects top talent with world-class companies. Browse thousands of curated opportunities and land your next career move.
            </p>
          </div>

          {/* Links Column 1: Product */}
          <div className="space-y-3">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-neutral-300">
              Product
            </h4>
            <ul className="space-y-2">
              {productLinks.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="text-sm text-neutral-400 hover:text-white transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Links Column 2: Company */}
          <div className="space-y-3">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-neutral-300">
              Company
            </h4>
            <ul className="space-y-2">
              {companyLinks.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="text-sm text-neutral-400 hover:text-white transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Links Column 3: Resources */}
          <div className="space-y-3">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-neutral-300">
              Resources
            </h4>
            <ul className="space-y-2">
              {resourceLinks.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="text-sm text-neutral-400 hover:text-white transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-neutral-500">
          {/* Social Links */}
          <div className="flex items-center gap-3">
            {/* Facebook */}
            <Link
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="p-2 rounded-full text-neutral-400 hover:text-white hover:bg-white/10 transition-colors"
            >
              <svg className="size-4 fill-current" viewBox="0 0 24 24">
                <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
              </svg>
            </Link>

            {/* X / Twitter */}
            <Link
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Twitter / X"
              className="p-2 rounded-full text-neutral-400 hover:text-white hover:bg-white/10 transition-colors"
            >
              <svg className="size-4 fill-current" viewBox="0 0 24 24">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
            </Link>

            {/* LinkedIn */}
            <Link
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="p-2 rounded-full text-neutral-400 hover:text-white hover:bg-white/10 transition-colors"
            >
              <svg className="size-4 fill-current" viewBox="0 0 24 24">
                <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.2V10.9H6.46M7.83 6.45a1.62 1.62 0 1 0 1.62 1.62c0-.89-.73-1.62-1.62-1.62z" />
              </svg>
            </Link>

            {/* GitHub */}
            <Link
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="p-2 rounded-full text-neutral-400 hover:text-white hover:bg-white/10 transition-colors"
            >
              <svg className="size-4 fill-current" viewBox="0 0 24 24">
                <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0 0 22 12.017C22 6.484 17.522 2 12 2z" />
              </svg>
            </Link>
          </div>

          {/* Copyright & Legal */}
          <div className="flex flex-wrap items-center gap-6">
            <Link href="#privacy" className="hover:text-neutral-300 transition-colors">
              Privacy Policy
            </Link>
            <Link href="#terms" className="hover:text-neutral-300 transition-colors">
              Terms of Service
            </Link>
            <span>© {new Date().getFullYear()} HireLoop. All rights reserved.</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
