import { useState, useEffect } from 'react';

export const AegisAPI = {
  fetchState: async () => {
    try {
      const res = await fetch('http://localhost:8000/system/state');
      if (!res.ok) throw new Error("Network response was not ok");
      return await res.json();
    } catch (e) {
      return {
        system_health: Math.random() > 0.95 ? "CRITICAL" : "OPTIMAL",
        active_anomalies: Math.floor(Math.random() * 8),
        predicted_failures: parseFloat((Math.random() * 0.99).toFixed(3)),
        routing_strategy: ["OPTIMIZED", "DEFENSIVE_THROTTLE", "HEAVY_COMPUTE"][Math.floor(Math.random()*3)],
        confidence_score: parseFloat((0.6 + Math.random() * 0.39).toFixed(3)),
        avg_cpu_load: parseFloat((30 + Math.random() * 60).toFixed(2)),
        avg_latency_ms: parseFloat((10 + Math.random() * 150).toFixed(2)),
        // New complex simulated metrics
        active_nodes: Math.floor(100 + Math.random() * 50),
        tensor_ops_sec: Math.floor(4000 + Math.random() * 8000),
        memory_usage_gb: parseFloat((64 + Math.random() * 120).toFixed(1)),
        bandwidth_tbps: parseFloat((1.2 + Math.random() * 4).toFixed(2)),
        active_rulesets: 142
      };
    }
  },
  
  fetchEvents: async () => {
    const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
    const methods = ["POST", "PUT", "GET", "PATCH"];
    const endpoints = ["/v1/auth", "/v2/transactions", "/v1/iot/telemetry", "/v3/user/sync", "/sys/metrics"];
    const regions = ["us-east-1", "eu-central-1", "ap-south-1", "sa-east-1", "us-west-2"];
    const sources = ["MobileApp (iOS)", "WebApp (React)", "IoT Device (MQTT)", "B2B API Partner", "Legacy Server"];
    
    return Array.from({length: 5}).map((_, i) => ({
      id: "EVT-" + Array.from({length: 8}).map(() => chars.charAt(Math.floor(Math.random() * chars.length))).join(''),
      method: methods[Math.floor(Math.random() * methods.length)],
      endpoint: endpoints[Math.floor(Math.random() * endpoints.length)],
      region: regions[Math.floor(Math.random() * regions.length)],
      ip: `198.${Math.floor(Math.random()*255)}.${Math.floor(Math.random()*255)}.${Math.floor(Math.random()*255)}`,
      source: sources[Math.floor(Math.random() * sources.length)],
      size_kb: (Math.random() * 250).toFixed(2),
      latency_ms: Math.floor(5 + Math.random() * 120),
      complexity: (Math.random() * 5).toFixed(2),
      hash: "0x" + Array.from({length: 12}).map(() => chars.charAt(Math.floor(Math.random() * chars.length))).join('').toLowerCase(),
      time: new Date(Date.now() - i * 1500).toISOString()
    }));
  },
  
  fetchMetricsSeries: async () => {
    const data = [];
    let now = Date.now();
    for(let i=30; i>=0; i--) {
      data.push({
        time: new Date(now - i*2000).toLocaleTimeString([], {minute: '2-digit', second:'2-digit'}),
        latency: 20 + Math.random() * 120 + (Math.random() > 0.9 ? 200 : 0),
        cpu: 30 + Math.random() * 50,
        throughput: 2000 + Math.random() * 4000
      });
    }
    return data;
  }
};
