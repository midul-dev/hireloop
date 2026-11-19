"use client";

import React, { Suspense, useEffect, useState } from "react";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import {
  Building2,
  MapPin,
  Calendar,
  Globe,
  ChevronDown,
  ArrowRight,
  ChevronRight,
  CheckCircle2,
  Loader2,
} from "lucide-react";
import { toast } from "sonner";
import { updateJob } from "@/lib/actions";
import { IJobs, IJobsFromForm } from "@/types/jobTypes";

type JobType = "Full-time" | "Part-time" | "Contract" | "Internship";

interface UpdateJobsProps {
  job?: IJobs;
  jobId?: string;
}

export default function UpdateJobsContent({ job, jobId }: UpdateJobsProps) {
  const router = useRouter();

  const [currentJob, setCurrentJob] = useState<IJobs | undefined>(job);
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [jobType, setJobType] = useState<JobType>(
    (job?.jobType as JobType) || "Full-time"
  );
  const [isRemote, setIsRemote] = useState<boolean>(
    job?.isRemote ? String(job.isRemote).toLowerCase() === "true" : true
  );
  const [success, setSuccess] = useState<boolean>(false);

  const targetId = job?._id || jobId || currentJob?._id;

  useEffect(() => {
    if (job) {
      setCurrentJob(job);
      if (job.jobType) setJobType(job.jobType as JobType);
      if (job.isRemote !== undefined) {
        setIsRemote(String(job.isRemote).toLowerCase() === "true");
      }
    } else if (jobId) {
      fetch(`${process.env.NEXT_PUBLIC_API_URL}/job/${jobId}`)
        .then((res) => (res.ok ? res.json() : null))
        .then((data) => {
          if (data && data._id) {
            setCurrentJob(data);
            if (data.jobType) setJobType(data.jobType as JobType);
            if (data.isRemote !== undefined) {
              setIsRemote(String(data.isRemote).toLowerCase() === "true");
            }
          }
        })
        .catch((err) => console.error("Error loading job:", err));
    }
  }, [job, jobId]);

  // Handle form submission using FormData API
  const handleUpdate = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    const form = e.currentTarget;
    const formData = new FormData(form);

    // Explicitly set dynamic values
    formData.set("jobType", jobType);
    formData.set("isRemote", isRemote ? "true" : "false");

    const updatedJob: IJobsFromForm = Object.fromEntries(formData.entries());
    const finalId = targetId || currentJob?._id || job?._id || jobId;

    if (!finalId) {
      toast.error("Job ID not found. Unable to update.");
      setIsSubmitting(false);
      return;
    }

    try {
      const result = await updateJob(finalId, updatedJob);

      if (
        result.ok ||
        result.acknowledged ||
        result.matchedCount > 0 ||
        result.modifiedCount !== undefined
      ) {
        toast.success("Job updated successfully!");
        setSuccess(true);
        router.push("/dashboard/recruiter/jobs");
        router.refresh();
      } else {
        toast.error(result.message || result.error || "Failed to update job!");
      }
    } catch {
      toast.error("Something went wrong!");
    } finally {
      setIsSubmitting(false);
    }
  };

  const jobTypeOptions: JobType[] = [
    "Full-time",
    "Part-time",
    "Contract",
    "Internship",
  ];



  return (
    <div className="max-w-4xl mx-auto pb-20 space-y-7">
      {/* Success Banner */}
      {success && (
        <div className="p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-between gap-3 text-emerald-400 text-sm animate-in fade-in">
          <div className="flex items-center gap-2.5">
            <CheckCircle2 className="size-5 shrink-0" />
            <span>Job updated and published successfully! Redirecting...</span>
          </div>
          <button
            type="button"
            onClick={() => setSuccess(false)}
            className="text-xs underline underline-offset-4 hover:text-emerald-300 cursor-pointer"
          >
            Dismiss
          </button>
        </div>
      )}

      {/* Main Form Wrapping Header & Sections */}
      <form
        key={currentJob?._id || "job-form"}
        id="update-job-form"
        onSubmit={handleUpdate}
        className="space-y-8"
      >
        {/* Top Header Row matching Reference Image */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 pt-1">
          <div className="space-y-1">
            {/* Breadcrumb */}
            <div className="flex items-center gap-1.5 text-xs">
              <Link
                href="/dashboard/recruiter/jobs"
                className="text-neutral-400 hover:text-white transition-colors"
              >
                Manage Jobs
              </Link>
              <ChevronRight className="size-3 text-neutral-600" />
              <span className="text-[#8c82ff] font-medium">
                Update Listing
              </span>
            </div>

            {/* Title */}
            <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-white">
              Update Job Post
            </h1>

            {/* Subtitle */}
            <p className="text-xs sm:text-sm text-neutral-400">
              Update position specifications, compensation, or requirements across your organization.
            </p>
          </div>

          {/* Top Right Save Button */}
          <div className="shrink-0">
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full sm:w-auto h-10 px-5 rounded-xl bg-[#5c54f5] hover:bg-[#4f46e5] disabled:opacity-50 text-white font-semibold text-sm shadow-[0_0_20px_rgba(92,84,245,0.4)] transition-all duration-150 hover:scale-[1.02] active:scale-[0.98] flex items-center justify-center gap-2 cursor-pointer"
            >
              {isSubmitting ? (
                <>
                  <div className="size-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                  <span>Updating...</span>
                </>
              ) : (
                <>
                  <span>Save Changes</span>
                  <ArrowRight className="size-4" />
                </>
              )}
            </button>
          </div>
        </div>

        {/* 1. Basic Information */}
        <div className="space-y-4">
          <div className="flex items-center gap-2.5">
            <span className="size-2 rounded-full bg-[#5c54f5] shadow-[0_0_8px_rgba(92,84,245,0.8)]" />
            <h2 className="text-sm font-semibold text-white tracking-wide">
              1. Basic Information
            </h2>
          </div>

          <div className="space-y-4">
            {/* Job Title */}
            <div className="space-y-1.5">
              <label className="text-xs font-medium text-neutral-300">
                Job Title <span className="text-[#5c54f5]">*</span>
              </label>
              <input
                type="text"
                name="title"
                required
                defaultValue={currentJob?.title || ""}
                placeholder="e.g. Frontend Developer"
                className="w-full h-11 px-3.5 rounded-xl border border-white/10 bg-[#0e0f17] text-sm text-white placeholder:text-neutral-500 focus:outline-none focus:ring-2 focus:ring-indigo-500/30 focus:border-indigo-500/80 transition-colors"
              />
            </div>

            {/* Company Name & Job Category */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* Company Name */}
              <div className="space-y-1.5">
                <label className="text-xs font-medium text-neutral-300">
                  Company Name <span className="text-[#5c54f5]">*</span>
                </label>
                <div className="relative">
                  <Building2 className="absolute left-3.5 top-1/2 -translate-y-1/2 size-4 text-neutral-500 pointer-events-none" />
                  <input
                    type="text"
                    name="company"
                    required
                    defaultValue={currentJob?.company || ""}
                    placeholder="e.g. HirePulse Network"
                    className="w-full h-11 pl-10 pr-3.5 rounded-xl border border-white/10 bg-[#0e0f17] text-sm text-white placeholder:text-neutral-500 focus:outline-none focus:ring-2 focus:ring-indigo-500/30 focus:border-indigo-500/80 transition-colors"
                  />
                </div>
              </div>

              {/* Job Category */}
              <div className="space-y-1.5">
                <label className="text-xs font-medium text-neutral-300">
                  Job Category <span className="text-[#5c54f5]">*</span>
                </label>
                <div className="relative">
                  <select
                    name="category"
                    required
                    defaultValue={currentJob?.category || "Engineering & Tech"}
                    className="w-full h-11 pl-3.5 pr-10 rounded-xl border border-white/10 bg-[#0e0f17] text-sm text-white focus:outline-none focus:ring-2 focus:ring-indigo-500/30 focus:border-indigo-500/80 transition-colors appearance-none cursor-pointer"
                  >
                    <option
                      value="Engineering & Tech"
                      className="bg-[#0e0f17] text-white"
                    >
                      Engineering & Tech
                    </option>
                    <option
                      value="Product & Design"
                      className="bg-[#0e0f17] text-white"
                    >
                      Product & Design
                    </option>
                    <option
                      value="Marketing & Growth"
                      className="bg-[#0e0f17] text-white"
                    >
                      Marketing & Growth
                    </option>
                    <option
                      value="Sales & Operations"
                      className="bg-[#0e0f17] text-white"
                    >
                      Sales & Operations
                    </option>
                    <option
                      value="Customer Success"
                      className="bg-[#0e0f17] text-white"
                    >
                      Customer Success
                    </option>
                  </select>
                  <ChevronDown className="absolute right-3.5 top-1/2 -translate-y-1/2 size-4 text-neutral-400 pointer-events-none" />
                </div>
              </div>
            </div>

            {/* Job Type Segmented Tabs */}
            <div className="space-y-1.5">
              <label className="text-xs font-medium text-neutral-300">
                Job Type <span className="text-[#5c54f5]">*</span>
              </label>
              <input type="hidden" name="jobType" value={jobType} />
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-2.5">
                {jobTypeOptions.map((type) => {
                  const isSelected = jobType === type;
                  return (
                    <button
                      key={type}
                      type="button"
                      onClick={() => setJobType(type)}
                      className={`h-11 rounded-xl text-xs sm:text-sm font-medium transition-all duration-150 flex items-center justify-center cursor-pointer select-none ${
                        isSelected
                          ? "border border-indigo-500/60 bg-[#161726] text-white shadow-[0_0_12px_rgba(92,84,245,0.25)]"
                          : "border border-white/[0.08] bg-[#0e0f17] text-neutral-400 hover:text-white hover:bg-white/[0.03]"
                      }`}
                    >
                      {type}
                    </button>
                  );
                })}
              </div>
            </div>
          </div>
        </div>

        {/* 2. Location, Compensation & Timeline */}
        <div className="space-y-4">
          <div className="flex items-center gap-2.5">
            <span className="size-2 rounded-full bg-[#5c54f5] shadow-[0_0_8px_rgba(92,84,245,0.8)]" />
            <h2 className="text-sm font-semibold text-white tracking-wide">
              2. Location, Compensation & Timeline
            </h2>
          </div>

          <div className="space-y-4">
            {/* Remote Work Allowed Card */}
            <div className="rounded-xl border border-white/10 bg-[#0e0f17] p-3.5 sm:p-4 flex items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <div className="size-9 rounded-lg bg-white/[0.05] border border-white/[0.08] flex items-center justify-center text-neutral-300 shrink-0">
                  <Globe className="size-4.5" />
                </div>
                <div>
                  <p className="text-xs sm:text-sm font-semibold text-white">
                    Remote Work Allowed (isRemote)
                  </p>
                  <p className="text-[11px] sm:text-xs text-neutral-400">
                    Enable worldwide or distributed candidate applications
                  </p>
                </div>
              </div>

              {/* Toggle Switch */}
              <input
                type="hidden"
                name="isRemote"
                value={isRemote ? "true" : "false"}
              />
              <button
                type="button"
                role="switch"
                aria-checked={isRemote}
                onClick={() => setIsRemote(!isRemote)}
                className={`relative inline-flex h-6 w-11 shrink-0 cursor-pointer rounded-full p-0.5 transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-indigo-500/40 ${
                  isRemote ? "bg-[#5c54f5]" : "bg-neutral-700"
                }`}
              >
                <span
                  className={`pointer-events-none inline-block size-5 transform rounded-full bg-white shadow-md ring-0 transition duration-200 ease-in-out ${
                    isRemote ? "translate-x-5" : "translate-x-0"
                  }`}
                />
              </button>
            </div>

            {/* Location & Application Deadline */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* Job Location */}
              <div className="space-y-1.5">
                <div className="flex items-center justify-between">
                  <label className="text-xs font-medium text-neutral-300">
                    Job Location (location)
                  </label>
                  <span className="text-[11px] text-neutral-500">Required</span>
                </div>
                <div className="relative">
                  <MapPin className="absolute left-3.5 top-1/2 -translate-y-1/2 size-4 text-neutral-500 pointer-events-none" />
                  <input
                    type="text"
                    name="location"
                    required
                    defaultValue={currentJob?.location || ""}
                    placeholder="New York, USA"
                    className="w-full h-11 pl-10 pr-3.5 rounded-xl border border-white/10 bg-[#0e0f17] text-sm text-white placeholder:text-neutral-500 focus:outline-none focus:ring-2 focus:ring-indigo-500/30 focus:border-indigo-500/80 transition-colors"
                  />
                </div>
              </div>

              {/* Application Deadline */}
              <div className="space-y-1.5">
                <label className="text-xs font-medium text-neutral-300">
                  Application Deadline (deadline)
                </label>
                <div className="relative">
                  <Calendar className="absolute left-3.5 top-1/2 -translate-y-1/2 size-4 text-neutral-500 pointer-events-none" />
                  <input
                    type="text"
                    name="deadline"
                    defaultValue={currentJob?.deadline || ""}
                    placeholder="05/30/2025"
                    className="w-full h-11 pl-10 pr-3.5 rounded-xl border border-white/10 bg-[#0e0f17] text-sm text-white placeholder:text-neutral-500 focus:outline-none focus:ring-2 focus:ring-indigo-500/30 focus:border-indigo-500/80 transition-colors"
                  />
                </div>
              </div>
            </div>

            {/* Salary Min, Max, Frequency */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {/* Min Salary */}
              <div className="space-y-1.5">
                <label className="text-xs font-medium text-neutral-300">
                  Min Salary / Rate
                </label>
                <div className="relative">
                  <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-neutral-400 font-medium text-sm pointer-events-none">
                    {currentJob?.salaryCurrency || "€"}
                  </span>
                  <input
                    type="text"
                    name="salaryMin"
                    defaultValue={currentJob?.salaryMin || "25"}
                    placeholder="25"
                    className="w-full h-11 pl-8 pr-3.5 rounded-xl border border-white/10 bg-[#0e0f17] text-sm text-white placeholder:text-neutral-500 focus:outline-none focus:ring-2 focus:ring-indigo-500/30 focus:border-indigo-500/80 transition-colors"
                  />
                  <input
                    type="hidden"
                    name="salaryCurrency"
                    value={currentJob?.salaryCurrency || "€"}
                  />
                </div>
              </div>

              {/* Max Salary */}
              <div className="space-y-1.5">
                <label className="text-xs font-medium text-neutral-300">
                  Max Salary / Rate
                </label>
                <div className="relative">
                  <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-neutral-400 font-medium text-sm pointer-events-none">
                    {currentJob?.salaryCurrency || "€"}
                  </span>
                  <input
                    type="text"
                    name="salaryMax"
                    defaultValue={currentJob?.salaryMax || "40"}
                    placeholder="40"
                    className="w-full h-11 pl-8 pr-3.5 rounded-xl border border-white/10 bg-[#0e0f17] text-sm text-white placeholder:text-neutral-500 focus:outline-none focus:ring-2 focus:ring-indigo-500/30 focus:border-indigo-500/80 transition-colors"
                  />
                </div>
              </div>

              {/* Frequency */}
              <div className="space-y-1.5">
                <label className="text-xs font-medium text-neutral-300">
                  Frequency
                </label>
                <div className="relative">
                  <select
                    name="frequency"
                    defaultValue={currentJob?.frequency || "per hour"}
                    className="w-full h-11 pl-3.5 pr-10 rounded-xl border border-white/10 bg-[#0e0f17] text-sm text-white focus:outline-none focus:ring-2 focus:ring-indigo-500/30 focus:border-indigo-500/80 transition-colors appearance-none cursor-pointer"
                  >
                    <option
                      value="per hour"
                      className="bg-[#0e0f17] text-white"
                    >
                      per hour
                    </option>
                    <option
                      value="per month"
                      className="bg-[#0e0f17] text-white"
                    >
                      per month
                    </option>
                    <option
                      value="per year"
                      className="bg-[#0e0f17] text-white"
                    >
                      per year
                    </option>
                  </select>
                  <ChevronDown className="absolute right-3.5 top-1/2 -translate-y-1/2 size-4 text-neutral-400 pointer-events-none" />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 3. Responsibilities & Requirements */}
        <div className="space-y-4">
          <div className="flex items-center gap-2.5">
            <span className="size-2 rounded-full bg-[#5c54f5] shadow-[0_0_8px_rgba(92,84,245,0.8)]" />
            <h2 className="text-sm font-semibold text-white tracking-wide">
              3. Responsibilities & Requirements
            </h2>
          </div>

          <div className="space-y-4">
            {/* Key Responsibilities */}
            <div className="space-y-1.5">
              <label className="text-xs font-medium text-neutral-300">
                Key Responsibilities <span className="text-[#5c54f5]">*</span>
              </label>
              <textarea
                name="responsibilities"
                required
                rows={4}
                defaultValue={currentJob?.responsibilities || ""}
                placeholder="Showcase your commitment to delivering exceptional user interfaces..."
                className="w-full rounded-xl border border-white/10 bg-[#0e0f17] p-3.5 text-sm text-white placeholder:text-neutral-500 focus:outline-none focus:ring-2 focus:ring-indigo-500/30 focus:border-indigo-500/80 transition-colors resize-y min-h-[100px] leading-relaxed"
              />
            </div>

            {/* Qualifications & Requirements */}
            <div className="space-y-1.5">
              <label className="text-xs font-medium text-neutral-300">
                Qualifications & Requirements{" "}
                <span className="text-[#5c54f5]">*</span>
              </label>
              <textarea
                name="requirements"
                required
                rows={5}
                defaultValue={currentJob?.requirements || ""}
                placeholder="• 3+ years of experience with React..."
                className="w-full rounded-xl border border-white/10 bg-[#0e0f17] p-3.5 text-sm text-white placeholder:text-neutral-500 focus:outline-none focus:ring-2 focus:ring-indigo-500/30 focus:border-indigo-500/80 transition-colors resize-y min-h-[120px] leading-relaxed"
              />
            </div>
          </div>
        </div>

        {/* Bottom Submit Action */}
        <div className="pt-2 flex items-center justify-end">
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full sm:w-auto h-11 px-7 rounded-xl bg-[#5c54f5] hover:bg-[#4f46e5] disabled:opacity-50 text-white font-semibold text-sm shadow-[0_0_24px_rgba(92,84,245,0.4)] transition-all duration-150 hover:scale-[1.01] active:scale-[0.99] flex items-center justify-center gap-2 cursor-pointer"
          >
            {isSubmitting ? (
              <>
                <div className="size-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                <span>Updating Job Listing...</span>
              </>
            ) : (
              <>
                <span>Update Job Listing</span>
                <ArrowRight className="size-4" />
              </>
            )}
          </button>
        </div>
      </form>
    </div>
  );
}

 