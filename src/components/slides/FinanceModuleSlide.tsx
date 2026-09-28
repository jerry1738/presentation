import React from 'react';
import { CORE_MODULES } from '../../data/presentationData';

export const FinanceModuleSlide: React.FC = () => {
  const moduleData = CORE_MODULES[2];

  const badges = [
    'Real-Time GL',
    '3-Way Match',
    'WIP Valuation',
    '15% VAT & Tax',
    'Bank Reconciliation',
    'Segregation of Duties'
  ];

  const footers = [
    'Real-time automated double-entry postings',
    'Clears transit goods liability automatically',
    'Accurate unit cost for every production batch',
    '100% compliant with Ministry of Revenues',
    'Reconciles CBE, Dashen, Awash & Hibret',
    'Immutable keystroke change audit log'
  ];

  return (
    <div className="py-2 space-y-4 sm:space-y-5">
      {/* Header */}
      <div>
        <div className="text-xs font-mono font-medium text-neutral-500 uppercase tracking-wider">
          07. ERP Scope · Module 3
        </div>
        <h2 className="text-xl sm:text-3xl font-bold tracking-tight text-neutral-950 font-display mt-1">
          Real-Time General Ledger (GL), 3-Way Match & Ethiopian Tax Engine
        </h2>
        <p className="text-xs sm:text-sm text-neutral-600 mt-1 max-w-3xl leading-relaxed">
          Instantly translates shop-floor material issues, completed batch dispatches, and procurement receipts into double-entry accounting journals while automating 15% VAT and 7-tier payroll taxes.
        </p>
      </div>

      {/* Grid */}
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

      {/* Footer Subtotal */}
      <div className="bg-white border border-neutral-200 rounded p-3.5 flex flex-wrap items-center justify-between gap-2 text-xs text-neutral-700">
        <div>
          <strong className="text-neutral-900 font-bold">Internal Governance:</strong> Enforces maker-checker principles—the officer who creates a disbursement request is programmatically blocked from approving it.
        </div>
        <div className="font-mono text-neutral-900 font-bold bg-neutral-100 px-2.5 py-1 rounded border border-neutral-200">
          Module Budget: 230,000.00 ETB
        </div>
      </div>
    </div>
  );
};
