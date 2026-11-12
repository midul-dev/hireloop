import React from "react"
import { cn } from "@/lib/utils"

interface SectionKickerProps {
  children: React.ReactNode
  className?: string
  dotColor?: string
}

export function SectionKicker({
  children,
  className,
  dotColor = "bg-indigo-400",
}: SectionKickerProps) {
  return (
    <div className={cn("inline-flex items-center justify-center gap-2 mb-3 select-none", className)}>
      <span className={cn("w-1.5 h-1.5 rounded-full animate-pulse", dotColor)} />
      <span className="text-[11px] sm:text-xs font-semibold tracking-[0.2em] uppercase text-neutral-400">
        {children}
      </span>
      <span className={cn("w-1.5 h-1.5 rounded-full animate-pulse", dotColor)} />
    </div>
  )
}
