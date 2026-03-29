"use client";
import React from 'react';

export default function RiskModels() {
  return (
    <div className="p-8 h-full flex items-center justify-center flex-col text-center">
      <div className="w-20 h-20 rounded-full bg-surface-container-high border border-outline-variant/20 flex items-center justify-center text-slate-500 mb-6 group-hover:text-primary transition-colors">
        <span className="material-symbols-outlined text-4xl">rule</span>
      </div>
      <h1 className="text-3xl font-headline font-bold text-on-surface uppercase tracking-tight">Risk Models</h1>
      <p className="text-on-surface-variant font-body max-w-lg mt-4 text-sm leading-relaxed">
        This mathematical risk evaluation component was not present in the original design files. 
        You can provide a new Stitch URL for the Risk Models UI, and Aegis will autonomously integrate the design here!
      </p>
    </div>
  );
}
