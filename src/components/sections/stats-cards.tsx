import React from "react"
import { Briefcase, BarChart2, UserSearch, Star } from "lucide-react"

export interface StatItem {
  icon: React.ElementType
  value: string
  label: string
}

export function StatsCards() {
  const stats: StatItem[] = [
    {
      icon: Briefcase,
      value: "50K",
      label: "Active Jobs",
    },
    {
      icon: BarChart2,
      value: "12K",
      label: "Companies",
    },
    {
      icon: UserSearch,
      value: "2M",
      label: "Job Seekers",
    },
    {
      icon: Star,
      value: "97%",
      label: "Satisfication Rate",
    },
  ]

  return (
    <div className="w-full max-w-5xl mx-auto px-4 sm:px-6">
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
        {stats.map((stat, idx) => {
          const Icon = stat.icon
          return (
            <div
              key={idx}
              className="group relative overflow-hidden rounded-2xl border border-white/[0.08] bg-[#0c0d14]/90 backdrop-blur-md p-6 sm:p-7 flex flex-col justify-between hover:border-white/20 hover:bg-[#10121d]/95 transition-all duration-300 shadow-xl min-h-[150px] sm:min-h-[165px] text-left"
            >
              <div>
                <Icon className="size-5 text-neutral-300 stroke-[1.5] group-hover:text-white transition-colors" />
              </div>
              <div className="mt-8 sm:mt-10">
                <div className="text-3xl sm:text-4xl font-bold tracking-tight text-white mb-1">
                  {stat.value}
                </div>
                <div className="text-xs sm:text-sm text-neutral-400 font-normal">
                  {stat.label}
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
