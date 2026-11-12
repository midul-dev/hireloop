import React from "react"
import { Briefcase, Building2, Users, Award } from "lucide-react"
import { Card } from "@/components/ui/card"

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
      icon: Building2,
      value: "12K",
      label: "Companies",
    },
    {
      icon: Users,
      value: "2M",
      label: "Job Seekers",
    },
    {
      icon: Award,
      value: "97%",
      label: "Satisfaction Rate",
    },
  ]

  return (
    <div className="w-full max-w-5xl mx-auto px-4 sm:px-6">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
        {stats.map((stat, idx) => {
          const Icon = stat.icon
          return (
            <Card
              key={idx}
              className="group relative overflow-hidden rounded-2xl border border-white/[0.08] bg-[#0c0d14]/85 backdrop-blur-md p-6 hover:border-indigo-500/40 hover:bg-[#10121d]/90 transition-all duration-300 shadow-xl hover:-translate-y-1"
            >
              {/* Subtle hover gradient highlight */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-indigo-500/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

              <div className="flex flex-col justify-between h-full space-y-4">
                <div className="size-8 rounded-lg bg-white/[0.04] border border-white/[0.06] flex items-center justify-center text-neutral-300 group-hover:text-indigo-400 group-hover:border-indigo-500/30 transition-colors">
                  <Icon className="size-4" />
                </div>
                <div>
                  <div className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-indigo-200 transition-all">
                    {stat.value}
                  </div>
                  <div className="text-xs sm:text-sm text-neutral-400 mt-1 font-medium">
                    {stat.label}
                  </div>
                </div>
              </div>
            </Card>
          )
        })}
      </div>
    </div>
  )
}
