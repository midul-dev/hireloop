"use client"

import React, { useState } from "react"
import { Search, MapPin } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { StatsCards } from "@/components/sections/stats-cards"
import globeImg from "@/assets/globe.png"

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
    <section
      style={{
        backgroundImage: `url(${globeImg.src})`,
        backgroundPosition: "center bottom",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
      className="relative w-full pt-28 sm:pt-36 md:pt-40 pb-12 sm:pb-16 md:pb-20 bg-[#050508] flex flex-col items-center overflow-hidden"
    >
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center">
        {/* Top Badge: 💼 50,000+ NEW JOBS THIS MONTH with horizontal line accents */}
        <div className="flex items-center justify-center gap-3 sm:gap-4 mb-6 sm:mb-8">
          <div className="w-8 sm:w-16 md:w-20 h-px bg-gradient-to-r from-transparent to-white/20" />
          <div className="inline-flex items-center gap-2 px-3.5 sm:px-4 py-1.5 rounded-full border border-white/10 bg-[#0e0f18]/80 backdrop-blur-md shadow-inner text-xs sm:text-sm text-neutral-300">
            <span className="text-base sm:text-sm">💼</span>
            <span className="text-white font-bold tracking-tight">50,000+</span>
            <span className="text-neutral-400 font-medium tracking-wider text-[11px] sm:text-xs uppercase">
              NEW JOBS THIS MONTH
            </span>
          </div>
          <div className="w-8 sm:w-16 md:w-20 h-px bg-gradient-to-l from-transparent to-white/20" />
        </div>

        {/* Main Title */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-[64px] font-extrabold tracking-tight text-white max-w-4xl leading-[1.12] mb-4 sm:mb-5">
          Find Your Dream Job Today
        </h1>

        {/* Subtitle */}
        <p className="text-neutral-400 text-sm sm:text-base md:text-lg max-w-2xl mx-auto leading-relaxed mb-7 sm:mb-8 font-normal">
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
            className="w-full md:w-10 h-10 rounded-xl bg-[#5c54f5] hover:bg-[#4f46e5] text-white shrink-0 shadow-[0_0_20px_rgba(92,84,245,0.45)] transition-all hover:scale-105 active:scale-95 cursor-pointer"
            aria-label="Search jobs"
          >
            <Search className="size-4" />
          </Button>
        </form>

        {/* Trending Position Tags */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-2.5 text-xs mb-16 sm:mb-20 md:mb-24">
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

        {/* Floating Text over the upper curve of the globe */}
        <div className="w-full max-w-4xl mx-auto text-center px-4 mb-8 sm:mb-12">
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
    </section>
  )
}
