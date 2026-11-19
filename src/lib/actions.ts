import { IJobsFromForm } from "@/types/jobTypes";



export const createJob = async (newJobs: IJobsFromForm)=>{
const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/add-jobs`,{
        method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(newJobs),}
      );
      return response.json()
}

export const getJobs = async () => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/jobs`)
    return res.json()
}

export const getJobById = async (id: string) => {
    try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/job/${id}`, {
            cache: "no-store",
        })
        if (!res.ok) return null
        return res.json()
    } catch (err) {
        console.error("Failed to fetch job by ID:", err)
        return null
    }
}

export const updateJob = async (id: string, updatedJob: Partial<IJobsFromForm>) => {
    try {
        const response = await fetch(
            `${process.env.NEXT_PUBLIC_API_URL}/update-job/${id}`,
            {
                method: "PATCH",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(updatedJob),
            }
        )
        const data = await response.json()
        return { ok: response.ok, ...data }
    } catch (err) {
        console.error("Failed to update job:", err)
        return { ok: false, error: "Network or server error" }
    }
}