"use client";
import React from 'react';

export default function Operations() {
  return (
    <div className="p-8 h-full flex items-center justify-center flex-col text-center">
      <div className="w-20 h-20 rounded-full bg-surface-container-high border border-outline-variant/20 flex items-center justify-center text-slate-500 mb-6 transition-colors">
        <span className="material-symbols-outlined text-4xl">settings_applications</span>
      </div>
      <h1 className="text-3xl font-headline font-bold text-on-surface uppercase tracking-tight">Operations Dashboard</h1>
      <p className="text-on-surface-variant font-body max-w-lg mt-4 text-sm leading-relaxed">
        This high-priority operations view is an uninitialized endpoint. 
        Please provide the Stitch layout blueprint and Aegis will provision this dashboard.
      </p>
    </div>
  );
}
