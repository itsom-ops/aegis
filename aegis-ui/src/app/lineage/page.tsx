"use client";
import React from 'react';

export default function DataLineage() {
  return (
    <div className="flex-1 relative overflow-hidden bg-surface-container-lowest h-full min-h-screen">
      {/* Grid Pattern Overlay */}
      <div 
        className="absolute inset-0 opacity-10 pointer-events-none" 
        style={{ backgroundImage: 'radial-gradient(circle, #45474b 1px, transparent 1px)', backgroundSize: '40px 40px' }}
      ></div>

      {/* SVG Data Paths (Simplified DAG) */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none">
        <defs>
          <marker id="arrowhead" markerHeight="7" markerWidth="10" orient="auto" refX="0" refY="3.5">
            <polygon fill="#00daf3" fillOpacity="0.3" points="0 0, 10 3.5, 0 7"></polygon>
          </marker>
          <linearGradient id="lineGradient" x1="0%" x2="100%" y1="0%" y2="0%">
            <stop offset="0%" style={{stopColor: '#00daf3', stopOpacity: 0.1}}></stop>
            <stop offset="50%" style={{stopColor: '#00daf3', stopOpacity: 0.4}}></stop>
            <stop offset="100%" style={{stopColor: '#00daf3', stopOpacity: 0.1}}></stop>
          </linearGradient>
        </defs>
        <path d="M 200 300 Q 400 300 600 200" fill="none" stroke="url(#lineGradient)" strokeWidth="2"></path>
        <path d="M 200 300 Q 400 300 600 450" fill="none" stroke="url(#lineGradient)" strokeWidth="2"></path>
        <path d="M 600 200 Q 800 200 1000 300" fill="none" stroke="url(#lineGradient)" strokeWidth="2"></path>
        <path d="M 600 450 Q 800 450 1000 300" fill="none" stroke="url(#lineGradient)" strokeWidth="2"></path>
        <path d="M 1000 300 L 1200 300" fill="none" stroke="url(#lineGradient)" strokeWidth="2"></path>
      </svg>

      {/* Graph Nodes */}
      {/* Entry Node */}
      <div className="absolute top-[280px] left-[160px] flex flex-col items-center group cursor-pointer">
        <div className="w-10 h-10 rounded-full glass-panel border-cyan-400 flex items-center justify-center text-cyan-400 group-hover:scale-110 transition-transform">
          <span className="material-symbols-outlined text-xl">database</span>
        </div>
        <div className="mt-2 glass-panel px-3 py-1 rounded-sm border border-cyan-500/30">
          <span className="text-[10px] font-mono tracking-tighter text-cyan-400">INGEST_HUB_01</span>
        </div>
      </div>

      {/* Processing Nodes */}
      <div className="absolute top-[180px] left-[560px] flex flex-col items-center group cursor-pointer">
        <div className="w-12 h-12 rounded-full glass-panel border-tertiary/50 flex items-center justify-center text-tertiary node-pulse">
          <span className="material-symbols-outlined text-xl" style={{fontVariationSettings: "'FILL' 1"}}>memory</span>
        </div>
        <div className="mt-2 glass-panel px-3 py-1 rounded-sm border border-tertiary/30">
          <span className="text-[10px] font-mono tracking-tighter text-tertiary">VALIDATOR_NODE_A</span>
        </div>
      </div>
      <div className="absolute top-[430px] left-[560px] flex flex-col items-center group cursor-pointer">
        <div className="w-12 h-12 rounded-full glass-panel border-cyan-400/50 flex items-center justify-center text-cyan-400 group-hover:scale-110 transition-transform">
          <span className="material-symbols-outlined text-xl">transform</span>
        </div>
        <div className="mt-2 glass-panel px-3 py-1 rounded-sm border border-cyan-500/20">
          <span className="text-[10px] font-mono tracking-tighter text-slate-400">TRANSFORM_NODE_B</span>
        </div>
      </div>

      {/* Aggregate Node (Selected) */}
      <div className="absolute top-[280px] left-[960px] flex flex-col items-center z-10">
        <div className="w-16 h-16 rounded-full bg-cyan-400/20 border-2 border-cyan-400 flex items-center justify-center text-cyan-400 shadow-[0_0_20px_rgba(0,218,243,0.3)]">
          <span className="material-symbols-outlined text-3xl">hub</span>
        </div>
        <div className="mt-4 glass-panel px-4 py-2 rounded-sm border-2 border-cyan-400">
          <span className="text-[12px] font-mono font-bold tracking-tight text-cyan-400">AGGREGATOR_CORE_MAIN</span>
        </div>
      </div>

      {/* Terminal Node */}
      <div className="absolute top-[280px] left-[1180px] flex flex-col items-center opacity-60">
        <div className="w-8 h-8 rounded-full border border-slate-600 flex items-center justify-center text-slate-500">
          <span className="material-symbols-outlined text-sm">cloud_upload</span>
        </div>
      </div>

      {/* UI Overlays: Left Panel (Metrics) */}
      <div className="absolute left-6 top-6 bottom-6 w-80 pointer-events-none flex flex-col gap-4">
        <div className="glass-panel p-5 pointer-events-auto rounded-lg">
          <div className="flex justify-between items-start mb-6">
            <div>
              <h3 className="font-headline text-xs font-bold tracking-widest text-cyan-400 uppercase">SYSTEM TELEMETRY</h3>
              <p className="text-[10px] text-slate-500 mt-1 font-mono">0.02ms LATENCY AVG</p>
            </div>
            <span className="text-tertiary text-[10px] font-mono border border-tertiary/30 px-2 py-0.5 rounded">ONLINE</span>
          </div>
          
          <div className="space-y-4">
            <div className="relative h-12 bg-surface-container-low rounded overflow-hidden">
              <div className="absolute inset-0 flex items-end">
                <div className="w-full h-8 bg-gradient-to-t from-cyan-400/20 to-transparent"></div>
              </div>
              <div className="absolute inset-0 flex items-center px-3 justify-between">
                <span className="text-[10px] font-bold text-slate-400 tracking-wider">THROUGHPUT</span>
                <span className="text-[10px] font-mono text-cyan-400">1.2 TB/S</span>
              </div>
              <svg className="absolute bottom-0 w-full h-8" preserveAspectRatio="none">
                <path d="M0 32 L20 10 L40 25 L60 5 L80 20 L100 8 L120 28 L140 12 L160 22 L180 5 L200 15 L220 2 L240 25 L260 10 L280 32" fill="none" stroke="#00daf3" strokeWidth="2"></path>
              </svg>
            </div>
            <div className="grid grid-cols-2 gap-2">
              <div className="bg-surface-container p-3 rounded">
                <p className="text-[9px] text-slate-500 mb-1">NODES ACTIVE</p>
                <p className="font-headline text-lg font-bold text-on-surface">1,024</p>
              </div>
              <div className="bg-surface-container p-3 rounded">
                <p className="text-[9px] text-slate-500 mb-1">EDGE COUNT</p>
                <p className="font-headline text-lg font-bold text-on-surface">45.2K</p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="glass-panel p-5 pointer-events-auto rounded-lg flex-1">
          <div className="flex items-center gap-2 mb-4">
            <span className="material-symbols-outlined text-cyan-400 text-sm">history</span>
            <h3 className="font-headline text-xs font-bold tracking-widest text-on-surface uppercase">LINEAGE LOG</h3>
          </div>
          <div className="space-y-3 font-mono text-[9px]">
            <div className="flex gap-3 border-l-2 border-cyan-400/30 pl-3 py-1">
              <span className="text-slate-500">14:20:11</span>
              <span className="text-cyan-400">PATH_RECONSTRUCTED</span>
              <span className="text-slate-400">ID:0x92f</span>
            </div>
            <div className="flex gap-3 border-l-2 border-tertiary pl-3 py-1">
              <span className="text-slate-500">14:18:05</span>
              <span className="text-tertiary">NODE_VALIDATED</span>
              <span className="text-slate-400">ID:0xA12</span>
            </div>
            <div className="flex gap-3 border-l-2 border-cyan-400/30 pl-3 py-1">
              <span className="text-slate-500">14:15:33</span>
              <span className="text-cyan-400">INGEST_STREAM_01</span>
              <span className="text-slate-400">ID:0x22C</span>
            </div>
            <div className="flex gap-3 border-l-2 border-cyan-400/30 pl-3 py-1">
              <span className="text-slate-500">14:12:01</span>
              <span className="text-cyan-400">METRIC_SYNC_OK</span>
              <span className="text-slate-400">ID:0xCC4</span>
            </div>
          </div>
        </div>
      </div>

      {/* UI Overlays: Right Panel (Node Inspector) */}
      <div className="absolute right-6 top-6 bottom-6 w-96 pointer-events-none">
        <div className="glass-panel p-6 pointer-events-auto rounded-lg h-full border-r-4 border-cyan-400 flex flex-col">
          <div className="mb-8">
            <div className="flex justify-between items-center mb-2">
              <span className="text-[10px] font-mono text-cyan-400">NODE_UUID: 4492-AX2-001</span>
              <span className="material-symbols-outlined text-slate-500 text-sm cursor-pointer">close</span>
            </div>
            <h2 className="font-headline text-2xl font-bold tracking-tight text-on-surface">AGGREGATOR_CORE_MAIN</h2>
            <div className="flex gap-2 mt-2">
              <span className="px-2 py-0.5 bg-cyan-500/10 text-cyan-400 text-[9px] font-bold rounded">CLUSTER: ALPHA</span>
              <span className="px-2 py-0.5 bg-surface-container-highest text-slate-400 text-[9px] font-bold rounded">IMMUTABLE</span>
            </div>
          </div>
          
          <div className="space-y-6 flex-1">
            <div>
              <div className="flex justify-between items-end mb-2">
                <h4 className="text-[10px] font-bold text-slate-500 tracking-widest uppercase">POSTGRES AGGREGATE METRICS</h4>
                <span className="text-[10px] font-mono text-cyan-400">SYNC: 1.2s AGO</span>
              </div>
              <div className="bg-surface-container-low border border-white/5 rounded-sm p-4 space-y-3">
                <div className="flex justify-between">
                  <span className="text-[11px] text-slate-400">Row Count</span>
                  <span className="text-[11px] font-mono text-on-surface">12,482,901</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[11px] text-slate-400">Index Hits</span>
                  <span className="text-[11px] font-mono text-tertiary">99.82%</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[11px] text-slate-400">Write Latency</span>
                  <span className="text-[11px] font-mono text-on-surface">0.42 ms</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[11px] text-slate-400">Storage Size</span>
                  <span className="text-[11px] font-mono text-on-surface">4.2 TB</span>
                </div>
              </div>
            </div>

            <div>
              <h4 className="text-[10px] font-bold text-slate-500 tracking-widest uppercase mb-3">UPSTREAM DEPENDENCIES</h4>
              <div className="space-y-2">
                <div className="flex items-center justify-between p-2 bg-white/5 rounded-sm border-l-2 border-tertiary">
                  <div className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-xs text-tertiary">check_circle</span>
                    <span className="text-[10px] font-mono text-slate-200">VALIDATOR_NODE_A</span>
                  </div>
                  <span className="material-symbols-outlined text-slate-600 text-sm">open_in_new</span>
                </div>
                <div className="flex items-center justify-between p-2 bg-white/5 rounded-sm border-l-2 border-cyan-400">
                  <div className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-xs text-cyan-400">sync</span>
                    <span className="text-[10px] font-mono text-slate-200">TRANSFORM_NODE_B</span>
                  </div>
                  <span className="material-symbols-outlined text-slate-600 text-sm">open_in_new</span>
                </div>
              </div>
            </div>

            <div className="bg-error-container/10 border border-error/20 p-4 rounded-sm">
              <div className="flex items-center gap-2 mb-2">
                <span className="material-symbols-outlined text-error text-sm">warning</span>
                <span className="text-[10px] font-bold text-error tracking-widest uppercase">RISK ASSESSMENT</span>
              </div>
              <p className="text-[10px] text-slate-400 leading-relaxed">System detected 12 orphaned records in past 60m. Lineage integrity remains 99.9%.</p>
            </div>
          </div>
          
          <div className="mt-8 pt-6 border-t border-white/5 flex gap-2">
            <button className="flex-1 bg-gradient-to-r from-cyan-500 to-cyan-700 text-on-primary py-2 px-4 rounded-sm text-[10px] font-bold uppercase tracking-widest hover:brightness-110 active:scale-95 transition-all">
              EXPORT SUBGRAPH
            </button>
            <button className="w-12 border border-outline/30 flex items-center justify-center rounded-sm hover:bg-white/5 transition-colors">
              <span className="material-symbols-outlined text-slate-400">download</span>
            </button>
          </div>
        </div>
      </div>

      {/* Floating Control Bar */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 glass-panel p-2 rounded-full flex gap-1 border-white/10 z-20">
        <button className="p-3 text-slate-400 hover:text-cyan-400 hover:bg-white/5 rounded-full transition-all">
          <span className="material-symbols-outlined">zoom_in</span>
        </button>
        <button className="p-3 text-slate-400 hover:text-cyan-400 hover:bg-white/5 rounded-full transition-all">
          <span className="material-symbols-outlined">zoom_out</span>
        </button>
        <div className="w-px h-6 bg-white/10 my-auto mx-1"></div>
        <button className="p-3 text-cyan-400 bg-cyan-400/10 rounded-full transition-all">
          <span className="material-symbols-outlined">filter_center_focus</span>
        </button>
        <button className="p-3 text-slate-400 hover:text-cyan-400 hover:bg-white/5 rounded-full transition-all">
          <span className="material-symbols-outlined">layers</span>
        </button>
        <div className="w-px h-6 bg-white/10 my-auto mx-1"></div>
        <button className="p-3 text-slate-400 hover:text-cyan-400 hover:bg-white/5 rounded-full transition-all">
          <span className="material-symbols-outlined">fullscreen</span>
        </button>
      </div>

      {/* Navigation Breadcrumb */}
      <div className="absolute top-6 left-1/2 -translate-x-1/2 flex items-center gap-3 glass-panel px-4 py-1.5 rounded-sm border-white/5 z-20">
        <span className="text-[9px] font-bold text-slate-500 tracking-widest uppercase">CLUSTER_MAIN</span>
        <span className="material-symbols-outlined text-xs text-slate-600">chevron_right</span>
        <span className="text-[9px] font-bold text-slate-500 tracking-widest uppercase">DATABASE_LAYER</span>
        <span className="material-symbols-outlined text-xs text-slate-600">chevron_right</span>
        <span className="text-[9px] font-bold text-cyan-400 tracking-widest uppercase">AGGREGATOR_CORE</span>
      </div>
    </div>
  );
}
