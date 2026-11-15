import React from "react"
import Link from "next/link"
import ctaBgImg from "@/assets/cta-bg.png"

export function CTASection() {
  return (
    <section
      style={{
        backgroundImage: `url(${ctaBgImg.src})`,
        backgroundPosition: "center 40px",
        backgroundRepeat: "no-repeat",
        backgroundSize: "1440px auto",
      }}
      className="relative w-full pt-28 sm:pt-36 md:pt-44 pb-28 sm:pb-36 overflow-hidden bg-[#050508] flex flex-col items-center justify-center text-center"
    >
      <div className="relative z-10 w-full max-w-4xl mx-auto px-4 sm:px-6 flex flex-col items-center text-center">
        {/* Main Heading */}
        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-[52px] font-extrabold tracking-tight text-white mb-4 sm:mb-5 max-w-3xl leading-[1.15]">
          Your next role is
          <br />
          already looking for you
        </h2>

        {/* Subtitle */}
        <p className="text-neutral-400 text-xs sm:text-sm md:text-base max-w-xl mx-auto mb-8 sm:mb-10 leading-relaxed font-normal">
          Build a profile in three minutes. The matches start arriving tomorrow morning.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5 sm:gap-4">
          <Link
            href="#create-account"
            className="rounded-xl bg-white hover:bg-neutral-100 text-black font-semibold px-6 sm:px-7 py-3 text-xs sm:text-sm shadow-lg transition-transform hover:scale-105 active:scale-95"
          >
            Create a free account
          </Link>
          <Link
            href="#pricing"
            className="rounded-xl border border-white/10 bg-[#14151f]/80 hover:bg-[#1a1c29] text-white font-medium px-6 sm:px-7 py-3 text-xs sm:text-sm backdrop-blur-md transition-all hover:scale-105 active:scale-95"
          >
            View pricing
          </Link>
        </div>
      </div>
    </section>
  )
}
