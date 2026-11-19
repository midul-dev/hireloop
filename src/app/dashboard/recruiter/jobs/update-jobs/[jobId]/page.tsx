import UpdateJobsContent from "@/app/dashboard/components/recruiter/UpdateJobs";
import { getJobById } from "@/lib/actions";

export default async function UpdateJobPage({
  params,
}: {
  params: Promise<{ jobId: string }>;
}) {
  const { jobId } = await params;

  // ব্যাকএন্ড থেকে সিঙ্গেল জব ডাটা ফেচ
  const job = await getJobById(jobId);

  return (
    <UpdateJobsContent job={job} jobId={jobId} />
  );
}
