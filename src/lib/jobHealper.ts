import {
  Code2,
  PenTool,
  Server,
  Megaphone,
  BadgeCheck,
  Briefcase,
} from "lucide-react"

export const getCategoryStyle = (category?: string) => {
  const cat = category?.toLowerCase() || ""

  if (cat.includes("engineering") || cat.includes("tech")) {
    return {
      icon: Code2,
      bg: "bg-blue-500/10 border-blue-500/20",
      text: "text-blue-400",
    }
  }
  if (cat.includes("design")) {
    return {
      icon: PenTool,
      bg: "bg-orange-500/10 border-orange-500/20",
      text: "text-orange-400",
    }
  }
  if (cat.includes("infrastructure") || cat.includes("devops")) {
    return {
      icon: Server,
      bg: "bg-cyan-500/10 border-cyan-500/20",
      text: "text-cyan-400",
    }
  }
  if (cat.includes("marketing")) {
    return {
      icon: Megaphone,
      bg: "bg-purple-500/10 border-purple-500/20",
      text: "text-purple-400",
    }
  }
  if (cat.includes("quality") || cat.includes("qa")) {
    return {
      icon: BadgeCheck,
      bg: "bg-indigo-500/10 border-indigo-500/20",
      text: "text-indigo-400",
    }
  }

  return {
    icon: Briefcase,
    bg: "bg-neutral-500/10 border-neutral-500/20",
    text: "text-neutral-400",
  }
}

export const formatTimeAgo = (dateString?: string): string => {
  if (!dateString) return "Recently"

  const past = new Date(dateString).getTime()
  const now = Date.now()
  const diffInSeconds = Math.floor((now - past) / 1000)

  if (diffInSeconds < 60) return "Posted just now"

  const diffInMinutes = Math.floor(diffInSeconds / 60)
  if (diffInMinutes < 60) return `Posted ${diffInMinutes}m ago`

  const diffInHours = Math.floor(diffInMinutes / 60)
  if (diffInHours < 24) return `Posted ${diffInHours}h ago`

  const diffInDays = Math.floor(diffInHours / 24)
  if (diffInDays < 7) return `Posted ${diffInDays}d ago`

  const diffInWeeks = Math.floor(diffInDays / 7)
  if (diffInWeeks < 4) return `Posted ${diffInWeeks}w ago`

  const diffInMonths = Math.floor(diffInDays / 30)
  return `Posted ${diffInMonths}mo ago`
}