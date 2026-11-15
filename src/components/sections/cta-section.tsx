import React from "react"
import Link from "next/link"
import Image from "next/image"
import { buttonVariants } from "@/components/ui/button"
import { ArrowRight, Sparkles } from "lucide-react"
import { cn } from "@/lib/utils"
import ctaBgImg from "@/assets/cta-bg.png"

export function CTASection() {
  return (
    <section className="relative w-full pt-16 pb-28 overflow-hidden bg-[#050508]">
      {/* Background celestial globe horizon */}
      <div className="relative w-full max-w-5xl mx-auto flex flex-col items-center">
        {/* CTA Background Artwork */}
        <div className="relative w-full h-[360px] sm:h-[440px] md:h-[500px] overflow-hidden rounded-3xl">
          <Image
            src={ctaBgImg}
            alt="HireLoop Career Horizon"
            fill
            className="object-cover object-center pointer-events-none select-none opacity-90"
          />
          {/* Subtle blending fades */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#050508] via-transparent to-[#050508]/60 pointer-events-none" />
        </div>

        {/* Floating Content over the Globe Horizon */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4 z-10">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-indigo-500/30 bg-indigo-500/10 text-[11px] font-semibold text-indigo-300 uppercase tracking-widest mb-4 backdrop-blur-md">
            <Sparkles className="size-3" /> Get Hired Faster
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white mb-4 max-w-2xl leading-tight drop-shadow-[0_4px_16px_rgba(0,0,0,0.8)]">
            Your next role is already looking for you
          </h2>

          <p className="text-neutral-300 text-sm sm:text-base max-w-xl mb-8 leading-relaxed drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]">
            Build a profile in 10 minutes. Top companies start coming to you this week.
          </p>

          <div className="flex flex-col sm:flex-row items-center gap-4">
            <Link
              href="#create-account"
              className={cn(
                buttonVariants({ variant: "default" }),
                "rounded-full bg-white text-black hover:bg-neutral-200 font-semibold px-7 py-3 text-sm shadow-[0_0_24px_rgba(255,255,255,0.25)] transition-all duration-300 hover:scale-105 active:scale-95"
              )}
            >
              Create a Free Account
              <ArrowRight className="ml-1.5 size-4" />
            </Link>
            <Link
              href="#jobs"
              className={cn(
                buttonVariants({ variant: "outline" }),
                "rounded-full border-white/20 bg-neutral-900/80 hover:bg-neutral-800 text-white font-medium px-7 py-3 text-sm backdrop-blur-md transition-all duration-300 hover:scale-105 active:scale-95"
              )}
            >
              View Job Listing
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
