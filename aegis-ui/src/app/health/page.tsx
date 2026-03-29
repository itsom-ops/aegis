"use client";
import React from 'react';

export default function SystemHealth() {
  return (
    <div className="p-8">
      {/* Header Section */}
      <div className="mb-10 flex justify-between items-end">
        <div>
          <h1 className="text-4xl font-headline font-bold text-on-surface tracking-tight mb-2 uppercase">System Health</h1>
          <p className="text-on-surface-variant font-body max-w-2xl text-sm leading-relaxed">
            Visualizing mathematical M/M/C queuing logic and live tensor topology metrics across primary and secondary clusters.
          </p>
        </div>
        <div className="flex gap-4 items-center">
          <div className="flex flex-col items-end">
            <span className="text-[10px] font-bold text-tertiary tracking-widest uppercase mb-1">Live Status</span>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-tertiary shadow-[0_0_8px_#2ae500]"></span>
              <span className="text-xs font-mono text-on-surface">99.98% UPTIME</span>
            </div>
          </div>
        </div>
      </div>

      {/* Dashboard Grid */}
      <div className="grid grid-cols-12 gap-6">
        {/* Bento Card: Neural Confidence Scoring */}
        <div className="col-span-12 lg:col-span-8 bg-surface-container rounded-xl p-6 relative overflow-hidden group">
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl -mr-32 -mt-32"></div>
          <div className="flex justify-between items-start mb-8">
            <div>
              <span className="text-[10px] font-bold text-primary tracking-widest uppercase block mb-1">Core Metrics</span>
              <h3 className="text-xl font-headline font-semibold text-on-surface">Neural Confidence Scoring</h3>
            </div>
            <div className="flex gap-2">
              <span className="px-2 py-1 bg-surface-container-highest rounded text-[10px] font-mono text-on-surface-variant uppercase">Tensor-v4</span>
              <span className="px-2 py-1 bg-surface-container-highest rounded text-[10px] font-mono text-on-surface-variant uppercase">Real-Time</span>
            </div>
          </div>
          
          <div className="h-64 flex items-end justify-between gap-1 mt-4">
            {/* Simulated Waveform/Chart */}
            <div className="w-2 h-[40%] bg-primary/20 rounded-t-sm"></div>
            <div className="w-2 h-[55%] bg-primary/30 rounded-t-sm"></div>
            <div className="w-2 h-[45%] bg-primary/20 rounded-t-sm"></div>
            <div className="w-2 h-[70%] bg-primary/40 rounded-t-sm"></div>
            <div className="w-2 h-[85%] bg-primary rounded-t-sm shadow-[0_0_15px_rgba(0,218,243,0.3)]"></div>
            <div className="w-2 h-[90%] bg-primary rounded-t-sm shadow-[0_0_15px_rgba(0,218,243,0.3)]"></div>
            <div className="w-2 h-[65%] bg-primary/40 rounded-t-sm"></div>
            <div className="w-2 h-[50%] bg-primary/20 rounded-t-sm"></div>
            <div className="w-2 h-[40%] bg-primary/20 rounded-t-sm"></div>
            <div className="w-2 h-[60%] bg-primary/30 rounded-t-sm"></div>
            <div className="w-2 h-[75%] bg-primary/50 rounded-t-sm"></div>
            <div className="w-2 h-[95%] bg-primary rounded-t-sm shadow-[0_0_15px_rgba(0,218,243,0.3)]"></div>
            <div className="w-2 h-[80%] bg-primary/60 rounded-t-sm"></div>
            <div className="w-2 h-[65%] bg-primary/40 rounded-t-sm"></div>
            <div className="w-2 h-[45%] bg-primary/20 rounded-t-sm"></div>
            <div className="w-2 h-[30%] bg-primary/10 rounded-t-sm"></div>
            <div className="w-2 h-[55%] bg-primary/30 rounded-t-sm"></div>
            <div className="w-2 h-[70%] bg-primary/40 rounded-t-sm"></div>
            <div className="w-2 h-[85%] bg-primary rounded-t-sm shadow-[0_0_15px_rgba(0,218,243,0.3)]"></div>
            <div className="w-2 h-[75%] bg-primary/50 rounded-t-sm"></div>
            <div className="w-2 h-[50%] bg-primary/20 rounded-t-sm"></div>
            <div className="w-2 h-[40%] bg-primary/20 rounded-t-sm"></div>
            <div className="w-2 h-[60%] bg-primary/30 rounded-t-sm"></div>
          </div>
          
          <div className="grid grid-cols-4 gap-4 mt-8 pt-6 border-t border-white/5">
            <div>
              <p className="text-[10px] font-bold text-on-surface-variant uppercase tracking-wider mb-1">Mean Conf.</p>
              <p className="text-lg font-headline font-bold text-on-surface">0.9982</p>
            </div>
            <div>
              <p className="text-[10px] font-bold text-on-surface-variant uppercase tracking-wider mb-1">Std Dev.</p>
              <p className="text-lg font-headline font-bold text-on-surface">0.0014</p>
            </div>
            <div>
              <p className="text-[10px] font-bold text-on-surface-variant uppercase tracking-wider mb-1">Entropy</p>
              <p className="text-lg font-headline font-bold text-on-surface">0.042</p>
            </div>
            <div>
              <p className="text-[10px] font-bold text-on-surface-variant uppercase tracking-wider mb-1">Latency</p>
              <p className="text-lg font-headline font-bold text-tertiary">14ms</p>
            </div>
          </div>
        </div>

        {/* Bento Card: Queue Length Histogram */}
        <div className="col-span-12 lg:col-span-4 bg-surface-container rounded-xl p-6 flex flex-col">
          <div className="mb-6">
            <span className="text-[10px] font-bold text-tertiary tracking-widest uppercase block mb-1">Live Queue</span>
            <h3 className="text-xl font-headline font-semibold text-on-surface">M/M/C Distribution</h3>
          </div>
          <div className="flex-1 flex flex-col justify-center space-y-4">
            <div className="space-y-2">
              <div className="flex justify-between items-center text-[10px] font-mono text-on-surface-variant uppercase">
                <span>Buffer Alpha</span><span>82%</span>
              </div>
              <div className="h-2 bg-surface-container-highest rounded-full overflow-hidden">
                <div className="h-full bg-gradient-to-r from-primary to-on-primary-container w-[82%]"></div>
              </div>
            </div>
            <div className="space-y-2">
              <div className="flex justify-between items-center text-[10px] font-mono text-on-surface-variant uppercase">
                <span>Request Load</span><span>45%</span>
              </div>
              <div className="h-2 bg-surface-container-highest rounded-full overflow-hidden">
                <div className="h-full bg-gradient-to-r from-primary to-on-primary-container w-[45%]"></div>
              </div>
            </div>
            <div className="space-y-2">
              <div className="flex justify-between items-center text-[10px] font-mono text-on-surface-variant uppercase">
                <span>Cycle Exhaust</span><span>12%</span>
              </div>
              <div className="h-2 bg-surface-container-highest rounded-full overflow-hidden">
                <div className="h-full bg-gradient-to-r from-primary to-on-primary-container w-[12%]"></div>
              </div>
            </div>
          </div>
          <div className="mt-8 p-4 bg-surface-container-lowest rounded-lg border border-white/5">
            <p className="text-[10px] font-mono text-on-surface-variant leading-relaxed">
              <span className="text-primary font-bold">PROBABILITY DENSITY:</span> Queue overflow risk is currently <span className="text-tertiary">{"< 0.001%"}</span> based on current arrival rate (λ = 1450/s).
            </p>
          </div>
        </div>

        {/* Bento Card: Tensor Topology Metrics */}
        <div className="col-span-12 lg:col-span-6 bg-surface-container rounded-xl p-6">
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-lg font-headline font-semibold text-on-surface">Tensor Topology Metrics</h3>
            <span className="material-symbols-outlined text-primary">hub</span>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-surface-container-low p-4 rounded-lg border border-white/5 flex items-center gap-4">
              <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-primary/10">
                <span className="material-symbols-outlined text-primary">memory</span>
              </div>
              <div>
                <p className="text-[10px] font-bold text-on-surface-variant uppercase mb-1">Sync Index</p>
                <p className="text-xl font-headline font-bold">0.999</p>
              </div>
            </div>
            <div className="bg-surface-container-low p-4 rounded-lg border border-white/5 flex items-center gap-4">
              <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-tertiary/10">
                <span className="material-symbols-outlined text-tertiary">speed</span>
              </div>
              <div>
                <p className="text-[10px] font-bold text-on-surface-variant uppercase mb-1">Throughput</p>
                <p className="text-xl font-headline font-bold">12.4 GB/s</p>
              </div>
            </div>
            <div className="bg-surface-container-low p-4 rounded-lg border border-white/5 flex items-center gap-4">
              <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-primary/10">
                <span className="material-symbols-outlined text-primary">layers</span>
              </div>
              <div>
                <p className="text-[10px] font-bold text-on-surface-variant uppercase mb-1">Layer Depth</p>
                <p className="text-xl font-headline font-bold">128-DIM</p>
              </div>
            </div>
            <div className="bg-surface-container-low p-4 rounded-lg border border-white/5 flex items-center gap-4">
              <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-secondary/10">
                <span className="material-symbols-outlined text-secondary">database</span>
              </div>
              <div>
                <p className="text-[10px] font-bold text-on-surface-variant uppercase mb-1">Cache Hit</p>
                <p className="text-xl font-headline font-bold">94.2%</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bento Card: Cluster Infrastructure */}
        <div className="col-span-12 lg:col-span-6 bg-surface-container rounded-xl p-6">
          <h3 className="text-lg font-headline font-semibold text-on-surface mb-6">Cluster Infrastructure</h3>
          <div className="space-y-4">
            <div className="flex items-center justify-between p-3 bg-surface-container-low rounded group hover:bg-surface-container-high transition-colors">
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-tertiary"></div>
                <div>
                  <p className="text-xs font-bold font-mono text-on-surface">PRIME-NORTH-01</p>
                  <p className="text-[10px] text-on-surface-variant">Active Load: 65%</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="text-right">
                  <p className="text-xs font-mono text-on-surface">0.4ms</p>
                  <p className="text-[8px] text-on-surface-variant uppercase">Latency</p>
                </div>
                <span className="material-symbols-outlined text-on-surface-variant text-sm group-hover:text-primary transition-colors">arrow_forward_ios</span>
              </div>
            </div>
            
            <div className="flex items-center justify-between p-3 bg-surface-container-low rounded group hover:bg-surface-container-high transition-colors">
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-tertiary"></div>
                <div>
                  <p className="text-xs font-bold font-mono text-on-surface">PRIME-SOUTH-02</p>
                  <p className="text-[10px] text-on-surface-variant">Active Load: 42%</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="text-right">
                  <p className="text-xs font-mono text-on-surface">1.2ms</p>
                  <p className="text-[8px] text-on-surface-variant uppercase">Latency</p>
                </div>
                <span className="material-symbols-outlined text-on-surface-variant text-sm group-hover:text-primary transition-colors">arrow_forward_ios</span>
              </div>
            </div>
            
            <div className="flex items-center justify-between p-3 bg-surface-container-low rounded group hover:bg-surface-container-high transition-colors">
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-secondary"></div>
                <div>
                  <p className="text-xs font-bold font-mono text-on-surface">SHADOW-WEST-09</p>
                  <p className="text-[10px] text-on-surface-variant">Active Load: 12%</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="text-right">
                  <p className="text-xs font-mono text-on-surface">8.4ms</p>
                  <p className="text-[8px] text-on-surface-variant uppercase">Latency</p>
                </div>
                <span className="material-symbols-outlined text-on-surface-variant text-sm group-hover:text-primary transition-colors">arrow_forward_ios</span>
              </div>
            </div>
          </div>
        </div>

        {/* Wide Card: Distribution Curves */}
        <div className="col-span-12 bg-surface-container rounded-xl p-8 relative overflow-hidden">
          <div className="flex justify-between items-center mb-8">
            <div>
              <h3 className="text-2xl font-headline font-bold text-on-surface uppercase tracking-tight">Distribution Curves</h3>
              <p className="text-sm text-on-surface-variant mt-1">Stochastic analysis of request arrival vs. service completion</p>
            </div>
            <div className="flex gap-4">
              <button className="px-4 py-2 bg-primary/10 border border-primary/20 text-primary text-[10px] font-bold uppercase tracking-widest rounded hover:bg-primary/20 transition-all">Export Datasets</button>
              <button className="px-4 py-2 bg-surface-container-highest border border-white/5 text-on-surface text-[10px] font-bold uppercase tracking-widest rounded hover:bg-white/10 transition-all">Simulation Mode</button>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
            <div className="md:col-span-2 relative h-80 flex items-center justify-center">
              <div className="absolute inset-0 flex items-end">
                <div className="w-full h-full relative">
                  <svg className="w-full h-full" viewBox="0 0 800 300">
                    <path d="M0,280 Q200,280 400,100 T800,50" fill="none" stroke="#00daf3" strokeWidth="3"></path>
                    <path d="M0,280 Q200,280 400,100 T800,50 L800,300 L0,300 Z" fill="url(#grad1)" opacity="0.1"></path>
                    <path d="M0,290 Q300,290 500,150 T800,120" fill="none" stroke="#2ae500" strokeDasharray="5,5" strokeWidth="2"></path>
                    <defs>
                      <linearGradient id="grad1" x1="0%" x2="0%" y1="0%" y2="100%">
                        <stop offset="0%" style={{stopColor: '#00daf3', stopOpacity: 1}}></stop>
                        <stop offset="100%" style={{stopColor: '#00daf3', stopOpacity: 0}}></stop>
                      </linearGradient>
                    </defs>
                  </svg>
                  <div className="absolute inset-0 grid grid-cols-8 grid-rows-4 pointer-events-none">
                    <div className="border-l border-b border-white/5"></div><div className="border-l border-b border-white/5"></div><div className="border-l border-b border-white/5"></div><div className="border-l border-b border-white/5"></div><div className="border-l border-b border-white/5"></div><div className="border-l border-b border-white/5"></div><div className="border-l border-b border-white/5"></div><div className="border-l border-b border-white/5"></div>
                  </div>
                </div>
              </div>
            </div>
            <div className="space-y-6">
              <div className="p-6 bg-surface-container-high rounded-lg border-l-4 border-primary">
                <span className="text-[10px] font-bold text-primary uppercase tracking-widest block mb-1">Queue Equilibrium</span>
                <h4 className="text-3xl font-headline font-bold mb-2">ρ = 0.68</h4>
                <p className="text-xs text-on-surface-variant leading-relaxed">System is operating in optimal performance range. No risk of cascading failure detected in current cycle.</p>
              </div>
              <div className="p-6 bg-surface-container-high rounded-lg border-l-4 border-tertiary">
                <span className="text-[10px] font-bold text-tertiary uppercase tracking-widest block mb-1">Arrival Rate (λ)</span>
                <h4 className="text-3xl font-headline font-bold mb-2">1,452/s</h4>
                <p className="text-xs text-on-surface-variant leading-relaxed">Stability maintained through dynamic load balancing across 14 virtual instances.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Background Decoration */}
      <div className="fixed top-0 left-0 w-full h-full pointer-events-none -z-10 opacity-20">
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-primary/10 blur-[120px] rounded-full"></div>
        <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-tertiary/5 blur-[120px] rounded-full"></div>
      </div>
    </div>
  );
}
