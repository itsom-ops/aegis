import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Aegis Command Center",
  description: "Autonomous Data & Decision Infrastructure UI",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.className} bg-aegis-bg text-gray-200 overflow-hidden`}>
        {/* Animated Background */}
        <div className="fixed inset-0 z-0 pointer-events-none">
          <div className="absolute inset-0 bg-[url('https://transparenttextures.com/patterns/cubes.png')] opacity-5"></div>
          <div className="absolute inset-0 bg-gradient-to-br from-[#02050A] via-[#050B14] to-[#0A101C]"></div>
          
          {/* Scanlines Effect */}
          <div className="absolute inset-0 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] bg-[length:100%_4px,3px_100%] z-50 pointer-events-none opacity-20 hidden mt:block"></div>
        </div>
        
        <main className="relative z-10 w-full h-screen p-4 flex flex-col">
          {/* Header */}
          <header className="w-full flex justify-between items-center pb-4 border-b border-aegis-border mb-4">
            <div className="flex items-center gap-3">
              <div className="w-3 h-3 rounded-full bg-aegis-cyan animate-pulse shadow-[0_0_10px_#00FFCC]"></div>
              <h1 className="text-xl font-mono text-aegis-cyan tracking-widest font-bold">AEGIS // CORE_OS</h1>
            </div>
            <div className="text-xs font-mono text-gray-500 uppercase flex gap-4">
              <span>Status: <span className="text-aegis-green">ONLINE</span></span>
              <span>Uplink: <span className="text-aegis-cyan">SECURE</span></span>
              <span>Time: {new Date().toLocaleTimeString()}</span>
            </div>
          </header>
          
          <div className="flex-1 min-h-0">
            {children}
          </div>
        </main>
      </body>
    </html>
  );
}
