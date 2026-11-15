import React from "react"
import Link from "next/link"
import Image from "next/image"
import logoImg from "@/assets/logo.png"

interface LogoProps {
  className?: string
  size?: "sm" | "md" | "lg"
}

export function Logo({ className = "", size = "md" }: LogoProps) {
  const heights = {
    sm: "h-6 w-auto",
    md: "h-7 sm:h-8 w-auto",
    lg: "h-9 sm:h-10 w-auto",
  }

  return (
    <Link href="/" className={`inline-flex items-center group select-none ${className}`}>
      <Image
        src={logoImg}
        alt="HireLoop"
        className={`${heights[size]} object-contain transition-transform duration-300 group-hover:scale-105`}
        priority
      />
    </Link>
  )
}
