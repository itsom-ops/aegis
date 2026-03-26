"use client";
import React, { useEffect, useState } from 'react';
import { AreaChart, Area, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';
import { AegisAPI } from '@/services/api';

export default function HealthChart() {
  const [data, setData] = useState<any[]>([]);

  useEffect(() => {
    const load = async () => {
      setData(await AegisAPI.fetchMetricsSeries());
    };
    load();
    const int = setInterval(load, 2000);
    return () => clearInterval(int);
  }, []);

  if (!data.length) return <div className="animate-pulse text-aegis-green text-xs">Loading Telemetry...</div>;

  return (
    <div className="w-full h-full min-h-[150px]">
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart data={data} margin={{ top: 5, right: 0, left: -20, bottom: 0 }}>
          <defs>
            <linearGradient id="colorLatency" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#39FF14" stopOpacity={0.8}/>
              <stop offset="95%" stopColor="#39FF14" stopOpacity={0}/>
            </linearGradient>
            <linearGradient id="colorCpu" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#00FFCC" stopOpacity={0.8}/>
              <stop offset="95%" stopColor="#00FFCC" stopOpacity={0}/>
            </linearGradient>
          </defs>
          <XAxis dataKey="time" stroke="#4B5563" fontSize={10} tickMargin={10} />
          <YAxis stroke="#4B5563" fontSize={10} />
          <Tooltip 
            contentStyle={{ backgroundColor: 'rgba(5, 11, 20, 0.9)', border: '1px solid #00FFCC', borderRadius: '4px' }}
            itemStyle={{ color: '#00FFCC', fontSize: '12px' }}
            labelStyle={{ color: '#9CA3AF', fontSize: '10px' }}
          />
          <Area type="monotone" dataKey="latency" stroke="#39FF14" fillOpacity={1} fill="url(#colorLatency)" />
          <Area type="monotone" dataKey="cpu" stroke="#00FFCC" fillOpacity={1} fill="url(#colorCpu)" />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
}
