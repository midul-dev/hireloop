"use client"

import React, { useState } from "react"
import { Navbar } from "@/components/layout/navbar"
import { Footer } from "@/components/layout/footer"
import { HeroSection } from "@/components/sections/hero-section"
import { JobsSection } from "@/components/sections/jobs-section"
import { FeaturesSection } from "@/components/sections/features-section"
import { PricingSection } from "@/components/sections/pricing-section"
import { CTASection } from "@/components/sections/cta-section"

export default function HomePage() {
  const [searchQuery, setSearchQuery] = useState("")

  const handleSearch = (title: string, location: string) => {
    const combined = [title, location].filter(Boolean).join(" ")
    setSearchQuery(combined)

    // Smooth scroll to jobs section
    const jobsElement = document.getElementById("jobs")
    if (jobsElement) {
      jobsElement.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <div className="min-h-screen flex flex-col bg-[#050508] text-white">
      {/* Navigation Bar */}
      <Navbar />

      {/* Main Content Sections */}
      <main className="flex-1 flex flex-col w-full">
        {/* Hero Section with Search, Trending Tags, Globe & Stats */}
        <HeroSection onSearch={handleSearch} />

        {/* Smart Job Discovery Section (6 Cards + View All) */}
        <JobsSection searchQuery={searchQuery} />

        {/* Platform Features Section (8 Feature Cards) */}
        <FeaturesSection />

        {/* Pricing Plans Section (Monthly/Yearly + 3 Tier Cards) */}
        <PricingSection />

        {/* Call to Action Section with Planet Horizon */}
        <CTASection />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  )
}
