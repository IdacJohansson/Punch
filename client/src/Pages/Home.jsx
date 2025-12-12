import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/app-sidebar";

export default function Home() {
  return (
    <SidebarProvider>
      <div className="flex min-h-screen">
        <AppSidebar />

        <div className="flex flex-col flex-1">
          <header className="h-14 border-b flex items-center px-4">
            <SidebarTrigger /> {/* Toggle-knapp */}
            <h1 className="font-semibold text-lg ml-4">Punch</h1>
          </header>

          <main className="p-6">
            <h2 className="text-2xl font-bold">Welcome to dashboard</h2>
            <p>Page content.</p>
          </main>
        </div>
      </div>
    </SidebarProvider>
  );
}
