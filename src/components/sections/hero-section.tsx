"use client"

import React, { useState } from "react"
import { Search, MapPin, Flame } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { GlobeVisual } from "@/components/shared/globe-visual"
import { StatsCards } from "@/components/sections/stats-cards"

interface HeroSectionProps {
  onSearch?: (title: string, location: string) => void
}

export function HeroSection({ onSearch }: HeroSectionProps) {
  const [jobTitle, setJobTitle] = useState("")
  const [location, setLocation] = useState("")

  const trendingTags = [
    "Product Designer",
    "UI/UX Designer",
    "DevOps Engineer",
    "Frontend Developer",
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
    <section className="relative w-full pt-12 sm:pt-20 pb-16 overflow-hidden">
      {/* Top ambient radial gradient glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] sm:w-[900px] h-[350px] bg-indigo-600/15 rounded-full filter blur-[120px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center">
        {/* Top Badge: 98,400+ NEW JOBS THIS WEEK */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-white/10 bg-white/[0.04] backdrop-blur-md shadow-inner text-xs sm:text-sm text-neutral-300 mb-8 transition-transform hover:scale-105">
          <span className="flex items-center gap-1.5 text-amber-400 font-semibold">
            <Flame className="size-3.5 fill-amber-400" />
            98,400+
          </span>
          <span className="text-neutral-300 font-medium tracking-wide">
            NEW JOBS THIS WEEK
          </span>
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse ml-0.5" />
        </div>

        {/* Main Title */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-white max-w-4xl leading-[1.1] mb-6">
          Find Your Dream Job Today
        </h1>

        {/* Subtitle */}
        <p className="text-neutral-400 text-sm sm:text-base md:text-lg max-w-2xl leading-relaxed mb-10">
          HireLoop connects top talent with world-class companies. Browse thousands of curated opportunities and land your next career move.
        </p>

        {/* Sleek Search Bar */}
        <form
          onSubmit={handleSearchSubmit}
          className="w-full max-w-3xl rounded-2xl border border-white/10 bg-[#0d0e17]/90 p-2 sm:p-2.5 shadow-[0_12px_40px_rgba(0,0,0,0.6)] backdrop-blur-xl flex flex-col md:flex-row items-center gap-2 mb-6"
        >
          {/* Input 1: Job Title */}
          <div className="relative flex-1 w-full flex items-center">
            <Search className="absolute left-3.5 size-4 text-neutral-400 pointer-events-none" />
            <Input
              type="text"
              value={jobTitle}
              onChange={(e) => setJobTitle(e.target.value)}
              placeholder="Job title, skills, or company"
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
              placeholder="City, state or remote"
              className="pl-10 h-11 bg-transparent border-0 text-white placeholder:text-neutral-500 focus-visible:ring-0 focus-visible:ring-offset-0 text-sm"
            />
          </div>

          {/* Search Button */}
          <Button
            type="submit"
            size="icon"
            className="w-full md:w-11 h-11 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white shrink-0 shadow-[0_0_16px_rgba(99,102,241,0.4)] transition-all hover:scale-105"
            aria-label="Search jobs"
          >
            <Search className="size-4" />
          </Button>
        </form>

        {/* Trending Searches Tags */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 text-xs mb-16">
          <span className="text-neutral-500 font-medium">Trending Searches:</span>
          {trendingTags.map((tag) => (
            <button
              key={tag}
              type="button"
              onClick={() => handleTagClick(tag)}
              className="rounded-full px-3.5 py-1 bg-white/[0.04] border border-white/10 hover:border-indigo-500/40 hover:bg-white/[0.08] text-neutral-300 hover:text-white transition-all cursor-pointer font-medium"
            >
              {tag}
            </button>
          ))}
        </div>

        {/* Globe Visualization Area */}
        <div className="relative w-full max-w-5xl mt-2">
          {/* Globe graphic */}
          <GlobeVisual variant="hero" glowIntensity="intense" />

          {/* Floating Text over the globe */}
          <div className="absolute top-12 sm:top-16 inset-x-0 flex flex-col items-center justify-center text-center px-4 pointer-events-none">
            <p className="text-sm sm:text-base md:text-lg font-medium text-neutral-200 tracking-wide drop-shadow-[0_2px_10px_rgba(0,0,0,0.8)]">
              Assisting over{" "}
              <span className="text-white font-bold underline decoration-indigo-400/50 underline-offset-4">
                15,000 job seekers
              </span>{" "}
              find their dream positions.
            </p>
          </div>

          {/* 4 Stat Cards positioned over lower globe */}
          <div className="relative -mt-24 sm:-mt-32 md:-mt-40 z-10">
            <StatsCards />
          </div>
        </div>
      </div>
    </section>
  )
}
