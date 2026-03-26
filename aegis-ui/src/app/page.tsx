"use client";
import React, { useState, useEffect } from 'react';
import { AegisAPI } from '@/services/api';
import { Activity, ShieldAlert, Zap, Server, Network, BrainCircuit, ActivitySquare, ChevronRight, Info, Terminal, Cpu, HardDrive, ShieldCheck, Database, GitMerge } from 'lucide-react';
import HealthChart from '@/components/monitors/HealthChart';
import NetworkGraph from '@/components/graphs/NetworkGraph';
import ProvenanceGraph from '@/components/graphs/ProvenanceGraph';
import DecisionMatrix from '@/components/core/DecisionMatrix';

export default function AegisDashboard() {
  const [systemState, setSystemState] = useState<any>(null);
  const [events, setEvents] = useState<any[]>([]);
  const [activeTab, setActiveTab] = useState<string>('core');

  useEffect(() => {
    const poll = async () => {
      const state = await AegisAPI.fetchState();
      setSystemState(state);
      const newEvts = await AegisAPI.fetchEvents();
      // Keep last 100 events for dense streaming log
      setEvents(prev => [...newEvts, ...prev].slice(0, 100));
    };
    poll();
    const interval = setInterval(poll, 1000); // Polling faster for matrix streaming effect
    return () => clearInterval(interval);
  }, []);

  if (!systemState) return <div className="p-10 text-aegis-cyan font-mono animate-pulse">INITIATING AEGIS NEURAL CORE...</div>;

  const tabs = [
    { id: 'overview', label: 'SYSTEM_OVERVIEW', icon: Info },
    { id: 'core', label: 'CORE_INTELLIGENCE_MATRIX', icon: BrainCircuit },
    { id: 'telemetry', label: 'INGESTION_&_TELEMETRY', icon: ActivitySquare },
    { id: 'routing', label: 'COGNITIVE_LOAD_BALANCER', icon: Network },
    { id: 'provenance', label: 'PROVENANCE_&_LOGIC', icon: Server }
  ];

  return (
    <div className="w-full h-full flex flex-col overflow-hidden pb-10 bg-[#02050A]">
      
      {/* HEADER / NAVIGATION BAR */}
      <nav className="w-full flex flex-wrap gap-2 md:gap-4 px-4 md:px-10 py-4 border-b border-aegis-cyan/20 bg-black/80 shadow-[0_4px_20px_rgba(0,255,204,0.05)] relative z-10">
        <div className="w-full flex justify-between items-center mb-4 border-b border-gray-800 pb-2">
           <div className="flex items-center gap-3">
             <div className="w-3 h-3 bg-aegis-cyan rounded-full animate-pulse shadow-[0_0_15px_#00FFCC]"></div>
             <span className="text-xl font-bold font-mono tracking-widest text-[#FFF] uppercase">
               AEGIS <span className="text-aegis-cyan">//</span> OS
             </span>
           </div>
           <div className="flex gap-4 font-mono text-xs uppercase tracking-widest text-gray-500">
             <span className="flex items-center gap-1"><Cpu size={14} className="text-aegis-magenta"/> TENSOR_CORES: ONLINE</span>
             <span className="flex items-center gap-1"><ShieldCheck size={14} className="text-aegis-green"/> UPLINK: ENCRYPTED</span>
           </div>
        </div>

        {tabs.map(tab => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`flex items-center gap-2 px-4 py-2 rounded-md font-mono text-xs tracking-widest uppercase transition-all duration-300 ${
              activeTab === tab.id 
                ? 'bg-aegis-cyan/10 text-aegis-cyan border border-aegis-cyan shadow-[0_0_15px_rgba(0,255,204,0.3)] font-bold'
                : 'text-gray-500 hover:text-gray-300 hover:bg-gray-900 border border-transparent'
            }`}
          >
            <tab.icon size={14} />
            {tab.label}
          </button>
        ))}
      </nav>

      <div className="flex-1 overflow-y-auto px-4 md:px-10 pt-6">
        
        {/* =======================================================
            TAB 0: OVERVIEW
        ========================================================*/}
        {activeTab === 'overview' && (
          <div className="max-w-4xl mx-auto space-y-8 animate-in fade-in zoom-in duration-500">
            <h2 className="text-3xl font-bold text-white tracking-widest uppercase">What is Aegis?</h2>
            <div className="glass-panel p-8 space-y-6 text-gray-300 leading-relaxed text-lg border-aegis-cyan/30">
              <p>Aegis is an <strong>Autonomous AI Backend System</strong> designed to run entirely by itself without human intervention.</p>
              <div className="border-l-4 border-aegis-cyan pl-4 space-y-4">
                <p><strong className="text-aegis-cyan">1. Data Ingestion:</strong> It streams huge scale events continuously from global infrastructure (IoT, React Apps, API Gateways).</p>
                <p><strong className="text-aegis-magenta">2. Failure Prediction Engine:</strong> It runs real-time heuristics and time-series models on CPU/Memory clusters to predict crashes *before* they happen.</p>
                <p><strong className="text-aegis-green">3. Cognitive Load Balancer:</strong> When it predicts overload, it dynamically spawns new compute priority lanes and sheds traffic automatically based on load risk.</p>
                <p><strong className="text-yellow-400">4. Immutable Decision Tracking:</strong> Every packet transformed by the pipeline is cataloged into a DAG (Directed Acyclic Graph) preserving data lineage and logic trace.</p>
              </div>
            </div>
          </div>
        )}

        {/* =======================================================
            TAB 1: CORE INTELLIGENCE
        ========================================================*/}
        {activeTab === 'core' && (
          <div className="max-w-[1400px] mx-auto space-y-6 animate-in fade-in duration-500">
            <header className="border-b border-gray-800 pb-2 flex justify-between items-end">
              <h2 className="text-2xl font-bold text-aegis-cyan flex items-center gap-3 tracking-widest uppercase">
                <BrainCircuit size={28} /> Central Core Intelligence
              </h2>
              <span className="font-mono text-xs text-gray-500">SYS_UPTIME: 14:02:44:92</span>
            </header>
            
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
              
              {/* Giant Confidence Panel */}
              <div className={`col-span-12 lg:col-span-4 glass-panel p-8 flex flex-col items-center justify-center relative ${systemState.system_health === 'CRITICAL' ? 'border-aegis-red glow-red' : 'border-aegis-cyan glow-cyan'}`}>
                  <div className="absolute top-4 left-4 font-mono text-[10px] text-gray-500 tracking-widest">GLOBAL_HEURISTIC_SCORE</div>
                  
                  {/* Radar/Pulse Ring */}
                  <div className="relative w-48 h-48 flex items-center justify-center border-4 rounded-full border-gray-800/80 mb-4">
                    <div className={`absolute inset-0 rounded-full border-t-4 animate-spin ${systemState.system_health === 'CRITICAL' ? 'border-aegis-red' : 'border-aegis-cyan'}`}></div>
                    <div className="absolute inset-4 rounded-full border border-dashed border-gray-600 animate-[spin_5s_linear_infinite_reverse]"></div>
                    <span className={`text-6xl font-bold z-10 ${systemState.system_health === 'CRITICAL' ? 'text-aegis-red' : 'text-aegis-cyan'}`}>
                      {(systemState.confidence_score * 100).toFixed(1)}<span className="text-2xl">%</span>
                    </span>
                  </div>
                  <span className="text-gray-400 font-mono text-xs tracking-widest uppercase mt-4">NEURAL CONFIDENCE INDEX</span>
                  <div className={`mt-2 px-6 py-1 rounded-full font-bold font-mono text-xs tracking-widest ${systemState.system_health === 'CRITICAL' ? 'bg-aegis-red/20 text-aegis-red animate-pulse' : 'bg-aegis-green/20 text-aegis-green'}`}>
                    STATE: {systemState.system_health}
                  </div>
              </div>

              {/* High Density Metric Grid */}
              <div className="col-span-12 lg:col-span-8 grid grid-cols-2 md:grid-cols-4 gap-4">
                 {[
                   { label: "Predictive Failure Risk", val: `${(systemState.predicted_failures * 100).toFixed(1)}%`, clr: "text-white" },
                   { label: "Active Anomalies", val: systemState.active_anomalies, clr: "text-aegis-yellow" },
                   { label: "Routing Protocol", val: systemState.routing_strategy, clr: "text-aegis-magenta" },
                   { label: "Tensor Ops/Sec", val: systemState.tensor_ops_sec.toLocaleString(), clr: "text-aegis-cyan" },
                   { label: "Active Nodes", val: systemState.active_nodes, clr: "text-gray-300" },
                   { label: "Avg Processor Load", val: `${systemState.avg_cpu_load}%`, clr: "text-gray-300" },
                   { label: "Memory Allocation", val: `${systemState.memory_usage_gb} GB`, clr: "text-gray-300" },
                   { label: "Live Bandwidth", val: `${systemState.bandwidth_tbps} TB/s`, clr: "text-aegis-green" },
                 ].map((metric, i) => (
                    <div key={i} className="glass-panel p-4 flex flex-col justify-between border-gray-800 hover:border-gray-600 transition-colors">
                      <div className="text-[10px] text-gray-500 font-mono uppercase tracking-widest">{metric.label}</div>
                      <div className={`text-xl font-bold font-mono mt-2 ${metric.clr}`}>{metric.val}</div>
                      <div className="w-full h-1 bg-gray-900 mt-3 rounded-full overflow-hidden">
                        <div className="h-full bg-gray-700" style={{width: `${Math.random() * 100}%`}}></div>
                      </div>
                    </div>
                 ))}

                 {/* Simulated Terminal Trace inside Grid */}
                 <div className="col-span-2 md:col-span-4 glass-panel p-4 bg-black/60 font-mono text-[10px] text-aegis-green overflow-hidden h-32 relative">
                   <div className="absolute top-2 left-2 text-gray-600 flex gap-2"><Terminal size={12}/> CORE_INIT_LOG</div>
                   <div className="mt-4 space-y-1 opacity-80">
                      <div><span className="text-gray-500">{new Date().toISOString()}</span> [INFO] Bootstrapping Neural Engine v4.2</div>
                      <div><span className="text-gray-500">{new Date().toISOString()}</span> [WARN] High memory paging detected on Node_72</div>
                      <div><span className="text-gray-500">{new Date().toISOString()}</span> [OK] Tensor Models Compiled. Active Rulesets: {systemState.active_rulesets}</div>
                      <div className="animate-pulse"><span className="text-gray-500">{new Date().toISOString()}</span> [LIVE] Listening on multi-cluster shard architecture...</div>
                   </div>
                 </div>
              </div>

            </div>
          </div>
        )}

        {/* =======================================================
            TAB 2: INGESTION & TELEMETRY
        ========================================================*/}
        {activeTab === 'telemetry' && (
          <div className="max-w-[1400px] mx-auto space-y-6 animate-in slide-in-from-bottom-4 duration-500">
            <header className="border-b border-gray-800 pb-2">
              <h2 className="text-2xl font-bold text-aegis-green flex items-center gap-3 tracking-widest uppercase">
                <ActivitySquare size={28} /> Advanced Ingestion Matrix
              </h2>
            </header>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 h-[600px]">
              
              {/* Massive Live Streaming Terminal */}
              <div className="col-span-12 lg:col-span-8 glass-panel flex flex-col p-4 bg-black border border-gray-800 relative shadow-[inset_0_0_20px_rgba(0,0,0,1)]">
                <div className="flex justify-between items-center mb-4 border-b border-gray-900 pb-2">
                  <h3 className="text-aegis-green font-mono text-xs uppercase tracking-widest flex items-center gap-2">
                    <Database size={14}/> GLOBAL_FIREHOSE_STREAM
                  </h3>
                  <div className="text-[10px] text-gray-500 font-mono">INGEST RATE: {(systemState.tensor_ops_sec / 2).toFixed(0)} EVT/s</div>
                </div>
                
                {/* Dense Raw Log Table */}
                <div className="flex-1 overflow-y-auto space-y-1 pr-2 font-mono text-[11px] leading-tight">
                  <div className="grid grid-cols-12 gap-2 text-gray-600 border-b border-gray-900 pb-1 mb-2">
                    <div className="col-span-2">TIMESTAMP</div>
                    <div className="col-span-1">METH</div>
                    <div className="col-span-2">SOURCE_IP</div>
                    <div className="col-span-2">REGION</div>
                    <div className="col-span-2">LAT(ms)</div>
                    <div className="col-span-3">PAYLOAD_HASH</div>
                  </div>
                  {events.map((e, idx) => (
                    <div key={idx} className="grid grid-cols-12 gap-2 hover:bg-gray-900/50 py-1 border-b border-gray-900/30 transition-colors group">
                      <div className="col-span-2 text-gray-500">{e.time.split('T')[1].replace('Z','')}</div>
                      <div className={`col-span-1 font-bold ${e.method === 'POST' ? 'text-aegis-cyan' : 'text-aegis-magenta'}`}>{e.method}</div>
                      <div className="col-span-2 text-gray-400">{e.ip}</div>
                      <div className="col-span-2 text-yellow-500/80">{e.region}</div>
                      <div className="col-span-2 font-bold flex items-center gap-2">
                        <span className={e.latency_ms > 100 ? "text-aegis-red" : "text-aegis-green"}>{e.latency_ms}ms</span>
                        <div className="w-6 h-1 bg-gray-800 rounded-full"><div className={`h-full ${e.latency_ms > 100 ? "bg-aegis-red" : "bg-aegis-green"}`} style={{width: `${Math.min(e.latency_ms, 100)}%`}}></div></div>
                      </div>
                      <div className="col-span-3 text-gray-600 truncate group-hover:text-aegis-cyan">{e.hash}</div>
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Telemetry Chart & App Sources */}
              <div className="col-span-12 lg:col-span-4 flex flex-col gap-6">
                <div className="glass-panel flex flex-col p-4 h-1/2">
                  <h3 className="text-gray-400 font-mono text-[10px] mb-4 uppercase tracking-widest border-b border-gray-800 pb-2">Hardware Telemetry Analysis</h3>
                  <div className="flex-1 -ml-4">
                    <HealthChart />
                  </div>
                </div>

                <div className="glass-panel flex flex-col p-4 h-1/2 bg-gray-900/30">
                  <h3 className="text-gray-400 font-mono text-[10px] mb-4 uppercase tracking-widest border-b border-gray-800 pb-2">Traffic Origination Clusters</h3>
                  <div className="flex-1 overflow-y-auto space-y-3 font-mono text-xs mt-2">
                    {/* Simulated bars for traffic sources */}
                    {[
                      { name: "MobileApp (iOS/Android)", val: 42, clr: "bg-aegis-cyan" },
                      { name: "IoT Device (MQTT)", val: 28, clr: "bg-aegis-magenta" },
                      { name: "Web (React SPA)", val: 18, clr: "bg-aegis-green" },
                      { name: "B2B API Partners", val: 12, clr: "bg-yellow-400" },
                    ].map((src, i) => (
                      <div key={i} className="space-y-1">
                        <div className="flex justify-between text-gray-400"><span>{src.name}</span> <span className="text-white font-bold">{src.val}%</span></div>
                        <div className="w-full h-1.5 bg-gray-800 rounded overflow-hidden">
                          <div className={`h-full ${src.clr}`} style={{width: `${src.val}%`}}></div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

            </div>
          </div>
        )}

        {/* =======================================================
            TAB 3: ROUTING & LOAD BALANCER
        ========================================================*/}
        {activeTab === 'routing' && (
          <div className="max-w-[1400px] mx-auto space-y-6 animate-in slide-in-from-left-4 duration-500">
            <header className="border-b border-gray-800 pb-2">
              <h2 className="text-2xl font-bold text-aegis-magenta flex items-center gap-3 tracking-widest uppercase">
                <Network size={28} /> Dynamic Network Topology
              </h2>
            </header>
            
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 h-[600px]">
              {/* Traffic Map */}
              <div className="col-span-1 lg:col-span-3 glass-panel p-4 flex flex-col relative bg-[#010204]">
                  <div className="absolute top-4 left-4 z-10 p-3 bg-black/60 border border-gray-800 rounded backdrop-blur">
                    <div className="text-[10px] text-gray-500 font-mono uppercase tracking-widest mb-1">Active Control Protocol</div>
                    <div className="text-lg text-aegis-magenta font-bold font-mono uppercase animate-pulse">{systemState.routing_strategy}</div>
                    <div className="text-xs text-gray-400 font-mono mt-2">Diverting excess traffic to heavy compute lanes to prevent main cluster failure.</div>
                  </div>
                  
                  <div className="flex-1 w-full rounded overflow-hidden relative">
                    {/* SVG Graphic Component */}
                    <NetworkGraph strategy={systemState.routing_strategy} />
                    {/* Grid Overlay for cyber feel */}
                    <div className="absolute inset-0 bg-[url('https://transparenttextures.com/patterns/cubes.png')] opacity-10 pointer-events-none mix-blend-screen"></div>
                  </div>
              </div>

              {/* Cluster Nodes Stats */}
              <div className="col-span-1 glass-panel p-4 flex flex-col overflow-y-auto font-mono text-xs">
                 <h3 className="text-aegis-magenta font-mono text-[10px] mb-4 uppercase tracking-widest border-b border-gray-800 pb-2">Active Computing Lanes</h3>
                 
                 <div className="space-y-6 mt-2">
                   {/* Standard Lane */}
                   <div className="border border-gray-800 p-3 bg-gray-900/20 rounded relative overflow-hidden group hover:border-aegis-cyan transition-colors">
                     <div className="absolute top-0 right-0 w-2 h-2 rounded-full bg-aegis-green m-2 animate-pulse shadow-[0_0_8px_#39FF14]"></div>
                     <div className="text-gray-400 uppercase tracking-widest mb-2 font-bold">Standard Lane</div>
                     <div className="flex justify-between items-center mb-1"><span className="text-gray-600">Queue Depth:</span><span className="text-white">12,402</span></div>
                     <div className="flex justify-between items-center"><span className="text-gray-600">Bandwidth:</span><span className="text-aegis-cyan">0.8 TB/s</span></div>
                   </div>

                   {/* Fast Lane */}
                   <div className="border border-gray-800 p-3 bg-gray-900/20 rounded relative overflow-hidden group hover:border-aegis-green transition-colors">
                     <div className="absolute top-0 right-0 w-2 h-2 rounded-full bg-aegis-green m-2 animate-pulse shadow-[0_0_8px_#39FF14]"></div>
                     <div className="text-gray-400 uppercase tracking-widest mb-2 font-bold">Priority Fast-Lane</div>
                     <div className="flex justify-between items-center mb-1"><span className="text-gray-600">Queue Depth:</span><span className="text-white">1,029</span></div>
                     <div className="flex justify-between items-center"><span className="text-gray-600">Bandwidth:</span><span className="text-aegis-green">2.1 TB/s</span></div>
                   </div>

                   {/* Heavy Compute (dynamically toggled) */}
                   <div className={`border p-3 rounded relative overflow-hidden transition-colors ${systemState.routing_strategy.includes('HEAVY') ? 'border-aegis-red bg-red-900/10' : 'border-gray-800 bg-gray-900/20'}`}>
                     <div className={`absolute top-0 right-0 w-2 h-2 rounded-full m-2 ${systemState.routing_strategy.includes('HEAVY') ? 'bg-aegis-red animate-pulse shadow-[0_0_8px_red]' : 'bg-gray-700'}`}></div>
                     <div className="text-[10px] text-gray-500 uppercase tracking-widest mb-1">Cold Storage / Dump</div>
                     <div className={`uppercase tracking-widest mb-2 font-bold ${systemState.routing_strategy.includes('HEAVY') ? 'text-aegis-red' : 'text-gray-600'}`}>Heavy Compute Lane</div>
                     <div className="flex justify-between items-center mb-1"><span className="text-gray-600">Queue Depth:</span><span className={systemState.routing_strategy.includes('HEAVY') ? 'text-aegis-yellow' : 'text-gray-700'}>{systemState.routing_strategy.includes('HEAVY') ? '82,109' : '0'}</span></div>
                     <div className="mt-3 text-[9px] text-gray-500 border-t border-gray-800 pt-2 text-center">ACTIVATED VIA PREDICTIVE SHEDDING</div>
                   </div>
                 </div>
              </div>
            </div>
          </div>
        )}

        {/* =======================================================
            TAB 4: PROVENANCE & LOGIC
        ========================================================*/}
        {activeTab === 'provenance' && (
          <div className="max-w-[1400px] mx-auto space-y-6 animate-in slide-in-from-right-4 duration-500">
            <header className="border-b border-gray-800 pb-2">
              <h2 className="text-2xl font-bold text-yellow-400 flex items-center gap-3 tracking-widest uppercase">
                <GitMerge size={28} /> Lineage Cryptography & Logic
              </h2>
            </header>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 h-[600px]">
              
              {/* DAG Graph */}
              <div className="glass-panel flex flex-col p-4 bg-[#010204]">
                <div className="flex justify-between items-center border-b border-gray-800 pb-2 mb-4">
                   <h3 className="text-gray-300 font-mono text-[10px] uppercase tracking-widest">Directed Acyclic Graph (DAG)</h3>
                   <span className="text-aegis-cyan font-mono text-[10px] flex items-center gap-1"><ShieldCheck size={12}/> IMMUTABLE LEDGER ACTIVE</span>
                </div>
                <div className="flex-1 overflow-hidden rounded relative">
                  <ProvenanceGraph />
                  <div className="absolute bottom-4 left-4 bg-black/80 border border-gray-800 p-3 rounded backdrop-blur font-mono text-[10px] text-gray-400 space-y-1">
                     <div className="text-white uppercase mb-1">Cryptographic Pipeline</div>
                     <div><span className="text-aegis-magenta">RAW_EVENT</span> → Hash Generated</div>
                     <div><span className="text-aegis-cyan">CLEANED</span> → Metadata Stripped</div>
                     <div><span className="text-aegis-green">ENRICHED</span> → Neo4j Link Created</div>
                  </div>
                </div>
              </div>

              {/* Math / Logic Trace */}
              <div className="glass-panel flex flex-col p-4">
                <h3 className="text-gray-300 font-mono text-[10px] mb-4 uppercase tracking-widest border-b border-gray-800 pb-2">Cognitive Rules Engine (Trace Log)</h3>
                <div className="flex-1 overflow-auto bg-black/40 border border-gray-800 p-4 rounded font-mono text-xs">
                  
                  {/* Detailed Logic Tree UI */}
                  <div className="text-aegis-magenta font-bold uppercase tracking-widest mb-4">EVALUATING INCOMING PAYLOAD_MATRIX...</div>
                  
                  <div className="space-y-4 text-gray-400 pl-2 border-l border-gray-800">
                    
                    <div>
                       <div className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-gray-500 rounded-full"></div> 1. Schema Adherence Check</div>
                       <div className="pl-4 mt-1 space-y-1">
                          <div className="flex justify-between"><span>Rule `schema_v3.strict`</span> <span className="text-aegis-green">PASS (weight: 0.1)</span></div>
                          <div className="flex justify-between"><span>Payload Signature Hash</span> <span className="text-gray-600">0x8f2a9c33bb3e</span></div>
                       </div>
                    </div>

                    <div>
                       <div className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-gray-500 rounded-full"></div> 2. Neural Anomaly Detection</div>
                       <div className="pl-4 mt-1 space-y-1">
                          <div className="flex justify-between"><span>Active System Anomalies</span> <span className="text-white">{systemState.active_anomalies} / 10 limit</span></div>
                          <div className="flex justify-between">
                            <span>Anomaly Constraint Rule</span> 
                            <span className={systemState.active_anomalies < 10 ? "text-aegis-green" : "text-aegis-red animate-pulse"}>
                               {systemState.active_anomalies < 10 ? 'PASS (weight: 0.3)' : 'FAIL - BREACH DETECTED'}
                            </span>
                          </div>
                       </div>
                    </div>

                    <div>
                       <div className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-gray-500 rounded-full"></div> 3. Predictive Failure Heuristic</div>
                       <div className="pl-4 mt-1 space-y-1">
                          <div className="flex justify-between"><span>Calculated Risk Metric</span> <span className="text-white">{(systemState.predicted_failures * 100).toFixed(1)}%</span></div>
                          <div className="flex justify-between text-xs"><span>Threshold Rule `risk &lt; 85%`</span> <span className={systemState.predicted_failures < 0.85 ? "text-aegis-green" : "text-aegis-red uppercase font-bold"}>{systemState.predicted_failures < 0.85 ? "PASS (weight: 0.6)" : "CRITICAL RISK"}</span></div>
                       </div>
                    </div>

                  </div>

                  <div className="mt-8 border-t border-gray-800 pt-4 pb-2 bg-gray-900/30 px-4 rounded border-dashed">
                     <div className="uppercase tracking-widest text-[10px] text-gray-500 mb-2">Final Vector Output</div>
                     <div className="flex justify-between items-center">
                       <span className={`text-xl font-bold tracking-widest uppercase ${systemState.confidence_score > 0.6 ? 'text-aegis-cyan drop-shadow-[0_0_8px_#00FFCC]' : 'text-aegis-red drop-shadow-[0_0_8px_#FF3333]'}`}>
                         {systemState.confidence_score > 0.6 ? 'ACTION: AUTHORIZED_FORWARD' : 'ACTION: DIVERT_TO_DEFENSE'}
                       </span>
                       <span className="text-xl font-bold text-white">{(systemState.confidence_score * 100).toFixed(1)}% CF</span>
                     </div>
                     <div className="text-[10px] text-gray-500 mt-2 font-mono">EXECUTION MARKER: {Date.now()}</div>
                  </div>

                </div>
              </div>
            </div>
          </div>
        )}

      </div>
    </div>
  );
}
