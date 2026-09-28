import React, { useState } from 'react';
import { BUDGET_SUMMARY, DETAILED_BUDGET_ITEMS, PRESENTATION_METADATA } from '../../data/presentationData';

export const ProjectBudgetSlide: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [viewMode, setViewMode] = useState<'summary' | 'detailed'>('summary');

  const filteredDetailedItems = DETAILED_BUDGET_ITEMS.filter((item) => {
    const matchesCategory = activeCategory === 'all' || item.subtotalCategory === activeCategory;
    const matchesSearch = item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          item.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          item.itemNo.includes(searchQuery);
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="py-2 space-y-4">
      {/* Header & Mode Switch */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-3 sm:gap-4">
        <div>
          <div className="text-xs font-mono font-medium text-neutral-500 uppercase tracking-wider">
            13. Financial Investment & Budget Breakdown
          </div>
          <h2 className="text-xl sm:text-3xl font-bold tracking-tight text-neutral-950 font-display mt-1">
            Transparent Project Budget & Itemized Cost Schedule
          </h2>
          <p className="text-xs sm:text-sm text-neutral-600 mt-1 max-w-3xl leading-relaxed">
            Covers all 6 operational departments, system QA testing, legacy Excel data migration, and hands-on staff training with audited Net and 15% VAT allocations.
          </p>
        </div>

        {/* View Switcher */}
        <div className="flex items-center gap-1 p-0.5 bg-neutral-100 border border-neutral-200 rounded shrink-0 self-start sm:self-auto">
          <button
            onClick={() => setViewMode('summary')}
            className={`px-2.5 py-1 text-xs font-medium rounded transition-colors cursor-pointer ${
              viewMode === 'summary' ? 'bg-white text-neutral-950 shadow-xs font-bold' : 'text-neutral-600'
            }`}
          >
            Summary (9 Categories)
          </button>
          <button
            onClick={() => setViewMode('detailed')}
            className={`px-2.5 py-1 text-xs font-medium rounded transition-colors cursor-pointer ${
              viewMode === 'detailed' ? 'bg-white text-neutral-950 shadow-xs font-bold' : 'text-neutral-600'
            }`}
          >
            Detailed (38 Line Items)
          </button>
        </div>
      </div>

      {/* Main Budget Display */}
      {viewMode === 'summary' ? (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 sm:gap-5 items-start">
          {/* Table */}
          <div className="lg:col-span-8 bg-white border border-neutral-200 rounded p-3 sm:p-4 overflow-x-auto">
            <table className="w-full text-left text-xs min-w-[500px]">
              <thead>
                <tr className="border-b border-neutral-200 text-neutral-500 font-mono text-[11px]">
                  <th className="py-2 px-2.5">Code</th>
                  <th className="py-2 px-2.5">Scope / Module Category</th>
                  <th className="py-2 px-2.5 hidden sm:table-cell">Key Inclusions</th>
                  <th className="py-2 px-2.5 text-right">Subtotal (ETB)</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-neutral-100">
                {BUDGET_SUMMARY.map((row) => (
                  <tr key={row.code} className="hover:bg-neutral-50">
                    <td className="py-2 px-2.5 font-mono text-neutral-500 font-semibold">{row.code}</td>
                    <td className="py-2 px-2.5 font-medium text-neutral-900">{row.title}</td>
                    <td className="py-2 px-2.5 text-neutral-500 text-[11px] hidden sm:table-cell leading-snug">{row.highlight}</td>
                    <td className="py-2 px-2.5 text-right font-mono tabular-nums text-neutral-900 font-bold whitespace-nowrap">
                      {row.costETB.toLocaleString('en-US', { minimumFractionDigits: 2 })}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Grand Total Card */}
          <div className="lg:col-span-4 bg-white border border-neutral-200 rounded p-4 sm:p-5 space-y-4">
            <div className="border-b border-neutral-100 pb-2">
              <span className="text-xs font-mono font-bold text-neutral-900 uppercase">
                Total Investment Summary
              </span>
            </div>

            <div className="space-y-2 text-xs">
              <div className="flex justify-between items-center text-neutral-600">
                <span>Net Development Cost:</span>
                <span className="font-mono font-bold text-neutral-900">
                  {PRESENTATION_METADATA.netCostETB.toLocaleString('en-US', { minimumFractionDigits: 2 })} ETB
                </span>
              </div>

              <div className="flex justify-between items-center text-neutral-600">
                <span>Value Added Tax (15% VAT):</span>
                <span className="font-mono font-bold text-neutral-900">
                  {PRESENTATION_METADATA.vatETB.toLocaleString('en-US', { minimumFractionDigits: 2 })} ETB
                </span>
              </div>

              <div className="pt-2 border-t border-neutral-200 flex justify-between items-center text-neutral-950 font-bold text-sm">
                <span>Grand Total Project Value:</span>
                <span className="font-mono text-base">
                  {PRESENTATION_METADATA.grandTotalETB.toLocaleString('en-US', { minimumFractionDigits: 2 })} ETB
                </span>
              </div>
            </div>

            <div className="p-3 bg-neutral-50 border border-neutral-200 rounded space-y-1.5 text-xs">
              <div className="font-mono font-bold text-neutral-900 text-[11px] uppercase">
                30% Advance Payment
              </div>
              <div className="text-neutral-900 font-bold font-mono text-sm">
                {PRESENTATION_METADATA.advanceAmountETB.toLocaleString('en-US', { minimumFractionDigits: 2 })} ETB
              </div>
              <p className="text-[11px] text-neutral-600 leading-relaxed">
                Workstation computers and office equipment procured under this disbursement are registered directly in Flexible Packaging&apos;s corporate name as collateral.
              </p>
            </div>
          </div>
        </div>
      ) : (
        /* Detailed View: Filter and 38 Items */
        <div className="bg-white border border-neutral-200 rounded p-4 space-y-3">
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3">
            {/* Search */}
            <input
              type="text"
              placeholder="Search by code or keyword..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="text-xs px-3 py-1.5 border border-neutral-300 rounded focus:outline-none focus:border-neutral-900 w-full sm:w-64"
            />

            {/* Category Filter */}
            <div className="flex flex-wrap items-center gap-1">
              <button
                onClick={() => setActiveCategory('all')}
                className={`px-2 py-0.5 text-[11px] font-mono rounded border transition-colors cursor-pointer ${
                  activeCategory === 'all'
                    ? 'bg-neutral-900 text-white border-neutral-900 font-bold'
                    : 'bg-neutral-50 text-neutral-700 border-neutral-200 hover:bg-neutral-100'
                }`}
              >
                All
              </button>
              {BUDGET_SUMMARY.map((c) => (
                <button
                  key={c.code}
                  onClick={() => setActiveCategory(c.code)}
                  className={`px-2 py-0.5 text-[11px] font-mono rounded border transition-colors cursor-pointer ${
                    activeCategory === c.code
                      ? 'bg-neutral-900 text-white border-neutral-900 font-bold'
                      : 'bg-neutral-50 text-neutral-700 border-neutral-200 hover:bg-neutral-100'
                  }`}
                >
                  {c.code}
                </button>
              ))}
            </div>
          </div>

          {/* Detailed Table */}
          <div className="overflow-x-auto max-h-[350px] overflow-y-auto">
            <table className="w-full text-left text-xs min-w-[550px]">
              <thead className="sticky top-0 bg-white border-b border-neutral-200 text-neutral-500 font-mono text-[11px]">
                <tr>
                  <th className="py-2 px-2.5">Item No.</th>
                  <th className="py-2 px-2.5">Deliverable Title</th>
                  <th className="py-2 px-2.5">Engineering Description</th>
                  <th className="py-2 px-2.5 text-right">Price (ETB)</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-neutral-100">
                {filteredDetailedItems.map((item) => (
                  <tr key={item.itemNo} className="hover:bg-neutral-50">
                    <td className="py-2 px-2.5 font-mono text-neutral-500 font-semibold">{item.itemNo}</td>
                    <td className="py-2 px-2.5 font-medium text-neutral-900">{item.title}</td>
                    <td className="py-2 px-2.5 text-neutral-600 text-[11px] leading-relaxed">{item.description}</td>
                    <td className="py-2 px-2.5 text-right font-mono tabular-nums text-neutral-900 font-bold whitespace-nowrap">
                      {item.priceETB.toLocaleString('en-US', { minimumFractionDigits: 2 })}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  );
};
