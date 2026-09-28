import React from 'react';
import { IMAGES } from '../../assets/images';

export const SolutionArchitectureSlide: React.FC = () => {
  return (
    <div className="py-2 space-y-5 sm:space-y-6">
      {/* Header */}
      <div>
        <div className="text-xs font-mono font-medium text-neutral-500 uppercase tracking-wider">
          02. System Architecture
        </div>
        <h2 className="text-xl sm:text-3xl font-bold tracking-tight text-neutral-950 font-display mt-1">
          High-Performance Modern Stack & Sovereign Ethiopian Cloud Hosting
        </h2>
        <p className="text-xs sm:text-sm text-neutral-600 mt-2 max-w-3xl leading-relaxed">
          Engineered for ultra-fast response times, offline-capable shop-floor operator terminals, and zero foreign currency exposure through reliable domestic cloud infrastructure.
        </p>
      </div>

      {/* Main Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 items-stretch">
        {/* Left 4 Pillars */}
        <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-3.5">
          <div className="bg-white border border-neutral-200 rounded p-4 space-y-1.5">
            <span className="text-xs font-mono text-neutral-500 font-bold">01 / Frontend & Desktop</span>
            <h3 className="text-sm font-bold text-neutral-900 font-display">React, Next.js & Electron</h3>
            <p className="text-xs text-neutral-600 leading-relaxed">
              Reactive web dashboards for executives and resilient Electron desktop runtimes for shop-floor terminals that keep running even during local network blips.
            </p>
          </div>

          <div className="bg-white border border-neutral-200 rounded p-4 space-y-1.5">
            <span className="text-xs font-mono text-neutral-500 font-bold">02 / Database & Ledger Engine</span>
            <h3 className="text-sm font-bold text-neutral-900 font-display">PostgreSQL & SQLite Edge</h3>
            <p className="text-xs text-neutral-600 leading-relaxed">
              Robust relational PostgreSQL at the core with edge SQLite caching, ensuring high throughput, ACID compliance, and zero data loss across shifts.
            </p>
          </div>

          <div className="bg-white border border-neutral-200 rounded p-4 space-y-1.5">
            <span className="text-xs font-mono text-neutral-500 font-bold">03 / Sovereign Hosting</span>
            <h3 className="text-sm font-bold text-neutral-900 font-display">Ethio Telecom / HahuCloud</h3>
            <p className="text-xs text-neutral-600 leading-relaxed">
              Hosted within Tier-III domestic cloud infrastructure in Addis Ababa, delivering sub-15ms local latency, zero forex requirements, and strict national data compliance.
            </p>
          </div>

          <div className="bg-white border border-neutral-200 rounded p-4 space-y-1.5">
            <span className="text-xs font-mono text-neutral-500 font-bold">04 / Multi-Language Capability</span>
            <h3 className="text-sm font-bold text-neutral-900 font-display">Ergonomic Industrial UI</h3>
            <p className="text-xs text-neutral-600 leading-relaxed">
              Clear, uncluttered design language with high contrast, intuitive iconographies, and touch-friendly controls built for factory floor conditions.
            </p>
          </div>
        </div>

        {/* Right Preview Card */}
        <div className="lg:col-span-5 bg-white border border-neutral-200 rounded p-3 flex flex-col justify-between space-y-3">
          <div className="overflow-hidden rounded border border-neutral-100">
            <img
              src={IMAGES.dashboard}
              alt="System Architecture & Dashboard Preview"
              className="w-full h-44 sm:h-52 object-cover"
              referrerPolicy="no-referrer"
            />
          </div>
          <div className="space-y-1">
            <div className="text-xs font-semibold text-neutral-900 font-mono">Centralized Real-Time General Ledger (GL) Pipeline</div>
            <div className="text-xs text-neutral-500 leading-relaxed">
              Physical inventory movements and shop-floor material dispatches automatically update double-entry journals without month-end accounting delay.
            </div>
          </div>
        </div>
      </div>

      {/* Footer Assurance */}
      <div className="bg-white border border-neutral-200 rounded p-3.5 flex flex-wrap items-center justify-between gap-2 text-xs text-neutral-700">
        <div>
          <strong className="text-neutral-900 font-bold">Long-Term Partnership:</strong> 1 Year Free Post-Launch Maintenance + 2 Years Free Software Upgrades Warranty.
        </div>
        <div className="font-mono text-neutral-500">Dedicated On-Site Engineering Team in Addis Ababa</div>
      </div>
    </div>
  );
};
