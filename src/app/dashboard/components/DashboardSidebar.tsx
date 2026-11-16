"use client"

import React from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import {
  LayoutGrid,
  Briefcase,
  FileText,
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
  SidebarHeader,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
} from "@/components/ui/sidebar"
import { Logo } from "@/components/shared/logo"
import { useSession, signOut } from "@/lib/auth-client"
import { cn } from "@/lib/utils"

interface NavItem {
  title: string
  url: string
  icon: React.ElementType
}

const navItems: NavItem[] = [
  {
    title: "Dashboard",
    url: "/dashboard/recruiter",
    icon: LayoutGrid,
  },
  {
    title: "Manage Jobs",
    url: "/dashboard/manage-jobs",
    icon: Briefcase,
  },
  {
    title: "Applications",
    url: "/dashboard/applications",
    icon: FileText,
  },
  {
    title: "Settings",
    url: "/dashboard/settings",
    icon: Settings,
  },
]

const DashboardSidebar = () => {
  const pathname = usePathname() || ""
  const { data: session } = useSession()
  const user = session?.user

  // Fallback to role-specific dashboard if applicable
  const getDashboardUrl = () => {
    if (pathname.startsWith("/dashboard/seeker")) return "/dashboard/seeker"
    if (pathname.startsWith("/dashboard/admin")) return "/dashboard/admin"
    return "/dashboard/recruiter"
  }

  const isItemActive = (item: NavItem) => {
    if (item.title === "Dashboard") {
      return (
        pathname === "/dashboard" ||
        pathname === "/dashboard/recruiter" ||
        pathname === "/dashboard/seeker" ||
        pathname === "/dashboard/admin" ||
        pathname === item.url ||
        !navItems.slice(1).some((other) => pathname.startsWith(other.url))
      )
    }
    return pathname.startsWith(item.url)
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
      {/* Brand Header */}
      <SidebarHeader className="h-16 border-b border-white/[0.06] flex items-center justify-center px-4">
        <div className="w-full flex items-center justify-between">
          <Logo size="sm" />
        </div>
      </SidebarHeader>

      {/* Main Navigation Menu */}
      <SidebarContent className="px-3 py-4">
        <SidebarGroup className="p-0">
          <SidebarGroupContent>
            <SidebarMenu className="space-y-1.5">
              {navItems.map((item) => {
                const Icon = item.icon
                const active = isItemActive(item)
                const targetUrl =
                  item.title === "Dashboard" ? getDashboardUrl() : item.url

                return (
                  <SidebarMenuItem key={item.title}>
                    <SidebarMenuButton
                      render={
                        <Link
                          href={targetUrl}
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

      {/* Sidebar Footer with User / Logout */}
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
            <span>HireLoop v1.0</span>
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
