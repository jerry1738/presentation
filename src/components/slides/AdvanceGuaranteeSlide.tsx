import React from 'react';
import { ADVANCE_BREAKDOWN, PRESENTATION_METADATA } from '../../data/presentationData';

export const AdvanceGuaranteeSlide: React.FC = () => {
  return (
    <div className="py-2 space-y-4">
      {/* Header */}
      <div>
        <div className="text-xs font-mono font-medium text-neutral-500 uppercase tracking-wider">
          14. Risk Mitigation & Asset Guarantee
        </div>
        <h2 className="text-xl sm:text-3xl font-bold tracking-tight text-neutral-950 font-display mt-1">
          Zero-Risk Asset Ownership Model: 100% Capital Protection
        </h2>
        <p className="text-xs sm:text-sm text-neutral-600 mt-1 max-w-3xl leading-relaxed">
          To build institutional trust and eliminate client financial exposure, all hardware and equipment purchased under the 30% advance are titled directly in the corporate name of Flexible Packaging.
        </p>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 sm:gap-5 items-stretch">
        {/* Left: 3-step Guarantee */}
        <div className="lg:col-span-5 bg-white border border-neutral-200 rounded p-4 sm:p-5 flex flex-col justify-between space-y-4">
          <div className="space-y-3">
            <span className="text-xs font-mono font-bold text-neutral-900 uppercase">
              3-Stage Security Mechanism
            </span>

            <div className="space-y-2 text-xs text-neutral-600">
              <div className="p-3 bg-neutral-50 border border-neutral-200 rounded space-y-0.5">
                <strong className="text-neutral-950 block font-mono">1. Direct Corporate Titled Asset</strong>
                <span className="leading-relaxed block">High-performance engineering workstation (150,000 ETB) and ergonomic furniture (60,000 ETB) are invoiced and titled directly to Flexible Packaging Manufacturing PLC.</span>
              </div>

              <div className="p-3 bg-neutral-50 border border-neutral-200 rounded space-y-0.5">
                <strong className="text-neutral-950 block font-mono">2. Contractual Custody & Trust Agreement</strong>
                <span className="leading-relaxed block">Nexloop executes a formal fiduciary custody agreement permitting hardware usage strictly for the 6-7 month ERP engineering engagement.</span>
              </div>

              <div className="p-3 bg-neutral-50 border border-neutral-200 rounded space-y-0.5">
                <strong className="text-neutral-950 block font-mono">3. 100% Offset from Final Invoice</strong>
                <span className="leading-relaxed block">Upon full system commissioning and acceptance, the audited value of all procured assets is completely deducted from Nexloop&apos;s final milestone invoice.</span>
              </div>
            </div>
          </div>

          <div className="pt-2 border-t border-neutral-100 text-xs text-neutral-600 leading-relaxed">
            <strong className="text-neutral-950">Absolute Client Protection:</strong> In any unforeseen termination scenario, all physical computer hardware and office assets remain the permanent legal property of Flexible Packaging.
          </div>
        </div>

        {/* Right Table */}
        <div className="lg:col-span-7 bg-white border border-neutral-200 rounded p-4 flex flex-col justify-between space-y-3">
          <div className="flex flex-wrap items-center justify-between border-b border-neutral-100 pb-2 gap-1">
            <span className="text-xs font-mono font-bold text-neutral-900 uppercase">
              30% Advance Disbursement Breakdown
            </span>
            <span className="text-xs font-mono font-bold text-neutral-900">
              Total: {PRESENTATION_METADATA.advanceAmountETB.toLocaleString('en-US', { minimumFractionDigits: 2 })} ETB
            </span>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs min-w-[480px]">
              <thead>
                <tr className="border-b border-neutral-200 text-neutral-500 font-mono text-[11px]">
                  <th className="py-2 px-2.5">Expenditure Category</th>
                  <th className="py-2 px-2.5">Engineering Justification</th>
                  <th className="py-2 px-2.5 text-right">Amount (ETB)</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-neutral-100">
                {ADVANCE_BREAKDOWN.map((row, idx) => (
                  <tr key={idx} className="hover:bg-neutral-50">
                    <td className="py-2 px-2.5 font-bold text-neutral-900">
                      {row.item}
                      {row.item.includes('Hardware') || row.item.includes('Equipment') ? (
                        <span className="block text-[10px] text-neutral-600 font-mono font-semibold">
                          ★ Titled Directly to Client as Secured Fixed Asset
                        </span>
                      ) : null}
                    </td>
                    <td className="py-2 px-2.5 text-neutral-600 text-[11px] leading-relaxed">
                      {row.justification}
                    </td>
                    <td className="py-2 px-2.5 text-right font-mono tabular-nums text-neutral-900 whitespace-nowrap font-bold">
                      {row.costETB.toLocaleString('en-US', { minimumFractionDigits: 2 })}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="pt-2 border-t border-neutral-100 text-[11px] font-mono text-neutral-500 flex justify-between items-center">
            <span>Advance Percentage: 30%</span>
            <span>Client Financial Risk: 0% (Secured by Assets)</span>
          </div>
        </div>
      </div>
    </div>
  );
};
