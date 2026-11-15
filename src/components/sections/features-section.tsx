import React from "react"
import {
  Search,
  LineChart,
  BarChart2,
  Bookmark,
  MousePointerClick,
  Hexagon,
  TrendingUp,
} from "lucide-react"

function ResumeIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="size-5"
      {...props}
    >
      <rect width="14" height="18" x="5" y="3" rx="2.5" />
      <circle cx="12" cy="8" r="1.5" />
      <line x1="9" x2="15" y1="12" y2="12" />
      <line x1="9" x2="13" y1="15" y2="15" />
    </svg>
  )
}

export interface FeatureItem {
  icon: React.ElementType
  title: string
  description: string
}

export function FeaturesSection() {
  const features: FeatureItem[] = [
    {
      icon: Search,
      title: "Smart Search",
      description: "Find your ideal job with advanced filters.",
    },
    {
      icon: LineChart,
      title: "Salary Insights",
      description: "Get real salary data to negotiate confidently.",
    },
    {
      icon: BarChart2,
      title: "Top Companies",
      description: "Apply to vetted companies that are hiring.",
    },
    {
      icon: Bookmark,
      title: "Saved Jobs",
      description: "Manage apps & favorites on your dashboard.",
    },
    {
      icon: MousePointerClick,
      title: "One-Click Apply",
      description: "Simplify your job applications for an easier process!",
    },
    {
      icon: ResumeIcon,
      title: "Resume Builder",
      description: "Create professional resumes with modern templates.",
    },
    {
      icon: Hexagon,
      title: "Skill-Based Matching",
      description: "Discover jobs that match your skills and experience.",
    },
    {
      icon: TrendingUp,
      title: "Career Growth Resources",
      description: "Boost your career with quick interview tips.",
    },
  ]

  return (
    <section id="features" className="relative w-full py-20 sm:py-28 overflow-hidden bg-[#050508]">
      {/* Background radial gradient */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-indigo-950/15 rounded-full filter blur-[150px] pointer-events-none -z-10" />

      <div className="max-w-6xl xl:max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center">
        {/* Section Kicker */}
        <div className="inline-flex items-center justify-center gap-2 mb-4 select-none">
          <span className="w-1.5 h-1.5 rounded-xs bg-[#5c54f5]" />
          <span className="text-[11px] sm:text-xs font-semibold tracking-[0.2em] uppercase text-neutral-400">
            FEATURES JOB
          </span>
          <span className="w-1.5 h-1.5 rounded-xs bg-[#5c54f5]" />
        </div>

        {/* Section Heading */}
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white text-center mb-16 sm:mb-20 leading-[1.15]">
          Everything you need
          <br />
          to succeed
        </h2>

        {/* 8 Features Grid (4 columns x 2 rows on desktop) */}
        <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-6 sm:gap-x-8 gap-y-10 sm:gap-y-12">
          {features.map((feature) => {
            const Icon = feature.icon
            return (
              <div
                key={feature.title}
                className="flex items-start gap-3.5 sm:gap-4 group"
              >
                {/* Square Icon Container */}
                <div className="size-11 sm:size-12 shrink-0 rounded-xl border border-white/[0.08] bg-[#0c0d14]/90 flex items-center justify-center text-[#c084fc] group-hover:text-[#e879f9] group-hover:border-purple-500/30 group-hover:bg-[#121420] transition-all duration-300 shadow-md">
                  <Icon className="size-5" strokeWidth={1.75} />
                </div>

                {/* Text Content */}
                <div className="flex-1 min-w-0">
                  <h3 className="text-sm sm:text-base font-semibold text-white tracking-tight mb-1 group-hover:text-neutral-100 transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-xs text-neutral-400 leading-relaxed font-normal">
                    {feature.description}
                  </p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
