import React from 'react';
import { CORE_BOTTLENECKS } from '../../data/presentationData';

export const ExecutiveSummarySlide: React.FC = () => {
  return (
    <div className="py-2 space-y-5 sm:space-y-6">
      {/* Header */}
      <div>
        <div className="text-xs font-mono font-medium text-neutral-500 uppercase tracking-wider">
          01. Executive Summary
        </div>
        <h2 className="text-xl sm:text-3xl font-bold tracking-tight text-neutral-950 font-display mt-1">
          Transforming Plant Bottlenecks into Precision & Real-Time Control
        </h2>
        <p className="text-xs sm:text-sm text-neutral-600 mt-2 max-w-3xl leading-relaxed">
          Operating a 4,000 m² facility with multi-station extrusion, flexographic printing presses, and multiple storage locations with disconnected tools creates costly blindspots. Nexloop has engineered targeted solutions for the 3 primary operational bottlenecks.
        </p>
      </div>

      {/* 3 Bottlenecks Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-3.5 sm:gap-4">
        {CORE_BOTTLENECKS.map((b, idx) => (
          <div
            key={b.id}
            className="bg-white border border-neutral-200 rounded p-4 sm:p-5 flex flex-col justify-between"
          >
            <div className="space-y-2.5 sm:space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono text-neutral-500 font-bold">0{idx + 1}</span>
                <span className="text-[11px] font-mono font-semibold px-2 py-0.5 bg-neutral-100 text-neutral-800 rounded border border-neutral-200">
                  {b.metric}
                </span>
              </div>
              <h3 className="text-sm sm:text-base font-bold text-neutral-900 font-display">
                {b.title}
              </h3>
              <p className="text-xs text-neutral-600 leading-relaxed">
                {b.description}
              </p>
            </div>

            <div className="mt-4 sm:mt-5 pt-3 border-t border-neutral-100 space-y-1">
              <div className="text-[11px] font-mono font-bold text-neutral-900 uppercase">
                Custom Solution
              </div>
              <p className="text-xs text-neutral-600 leading-relaxed">
                {b.solution}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Bottom Summary Bar */}
      <div className="bg-white border border-neutral-200 rounded p-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div className="space-y-0.5">
          <div className="text-xs font-bold text-neutral-900 uppercase font-mono">Key Strategic Value</div>
          <div className="text-xs text-neutral-600 leading-relaxed">
            Unlike off-the-shelf software packages that force disruptive operational changes, this ERP is 100% tailor-made for Flexible Packaging with zero recurring annual subscription costs.
          </div>
        </div>

        <div className="flex items-center gap-4 sm:gap-6 text-xs font-mono text-neutral-700 shrink-0 w-full sm:w-auto justify-between sm:justify-end border-t sm:border-t-0 pt-2 sm:pt-0">
          <div><strong className="text-neutral-950 font-bold block text-sm">100%</strong> Custom Built</div>
          <div className="w-px h-6 bg-neutral-200" />
          <div><strong className="text-neutral-950 font-bold block text-sm">0 ETB</strong> Annual License</div>
          <div className="w-px h-6 bg-neutral-200" />
          <div><strong className="text-neutral-950 font-bold block text-sm">Unlimited</strong> User Seats</div>
        </div>
      </div>
    </div>
  );
};
