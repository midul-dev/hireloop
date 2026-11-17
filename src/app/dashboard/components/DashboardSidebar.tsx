"use client"

import React from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import {
  LayoutGrid,
  Users,
  Building2,
  Briefcase,
  Bookmark,
  FileText,
  Banknote,
  Settings,
  LogOut,
  User,
} from "lucide-react"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
} from "@/components/ui/sidebar"
import { useSession, signOut } from "@/lib/auth-client"
import { cn } from "@/lib/utils"

type Role = "admin" | "recruiter" | "seeker"

interface NavItem {
  title: string
  url: string
  icon: React.ElementType
}

// Role-based dynamic menus 
const roleMenus: Record<Role, NavItem[]> = {
  // 1. Admin Menu : Dashboard, Users, Companies, Jobs, Payments, Settings
  admin: [
    {
      title: "Dashboard",
      url: "/dashboard/admin",
      icon: LayoutGrid,
    },
    {
      title: "Users",
      url: "/dashboard/admin/users",
      icon: Users,
    },
    {
      title: "Companies",
      url: "/dashboard/admin/companies",
      icon: Building2,
    },
    {
      title: "Jobs",
      url: "/dashboard/admin/jobs",
      icon: Briefcase,
    },
    {
      title: "Payments",
      url: "/dashboard/admin/payments",
      icon: Banknote,
    },
    {
      title: "Settings",
      url: "/dashboard/admin/settings",
      icon: Settings,
    },
  ],

  // 2. Seeker Menu (Ref Image 2): Dashboard, Jobs, Saved Jobs, Applications, Billing, Settings
  seeker: [
    {
      title: "Dashboard",
      url: "/dashboard/seeker",
      icon: LayoutGrid,
    },
    {
      title: "Jobs",
      url: "/dashboard/seeker/jobs",
      icon: Briefcase,
    },
    {
      title: "Saved Jobs",
      url: "/dashboard/seeker/saved-jobs",
      icon: Bookmark,
    },
    {
      title: "Applications",
      url: "/dashboard/seeker/applications",
      icon: FileText,
    },
    {
      title: "Billing",
      url: "/dashboard/seeker/billing",
      icon: Banknote,
    },
    {
      title: "Settings",
      url: "/dashboard/seeker/settings",
      icon: Settings,
    },
  ],

  // 3. Recruiter Menu (Ref Image 3): Dashboard, Manage Jobs, Applications, Settings
  recruiter: [
    {
      title: "Dashboard",
      url: "/dashboard/recruiter",
      icon: LayoutGrid,
    },
    {
      title: "Manage Jobs",
      url: "/dashboard/recruiter/jobs",
      icon: Briefcase,
    },
    {
      title: "Applications",
      url: "/dashboard/recruiter/applications",
      icon: FileText,
    },
    {
      title: "Settings",
      url: "/dashboard/recruiter/settings",
      icon: Settings,
    },
  ],
}

const normalizeRole = (role?: string | "seeker"): Role => {
  const r = role?.toLowerCase().trim()
  if (r === "admin") return "admin"
  if (r === "recruiter") return "recruiter"
  return "seeker"
}

const DashboardSidebar = () => {
  const pathname = usePathname() || ""
  const { data: session } = useSession()
  const user = session?.user

  const currentRole = normalizeRole(user?.role as string)

 

  const currentNavItems = roleMenus[currentRole] || roleMenus.seeker

  const isItemActive = (item: NavItem) => {
    if (item.title === "Dashboard") {
      const otherItems = currentNavItems.filter((i) => i.title !== "Dashboard")
      const isOtherActive = otherItems.some(
        (other) => pathname === other.url || pathname.startsWith(other.url + "/")
      )
      return (
        pathname === item.url ||
        pathname === "/dashboard" ||
        !isOtherActive
      )
    }
    return pathname === item.url || pathname.startsWith(item.url + "/")
  }

  const handleSignOut = async () => {
    await signOut()
  }

  return (
    <Sidebar
      className="border-r border-white/[0.08] bg-[#0c0d14] text-white"
      style={
        {
          "--sidebar": "#0c0d14",
          "--sidebar-border": "rgba(255, 255, 255, 0.08)",
          "--sidebar-accent": "#181926",
          "--sidebar-accent-foreground": "#ffffff",
        } as React.CSSProperties
      }
    >
      {/* Menu Only (No Head) */}
      <SidebarContent className="px-3 pt-6 pb-4">
        <SidebarGroup className="p-0">
          <SidebarGroupContent>
            <SidebarMenu className="space-y-1.5">
              {currentNavItems.map((item) => {
                const Icon = item.icon
                const active = isItemActive(item)

                return (
                  <SidebarMenuItem key={item.title}>
                    <SidebarMenuButton
                      render={
                        <Link
                          href={item.url}
                          className={cn(
                            "relative flex items-center gap-3.5 w-full h-11 px-3.5 rounded-xl text-sm font-medium transition-all duration-150 select-none group",
                            active
                              ? "bg-[#181926] text-white shadow-sm"
                              : "text-neutral-400 hover:text-white hover:bg-white/[0.04]"
                          )}
                        >
                          {/* Active indicator bar on left edge */}
                          {active && (
                            <span className="absolute left-0 top-1/2 -translate-y-1/2 w-[3px] h-5 bg-[#5c54f5] rounded-r-full shadow-[0_0_8px_rgba(92,84,245,0.7)]" />
                          )}
                          <Icon
                            className={cn(
                              "size-5 shrink-0 transition-colors",
                              active
                                ? "text-white"
                                : "text-neutral-400 group-hover:text-neutral-200"
                            )}
                          />
                          <span className="truncate">{item.title}</span>
                        </Link>
                      }
                      isActive={active}
                      tooltip={item.title}
                    />
                  </SidebarMenuItem>
                )
              })}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>

      {/* Bottom Footer (User / Logout) */}
      <SidebarFooter className="border-t border-white/[0.06] p-3">
        {user ? (
          <div className="flex items-center justify-between p-2 rounded-xl bg-white/[0.02] border border-white/[0.05]">
            <div className="flex items-center gap-2.5 min-w-0">
              <div className="size-8 rounded-full bg-[#5c54f5]/20 border border-[#5c54f5]/30 flex items-center justify-center text-[#8c82ff] font-semibold text-xs shrink-0">
                {user.name ? user.name.charAt(0).toUpperCase() : <User className="size-4" />}
              </div>
              <div className="min-w-0">
                <p className="text-xs font-semibold text-white truncate">
                  {user.name || "User"}
                </p>
                <p className="text-[10px] text-neutral-400 truncate">
                  {user.email}
                </p>
              </div>
            </div>
            <button
              onClick={handleSignOut}
              title="Sign out"
              className="p-1.5 rounded-lg text-neutral-400 hover:text-red-400 hover:bg-white/[0.04] transition-colors cursor-pointer"
            >
              <LogOut className="size-4" />
            </button>
          </div>
        ) : (
          <div className="px-2 py-1 flex items-center justify-between text-xs text-neutral-400">
            <span className="capitalize">{currentRole} Portal</span>
            <Link
              href="/"
              className="text-[#8c82ff] hover:underline"
            >
              Home
            </Link>
          </div>
        )}
      </SidebarFooter>
    </Sidebar>
  )
}

export default DashboardSidebar
