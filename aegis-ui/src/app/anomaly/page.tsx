"use client";
import React from 'react';

export default function AnomalyDetection() {
  return (
    <div className="p-8">
      {/* Header Section */}
      <header className="mb-10 flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div>
          <span className="text-[10px] font-bold tracking-[0.2em] text-tertiary uppercase mb-2 block">System Diagnostics: Active</span>
          <h1 className="text-4xl md:text-5xl font-headline font-bold text-on-surface tracking-tighter uppercase">Anomaly Engine</h1>
          <p className="mt-2 text-on-surface-variant max-w-xl font-body text-sm leading-relaxed">
            Real-time heuristic analysis utilizing Exponential Moving Averages (EMA) to isolate systemic volatility and predict failures within the Aegis infrastructure.
          </p>
        </div>
        <div className="flex gap-4">
          <div className="px-6 py-3 bg-surface-container border border-outline-variant/20 rounded-lg flex flex-col">
            <span className="text-[10px] font-bold uppercase text-on-surface-variant mb-1">Risk Entropy</span>
            <span className="text-2xl font-headline font-bold text-primary">0.024 RMS</span>
          </div>
          <div className="px-6 py-3 bg-surface-container border border-outline-variant/20 rounded-lg flex flex-col">
            <span className="text-[10px] font-bold uppercase text-on-surface-variant mb-1">Active Nodes</span>
            <span className="text-2xl font-headline font-bold text-tertiary">1,402</span>
          </div>
        </div>
      </header>

      {/* Grid Layout */}
      <div className="grid grid-cols-12 gap-6">
        {/* Main Scatter Plot / Risk Model */}
        <div className="col-span-12 lg:col-span-8 space-y-6">
          <div className="bg-surface-container border border-outline-variant/10 rounded-xl p-6 relative overflow-hidden">
            <div className="flex justify-between items-center mb-8">
              <h3 className="font-headline text-lg font-bold flex items-center gap-2">
                <span className="material-symbols-outlined text-primary">scatter_plot</span>
                PREDICTED VS. ACTUAL FAILURES
              </h3>
              <div className="flex gap-2">
                <span className="px-2 py-1 rounded bg-surface-container-highest text-[10px] font-bold text-on-surface uppercase tracking-wider">H: 24h</span>
                <span className="px-2 py-1 rounded bg-primary text-on-primary text-[10px] font-bold text-on-surface uppercase tracking-wider">LIVE</span>
              </div>
            </div>
            
            {/* Visual Mock of a Scatter Plot */}
            <div className="h-80 w-full relative border-l border-b border-outline-variant/20 flex items-end">
              <div className="absolute inset-0 grid grid-cols-8 grid-rows-6 pointer-events-none">
                <div className="border-r border-t border-outline-variant/5"></div><div className="border-r border-t border-outline-variant/5"></div><div className="border-r border-t border-outline-variant/5"></div><div className="border-r border-t border-outline-variant/5"></div><div className="border-r border-t border-outline-variant/5"></div><div className="border-r border-t border-outline-variant/5"></div><div className="border-r border-t border-outline-variant/5"></div><div className="border-t border-outline-variant/5"></div>
              </div>
              <div className="absolute bottom-1/4 left-1/4 w-3 h-3 bg-primary rounded-full shadow-[0_0_10px_rgba(0,218,243,0.5)]"></div>
              <div className="absolute bottom-1/3 left-1/2 w-4 h-4 bg-tertiary rounded-full shadow-[0_0_10px_rgba(42,229,0,0.5)]"></div>
              <div className="absolute bottom-2/3 left-1/3 w-3 h-3 bg-primary rounded-full opacity-60"></div>
              <div className="absolute bottom-1/2 left-3/4 w-2 h-2 bg-primary rounded-full"></div>
              <div className="absolute top-1/4 left-2/3 w-5 h-5 bg-error rounded-full shadow-[0_0_15px_rgba(255,180,171,0.6)] animate-pulse"></div>
              <div className="absolute bottom-1/4 left-10 w-2 h-2 bg-tertiary rounded-full"></div>
              <div className="absolute bottom-40 left-60 w-3 h-3 bg-tertiary rounded-full"></div>
              <div className="absolute top-10 right-20 w-4 h-4 bg-error rounded-full opacity-40"></div>
              <div className="absolute -left-12 top-1/2 -rotate-90 text-[10px] font-bold text-on-surface-variant uppercase tracking-widest">Latency (ms)</div>
              <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 text-[10px] font-bold text-on-surface-variant uppercase tracking-widest">Throughput (req/s)</div>
            </div>

            <div className="mt-12 flex flex-wrap gap-8">
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 bg-tertiary rounded-full"></div>
                <div>
                  <div className="text-[10px] font-bold uppercase text-on-surface-variant">Optimal State</div>
                  <div className="text-xs font-mono">98.4% Accuracy</div>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 bg-primary rounded-full"></div>
                <div>
                  <div className="text-[10px] font-bold uppercase text-on-surface-variant">Predicted Path</div>
                  <div className="text-xs font-mono">EMA(12, 26, 9)</div>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 bg-error rounded-full animate-pulse"></div>
                <div>
                  <div className="text-[10px] font-bold uppercase text-on-surface-variant">Anomalies</div>
                  <div className="text-xs font-mono">3 Critical Events</div>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-surface-container border border-outline-variant/10 rounded-xl p-6">
              <h4 className="font-headline text-sm font-bold uppercase tracking-widest mb-4">EMA Heuristics | Primary</h4>
              <div className="h-32 w-full flex items-end gap-[2px]">
                <div className="bg-primary/20 hover:bg-primary h-[40%] w-full transition-colors cursor-crosshair"></div>
                <div className="bg-primary/20 hover:bg-primary h-[45%] w-full transition-colors cursor-crosshair"></div>
                <div className="bg-primary/20 hover:bg-primary h-[55%] w-full transition-colors cursor-crosshair"></div>
                <div className="bg-primary/20 hover:bg-primary h-[48%] w-full transition-colors cursor-crosshair"></div>
                <div className="bg-error/40 hover:bg-error h-[85%] w-full transition-colors cursor-crosshair"></div>
                <div className="bg-primary/20 hover:bg-primary h-[50%] w-full transition-colors cursor-crosshair"></div>
                <div className="bg-primary/20 hover:bg-primary h-[42%] w-full transition-colors cursor-crosshair"></div>
                <div className="bg-primary/20 hover:bg-primary h-[38%] w-full transition-colors cursor-crosshair"></div>
              </div>
              <div className="mt-4 flex justify-between items-center">
                <span className="text-[10px] font-mono text-on-surface-variant uppercase">Volatility Index</span>
                <span className="text-sm font-bold text-error">Warning [74.2%]</span>
              </div>
            </div>

            <div className="bg-surface-container border border-outline-variant/10 rounded-xl p-6">
              <h4 className="font-headline text-sm font-bold uppercase tracking-widest mb-4">Risk Density Heatmap</h4>
              <div className="grid grid-cols-10 grid-rows-4 gap-1 h-32">
                <div className="bg-tertiary/10 rounded-sm hover:bg-tertiary transition-colors"></div>
                <div className="bg-tertiary/20 rounded-sm hover:bg-tertiary transition-colors"></div>
                <div className="bg-tertiary/10 rounded-sm hover:bg-tertiary transition-colors"></div>
                <div className="bg-primary/40 rounded-sm hover:bg-primary transition-colors"></div>
                <div className="bg-tertiary/10 rounded-sm hover:bg-tertiary transition-colors"></div>
                <div className="bg-tertiary/20 rounded-sm hover:bg-tertiary transition-colors"></div>
                <div className="bg-error/20 rounded-sm hover:bg-error transition-colors"></div>
                <div className="bg-error/60 rounded-sm hover:bg-error transition-colors"></div>
                <div className="bg-tertiary/10 rounded-sm hover:bg-tertiary transition-colors"></div>
                <div className="bg-tertiary/10 rounded-sm hover:bg-tertiary transition-colors"></div>
                
                <div className="bg-tertiary/20 rounded-sm"></div><div className="bg-tertiary/10 rounded-sm"></div><div className="bg-tertiary/40 rounded-sm"></div><div className="bg-tertiary/20 rounded-sm"></div><div className="bg-tertiary/10 rounded-sm"></div><div className="bg-error/80 rounded-sm animate-pulse"></div><div className="bg-error/40 rounded-sm"></div><div className="bg-tertiary/10 rounded-sm"></div><div className="bg-tertiary/10 rounded-sm"></div><div className="bg-tertiary/10 rounded-sm"></div>
                
                <div className="bg-tertiary/10 rounded-sm"></div><div className="bg-tertiary/30 rounded-sm"></div><div className="bg-tertiary/10 rounded-sm"></div><div className="bg-tertiary/20 rounded-sm"></div><div className="bg-tertiary/10 rounded-sm"></div><div className="bg-tertiary/10 rounded-sm"></div><div className="bg-tertiary/20 rounded-sm"></div><div className="bg-tertiary/10 rounded-sm"></div><div className="bg-tertiary/40 rounded-sm"></div><div className="bg-tertiary/10 rounded-sm"></div>
                
                <div className="bg-tertiary/10 rounded-sm"></div><div className="bg-tertiary/10 rounded-sm"></div><div className="bg-tertiary/10 rounded-sm"></div><div className="bg-primary/20 rounded-sm"></div><div className="bg-tertiary/10 rounded-sm"></div><div className="bg-tertiary/10 rounded-sm"></div><div className="bg-tertiary/10 rounded-sm"></div><div className="bg-tertiary/20 rounded-sm"></div><div className="bg-tertiary/10 rounded-sm"></div><div className="bg-tertiary/10 rounded-sm"></div>
              </div>
              <div className="mt-4 flex justify-between items-center">
                <span className="text-[10px] font-mono text-on-surface-variant uppercase">Saturation Levels</span>
                <span className="text-sm font-bold text-tertiary">Nominal [12.8%]</span>
              </div>
            </div>
          </div>
        </div>

        <div className="col-span-12 lg:col-span-4 space-y-6">
          <div className="bg-surface-container-high border border-outline-variant/20 rounded-xl overflow-hidden shadow-2xl">
            <div className="p-6 border-b border-outline-variant/10">
              <h3 className="font-headline text-lg font-bold flex items-center gap-2 uppercase">
                <span className="material-symbols-outlined text-tertiary">auto_fix_high</span> Mitigation Engine
              </h3>
              <p className="text-xs text-on-surface-variant mt-1">Autonomous containment & response logs.</p>
            </div>
            
            <div className="p-6 bg-surface-container-highest/30">
              <div className="flex justify-between items-center mb-2">
                <span className="text-[10px] font-bold uppercase tracking-widest text-on-surface-variant">Neural Confidence Score</span>
                <span className="text-xs font-mono text-primary">94.8%</span>
              </div>
              <div className="w-full bg-surface h-1.5 rounded-full overflow-hidden">
                <div className="bg-primary h-full w-[94.8%] shadow-[0_0_8px_rgba(0,218,243,0.5)]"></div>
              </div>
            </div>

            <div className="p-6 space-y-6 max-h-[460px] overflow-y-auto">
              <div className="flex gap-4 items-start border-l-2 border-error pl-4">
                <div className="flex-1">
                  <div className="flex justify-between">
                    <span className="text-xs font-bold uppercase text-error">Anomaly Detected</span>
                    <span className="text-[10px] font-mono text-on-surface-variant">12:04:22</span>
                  </div>
                  <p className="text-xs text-on-surface mt-1 leading-snug">Spike in thread execution on Cluster B7. Volatility deviation {">"} 4.2σ.</p>
                  <div className="mt-3 flex items-center gap-2">
                    <span className="material-symbols-outlined text-[14px] text-tertiary">check_circle</span>
                    <span className="text-[10px] font-bold uppercase text-tertiary tracking-tighter">Auto-isolated Node</span>
                  </div>
                </div>
              </div>

              <div className="flex gap-4 items-start border-l-2 border-primary pl-4">
                <div className="flex-1">
                  <div className="flex justify-between">
                    <span className="text-xs font-bold uppercase text-primary">Predictive Re-route</span>
                    <span className="text-[10px] font-mono text-on-surface-variant">11:58:10</span>
                  </div>
                  <p className="text-xs text-on-surface mt-1 leading-snug">Load forecast exceeds threshold for Zone-9. Proactively shifting traffic to secondary nodes.</p>
                  <div className="mt-3 flex items-center gap-2">
                    <span className="material-symbols-outlined text-[14px] text-primary">sync_alt</span>
                    <span className="text-[10px] font-bold uppercase text-primary tracking-tighter">Balance Stabilized</span>
                  </div>
                </div>
              </div>

              <div className="flex gap-4 items-start border-l-2 border-outline-variant pl-4">
                <div className="flex-1">
                  <div className="flex justify-between">
                    <span className="text-xs font-bold uppercase text-on-surface-variant">EMA Recalibration</span>
                    <span className="text-[10px] font-mono text-on-surface-variant">11:45:00</span>
                  </div>
                  <p className="text-xs text-on-surface mt-1 leading-snug">Smoothing parameters adjusted for weekend traffic patterns. Confidence index refreshed.</p>
                </div>
              </div>

              <div className="flex gap-4 items-start border-l-2 border-tertiary pl-4">
                <div className="flex-1">
                  <div className="flex justify-between">
                    <span className="text-xs font-bold uppercase text-tertiary">Heartbeat Optimal</span>
                    <span className="text-[10px] font-mono text-on-surface-variant">11:30:00</span>
                  </div>
                  <p className="text-xs text-on-surface mt-1 leading-snug">Global consensus reached. All risk models report baseline status.</p>
                </div>
              </div>
            </div>

            <div className="p-6 border-t border-outline-variant/10 flex flex-col gap-3">
              <button className="w-full py-3 bg-primary text-on-primary font-bold uppercase tracking-widest text-[10px] rounded-md hover:brightness-110 active:scale-95 transition-all">Force Global Reset</button>
              <button className="w-full py-3 border border-outline-variant/30 text-on-surface-variant font-bold uppercase tracking-widest text-[10px] rounded-md hover:bg-white/5 transition-all">Download Heuristic Report</button>
            </div>
          </div>

          <div className="bg-surface-container border border-outline-variant/10 rounded-xl p-6 flex items-center justify-between">
            <div>
              <div className="text-[10px] font-bold uppercase text-on-surface-variant mb-1">Compute Latency</div>
              <div className="text-2xl font-headline font-bold text-tertiary">0.08ms</div>
            </div>
            <div className="text-right">
              <div className="text-[10px] font-bold uppercase text-on-surface-variant mb-1">Uptime</div>
              <div className="text-sm font-mono text-on-surface">99.9999%</div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Data Streams */}
      <section className="mt-12">
        <h3 className="font-headline text-lg font-bold mb-6 flex items-center gap-2 uppercase">
          <span className="material-symbols-outlined text-primary">hub</span> Neural Node Connectivity
        </h3>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
          <div className="bg-surface-container-low border border-outline-variant/10 p-4 rounded-lg group hover:border-primary/40 transition-all">
            <div className="flex justify-between mb-3">
              <span className="text-[10px] font-mono text-on-surface-variant">NODE-01</span>
              <div className="w-2 h-2 bg-tertiary rounded-full shadow-[0_0_8px_rgba(42,229,0,0.5)]"></div>
            </div>
            <div className="text-lg font-headline font-bold text-on-surface">4.2%</div>
            <div className="text-[8px] font-bold uppercase text-on-surface-variant tracking-wider">Risk Level</div>
          </div>
          <div className="bg-surface-container-low border border-outline-variant/10 p-4 rounded-lg group hover:border-error/40 transition-all">
            <div className="flex justify-between mb-3">
              <span className="text-[10px] font-mono text-on-surface-variant">NODE-02</span>
              <div className="w-2 h-2 bg-error rounded-full shadow-[0_0_8px_rgba(255,180,171,0.5)] animate-pulse"></div>
            </div>
            <div className="text-lg font-headline font-bold text-error">88.1%</div>
            <div className="text-[8px] font-bold uppercase text-on-surface-variant tracking-wider">Risk Level</div>
          </div>
          <div className="bg-surface-container-low border border-outline-variant/10 p-4 rounded-lg group hover:border-primary/40 transition-all">
            <div className="flex justify-between mb-3">
              <span className="text-[10px] font-mono text-on-surface-variant">NODE-03</span>
              <div className="w-2 h-2 bg-tertiary rounded-full"></div>
            </div>
            <div className="text-lg font-headline font-bold text-on-surface">1.2%</div>
            <div className="text-[8px] font-bold uppercase text-on-surface-variant tracking-wider">Risk Level</div>
          </div>
          <div className="bg-surface-container-low border border-outline-variant/10 p-4 rounded-lg group hover:border-primary/40 transition-all">
            <div className="flex justify-between mb-3">
              <span className="text-[10px] font-mono text-on-surface-variant">NODE-04</span>
              <div className="w-2 h-2 bg-tertiary rounded-full"></div>
            </div>
            <div className="text-lg font-headline font-bold text-on-surface">0.8%</div>
            <div className="text-[8px] font-bold uppercase text-on-surface-variant tracking-wider">Risk Level</div>
          </div>
          <div className="bg-surface-container-low border border-outline-variant/10 p-4 rounded-lg group hover:border-primary/40 transition-all">
            <div className="flex justify-between mb-3">
              <span className="text-[10px] font-mono text-on-surface-variant">NODE-05</span>
              <div className="w-2 h-2 bg-primary rounded-full"></div>
            </div>
            <div className="text-lg font-headline font-bold text-on-surface">15.4%</div>
            <div className="text-[8px] font-bold uppercase text-on-surface-variant tracking-wider">Risk Level</div>
          </div>
          <div className="bg-surface-container-low border border-outline-variant/10 p-4 rounded-lg group hover:border-primary/40 transition-all">
            <div className="flex justify-between mb-3">
              <span className="text-[10px] font-mono text-on-surface-variant">NODE-06</span>
              <div className="w-2 h-2 bg-tertiary rounded-full"></div>
            </div>
            <div className="text-lg font-headline font-bold text-on-surface">2.3%</div>
            <div className="text-[8px] font-bold uppercase text-on-surface-variant tracking-wider">Risk Level</div>
          </div>
        </div>
      </section>
    </div>
  );
}
