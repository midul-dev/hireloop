

import Link from "next/link"
import {
  Plus,
  Code2,
  Palette,
  Server,
  Megaphone,
  BadgeCheck,
  Globe,
  MapPin,
  Users,
  Pencil,
  Trash2,
  MoreVertical,
  ChevronRight,
  Sparkles,
} from "lucide-react"
import { toast } from "sonner"
import { getJobs } from "@/lib/actions"
import { IJobs } from "@/types/jobTypes"
import JobsRow from "../../components/JobsRow"


export default async function ManageJobPage() {
  const jobs: IJobs[] = await getJobs()

  console.log(jobs)
  return(
    <div>
        <JobsRow jobs={jobs}/>
    </div>
  )
}
