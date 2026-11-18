import { jobformData } from "@/app/dashboard/recruiter/add-jobs/page";

export const createJob = async (newJobs: jobformData)=>{
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