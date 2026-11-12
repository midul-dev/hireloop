import React from "react"
import {
  Search,
  BarChart3,
  Building2,
  Bookmark,
  Zap,
  Lock,
  Headphones,
  TrendingUp,
} from "lucide-react"
import { SectionKicker } from "@/components/shared/section-kicker"
import { Card } from "@/components/ui/card"

export interface FeatureItem {
  icon: React.ElementType
  title: string
  description: string
}

export function FeaturesSection() {
  const features: FeatureItem[] = [
    {
      icon: Search,
      title: "Direct Search",
      description: "Find jobs directly with advanced multi-criteria matching filters.",
    },
    {
      icon: BarChart3,
      title: "Salary Insights",
      description: "Get accurate real-time market data to negotiate compensation confidently.",
    },
    {
      icon: Building2,
      title: "Top Companies",
      description: "Apply directly to vetted tech companies and unicorns actively hiring.",
    },
    {
      icon: Bookmark,
      title: "Saved Jobs",
      description: "Organize and track saved roles and application statuses in one dashboard.",
    },
    {
      icon: Zap,
      title: "One-Click Apply",
      description: "Simplify your applications with pre-verified single-click profiles.",
    },
    {
      icon: Lock,
      title: "Secure Resume",
      description: "Your confidential career profile and contact info are always protected.",
    },
    {
      icon: Headphones,
      title: "24/7 Expert Advice",
      description: "Receive personalized feedback and interview guidance anytime you need.",
    },
    {
      icon: TrendingUp,
      title: "Career Growth Resources",
      description: "Access curated skill roadmaps, system design guides, and offer benchmarks.",
    },
  ]

  return (
    <section id="features" className="relative w-full py-20 sm:py-28 overflow-hidden bg-[#050508]">
      {/* Background radial gradient */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[700px] h-[400px] bg-indigo-900/10 rounded-full filter blur-[150px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center">
        {/* Section Kicker */}
        <SectionKicker>FEATURED TOOLS</SectionKicker>

        {/* Section Heading */}
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white text-center mb-16 max-w-2xl leading-tight">
          Everything you need to succeed
        </h2>

        {/* 8 Features Grid: 4 columns on lg, 2 columns on sm/md */}
        <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, idx) => {
            const Icon = feature.icon
            return (
              <Card
                key={idx}
                className="group relative rounded-2xl border border-white/[0.07] bg-[#0c0d14]/70 backdrop-blur-md p-6 hover:border-indigo-500/35 hover:bg-[#10121d]/85 transition-all duration-300 shadow-lg hover:-translate-y-1"
              >
                {/* Subtle top edge glow */}
                <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-indigo-500/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

                <div className="space-y-4">
                  <div className="size-10 rounded-xl bg-white/[0.04] border border-white/[0.08] flex items-center justify-center text-neutral-300 group-hover:text-indigo-400 group-hover:border-indigo-500/30 group-hover:bg-indigo-500/10 transition-colors">
                    <Icon className="size-5" />
                  </div>

                  <div>
                    <h3 className="text-base font-bold text-white group-hover:text-indigo-200 transition-colors mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
