import React from 'react';
import Link from 'next/link';

export default function TopNav() {
  return (
    <header className="flex justify-between items-center px-6 w-full sticky top-0 z-50 bg-[#10131a] h-16 border-b border-white/10 shadow-[0_20px_40px_rgba(0,218,243,0.08)]">
      <div className="flex items-center gap-8">
        <span className="text-xl font-bold tracking-widest text-primary uppercase font-headline bg-clip-text">AEGIS</span>
        <nav className="hidden md:flex gap-6">
          <Link href="/" className="text-primary border-b-2 border-primary font-headline tracking-tight text-sm px-1 py-5 transition-colors">Telemetry</Link>
          <Link href="/operations" className="text-slate-400 hover:bg-white/5 font-headline tracking-tight text-sm px-1 py-5 transition-colors">Operations</Link>
          <Link href="/security" className="text-slate-400 hover:bg-white/5 font-headline tracking-tight text-sm px-1 py-5 transition-colors">Security</Link>
        </nav>
      </div>
      <div className="flex items-center gap-4">
        <div className="flex items-center bg-surface-container-lowest px-3 py-1.5 rounded-sm border border-outline-variant/20">
          <span className="material-symbols-outlined text-primary text-sm mr-2">search</span>
          <input 
            className="bg-transparent border-none focus:ring-0 text-[10px] font-mono text-on-surface-variant w-48 uppercase tracking-widest outline-none" 
            placeholder="QUERY STREAM..." 
            type="text"
          />
        </div>
        <div className="flex items-center gap-2">
          <button className="p-2 text-slate-400 hover:bg-white/5 active:scale-95 duration-200 transition-colors rounded-full text-sm">
            <span className="material-symbols-outlined">notifications_active</span>
          </button>
          <button className="p-2 text-slate-400 hover:bg-white/5 active:scale-95 duration-200 transition-colors rounded-full text-sm">
            <span className="material-symbols-outlined">settings</span>
          </button>
          <button className="p-2 text-slate-400 hover:bg-white/5 active:scale-95 duration-200 transition-colors rounded-full text-sm">
            <span className="material-symbols-outlined">account_circle</span>
          </button>
        </div>
      </div>
    </header>
  );
}
