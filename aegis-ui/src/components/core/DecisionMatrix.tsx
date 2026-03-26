"use client";
import React, { useState, useEffect } from 'react';
import { AegisAPI } from '@/services/api';

export default function DecisionMatrix() {
  const [data, setData] = useState<any>(null);

  useEffect(() => {
    // Poll the backend or mock data
    const poll = async () => {
      const state = await AegisAPI.fetchState();
      setData(state);
    };
    poll();
    const interval = setInterval(poll, 2000);
    return () => clearInterval(interval);
  }, []);

  if (!data) return <div className="text-aegis-cyan text-xs font-mono animate-pulse">Computing...</div>;

  const logs = [
    { rule: "Schema Drift", passed: true, w: 0.1 },
    { rule: "Anomaly Score Limit", passed: data.active_anomalies < 3, w: 0.4 },
    { rule: "System Risk Limit", passed: data.predicted_failures < 0.5, w: 0.5 }
  ];

  return (
    <div className="w-full h-full flex flex-col font-mono text-xs">
       <div className="flex-1 space-y-2 overflow-y-auto pr-2">
         {logs.map((log, i) => (
           <div key={i} className="flex justify-between items-center bg-gray-900/40 p-2 rounded border border-gray-800">
             <span className="text-gray-400">{log.rule}</span>
             <span className={`px-2 py-0.5 rounded ${log.passed ? 'bg-aegis-green/20 text-aegis-green' : 'bg-aegis-red/20 text-aegis-red'}`}>
               {log.passed ? 'PASS' : 'FAIL'} (w:{log.w})
             </span>
           </div>
         ))}
       </div>
       <div className="mt-4 pt-4 border-t border-gray-800 flex justify-between items-center">
         <span className="text-gray-500 uppercase tracking-widest">Final Status</span>
         <span className={`text-sm font-bold tracking-widest ${data.confidence_score > 0.6 ? 'text-aegis-cyan text-shadow-cyan' : 'text-aegis-red text-shadow-red'}`}>
           {data.confidence_score > 0.6 ? 'APPROVED' : 'MITIGATED'}
         </span>
       </div>
    </div>
  );
}
