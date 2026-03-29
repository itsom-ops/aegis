"use client";
import React from 'react';

export default function Security() {
  return (
    <div className="p-8 h-full flex items-center justify-center flex-col text-center text-aegis-cyan">
      <div className="w-20 h-20 rounded-full bg-surface-container-high border border-outline-variant/20 flex items-center justify-center text-error mb-6 transition-colors animate-pulse">
        <span className="material-symbols-outlined text-4xl">security</span>
      </div>
      <h1 className="text-3xl font-headline font-bold text-on-surface uppercase tracking-tight">Global Security Matrix</h1>
      <p className="text-on-surface-variant font-body max-w-lg mt-4 text-sm leading-relaxed">
        This cybersecurity overview component was not included in the primary design batch. 
        Awaiting input schema from Stitch to render the threat mitigation layout.
      </p>
    </div>
  );
}
