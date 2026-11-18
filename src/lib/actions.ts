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