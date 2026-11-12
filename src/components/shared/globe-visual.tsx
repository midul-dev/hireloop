import React from "react"
import { cn } from "@/lib/utils"

interface GlobeVisualProps {
  className?: string
  glowIntensity?: "normal" | "intense"
  variant?: "hero" | "cta"
}

export function GlobeVisual({
  className,
  glowIntensity = "normal",
  variant = "hero",
}: GlobeVisualProps) {
  return (
    <div
      className={cn(
        "relative w-full max-w-5xl mx-auto overflow-hidden pointer-events-none select-none",
        variant === "hero" ? "h-[360px] sm:h-[440px] md:h-[500px]" : "h-[320px] sm:h-[400px]",
        className
      )}
    >
      {/* Deep atmospheric radial glow behind the top rim */}
      <div
        className={cn(
          "absolute left-1/2 -translate-x-1/2 rounded-full filter blur-[70px] -z-10",
          glowIntensity === "intense" ? "bg-indigo-600/40" : "bg-blue-600/30",
          variant === "hero"
            ? "top-12 w-[600px] sm:w-[800px] h-[300px] sm:h-[380px]"
            : "top-8 w-[500px] sm:w-[700px] h-[260px]"
        )}
      />

      {/* Secondary violet glow highlight */}
      <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[400px] sm:w-[600px] h-[200px] bg-purple-500/20 rounded-full filter blur-[90px] -z-10" />

      {/* SVG Sphere with Atmosphere, Grid Lines, and Planet Horizon */}
      <svg
        viewBox="0 0 1000 600"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full"
        preserveAspectRatio="xMidYMin slice"
      >
        <defs>
          {/* Atmosphere rim gradient */}
          <linearGradient id="atmosphereGlow" x1="500" y1="50" x2="500" y2="400" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#818cf8" stopOpacity="0.85" />
            <stop offset="15%" stopColor="#4f46e5" stopOpacity="0.55" />
            <stop offset="45%" stopColor="#1e1b4b" stopOpacity="0.2" />
            <stop offset="100%" stopColor="#050508" stopOpacity="0" />
          </linearGradient>

          {/* Planet Body Gradient */}
          <radialGradient
            id="planetSurface"
            cx="50%"
            cy="15%"
            r="75%"
            fx="50%"
            fy="15%"
          >
            <stop offset="0%" stopColor="#312e81" stopOpacity="0.7" />
            <stop offset="25%" stopColor="#1e1b4b" stopOpacity="0.85" />
            <stop offset="60%" stopColor="#0f172a" stopOpacity="0.95" />
            <stop offset="100%" stopColor="#050508" stopOpacity="1" />
          </radialGradient>

          {/* Rim light line */}
          <linearGradient id="rimLine" x1="100" y1="120" x2="900" y2="120" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#38bdf8" stopOpacity="0" />
            <stop offset="25%" stopColor="#60a5fa" stopOpacity="0.6" />
            <stop offset="50%" stopColor="#c7d2fe" stopOpacity="1" />
            <stop offset="75%" stopColor="#818cf8" stopOpacity="0.6" />
            <stop offset="100%" stopColor="#a855f7" stopOpacity="0" />
          </linearGradient>

          {/* Grid lines stroke gradient */}
          <linearGradient id="gridStroke" x1="500" y1="80" x2="500" y2="500" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#93c5fd" stopOpacity="0.45" />
            <stop offset="40%" stopColor="#6366f1" stopOpacity="0.25" />
            <stop offset="80%" stopColor="#4338ca" stopOpacity="0.08" />
            <stop offset="100%" stopColor="#1e1b4b" stopOpacity="0.0" />
          </linearGradient>

          {/* Continent soft glow filter */}
          <filter id="softGlow" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="12" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>
        </defs>

        {/* Outer Atmospheric Aura */}
        <ellipse cx="500" cy="520" rx="460" ry="430" fill="url(#atmosphereGlow)" />

        {/* Planet Main Body Disk */}
        <ellipse cx="500" cy="540" rx="440" ry="410" fill="url(#planetSurface)" />

        {/* Abstract continent shapes / organic terrain silhouettes */}
        <g opacity="0.25" fill="#6366f1">
          <path d="M380 200 C410 180, 470 190, 500 230 C530 270, 480 310, 430 300 C390 290, 360 230, 380 200 Z" filter="url(#softGlow)" />
          <path d="M580 240 C620 220, 680 250, 700 290 C710 330, 660 360, 620 340 C580 320, 560 260, 580 240 Z" filter="url(#softGlow)" />
          <path d="M260 280 C300 270, 340 310, 330 350 C310 380, 270 380, 240 350 C220 320, 240 290, 260 280 Z" filter="url(#softGlow)" />
        </g>

        {/* Latitude Curvature Lines */}
        <path d="M120 270 Q500 130 880 270" stroke="url(#gridStroke)" strokeWidth="1.2" fill="none" />
        <path d="M90 330 Q500 190 910 330" stroke="url(#gridStroke)" strokeWidth="1.2" fill="none" />
        <path d="M70 390 Q500 260 930 390" stroke="url(#gridStroke)" strokeWidth="1.2" fill="none" />
        <path d="M60 460 Q500 340 940 460" stroke="url(#gridStroke)" strokeWidth="1.2" fill="none" />
        <path d="M60 530 Q500 420 940 530" stroke="url(#gridStroke)" strokeWidth="1.2" fill="none" />

        {/* Longitude Curvature Lines */}
        <path d="M500 130 C500 250 500 450 500 600" stroke="url(#gridStroke)" strokeWidth="1.2" fill="none" />
        <path d="M500 130 C430 250 410 450 400 600" stroke="url(#gridStroke)" strokeWidth="1.2" fill="none" />
        <path d="M500 130 C570 250 590 450 600 600" stroke="url(#gridStroke)" strokeWidth="1.2" fill="none" />
        <path d="M500 130 C360 260 310 460 280 600" stroke="url(#gridStroke)" strokeWidth="1.2" fill="none" />
        <path d="M500 130 C640 260 690 460 720 600" stroke="url(#gridStroke)" strokeWidth="1.2" fill="none" />
        <path d="M500 130 C290 280 220 480 180 600" stroke="url(#gridStroke)" strokeWidth="1.2" fill="none" />
        <path d="M500 130 C710 280 780 480 820 600" stroke="url(#gridStroke)" strokeWidth="1.2" fill="none" />

        {/* Glowing Rim Arc Line */}
        <path
          d="M120 270 Q500 128 880 270"
          stroke="url(#rimLine)"
          strokeWidth="2.5"
          fill="none"
          strokeLinecap="round"
        />

        {/* Horizon bright white crest highlight */}
        <path
          d="M360 148 Q500 128 640 148"
          stroke="#ffffff"
          strokeWidth="1.5"
          strokeOpacity="0.8"
          fill="none"
          strokeLinecap="round"
        />
      </svg>
    </div>
  )
}
