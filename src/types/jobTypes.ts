export interface IJobs {
    _id: string
  title: string
  company: string
  category: string
  jobType: string
  isRemote: string
  location: string
  deadline: string
  salaryMin: string
  salaryCurrency: string
  salaryMax: string
  frequency: string
  responsibilities: string
  requirements: string
  createdAt: string 
  status: string 
  
}

export interface IJobsFromForm {
  title?: string
  company?: string
  category?: string
  jobType?: string
  isRemote?: string
  location?: string
  deadline?: string
  salaryMin?: string
  salaryCurrency?: string
  salaryMax?: string
  frequency?: string
  responsibilities?: string
  requirements?: string
}