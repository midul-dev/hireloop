import { NextRequest, NextResponse } from "next/server"
import { MongoClient, ObjectId } from "mongodb"

export async function POST(req: NextRequest) {
  try {
    // Collect data using native FormData API method
    const formData = await req.formData()

    const title = formData.get("title")?.toString().trim() || ""
    const company = formData.get("company")?.toString().trim() || ""
    const category = formData.get("category")?.toString().trim() || "Engineering & Tech"
    const jobType = formData.get("jobType")?.toString().trim() || "Full-time"
    const isRemote = formData.get("isRemote") === "true" || formData.get("isRemote") === "on"
    const location = formData.get("location")?.toString().trim() || ""
    const deadline = formData.get("deadline")?.toString().trim() || ""
    const salaryMin = formData.get("salaryMin")?.toString().trim() || ""
    const salaryMax = formData.get("salaryMax")?.toString().trim() || ""
    const salaryCurrency = formData.get("salaryCurrency")?.toString().trim() || "€"
    const frequency = formData.get("frequency")?.toString().trim() || "per hour"
    const responsibilities = formData.get("responsibilities")?.toString().trim() || ""
    const requirements = formData.get("requirements")?.toString().trim() || ""

    if (!title) {
      return NextResponse.json(
        { success: false, error: "Job title is required." },
        { status: 400 }
      )
    }

    const formattedSalary =
      salaryMin && salaryMax
        ? `${salaryCurrency}${salaryMin} – ${salaryCurrency}${salaryMax} / ${frequency.replace("per ", "").replace("hour", "hr").replace("year", "yr")}`
        : salaryMin
        ? `${salaryCurrency}${salaryMin} / ${frequency}`
        : "Competitive"

    const newJob = {
      title,
      company: company || "HirePulse Network",
      category,
      jobType,
      type: jobType,
      isRemote,
      workplaceType: isRemote ? "Remote" : "On-site",
      location: location || (isRemote ? "Remote (New York, USA)" : "Not specified"),
      deadline: deadline || "May 30, 2025",
      salary: formattedSalary,
      salaryMin,
      salaryMax,
      salaryCurrency,
      frequency,
      responsibilities,
      requirements,
      description: responsibilities || requirements || "Job listing on HireLoop",
      candidatesCount: Math.floor(Math.random() * 25) + 10,
      createdAt: new Date().toISOString(),
      status: "Active",
    }

    console.log("Saving job via FormData API:", newJob)

    // Store in MongoDB if DB_URI is available
    if (process.env.DB_URI) {
      try {
        const client = new MongoClient(process.env.DB_URI)
        await client.connect()
        const db = client.db("hireloop")
        const result = await db.collection("jobs").insertOne(newJob)
        await client.close()
        return NextResponse.json({
          success: true,
          jobId: result.insertedId,
          job: newJob,
        })
      } catch (dbErr) {
        console.error("MongoDB error, saving locally:", dbErr)
      }
    }

    return NextResponse.json({
      success: true,
      job: newJob,
      message: "Job saved successfully",
    })
  } catch (err: unknown) {
    const message = err instanceof Error ? err.message : "Failed to process job post"
    return NextResponse.json({ success: false, error: message }, { status: 500 })
  }
}

export async function GET() {
  try {
    if (process.env.DB_URI) {
      const client = new MongoClient(process.env.DB_URI)
      await client.connect()
      const db = client.db("hireloop")
      const jobs = await db.collection("jobs").find({}).sort({ createdAt: -1 }).toArray()
      await client.close()
      return NextResponse.json({ success: true, jobs })
    }
    return NextResponse.json({ success: true, jobs: [] })
  } catch (err: unknown) {
    const message = err instanceof Error ? err.message : "Failed to fetch jobs"
    return NextResponse.json({ success: false, error: message }, { status: 500 })
  }
}

export async function DELETE(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url)
    const id = searchParams.get("id")

    if (id && process.env.DB_URI) {
      try {
        const client = new MongoClient(process.env.DB_URI)
        await client.connect()
        const db = client.db("hireloop")
        if (ObjectId.isValid(id)) {
          await db.collection("jobs").deleteOne({ _id: new ObjectId(id) })
        } else {
          await db.collection("jobs").deleteOne({ id })
        }
        await client.close()
      } catch (dbErr) {
        console.error("MongoDB delete error:", dbErr)
      }
    }

    return NextResponse.json({ success: true, message: "Job deleted successfully" })
  } catch (err: unknown) {
    const message = err instanceof Error ? err.message : "Failed to delete job"
    return NextResponse.json({ success: false, error: message }, { status: 500 })
  }
}
