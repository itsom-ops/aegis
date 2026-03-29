"use client";
import React from 'react';

export default function TelemetryDashboard() {
  return (
    <div className="max-w-[1600px] mx-auto space-y-8 p-8">
      {/* Dashboard Header */}
      <div className="flex justify-between items-end">
        <div>
          <p className="text-[10px] font-mono font-bold tracking-[0.3em] text-primary uppercase mb-2">Real-time Stream Processor</p>
          <h1 className="text-4xl font-headline font-bold tracking-tighter text-on-surface uppercase">Aegis // <span className="text-primary">Node_Alpha</span></h1>
        </div>
        <div className="flex gap-6 text-right">
          <div>
            <p className="text-[10px] font-mono text-slate-500 uppercase tracking-widest">Active Payloads</p>
            <p className="text-2xl font-headline font-bold text-on-surface">12,482 <span className="text-tertiary text-xs">▲ 2.4%</span></p>
          </div>
          <div>
            <p className="text-[10px] font-mono text-slate-500 uppercase tracking-widest">Cluster Health</p>
            <p className="text-2xl font-headline font-bold text-tertiary">STABLE</p>
          </div>
        </div>
      </div>

      {/* Bento Grid Layout */}
      <div className="grid grid-cols-12 gap-6">
        
        {/* Main Telemetry Burst Chart */}
        <div className="col-span-12 lg:col-span-8 bg-surface-container rounded-lg p-6 border border-outline-variant/10 relative overflow-hidden group">
          <div className="absolute top-0 left-0 w-1 h-full bg-primary"></div>
          <div className="flex justify-between items-start mb-8">
            <div>
              <h3 className="font-headline text-lg font-bold uppercase tracking-tight">Data Throughput Bursts</h3>
              <p className="text-[10px] font-mono text-on-surface-variant uppercase tracking-widest">Last 300 cycles / ingestion rates (MB/s)</p>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-tertiary animate-pulse"></span>
              <span className="text-[10px] font-mono text-tertiary uppercase font-bold">Live Stream</span>
            </div>
          </div>
          
          {/* Mock Large Chart Area */}
          <div className="h-80 w-full relative">
            <svg className="w-full h-full" preserveAspectRatio="none" viewBox="0 0 1000 300">
              <defs>
                <linearGradient id="chartGradient" x1="0" x2="0" y1="0" y2="1">
                  <stop offset="0%" stopColor="rgba(0, 218, 243, 0.4)"></stop>
                  <stop offset="100%" stopColor="rgba(0, 218, 243, 0)"></stop>
                </linearGradient>
              </defs>
              <line stroke="rgba(255,255,255,0.05)" strokeWidth="1" x1="0" x2="1000" y1="50" y2="50"></line>
              <line stroke="rgba(255,255,255,0.05)" strokeWidth="1" x1="0" x2="1000" y1="150" y2="150"></line>
              <line stroke="rgba(255,255,255,0.05)" strokeWidth="1" x1="0" x2="1000" y1="250" y2="250"></line>
              
              <path d="M0,250 L50,230 L100,260 L150,180 L200,210 L250,140 L300,160 L350,80 L400,120 L450,100 L500,150 L550,60 L600,90 L650,40 L700,70 L750,120 L800,90 L850,50 L900,80 L950,20 L1000,40" fill="none" stroke="#00daf3" strokeWidth="2"></path>
              <path d="M0,250 L50,230 L100,260 L150,180 L200,210 L250,140 L300,160 L350,80 L400,120 L450,100 L500,150 L550,60 L600,90 L650,40 L700,70 L750,120 L800,90 L850,50 L900,80 L950,20 L1000,40 V300 H0 Z" fill="url(#chartGradient)"></path>
            </svg>
            <div className="absolute top-[15%] left-[65%] w-3 h-3 bg-primary rounded-full ring-4 ring-primary/20"></div>
            <div className="absolute top-[5%] left-[68%] glass-panel border border-primary/30 p-2 rounded shadow-xl">
              <p className="text-[9px] font-mono text-primary font-bold">BURST_094</p>
              <p className="text-xs font-headline font-bold">842.12 MB/s</p>
            </div>
          </div>
          
          {/* Telemetry Footer */}
          <div className="mt-6 flex justify-between border-t border-outline-variant/10 pt-4">
            <div className="flex gap-8">
              <div className="flex items-center gap-2">
                <span className="text-[9px] font-mono text-on-surface-variant uppercase">p99 Latency</span>
                <span className="text-xs font-mono font-bold text-on-surface">12ms</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-[9px] font-mono text-on-surface-variant uppercase">Error Rate</span>
                <span className="text-xs font-mono font-bold text-tertiary">0.002%</span>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-[9px] font-mono text-on-surface-variant uppercase">Source: FastAPI/Redis</span>
              <span className="material-symbols-outlined text-primary text-sm" style={{fontVariationSettings: "'FILL' 1"}}>bolt</span>
            </div>
          </div>
        </div>

        {/* Right Column Metrics */}
        <div className="col-span-12 lg:col-span-4 flex flex-col gap-6">
          <div className="bg-surface-container rounded-lg p-5 border border-outline-variant/10 relative overflow-hidden h-1/2 group">
            <div className="flex justify-between items-center mb-4">
              <span className="text-[10px] font-mono text-on-surface-variant tracking-[0.2em] uppercase">Aggregated Ingestion</span>
              <span className="material-symbols-outlined text-on-surface-variant text-lg">download</span>
            </div>
            <div className="space-y-1">
              <h4 className="text-4xl font-headline font-bold text-on-surface tracking-tighter">4.2 <span className="text-xl text-slate-500 font-medium">PB/hr</span></h4>
              <div className="flex items-center gap-2">
                <div className="h-1.5 flex-1 bg-surface-container-highest rounded-full overflow-hidden">
                  <div className="h-full bg-primary w-3/4 rounded-full"></div>
                </div>
                <span className="text-[10px] font-mono font-bold text-primary">75% CAP</span>
              </div>
            </div>
            <div className="absolute bottom-0 left-0 w-full h-12 opacity-30 group-hover:opacity-60 transition-opacity">
              <svg className="w-full h-full" preserveAspectRatio="none" viewBox="0 0 200 50">
                <path d="M0,50 Q20,10 40,40 T80,20 T120,45 T160,15 T200,30" fill="none" stroke="#00daf3" strokeWidth="1.5"></path>
              </svg>
            </div>
          </div>

          <div className="bg-surface-container rounded-lg p-5 border border-outline-variant/10 h-1/2">
            <div className="flex justify-between items-center mb-4">
              <span className="text-[10px] font-mono text-on-surface-variant tracking-[0.2em] uppercase">Concurrent Nodes</span>
              <span className="material-symbols-outlined text-on-surface-variant text-lg">hub</span>
            </div>
            <div className="grid grid-cols-5 gap-2">
              <div className="aspect-square bg-tertiary/20 border border-tertiary/40 rounded-sm"></div>
              <div className="aspect-square bg-tertiary/20 border border-tertiary/40 rounded-sm"></div>
              <div className="aspect-square bg-tertiary/20 border border-tertiary/40 rounded-sm"></div>
              <div className="aspect-square bg-tertiary/20 border border-tertiary/40 rounded-sm"></div>
              <div className="aspect-square bg-error/20 border border-error/40 rounded-sm animate-pulse"></div>
              <div className="aspect-square bg-tertiary/20 border border-tertiary/40 rounded-sm"></div>
              <div className="aspect-square bg-tertiary/20 border border-tertiary/40 rounded-sm"></div>
              <div className="aspect-square bg-surface-container-highest border border-white/5 rounded-sm"></div>
              <div className="aspect-square bg-tertiary/20 border border-tertiary/40 rounded-sm"></div>
              <div className="aspect-square bg-tertiary/20 border border-tertiary/40 rounded-sm"></div>
            </div>
            <div className="mt-4 pt-4 border-t border-outline-variant/10">
              <div className="flex justify-between items-center">
                <span className="text-[10px] font-mono text-on-surface-variant">NODE_ERR_X99</span>
                <button className="text-[10px] font-headline font-bold text-error uppercase">Purge Node</button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Row: Multi-dimensional Diagnostics */}
        <div className="col-span-12 md:col-span-4 bg-surface-container rounded-lg p-6 border border-outline-variant/10">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-2 bg-primary/10 rounded">
              <span className="material-symbols-outlined text-primary">timer</span>
            </div>
            <h5 className="font-headline font-bold uppercase text-sm tracking-tight">Latency Percentiles</h5>
          </div>
          <div className="space-y-4">
            <div>
              <div className="flex justify-between mb-1">
                <span className="text-[10px] font-mono text-on-surface-variant uppercase">P50 Median</span>
                <span className="text-[10px] font-mono text-on-surface font-bold">0.8ms</span>
              </div>
              <div className="h-1 bg-surface-container-highest rounded-full overflow-hidden">
                <div className="h-full bg-primary/40 w-1/4"></div>
              </div>
            </div>
            <div>
              <div className="flex justify-between mb-1">
                <span className="text-[10px] font-mono text-on-surface-variant uppercase">P95 Burst</span>
                <span className="text-[10px] font-mono text-on-surface font-bold">4.2ms</span>
              </div>
              <div className="h-1 bg-surface-container-highest rounded-full overflow-hidden">
                <div className="h-full bg-primary/60 w-2/3"></div>
              </div>
            </div>
            <div>
              <div className="flex justify-between mb-1">
                <span className="text-[10px] font-mono text-on-surface-variant uppercase">P99 Critical</span>
                <span className="text-[10px] font-mono text-on-surface font-bold">18.4ms</span>
              </div>
              <div className="h-1 bg-surface-container-highest rounded-full overflow-hidden">
                <div className="h-full bg-error w-11/12 shadow-[0_0_8px_rgba(255,180,171,0.5)]"></div>
              </div>
            </div>
          </div>
        </div>

        <div className="col-span-12 md:col-span-4 bg-surface-container rounded-lg p-6 border border-outline-variant/10 flex flex-col">
          <h5 className="font-headline font-bold uppercase text-sm tracking-tight mb-6 flex items-center gap-3">
            <span className="material-symbols-outlined text-primary text-sm">storage</span>
            Redis Memory Cache
          </h5>
          <div className="flex-1 flex flex-col justify-center">
            <div className="relative w-32 h-32 mx-auto">
              <svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
                <circle cx="50" cy="50" fill="none" r="45" stroke="rgba(255,255,255,0.05)" strokeWidth="8"></circle>
                <circle cx="50" cy="50" fill="none" r="45" stroke="#00daf3" strokeDasharray="210" strokeDashoffset="60" strokeWidth="8"></circle>
              </svg>
              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <p className="text-xl font-headline font-bold">64.2</p>
                <p className="text-[9px] font-mono text-on-surface-variant uppercase tracking-widest">GB Used</p>
              </div>
            </div>
          </div>
          <div className="mt-4 flex justify-between items-center text-[10px] font-mono border-t border-outline-variant/10 pt-4">
            <span className="text-on-surface-variant">TTL EXPIRE: 240s</span>
            <span className="text-tertiary">ALLOCATED: 128GB</span>
          </div>
        </div>

        <div className="col-span-12 md:col-span-4 bg-surface-container-high rounded-lg p-6 border border-primary/20 relative overflow-hidden group">
          <div className="absolute top-0 right-0 opacity-10 pointer-events-none group-hover:scale-110 transition-transform duration-700">
            <img alt="Cyber security network visualization" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuASKn2VUEPcWqf3sRN9ThMAvvLvgphWBRCLbIlAs0BclCrr0WP2CZXZbGhMAeC4JZqpKnhOx0jVTEMag8uRCmwuiu2wxbHP_-bK_l49eLl2zLllMWX4nGJyEvHe38jbKFLFVDIsOY8TF80tdwRrihCx9ZUXnphY0CTCNx2y9IBeTJgb1yBRbk3BwJI7HNlmBKwplllRWAehid2MkTYSYqrtZ_N52tYB0QdeLBeOwQKn6QuPtrk9zck-YgLOweRMa5iYeNLREY1oIPyA"/>
          </div>
          <h5 className="font-headline font-bold uppercase text-sm tracking-tight mb-4 text-primary">Global Distribution</h5>
          <div className="space-y-3 relative z-10">
            <div className="flex justify-between items-center">
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-primary"></span>
                <span className="text-[10px] font-mono uppercase">US-EAST-1</span>
              </div>
              <span className="text-[10px] font-mono text-primary font-bold">42% TRAFFIC</span>
            </div>
            <div className="flex justify-between items-center opacity-60">
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-slate-400"></span>
                <span className="text-[10px] font-mono uppercase">EU-CENTRAL-1</span>
              </div>
              <span className="text-[10px] font-mono font-bold text-on-surface">28% TRAFFIC</span>
            </div>
            <div className="flex justify-between items-center opacity-60">
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-slate-400"></span>
                <span className="text-[10px] font-mono uppercase">AP-SOUTH-2</span>
              </div>
              <span className="text-[10px] font-mono font-bold text-on-surface">15% TRAFFIC</span>
            </div>
          </div>
          <button className="w-full mt-6 py-2 border border-primary/30 text-[10px] font-headline font-bold text-primary uppercase hover:bg-primary/10 transition-colors tracking-widest relative z-10">
            Regional Drill-down
          </button>
        </div>

        {/* Live Log Stream */}
        <div className="col-span-12 bg-surface-container-lowest border border-outline-variant/10 rounded-lg overflow-hidden mt-6">
          <div className="px-6 py-3 border-b border-outline-variant/10 flex justify-between items-center">
            <div className="flex items-center gap-3">
              <span className="material-symbols-outlined text-sm text-primary">code</span>
              <span className="text-[10px] font-mono font-bold uppercase tracking-widest">Raw Payload Stream</span>
            </div>
            <div className="flex gap-4">
              <span className="text-[10px] font-mono text-tertiary uppercase">Status: 200 OK</span>
              <span className="text-[10px] font-mono text-on-surface-variant uppercase">Filter: Error Only (OFF)</span>
            </div>
          </div>
          <div className="p-4 h-48 font-mono text-[10px] overflow-y-auto space-y-1 text-on-surface-variant">
            <div className="flex gap-4"><span className="text-primary/60">[20:42:15.004]</span> <span className="text-tertiary">SUCCESS</span> <span>PAYLOAD_ID: AG-4829-X8 // VOL: 14.2KB // SRC: 192.168.1.42</span></div>
            <div className="flex gap-4"><span className="text-primary/60">[20:42:15.112]</span> <span className="text-tertiary">SUCCESS</span> <span>PAYLOAD_ID: AG-4829-X9 // VOL: 12.8KB // SRC: 192.168.1.101</span></div>
            <div className="flex gap-4"><span className="text-primary/60">[20:42:15.256]</span> <span className="text-error font-bold">WARNING</span> <span>NODE_SATURATION_HIGH // NODE: ALPH-02 // LOAD: 89%</span></div>
            <div className="flex gap-4"><span className="text-primary/60">[20:42:15.421]</span> <span className="text-tertiary">SUCCESS</span> <span>PAYLOAD_ID: AG-4830-X1 // VOL: 15.1KB // SRC: 192.168.1.44</span></div>
            <div className="flex gap-4"><span className="text-primary/60">[20:42:15.589]</span> <span className="text-tertiary">SUCCESS</span> <span>PAYLOAD_ID: AG-4830-X2 // VOL: 11.9KB // SRC: 192.168.1.42</span></div>
            <div className="flex gap-4"><span className="text-primary/60">[20:42:15.602]</span> <span className="text-primary">INFO</span> <span>REDIS_CACHE_COMMIT // TRANSACTION_ID: TX_9941_Z</span></div>
          </div>
        </div>
      </div>
{/* Floating Action for Alert Creation */}
      <button className="fixed bottom-8 right-8 w-14 h-14 bg-gradient-to-br from-primary to-on-primary-container rounded-lg shadow-[0_20px_40px_rgba(0,218,243,0.3)] flex items-center justify-center text-on-primary active:scale-95 transition-transform group">
        <span className="material-symbols-outlined text-2xl" style={{fontVariationSettings: "'FILL' 1"}}>add_alert</span>
        <div className="absolute right-full mr-4 px-3 py-1.5 glass-panel border border-primary/20 rounded text-[10px] font-bold uppercase tracking-widest text-primary whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity">
          Set Threshold Alert
        </div>
      </button>

    </div>
  );
}
