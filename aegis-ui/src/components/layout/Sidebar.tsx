"use client";
import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Sidebar() {
  const pathname = usePathname();

  const navItems = [
    { href: '/', icon: 'analytics', label: 'Telemetry' },
    { href: '/anomaly', icon: 'security', label: 'Anomaly Detection' },
    { href: '/lineage', icon: 'account_tree', label: 'Data Lineage' },
    { href: '/health', icon: 'monitoring', label: 'System Health' },
    { href: '/risk', icon: 'rule', label: 'Risk Models' },
  ];

  return (
    <aside className="hidden md:flex flex-col h-full pt-20 pb-8 bg-[#191c22] w-64 fixed left-0 top-0 border-r border-white/5 z-40">
      <div className="px-6 mb-8 mt-0">
        <h2 className="font-headline uppercase tracking-wider text-[10px] font-bold text-slate-500">STRATEGIC CONTROL</h2>
        <p className="font-mono text-[9px] text-primary/60 mt-1">V.2.4.0-STABLE</p>
      </div>
      <nav className="flex-1 space-y-1">
        {navItems.map((item) => {
          const isActive = pathname === item.href;
          return (
            <Link 
              key={item.href} 
              href={item.href} 
              className={`flex items-center px-6 py-3 transition-all group ${
                isActive 
                  ? 'bg-primary/10 text-primary border-r-2 border-primary' 
                  : 'text-slate-500 hover:text-slate-300 hover:bg-white/5'
              }`}
            >
              <span className="material-symbols-outlined mr-3 group-hover:translate-x-1 duration-300">
                {item.icon}
              </span>
              <span className="font-headline uppercase tracking-wider text-[10px] font-bold">
                {item.label}
              </span>
            </Link>
          );
        })}
      </nav>

      <div className="px-4 mt-auto pt-8 border-t border-white/5">
        <div className="flex items-center gap-3 px-2 mb-4">
          <div className="w-8 h-8 rounded bg-primary/20 flex items-center justify-center border border-primary/30">
            <span className="material-symbols-outlined text-primary text-sm" style={{fontVariationSettings: "'FILL' 1"}}>shield</span>
          </div>
          <div>
            <p className="text-[10px] font-bold text-on-surface uppercase font-headline">Root Admin</p>
            <p className="text-[9px] text-tertiary font-mono">ENCRYPTED SESSION</p>
          </div>
        </div>
        <div className="flex gap-2">
          <button className="flex-1 flex items-center justify-center py-2 bg-surface-container hover:bg-surface-container-high transition-colors text-[9px] font-bold uppercase tracking-widest text-slate-400 border border-white/5 rounded-sm">
            <span className="material-symbols-outlined text-sm mr-1">terminal</span> Terminal
          </button>
          <button className="flex-1 flex items-center justify-center py-2 bg-surface-container hover:bg-surface-container-high transition-colors text-[9px] font-bold uppercase tracking-widest text-slate-400 border border-white/5 rounded-sm">
            <span className="material-symbols-outlined text-sm mr-1">list_alt</span> Logs
          </button>
        </div>
      </div>
    </aside>
  );
}
