import type { Metadata } from "next";
import "./globals.css";
import TopNav from "@/components/layout/TopNav";
import Sidebar from "@/components/layout/Sidebar";

export const metadata: Metadata = {
  title: "Aegis | Anomaly Detection Engine",
  description: "Autonomous Data & Decision Infrastructure UI",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`bg-background text-on-surface font-body selection:bg-primary/30 selection:text-primary overflow-hidden h-screen flex flex-col`}>
        <TopNav />
        <div className="flex flex-1 overflow-hidden">
          {/* SideNavBar */}
          <Sidebar />
          
          {/* Main Content Area */}
          <main className="flex-1 md:ml-64 overflow-y-auto bg-surface-container-lowest text-on-surface relative">
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}
