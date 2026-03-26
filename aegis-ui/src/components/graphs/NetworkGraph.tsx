"use client";
import React, { useEffect, useState } from 'react';

const NODES = [
  { id: 'gateway', x: 20, y: 50, label: 'API Gateway', color: '#00FFCC' },
  { id: 'route', x: 50, y: 50, label: 'Load Balancer', color: '#FF00FF' },
  { id: 'fast', x: 80, y: 20, label: 'Fast Lane', color: '#39FF14' },
  { id: 'std', x: 80, y: 50, label: 'Standard', color: '#00FFCC' },
  { id: 'hvy', x: 80, y: 80, label: 'Heavy Compute', color: '#FF3333' }
];

const EDGES = [
  { source: 'gateway', target: 'route' },
  { source: 'route', target: 'fast' },
  { source: 'route', target: 'std' },
  { source: 'route', target: 'hvy' }
];

export default function NetworkGraph({ strategy }: { strategy: string }) {
  const [particles, setParticles] = useState<{id: number, edge: number, progress: number}[]>([]);

  useEffect(() => {
    // Generate traffic particles
    const interval = setInterval(() => {
      // route differently based on strategy
      let validEdges = [0]; // gateway to route
      if (strategy === 'CONSERVATIVE_THROTTLE') {
        validEdges.push(3); // route to heavy
      } else {
        validEdges.push(1, 2); // route to fast/std
      }
      
      setParticles(p => {
        const newP = p.map(pt => ({ ...pt, progress: pt.progress + 5 })).filter(pt => pt.progress <= 100);
        if (Math.random() > 0.3) {
           const edgeId = validEdges[Math.floor(Math.random() * validEdges.length)];
           newP.push({ id: Date.now(), edge: edgeId, progress: 0 });
        }
        return newP;
      });
    }, 100);
    return () => clearInterval(interval);
  }, [strategy]);

  return (
    <div className="w-full h-full relative border border-dashed border-gray-800 rounded flex items-center justify-center p-2 bg-[#02050A]">
      <svg width="100%" height="100%" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid meet">
        {/* Edges */}
        {EDGES.map((edge, i) => {
           const s = NODES.find(n => n.id === edge.source)!;
           const t = NODES.find(n => n.id === edge.target)!;
           return (
             <line key={i} x1={s.x} y1={s.y} x2={t.x} y2={t.y} stroke="#1F2937" strokeWidth="1" />
           );
        })}

        {/* Particles */}
        {particles.map(p => {
           const edge = EDGES[p.edge];
           const s = NODES.find(n => n.id === edge.source)!;
           const t = NODES.find(n => n.id === edge.target)!;
           const cx = s.x + (t.x - s.x) * (p.progress / 100);
           const cy = s.y + (t.y - s.y) * (p.progress / 100);
           return (
             <circle key={p.id} cx={cx} cy={cy} r="1.5" fill={t.color} className="animate-pulse shadow-[0_0_5px_currentColor]" />
           );
        })}

        {/* Nodes */}
        {NODES.map(node => (
          <g key={node.id}>
            <circle cx={node.x} cy={node.y} r="3" fill={node.color} opacity="0.8" />
            <circle cx={node.x} cy={node.y} r="5" fill="none" stroke={node.color} strokeWidth="0.5" className="animate-[ping_3s_infinite]" />
            <text x={node.x} y={node.y + 8} fontSize="4" fill="#9CA3AF" textAnchor="middle" fontFamily="monospace">
              {node.label}
            </text>
          </g>
        ))}
      </svg>
    </div>
  );
}
