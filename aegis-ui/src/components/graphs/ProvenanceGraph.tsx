"use client";
import React, { useEffect, useState } from 'react';

const NODES = [
  { id: 'n1', x: 20, y: 50, label: 'Raw Event', score: 1.0 },
  { id: 'n2', x: 50, y: 30, label: 'Cleaned', score: 0.95 },
  { id: 'n3', x: 50, y: 70, label: 'Enriched', score: 0.88 },
  { id: 'n4', x: 80, y: 50, label: 'Decision Node', score: 0.92 }
];

const EDGES = [
  { source: 'n1', target: 'n2' },
  { source: 'n1', target: 'n3' },
  { source: 'n2', target: 'n4' },
  { source: 'n3', target: 'n4' }
];

export default function ProvenanceGraph() {
  const [activeNode, setActiveNode] = useState<string | null>(null);

  return (
    <div className="w-full h-full relative border border-dashed border-gray-800 rounded p-2">
      <svg width="100%" height="100%" viewBox="0 0 100 100" preserveAspectRatio="none">
        <defs>
          <filter id="glow">
            <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
            <feMerge>
              <feMergeNode in="coloredBlur"/>
              <feMergeNode in="SourceGraphic"/>
            </feMerge>
          </filter>
        </defs>

        {/* Edges */}
        {EDGES.map((edge, i) => {
           const s = NODES.find(n => n.id === edge.source)!;
           const t = NODES.find(n => n.id === edge.target)!;
           const isActive = activeNode === s.id || activeNode === t.id;
           return (
             <line 
               key={i} 
               x1={s.x} y1={s.y} x2={t.x} y2={t.y} 
               stroke={isActive ? "#00FFCC" : "#4B5563"} 
               strokeWidth={isActive ? "1.5" : "0.5"} 
               className="transition-all duration-300"
             />
           );
        })}

        {/* Nodes */}
        {NODES.map(node => (
          <g 
            key={node.id} 
            onMouseEnter={() => setActiveNode(node.id)}
            onMouseLeave={() => setActiveNode(null)}
            className="cursor-pointer"
          >
            <circle 
              cx={node.x} cy={node.y} r={activeNode === node.id ? "6" : "4"} 
              fill="#050B14" 
              stroke={node.score > 0.9 ? "#39FF14" : "#FFFF33"} 
              strokeWidth="1.5"
              filter={activeNode === node.id ? "url(#glow)" : ""}
              className="transition-all duration-300"
            />
            {activeNode === node.id && (
              <text x={node.x} y={node.y - 10} fontSize="3.5" fill="#FFF" textAnchor="middle" fontFamily="monospace">
                Trust: {(node.score * 100).toFixed(0)}%
              </text>
            )}
            <text x={node.x} y={node.y + 10} fontSize="4" fill="#9CA3AF" textAnchor="middle" fontFamily="monospace">
              {node.label}
            </text>
          </g>
        ))}
      </svg>
    </div>
  );
}
