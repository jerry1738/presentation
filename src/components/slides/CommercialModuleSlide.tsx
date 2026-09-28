import React from 'react';
import { CORE_MODULES } from '../../data/presentationData';

export const CommercialModuleSlide: React.FC = () => {
  const moduleData = CORE_MODULES[3];

  return (
    <div className="py-2 space-y-4 sm:space-y-5">
      {/* Header */}
      <div>
        <div className="text-xs font-mono font-medium text-neutral-500 uppercase tracking-wider">
          08. ERP Scope · Module 4
        </div>
        <h2 className="text-xl sm:text-3xl font-bold tracking-tight text-neutral-950 font-display mt-1">
          Order-to-Cash, Supplier Governance & 4-Tier Storage Topology
        </h2>
        <p className="text-xs sm:text-sm text-neutral-600 mt-1 max-w-3xl leading-relaxed">
          Bridges packaging customer technical specifications, procurement pipelines, and strict physical warehouse segmentation (RM-01, PM-01, FG-01, SCR-01) with FIFO/FEFO controls.
        </p>
      </div>

      {/* Grid: 4 Pillars & Storage Topology */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 sm:gap-5 items-stretch">
        {/* Left: 4 pillars */}
        <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-3.5">
          <div className="bg-white border border-neutral-200 rounded p-4 space-y-1.5">
            <span className="text-xs font-mono text-neutral-500 font-bold">01 / Sales Administration</span>
            <h3 className="text-sm font-bold text-neutral-900 font-display">Order-to-Cash (O2C) Specs</h3>
            <p className="text-xs text-neutral-600 leading-relaxed">
              Captures film thickness (microns/GSM), cylinder repeat width, Pantone spot colors, print artwork proofs, MOQ, and customer credit exposure thresholds.
            </p>
          </div>

          <div className="bg-white border border-neutral-200 rounded p-4 space-y-1.5">
            <span className="text-xs font-mono text-neutral-500 font-bold">02 / Procurement & Vendors</span>
            <h3 className="text-sm font-bold text-neutral-900 font-display">Procure-to-Pay (P2P)</h3>
            <p className="text-xs text-neutral-600 leading-relaxed">
              Approved vendor master for LDPE, BOPP, flexo inks, and spare parts with verified TIN numbers, payment terms, historical lead times, and quality ratings.
            </p>
          </div>

          <div className="bg-white border border-neutral-200 rounded p-4 space-y-1.5">
            <span className="text-xs font-mono text-neutral-500 font-bold">03 / Inventory Discipline</span>
            <h3 className="text-sm font-bold text-neutral-900 font-display">FIFO/FEFO & Roll Lot Tracking</h3>
            <p className="text-xs text-neutral-600 leading-relaxed">
              Automated reorder point warnings, safety stock buffers, unique lot/roll serial tracking, and shelf-life expiration alerts for specialized inks and adhesives.
            </p>
          </div>

          <div className="bg-white border border-neutral-200 rounded p-4 space-y-1.5">
            <span className="text-xs font-mono text-neutral-500 font-bold">04 / Commodity Intelligence</span>
            <h3 className="text-sm font-bold text-neutral-900 font-display">Resin Market Tracking</h3>
            <p className="text-xs text-neutral-600 leading-relaxed">
              Monitors international polymer index fluctuations, foreign exchange shifts, customs duties, and landed freight costs to protect packaging margins.
            </p>
          </div>
        </div>

        {/* Right Storage Topology */}
        <div className="lg:col-span-4 bg-white border border-neutral-200 rounded p-4 flex flex-col justify-between space-y-3">
          <div className="flex items-center justify-between border-b border-neutral-100 pb-2">
            <span className="text-xs font-mono font-bold text-neutral-900 uppercase">
              Standardized 4-Tier Storage Topology
            </span>
            <span className="text-xs font-mono text-neutral-500">Akaki Kality</span>
          </div>

          <div className="space-y-2">
            <div className="p-2 bg-neutral-50 border border-neutral-200 rounded flex justify-between items-center text-xs">
              <div>
                <span className="font-mono font-bold text-neutral-900 block">RM-01</span>
                <span className="text-neutral-700 font-medium">Raw Materials Warehouse</span>
              </div>
              <span className="text-[11px] text-neutral-500 font-mono">Polymers & Inks</span>
            </div>

            <div className="p-2 bg-neutral-50 border border-neutral-200 rounded flex justify-between items-center text-xs">
              <div>
                <span className="font-mono font-bold text-neutral-900 block">PM-01</span>
                <span className="text-neutral-700 font-medium">Packaging Stores</span>
              </div>
              <span className="text-[11px] text-neutral-500 font-mono">Cores & Cartons</span>
            </div>

            <div className="p-2 bg-neutral-50 border border-neutral-200 rounded flex justify-between items-center text-xs">
              <div>
                <span className="font-mono font-bold text-neutral-900 block">FG-01</span>
                <span className="text-neutral-700 font-medium">Finished Goods Warehouse</span>
              </div>
              <span className="text-[11px] text-neutral-500 font-mono">Pouches & Rolls</span>
            </div>

            <div className="p-2 bg-neutral-50 border border-neutral-200 rounded flex justify-between items-center text-xs">
              <div>
                <span className="font-mono font-bold text-neutral-900 block">SCR-01</span>
                <span className="text-neutral-700 font-medium">Floor Scrap & Regrind Node</span>
              </div>
              <span className="text-[11px] text-neutral-500 font-mono">Yield Variance</span>
            </div>
          </div>

          <div className="pt-2 border-t border-neutral-100 text-[11px] text-neutral-500 font-mono">
            Unified Inter-Warehouse Movement Ledger
          </div>
        </div>
      </div>

      {/* Footer Subtotal */}
      <div className="bg-white border border-neutral-200 rounded p-3.5 flex flex-wrap items-center justify-between gap-2 text-xs text-neutral-700">
        <div>
          <strong className="text-neutral-900 font-bold">Inter-Departmental Flow:</strong> Sales, procurement, storage, and finance are linked in a single digital custody chain.
        </div>
        <div className="font-mono text-neutral-900 font-bold bg-neutral-100 px-2.5 py-1 rounded border border-neutral-200">
          Module Budget: 110,000.00 ETB
        </div>
      </div>
    </div>
  );
};
