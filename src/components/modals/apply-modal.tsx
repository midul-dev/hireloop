"use client"

import React, { useState } from "react"
import {
  Dialog,
  DialogPopup,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { CheckCircle2, Sparkles } from "lucide-react"

export interface JobListing {
  id: string
  title: string
  company: string
  description: string
  location: string
  type: string
  salary: string
}

interface ApplyModalProps {
  job: JobListing | null
  open: boolean
  onOpenChange: (open: boolean) => void
}

export function ApplyModal({ job, open, onOpenChange }: ApplyModalProps) {
  const [submitted, setSubmitted] = useState(false)
  const [fullName, setFullName] = useState("")
  const [email, setEmail] = useState("")
  const [portfolio, setPortfolio] = useState("")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
    setTimeout(() => {
      setSubmitted(false)
      onOpenChange(false)
      setFullName("")
      setEmail("")
      setPortfolio("")
    }, 2000)
  }

  if (!job) return null

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogPopup className="max-w-md">
        {submitted ? (
          <div className="py-8 flex flex-col items-center text-center space-y-3">
            <div className="size-14 rounded-full bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400">
              <CheckCircle2 className="size-8" />
            </div>
            <DialogTitle className="text-xl">Application Submitted!</DialogTitle>
            <DialogDescription>
              Your profile has been forwarded to the hiring team at {job.company}. You will receive updates via email.
            </DialogDescription>
          </div>
        ) : (
          <>
            <DialogHeader>
              <div className="inline-flex items-center gap-1.5 text-xs text-indigo-400 font-medium mb-1">
                <Sparkles className="size-3.5" /> Quick Apply with HireLoop
              </div>
              <DialogTitle>Apply for {job.title}</DialogTitle>
              <DialogDescription>
                {job.company} · {job.location} · {job.salary}
              </DialogDescription>
            </DialogHeader>

            <form onSubmit={handleSubmit} className="space-y-4 pt-2">
              <div className="space-y-1.5">
                <label className="text-xs font-medium text-neutral-300">
                  Full Name
                </label>
                <Input
                  required
                  placeholder="e.g. Alex Morgan"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                />
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-medium text-neutral-300">
                  Email Address
                </label>
                <Input
                  required
                  type="email"
                  placeholder="alex@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-medium text-neutral-300">
                  LinkedIn or Portfolio URL
                </label>
                <Input
                  required
                  type="url"
                  placeholder="https://linkedin.com/in/alex"
                  value={portfolio}
                  onChange={(e) => setPortfolio(e.target.value)}
                />
              </div>

              <DialogFooter className="pt-4">
                <Button
                  type="button"
                  variant="outline"
                  onClick={() => onOpenChange(false)}
                  className="rounded-full border-white/10"
                >
                  Cancel
                </Button>
                <Button
                  type="submit"
                  className="rounded-full bg-indigo-600 hover:bg-indigo-500 text-white font-medium"
                >
                  Submit Application
                </Button>
              </DialogFooter>
            </form>
          </>
        )}
      </DialogPopup>
    </Dialog>
  )
}
