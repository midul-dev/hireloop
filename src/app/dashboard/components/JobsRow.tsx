'use client'

import { formatTimeAgo, getCategoryStyle } from "@/lib/jobHealper";
import { IJobs } from "@/types/jobTypes";
import { ChevronRight, Globe, MapPin, MoreVertical, Pencil, Plus, Trash2, Users } from "lucide-react";
import Link from "next/link";

const JobsRow = ({jobs}: {jobs:IJobs[]}) => {


 

  // Handle job deletion
//   const handleDelete = async (id: string, title: string) => {
//     try {
//       await fetch(`/api/jobs?id=${id}`, { method: "DELETE" })
//     } catch (e) {
//       console.warn("API delete failed, removing locally:", e)
//     }
//     setJobs((prev) => prev.filter((j) => j.id !== id))
//     toast.success(`"${title}" has been removed.`)
//   }

  // Handle quick update save
//   const handleSaveUpdate = (e: React.FormEvent) => {
//     e.preventDefault()
//     if (!editingJob) return
//     setJobs((prev) => prev.map((j) => (j.id === editingJob.id ? editingJob : j)))
//     toast.success(`"${editingJob.title}" updated successfully!`)
//     setEditingJob(null)
//   }

  

  return (
    <div className="w-full pb-20 space-y-7">
      {/* Top Header Row matching Reference Image */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 pt-1">
        <div className="space-y-1">
          {/* Breadcrumb */}
          <div className="flex items-center gap-1.5 text-xs">
            <span className="text-neutral-400">Manage Jobs</span>
            <ChevronRight className="size-3 text-neutral-600" />
            <span className="text-[#8c82ff] font-medium">Job Listings & Postings</span>
          </div>

          {/* Title */}
          <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-white">
            Manage Job Posts
          </h1>

          {/* Subtitle */}
          <p className="text-xs sm:text-sm text-neutral-400 max-w-2xl">
            Review live listings, monitor applicants, and update job details across your organization.
          </p>
        </div>

        {/* Top Right Action Button: + + New Job Post */}
        <div className="shrink-0">
          <Link
            href="/dashboard/recruiter/add-jobs"
            className="h-10 px-5 rounded-full bg-[#5c54f5] hover:bg-[#4f46e5] text-white font-semibold text-xs sm:text-sm shadow-[0_0_20px_rgba(92,84,245,0.4)] transition-all duration-150 hover:scale-[1.02] active:scale-[0.98] inline-flex items-center justify-center gap-1.5 cursor-pointer"
          >
            <Plus className="size-4 shrink-0" />
            <span>+ New Job Post</span>
          </Link>
        </div>
      </div>

      {/* Table Container Card */}
      <div className="w-full rounded-2xl border border-white/[0.08] bg-[#0c0d14]/90 backdrop-blur-xl shadow-2xl overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse min-w-[980px]">
            {/* Table Header */}
            <thead>
              <tr className="border-b border-white/[0.06] bg-white/[0.01]">
                <th className="py-4 px-5 text-[11px] font-semibold tracking-wider text-neutral-400 uppercase">
                  JOB TITLE & DEPT
                </th>
                <th className="py-4 px-4 text-[11px] font-semibold tracking-wider text-neutral-400 uppercase">
                  COMPANY & LOCATION
                </th>
                <th className="py-4 px-4 text-[11px] font-semibold tracking-wider text-neutral-400 uppercase">
                  TYPE
                </th>
                <th className="py-4 px-4 text-[11px] font-semibold tracking-wider text-neutral-400 uppercase">
                  COMPENSATION
                </th>
                <th className="py-4 px-4 text-[11px] font-semibold tracking-wider text-neutral-400 uppercase">
                  APPLICANTS
                </th>
                <th className="py-4 px-4 text-[11px] font-semibold tracking-wider text-neutral-400 uppercase">
                  STATUS
                </th>
                <th className="py-4 px-4 text-[11px] font-semibold tracking-wider text-neutral-400 uppercase">
                  DEADLINE
                </th>
                <th className="py-4 px-5 text-[11px] font-semibold tracking-wider text-neutral-400 uppercase text-right">
                  ACTIONS
                </th>
              </tr>
            </thead>

            {/* Table Body */}
            <tbody className="divide-y divide-white/[0.04]">
              {jobs.map((job) =>{
const { icon: CategoryIcon, bg, text } = getCategoryStyle(job.category)
                return (
                <tr
                  key={job._id}
                  className="hover:bg-white/[0.02] transition-colors group"
                >
                  {/* 1. Job Title & Dept */}
                  <td className="py-4 px-5 align-middle">
                    <div className="flex items-center gap-3">
                      <CategoryIcon className="size-5 shrink-0" />
                      <div className="min-w-0">
                        <p className="text-sm font-semibold text-white tracking-tight leading-snug">
                          {job.title}
                        </p>
                        <p className={`${text} ${bg}`}>
                          {job.category}
                        </p>
                      </div>
                    </div>
                  </td>

                  {/* 2. Company & Location */}
                  <td className="py-4 px-4 align-middle">
                    <div className="space-y-0.5">
                      <p className="text-xs font-medium text-neutral-300">
                        {job.company}
                      </p>
                      <div className="flex items-center gap-1.5 text-[11px] text-neutral-400">
                        {job.isRemote ? (
                          <Globe className="size-3.5 text-neutral-500 shrink-0" />
                        ) : (
                          <MapPin className="size-3.5 text-neutral-500 shrink-0" />
                        )}
                        <span className="truncate max-w-[170px]">{job.location}</span>
                      </div>
                    </div>
                  </td>

                  {/* 3. Type */}
                  <td className="py-4 px-4 align-middle">
                    <span className="inline-block px-3 py-1 rounded-full text-xs font-medium bg-white/[0.04] border border-white/[0.08] text-neutral-300">
                      {job.jobType}
                    </span>
                  </td>

                  {/* 4. Compensation */}
                  <td className="py-4 px-4 align-middle">
                    <span className="text-xs sm:text-sm font-medium text-white whitespace-nowrap">
                      {`${job.salaryMin}${job.salaryCurrency}-${job.salaryMax}${job.salaryCurrency} / ${job.frequency}`}
                    </span>
                  </td>

                  {/* 5. Applicants */}
                  <td className="py-4 px-4 align-middle">
                    <div className="flex items-center gap-2 text-xs font-semibold text-[#8c82ff] whitespace-nowrap">
                      <Users className="size-4 shrink-0 text-[#8c82ff]" />
                      <span>10 Candidates</span>
                    </div>
                  </td>

                  {/* 6. Status */}
                  <td className="py-4 px-4 align-middle">
                    {job.status === "Active" ? (
                      <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-medium bg-emerald-500/10 border border-emerald-500/20 text-emerald-400">
                        <span className="size-1.5 rounded-full bg-emerald-400" />
                        <span>Active</span>
                      </span>
                    ) : (
                      <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-medium bg-neutral-800/80 border border-neutral-700/60 text-neutral-400">
                        <span className="size-1.5 rounded-full bg-neutral-500" />
                        <span>Expired</span>
                      </span>
                    )}
                  </td>

                  {/* 7. Deadline */}
                  <td className="py-4 px-4 align-middle">
                    <div className="space-y-0.5 whitespace-nowrap">
                      <p className="text-xs font-medium text-white">
                        {job.deadline}
                      </p>
                      <p className="text-[11px] text-neutral-500">
                        {formatTimeAgo(job.createdAt)}
                      </p>
                    </div>
                  </td>

                  {/* 8. Actions */}
                  <td className="py-4 px-5 align-middle text-right">
                    <div className="flex items-center justify-end gap-2">
                      {/* Update Button */}
                      <button
                        type="button"
                        className="h-8 px-3 rounded-xl bg-[#5c54f5]/15 hover:bg-[#5c54f5]/25 border border-[#5c54f5]/30 text-[#c7d2fe] hover:text-white text-xs font-medium flex items-center gap-1.5 transition-colors cursor-pointer"
                        title="Update job"
                      >
                        <Pencil className="size-3.5" />
                        <span>Update</span>
                      </button>

                      {/* Delete Button */}
                      <button
                        type="button"
                        className="size-8 rounded-xl bg-white/[0.04] hover:bg-red-500/15 border border-white/[0.08] hover:border-red-500/30 text-neutral-400 hover:text-red-400 flex items-center justify-center transition-colors cursor-pointer"
                        title="Delete job"
                      >
                        <Trash2 className="size-3.5" />
                      </button>

                      {/* More Menu */}
                      <button
                        type="button"
                        className="size-8 rounded-xl hover:bg-white/[0.05] text-neutral-400 hover:text-white flex items-center justify-center transition-colors cursor-pointer"
                        title="More options"
                      >
                        <MoreVertical className="size-4" />
                      </button>
                    </div>
                  </td>
                </tr>
              )})}
            </tbody>
          </table>
        </div>
      </div>

     
    </div>
  )
};

export default JobsRow;