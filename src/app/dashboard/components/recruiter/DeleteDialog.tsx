'use client'
import { Trash2Icon } from "lucide-react"

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogMedia,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog"
import { Button } from "@/components/ui/button"
import { IJobs } from "@/types/jobTypes"
import { toast } from "sonner"
import { useRouter } from "next/navigation"
import { useState } from "react"

export function DeleteJobs({job}: {job: IJobs}) {
const router = useRouter()
const [open, setOpen] = useState(false)

      const handleDelete = async (id: string) => {
    try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/delete-job/${id}`, { method: "DELETE" })
    const data =await res.json()
    if(res.ok){
        setOpen(false)
        toast.success(`"${job.title}" has been removed.`)
        router.refresh()
    }else{
        toast.error(data.messege)
    }
    } catch (e) {
      console.warn("API delete failed, removing locally:", e)
    }
    
    
  }
  return (
    <AlertDialog open={open} onOpenChange={setOpen}>
      <AlertDialogTrigger
        render={<Button variant="destructive"><Trash2Icon /></Button>}
      />
      <AlertDialogContent size="sm">
        <AlertDialogHeader>
          <AlertDialogMedia className="bg-destructive/10 text-destructive dark:bg-destructive/20 dark:text-destructive">
            <Trash2Icon />
          </AlertDialogMedia>
          <AlertDialogTitle>Delete chat?</AlertDialogTitle>
          <AlertDialogDescription>
            This will permanently delete this Job.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel variant="outline">Cancel</AlertDialogCancel>
          <AlertDialogAction onClick={()=>handleDelete(job._id)} variant="destructive">Delete</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  )
}
