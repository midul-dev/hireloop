"use client"

import React, { useState } from "react"
import Image from "next/image"
import { Search, MapPin } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { StatsCards } from "@/components/sections/stats-cards"
import globeImg from "@/assets/globe.png"
import ctaBgImg from "@/assets/cta-bg.png"

interface HeroSectionProps {
  onSearch?: (title: string, location: string) => void
}

export function HeroSection({ onSearch }: HeroSectionProps) {
  const [jobTitle, setJobTitle] = useState("")
  const [location, setLocation] = useState("")

  const trendingTags = [
    "Product Designer",
    "AI Engineering",
    "Dev-ops Engineer",
  ]

  const handleSearchSubmit = (e?: React.FormEvent) => {
    if (e) e.preventDefault()
    if (onSearch) {
      onSearch(jobTitle, location)
    }
  }

  const handleTagClick = (tag: string) => {
    setJobTitle(tag)
    if (onSearch) {
      onSearch(tag, location)
    }
  }

  return (
    <div className="relative">
    <section className="relative w-full isolate pt-28 sm:pt-36 md:pt-40 pb-20 sm:pb-28 overflow-hidden flex flex-col items-center">
      {/* HERO BACKGROUND LAYERS FROM cta-bg.png & globe.png */}
      <div className="absolute inset-0 z-0 pointer-events-none select-none overflow-hidden flex justify-center">
        <div className="relative w-full max-w-[1440px] h-full min-h-[1100px] sm:min-h-[1250px]">
          {/* 1. Atmospheric Top Nebula from cta-bg.png */}
          <div className="absolute top-0 inset-x-0 h-[600px] sm:h-[700px] opacity-75">
            <Image
              src={ctaBgImg}
              alt=""
              fill
              className="object-cover object-top pointer-events-none select-none"
              priority
            />
          </div>

          {/* 2. Full Background Graphic from globe.png (stars, top aura, and glowing globe) */}
          <Image
            src={globeImg}
            alt="Hero Background"
            fill
            className="object-cover object-bottom pointer-events-none select-none"
            priority
          />

          {/* 3. Soft bottom fade blending into #050508 */}
          <div className="absolute inset-x-0 bottom-0 h-44 bg-gradient-to-t from-[#050508] via-[#050508]/80 to-transparent pointer-events-none" />
        </div>
      </div>

      {/* FOREGROUND CONTENT (z-10 ensures everything is interactive and on top) */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center">
        {/* Top Badge: 💼 50,000+ NEW JOBS THIS MONTH with horizontal line accents */}
        <div className="flex items-center justify-center gap-3 sm:gap-4 mb-6 sm:mb-8">
          <div className="w-8 sm:w-16 h-px bg-gradient-to-r from-transparent to-white/20" />
          <div className="inline-flex items-center gap-2 px-3.5 sm:px-4 py-1.5 rounded-full border border-white/10 bg-[#0e0f18]/80 backdrop-blur-md shadow-inner text-xs sm:text-sm text-neutral-300">
            <span className="text-base sm:text-sm">💼</span>
            <span className="text-white font-bold tracking-tight">50,000+</span>
            <span className="text-neutral-400 font-semibold tracking-wider text-[11px] sm:text-xs uppercase">
              NEW JOBS THIS MONTH
            </span>
          </div>
          <div className="w-8 sm:w-16 h-px bg-gradient-to-l from-transparent to-white/20" />
        </div>

        {/* Main Title */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-white max-w-4xl leading-[1.12] mb-4 sm:mb-5">
          Find Your Dream Job Today
        </h1>

        {/* Subtitle */}
        <p className="text-neutral-400 text-sm sm:text-base md:text-lg max-w-2xl mx-auto leading-relaxed mb-7 sm:mb-9 font-normal">
          HireLoop connects top talent with world-class companies. Browse thousands of curated opportunities and land your next role — faster.
        </p>

        {/* Sleek Search Bar */}
        <form
          onSubmit={handleSearchSubmit}
          className="w-full max-w-2xl lg:max-w-3xl rounded-2xl md:rounded-full border border-white/10 bg-[#0c0d15]/90 p-2 sm:p-2.5 shadow-[0_16px_50px_rgba(0,0,0,0.7)] backdrop-blur-xl flex flex-col md:flex-row items-center gap-2 mb-4 sm:mb-5"
        >
          {/* Input 1: Job Title */}
          <div className="relative flex-1 w-full flex items-center">
            <Search className="absolute left-3.5 size-4 text-neutral-400 pointer-events-none" />
            <Input
              type="text"
              value={jobTitle}
              onChange={(e) => setJobTitle(e.target.value)}
              placeholder="Job title, skill or company"
              className="pl-10 h-11 bg-transparent border-0 text-white placeholder:text-neutral-500 focus-visible:ring-0 focus-visible:ring-offset-0 text-sm"
            />
          </div>

          {/* Desktop divider */}
          <div className="hidden md:block w-px h-6 bg-white/10 mx-1" />

          {/* Input 2: Location */}
          <div className="relative flex-1 w-full flex items-center">
            <MapPin className="absolute left-3.5 size-4 text-neutral-400 pointer-events-none" />
            <Input
              type="text"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              placeholder="Location or Remote"
              className="pl-10 h-11 bg-transparent border-0 text-white placeholder:text-neutral-500 focus-visible:ring-0 focus-visible:ring-offset-0 text-sm"
            />
          </div>

          {/* Search Button */}
          <Button
            type="submit"
            size="icon"
            className="w-full md:w-10 h-10 rounded-xl bg-[#5c54f5] hover:bg-[#4f46e5] text-white shrink-0 shadow-[0_0_16px_rgba(92,84,245,0.4)] transition-all hover:scale-105 active:scale-95 cursor-pointer"
            aria-label="Search jobs"
          >
            <Search className="size-4" />
          </Button>
        </form>

        {/* Trending Position Tags */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-2.5 text-xs mb-20 sm:mb-28 md:mb-36">
          <span className="text-neutral-400 font-normal mr-1">Trending Position</span>
          {trendingTags.map((tag) => (
            <button
              key={tag}
              type="button"
              onClick={() => handleTagClick(tag)}
              className="rounded-full px-3.5 py-1 bg-[#12131e]/80 border border-white/10 hover:border-indigo-500/50 hover:bg-white/[0.08] text-neutral-300 hover:text-white transition-all cursor-pointer font-normal text-xs"
            >
              {tag}
            </button>
          ))}
        </div>

      
      </div>
      
    </section>
     <div className="absolute -bottom-20">

 {/* Floating Text over the upper curve of the globe */}
        <div className="w-full max-w-4xl mx-auto text-center px-4 mb-10 sm:mb-14">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-medium text-neutral-100 tracking-tight leading-snug drop-shadow-[0_2px_12px_rgba(0,0,0,0.9)]">
            Assisting over{" "}
            <span className="text-white font-semibold">15,000 job seekers</span>
            <br />
            find their dream positions.
          </h2>
        </div>

        {/* 4 Stat Cards positioned seamlessly over lower globe */}
        <div className="w-full max-w-5xl mx-auto">
          <StatsCards />
        </div>

     </div>
        </div>
  )
}
