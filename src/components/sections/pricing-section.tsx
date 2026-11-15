"use client"

import React, { useState } from "react"
import { Crown, BarChart2, Zap, Plus, ArrowRight } from "lucide-react"

export function PricingSection() {
  const [billingCycle, setBillingCycle] = useState<"monthly" | "yearly">("monthly")

  const plans = [
    {
      name: "Starter",
      icon: Crown,
      monthlyPrice: 0,
      yearlyPrice: 0,
      subtitle: "Start building your insights hub:",
      features: [
        "Daily AI match brief (top 5)",
        "Verified salary bands",
        "Company insight dashboards",
        "1-click apply, unlimited",
      ],
      ctaText: "Choose This Plan",
      highlighted: false,
    },
    {
      name: "Growth",
      icon: BarChart2,
      monthlyPrice: 17,
      yearlyPrice: 13,
      subtitle: "Start building your insights hub:",
      features: [
        "Daily AI match brief (top 5)",
        "Verified salary bands",
        "Company insight dashboards",
        "1-click apply, unlimited",
      ],
      ctaText: "Choose This Plan",
      highlighted: true,
    },
    {
      name: "Premium",
      icon: Zap,
      monthlyPrice: 99,
      yearlyPrice: 74,
      subtitle: "Start building your insights hub:",
      features: [
        "Everything in Pro",
        "Multi-profile career portfolios",
        "Shared talent rooms",
        "Recruiter view (read-only)",
      ],
      ctaText: "Choose This Plan",
      highlighted: false,
    },
  ]

  return (
    <section id="pricing" className="relative w-full py-20 sm:py-28 overflow-hidden bg-[#050508]">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[850px] h-[550px] bg-indigo-950/20 rounded-full filter blur-[150px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center">
        {/* Section Kicker */}
        <div className="inline-flex items-center justify-center gap-2 mb-4 select-none">
          <span className="w-1.5 h-1.5 rounded-xs bg-[#5c54f5]" />
          <span className="text-[11px] sm:text-xs font-semibold tracking-[0.2em] uppercase text-neutral-400">
            PRICING
          </span>
          <span className="w-1.5 h-1.5 rounded-xs bg-[#5c54f5]" />
        </div>

        {/* Section Heading */}
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white text-center mb-8 sm:mb-10 leading-[1.15]">
          Pay for the leverage,
          <br />
          not the listings
        </h2>

        {/* Billing Cycle Pill Switch */}
        <div className="inline-flex items-center p-1 rounded-full border border-white/10 bg-[#0d0e17] backdrop-blur-md mb-12 sm:mb-14">
          <button
            type="button"
            onClick={() => setBillingCycle("monthly")}
            className={`px-5 py-1.5 rounded-full text-xs font-semibold transition-all duration-200 cursor-pointer ${
              billingCycle === "monthly"
                ? "bg-white text-black shadow-sm"
                : "text-neutral-400 hover:text-white"
            }`}
          >
            Monthly
          </button>
          <button
            type="button"
            onClick={() => setBillingCycle("yearly")}
            className={`inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full text-xs font-semibold transition-all duration-200 cursor-pointer ${
              billingCycle === "yearly"
                ? "bg-white text-black shadow-sm"
                : "text-neutral-400 hover:text-white"
            }`}
          >
            <span>Yearly</span>
            <span className="px-2 py-0.5 rounded-full bg-[#d946ef] text-white text-[10px] font-bold">
              25%
            </span>
          </button>
        </div>

        {/* Pricing Cards Grid (3 cards) */}
        <div className="w-full max-w-5xl lg:max-w-6xl grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
          {plans.map((plan) => {
            const Icon = plan.icon
            const price = billingCycle === "monthly" ? plan.monthlyPrice : plan.yearlyPrice

            return (
              <div
                key={plan.name}
                className={`rounded-2xl border p-6 sm:p-7 flex flex-col justify-between transition-all duration-300 ${
                  plan.highlighted
                    ? "border-white/20 bg-[#0d0e17]/95 shadow-[0_0_40px_rgba(0,0,0,0.8)]"
                    : "border-white/[0.08] bg-[#0c0d14]/90"
                }`}
              >
                <div>
                  {/* Top Row: [Icon] PlanName ... $Price /month */}
                  <div className="flex items-center justify-between mb-6 sm:mb-7">
                    <div className="flex items-center gap-2.5">
                      <div className="size-8 rounded-lg bg-white/[0.05] border border-white/10 flex items-center justify-center text-fuchsia-400">
                        <Icon className="size-4" />
                      </div>
                      <span className="font-bold text-white text-base sm:text-lg tracking-tight">
                        {plan.name}
                      </span>
                    </div>
                    <div className="flex items-baseline gap-1">
                      <span className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
                        ${price}
                      </span>
                      <span className="text-xs text-neutral-400 font-normal">
                        /month
                      </span>
                    </div>
                  </div>

                  {/* Subtitle */}
                  <p className="text-xs sm:text-sm font-normal text-neutral-300 mb-5">
                    {plan.subtitle}
                  </p>

                  {/* Features List with '+' icon */}
                  <ul className="space-y-3.5 mb-8">
                    {plan.features.map((feature, idx) => (
                      <li
                        key={idx}
                        className="flex items-center gap-2.5 text-xs sm:text-sm text-neutral-400 font-normal"
                      >
                        <div className="size-4 rounded bg-white/[0.08] flex items-center justify-center shrink-0 text-neutral-300">
                          <Plus className="size-2.5" strokeWidth={2.5} />
                        </div>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Bottom CTA Button */}
                <button
                  type="button"
                  className={`w-full px-4 sm:px-5 py-3 rounded-xl text-xs sm:text-sm font-medium flex items-center justify-between transition-all duration-200 cursor-pointer ${
                    plan.highlighted
                      ? "bg-white hover:bg-neutral-200 text-black font-semibold shadow-md active:scale-[0.99]"
                      : "bg-[#232429] hover:bg-[#2d2f38] text-neutral-200 border border-white/[0.08] active:scale-[0.99]"
                  }`}
                >
                  <span>{plan.ctaText}</span>
                  <ArrowRight className="size-4" />
                </button>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
