import UpdateJobsContent from "@/app/dashboard/components/recruiter/UpdateJobs";
import { getJobById } from "@/lib/actions";

export default async function UpdateJobPage({
  params,
}: {
  params: Promise<{ jobId: string }>;
}) {
  const { jobId } = await params;
  const job = await getJobById(jobId);

  return (
    <UpdateJobsContent job={job} jobId={jobId} />
  );
}
