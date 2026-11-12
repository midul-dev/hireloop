import React from "react"
import Link from "next/link"

interface LogoProps {
  className?: string
  showText?: boolean
  size?: "sm" | "md" | "lg"
}

export function Logo({ className = "", showText = true, size = "md" }: LogoProps) {
  const iconSizes = {
    sm: "w-6 h-6",
    md: "w-8 h-8",
    lg: "w-10 h-10",
  }

  const textSizes = {
    sm: "text-lg",
    md: "text-xl",
    lg: "text-2xl",
  }

  return (
    <Link href="/" className={`inline-flex items-center gap-2.5 group select-none ${className}`}>
      {/* HireLoop Infinity / Loop Emblem */}
      <div className={`relative ${iconSizes[size]} flex items-center justify-center transition-transform duration-300 group-hover:scale-105`}>
        <svg
          viewBox="0 0 32 32"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full drop-shadow-[0_0_12px_rgba(99,102,241,0.5)]"
        >
          <defs>
            <linearGradient id="loop-grad-1" x1="2" y1="8" x2="30" y2="24" gradientUnits="userSpaceOnUse">
              <stop stopColor="#38bdf8" />
              <stop offset="0.5" stopColor="#6366f1" />
              <stop offset="1" stopColor="#a855f7" />
            </linearGradient>
            <linearGradient id="orange-accent" x1="18" y1="8" x2="28" y2="20" gradientUnits="userSpaceOnUse">
              <stop stopColor="#f97316" />
              <stop offset="1" stopColor="#fb923c" />
            </linearGradient>
          </defs>
          {/* Main infinity curve */}
          <path
            d="M9 11C6.23858 11 4 13.2386 4 16C4 18.7614 6.23858 21 9 21C11.5 21 13.5 19 16 16C18.5 13 20.5 11 23 11C25.7614 11 28 13.2386 28 16C28 18.7614 25.7614 21 23 21C20.5 21 18.5 19 16 16"
            stroke="url(#loop-grad-1)"
            strokeWidth="3.2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          {/* Accent arc resembling the orange glow on the right ring in the design */}
          <path
            d="M21 11.5C22.2 11.2 23.5 11.3 24.8 11.9C26.7 12.8 28 14.3 28 16C28 17.5 27 19 25.2 19.9"
            stroke="url(#orange-accent)"
            strokeWidth="3.2"
            strokeLinecap="round"
          />
          {/* Accent dot */}
          <circle cx="23.5" cy="11.5" r="1.8" fill="#f97316" />
        </svg>
      </div>

      {showText && (
        <span className={`font-bold tracking-tight text-white flex items-center ${textSizes[size]}`}>
          hire<span className="text-sky-400 font-semibold">loop</span>
        </span>
      )}
    </Link>
  )
}
