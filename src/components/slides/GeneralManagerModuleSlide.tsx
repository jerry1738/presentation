import React from 'react';
import { CORE_MODULES } from '../../data/presentationData';

export const GeneralManagerModuleSlide: React.FC = () => {
  const moduleData = CORE_MODULES[0];

  const badges = [
    'Approvals',
    'Liquidity',
    'Quality & NCR',
    'Audit Trail',
    'Key Metrics (KPI)',
    'Alerts'
  ];

  const footers = [
    'Single-window authorization',
    'Consolidated bank & margin tracking',
    'Direct defect & NCR root-cause log',
    'Strict segregation of duties (RBAC)',
    'Machine output vs. rated capacity',
    'Autonomous exception notifications'
  ];

  return (
    <div className="py-2 space-y-4 sm:space-y-5">
      {/* Header */}
      <div>
        <div className="text-xs font-mono font-medium text-neutral-500 uppercase tracking-wider">
          05. ERP Scope · Module 1
        </div>
        <h2 className="text-xl sm:text-3xl font-bold tracking-tight text-neutral-950 font-display mt-1">
          Executive General Manager Oversight & Strategic Control
        </h2>
        <p className="text-xs sm:text-sm text-neutral-600 mt-1 max-w-3xl leading-relaxed">
          Replaces outdated paper logs with a unified executive cockpit providing instant cash liquidity visibility, product-line margins, shop-floor scrap variances, and multi-tier approval workflows.
        </p>
      </div>

      {/* 6 Capabilities Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-3.5">
        {moduleData.features.map((feature, idx) => (
          <div
            key={idx}
            className="bg-white border border-neutral-200 rounded p-4 flex flex-col justify-between"
          >
            <div className="space-y-2">
              <div className="flex items-center justify-between text-xs font-mono text-neutral-400">
                <span className="font-bold">0{idx + 1}</span>
                <span className="text-[10px] font-semibold text-neutral-700 bg-neutral-100 px-2 py-0.5 rounded border border-neutral-200">
                  {badges[idx]}
                </span>
              </div>
              <h3 className="text-sm font-bold text-neutral-900 font-display">
                {feature.name}
              </h3>
              <p className="text-xs text-neutral-600 leading-relaxed">
                {feature.desc}
              </p>
            </div>

            <div className="mt-3.5 pt-2 border-t border-neutral-100 text-[11px] font-mono text-neutral-600 font-medium">
              {footers[idx]}
            </div>
          </div>
        ))}
      </div>

      {/* Module Subtotal */}
      <div className="bg-white border border-neutral-200 rounded p-3.5 flex flex-wrap items-center justify-between gap-2 text-xs text-neutral-700">
        <div>
          <strong className="text-neutral-900 font-bold">Executive Board Center:</strong> Encrypted confidential board repository + direct broadcast dispatches to factory floor information monitors.
        </div>
        <div className="font-mono text-neutral-900 font-bold bg-neutral-100 px-2.5 py-1 rounded border border-neutral-200">
          Module Budget: 105,000.00 ETB
        </div>
      </div>
    </div>
  );
};
