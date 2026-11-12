"use client"

import React, { useState } from "react"
import { MapPin, Briefcase, DollarSign, ArrowRight } from "lucide-react"
import { SectionKicker } from "@/components/shared/section-kicker"
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ApplyModal, type JobListing } from "@/components/modals/apply-modal"

interface JobsSectionProps {
  searchQuery?: string
}

export function JobsSection({ searchQuery = "" }: JobsSectionProps) {
  const [selectedJob, setSelectedJob] = useState<JobListing | null>(null)
  const [modalOpen, setModalOpen] = useState(false)
  const [showAll, setShowAll] = useState(false)

  const initialJobs: JobListing[] = [
    {
      id: "job-1",
      title: "Frontend Developer",
      company: "Acme Tech",
      description:
        "Elevate your career move to accelerate and scale your engineering trajectory at world-class teams.",
      location: "New York, USA",
      type: "Hybrid",
      salary: "$120-140k/Year",
    },
    {
      id: "job-2",
      title: "Frontend Developer",
      company: "Starlight AI",
      description:
        "Elevate your career move to accelerate and scale your engineering trajectory at world-class teams.",
      location: "New York, USA",
      type: "Hybrid",
      salary: "$120-140k/Year",
    },
    {
      id: "job-3",
      title: "Frontend Developer",
      company: "Veloce Systems",
      description:
        "Elevate your career move to accelerate and scale your engineering trajectory at world-class teams.",
      location: "New York, USA",
      type: "Hybrid",
      salary: "$120-140k/Year",
    },
    {
      id: "job-4",
      title: "Frontend Developer",
      company: "Linear Dynamics",
      description:
        "Elevate your career move to accelerate and scale your engineering trajectory at world-class teams.",
      location: "New York, USA",
      type: "Hybrid",
      salary: "$120-140k/Year",
    },
    {
      id: "job-5",
      title: "Frontend Developer",
      company: "Prism Cloud",
      description:
        "Elevate your career move to accelerate and scale your engineering trajectory at world-class teams.",
      location: "New York, USA",
      type: "Hybrid",
      salary: "$120-140k/Year",
    },
    {
      id: "job-6",
      title: "Frontend Developer",
      company: "Nexus Labs",
      description:
        "Elevate your career move to accelerate and scale your engineering trajectory at world-class teams.",
      location: "New York, USA",
      type: "Hybrid",
      salary: "$120-140k/Year",
    },
    {
      id: "job-7",
      title: "Staff UI/UX Designer",
      company: "Aetherial",
      description:
        "Lead human-centered design initiatives across global distributed computing platforms.",
      location: "San Francisco, CA",
      type: "Remote",
      salary: "$150-180k/Year",
    },
    {
      id: "job-8",
      title: "DevOps & Cloud Engineer",
      company: "Hyperion Core",
      description:
        "Architect mission-critical multi-region Kubernetes clusters with 99.999% uptime.",
      location: "Austin, TX",
      type: "Remote",
      salary: "$140-165k/Year",
    },
    {
      id: "job-9",
      title: "Fullstack Platform Engineer",
      company: "OmniLayer",
      description:
        "Build scalable real-time messaging pipelines and low-latency client applications.",
      location: "London, UK",
      type: "Hybrid",
      salary: "$130-155k/Year",
    },
  ]

  // Filter jobs based on search if query is provided
  const filteredJobs = searchQuery
    ? initialJobs.filter(
        (job) =>
          job.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
          job.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
          job.location.toLowerCase().includes(searchQuery.toLowerCase()) ||
          job.company.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : initialJobs

  const displayedJobs = showAll ? filteredJobs : filteredJobs.slice(0, 6)

  const handleApplyClick = (job: JobListing) => {
    setSelectedJob(job)
    setModalOpen(true)
  }

  return (
    <section id="jobs" className="relative w-full py-20 sm:py-28 overflow-hidden">
      {/* Background radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-indigo-950/20 rounded-full filter blur-[140px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center">
        {/* Section Kicker */}
        <SectionKicker>SMART JOB DISCOVERY</SectionKicker>

        {/* Section Heading */}
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white text-center mb-14 max-w-2xl leading-tight">
          The roles you&apos;d never find by searching
        </h2>

        {/* Grid of Job Cards (3 columns x 2 rows) */}
        <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {displayedJobs.map((job) => (
            <Card
              key={job.id}
              className="group relative rounded-2xl border border-white/[0.08] bg-[#0c0d14]/75 backdrop-blur-md p-6 hover:border-indigo-500/40 hover:bg-[#10121d]/90 transition-all duration-300 shadow-lg hover:-translate-y-1 flex flex-col justify-between"
            >
              <div>
                <CardHeader className="p-0 mb-4">
                  <CardTitle className="text-xl font-bold text-white group-hover:text-indigo-200 transition-colors">
                    {job.title}
                  </CardTitle>
                  <CardDescription className="text-neutral-400 text-sm mt-2 line-clamp-2 leading-relaxed">
                    {job.description}
                  </CardDescription>
                </CardHeader>

                <CardContent className="p-0 space-y-2.5 mb-6 text-xs text-neutral-400">
                  <div className="flex items-center gap-2">
                    <MapPin className="size-3.5 text-neutral-500 shrink-0" />
                    <span>{job.location}</span>
                    <span className="text-neutral-600">·</span>
                    <Briefcase className="size-3.5 text-neutral-500 shrink-0" />
                    <span>{job.type}</span>
                  </div>
                  <div className="flex items-center gap-2 font-medium text-neutral-300">
                    <DollarSign className="size-3.5 text-emerald-400 shrink-0" />
                    <span>{job.salary}</span>
                  </div>
                </CardContent>
              </div>

              <CardFooter className="p-0 pt-2 border-t border-white/[0.06] flex items-center justify-between">
                <button
                  type="button"
                  onClick={() => handleApplyClick(job)}
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-neutral-300 group-hover:text-white transition-colors cursor-pointer"
                >
                  Apply Now
                  <ArrowRight className="size-3.5 transition-transform group-hover:translate-x-1 text-indigo-400" />
                </button>
              </CardFooter>
            </Card>
          ))}
        </div>

        {/* View all job opens Button */}
        <Button
          onClick={() => setShowAll(!showAll)}
          className="rounded-full bg-white text-black hover:bg-neutral-200 font-semibold px-8 py-2.5 text-xs sm:text-sm tracking-wide shadow-xl transition-all duration-300 hover:scale-105 active:scale-95"
        >
          {showAll ? "Show less jobs" : "View all job opens"}
        </Button>
      </div>

      {/* Quick Apply Dialog */}
      <ApplyModal
        job={selectedJob}
        open={modalOpen}
        onOpenChange={setModalOpen}
      />
    </section>
  )
}
