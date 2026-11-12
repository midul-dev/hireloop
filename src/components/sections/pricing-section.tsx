"use client"

import React, { useState } from "react"
import { Check, Compass, Zap, Crown, ArrowRight } from "lucide-react"
import { SectionKicker } from "@/components/shared/section-kicker"
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export function PricingSection() {
  const [billingCycle, setBillingCycle] = useState<"monthly" | "yearly">("monthly")

  const plans = [
    {
      name: "Starter",
      icon: Compass,
      monthlyPrice: 0,
      yearlyPrice: 0,
      subtitle: "Start building your neighborhood",
      features: [
        "Apply up to 5 jobs daily",
        "Basic company insights",
        "Standard email support",
        "Access to public job boards",
      ],
      ctaText: "Choose This Plan",
      highlighted: false,
    },
    {
      name: "Growth",
      icon: Zap,
      monthlyPrice: 17,
      yearlyPrice: 14,
      subtitle: "Start building your neighborhood",
      features: [
        "Apply to unlimited jobs daily",
        "Full company insights",
        "Priority recruiter application",
        "Dedicated career advisor",
        "Resume review & AI optimization",
      ],
      ctaText: "Choose This Plan",
      highlighted: true,
    },
    {
      name: "Premium",
      icon: Crown,
      monthlyPrice: 99,
      yearlyPrice: 79,
      subtitle: "Start building your neighborhood",
      features: [
        "Everything in Growth",
        "1-on-1 executive mentorship",
        "Direct hiring manager intros",
        "Guaranteed interview invites",
        "Private compensation negotiation",
      ],
      ctaText: "Choose This Plan",
      highlighted: false,
    },
  ]

  return (
    <section id="pricing" className="relative w-full py-20 sm:py-28 overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[850px] h-[550px] bg-indigo-950/20 rounded-full filter blur-[150px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center">
        {/* Section Kicker */}
        <SectionKicker>PRICING</SectionKicker>

        {/* Section Heading */}
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white text-center mb-8 max-w-2xl leading-tight">
          Pay for the leverage, not the listings
        </h2>

        {/* Billing Cycle Pill Switch */}
        <div className="inline-flex items-center p-1.5 rounded-full border border-white/10 bg-[#0d0e17] backdrop-blur-md mb-14">
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
            <span className="px-2 py-0.5 rounded-full bg-purple-500/20 text-purple-300 text-[10px] font-bold border border-purple-500/30">
              -20%
            </span>
          </button>
        </div>

        {/* Pricing Cards Grid (3 cards) */}
        <div className="w-full max-w-5xl grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
          {plans.map((plan) => {
            const Icon = plan.icon
            const price = billingCycle === "monthly" ? plan.monthlyPrice : plan.yearlyPrice

            return (
              <Card
                key={plan.name}
                className={`relative rounded-2xl flex flex-col justify-between p-6 sm:p-8 transition-all duration-300 ${
                  plan.highlighted
                    ? "border-indigo-500/60 bg-[#0f111c] shadow-[0_0_40px_rgba(99,102,241,0.18)] scale-[1.02] md:-translate-y-2"
                    : "border-white/[0.08] bg-[#0c0d14]/80 hover:border-white/20 hover:bg-[#10121d]"
                }`}
              >
                {/* Popular Glow Indicator on Highlighted Card */}
                {plan.highlighted && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-0.5 rounded-full bg-indigo-600 text-white text-[10px] font-bold tracking-wider uppercase shadow-md">
                    Most Popular
                  </div>
                )}

                <div>
                  <CardHeader className="p-0 mb-6">
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-2">
                        <div
                          className={`size-8 rounded-lg flex items-center justify-center border ${
                            plan.highlighted
                              ? "bg-indigo-500/20 border-indigo-500/40 text-indigo-400"
                              : "bg-white/[0.04] border-white/[0.08] text-neutral-300"
                          }`}
                        >
                          <Icon className="size-4" />
                        </div>
                        <span className="font-bold text-white text-base">
                          {plan.name}
                        </span>
                      </div>
                      <div className="flex items-baseline gap-1">
                        <span className="text-3xl sm:text-4xl font-extrabold text-white">
                          ${price}
                        </span>
                        <span className="text-xs text-neutral-400">/mo</span>
                      </div>
                    </div>
                    <CardTitle className="text-xs font-normal text-neutral-400">
                      {plan.subtitle}
                    </CardTitle>
                  </CardHeader>

                  <CardContent className="p-0 mb-8">
                    <ul className="space-y-3">
                      {plan.features.map((feature, idx) => (
                        <li
                          key={idx}
                          className="flex items-start gap-2.5 text-xs text-neutral-300 leading-normal"
                        >
                          <div className="size-4 rounded-full bg-emerald-500/15 border border-emerald-500/30 flex items-center justify-center shrink-0 mt-0.5">
                            <Check className="size-2.5 text-emerald-400" />
                          </div>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </div>

                <CardFooter className="p-0 pt-4 border-t border-white/[0.06]">
                  {plan.highlighted ? (
                    <Button
                      className="w-full rounded-xl bg-white text-black hover:bg-neutral-200 font-semibold py-2.5 text-xs sm:text-sm tracking-wide shadow-lg transition-transform hover:scale-[1.02] active:scale-[0.98]"
                    >
                      {plan.ctaText}
                      <ArrowRight className="ml-1.5 size-3.5" />
                    </Button>
                  ) : (
                    <Button
                      variant="outline"
                      className="w-full rounded-xl border-white/10 bg-white/[0.03] hover:bg-white/[0.08] hover:border-white/20 text-white font-medium py-2.5 text-xs sm:text-sm transition-colors"
                    >
                      {plan.ctaText}
                    </Button>
                  )}
                </CardFooter>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
