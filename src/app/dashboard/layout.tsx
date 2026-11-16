import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"
import DashboardSidebar from "./components/DashboardSidebar"

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <SidebarProvider>
      <div className="flex min-h-screen w-full bg-[#050508] text-white">
        <DashboardSidebar />
        <main className="flex-1 min-h-screen bg-[#050508] flex flex-col min-w-0">
          <header className="h-16 border-b border-white/[0.06] flex items-center px-4 sm:px-6 shrink-0">
            <SidebarTrigger className="text-neutral-400 hover:text-white hover:bg-white/[0.06] cursor-pointer" />
          </header>
          <div className="flex-1 p-4 sm:p-6 lg:p-8 overflow-y-auto">
            {children}
          </div>
        </main>
      </div>
    </SidebarProvider>
  )
}

export default DashboardLayout
